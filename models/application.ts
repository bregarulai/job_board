import { model, models, Schema } from "mongoose";

const ApplicationSchema = new Schema(
  {
    recruiterId: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    name: String,
    email: String,
    candidateUserId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Profile",
      },
    ],
    status: String,
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
