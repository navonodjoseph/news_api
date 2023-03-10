import { useLocation } from 'react-router-dom'

export default function Article (props){

    let location = useLocation (); 
    //console.log("location", location); 
    return (
        <div className ="article">
            <img src={location.state.media['media-metadata'][2].url}/> 
            <h1>{location.state.title}</h1>
            <h4>{location.state.byline}</h4>
            <h4>{location.state.published_date}</h4>
            <p>{location.state.abstract}</p>
            <small>Tags: 
                {location.state.geo_facet}</small>
        </div>
    )

}

