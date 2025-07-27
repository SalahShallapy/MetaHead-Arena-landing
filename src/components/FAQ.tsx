import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need special software to play?",
      answer:
        "Not for offline modes! You can enjoy single-player and local multiplayer without any setup. However, to own digital assets, earn tokens, and trade in the marketplace, you'll need to authenticate with Internet Identity for a seamless and secure experience.",
      category: "Getting Started",
    },
    {
      question: "Is it pay-to-win?",
      answer:
        "Absolutely not! While different characters have varying stats, skill is the primary factor in winning matches. Free characters are competitive, and the game focuses on player ability over investment. Think of premium characters as collectible skins with stat variations, not power advantages.",
      category: "Gameplay",
    },
    {
      question: "Can I earn real rewards?",
      answer:
        "Yes! Win matches to earn our native ICP tokens, which have real value and can be transferred within the Internet Computer ecosystem. You can also sell rare characters you've unlocked or purchased to other players in our marketplace.",
      category: "Economy",
    },
    {
      question: "How does matchmaking work?",
      answer:
        "Our skill-based matchmaking system pairs players of similar abilities. We track wins, losses, and performance metrics to ensure fair, competitive matches. No pay-to-win mechanics affect matchmaking rankings.",
      category: "Multiplayer",
    },
    {
      question: "What makes the system fair and transparent?",
      answer:
        "We use the Internet Computer's built-in randomness and transparency features for all game mechanics. All outcomes are verifiable on-chain, providing cryptographic proof that results are fair and cannot be manipulated.",
      category: "ICP",
    },
    {
      question: "Are smart contracts audited?",
      answer:
        "Yes! Our canisters (smart contracts) have undergone security audits and are open-source. You can verify all canister code on the Internet Computer dashboard. Transparency and security are our top priorities.",
      category: "Security",
    },
    {
      question: "What's the current development status?",
      answer:
        "We're actively developing MetaHead Arena! Core game mechanics are being built, and ICP integration is in progress. Follow our community channels for regular updates on development milestones and early access opportunities.",
      category: "Development",
    },
    {
      question: "When can I play the game?",
      answer:
        "We're targeting a beta release in Q4 2024. Early access will be available for community members who join our development journey. The full release is planned for Q1 2025 with all features complete.",
      category: "Development",
    },
    {
      question: "Can I play on mobile?",
      answer:
        "Currently, the game is optimized for desktop browsers. Mobile support is planned for a future update, but we want to perfect the core experience first.",
      category: "Platform",
    },
  ];

  const categories = [
    "Getting Started",
    "Gameplay",
    "Economy",
    "Multiplayer",
    "ICP",
    "Security",
    "Development",
    "Platform",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-game-pixel to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black retro-text text-game-yellow mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-game-sky">
            Everything you need to know about MetaHead Arena
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="game-card text-white bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-[1.02] transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div
                    className="text-3xl animate-pixel-bounce"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    ❓
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-game-blue/30 border border-game-blue text-xs px-2 py-1 rounded-full text-game-blue font-semibold">
                        {faq.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-black text-game-yellow retro-text">
                      {faq.question}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-game-sky leading-relaxed text-lg pl-16">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <div className="game-card p-8 bg-gradient-to-r from-game-blue/20 to-game-yellow/20">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-3xl font-black retro-text text-game-yellow mb-4">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
              Our community is here to help! Join our Discord for real-time
              support from both the team and experienced players.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-game-yellow hover:bg-game-yellow-dark text-black font-black text-lg px-8 py-4 rounded-lg transition-colors">
                💬 Ask on Discord
              </button>
              <button className="bg-game-blue hover:bg-game-blue-dark text-white font-black text-lg px-8 py-4 rounded-lg transition-colors">
                📧 Email Support
              </button>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="game-card text-white bg-gradient-to-br from-green-900/50 to-blue-900/50 p-6">
            <div className="text-4xl mb-3">💡</div>
            <h4 className="text-xl font-bold text-game-yellow mb-3">Pro Tip</h4>
            <p className="text-game-sky">
              Start with offline modes to master the controls before jumping
              into competitive online matches!
            </p>
          </Card>
          <Card className="game-card text-white bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="text-xl font-bold text-game-yellow mb-3">
              Quick Start
            </h4>
            <p className="text-game-sky">
              No wallet? No problem! Jump straight into the demo and experience
              the core gameplay immediately.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
