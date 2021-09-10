var mongoose = require("mongoose");

var notificationSchema = mongoose.Schema({
  iduser: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  listnotification: [
    {
      idPosts: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Posts",
      },
      iduserNotify: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
      },
      status: {
        type: Boolean,
        require: true,
      },
      title: {
        type: String,
        require: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
var Notification = mongoose.model(
  "Notification",
  notificationSchema,
  "notifications"
);
module.exports = Notification;
