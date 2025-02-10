import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Email to know about our <GradientText>Services</GradientText>
        </>
      }
      description="We provide complementary 15 minute free session."
    />
  </Section>
);

export { CTA };
