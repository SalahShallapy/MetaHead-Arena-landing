import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const Community = () => {
  const socialPlatforms = [
    {
      name: "Discord",
      icon: "💬",
      description:
        "Join our community for discussions, tournaments, and updates",
      cta: "Join Discord",
      color: "from-indigo-600 to-purple-600",
    },
    {
      name: "Twitter",
      icon: "🐦",
      description:
        "Follow for game updates, dev insights, and community highlights",
      cta: "Follow Us",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "GitHub",
      icon: "💻",
      description:
        "Explore our open-source codebase and contribute to development",
      cta: "View Repository",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-game-pixel">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black retro-text text-game-yellow mb-6">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-xl text-game-sky max-w-3xl mx-auto">
            Join thousands of gamers, collectors,
            developers, and ICP gaming enthusiasts
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <Card
              key={index}
              className={`game-card text-white bg-gradient-to-br ${platform.color} hover:scale-105 transition-all duration-300`}
            >
              <CardHeader className="text-center">
                <div
                  className="text-6xl mb-4 animate-pixel-bounce"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {platform.icon}
                </div>
                <CardTitle className="text-2xl font-black text-white retro-text">
                  {platform.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 mb-6">{platform.description}</p>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white font-bold border-2 border-white/50 hover:border-white">
                  {platform.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Benefits */}
        <div className="game-card p-8 text-center bg-gradient-to-r from-game-blue/20 to-game-yellow/20">
          <h3 className="text-3xl font-black retro-text text-game-yellow mb-8">
            COMMUNITY BENEFITS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎁</div>
              <div className="font-bold text-game-yellow">Exclusive Access</div>
              <div className="text-sm text-game-sky">
                Early access to new features
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="font-bold text-game-yellow">Direct Support</div>
              <div className="text-sm text-game-sky">
                Get help from developers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🗳️</div>
              <div className="font-bold text-game-yellow">Community Voice</div>
              <div className="text-sm text-game-sky">
                Shape game development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
