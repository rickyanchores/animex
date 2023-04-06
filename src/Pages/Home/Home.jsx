import React from 'react'
import Card from '../../Components/Card/Card';
import AnimeApi from '../../Components/AnimeApi/AnimeApi';

const Home = () => {
  return (
    <div className='Home'>
        <h1>Home</h1>
        <p>This is Home Section</p>
        <Card />
        <AnimeApi />
    </div>
  )
}

export default Home;