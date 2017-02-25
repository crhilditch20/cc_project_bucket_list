import React from 'react'
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'

const Home = () => (
  <div className="home">
    <h1 className='title'>My Bucket List</h1>
    <LoginBox url="http://localhost:5000/" />
  </div>
)

export default Home