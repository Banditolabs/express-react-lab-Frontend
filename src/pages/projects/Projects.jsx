import {useState, useEffect} from "react"
import './styles.scss'

export default function Projects(props) {
    const [projects, setProjects] = useState(null)

    // create function to make api call
    const getProjectsData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "projects")
        // turn response into JSON
        const data = await response.json()
        // set the project's state to the data
        setProjects(data)
    }
    // make an initial call for the data inside a useEffect, so it only happens once on a component load
    useEffect(() => {getProjectsData()}, [])

    // define a function that will return the JSX needded once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div className="projects-container">
            
                <h1>{project.name}</h1>
                <img id="gipy-image"src={project.image} alt="img" /><br/>
                <div id="button-container">
                    <a href={project.git}>
                        <button>Github</button>
                    </a>
                    <a href={project.live}>
                        <button>live site</button>
                    </a>
                </div>
            </div>
        ))
    }
    return projects ? loaded() : <h1>Loading...</h1>
}