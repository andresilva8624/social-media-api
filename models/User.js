const { Schema, model } = require('mongoose');


// Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique:true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
          },
        ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
          },
        ],
  },
  
  {
    toJSON: {
      getters: true,
    },
  }
);
// Create a virtual property `commentCount` that gets the amount of comments per post
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
const User = model('User', UserSchema);

module.exports = User;
