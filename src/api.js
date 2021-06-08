/**
 *
 * https://freebee.fun/cgi-bin/random
 *
 * {
	"letters": "tfdaib",
	"center": "r",
	"words": 74,
	"total": 262,
	"wordlist": ["abfarad", ...]
}
 * */

import axios from "axios";

const BASE_URL = "https://freebee.fun/";

async function getRandomGame() {
  console.error("RUNNING");
  const resp = await axios.get(`${BASE_URL}cgi-bin/random`);
  return resp.data;
}

export { getRandomGame };