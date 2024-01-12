import React, { useEffect, useState } from "react";
import styles from "./DropHeader.module.scss";
import Header from "../../layout/Header/Header";
const DropHeader = () => {
  const [isDrop, setIsDrop] = useState("-150px");

  useEffect(() => {
    const handleScroll = () => {
      setIsDrop(window.scrollY > 0 ? "0px" : "-150px");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ top: isDrop }} className={styles.header}>
      <Header />
    </div>
  );
};

export default DropHeader;

// import React, { useRef, useState } from "react";
// import styles from "./DropHeader.module.scss";

// const DropHeader: React.FC = () => {
//   const [isDrop, setIsDrop] = useState(false);
//   const nodeRef = useRef(null);
//   const toggleHeader = () => {
//     setIsDrop(!isDrop);
//     console.log(isDrop);
//   };
//   return (
//     <div>

//       <button onClick={toggleHeader}>Toggle</button>
//     </div>
//   );
// };

// export default DropHeader;
