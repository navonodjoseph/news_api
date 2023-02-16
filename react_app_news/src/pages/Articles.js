import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function Articles ( props ){
console.log(props.props) 
let story = props.props.map(({title, id, geo_facet, byline, published_date, media, source, type}) => {
    return (
        <>
        <Link to={`/article/${id}`} state={{
            id: id,
            title: title, 
            geo_facet: geo_facet, 
            byline: byline,
            published_date: published_date,
            source: source, 
            type, type

        }}>
            <div>
            {title}
            {id}
            </div>    
        </Link> 
        </>
    )
    })
    return (
        <div className="test">
            {story}
        </div>
     )
}
