
import catalog from './books.json'

export function getBooks() {
  return catalog.books
}

export function getBookById(id) {
  return catalog.books.find(book => book.id === id) ?? null
}
