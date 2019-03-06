import faker from 'faker';

const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, slug, words },
  random: { uuid }
} = faker;
// crete random user data
export const randomUsers = (count = 10) => {
  const arr = [];
  const summary = paragraph();
  for (let i = 0; i < count; i++) {
    arr.push({
      id: uuid,
      title: summary,
      content: `${summary}\n${paragraphs()}`,
      slug: slug
    });
  }

  return arr;
};
