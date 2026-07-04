import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import LoadingScreen from "./components/layout/LoadingScreen";
import InfoPage from "./pages/InfoPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const ConfirmedBookingPage = lazy(() => import("./pages/ConfirmedBookingPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <Suspense fallback={<LoadingScreen />}>
          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/confirmed" element={<ConfirmedBookingPage />} />
              <Route
                path="/about"
                element={
                  <Navigate
                    to="/#about"
                    replace
                  />
                }
              />
              <Route
                path="/menu"
                element={
                  <Navigate
                    to="/#specials"
                    replace
                  />
                }
              />
              <Route
                path="/order-online"
                element={
                  <InfoPage
                    title="Online ordering launching soon"
                    description="Little Lemon online ordering is currently in private beta. Call us to place your order while we finalize this feature."
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <InfoPage
                    title="Member login coming soon"
                    description="Create and manage your reservation history, favorite dishes, and loyalty rewards from one secure dashboard."
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
