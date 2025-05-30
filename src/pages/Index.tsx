
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Zap, MessageCircle, Camera, AlertTriangle, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Sentinel</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Features
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            About
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Contact
          </Button>
          <Button variant="outline" className="text-gray-700 border-gray-300">
            Log In
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg">
            Book a Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet your ultimate{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              AI security guard
            </span>
            .{" "}
            <span className="block mt-2">Powered by intelligence.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sentinel watches your security cameras 24/7, communicates events in natural language,
            and acts to de-escalate threats in real time. No pre-defined parameters, no limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-xl"
            >
              Book a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
            >
              Sign Up / Log In
            </Button>
          </div>
        </div>

        {/* Floating Geometric Element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* AI Triangle Visual */}
        <div className="relative mx-auto w-64 h-64 mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 transform rotate-12 rounded-3xl opacity-20 animate-float"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <Eye className="w-16 h-16 text-white" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What makes Sentinel different?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're redefining physical security with AI at its core. Sentinel is the world's first AI guard 
              that sees, reasons, and acts from inside your security camera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Watches 24/7</h3>
                <p className="text-gray-600">
                  Continuous monitoring of your security cameras with intelligent analysis that never sleeps.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Communicates Naturally</h3>
                <p className="text-gray-600">
                  Reports events in clear, natural language that stakeholders can immediately understand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Acts in Real Time</h3>
                <p className="text-gray-600">
                  De-escalates threats immediately, preventing incidents before they become problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Sentinel?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In just the past month, Sentinel has handled over 50 real-world incidents that traditional 
              systems would have missed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Before */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Security</h3>
              
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">You miss critical events</h4>
                      <p className="text-gray-600">Limited analysis capabilities prevent you from setting tailored alerts, allowing security issues to slip by.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">False alarms cause alert fatigue</h4>
                      <p className="text-gray-600">If you can't be specific about what's important to you, you'll get false alarms until you ignore them.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Watching hours of video wastes time</h4>
                      <p className="text-gray-600">Analysts sitting and watching videos wastes time and money that can be better spent elsewhere.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* After */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">With Sentinel</h3>
              
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Describe exactly what you need</h3>
                  <p className="text-gray-600 text-lg">
                    Tell Sentinel what matters to you in plain English. It understands context, nuance, and your specific security concerns.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Never miss a critical moment.{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Forget false alarms.
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Our AI monitors live video streams in real time, guided by your specific instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real incidents Sentinel caught</h2>
            <p className="text-xl text-gray-600">
              These would have been missed by traditional systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Suspicious behavior detected</h3>
                <p className="text-gray-600">
                  A man faking a phone call while peeking through car windows - caught and reported immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Family safety alert</h3>
                <p className="text-gray-600">
                  Identified kids leaving the house intoxicated, giving parents a chance to step in before trouble.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Package theft prevented</h3>
                <p className="text-gray-600">
                  Delivery person who dropped nothing off and walked away with a package - instant notification sent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Real safety isn't about recording what happened.
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              It's about making sure it doesn't happen in the first place.
            </p>
            <p className="text-xl text-gray-600 mb-12">
              Every security camera deserves a pair of eyes, a brain, and a voice.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Coming Soon to the General Public</h3>
              <p className="text-lg opacity-90">
                We're starting in the U.S., but our mission is global. 
                Sentinel will revolutionize how the world thinks about security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-12 py-4 text-xl font-semibold shadow-xl"
              >
                Book a Demo Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-xl font-semibold"
              >
                Sign Up Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Sentinel</span>
            </div>
            <p className="text-gray-400">
              © 2024 Sentinel. Redefining security with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
