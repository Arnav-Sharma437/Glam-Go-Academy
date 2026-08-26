import type { Metadata } from "next";
import { COURSES } from "@/data/courses";
import CourseDetailClient from "./CourseDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ success?: string; session_id?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  
  if (!course) {
    return {
      title: "Course Not Found | Glam and Go London",
      description: "The beauty training course program you requested could not be found."
    };
  }

  const title = `${course.publicName} Training | Glam and Go London`;
  const description = course.description;
  const canonicalUrl = `https://academy.glamandgolondon.com/courses/${course.slug}`;
  const ogImage = course.image.startsWith("http")
    ? course.image
    : `https://academy.glamandgolondon.com${course.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonicalUrl,
      title,
      description,
      siteName: "Glam and Go London",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: course.publicName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return <CourseDetailClient params={params} searchParams={searchParams} />;
  }

  // BreadcrumbList JSON-LD Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://academy.glamandgolondon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://academy.glamandgolondon.com/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": course.publicName,
        "item": `https://academy.glamandgolondon.com/courses/${course.slug}`
      }
    ]
  };

  // Course JSON-LD Structured Data using only verified details
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.publicName,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Glam and Go London",
      "url": "https://academy.glamandgolondon.com"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "In Person",
      "location": {
        "@type": "Place",
        "name": "Glam & Go London Soho Studio",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Soho Studio",
          "addressLocality": "London",
          "addressCountry": "GB"
        }
      }
    },
    ...(course.price > 0 ? {
      "offers": {
        "@type": "Offer",
        "price": course.price,
        "priceCurrency": "GBP",
        "valueAddedTaxIncluded": true
      }
    } : {})
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <CourseDetailClient params={params} searchParams={searchParams} />
    </>
  );
}
