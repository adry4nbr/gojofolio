interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="relative flex flex-col gap-1 px-4 py-2 md:py-4 rounded-xl border border-border/10 hover:border-accent-blue duration-300 group items-start text-left">
      <h2 className="text-2xl md:text-4xl text-foreground">{value}</h2>
      <p className="text-xs md:text-lg text-foreground">{label}</p>

      <div className="absolute bottom-0 left-2 right-2 h-px w-0 bg-linear-to-r from-accent-red to-accent-blue group-hover:w-[calc(100%-1rem)] duration-500 ease-out rounded-b-xl" />
    </div>
  );
}
