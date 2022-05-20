import fetch from "node-fetch";

export const getData = async (urlParam: string) => {
  const url = urlParam;
  const resp = await fetch(url, { method: "GET" });
  const data = await resp.json();
  return data;
};
