import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Bell, Clock, Calendar } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ab3489bb-f03b-444b-a3d8-538c6d2e3f3f.png" 
                alt="Sentinel Logo" 
                className="h-8 w-8 mr-3"
              />
              <span className="text-xl font-bold text-white">Sentinel</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                  Log In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              We're redefining physical security with AI at its core
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Sentinel — the world's first AI guard that sees, reasons, and acts from inside your security camera.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Book a Demo Now!
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Camera className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">24/7 Monitoring</h3>
                <p className="text-gray-300">Watches your security cameras around the clock</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Bell className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Smart Communication</h3>
                <p className="text-gray-300">Communicates events of interest in natural language</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Real-Time Response</h3>
                <p className="text-gray-300">Acts to de-escalate threats in real time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Sentinel Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Sentinel?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              In just the past month, Sentinel has already handled over 50 real-world incidents, from a man who faked a phone call while peeking through car windows, to identifying kids leaving the house intoxicated (giving parents a chance to step in before something goes wrong), to a delivery guy who dropped nothing off and walked away with a package.
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center text-red-300">The status quo in security</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-600">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-400">Fixed Rules</h4>
                  <p className="text-gray-300">You miss critical events because systems can't be tailored to what you care about</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-600">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-400">Alert Fatigue</h4>
                  <p className="text-gray-300">You get alert fatigue from false alarms</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-600">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-400">Wasted Time</h4>
                  <p className="text-gray-300">You waste hours reviewing footage that could have been surfaced in seconds</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Sentinel fixes all of that.</h3>
            <p className="text-lg text-gray-300">
              It knows what matters, filters out the noise, and acts in real time. That's what security should be.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-400">
            Real safety isn't about recording what happened.
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            It's about making sure it doesn't happen in the first place.
          </p>
          <p className="text-lg text-gray-300">
            We're starting in the U.S., but our mission is global. Sentinel is coming soon to the general public :)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/ab3489bb-f03b-444b-a3d8-538c6d2e3f3f.png" 
                alt="Sentinel Logo" 
                className="h-8 w-8 mr-3"
              />
              <span className="text-xl font-bold text-white">Sentinel</span>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2024 Sentinel. Redefining physical security with AI.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
