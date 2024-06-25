import React from "react";

const Pricing = () => {
  return (
    <div>
      <section class="py-24 pt-12 bg-zinc-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="font-manrope text-5xl text-center font-bold text-zinc-200 mb-4">
              Choose your plan{" "}
            </h2>
            <p class="text-zinc-400 text-center leading-6 mb-9">
              7 Days free trial. No credit card required.
            </p>
            {/* <!--Switch--> */}
            <div class="flex justify-center items-center">
              <label class="min-w-[3.5rem] text-xl relative text-zinc-400 mr-4 font-medium">
                Bill Monthly
              </label>
              <input
                type="checkbox"
                id="basic-with-description"
                class="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200  focus:border-blue-600  appearance-none 

                            before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
              />
              <label class="relative min-w-[3.5rem] font-medium text-xl text-zinc-400 ml-4 ">
                Bill Yearly
              </label>
            </div>
            {/* <!--Switch End--> */}
          </div>
          {/* <!--Grid--> */}
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
            {/* <!--Pricing Card--> */}
            <div class="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
              <h3 class="font-manrope text-2xl font-bold mb-3">Free</h3>
              <div class="flex items-center mb-6">
                <span class="font-manrope mr-2 text-6xl font-semibold">$0</span>
                <span class="text-xl text-gray-500 ">/ month</span>
              </div>
              {/* <!--List--> */}
              <ul class="mb-12 space-y-6 text-left text-lg text-gray-500">
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Assistance with writing, problem solving and more</span>
                </li>
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Limited Tokens</span>
                </li>
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Fewer Models</span>
                </li>
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Limited Features</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                class="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700"
              >
                Get Started
              </a>
              {/* <!--List End--> */}
            </div>
            {/* <!--Pricing Card--> */}
            <div class="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-100 ">
              <div class="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
                MOST POPULAR
              </div>
              <div class="p-6 xl:py-9 xl:px-12">
                <h3 class="font-manrope text-2xl font-bold mb-3">Advanced</h3>
                <div class="flex items-center mb-6">
                  <span class="font-manrope mr-2 text-6xl font-semibold text-indigo-600">
                    $20
                  </span>
                  <span class="text-xl text-gray-500 ">/ month</span>
                </div>
                {/* <!--List--> */}
                <ul class="mb-12 space-y-6 text-left text-lg ">
                  <li class="flex items-center space-x-4">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Early access to new features</span>
                  </li>
                  <li class="flex items-center space-x-4">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Access to advanced data analysis and web browsing</span>
                  </li>
                  <li class="flex items-center space-x-4">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Groq image generation</span>
                  </li>
                  <li class="flex items-center space-x-4">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Create and use custom Models</span>
                  </li>
                  <li class="flex items-center space-x-4">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>File Uploads & Audio Support</span>
                  </li>
                </ul>
                <a
                  href="javascript:;"
                  class="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit block mx-auto hover:bg-indigo-700"
                >
                  Purchase Plan
                </a>
                {/* <!--List End--> */}
              </div>
            </div>
            {/* <!--Pricing Card--> */}
            <div class="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
              <h3 class="font-manrope text-2xl font-bold mb-3">Team</h3>
              <div class="flex items-center mb-6">
                <span class="font-manrope mr-2 text-6xl font-semibold">
                  $25
                </span>
                <span class="text-xl text-gray-500 ">/ month</span>
              </div>
              {/* <!--List--> */}
              <ul class="mb-12 space-y-6 text-left text-lg text-gray-500">
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Higher limits for all models</span>
                </li>
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Create and share models with your workspace</span>
                </li>
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Admin console for workspace management</span>
                </li>
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Team data excluded from training by default.</span>
                </li>
                <li class="flex items-center space-x-4">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Higher support for Audio & Media files</span>
                </li>
              </ul>
              <a
                href="javascript:;"
                class="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700"
              >
                Purchase Plan
              </a>
              {/* <!--List End--> */}
            </div>
          </div>
          {/* <!--Grid End--> */}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
