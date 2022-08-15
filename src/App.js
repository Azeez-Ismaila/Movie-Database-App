import { useState } from "react";
import Search from "./Search";

const App = () => {
  const [movieTitle,setMovieTitle]= useState("")
  const [movieInfo,setMovieInfo] = useState([])
  let title = movieTitle
  // if(movieTitle.split(" ").length > 1){
  //   title = movieTitle.split(" ").join("&").replace("&"," ")
  // }
  if(movieTitle.includes("&")){
    title = movieTitle.split(" ").join("&").replace("&"," ")
    
  }
  return (  
    <div className="app-div">
      <h1>Welcome to My Movie Database App</h1>
      <div>
      <Search movieTitle = {title} setMovieTitle={setMovieTitle} movieInfo ={movieInfo} setMovieInfo = {setMovieInfo}/>
      </div>
    </div>
  );
}
 
export default App;