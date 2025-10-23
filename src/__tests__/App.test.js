import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with descriptive alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining(".jpg"));
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("includes links to my GitHub and LinkedIn pages", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com")
  );

  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedInLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});
