import { ReactNode } from "react";

type PageContainerType = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerType) => (
  <div className="flex flex-col items-start gap-5">{children}</div>
);

export default PageContainer;
