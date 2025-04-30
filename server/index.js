import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from 'multer';
import path from 'path';

import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"
import rideRoute from "./routes/ride.routes.js"
import { fileURLToPath } from "url"

const app = express()
const PORT = 8080;

dotenv.config()

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));
};


//middlewares


app.use(cors({
  origin: "http://localhost:5173",  // Set specific frontend origin
  credentials: true, // Allow credentials (cookies, authentication headers)
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));


app.use(cookieParser())
app.use(express.json())

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/rides", rideRoute);


app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: err.status,
    error: errorMessage
  })
})



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/upload/images', express.static(path.join(__dirname, 'upload/images')));

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'upload/images'),
  filename: (req, file, cb) => {
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});


const upload = multer({storage:storage})

//Creating Upload Endpoints for images
// app.use("/images", express.static('upload/images'))
app.use('/images', express.static(path.join(__dirname, 'upload/images')));
app.post("/upload", upload.single('product'),(req,res)=>{
  res.json({
      success:1,
      image_url:`${process.env.SERVER}/images/${req.file.filename}`
  })
})


// export default upload;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use('temp/my-upload', express.static(path.join(__dirname, 'temp/my-upload')));

app.listen(PORT, () => {
  connectDB()
  console.log(`Connected to backend on PORT: ${PORT}`)
})
