import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/servic-1.jpeg";
import worker2 from "../../public/images/servic-2.jpeg";
import worker3 from "../../public/images/servic-3.jpeg";
import worker4 from "../../public/images/servic-4.jpeg";
import worker5 from "../../public/images/servic-5.jpeg";
import worker6 from "../../public/images/servic-6.jpeg";
import icon from "../../public/images/service-icon1.png";

const Products = () => {
  const assets = [
    {
      img:worker,
      title:"General Construction"
    },
    {
      img:worker2,
      title:"Proper Maintenance"
    },
    {
      img:worker3,
      title:"Project Management"
    },
    {
      img:worker4,
      title:"Virtual design & build"
    },
    {
      img:worker5,
      title:"Preconstruction"
    },    {
      img:worker6,
      title:"Design build"
    }
  ]
  return (
    <div className={styles.products}>
      <div className={styles.caption}>
        <b>WHAT WE DO</b>
        <h2>
          Develop comprehensive solutions <br /> for each project
        </h2>
      </div>
      <div className={styles.grid}>

      {
        assets.map((x,i)=> 
        (
          <div key={i}>
          <div  className={styles.overlay}>
            <div>
              <div className={styles.icon2}>
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
            <div>
                <strong>General construction</strong>
            </div>
            <div className={styles.capt}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro ut earum?
            </div>
            <div>
                READ MORE
            </div>
          </div>
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
            <span>{x.title}</span>
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
        ))
      }
      </div>
    </div>
  );
};

export default Products;
