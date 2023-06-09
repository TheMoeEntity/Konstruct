import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { useInView } from "react-intersection-observer";

const Numbers = () => {
  const { ref, inView } = useInView();
  const [numbers, setNumbers] = useState({
    completed: 0,
    happy: 0,
    qualified: 0,
    years: 0,
  });

  const interval = useRef();
  const happyInterval = useRef();
  const qualInterval = useRef();
  const yearInterval = useRef();

  const runNumbers = () => {
    interval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          completed: x.completed + 1,
        };
        return newNum;
      });
    }, 100);
    happyInterval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          happy: x.happy + 1,
        };
        return newNum;
      });
    }, 200);

    qualInterval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          qualified: x.qualified + 1,
        };
        return newNum;
      });
    }, 150);

    yearInterval.current = setInterval(() => {
      setNumbers((x) => {
        const newNum = {
          ...x,
          years: x.years + 1,
        };
        return newNum;
      });
    }, 700);
    
  };

  useEffect(() => {
    if (numbers.completed === 45) {
      clearInterval(interval.current);
      interval.current = null;
    }
    if (numbers.happy === 40) {
      clearInterval(happyInterval.current);
      happyInterval.current = null;
    }
    if (numbers.qualified === 33) {
      clearInterval(qualInterval.current);
      qualInterval.current = null;
    }
    if (numbers.years === 10) {
      clearInterval(yearInterval.current);
      yearInterval.current = null;
    }
  }, [numbers]);
  useEffect(() => {
    if (inView) {
      if (numbers.completed === 45) return
      runNumbers()
    }

    // if (!inView) {
    //   if (numbers.completed === 45) clearInterval(interval.current);
    // }

    return () => {
      clearInterval(interval.current);
      clearInterval(qualInterval.current);
      clearInterval(yearInterval.current);
      clearInterval(happyInterval.current);
      interval.current = null;
      qualInterval.current = null;
      yearInterval.current = null;
      happyInterval.current = null;
    };
  }, [inView]);

  return (
    <div className={styles.numbers}>
      <div className={styles.grid}>
        <div>
          <span>NUMBERS TALK</span>
          <h2>
            Konstruk will help you get <br />
            things complete reality.
          </h2>
          <p>Konstruk will help you get things complete reality.</p>
          <button ref={ref}>CONTACT NOW</button>
        </div>
        <div>
          <div>
            <span>{numbers.completed}+</span>
            <span>Completed Projects</span>
          </div>
          <div>
            <span>{numbers.happy}+</span>
            <span>Happy Clients</span>
          </div>
          <div>
            <span>{numbers.qualified}+</span>
            <span>Qualifed Engineers</span>
          </div>
          <div>
            <span>{numbers.years}+</span>
            <span>Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
