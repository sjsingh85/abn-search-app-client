import React from "react";
import { CompanySearchResult, ABNResult } from "../types";
import ErrorMessage from "../ErrorMessage";
import CompanyDetails from "../CompanyDetails";
import ResultsList from "../ResultsList";

interface IResultsProps {
  onCompanySelectedHandler: (abn: string) => void;
  searchCompanyNameResult: CompanySearchResult | undefined;
  searchAbnResult: ABNResult | undefined;
  requestError: string;
  selectedCompany: string;
  isAbnSearch: boolean;
}

const Results: React.FC<IResultsProps> = ({
  isAbnSearch,
  selectedCompany,
  requestError,
  onCompanySelectedHandler,
  searchCompanyNameResult,
  searchAbnResult
}) => {
  if (!searchCompanyNameResult && !searchAbnResult) {
    return null;
  }

  const errorMessage =
    requestError ||
    (searchCompanyNameResult && searchCompanyNameResult.Message) ||
    (searchAbnResult && searchAbnResult.Message) ||
    "";

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  if (selectedCompany) {
    return (
      <React.Fragment>
        <ResultsList
          data={searchCompanyNameResult}
          onCompanySelectedHandler={onCompanySelectedHandler}
          selectedCompany={selectedCompany}
        />
        <CompanyDetails data={searchAbnResult} />
      </React.Fragment>
    );
  } else {
    return isAbnSearch ? (
      <CompanyDetails data={searchAbnResult} />
    ) : (
      <ResultsList
        data={searchCompanyNameResult}
        onCompanySelectedHandler={onCompanySelectedHandler}
      />
    );
  }
};

export default Results;
