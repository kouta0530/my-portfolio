import React from "react";
import renderer from "react-test-renderer";
import { PortfolioHeader } from "./PortfolioHeader";

test("Portfolio sample test", () => {
  const component = renderer.create(
    <PortfolioHeader headerTitle="test" navigationElements={[]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
