"use client";

import Header from '@/components/navbar';
import { withAuth } from '@/utils/withAuth';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex-1 overflow-auto">
        {/* Hero section */}
        <div className="w-full bg-gradient-to-b from-black to-gray-900 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About CloudCasting</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
              A world-first innovation that predicts cloud movements through satellite imagery,
              dramatically improving solar generation forecasts.
            </p>
          </div>
        </div>
        
        {/* Content sections */}
        <div className="max-w-5xl mx-auto px-6 py-12 grid gap-12">
          {/* Main info */}
          <section className="bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              CloudCasting is a groundbreaking AI-powered platform that predicts cloud movements through satellite imagery, 
              dramatically improving solar generation forecasts. As a world-first innovation, we're transforming how renewable 
              energy is integrated into power grids across the globe.
            </p>
          </section>
          
          {/* Innovation */}
          <section className="bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Our Innovation</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Our AI model analyzes multi-spectral satellite imagery to predict cloud movements up to 3 hours ahead, 
              with updates every 15 minutes. This allows for unparalleled precision in short-term forecasting, 
              helping grid operators, solar farms, and smart home owners optimize their energy usage.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black p-4 rounded-md border border-gray-800">
                <div className="text-yellow-400 font-bold mb-2">3 Hours Ahead</div>
                <p className="text-gray-400">Predicts cloud movement patterns with unprecedented accuracy</p>
              </div>
              <div className="bg-black p-4 rounded-md border border-gray-800">
                <div className="text-yellow-400 font-bold mb-2">15 Minute Updates</div>
                <p className="text-gray-400">Regular updates for real-time decision making</p>
              </div>
              <div className="bg-black p-4 rounded-md border border-gray-800">
                <div className="text-yellow-400 font-bold mb-2">Satellite Imagery</div>
                <p className="text-gray-400">Leverages multi-spectral satellite data for precision</p>
              </div>
            </div>
          </section>
          
          {/* Impact */}
          <section className="bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Real-World Impact</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              CloudCasting improves solar forecast accuracy by up to 100% compared to traditional methods. This leads to 
              reduced carbon emissions, lower energy costs, and a more reliable integration of renewable energy into 
              power systems worldwide.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Built with cutting-edge technology, CloudCasting represents a transformative leap in solar energy forecasting and 
              stands as a leading example of AI for environmental good.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AboutPage);