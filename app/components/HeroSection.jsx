'use client'
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'link'
  const [inputValue, setInputValue] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const suggestedPrompts = [
    "An educational website designed to showcase my courses for learners to explore and access.",
    "An e-commerce website designed to showcase my products, providing visitors with intuitive product information.",
    "A one-stop platform for game downloads and guides, offering easy access to resources for players.",
    "Display my product information to attract visitors to inquire actively.",
    "A design website focused on creative transformation, providing professional design solutions for businesses and individuals.",
  ];
  const handlePromptClick = (prompt) => {
    setInputValue(prompt);
  };

  // Effect for the cursor follower
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden cursor-none">
      {/* Cursor Follower */}
      <div
        className="absolute top-0 left-0 w-[80vw] h-[80vw] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      ></div>

      {/* Main content area - now using Tailwind for transform and new class name */}
      <div className="z-10 flex flex-col items-center justify-center pointer-events-none translate-y-[-16vh] main-content-offset">
        <div className="flex md:hidden pb-6 z-50 absolute left-1/2 bottom-full transform -translate-x-1/2 text-center gap-6 justify-center">
          <span className="text-white text-2xl font-bold">Wegic</span>
        </div>
        <div className="px-8 h-[30vw] max-w-[100vw] md:h-[26vw] lg:h-[20vw] xl:h-[18vw] 2xl:h-[18vw] flex items-center flex-col justify-center text-nowrap">
          <h1 className="text-center text-white font-serif font-bold text-[10vw] md:text-[9.2vw] md:leading-snug lg:text-[7.8vw] lg:leading-tight xl:text-[7vw] 2xl:text-[6.8vw] leading-tight opacity-100">
            <span>M</span><span>a</span><span>g</span><span>i</span><span>c</span><span> </span><span>Y</span><span>o</span><span>u</span><span>r</span><span> </span><span>S</span><span>i</span><span>t</span><span>e</span>
          </h1>
          <h1 className="text-center text-white font-serif font-bold text-[10vw] md:text-[9.2vw] md:leading-snug lg:text-[7.8vw] lg:leading-tight xl:text-[7vw] 2xl:text-[6.8vw] leading-tight opacity-100">
            <span>C</span><span>h</span><span>a</span><span>t</span><span> </span><span>b</span><span>y</span><span> </span><span>C</span><span>h</span><span>a</span><span>t</span>
          </h1>
        </div>
      </div>

      <div className="absolute z-10 bottom-[30%] hidden md:block">
        <div className="relative z-0 h-[9.5rem] min-w-[628px] w-[720px] rounded-xl py-4 flex flex-col gap-6 md:w-full md:px-[70px]">
          <div className="z-20 rounded-xl py-[9px] px-4 flex items-start self-stretch gap-[15px] flex-col text-white text-sm whitespace-normal bg-white/5 backdrop-blur-[22px] border border-white/20 border-solid transition-all duration-500">
            👋 Hey! We're Wegic. Chat with us, share your website vision, and we'll build it in 1 minute.
          </div>

          {/* Input Area */}
          <div className="relative rounded-xl px-[12px] pt-[16px] pb-[12px] bg-[#F7F6F5]">
            <textarea
              className="w-full h-[54px] resize-none pl-[4px] text-black bg-[#F7F6F5] text-[15px] leading-6 pr-16 z-10 outline-none custom-scrollbar"
              maxLength="10000"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your website vision here..."
            ></textarea>
            <div className="flex justify-start items-center mt-2">
              <div className='flex items-center gap-2 bg-[#F0F0F0] p-1 rounded-lg'>
                <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'chat' ? 'bg-white text-black' : 'bg-[#F0F0F0] text-gray-700'
                }`}
                onClick={() => setActiveTab('chat')}
              >
                Build Via Chat
              </button>
              <button
                className={`ml-2 px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'link' ? 'bg-white text-black' : 'bg-[#F0F0F0] text-gray-700'
                }`}
                onClick={() => setActiveTab('link')}
              >
                Build Via Link
              </button>
              </div>
            </div>
            {/* Submit Button */}
            <button className="flex justify-center items-center absolute right-[12px] bottom-[12px] bg-white w-[40px] h-[40px] rounded-lg cursor-pointer opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                <g stroke="#B0B0B0"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                  <path d="M12.5 6.06v12M18.5 12.06l-6-6-6 6"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

        {/*Mobile view */}
      <div className="absolute z-10 bottom-[45%] block md:hidden">
        <div className="w-full flex flex-col items-center gap-14">
          <button
              type="button"
              style={{ padding: '0 1.5rem', fontWeight: 'bold' }}
              className="bg-white text-black rounded-md py-4 px-3 hover:translate-y-1 duration-150 transition-all" 
            >
              <h1 className="py-3 font-medium w-fit items-center">
                Build Your Site
              </h1>
            </button>
        </div>
      </div>
      <div className="absolute group z-10 bottom-[26%] md:bottom-8 flex items-center gap-2">
        <p className="text-white uppercase text-xs">SCROLL TO EXPLORE</p>
        <div className="w-6 h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className="hidden xl:block absolute z-10 bottom-5 right-5 rounded-[20px] transition-all overflow-hidden">
        <div className="flex items-center justify-center border w-[226px] h-[80px] border-[#FFFFFF0A] transition-all bg-black/30 hover:bg-black/70">
          <span className="text-white text-3xl font-bold">Wegic</span>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
