'use client'
import Category from "@/app/components/headerBars/middleBar/Category";
import Search from "@/app/components/headerBars/middleBar/Search";
const listItems = ["کالای دیجیتال", "پوشاک", "لوازم منزل", "کیف", "کفش"];
function SearchAndCategory() {
  return (
    <div className="flex">
      <Search />
      <Category listItems={listItems}  title="دسته بندی"/>
    </div>
  );
}

export default SearchAndCategory;
