import styles from "./index.module.css";
import icon from '../../public/images/icons2.png'
import icon2 from '../../public/images/icons1.png'
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.blob}>
            <div>
            <Image
            src={icon}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}

            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
            </div>
            <div>
            <Image
            src={icon}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}

            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
            </div>
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

        </div>

        <div style={{bottom:'40%',right:'50%'}} className={styles.blob}>
            <div>
            <Image
            src={icon}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}

            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
            </div>
            <div>
            <Image
            src={icon}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}

            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
            </div>
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

        </div>
      <div className={styles.caption}>
        <h1>
          We build something <br /> new and consistent.
        </h1>
        <p>
          No matter where or what you want to build, we mobilize the right
          experts to drive value and realize your project consistent goals.
        </p>

        <button>
            DISCOVER MORE
        </button>
      </div> <br /> <br /> <br />

      <div className={styles.caption}>
        <h1>
          We build stong <br />  and durable things.
        </h1>
        <p>
          No matter where or what you want to build, we mobilize the right
          experts to drive value and realize your project consistent goals.
        </p>

        <button>
            DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;
