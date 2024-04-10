import Landingpage from "@/components/landingpage";

function Page() {
  return (
    <div className="relative mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <h1 class="my-3 text-3xl font-extrabold tracking-tight text-slate-900">
        Landing Pages
      </h1>
      <section className="rounded-md">
        <Landingpage />
      </section>
    </div>
  );
}

export default Page;
