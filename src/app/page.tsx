// page.tsx
import Header from './componenets/Header';
import HeroSection from './componenets/HeroSection'
import Features from './componenets/Features';

export default function Home() {
  return (
    <>
    <div className='bg-[#252B42] '></div>
      <Header />
      <HeroSection />
      <Features />
    </>
  );
}
