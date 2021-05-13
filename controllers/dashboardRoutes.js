const router = require("express").Router();
const { Post } = require("../models");
const { restore } = require("../models/User");
const withAuth = require("../utils/auth");
const { post } = require("./api");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId,
    },
  })
    .then((db_data) => {
      const posts = db_data.map((post) => post.get({ plain: true }));
      res.render("all-posts-admin", {
        layout: "dashboard",
        posts,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("login");
    });
});
// getroute for new
router.get("/", withAuth, (req, res) => {
  Post.findOne({
    where: {
      userId: req.params.id,
    },
  })
    .then((db_data) => {
      const posts = db_data.map((post) => post.get({ plain: true }));
      res.render("all-posts-admin", {
        layout: "dashboard",
        posts,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("login");
    });
});
// getroute edit by id

module.exports = router;
