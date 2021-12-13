import { useEffect, useState } from "react";
import angularIcon from "../images/angular.png";
import reactIcon from "../images/react.png";
import vueIcon from "../images/vue.png";
import arrow from "../images/arrow.png";
import styles from "../styles/Dropdown.module.css";

const options = [
  <>
    <img src={angularIcon} alt="Angular Icon" />
    Angular
  </>,
  <>
    <img src={reactIcon} alt="React Icon" />
    ReactJS
  </>,
  <>
    <img src={vueIcon} alt="VueJS Icon" />
    VueJS
  </>,
];

const Dropdown = ({ option = "", callback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (option.toLowerCase() === "angular") {
      setSelectedOption(options[0]);
    } else if (option.toLowerCase() === "reactjs") {
      setSelectedOption(options[1]);
    } else if (option.toLowerCase() === "vuejs") {
      setSelectedOption(options[2]);
    } else {
      setSelectedOption("Select your news");
    }
  }, []);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    callback(value.props.children[1]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <img src={arrow} alt="Selector Arrow" className={styles.arrow} />
      </div>
      {isOpen && (
        <div className={styles.listContainer}>
          <ul>
            {options.map((option, i) => (
              <li key={i + 1} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
