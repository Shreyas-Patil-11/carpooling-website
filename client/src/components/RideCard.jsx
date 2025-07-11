


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin, Clock, DollarSign } from 'lucide-react';

const RideCard = ({ details }) => {
  const { creator, origin, destination, startTime, endTime, price } = details;

  function getTime(dateTimeInput) {
    const selectedDate = new Date(dateTimeInput);
    const hours = selectedDate.getHours().toString().padStart(2, '0');
    const minutes = selectedDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Calculate duration
  const durationMs = new Date(endTime) - new Date(startTime);
  const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
  const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="glass-effect p-5 rounded-2xl shadow-lg border border-[hsl(var(--accent-teal),0.3)] bg-[hsl(var(--background),0.95)] transition-all duration-300 ride-card-hover animate-fadeIn">
      {/* Decorative Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--accent-teal))] opacity-50" />

      <div className="relative">
        {/* Journey Timeline */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="relative">
            {/* Origin */}
            <div className="mb-6 ms-4">
              <div className="absolute w-3 h-3 bg-[hsl(var(--primary-blue))] rounded-full mt-1.5 -start-1.5 animate-pulseGlow" />
              <time className="mb-1 text-sm font-normal text-[hsl(var(--muted-foreground))] flex items-center gap-1">
                <Clock className="h-4 w-4 text-[hsl(var(--accent-purple))]" />
                {getTime(startTime)}
              </time>
              <h3 className="text-md md:text-lg font-semibold text-[hsl(var(--foreground))] flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[hsl(var(--primary-blue))]" />
                {origin.place}
              </h3>
            </div>

            {/* Destination */}
            <div className="mb-6 ms-4">
              <div className="absolute w-3 h-3 bg-[hsl(var(--accent-teal))] rounded-full mt-1.5 -start-1.5 animate-pulseGlow" />
              <time className="mb-1 text-sm font-normal text-[hsl(var(--muted-foreground))] flex items-center gap-1">
                <Clock className="h-4 w-4 text-[hsl(var(--accent-purple))]" />
                {getTime(endTime)}
              </time>
              <h3 className="text-md md:text-lg font-semibold text-[hsl(var(--foreground))] flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[hsl(var(--accent-teal))]" />
                {destination.place}
              </h3>
            </div>

            {/* Duration */}
            <div className="ms-4 text-sm text-[hsl(var(--muted-foreground))] flex items-center gap-2">
              <span className="bg-[hsl(var(--accent-teal),0.1)] text-[hsl(var(--accent-teal))] rounded-full px-2 py-0.5">
                {durationHours}h {durationMinutes > 0 ? `${durationMinutes}m` : ''}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="absolute top-0 right-0 sm:static sm:flex sm:flex-col sm:items-end">
            <h1 className="text-lg md:text-2xl font-bold text-[hsl(var(--foreground))] flex items-center gap-2 animate-pulseGlow">
              ₹{price}
            </h1>
          </div>
        </div>

        {/* Creator Info */}
        <div classignee="mt-4 pt-4 border-t border-[hsl(var(--primary-blue),0.2)]">
          <div className="inline-flex items-center transition-all duration-300 hover:bg-[hsl(var(--accent-purple),0.1)] p-2 rounded-lg">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-[hsl(var(--accent-purple),0.2)] text-[hsl(var(--foreground))]">CN</AvatarFallback>
            </Avatar>
            <span className="flex-grow flex flex-col pl-4">
              <span className="font-medium text-[hsl(var(--foreground))]">{creator.name}</span>
              <span className="text-xs text-[hsl(var(--muted-foreground))] tracking-widest mt-0.5">UI DEVELOPER</span>
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <button className="w-full sm:w-auto px-4 py-2 bg-[hsl(var(--warm-orange))] text-[hsl(var(--primary-foreground))] rounded-[var(--radius)] hover:bg-[hsl(var(--warm-orange),0.9)] hover:shadow-lg hover:scale-105 transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideCard;