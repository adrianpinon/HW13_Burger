const express = require("express")
const router = express.Router();

const burger = require("...");

router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    cat.create([
      "name", "devour"
    ], [
      req.body.name, req.devour.devour
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
      devour: req.body.devour
    }, condition, function(result) {
      if (result.changedRows === 0) {  
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    cat.delete(condition, function(result) {
      if (result.affectedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js
  module.exports = router;
  