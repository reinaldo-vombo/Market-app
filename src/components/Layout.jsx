import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ chieldren }) {
  return (
    <div>
      <Navbar />
      {chieldren}
      <Footer />
    </div>
  );
}
