// import React, {useEffect} from 'react'; 
// import Arcticle from './Arcticle'

// export default function Articles({ loading, articles, getTopArticles}){
//     const classes = useStyles(); 
//     useEffect (()=> {
//         getTopArticles("world");
//     }, []); 
    
//     return (
//         <>
//         { loading? 
//         (
//             "Loading"
//         ):( 
//         <>
//         <div className ={classes.buttons}>
//             <Button onClick={() => {getTopArticles('world'); }}>World</Button>
//             <Button onClick={() => {getTopArticles('tech'); }}>Tech</Button>
//             <Button onClick={() => {getTopArticles('us'); }}>US News</Button>
//         </div>
//         <NavLink to="/">
//             <Link component="button">Go Back</Link>
//         </NavLink>

//         <div className = {classes.root}> 
//             {topStories.map((topstory) => ( 
//                 <TopStory topstory={topstory} />
//             ))}
//             </div>
//          </>
//         )}
//     ); 
// }
 
//  export default Articles; 