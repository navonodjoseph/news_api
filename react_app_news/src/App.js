import React, { useEffect, useState } from 'react'
import {Home, Second, Third, Articles} from './pages'; 
import {Routes, Route} from 'react-router-dom'; 
import { BurgerMenu } from "./BurgerMenu"
//import axios from 'axios'; 

function App() {
const URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=BJAmk92ubNxVC9sK7Ca9GjLQjaY3un4a"
const [article, setArticle] = useState([])  

useEffect(() => {
fetch (URL)
    .then((response)=> response.json())
    //.then((nytApi) => console.log(nytApi.results[0].title))
    .then((nytApi) => setArticle(nytApi.results))
  
}, [])
 

  return (
    <div> 
    <BurgerMenu />
    {/* <Articles loading={loading} articles={articles}/> */}
    <Routes>
      <Route path="/" element={<Articles props={article}/>} />
      <Route path="/second" element={<Second />} />
      <Route path="/third" element={<Third />} />
    </Routes> 
 </div>
  );
}

export default App;
