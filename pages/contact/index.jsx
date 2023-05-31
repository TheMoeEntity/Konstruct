import Link from "next/link";
import styles from "./index.module.css";

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
    </div>
  );
};

export default Contact;
