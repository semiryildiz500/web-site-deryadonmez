export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-navy-2 to-navy px-5 pb-16 pt-40 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1100px]">
        <span className="block h-px w-14 bg-gold" aria-hidden="true" />
        <p className="mt-6 text-xs tracking-[0.35em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
