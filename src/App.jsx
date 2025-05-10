import { useEffect } from "react";
import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import './App.css';

function App() {
  useEffect(() => {
    // Log wallet connection
    window.addEventListener("wallet-connected", (e) => {
      console.log("Wallet connected:", e.detail);
    });
  }, []);

  const config = {
    network: "Mainnet",
    chains: ["Ethereum", "Solana"],
    rpcs: {
      Ethereum:
        "https://rpc.ankr.com/eth/08339ddc7583b986d313ff7be87313d1cc6f0e2b47121e388ba77ca3f27dc4bd",
      Solana:
        "https://rough-orbital-shadow.solana-mainnet.quiknode.pro/7d83d2c6abbe61a15762803970293b2f63a7706f",
    },
    tokens: ["UWU"],
    tokensConfig: {
      UWU: {
        key: "UWU",
        symbol: "UWU",
        icon: "https://assets.coingecko.com/coins/images/39658/standard/UWU.png?1723520795",
        nativeChain: "Solana",
        tokenId: {
          chain: "Solana",
          address: "UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z",
        },
        decimals: 6,
        foreignAssets: {
          Ethereum: {
            address: "0xBb512185bC0A907F4C1418a3d2D3DC0655Ba1144",
            decimals: 6,
          },
        },
      },
    },
    ui: {
      title: "Unicorn Bridge", // Set title in config
      defaultSourceToken: "UWU",
      defaultTargetToken: "UWU",
      disableUserInputtedTokens: true,
      searchTx: true,
      showTokenSelector: false,
    },
  };

  const theme = {
    mode: "dark",
    primary: "#FF69B4", // Hot pink
    secondary: "#9932CC", // Violet
    background: "rgba(255, 182, 193, 0.1)", // Light pink background
    text: "#800080", // Deep purple text
    button: {
      background: "linear-gradient(90deg, #FF69B4, #9932CC)",
      text: "#FFFFFF",
      border: "none",
    },
    input: {
      background: "rgba(230, 230, 250, 0.2)",
      border: "1px solid #F4A7B9",
      text: "#800080",
    },
  };

  return (
    <div className="unicorn-bridge-container">
      <h1 className="unicorn-title">🦄 Unicorn Bridge 🦄</h1>
      <p className="token-address">
        Solana UWU: UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z
      </p>
      <p className="token-address">
        Ethereum UWU: 0xBb512185bC0A907F4C1418a3d2D3DC0655Ba1144
      </p>
      <div className="wormhole-connect-container">
        <WormholeConnect config={config} theme={theme} />
      </div>
    </div>
  );
}

export default App;
