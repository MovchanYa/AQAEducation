const axios = require("axios");
const defUrl = "https://jsonplaceholder.typicode.com/";

async function forCheck() {
  return await axios.get(`${defUrl}comments/5`, {
    params: {
      id: 6,
    },
    headers: {
      Accept: "application/json",
    },
  });
}

test("params", async () => {
  const check = await forCheck();

  expect(check.config.params.id).toBe(6);
  expect(check.config.headers.Accept).toBe("application/json");
});
