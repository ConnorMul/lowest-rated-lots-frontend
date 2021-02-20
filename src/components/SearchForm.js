import React, { useState } from 'react'

export default function SearchForm({ setLotResults }) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const data = {location: searchTerm}
        fetch("http://localhost:3001/search", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(data => {
            setLotResults(data.businesses)
        })
    }
    
    
    return (
        <div className="search-form-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Search by location.."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button>Search</button>
            </form>
        </div>
    )
}