import ky from "ky";

export const client = ky.create({
  prefixUrl: "https://api.realworld.io",
});
