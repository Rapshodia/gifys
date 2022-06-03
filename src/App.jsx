import React, {useEffect ,useState} from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import getGifs from './service/getGifs'



function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    getGifs({keyword: 'chile'}).then(gifs => setGifs(gifs))

  }, [])

  return (
    <div className="App">
      <section className='App-content'>
       <ListOfGifs gifs={gifs}/>
        </section>
    </div>
  )
}

export default App
