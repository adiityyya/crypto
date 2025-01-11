import express from "express";
import "./jobs/cryptoJob.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";

const app = express();
const port = 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api", cryptoRoutes);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
