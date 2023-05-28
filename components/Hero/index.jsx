import styles from "./index.module.css";
import icon from "../../public/images/icons2.png";
import icon2 from "../../public/images/icons1.png";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";


const Hero = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
    visibility:'hidden',
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
      {/* <div className={styles.caption}>
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
      </div> <br /> <br /> <br /> */}

      {/* <div className={styles.caption}>
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
      </div> */}
      <div className="slide-container">
        <Slide arrows={false} infinite={true} duration={`7000`} transitionDuration={`400`}>
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
                {
                  index === 1 ? (
                    <div style={{float:'right', marginRight:'70px',}} className={styles.caption}>
                    <h1>
                      We build stong <br /> and durable things.
                    </h1>
                    <p>
                      No matter where or what you want to build, we mobilize the
                      right experts to drive value and realize your project
                      consistent goals.
                    </p>
  
                    <button>DISCOVER MORE</button>
                  </div>
                  ):(
                    <div className={styles.caption}>
                    <h1>
                      We build stong <br /> and durable things.
                    </h1>
                    <p>
                      No matter where or what you want to build, we mobilize the
                      right experts to drive value and realize your project
                      consistent goals.
                    </p>
  
                    <button>DISCOVER MORE</button>
                  </div>
                  )
                }

              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
