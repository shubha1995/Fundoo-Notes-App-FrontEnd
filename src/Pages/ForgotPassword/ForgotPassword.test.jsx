import React from "react";
import ForgotPassword from "./ForgotPassword";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should give correct header when forgot page rendered", () => {
  const { getByTestId } = render(<ForgotPassword />);
  const header = getByTestId("header1");
  expect(header).toHaveTextContent("Find your email");
});

it("should give not correct header when forgot page show error", () => {
  const { getByTestId } = render(<ForgotPassword />);
  const header = getByTestId("header1");
  expect(header).not.toHaveTextContent("Findyour email");
});

it("should give correct header2 when forgot page rendered", () => {
  const { getByTestId } = render(<ForgotPassword />);
  const header = getByTestId("header2");
  expect(header).toHaveTextContent("Enter your recovery email");
});

it("should give not correct header2 when forgot page show error", () => {
  const { getByTestId } = render(<ForgotPassword />);
  const header = getByTestId("header2");
  expect(header).not.toHaveTextContent("Enteryour recovery email");
});

it("form-tobeinthedocument", () => {
  const { getByTestId } = render(<ForgotPassword />);
  const form = getByTestId("form");
  expect(form).toBeInTheDocument();
});

it("password-tobeinthedocument", () => {
  const { getByTestId } = render(<ForgotPassword />);
  const email = getByTestId("email");
  expect(email).toBeInTheDocument();
});