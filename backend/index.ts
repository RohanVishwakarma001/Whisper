import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 3000;

console.log("Mongo URI:", process.env.MONGODB_URI);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
