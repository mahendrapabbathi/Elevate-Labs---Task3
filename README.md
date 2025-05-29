# REST API using Node.js and Express.js

A simple RESTful API built with Node.js and Express to manage a list of books. This project supports full *CRUD* operations using in-memory storage.

# Features

- View all books (GET /books)
- Add a new book (POST /books)
- Update an existing book (PUT /books/:id)
- Delete a book (DELETE /books/:id)

# Technologies Used

- Node.js
- Express.js
- Postman (for testing)

# API Endpoints

## Get All Books

GET /books

## Add a Book

POST /books
Body:
{
  "title": "Book Title",
  "author": "Author Name"
}

## Update a Book

PUT /books/:id
Body:
{
  "title": "Updated Title",
  "author": "Updated Author"
}

## Delete a Book

DELETE /books/:id
