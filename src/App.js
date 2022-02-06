import './App.css';
import './key';
import React, { useState } from 'react';
import Axios from 'axios';
import './component/RecipeTile';
import RecipeTile from './component/RecipeTile';

function App() {


  const [query, setquery] = useState("");

  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = "2faec28c";

  const YOUR_APP_KEY = "726c2a74df0895a29f0571a1e988afab";

  var url = `https://api.edamam.com/search?q=${query}&
  app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;





async function getRecipes(){

  
     var result = await Axios.get(url);
     setrecipes(result.data.hits)

     console.log(result.data);

}


const sendData = (e) => {

  e.preventDefault();
  getRecipes();
 
};


  return (
    <div className="app">
     

      <h1 > Food Recipe Plaza </h1>

      <form className='app_searchForm' onSubmit={sendData}>

        <input type="text" className='app_input' placeholder='Enter Ingredients' value={query} 
        
        onChange={(e) => setquery(e.target.value)}/>


        <input type="submit" className='app_submit' value="Search" />

      </form>


      <div className='app_recipes'>
       
        {recipes.map(recipe => {
 
            return <RecipeTile recipe={recipe}/>
              
        })}

      </div>


    </div>
  );
}

export default App;
