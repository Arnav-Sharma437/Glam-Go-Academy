"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  name: string;
  desc: string;
}

interface CourseFilterDropdownProps {
  categories: Category[];
  selectedCategory: string;
}

export default function CourseFilterDropdown({ categories, selectedCategory }: CourseFilterDropdownProps) {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeCategoryDetails = categories.find(cat => cat.id === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    setIsDropdownOpen(false);
    if (categoryId === "all") {
      router.push("/courses");
    } else {
      router.push(`/courses?category=${categoryId}`);
    }
  };

  return (
    <div className="max-w-xs mx-auto mb-16 relative">
      <label className="block text-[10px] uppercase tracking-wider text-muted font-sans font-bold mb-2 text-center">
        Filter by Category
      </label>
      
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full flex items-center justify-between p-3.5 bg-card-bg border border-muted-light/60 hover:border-accent transition-all duration-300 font-sans text-xs font-semibold text-text rounded-lg cursor-pointer shadow-sm"
      >
        <span>{activeCategoryDetails?.name}</span>
        <svg
          className={`w-4 h-4 text-muted transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Options */}
      <div
        className={`absolute left-0 right-0 mt-2 bg-card-bg border border-muted-light/60 shadow-xl rounded-xl py-2.5 z-40 transition-all duration-300 ${
          isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`w-full text-left px-5 py-2.5 text-xs transition-colors duration-200 font-sans font-semibold cursor-pointer ${
              cat.id === selectedCategory
                ? "text-accent bg-muted-light/35"
                : "text-text/80 hover:text-accent hover:bg-muted-light/20"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
