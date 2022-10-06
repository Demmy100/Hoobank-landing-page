import './App.css'
import React from 'react'
import styles from './style'
import { Navbar, Hero, Bussiness, Billing, Stats, CardDeal, Testimonials, Clients, CTA, Footer } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
         <Stats />
         <Bussiness />
         <Billing />
         <CardDeal />
         <Testimonials />
         <Clients />
         <CTA />
         <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
