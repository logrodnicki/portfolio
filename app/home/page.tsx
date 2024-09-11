import { ReactElement } from 'react';
import Introduction from '@/Pages/Introduction/Introduction';
import Skills from '@/Pages/Skills/Skills';
import Contact from '@/Pages/Contact/Contact';

const Page = (): ReactElement => {
  return (
    <div>
      <h1>TEST TESt</h1>
      <Introduction />
      <Skills />
      <Contact />
    </div>
  );
};

export default Page;
