import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';

import { BlogCardLocal } from '@/components/BlogCardLocal';
// import { BlogCard } from './BlogCard';

type IRecentPostsProps = {
  serviceList: MarkdownInstance<IFrontmatter>[];
};

const BlogGalleryLocal = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.serviceList.map((elt) => (
      <BlogCardLocal key={elt.url} instance={elt} />
    ))}
  </div>
);

export { BlogGalleryLocal };
