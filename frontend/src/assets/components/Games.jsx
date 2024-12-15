import React from "react";
import list from "../../list.json";
import Card from "./Card";


export default function Games() {
  const FilterData = list.filter((data) => data.Category === "Paid");
  
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="text-xl font-semibold pb-2">Most Purchased Game</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          repudiandae ducimus ipsam repellendus modi harum sit eius ad
          consequatur! Sequi.
        </p>
      </div>

      <div className="flex  md:max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6 mb-6 gap-4">
        {FilterData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

     
    </>
  );
}
