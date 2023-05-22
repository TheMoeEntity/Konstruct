import styles from './index.module.css'

const Choose = () => {
  return (
    <div className={styles.choose}>
        <div>
          <div></div>
        </div>
        <div>
          <span>WHY CHOOSE US</span>
          <h2>Why you should choose our Konstruk platform.</h2>
          <p>Nor is there anyone who loves or pursues or desires to obtain pain 
            of the itself, because it is pain, but occasionally cumstances.
          </p>
          <div className={styles.why}>
            <div>
              <span>1</span><span>Best sustainabiity</span>
            </div>
            <div>
              <span>2</span><span>Health and safety</span>
            </div>
            <div>
              <span>3</span><span>Modern methods</span>
            </div>
            <div>
              <span>4</span><span>Certified engineer</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div>Working skill</div>
            <div><div><div>95%</div></div></div>
          </div>
          <div className={styles.rating}>
            <div>Client rating</div>
            <div>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Choose