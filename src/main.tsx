import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { sepolia, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserRoleProvider } from "./Context/UserRoleContext.tsx";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

// Get projectId at https://cloud.walletconnect.com
const projectId = "af32d5af881e496f3551c64d1424aa96";

// Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
  themeVariables: {
    "--w3m-color-mix-strength": 40,
    "--w3m-accent": "#00aaff",
    "--w3m-border-radius-master": "8",
  },
});

// Ensure the root element exists and create the root
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <UserRoleProvider>
            <App />
          </UserRoleProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}

export { config };
