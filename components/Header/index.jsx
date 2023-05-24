import styles from "./index.module.css";
import logo from '../../public/images/logo-dark.png'
import Image from "next/image";
import { useRef, useState } from "react";

const Header = () => {
  const [sidebar,setSideBar] = useState(false)
  const [content,setContent] = useState(false)
  const sideContent = useRef(null)

  const show = () => {
    setSideBar(true)
    setTimeout(() => {
      sideContent.current.style.width = '70%'
      sideContent.current.style.visibility = 'visible'
    }, 700);
  }

  const hide = () => {
    setSideBar(false)
    setTimeout(() => {
      sideContent.current.style.width = '0%'
      sideContent.current.style.visibility = 'hidden'
    }, 400);
  }

  return (
    <div className={styles.header}>
      <div style={{right:sidebar ? '0%':'-100%'}} className={styles.sidebar}>
        <div ref={sideContent} className={styles.sidecontent}>
          <div onClick={hide} className={styles.close}>
            &times;
          </div>
          <ul>
            <li>
              <span>Home</span>
              <span><i className="fa fa-plus"></i></span>
            </li>
            <li>About</li>
            <li>
              <span>Services</span>
              <span><i className="fa fa-plus"></i></span>
            </li>
            <li>
              <span>Pages</span>
              <span><i className="fa fa-plus"></i></span>
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.headerOne}>
        <div>
          <div>
            <i className="fa fa-envelope"></i> info@konstruk.com
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
          <div>
            <i className="fa fa-phone"></i> (+1) 7854-333-222
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
          <div>
            <i className="fa fa-marker"></i> 31 New Street, NY, USA
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
        </div>

        <div>
          <div>
            <i style={{color:'#FFB703'}} className="fa fa-clock"></i>  Hours: Mon-Fri: 9.00 am - 7.00 pm
            &nbsp;&nbsp;&nbsp;&nbsp;|
            <i className="fa-brands fa-twitter"></i> 
            <i className="fa-brands fa-instagram"></i> 
            <i className="fa-brands fa-facebook"></i> 
            <i className="fa-brands fa-pinterest"></i> 
          </div>
        </div>

      </div>
      <div className={styles.headerTwo}>
            <div>
            <Image
            src={logo}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}

            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
            </div>
            <div className={styles.links}>
                <ul>
                    <li>Home +</li>
                    <li>About +</li>
                    <li>Services +</li>
                    <li>Pages +</li>
                    <li>Blog </li>
                    <li>Contact </li>
                </ul>
            </div>
            <div className={styles.search}>
                <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    {`LETS`} TALK
                </div>
            </div>
            <div onClick={show} className={styles.bars}>
              <i className="fa-solid fa-bars"></i>
            </div>
      </div>
    </div>
  );
};

export default Header;
