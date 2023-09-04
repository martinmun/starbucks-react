import React from 'react'
import LOGO from '../images/starbucks.png'

const Main = () => {
  return (
    <section className="main">
            <div className="main__container-text">
            <h1 className="main__title"> No solo es Café es <span>Starbucks</span></h1>
            <p className="main__description"> 
                Cada día acudimos a trabajar con la esperanza de conseguir dos cosas, compartir el moejor café con nuestros amigos y contribuir a que el mundo sea un poco mejor. Así era cuando abrió la primera tienda Starbucks en 1971 y así continúa siendo hoy.
            </p>
        </div>
        <div className="main__container-logo">
            <img className="main__logo" src={LOGO} alt="Logo"></img>
        </div>
    </section>
  )
}

export default Main