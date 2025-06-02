"use client";

import React from "react";

type Item = {
  name?: string;
};

type ItemListProps = {
  items: Item[];
};

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-200"
        >
          <span>{item.name ? item.name : `Item ${index + 1}`}</span>
          <div />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
