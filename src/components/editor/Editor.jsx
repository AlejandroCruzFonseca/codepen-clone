import CodeMirror from "@uiw/react-codemirror";
import { useContext } from "react";
import { CssContext, HtmlContext, JsContext } from "../../context/code-context";
import { javascript as javascriptLang } from "@codemirror/lang-javascript";
import { css as cssLang } from "@codemirror/lang-css";
import { html as htmlLang } from "@codemirror/lang-html";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

import "./editor.css";

function CodeModule({
  clearCode,
  extensions,
  handleChange,
  isMiddle,
  label,
  value,
}) {
  return (
    <div className="editor-container">
      <div className={`editor-title ${isMiddle ? "middle-title" : ""}`}>
        {label}
        <button className="close ripple" onClick={clearCode}>
          {/* X */}
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className={`code ${isMiddle ? "middle-code" : ""}`}>
        <CodeMirror
          onChange={handleChange}
          value={value}
          extensions={extensions}
          theme={vscodeDark}
        />
      </div>
    </div>
  );
}

export function HtmlCode() {
  const { html, setHtml } = useContext(HtmlContext);
  const extensions = [
    htmlLang({ matchClosingTags: true, autoCloseTags: true }),
  ];
  const handleChange = (value, _viewUpdate) => {
    setHtml(value);
  };
  const clearCode = () => setHtml("");

  return (
    <CodeModule
      clearCode={clearCode}
      extensions={extensions}
      handleChange={handleChange}
      label="HTML"
      value={html}
    />
  );
}

export function CssCode() {
  const { css, setCss } = useContext(CssContext);
  const extensions = [cssLang()];
  const handleChange = (value, _viewUpdate) => {
    setCss(value);
  };
  const clearCode = () => setCss("");

  return (
    <CodeModule
      clearCode={clearCode}
      extensions={extensions}
      handleChange={handleChange}
      isMiddle={true}
      label="CSS"
      value={css}
    />
  );
}

export function JsCode() {
  const { js, setJs } = useContext(JsContext);
  const extensions = [javascriptLang({ jsx: true })];
  const handleChange = (value, _viewUpdate) => {
    setJs(value);
  };
  const clearCode = () => setJs("");

  return (
    <CodeModule
      clearCode={clearCode}
      extensions={extensions}
      handleChange={handleChange}
      label="JavaScript"
      value={js}
    />
  );
}
