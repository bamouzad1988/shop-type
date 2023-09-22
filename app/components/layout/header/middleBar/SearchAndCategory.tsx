'use client'
import Category from "@/app/components/headerBars/middleBar/Category";
import Search from "@/app/components/headerBars/middleBar/Search";
const listItems = ["پوشاک", "کیف", "کفش", "سایر"];
function SearchAndCategory() {
  return (
    <div className="flex">
      <Search />
      <Category listItems={listItems}  title="دسته بندی"/>
    </div>
  );
}

export default SearchAndCategory;
