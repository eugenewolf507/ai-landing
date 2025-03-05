const ChatGPT = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-6xl font-bold text-green-500">$UPTIME</h1>
        <p className="text-xl mt-4">
          The native token you use to run UpTime and automate your devops –
          forever.
        </p>
        <p className="mt-4 text-lg">
          One token for Accessing Unlimited $UPTIME
        </p>
        <button className="mt-6 bg-green-500 text-black py-2 px-6 rounded-lg hover:bg-green-400 transition duration-300">
          Get $UPTIME
        </button>
      </header>

      {/* Main Section */}
      <main className="px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold">
          Never hire junior DevOps again.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Stake 10,000 $UPTIME</h3>
            <p className="mt-4">for unlimited UpTime access</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">100,000 $UPTIME</h3>
            <p className="mt-4">to download and whitelabel UpTime</p>
          </div>
        </div>
      </main>

      {/* Companies Section */}
      <section className="bg-gray-900 py-12 text-center">
        <h2 className="text-3xl font-semibold">
          Companies with Junior DevOps: 500,000+
        </h2>
        <h3 className="text-xl mt-4">Companies using UpTime: 0</h3>
        <button className="mt-6 bg-green-500 text-black py-2 px-6 rounded-lg hover:bg-green-400 transition duration-300">
          Launch UpTime
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-lg">COMING SOON</p>
      </footer>
    </div>
  );
};

export default ChatGPT;
