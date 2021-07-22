import React, { useState, useRef, useEffect } from "react";
import interpolator from "linear-interpolator";
import mydp from "../me.jpeg";

const calcY = interpolator([
  [0, 20],
  [300, -20],
]);

const calcX = interpolator([
  [0, -20],
  [200, 20],
]);

const openProfile = () => window.open("https://www.linkedin.com/in/0xshri/");

function NameCard() {
  const [mouseOver, setMouseOver] = useState(false);
  const [transition, setTransition] = useState({});
  const isReady = useRef(false);
  const card = useRef();

  const onMouseOver = (e) => {
    if (!isReady.current) {
      return;
    }
    setMouseOver(true);
  };
  const onMouseLeave = (e) => {
    if (!isReady.current) {
      return;
    }
    setTransition((val) => ({ transition: "all ease-in-out .5s" }));
    card.current.style.setProperty(
      "transform",
      `perspective(400px) scale3d(1,1,1)`,
      "important"
    );
    setImmediate(setMouseOver(false));
    setTimeout(() => setTransition({}), 600);
  };
  const onMouseMove = ({ clientX, clientY }) => {
    if (!isReady.current) {
      return;
    }

    const x = clientX - card.current.offsetLeft;
    const y = clientY - card.current.offsetTop;
    setTransition({});
    card.current.style.setProperty(
      "transform",
      `perspective(400px) scale3d(1.1,1.1,1.1) rotateX(${parseFloat(
        calcX(y)
      ).toFixed(2)}deg) rotateY(${parseFloat(calcY(x)).toFixed(2)}deg)`,
      "important"
    );
  };
  useEffect(() => {
    setTimeout(() => (isReady.current = true), 1100);
  }, []);

  return (
    <div
      ref={card}
      className={`card ${mouseOver ? "zoom" : ""}`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      style={{ ...transition }}
      onClick={openProfile}
    >
      <img src={mydp} alt="Shrinivas" className="image" />

      <div className="content">
        <div className="header">
          <span className="name">Full Stack Dev</span>
        </div>
      </div>
    </div>
  );
}

export default NameCard;
