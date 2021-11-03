import { shallow } from "enzyme";
import MainPage from "../components/MainPage/MainPage";

describe("MainPage", () => {
  test("renders MainPage component", () => {
    const MainPageWrapper = shallow(<MainPage />);
    expect(MainPageWrapper).toHaveLength(1);
  });
});
