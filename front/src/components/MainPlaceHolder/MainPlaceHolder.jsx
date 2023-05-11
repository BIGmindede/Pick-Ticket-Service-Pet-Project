import React from 'react'
import classes from './MainPlaceHolder.module.css'

const MainPlaceHolder = () => {

  return (
    <div className={classes.wrap}>
        <div className={classes.image}/>
        <h3>Не можете выбрать?</h3>
        <p>Самолет, автобус, поезд? Сравните и найдите наиболее выгодное для вас предложение с нашим сервисом</p>
    </div>
  )
}

export default MainPlaceHolder