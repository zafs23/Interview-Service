// import type {
//   IFrontmatter,
//   MarkdownInstance,
// } from 'astro-boilerplate-components';

// export const sortByDate = (services: MarkdownInstance<IFrontmatter>[]) => {
//   return services.sort(
//     (a, b) =>
//       new Date(b.frontmatter.pubDate).valueOf() -
//       new Date(a.frontmatter.pubDate).valueOf()
//   );
// };
// import type {
//   IFrontmatter,
//   MarkdownInstance,
// } from 'astro-boilerplate-components';

// export const sortByDate = (services: MarkdownInstance<IFrontmatter>[]) => {
//   return services.sort((a, b) => {
//     const titleA = a.frontmatter.title.toLowerCase();
//     const titleB = b.frontmatter.title.toLowerCase();
//     if (titleA < titleB) return -1;
//     if (titleA > titleB) return 1;
//     return 0;
//   });
// };

import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

// Sort by the Markdown file name (alphabetically)
export const sortByFileName = (services: MarkdownInstance<IFrontmatter>[]) => {
  return services.sort((a, b) => {
    // Extract the file name (without path or extension)
    // for example, "src/pages/services/my-service.md" -> "my-service"
    const fileA =
      a.file.split('/').pop()?.replace('.md', '').toLowerCase() ?? '';
    const fileB =
      b.file.split('/').pop()?.replace('.md', '').toLowerCase() ?? '';

    if (fileA < fileB) return -1;
    if (fileA > fileB) return 1;
    return 0;
  });
};
