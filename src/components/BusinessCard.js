import React from 'react'

export default function BusinessCard({ result }) {
    
    console.log(result)

    const score = (result.review_count * result.rating) / (result.review_count + 1)

    console.log(score)
    
    return (
        <div className="business-card">
            <h3>{result.name}</h3>
            <img src={result.image_url} alt={result.name}/>
            <h5>{result.location.address1}</h5>
            <h6>{result.location.city}, {result.location.state} {result.location.zip_code}</h6>
            <p>{result.rating} stars</p>
            <p>{result.review_count} reviews for this lot so far</p>
            <a href={result.url}>Link to this lots page</a>
            <p>AirGarage Score: {score.toFixed(2)}</p>
        </div>
    )
}