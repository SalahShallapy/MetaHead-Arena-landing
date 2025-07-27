const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Game: [
      { name: "Play Demo", href: "#" },
      { name: "Download", href: "#" },
      { name: "System Requirements", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
    Community: [
      { name: "Discord", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Reddit", href: "#" },
    ],
    Support: [
      { name: "FAQ", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Bug Reports", href: "#" },
    ],
    Legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Discord", icon: "💬", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "GitHub", icon: "💻", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "Telegram", icon: "✈️", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl animate-pixel-bounce">🧠</div>
              <div>
                <h3 className="text-2xl font-black retro-text text-game-yellow">
                  METAHEAD ARENA
                </h3>
                <p className="text-sm text-game-sky">
                  The Future of Pixel Soccer
                </p>
              </div>
            </div>
            <p className="text-game-sky text-sm max-w-md">
              A revolutionary ICP pixel football brawler where you truly own
              your digital assets and compete in a fair, transparent ecosystem.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 border-2 border-game-yellow hover:bg-game-yellow hover:text-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-black text-game-yellow mb-4 retro-text">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-game-sky hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="game-card p-6 mb-12 bg-gradient-to-r from-game-blue/20 to-game-yellow/20">
          <div className="text-center">
            <h4 className="text-2xl font-black text-game-yellow mb-4 retro-text">
              📧 STAY UPDATED
            </h4>
            <p className="text-game-sky mb-6">
              Get the latest updates, exclusive content, and early access
              opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border-2 border-game-yellow focus:outline-none focus:border-game-blue"
              />
              <button className="bg-game-yellow hover:bg-game-yellow-dark text-black font-bold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-game-sky">
                © {currentYear} MetaHead Arena. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Built with ❤️ for the ICP gaming community
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-game-sky">
                <span className="text-green-400">●</span>
                All smart contracts verified
              </div>
              <div className="flex items-center gap-2 text-game-sky">
                <span className="text-blue-400">●</span>
                Open source on GitHub
              </div>
              <div className="flex items-center gap-2 text-game-sky">
                <span className="text-yellow-400">●</span>
                Security audited
              </div>
            </div>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <div className="text-center mt-8 text-xs text-gray-600">
          <p>
            Built by gamers, for gamers 🎮 | Powered by ☕ and determination
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
