import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { Context } from './components/ThemeContext'
import { useContext } from 'react'
import { useEffect } from 'react'

function App() {

  const { chosenTheme } = useContext(Context);

  return (
    <div className={`App ${chosenTheme}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
