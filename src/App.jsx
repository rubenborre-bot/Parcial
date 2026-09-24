import { useState } from 'react'
import './App.css'
import { Header } from './componentes/Header'
import { Chistes } from './componentes/Chistes'

function App() {
  const [verChistes, setVerChistes] = useState(false)
  const [cargarChiste, setCargarChiste] = useState([])
  const [error, setError] = useState("")

  const API_KEY = import.meta.env.VITE_CHISTES_API_KEY
  const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=chistes%20OR%20humor&language=es`

  async function obtenerChistes() {
    if (verChistes) {
      setVerChistes(false)
      return
    }
    if (cargarChiste.length > 0) {
      setVerChistes(true)
      return
    }
    try {
      setError("")
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error("Error al obtener chistes")
      }
      const data = await response.json()
      setCargarChiste(data.results || [])
      setVerChistes(true)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <Header />
      
      <button onClick={obtenerChistes}>
        {verChistes ? 'Ocultar chistes' : 'Consultar chistes'}
      </button>

      {verChistes && (
        <section className='chistes-grid'>
          {cargarChiste.map(chiste => (
            <Chistes 
              key={chiste.article_id}
              title={chiste.title}
              description={chiste.description}
              link={chiste.link}
              pubDate={chiste.pubDate}
              category={chiste.category}
              language={chiste.language}
            />
          ))} 
        </section>
      )}

      {error && <p>{error}</p>}
    </div>
  )
}

export default App

