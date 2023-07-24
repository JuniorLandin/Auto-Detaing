import React from 'react'
import styles from './styles.module.scss'

import Image from 'next/image'
import Logo from '../../../public/images/AutoDetaing.jpg'
import Link from 'next/link'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.form}>
          
          
            <Image src={Logo} alt='Logo' className={styles.Image}/>

          <input
          className={styles.input}
          type='text'
          placeholder='Digite seu email'
          />

          <input
          className={styles.input}
          type='password'
          placeholder='Digite sua senha'
          />

          <input 
          className={styles.button}
          type='submit'
          placeholder='Login'
          value="Entrar"
          />

        </form>
        <p className={styles.paragrafo}>Se não possuir cadastro <Link href='/cadastrar'>Clique aqui</Link></p>
      </div>
    </div>
  )
}

export default Login
