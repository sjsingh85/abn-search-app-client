export interface ABNResult {
  Abn: string;
  AbnStatus: string;
  Acn: string;
  AddressDate: string | null;
  AddressPostcode: string;
  AddressState: string;
  BusinessName: string[];
  EntityName: string;
  EntityTypeCode: string;
  EntityTypeName: string;
  Gst: string | null;
  Message: string;
}

export interface CompanySearchResult {
  Message: string;
  Names: CompanySearchItem[];
}

export interface CompanySearchItem {
  Abn: string;
  AbnStatus: string;
  IsCurrent: boolean;
  Name: string;
  NameType: string;
  Postcode: string;
  Score: number;
  State: string;
}

export interface SearchService {
  getABNResult: (abn: number) => Promise<ABNResult | Error>;
  getCompanySearchResult: (
    name: string
  ) => Promise<CompanySearchResult | Error>;
}
