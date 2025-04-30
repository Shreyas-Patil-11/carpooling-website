import User from  "../models/User.js"

// Get user details
export const getUser = async (req, res, next) => {
  try{
    const user = await User.findById(req.params.id).populate('ridesCreated ridesJoined').lean();
    const {email, password, updatedAt, ...detail} = user
    res.status(200).json(detail); 
  }catch(err){
    next(err);
  }
}

export const getAllUsers = async(req, res, next)=>{
  try{
    const users = await User.find()
    res.status(200).json(users)
  }catch(err){
    next(err)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const { name, phoneNumber, profilePicture, age, profile } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          phoneNumber,
          profilePicture,
          age,
          profile
      }},
      {new:true, select: '-password'}    
    )
    res.status(200).json(updatedUser)
  }catch (err) {
    next(err)
  }
}

export const deleteUser = async (req, res, next) => {
  try{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted.")
  }catch{
    next(err)
  }
}











// export const uploadProfilePicture = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const filePath = `temp/my-upload/${req.file.filename}`; // store relative path

//     const updatedUser = await User.findByIdAndUpdate(userId, {
//       profilePicture: filePath
//     }, { new: true });

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };

export const uploadProfilePicture = async (req, res, next) => {
  try {
    const userId = req.params.id;
    // console.log("REQ.FILE:", req.file);
    const filePath = `${process.env.SERVER}/images/${req.file.filename}`; // Now valid

    console.log("REQ.FILE:", req.file); // Should now include 'filename'
  res.json({
    success: 1,
    image_url: `${process.env.SERVER}/images/${req.file.filename}`
  });

    const updatedUser = await User.findByIdAndUpdate(userId, {
      profilePicture: filePath
    }, { new: true });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
