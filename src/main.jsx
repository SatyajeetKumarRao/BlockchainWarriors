import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Web3ModalProvider } from "../src/wallet/Wallet.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Web3ModalProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Web3ModalProvider>
);
