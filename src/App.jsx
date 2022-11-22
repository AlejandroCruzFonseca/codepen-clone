import { useState } from "react";
import "./App.css";
import IframePane from "./components/iframe-pane/IframePane";
import TopPane from "./components/top-pane/TopPane";
import { CssContext, HtmlContext, JsContext } from "./context/code-context";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <HtmlContext.Provider value={{ html, setHtml }}>
      <CssContext.Provider value={{ css, setCss }}>
        <JsContext.Provider value={{ js, setJs }}>
          <TopPane />
          <IframePane />
        </JsContext.Provider>
      </CssContext.Provider>
    </HtmlContext.Provider>
  );
}

export default App;
