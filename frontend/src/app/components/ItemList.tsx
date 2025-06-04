"use client";

import React from "react";

type Item = {
  name?: string;
};

type ItemListProps = {
  items: Item[];
  onItemClick: (item: Item) => void;
};

const ItemList = ({ items, onItemClick }: ItemListProps) => {
  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-200"
        >
          <button onClick={() => onItemClick(item)}>
            <span>{item.name ? item.name : `Item ${index + 1}`}</span>
          </button>
          <div />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
