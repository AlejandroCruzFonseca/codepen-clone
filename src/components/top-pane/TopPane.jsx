import { CssCode, HtmlCode, JsCode } from "../editor/Editor";
import "./top-pane.css";

export default function TopPane() {
  return (
    <div className="pane top-pane">
      <HtmlCode />
      <CssCode />
      <JsCode />
    </div>
  );
}
