// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.v1p4beta1.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName =
  "https://i.pinimg.com/736x/a6/cd/58/a6cd588758163eef3b2a0f7a9aa4319b.jpg";

async function imgGen() {
  // Performs label detection on the local file

  const [labelResult] = await client.labelDetection(fileName);
  const [safeSearchResult] = await client.safeSearchDetection(fileName);
  const [objectResult] = await client.objectLocalization(fileName);

  const labels = labelResult.labelAnnotations;
  const safeSearch = safeSearchResult.safeSearchAnnotation;
  const objects = objectResult.localizedObjectAnnotations;

  console.log("Labels:");
  labels.forEach((label) => console.log(label.description));

  console.log("Safe Search:");
  console.log(safeSearch);

  console.log("Objects:");
  objects.forEach((label) => console.log(label.name));
}

imgGen();
