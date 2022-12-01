import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Component/Layout/Footer'
import Header from '../Component/Layout/Header'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from '../Component/Element/Hero'
import Banners from '../Component/Element/Banners'
import IngameMec from '../Component/Element/IngameMec'
import Available from '../Component/Element/Available'
import Partners from '../Component/Element/Partners'
import Virtual from '../Component/Element/Virtual'
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Banners/>
    <Virtual/>
    <Available/>  
    <IngameMec/>
    <Available/>
    <Partners/>
    <Available/>
    <Footer/>
    </>
  )
}
