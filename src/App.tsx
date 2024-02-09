import { Outlet } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

const App = () => (
  <div className="flex min-h-screen flex-col bg-slate-100 text-stone-700 dark:bg-slate-900 dark:text-stone-50">
    <Header />

    <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-5">
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default App;
