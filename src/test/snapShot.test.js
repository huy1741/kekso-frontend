import renderer from "react-test-renderer";
import App from "../App";
import { act } from "react-dom/test-utils";
it("renders the app correctly", async () => {
  let component;
  await act(async () => {
    component = await renderer.create(<App />);
  });
  await expect(component.toJSON()).toMatchSnapshot();
});
