// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod"
// import axios from "axios";
// import { Minus, Plus } from "lucide-react";
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Toaster } from "./ui/sonner";
// import { toast } from "sonner";
// const apiUri = import.meta.env.VITE_REACT_API_URI

// const formSchema = z.object({
//   from: z.string(),
//   to: z.string(),
//   seat: z.number().min(1).max(10),
//   price: z.number().nonnegative(),
//   startTime: z.date().min(new Date()),
//   endTime: z.date().min(new Date())
// })


// const PublishCard = () => {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       from: "",
//       to: "",
//       seat: 1,
//       price: 0,
//       startTime: new Date(),
//       endTime: new Date(),
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       const body = {
//         "availableSeats": data.seat,
//         "origin": {
//           "place": data.from,
//         },
//         "destination": {
//           "place": data.to,
//         },
//         "startTime": data.startTime,
//         "endTime": data.endTime,
//         "price": data.price
//       }
//       await axios.post(`${apiUri}/rides`, body, {withCredentials: true});
//       toast("The ride has been Created")
//       form.reset()
//     } catch (error) {
//       console.error('POST request failed:', error);
//     }
//   };

//   return (
//     <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Create a Ride</CardTitle>
//         <CardDescription>Publish your ride with just one click.</CardDescription>
//       </CardHeader>
//       <CardContent>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-center gap-4">
//           <FormField
//             control={form.control}
//             name="from"
//             render={({ field }) => (
//               <FormItem className="flex flex-col space-y-1.5">
//                 <FormLabel>From</FormLabel>
//                 <FormControl>
//                   <Input placeholder="From" required {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="to"
//             render={({ field }) => (
//               <FormItem className="flex flex-col space-y-1.5">
//                 <FormLabel>To</FormLabel>
//                 <FormControl>
//                   <Input placeholder="To" required {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div className="flex gap-24">
//             <FormField
//               control={form.control}
//               name="seat"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col space-y-1.5">
//                   <FormLabel>Available seats</FormLabel>
//                   <FormControl>
//                     <div className="flex gap-2 items-center">
//                       <Button variant="outline" size="icon" type="button" onClick={() => field.value>1 && field.onChange(field.value - 1)}>
//                         <Minus className="h-4 w-4" />
//                       </Button>
//                       <span>{field.value}</span>
//                       <Button variant="outline" size="icon" type="button" onClick={() => field.value<10 && field.onChange(field.value + 1)}  >
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="price"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col space-y-1.5">
//                   <FormLabel>Price</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Price" min="0" {...field} onChange={(event) => field.onChange(Number(event.target.value))} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <FormField
//             control={form.control}
//             name="startTime"
//             render={({ field }) => (
//               <FormItem className="flex flex-col space-y-1.5">
//                 <FormLabel>Departure Time</FormLabel>
//                 <FormControl>
//                   <Input type="datetime-local" placeholder="Departure time" {...field} 
//                     value={field.value ? field.value.toISOString().slice(0, 16) : ''}
//                     onChange={(e) => field.onChange(new Date(e.target.value))}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />  
//           <FormField
//             control={form.control}
//             name="endTime"
//             render={({ field }) => (
//               <FormItem className="flex flex-col space-y-1.5">
//                 <FormLabel>Arrival Time</FormLabel>
//                 <FormControl>
//                   <Input type="datetime-local" placeholder="Arrival time" {...field} 
//                     value={field.value ? field.value.toISOString().slice(0, 16) : ''}
//                     onChange={(e) => field.onChange(new Date(e.target.value))}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Publish</Button>
//         </form>
//       </Form>
//       </CardContent>
//       <Toaster />
//     </Card>
//   )
// }

// export default PublishCard


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Clock, Calendar, DollarSign, Plus, Minus, IndianRupee } from 'lucide-react';
import { useState } from "react";

const PublishCard = () => {
  const [seats, setSeats] = useState(1);

  const formSchema = z.object({
    from: z.string().min(1, "Origin is required"),
    to: z.string().min(1, "Destination is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    price: z.number().min(0, "Price must be a positive number"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      date: "",
      time: "",
      price: 0,
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data, seats });
    // Here you would typically send this data to your API
  };

  const increaseSeats = () => setSeats(prev => prev < 10 ? prev + 1 : prev);
  const decreaseSeats = () => setSeats(prev => prev > 1 ? prev - 1 : prev);

  return (
    <div className="glass-effect p-6 rounded-2xl shadow-lg border border-[hsl(var(--accent-teal),0.3)] bg-[hsl(var(--background),0.95)] transition-all duration-300 card-hover-effect animate-fadeIn max-w-md w-full">
      {/* Decorative Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--accent-teal))] opacity-50" />
      
      <h2 className="text-2xl font-bold mb-6 text-center font-heading text-[hsl(var(--foreground))]">
        Publish Your Ride
      </h2>
      
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
          
          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="form-item">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                    <FormLabel className="font-medium">Date</FormLabel>
                  </div>
                  <FormControl>
                    <Input type="date" {...field} className="border-[hsl(var(--accent-teal),0.3)]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="form-item">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                    <FormLabel className="font-medium">Time</FormLabel>
                  </div>
                  <FormControl>
                    <Input type="time" {...field} className="border-[hsl(var(--accent-teal),0.3)]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
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
          >
            Publish Ride
          </Button>
        </form>
      </Form>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--accent-teal))] to-[hsl(var(--primary-blue))] opacity-50" />
    </div>
  );
};

export default PublishCard;