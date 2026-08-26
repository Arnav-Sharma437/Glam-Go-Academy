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

  // Generate unique SEO title and description based only on the existing course data
  // Avoid certifiedTitle or any prescription-only medicine names in public metadata.
  return {
    title: `${course.publicName} Training | Glam and Go London`,
    description: course.description,
    alternates: {
      canonical: `https://academy.glamandgolondon.com/courses/${course.slug}`
    }
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  return <CourseDetailClient params={params} searchParams={searchParams} />;
}
