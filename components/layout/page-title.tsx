import { ReactNode } from "react";

type PageTitleProps = {
  pageName: ReactNode;
  pageText: string;
  floatImage: string;
  customClass: string;
};

export const PageTitle = ({
  pageName,
  pageText,
  floatImage,
  customClass,
}: PageTitleProps) => {
  return (
    <section className="page-title">
      <div className="container">
        <div className="title-wrapper">
          <h1 className="title">{pageName}</h1>
          <p className="text">{pageText}</p>
        </div>
      </div>
      <img className={customClass} src={floatImage} alt="" />
    </section>
  );
};
