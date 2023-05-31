import styles from "./index.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Choose = () => {
  const { ref, inView } = useInView();
  const [wif,setWif] = useState(0)
  const interval = useRef()
  useEffect(()=> {
    if (wif === 95) {
      clearInterval(interval.current)
      interval.current = null
    }
  },[wif])
  const test = useRef(null);
  const changeWidth = amount => {
    test.current.style.width = `${amount}%`
  }
  useEffect(() => {
    const width = test.current;
    
    if (inView) {
      const time = setTimeout(() => {
        changeWidth(95)
        interval.current = setInterval(() => {
          setWif(x=> x+5)
        }, 80);
      }, 900);
      return ()=> clearTimeout(time)
    }

    if (!inView) {
      width.style.width = '0%'
      clearInterval(interval.current)
      interval.current = null
      setWif(0)
    }
  }, [inView]);
  return (
    <div className={styles.choose}>
      <div>
        <div></div>
      </div>
      <div>
        <span>WHY CHOOSE US</span>
        <h2>Why you should choose our Konstruk platform.</h2>
        <div>
          <p>
            Nor is there anyone who loves or pursues or desires to obtain pain
            of the itself, because it is pain, but occasionally cumstances.
          </p>
        </div>
        <div className={styles.why}>
          <div>
            <span>1</span>
            <span>Best sustainabiity</span>
          </div>
          <div>
            <span>2</span>
            <span>Health and safety</span>
          </div>
          <div>
            <span>3</span>
            <span>Modern methods</span>
          </div>
          <div ref={ref}>
            <span>4</span>
            <span>Certified engineer</span>
          </div>
        </div>
        <div className={styles.skill}>
          <div>Working skill</div>
          <div>
            <div ref={test}>
              <div>{wif}%</div>
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          <div>Client rating</div>
          <div>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
