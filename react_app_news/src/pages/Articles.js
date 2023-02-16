import React from 'react'; 
import Home from './Home'
import { Link } from 'react-router-dom'; 

export default function Articles ( props ){
//console.log(props.props[0].media["media-metadata"][0][2]["url"]) 
let story = props.props.map(({title, id, geo_facet, byline, published_date, media, source, type}) => {
    return (
        <div className="homePage">
            <div className="link">
                 <Link to={`/article/${id}`} state={{
                id: id,
                title: title, 
                geo_facet: geo_facet, 
                byline: byline,
                published_date: published_date,
                source: source, 
                type: type,
                media: media[0]
                }}>
            <div>
                <ul>
                    {/* <img src={media['media-metadata'][2].url} />  */}
                    <img src={media['media-metadata']}/>
                    <li>{title}</li>
                </ul>
            </div>    
        </Link> 
        </ div>
    </div>
    )
    })
    return (
        <div className="test">
            <Home />
            {story}
        </div>
     )
}
