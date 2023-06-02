import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import {
  localWallet,
  smartWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import {
  accountFactoryContractAddress,
  chain,
  thirdwebApiKey,
} from "./const/constants";
import "./styles/globals.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={chain}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0x8d619F86521f7162B9B5ffBD2951355a5e12D6d3", // Address of your account factory smart contract
          thirdwebApiKey: "2a5683775c260409499d72f7494832e77cc696afb3da4a97daed349ccf5d45a29e6283e95e2f2bc5d73d0c17c0771afadf13978712330ee3bedd39ade64f422b", // The API key you got from the previous step
          gasless: true,
          personalWallets: [
            localWallet({
              persist: true,
            }),
          ],
        }),
      ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
