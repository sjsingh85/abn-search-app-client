import React from "react";
import { CompanySearchResult } from "./types";

interface ResultsListProps {
  onCompanySelectedHandler: (abn: string) => void;
  data: CompanySearchResult | undefined;
  selectedCompany?: string;
}

const ResultsList: React.FC<ResultsListProps> = ({
  data,
  onCompanySelectedHandler,
  selectedCompany = ""
}) => {
  const onSelectCompany = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { target } = event;
    if (target && target instanceof HTMLDivElement) {
      const abn = target.dataset["abn"];
      if (abn) {
        onCompanySelectedHandler(abn);
      }
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div className="ResultsList">
      <nav className="listWrapper" onClick={onSelectCompany}>
        {data.Names.map(item => (
          <div
            className={
              "listItem " + (item.Abn === selectedCompany ? "selected" : "")
            }
            data-abn={item.Abn}
            key={item.Abn}
          >
            {item.Name}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default ResultsList;
