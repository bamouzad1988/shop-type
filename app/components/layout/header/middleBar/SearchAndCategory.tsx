'use client'
import Category from "@/app/components/headerBars/middleBar/Category";
import Search from "@/app/components/headerBars/middleBar/Search";

function SearchAndCategory() {
  return (
    <div className="flex">
      <Search />
      <Category />
    </div>
  );
}

export default SearchAndCategory;
