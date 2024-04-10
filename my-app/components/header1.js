import { signOut } from "@/auth";
import Image from "next/image";
import logolight from "@/public/logo/logolight.svg";
import logodark from "@/public/logo/logodark.svg";

// https://landingcube.com/amazon-landing-pages/
const navigation = [
  { name: "Features", href: "/features" },
  { name: "Demo", href: "/demo" },
  { name: "Pricing", href: "/pricing" },
  { name: "Studio", href: "/studio" },
];

function Page({ color }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={color == "dark" ? logodark : logolight}
              alt="My SVG"
              width={120}
              height={100}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${color == "dark" ? "text-white" : "text-gray-900"} text-sm font-semibold leading-6 `}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-4">
          <a
            href="/login"
            className={`${color == "dark" ? "text-white" : "text-gray-900"} text-sm font-semibold leading-6 `}
          >
            Sign in
          </a>
          <a
            class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-indigo-600 text-white -my-2.5 ml-8"
            href="/pricing"
          >
            <span>
              Get all-access <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
        <button></button>
        {/* <span aria-hidden="true">|</span>
              <div className="ml-4">
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Log out 
                  </button>
                </form>
              </div> */}
      </nav>
    </header>
  );
}

export default Page;
