const { Schema, model } = require("mongoose");
const userschema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validation: {
        validator: function (email) {
          const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
          return re.test(email);
        },
        message: "not valid email",
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userschema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userschema);

module.exports = User;
