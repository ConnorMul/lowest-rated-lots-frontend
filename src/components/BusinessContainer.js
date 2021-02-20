import React from 'react'
import BusinessCard from './BusinessCard'

export default function BusinessContainer({ lotResults }) {
    
    const mappedLots = lotResults.sort((result1, result2) => result1.rating - result2.rating)
    .map(result => {
        return <BusinessCard key={result.id} result={result} /> 
    })
    
    return (
        <div className="business-container">
            {mappedLots}
        </div>
    )
}