const bodyParser = require("body-parser")
module.exports = app => {
  const players = require("../controllers/player.controller.js");

  var router = require("express").Router();
  router.use(bodyParser.json())

  // Player Endpoints
  /**
   * @swagger
   * components:
   *   schemas:
   *     Post:
   *       type: object
   *       required:
   *         - userId
   *         - title
   *         - body
   *       properties:
   *         id:
   *           type: integer
   *           description: The Auto-generated id of a post
   *         userId:
   *           type: integer
   *           description: id of author
   *         title:
   *           type: string
   *           description: title of post
   *         body:
   *           type: string
   *           descripton: content of post *
   *       example:
   *         id: 1
   *         userId: 1
   *         title: my title
   *         body: my article
   *
   */

  /**
   * @swagger
   *  tags:
   *    name: Posts
   *    description: posts of users
   */

  /**
   * @swagger
   * /posts:
   *   get:
   *     summary: Returns all posts
   *     tags: [Posts]
   *     responses:
   *       200:
   *         description: the list of the posts
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Post'
   */
  router.post("/players", players.create);
  router.get("/players", players.findAll);
  router.get("/players/:id", players.findById);
  router.put("/players/:id", players.update);
  router.post("/players/exp/:id", players.getExperience);
  router.delete("/players/:id", players.delete);

  // API prefix
  app.use("/api", router);
};
