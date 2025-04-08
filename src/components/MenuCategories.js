import ItemList from "./ItemList";
import { use, useState } from "react";


const MenuCategories = ({categoryData,showItems, setShowIndex}) => {
//   const { categoryData } = props;
//   console.log(categoryData)
  const { title } = categoryData?.card?.card;
  const [selfShow, setSelfShow] = useState(false);
  let count = 0;
  let subcount = 0;

  const handleClick = () => {
    setShowIndex();
    setSelfShow(!selfShow)
  };

  const [openCategories, setOpenCategories] = useState({});

  const handleClickSub = (categoryTitle) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle], // Toggle only the clicked category , updating prev
    }));
  };
  return (
    <div>
      <div className=" my-4 bg-gray-300 w-6/12 m-auto rounded-md gap-1 p-3">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-2xl">
            {title}{" "}
            {categoryData?.card?.card?.itemCards
              ? "(" +
                (count = (categoryData?.card?.card?.itemCards).length) +
                ")"
              : ""}
          </span>
          <span className="cursor-pointer"> ⏷ </span>
        </div>
        <div>
          {count > 0
            ? selfShow && showItems && (
                <ItemList
                  key={categoryData.card.card.itemCards.categoryTitle}
                  items={categoryData.card.card.itemCards}
                />
              )
            : null}
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-start items-start my-2 w-6/12 m-auto rounded-md gap-1 p-2 list-none">
          {
            //subcategories if any like sides -> cool drinks, desserts, hot drinks
            categoryData?.card?.card?.categories
              ? (categoryData?.card?.card?.categories).map((subcategory) => {
                const isOpen = openCategories[subcategory.title] || false;
                  return (
                    <div
                      key={subcategory.title || index}
                      className="text-left"
                      onClick={() => handleClickSub(subcategory.title)}
                    >
                      <div className="text-2xl cursor-pointer">
                        {subcategory.title}
                        {subcategory?.itemCards
                          ? "(" +
                            (subcount = (subcategory?.itemCards).length) +
                            ")"
                          : ""}
                        <span className="cursor-pointer"> ⏷ </span>
                      </div>
                      <div>
                        {subcount > 0
                          ? isOpen && (
                              <ItemList
                                key={subcategory.index}
                                items={subcategory.itemCards}
                              />
                            )
                          : null}
                      </div>
                    </div>
                  );
                })
              : null
          }
        </div>
      </div>
    </div>
  );
};
export default MenuCategories;
