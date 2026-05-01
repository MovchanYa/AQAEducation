const axios = require("axios");
const defUrl = "https://jsonplaceholder.typicode.com/";

test("get, email", async () => {
  const response = await axios.get(`${defUrl}comments/6`, {
    headers: {
      Accept: "application/json",
    },
  });
  expect(response.status).toEqual(200);
  expect(response.data).toHaveProperty("email");
  expect(typeof response.data.email).toBe("string");
  console.log(response.data.email);
});

test("get, postId", async () => {
  const response = await axios.get(`${defUrl}comments/3`, {
    headers: {
      Accept: "application/json",
    },
  });
  expect(response.status).toEqual(200);
  expect(response.data.postId).toBeDefined();
  expect(response.data.id).toBe(3);
  console.log(response.data.postId);
});

test("get, catchPhrase", async () => {
  const response = await axios.get(`${defUrl}users/5`, {
    headers: {
      Accept: "application/json",
    },
  });
  expect(response.status).toEqual(200);
  expect(response.data.company.catchPhrase).toBeDefined();
  expect(typeof response.data.company.catchPhrase).toBe("string");
  console.log(response.data.company.catchPhrase);
});

test("post, post", async () => {
  const response = await axios.post(
    `${defUrl}posts`,
    {
      email: "salman@roadtocareer.net",
      password: "1234",
    },
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    },
  );
  expect(response.status).toEqual(201);
  expect(response.data.email).toBe("salman@roadtocareer.net");
  expect(response.data).toHaveProperty("id");
  console.log(response.data);
});

test("post, user", async () => {
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
  expect(response.status).toBe(201);
  console.log(response.data);
});
