import React from "react";
import ReactDOM from "react-dom/client";
import { createStitches } from "@stitches/react";

const { styled, globalCss } = createStitches();

const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    fontFamily:
      "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  },
  "*::before": { boxSizing: "border-box", margin: 0, padding: 0 },
  "*::after": { boxSizing: "border-box", margin: 0, padding: 0 },
  "a, button, img": {
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
  },
  button: { backgroundColor: "transparent", border: "none", outline: "none" },
  html: {
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "transparent transparent",
  },
  body: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    background: "radial-gradient(circle closest-side, mediumpurple, black, cyan)",
    backgroundSize: "50px 50px",
  },
});

const Item = styled("aside", {
  "--size": "20px",
  position: "absolute",
  width: "100%",
  height: "100vh",
  background:
    "radial-gradient(currentcolor 9px, lime 9px, blue 38px, blue 18px)",
  backgroundSize: "var(--size) var(--size)",
  mixBlendMode: "overlay",
  variants: {
    variant: {
      one: { color: "rgb(0, 102, 255)", backgroundPosition: "-25px -25px" },
      two: { color: "rgb(255, 50, 50)", backgroundPosition: "-35px -35px" },
      three: { color: "rgb(50, 205, 50)", backgroundPosition: "25px 25px" },
      four: { color: "rgb(255, 165, 0)", backgroundPosition: "35px 35px" },
    },
  },
});

function App() {
  globalStyles();
  return (
    <>
      <Item variant="one" />
      <Item variant="two" />
      <Item variant="three" />
      <Item variant="four" />
    </>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
