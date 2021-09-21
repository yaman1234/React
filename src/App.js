import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App(props) {
  return (
    <>
      <Navbar title="TextUtils" about="About us  Title" />

      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
