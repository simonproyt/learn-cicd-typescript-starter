import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null for a non-ApiKey authorization scheme", () => {
    expect(getAPIKey({ authorization: "Bearer abc123" })).toBeNull();
  });

  test("returns null for an invalid ApiKey header with no key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns the API key when the ApiKey header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey abc123" })).toBe("abc123");
  });
});
