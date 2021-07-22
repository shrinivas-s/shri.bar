import React, { useState, useEffect } from "react";

const skills = [
  "java",
  "nodejs",
  "express",
  "mysql",
  "react",
  "graphql",
  "web3",
  "solidity",
  "openzeppelin",
  "truffle",
];

function Skills({ visible }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!visible) {
      return;
    }
    setText("");
    const intervalId = setInterval(() => {
      setText((text) => {
        if (text.length == skills[index].length) {
          setTimeout(
            () => setIndex(index + 1 == skills.length ? 0 : index + 1),
            1000
          );
          return text;
        }
        return text + skills[index].substr(text.length, 1);
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, [visible, index]);

  return (
    <div className={`skillsContainer`}>
      <span className="skill">{visible ? `#${text}` : `_`}</span>
    </div>
  );
}

export default Skills;
