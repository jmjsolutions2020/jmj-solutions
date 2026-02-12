"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { CategoryNavigationBar } from "@/components/ui/CategoryNavigationBar";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { SHOP_CATEGORIES } from "@/data/shopCategories";
import { ArrowRightCircleIcon } from "lucide-react";

export function ShopByCategory() {
  const [activeCategory, setActiveCategory] = useState(SHOP_CATEGORIES[0].id);

  const currentCategory = SHOP_CATEGORIES.find(
    (cat) => cat.id === activeCategory
  );

  if (!currentCategory) return null;

  return (
    <Section
      id="categories"
      title="Shop By Category"
      subtitle="Choose what you want to personalise - we take care of the rest."
      className="overflow-x-hidden"
    >

      {/* Horizontal scrolling gallery */}
      <div className="relative">
        <div className="flex gap-4 pb-4 px-4 md:-mx-8 md:px-8 mt-20 max-w-7xl mx-auto overflow-x-auto" style={{scrollbarWidth: 'none'}}>
        <div>
          {/* Category card for the current category */}
          <CategoryCard
            key={currentCategory.id}
            name={currentCategory.name}
            description={currentCategory.description}
            startingPrice={currentCategory.startingPrice}
            image={currentCategory.image}
            isFirstCard={true}
          />
        </div>
        <div className="relative flex gap-4 bg-stone-900 px-4 py-4 rounded-4xl items-center ">
          {currentCategory.items.map((item) => (
          <CategoryCard
            key={item.id}
            name={item.name}
            description={item.description}
            startingPrice={item.startingPrice}
            image={item.image}
          />
        ))}
        </div>
      </div>
      {/* Right Arrow to indicate more items */}
      <div className="absolute right-0 top-0 bottom-0 flex justify-center items-center hover:animate-pulse">
        <ArrowRightCircleIcon className="w-12 h-12 bg-white text-stone-900 shadow-lg top-1/2 -translate-y-1/2 rounded-full p-2" />
      </div>

      <div className="absolute bg-stone-900 w-10 sm:w-24 h-100 -right-8 top-0 -z-1 rounded-2xl"></div>
      </div>

      {/* Category Navigation Bar */}
      <div className="flex justify-center my-8">
        <CategoryNavigationBar
          categories={SHOP_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
    </Section>
  );
}
