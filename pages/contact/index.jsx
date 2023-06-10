import Link from "next/link";
import styles from "./index.module.css";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.caption}>
          <div className={styles.line}></div>
          <div>
            <h2>Contact Us</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              porro quisquam repudiandae explicabo aliquid quod odit aperiam
              saepe eligendi quos.
            </p>
          </div>
          <div className={styles.copyrights}>
            <div>
              <Link href={`/`}>Home</Link>
            </div>
            <div>
              <i className="fas fa-circle"></i>
            </div>
            <div>
              <Link href={`/contact`}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.maps}>
        <div>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              width="100%"
              height="550"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <div>
          <form action="">
            <div className={styles.line}></div>
            <h1>Get in touch</h1>
            <div className={styles.formGroup}>
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="text" />
            </div>
            <div className={styles.formGroup}>
              <input placeholder="Phone Number" type="text" />
              <input placeholder="Your Website" type="text" />
            </div>
            <textarea
              placeholder="Your Message Here"
              name=""
              id=""
              cols="30"
              rows="30"
            ></textarea>
            <button className={styles.btn} type="submit">
              SUBMIT NOW
            </button>
          </form>
        </div>
        <div></div>
      </div>
      <div className={styles.cards}>
        <div>
          <div className={styles.icons}>
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
          <h2>
            <strong>Office Address</strong>
          </h2>
          <div>
            <p>Ta-134/A, Gulshan Badda <br /> Link Rd, Dhaka</p>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
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
          <h2>
            <strong>Email us</strong>
          </h2>
          <div>
            <p>mosesnwigberi@gmail.com <br /> moses@icloud.com</p>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
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
          <h2>
            <strong>Call us</strong>
          </h2>
          <div>
            <p>(+234) 807 548-9362 <br /> (+234) 807 548-9362</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
