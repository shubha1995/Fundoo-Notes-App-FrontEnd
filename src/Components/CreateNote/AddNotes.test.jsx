import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Notes from "../CreateNote/AddNotes";

it("givenTestIdElement_WhenRenderedAddNotes_ShouldContainHeaderWithExpectedInputElements", () => {
  const { getByTestId } = render(<Notes />);
  const title = getByTestId("title");
  const description = getByTestId("description");
  const editId = getByTestId("editId");

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(editId).toBeInTheDocument();
});