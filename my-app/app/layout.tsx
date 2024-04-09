import "@/app/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "@/app/ui/components.css";
import { signOut } from '@/auth';
import Image from 'next/image'
import logo from '@/public/logo/logo3.svg'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// https://landingcube.com/amazon-landing-pages/
const navigation = [
  { name: "Features", href: "/features" },
  { name: "Demo", href: "/demo" },
  { name: "Pricing", href: "/pricing" },
  { name: "Studio", href: "/studio" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image src={logo} alt="My SVG" width={120} height={100} />
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
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-4">
                <a
                  href="/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in 
                </a>
              </div>
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
          {children}
        </div>
      </body>
    </html>
  );
}
