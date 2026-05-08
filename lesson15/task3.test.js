const axios = require("axios");
const defUrl = "https://poo-po.poo/";

axios.interceptors.request.use((config) => {
  if (config.url === `${defUrl}`) {
    return Promise.reject({ headers: "not poo-po", status: 404 });
  }
});

test("check", async function forCheck() {
  try {
    await axios.get(`${defUrl}`, {
      params: {
        id: 6,
      },
      headers: {
        Accept: "application/json",
      },
    });
  } catch (response) {
    console.log(response);
    expect(response.headers).toBe("not poo-po");
    expect(response.status).toBe(404);
  }
});
