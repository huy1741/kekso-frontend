import { expect, test } from "@jest/globals";
import apiUtils from "../services/api";
import axios from "axios";
jest.mock("axios");

test("mock axios get single order's products", async () => {
  expect.assertions(1);
  // Now mock axios get method
  const payload = {
    data: [
      { ProductName: "Sir Rodney's Scones" },
      { ProductName: "Manjimup Dried Apples" },
    ],
  };
  axios.get = jest.fn().mockResolvedValue(payload);
  await expect(apiUtils.getProductData(10397)).resolves.toEqual(payload.data);
});
