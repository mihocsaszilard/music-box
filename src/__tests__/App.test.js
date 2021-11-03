import { shallow } from "enzyme";
import App from "../App.jsx";

describe("App", () => {
  test("renders App component", () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper).toHaveLength(1);
  });
});
