import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const Roadmap = () => {
  const roadmapItems = [
    {
      date: "Q3 2024",
      title: "MVP Development",
      status: "in-progress",
      icon: "🔧",
      items: [
        {
          title: "Core Game Engine",
          description: "Physics-based football mechanics with Phaser.js",
          completed: true,
        },
        {
          title: "ICP Integration",
          description: "Smart canisters for game logic and assets",
          completed: false,
        },
        {
          title: "Player NFT System",
          description: "ICRC-7 standard for character ownership",
          completed: false,
        },
        {
          title: "Token Economy",
          description: "ICRC-2 tokens for in-game rewards",
          completed: false,
        },
      ],
    },
    {
      date: "Q4 2024",
      title: "Beta Launch",
      status: "planned",
      icon: "🎯",
      items: [
        {
          title: "Multiplayer System",
          description: "Real-time PvP with matchmaking",
          completed: false,
        },
        {
          title: "Tournament Features",
          description: "Competitive events and leaderboards",
          completed: false,
        },
        {
          title: "Marketplace Integration",
          description: "NFT trading and auction system",
          completed: false,
        },
      ],
    },
    {
      date: "Q1 2025",
      title: "Full Release",
      status: "future",
      icon: "🚀",
      items: [
        {
          title: "Advanced Features",
          description: "AI coaching and analytics",
          completed: false,
        },
        {
          title: "Mobile Support",
          description: "Cross-platform gameplay",
          completed: false,
        },
        {
          title: "Community Tools",
          description: "Guild systems and social features",
          completed: false,
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-game-pixel to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black retro-text text-game-yellow mb-6">
            DEVELOPMENT ROADMAP
          </h2>
          <p className="text-xl text-game-sky max-w-3xl mx-auto">
            Our transparent journey to build the future of ICP gaming
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-game-yellow to-game-blue"></div>

          {roadmapItems.map((phase, index) => (
            <div key={index} className="relative mb-16">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-game-yellow to-game-blue rounded-full flex items-center justify-center text-2xl font-bold border-4 border-gray-900 z-10">
                {phase.icon}
              </div>

              {/* Content */}
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className={`game-card text-white ${
                    phase.status === 'in-progress' 
                      ? 'bg-gradient-to-br from-orange-900/50 to-yellow-900/50' 
                      : phase.status === 'planned'
                      ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50'
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50'
                  } hover:scale-105 transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-black text-game-yellow retro-text">
                          {phase.title}
                        </CardTitle>
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                          phase.status === 'in-progress' 
                            ? 'bg-orange-600' 
                            : phase.status === 'planned'
                            ? 'bg-blue-600'
                            : 'bg-gray-600'
                        }`}>
                          {phase.date}
                        </div>
                      </div>
                      <div className={`text-sm px-3 py-1 rounded-full w-fit ${
                        phase.status === 'in-progress' 
                          ? 'bg-orange-600/30 text-orange-200' 
                          : phase.status === 'planned'
                          ? 'bg-blue-600/30 text-blue-200'
                          : 'bg-gray-600/30 text-gray-200'
                      }`}>
                        {phase.status === 'in-progress' ? '🔧 In Development' :
                         phase.status === 'planned' ? '📋 Planned' : '🔮 Future'}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {phase.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-l-4 border-game-blue pl-4">
                            <div className="flex items-start gap-3">
                              <div className={`text-2xl ${
                                item.completed ? '✅' : '⏳'
                              }`}></div>
                              <div>
                                <div className="font-bold text-white text-lg">
                                  {item.title}
                                </div>
                                <div className="text-sm text-game-sky">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="mt-20 text-center">
          <div className="game-card p-8 bg-gradient-to-r from-orange-900/30 to-yellow-900/30">
            <h3 className="text-3xl font-black retro-text text-game-yellow mb-6">
              🔧 CURRENT STATUS
            </h3>
            <p className="text-xl text-white mb-6 max-w-4xl mx-auto">
              We're actively developing MetaHead Arena with focus on quality and innovation.
              Our transparent approach keeps the community informed about real progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="font-bold text-game-yellow">Active Development</div>
                <div className="text-sm text-game-sky">Core features in progress</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔍</div>
                <div className="font-bold text-game-yellow">Transparent Process</div>
                <div className="text-sm text-game-sky">Regular community updates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="font-bold text-game-yellow">Quality Focus</div>
                <div className="text-sm text-game-sky">Building it right, not fast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 