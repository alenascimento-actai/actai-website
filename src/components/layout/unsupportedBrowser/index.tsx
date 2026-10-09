interface UnsupportedBrowserProps {
  dict: {
    unsupportedBrowser: {
      title: string;
      description: string;
      button: string;
    };
  };
}

// O IE não entende @layer nem variáveis CSS (base do Tailwind v4) e também não
// executa o JS do Next/React. Por isso o aviso usa apenas CSS/JS que o IE
// interpreta, embutidos no HTML, sem depender do globals.css.
// A media query -ms-high-contrast só é reconhecida pelo IE 10/11.
const styles = `
.unsupported-browser { display: none; }
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .unsupported-browser {
    display: block;
    max-width: 560px;
    margin: 80px auto;
    padding: 0 24px;
    font-family: "Segoe UI", Arial, sans-serif;
    text-align: center;
    color: #000000;
  }
  .unsupported-browser ~ * { display: none !important; }
  .unsupported-browser h1 { margin: 0 0 16px; font-size: 26px; font-weight: 700; }
  .unsupported-browser p { margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #444444; }
  .unsupported-browser a {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 36px;
    background-color: #000000;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
  }
}
`;

// Aponta o botão para a página atual usando o protocolo que abre o Edge.
const script = `
(function () {
  if (!document.documentMode) return;
  var link = document.getElementById("unsupported-browser-link");
  if (link) link.href = "microsoft-edge:" + window.location.href;
})();
`;

export const UnsupportedBrowser = ({ dict }: UnsupportedBrowserProps) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="unsupported-browser">
        <h1>{dict.unsupportedBrowser.title}</h1>
        <p>{dict.unsupportedBrowser.description}</p>
        <a id="unsupported-browser-link" href="microsoft-edge:">
          {dict.unsupportedBrowser.button}
        </a>
      </div>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
};
