import Articles from "./Articles"
export default function ImageFormat (story) {

<Articles />
console.log("imageformat", story.src); 
let image = story.src
return (
    <div className="mainPageImg">
   <img src={image} alt="image"/>
   </div>
    )
}