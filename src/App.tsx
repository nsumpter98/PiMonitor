import raspberryLogo from "./assets/raspberry.svg";
import Card from "./components/Card";
import TimeCardStats from "./components/TimeCardStats";
import GithubActivity from "./components/GithubActivity";
import LiveComments from "./components/LiveComments";
import MemeOfTheDay from "./components/MemeOfTheDay";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Header */}
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Pi Monitor</h1>
          <img
            src={raspberryLogo}
            alt="Raspberry Pi Logo"
            className="w-8 h-8"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-6 flex flex-col gap-6 flex-grow h-[calc(100vh-64px)]">
        {/* Stats Cards */}
        <div className="flex gap-6 h-1/4">
          <TimeCardStats className="flex-1" />
          <GithubActivity className="flex-1" />
        </div>

        {/* Charts Section */}
        <div className="flex gap-6 h-3/4">
          <MemeOfTheDay className="flex-1" />
          <LiveComments className="w-1/3" />
        </div>
      </main>
    </div>
  );
}

export default App;
