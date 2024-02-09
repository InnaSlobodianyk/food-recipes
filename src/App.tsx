import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => (
  <div className='bg-slate-100 dark:bg-slate-900 flex flex-col min-h-screen text-stone-700 dark:text-stone-50'>
    <Header />

    <main className='max-w-[1440px] px-4 py-5 mx-auto flex-1 w-full'>
      <Outlet/>
    </main>

    <Footer />
  </div>
);

export default App;
