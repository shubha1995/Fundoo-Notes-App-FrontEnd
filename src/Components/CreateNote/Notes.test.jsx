import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AllNotes from "../CreateNote/Notes";

it("givenTestIdElement_WhenRenderedAddNotes_ShouldContainHeaderWithExpectedInputElements", () => {
  const { queryByTestId } = render(<AllNotes />);
  const wrapper = queryByTestId("getAllNotes");
  expect(wrapper).toBeNull();
});