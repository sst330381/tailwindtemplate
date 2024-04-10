function Page() {
  const desc = [
    { key: "no1", title: "8,000+", subtitle: "Creators on the platform" },
    { key: "no2", title: "3%", subtitle: "Flat platform fee" },
    { key: "no3", title: "99.9%", subtitle: "Uptime guarantee" },
    { key: "no4", title: "$70M", subtitle: "Paid out to creators" },
  ];
  return (
    <div className="pt-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div>
          {/* <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3> */}
          <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0">
            {desc.map((x) => (
              <div className="px-4 py-5 sm:p-6" key={x.key}>
                <dt className="text-base font-normal text-gray-900">
                  {x.subtitle}
                </dt>
                <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                    {x.title}
                    <span className="ml-2 text-sm font-medium text-gray-500"></span>
                  </div>
                  <div className="bg-green-100 text-green-800 inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only"> Increased by </span>12%
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Page;
