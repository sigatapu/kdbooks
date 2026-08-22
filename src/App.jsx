import React, { useState } from 'react'
import Card from './components/Card'
import { bookData } from './bookData'

const App = () => {
  // ✅ Persist login state using localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  )

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Set your login credentials here
  const validUsername = 'kd'
  const validPassword = 'Krishna_Datta'

  // Filter books based on search input
  const filteredBooks = bookData.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true)
      localStorage.setItem("isLoggedIn", "true") // ✅ save login
    } else {
      alert('Invalid username or password!')
    }
  }

  // ✅ Logout function
  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("isLoggedIn")
  }

  return (
    <>
      {!isLoggedIn ? (
        // Login Page
        <div className="login-page">
          <h2>Login to View Books</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        // Main Books Page
        <>
          {/* ✅ Logout Button */}
          

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by book name or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div style={{ textAlign: 'right' }}>
            <button className='card-button' onClick={handleLogout}>Logout</button>
          </div>
          </div>

          <div className="main">
            {filteredBooks.length > 0 ? (
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
            )}
          </div>
        </>
      )}
    </>
  )
}

export default App