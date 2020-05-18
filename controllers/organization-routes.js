//requiring our user.js model and passport configurations
let db = require("../models");

module.exports = function(app) {
  //organization save route
    app.post("/organization/submit", function(req, res) {
        db.Organization.create({
            email: req.body.email,
            organizationName: req.body.organizationName,
            websiteUrl: req.body.websiteUrl,
            subject: req.body.subject
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
    });

  //user_data route (to pull user data from database for use in frontend)
    app.get("/organization/organization_data", function(req, res) {
        res.json({
            email: req.organization.email,
            organizationName: req.organization.organizationName,
            websiteUrl: req.organization.websiteUrl,
            subject: req.organization.subject,
            id: req.organization.id
        });
    });
};
