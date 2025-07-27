import React from 'react';

const ProjectStructure = () => {
  const canisterInfo = [
    {
      name: "game_token",
      icon: "🪙",
      description: "ICRC-1 compliant token canister. Manages the game's native currency 'FootballCoin' (FBC) with minting, burning, and transfer capabilities.",
      color: "from-yellow-900/50 to-orange-900/50",
      gradient: "bg-gradient-to-br from-yellow-600/20 to-orange-600/20"
    },
    {
      name: "player_nft",
      icon: "🎴",
      description: "ICRC-7 compliant NFT canister. Creates and manages player cards with unique stats, rarity levels, and upgrade systems.",
      color: "from-purple-900/50 to-pink-900/50",
      gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20"
    },
    {
      name: "auction_factory",
      icon: "🏭",
      description: "Factory pattern canister that creates individual auction instances. Manages the lifecycle of all auction canisters in the system.",
      color: "from-blue-900/50 to-cyan-900/50",
      gradient: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
    },
    {
      name: "auction",
      icon: "⚖️",
      description: "Template canister for individual auctions. Handles bidding logic, escrow functionality, and automatic auction resolution.",
      color: "from-green-900/50 to-emerald-900/50",
      gradient: "bg-gradient-to-br from-green-600/20 to-emerald-600/20"
    },
    {
      name: "mystery_box",
      icon: "🎁",
      description: "Random NFT generation system using ICP's native randomness. Offers different box types with varying rarity distributions.",
      color: "from-red-900/50 to-rose-900/50",
      gradient: "bg-gradient-to-br from-red-600/20 to-rose-600/20"
    },
    {
      name: "game_engine",
      icon: "🎮",
      description: "Core game logic canister. Manages matches, validates moves, calculates rewards, and handles anti-cheat mechanisms.",
      color: "from-indigo-900/50 to-violet-900/50",
      gradient: "bg-gradient-to-br from-indigo-600/20 to-violet-600/20"
    }
  ];

  const fileTypes = [
    { icon: "📁", name: "Folders", color: "#ffd700" },
    { icon: "🦀", name: "Rust Canisters", color: "#bd93f9" },
    { icon: "🦀", name: "Rust Files (.rs)", color: "#ff6b35" },
    { icon: "⚙️", name: "Config Files", color: "#64ffda" },
    { icon: "🌐", name: "Web Files", color: "#ff79c6" },
    { icon: "📜", name: "Script Files", color: "#50fa7b" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 font-mono">
            🏈 PROJECT STRUCTURE
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto leading-relaxed">
            Complete ICP football game built with 6 Rust canisters - each handling a specific aspect of the game ecosystem
          </p>
        </div>

        {/* File Tree Structure */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 mb-12 border border-gray-600/30 backdrop-blur-sm">
          <h3 className="text-2xl font-black text-yellow-400 mb-6 text-center font-mono">
            📁 File Structure
          </h3>
          <div className="bg-gray-900/90 rounded-xl p-6 font-mono text-sm overflow-x-auto border border-gray-700/50">
            <div className="text-yellow-400 font-bold text-lg mb-2 bg-yellow-400/10 px-3 py-1 rounded border-l-4 border-yellow-400">football_game/</div>
            <div className="text-gray-400">├── <span className="text-cyan-400 font-semibold">Cargo.toml</span> <span className="text-gray-500">(workspace)</span></div>
            <div className="text-gray-400">├── <span className="text-cyan-400 font-semibold">dfx.json</span></div>
            <div className="text-gray-400">├── <span className="text-white font-semibold">README.md</span></div>
            <div className="text-gray-400">├── <span className="text-white font-semibold">.gitignore</span></div>
            <div className="text-gray-400">├── <span className="text-yellow-400 font-bold">src/</span></div>
            <div className="text-gray-400">│   ├── <span className="text-purple-300 font-bold">game_token/</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">Cargo.toml</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">game_token.did</span></div>
            <div className="text-gray-400">│   │   └── <span className="text-yellow-400">src/</span></div>
            <div className="text-gray-400">│   │       └── <span className="text-orange-400 font-semibold">lib.rs</span></div>
            <div className="text-gray-400">│   ├── <span className="text-purple-300 font-bold">player_nft/</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">Cargo.toml</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">player_nft.did</span></div>
            <div className="text-gray-400">│   │   └── <span className="text-yellow-400">src/</span></div>
            <div className="text-gray-400">│   │       └── <span className="text-orange-400 font-semibold">lib.rs</span></div>
            <div className="text-gray-400">│   ├── <span className="text-purple-300 font-bold">auction_factory/</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">Cargo.toml</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">auction_factory.did</span></div>
            <div className="text-gray-400">│   │   └── <span className="text-yellow-400">src/</span></div>
            <div className="text-gray-400">│   │       └── <span className="text-orange-400 font-semibold">lib.rs</span></div>
            <div className="text-gray-400">│   ├── <span className="text-purple-300 font-bold">auction/</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">Cargo.toml</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">auction.did</span></div>
            <div className="text-gray-400">│   │   └── <span className="text-yellow-400">src/</span></div>
            <div className="text-gray-400">│   │       └── <span className="text-orange-400 font-semibold">lib.rs</span></div>
            <div className="text-gray-400">│   ├── <span className="text-purple-300 font-bold">mystery_box/</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">Cargo.toml</span></div>
            <div className="text-gray-400">│   │   ├── <span className="text-cyan-400">mystery_box.did</span></div>
            <div className="text-gray-400">│   │   └── <span className="text-yellow-400">src/</span></div>
            <div className="text-gray-400">│   │       └── <span className="text-orange-400 font-semibold">lib.rs</span></div>
            <div className="text-gray-400">│   └── <span className="text-purple-300 font-bold">game_engine/</span></div>
            <div className="text-gray-400">│       ├── <span className="text-cyan-400">Cargo.toml</span></div>
            <div className="text-gray-400">│       ├── <span className="text-cyan-400">game_engine.did</span></div>
            <div className="text-gray-400">│       └── <span className="text-yellow-400">src/</span></div>
            <div className="text-gray-400">│           └── <span className="text-orange-400 font-semibold">lib.rs</span></div>
            <div className="text-gray-400">├── <span className="text-yellow-400 font-bold">frontend/</span></div>
            <div className="text-gray-400">│   ├── <span className="text-pink-400 font-semibold">index.html</span></div>
            <div className="text-gray-400">│   ├── <span className="text-pink-400 font-semibold">index.js</span></div>
            <div className="text-gray-400">│   └── <span className="text-yellow-400 font-bold">assets/</span></div>
            <div className="text-gray-400">└── <span className="text-yellow-400 font-bold">scripts/</span></div>
            <div className="text-gray-400">    ├── <span className="text-green-400 font-semibold">deploy.sh</span></div>
            <div className="text-gray-400">    ├── <span className="text-green-400 font-semibold">upgrade.sh</span></div>
            <div className="text-gray-400">    └── <span className="text-green-400 font-semibold">setup.sh</span></div>
          </div>
        </div>

        {/* File Type Legend */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {fileTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 text-center border border-gray-600/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">{type.icon}</div>
              <div 
                className="font-bold text-sm font-mono"
                style={{ color: type.color }}
              >
                {type.name}
              </div>
            </div>
          ))}
        </div>

        {/* Canister Information */}
        <div className="mb-12">
          <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-8 text-center font-mono">
            🦀 RUST CANISTERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canisterInfo.map((canister, index) => (
              <div
                key={index}
                className={`${canister.gradient} rounded-xl p-6 border border-gray-600/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{canister.icon}</div>
                  <h4 className="text-xl font-black text-yellow-400 font-mono">
                    {canister.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {canister.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Overview */}
        <div className="bg-gradient-to-r from-blue-900/20 to-yellow-900/20 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
          <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 text-center font-mono">
            📋 TECHNICAL OVERVIEW
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4 font-mono">🏗️ Architecture Highlights</h4>
              <div className="space-y-3 text-cyan-300">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>6 interconnected Rust canisters</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>ICRC-1 & ICRC-7 standard compliance</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>Factory pattern for scalable auctions</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>Native ICP randomness integration</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4 font-mono">🎯 Development Features</h4>
              <div className="space-y-3 text-cyan-300">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>Automated deployment scripts</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>Modular canister architecture</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>Comprehensive testing suite</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span>Type-safe Rust implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="mt-12 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
          <h3 className="text-2xl font-black text-green-400 mb-6 text-center font-mono">
            🚀 DEVELOPMENT PHASES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-600/30">
              <div className="text-green-400 font-bold text-center mb-2">✅ Phase 1</div>
              <div className="text-sm text-center text-gray-300">Project Setup</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-600/30">
              <div className="text-green-400 font-bold text-center mb-2">✅ Phase 2</div>
              <div className="text-sm text-center text-gray-300">Authentication</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-600/30">
              <div className="text-green-400 font-bold text-center mb-2">✅ Phase 3</div>
              <div className="text-sm text-center text-gray-300">Core Canisters</div>
            </div>
            <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-600/30">
              <div className="text-yellow-400 font-bold text-center mb-2">⏳ Phase 4</div>
              <div className="text-sm text-center text-gray-300">Frontend Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStructure;