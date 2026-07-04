export default function TechBadge() {
  return (
    <div className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-lg text-xs flex items-center gap-2 hidden md:flex">
      <span className="flex gap-1 items-center">
        <span className="font-bold text-slate-600">⚡</span> Next.js 14
      </span>
      <span className="w-px h-4 bg-slate-300"></span>
      <span className="flex gap-1 items-center">
        <span className="font-bold text-slate-600">🤖</span> AI ChatGPT
      </span>
      <span className="w-px h-4 bg-slate-300"></span>
      <span className="flex gap-1 items-center">
        <span className="font-bold text-slate-600">💳</span> Stripe
      </span>
      <span className="w-px h-4 bg-slate-300"></span>
      <span className="flex gap-1 items-center text-teal-600 font-medium">
        ✅ Vercel
      </span>
    </div>
  );
}