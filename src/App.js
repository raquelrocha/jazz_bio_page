import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { NotFoundErrorPage } from './layout/error-page';
import { AboutUs } from './pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dogs } from './pages/Dogs';
import { Litters } from './pages/Litters';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/litters" element={<Litters />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
