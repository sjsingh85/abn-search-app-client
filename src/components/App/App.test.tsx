import React from "react";
import {
  render,
  fireEvent,
  waitForDomChange,
  getNodeText
} from "@testing-library/react";
import App from ".";
import { mockSearchService } from "./mockData";

describe("App integration tests", () => {
  test("App renders testbox", async () => {
    const { findByTestId } = render(<App searchService={mockSearchService} />);
    const searchInput = await findByTestId("search-input");
    expect(searchInput !== null).toBeTruthy();
  });

  test("Searchbox shows user number input on screen", async () => {
    const { findByText, findByTestId } = render(
      <App searchService={mockSearchService} />
    );

    const searchInput = await findByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "1234" } });
    await waitForDomChange();
    const renderedNumber = await findByText(/1234/);
    expect(getNodeText(renderedNumber).includes("1234")).toBeTruthy();
  });

  test("Searchbox shows user text input on screen", async () => {
    const { findByText, findByTestId } = render(
      <App searchService={mockSearchService} />
    );

    const searchInput = await findByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "abcd" } });
    const renderedText = await findByText(/abcd/);
    expect(getNodeText(renderedText).includes("abcd")).toBeTruthy();
  });

  test("App shows server response for ABN", async () => {
    const { findByTestId } = render(<App searchService={mockSearchService} />);

    const searchInput = await findByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "123456" } });

    const errorMessage = await findByTestId("error-message");

    expect(
      errorMessage.innerHTML === "Search text is not a valid ABN or ACN"
    ).toBeTruthy();
  });

  test("App shows server response for Company", async () => {
    const { findByTestId } = render(<App searchService={mockSearchService} />);

    const searchInput = await findByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "abcde" } });

    const errorMessage = await findByTestId("error-message");

    expect(
      errorMessage.innerHTML === "There was a problem completing your request."
    ).toBeTruthy();
  });
});
