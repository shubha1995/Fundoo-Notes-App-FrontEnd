import React from "react";
import Login from "../Login/login.jsx";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("correct header when login page render", () => {
  const { getByTestId } = render(<Login />);
  const header = getByTestId("login");
  expect(header).toHaveTextContent("Sign in");
});
it("should give wrong header and get error", () => {
  const { getByTestId } = render(<Login />);
  const header = getByTestId("login");
  expect(header).not.toHaveTextContent("SignIn");
});
it("givenTestIdElement WhenRenderedLogin HeaderWithExpectedInputElements", () => {
  const { getByTestId } = render(<Login />);
  const Form = getByTestId("form");
  expect(Form).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedLogin EmailInTheDocument", () => {
  const { getByTestId } = render(<Login />);
  const email = getByTestId("email");
  expect(email).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedLogin SubmitInTheDocument", () => {
  const { getByTestId } = render(<Login />);
  const submit = getByTestId("button");
  expect(submit).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedLogin SubmittoBeDisabled", () => {
  const { getByTestId } = render(<Login />);
  const submit = getByTestId("button");
  expect(submit).not.toBeDisabled();
});

it("givenTestIdElement WhenRenderedLogin PasswordInTheDocument", () => {
  const { getByTestId } = render(<Login />);
  const password = getByTestId("password");
  expect(password).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedLogin PasswordtoHaveErrorMessage", () => {
  const { getByTestId } = render(<Login />);
  const password = getByTestId("password");
  expect(password).not.toHaveErrorMessage();
});