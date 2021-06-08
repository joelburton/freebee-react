import {getRandomGame} from "./api";

jest.mock("./api");

import { render, waitFor } from "@testing-library/react";
import Game from "./Game";

// const AxiosMockAdapter = require("axios-mock-adapter");
// const axios = require("axios");
// const axiosMock = new AxiosMockAdapter(axios);

it("renders without crashing", function () {
  getRandomGame.mockReturnValue({
    center: "A",
    letters: "BCDEFG",
    wordlist: ["BARE", "BEAR"]
  });
  render(<Game />);
});

it("gets data from API", async function () {
  getRandomGame.mockReturnValue({
    center: "A",
    letters: "BCDEFG",
    wordlist: ["BARE", "BEAR"]
  });

  const {container, debug} = render(<Game />);
  const letters = await waitFor(
      () => expect(container.querySelector(".Letters")).toBeInTheDocument(),
      {timeout: 500});
  debug(letters);
});

//
// it("matches snapshot", function () {
//   const {container} = render(<Letters letters="ABC" center="Z"/>);
//   expect(container).toMatchSnapshot();
// });
