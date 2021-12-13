import { useState } from "react";
import styles from "../styles/Card.module.css";
import clockIcon from "../images/clockIcon.svg";
import favIconFalse from "../images/favIconFalse.svg";
import favIconTrue from "../images/favIconTrue.svg";
import { useGlobalContext } from "../context";

const Card = ({ author = "", title = "", url = "", created, id }) => {
  const { faves, setFav, deleteFav } = useGlobalContext();
  const fav = faves && faves.some((fav) => fav.id === id);
  const [favIcon, setFavIcon] = useState(fav);

  const clickOnInfo = () => {
    window.open(url, "_blank");
  };

  const clickOnFav = () => {
    !favIcon ? setFav({ author, title, url, created, id }) : deleteFav(id);
    setFavIcon(!favIcon);
  };

  return (
    <article className={styles.container}>
      <div className={styles.information} onClick={clickOnInfo}>
        <p>
          <img src={clockIcon} alt="Clock Icon" />
          {`${created} ${created > 1 ? "hours" : "hour"} ago by ${author} `}
        </p>
        <h3>{title}</h3>
      </div>
      <div className={styles.favContainer} onClick={clickOnFav}>
        <div className={styles.backgroundFav}></div>
        <img src={favIcon ? favIconTrue : favIconFalse} alt="Fav Icon" />
      </div>
    </article>
  );
};

export default Card;
