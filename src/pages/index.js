import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <Container>
        hello. my world1111
      </Container>

    </>
  )
}


const Container = styled.div`
  display: flex;

  flex-direction: column; // row
  justify-content: center;
  align-items: center;
  height: 100vh;
  color:red;
  background-color: #f5f5f5;
  `


