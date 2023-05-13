import React from 'react'
import classes from './MainPage.module.css'
import Header from '../../components/Header/Header'
import SearchBox from '../../components/SearchBox/SearchBox'
import TicketList from '../../components/TicketsList/TicketList'
import Footer from '../../components/Footer/Footer'

const MainPage = () => {

  return (
    <>
      <Header/>
      <main className={classes.main}>
          <h1>Подбор билетов для путешествий</h1>
          <p>Подбирайте и сравнивайте нужные билеты в один клик!</p>
          <SearchBox/>
          <TicketList/>
      </main>
      <Footer/>
    </>
  )
}

export default MainPage