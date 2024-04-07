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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of all sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div className="mt-16 flex justify-center">
          <div
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
            id="headlessui-radiogroup-4"
            role="radiogroup"
            aria-labelledby="headlessui-label-1"
          >
            <label className="sr-only" id="headlessui-label-1" role="none">
              Payment frequency
            </label>
            <div
              className="bg-indigo-600 text-white cursor-pointer rounded-full px-2\.5 py-1"
              id="headlessui-radiogroup-option-2"
              role="radio"
              aria-checked="true"
              tabindex="0"
              data-headlessui-state="checked"
            >
              <span>Monthly</span>
            </div>
            <div
              className="text-gray-500 cursor-pointer rounded-full px-2\.5 py-1"
              id="headlessui-radiogroup-option-3"
              role="radio"
              aria-checked="false"
              tabindex="-1"
              data-headlessui-state=""
            >
              <span>Annually</span>
            </div>
          </div>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 sm:max-w-none grid-cols-3">
          <div className="ring-gray-200 rounded-3xl p-8 ring-1 xl:p-10">
            <h3 id="tier-freelancer" className="text-gray-900 text-lg font-semibold leading-8">
              Freelancer
            </h3>
            <p className="text-gray-600 mt-4 text-sm leading-6">
              The essentials to provide your best work for clients.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-gray-900 text-4xl font-bold tracking-tight">$15</span>
              <span className="text-gray-600 text-sm font-semibold leading-6">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-freelancer"
              className="bg-indigo-600 text-white shadow-sm bir bph mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 box boy bpa"
            >
              Buy plan
            </a>
            <ul role="list" className="text-gray-600 mt-8 abv text-sm leading-6 lg:mt-10">
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                5 products
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Up to 1,000 subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Basic analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                48-hour support response time
              </li>
            </ul>
          </div>
          <div className="ring-gray-200 rounded-3xl p-8 ring-1 xl:p-10">
            <h3 id="tier-startup" className="text-gray-900 text-lg font-semibold leading-8">
              Startup
            </h3>
            <p className="text-gray-600 mt-4 text-sm leading-6">
              A plan that scales with your rapidly growing business.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-gray-900 text-4xl font-bold tracking-tight">$30</span>
              <span className="text-gray-600 text-sm font-semibold leading-6">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-startup"
              className="bg-indigo-600 text-white shadow-sm bir bph mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 box boy bpa"
            >
              Buy plan
            </a>
            <ul role="list" className="text-gray-600 mt-8 abv text-sm leading-6 lg:mt-10">
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                25 products
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Up to 10,000 subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Advanced analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                24-hour support response time
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-indigo-600 h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Marketing automations
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 ring-gray-900 rounded-3xl p-8 ring-1 xl:p-10">
            <h3 id="tier-enterprise" className="text-white text-lg font-semibold leading-8">
              Enterprise
            </h3>
            <p className="text-gray-300 mt-4 text-sm leading-6">
              Dedicated support and infrastructure for your company.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-white text-4xl font-bold tracking-tight">Custom</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-enterprise"
              className="bg-white\/10 text-white bjy bpm mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 box boy bpa"
            >
              Contact sales
            </a>
            <ul role="list" className="text-gray-300 mt-8 abv text-sm leading-6 lg:mt-10">
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Unlimited products
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Unlimited subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Advanced analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                1-hour, dedicated support response time
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Marketing automations
              </li>
              <li className="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-5 flex-none"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
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
  );
}
