"use client";

import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Example() {
  return (
    <div className="group:hover .group-hover:bg-white py-24 xl:py-32">
      <div className="mx-auto xl:max-w-7xl px-6 xl:px-8">
        <div className="mx-auto xl:max-w-4xl xl:text-center">
          <h2 className="text-base lg:font-semibold sm:leading-7 group:hover .group-hover:text-indigo-600">Pricing</h2>
          <p className="lg:mt-2 text-4xl font-bold sm:tracking-tight group:hover .group-hover:text-gray-900 lg:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto lg:mt-6 xl:max-w-2xl text-lg sm:leading-8 group:hover .group-hover:text-gray-600 xl:text-center">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div className="lg:mt-20 flow-root">
          <div className="isolate lg:-mt-16 xl:grid lg:max-w-sm xl:grid-cols-1 lg:gap-y-16 acc acf xl:mx-auto lg:-mx-8 xl:mt-0 xl:max-w-none xl:grid-cols-3 dao daq xl:-mx-4">
            <div className="xl:pt-16 xl:px-8 lg:pt-0 xl:px-14">
              <h3 id="tier-basic" className="text-base lg:font-semibold sm:leading-7 group:hover .group-hover:text-gray-900">
                Basic
              </h3>
              <p className="lg:mt-6 xl:flex md:items-baseline gap-x-1">
                <span className="text-5xl font-bold sm:tracking-tight group:hover .group-hover:text-gray-900">$15</span>
                <span className="text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-gray-600">/month</span>
              </p>
              <p className="xl:mt-3 text-sm lg:leading-6 group:hover .group-hover:text-gray-500">$12 per month if paid annually</p>
              <a
                href="#"
                aria-describedby="tier-basic"
                className="xl:mt-10 \32xl:block lg:rounded-md hover:bg-indigo-600:hover px-3 py-2 xl:text-center text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-white hover:shadow-sm:hover bir box boy bpa bph"
              >
                Buy plan
              </a>
              <p className="xl:mt-10 text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-gray-900">
                Everything necessary to get started.
              </p>
              <ul role="list" className="lg:mt-6 abv text-sm lg:leading-6 group:hover .group-hover:text-gray-600">
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  5 products
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Up to 1,000 subscribers
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Basic analytics
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  48-hour support response time
                </li>
              </ul>
            </div>
            <div className="xl:pt-16 xl:px-8 lg:pt-0 xl:px-14">
              <h3 id="tier-essential" className="text-base lg:font-semibold sm:leading-7 group:hover .group-hover:text-gray-900">
                Essential
              </h3>
              <p className="lg:mt-6 xl:flex md:items-baseline gap-x-1">
                <span className="text-5xl font-bold sm:tracking-tight group:hover .group-hover:text-gray-900">$30</span>
                <span className="text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-gray-600">/month</span>
              </p>
              <p className="xl:mt-3 text-sm lg:leading-6 group:hover .group-hover:text-gray-500">$24 per month if paid annually</p>
              <a
                href="#"
                aria-describedby="tier-essential"
                className="xl:mt-10 \32xl:block lg:rounded-md hover:bg-indigo-600:hover px-3 py-2 xl:text-center text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-white hover:shadow-sm:hover bir box boy bpa bph"
              >
                Buy plan
              </a>
              <p className="xl:mt-10 text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-gray-900">
                Everything in Basic, plus essential tools for growing your
                business.
              </p>
              <ul role="list" className="lg:mt-6 abv text-sm lg:leading-6 group:hover .group-hover:text-gray-600">
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  25 products
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Up to 10,000 subscribers
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advanced analytics
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  24-hour support response time
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Marketing automations
                </li>
              </ul>
            </div>
            <div className="xl:pt-16 xl:px-8 lg:pt-0 xl:px-14">
              <h3 id="tier-growth" className="text-base lg:font-semibold sm:leading-7 group:hover .group-hover:text-gray-900">
                Growth
              </h3>
              <p className="lg:mt-6 xl:flex md:items-baseline gap-x-1">
                <span className="text-5xl font-bold sm:tracking-tight group:hover .group-hover:text-gray-900">$60</span>
                <span className="text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-gray-600">/month</span>
              </p>
              <p className="xl:mt-3 text-sm lg:leading-6 group:hover .group-hover:text-gray-500">$48 per month if paid annually</p>
              <a
                href="#"
                aria-describedby="tier-growth"
                className="xl:mt-10 \32xl:block lg:rounded-md hover:bg-indigo-600:hover px-3 py-2 xl:text-center text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-white hover:shadow-sm:hover bir box boy bpa bph"
              >
                Buy plan
              </a>
              <p className="xl:mt-10 text-sm lg:font-semibold lg:leading-6 group:hover .group-hover:text-gray-900">
                Everything in Essential, plus collaboration tools and deeper
                insights.
              </p>
              <ul role="list" className="lg:mt-6 abv text-sm lg:leading-6 group:hover .group-hover:text-gray-600">
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Unlimited products
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Unlimited subscribers
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advanced analytics
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  1-hour, dedicated support response time
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Marketing automations
                </li>
                <li className="xl:flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="lg:h-6 w-5 xl:flex-none group:hover .group-hover:text-indigo-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Custom reporting tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
