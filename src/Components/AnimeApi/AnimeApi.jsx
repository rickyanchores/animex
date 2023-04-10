import React, { useState,useEffect } from 'react'

const AnimeApi = () => {

    const [data,setData] = useState([])


    const fetchData = async () => {

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bc22f11f37mshcbe9e742a1ed8cap1c4dbcjsna5ccd20c55bc',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      };

      let url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc'
        try{
          let resolve = await fetch(url,options)
          let data = await resolve.json()
          console.log(data.data[0])
          setData(data.data[0])
        }
        catch(error){
          console.log("Something went wrong",error)
        }
    }

    const renderData = async () => {
        let data = await fetchData()
    }
    useEffect(() => {
      fetchData()
    })

  return (
    <div className='AnimeApi'>
        <h3>AnimeApi</h3>
        <button className="btn" onClick={renderData}>
          Click
        </button>
        <div className="result">
          <h1>{data.title}</h1>
        </div>
    </div>
  )
}

export default AnimeApi;