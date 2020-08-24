const readyData = require("../src/data/ready-data.json");

module.exports = (req, res) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const randomlyPickedUrlWithMeta =
    readyData.urlsWithMetadata[getRandomInt(readyData.urlsWithMetadata.length)];

  // console.log("randomlyPickedUrlWithMeta: ", randomlyPickedUrlWithMeta);

  res.status(200).send(randomlyPickedUrlWithMeta);
};

// gatherOneUrlMetadata(randomlyPickedUrl)
//   .then((urlMetadatResult) => {
//     res.status(200).send(urlMetadatResult);
//   })
//   .catch((e) => {
//     res.status(500).send("urlMetadatResult");
//   });

// const download = function (uri, filename, callback) {
//   request.head(uri, function (err, res, body) {
//     console.log("content-type:", res.headers["content-type"]);
//     console.log("content-length:", res.headers["content-length"]);

//     request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
//   });
// };

// download(
//   "https://webshot.deam.io/https:/postcorona.me/?height=720&delay=500&width=1280",
//   "./src/assets/images/google.png",
//   function () {
//     console.log("done");
//   }
// );

// gatherAllUrlsMetadata(dataModule.urls, 5, 0, res);

// async function gatherOneUrlMetadata(url) {
//   let urlMetadataResult = "";
//   const urlMetadataOptions = {
//     userAgent:
//       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
//   };

//   try {
//     urlMetadataResult = await urlMetadata(url, urlMetadataOptions);
//   } catch (e) {
//     console.log("ERROR in: ", url, " ", e);
//     throw "error";
//   }

//   return urlMetadataResult;
// }

// async function gatherAllUrlsMetadata(urls, limit, offset, res) {
//   let url = "";
//   let result = "";
//   const urlMetadataResults = [];
//   const urlMetadataOptions = {
//     fromEmail: "hello@pankaj.co",
//     userAgent:
//       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
//   };

//   for (let i = offset; i < limit; i++) {
//     try {
//       url = urls[i];
//       result = await urlMetadata(url, urlMetadataOptions);
//       urlMetadataResults.push(result);
//     } catch (e) {
//       console.log("ERROR in: ", url, " ", e);
//     }
//   }
//   res.status(200).send(urlMetadataResults);
// }

// Promise.all(urlMetadataPromises)
//   .then((results) => {
//     res.status(200).send(results);
//   })
//   .catch((e) => {
//     console.log(e);
//     res.status(500).send();
//   });
