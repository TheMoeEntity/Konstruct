import styles from "./index.module.css";
import { useRef } from "react";

const Benefits = () => {
  const container = useRef(null);
  const img = useRef(null);
  const accordion = (e) => {
    const height = e.target.nextSibling.nextSibling.style.maxHeight;
    const elemHeight = e.target.nextSibling.nextSibling.scrollHeight + 80;
    const children = container.current.children;

    for (const child of children) {
      child.children[2].style.maxHeight = "0";
      child.children[2].style.padding = "0 40px";
      child.children[2].style.maxHeight = "0";
      child.children[0].style.background = "black";
      child.children[0].style.color = "white";
      child.children[1].style.background = 'transparent'
    }

    e.target.style.background =
      height === "" || height === "0px" ? "#ffb703" : "black";
    e.target.style.color =
      height === "" || height === "0px" ? "black" : "white";
    e.target.children[0].children[0].className =
      height === "" || height === "0px" ? "fas fa-minus" : "fas fa-plus";
    e.target.children[0].style.color =
      height === "" || height === "0px" ? "black" : "#ffb703";
    e.target.nextSibling.nextSibling.style.padding =
      height === "" || height === "0px" ? "5px 40px" : "0 40px";
    e.target.nextSibling.style.background =
      height === "" || height === "0px" ? "#F1F1F1" : "transparent";
    e.target.nextSibling.nextSibling.style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
    img.current.style.transform =
      height === "" || height === "0px" ? "scale(1.22)" : "none";
  };
  return (
    <div className={styles.benefits}>
      <div>
        <div className={styles.caption}>
          <span>YOUR BENEFIT</span>
          <h2>Build better futures with steady focus on quality</h2>
          <div ref={container} className={styles.accordion}>
            <div className={styles.first}>
              <div onClick={e => accordion(e)}>
                <span><i className="fas fa-plus"></i></span> &nbsp;&nbsp;&nbsp; We are a global family that values
                diversity.
              </div>
              <div></div>
              <div>
                Nor is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but occasionally cumstances
                occur in which toil and pain can procuresteady steady.
              </div>
            </div>
            <div className={styles.first}>
              <div onClick={e => accordion(e)}>
              <span><i className="fas fa-plus"></i></span> &nbsp;&nbsp;&nbsp; We own and shape our future.
              </div>
              <div></div>
              <div>
                Nor is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but occasionally cumstances
                occur in which toil and pain can procuresteady steady.
              </div>
            </div>
            <div className={styles.first}>
              <div onClick={e => accordion(e)}>
              <span><i className="fas fa-plus"></i></span> &nbsp;&nbsp;&nbsp; We create sustainable growth.
              </div>
              <div></div>
              <div>
                Nor is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but occasionally cumstances
                occur in which toil and pain can procuresteady steady.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={img}></div>
      </div>
    </div>
  );
};

export default Benefits;
