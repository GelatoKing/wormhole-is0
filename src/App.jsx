import { useEffect } from "react";
import WormholeConnect from "@wormhole-foundation/wormhole-connect";

function App() {
  useEffect(() => {
    // Inject CSS for custom styling and Wormhole Connect overrides
    const style = document.createElement("style");
    style.innerHTML = `
      /* Root container for the app */
      .unicorn-bridge-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-width: 100vw;
        background: linear-gradient(135deg, #FFB6C1 0%, #E6E6FA 100%);
        padding: 20px;
        font-family: 'Poppins', sans-serif;
      }

      /* Title styling */
      .unicorn-title {
        font-size: 36px;
        font-weight: 700;
        color: #FF69B4;
        text-shadow: 2px 2px 4px rgba(128, 0, 128, 0.3);
        margin-bottom: 10px;
        text-align: center;
      }

      /* Token address styling */
      .token-address {
        font-size: 18px;
        font-weight: 500;
        color: #9932CC;
        text-align: center;
        margin: 5px 0;
        background: rgba(255, 182, 193, 0.2);
        padding: 8px 16px;
        border-radius: 8px;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .token-address:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(255, 105, 180, 0.3);
      }

      /* Wormhole Connect container */
      .wormhole-connect-container {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 16px rgba(128, 0, 128, 0.2);
        max-width: 600px;
        width: 100%;
        margin-top: 20px;
      }

      /* Hide token dropdown */
      .token-selector, .select-token-dropdown, [class*="token-select"], [class*="dropdown"] {
        display: none !important;
      }

      /* Style token display */
      .token-display, [class*="token-info"] {
        display: flex !important;
        align-items: center;
        pointer-events: none;
        color: #FF69B4 !important;
      }

      /* Style token icons */
      .token-display img, [class*="token-info"] img {
        width: 32px !important;
        height: 32px !important;
        border-radius: 50%;
        margin-right: 8px;
        border: 2px solid #F4A7B9;
      }

      /* Style Ethereum emptyIcon placeholder */
      .css-1kaqyt1-emptyIcon {
        background-image: url('https://assets.coingecko.com/coins/images/39658/standard/UWU.png?1723520795');
        background-size: cover;
        width: 32px !important;
        height: 32px !important;
        border-radius: 50%;
        border: 2px solid #F4A7B9;
        margin-right: 8px;
      }

      /* Style buttons */
      [class*="button"], button {
        background: linear-gradient(90deg, #FF69B4, #9932CC) !important;
        color: white !important;
        border: none !important;
        border-radius: 8px !important;
        padding: 10px 20px !important;
        font-weight: 600 !important;
        transition: transform 0.2s, box-shadow 0.2s !important;
      }

      [class*="button"]:hover, button:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(255, 105, 180, 0.4);
      }

      /* Style inputs */
      input, [class*="input"] {
        background: rgba(230, 230, 250, 0.2) !important;
        border: 1px solid #F4A7B9 !important;
        color: #800080 !important;
        border-radius: 8px !important;
        padding: 8px !important;
      }

      input:focus, [class*="input"]:focus {
        outline: none !important;
        border-color: #FF69B4 !important;
        box-shadow: 0 0 8px rgba(255, 105, 180, 0.3) !important;
      }

      /* Responsive design */
      @media (max-width: 600px) {
        .unicorn-title {
          font-size: 28px;
        }
        .token-address {
          font-size: 16px;
          padding: 6px 12px;
        }
        .wormhole-connect-container {
          padding: 15px;
        }
      }
    `;
    document.head.appendChild(style);

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
