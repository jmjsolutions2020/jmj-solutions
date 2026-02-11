interface CategoryNavBarProps {
  categories: { id: string; name: string }[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryNavigationBar({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryNavBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center md:gap-3 gap-1.5 rounded-full bg-white px-2 py-2 shadow-sm">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-all ${
            activeCategory === category.id
              ? "bg-primary text-white shadow-md"
              : "text-stone-700 hover:bg-stone-100"
          }`}
          aria-current={activeCategory === category.id ? "page" : undefined}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
