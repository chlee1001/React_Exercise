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
