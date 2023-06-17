import styles from "./index.module.css";
import Image from "next/image";
import icon from "../../public/images/service-icon1.png";
import { AnimatePresence, motion } from "framer-motion";
import data from "./data";
import { useState, useEffect, useRef } from "react";

const Latest = () => {
  const [displayData, setDisplayData] = useState(data);
  const [active, setActive] = useState("ALL");
  const title = useRef(null);
  const filter = [
    "ALL",
    "ARCHITECTURE",
    "INTERIORS",
    "HOUSE & EXTERIOR",
    "HOUSE RENOVATION",
  ];

  const handleFilter = (category, current) => {
    current = current.toLocaleLowerCase();
    let children = title.current.children;
    for (const child of children) {
      child.style.background = "white";
      if (
        child.textContent.toLocaleLowerCase() === current.toLocaleLowerCase()
      ) {
        child.style.background = "#FFB703";
      }
    }
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(data);
      return;
    }
    if (category === 'architecture') {
      setTimeout(() => {
        setDisplayData(()=> {
          let array = [data[0],data[1]]
          return array
        });
      }, 300);

      return
    }

    const filteredData = data.filter((item) => item.category === category);

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 300);
  };


  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const container = useRef(null);

  const animateIn = () => {
    let width = container.current;
    let height = window.innerHeight;
    let revealpoint = 120;
    let revealTop = width.getBoundingClientRect().top;
    if (revealTop < height - revealpoint) {
      width.classList.add(styles.addWidths);
    }

    let widths = title.current.children;

    for (const child of widths) {
      let revealTop = child.getBoundingClientRect().top;
      let revealpoint = 120;

      if (revealTop < height - revealpoint) {
        child.classList.add(styles.addWidth);
      } else {
        child.classList.remove(styles.addWidth);
      }
    }
  
  };
  return (
    <div className={styles.products}>
      <div ref={container} className={styles.caption}>
        <b>PROJECTS</b>
        <h2>Latest completed projects</h2>

        <div ref={title} className={styles.tile}>
          {filter.map((x, i) => (
            <div onClick={() => handleFilter(x.toLocaleLowerCase(), x)} key={i}>
              {x}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        <AnimatePresence>
          {displayData.map((x, i) => (
            <motion.div
              style={{ overflow: "hidden" }}
              key={i}
              layout
              initial={{ transform: "scale(0) translateY(-300px)" }}
              animate={{ transform: "scale(1) translateY(0px)" }}
              exit={{ transform: "scale(0) translateY(-300px)" }}
            >
              <Image
                src={x.img}
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
                  <span style={{ fontWeight: "lighter" }}> {x.category}</span>
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
            </motion.div>
          ))}
        </AnimatePresence>
        {}
      </div>
    </div>
  );
};

export default Latest;
