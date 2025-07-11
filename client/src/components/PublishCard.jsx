


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Clock, Calendar, IndianRupee, Plus, Minus, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";

const apiUri = import.meta.env.VITE_REACT_API_URI;

const formSchema = z.object({
  from: z.string().min(1, "Origin is required"),
  to: z.string().min(1, "Destination is required"),
  startTime: z.date().min(new Date(), "Start time must be in the future"),
  endTime: z.date().min(new Date(), "End time must be in the future"),
  price: z.number().min(0, "Price must be a positive number"),
});

const PublishCard = () => {
  const [seats, setSeats] = useState(1);
  const [notification, setNotification] = useState({
    show: false,
    type: null, // 'success' or 'error'
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear notification after some time
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, type: null, message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      startTime: new Date(),
      endTime: new Date(),
      price: 0,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const body = {
        availableSeats: seats,
        origin: {
          place: data.from,
        },
        destination: {
          place: data.to,
        },
        startTime: data.startTime.toISOString(),
        endTime: data.endTime.toISOString(),
        price: data.price,
      };

      await axios.post(`${apiUri}/rides`, body, { withCredentials: true });
      
      // Show success notification
      setNotification({
        show: true,
        type: 'success',
        message: `Your ride from ${data.from} to ${data.to} has been created!`
      });
      
      form.reset();
      setSeats(1); // Reset seats to default
    } catch (error) {
      console.error('POST request failed:', error);
      // Show error notification
      setNotification({
        show: true,
        type: 'error',
        message: "Failed to publish the ride. Please try again."
      });
      toast.error("Failed to publish the ride. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const increaseSeats = () => setSeats(prev => prev < 10 ? prev + 1 : prev);
  const decreaseSeats = () => setSeats(prev => prev > 1 ? prev - 1 : prev);

  return (
    <div className="glass-effect p-6 rounded-2xl shadow-lg border border-[hsl(var(--accent-teal),0.3)] bg-[hsl(var(--background),0.95)] transition-all duration-300 card-hover-effect animate-fadeIn max-w-md w-full relative">
      {/* Decorative Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--accent-teal))] opacity-50" />

      <h2 className="text-2xl font-bold mb-6 text-center font-heading text-[hsl(var(--foreground))]">
        Publish Your Ride
      </h2>

      {/* Success Notification */}
      {notification.show && notification.type === 'success' && (
        <div className="absolute inset-0 bg-[hsl(var(--background),0.97)] backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl animate-fadeIn">
          <div className="flex flex-col items-center text-center px-6">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600 animate-success" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Ride Published!</h3>
            <p className="text-sm text-muted-foreground mb-6">{notification.message}</p>
            <Button 
              onClick={() => setNotification({ show: false, type: null, message: '' })}
              className="bg-green-600 hover:bg-green-700"
            >
              Publish Another Ride
            </Button>
          </div>
        </div>
      )}

      {/* Error Notification (inline, below form) */}
      {notification.show && notification.type === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
          <p className="text-sm text-red-600">{notification.message}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Origin Field */}
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="form-item">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-[hsl(var(--primary-blue))]" />
                  <FormLabel className="font-medium">From</FormLabel>
                </div>
                <FormControl>
                  <Input placeholder="Enter origin city" {...field} className="border-[hsl(var(--accent-teal),0.3)]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Destination Field */}
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem className="form-item">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-[hsl(var(--accent-teal))]" />
                  <FormLabel className="font-medium">To</FormLabel>
                </div>
                <FormControl>
                  <Input placeholder="Enter destination city" {...field} className="border-[hsl(var(--accent-teal),0.3)]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Start Time and End Time */}
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem className="form-item">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                  <FormLabel className="font-medium">Departure Time</FormLabel>
                </div>
                <FormControl>
                  <Input
                    type="datetime-local"
                    {...field}
                    value={field.value ? field.value.toISOString().slice(0, 16) : ''}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                    className="border-[hsl(var(--accent-teal),0.3)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem className="form-item">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                  <FormLabel className="font-medium">Arrival Time</FormLabel>
                </div>
                <FormControl>
                  <Input
                    type="datetime-local"
                    {...field}
                    value={field.value ? field.value.toISOString().slice(0, 16) : ''}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                    className="border-[hsl(var(--accent-teal),0.3)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Seats and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div className="form-item">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-5 w-5 bg-[hsl(var(--primary-blue),0.1)]">
                  <AvatarFallback className="text-xs text-[hsl(var(--primary-blue))]">S</AvatarFallback>
                </Avatar>
                <FormLabel className="font-medium">Seats</FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={decreaseSeats}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-semibold">{seats}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={increaseSeats}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="form-item">
                  <div className="flex items-center gap-2 mb-2">
                    <IndianRupee className="h-5 w-5 text-[hsl(var(--warm-orange))]" />
                    <FormLabel className="font-medium">Price</FormLabel>
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="₹0"
                      className="border-[hsl(var(--accent-teal),0.3)]"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[hsl(var(--warm-orange))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--warm-orange),0.9)] hover:shadow-lg pulse-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Publishing...' : 'Publish Ride'}
          </Button>
        </form>
      </Form>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--accent-teal))] to-[hsl(var(--primary-blue))] opacity-50" />

      {/* Keep Toaster for error notifications only */}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default PublishCard;