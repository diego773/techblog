const { Comment } = require("../models");

const commentdata = [
  {
    title: "iPhone 13",
    post_date: "March 31, 2021 06:35:00",
    user_id: 1,
    comment: "Finally",
  },
  {
    title: "Starlink",
    post_date: "February 05, 2021 09:40:00",
    user_id: 2,
    comment: "Wow I want to get that",
  },
  {
    title: "Doge Coin",
    post_date: "May 06, 2021 07:10:00",
    user_id: 3,
    comment: "I bought $100 worth of Doge coins",
  },
];
const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
