// Hooks
import { useEffect, useState } from "react";
// Styles
import styles from "../styles/App.module.css";
// Components
import Header from "./Header";
import Dropdown from "./Dropdown";
import Cards from "./Cards";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
// Helpers
import { getPosts } from "../helpers/getPosts";
import {
  getPersistentFilters,
  getPersistentOption,
  setPersistentFilters,
} from "../helpers/persistentData";

function App() {
  const [activeAllTab, setActiveAllTab] = useState(true);
  const [selectedOption, setSelectedOption] = useState(getPersistentOption());
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const setOptionNews = (option) => {
    // Set new options only if it's different than previous
    if (option !== selectedOption) {
      setSelectedOption(option);
    }
  };

  useEffect(() => {
    const { option, page } = getPersistentFilters();
    if (option && page !== null) {
      setSelectedOption(option);
      setPage(page);
    }
  }, []);

  useEffect(() => {
    // Don't make any fetch if it's the first render
    if (selectedOption !== "Select your news") {
      setIsLoading(true);
      getPosts(selectedOption, page)
        .then((res) => setPosts(res))
        .finally(() => setIsLoading(false))
        .catch((err) => setPosts([]));
      setPersistentFilters(selectedOption, page);
    }
  }, [selectedOption, page]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <nav className={styles.buttons_container}>
          <button
            className={`${styles.button} ${activeAllTab && styles.active}`}
            onClick={() => setActiveAllTab(true)}
          >
            All
          </button>
          <button
            className={`${styles.button} ${!activeAllTab && styles.active}`}
            onClick={() => setActiveAllTab(false)}
          >
            My faves
          </button>
        </nav>
        <section className={styles.section}>
          <Dropdown option={selectedOption} callback={setOptionNews} />
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Cards posts={posts} />
              <Pagination active={page} callback={setPage} />
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
