const axios = require("axios");
const defUrl = "https://poo-po.poo/";

async function failed() {
  try {
    const response = await axios.post(
      `${defUrl}posts`,
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      },
    );
    xpect(failed()).rejects.toThrow("failed");
    console.log(response.data);
  } catch (error) {
    throw new Error("failed");
  }
}

test("get error", async () => {
  await expect(failed()).rejects.toThrow("failed");
});
