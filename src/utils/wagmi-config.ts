import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [sepolia],

  connectors: [
    injected(),
    // metaMask({
    //   dappMetadata: { name: "Wagmi Front-End" },
    // }),
  ],
  ssr: true,
  transports: {
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
