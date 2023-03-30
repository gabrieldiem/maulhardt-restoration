function youtubeThumbnailMaxResEndpoint (videoID) {
  const firstPathPart = 'http://img.youtube.com/vi';
  const secondtPathPart = 'maxresdefault.jpg';

  const fullPath = `${firstPathPart}/${videoID}/${secondtPathPart}`;

  return fullPath;
}

function youtubeVideoShortEndpoint (videoID) {
  const firstPathPart = 'https://youtu.be';
  const fullPath = `${firstPathPart}/${videoID}`;

  return fullPath;
}

export { youtubeThumbnailMaxResEndpoint, youtubeVideoShortEndpoint };
