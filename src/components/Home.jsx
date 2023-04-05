import React from "react";
import Reader from "../assets/reader.json"
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div class="min-h-[calc(100vh-136px)]">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col items-center justify-between lg:flex-row">
        <div class="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div class="max-w-xl mb-6 lg:mt-8">
            <div>
              <p class="badge">On Sale!</p>
            </div>
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              A reader lives a <br class="hidden md:block" /> thousand lives{" "}
              <span class="inline-block text-blue-400">before he dies</span>
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Books are a uniquely portable magic. Books serve to show a man
              that those original thoughts of his aren’t very new after all. The
              man who does not read good books is no better than the man who
              can’t.
            </p>
          </div>
          <div class="flex flex-col items-center md:flex-row">
            <Link class="btn md:w-auto md:mr-4" to="/books">
              <div class="inline-flex items-center justify-center w-full h-full">
                <p class="mr-3">Visit Store</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-5 text-gray-100"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                </svg>
              </div>
            </Link>
            <a
              class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
        <div class="relative lg:w-1/2 ">
          <div class="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <div>
            <Lottie animationData={Reader} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
