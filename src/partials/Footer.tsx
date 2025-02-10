// import { FooterCopyright, Section } from 'astro-boilerplate-components';
// import React from 'react';

// import { AppConfig } from '@/utils/AppConfig';

// const Footer = () => (
//   <Section>
//     <FooterCopyright site_name={AppConfig.site_name} />
//   </Section>
// );

// export { Footer };

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} Tech Interview Service. All rights
        reserved.
      </p>
    </footer>
  );
}
export { Footer };
