import styles from "./index.module.css";

const Numbers = () => {
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
          <button>CONTACT NOW</button>
        </div>
        <div>
          <div>
            <span>0+</span>
            <span>Completed Projects</span>
          </div>
          <div>
            <span>0+</span>
            <span>Happy Clients</span>
          </div>
          <div> 
            <span>0+</span>
            <span>Qualifed Engineers</span>
          </div>
          <div>
            <span>0+</span>
            <span>Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
