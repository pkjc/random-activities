const rawData = require("../src/data/raw-data.json");
const readyData = require("../src/data/ready-data.json");
const urlMetadata = require("url-metadata");
const fs = require("fs");

// if length of raw-data.json is greater than length of ready-data.json
// getMetaData for urls in raw starting from ready.length to raw.length
// if image property empty, get screenshot and store in images with path in image property
// update ready.json
module.exports = (req, res) => {
  let responseStr =
    "RAW: " +
    rawData.urls.length +
    "<br/> READY: " +
    readyData.urlsWithMetadata.length;

  if (rawData.urls.length === readyData.urlsWithMetadata.length) {
    res
      .status(200)
      .send("<h1>Data up-to-date!</h1><h2>" + responseStr + "</h2>");
  } else if (rawData.urls.length > readyData.urlsWithMetadata.length) {
    gatherAllUrlsMetadata(rawData.urls)
      .then((urlMetadataResults) => {
        if (urlMetadataResults.length > 0) {
          console.log("gatherAllUrlsMetadata ended...");
          fs.writeFileSync(
            "./src/data/ready-data.json",
            JSON.stringify(
              appendResultsToReadyData(urlMetadataResults),
              null,
              2
            )
          );
        }
        res.status(200).send(readyData.urlsWithMetadata.length);
      })
      .catch((err) => console.log(err));
  }
};

function appendResultsToReadyData(newReadyData) {
  console.log("appendResultsToReadyData started... ");
  const finalReadyData = readyData.urlsWithMetadata.concat(newReadyData);
  readyData.urlsWithMetadata = finalReadyData;
  console.log("appendResultsToReadyData ended...");
  return readyData;
}

async function gatherAllUrlsMetadata(urls) {
  console.log("gatherAllUrlsMetadata started...");
  let url = "";
  let result = "";
  const urlMetadataResults = [];

  const urlMetadataOptions = {
    fromEmail: "nishant.g@gmail.com",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
  };

  for (let i = 0; i < urls.length; i++) {
    url = urls[i];
    if (!readyData.urlsWithMetadata.find((item) => item.url === url)) {
      try {
        result = await urlMetadata(url, urlMetadataOptions);
        urlMetadataResults.push(result);
      } catch (e) {
        console.log("ERROR in: ", url, " ", e);
        continue;
      }
    }
  }

  return urlMetadataResults;
}

// Promise.all(urlMetadataPromises)
//   .then((results) => {
//     res.status(200).send(results);
//   })
//   .catch((e) => {
//     console.log(e);
//     res.status(500).send();
//   });

//   if (!result["og:image"] && !result["image"]) {
//     downloadImage(
//       "https://webshot.deam.io/" +
//         result["source"] +
//         "?width=1280&height=720&delay=500",
//       "./src/assets/images/" + result["source"] + ".png"
//     );
//   }

// function downloadImage(uri, filename, callback) {
//   request.head(uri, function (err, res, body) {
//     console.log("content-type:", res.headers["content-type"]);
//     console.log("content-length:", res.headers["content-length"]);
//     request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
//   });
// }

// function downloadImage(uri, filename) {
//   console.log("downloadImage: ", uri + " " + filename);
//   requestAsync = promisify(require("request"));
//   return requestAsync(uri, { encoding: null })
//     .spread(function (response, body) {
//       if (response.statusCode != 200) return Promise.resolve();
//       return fs.writeFileAsync(filename, body);
//     })
//     .then(function () {
//       console.log();
//     });
// }
