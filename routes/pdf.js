var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.post("/", function (req, res, next) {
  try {
    const { base64, fileName, contentType } = req.body;
    var buf = Buffer.from(base64, "base64");
    // Your code to handle buffer

    console.log("The file was saved!");
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader("Content-Type", "application/pdf");
    res.send(buf);

    // Create a new PDF document
    // res.setHeader(`Content-Disposition', 'attachment; filename="${fileName.replace(/ /g, '_')}.pdf`);
  
  } catch (error) {
    console.log(error);
    return new Response("error", { status: 500 });
  }
});

module.exports = router;
