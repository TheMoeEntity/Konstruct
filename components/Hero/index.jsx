import styles from "./index.module.css";
import icon from "../../public/images/icons2.png";
import icon2 from "../../public/images/icons1.png";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
    visibility: "hidden",
  };

  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
  };
  const slideImages = [
    {
      url: "/images/h1-1.jpeg",
      caption: "Slide 1",
    },
    {
      url: "/images/h1-2.jpeg",
      caption: "Slide 2",
    },
  ];
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

      <div style={{ bottom: "40%", right: "50%" }} className={styles.blob}>
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
      <div className="slide-container">
        <Slide
          arrows={false}
          infinite={true}
          duration={`7000`}
          transitionDuration={`400`}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className={styles.sect}
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
                {index === 1 ? (
                
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.8,
                          duration: 0.8,
                        },
                      },
                    }}
                      style={{ float: "right", marginRight: "70px" }}
                      className={styles.caption}
                    >
                      <h1>
                        We build strong <br /> and durable things.
                      </h1>
                      <p>
                        No matter where or what you want to build, we mobilize
                        the right experts to drive value and realize your
                        project consistent goals.
                      </p>

                      <Link href={'/contact'}><button>DISCOVER MORE</button></Link>
                    </motion.div>
                  
                ) : (
                  <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      scale: 0,
                      opacity: 0,
                      x:0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.9,
                        duration: 1.2,
                        type:'spring',
                        bounce:0.45
                      },
                      // transitionEnd: {
                      //   x:"5px",
                      //   delay:0.2,
                      //   duration: 1.4,
                        
                      // }
                    },
                  }}
                  className={styles.caption}>
                    <h1>
                      We build stong <br /> and durable things.
                    </h1>
                    <p>
                      No matter where or what you want to build, we mobilize the
                      right experts to drive value and realize your project
                      consistent goals.
                    </p>

                    <Link href={'/contact'}><button>DISCOVER MORE</button></Link>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
