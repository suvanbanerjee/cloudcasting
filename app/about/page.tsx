"use client";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-2xl p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center">About CloudCasting</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          CloudCasting is a platform that provides weather forecasting and mapping services.
          Built with Next.js and Mapbox, it offers a seamless user experience for exploring
          weather data. Our mission is to make weather insights accessible and visually engaging
          for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;