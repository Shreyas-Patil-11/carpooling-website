// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { AuthContext } from '@/context/AuthContext'
// import useFetch from '@/hooks/useFetch'
// import axios from 'axios'
// import { Pencil } from 'lucide-react'
// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { useForm } from 'react-hook-form'
// import { toast } from 'sonner'

// const apiUri = import.meta.env.VITE_REACT_API_URI

// const Profile = () => {
//   const {user} = useContext(AuthContext)

//   const [rideDeleteMode, setRideDeleteMode] = useState(false)
//   const [editMode, setEditMode] = useState(false)
//   const {loading, data, refetch} = useFetch(`users/${user.user._id}`, true)


//   const {control, handleSubmit, reset} = useForm({
//     defaultValues:{
//       name: "",
//       bio: "",
//     },
//   })

//   const onSubmit = async (newData) => {
//     try{
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         name: newData.name,
//         profile: {...data.profile, bio: newData.bio}
//       }, {withCredentials: true});
//       refetch();
//       reset()
//       setEditMode(false)
//     } catch (err){
//       console.error('Patch error:', err);
//     }
//   }

//   async function handleDelete(id){
//     try {
//       await axios.delete(`${apiUri}/rides/${id}`, {withCredentials:true});
//       refetch();
//       toast("The ride has been Deleted")
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   }


//   return (
//     <main className='pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto'>
//       <div className='flex flex-col sm:flex-row h-full w-full'>
//         <div className='w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col'>
//           <div className='relative flex w-full space-x-4 my-8 flex-col'>
//             {loading ? 
//                 <div className="flex items-center space-x-4">
//                   <Skeleton className="h-12 w-12 rounded-full" />
//                   <div className="space-y-2">
//                     <Skeleton className="h-4 w-[250px]" />
//                     <Skeleton className="h-4 w-[200px]" />
//                   </div>
//                 </div>
//               :
//               <>
//                 <Avatar>
//                   <AvatarImage src={data?.profilePicture}/>
//                   <AvatarFallback className="select-none text-primary text-xl font-bold" />
//                 </Avatar>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Pencil 
//                       size={20}
//                       className='absolute bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 p-1 cursor-pointer rounded-full bottom-0 -left-5'
//                     />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem>
//                       <Label 
//                         htmlFor='avatar'
//                         className='font-normal'
//                       >Upload image
//                       </Label>
//                       <Input 
//                         type="file" 
//                         id='avatar' 
//                         className="hidden" 
//                       />
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                       <p>Remove profile</p>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//                 <div className="flex justify-center items-start flex-col space-y-2">
//                   <p className="text-base font-semibold leading-4 text-left">{data?.name}</p>
//                   <div className="flex items-center text-sm gap-1 text-muted-foreground">
//                     <Star 
//                       fill="yellow" 
//                       size={20} 
//                       className="text-transparent" 
//                     /> 
//                     {data?.stars} - {data?.ratings.length} ratings
//                   </div>
//                 </div>
//               </>
//              } 
//           </div>
//           {

//           }
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Profile


// import RideCard from "@/components/RideCard"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Toaster } from "@/components/ui/sonner"
// import { Textarea } from "@/components/ui/textarea"
// import { AuthContext } from "@/context/AuthContext"
// import useFetch from "@/hooks/useFetch"
// import axios from "axios"
// import { Pencil, Star, Trash } from "lucide-react"
// import { Fragment, useContext, useState } from "react"
// import { Controller, useForm } from "react-hook-form"
// import { Navigate } from "react-router-dom"
// import { toast } from "sonner"
// const apiUri = import.meta.env.VITE_REACT_API_URI

// const Profile = () => {
//   const { user } = useContext(AuthContext)

//   const [rideDeleteMode, setRideDeleteMode] = useState(false)
//   const [editMode, setEditMode] = useState(false)

//   const { loading, data, refetch } = useFetch(`users/${user.user._id}`, true)

//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       name: "",
//       bio: "",
//     },
//   })

//   const onSubmit = async (newData) => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         name: newData.name,
//         profile: { ...data.profile, bio: newData.bio }
//       }, { withCredentials: true });
//       refetch();
//       reset()
//       setEditMode(false)
//     } catch (error) {
//       console.error('Patch error:', error);
//     }
//   }

//   async function handleRideDelete(id) {
//     try {
//       await axios.delete(`${apiUri}/rides/${id}`, { withCredentials: true });
//       refetch();
//       toast("The ride has been Deleted")
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   }

//   const handleRemoveProfilePicture = async () => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         profilePicture: "", // clear it
//       }, {
//         withCredentials: true,
//       });

//       toast("Profile picture removed");
//       refetch();
//     } catch (err) {
//       console.error("Failed to remove profile picture", err);
//       toast("Failed to remove profile picture");
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);
//     const userId = user.user._id;

//     try {
//       const res = await axios.post(`${apiUri}/users/${userId}`, formData, {
//         // const res = await axios.post(`/users/${user}`, formData, {

//         withCredentials: true,
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast("Profile picture updated!");
//       refetch();
//     } catch (err) {
//       console.error("Image upload failed", err);
//       toast("Failed to upload image.");
//     }
//   };


//   if (!user) return <Navigate to="/" replace />;

//   return (
//     <main className="pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
//       <div className="flex flex-col sm:flex-row h-full w-full">
//         <div className="w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col">
//           <div className="relative flex w-full space-x-4 my-8">
//             {loading ?
//               <div className="flex items-center space-x-4">
//                 <Skeleton className="h-12 w-12 rounded-full" />
//                 <div className="space-y-2">
//                   <Skeleton className="h-4 w-[250px]" />
//                   <Skeleton className="h-4 w-[200px]" />
//                 </div>
//               </div>
//               :
//               <>
//                 <Avatar>
//                   <AvatarImage src={data?.profilePicture} />
//                   <AvatarFallback className="select-none text-primary text-xl font-bold">{data?.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Pencil size={20} className="absolute bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 p-1 cursor-pointer rounded-full bottom-0 -left-5" />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     {/* <DropdownMenuItem>
//                     <Label htmlFor='avatar' className='font-normal'>Upload image</Label>
//                     <Input type="file" id='avatar' className="hidden" onChange={handleImageUpload}/>
//                   </DropdownMenuItem> */}
//                     <DropdownMenuItem
//                       onSelect={(e) => {
//                         e.preventDefault();
//                         document.getElementById("avatar")?.click(); // trigger hidden input
//                       }}
//                     >
//                       Upload Image
//                       <input
//                         type="file"
//                         id="avatar"
//                         className="hidden"
//                         onChange={handleImageUpload}
//                       />
//                     </DropdownMenuItem>
//                     <DropdownMenuItem
//                     onSelect={(e) => {
//                       e.preventDefault();
//                       handleRemoveProfilePicture(); // 🔥 this function will handle removal
//                     }}
//                     >
//                       <p>Remove profile</p>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//                 <div className="flex justify-center items-start flex-col space-y-2">
//                   <p className="text-base font-semibold leading-4 text-left">{data?.name}</p>
//                   <div className="flex items-center text-sm gap-1 text-muted-foreground"><Star fill="yellow" size={20} className="text-transparent" /> {data?.stars} - {data?.ratings.length} ratings</div>
//                 </div>
//               </>
//             }
//           </div>
//           {
//             !editMode ?
//               <>
//                 <Button variant='outline' onClick={() => setEditMode(true)} >Edit Profile</Button>
//                 <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                   <h3 className="text-base font-semibold leading-4 text-center md:text-left">About</h3>
//                   <p className="text-sm text-muted-foreground">Bio: {data?.profile.bio}</p>
//                   <p className="text-sm text-muted-foreground">{data?.age && `${data?.age} y/o`}</p>
//                   <p className="text-sm text-muted-foreground">{data?.ridesCreated.length} Rides published</p>
//                   <p className="text-sm text-muted-foreground">Member since {data?.createdAt.substring(0, 4)}</p>
//                 </div>
//                 <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                   <h3 className="text-base font-semibold leading-4 text-center md:text-left">Preferences</h3>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.music}</p>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.smoking}</p>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.petFriendly}</p>
//                 </div>
//               </>
//               :
//               <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
//                 <Label htmlFor="name">Name</Label>
//                 <Controller
//                   name="name"
//                   control={control}
//                   render={({ field }) => <Input required autoComplete="name" placeholder="Full name" id="name" {...field} />}
//                 />
//                 <Label htmlFor="bio">Bio</Label>
//                 <Controller
//                   name="bio"
//                   control={control}
//                   render={({ field }) => <Textarea placeholder="Bio" id="bio" {...field} />}
//                 />

//                 <Button type="submit">Save</Button>
//                 <Button variant='outline' onClick={(e) => { e.preventDefault(); reset(); setEditMode(false) }}>Cancel</Button>
//               </form>
//           }
//         </div>

//         <div className="flex flex-col justify-start items-start gap-2 w-full sm:w-2/3">
//           <div className="flex justify-between items-center w-full">
//             <h1 className="text-xl font-semibold">Published Rides</h1>
//             <Pencil className={`cursor-pointer p-1 rounded-lg ${rideDeleteMode && 'bg-primary text-primary-foreground'} `} size={25} onClick={() => setRideDeleteMode(!rideDeleteMode)} />
//           </div>
//           <ScrollArea className="h-[275px] w-full rounded-md border p-4">
//             {data?.ridesCreated.map(ride =>
//               <Fragment key={ride._id} >
//                 <RideCard details={ride} />
//                 {rideDeleteMode && <Trash className="text-destructive cursor-pointer" onClick={() => handleRideDelete(ride._id)} />}
//               </Fragment>
//             )}
//           </ScrollArea>

//           <div className="flex mt-5 justify-between items-center w-full">
//             <h1 className="text-xl font-semibold">Recently joined rides</h1>
//           </div>
//           <ScrollArea className="h-[275px] w-full rounded-md border p-4">
//             {data?.ridesJoined.length === 0
//               ? <h3>No rides</h3>
//               :
//               data?.ridesJoined.map(ride =>
//                 <RideCard key={ride._id} details={ride} />
//               )}
//           </ScrollArea>
//         </div>

//       </div>
//       <Toaster />
//     </main>
//   )
// }

// export default Profile

// import RideCard from "@/components/RideCard"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Toaster } from "@/components/ui/sonner"
// import { Textarea } from "@/components/ui/textarea"
// import { AuthContext } from "@/context/AuthContext"
// import useFetch from "@/hooks/useFetch"
// import axios from "axios"
// import { Pencil, Star, Trash } from "lucide-react"
// import { Fragment, useContext, useState } from "react"
// import { Controller, useForm } from "react-hook-form"
// import { Navigate } from "react-router-dom"
// import { toast } from "sonner"
// const apiUri = import.meta.env.VITE_REACT_API_URI

// const Profile = () => {
//   const { user } = useContext(AuthContext)

//   const [rideDeleteMode, setRideDeleteMode] = useState(false)
//   const [editMode, setEditMode] = useState(false)
//   const [editingRideId, setEditingRideId] = useState(null);


//   const { loading, data, refetch } = useFetch(`users/${user.user._id}`, true)

//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       name: "",
//       bio: "",
//     },
//   })

//   const handleUpdateRide = async (rideId, updatedData) => {
//     try {
//       await axios.patch(`${apiUri}/rides/${rideId}`, updatedData, {
//         withCredentials: true
//       });
//       toast("Ride updated!");
//       setEditingRideId(null);
//       refetch();
//     } catch (err) {
//       console.error("Failed to update ride", err);
//       toast("Failed to update ride");
//     }
//   };


//   const onSubmit = async (newData) => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         name: newData.name,
//         profile: { ...data.profile, bio: newData.bio }
//       }, { withCredentials: true });
//       refetch();
//       reset()
//       setEditMode(false)
//     } catch (error) {
//       console.error('Patch error:', error);
//     }
//   }

//   async function handleRideDelete(id) {
//     try {
//       await axios.delete(`${apiUri}/rides/${id}`, { withCredentials: true });
//       refetch();
//       toast("The ride has been Deleted")
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   }

//   const handleRemoveProfilePicture = async () => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         profilePicture: "", // clear it
//       }, {
//         withCredentials: true,
//       });

//       toast("Profile picture removed");
//       refetch();
//     } catch (err) {
//       console.error("Failed to remove profile picture", err);
//       toast("Failed to remove profile picture");
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);
//     const userId = user.user._id;

//     try {
//       const res = await axios.post(`${apiUri}/users/${userId}`, formData, {
//         // const res = await axios.post(`/users/${user}`, formData, {

//         withCredentials: true,
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast("Profile picture updated!");
//       refetch();
//     } catch (err) {
//       console.error("Image upload failed", err);
//       toast("Failed to upload image.");
//     }
//   };


//   if (!user) return <Navigate to="/" replace />;

//   return (
//     <main className="pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
//       <div className="flex flex-col sm:flex-row h-full w-full">
//         <div className="w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col">
//           <div className="relative flex w-full space-x-4 my-8">
//             {loading ?
//               <div className="flex items-center space-x-4">
//                 <Skeleton className="h-12 w-12 rounded-full" />
//                 <div className="space-y-2">
//                   <Skeleton className="h-4 w-[250px]" />
//                   <Skeleton className="h-4 w-[200px]" />
//                 </div>
//               </div>
//               :
//               <>
//                 <Avatar>
//                   <AvatarImage src={data?.profilePicture} />
//                   <AvatarFallback className="select-none text-primary text-xl font-bold">{data?.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Pencil size={20} className="absolute bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 p-1 cursor-pointer rounded-full bottom-0 -left-5" />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     {/* <DropdownMenuItem>
//                     <Label htmlFor='avatar' className='font-normal'>Upload image</Label>
//                     <Input type="file" id='avatar' className="hidden" onChange={handleImageUpload}/>
//                   </DropdownMenuItem> */}
//                     <DropdownMenuItem
//                       onSelect={(e) => {
//                         e.preventDefault();
//                         document.getElementById("avatar")?.click(); // trigger hidden input
//                       }}
//                     >
//                       Upload Image
//                       <input
//                         type="file"
//                         id="avatar"
//                         className="hidden"
//                         onChange={handleImageUpload}
//                       />
//                     </DropdownMenuItem>
//                     <DropdownMenuItem
//                       onSelect={(e) => {
//                         e.preventDefault();
//                         handleRemoveProfilePicture(); // 🔥 this function will handle removal
//                       }}
//                     >
//                       <p>Remove profile</p>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//                 <div className="flex justify-center items-start flex-col space-y-2">
//                   <p className="text-base font-semibold leading-4 text-left">{data?.name}</p>
//                   <div className="flex items-center text-sm gap-1 text-muted-foreground"><Star fill="yellow" size={20} className="text-transparent" /> {data?.stars} - {data?.ratings.length} ratings</div>
//                 </div>
//               </>
//             }
//           </div>
//           {
//             !editMode ?
//               <>
//                 <Button variant='outline' onClick={() => setEditMode(true)} >Edit Profile</Button>
//                 <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                   <h3 className="text-base font-semibold leading-4 text-center md:text-left">About</h3>
//                   <p className="text-sm text-muted-foreground">Bio: {data?.profile.bio}</p>
//                   <p className="text-sm text-muted-foreground">{data?.age && `${data?.age} y/o`}</p>
//                   <p className="text-sm text-muted-foreground">{data?.ridesCreated.length} Rides published</p>
//                   <p className="text-sm text-muted-foreground">Member since {data?.createdAt.substring(0, 4)}</p>
//                 </div>
//                 <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                   <h3 className="text-base font-semibold leading-4 text-center md:text-left">Preferences</h3>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.music}</p>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.smoking}</p>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.petFriendly}</p>
//                 </div>
//               </>
//               :
//               <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
//                 <Label htmlFor="name">Name</Label>
//                 <Controller
//                   name="name"
//                   control={control}
//                   render={({ field }) => <Input required autoComplete="name" placeholder="Full name" id="name" {...field} />}
//                 />
//                 <Label htmlFor="bio">Bio</Label>
//                 <Controller
//                   name="bio"
//                   control={control}
//                   render={({ field }) => <Textarea placeholder="Bio" id="bio" {...field} />}
//                 />

//                 <Button type="submit">Save</Button>
//                 <Button variant='outline' onClick={(e) => { e.preventDefault(); reset(); setEditMode(false) }}>Cancel</Button>
//               </form>
//           }
//         </div>

//         <div className="flex flex-col justify-start items-start gap-2 w-full sm:w-2/3">
//           <div className="flex justify-between items-center w-full">
//             <h1 className="text-xl font-semibold">Published Rides</h1>
//             <Pencil className={`cursor-pointer p-1 rounded-lg ${rideDeleteMode && 'bg-primary text-primary-foreground'} `} size={25} onClick={() => setRideDeleteMode(!rideDeleteMode)} />
//           </div>
//           <ScrollArea className="h-[275px] w-full rounded-md border p-4">
//             {data?.ridesCreated.map(ride =>
//               <Fragment key={ride._id}>
//                 {editingRideId === ride._id ? (
//                   <div className="border p-4 rounded mb-2">
//                     <Input
//                       defaultValue={ride.title}
//                       onChange={(e) => ride.title = e.target.value}
//                       placeholder="Title"
//                     />
//                     <Textarea
//                       defaultValue={ride.description}
//                       onChange={(e) => ride.description = e.target.value}
//                       placeholder="Description"
//                     />
//                     <div className="flex gap-2 mt-2">
//                       <Button size="sm" onClick={() => handleUpdateRide(ride._id, ride)}>Save</Button>
//                       <Button size="sm" variant="outline" onClick={() => setEditingRideId(null)}>Cancel</Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="relative">
//                     <RideCard details={ride} />
//                     {rideDeleteMode && (
//                       <div className="absolute bottom-2 right-2 flex gap-2">
//                         <Trash className="text-destructive cursor-pointer" onClick={() => handleRideDelete(ride._id)} />
//                         <Pencil className="text-muted-foreground cursor-pointer" onClick={() => setEditingRideId(ride._id)} />
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </Fragment>
//             )}

//           </ScrollArea>

//           <div className="flex mt-5 justify-between items-center w-full">
//             <h1 className="text-xl font-semibold">Recently joined rides</h1>
//           </div>
//           <ScrollArea className="h-[275px] w-full rounded-md border p-4">
//             {data?.ridesJoined.length === 0
//               ? <h3>No rides</h3>
//               :
//               data?.ridesJoined.map(ride =>
//                 <RideCard key={ride._id} details={ride} />
//               )}
//           </ScrollArea>
//         </div>

//       </div>
//       <Toaster />
//     </main>
//   )
// }

// export default Profile

// import RideCard from "@/components/RideCard"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Toaster } from "@/components/ui/sonner"
// import { Textarea } from "@/components/ui/textarea"
// import { AuthContext } from "@/context/AuthContext"
// import useFetch from "@/hooks/useFetch"
// import { zodResolver } from "@hookform/resolvers/zod"
// import axios from "axios"
// import { Minus, Pencil, Plus, Star, Trash } from "lucide-react"
// import { Fragment, useContext, useState } from "react"
// import { Controller, useForm } from "react-hook-form"
// import { Navigate } from "react-router-dom"
// import { toast } from "sonner"
// import { z } from "zod"
// const apiUri = import.meta.env.VITE_REACT_API_URI

// const Profile = () => {
//   const { user } = useContext(AuthContext)

//   const [rideDeleteMode, setRideDeleteMode] = useState(false)
//   const [editMode, setEditMode] = useState(false)
//   const [editingRideId, setEditingRideId] = useState(null);



//   const { loading, data, refetch } = useFetch(`users/${user.user._id}`, true)

//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       name: "",
//       bio: "",
//     },
//   })


//   const onSubmit = async (newData) => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         name: newData.name,
//         profile: { ...data.profile, bio: newData.bio }
//       }, { withCredentials: true });
//       refetch();
//       reset()
//       setEditMode(false)
//     } catch (error) {
//       console.error('Patch error:', error);
//     }
//   }


//   async function handleRideDelete(id) {
//     try {
//       await axios.delete(`${apiUri}/rides/${id}`, { withCredentials: true });
//       refetch();
//       toast("The ride has been Deleted")
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   }

//   const handleRemoveProfilePicture = async () => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         profilePicture: "", // clear it
//       }, {
//         withCredentials: true,
//       });

//       toast("Profile picture removed");
//       refetch();
//     } catch (err) {
//       console.error("Failed to remove profile picture", err);
//       toast("Failed to remove profile picture");
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);
//     const userId = user.user._id;

//     try {
//       const res = await axios.post(`${apiUri}/users/${userId}`, formData, {
//         // const res = await axios.post(`/users/${user}`, formData, {

//         withCredentials: true,
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast("Profile picture updated!");
//       refetch();
//     } catch (err) {
//       console.error("Image upload failed", err);
//       toast("Failed to upload image.");
//     }
//   };



//   const now = new Date();

//   const formSchema = z.object({
//     from: z.string().min(1, "From location is required"),
//     to: z.string().min(1, "To location is required"),
//     seat: z.number().min(1).max(10),
//     price: z.number().min(0),
//     startTime: z.date().min(now, {
//       message: `Date must be greater than or equal to ${now.toString()}`
//     }),
//     endTime: z.date().refine(
//       (val) => val > now,
//       { message: "End time must be in the future" }
//     ),
//   });


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

//   const handleEditClick = (ride) => {
//     setEditingRideId(ride._id);
//     form.reset({
//       from: ride.origin.place,
//       to: ride.destination.place,
//       seat: ride.availableSeats,
//       price: ride.price,
//       startTime: new Date(ride.startTime),
//       endTime: new Date(ride.endTime),
//     });
//   };


//   const onSubmitUpdate = async (data) => {
//     try {
//       const body = {
//         availableSeats: data.seat,
//         origin: { place: data.from },
//         destination: { place: data.to },
//         startTime: data.startTime,
//         endTime: data.endTime,
//         price: data.price,
//       };

//       await axios.patch(`${apiUri}/rides/${editingRideId}`, body, {
//         withCredentials: true,
//       });

//       toast("Ride updated successfully!");
//       setEditingRideId(null);
//       refetch();
//     } catch (error) {
//       console.error("PATCH request failed:", error);
//       toast("Failed to update ride");
//     }
//   };


//   if (!user) return <Navigate to="/" replace />;

//   return (
//     <main className="pb-12 md:py-14 px-6 2xl:px-20 2xl:container 2xl:mx-auto">
//       <div className="flex flex-col sm:flex-row h-full w-full">
//         <div className="w-full sm:w-96 flex p-0 py-6 md:p-6 xl:p-8 flex-col">
//           <div className="relative flex w-full space-x-4 my-8">
//             {loading ?
//               <div className="flex items-center space-x-4">
//                 <Skeleton className="h-12 w-12 rounded-full" />
//                 <div className="space-y-2">
//                   <Skeleton className="h-4 w-[250px]" />
//                   <Skeleton className="h-4 w-[200px]" />
//                 </div>
//               </div>
//               :
//               <>
//                 <Avatar>
//                   <AvatarImage src={data?.profilePicture} />
//                   <AvatarFallback className="select-none text-primary text-xl font-bold">{data?.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Pencil size={20} className="absolute bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 p-1 cursor-pointer rounded-full bottom-0 -left-5" />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     {/* <DropdownMenuItem>
//                     <Label htmlFor='avatar' className='font-normal'>Upload image</Label>
//                     <Input type="file" id='avatar' className="hidden" onChange={handleImageUpload}/>
//                   </DropdownMenuItem> */}
//                     <DropdownMenuItem
//                       onSelect={(e) => {
//                         e.preventDefault();
//                         document.getElementById("avatar")?.click(); // trigger hidden input
//                       }}
//                     >
//                       Upload Image
//                       <input
//                         type="file"
//                         id="avatar"
//                         className="hidden"
//                         onChange={handleImageUpload}
//                       />
//                     </DropdownMenuItem>
//                     <DropdownMenuItem
//                       onSelect={(e) => {
//                         e.preventDefault();
//                         handleRemoveProfilePicture(); // 🔥 this function will handle removal
//                       }}
//                     >
//                       <p>Remove profile</p>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//                 <div className="flex justify-center items-start flex-col space-y-2">
//                   <p className="text-base font-semibold leading-4 text-left">{data?.name}</p>
//                   <div className="flex items-center text-sm gap-1 text-muted-foreground"><Star fill="yellow" size={20} className="text-transparent" /> {data?.stars} - {data?.ratings.length} ratings</div>
//                 </div>
//               </>
//             }
//           </div>
//           {
//             !editMode ?
//               <>
//                 <Button variant='outline' onClick={() => setEditMode(true)} >Edit Profile</Button>
//                 <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                   <h3 className="text-base font-semibold leading-4 text-center md:text-left">About</h3>
//                   <p className="text-sm text-muted-foreground">Bio: {data?.profile.bio}</p>
//                   <p className="text-sm text-muted-foreground">{data?.age && `${data?.age} y/o`}</p>
//                   <p className="text-sm text-muted-foreground">{data?.ridesCreated.length} Rides published</p>
//                   <p className="text-sm text-muted-foreground">Member since {data?.createdAt.substring(0, 4)}</p>
//                 </div>
//                 <div className="flex justify-center items-start flex-col space-y-4 mt-8">
//                   <h3 className="text-base font-semibold leading-4 text-center md:text-left">Preferences</h3>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.music}</p>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.smoking}</p>
//                   <p className="text-sm text-muted-foreground">{data?.profile.preferences?.petFriendly}</p>
//                 </div>
//               </>
//               :
//               <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
//                 <Label htmlFor="name">Name</Label>
//                 <Controller
//                   name="name"
//                   control={control}
//                   render={({ field }) => <Input required autoComplete="name" placeholder="Full name" id="name" {...field} />}
//                 />
//                 <Label htmlFor="bio">Bio</Label>
//                 <Controller
//                   name="bio"
//                   control={control}
//                   render={({ field }) => <Textarea placeholder="Bio" id="bio" {...field} />}
//                 />

//                 <Button type="submit">Save</Button>
//                 <Button variant='outline' onClick={(e) => { e.preventDefault(); reset(); setEditMode(false) }}>Cancel</Button>
//               </form>
//           }
//         </div>

//         <div className="flex flex-col justify-start items-start gap-2 w-full sm:w-2/3">
//           <div className="flex justify-between items-center w-full">
//             <h1 className="text-xl font-semibold">Published Rides</h1>
//             <Pencil className={`cursor-pointer p-1 rounded-lg ${rideDeleteMode && 'bg-primary text-primary-foreground'} `} size={25} onClick={() => setRideDeleteMode(!rideDeleteMode)} />
//           </div>
//           <ScrollArea className="h-[275px] w-full rounded-md border p-4">
//             {data?.ridesCreated.map(ride =>
//               <Fragment key={ride._id}>
//                 {editingRideId === ride._id ? (
//                   <div className="border p-4 rounded mb-2">
//                     <Form {...form}>
//                       <form onSubmit={form.handleSubmit(onSubmitUpdate)} className="grid w-full items-center gap-4">
//                         <FormField
//                           control={form.control}
//                           name="from"
//                           render={({ field }) => (
//                             <FormItem className="flex flex-col space-y-1.5">
//                               <FormLabel>From</FormLabel>
//                               <FormControl>
//                                 <Input placeholder="From" required {...field} />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                         <FormField
//                           control={form.control}
//                           name="to"
//                           render={({ field }) => (
//                             <FormItem className="flex flex-col space-y-1.5">
//                               <FormLabel>To</FormLabel>
//                               <FormControl>
//                                 <Input placeholder="To" required {...field} />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                         <div className="flex gap-24">
//                           <FormField
//                             control={form.control}
//                             name="seat"
//                             render={({ field }) => (
//                               <FormItem className="flex flex-col space-y-1.5">
//                                 <FormLabel>Available seats</FormLabel>
//                                 <FormControl>
//                                   <div className="flex gap-2 items-center">
//                                     <Button variant="outline" size="icon" type="button" onClick={() => field.value > 1 && field.onChange(field.value - 1)}>
//                                       <Minus className="h-4 w-4" />
//                                     </Button>
//                                     <span>{field.value}</span>
//                                     <Button variant="outline" size="icon" type="button" onClick={() => field.value < 10 && field.onChange(field.value + 1)}  >
//                                       <Plus className="h-4 w-4" />
//                                     </Button>
//                                   </div>
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />
//                           <FormField
//                             control={form.control}
//                             name="price"
//                             render={({ field }) => (
//                               <FormItem className="flex flex-col space-y-1.5">
//                                 <FormLabel>Price</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="Price" min="0" {...field} onChange={(event) => field.onChange(Number(event.target.value))} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />
//                         </div>
//                         <FormField
//                           control={form.control}
//                           name="startTime"
//                           render={({ field }) => (
//                             <FormItem className="flex flex-col space-y-1.5">
//                               <FormLabel>Departure Time</FormLabel>
//                               <FormControl>
//                                 <Input type="datetime-local"
//   {...field}
//   value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
//   onChange={(e) => {
//     const selectedDate = new Date(e.target.value);
//     if (!isNaN(selectedDate.getTime())) {
//       field.onChange(selectedDate);
//     }
//   }}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                         <FormField
//                           control={form.control}
//                           name="endTime"
//                           render={({ field }) => (
//                             <FormItem className="flex flex-col space-y-1.5">
//                               <FormLabel>Arrival Time</FormLabel>
//                               <FormControl>
//                                 <Input type="datetime-local"
//   {...field}
//   value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
//   onChange={(e) => {
//     const selectedDate = new Date(e.target.value);
//     if (!isNaN(selectedDate.getTime())) {
//       field.onChange(selectedDate);
//     }
//   }}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                         <Button type="submit" onClick={() => handleEditClick(ride)}>Update</Button>
//                       </form>
//                     </Form>
//                   </div>
//                 ) : (
//                   <div className="relative">
//                     <RideCard details={ride} />
//                     {rideDeleteMode && (
//                       <div className="absolute bottom-2 right-2 flex gap-2">
//                         <Trash className="text-destructive cursor-pointer" onClick={() => handleRideDelete(ride._id)} />
//                         <Pencil className="text-muted-foreground cursor-pointer" onClick={() => setEditingRideId(ride._id)} />
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </Fragment>
//             )}

//           </ScrollArea>

//           <div className="flex mt-5 justify-between items-center w-full">
//             <h1 className="text-xl font-semibold">Recently joined rides</h1>
//           </div>
//           <ScrollArea className="h-[275px] w-full rounded-md border p-4">
//             {data?.ridesJoined.length === 0
//               ? <h3>No rides</h3>
//               :
//               data?.ridesJoined.map(ride =>
//                 <RideCard key={ride._id} details={ride} />
//               )}
//           </ScrollArea>
//         </div>

//       </div>
//       <Toaster />
//     </main>
//   )
// }

// export default Profile



// import RideCard from "@/components/RideCard"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Toaster } from "@/components/ui/sonner"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Textarea } from "@/components/ui/textarea"
// import { AuthContext } from "@/context/AuthContext"
// import useFetch from "@/hooks/useFetch"
// import { zodResolver } from "@hookform/resolvers/zod"
// import axios from "axios"
// import { Camera, CalendarDays, Clock, Edit, MapPin, Minus, Pencil, Plus, Star, Trash2, UserCircle } from "lucide-react"
// import { Fragment, useContext, useState, useEffect } from "react"
// import { Controller, useForm } from "react-hook-form"
// import { Navigate } from "react-router-dom"
// import { toast } from "sonner"
// import { z } from "zod"
// const apiUri = import.meta.env.VITE_REACT_API_URI

// const Profile = () => {
//   const { user } = useContext(AuthContext)
//   const [rideDeleteMode, setRideDeleteMode] = useState(false)
//   const [editMode, setEditMode] = useState(false)
//   const [editingRideId, setEditingRideId] = useState(null)
//   const [activeTab, setActiveTab] = useState("published")
//   const [selectedTab, setSelectedTab] = useState("published");


//   const { loading, data, refetch } = useFetch(`users/${user?.user?._id}`, true)

//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       name: "",
//       bio: "",
//     },
//   })

//   useEffect(() => {
//     if (data) {
//       reset({
//         name: data.name || "",
//         bio: data.profile?.bio || ""
//       });
//     }
//   }, [data, reset]);

//   const onSubmit = async (newData) => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         name: newData.name,
//         profile: { ...data.profile, bio: newData.bio }
//       }, { withCredentials: true });
//       refetch();
//       toast.success("Profile updated successfully!");
//       setEditMode(false);
//     } catch (error) {
//       console.error('Patch error:', error);
//       toast.error("Failed to update profile");
//     }
//   }

//   async function handleRideDelete(id) {
//     try {
//       await axios.delete(`${apiUri}/rides/${id}`, { withCredentials: true });
//       refetch();
//       toast.success("Ride deleted successfully");
//     } catch (error) {
//       console.error('Error deleting item:', error);
//       toast.error("Failed to delete ride");
//     }
//   }

//   const handleRemoveProfilePicture = async () => {
//     try {
//       await axios.patch(`${apiUri}/users/${user.user._id}`, {
//         profilePicture: "",
//       }, {
//         withCredentials: true,
//       });

//       toast.success("Profile picture removed");
//       refetch();
//     } catch (err) {
//       console.error("Failed to remove profile picture", err);
//       toast.error("Failed to remove profile picture");
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);
//     const userId = user.user._id;

//     try {
//       await axios.post(`${apiUri}/users/${userId}`, formData, {
//         withCredentials: true,
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast.success("Profile picture updated!");
//       refetch();
//     } catch (err) {
//       console.error("Image upload failed", err);
//       toast.error("Failed to upload image");
//     }
//   };

//   const now = new Date();

//   const formSchema = z.object({
//     from: z.string().min(1, "From location is required"),
//     to: z.string().min(1, "To location is required"),
//     seat: z.number().min(1).max(10),
//     price: z.number().min(0),
//     startTime: z.date().min(now, {
//       message: `Date must be greater than or equal to ${now.toString()}`
//     }),
//     endTime: z.date().refine(
//       (val) => val > now,
//       { message: "End time must be in the future" }
//     ),
//   });

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

//   const handleEditClick = (ride) => {
//     setEditingRideId(ride._id);
//     form.reset({
//       from: ride.origin.place,
//       to: ride.destination.place,
//       seat: ride.availableSeats,
//       price: ride.price,
//       startTime: new Date(ride.startTime),
//       endTime: new Date(ride.endTime),
//     });
//   };

//   const onSubmitUpdate = async (data) => {
//     try {
//       const body = {
//         availableSeats: data.seat,
//         origin: { place: data.from },
//         destination: { place: data.to },
//         startTime: data.startTime,
//         endTime: data.endTime,
//         price: data.price,
//       };

//       await axios.patch(`${apiUri}/rides/${editingRideId}`, body, {
//         withCredentials: true,
//       });

//       toast.success("Ride updated successfully!");
//       setEditingRideId(null);
//       refetch();
//     } catch (error) {
//       console.error("PATCH request failed:", error);
//       toast.error("Failed to update ride");
//     }
//   };

//   const formatYear = (dateString) => {
//     return dateString ? new Date(dateString).getFullYear() : '';
//   };

//   if (!user) return <Navigate to="/" replace />;

//   return (
//     <main className="bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--accent-teal),0.05)] min-h-screen pb-12 md:py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
//       <div className="flex flex-col sm:flex-row h-full w-full gap-6">
//         {/* Left Column - User Profile */}
//         <div className="w-full sm:w-96">
//           <Card className="bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/40 border-accent-teal/20 shadow-lg overflow-hidden">
//             <div className="bg-gradient-to-r from-primary/10 to-accent-teal/10 p-6">
//               {loading ? (
//                 <div className="flex items-center space-x-4">
//                   <Skeleton className="h-16 w-16 rounded-full" />
//                   <div className="space-y-2">
//                     <Skeleton className="h-4 w-[250px]" />
//                     <Skeleton className="h-4 w-[200px]" />
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center text-center">
//                   <div className="relative mb-4">
//                     <Avatar className="h-24 w-24 border-4 border-background shadow-md">
//                       <AvatarImage src={data?.profilePicture} />
//                       <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
//                         {data?.name?.[0]}
//                       </AvatarFallback>
//                     </Avatar>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="outline" size="icon" className="absolute -bottom-1 -right-1 rounded-full h-8 w-8 shadow-md">
//                           <Camera size={16} />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end" >
//                         <DropdownMenuItem
//                           onSelect={(e) => {
//                             e.preventDefault();
//                             document.getElementById("avatar")?.click();
//                           }}
//                           className="cursor-pointer"
//                         >
//                           Upload Image
//                           <input
//                             type="file"
//                             id="avatar"
//                             className="hidden"
//                             onChange={handleImageUpload}
//                           />
//                         </DropdownMenuItem>
//                         <DropdownMenuItem
//                           onSelect={(e) => {
//                             e.preventDefault();
//                             handleRemoveProfilePicture();
//                           }}
//                           className="cursor-pointer"
//                         >
//                           Remove Profile Picture
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </div>
//                   <h2 className="text-xl font-semibold">{data?.name}</h2>
//                   <div className="flex items-center mt-1 text-sm">
//                     <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
//                     <span className="font-medium">{data?.stars || 0}</span>
//                     <span className="text-muted-foreground mx-1">•</span>
//                     <span className="text-muted-foreground">{data?.ratings?.length || 0} ratings</span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <CardContent className="p-6">
//               {!editMode ? (
//                 <>
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-semibold flex items-center">
//                       <UserCircle className="h-5 w-5 mr-2 text-accent-teal" />
//                       About
//                     </h3>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => setEditMode(true)}
//                       className="h-8 w-8 p-0"
//                     >
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   <div className="space-y-3 text-sm">
//                     {data?.profile?.bio && (
//                       <div className="rounded-lg bg-muted/50 p-3">
//                         <p className="text-sm">{data.profile.bio}</p>
//                       </div>
//                     )}

//                     <div className="grid grid-cols-2 gap-y-2">
//                       {data?.age && (
//                         <div className="flex items-center text-muted-foreground">
//                           <span className="font-medium mr-2">Age:</span>
//                           <span>{data.age} years</span>
//                         </div>
//                       )}
//                       <div className="flex items-center text-muted-foreground">
//                         <span className="font-medium mr-2">Rides:</span>
//                         <span>{data?.ridesCreated?.length || 0}</span>
//                       </div>
//                       <div className="flex items-center text-muted-foreground col-span-2">
//                         <CalendarDays className="h-4 w-4 mr-2" />
//                         <span>Member since {formatYear(data?.createdAt)}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <Separator className="my-4" />

//                   <div className="space-y-3">
//                     <h3 className="text-lg font-semibold flex items-center">
//                       <Clock className="h-5 w-5 mr-2 text-accent-teal" />
//                       Preferences
//                     </h3>
//                     <div className="grid grid-cols-1 gap-2">
//                       {data?.profile?.preferences?.music && (
//                         <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5">
//                           <span className="text-sm text-muted-foreground">{data.profile.preferences.music}</span>
//                         </div>
//                       )}
//                       {data?.profile?.preferences?.smoking && (
//                         <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5">
//                           <span className="text-sm text-muted-foreground">{data.profile.preferences.smoking}</span>
//                         </div>
//                       )}
//                       {data?.profile?.preferences?.petFriendly && (
//                         <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5">
//                           <span className="text-sm text-muted-foreground">{data.profile.preferences.petFriendly}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                   <div>
//                     <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
//                     <Controller
//                       name="name"
//                       control={control}
//                       render={({ field }) =>
//                         <Input
//                           required
//                           autoComplete="name"
//                           placeholder="Full name"
//                           id="name"
//                           className="mt-1"
//                           {...field}
//                         />
//                       }
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
//                     <Controller
//                       name="bio"
//                       control={control}
//                       render={({ field }) =>
//                         <Textarea
//                           placeholder="Tell others about yourself..."
//                           id="bio"
//                           className="mt-1 resize-none"
//                           rows={4}
//                           {...field}
//                         />
//                       }
//                     />
//                   </div>

//                   <div className="flex gap-2 pt-2">
//                     <Button type="submit" className="flex-1 bg-[#2563eb] text-white">Save Changes</Button>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       onClick={() => {
//                         reset({
//                           name: data?.name || "",
//                           bio: data?.profile?.bio || ""
//                         });
//                         setEditMode(false);
//                       }}
//                       className="flex-1"
//                     >
//                       Cancel
//                     </Button>
//                   </div>
//                 </form>
//               )}
//             </CardContent>
//           </Card>
//         </div>

//         {/* Right Column - Rides */}
//         <div className="flex-1">
//           <Card className="bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/40 border-accent-teal/20 shadow-lg">
//             <Tabs defaultValue="published" className="w-full" onValueChange={setActiveTab}>
//               <div className="flex items-center justify-between px-6 pt-6">
//                 {/* <TabsList className="grid grid-cols-2">
//                   <TabsTrigger value="published">Published Rides</TabsTrigger>
//                   <TabsTrigger value="joined">Joined Rides</TabsTrigger>
//                 </TabsList> */}
//                 <TabsList className="grid grid-cols-2 gap-5">
//                   <TabsTrigger
//                     value="published"
//                     onClick={() => setSelectedTab("published")}
//                     className={`px-4 py-2 text-center transition-all duration-300 ease-in-out ${selectedTab === "published" ? 'bg-blue-500 text-white' : 'bg-white text-black'
//                       }`}
//                   >
//                     Published Rides
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="joined"
//                     onClick={() => setSelectedTab("joined")}
//                     className={`px-4 py-2 text-center transition-all duration-300 ease-in-out ${selectedTab === "joined" ? 'bg-blue-500 text-white' : 'bg-white text-black'
//                       }`}
//                   >
//                     Joined Rides
//                   </TabsTrigger>
//                 </TabsList>
//                 {activeTab === "published" && (
//                   <Button
//                     variant={rideDeleteMode ? "destructive" : "ghost"}
//                     size="sm"
//                     onClick={() => setRideDeleteMode(!rideDeleteMode)}
//                     className="h-8 w-8 p-0"
//                   >
//                     <Pencil className="h-4 w-4" />
//                   </Button>
//                 )}
//               </div>

//               <TabsContent value="published" className="mt-4 px-6 pb-6">
//                 {loading ? (
//                   <div className="space-y-4">
//                     <Skeleton className="h-32 w-full rounded-lg" />
//                     <Skeleton className="h-32 w-full rounded-lg" />
//                   </div>
//                 ) : data?.ridesCreated?.length === 0 ? (
//                   <div className="text-center py-12 px-4">
//                     <div className="bg-muted/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
//                       <MapPin className="h-6 w-6 text-muted-foreground" />
//                     </div>
//                     <h3 className="text-lg font-medium mb-1">No published rides</h3>
//                     <p className="text-sm text-muted-foreground">Create your first ride to share with others</p>
//                   </div>
//                 ) : (
//                   <ScrollArea className="h-[500px] pr-4 -mr-4">
//                     <div className="space-y-4">
//                       {data?.ridesCreated.map(ride => (
//                         <Fragment key={ride._id}>
//                           {editingRideId === ride._id ? (
//                             <Card className="border p-4 rounded-lg shadow-sm">
//                               <Form {...form}>
//                                 <form onSubmit={form.handleSubmit(onSubmitUpdate)} className="space-y-4">
//                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <FormField
//                                       control={form.control}
//                                       name="from"
//                                       render={({ field }) => (
//                                         <FormItem>
//                                           <FormLabel>Origin</FormLabel>
//                                           <FormControl>
//                                             <Input placeholder="From" required {...field} />
//                                           </FormControl>
//                                           <FormMessage />
//                                         </FormItem>
//                                       )}
//                                     />
//                                     <FormField
//                                       control={form.control}
//                                       name="to"
//                                       render={({ field }) => (
//                                         <FormItem>
//                                           <FormLabel>Destination</FormLabel>
//                                           <FormControl>
//                                             <Input placeholder="To" required {...field} />
//                                           </FormControl>
//                                           <FormMessage />
//                                         </FormItem>
//                                       )}
//                                     />
//                                   </div>

//                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <FormField
//                                       control={form.control}
//                                       name="startTime"
//                                       render={({ field }) => (
//                                         <FormItem>
//                                           <FormLabel>Departure Time</FormLabel>
//                                           <FormControl>
//                                             <Input
//                                               type="datetime-local"
//                                               {...field}
//                                               value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
//                                               onChange={(e) => {
//                                                 const selectedDate = new Date(e.target.value);
//                                                 if (!isNaN(selectedDate.getTime())) {
//                                                   field.onChange(selectedDate);
//                                                 }
//                                               }}
//                                             />
//                                           </FormControl>
//                                           <FormMessage />
//                                         </FormItem>
//                                       )}
//                                     />
//                                     <FormField
//                                       control={form.control}
//                                       name="endTime"
//                                       render={({ field }) => (
//                                         <FormItem>
//                                           <FormLabel>Arrival Time</FormLabel>
//                                           <FormControl>
//                                             <Input
//                                               type="datetime-local"
//                                               {...field}
//                                               value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
//                                               onChange={(e) => {
//                                                 const selectedDate = new Date(e.target.value);
//                                                 if (!isNaN(selectedDate.getTime())) {
//                                                   field.onChange(selectedDate);
//                                                 }
//                                               }}
//                                             />
//                                           </FormControl>
//                                           <FormMessage />
//                                         </FormItem>
//                                       )}
//                                     />
//                                   </div>

//                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <FormField
//                                       control={form.control}
//                                       name="seat"
//                                       render={({ field }) => (
//                                         <FormItem>
//                                           <FormLabel>Available seats</FormLabel>
//                                           <FormControl>
//                                             <div className="flex h-10 items-center rounded-md border bg-background px-4">
//                                               <Button
//                                                 variant="ghost"
//                                                 size="sm"
//                                                 type="button"
//                                                 className="h-8 w-8 p-0"
//                                                 onClick={() => field.value > 1 && field.onChange(field.value - 1)}
//                                               >
//                                                 <Minus className="h-4 w-4" />
//                                               </Button>
//                                               <span className="flex-1 text-center font-medium">{field.value}</span>
//                                               <Button
//                                                 variant="ghost"
//                                                 size="sm"
//                                                 type="button"
//                                                 className="h-8 w-8 p-0"
//                                                 onClick={() => field.value < 10 && field.onChange(field.value + 1)}
//                                               >
//                                                 <Plus className="h-4 w-4" />
//                                               </Button>
//                                             </div>
//                                           </FormControl>
//                                           <FormMessage />
//                                         </FormItem>
//                                       )}
//                                     />
//                                     <FormField
//                                       control={form.control}
//                                       name="price"
//                                       render={({ field }) => (
//                                         <FormItem>
//                                           <FormLabel>Price</FormLabel>
//                                           <FormControl>
//                                             <Input
//                                               placeholder="Price"
//                                               min="0"
//                                               type="number"
//                                               {...field}
//                                               onChange={(event) => field.onChange(Number(event.target.value))}
//                                             />
//                                           </FormControl>
//                                           <FormMessage />
//                                         </FormItem>
//                                       )}
//                                     />
//                                   </div>

//                                   <div className="flex justify-end gap-2 pt-2">
//                                     <Button
//                                       type="button"
//                                       variant="outline"
//                                       onClick={() => setEditingRideId(null)}
//                                     >
//                                       Cancel
//                                     </Button>
//                                     <Button type="submit">Update Ride</Button>
//                                   </div>
//                                 </form>
//                               </Form>
//                             </Card>
//                           ) : (
//                             <div className="relative transition-all hover:translate-y-[-2px] duration-300">
//                               <div className="card-hover-effect rounded-lg overflow-hidden border border-accent-teal/20">
//                                 <RideCard details={ride} />
//                               </div>
//                               {rideDeleteMode && (
//                                 <div className="absolute bottom-3 right-3 flex gap-2 bg-background/80 backdrop-blur-sm rounded-full p-1 shadow-md">
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="h-8 w-8"
//                                     onClick={() => handleEditClick(ride)}
//                                   >
//                                     <Pencil className="h-4 w-4 text-accent-teal" />
//                                   </Button>
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="h-8 w-8 text-destructive hover:text-destructive"
//                                     onClick={() => handleRideDelete(ride._id)}
//                                   >
//                                     <Trash2 className="h-4 w-4" />
//                                   </Button>
//                                 </div>
//                               )}
//                             </div>
//                           )}
//                         </Fragment>
//                       ))}
//                     </div>
//                   </ScrollArea>
//                 )}
//               </TabsContent>

//               <TabsContent value="joined" className="mt-4 px-6 pb-6">
//                 {loading ? (
//                   <div className="space-y-4">
//                     <Skeleton className="h-32 w-full rounded-lg" />
//                     <Skeleton className="h-32 w-full rounded-lg" />
//                   </div>
//                 ) : data?.ridesJoined?.length === 0 ? (
//                   <div className="text-center py-12 px-4">
//                     <div className="bg-muted/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
//                       <MapPin className="h-6 w-6 text-muted-foreground" />
//                     </div>
//                     <h3 className="text-lg font-medium mb-1">No joined rides</h3>
//                     <p className="text-sm text-muted-foreground">Join rides to see them here</p>
//                   </div>
//                 ) : (
//                   <ScrollArea className="h-[500px] pr-4 -mr-4">
//                     <div className="space-y-4">
//                       {data?.ridesJoined.map(ride => (
//                         <div key={ride._id} className="transition-all hover:translate-y-[-2px] duration-300">
//                           <div className="card-hover-effect rounded-lg overflow-hidden border border-accent-teal/20">
//                             <RideCard details={ride} />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </ScrollArea>
//                 )}
//               </TabsContent>
//             </Tabs>
//           </Card>
//         </div>
//       </div>
//       <Toaster />
//     </main>
//   )
// }

// export default Profile


import RideCard from "@/components/RideCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Toaster } from "@/components/ui/sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AuthContext } from "@/context/AuthContext"
import useFetch from "@/hooks/useFetch"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Camera, CalendarDays, Clock, Edit, MapPin, Minus, Pencil, Plus, Star, Trash2, UserCircle } from "lucide-react"
import { Fragment, useContext, useState, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
const apiUri = import.meta.env.VITE_REACT_API_URI

const Profile = () => {
  const { user } = useContext(AuthContext)
  const [rideDeleteMode, setRideDeleteMode] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editingRideId, setEditingRideId] = useState(null)
  const [activeTab, setActiveTab] = useState("published")
  const [selectedTab, setSelectedTab] = useState("published");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { loading, data, refetch } = useFetch(`users/${user?.user?._id}`, true)

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      bio: "",
    },
  })

  useEffect(() => {
    if (data) {
      reset({
        name: data.name || "",
        bio: data.profile?.bio || ""
      });
    }
  }, [data, reset]);

  const onSubmit = async (newData) => {
    try {
      await axios.patch(`${apiUri}/users/${user.user._id}`, {
        name: newData.name,
        profile: { ...data.profile, bio: newData.bio }
      }, { withCredentials: true });
      refetch();
      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error('Patch error:', error);
      toast.error("Failed to update profile");
    }
  }

  async function handleRideDelete(id) {
    try {
      await axios.delete(`${apiUri}/rides/${id}`, { withCredentials: true });
      refetch();
      toast.success("Ride deleted successfully");
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error("Failed to delete ride");
    }
  }

  const handleRemoveProfilePicture = async () => {
    try {
      await axios.patch(`${apiUri}/users/${user.user._id}`, {
        profilePicture: "",
      }, {
        withCredentials: true,
      });

      toast.success("Profile picture removed");
      refetch();
    } catch (err) {
      console.error("Failed to remove profile picture", err);
      toast.error("Failed to remove profile picture");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    const userId = user.user._id;

    try {
      await axios.post(`${apiUri}/users/${userId}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success("Profile picture updated!");
      refetch();
    } catch (err) {
      console.error("Image upload failed", err);
      toast.error("Failed to upload image");
    }
  };

  const now = new Date();

  const formSchema = z.object({
    from: z.string().min(1, "From location is required"),
    to: z.string().min(1, "To location is required"),
    seat: z.number().min(1).max(10),
    price: z.number().min(0),
    startTime: z.date().min(now, {
      message: `Date must be greater than or equal to ${now.toString()}`
    }),
    endTime: z.date().refine(
      (val) => val > now,
      { message: "End time must be in the future" }
    ),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      seat: 1,
      price: 0,
      startTime: new Date(),
      endTime: new Date(),
    },
  });

  const handleEditClick = (ride) => {
    setEditingRideId(ride._id);
    form.reset({
      from: ride.origin.place,
      to: ride.destination.place,
      seat: ride.availableSeats,
      price: ride.price,
      startTime: new Date(ride.startTime),
      endTime: new Date(ride.endTime),
    });
  };

  const onSubmitUpdate = async (data) => {
    try {
      const body = {
        availableSeats: data.seat,
        origin: { place: data.from },
        destination: { place: data.to },
        startTime: data.startTime,
        endTime: data.endTime,
        price: data.price,
      };

      await axios.patch(`${apiUri}/rides/${editingRideId}`, body, {
        withCredentials: true,
      });

      toast.success("Ride updated successfully!");
      setEditingRideId(null);
      refetch();
    } catch (error) {
      console.error("PATCH request failed:", error);
      toast.error("Failed to update ride");
    }
  };

  const formatYear = (dateString) => {
    return dateString ? new Date(dateString).getFullYear() : '';
  };

  if (!user) return <Navigate to="/" replace />;

  return (
    <main className="bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--accent-teal),0.05)] min-h-screen pb-12 md:py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col sm:flex-row h-full w-full gap-6">
        {/* Left Column - User Profile */}
        <div className="w-full sm:w-96">
          <Card className="bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/40 border-accent-teal/20 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-accent-teal/10 p-6">
              {loading ? (
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                      <AvatarImage src={data?.profilePicture} />
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                        {data?.name?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Fixed Dropdown Menu */}
                    <div className="absolute -bottom-1 -right-1">
                      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full h-8 w-8 shadow-md bg-white "
                          >
                            <Camera size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                          align="end" 
                          className="w-48 bg-white border border-gray-200 shadow-lg rounded-md p-1 z-50"
                        >
                          <DropdownMenuItem
                            className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 rounded-sm"
                            onSelect={(e) => {
                              e.preventDefault();
                              document.getElementById("avatar")?.click();
                              setDropdownOpen(false);
                            }}
                          >
                            Upload Image
                            <input
                              type="file"
                              id="avatar"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 rounded-sm text-red-500"
                            onSelect={(e) => {
                              e.preventDefault();
                              handleRemoveProfilePicture();
                              setDropdownOpen(false);
                            }}
                          >
                            Remove Profile Picture
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold">{data?.name}</h2>
                  <div className="flex items-center mt-1 text-sm">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{data?.stars || 0}</span>
                    <span className="text-muted-foreground mx-1">•</span>
                    <span className="text-muted-foreground">{data?.ratings?.length || 0} ratings</span>
                  </div>
                </div>
              )}
            </div>

            <CardContent className="p-6">
              {!editMode ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <UserCircle className="h-5 w-5 mr-2 text-accent-teal" />
                      About
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditMode(true)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm">
                    {data?.profile?.bio && (
                      <div className="rounded-lg bg-muted/50 p-3">
                        <p className="text-sm">{data.profile.bio}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-y-2">
                      {data?.age && (
                        <div className="flex items-center text-muted-foreground">
                          <span className="font-medium mr-2">Age:</span>
                          <span>{data.age} years</span>
                        </div>
                      )}
                      <div className="flex items-center text-muted-foreground">
                        <span className="font-medium mr-2">Rides:</span>
                        <span>{data?.ridesCreated?.length || 0}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground col-span-2">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>Member since {formatYear(data?.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-accent-teal" />
                      Preferences
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {data?.profile?.preferences?.music && (
                        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5">
                          <span className="text-sm text-muted-foreground">{data.profile.preferences.music}</span>
                        </div>
                      )}
                      {data?.profile?.preferences?.smoking && (
                        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5">
                          <span className="text-sm text-muted-foreground">{data.profile.preferences.smoking}</span>
                        </div>
                      )}
                      {data?.profile?.preferences?.petFriendly && (
                        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5">
                          <span className="text-sm text-muted-foreground">{data.profile.preferences.petFriendly}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) =>
                        <Input
                          required
                          autoComplete="name"
                          placeholder="Full name"
                          id="name"
                          className="mt-1"
                          {...field}
                        />
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                    <Controller
                      name="bio"
                      control={control}
                      render={({ field }) =>
                        <Textarea
                          placeholder="Tell others about yourself..."
                          id="bio"
                          className="mt-1 resize-none"
                          rows={4}
                          {...field}
                        />
                      }
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button type="submit" className="flex-1 bg-[#2563eb] text-white">Save Changes</Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        reset({
                          name: data?.name || "",
                          bio: data?.profile?.bio || ""
                        });
                        setEditMode(false);
                      }}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Rides */}
        <div className="flex-1">
          <Card className="bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/40 border-accent-teal/20 shadow-lg">
            <Tabs defaultValue="published" className="w-full" onValueChange={setActiveTab}>
              <div className="flex items-center justify-between px-6 pt-6">
                <TabsList className="grid grid-cols-2 gap-5">
                  <TabsTrigger
                    value="published"
                    onClick={() => setSelectedTab("published")}
                    className={`px-4 py-2 text-center transition-all duration-300 ease-in-out ${selectedTab === "published" ? 'bg-blue-500 text-white' : 'bg-white text-black'
                      }`}
                  >
                    Published Rides
                  </TabsTrigger>
                  <TabsTrigger
                    value="joined"
                    onClick={() => setSelectedTab("joined")}
                    className={`px-4 py-2 text-center transition-all duration-300 ease-in-out ${selectedTab === "joined" ? 'bg-blue-500 text-white' : 'bg-white text-black'
                      }`}
                  >
                    Joined Rides
                  </TabsTrigger>
                </TabsList>
                {activeTab === "published" && (
                  <Button
                    variant={rideDeleteMode ? "destructive" : "ghost"}
                    size="sm"
                    onClick={() => setRideDeleteMode(!rideDeleteMode)}
                    className="h-8 w-8 p-0"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <TabsContent value="published" className="mt-4 px-6 pb-6">
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-32 w-full rounded-lg" />
                    <Skeleton className="h-32 w-full rounded-lg" />
                  </div>
                ) : data?.ridesCreated?.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <div className="bg-muted/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">No published rides</h3>
                    <p className="text-sm text-muted-foreground">Create your first ride to share with others</p>
                  </div>
                ) : (
                  <ScrollArea className="h-[500px] pr-4 -mr-4">
                    <div className="space-y-4">
                      {data?.ridesCreated.map(ride => (
                        <Fragment key={ride._id}>
                          {editingRideId === ride._id ? (
                            <Card className="border p-4 rounded-lg shadow-sm">
                              <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmitUpdate)} className="space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                      control={form.control}
                                      name="from"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Origin</FormLabel>
                                          <FormControl>
                                            <Input placeholder="From" required {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={form.control}
                                      name="to"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Destination</FormLabel>
                                          <FormControl>
                                            <Input placeholder="To" required {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                      control={form.control}
                                      name="startTime"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Departure Time</FormLabel>
                                          <FormControl>
                                            <Input
                                              type="datetime-local"
                                              {...field}
                                              value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
                                              onChange={(e) => {
                                                const selectedDate = new Date(e.target.value);
                                                if (!isNaN(selectedDate.getTime())) {
                                                  field.onChange(selectedDate);
                                                }
                                              }}
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
                                        <FormItem>
                                          <FormLabel>Arrival Time</FormLabel>
                                          <FormControl>
                                            <Input
                                              type="datetime-local"
                                              {...field}
                                              value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""}
                                              onChange={(e) => {
                                                const selectedDate = new Date(e.target.value);
                                                if (!isNaN(selectedDate.getTime())) {
                                                  field.onChange(selectedDate);
                                                }
                                              }}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                      control={form.control}
                                      name="seat"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Available seats</FormLabel>
                                          <FormControl>
                                            <div className="flex h-10 items-center rounded-md border bg-background px-4">
                                              <Button
                                                variant="ghost"
                                                size="sm"
                                                type="button"
                                                className="h-8 w-8 p-0"
                                                onClick={() => field.value > 1 && field.onChange(field.value - 1)}
                                              >
                                                <Minus className="h-4 w-4" />
                                              </Button>
                                              <span className="flex-1 text-center font-medium">{field.value}</span>
                                              <Button
                                                variant="ghost"
                                                size="sm"
                                                type="button"
                                                className="h-8 w-8 p-0"
                                                onClick={() => field.value < 10 && field.onChange(field.value + 1)}
                                              >
                                                <Plus className="h-4 w-4" />
                                              </Button>
                                            </div>
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={form.control}
                                      name="price"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Price</FormLabel>
                                          <FormControl>
                                            <Input
                                              placeholder="Price"
                                              min="0"
                                              type="number"
                                              {...field}
                                              onChange={(event) => field.onChange(Number(event.target.value))}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>

                                  <div className="flex justify-end gap-2 pt-2">
                                    <Button
                                      type="button"
                                      variant="outline"
                                      onClick={() => setEditingRideId(null)}
                                    >
                                      Cancel
                                    </Button>
                                    <Button type="submit">Update Ride</Button>
                                  </div>
                                </form>
                              </Form>
                            </Card>
                          ) : (
                            <div className="relative transition-all hover:translate-y-[-2px] duration-300">
                              <div className="card-hover-effect rounded-lg overflow-hidden border border-accent-teal/20">
                                <RideCard details={ride} />
                              </div>
                              {rideDeleteMode && (
                                <div className="absolute bottom-3 right-3 flex gap-2 bg-background/80 backdrop-blur-sm rounded-full p-1 shadow-md">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => handleEditClick(ride)}
                                  >
                                    <Pencil className="h-4 w-4 text-accent-teal" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-destructive hover:text-destructive"
                                    onClick={() => handleRideDelete(ride._id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </TabsContent>

              <TabsContent value="joined" className="mt-4 px-6 pb-6">
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-32 w-full rounded-lg" />
                    <Skeleton className="h-32 w-full rounded-lg" />
                  </div>
                ) : data?.ridesJoined?.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <div className="bg-muted/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">No joined rides</h3>
                    <p className="text-sm text-muted-foreground">Join rides to see them here</p>
                  </div>
                ) : (
                  <ScrollArea className="h-[500px] pr-4 -mr-4">
                    <div className="space-y-4">
                      {data?.ridesJoined.map(ride => (
                        <div key={ride._id} className="transition-all hover:translate-y-[-2px] duration-300">
                          <div className="card-hover-effect rounded-lg overflow-hidden border border-accent-teal/20">
                            <RideCard details={ride} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default Profile