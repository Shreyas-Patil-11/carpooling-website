


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