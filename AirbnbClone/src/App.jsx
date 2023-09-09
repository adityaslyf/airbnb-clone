import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jokes from './Jokes'
// import Main from './main'


  

  
     
export default function App() {
    return (
        <div>
            <Jokes
                        
              punchline="ddm" />

              {/* comments = {[{"2","3"}]}
              integer = {0} */}
            <Jokes
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
            />
            <Jokes
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!" 
            />
            <Jokes
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
            />
            <Jokes
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
            />
            <Jokes
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
            />
        </div>
    )
}
       
  

// import React from "react"
// import Joke from "./Joke"

// /*
// Challenge: turn the strings in the array into <h3> elements instead
// */

// export default function App() {
//     const colors = [
//             <h3>Red</h3>, 
//             <h3>Orange</h3>, 
//             <h3>Yellow</h3>,
//             <h3>Green</h3>,
//             <h3>Blue</h3>,
//             <h3>Indigo</h3>,
//             <h3>Violet</h3>
//         ]
//     return (
//         <div>
//             {colors}
//         </div>
//     )
// }




// import React from "react"
// import Joke from "./Joke"
// import jokesData from "./jokesData"

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }
