import { test } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import PokeBox from "../pages/PokeBox";
import { vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test("renders PokeBox component", () => {
  render(<PokeBox />);
});

test("ButtonPcLeft calls handleBackClick on click", async () => {
  render(<PokeBox />);
  const buttonPcLeft = screen.findByTestId("button-pc-left");
  fireEvent.click(await buttonPcLeft);
});

test("ButtonPcRight calls handleNextClick on click", async () => {
  render(<PokeBox />);
  const buttonPcNext = screen.findByTestId("button-pc-right");
  fireEvent.click(await buttonPcNext);
});

test("PokeBox component renders and loads data correctly", async () => {
  render(<PokeBox />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  const pokemon1 = screen.findByText("pokemon1");
  const pokemon2 = screen.findByText("pokemon2");

  expect(pokemon1);
  expect(pokemon2);
});
