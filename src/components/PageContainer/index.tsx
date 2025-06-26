import { ReactNode } from "react";

type PageContainerType = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerType) => (
  <div className="flex flex-col items-start gap-5 md:gap-8 lg:gap-10">{children}</div>
);

export default PageContainer;
