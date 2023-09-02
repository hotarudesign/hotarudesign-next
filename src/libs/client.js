import { createClient } from "microcms-js-sdk"; //ES6

export const client = createClient({
  serviceDomain: "hotarudesign",
  apiKey: process.env.API_KEY,
});
