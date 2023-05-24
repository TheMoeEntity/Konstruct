import styles from "./index.module.css";
import logo from "../../public/images/logo-white.png";
import Image from "next/image";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
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
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor in cididunt ut labore.
          </p>
          <strong>Opening Hours :</strong> Monday Sat: 9am to 6pm

          <div className={styles.icons}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div>
          <h2>CONTACT INFO</h2>
          <div>
            <div>
              <Image
                src={icon1}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>Ta-134/A, Gulshan Badda Link Rd, Dhaka</div>
          </div>

          <div>
            <div>
              <Image
                src={icon2}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>(+234) 807 548 9362,  (+880) 155 69569 366</div>
          </div>
          <div>
            <div style={{width:'50px'}}>
              <Image
                src={icon3}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>mosesnwigberi@gmail.com, moseschukwudinwigberi@gmail.com</div>
          </div>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            General Construction
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Property Maintenance
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Project Management
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Virtual Design & Build
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Preconstruction
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Design Build
          </div>
        </div>
        <div>
          <h2>NEWSLETTER</h2>
          <form action="">
            Tetur adipiscing elit, sed do eiusmod tempor in cididunt ut labore
            <input placeholder="Your Email Address" type="text" />
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© 2023 Konstruk. Designed By Moses Nwigberi</div>
        <div>
            <ul>
                <li>Home <i className="fas fa-circle"></i></li>
                <li>About <i className="fas fa-circle"></i></li>
                <li>Services <i className="fas fa-circle"></i></li>
                <li>Pages <i className="fas fa-circle"></i></li>
                <li>Blog <i className="fas fa-circle"></i></li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
