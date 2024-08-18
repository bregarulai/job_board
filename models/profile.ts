import { Document, model, models, Schema } from "mongoose";

export interface IProfile extends Document {
  userId: string;
  role: string;
  email: string;
  isPremiumUser: boolean;
  membershipType?: string;
  memebershipStartDate?: string;
  membershipEndDate?: string;
  recruiterInfo?: {
    name: string;
    companyName: string;
    companyRole: string;
    jobsPosted: string[];
  };
  candidateInfo?: {
    name: string;
    currentJobLoacation: string;
    preferedJobLocation: string;
    currentSalary: string;
    currentCompany: string;
    noticePeriod: string;
    skills: string;
    previousCompanies: string;
    totalExperience: number;
    college: string;
    collageLocation: string;
    gaduatedYear: string;
    linkedinProfile: string;
    githubProfile: string;
    resume: string;
  };
}

const ProfileSchema = new Schema(
  {
    userId: {
      type: String,
    },
    role: {
      type: String,
    },
    email: {
      type: String,

      unique: true,
    },
    isPremiumUser: {
      type: Boolean,
    },
    membershipType: {
      type: String,
    },
    memebershipStartDate: {
      type: String,
    },
    membershipEndDate: {
      type: String,
    },
    recruiterInfo: {
      name: {
        type: String,
      },
      companyName: {
        type: String,
      },
      companyRole: {
        type: String,
      },
      jobsPosted: [
        {
          type: Schema.Types.ObjectId,
          ref: "Job",
        },
      ],
    },
    candidateInfo: {
      name: {
        type: String,
      },
      currentJobLoacation: {
        type: String,
      },
      preferredJobLoacation: {
        type: String,
      },
      currentSalary: {
        type: String,
      },
      currentCompany: {
        type: String,
      },
      noticePeriod: {
        type: String,
      },
      skills: {
        type: String,
      },
      previousCompanies: {
        type: String,
      },
      totalExperience: {
        type: Number,
      },
      college: {
        type: String,
      },
      collegeLocation: {
        type: String,
      },
      graduationYear: {
        type: String,
      },
      linkedinProfile: {
        type: String,
      },
      githubProfile: {
        type: String,
      },
      resume: {
        type: String,
      },
      applications: [
        {
          type: Schema.Types.ObjectId,
          ref: "Application",
        },
      ],
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", ProfileSchema);
export default Profile;
