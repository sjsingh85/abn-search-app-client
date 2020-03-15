import jsonp from "jsonp";
import { Urls, Api } from "../appConfig";
import { ABNResult, CompanySearchResult } from "../components/App/types";

export const _getABNResult = (jsonpImplementation: typeof jsonp) => (
  abn: number
) => {
  const url = `${Urls.abnLookup}?guid=${Api.guid}&abn=${abn}`;

  return new Promise<ABNResult | Error>((resolve, reject) => {
    jsonpImplementation(url, undefined, (err, data: ABNResult) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export const _getCompanySearchResult = (jsonpImplementation: typeof jsonp) => (
  name: string
) => {
  const url = `${Urls.companyLookup}?guid=${Api.guid}&name=${name}`;

  return new Promise<CompanySearchResult | Error>((resolve, reject) => {
    jsonpImplementation(url, undefined, (err, data: CompanySearchResult) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export default {
  getABNResult: _getABNResult(jsonp),
  getCompanySearchResult: _getCompanySearchResult(jsonp)
};
