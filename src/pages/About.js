import {useState, useEffect} from "react"

export default function About (props) {
    // create state to hold about data
    const [about,setAbout] = useState(null)

    // create funtion to make api call
    const getAboutData = async ()=> {
    // make api call and get response
    const response = await fetch(props.URL + "about")
    // turn response into javascript object
    const data = await response.json()
    // set the about state to the data
    setAbout(data)
    }

    useEffect(() => {
        getAboutData()
    }, [])

  // make an initial call for the data inside a useEffect, so it only happens once on component load
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h1>{about.email}</h1>
            <p>{about.bio}</p>
        </div>
    )
    // if data arrives return the result of loaded, if not, an h1 that says loading
        return about ? loaded() : <h1>Loading...</h1>
    }