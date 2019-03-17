import distanceInWords from 'date-fns/distance_in_words';
import koLocale from 'date-fns/locale/ko';

export const fromNow = d => {
  return distanceInWords(new Date(), d, { locale: koLocale, addSuffix: true });
};

export function updateObject(state, updated) {
  return {
    ...state,
    ...updated
  };
}

export function resizeImage(url: string, width?: number = 256) {
  if (url.indexOf('data:image/') !== -1) return url;
  return `https://thumb.velog.io/resize?url=${url}&width=${width}`;
}

export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};
export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  return scrollHeight - innerHeight - scrollTop;
};
