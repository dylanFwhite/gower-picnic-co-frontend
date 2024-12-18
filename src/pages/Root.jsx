import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="w-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
