import styles from "./index.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef } from "react";
import testi from "../../public/images/testi1.jpeg";
import test2 from "../../public/images/testi2.jpeg";
import Image from "next/image";

const Reviews = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  const test = useRef(null);
  const nextPrev = (type) => {
    const sliderr = test.current.nextSibling.nextSibling;
    const height = sliderr.clientWidth;
    if (type === "next") {
      sliderr.scrollBy(height,0);
    } else if (type == "prev") {
      sliderr.scrollLeft -= height;
    }
  };

  return (
    <div className={styles.reviews}>
      <div className={styles.grid}>
        <div>
          <div className={styles.title}>
            <span>TESTIMONIALS</span>
            <h2 ref={test}>Our client reviews.</h2>
            <div className={styles.buttons}>
                <div onClick={() => nextPrev("prev")}>&larr;</div>
                <div onClick={() => nextPrev("next")}>&rarr;</div>
              </div>
            <div ref={sliderRef} className={`${styles.slide} keen-slider`}>
              <div className="keen-slider__slide number-slide1">
                <span className="fa-solid fa-quote-left"></span>
                <p>
                  <i>
                    Capitalize on low hanging fruit to identify ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway.
                  </i>
                </p>
                <div className={styles.profile}>
                  <Image
                    src={testi}
                    objectFit="cover"
                    alt="card-image"
                    layout="fill"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.capt}>
                  <strong>MOSES C. NWIGBERI</strong>
                  CEO, Brick Consulting
                </div>
              </div>
              <div className="keen-slider__slide number-slide2">
              <span className="fa-solid fa-quote-left"></span>
                <p>
                  <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque nobis iste temporibus facilis repellendus est, ad quisquam perspiciatis dolorem sint quam sed eum voluptatibus corporis laborum.
                  </i>
                </p>
                <div className={styles.profile}>
                  <Image
                    src={test2}
                    objectFit="cover"
                    alt="card-image"
                    layout="fill"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.capt}>
                  <strong>HILDA BACCI</strong>
                  Guiness World record holder
                </div>
              </div>
              <div className="keen-slider__slide number-slide3">
              <span className="fa-solid fa-quote-left"></span>
                <p>
                  <i>
                    Capitalize on low hanging fruit to identify ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway.
                  </i>
                </p>
                <div className={styles.profile}>
                  <Image
                    src={testi}
                    objectFit="cover"
                    alt="card-image"
                    layout="fill"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.capt}>
                  <strong>ANTHONY CHINEDU</strong>
                  Father, CEO AVREPM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <span>TEAM MEMBERS</span>
            <h2>Expert team members.</h2>
            <div className={styles.buttons}>
                <div>&larr;</div>
                <div>&rarr;</div>
              </div>
            <div style={{height:'470px'}} className={styles.slide}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
