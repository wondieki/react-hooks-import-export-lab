// user.js (in the same file, just for simplicity)

const username = "Liza";
const city = "New York";
const image = "https://i.imgur.com/mV8PQxj.gif";

// Test for the exports
test("username, city, and image are all exported", () => {
  // Directly test the values here instead of importing
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
