import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8000

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
})

app.listen(port,()=>{
  console.log('Server Started at Port, http://localhost:8000')
})
