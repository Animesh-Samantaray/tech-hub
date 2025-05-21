import React, { useRef } from "react";

const logos = [
  "https://cdn.shopify.com/s/files/1/0625/1911/5875/files/WhatsApp_Image_2025-03-10_at_21.52.33_391d130d.jpg?v=1741948481",
  "https://cdn.shopify.com/s/files/1/0625/1911/5875/files/WhatsApp_Image_2025-03-13_at_13.02.28_3ee1c821.jpg?v=1741948470",
  "https://cdn.shopify.com/s/files/1/0625/1911/5875/files/DALL_E_2025-03-20_12.16.00_-_A_premium_and_visually_stunning_logo_for_Odisha_Rider_._A_sleek_motorcycle_with_a_dynamic_rider_in_motion_designed_with_a_modern_and_futuristic_touc.webp?v=1742481882",
];

const Colab = () => {
  const marqueeRef = useRef(null);

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };
  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-14 px-2 sm:px-8 py-8 bg-white rounded-2xl shadow-2xl flex flex-col items-center border border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 drop-shadow">
        Our Collaborations
      </h2>
      <div
        className="relative w-full overflow-x-hidden py-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeRef}
          className="flex items-center animate-colab-marquee-single"
          style={{ width: "max-content" }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full bg-white shadow-lg border-2 border-cyan-200 flex items-center justify-center mx-8 transition-transform duration-300 hover:scale-105"
              style={{
                minWidth: "6rem",
                minHeight: "6rem",
              }}
            >
              <img
                src={logo}
                alt={`Colab logo ${i}`}
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
        {/* Custom animation */}
        <style>
          {`
            @keyframes colab-marquee-single {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-colab-marquee-single {
              animation: colab-marquee-single 12s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Colab;