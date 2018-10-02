const request = require("request");
const secrets = require('./secrets.js');
console.log("Welcome to the GitHubAvatar Downloader!");

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
  url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  headers: {
    "User-Agent": "request"
    "Authorization": secrets
    }
  };

  request(url, function(err, res, body) {
    cb(err, body);
  });
 }

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
