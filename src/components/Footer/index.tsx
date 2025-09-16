import { currentYear } from "helpers";

const Footer = () => (
  <footer className="border-t bg-slate-50 dark:border-slate-900 dark:bg-slate-800">
    <div className="container mx-auto flex items-center gap-5 px-4 py-4">
      &copy; {currentYear} Food Explorer. All rights reserved.
    </div>
  </footer>
);

export default Footer;
