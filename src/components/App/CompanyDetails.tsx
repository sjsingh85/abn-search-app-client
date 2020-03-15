import React from "react";
import { ABNResult } from "./types";

interface CompanyDetailsProps {
  data: ABNResult | undefined;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="CompanyDetails">
      <div className="companyTable">
        <div className="tblRow">
          <div className="tblHeader">Abn</div>
          <div className="tblData">{data.Abn}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">AbnStatus</div>
          <div className="tblData">{data.AbnStatus}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">Acn</div>
          <div className="tblData">{data.Acn}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">AddressDate</div>
          <div className="tblData">{data.AddressDate}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">AddressPostcode</div>
          <div className="tblData">{data.AddressPostcode}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">AddressState</div>
          <div className="tblData">{data.AddressState}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">BusinessName</div>
          <div className="tblData">
            {data.BusinessName.map(name => (
              <div key={name}>{name}</div>
            ))}
          </div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">EntityName</div>
          <div className="tblData">{data.EntityName}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">EntityTypeCode</div>
          <div className="tblData">{data.EntityTypeCode}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">EntityTypeName</div>
          <div className="tblData">{data.EntityTypeName}</div>
        </div>
        <div className="tblRow">
          <div className="tblHeader">Gst</div>
          <div className="tblData">{data.Gst}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
