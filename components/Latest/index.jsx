import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/servic-1.jpeg";
import worker2 from "../../public/images/servic-2.jpeg";
import worker3 from "../../public/images/servic-3.jpeg";
import worker4 from "../../public/images/servic-4.jpeg";
import worker5 from "../../public/images/servic-5.jpeg";
import worker6 from "../../public/images/servic-6.jpeg";
import icon from "../../public/images/service-icon1.png";

const Latest = () => {
  return (
    <div className={styles.products}>
      <div className={styles.caption}>
        <b>PROJECTS</b>
        <h2>Latest completed projects</h2>

        <div className={styles.tile}>
          <div>ALL</div>
          <div>ARCHITECTURE</div>
          <div>HOUSE & EXTERIOR</div>
          <div>HOUSE RENOVATION</div>
          <div>INTERIORS</div>
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <Image
            src={worker}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.tab}>
            <span>
              Blue Glass Building <br />
              <span style={{ fontWeight: "lighter" }}> Architecture</span>
            </span>

            <div className={styles.icon}>
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
            </div>
          </div>
        </div>

        <div>
          <Image
            src={worker2}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.tab}>
            <span>
              Blue Glass Building <br />
              <span style={{ fontWeight: "lighter" }}> Architecture</span>
            </span>
            <div className={styles.icon}>
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
            </div>
          </div>
        </div>

        <div>
          <Image
            src={worker3}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.tab}>
            <span>
              Blue Glass Building <br />
              <span style={{ fontWeight: "lighter" }}> Architecture</span>
            </span>
            <div className={styles.icon}>
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
            </div>
          </div>
        </div>

        <div>
          <Image
            src={worker4}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.tab}>
            <span>
              Blue Glass Building <br />
              <span style={{ fontWeight: "lighter" }}> Architecture</span>
            </span>
            <div className={styles.icon}>
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
            </div>
          </div>
        </div>

        <div>
          <Image
            src={worker5}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.tab}>
            <span>
              Blue Glass Building <br />
              <span style={{ fontWeight: "lighter" }}> Architecture</span>
            </span>
            <div className={styles.icon}>
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
            </div>
          </div>
        </div>

        <div>
          <Image
            src={worker6}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.tab}>
            <span>
              Blue Glass Building <br />
              <span style={{ fontWeight: "lighter" }}> Architecture</span>
            </span>
            <div className={styles.icon}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
