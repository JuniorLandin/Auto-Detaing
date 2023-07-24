import React from 'react'
import styles from './styles.module.scss'

import Image from 'next/image'
import Logo from '../../../public/images/AutoDetaing.jpg'
import Link from 'next/link'


const Cadastrar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.form}>
          
          
          <Image src={Logo} alt='Logo' className={styles.Image}/>

        <div className={styles.divInput}>
          <input
          type='text'
          placeholder='Digite seu nome'
          />

          <input
          type='text'
          placeholder='Digite seu sobrenome'
          />
        </div>


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
          className={styles.input}
          type='password'
          placeholder='Confirme sua senha'
          />

          <input 
          className={styles.button}
          type='submit'
          placeholder='Cadastro'
          value="Cadastrar"
          />

        </form>
        <p className={styles.paragrafo}>Caso possua cadastro na loja <Link href='/login'>Faça Login</Link></p>
      </div>
    </div>
  )
}

export default Cadastrar
