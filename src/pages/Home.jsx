import {
  Ads,
  Carosel,
  Category,
  Footer,
  Navbar,
  Products,
} from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='space-y-6'>
        <Carosel />
        <Category />
        <Products />
        <Ads />
        <Footer />
      </div>
    </>
  );
}
