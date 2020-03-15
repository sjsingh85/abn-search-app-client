import { SearchService, ABNResult, CompanySearchResult } from "./types";

export const mockSearchService: SearchService = {
  getABNResult: abn => {
    return Promise.resolve<ABNResult>({
      Abn: "",
      AbnStatus: "",
      Acn: "",
      AddressDate: null,
      AddressPostcode: "",
      AddressState: "",
      BusinessName: [],
      EntityName: "",
      EntityTypeCode: "",
      EntityTypeName: "",
      Gst: null,
      Message: "Search text is not a valid ABN or ACN"
    });
  },
  getCompanySearchResult: name => {
    return Promise.resolve<CompanySearchResult>({
      Message: "There was a problem completing your request.",
      Names: []
    });
  }
};
