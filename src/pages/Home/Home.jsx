export default function Home() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600">
          🚀 Built for Small Businesses
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
          Run Your Entire Business
          <br />
          From One Dashboard
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          Manage customers, sales, invoices, tasks, analytics and AI-powered
          insights—all in one simple platform.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
            Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}
