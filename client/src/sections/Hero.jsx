// import React from 'react'
// import bg from "@/assets/hero.svg"
// import Search from '@/components/Search'

// const Hero = () => {
//   return (
//     <div className='relative h-72 md:h-96 flex justify-center items-center bg-[#ebf3fa]'>
//       <div className='h-full'>
//         <img src={bg} alt="hero" className='h-full' />
//       </div>
//       <h1 className="text-2xl text-center sm:text-4xl md:text-5xl absolute text-primary font-extrabold">Your pick of rides at low price</h1>
//       <div className="absolute z-10 -bottom-24 w-full px-10 sm:w-fit sm:-bottom-8">
//         <Search />
//       </div>
//     </div>
//   )
// }

// export default Hero


// import React from 'react'
// import bg from "@/assets/hero.svg"
// import { MapPin, Calendar, Users } from 'lucide-react'

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden  py-10">
//       {/* Background circles */}
//       <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5"></div>
//       <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-primary/5"></div>

//       <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px] flex flex-col lg:flex-row items-center justify-between'>
//         {/* Left side - Text content */}
//         <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
//             <span className="block text-foreground">Your pick of rides at</span>
//             <span className="text-primary">low prices</span>
//           </h1>
          
//           <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
//             Connect with travelers heading your way. Save money, reduce emissions, and make new connections.
//           </p>
          
//           <div className="mt-8 hidden lg:flex flex-wrap gap-6">
//             <div className="flex items-center gap-2">
//               <div className="bg-primary/10 p-2 rounded-full">
//                 <MapPin className="h-5 w-5 text-primary" />
//               </div>
//               <span className="text-sm">Any destination</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="bg-primary/10 p-2 rounded-full">
//                 <Calendar className="h-5 w-5 text-primary" />
//               </div>
//               <span className="text-sm">Flexible dates</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="bg-primary/10 p-2 rounded-full">
//                 <Users className="h-5 w-5 text-primary" />
//               </div>
//               <span className="text-sm">Trusted community</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Right side - Image */}
//         <div className='w-full lg:w-1/2 flex justify-center lg:justify-end relative'>
//           <div className="relative">
//             <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full transform scale-110"></div>
//             <img 
//               src={bg} 
//               alt="hero" 
//               className='relative z-10 max-h-96 object-contain drop-shadow-xl' 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import bg from "@/assets/hero.svg"
import { MapPin, Calendar, Users } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-10">
      {/* Background circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5"></div>
      <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-primary/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px] flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Text content */}
        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-foreground">Your pick of rides at</span>
            <span className="text-primary">low prices</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Connect with travelers heading your way. Save money, reduce emissions, and make new connections.
          </p>

          <div className="mt-8 hidden lg:flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm">Any destination</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm">Flexible dates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm">Trusted community</span>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full transform scale-110"></div>
            <img
              src={bg}
              alt="hero"
              className="relative z-10 max-h-96 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Interactive Journey Visualization */}
      <div className="relative h-64 mt-20 overflow-hidden rounded-xl bg-[#f9fafb]">
        {/* Map background and animated journey paths */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Grid pattern */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Journey paths */}
          <path className="stroke-primary journey-path animate-drawPath" d="M100,100 C150,50 200,150 300,100 C400,50 500,150 600,100" fill="none" strokeWidth="2" />
          <path className="stroke-primary journey-path animate-drawPath" style={{ animationDelay: "0.5s" }} d="M200,50 C250,100 300,50 350,100 C400,50 450,100 500,50" fill="none" strokeWidth="2" />
          <path className="stroke-primary journey-path animate-drawPath" style={{ animationDelay: "1s" }} d="M150,150 C200,100 250,200 300,150 C350,100 400,200 450,150" fill="none" strokeWidth="2" />

          {/* Location markers */}
          <circle cx="100" cy="100" r="5" fill="hsl(var(--primary-blue))" />
          <circle cx="600" cy="100" r="5" fill="hsl(var(--primary-blue))" />
          <circle cx="200" cy="50" r="5" fill="hsl(var(--accent-teal))" />
          <circle cx="500" cy="50" r="5" fill="hsl(var(--accent-teal))" />
          <circle cx="150" cy="150" r="5" fill="hsl(var(--warm-orange))" />
          <circle cx="450" cy="150" r="5" fill="hsl(var(--warm-orange))" />
        </svg>

        {/* Floating cards */}
        <div className="absolute top-10 left-10 glass-effect p-4 rounded-lg animate-floatingTilt">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">A</div>
            <div>
              <p className="font-medium text-sm">Pune</p>
              <p className="text-xs text-muted-foreground">Starting point</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 glass-effect p-4 rounded-lg animate-floatingTilt" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">B</div>
            <div>
              <p className="font-medium text-sm">Mumbai</p>
              <p className="text-xs text-muted-foreground">Destination</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

