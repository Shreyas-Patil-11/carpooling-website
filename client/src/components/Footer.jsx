// import { Facebook, Instagram, Twitter } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-secondary text-muted-foreground px-6 pt-16 mx-auto md:px-24 lg:px-40">
//       <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
//         <div className="sm:col-span-2">
//           <h1 className="text-xl font-bold text-primary">
//             RideShare
//           </h1>
//           <div className="mt-6 lg:max-w-sm">
//             <p className="text-sm text-foreground">
//               Share your ride with the person heading to the same destination. Experience convenience, reliability, and affordability in one seamless package. Your journey, our priority.
//             </p>
//           </div>
//         </div>
//         <div className="space-y-2 text-sm">
//           <p className="text-base font-bold tracking-wide text-foreground">Contacts</p>
//           <div className="flex">
//             <p className="mr-1 text-foreground">Phone:</p>
//             <a
//               href="tel:850-123-5021"
//               aria-label="Our phone"
//               title="Our phone"
//             >
//               850-123-5021
//             </a>
//           </div>
//           <div className="flex">
//             <p className="mr-1 text-foreground">Email:</p>
//             <a
//               href="mailto:info@rideshare.mail"
//               aria-label="Our email"
//               title="Our email"
//             >
//               rideshare@gmail.com
//             </a>
//           </div>
//           <div className="flex">
//             <p className="mr-1 text-foreground">Address:</p>
//             <a
//               href="https://www.google.com/maps"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Our address"
//               title="Our address"
//             >
//               India
//             </a>
//           </div>
//         </div>
//         <div>
//           <span className="text-base font-bold text-foreground">Social</span>
//           <div className="flex items-center mt-2 space-x-3">
//             <a href="/"><Twitter /></a>
//             <a href="/"><Instagram /></a>
//             <a href="/"><Facebook /></a>
//           </div>
//           <p className="mt-4 text-sm">Follow us on social media</p>
//         </div>
//       </div>
//       <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
//         <p className="text-sm">&copy; Copyright 2024 RideShare.com | All rights reserved.</p>
//         <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
//           <li><a href="/" className="text-sm">F.A.Q</a></li>
//           <li><a href="/" className="text-sm">Privacy Policy</a></li>
//           <li><a href="/" className="text-sm">Terms &amp; Conditions</a></li>
//         </ul>
//       </div>
//     </footer>
//   );
// }

// export default Footer

// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-gradient-to-br from-secondary/80 to-secondary border-t border-border/40">
//       {/* Newsletter Section */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
//           <div className="mb-6 md:mb-0 md:mr-8">
//             <h3 className="text-2xl font-bold mb-2">Join our newsletter</h3>
//             <p className="text-muted-foreground">Stay updated with the latest carpooling news and offers</p>
//           </div>
//           <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 flex items-center justify-center gap-2">
//               Subscribe <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
    
//       {/* Main Footer */}
//       <div className="container mx-auto px-6 pt-8 pb-16">
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-2xl font-bold">
//                 <span className="text-foreground">Ride</span>
//                 <span className="text-primary">2</span>
//                 <span className="text-foreground">Share</span>
//               </h1>
//               <div className="h-1 w-10 bg-primary mt-2"></div>
//             </div>
//             <p className="text-muted-foreground">
//               Share your ride with people heading to the same destination. Experience convenience, reliability, and affordability in one seamless package. Your journey, our priority.
//             </p>
//             <div className="flex items-center space-x-4">
//               <a 
//                 href="/" 
//                 className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
//               >
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a 
//                 href="/" 
//                 className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a 
//                 href="/" 
//                 className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
          
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold">Company</h3>
//             <nav className="flex flex-col space-y-3">
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Our Team</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Careers</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Press</a>
//             </nav>
//           </div>
          
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold">Support</h3>
//             <nav className="flex flex-col space-y-3">
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Safety</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Cancellation Options</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">COVID-19 Resources</a>
//               <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Report an Issue</a>
//             </nav>
//           </div>
          
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold">Contact</h3>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <Phone className="h-5 w-5 text-primary mt-0.5" />
//                 <div>
//                   <p className="font-medium">Phone</p>
//                   <a href="tel:850-123-5021" className="text-muted-foreground hover:text-primary transition-colors">850-123-5021</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <Mail className="h-5 w-5 text-primary mt-0.5" />
//                 <div>
//                   <p className="font-medium">Email</p>
//                   <a href="mailto:rideshare@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">rideshare@gmail.com</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 text-primary mt-0.5" />
//                 <div>
//                   <p className="font-medium">Address</p>
//                   <a 
//                     href="https://www.google.com/maps" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     India
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Bottom bar */}
//         <div className="flex flex-col lg:flex-row justify-between items-center pt-8 mt-8 border-t border-border/40">
//           <p className="text-sm text-muted-foreground mb-4 lg:mb-0">
//             &copy; {currentYear} Ride2Share.com | All rights reserved.
//           </p>
//           <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
//             <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">F.A.Q</a>
//             <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
//             <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer

// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-gradient-to-br from-[#f9fafb] via-[#eef1f6] to-white border-t border-border/40 animate-fadeIn animate-fadeIn">
//       {/* Newsletter Section */}
//       <div className="container mx-auto px-6 py-12">
//         {/* <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"> */}
//         <div className="bg-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl ring-1 ring-primary/10">
//           <div className="mb-6 md:mb-0 md:mr-8">
//             <h3 className="text-2xl font-bold mb-2">Join our newsletter</h3>
//             <p className="text-muted-foreground">Stay updated with the latest carpooling news and offers</p>
//           </div>
//           <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <button className="px-6 py-3 bg-primary text-black rounded-lg font-medium hover:bg-primary/90 flex items-center justify-center gap-2">
//               Subscribe <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
    
//       {/* Main Footer */}
//       <div className="container mx-auto px-6 pt-8 pb-16">
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-2xl font-bold">
//                 <span className="text-foreground">Ride</span>
//                 <span className="text-primary">2</span>
//                 <span className="text-foreground">Share</span>
//               </h1>
//               <div className="h-1 w-10 bg-primary mt-2"></div>
//             </div>
//             <p className="text-muted-foreground">
//               Share your ride with people heading to the same destination. Experience convenience, reliability, and affordability in one seamless package. Your journey, our priority.
//             </p>
//             <div className="flex items-center space-x-4">
//               <a 
//                 href="/" 
//                 className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center text-primary"
//               >
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a 
//                 href="/" 
//                 // className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
//                 className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center text-primary"

//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a 
//                 href="/" 
//                 className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center text-primary"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
          
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold">Company</h3>
//             <nav className="flex flex-col space-y-3">
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >About Us</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >How it Works</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >Our Team</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >Careers</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >Press</a>
//             </nav>
//           </div>
          
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold">Support</h3>
//             <nav className="flex flex-col space-y-3">
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >Help Center</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >Safety</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >Cancellation Options</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >COVID-19 Resources</a>
//               <a href="/" className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
//               >Report an Issue</a>
//             </nav>
//           </div>
          
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold">Contact</h3>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <Phone className="h-5 w-5 text-primary mt-0.5" />
//                 <div>
//                   <p className="font-medium">Phone</p>
//                   <a href="tel:850-123-5021" className="text-muted-foreground hover:text-primary transition-colors">850-123-5021</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <Mail className="h-5 w-5 text-primary mt-0.5" />
//                 <div>
//                   <p className="font-medium">Email</p>
//                   <a href="mailto:rideshare@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">rideshare@gmail.com</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 text-primary mt-0.5" />
//                 <div>
//                   <p className="font-medium">Address</p>
//                   <a 
//                     href="https://www.google.com/maps" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     India
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Bottom bar */}
//         <div className="flex flex-col lg:flex-row justify-between items-center pt-8 mt-8 border-t border-border/40">
//           <p className="text-sm text-muted-foreground mb-4 lg:mb-0">
//             &copy; {currentYear} Ride2Share.com | All rights reserved.
//           </p>
//           <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
//             <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">F.A.Q</a>
//             <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
//             <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#f9fafb] via-[#eef1f6] to-white  border-border/40 animate-fadeIn overflow-hidden">
      
      {/* Decorative journey paths in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C200,150 400,0 600,100 C800,200 1000,50 1200,100" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-drawPath" />
          <path d="M0,150 C200,50 400,200 600,100 C800,50 1000,200 1200,150" fill="transparent" stroke="hsl(var(--accent-teal))" strokeWidth="2" className="animate-drawPath" style={{ animationDelay: '0.5s' }} />
          <path d="M0,250 C200,300 400,150 600,200 C800,250 1000,150 1200,200" fill="transparent" stroke="hsl(var(--warm-orange))" strokeWidth="2" className="animate-drawPath" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Main content starts here */}
      <div className="relative z-10">
        
        {/* Newsletter Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl ring-1 ring-primary/10">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Join our newsletter</h3>
              <p className="text-muted-foreground">Stay updated with the latest carpooling news and offers</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-black rounded-lg font-medium hover:bg-primary/90 flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Sections */}
        <div className="container mx-auto px-6 pt-8 pb-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Logo + About */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-foreground">Ride</span>
                  <span className="text-primary">2</span>
                  <span className="text-foreground">Share</span>
                </h1>
                <div className="h-1 w-10 bg-primary mt-2"></div>
              </div>
              <p className="text-muted-foreground">
                Share your ride with people heading to the same destination. Experience convenience, reliability, and affordability in one seamless package.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all flex items-center justify-center text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="/" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all flex items-center justify-center text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="/" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all flex items-center justify-center text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Company</h3>
              <nav className="flex flex-col space-y-3">
                <a href="/" className="footer-link">About Us</a>
                <a href="/" className="footer-link">How it Works</a>
                <a href="/" className="footer-link">Our Team</a>
                <a href="/" className="footer-link">Careers</a>
                <a href="/" className="footer-link">Press</a>
              </nav>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Support</h3>
              <nav className="flex flex-col space-y-3">
                <a href="/" className="footer-link">Help Center</a>
                <a href="/" className="footer-link">Safety</a>
                <a href="/" className="footer-link">Cancellation Options</a>
                <a href="/" className="footer-link">COVID-19 Resources</a>
                <a href="/" className="footer-link">Report an Issue</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:850-123-5021" className="text-muted-foreground hover:text-primary transition-colors">850-123-5021</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:rideshare@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">rideshare@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      India
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 mt-8 border-t border-border/40">
            <p className="text-sm text-muted-foreground mb-4 lg:mb-0">
              &copy; {currentYear} Ride2Share.com | All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">F.A.Q</a>
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
