import { model, models, Schema } from "mongoose";

const JobSchema = new Schema(
  {
    recruiterId: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    companyName: String,
    title: String,
    location: String,
    experience: Number,
    description: String,
    skills: String,
    type: String,
    applicants: [
      {
        type: Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

const Job = models.Job || model("Job", JobSchema);

export default Job;
