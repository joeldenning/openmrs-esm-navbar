import React from "react";
import Root from "./root.component";
import { render } from "@testing-library/react";

describe(`<Root />`, () => {
  beforeEach(() => {
    // @ts-ignore
    global.fetch = jest.fn();
    // @ts-ignore
    global.fetch.mockReturnValue(new Promise(() => {}));
  });

  it(`renders Root without dying`, () => {
    render(<Root />);
  });
});
