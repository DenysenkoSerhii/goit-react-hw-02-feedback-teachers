import PropTypes from "prop-types";

import styles from "./section.module.scss";

const Section = ({ children, title }) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>{title}</h4>
            {children}
        </div>)
}

export default Section;

Section.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}