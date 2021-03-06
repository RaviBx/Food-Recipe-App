import React from 'react';
import "../RecipeTile.css";

export default function RecipeTile({ recipe }) {
  return(
      

                        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)   

                          != null && (
                          
                          
                          <div className='recipeTile'>
                            
                                    <img src={recipe["recipe"]["image"]} className="recipeTile_img" />

                                    <p className='recipeTile_name'>{recipe["recipe"]["label"]}</p>
                        
                            </div>
                          )

  );
}



