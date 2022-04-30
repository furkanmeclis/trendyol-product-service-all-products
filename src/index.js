import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const element = document.querySelector('trendyol-all-product-service');
if (element) {
  ReactDOM.render(
    <App
      apiKey={element.getAttribute('api-key')}
      supplierId={element.getAttribute('supplier-id')}
    />,
    element
  );
}