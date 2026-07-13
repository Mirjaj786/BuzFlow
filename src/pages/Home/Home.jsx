export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400">BizFlow</h1>

        <p className="mt-4 text-xl text-slate-300">
          Smart Business Operating System
        </p>

        <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
          Get Started
        </button>
      </div>
    </div>
  );
}