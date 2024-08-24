import mongoose from "mongoose";

interface UserAttrs {
    name: string
    email: string
    userId: string
    isBlocked: boolean
}

interface UserModal extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
    name: string;
    email: string;
    isBlocked: boolean;
    updatedAt: string;
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        isBlocked: {
            type: Boolean,
            require: true,
        },
    },
);

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User({
      _id: attrs.userId,
      email: attrs.email,
      name: attrs.name,
      isBlocked: attrs.isBlocked,
    });
  };

const User = mongoose.model<UserDoc, UserModal>("User", userSchema);

export { User };
