import React from "react";
import { ContactForm } from './components/ContactForm';
import { render, findAllByAltText } from "@testing-library/react";
import App from "./App";
import {onSubmit} from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);

});

test("Inputs are rendering", () => {
  const { getByText } = render(<App />);

  getByText(/First Name/i);
  getByText(/Last Name/i);
  getByText(/Email/i);
  getByText(/Message/i);
});
