import React from 'react'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

const Sample = () => {
    const { data, error }  = useSWR('https://jsonplaceholder.typicode.com/comments', fetcher)

  if (error) return <h1>An error occured!</h1>
  if (!data) return <div className='spinner-container'> <div className="loading-spinner"></div> </div>

  return (
    <div>
      {data.map(comment => (
        <div key={comment.id} className="comment__box">
          <h3>{comment.name}</h3>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
   </div>
  )
}

export default Sample