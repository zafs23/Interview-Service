import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { GradientText, Section } from 'astro-boilerplate-components';

import { BlogGalleryLocal as BlogGallery } from '@/components/BlogGalleryLocal';

type IOurServicesProps = {
  serviceList: MarkdownInstance<IFrontmatter>[];
};

const OurServices = (props: IOurServicesProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Our <GradientText>Services</GradientText>
        </div>

        <div className="text-sm">
          <a href="/services/">View all Services →</a>
        </div>
      </div>
    }
  >
    <BlogGallery serviceList={props.serviceList} />
  </Section>
);

export { OurServices };
