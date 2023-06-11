import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/about.png";
import abzt from "../../public/images/abzt.jpeg";
import shape from "../../public/images/shape-1.png";
import one1 from "../../public/images/one1.png";
import one2 from "../../public/images/one2.png";
import one3 from "../../public/images/one3.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
const About = () => {
  const {ref,inView} = useInView()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    
    if (inView) {
      setVisible(true)
    }

    if (!inView) {
      setVisible(false)
    }
  
  }, [inView])
  
  return (
    <div ref={ref} className={styles.about}>
      <div className={styles.cards}>
        
        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one1}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong>Sustainable Systems</strong>
          </div>
          <div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews iterative approaches to corporate.
            </p>
          </div>
        </div>


         <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one2}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong>Quality Services</strong>
          </div>
          <div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews iterative approaches to corporate.
            </p>
          </div>
        </div>


        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one3}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong>Remodeling Experts</strong>
          </div>
          <div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews iterative approaches to corporate.
            </p>
          </div>
        </div>
      </div>


      <div className={styles.main}>
        <div className={visible ? `${styles.man} ${styles.animClass}`: styles.man}>
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
        <div className={visible ? `${styles.stuff} ${styles.animClass2}`: styles.stuff}>
          <div className={styles.img}>
            <div>
              <Image
                src={shape}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <h4>&nbsp; &nbsp; &nbsp;WHO WE ARE??</h4>
          <h2>Construction solutions focused future ready</h2>
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
            <div>
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
            </div>
            <button>KNOW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
