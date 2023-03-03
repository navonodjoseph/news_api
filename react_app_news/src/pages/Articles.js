import React from 'react'; 
import Home from './Home'
import TopStory from './TopStory'
import ImageFormat from './ImageFormat';
import { Link } from 'react-router-dom'; 

export default function Articles ( props ){
console.log(props.props)

let story = props.props.map(({ abstract, title, id, geo_facet, byline, published_date, media, source, type, des_facet}) => {
    return (
        <div className="homePage">
            <div className="link">
                 <Link to={`/article/${id}`} state={{
                abstract: abstract,
                id: id,
                title: title, 
                geo_facet: geo_facet, 
                byline: byline,
                published_date: published_date,
                source: source, 
                type: type,
                media: media[0], 
                des_facet: des_facet
                }}>
           
            <div className="card">
                <div className="title">
                {title}
                </div>
                {media && media[0] && media[0]['media-metadata'] && 
                <ImageFormat 
                className={media} 
                component="img" 
                src={media[0]['media-metadata'][2]?.url 
                ? `${media[0]['media-metadata'][2].url}` 
                : 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Red_Exclamation_Dot.png'
                    }
                />    
            }
                    
            </div>  
        </Link> 
        </ div>
    </div>
    )
    })
    return (
        <div className="container">
            <div className="lede">
                <TopStory/> 
                {story[0]}
            </div>
           
            <div className="storyTwo"> {story[1]}</div>
            <div className='storyThree'>{story[2]}</div>
            <div className='storyFour'>{story[3]}</div>
            <div className='storyFive'>{story[4]}</div>
            <div className='storySix'>{story[5]}</div>
        </div>
     )
}
