import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { CSSBaseline, ZEITUIProvider } from "@zeit-ui/react";

render(
  <ZEITUIProvider>
    <CSSBaseline>
      <App />
    </CSSBaseline>
  </ZEITUIProvider>,
  document.getElementById("root")
);
