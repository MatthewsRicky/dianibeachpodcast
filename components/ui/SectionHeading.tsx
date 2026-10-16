import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
}: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-coral">
            {eyebrow}
          </p>
        )}

        <h2 className="text-3xl font-semibold tracking-tight text-ocean sm:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            {description}
          </p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-coral"
        >
          {linkLabel}
          <span aria-hidden="true">↗</span>
        </Link>
      )}
    </div>
  );
}
