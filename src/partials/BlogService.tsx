// import type { IFrontmatter } from 'astro-boilerplate-components';
// import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
// import type { ReactNode } from 'react';

// import { AppConfig } from '@/utils/AppConfig';

// type IBlogPostProps = {
//   frontmatter: IFrontmatter;
//   children: ReactNode;
// };

// const BlogPost = (props: IBlogPostProps) => (
//   <Section>
//     <PostHeader content={props.frontmatter} author={AppConfig.author} />

//     <PostContent content={props.frontmatter}>{props.children}</PostContent>
//   </Section>
// );

// export { BlogPost };

// 1) Import the original IFrontmatter
import type { IFrontmatter as OriginalFrontmatter } from 'astro-boilerplate-components';
import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

// 2) Create a new interface that makes `pubDate` optional
type IFrontmatterOptionalDate = Omit<OriginalFrontmatter, 'pubDate'> & {
  pubDate?: string;
};

type IBlogPostProps = {
  frontmatter: IFrontmatterOptionalDate;
  children: ReactNode;
};

const BlogService = (props: IBlogPostProps) => {
  // 3) Just pass the new frontmatter type to your existing components
  //    If `pubDate` is missing, it won't cause a type or runtime error
  return (
    <Section>
      <PostHeader content={props.frontmatter} author={AppConfig.author} />
      <PostContent content={props.frontmatter}>{props.children}</PostContent>
    </Section>
  );
};

export { BlogService };
