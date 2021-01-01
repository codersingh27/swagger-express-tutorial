const express = require("express");

const router = express.Router();
/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for the main data
 * /api/getData:
 *  get:
 *      tags: [MainData]
 *      parameters:
 *          - name: page_number
 *            default: 1
 *            in: query
 *            schema:
 *              type: integer
 *          - name: page_length
 *            default: 10
 *            in: query
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
router.get("/getData", (req, res) => {
  const { page_number, page_length } = req.query;

  res.send(req.query);
});

/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for the main data
 * /api/login:
 *  post:
 *      tags: [MainData]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              default: coder
 *                          password:
 *                              type: string
 *                              default: coder123
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const out = {
    token: "thisIsAJWTTokenKeepItSafe",
  };
  res.send(out);
});

module.exports = {
  router,
};
