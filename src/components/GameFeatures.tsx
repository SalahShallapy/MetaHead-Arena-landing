import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const GameFeatures = () => {
  const features = [
    {
      icon: "🏟️",
      title: "Multi-Mode Gameplay",
      description:
        "Comprehensive gaming experience with multiple play styles",
      details: [
        "🤖 Offline vs AI with adjustable difficulty",
        "👥 Local 1v1 same-device multiplayer",
        "🌐 Online real-time PvP with global leaderboards",
        "🏆 Tournament system with prize pools",
      ],
    },
    {
      icon: "⚽",
      title: "Advanced Football Mechanics",
      description:
        "Physics-based gameplay with realistic ball and player movements",
      details: [
        "Real physics simulation", 
        "Character abilities (speed, kick power, size, jump)",
        "Strategic power-up system",
        "Skill-based progression",
      ],
    },
    {
      icon: "🎴",
      title: "NFT Player System (ICRC-7)",
      description:
        "Unique digital players with verifiable ownership and distinct abilities",
      details: [
        "Common, Epic, and Legendary rarity tiers",
        "True ownership - trade, sell, transfer freely",
        "Statistical growth based on gameplay",
        "Distinct abilities and stats",
      ],
    },
    {
      icon: "💰",
      title: "Token Economy (ICRC-2)",
      description:
        "Earn real value through gameplay and participate in ICP DeFi ecosystem",
      details: [
        "Earn tokens by winning matches",
        "Purchase mystery boxes with tokens",
        "Tournament prize pools",
        "DeFi integration across ICP",
      ],
    },
    {
      icon: "📦",
      title: "Mystery Box System",
      description:
        "Provably fair random generation using ICP's randomness beacon",
      details: [
        "VRF randomness for fair outcomes",
        "Multiple box tiers with different rarities",
        "Level-based rewards",
        "Transparent on-chain odds",
      ],
    },
    {
      icon: "🏪",
      title: "Decentralized Marketplace",
      description:
        "Built-in auction system for trading NFTs without third parties",
      details: [
        "Real-time bidding on player NFTs",
        "Peer-to-peer direct trading",
        "Market-driven price discovery",
        "Minimal transaction costs on ICP",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-game-pixel to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black retro-text text-game-yellow mb-6">
            CORE FEATURES
          </h2>
          <p className="text-xl text-game-sky max-w-3xl mx-auto">
            Experience the perfect blend of competitive sports gaming and 
            true digital asset ownership on ICP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="game-card text-white bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className="text-5xl animate-pixel-bounce"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-black text-game-yellow retro-text">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-game-sky mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-white"
                    >
                      <span className="text-game-yellow mr-2">⚡</span>
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Innovation Showcase */}
        <div className="mt-16 game-card p-8 text-center bg-gradient-to-r from-game-blue/20 to-game-yellow/20">
          <h3 className="text-3xl font-black retro-text text-game-yellow mb-6">
            TECHNICAL INNOVATION
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="font-bold text-game-yellow">First ICP Sports Game</div>
              <div className="text-sm text-game-sky">Pioneering real-time gaming</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="font-bold text-game-yellow">Sub-Second Latency</div>
              <div className="text-sm text-game-sky">Real-time multiplayer</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔁</div>
              <div className="font-bold text-game-yellow">Provably Fair</div>
              <div className="text-sm text-game-sky">ICP randomness beacon</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌐</div>
              <div className="font-bold text-game-yellow">Seamless Web3</div>
              <div className="text-sm text-game-sky">No wallet complexity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
