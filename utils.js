const buildRequestUrl = (
  artistId = "",
  baseUrl = "https://musicbrainz.org/",
  path = "ws/2/artist/",
  format = "json"
) => {
  return `${baseUrl}${path}${artistId}?fmt=${format}`;
};

module.exports = { buildRequestUrl };
