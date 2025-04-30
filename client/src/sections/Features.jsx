// import { HandCoins, Rocket, ShieldCheck } from 'lucide-react'
// import React from 'react'

// const Features = () => {
//   const features = [
//     {
//       icon: <HandCoins />,
//       title: "Save on travel costs",
//       desc: "Share the cost of your journey with other passengers, significantly reducing your travel expenses compared to solo travelling."
//     },
//     {
//       icon: <ShieldCheck />,
//       title: "Join a trustworthy community",
//       desc: "Connect with like-minded people. Meet new people who share your interest and destination through carpooling."
//     },
//     {
//       icon: <Rocket />,
//       title: "Carpooling made simple",
//       desc: "Find rides with ease. Search for rides that match your destination, schedule, and preference with just a few taps."
//     }
//   ]

//   return (
//     <section className='text-foreground container max-w-screen-xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
//       <div className='md:px-5 py-16 sm:py-0 mx-auto'>
//         <div className='flex flex-wrap'>
//           {features.map( f => 
//             <div className='md:w-1/3 flex rounded-lg h-full p-6 flex-col' key={f.title}>
//               <div className='flex items-center mb-3'>
//                 <div className='w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary flex-shrink-0'>
//                   {f.icon}
//                 </div>
//                 <h2 className="text-lg">{f.title}</h2>
//               </div>
//               <div className="flex-grow text-muted-foreground">
//                 <p className="leading-relaxed text-base">{f.desc}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Features

// import { HandCoins, Rocket, ShieldCheck } from 'lucide-react'
// import React from 'react'

// const Features = () => {
//   const features = [
//     {
//       icon: <HandCoins />,
//       title: "Save on travel costs",
//       desc: "Share the cost of your journey with other passengers, significantly reducing your travel expenses compared to solo travelling."
//     },
//     {
//       icon: <ShieldCheck />,
//       title: "Join a trustworthy community",
//       desc: "Connect with like-minded people. Meet new people who share your interest and destination through carpooling."
//     },
//     {
//       icon: <Rocket />,
//       title: "Carpooling made simple",
//       desc: "Find rides with ease. Search for rides that match your destination, schedule, and preference with just a few taps."
//     }
//   ]

//   return (
//     <section className='text-foreground container max-w-screen-xl px-3 pt-20 pb-8 sm:px-6 sm:pt-28 sm:pb-12 lg:px-8 lg:pt-32 lg:pb-16'>
//       <div className='md:px-5 mx-auto'>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold sm:text-4xl">Why choose <span className="text-primary">Ride2Share</span>?</h2>
//           <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//             Experience the future of carpooling with features designed for convenience, safety, and savings.
//           </p>
//         </div>
        
//         <div className='grid md:grid-cols-3 gap-8'>
//           {features.map((f, index) => (
//             <div 
//               className='relative overflow-hidden group rounded-2xl bg-gradient-to-br from-background to-secondary/30 p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col' 
//               key={f.title}
//             >
//               <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-300"></div>
              
//               <div className='mb-4'>
//                 <div className='w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 text-primary text-lg transition-all duration-300'>
//                   {f.icon}
//                 </div>
//               </div>
              
//               <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{f.title}</h3>
              
//               <div className="flex-grow">
//                 <p className="leading-relaxed text-muted-foreground">{f.desc}</p>
//               </div>
              
//               <div className="h-1 w-12 bg-primary/30 mt-6 group-hover:w-full transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Features

// import { HandCoins, Rocket, ShieldCheck } from 'lucide-react'
// import React from 'react'

// const Features = () => {
//   const features = [
//     {
//       icon: <HandCoins />,
//       title: "Save on travel costs",
//       desc: "Share the cost of your journey with other passengers, significantly reducing your travel expenses compared to solo travelling."
//     },
//     {
//       icon: <ShieldCheck />,
//       title: "Join a trustworthy community",
//       desc: "Connect with like-minded people. Meet new people who share your interest and destination through carpooling."
//     },
//     {
//       icon: <Rocket />,
//       title: "Carpooling made simple",
//       desc: "Find rides with ease. Search for rides that match your destination, schedule, and preference with just a few taps."
//     }
//   ]

//   return (
//     <section className="bg-[#f9fafb] py-10">
//       <div className="container max-w-screen-xl px-6 sm:px-8 mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-primary mb-4">
//             Why choose <span className="text-primary">Ride2Share</span>?
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Experience the future of carpooling with features designed for convenience, safety, and savings.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-10 justify-center items-center">
//           {features.map((f, index) => (
//             <div
//               key={f.title}
//               className="relative overflow-hidden group rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//             >
//               {/* Background circle effects */}
//               <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-primary/10 opacity-30 group-hover:opacity-60 transition-all duration-300"></div>

//               <div className="mb-6 flex justify-center">
//                 <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 text-primary text-2xl transition-all duration-300">
//                   {f.icon}
//                 </div>
//               </div>

//               <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-primary transition-colors duration-300">
//                 {f.title}
//               </h3>

//               <p className="leading-relaxed text-muted-foreground text-center mb-6">{f.desc}</p>

//               <div className="h-1 w-16 bg-primary/30 mt-6 group-hover:w-24 transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Features

import { HandCoins, Rocket, ShieldCheck } from 'lucide-react'
import React from 'react'

const Features = () => {
  const features = [
    {
      icon: <HandCoins />,
      title: "Save on travel costs",
      desc: "Share the cost of your journey with other passengers, significantly reducing your travel expenses compared to solo travelling."
    },
    {
      icon: <ShieldCheck />,
      title: "Join a trustworthy community",
      desc: "Connect with like-minded people. Meet new people who share your interest and destination through carpooling."
    },
    {
      icon: <Rocket />,
      title: "Carpooling made simple",
      desc: "Find rides with ease. Search for rides that match your destination, schedule, and preference with just a few taps."
    }
  ]

  return (
    <section className="bg-[#f9fafb] py-10">
      <div className="container max-w-screen-xl px-6 sm:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why choose <span className="text-primary">Ride2Share</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of carpooling with features designed for convenience, safety, and savings.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 justify-center items-center">
          {features.map((f, index) => (
            <div key={f.title} className="feature-card relative overflow-hidden group rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            {/* Add a decorative wave pattern in the background */}
            <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-primary/10 opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
            
            {/* Add animated path connector */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            
            {/* Icon with more dynamic styling */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 text-primary text-2xl transition-all duration-300 animate-pulseGlow">
                {f.icon}
              </div>
            </div>
            
            {/* Content with enhanced animations */}
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-primary transition-colors duration-300">
              {f.title}
            </h3>
            
            <p className="leading-relaxed text-muted-foreground text-center mb-6">{f.desc}</p>
            
            <div className="h-1 w-16 bg-primary/30 mt-6 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
