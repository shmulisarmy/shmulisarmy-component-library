import { render } from "solid-js/web";
import nav from "./index";

describe("nav component", () => {
  test("it renders without crashing", () => {
    render(() => <nav />);
  });
});
