import Head from 'next/head'
import Image from 'next/image'
import Audi from '../../public/images/Audi.jpg'
import Nissan from '../../public/images/NIssan.jpg'
import Volvo from '../../public/images/VOLVO.jpg'
import Porshe from '../../public/images/Porshe.jpg'
import Lamborguini from '../../public/images/Lamborguini.jpg'
import Toyota from '../../public/images/TOYOTA.jpg'
import BMW from '../../public/images/ImageBMW.jpg'
import Mercedes from '../../public/images/Mercedes.jpg'
import Jaguar from '../../public/images/Jaguar.jpg'
import Logo from '../../public/images/AutoDetaing-removebg-preview.png'


import { FiZoomIn } from "react-icons/fi";


import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  const handleImageClick = (marca: any) => {
    router.push(`/comprar?marca=${marca}`);
  };

  return (
    <>
      <Head>
        <title>Auto Detailing</title>
      </Head>
      
      <main className={styles.container}>
        <div className={styles.content}>

          <div  className={styles.divImage}>
            
              <>
                <Image src={Logo} alt='Logo' className={styles.Image}/>
              </> 
  
          <div className={styles.divInput}>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder='Qual veículo está buscando?'
              />
              <FiZoomIn size={20} className={styles.icon} />
            </div>
          </div>

        </div>

          <div className={styles.marcas}>
            
            <div>
              
              <a onClick={() => handleImageClick('Mercedes')}>
                <Image src={Mercedes} alt='Mercedes' className={styles.porshe}/>
              </a>

              <a onClick={() => handleImageClick('Nissan')}>
                <Image src={Nissan} alt='Nissan' className={styles.porshe}/>
              </a>
            
              <a onClick={() => handleImageClick('Lamborguini')}>
                <Image src={Lamborguini} alt='Lamborguini' className={styles.porshe}/>
              </a>
            </div>
            <div>
              <a onClick={() => handleImageClick('Volvo')}>
                <Image src={Volvo} alt='Volvo' className={styles.porshe}/>
              </a>

              <a onClick={() => handleImageClick('Porshe')}>
                <Image src={Porshe} alt='Porshe' className={styles.porshe}/>
              </a>
              
              <a onClick={() => handleImageClick('Jaguar')}>
                <Image src={Jaguar} alt='Jaguar' className={styles.porshe}/>
              </a>
            </div>
            <div>
              <a onClick={() => handleImageClick('BMW')}>
                <Image src={BMW} alt='BMW' className={styles.porshe}/>
              </a>

              <a onClick={() => handleImageClick('Toyota')}>
                <Image src={Toyota} alt='Toyota' className={styles.porshe}/>
              </a>
              
              <a onClick={() => handleImageClick('Audi')}>
                <Image src={Audi} alt='Audi' className={styles.porshe}/>
              </a>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
