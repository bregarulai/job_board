import { model, models, Schema } from "mongoose";

const JobSchema = new Schema({
  recruiterId: String,
  companyName: String,
  title: String,
  location: String,
  experience: String,
  description: String,
  skills: String,
  applicants: [
    {
      name: String,
      email: String,
      userId: String,
      status: String,
    },
  ],
});

const Job = models.Job || model("Job", JobSchema);

export default Job;
