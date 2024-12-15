import React from "react";

export default function Card({ item }) {
  return (
    <>
      <div className="bg-white max-w-screen-2xl mt-10 container mx-auto mb-3 px-4 border-purple-700 rounded-xl dark:bg-slate-900 rounded-sm">
        <div className="mx-auto max-w-2xl hover:scale-105 duration-200 border-2 dark:bg-slate-900 dark:text-white dark:border rounded-2xl">
          <div className="text-sm md:text-xl">
            <img
              src={item.image}
              className="aspect-square w-full rounded-lg bg-gray-200 object-fit: fill; group-hover:opacity-75 xl:aspect-[8/8]"
            />
            <h3 className="mt-4 px-3 text-xl mb-4 text-gray-700 dark:text-white">{item.name}</h3>
            
            <div className="card-actions mt-2 mb-4 px-3 md:mt-1 justify-between">
              <div className=" mt-1 text-xl font-medium text-gray-900 dark:text-white">₹{item.Price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[1px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
