import faker from 'faker';
import { capitalizeWords } from './helpers/utilities';
import { useEffect, useState } from 'react';

const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, slug, words },
  random: { uuid }
} = faker;

const recentDates = Array(50)
  .fill()
  .map(() => recent())
  .sort((date1, date2) => {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  });

export const fetchPosts = (count = 1, options = {}) => {
  const posts = Array(count)
    .fill()
    .map(() => {
      const summary = paragraph();
      return {
        id: options.id || uuid().split('-')[0],
        title: capitalizeWords(words()),
        summary,
        content: `${summary}\n${paragraphs()}`,
        date: recentDates.pop() || past(),
        slug: options.slug || slug()
      };
    });

  return {
    posts
  };
};

export function receivePosts() {
  // loading, response, error 값을 다루는 hooks
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // 렌더링 될 때, 그리고 url 이 바뀔때만 실행됨
  useEffect(() => {
    try {
      setLoading(true); // 로딩중
      // const res = await axios.get(url); // 실제 요청

      setResponse(fetchPosts(10));

      //setResponse(res); // response 설정
    } catch (e) {
      setError(e); // error 설정
    }
    setLoading(false); // 로딩 끝
  }, []);
  return [response, loading, error]; // 현재 값들을 배열로 반환
}
