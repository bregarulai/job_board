import { model, models, Schema } from "mongoose";

const ApplicationSchema = new Schema(
  {
    recruiterId: String,
    name: String,
    email: String,
    candidateUserId: String,
    status: Array,
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  },
  { timestamps: true }
);

const Application =
  models.Application || model("Application", ApplicationSchema);

export default Application;
