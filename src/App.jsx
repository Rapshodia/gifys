import React, {useEffect ,useState} from 'react'
import './App.css'
import getGifs from './service/getGifs'



function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    getGifs({keyword: 'rick'}).then(gifs => setGifs(gifs))

  }, [])

  return (
    <div className="App">
      <section className='App-content'>
       {
         gifs.map(singleGifs =>{
           return <div>
                  <h4>{singleGifs.title}</h4>
                  <img src={singleGifs.url} alt={singleGifs.id}/>
           </div>
           
        } )
       }
        </section>
      
    </div>
  );
}

export default App
