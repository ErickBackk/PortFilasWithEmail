import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailstatic?: string;
  category: string;
  description: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (

    
    <div 
      className="bg-gradient-to-br from-black to-gray-950 rounded-xl overflow-hidden group shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <img 
          src={isHovered ? video.thumbnail : (video.thumbnailstatic || video.thumbnail)}
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity transition-transform duration-500 group-hover:scale-110 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors p-4 w-full h-full flex items-center justify-center"
          >
            <Play size={24} fill="white" />
          </a>
        </div>
        <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-500 text-xs font-bold px-2 py-1 rounded-full">
          {video.category.toUpperCase()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{video.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{video.description}</p>
        <a 
          href={`https://www.youtube.com/watch?v=${video.id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
        >
          Watch on YouTube <ExternalLink size={14} />
        </a>    
      </div>
    </div>
  );
};

export default VideoCard;