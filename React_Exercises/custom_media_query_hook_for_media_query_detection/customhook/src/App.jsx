import useMediaQuery from "./useMediaQuery";
import "./App.css";
import useMediaQuery2 from "./useMediaQuery2";

function App() {
  const isMobile = useMediaQuery2("(max-width: 480px)");

  return (
    <div>
      <h1>{isMobile ? "Mobile View 📱" : "Desktop View 💻"}</h1>
      {isMobile && <p>This text only shows on small screens.</p>}
    </div>
  );
}

export default App;
