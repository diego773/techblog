const { Post } = require("../models");

const postdata = [
  {
    title: "iPhone 13",
    username: "Macworld staff",
    post_date: "March 31, 2021 06:30:00",
    user_id: 1,
    comment:
      "It feels like the iPhone 12 only just landed, but we’re already looking ahead to the next one. While we’re not sure of the name—we’re calling it the iPhone 13 here but it might be the iPhone 12s—we’ve already heard a lot about what the next iPhone will bring.",
  },
  {
    title: "Starlink",
    username: "Tom Evslin",
    post_date: "February 05, 2021 07:30:00",
    user_id: 2,
    comment:
      "There is no doubt that Beta Starlink is better than nothing. It is also clearly better than the older satellite services. For many, it will be better than available DSL. Starlink is faster than most wireless ISPs, although their technology is improving as well. ",
  },
  {
    title: "Dodge Coin",
    username: "Cloudbet",
    post_date: "May 06, 2021 05:11:00",
    user_id: 3,
    comment:
      "Dogecoin was started purely as joke fodder, but its 13,000% surge this year has caused crypto and mainstream audiences alike to sit up and take notice. Its more than $80 billion market cap (as of May 5) far exceeds Ford Motor Co. and Twitter. This weekend the self-professed Dogefather, Tesla chief Elon Musk, pushes further into mainstream popular culture, when he hosts Saturday Night Live.",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
