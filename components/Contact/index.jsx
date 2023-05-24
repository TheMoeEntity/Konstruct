import styles from "./index.module.css";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.grid}>
        <div>
          <span>{`LET'S`} TALK</span>
          <h2>Got an upcoming project?</h2>
          <form action="">
            <div className={styles.formgroup}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <div className={styles.formgroup}>
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Your Website" />
            </div>
          
            <div className={styles.formgroup}>
              <textarea
                placeholder="Your message here"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            {/* <div className={styles.formgroup}>
                <button>SUBMIT NOW</button>
            </div> */}
          </form>
        </div>
        <div>
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
            <span>
                <strong>USA OFFICE</strong> <br /> <br />
                <p>55, Abakaliki road,</p>
                <p>NY 12201, USA</p>
            </span>
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
            <span>
                <strong>EMAIL us</strong> <br /> <br />
                <p>mosesnwigberi@gmail.com,</p>
                <p>moseschukwudinwigberi@gmail.com</p>
            </span>
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
            <span>
                <strong>Call us</strong> <br /> <br />
                <p>(+234) 807-548-9362,</p>
                <p>(+234) 589-8745</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
