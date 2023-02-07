import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styled from 'styled-components'

import Layout from '@/components/layout'

export default function Home() {
  return (

    <div>

        <Layout test={"alala"}>
            <h2>Create</h2>
            hello.create
        </Layout>
    </div>
  )
}



const Container = styled.div`

  height: 100vh;
  color:red;
  background-color: #f5f5f5;
  `

