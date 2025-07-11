// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
// // import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
// // import { Input } from "./ui/input"
// // import { Label } from "./ui/label"
// // import { Button } from "./ui/button"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
// // import { useContext, useState } from "react"
// // import { AuthContext } from "@/context/AuthContext"
// // import axios from "axios"

// // const apiUri = import.meta.env.VITE_REACT_API_URI

// // const LoginSignupDialog = () => {
// //   const { loading, error, dispatch } = useContext(AuthContext);
// //   const [loginData, setLoginData] = useState({ email: "", password: "" });
// //   const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

// //   const handleLogin = async (event) => {
// //     event.preventDefault();
// //     dispatch({ type: 'LOGIN_START' });
// //     try{
// //       const res = await axios.post(`${apiUri}/auth/login`, loginData, {withCredentials: true})
// //       dispatch({type:"LOGIN_SUCCESS", payload: res.data})
// //       setLoginData({ email: "", password: "" })
// //     }catch(err){
// //       dispatch({type: "LOGIN_FAILED", payload: err.response.data})
// //     }
// //   };


// //   const handleSignup = async (event) => {
// //     event.preventDefault();
// //     dispatch({ type: 'LOGIN_START' });
// //     try{
// //       const res = await axios.post(`${apiUri}/auth/register`, signupData, {withCredentials: true})
// //       dispatch({type:"LOGIN_SUCCESS", payload: res.data})
// //       setSignupData({ name: "", email: "", password: "" })
// //     }catch(err){
// //       dispatch({type: "LOGIN_FAILED", payload: err.response.data})
// //     }
// //   };


// //   return (
// //     <Dialog>
// //       <DialogTrigger asChild>
// //         <Button className="bg-[#2563EB] text-white">Login</Button>
// //       </DialogTrigger>
// //         <DialogContent
// //            className=" border-2 border-black "
// //         >
// //           <Tabs 
// //             defaultValue="login"
// //           >
// //             <TabsList className="grid w-full grid-cols-2 my-4">
// //               <TabsTrigger value="login">Login</TabsTrigger>
// //               <TabsTrigger value="signup">SignUp</TabsTrigger>
// //             </TabsList>
// //             {error && <span className="text-sm text-destructive">{error?.message}</span> }
// //             <TabsContent value="login">
// //               <form onSubmit={handleLogin}>
// //                 <Card>
// //                   <CardHeader>
// //                     <CardTitle>Login</CardTitle>
// //                     <CardDescription>Welcome back</CardDescription>
// //                   </CardHeader>
// //                   <CardContent className="space-y-2">
// //                     <div className="space-y-1">
// //                       <Label htmlFor="email">Email</Label>
// //                       <Input id="email" autoComplete="email" type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
// //                     </div>
// //                     <div className="space-y-1">
// //                       <Label htmlFor="password">Password</Label>
// //                       <Input id="password" autoComplete="current-password" type="password" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
// //                     </div>
// //                   </CardContent>
// //                   <CardFooter>
// //                     <Button disabled={loading} type="submit">Log in</Button>
// //                   </CardFooter>
// //                 </Card>
// //               </form>
// //             </TabsContent>
// //             <TabsContent value="signup">
// //             <form onSubmit={handleSignup}>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle>Signup</CardTitle>
// //                   <CardDescription>Create a new account.</CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="space-y-2">
// //                   <div className="space-y-1">
// //                     <Label htmlFor="name">Name</Label>
// //                     <Input id="name" autoComplete="name" value={signupData.name} required onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="newemail">Email</Label>
// //                     <Input id="newemail" autoComplete="email" type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="newpassword">Password</Label>
// //                     <Input id="newpassword" autoComplete="new-password" type="password" required value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter>
// //                   <Button disabled={loading} type="submit">Sign up</Button>
// //                 </CardFooter>
// //               </Card>
// //             </form>
// //             </TabsContent>
// //           </Tabs>
// //         </DialogContent>
// //     </Dialog>
// //   )
// // }

// // export default LoginSignupDialog

// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
// // import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog"
// // import { Input } from "./ui/input"
// // import { Label } from "./ui/label"
// // import { Button } from "./ui/button"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
// // import { useContext, useState } from "react"
// // import { AuthContext } from "@/context/AuthContext"
// // import axios from "axios"

// // const apiUri = import.meta.env.VITE_REACT_API_URI

// // const LoginSignupDialog = () => {
// //   const { loading, error, dispatch } = useContext(AuthContext);
// //   const [loginData, setLoginData] = useState({ email: "", password: "" });
// //   const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
// //   const [isOpen ,setIsOpen] = useState(false)

// //   const handleLogin = async (event) => {
// //     event.preventDefault();
// //     dispatch({ type: 'LOGIN_START' });
// //     try{
// //       const res = await axios.post(`${apiUri}/auth/login`, loginData, {withCredentials: true})
// //       dispatch({type:"LOGIN_SUCCESS", payload: res.data})
// //       setLoginData({ email: "", password: "" })
// //     }catch(err){
// //       dispatch({type: "LOGIN_FAILED", payload: err.response.data})
// //     }
// //   };

// //   const handleSignup = async (event) => {
// //     event.preventDefault();
// //     dispatch({ type: 'LOGIN_START' });
// //     try{
// //       const res = await axios.post(`${apiUri}/auth/register`, signupData, {withCredentials: true})
// //       dispatch({type:"LOGIN_SUCCESS", payload: res.data})
// //       setSignupData({ name: "", email: "", password: "" })
// //     }catch(err){
// //       dispatch({type: "LOGIN_FAILED", payload: err.response.data})
// //     }
// //   };

// //   return (
// //     <Dialog open={isOpen} onOpenChange={setIsOpen}>
// //       <DialogTrigger asChild>
// //         <Button onClick={() => setIsOpen(true)} style={{ backgroundColor: "#2563EB", color: "white", padding: "10px 20px"}}>Login</Button>
// //       </DialogTrigger>
// //       <DialogContent style={{ border: "2px solid black", padding: "20px", backgroundColor: "#f0f4f8" }}>
// //         <Tabs defaultValue="login">
// //           <TabsList className="grid w-full grid-cols-2 my-4 gap-5">
// //             <TabsTrigger value="login" style={{ color: "#2563EB", backgroundColor: "#e0e7ff", padding: "10px", borderRadius: "8px" }}>Login</TabsTrigger>
// //             <TabsTrigger value="signup" style={{ color: "#2563EB", backgroundColor: "#e0e7ff", padding: "10px", borderRadius: "8px" }}>SignUp</TabsTrigger>
// //           </TabsList>
// //           {error && <span style={{ color: "#dc2626", fontSize: "12px" }}>{error?.message}</span>}
// //           <TabsContent value="login">
// //             <form onSubmit={handleLogin}>
// //               <Card style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", border:"none" }}>
// //                 <CardHeader>
// //                   <CardTitle>Login</CardTitle>
// //                   <CardDescription>Welcome back</CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="space-y-2">
// //                   <div className="space-y-1">
// //                     <Label htmlFor="email" style={{ color: "#2563EB" }}>Email</Label>
// //                     <Input id="email" autoComplete="email" type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="password" style={{ color: "#2563EB" }}>Password</Label>
// //                     <Input id="password" autoComplete="current-password" type="password" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter className="grid grid-cols-2 justify-center items-center gap-5">
// //                   <Button style={{ backgroundColor: "#2563EB", color: "white", padding: "10px 20px" }} disabled={loading} type="submit">Log in</Button>
// //                   <Button onClick={() => setIsOpen(false)} style={{ backgroundColor: "#fff", color: "#2563EB", padding: "10px 20px", border:"2px solid #2563EB"}}>Cancel</Button>
// //                 </CardFooter>
// //               </Card>
// //             </form>
// //           </TabsContent>
// //           <TabsContent value="signup">
// //             <form onSubmit={handleSignup}>
// //               <Card style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", border:"none" }}>
// //                 <CardHeader>
// //                   <CardTitle>Signup</CardTitle>
// //                   <CardDescription>Create a new account.</CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="space-y-2">
// //                   <div className="space-y-1">
// //                     <Label htmlFor="name" style={{ color: "#2563EB" }}>Name</Label>
// //                     <Input id="name" autoComplete="name" value={signupData.name} required onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="newemail" style={{ color: "#2563EB" }}>Email</Label>
// //                     <Input id="newemail" autoComplete="email" type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="newpassword" style={{ color: "#2563EB" }}>Password</Label>
// //                     <Input id="newpassword" autoComplete="new-password" type="password" required value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter className="grid grid-cols-2 justify-center items-center gap-5">
// //                   <Button style={{ backgroundColor: "#2563EB", color: "white", padding: "10px 20px" }} disabled={loading} type="submit">Sign up</Button>
// //                   <Button onClick={() => setIsOpen(false)} style={{ backgroundColor: "#fff", color: "#2563EB", padding: "10px 20px", border:"2px solid #2563EB"}}>Cancel</Button>
// //                 </CardFooter>
// //               </Card>
// //             </form>
// //           </TabsContent>
// //         </Tabs>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }

// // export default LoginSignupDialog;

// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
// // import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
// // import { Input } from "./ui/input"
// // import { Label } from "./ui/label"
// // import { Button } from "./ui/button"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
// // import { useContext, useState } from "react"
// // import { AuthContext } from "@/context/AuthContext"
// // import axios from "axios"

// // const apiUri = import.meta.env.VITE_REACT_API_URI

// // const LoginSignupDialog = () => {
// //   const { loading, error, dispatch } = useContext(AuthContext);
// //   const [loginData, setLoginData] = useState({ email: "", password: "" });
// //   const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState("login");

// //   const handleLogin = async (event) => {
// //     event.preventDefault();
// //     dispatch({ type: 'LOGIN_START' });
// //     try {
// //       const res = await axios.post(`${apiUri}/auth/login`, loginData, { withCredentials: true })
// //       dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
// //       setLoginData({ email: "", password: "" })
// //     } catch (err) {
// //       dispatch({ type: "LOGIN_FAILED", payload: err.response.data })
// //     }
// //   };

// //   const handleSignup = async (event) => {
// //     event.preventDefault();
// //     dispatch({ type: 'LOGIN_START' });
// //     try {
// //       const res = await axios.post(`${apiUri}/auth/register`, signupData, { withCredentials: true })
// //       dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
// //       setSignupData({ name: "", email: "", password: "" })
// //     } catch (err) {
// //       dispatch({ type: "LOGIN_FAILED", payload: err.response.data })
// //     }
// //   };

// //   return (
// //     <Dialog open={isOpen} onOpenChange={setIsOpen}>
// //       <DialogTrigger asChild>
// //         <Button onClick={() => setIsOpen(true)} style={{ backgroundColor: "#2563EB", color: "white", padding: "10px 20px" }}>Login</Button>
// //       </DialogTrigger>
// //       <DialogContent 
// //         style={{ border: "2px solid black", padding: "20px", backgroundColor: "#f0f4f8"}}
// //       >
// //         <Tabs value={activeTab} onValueChange={setActiveTab}>
// //           <TabsList className="grid w-full grid-cols-2 my-4 gap-5">
// //             <TabsTrigger
// //               value="login"
// //               style={{
// //                 color: "#2563EB",
// //                 backgroundColor: activeTab === "login" ? "#e0e7ff" : "transparent",
// //                 padding: "10px",
// //                 borderRadius: "8px",
// //                 fontWeight: activeTab === "login" ? "bold" : "normal",
// //               }}
// //             >
// //               Login
// //             </TabsTrigger>
// //             <TabsTrigger
// //               value="signup"
// //               style={{
// //                 color: "#2563EB",
// //                 backgroundColor: activeTab === "signup" ? "#e0e7ff" : "transparent",
// //                 padding: "10px",
// //                 borderRadius: "8px",
// //                 fontWeight: activeTab === "signup" ? "bold" : "normal",
// //               }}
// //             >
// //               SignUp
// //             </TabsTrigger>
// //           </TabsList>

// //           {error && <span style={{ color: "#dc2626", fontSize: "12px" }}>{error?.message}</span>}
// //           <TabsContent value="login">
// //             <form onSubmit={handleLogin}>
// //               <Card style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", border: "none" }}>
// //                 <CardHeader>
// //                   <CardTitle>Login</CardTitle>
// //                   <CardDescription>Welcome back</CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="space-y-2">
// //                   <div className="space-y-1">
// //                     <Label htmlFor="email" style={{ color: "#2563EB" }}>Email</Label>
// //                     <Input id="email" autoComplete="email" type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="password" style={{ color: "#2563EB" }}>Password</Label>
// //                     <Input id="password" autoComplete="current-password" type="password" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter className="grid grid-cols-2 justify-center items-center gap-5">
// //                   <Button style={{ backgroundColor: "#2563EB", color: "white", padding: "10px 20px" }} disabled={loading} type="submit">Log in</Button>
// //                   <Button onClick={() => setIsOpen(false)} style={{ backgroundColor: "#fff", color: "#2563EB", padding: "10px 20px", border: "2px solid #2563EB" }}>Cancel</Button>
// //                 </CardFooter>
// //               </Card>
// //             </form>
// //           </TabsContent>

// //           <TabsContent value="signup">
// //             <form onSubmit={handleSignup}>
// //               <Card style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", border: "none" }}>
// //                 <CardHeader>
// //                   <CardTitle>Signup</CardTitle>
// //                   <CardDescription>Create a new account.</CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="space-y-2">
// //                   <div className="space-y-1">
// //                     <Label htmlFor="name" style={{ color: "#2563EB" }}>Name</Label>
// //                     <Input id="name" autoComplete="name" value={signupData.name} required onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="newemail" style={{ color: "#2563EB" }}>Email</Label>
// //                     <Input id="newemail" autoComplete="email" type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <Label htmlFor="newpassword" style={{ color: "#2563EB" }}>Password</Label>
// //                     <Input id="newpassword" autoComplete="new-password" type="password" required value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} style={{ padding: "8px", borderRadius: "8px", borderColor: "#ccc" }} />
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter className="grid grid-cols-2 justify-center items-center gap-5">
// //                   <Button style={{ backgroundColor: "#2563EB", color: "white", padding: "10px 20px" }} disabled={loading} type="submit">Sign up</Button>
// //                   <Button onClick={() => setIsOpen(false)} style={{ backgroundColor: "#fff", color: "#2563EB", padding: "10px 20px", border: "2px solid #2563EB" }}>Cancel</Button>
// //                 </CardFooter>
// //               </Card>
// //             </form>
// //           </TabsContent>
// //         </Tabs>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }

// // export default LoginSignupDialog;



// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
// import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
// import { Input } from "./ui/input"
// import { Label } from "./ui/label"
// import { Button } from "./ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
// import { useContext, useState } from "react"
// import { AuthContext } from "@/context/AuthContext"
// import { AtSign, Lock, User } from "lucide-react"
// import axios from "axios"

// const apiUri = import.meta.env.VITE_REACT_API_URI

// const LoginSignupDialog = () => {
//   const { loading, error, dispatch } = useContext(AuthContext);
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("login");

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     dispatch({ type: 'LOGIN_START' });
//     try {
//       const res = await axios.post(`${apiUri}/auth/login`, loginData, { withCredentials: true })
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
//       setLoginData({ email: "", password: "" })
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILED", payload: err.response.data })
//     }
//   };

//   const handleSignup = async (event) => {
//     event.preventDefault();
//     dispatch({ type: 'LOGIN_START' });
//     try {
//       const res = await axios.post(`${apiUri}/auth/register`, signupData, { withCredentials: true })
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
//       setSignupData({ name: "", email: "", password: "" })
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILED", payload: err.response.data })
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         <Button 
//           onClick={() => setIsOpen(true)} 
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
//         >
//           Login
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="border-2 border-gray-200 rounded-xl p-6 bg-white shadow-xl max-w-md">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="grid w-full grid-cols-2 mb-6 gap-2 bg-gray-100 p-1 rounded-lg">
//             <TabsTrigger
//               value="login"
//               className={`${
//                 activeTab === "login" 
//                   ? "bg-white text-blue-600 font-semibold shadow-sm" 
//                   : "text-gray-600 hover:text-blue-500"
//               } py-3 rounded-md transition-all duration-200`}
//             >
//               Login
//             </TabsTrigger>
//             <TabsTrigger
//               value="signup"
//               className={`${
//                 activeTab === "signup" 
//                   ? "bg-white text-blue-600 font-semibold shadow-sm" 
//                   : "text-gray-600 hover:text-blue-500"
//               } py-3 rounded-md transition-all duration-200`}
//             >
//               Sign Up
//             </TabsTrigger>
//           </TabsList>

//           {error && (
//             <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//               {error?.message}
//             </div>
//           )}

//           <TabsContent value="login" className="mt-0">
//             <form onSubmit={handleLogin}>
//               <Card className="border-none shadow-none">
//                 <CardHeader className="px-1 pt-0 pb-4">
//                   <CardTitle className="text-2xl font-bold text-gray-800">Welcome back</CardTitle>
//                   <CardDescription className="text-gray-500">Enter your credentials to access your account</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4 px-1">
//                   <div className="space-y-2">
//                     <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                         <AtSign size={18} />
//                       </div>
//                       <Input 
//                         id="email" 
//                         autoComplete="email" 
//                         type="email" 
//                         value={loginData.email} 
//                         onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} 
//                         className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
//                       <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
//                     </div>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                         <Lock size={18} />
//                       </div>
//                       <Input 
//                         id="password" 
//                         autoComplete="current-password" 
//                         type="password" 
//                         required 
//                         value={loginData.password} 
//                         onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} 
//                         className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="••••••••"
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex flex-col space-y-3 px-1 pt-2">
//                   <Button 
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200"
//                   >
//                     {loading ? "Processing..." : "Sign in"}
//                   </Button>
//                   <Button 
//                     onClick={() => setIsOpen(false)} 
//                     type="button"
//                     className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg border border-gray-300 transition-colors duration-200"
//                   >
//                     Cancel
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </form>
//           </TabsContent>

//           <TabsContent value="signup" className="mt-0">
//             <form onSubmit={handleSignup}>
//               <Card className="border-none shadow-none">
//                 <CardHeader className="px-1 pt-0 pb-4">
//                   <CardTitle className="text-2xl font-bold text-gray-800">Create account</CardTitle>
//                   <CardDescription className="text-gray-500">Enter your details to register</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4 px-1">
//                   <div className="space-y-2">
//                     <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                         <User size={18} />
//                       </div>
//                       <Input 
//                         id="name" 
//                         autoComplete="name" 
//                         value={signupData.name} 
//                         required 
//                         onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} 
//                         className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="newemail" className="text-gray-700 font-medium">Email</Label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                         <AtSign size={18} />
//                       </div>
//                       <Input 
//                         id="newemail" 
//                         autoComplete="email" 
//                         type="email" 
//                         value={signupData.email} 
//                         onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} 
//                         className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="newpassword" className="text-gray-700 font-medium">Password</Label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                         <Lock size={18} />
//                       </div>
//                       <Input 
//                         id="newpassword" 
//                         autoComplete="new-password" 
//                         type="password" 
//                         required 
//                         value={signupData.password} 
//                         onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} 
//                         className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="••••••••"
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex flex-col space-y-3 px-1 pt-2">
//                   <Button 
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200"
//                   >
//                     {loading ? "Processing..." : "Create account"}
//                   </Button>
//                   <Button 
//                     onClick={() => setIsOpen(false)} 
//                     type="button"
//                     className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg border border-gray-300 transition-colors duration-200"
//                   >
//                     Cancel
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </form>
//           </TabsContent>
//         </Tabs>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default LoginSignupDialog;

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "@/context/AuthContext"
import { AtSign, Lock, User } from "lucide-react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const apiUri = import.meta.env.VITE_REACT_API_URI

const LoginSignupDialog = ({ 
  buttonText = "Login", 
  isInitiallyOpen = false,
  showButtonOnly = true,
  onLoginSuccess = null,
  buttonClassName = "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
}) => {
  const navigate = useNavigate();
  const { loading, error, dispatch, user } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const [activeTab, setActiveTab] = useState("login");

  // Close dialog if user is logged in
  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  // Handle redirect after successful login
  useEffect(() => {
    if (user) {
      const redirectPath = localStorage.getItem('redirectAfterLogin');
      if (redirectPath) {
        localStorage.removeItem('redirectAfterLogin');
        navigate(redirectPath);
      }
      
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    }
  }, [user, navigate, onLoginSuccess]);

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(`${apiUri}/auth/login`, loginData, { withCredentials: true })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      setLoginData({ email: "", password: "" })
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data })
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(`${apiUri}/auth/register`, signupData, { withCredentials: true })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      setSignupData({ name: "", email: "", password: "" })
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data })
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {showButtonOnly && (
        <DialogTrigger asChild>
          <Button 
            onClick={() => setIsOpen(true)} 
            className={buttonClassName}
          >
            {buttonText}
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="border-2 border-gray-200 rounded-xl p-6 bg-white shadow-xl max-w-md">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 gap-2 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="login"
              className={`${
                activeTab === "login" 
                  ? "bg-white text-blue-600 font-semibold shadow-sm" 
                  : "text-gray-600 hover:text-blue-500"
              } py-3 rounded-md transition-all duration-200`}
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className={`${
                activeTab === "signup" 
                  ? "bg-white text-blue-600 font-semibold shadow-sm" 
                  : "text-gray-600 hover:text-blue-500"
              } py-3 rounded-md transition-all duration-200`}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error?.message}
            </div>
          )}

          <TabsContent value="login" className="mt-0">
            <form onSubmit={handleLogin}>
              <Card className="border-none shadow-none">
                <CardHeader className="px-1 pt-0 pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800">Welcome back</CardTitle>
                  <CardDescription className="text-gray-500">Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-1">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <AtSign size={18} />
                      </div>
                      <Input 
                        id="email" 
                        autoComplete="email" 
                        type="email" 
                        value={loginData.email} 
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} 
                        className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Lock size={18} />
                      </div>
                      <Input 
                        id="password" 
                        autoComplete="current-password" 
                        type="password" 
                        required 
                        value={loginData.password} 
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} 
                        className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-3 px-1 pt-2">
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200"
                  >
                    {loading ? "Processing..." : "Sign in"}
                  </Button>
                  <Button 
                    onClick={() => setIsOpen(false)} 
                    type="button"
                    className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg border border-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="mt-0">
            <form onSubmit={handleSignup}>
              <Card className="border-none shadow-none">
                <CardHeader className="px-1 pt-0 pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800">Create account</CardTitle>
                  <CardDescription className="text-gray-500">Enter your details to register</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-1">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User size={18} />
                      </div>
                      <Input 
                        id="name" 
                        autoComplete="name" 
                        value={signupData.name} 
                        required 
                        onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} 
                        className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newemail" className="text-gray-700 font-medium">Email</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <AtSign size={18} />
                      </div>
                      <Input 
                        id="newemail" 
                        autoComplete="email" 
                        type="email" 
                        value={signupData.email} 
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} 
                        className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newpassword" className="text-gray-700 font-medium">Password</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Lock size={18} />
                      </div>
                      <Input 
                        id="newpassword" 
                        autoComplete="new-password" 
                        type="password" 
                        required 
                        value={signupData.password} 
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} 
                        className="pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="••••••••"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-3 px-1 pt-2">
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200"
                  >
                    {loading ? "Processing..." : "Create account"}
                  </Button>
                  <Button 
                    onClick={() => setIsOpen(false)} 
                    type="button"
                    className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg border border-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default LoginSignupDialog;