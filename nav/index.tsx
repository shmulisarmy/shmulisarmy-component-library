import { JSX } from "solid-js";
import { navProps } from "./types";
import styles from "./nav.module.css";

export default function nav(props: navProps): JSX.Element {
    return <div class={styles.nav}></div>;
}
