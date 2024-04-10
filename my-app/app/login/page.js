import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    // <main className="flex items-center justify-center md:h-screen">
    //   <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
    //     <div className="flex h-20 w-full items-end rounded-lg bg-indigo-600 p-3 md:h-36">
    //       <div className="w-32 text-white md:w-36">
    //       </div>
    //     </div>
    //     <LoginForm />
    //   </div>
    // </main>
    <div className="flex min-h-[900px] flex-col bg-gray-50">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div> */}
        <LoginForm />
      </div>
    </div>
  );
}
