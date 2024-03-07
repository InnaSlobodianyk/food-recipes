import { Outlet } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-slate-100 text-stone-700 dark:bg-slate-900 dark:text-stone-50">
    <Header />

    <main className="container mx-auto flex-1 px-4 py-5">
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default Layout;
