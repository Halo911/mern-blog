import expresss from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = expresss();

//user: halolam
//pwd: dmPRbn9lHqHHorls
//mongodb+srv://halolam:<password>@mern-blog.ke3txuf.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
