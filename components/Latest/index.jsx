import styles from "./index.module.css";
import Image from "next/image";
import icon from "../../public/images/service-icon1.png";
import { AnimatePresence, motion } from "framer-motion";
import data from "./data";
import { useState } from "react";

const Latest = () => {
  const [displayData, setDisplayData] = useState(data);
  const [active, setActive] = useState("ALL");
  const filter = [
    "ALL",
    "ARCHITECTURE",
    "INTERIORS",
    "HOUSE & EXTERIOR",
    "HOUSE RENOVATION",
  ];

  const handleFilter = (category) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(data);
      return;
    }

    const filteredData = data.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 300);
  };
  return (
    <div className={styles.products}>
      <div className={styles.caption}>
        <b>PROJECTS</b>
        <h2>Latest completed projects</h2>

        <div className={styles.tile}>
          {filter.map((x, i) => (
            <div onClick={() => handleFilter(x.toLocaleLowerCase())} key={i}>
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
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
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
