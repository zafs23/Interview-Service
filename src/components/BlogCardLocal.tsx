import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { format } from 'date-fns';

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

// Here we conditionally handle `pubDate`
const BlogCardLocal = (props: IBlogCardProps) => {
  const { frontmatter, url } = props.instance;
  const { title, imgSrc, imgAlt, description, pubDate } = frontmatter;

  // Instead of directly calling `format(new Date(pubDate), 'LLL d, yyyy')`,
  // we check for `pubDate` existence:
  let dateString = '';
  if (pubDate) {
    try {
      dateString = format(new Date(pubDate), 'LLL d, yyyy');
    } catch (error) {
      // If pubDate is invalid or an empty string, dateString remains empty
      console.warn(`Invalid date: ${pubDate}`);
    }
  }

  return (
    <a className="hover:translate-y-1" href={url}>
      <div className="overflow-hidden rounded-md bg-slate-800">
        <div className="aspect-h-2 aspect-w-3">
          <img
            className="h-full w-full object-cover object-center"
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
          />
        </div>

        <div className="px-3 pb-6 pt-4 text-center">
          <h2 className="text-xl font-semibold">{title}</h2>

          {/* Only display date if `dateString` is non-empty */}
          {dateString && (
            <div className="mt-1 text-xs text-gray-400">{dateString}</div>
          )}

          <div className="mt-2 text-sm">{description}</div>
        </div>
      </div>
    </a>
  );
};

export { BlogCardLocal };
