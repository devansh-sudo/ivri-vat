var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobno: {
    type: Number,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  latitude:{
    type:String
  },
  longitude:{
    type:String
  },
  location: { type: {type:String, enum: ['Point']}, coordinates: {type:[Number]}},
  expertise: {
    type: String,
  },
  token:{
    type:String
  }
});

UserSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("doctors", UserSchema);