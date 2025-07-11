


import MobileSidebar from '@/components/MobileSidebar';
import RideCard from '@/components/RideCard';
import Search from '@/components/Search';
import Sidebar from '@/components/Sidebar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import useFetch from '@/hooks/useFetch';
import { MoveRight, SlidersHorizontal, MapPin, Calendar, Users, Route } from 'lucide-react';
import { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import LoginSignupDialog from '@/components/LoginSignupDialog';

const baseURL = import.meta.env.VITE_REACT_API_URI;

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const params = new URLSearchParams(location.search);
  const [open, setOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  const from = params.get('from') || '';
  const to = params.get('to') || '';
  const date = params.get('date') || '';
  const seat = params.get('seat') || '';

  // State for filters
  const [sortOption, setSortOption] = useState('');
  const [departureFilters, setDepartureFilters] = useState({
    departure_before_six_am: false,
    departure_six_to_noon: false,
    departure_noon_to_six: false,
  });

  const { loading, data } = useFetch(
    from && to
      ? `rides/find?from=${from}&to=${to}&seat=${seat}&date=${date}`
      : 'rides/find?from=&to=&seat=1'
  );

  // State for filtered rides
  const [filteredRides, setFilteredRides] = useState([]);

  // Apply filters whenever data or filter options change
  useEffect(() => {
    if (!data?.rides) return;

    let rides = [...data.rides];

    // Apply departure time filters
    if (Object.values(departureFilters).some(value => value)) {
      rides = rides.filter(ride => {
        const rideTime = new Date(ride.startTime);
        const hours = rideTime.getHours();

        if (departureFilters.departure_before_six_am && hours < 6) return true;
        if (departureFilters.departure_six_to_noon && hours >= 6 && hours < 12) return true;
        if (departureFilters.departure_noon_to_six && hours >= 12 && hours < 18) return true;

        return Object.values(departureFilters).every(value => !value);
      });
    }

    // Apply sorting
    if (sortOption) {
      switch (sortOption) {
        case 'Earliest Departure':
          rides.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
          break;
        case 'Price':
          rides.sort((a, b) => a.price - b.price);
          break;
        case 'Shortest Ride':
          rides.sort((a, b) => {
            const aDuration = (new Date(a.endTime) - new Date(a.startTime));
            const bDuration = (new Date(b.endTime) - new Date(b.startTime));
            return aDuration - bDuration;
          });
          break;
        default:
          break;
      }
    }

    setFilteredRides(rides);
  }, [data, sortOption, departureFilters]);

  // Handle filter changes
  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const handleDepartureFilterChange = (name, checked) => {
    setDepartureFilters(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const clearFilters = () => {
    setSortOption('');
    setDepartureFilters({
      departure_before_six_am: false,
      departure_six_to_noon: false,
      departure_noon_to_six: false,
    });
  };

  // Handle ride selection - check if user is logged in first
  const handleRideSelect = (rideId) => {
    if (user) {
      // User is logged in, navigate directly to ride details
      navigate(`/ride/${rideId}`);
    } else {
      // Store the ride ID to redirect after login
      localStorage.setItem('redirectAfterLogin', `/ride/${rideId}`);
      // Show login dialog
      setShowAuthDialog(true);
    }
  };

  // Handle successful login
  const handleLoginSuccess = () => {
    setShowAuthDialog(false);
    // The redirect will be handled by the LoginSignupDialog component
  };

  return (
    <main className="bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--accent-teal),0.05)] min-h-screen">
      {/* Search Bar Section */}
      <div className="relative z-10 border-b bg-transparent pt-8 pb-6">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              className="journey-path animate-drawPath"
              d="M0,100 C300,30 600,170 1200,100"
              stroke="hsl(var(--primary-blue))"
              strokeWidth="2"
              fill="none"
            />
            <path
              className="journey-path animate-drawPath"
              d="M0,150 C300,80 600,220 1200,150"
              stroke="hsl(var(--accent-teal))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,10"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>
        </div>

        {/* Search container with glass effect */}
        <div className="container mx-auto p-2">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-auto max-w-4xl glass-effect rounded-2xl shadow-xl p-4 border border-[hsl(var(--primary-blue),0.2)]">
              <Search />
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="md:hidden border border-[hsl(var(--accent-teal),0.3)] rounded-full p-3 ml-2 bg-[hsl(var(--background))] text-[hsl(var(--accent-teal))] shadow-md hover:bg-[hsl(var(--accent-teal),0.1)] transition-all">
                <SlidersHorizontal className="h-5 w-5" />
              </DialogTrigger>
              <DialogContent className="glass-effect bg-white/40">
                <MobileSidebar
                  sortOption={sortOption}
                  onSortChange={handleSortChange}
                  departureFilters={departureFilters}
                  onDepartureFilterChange={handleDepartureFilterChange}
                  onClearFilters={clearFilters}
                  onApplyFilters={() => setOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Search journey context visualization */}
      {from && to && (
        <div className="relative h-16 overflow-hidden">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-2xl">
                <svg className="w-full h-8" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="journey-path animate-drawPath"
                    d="M10,10 C75,5 150,15 290,10"
                    stroke="hsl(var(--primary-blue))"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="12" cy="10" r="4" fill="hsl(var(--primary-blue))" />
                  <circle cx="288" cy="10" r="4" fill="hsl(var(--accent-teal))" />
                </svg>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[hsl(var(--primary-blue),0.1)] rounded-full px-2 py-1 text-xs font-medium flex items-center text-[hsl(var(--primary-blue))]">
                  <MapPin className="h-3 w-3 mr-1 text-[hsl(var(--primary-blue))]" />
                  {from}
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[hsl(var(--accent-teal),0.1)] rounded-full px-2 py-1 text-xs font-medium flex items-center text-[hsl(var(--accent-teal))]">
                  <MapPin className="h-3 w-3 mr-1 text-[hsl(var(--accent-teal))]" />
                  {to}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content grid */}
      <div className="container mx-auto p-4 max-w-screen-xl grid md:grid-cols-5 gap-6">
        {/* Sidebar */}
        <div className="hidden md:block">
          <div className="sticky top-20">
            <div className="glass-effect rounded-2xl shadow-lg p-4 border border-[hsl(var(--primary-blue),0.2)]">
              <h3 className="font-semibold text-lg mb-4 flex items-center text-[hsl(var(--foreground))]">
                <SlidersHorizontal className="w-4 h-4 mr-2 text-[hsl(var(--accent-teal))]" />
                Filters
              </h3>
              <Sidebar
                sortOption={sortOption}
                onSortChange={handleSortChange}
                departureFilters={departureFilters}
                onDepartureFilterChange={handleDepartureFilterChange}
                onClearFilters={clearFilters}
              />
            </div>
          </div>
        </div>

        {/* Results area */}
        <div className="col-span-3 md:col-span-4 lg:border-l border-[hsl(var(--primary-blue),0.1)] pl-0 lg:pl-6">
          {/* Search result stats */}
          <div className="glass-effect rounded-2xl p-4 mb-6 shadow-md border border-[hsl(var(--primary-blue),0.2)]">
            {loading ? (
              <Skeleton className="h-8 w-64" />
            ) : (
              <>
                {from && to ? (
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-[hsl(var(--foreground))]">
                      <span className="flex items-center">
                        <span className="bg-[hsl(var(--primary-blue),0.1)] text-[hsl(var(--primary-blue))] p-1 rounded-full"><MapPin className="h-4 w-4" /></span>
                        <span className="ml-1">{from}</span>
                      </span>
                      <MoveRight className="mx-1 text-[hsl(var(--accent-teal))]" />
                      <span className="flex items-center">
                        <span className="bg-[hsl(var(--accent-teal),0.1)] text-[hsl(var(--accent-teal))] p-1 rounded-full"><MapPin className="h-4 w-4" /></span>
                        <span className="ml-1">{to}</span>
                      </span>
                    </h3>
                    <div className="flex gap-4 mt-2 md:mt-0">
                      {date && (
                        <span className="text-sm flex items-center text-[hsl(var(--muted-foreground))]">
                          <Calendar className="h-4 w-4 mr-1 text-[hsl(var(--accent-purple))]" />
                          {new Date(date).toLocaleDateString()}
                        </span>
                      )}
                      {seat && (
                        <span className="text-sm flex items-center text-[hsl(var(--muted-foreground))]">
                          <Users className="h-4 w-4 mr-1 text-[hsl(var(--accent-purple))]" />
                          {seat} {parseInt(seat) === 1 ? 'seat' : 'seats'}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <h3 className="text-lg font-semibold flex items-center text-[hsl(var(--foreground))]">
                    <Route className="h-5 w-5 mr-2 text-[hsl(var(--primary-blue))]" />
                    All Available Rides
                  </h3>
                )}

                <div className="mt-2 text-md text-[hsl(var(--muted-foreground))] flex items-center">
                  <span className="bg-[hsl(var(--accent-teal),0.2)] text-[hsl(var(--accent-teal))] rounded-full px-2 py-0.5 text-sm font-medium mr-2">
                    {filteredRides?.length || 0}
                  </span>
                  rides available
                </div>
              </>
            )}
          </div>

          {/* Ride cards */}
          <div className="space-y-4">
            {loading && (
              <>
                <Skeleton className="h-48 w-full rounded-2xl shadow-sm animate-shimmer" />
                <Skeleton className="h-48 w-full rounded-2xl shadow-sm animate-shimmer" />
                <Skeleton className="h-48 w-full rounded-2xl shadow-sm animate-shimmer" />
              </>
            )}

            {!loading && filteredRides?.length === 0 && (
              <div className="glass-effect rounded-2xl p-8 text-center shadow-md border border-[hsl(var(--primary-blue),0.2)]">
                <div className="mb-4 mx-auto w-16 h-16 bg-[hsl(var(--primary-blue),0.1)] rounded-full flex items-center justify-center animate-pulseGlow">
                  <Route className="h-8 w-8 text-[hsl(var(--primary-blue))]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">No rides available</h3>
                <p className="text-[hsl(var(--muted-foreground))]">Try adjusting your search criteria or check back later.</p>
              </div>
            )}

            {!loading && filteredRides?.map((ride) => (
              <div
                key={ride._id}
                className="block transition-all duration-300 hover:translate-y-[-4px] cursor-pointer"
                onClick={() => handleRideSelect(ride._id)}
              >
                <div className="card-hover-effect rounded-2xl overflow-hidden border border-[hsl(var(--accent-teal),0.2)]">
                  <RideCard details={ride} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auth Dialog */}
      {showAuthDialog && (
        <LoginSignupDialog
          isInitiallyOpen={true}
          showButtonOnly={false}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </main>
  );
};

export default SearchPage;