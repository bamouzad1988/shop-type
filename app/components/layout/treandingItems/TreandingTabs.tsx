"use client";
import { useState } from "react";
import TreandingTab from "../../treandingItems/TreandingTab";

function TreandingTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="justify-center my-7 flex">
      <TreandingTab
        title="مردانه"
        isActive={activeTab === 0}
        onClick={() => handleTabClick(0)}
      />
      <TreandingTab
        title="موبایل"
        isActive={activeTab === 1}
        onClick={() => handleTabClick(1)}
      />
      <TreandingTab
        title="کیف"
        isActive={activeTab === 2}
        onClick={() => handleTabClick(2)}
      />
      <TreandingTab
        title="لپ تاپ"
        isActive={activeTab === 3}
        onClick={() => handleTabClick(3)}
      />
      <TreandingTab
        title="مانیتور"
        isActive={activeTab === 4}
        onClick={() => handleTabClick(4)}
      />
      <TreandingTab
        title="مودم"
        isActive={activeTab === 5}
        onClick={() => handleTabClick(5)}
      />
    </div>
  );
}

export default TreandingTabs;
