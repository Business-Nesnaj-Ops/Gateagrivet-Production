import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import ScrollToTop from '../components/utils/ScrollToTop';
import LoadingScreen from '../components/utils/LoadingScreen';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LoadingScreen />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;