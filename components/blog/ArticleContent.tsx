import type { ArticleContentBlock } from "@/lib/data/blogPosts";

type ArticleContentProps = {
  blocks: ArticleContentBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="mt-8 space-y-7">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return block.text.trim() ? (
              <p key={index} className="text-base leading-8 text-ink/80">
                {block.text}
              </p>
            ) : null;

          case "heading": {
            if (!block.text.trim()) return null;

            const Heading = block.level === 3 ? "h3" : "h2";

            return (
              <Heading
                key={index}
                className="pt-3 text-2xl font-semibold tracking-tight text-ocean"
              >
                {block.text}
              </Heading>
            );
          }

          case "image":
            if (!block.image.src.trim()) return null;

            return (
              <figure
                key={index}
                className={
                  block.layout === "inline" ? "mx-auto max-w-2xl" : "w-full"
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.image.src}
                  alt={block.image.alt}
                  className="max-h-[720px] w-full shodow-md shadow-coral rounded-2xl object-cover"
                  loading="lazy"
                />

                {block.image.caption && (
                  <figcaption className="mt-3 text-sm leading-6 text-muted">
                    {block.image.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "gallery": {
            const images = block.images.filter(
              (image) => image.src.trim() !== "",
            );

            if (images.length === 0) return null;

            return (
              <div
                key={index}
                className={`grid gap-3 items-center mx-auto justify-center ${
                  block.columns === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {images.map((image, imageIndex) => (
                  <figure
                    key={`${index}-${imageIndex}`}
                    className="flex items-center mx-auto min-w-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] rounded-xl object-cover hover:scale-105 shadow-md shadow-coral transition-all transition-300"
                      loading="lazy"
                    />

                    {image.caption && (
                      <figcaption className="mt-2 text-sm leading-6 text-muted">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            );
          }

          case "quote":
            return block.text.trim() ? (
              <blockquote
                key={index}
                className="border-l-4 border-teal pl-6 text-xl italic leading-8 text-ocean"
              >
                <p>{block.text}</p>

                {block.attribution && (
                  <cite className="mt-3 block text-sm not-italic text-muted">
                    {block.attribution}
                  </cite>
                )}
              </blockquote>
            ) : null;

          case "list":
            return block.items.length > 0 ? (
              <ul
                key={index}
                className="list-disc space-y-2 pl-6 text-base leading-8 text-ink/80"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            ) : null;

          default:
            return null;
        }
      })}
    </div>
  );
}
