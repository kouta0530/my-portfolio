import PortfolioContact from "./PortfolioContact";
import renderer from "react-test-renderer";

test("PortfolioContact Title Props Test", () => {
  const component = renderer.create(
    <PortfolioContact
      contactHeaderTitle="TestTitle"
      contentIcons={[]}
      contentText={[]}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Portfolio Contact Icons Props Test", () => {
  const mockContentIcons = [
    {
      iconName: "testIcon",
      contentUrl: "",
      iconImagePath: "logo192.png",
    },
  ];

  const component = renderer.create(
    <PortfolioContact
      contactHeaderTitle=""
      contentIcons={mockContentIcons}
      contentText={[]}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Portfolio Contact content Text Prop Test", () => {
  const mockTexts = ["test", "test2"];
  const component = renderer.create(
    <PortfolioContact
      contactHeaderTitle=""
      contentIcons={[]}
      contentText={mockTexts}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
