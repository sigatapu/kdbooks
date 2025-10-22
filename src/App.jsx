import React, { useState } from 'react'
import Card from './components/Card'
import { bookData } from './bookData'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter the books based on search input
  const filteredBooks = bookData.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* Search bar section */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by book name or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Book cards section */}
      <div className="main">
        {
          filteredBooks.length > 0 ? (
            filteredBooks.map((i, index) => (
              <Card
                key={index}
                image={i.image}
                name={i.name}
                author={i.author}
                read={i.read}
              />
            ))
          ) : (
            <p className="no-results">No books found.</p>
          )
        }
      </div>
    </>
  )
}

export default App
