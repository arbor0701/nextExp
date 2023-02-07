import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styled from 'styled-components'
import { useRouter } from 'next/router'







export default function Read() {

    const router = useRouter()
    console.log(router.query.id)
  return (

    <div>

    
        <header>
        <a href='/'>web</a>
        </header>

      <nav>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
        </ol>
      </nav>
      <article>
          <h2>hello</h2>
          hello,read{router.query.id}
      </article>
      <ul>
        <li><a href='/create'>create</a></li>
        <li><a href='/update'>update</a></li>
        <li><a href ='/delete'>delete</a> </li>
 
      </ul>



    </div>
  )
}



// const Container = styled.div`

//   height: 100vh;
//   color:red;
//   background-color: #f5f5f5;
//   `

