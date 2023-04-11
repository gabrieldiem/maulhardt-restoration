import { brokenVideoThumbnails } from './analisis-2-data';

function sizeOfAvailableThumbnail (videoID) {
  const defaultMaxRes = 'maxresdefault.jpg';
  let maxRes = defaultMaxRes;

  // Check if the maxresdefault size is avaible and if not grab the current max res available
  brokenVideoThumbnails.forEach(video => {
    if (video[0] === videoID) {
      maxRes = video[1];
    }
  });

  return maxRes;
}

function youtubeThumbnailMaxResEndpoint (videoID) {
  const firstPathPart = 'https://img.youtube.com/vi';

  const secondtPathPart = sizeOfAvailableThumbnail(videoID);

  const fullPath = `${firstPathPart}/${videoID}/${secondtPathPart}`;

  return fullPath;
}

function youtubeVideoShortEndpoint (videoID) {
  const firstPathPart = 'https://youtu.be';
  const fullPath = `${firstPathPart}/${videoID}`;

  return fullPath;
}

export { youtubeThumbnailMaxResEndpoint, youtubeVideoShortEndpoint };
