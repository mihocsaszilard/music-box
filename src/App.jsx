import "./App.scss";
import MainPage from "./components/MainPage/mainPage";

const user = {
  id: 1,
  name: "Peter",
  age: 20,
};

function App() {
  return (
    <div className="App">
      <MainPage user={user} />
    </div>
  );
}

export default App;
