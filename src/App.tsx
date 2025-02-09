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
      <div className="flex h-[calc(100vh-64px)]">
        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-2 gap-6 mb-6 h-full">
            {/* Stats Cards */}
            <Card title="Statistics">
              <div className="text-3xl font-bold">1,234</div>
            </Card>

            <Card title="Revenue">
              <div className="text-3xl font-bold">$5,678</div>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-3 gap-6 h-full">
            <Card title="Analytics Chart" className="col-span-2">
              <div className="h-64 bg-gray-700 rounded"></div>
            </Card>

            <Card title="Recent Activity">
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-2">Activity 1</div>
                <div className="border-b border-gray-700 pb-2">Activity 2</div>
                <div className="border-b border-gray-700 pb-2">Activity 3</div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
