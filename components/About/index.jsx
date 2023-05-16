import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/about.png";
import abzt from "../../public/images/abzt.jpeg";
const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <div>
          <Image
            src={man}
            objectFit="cover"
            alt="card-image"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h4>
            <i className="fa-solid fa-gear"></i> WHO WE ARE??
          </h4>
          <h2>
            Construction solutions <br /> focused future ready
          </h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy data
            foster to collaborative thinking to empowerment.
          </p>
          <div className={styles.abzt}>
            <div>
              <Image
                src={abzt}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.check}>
                <div>
                <i className="fa-solid fa-circle-check"></i>
                &nbsp; &nbsp;Pre-construction services
                </div>
                <div>
                <i className="fa-solid fa-circle-check"></i>
                &nbsp;&nbsp; Industrial manufacturing
                </div>
                <div>
                <i className="fa-solid fa-circle-check"></i>
                &nbsp;&nbsp; Building and construction
                </div>

            </div>
                <button>
                    KNOW MORE
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
