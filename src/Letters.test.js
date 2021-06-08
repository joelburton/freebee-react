import lodash from "lodash";

lodash.shuffle = jest.fn();

// NOPE NOPE NOPE
// import react from "react";
// react.useState =

import {fireEvent, render} from "@testing-library/react";
import Letters from "./Letters";

it("renders without crashing", function () {
  render(<Letters letters="ABC" center="Z"/>);
});

it("shows letter", function () {
  const {getByText} = render(<Letters letters="ABC" center="Z"/>);

  const a = getByText("A");
  const b = getByText("B");
  const c = getByText("C");
  const z = getByText("Z");
  expect(a).toBeInTheDocument();
  expect(b).toBeInTheDocument();
  expect(c).toBeInTheDocument();
  expect(z).toBeInTheDocument();
});

it("randomizes", function () {
  lodash.shuffle.mockReturnValueOnce(["A", "B", "C", "D", "F", "E"]);
  const {container } = render(<Letters letters="ABCDEF" center="Z"/>);
  // container=<div><Letters /></div>
  expect(container.querySelector(".Letter:nth-child(6)")).toHaveTextContent("E");
  expect(container.querySelector(".Letter:nth-child(7)")).toHaveTextContent("F");
  fireEvent.click(container.querySelector(".Letters-randomize"));
  expect(container.querySelector(".Letter:nth-child(6)")).toHaveTextContent("F");
  expect(container.querySelector(".Letter:nth-child(7)")).toHaveTextContent("E");
})

it("matches snapshot", function () {
  const {container} = render(<Letters letters="ABC" center="Z"/>);
  expect(container).toMatchSnapshot();
});
