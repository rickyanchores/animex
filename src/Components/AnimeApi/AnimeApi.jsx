import React, { useState,useEffect } from 'react'

const AnimeApi = () => {

    const [data,setData] = useState([])


    const fetchData = async () => {
        let url = ""
        try{
          let resolve = await fetch(url)
          let data = await resolve.json()
          console.log(setData)
          return setData
        }
        catch(error){
          console.log("Something went wrong",error)
        }
    }

    const renderData = async () => {
        let data = await fetchData()
        let content = `<p>${data}</p>`

    }



    useEffect(() => {
      renderData()
    })

  return (
    <div className='AnimeApi'>
        <h3>AnimeApi</h3>

    </div>
  )
}

export default AnimeApi;