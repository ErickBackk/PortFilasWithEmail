import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Youtube, Heart, ExternalLink, Camera, Clapperboard, Star } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { videos } from './data/videos';

function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src="https://cdn.discordapp.com/attachments/824606051743039528/1346577207476359251/Comp1_1-ezgif.com-video-to-webp-converter.webp?ex=67c8b140&is=67c75fc0&hm=6c4ec315bf3f7ce6a709193ae0788124937628034eca0409d5b018b730e478d3&" 
          alt="EuSouOBackk" 
          className="h-[80vh] w-full absolute -top-20 blur-[8px]"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Blue light effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
            src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          ></video>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* Channel logo instead of text */}
          <div className="mb-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition-all duration-500 animate-spin-slow"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition-all duration-500 animate-spin-slow-reverse"></div>
            <img 
              src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
              alt="EuSouOBackk" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/50 shadow-lg shadow-blue-500/20 z-10 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mb-1">
            MMV & AMV Creator Content
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 font-semibold">
            Overall Editor
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-full font-medium"
            >
              <Youtube size={20} />
              YouTube
            </a>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full font-medium"
            >
              <Camera size={20} />
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4 relative">
        {/* Blue light effects */}
        <div className="absolute -left-40 top-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Channel</h2>
          <p className="text-lg text-gray-300 mb-8">
            Channel dedicated to jobs/editing, MMVs (Music Manga Videos) and AMV (Anime Music Videos) or any thing using After Effects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/50 border border-blue-900/50 p-6 rounded-xl backdrop-blur-sm shadow-lg shadow-blue-500/5">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clapperboard size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Process</h3>
              <p className="text-gray-400">Each video is meticulously edited with creativity and attention to detail</p>
            </div>
            <div className="bg-black/50 border border-blue-900/50 p-6 rounded-xl backdrop-blur-sm shadow-lg shadow-blue-500/5">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-400">High-quality visuals synchronized perfectly with carefully selected music</p>
            </div>
            <div className="bg-black/50 border border-blue-900/50 p-6 rounded-xl backdrop-blur-sm shadow-lg shadow-blue-500/5">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growing Community</h3>
              <p className="text-gray-400">Part of a community of anime and manga enthusiasts who appreciate artistic AMVs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 container mx-auto px-4 relative">
        {/* Blue light effects */}
        <div className="absolute left-1/4 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center relative z-10">Featured Videos</h2>
        
        <div className="flex justify-center mb-8 relative z-10">
          <div className="inline-flex bg-black border border-blue-900/50 rounded-full p-1">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-blue-600' : 'hover:bg-blue-900/50'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory('mmv')}
              className={`px-4 py-2 rounded-full ${activeCategory === 'mmv' ? 'bg-blue-600' : 'hover:bg-blue-900/50'}`}
            >
              MMV
            </button>
            <button 
              onClick={() => setActiveCategory('amv')}
              className={`px-4 py-2 rounded-full ${activeCategory === 'amv' ? 'bg-blue-600' : 'hover:bg-blue-900/50'}`}
            >
              AMV
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;