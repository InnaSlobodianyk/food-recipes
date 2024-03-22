import { ReactNode } from "react";

type PageHeadingType = {
  children: ReactNode;
};

const PageHeading = ({ children }: PageHeadingType) => (
  <h1 className="text-xl font-bold md:text-3xl">{children}</h1>
);

export default PageHeading;
