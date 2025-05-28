import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './layouts/Layout';
import LoadingScreen from './components/utils/LoadingScreen';

// Preload critical pages
const HomePage = lazy(() => import('./pages/HomePage').then(module => {
  // Preload other pages after HomePage loads
  import('./pages/ProductsPage');
  import('./pages/AboutPage');
  import('./pages/ContactPage');
  return module;
}));

// Lazy load other pages
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<LoadingScreen />}>
            <HomePage />
          </Suspense>
        } />
        <Route path="products" element={
          <Suspense fallback={<LoadingScreen />}>
            <ProductsPage />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<LoadingScreen />}>
            <AboutPage />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<LoadingScreen />}>
            <ContactPage />
          </Suspense>
        } />
        {/* Add redirect from /landers to home */}
        <Route path="landers" element={<Navigate to="/\" replace />} />
        <Route path="*" element={
          <Suspense fallback={<LoadingScreen />}>
            <NotFoundPage />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;