import React from "react";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {image,isbn13,price,subtitle,title} = book
  return (
    <Link to={`/books/${isbn13}`}>
    <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
      <img
        class="object-cover w-full h-30 md:h-64 xl:h-80"
        src={image}
        alt=""
      />
      <div class="absolute flex flex-col inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
        <p class="mb-4 text-lg font-bold text-gray-100">
          {title}
        </p>
        <br />
        <p class="text-sm tracking-wide text-gray-300">
          {subtitle}
        </p>
        <br />
        <p class="text-sm mt-auto tracking-wide text-gray-300">Price: ${price}</p>
      </div>
    </div>
    </Link>
  );
};

export default Book;
