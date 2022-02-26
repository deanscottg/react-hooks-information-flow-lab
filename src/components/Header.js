import React from "react";

function Header({onDarkModeCLick, isDarkMode}){
    return(
        <div>
           <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeCLick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> 
        </div>


    )
}


export default Header;