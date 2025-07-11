

import React, { useEffect, useRef, useState } from 'react'
import about from "../assets/about.jpg"
import { Check } from 'lucide-react'

const About = () => {
  const benefits = [
    "Reduce your carbon footprint",
    "Make your commute more affordable",
    "Connect with like-minded people",
    "Reduce traffic congestion"
  ]

  // Counters
  const [rideCount, setRideCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [co2Count, setCo2Count] = useState(0);

  const countersStarted = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible && !countersStarted.current) {
        countersStarted.current = true;
        animateCounter(setRideCount, 50000);
        animateCounter(setUserCount, 10000);
        animateCounter(setCo2Count, 500);
      }
    };

    const animateCounter = (setCounter, target) => {
      let start = 0;
      const increment = target / 60; // adjust speed
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCounter(Math.floor(start));
      }, 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about-section" className="bg-gradient-to-br from-[#f9fafb] to-white py-20 overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
          
          {/* Image side */}
          <div className="relative">
            <div className="absolute inset-0 -top-8 -left-8 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-primary/10 animate-floatingTilt">
              <img 
                alt="Carpooling" 
                src={about} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
              />

              {/* Stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg flex justify-between items-center gap-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Rides Shared</p>
                  <p className="text-lg font-bold text-primary">{rideCount.toLocaleString()}+</p>
                </div>
                <div className="h-6 w-px bg-primary/30"></div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Active Users</p>
                  <p className="text-lg font-bold text-primary">{userCount.toLocaleString()}+</p>
                </div>
                <div className="h-6 w-px bg-primary/30"></div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">CO₂ Saved</p>
                  <p className="text-lg font-bold text-primary">{co2Count}T</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-8">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6">
              About Ride2Share
            </div>

            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              Make your everyday life <span className="text-primary">smart</span> & <span className="text-primary">sustainable</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-5">
              Effortlessly connect with fellow commuters for work, events, or errands. Build a smarter, greener way to travel.
            </p>

            <p className="text-muted-foreground text-lg mb-8">
              Join a thriving community that saves money, reduces congestion, and helps the environment — all while meeting amazing people along the way.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center bg-primary/20 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="inline-block px-6 py-3 bg-primary text-[#2563eb] rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
