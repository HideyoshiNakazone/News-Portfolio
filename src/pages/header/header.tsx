import styles from "./header.module.css"

import React from "react";


export class Header extends React.Component {
    render() {
        return (<>
            <div className={styles.header}>
                <h1 className={styles.header_text}>Hideyoshi News</h1>
            </div>
        </>)
    }
}

export default Header;