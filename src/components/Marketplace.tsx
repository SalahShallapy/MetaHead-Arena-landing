import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const Marketplace = () => {
  const sampleNFTs = [
    {
      name: "Tarek Vorn",
      rarity: "Legendary",
      stats: { speed: 2.43, size: 1.2, power: 9.1, jump: 8.5 },
      price: "0.5 ETH",
      image: "🧠",
    },
    {
      name: "Lightning Strike",
      rarity: "Epic",
      stats: { speed: 3.8, size: 0.9, power: 7.2, jump: 9.0 },
      price: "0.2 ETH",
      image: "⚡",
    },
    {
      name: "Tank Master",
      rarity: "Common",
      stats: { speed: 1.5, size: 2.1, power: 9.8, jump: 4.2 },
      price: "0.1 ETH",
      image: "🛡️",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "text-yellow-400 border-yellow-400";
      case "Epic":
        return "text-purple-400 border-purple-400";
      case "Common":
        return "text-gray-400 border-gray-400";
      default:
        return "text-white border-white";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-game-pixel to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black retro-text text-game-yellow mb-6">
            MARKETPLACE
          </h2>
          <p className="text-xl text-game-sky max-w-3xl mx-auto">
            Trade, buy, and sell your NFT players in a fully decentralized
            marketplace
          </p>
        </div>

        {/* Sample NFT Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sampleNFTs.map((nft, index) => (
            <Card
              key={index}
              className={`game-card text-white bg-gradient-to-br from-gray-800 to-gray-900 border-4 ${getRarityColor(
                nft.rarity
              )} hover:scale-105 transition-all duration-300`}
            >
              <CardHeader className="text-center">
                <div
                  className="text-8xl mb-4 animate-pixel-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {nft.image}
                </div>
                <CardTitle className="text-2xl font-black text-white retro-text">
                  {nft.name}
                </CardTitle>
                <div
                  className={`text-lg font-bold ${
                    getRarityColor(nft.rarity).split(" ")[0]
                  }`}
                >
                  {nft.rarity}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-game-sky">Speed:</span>
                    <span className="text-white font-bold">
                      {nft.stats.speed}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-game-sky">Size:</span>
                    <span className="text-white font-bold">
                      {nft.stats.size}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-game-sky">Power:</span>
                    <span className="text-white font-bold">
                      {nft.stats.power}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-game-sky">Jump:</span>
                    <span className="text-white font-bold">
                      {nft.stats.jump}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-game-yellow mb-3">
                    {nft.price}
                  </div>
                  <Button className="w-full bg-game-blue hover:bg-game-blue-dark text-white font-bold">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marketplace Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="game-card text-white text-center p-8 bg-gradient-to-br from-green-900/50 to-blue-900/50">
            <div className="text-6xl mb-4">💳</div>
            <h3 className="text-2xl font-black text-game-yellow mb-4 retro-text">
              SELL & AUCTION
            </h3>
            <p className="text-game-sky">
              List your NFTs for direct sale or create exciting auctions. Set
              your own prices and watch the bids roll in.
            </p>
          </Card>

          <Card className="game-card text-white text-center p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-black text-game-yellow mb-4 retro-text">
              BUY RARE PLAYERS
            </h3>
            <p className="text-game-sky">
              Discover legendary characters from other players. Build your
              ultimate team with unique stats and abilities.
            </p>
          </Card>

          <Card className="game-card text-white text-center p-8 bg-gradient-to-br from-blue-900/50 to-teal-900/50">
            <div className="text-6xl mb-4">⛓</div>
            <h3 className="text-2xl font-black text-game-yellow mb-4 retro-text">
              ICP INTEGRATED
            </h3>
            <p className="text-game-sky">
              Connect your Internet Identity for seamless trading. All
              transactions are secure and transparent on-chain.
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-game-yellow hover:bg-game-yellow-dark text-black font-black text-xl px-12 py-6 game-card animate-glow-pulse"
          >
            🛒 Browse Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
