import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Component/Layout/Footer'
import Header from '../Component/Layout/Header'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from '../Component/Element/Hero'
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Footer/>
    </>
  )
}
