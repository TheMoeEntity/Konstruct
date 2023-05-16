import styles from "./index.module.css";
import logo from '../../public/images/logo-dark.png'
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
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
            <div>
                <ul>
                    <li>Home +</li>
                    <li>About +</li>
                    <li>Services +</li>
                    <li>Pages +</li>
                    <li>Blog </li>
                    <li>Contact </li>
                </ul>
            </div>
            <div>
                <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    {`LETS`} TALK
                </div>
            </div>
      </div>
    </div>
  );
};

export default Header;
