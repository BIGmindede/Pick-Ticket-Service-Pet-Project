import React from 'react'
import Header from '../../components/Header/Header'
import SearchHistory from '../../components/SearchHistory/SearchHistory'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import classes from './UserPage.module.css'

const UserPage = () => {
  return (
    <>
        <header>
          <Header/>
        </header>
        <main className={classes.main}>
          <ProfileCard/>
          <SearchHistory/>
        </main>
    </>
  )
}

export default UserPage