import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <div id="app">
          <div class="ui-selected\:bg-tremor-background py-24 xl\:py-32">
            <div class="mx-auto xl\:max-w-7xl px-6 xl\:px-8">
              <div class="mx-auto xl\:max-w-4xl xl\:text-center">
                <h2 class="text-base lg\:font-semibold sm\:leading-7 ui-selected\:text-indigo-600">Pricing</h2>
                <p class="lg\:mt-2 text-4xl font-bold sm\:tracking-tight ui-active\:text-tremor-content-strong lg\:text-5xl">
                  Pricing plans for teams of&nbsp;all&nbsp;sizes
                </p>
              </div>
              <p class="mx-auto lg\:mt-6 xl\:max-w-2xl xl\:text-center text-tremor-title sm\:leading-8 ui-selected\:text-gray-600">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe
                et quasi iusto modi velit ut non voluptas in. Explicabo id ut
                laborum.
              </p>
              <div class="isolate mx-auto xl\:mt-16 xl\:grid lg\:max-w-md xl\:grid-cols-1 lg\:gap-y-8 lg\:mt-20 xl\:mx-0 xl\:max-w-none xl\:grid-cols-3">
                <div class="lg\:mt-8 lg\:rounded-r-none xl\:flex xl\:flex-col xl\:justify-between xl\:rounded-3xl ui-selected\:bg-tremor-background lg\:p-8 ring-1 ring-tremor-ring xl\:p-10">
                  <div>
                    <div class="xl\:flex xl\:items-center xl\:justify-between gap-x-4">
                      <h3 id="tier-freelancer" class="ui-active\:text-tremor-content-strong text-tremor-title lg\:font-semibold sm\:leading-8">
                        Freelancer
                      </h3>
                    </div>
                    <p class="lg\:mt-4 text-tremor-default lg\:leading-6 ui-selected\:text-gray-600">
                      The essentials to provide your best work for clients.
                    </p>
                    <p class="lg\:mt-6 xl\:flex md\:items-baseline gap-x-1">
                      <span class="text-4xl font-bold sm\:tracking-tight ui-active\:text-tremor-content-strong">$24</span>
                      <span class="text-tremor-default lg\:font-semibold lg\:leading-6 ui-selected\:text-gray-600">/month</span>
                    </p>
                    <ul role="list" class="lg\:mt-8 abv text-tremor-default lg\:leading-6 ui-selected\:text-gray-600">
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        5 products
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Up to 1,000 subscribers
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Basic analytics
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
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
                  <a
                    href="#"
                    aria-describedby="tier-freelancer"
                    class="ui-selected\:text-indigo-600 ring-1 ring-inset ring-indigo-200 bmc lg\:mt-8 block lg\:rounded-md py-2 px-3 xl\:text-center text-tremor-default lg\:font-semibold lg\:leading-6 box boy bpa bph"
                  >
                    Buy plan
                  </a>
                </div>
                <div class="lg\:z-10 lg\:rounded-b-none xl\:flex xl\:flex-col xl\:justify-between xl\:rounded-3xl ui-selected\:bg-tremor-background lg\:p-8 ring-1 ring-tremor-ring xl\:p-10">
                  <div>
                    <div class="xl\:flex xl\:items-center xl\:justify-between gap-x-4">
                      <h3 id="tier-startup" class="ui-selected\:text-indigo-600 text-tremor-title lg\:font-semibold sm\:leading-8">
                        Startup
                      </h3>
                      <p class="rounded-tremor-full ajq px-2\.5 py-1 text-xs lg\:font-semibold leading-5 ui-selected\:text-indigo-600">
                        Most popular
                      </p>
                    </div>
                    <p class="lg\:mt-4 text-tremor-default lg\:leading-6 ui-selected\:text-gray-600">
                      A plan that scales with your rapidly growing business.
                    </p>
                    <p class="lg\:mt-6 xl\:flex md\:items-baseline gap-x-1">
                      <span class="text-4xl font-bold sm\:tracking-tight ui-active\:text-tremor-content-strong">$32</span>
                      <span class="text-tremor-default lg\:font-semibold lg\:leading-6 ui-selected\:text-gray-600">/month</span>
                    </p>
                    <ul role="list" class="lg\:mt-8 abv text-tremor-default lg\:leading-6 ui-selected\:text-gray-600">
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        25 products
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Up to 10,000 subscribers
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Advanced analytics
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        24-hour support response time
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
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
                  <a
                    href="#"
                    aria-describedby="tier-startup"
                    class="ui-selected\:bg-indigo-600 aria-selected\:text-tremor-content-inverted[aria-selected="true"] ui-selected\:shadow-tremor-input bir lg\:mt-8 block lg\:rounded-md py-2 px-3 xl\:text-center text-tremor-default lg\:font-semibold lg\:leading-6 box boy bpa bph"
                  >
                    Buy plan
                  </a>
                </div>
                <div class="lg\:mt-8 lg\:rounded-l-none xl\:flex xl\:flex-col xl\:justify-between xl\:rounded-3xl ui-selected\:bg-tremor-background lg\:p-8 ring-1 ring-tremor-ring xl\:p-10">
                  <div>
                    <div class="xl\:flex xl\:items-center xl\:justify-between gap-x-4">
                      <h3 id="tier-enterprise" class="ui-active\:text-tremor-content-strong text-tremor-title lg\:font-semibold sm\:leading-8">
                        Enterprise
                      </h3>
                    </div>
                    <p class="lg\:mt-4 text-tremor-default lg\:leading-6 ui-selected\:text-gray-600">
                      Dedicated support and infrastructure for your company.
                    </p>
                    <p class="lg\:mt-6 xl\:flex md\:items-baseline gap-x-1">
                      <span class="text-4xl font-bold sm\:tracking-tight ui-active\:text-tremor-content-strong">$48</span>
                      <span class="text-tremor-default lg\:font-semibold lg\:leading-6 ui-selected\:text-gray-600">/month</span>
                    </p>
                    <ul role="list" class="lg\:mt-8 abv text-tremor-default lg\:leading-6 ui-selected\:text-gray-600">
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Unlimited products
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Unlimited subscribers
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Advanced analytics
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        1-hour, dedicated support response time
                      </li>
                      <li class="xl\:flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="lg\:h-6 w-5 xl\:flex-none ui-selected\:text-indigo-600"
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
                  <a
                    href="#"
                    aria-describedby="tier-enterprise"
                    class="ui-selected\:text-indigo-600 ring-1 ring-inset ring-indigo-200 bmc lg\:mt-8 block lg\:rounded-md py-2 px-3 xl\:text-center text-tremor-default lg\:font-semibold lg\:leading-6 box boy bpa bph"
                  >
                    Buy plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
