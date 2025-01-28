import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from '../asserts/layout.module.css';

const Layout = () => {
  const location = useLocation();
  const hideHeaderandFooter = location.pathname === '/not-found';
  return (
    <>
      {!hideHeaderandFooter && <Header />}
      <main className={styles.main}>
        <Outlet />
      </main>

      {!hideHeaderandFooter && <Footer />}
    </>
  );
};

export default Layout;
