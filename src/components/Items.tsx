import React from "react";

interface ItemsProps {
  items: Array<string>;
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-around gap-2 sm:gap-3 md:gap-4 my-6 sm:my-8 md:my-10 text-sm sm:text-base md:text-lg lg:text-2xl fade-in-scroll left px-2">
      {items.map((item: string, index) => (
        <div
          key={index}
          className={`flex-1 min-w-0 max-w-[calc(50%-0.5rem)] sm:max-w-[calc(33.333%-0.75rem)] md:max-w-[calc(25%-0.75rem)] lg:max-w-[calc(20%-0.75rem)] text-center px-1 sm:px-2 ${
            index % 2 === 0 ? "text-foreground" : "text-[#13888C]"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Items;
