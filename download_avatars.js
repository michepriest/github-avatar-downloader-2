const request = require("request");  
const secrets = require('./secrets.js');
  console.log("Welcome to the GitHubAvatar Downloader!");
const fs = require("fs");
const repoOwner = process.argv[2];
const repoName = process.argv[3]; 


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

// let getAvatarUrl = function(avatarUrl) {
//   console.log(avatarUrl)
// }

function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath))
}

getRepoContributors("jquery", "jquery", function(err, results) {
  console.log("results:", results);
  for(let i = 0; i < results.length; i++) {
    if (!repoOwner || !repoName) {
      console.log("Please enter the repo name and owner.")
    } else {
      downloadImageByURL(results[i].avatar_url, './avatars' + results[i].login)
    }
  } 
}) 
  




