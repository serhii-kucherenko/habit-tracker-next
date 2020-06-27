import mongoose, { Schema } from "mongoose";

export const HabitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please, provide a name"],
    trim: true,
  },
});

export default mongoose.models.habits || mongoose.model("habits", HabitSchema);
