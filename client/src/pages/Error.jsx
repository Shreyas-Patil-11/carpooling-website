import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, RefreshCcw } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center flex-col justify-center lg:flex-row p-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28 min-h-svh">
      {/* Left column with illustration */}
      <div className="w-full lg:w-1/2 flex justify-center items-center animate-floatingTilt">
        {/* SVG illustration instead of external image */}
        <div className="relative w-full max-w-md">
          <svg viewBox="0 0 600 400" className="w-full h-auto">
            <defs>
              <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(221, 83%, 53%)" />
                <stop offset="100%" stopColor="hsl(174, 80%, 43%)" />
              </linearGradient>
            </defs>
            
            {/* Background shapes */}
            <circle cx="300" cy="200" r="150" fill="hsla(221, 83%, 95%, 0.5)" />
            <circle cx="300" cy="200" r="100" fill="hsla(174, 80%, 95%, 0.5)" />
            
            {/* 404 Text */}
            <text x="300" y="220" fontSize="120" fontWeight="bold" fill="url(#errorGradient)" textAnchor="middle">404</text>
            
            {/* Decorative elements */}
            <path d="M150,100 C200,50 250,150 300,100 S400,150 450,100" stroke="url(#errorGradient)" strokeWidth="4" fill="none" className="animate-drawPath" />
            <path d="M150,300 C200,250 250,350 300,300 S400,350 450,300" stroke="url(#errorGradient)" strokeWidth="4" fill="none" className="animate-drawPath" />
            
            {/* Small decorative circles */}
            <circle cx="150" cy="120" r="10" fill="hsla(221, 83%, 53%, 0.6)" />
            <circle cx="450" cy="120" r="10" fill="hsla(174, 80%, 43%, 0.6)" />
            <circle cx="150" cy="280" r="10" fill="hsla(174, 80%, 43%, 0.6)" />
            <circle cx="450" cy="280" r="10" fill="hsla(221, 83%, 53%, 0.6)" />
          </svg>
        </div>
      </div>
      
      {/* Right column with text and button */}
      <div className="w-full lg:w-1/2 glass-effect p-8 rounded-2xl animate-fadeIn">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Looks like you've found the doorway to the great nothing
        </h1>
        
        <p className="py-4 text-muted-foreground text-base">
          The content you're looking for doesn't exist. Either it was removed, or you mistyped the link.
        </p>
        
        <p className="py-2 text-muted-foreground text-base mb-8">
          Sorry about that! Please visit our homepage to get where you need to go.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="ride-card-hover flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 rounded-lg transition-all duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleGoHome}
          >
            <Home size={18} />
            Go back to Homepage
            <ArrowRight size={18} className={`ml-2 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
          </Button>
          
          <Button 
            variant="outline" 
            className="ride-card-hover flex items-center gap-2 border-blue-200 hover:border-blue-300 px-6 py-6 rounded-lg"
            onClick={handleRefresh}
          >
            <RefreshCcw size={18} />
            Refresh the page
          </Button>
        </div>
        
        {/* Decorative element */}
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-8 opacity-50"></div>
      </div>
    </div>
  );
};

export default Error;