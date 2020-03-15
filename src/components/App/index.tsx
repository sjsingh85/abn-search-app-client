import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import SearchBox from "./SearchBox";
import { parseABN } from "../../utility/domain";
import { CompanySearchResult, ABNResult, SearchService } from "./types";
import RequestStatus from "./RequestStatus";
import Results from "./Results";

interface AppProps {
  searchService: SearchService;
}

const App: React.FC<AppProps> = ({ searchService }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const onSearchHandler = (searchString: string) => {
    setSearchText(searchString);
  };
  const [searchAbnResult, setSearchAbnResult] = useState<ABNResult>();
  const [searchCompanyNameResult, setSearchCompanyNameResult] = useState<
    CompanySearchResult
  >();
  const [isAbnSearch, setIsAbnSearch] = useState<boolean>(false);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [requestError, setRequestError] = useState<string>("");

  const getResults = useCallback(
    (str: string) => {
      setIsRequestPending(true);
      const abn = parseABN(str);

      if (abn) {
        return searchService
          .getABNResult(abn)
          .then(
            result => {
              return { isAbn: true, data: result as ABNResult, error: null };
            },
            error => {
              return { isAbn: false, data: null, error };
            }
          )
          .catch(error => {
            return { isAbn: true, data: null, error };
          });
      } else {
        return searchService
          .getCompanySearchResult(str)
          .then(
            result => {
              return {
                isAbn: false,
                data: result as CompanySearchResult,
                error: null
              };
            },
            error => {
              return { isAbn: false, data: null, error };
            }
          )
          .catch(error => {
            return { isAbn: true, data: null, error };
          });
      }
    },
    [searchService]
  );

  const getData = useCallback(async (str: string) => await getResults(str), [
    getResults
  ]);

  useEffect(() => {
    if (searchText) {
      setSelectedCompany("");
      setIsRequestPending(true);
      getData(searchText)
        .then(({ isAbn, data, error }) => {
          setIsAbnSearch(isAbn);

          if (error) {
            setRequestError(error.message);
          } else {
            if (isAbn) {
              setSearchAbnResult(data as ABNResult);
              setSearchCompanyNameResult(undefined);
            } else {
              setSearchCompanyNameResult(data as CompanySearchResult);
              setSearchAbnResult(undefined);
            }
          }
        })
        .finally(() => {
          setIsRequestPending(false);
        });
    }
  }, [getData, searchText]);

  const onCompanySelectedHandler = useCallback(
    async (abn: string) => {
      if (abn !== selectedCompany) {
        setSelectedCompany(abn);
        setIsRequestPending(true);
        getData(abn)
          .then(({ isAbn, data, error }) => {
            if (error) {
              setRequestError(error.message);
            } else if (isAbn) {
              setSearchAbnResult(data as ABNResult);
            }
          })
          .finally(() => {
            setIsRequestPending(false);
          });
      }
    },
    [getData, selectedCompany]
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>App for ABN Search</h1>
        <SearchBox onSearchHandler={onSearchHandler} />
      </header>
      <RequestStatus
        requestPending={isRequestPending}
        textToDisplay={selectedCompany ? selectedCompany : searchText}
      />
      <div className="content-wrapper">
        <Results
          onCompanySelectedHandler={onCompanySelectedHandler}
          isAbnSearch={isAbnSearch}
          selectedCompany={selectedCompany}
          requestError={requestError}
          searchCompanyNameResult={searchCompanyNameResult}
          searchAbnResult={searchAbnResult}
        />
      </div>
    </div>
  );
};

export default App;
