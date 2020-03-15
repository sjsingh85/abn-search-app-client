import React from "react";

const RequestStatus: React.FC<{
  requestPending: boolean;
  textToDisplay: string;
}> = ({ requestPending, textToDisplay }) => {
  if (!textToDisplay) {
    return null;
  }
  return (
    <h3 data-testid="search-text">
      Search{requestPending ? "ing" : ""} Results for: {textToDisplay}
    </h3>
  );
};

export default RequestStatus;
