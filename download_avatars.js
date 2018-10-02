const request = require("request");
const secrets = require('./secrets.js');
  console.log("Welcome to the GitHubAvatar Downloader!");

function getRepoContributors(repoOwner, repoName, handleGetAvatarUrl) {
  var options = {
  url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
  headers: {
    "User-Agent" : "request",
    "Authorization" : secrets.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    let contributors = JSON.parse(res.body);
    contributors.forEach((contributor) => {
      handleGetAvatarUrl(contributor.avatar_url)
    });
  });
}

let getAvatarUrl = function(avatarUrl, ) {
  console.log(avatarUrl)
}


getRepoContributors("jquery", "jquery", getAvatarUrl);
