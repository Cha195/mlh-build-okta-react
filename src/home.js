import React from 'react'

const Home = () => {

  const handleLogin = () => {
    console.log('logged in')
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home