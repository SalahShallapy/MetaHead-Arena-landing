import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const ICPIntegration = () => {
  const icpFeatures = [
    {
      icon: "🎮",
      title: "Digital Assets",
      description: "Your game assets are stored securely on the Internet Computer",
      tech: "ICP Standards",
      benefits: [
        "True ownership",
        "Cross-canister compatibility",
        "Immutable storage",
      ],
    },
    {
      icon: "💰",
      title: "ICP Tokens",
      description: "Earn and trade tokens directly on the Internet Computer",
      tech: "Native ICP Integration",
      benefits: ["Low transaction fees", "Fast transfers", "Native integration"],
    },
    {
      icon: "🔒",
      title: "Internet Identity",
      description: "Secure authentication without passwords or seed phrases",
      tech: "Cryptographic Authentication",
      benefits: ["No passwords needed", "Biometric login", "Privacy-first"],
    },
    {
      icon: "🧾",
      title: "Smart Canisters",
      description: "Efficient and scalable canister-based game logic",
      tech: "Motoko & Rust",
      benefits: ["Energy efficient", "Scalable", "Developer friendly"],
    },
    {
      icon: "⚡",
      title: "ICP Ecosystem",
      description: "Built entirely on the Internet Computer infrastructure",
      tech: "Decentralized Cloud",
      benefits: ["No cloud providers", "Truly decentralized", "Reverse gas model"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-game-pixel">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black retro-text text-game-yellow mb-6">
            ICP INTEGRATION
          </h2>
          <p className="text-xl text-game-sky max-w-3xl mx-auto">
            Built on the Internet Computer Protocol for a truly decentralized experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {icpFeatures.map((feature, index) => (
            <Card
              key={index}
              className="game-card text-white bg-gradient-to-br from-blue-900/50 to-purple-900/50 hover:scale-105 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className="text-5xl animate-pixel-bounce"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-black text-game-yellow retro-text">
                      {feature.title}
                    </CardTitle>
                    <div className="text-sm text-game-blue font-semibold mt-1">
                      {feature.tech}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-game-sky mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-white"
                    >
                      <span className="text-game-yellow mr-2">⚡</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="game-card p-8 text-center bg-gradient-to-r from-game-blue/20 to-game-yellow/20">
          <h3 className="text-3xl font-black retro-text text-game-yellow mb-6">
            INTERNET COMPUTER ARCHITECTURE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">∞</div>
              <div className="font-bold text-white">Internet Computer</div>
              <div className="text-sm text-game-sky">Main Platform</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔐</div>
              <div className="font-bold text-white">Internet Identity</div>
              <div className="text-sm text-game-sky">Authentication</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📦</div>
              <div className="font-bold text-white">Canisters</div>
              <div className="text-sm text-game-sky">Smart Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="font-bold text-white">ICP Protocol</div>
              <div className="text-sm text-game-sky">Native Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICPIntegration;
