import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pixel-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pixel-bounce"></div>
        <div
          className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pixel-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-32 w-12 h-12 bg-white/10 rounded-full animate-pixel-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Brain Emoji and Title */}
        <div className="mb-8 animate-slide-in-left">
          <div className="text-8xl mb-4 animate-pixel-bounce">🧠</div>
          <h1 className="text-6xl md:text-8xl font-black retro-text text-white mb-4">
            METAHEAD
          </h1>
          <h2 className="text-4xl md:text-6xl font-black retro-text text-game-yellow mb-6">
            ARENA
          </h2>
        </div>

        {/* Tagline */}
        <div className="mb-8 animate-slide-in-right">
          <p className="text-2xl md:text-3xl font-bold text-white neon-glow mb-4">
            🔧 Building the future of competitive football gaming on ICP
          </p>
          <p className="text-xl md:text-2xl text-game-sky mb-8 max-w-4xl mx-auto">
            First ICP-native competitive sports game in development - featuring real-time multiplayer, 
            provably fair mechanics, and seamless digital asset integration.
          </p>
        </div>

        {/* Development Status */}
        <div className="mb-8 game-card p-6 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-3xl">🔧</div>
            <div className="text-xl font-bold text-game-yellow">Currently in Development</div>
          </div>
          <p className="text-game-sky">
            Join our community to follow progress and get early access when ready!
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="game-card p-4 text-center bg-gradient-to-br from-green-900/50 to-blue-900/50">
            <div className="text-3xl mb-2">⚽</div>
            <div className="font-black text-game-yellow text-lg">Skill-Based</div>
            <div className="text-sm text-game-sky">Real football mechanics</div>
          </div>
          <div className="game-card p-4 text-center bg-gradient-to-br from-blue-900/50 to-purple-900/50">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-black text-game-yellow text-lg">True Ownership</div>
            <div className="text-sm text-game-sky">Your assets, your control</div>
          </div>
          <div className="game-card p-4 text-center bg-gradient-to-br from-purple-900/50 to-pink-900/50">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-black text-game-yellow text-lg">ICP Native</div>
            <div className="text-sm text-game-sky">Built for Internet Computer</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-glow-pulse">
          <Button
            size="lg"
            className="bg-game-yellow hover:bg-game-yellow-dark text-black font-black text-xl px-8 py-4 game-card border-4 border-black"
          >
            💬 Join Community
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-game-blue hover:bg-game-blue-dark text-white font-black text-xl px-8 py-4 game-card border-4 border-game-yellow"
          >
            📖 Follow Progress
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-game-green hover:bg-game-green-dark text-white font-black text-xl px-8 py-4 game-card border-4 border-game-yellow"
          >
            🚀 View Roadmap
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
