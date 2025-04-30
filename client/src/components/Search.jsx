// import React from 'react'
// import { Form, FormControl, FormField, FormItem } from './ui/form'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { useSearchParams } from 'react-router-dom'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { format} from 'date-fns'
// import { CalendarIcon, MapPin, Minus, Plus, User } from 'lucide-react'
// import { Input } from './ui/input'
// import { cn } from '@/lib/utils'
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
// import { Button } from './ui/button'
// import { Calendar } from './ui/calendar'

// const searchSchema = z.object({
//   from: z.string(),
//   to: z.string(),
//   seat: z.number().min(1).max(10),
//   date: z.date()
// })  

// const Search = () => {
//   const [searchParams, setSearchParams] = useSearchParams({from:"",to:"",seat:"",date:""})

//   // const form = useForm({
//   //   resolver: zodResolver(searchSchema),
//   //   defaultValues: {
//   //     from: searchParams.get("from") || "",
//   //     to: searchParams.get("to") || "",
//   //     seat: parseInt(searchParams.get("seat")) >= 1 && parseInt(searchParams.get("seat")) <= 10 ? parseInt(searchParams.get("seat")) : 1,
//   //     date: searchParams.get("date") ? new Date(searchParams.get("date")) : null
//   //   }
//   // })

//   const form = useForm({
//     resolver: zodResolver(searchSchema),
//     defaultValues: {
//       from: searchParams.get("from") || "",
//       to: searchParams.get("to") || "",
//       seat: parseInt(searchParams.get("seat")) >= 1 && parseInt(searchParams.get("seat")) <= 10 ? parseInt(searchParams.get("seat")) : 1,
//       date: searchParams.get("date") ? new Date(searchParams.get("date")) : null
//     },
//     mode: "onChange" // ✅ This triggers validation on every change
//   });
  

//   // const onSubmit = async (data) => {
//   //   await form.handleSubmit((formData)=> {
//   //     setSearchParams(formData, {replace: true})
//   //   })
//   // }

//   const onSubmit = (formData) => {
//     console.log("button Clicked")
//     setSearchParams({
//       from: formData.from,
//       to: formData.to,
//       seat: formData.seat.toString(),
//       // date: formData.date ? formData.date.toISOString().split('T')[0] : ""
//       date: formData.date ? format(formData.date, 'yyyy-MM-dd') : ""

//     }, { replace: true });
//   };
  
  

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className='flex flex-col gap-1 sm:flex-row w-full sm:w-fit divide-y sm:divide-y-0 sm:divide-x bg-background border p-3 rounded-lg'
//       >
//         <div className="flex ">
//           <FormField
//             control={form.control}
//             name="from"
//             render={({ field }) => (
//               <FormItem className="flex items-center space-y-0">
//                 <MapPin className="opacity-50" />
//                 <FormControl>
//                   <Input placeholder="From" className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none  px-1"  {...field} />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="flex ">
//           <FormField
//             control={form.control}
//             name="to"
//             render={({ field }) => (
//               <FormItem className="flex items-center space-y-0">
//                 <MapPin className="opacity-50 sm:ml-2" />
//                 <FormControl>
//                   <Input placeholder="To" className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none  px-1"  {...field} />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="flex justify-between ">
//           <FormField
//               control={form.control}
//               name="date"
//               render={({ field }) => (
//                 <FormItem className="flex">
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button variant={"ghost"} className={cn("md:text-base px-0 sm:px-4 hover:bg-transparent", !field.value && "text-muted-foreground" )}>
//                           <CalendarIcon size={20} className="opacity-50 mr-1 text-foreground" />
//                           {field.value ? (
//                             format(field.value, "PPP")
//                           ) : (
//                             <span>Pick a date</span>
//                           )}
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date < new Date().setHours(0, 0, 0, 0)
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </FormItem>
//               )}
//             />
//           <FormField
//             control={form.control}
//             name="seat"
//             render={({ field }) => (
//               <FormItem className="flex">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button variant={"ghost"} className={cn("w-full justify-start md:text-base px-12 sm:px-4 hover:bg-transparent")} >
//                         <User size={20} className="opacity-50 mr-1" />
//                         <span className="text-md">{field.value}</span>
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <div className="p-4 flex gap-2 items-center">
//                       <Button variant="outline" size="icon" onClick={() => field.value>1 && field.onChange(field.value - 1)}>
//                         <Minus className="h-4 w-4" />
//                       </Button>
//                       <span>{field.value}</span>
//                       <Button variant="outline" size="icon" onClick={() => field.value<10 && field.onChange(field.value + 1)}  >
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </FormItem>
//             )}
//           />
//         </div>
//         <Button className="" type= "submit" >Submit</Button>
//       </form>

//     </Form>
//   )
// }

// export default Search


// import React from 'react';
// import { Form, FormControl, FormField, FormItem } from './ui/form';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { useSearchParams } from 'react-router-dom';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { format } from 'date-fns';
// import { CalendarIcon, MapPin, Minus, Plus, User } from 'lucide-react';
// import { Input } from './ui/input';
// import { cn } from '@/lib/utils';
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
// import { Button } from './ui/button';
// import { Calendar } from './ui/calendar';

// // Update schema to make date optional
// const searchSchema = z.object({
//   from: z.string().min(1, 'From is required'),
//   to: z.string().min(1, 'To is required'),
//   seat: z.number().min(1, 'At least 1 seat required').max(10, 'Max 10 seats'),
//   date: z.date().optional(), // Allow undefined initially
// });

// const Search = () => {
//   const [searchParams, setSearchParams] = useSearchParams({
//     from: '',
//     to: '',
//     seat: '1',
//     date: '',
//   });

//   // Safely parse date from searchParams
//   const defaultDate = (() => {
//     const dateStr = searchParams.get('date');
//     if (dateStr) {
//       const parsedDate = new Date(dateStr);
//       return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
//     }
//     return new Date(); // Default to today
//   })();

//   // Safely parse seat from searchParams
//   const defaultSeat = (() => {
//     const seatStr = searchParams.get('seat');
//     const seatNum = parseInt(seatStr);
//     return seatNum >= 1 && seatNum <= 10 ? seatNum : 1;
//   })();

//   const form = useForm({
//     resolver: zodResolver(searchSchema),
//     defaultValues: {
//       from: searchParams.get('from') || '',
//       to: searchParams.get('to') || '',
//       seat: defaultSeat,
//       date: defaultDate,
//     },
//     mode: 'onChange',
//   });

//   // Debugging: Log form state
//   React.useEffect(() => {
//     console.log('Form Values:', form.watch());
//     console.log('Form Errors:', form.formState.errors);
//   }, [form.watch, form.formState.errors]);

//   const onSubmit = (formData) => {
//     console.log('Form Submitted:', formData);
//     setSearchParams(
//       {
//         from: formData.from,
//         to: formData.to,
//         seat: formData.seat.toString(),
//         date: formData.date ? format(formData.date, 'yyyy-MM-dd') : '',
//       },
//       { replace: true }
//     );
//   };

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="flex flex-col gap-1 sm:flex-row w-full sm:w-fit divide-y sm:divide-y-0 sm:divide-x bg-background border p-3 rounded-lg"
//       >
//         <div className="flex">
//           <FormField
//             control={form.control}
//             name="from"
//             render={({ field }) => (
//               <FormItem className="flex items-center space-y-0">
//                 <MapPin className="opacity-50" />
//                 <FormControl>
//                   <Input
//                     placeholder="From"
//                     className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-1"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="flex">
//           <FormField
//             control={form.control}
//             name="to"
//             render={({ field }) => (
//               <FormItem className="flex items-center space-y-0">
//                 <MapPin className="opacity-50 sm:ml-2" />
//                 <FormControl>
//                   <Input
//                     placeholder="To"
//                     className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-1"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="flex justify-between">
//           <FormField
//             control={form.control}
//             name="date"
//             render={({ field }) => (
//               <FormItem className="flex">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant="ghost"
//                         className={cn(
//                           'md:text-base px-0 sm:px-4 hover:bg-transparent',
//                           !field.value && 'text-muted-foreground'
//                         )}
//                       >
//                         <CalendarIcon
//                           size={20}
//                           className="opacity-50 mr-1 text-foreground"
//                         />
//                         {field.value ? (
//                           format(field.value, 'PPP')
//                         ) : (
//                           <span>Pick a date</span>
//                         )}
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={field.value}
//                       onSelect={(date) => field.onChange(date)} // Ensure date is passed correctly
//                       disabled={(date) =>
//                         date < new Date().setHours(0, 0, 0, 0)
//                       }
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="seat"
//             render={({ field }) => (
//               <FormItem className="flex">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant="ghost"
//                         className={cn(
//                           'w-full justify-start md:text-base px-12 sm:px-4 hover:bg-transparent'
//                         )}
//                       >
//                         <User size={20} className="opacity-50 mr-1" />
//                         <span className="text-md">{field.value}</span>
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <div className="p-4 flex gap-2 items-center">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           field.value > 1 && field.onChange(field.value - 1)
//                         }
//                       >
//                         <Minus className="h-4 w-4" />
//                       </Button>
//                       <span>{field.value}</span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           field.value < 10 && field.onChange(field.value + 1)
//                         }
//                       >
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </FormItem>
//             )}
//           />
//         </div>
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default Search;


// import React from 'react';
// import { Form, FormControl, FormField, FormItem } from './ui/form';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { useSearchParams } from 'react-router-dom';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { format } from 'date-fns';
// import { CalendarIcon, MapPin, Minus, Plus, User } from 'lucide-react';
// import { Input } from './ui/input';
// import { cn } from '@/lib/utils';
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
// import { Button } from './ui/button';
// import { Calendar } from './ui/calendar';

// // Schema with required date and seat
// const searchSchema = z.object({
//   from: z.string().min(1, 'From is required'),
//   to: z.string().min(1, 'To is required'),
//   seat: z.number().min(1, 'At least 1 seat required').max(10, 'Max 10 seats'),
//   date: z.date({ required_error: 'Date is required' }),
// });

// const Search = () => {
//   const [searchParams, setSearchParams] = useSearchParams({
//     from: '',
//     to: '',
//     seat: '1',
//     date: format(new Date(), 'yyyy-MM-dd'),
//   });

//   // Safely parse date from searchParams
//   const defaultDate = (() => {
//     const dateStr = searchParams.get('date');
//     if (dateStr) {
//       const parsedDate = new Date(dateStr);
//       return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
//     }
//     return new Date(); // Default to today
//   })();

//   // Safely parse seat from searchParams
//   const defaultSeat = (() => {
//     const seatStr = searchParams.get('seat');
//     const seatNum = parseInt(seatStr);
//     return seatNum >= 1 && seatNum <= 10 ? seatNum : 1;
//   })();

//   const form = useForm({
//     resolver: zodResolver(searchSchema),
//     defaultValues: {
//       from: searchParams.get('from') || '',
//       to: searchParams.get('to') || '',
//       seat: defaultSeat,
//       date: defaultDate,
//     },
//     mode: 'onChange', // Real-time validation
//   });

//   // Debugging: Log form state
//   React.useEffect(() => {
//     console.log('Form Values:', form.watch());
//     console.log('Form Errors:', form.formState.errors);
//   }, [form.watch, form.formState.errors]);

//   const onSubmit = (formData) => {
//     console.log('Form Submitted:', formData);
//     setSearchParams(
//       {
//         from: formData.from,
//         to: formData.to,
//         seat: formData.seat.toString(),
//         date: format(formData.date, 'yyyy-MM-dd'),
//       },
//       { replace: true }
//     );
//   };

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="flex flex-col gap-1 sm:flex-row w-full sm:w-fit divide-y sm:divide-y-0 sm:divide-x bg-background border p-3 rounded-lg"
//       >
//         <div className="flex">
//           <FormField
//             control={form.control}
//             name="from"
//             render={({ field }) => (
//               <FormItem className="flex items-center space-y-0">
//                 <MapPin className="opacity-50" />
//                 <FormControl>
//                   <Input
//                     placeholder="From"
//                     className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-1"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="flex">
//           <FormField
//             control={form.control}
//             name="to"
//             render={({ field }) => (
//               <FormItem className="flex items-center space-y-0">
//                 <MapPin className="opacity-50 sm:ml-2" />
//                 <FormControl>
//                   <Input
//                     placeholder="To"
//                     className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-1"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="flex justify-between">
//           <FormField
//             control={form.control}
//             name="date"
//             render={({ field }) => (
//               <FormItem className="flex">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant="ghost"
//                         className={cn(
//                           'md:text-base px-0 sm:px-4 hover:bg-transparent',
//                           !field.value && 'text-muted-foreground'
//                         )}
//                       >
//                         <CalendarIcon
//                           size={20}
//                           className="opacity-50 mr-1 text-foreground"
//                         />
//                         {field.value ? (
//                           format(field.value, 'PPP')
//                         ) : (
//                           <span>Pick a date</span>
//                         )}
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={field.value}
//                       onSelect={(date) => field.onChange(date)}
//                       disabled={(date) =>
//                         date < new Date().setHours(0, 0, 0, 0)
//                       }
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="seat"
//             render={({ field }) => (
//               <FormItem className="flex">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant="ghost"
//                         className={cn(
//                           'w-full justify-start md:text-base px-12 sm:px-4 hover:bg-transparent'
//                         )}
//                       >
//                         <User size={20} className="opacity-50 mr-1" />
//                         <span className="text-md">{field.value}</span>
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <div className="p-4 flex gap-2 items-center">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           field.value > 1 && field.onChange(field.value - 1)
//                         }
//                       >
//                         <Minus className="h-4 w-4" />
//                       </Button>
//                       <span>{field.value}</span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           field.value < 10 && field.onChange(field.value + 1)
//                         }
//                       >
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </FormItem>
//             )}
//           />
//         </div>
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default Search;



import React from 'react';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSearchParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, MapPin, Minus, Plus, User } from 'lucide-react';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';

// Schema with required date and seat
const searchSchema = z.object({
  from: z.string().min(1, 'From is required'),
  to: z.string().min(1, 'To is required'),
  seat: z.number().min(1, 'At least 1 seat required').max(10, 'Max 10 seats'),
  date: z.date({ required_error: 'Date is required' }),
});

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);

  // Clear searchParams only on initial page load
  React.useEffect(() => {
    if (isInitialLoad) {
      console.log('Clearing searchParams on initial load');
      setSearchParams({}, { replace: true });
      setIsInitialLoad(false);
    }
  }, [setSearchParams, isInitialLoad]);

  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      from: searchParams.get('from') || '',
      to: searchParams.get('to') || '',
      seat: 1,
      date: new Date(), // Default to today
    },
    mode: 'onChange', // Real-time validation
  });

  // Debugging: Log form state
  React.useEffect(() => {
    console.log('Form Values:', form.watch());
    console.log('Form Errors:', form.formState.errors);
  }, [form.watch, form.formState.errors]);

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    form.handleSubmit((formData) => {
      console.log('Form Submitted:', formData);
      // Only pass from and to to setSearchParams
      const params = {
        from: formData.from,
        to: formData.to,
      };
      console.log('Setting Search Params:', params);
      setSearchParams(params, { replace: true });
    })(event);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-1 sm:flex-row w-full sm:w-fit divide-y sm:divide-y-0 sm:divide-x bg-background border p-3 rounded-lg"
      >
        <div className="flex">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0">
                <MapPin className="opacity-50" />
                <FormControl>
                  <Input
                    placeholder="From"
                    className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-1"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.from && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.from.message}
                  </p>
                )}
              </FormItem>
            )}
          />
        </div>

        <div className="flex">
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0">
                <MapPin className="opacity-50 sm:ml-2" />
                <FormControl>
                  <Input
                    placeholder="To"
                    className="focus-visible:ring-0 md:text-base focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-1"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.to && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.to.message}
                  </p>
                )}
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between hidden">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="ghost"
                        className={cn(
                          'md:text-base px-0 sm:px-4 hover:bg-transparent',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon
                          size={20}
                          className="opacity-50 mr-1 text-foreground"
                        />
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 " align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => field.onChange(date)}
                      disabled={(date) =>
                        date < new Date().setHours(0, 0, 0, 0)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {form.formState.errors.date && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.date.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seat"
            render={({ field }) => (
              <FormItem className="flex">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="ghost"
                        className={cn(
                          'w-full justify-start md:text-base px-12 sm:px-4 hover:bg-transparent'
                        )}
                      >
                        <User size={20} className="opacity-50 mr-1" />
                        <span className="text-md">{field.value}</span>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <div className="p-4 flex gap-2 items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          field.value > 1 && field.onChange(field.value - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{field.value}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          field.value < 10 && field.onChange(field.value + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
                {form.formState.errors.seat && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.seat.message}
                  </p>
                )}
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Search;