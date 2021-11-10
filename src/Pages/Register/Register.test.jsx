import React from "react";
import SignUp from "../Register/Register";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("correct header when signup page render", () => {
  const { getByTestId } = render(<SignUp />);
  const header = getByTestId("register");
  expect(header).toHaveTextContent("Please fill form to create an account !");
});

it("correct header when wrong header", () => {
  const { getByTestId } = render(<SignUp />);
  const header = getByTestId("register");
  expect(header).not.toHaveTextContent("sign In");
});

it("givenTestIdElement ShouldContainHeader With ExpectedInputElements", () => {
  const { getByTestId } = render(<SignUp />);
  const Form = getByTestId("form");
  expect(Form).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup FirstNameInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const FirstName = getByTestId("firstName");
  expect(FirstName).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup LastNameInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const LastName = getByTestId("lastName");
  expect(LastName).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup PasswordInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const Password = getByTestId("password");
  expect(Password).toBeInTheDocument();
});



it("givenTestIdElement WhenRenderedsignup EmailInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const Email = getByTestId("email");
  expect(Email).toBeInTheDocument();
});