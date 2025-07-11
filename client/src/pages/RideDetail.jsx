// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { Skeleton } from '@/components/ui/skeleton';
// import { Toaster } from '@/components/ui/sonner';
// import useFetch from '@/hooks/useFetch';
// import axios from 'axios';
// import { format, formatDistance } from 'date-fns';
// import { MoveDown, MoveRight, Star } from 'lucide-react';
// import React from 'react'
// import {useNavigate, useParams } from 'react-router-dom'
// import { toast } from 'sonner';

// const apiUri = import.meta.env.VITE_REACT_API_URI

// const RideDetail = () => {
  // const {rideId} = useParams();
  // const navigate = useNavigate();
  // const{ loading, data, error} = useFetch(`rides/${rideId}`)

//   // const handleBook = async() => {
//   //   try{
//   //     const res = await axios.post(`${apiUri}/rides/${rideId}/join`, {withCredentials: true})
//   //     toast(res, {
//   //       description: format(new Date(), "PPp"),
//   //     });
//   //   }catch(err){
//   //     console.log(err)
//   //   }
//   // }

//   // const handleBook = async () => {
//   //   try {
//   //     const res = await axios.post(
//   //       `${apiUri}/rides/${rideId}/join`,
//   //       {}, // Empty object for the request body if no data is required
//   //       { withCredentials: true } // Ensure this is in the config, not the body
//   //     );
//   //     toast(res, {
//   //             description: format(new Date(), "PPp"),
//   //           });
//   //   } catch (err) {
//   //     console.error("Booking Error:", err.response?.data || err.message);
//   //     toast.error("Failed to book the ride. Please try again.");
//   //   }
//     // navigate("/search")
//   // };

  // const handleBook = async () => {
  //   try {
  //     const res = await axios.post(
  //       `${apiUri}/rides/${rideId}/join`,
  //       {},
  //       { withCredentials: true }
  //     );
  
  //     toast("Ride booked successfully!", {
  //       description: format(new Date(), "PPp"),
  //     });
  
  //     // Wait a moment so the user sees the toast, then redirect
  //     setTimeout(() => {
  //       navigate("/search");
  //     }, 1500); // 1.5 seconds delay
  //   } catch (err) {
  //     console.error("Booking Error:", err.response?.data || err.message);
  //     toast.error("Failed to book the ride. Please try again.");
  //   }

  // };
  
  

//   if (loading) {
//     return <Skeleton className="w-full" />
//   }

//   if (error) {
//     return <h3 className="text-xl p-10 text-center h-svh">Error: {error.message || "ride not found"}</h3>
//   }

//   return (
//     <main className='pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto'>
//       <div className='flex flex-col gap-8 md:flex-row justify-center w-full'>
//         <div className='flex flex-col justify-start items-start gap-2 w-full'>
//           <div className='flex flex-col sm:flex-row gap-4 justify-between sm:items-center w-full py-8 pb-4'>
//             <div className='flex flex-col space-y-2'>
//               <h1 className="text-3xl font-semibold leading-7 lg:leading-9">{data?.origin.place}</h1>
//               <p className="text-base font-medium leading-6 text-muted-foreground">{data && format(new Date(data?.startTime), "PPp")}</p>
//             </div>
//             <MoveRight size={32} className="hidden sm:block" />
//             <MoveDown size={32} className="block sm:hidden" />
//             <div className="flex flex-col space-y-2 ">
//               <h1 className="text-3xl font-semibold leading-7 lg:leading-9">{data?.destination.place}</h1>
//               <p className="text-base font-medium leading-6 text-muted-foreground">{data && format(new Date(data?.endTime), "PPp")}</p>
//             </div>
//           </div>

//           <div className="w-full py-3 border-t">
//             <p className="text-base">BMW X5 (Black)</p>
//           </div>
//           <div className="w-full py-3 border-t">
//             <p>Duration: {data && formatDistance(new Date(data.startTime), new Date(data.endTime))}</p>
//           </div>
//           <div className="w-full py-3 border-t">
//             <p className="text-base">Seats: {data?.availableSeats}</p>
//           </div>
//           <div className="w-full py-3 border-t">
//             <p className="text-base">Total Price for 1 Passenger: ₹{data?.price}</p>
//           </div>

//           <AlertDialog>
//             <AlertDialogTrigger asChild>
//               <Button>Book Ride</Button>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
//                 <AlertDialogDescription>
//                   Are you sure to confirm your ride? This action will finalize your participation in the shared journey.
//                 </AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogCancel>Cancel</AlertDialogCancel>
//                 <AlertDialogAction onClick={handleBook}>Continue</AlertDialogAction>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>

//           <div className="w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col">
//           <h3 className="text-xl font-semibold leading-5">Rider Details</h3>
//           <div className="flex flex-col justify-start items-stretch h-full w-full">
//             <div className="flex flex-col justify-start items-start flex-shrink-0">
//               <div className="flex w-full space-x-4 py-8 border-b">
//                 <Avatar>
//                   <AvatarImage src={data?.profilePicture}/>
//                   <AvatarFallback className="select-none text-primary text-xl font-bold">{data?.creator.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <div className="flex justify-center items-start flex-col space-y-2">
//                   <p className="text-base font-semibold leading-4 text-left">{data?.creator.name}</p>
//                   <div className="flex items-center text-sm gap-1 text-muted-foreground"><Star fill="yellow" size={20} className="text-transparent" /> {data?.creator.stars} ratings</div>
//                 </div>
//               </div>
//               <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                 <p className="text-base font-semibold leading-4 text-center md:text-left">About John</p>
//                 <p className="text-sm text-muted-foreground">{data?.creator.age} y/o</p>
//                 <p className="text-sm text-muted-foreground">{data?.creator.ridesCreated?.length} Rides published</p>
//                 <p className="text-sm text-muted-foreground">Member since {data?.createdAt.substring(0, 4)}</p>
//               </div>
//               <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                 <p className="text-base font-semibold leading-4 text-center md:text-left">Preferences</p>
//                 <p className="text-sm text-muted-foreground">{data?.creator.profile.preferences.smoking}</p>
//                 <p className="text-sm text-muted-foreground">{data?.creator.profile.preferences.music}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//       <Toaster />
//     </main>
//   )
// }

// export default RideDetail




// import { useState } from 'react';
// import { 
//   AlertDialog, 
//   AlertDialogAction, 
//   AlertDialogCancel, 
//   AlertDialogContent, 
//   AlertDialogDescription, 
//   AlertDialogFooter, 
//   AlertDialogHeader, 
//   AlertDialogTitle, 
//   AlertDialogTrigger 
// } from '@/components/ui/alert-dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { Calendar, Car, Clock, MapPin, MoveDown, MoveRight, Star, Users } from 'lucide-react';

// // Mock data to represent what would come from the useFetch hook
// const mockData = {
//   origin: { place: "Mumbai" },
//   destination: { place: "Pune" },
//   startTime: "2025-05-01T08:00:00",
//   endTime: "2025-05-01T11:30:00",
//   availableSeats: 3,
//   price: 450,
//   creator: {
//     name: "Rahul Singh",
//     stars: 4.7,
//     age: 28,
//     ridesCreated: [1, 2, 3],
//     profile: {
//       preferences: {
//         smoking: "No smoking",
//         music: "Likes soft music"
//       }
//     }
//   },
//   createdAt: "2023-06-15T00:00:00Z"
// };

// const RideDetail = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [bookingComplete, setBookingComplete] = useState(false);
//   const data = mockData;

//   // Format date for display
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'short', 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Calculate duration between dates
//   const formatDuration = (start, end) => {
//     const startDate = new Date(start);
//     const endDate = new Date(end);
//     const diffHours = Math.floor((endDate - startDate) / (1000 * 60 * 60));
//     const diffMinutes = Math.floor(((endDate - startDate) % (1000 * 60 * 60)) / (1000 * 60));
    
//     return `${diffHours} hr ${diffMinutes} min`;
//   };

//   const handleBook = () => {
//     setLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       setBookingComplete(true);
//       // Show success message
//     }, 1500);
//   };
  
//   if (loading) {
//     return (
//       <div className="w-full max-w-4xl mx-auto p-6 flex items-center justify-center h-96">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-muted-foreground">Loading ride details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="h-96 flex items-center justify-center">
//         <div className="glass-effect p-8 rounded-lg text-center max-w-md">
//           <h3 className="text-xl font-semibold text-red-500">Error: Ride not found</h3>
//           <p className="mt-4 text-muted-foreground">Unable to load ride details. Please try again later.</p>
//           <Button className="mt-6">
//             Back to Search
//           </Button>
//         </div>
//       </div>
//     );
//   }
  
//   if (bookingComplete) {
//     return (
//       <div className="h-96 flex items-center justify-center">
//         <div className="glass-effect p-8 rounded-lg text-center max-w-md">
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold text-green-600">Booking Successful!</h3>
//           <p className="mt-4 text-muted-foreground">Your ride has been booked successfully.</p>
//           <Button className="mt-6">
//             Back to Search
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
//       <div className="max-w-5xl mx-auto glass-effect rounded-2xl p-8">
//         <div className="flex flex-col gap-8 md:flex-row justify-center w-full">
//           <div className="flex flex-col justify-start items-start gap-6 w-full">
//             {/* Journey Header with Origin-Destination */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center w-full py-6 mb-4">
//               <div className="flex flex-col space-y-2 ride-card-hover p-4 rounded-lg bg-white/70 flex-1">
//                 <div className="flex items-center gap-2 text-teal-600">
//                   <MapPin size={18} />
//                   <span className="text-sm font-medium">Origin</span>
//                 </div>
//                 <h1 className="text-3xl font-semibold leading-7 lg:leading-9">{data?.origin.place}</h1>
//                 <div className="flex items-center gap-2 text-gray-500">
//                   <Calendar size={16} />
//                   <p className="text-sm">{formatDate(data?.startTime)}</p>
//                 </div>
//               </div>
              
//               <div className="hidden sm:flex items-center justify-center w-20">
//                 <div className="relative">
//                   <MoveRight size={32} className="text-blue-500" />
//                   <div className="absolute w-16 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 top-1/2 -left-4 -z-10"></div>
//                 </div>
//               </div>
              
//               <div className="flex sm:hidden items-center justify-center h-10">
//                 <MoveDown size={32} className="text-blue-500" />
//               </div>
              
//               <div className="flex flex-col space-y-2 ride-card-hover p-4 rounded-lg bg-white/70 flex-1">
//                 <div className="flex items-center gap-2 text-teal-600">
//                   <MapPin size={18} />
//                   <span className="text-sm font-medium">Destination</span>
//                 </div>
//                 <h1 className="text-3xl font-semibold leading-7 lg:leading-9">{data?.destination.place}</h1>
//                 <div className="flex items-center gap-2 text-gray-500">
//                   <Calendar size={16} />
//                   <p className="text-sm">{formatDate(data?.endTime)}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Ride Details */}
//             <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-white/80 p-4 rounded-lg flex items-center gap-3 shadow-sm">
//                 <Car className="text-blue-500" />
//                 <p className="text-base">BMW X5 (Black)</p>
//               </div>
              
//               <div className="bg-white/80 p-4 rounded-lg flex items-center gap-3 shadow-sm">
//                 <Clock className="text-blue-500" />
//                 <p>Duration: {formatDuration(data.startTime, data.endTime)}</p>
//               </div>
              
//               <div className="bg-white/80 p-4 rounded-lg flex items-center gap-3 shadow-sm">
//                 <Users className="text-blue-500" />
//                 <p className="text-base">Seats: {data?.availableSeats}</p>
//               </div>
              
//               <div className="bg-white/80 p-4 rounded-lg flex items-center gap-3 shadow-sm">
//                 <div className="bg-blue-100 text-blue-500 font-bold rounded-full w-6 h-6 flex items-center justify-center">₹</div>
//                 <p className="text-base">Total Price for 1 Passenger: <span className="font-semibold">₹{data?.price}</span></p>
//               </div>
//             </div>

//             {/* Booking Button */}
//             <div className="w-full flex justify-center my-8">
//               <AlertDialog>
//                 <AlertDialogTrigger asChild>
//                   <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg shadow-lg rounded-lg transition-all duration-300 hover:-translate-y-1">
//                     Book Ride
//                   </Button>
//                 </AlertDialogTrigger>
//                 <AlertDialogContent className="bg-white/95 backdrop-blur-md border border-blue-100 shadow-xl">
//                   <AlertDialogHeader>
//                     <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
//                     <AlertDialogDescription>
//                       Are you sure to confirm your ride? This action will finalize your participation in the shared journey.
//                     </AlertDialogDescription>
//                   </AlertDialogHeader>
//                   <AlertDialogFooter>
//                     <AlertDialogCancel>Cancel</AlertDialogCancel>
//                     <AlertDialogAction onClick={handleBook}>Continue</AlertDialogAction>
//                   </AlertDialogFooter>
//                 </AlertDialogContent>
//               </AlertDialog>
//             </div>

//             {/* Rider Details */}
//             <div className="w-full bg-white/90 rounded-xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold leading-5 mb-4">Rider Details</h3>
//               <div className="flex flex-col justify-start items-stretch w-full">
//                 <div className="flex w-full space-x-4 py-4 border-b border-blue-100">
//                   <Avatar className="h-16 w-16">
//                     <AvatarFallback className="select-none text-blue-500 text-xl font-bold bg-blue-50">{data?.creator.name[0]}</AvatarFallback>
//                   </Avatar>
//                   <div className="flex justify-center items-start flex-col space-y-2">
//                     <p className="text-lg font-semibold leading-4 text-left">{data?.creator.name}</p>
//                     <div className="flex items-center text-sm gap-1 text-gray-500">
//                       <Star fill="gold" size={20} className="text-yellow-400" /> 
//                       <span>{data?.creator.stars} ratings</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                   <div className="space-y-3">
//                     <p className="text-base font-semibold">About Driver</p>
//                     <div className="text-sm text-gray-600 space-y-2">
//                       <p>{data?.creator.age} years old</p>
//                       <p>{data?.creator.ridesCreated?.length} Rides published</p>
//                       <p>Member since {data?.createdAt.substring(0, 4)}</p>
//                     </div>
//                   </div>
//                   <div className="space-y-3">
//                     <p className="text-base font-semibold">Preferences</p>
//                     <div className="text-sm text-gray-600 space-y-2">
//                       <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
//                         <span className="w-2 h-2 rounded-full bg-blue-500"></span>
//                         <p>{data?.creator.profile.preferences.smoking}</p>
//                       </div>
//                       <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
//                         <span className="w-2 h-2 rounded-full bg-blue-500"></span>
//                         <p>{data?.creator.profile.preferences.music}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default RideDetail;

// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { Skeleton } from '@/components/ui/skeleton';
// import { Toaster } from '@/components/ui/sonner';
// import useFetch from '@/hooks/useFetch';
// import axios from 'axios';
// import { format, formatDistance } from 'date-fns';
// import { MoveDown, MoveRight, Star, Calendar, Clock, Users, CreditCard, Car } from 'lucide-react';
// import React from 'react'
// import {useNavigate, useParams } from 'react-router-dom'
// import { toast } from 'sonner';


// const apiUri = import.meta.env.VITE_REACT_API_URI

// const RideDetail = () => {
//   const {rideId} = useParams();
//   const navigate = useNavigate();
//   const{ loading, data, error} = useFetch(`rides/${rideId}`)
  
  
//   const handleBook = async () => {
//     try {
//       const res = await axios.post(
//         `${apiUri}/rides/${rideId}/join`,
//         {},
//         { withCredentials: true }
//       );
  
//       toast("Ride booked successfully!", {
//         description: format(new Date(), "PPp"),
//       });
  
//       // Wait a moment so the user sees the toast, then redirect
//       setTimeout(() => {
//         navigate("/search");
//       }, 1500); // 1.5 seconds delay
//     } catch (err) {
//       console.error("Booking Error:", err.response?.data || err.message);
//       toast.error("Failed to book the ride. Please try again.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Skeleton className="w-3/4 h-96 rounded-xl animate-shimmer" />
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h3 className="text-2xl font-semibold text-destructive">Error: {error.message || "ride not found"}</h3>
//         <Button 
//           className="mt-6 animate-fadeIn pulse-button" 
//           onClick={() => navigate("/search")}
//         >
//           Go Back to Search
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <main className='pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto hero-gradient animate-fadeIn'>
//       <div className='max-w-5xl mx-auto glass-effect p-8 rounded-xl shadow-lg'>
//         <div className='flex flex-col gap-8 md:flex-row justify-center w-full'>
//           <div className='flex flex-col justify-start items-start gap-4 w-full'>
//             {/* Journey Header with Enhanced Styling */}
//             <div className='flex flex-col sm:flex-row gap-6 justify-between sm:items-center w-full py-8 pb-6 colored-glass-effect p-6 rounded-xl'>
//               <div className='flex flex-col space-y-2 journey-badge'>
//                 <h1 className="text-3xl font-semibold leading-7 lg:leading-9 text-primary">{data?.origin.place}</h1>
//                 <p className="text-base font-medium leading-6 text-muted-foreground flex items-center gap-2">
//                   <Calendar size={16} /> {data && format(new Date(data?.startTime), "PPp")}
//                 </p>
//               </div>
              
//               <div className="hidden sm:flex items-center">
//                 <svg className="journey-path animate-drawPath" width="100" height="20">
//                   <path d="M5 10 H95" />
//                 </svg>
//                 <MoveRight size={32} className="text-primary animate-floatingTilt" />
//               </div>
              
//               <MoveDown size={32} className="block mx-auto sm:hidden text-primary animate-floatingTilt" />
              
//               <div className="flex flex-col space-y-2 journey-badge">
//                 <h1 className="text-3xl font-semibold leading-7 lg:leading-9 text-primary">{data?.destination.place}</h1>
//                 <p className="text-base font-medium leading-6 text-muted-foreground flex items-center gap-2">
//                   <Calendar size={16} /> {data && format(new Date(data?.endTime), "PPp")}
//                 </p>
//               </div>
//             </div>

//             {/* Ride Information Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-4">
//               <div className="form-item p-4 flex items-center gap-3">
//                 <Car size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Vehicle</p>
//                   <p className="text-base font-medium">BMW X5 (Black)</p>
//                 </div>
//               </div>
              
//               <div className="form-item p-4 flex items-center gap-3">
//                 <Clock size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Duration</p>
//                   <p className="text-base font-medium">{data && formatDistance(new Date(data.startTime), new Date(data.endTime))}</p>
//                 </div>
//               </div>
              
//               <div className="form-item p-4 flex items-center gap-3">
//                 <Users size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Available Seats</p>
//                   <p className="text-base font-medium">{data?.availableSeats}</p>
//                 </div>
//               </div>
              
//               <div className="form-item p-4 flex items-center gap-3">
//                 <CreditCard size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Price per Passenger</p>
//                   <p className="text-base font-medium">₹{data?.price}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Button with Alert Dialog */}
//             <div className="w-full flex justify-center my-6 ">
//               <AlertDialog>
//                 <AlertDialogTrigger asChild>
//                   <Button className="w-full sm:w-64 py-6 text-lg pulse-button animate-pulseGlow cursor-pointer">Book Ride</Button>
//                 </AlertDialogTrigger>
//                 <AlertDialogContent className="glass-effect">
//                   <AlertDialogHeader>
//                     <AlertDialogTitle className="text-xl text-primary">Confirm your booking</AlertDialogTitle>
//                     <AlertDialogDescription>
//                       Are you sure to confirm your ride? This action will finalize your participation in the shared journey.
//                     </AlertDialogDescription>
//                   </AlertDialogHeader>
//                   <AlertDialogFooter>
//                     <AlertDialogCancel className="hover:bg-muted">Cancel</AlertDialogCancel>
//                     <AlertDialogAction onClick={handleBook} className="bg-primary hover:bg-primary/90">Continue</AlertDialogAction>
//                   </AlertDialogFooter>
//                 </AlertDialogContent>
//               </AlertDialog>
//             </div>

//             {/* Rider Details Section with Enhanced Styling */}
//             <div className="w-full card-hover1-effect colored-glass-effect p-6 rounded-xl mt-8">
//               <h3 className="text-xl font-semibold leading-5 mb-4 text-primary">Rider Details</h3>
//               <div className="flex flex-col justify-start items-stretch h-full w-full">
//                 <div className="flex flex-col justify-start items-start flex-shrink-0">
//                   <div className="flex w-full space-x-4 py-4 border-b">
//                     <Avatar className="h-16 w-16 animate-pulseGlow">
//                       <AvatarImage src={data?.profilePicture}/>
//                       <AvatarFallback className="select-none text-primary text-xl font-bold bg-primary/10">{data?.creator.name[0]}</AvatarFallback>
//                     </Avatar>
//                     <div className="flex justify-center items-start flex-col space-y-2">
//                       <p className="text-lg font-semibold leading-4 text-left">{data?.creator.name}</p>
//                       <div className="flex items-center text-sm gap-1 text-muted-foreground">
//                         <Star fill="gold" size={18} /> {data?.creator.stars} ratings
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6">
//                     <div className="space-y-4">
//                       <p className="text-base font-semibold leading-4 text-primary">About {data?.creator.name.split(' ')[0]}</p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> {data?.creator.age} years old
//                       </p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> {data?.creator.ridesCreated?.length} Rides published
//                       </p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> Member since {data?.createdAt.substring(0, 4)}
//                       </p>
//                     </div>
                    
//                     <div className="space-y-4">
//                       <p className="text-base font-semibold leading-4 text-primary">Preferences</p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="journey-badge px-2 py-1 rounded-full bg-accent/10 text-accent">{data?.creator.profile.preferences.smoking}</span>
//                       </p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="journey-badge px-2 py-1 rounded-full bg-accent/10 text-accent">{data?.creator.profile.preferences.music}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Toaster />
//     </main>
//   )
// }

// export default RideDetail


// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { Skeleton } from '@/components/ui/skeleton';
// import { Toaster } from '@/components/ui/sonner';
// import useFetch from '@/hooks/useFetch';
// import axios from 'axios';
// import { format, formatDistance } from 'date-fns';
// import { MoveDown, MoveRight, Star, Calendar, Clock, Users, CreditCard, Car } from 'lucide-react';
// import React, { useContext, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'sonner';
// import { AuthContext } from '@/context/AuthContext';
// import LoginSignupDialog from '@/components/LoginSignupDialog';

// const apiUri = import.meta.env.VITE_REACT_API_URI;

// const RideDetail = () => {
//   const { rideId } = useParams();
//   const navigate = useNavigate();
//   const { loading, data, error } = useFetch(`rides/${rideId}`);
//   const { user } = useContext(AuthContext);
//   const [showLoginDialog, setShowLoginDialog] = useState(false);
  
//   const handleBook = async () => {
//     // If user is not logged in, show login dialog
//     if (!user) {
//       // Save current route to redirect after login
//       localStorage.setItem('redirectAfterLogin', `/ride/${rideId}`);
//       setShowLoginDialog(true);
//       return;
//     }
    
//     try {
//       const res = await axios.post(
//         `${apiUri}/rides/${rideId}/join`,
//         {},
//         { withCredentials: true }
//       );
  
//       toast(`Ride to ${data?.destination.place} booked successfully!`, {
//         description: `with ${data?.creator.name} · ${format(new Date(), "PPpp")}`,
//         duration: 3000,
//         icon: "🚗", 
//       });
  
//       // Wait a moment so the user sees the toast, then redirect
//       setTimeout(() => {
//         navigate("/search");
//       }, 1500); // 1.5 seconds delay
//     } 
//     // catch (err) {
//     //   console.error("Booking Error:", err.response?.data || err.message);
//     //   // toast.error("Failed to book the ride. Please try again.");
//     //   toast.error("Sorry, all seats for this ride are already booked.");

//     // }
//    catch (err) {
//     const message = err.response?.data?.message?.toLowerCase() || err.message.toLowerCase();
  
//     if (message.includes("full")) {
//       toast.error("Sorry, all seats for this ride are already booked.", {
//         icon: "❌",
//       });
//     } else if (message.includes("already joined")) {
//       toast.error("You've already joined this ride.", {
//         icon: "ℹ️",
//       });
//     } else {
//       toast.error("Failed to book the ride. Please try again.", {
//         icon: "⚠️",
//       });
//     }
  
//     console.error("Booking Error:", err.response?.data || err.message);
//   }
  
//   };

//   const handleLoginSuccess = () => {
//     setShowLoginDialog(false);
//     // No need to navigate, the LoginSignupDialog component will handle the redirect
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Skeleton className="w-3/4 h-96 rounded-xl animate-shimmer" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h3 className="text-2xl font-semibold text-destructive">Error: {error.message || "ride not found"}</h3>
//         <Button 
//           className="mt-6 animate-fadeIn pulse-button" 
//           onClick={() => navigate("/search")}
//         >
//           Go Back to Search
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <main className='pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto hero-gradient animate-fadeIn'>
//       <div className='max-w-5xl mx-auto glass-effect p-8 rounded-xl shadow-lg'>
//         <div className='flex flex-col gap-8 md:flex-row justify-center w-full'>
//           <div className='flex flex-col justify-start items-start gap-4 w-full'>
//             {/* Journey Header with Enhanced Styling */}
//             <div className='flex flex-col sm:flex-row gap-6 justify-between sm:items-center w-full py-8 pb-6 colored-glass-effect p-6 rounded-xl'>
//               <div className='flex flex-col space-y-2 journey-badge'>
//                 <h1 className="text-3xl font-semibold leading-7 lg:leading-9 text-primary">{data?.origin.place}</h1>
//                 <p className="text-base font-medium leading-6 text-muted-foreground flex items-center gap-2">
//                   <Calendar size={16} /> {data && format(new Date(data?.startTime), "PPp")}
//                 </p>
//               </div>
              
//               <div className="hidden sm:flex items-center">
//                 <svg className="journey-path animate-drawPath" width="100" height="20">
//                   <path d="M5 10 H95" />
//                 </svg>
//                 <MoveRight size={32} className="text-primary animate-floatingTilt" />
//               </div>
              
//               <MoveDown size={32} className="block mx-auto sm:hidden text-primary animate-floatingTilt" />
              
//               <div className="flex flex-col space-y-2 journey-badge">
//                 <h1 className="text-3xl font-semibold leading-7 lg:leading-9 text-primary">{data?.destination.place}</h1>
//                 <p className="text-base font-medium leading-6 text-muted-foreground flex items-center gap-2">
//                   <Calendar size={16} /> {data && format(new Date(data?.endTime), "PPp")}
//                 </p>
//               </div>
//             </div>

//             {/* Ride Information Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-4">
//               <div className="form-item p-4 flex items-center gap-3">
//                 <Car size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Vehicle</p>
//                   <p className="text-base font-medium">BMW X5 (Black)</p>
//                 </div>
//               </div>
              
//               <div className="form-item p-4 flex items-center gap-3">
//                 <Clock size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Duration</p>
//                   <p className="text-base font-medium">{data && formatDistance(new Date(data.startTime), new Date(data.endTime))}</p>
//                 </div>
//               </div>
              
//               <div className="form-item p-4 flex items-center gap-3">
//                 <Users size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Available Seats</p>
//                   <p className="text-base font-medium">{data?.availableSeats}</p>
//                 </div>
//               </div>
              
//               <div className="form-item p-4 flex items-center gap-3">
//                 <CreditCard size={20} className="text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Price per Passenger</p>
//                   <p className="text-base font-medium">₹{data?.price}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Button with Alert Dialog */}
//             <div className="w-full flex justify-center my-6 ">
//               <AlertDialog>
//                 <AlertDialogTrigger asChild>
//                   <Button className="w-full sm:w-64 py-6 text-lg pulse-button animate-pulseGlow cursor-pointer">Book Ride</Button>
//                 </AlertDialogTrigger>
//                 <AlertDialogContent className="glass-effect">
//                   <AlertDialogHeader>
//                     <AlertDialogTitle className="text-xl text-primary">Confirm your booking</AlertDialogTitle>
//                     <AlertDialogDescription>
//                       Are you sure to confirm your ride? This action will finalize your participation in the shared journey.
//                     </AlertDialogDescription>
//                   </AlertDialogHeader>
//                   <AlertDialogFooter>
//                     <AlertDialogCancel className="hover:bg-muted">Cancel</AlertDialogCancel>
//                     <AlertDialogAction onClick={handleBook} className="bg-primary hover:bg-primary/90">Continue</AlertDialogAction>
//                   </AlertDialogFooter>
//                 </AlertDialogContent>
//               </AlertDialog>
//             </div>

//             {/* Rider Details Section with Enhanced Styling */}
//             <div className="w-full card-hover1-effect colored-glass-effect p-6 rounded-xl mt-8">
//               <h3 className="text-xl font-semibold leading-5 mb-4 text-primary">Rider Details</h3>
//               <div className="flex flex-col justify-start items-stretch h-full w-full">
//                 <div className="flex flex-col justify-start items-start flex-shrink-0">
//                   <div className="flex w-full space-x-4 py-4 border-b">
//                     <Avatar className="h-16 w-16 animate-pulseGlow">
//                       <AvatarImage src={data?.profilePicture} />
//                       <AvatarFallback className="select-none text-primary text-xl font-bold bg-primary/10">{data?.creator.name[0]}</AvatarFallback>
//                     </Avatar>
//                     <div className="flex justify-center items-start flex-col space-y-2">
//                       <p className="text-lg font-semibold leading-4 text-left">{data?.creator.name}</p>
//                       <div className="flex items-center text-sm gap-1 text-muted-foreground">
//                         <Star fill="gold" size={18} /> {data?.creator.stars} ratings
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6">
//                     <div className="space-y-4">
//                       <p className="text-base font-semibold leading-4 text-primary">About {data?.creator.name.split(' ')[0]}</p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> {data?.creator.age} years old
//                       </p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> {data?.creator.ridesCreated?.length} Rides published
//                       </p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> Member since {data?.createdAt.substring(0, 4)}
//                       </p>
//                     </div>
                    
//                     <div className="space-y-4">
//                       <p className="text-base font-semibold leading-4 text-primary">Preferences</p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="journey-badge px-2 py-1 rounded-full bg-accent/10 text-accent">{data?.creator.profile.preferences.smoking}</span>
//                       </p>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <span className="journey-badge px-2 py-1 rounded-full bg-accent/10 text-accent">{data?.creator.profile.preferences.music}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Login Dialog */}
//       {showLoginDialog && (
//         <LoginSignupDialog
//           isInitiallyOpen={true}
//           showButtonOnly={false}
//           onLoginSuccess={handleLoginSuccess}
//         />
//       )}
      
      
//     </main>
//   );
// };

// export default RideDetail;


import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import useFetch from '@/hooks/useFetch';
import axios from 'axios';
import { format, formatDistance } from 'date-fns';
import { MoveDown, MoveRight, Star, Calendar, Clock, Users, CreditCard, Car, CheckCircle } from 'lucide-react';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { AuthContext } from '@/context/AuthContext';
import LoginSignupDialog from '@/components/LoginSignupDialog';

const apiUri = import.meta.env.VITE_REACT_API_URI;

const RideDetail = () => {
  const { rideId } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useFetch(`rides/${rideId}`);
  const { user } = useContext(AuthContext);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [bookingStatus, setBookingStatus] = useState({ 
    status: null, // 'success', 'error', 'loading', null
    message: '' 
  });
  const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    // Reset animation and redirect after successful booking
    if (showSuccess) {
      const timer = setTimeout(() => {
        navigate("/search");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);
  
  const handleBook = async () => {
    // If user is not logged in, show login dialog
    if (!user) {
      // Save current route to redirect after login
      localStorage.setItem('redirectAfterLogin', `/ride/${rideId}`);
      setShowLoginDialog(true);
      return;
    }
    
    setBookingStatus({ status: 'loading', message: 'Processing your booking...' });
    
    try {
      const res = await axios.post(
        `${apiUri}/rides/${rideId}/join`,
        {},
        { withCredentials: true }
      );
      
      // Show success animation
      setBookingStatus({ status: 'success', message: `Ride to ${data?.destination.place} booked successfully!` });
      setShowSuccess(true);
    } 
    catch (err) {
      const message = err.response?.data?.message?.toLowerCase() || err.message.toLowerCase();
    
      if (message.includes("full")) {
        setBookingStatus({ 
          status: 'error', 
          message: "Sorry, all seats for this ride are already booked." 
        });
        toast.error("Sorry, all seats for this ride are already booked.", {
          icon: "❌",
        });
      } else if (message.includes("already joined")) {
        setBookingStatus({ 
          status: 'error', 
          message: "You've already joined this ride." 
        });
        toast.error("You've already joined this ride.", {
          icon: "ℹ️",
        });
      } else {
        setBookingStatus({ 
          status: 'error', 
          message: "Failed to book the ride. Please try again." 
        });
        toast.error("Failed to book the ride. Please try again.", {
          icon: "⚠️",
        });
      }
    
      console.error("Booking Error:", err.response?.data || err.message);
    }
  };

  const handleLoginSuccess = () => {
    setShowLoginDialog(false);
    // No need to navigate, the LoginSignupDialog component will handle the redirect
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Skeleton className="w-3/4 h-96 rounded-xl animate-shimmer" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h3 className="text-2xl font-semibold text-destructive">Error: {error.message || "ride not found"}</h3>
        <Button 
          className="mt-6 animate-fadeIn pulse-button" 
          onClick={() => navigate("/search")}
        >
          Go Back to Search
        </Button>
      </div>
    );
  }

  return (
    <main className='pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto hero-gradient animate-fadeIn'>
      <div className='max-w-5xl mx-auto glass-effect p-8 rounded-xl shadow-lg'>
        <div className='flex flex-col gap-8 md:flex-row justify-center w-full'>
          <div className='flex flex-col justify-start items-start gap-4 w-full'>
            {/* Journey Header with Enhanced Styling */}
            <div className='flex flex-col sm:flex-row gap-6 justify-between sm:items-center w-full py-8 pb-6 colored-glass-effect p-6 rounded-xl'>
              <div className='flex flex-col space-y-2 journey-badge'>
                <h1 className="text-3xl font-semibold leading-7 lg:leading-9 text-primary">{data?.origin.place}</h1>
                <p className="text-base font-medium leading-6 text-muted-foreground flex items-center gap-2">
                  <Calendar size={16} /> {data && format(new Date(data?.startTime), "PPp")}
                </p>
              </div>
              
              <div className="hidden sm:flex items-center">
                <svg className="journey-path animate-drawPath" width="100" height="20">
                  <path d="M5 10 H95" />
                </svg>
                <MoveRight size={32} className="text-primary animate-floatingTilt" />
              </div>
              
              <MoveDown size={32} className="block mx-auto sm:hidden text-primary animate-floatingTilt" />
              
              <div className="flex flex-col space-y-2 journey-badge">
                <h1 className="text-3xl font-semibold leading-7 lg:leading-9 text-primary">{data?.destination.place}</h1>
                <p className="text-base font-medium leading-6 text-muted-foreground flex items-center gap-2">
                  <Calendar size={16} /> {data && format(new Date(data?.endTime), "PPp")}
                </p>
              </div>
            </div>

            {/* Ride Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-4">
              <div className="form-item p-4 flex items-center gap-3">
                <Car size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Vehicle</p>
                  <p className="text-base font-medium">BMW X5 (Black)</p>
                </div>
              </div>
              
              <div className="form-item p-4 flex items-center gap-3">
                <Clock size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-base font-medium">{data && formatDistance(new Date(data.startTime), new Date(data.endTime))}</p>
                </div>
              </div>
              
              <div className="form-item p-4 flex items-center gap-3">
                <Users size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Available Seats</p>
                  <p className="text-base font-medium">{data?.availableSeats}</p>
                </div>
              </div>
              
              <div className="form-item p-4 flex items-center gap-3">
                <CreditCard size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Price per Passenger</p>
                  <p className="text-base font-medium">₹{data?.price}</p>
                </div>
              </div>
            </div>

            {/* Booking Button with Alert Dialog and Status Messages */}
            <div className="w-full flex flex-col items-center my-6">
              {showSuccess ? (
                <div className="flex flex-col items-center justify-center w-full">
                  <CheckCircle size={64} className="text-green-500 animate-success" />
                  <p className="text-lg font-medium text-green-500 mt-2">
                    Ride to {data?.destination.place} booked successfully!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Redirecting to search page...
                  </p>
                </div>
              ) : (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button 
                        className="w-full sm:w-64 py-6 text-lg pulse-button animate-pulseGlow cursor-pointer"
                        disabled={bookingStatus.status === 'loading'}
                      >
                        {bookingStatus.status === 'loading' ? 'Processing...' : 'Book Ride'}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="glass-effect">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-xl text-primary">Confirm your booking</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure to confirm your ride? This action will finalize your participation in the shared journey.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="hover:bg-muted">Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleBook} className="bg-primary hover:bg-primary/90">Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  {/* Status message below the button */}
                  {bookingStatus.status === 'error' && (
                    <p className="mt-3 text-sm text-destructive text-center">
                      {bookingStatus.message}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Rider Details Section with Enhanced Styling */}
            <div className="w-full card-hover1-effect colored-glass-effect p-6 rounded-xl mt-8">
              <h3 className="text-xl font-semibold leading-5 mb-4 text-primary">Rider Details</h3>
              <div className="flex flex-col justify-start items-stretch h-full w-full">
                <div className="flex flex-col justify-start items-start flex-shrink-0">
                  <div className="flex w-full space-x-4 py-4 border-b">
                    <Avatar className="h-16 w-16 animate-pulseGlow">
                      <AvatarImage src={data?.profilePicture} />
                      <AvatarFallback className="select-none text-primary text-xl font-bold bg-primary/10">{data?.creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex justify-center items-start flex-col space-y-2">
                      <p className="text-lg font-semibold leading-4 text-left">{data?.creator.name}</p>
                      <div className="flex items-center text-sm gap-1 text-muted-foreground">
                        <Star fill="gold" size={18} /> {data?.creator.stars} ratings
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6">
                    <div className="space-y-4">
                      <p className="text-base font-semibold leading-4 text-primary">About {data?.creator.name.split(' ')[0]}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> {data?.creator.age} years old
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> {data?.creator.ridesCreated?.length} Rides published
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary"></span> Member since {data?.createdAt.substring(0, 4)}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-base font-semibold leading-4 text-primary">Preferences</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="journey-badge px-2 py-1 rounded-full bg-accent/10 text-accent">{data?.creator.profile.preferences.smoking}</span>
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="journey-badge px-2 py-1 rounded-full bg-accent/10 text-accent">{data?.creator.profile.preferences.music}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Login Dialog */}
      {showLoginDialog && (
        <LoginSignupDialog
          isInitiallyOpen={true}
          showButtonOnly={false}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </main>
  );
};

export default RideDetail;