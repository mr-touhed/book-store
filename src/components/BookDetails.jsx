import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  
    const book = useLoaderData();
    const [sortTxt, setSortTxt] = useState(true)
    const {desc,authors,image,price,publisher,title,url} = book;
    const sortText = desc.slice(1,100);
    console.log(book);
  return (
    <div class="my-container">
      <div class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div class=" lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            class="object-cover w-full  lg:h-full"
          />
        </div>
        <div class=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p class="badge">Brand new</p>
          </div>
          <h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {title}
          </h5>
          <p class=" text-gray-900">Authors: {authors}</p>
          <p class=" text-gray-900">Publisher: {publisher}</p>
          <p class=" text-gray-900">Year: 2022</p>
          <p class="mb-5 text-gray-900">Rating: 4</p>
          <p class="mb-5 text-gray-500">
            {/* {sortTxt ? sortText + "..." +   : desc + <span class="cursor-pointer text-blue-600">Read Less</span>} */}
            
            {
                sortTxt ?  <>{sortText} ... <span onClick={() => setSortTxt(!sortTxt)} class="cursor-pointer text-blue-600">Read More</span></> : <>{desc} <span onClick={() => setSortTxt(!sortTxt)} class="cursor-pointer text-blue-600">Read Less</span></>
            }
           
          </p>
          <div class="flex gap-5 items-center">
            <a
              href={url}
              target="_blank"
              class="btn"
            >
              Buy Now
            </a>
            <p class="items-center font-extrabold text-gray-600 ">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
