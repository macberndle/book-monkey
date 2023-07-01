import { Book } from 'src/app/shared/book';

export function book(value: number): Book {
  return {
    authors: [],
    isbn: `012345678${value}`,
    title: value.toString(),
    description: '',
    published: '',
    subtitle: '',
    thumbnailUrl: ''
  } as Book;
}
