import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/1.jpeg";
import worker2 from "../../public/images/22.jpeg";
import worker3 from "../../public/images/3.jpeg";
const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.title}>
        <span>NEWS & BLOG</span>
        <h2>Our latest news post and articles?</h2>
      </div>
      <div className={styles.grid}>
        <div>
          <div className={styles.img}> 
            <Image
              src={worker}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <span>
                <i className="fa fa-calendar"></i>
                23 May, 2023
              </span>
              <span>
                <i className="fa fa-user"></i>
                Admin
              </span>
            </div>
            <p>We really appreciate content about the construction</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker2}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <span>
                <i className="fa fa-calendar"></i>
                23 May, 2023
              </span>
              <span>
                <i className="fa fa-user"></i>
                Admin
              </span>
            </div>
            <p>We really appreciate content about the construction</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div>
          <div className={styles.img}>
            <Image
              src={worker3}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.capt}>
            <div className={styles.date}>
              <span>
                <i className="fa fa-calendar"></i>
                23 May, 2023
              </span>
              <span>
                <i className="fa fa-user"></i>
                Admin
              </span>
            </div>
            <p>We really appreciate content about the construction</p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>

      <div className={styles.upcoming}>
        <div className={styles.title}>
          <span>WORK WITH US!</span>
          <h2>Have any upcoming projects?</h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking
          </p>
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default News;
