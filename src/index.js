import express from "express";
import cors from "cors";
import 'dotenv/config';
import bdConnect from "./config/dbConnect.js";
import routes from "./routes/routes.js";
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
  }));
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 5079;
app.get("/", (req, res) => {
    try{
      res.status(200).json({message : "hello from backend"})
    }catch(error){
      console.log(error);
    }
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    bdConnect();
});
