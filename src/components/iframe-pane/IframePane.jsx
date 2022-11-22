import { useContext } from "react";
import { CssContext, HtmlContext, JsContext } from "../../context/code-context";

const doc = (html, css, js) => `
<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
</html>
`;

export default function IframePane() {
  const { html } = useContext(HtmlContext);
  const { css } = useContext(CssContext);
  const { js } = useContext(JsContext);

  const srcDoc = doc(html, css, js);

  return (
    <div className="pane">
      <iframe
        className="output"
        sandbox="allow-scripts"
        title="output"
        srcDoc={srcDoc}
      />
    </div>
  );
}
