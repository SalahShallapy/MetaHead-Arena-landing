import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const TechStack = () => {
  const techStack = [
    {
      category: "Game Engine",
      icon: "🎮",
      technologies: [
        {
          name: "Phaser.js",
          description: "Powerful 2D game framework for pixel-perfect gameplay",
        },
        {
          name: "TypeScript",
          description: "Type-safe development for robust game logic",
        },
        { name: "Canvas API", description: "Hardware-accelerated rendering" },
      ],
    },
    {
      category: "Frontend",
      icon: "⚡",
      technologies: [
        {
          name: "React",
          description: "Modern UI framework for optimal performance",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first styling for pixel-perfect UI",
        },
        {
          name: "Vite",
          description: "Fast build tool and development server",
        },
      ],
    },
    {
      category: "Real-time",
      icon: "🔗",
      technologies: [
        {
          name: "Socket.IO",
          description: "Real-time multiplayer communication",
        },
        { name: "WebRTC", description: "Direct peer-to-peer connections" },
        { name: "Redis", description: "Session management and caching" },
      ],
    },
    {
      category: "Internet Computer",
      icon: "🧠",
      technologies: [
        { name: "ICP Protocol", description: "Decentralized cloud computing" },
        { name: "Internet Identity", description: "Secure authentication system" },
        { name: "Motoko", description: "Native programming language for ICP" },
        { name: "Canisters", description: "Smart contracts on Internet Computer" },
      ],
    },
  ];

  const challenges = [
    {
      title: "First-time Phaser.js Integration",
      description: "Learning game physics and sprite management from scratch",
      solution: "Extensive prototyping and community support",
      status: "Solved ✅",
    },
    {
      title: "Lost Team Member Mid-Development",
      description:
        "Key developer departure during critical blockchain integration phase",
      solution: "Adapted architecture and took on additional responsibilities",
      status: "Overcame 💪",
    },
    {
      title: "Online Mode Incomplete",
      description: "Real-time multiplayer needs additional development time",
      solution: "Focusing on offline modes first, online coming in v2",
      status: "Roadmap 🛣️",
    },
    {
      title: "Ball Physics Bug",
      description: "Collision detection issues in offline mode",
      solution: "Physics engine optimization in progress",
      status: "In Progress 🔧",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-game-pixel">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black retro-text text-game-yellow mb-6">
            TECH STACK
          </h2>
          <p className="text-xl text-game-sky max-w-3xl mx-auto">
            Built with cutting-edge technologies for optimal performance and
            scalability
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {techStack.map((category, index) => (
            <Card
              key={index}
              className="game-card text-white bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div
                  className="text-5xl mb-4 animate-pixel-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {category.icon}
                </div>
                <CardTitle className="text-2xl font-black text-game-yellow retro-text">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="border-l-4 border-game-blue pl-4">
                      <div className="font-bold text-white text-lg">
                        {tech.name}
                      </div>
                      <div className="text-sm text-game-sky">
                        {tech.description}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Challenges Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-black retro-text text-game-yellow text-center mb-12">
            CHALLENGES & SOLUTIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="game-card text-white bg-gradient-to-br from-red-900/30 to-orange-900/30"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-black text-game-yellow retro-text flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    {challenge.title}
                  </CardTitle>
                  <div
                    className={`text-sm font-bold px-3 py-1 rounded-full inline-block w-fit ${
                      challenge.status.includes("✅")
                        ? "bg-green-600"
                        : challenge.status.includes("💪")
                        ? "bg-blue-600"
                        : challenge.status.includes("🛣️")
                        ? "bg-yellow-600"
                        : "bg-orange-600"
                    }`}
                  >
                    {challenge.status}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-game-sky font-semibold">
                        Problem:{" "}
                      </span>
                      <span className="text-white">
                        {challenge.description}
                      </span>
                    </div>
                    <div>
                      <span className="text-game-sky font-semibold">
                        Solution:{" "}
                      </span>
                      <span className="text-white">{challenge.solution}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="game-card p-8 text-center bg-gradient-to-r from-game-blue/20 to-game-yellow/20">
          <h3 className="text-3xl font-black retro-text text-game-yellow mb-8">
            CLEAN COMPONENT ARCHITECTURE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="font-bold text-game-yellow text-lg">
                Frontend Layer
              </div>
              <div className="text-sm text-white space-y-1">
                <div>• React Components</div>
                <div>• Game UI States</div>
                <div>• Identity Integration</div>
                <div>• Responsive Design</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-bold text-game-yellow text-lg">
                Game Layer
              </div>
              <div className="text-sm text-white space-y-1">
                <div>• Phaser.js Engine</div>
                <div>• Physics Simulation</div>
                <div>• Sprite Management</div>
                <div>• Input Handling</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-bold text-game-yellow text-lg">
                ICP Layer
              </div>
              <div className="text-sm text-white space-y-1">
                <div>• Smart Canisters</div>
                <div>• Asset Management</div>
                <div>• Token Economy</div>
                <div>• Identity System</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
