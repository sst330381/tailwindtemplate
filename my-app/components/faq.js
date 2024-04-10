function Page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Have a different question and can&apos;t find the answer you&apos;re looking
          for? Reach out to our support team by{" "}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            sending us an email
          </a>{" "}
          and we&apos;ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                What&apos;s the best thing about Switzerland?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                I don&apos;t know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">How do you make holy water?</dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                You boil the hell out of it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Why do you never see elephants hiding in trees?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Because they&apos;re so good at it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                What do you call someone with no body and no nose?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Why can&apos;t you hear a pterodactyl go to the bathroom?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Because the pee is silent. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Why did the invisible man turn down the job offer?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                He couldn&apos;t see himself doing it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Page;
