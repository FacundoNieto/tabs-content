import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tabs from '../components/Tabs'

export default function Home() {
  return (
    <div className='App'>
      <Tabs/>
    </div>
  )
}
