import React, { useState } from 'react';
import { Fingerprint, MessageSquare, Users, Clock, ArrowRight, Zap, Target, Award, Globe, Laptop, Moon, LogIn, X } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const visionControls = useAnimation();
  const featuresControls = useAnimation();
  const benefitsControls = useAnimation();
  const heroControls = useAnimation();

  const [visionRef, visionInView] = useInView({ triggerOnce: false });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: false });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: false });
  const [heroRef, heroInView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (visionInView) {
      visionControls.start('visible');
    } else {
      visionControls.start('hidden');
    }
  }, [visionControls, visionInView]);

  React.useEffect(() => {
    if (featuresInView) {
      featuresControls.start('visible');
    } else {
      featuresControls.start('hidden');
    }
  }, [featuresControls, featuresInView]);

  React.useEffect(() => {
    if (benefitsInView) {
      benefitsControls.start('visible');
    } else {
      benefitsControls.start('hidden');
    }
  }, [benefitsControls, benefitsInView]);

  React.useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    } else {
      heroControls.start('hidden');
    }
  }, [heroControls, heroInView]);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div className="min-h-screen bg-kayra-dark text-gray-200 relative">
      {/* Header/Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Fingerprint className="h-10 w-10 text-kayra-primary" />
            <span className="text-2xl font-bold tracking-wider">KAYRA.AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-kayra-primary">Features</a>
            <a href="#vision" className="hover:text-kayra-primary">Vision</a>
            <a href="#benefits" className="hover:text-kayra-primary">Benefits</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-kayra-primary text-kayra-dark px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
              Get Started
            </button>
            <LogIn className="h-6 w-6 text-kayra-primary cursor-pointer" onClick={toggleLogin} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="container mx-auto px-6 py-16 md:py-24"
        initial="hidden"
        animate={heroControls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 }
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your AI Partner for Simple, Personal Customer Interactions
            </h1>
            <p className="text-xl mb-8">
              Experience stress-free customer service across all languages and platforms, 24/7. Let AI transform how you connect with customers worldwide.
            </p>
            <div className="flex space-x-4">
              <motion.button
                className="bg-kayra-primary text-kayra-dark px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Start Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                className="border-2 border-kayra-primary text-kayra-primary px-8 py-3 rounded-lg hover:bg-kayra-primary hover:text-kayra-dark transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              alt="Global Business Communication"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        ref={visionRef}
        id="vision"
        className="py-16 bg-gradient-radial from-kayra-darker to-kayra-dark"
        initial="hidden"
        animate={visionControls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0.8, y: 50 }
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision for Your Success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <VisionCard
              icon={<Globe className="h-8 w-8 text-kayra-primary" />}
              title="Any Language"
              description="Break language barriers with AI that speaks your customers' language fluently"
            />
            <VisionCard
              icon={<Laptop className="h-8 w-8 text-kayra-primary" />}
              title="Any Platform"
              description="Seamless integration across all your communication channels"
            />
            <VisionCard
              icon={<Moon className="h-8 w-8 text-kayra-primary" />}
              title="Any Time"
              description="24/7 availability ensures you never miss a customer inquiry"
            />
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        id="features"
        className="py-16"
        initial="hidden"
        animate={featuresControls}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.8, scale: 1.05 }
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Experience the Difference</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Transform your customer service with AI that understands, adapts, and delivers.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-8 w-8 text-kayra-primary" />}
              title="Personal Touch"
              description="AI that remembers preferences and provides tailored interactions"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-kayra-primary" />}
              title="Natural Conversations"
              description="Fluid, context-aware dialogue that feels human and authentic"
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-kayra-primary" />}
              title="Stress-Free Service"
              description="Reliable, consistent support that keeps customers happy"
            />
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        id="benefits"
        className="py-16 bg-kayra-darker"
        initial="hidden"
        animate={benefitsControls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0.8, y: 50 }
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6">
          <div className="bg-kayra-dark rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Kayra.ai</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-300">Connect with customers worldwide in their preferred language</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Always Available</h3>
                  <p className="text-gray-300">Round-the-clock service across all time zones</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Integration</h3>
                  <p className="text-gray-300">Easy setup on your existing platforms and channels</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-kayra-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Solution</h3>
                  <p className="text-gray-300">Grows with your business, from startup to enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Section Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Insights</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI and customer service. Our blog provides valuable information to help you stay ahead.
          </p>
          <div className="text-center">
            <button className="bg-kayra-primary text-kayra-dark px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
              Visit Blog
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kayra-darker text-white py-12 border-t border-kayra-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Fingerprint className="h-8 w-8 text-kayra-primary" />
                <span className="text-xl font-bold">KAYRA.AI</span>
              </div>
              <p className="text-gray-300">
                Your trusted AI partner for global customer interactions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-kayra-primary">Features</a></li>
                <li><a href="#" className="hover:text-kayra-primary">Integrations</a></li>
                <li><a href="#" className="hover:text-kayra-primary">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-kayra-primary">About</a></li>
                <li><a href="#" className="hover:text-kayra-primary">Blog</a></li>
                <li><a href="#" className="hover:text-kayra-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-kayra-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-kayra-primary">Terms</a></li>
                <li><a href="#" className="hover:text-kayra-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-kayra-dark mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Kayra.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Widget */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50" onClick={toggleLogin}>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <X className="absolute top-4 right-4 h-6 w-6 text-gray-600 cursor-pointer" onClick={toggleLogin} />
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-kayra-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-kayra-primary"
              />
              <button
                type="submit"
                className="w-full bg-kayra-primary text-kayra-dark px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Login
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">Not registered yet? <a href="#" className="text-kayra-primary hover:underline">Get Started</a></p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-kayra-dark p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function VisionCard({ icon, title, description }) {
  return (
    <div className="bg-kayra-dark/50 backdrop-blur-sm p-6 rounded-lg border border-kayra-primary/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;
