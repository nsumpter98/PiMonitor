import raspberryLogo from "./assets/raspberry.svg";
import Card from "./components/Card";

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
      <main className="p-6 flex flex-col gap-6">
        {/* Stats Cards */}
        <div className="flex gap-6">
          <Card title="Statistics" className="flex-1">
            <div className="text-3xl font-bold">1,234</div>
          </Card>

          <Card title="Revenue" className="flex-1">
            <div className="text-3xl font-bold">$5,678</div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="flex gap-6">
          <Card title="Analytics Chart" className="flex-1">
            <div className="h-64 bg-gray-700 rounded"></div>
          </Card>

          <Card title="Recent Activity" className="w-1/3">
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-2">Activity 1</div>
              <div className="border-b border-gray-700 pb-2">Activity 2</div>
              <div className="border-b border-gray-700 pb-2">Activity 3</div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
