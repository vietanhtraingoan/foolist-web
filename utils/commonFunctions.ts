import { useRouter } from 'next/router';

export const getUrlParams = (param: string) => {
  const router = useRouter();
  let valueUrl = router.query[param];
  return valueUrl;
};

export function getYoutubeVideoId(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

export function getYoutubeEmbedUrl(src: string, autoplay?: boolean) {
  const videoId = getYoutubeVideoId(src);
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? '1' : 0
  }&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${videoId}`;
  return url;
}
