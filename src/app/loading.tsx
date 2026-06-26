export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-bg-primary flex flex-col items-center justify-center">
      <span className="font-heading text-4xl font-bold tracking-tight">
        <span className="text-gradient-gold">UB</span>
        <span className="text-text-primary ml-1">Stack</span>
      </span>
      <div className="mt-6 w-48 h-[1px] bg-surface overflow-hidden rounded-full">
        <div
          className="h-full rounded-full animate-pulse"
          style={{
            background: "linear-gradient(90deg, #C9A96E, #D4A574)",
            width: "60%",
          }}
        />
      </div>
    </div>
  );
}
