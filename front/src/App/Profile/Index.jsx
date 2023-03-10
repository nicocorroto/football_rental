import React from 'react'
import About from '../../components/about/About'
import NavBar from '../../components/nav/NavBar'
import Table from '../../components/table/Table'
import Partes from './components/Partes'

const Index = () => {
  return (
    <>
        <NavBar/>
        <Partes/>
        <About/>
        <Table/>
    </>
  )
}

export default Index