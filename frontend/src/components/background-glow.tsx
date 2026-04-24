export function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute right-[-5rem] top-40 h-80 w-80 rounded-full bg-fuchsia-400/15 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl" />
    </div>
  );
}