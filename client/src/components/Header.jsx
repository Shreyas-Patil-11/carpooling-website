
import logo from "../assets/logo.svg" 
import { Link, NavLink, useNavigate } from "react-router-dom" 
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Search, PlusCircle, LogOut, User, MapPin } from "lucide-react";
import LoginSignupDialog from "./LoginSignupDialog";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import axios from "axios";

const apiUri = import.meta.env.VITE_REACT_API_URI

const Header = () => {
  const {user, dispatch} = useContext(AuthContext)
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try{
      await axios.get(`${apiUri}/auth/logout`, {withCredentials: true});
      dispatch({ type: 'LOGOUT' });
      navigate("/");
    }catch(err){
      console.log(err)
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-[95%] mx-auto mt-4 rounded-full backdrop-blur-md bg-background/80 flex p-3 lg:px-16 items-center justify-end shadow-[0px_4px_24px_rgba(59,130,246,0.15)] hover:shadow-[0px_8px_30px_rgba(59,130,246,0.25)] transition-all duration-300 ease-in-out ">

  {/* Journey Line SVG in Background */}
  <div className="absolute inset-0 overflow-hidden rounded-full opacity-30 pointer-events-none">
    <svg className="w-full h-full" viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
      <path className="stroke-primary journey-path animate-drawPath" d="M0,50 C100,30 200,70 300,50 C400,30 500,70 600,50 C700,30 800,70 900,50" fill="none" strokeWidth="2" />
    </svg>
  </div>

  
      <NavLink to="/" className="inline-flex -order-1 items-center gap-2 transition-all duration-300 ease-in-out hover:rotate-3 hover:scale-110
">
  
        <div className="bg-primary/10 p-2 rounded-full">
          <img src={logo} width={32} alt="RideShare" className="drop-shadow-md" />
        </div>
        <h1 className="font-bold text-xl text-primary hidden sm:block">
          <span className="text-foreground">Ride</span>
          <span className="text-primary">2</span>
          <span className="text-foreground">Share</span>
        </h1>
      </NavLink>
      
      <nav className="ml-auto flex items-center text-base justify-center">
        <NavLink 
          to="/search" 
          className={({ isActive }) => 
            `flex items-center gap-2 mr-5 px-3 py-2 rounded-full transition-all ${
              isActive 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-primary/5 hover:shadow-md hover:text-primary'
            }`
          }
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search</span>
        </NavLink>
        
        <NavLink 
          to="/offer-seat" 
          className={({ isActive }) => 
            `flex items-center gap-2 mr-5 px-3 py-2 rounded-full transition-all ${
              isActive 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-primary/5 hover:shadow-md hover:text-primary'
            }`
          }
        >
          <PlusCircle className="h-4 w-4"/> 
          <span className="hidden sm:inline">Publish a ride</span>
        </NavLink>
      </nav>
      
      {!user ? (
        <LoginSignupDialog />
      ) : (
//         <DropdownMenu>
//           <DropdownMenuTrigger className="focus:outline-none group">
//             <div className="flex items-center gap-2 p-2 rounded-full transition-all hover:bg-primary/5">
//               <Avatar className="border-2 border-primary/20 group-hover:border-primary/50 transition-all">
//                 <AvatarImage src={user.user.profilePicture} />
//                 <AvatarFallback className="select-none bg-primary/10 text-primary text-xl font-bold">
//                   {user.user?.name[0]}
//                 </AvatarFallback>
//               </Avatar>
//               <span className="hidden md:inline text-sm font-medium">
//                 {user.user?.name.split(' ')[0]}
//               </span>
//             </div>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="w-56 mt-1 animate-in slide-in-from-top-5 transition ease-out duration-200
// ">
//             <DropdownMenuLabel className="font-normal">
//               <div className="flex flex-col space-y-1">
//                 <p className="text-sm font-medium">{user.user?.name}</p>
//                 <p className="text-xs text-muted-foreground">
//                   {user.user?.email}
//                 </p>
//               </div>
//             </DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>
//               <Link to="/profile" className="flex w-full items-center">
//                 <User className="mr-2 h-4 w-4"/><span>Profile</span>
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500" onClick={handleLogout}>
//               <LogOut className="mr-2 h-4 w-4"/><span>Log Out</span>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
<DropdownMenu>
  <DropdownMenuTrigger className="focus:outline-none group">
    <div className="flex items-center gap-2 p-2 rounded-full transition-all hover:bg-primary/5">
      <Avatar className="border-2 border-primary/20 group-hover:border-primary/50 transition-all">
        <AvatarImage src={user.user.profilePicture} />
        <AvatarFallback className="select-none bg-primary/10 text-primary text-xl font-bold">
          {user.user?.name[0]}
        </AvatarFallback>
      </Avatar>
      <span className="hidden md:inline text-sm font-medium">
        {user.user?.name.split(' ')[0]}
      </span>
    </div>
  </DropdownMenuTrigger>
  
  <DropdownMenuContent className="w-56 mt-1 bg-white rounded-lg shadow-lg animate-in slide-in-from-top-5 transition ease-out duration-200">
    <DropdownMenuLabel className="font-normal px-4 py-2">
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-medium">{user.user?.name}</p>
        <p className="text-xs text-muted-foreground">{user.user?.email}</p>
      </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    
    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 rounded px-4 py-2 transition">
      <Link to="/profile" className="flex w-full items-center">
        <User className="mr-2 h-4 w-4"/><span>Profile</span>
      </Link>
    </DropdownMenuItem>
    
    <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500 hover:bg-primary/10 rounded px-4 py-2 transition" onClick={handleLogout}>
      <LogOut className="mr-2 h-4 w-4"/><span>Log Out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      )}
    </header>
  )
}

export default Header