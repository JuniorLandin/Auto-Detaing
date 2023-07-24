import React from 'react'
import Logo from '../../../public/images/AutoDetaingLogo-removebg-preview.png'
import Image from 'next/image'
import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink'

const Header = () => {
  return (
    <header className={styles.content}>
      <div className={styles.links}>

        <div>
          <a href='/'>
            <Image src={Logo} alt={'Logo'} className={styles.Image}/>
          </a>
        </div>

        <nav className={styles.nav}>
          
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/comprar" activeClassName={styles.active}>
            <a>Comprar</a>
          </ActiveLink>

          <ActiveLink href="/login" activeClassName={styles.active}>
           <a>Login</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
