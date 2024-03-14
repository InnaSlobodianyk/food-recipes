const Spinner = () => (
  <div className="fixed left-0 top-[50px] z-10 flex h-screen w-screen items-center justify-center bg-slate-100/75 dark:bg-slate-900/75 md:top-[65px]">
    <div
      className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-indigo-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>
);

export default Spinner;
