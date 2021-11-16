import { shallow } from "enzyme";
import Login from "../components/Login/Login.jsx";

describe("MainPage", () => {
  test("renders MainPage component", () => {
    const LoginWrapper = shallow(<Login />);
    expect(LoginWrapper).toHaveLength(1);
  });
});
