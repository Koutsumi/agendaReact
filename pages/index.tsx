import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/form'
import Header from '../components/header'
import Footer from '../components/footer'
import MyList from '../components/myList'
import '../services/firebase'


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[100vh] bg-black-100">
      <Header></Header>
      <main className='w-full max-w-5xl md:flex md:flex-row md:items-center md:justify-between flex flex-col items-center justify-center'>
        
        <Form />
        <MyList Form/>
       
        
        
      </main>
      
      <Footer></Footer>
    </div>
  )
}
