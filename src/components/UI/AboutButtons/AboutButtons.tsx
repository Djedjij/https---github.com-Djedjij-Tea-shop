import React from "react";
import styles from "./AboutButtons.module.scss";

interface AboutButtonProps {
  year: string;
  className: boolean;
  onClick: () => void;
}

const AboutButtons: React.FC<AboutButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.className ? styles.aboutButton : styles.aboutButtonActive
      }
    >
      {props.year}
    </button>
  );
};

export default AboutButtons;
