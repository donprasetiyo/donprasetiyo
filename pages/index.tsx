import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Context } from '../components/ThemeContext'
import styles from '../styles/Home.module.css'

// import { Context } from './components/ThemeContext'
// import { useContext } from 'react'
// import { useEffect } from 'react'

export default function Home() {

  const {themeSettings} = useContext(Context);
  return (
    <div className={`App ${themeSettings.selectedTheme}`}>
      <Content />
    </div>
  )
}
