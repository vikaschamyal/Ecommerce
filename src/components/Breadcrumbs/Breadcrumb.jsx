import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = (props) => {
    const {product} = props;
    
    const styles = {
        container: {
            padding: "1rem 0",
            fontSize: "0.875rem",
            color: "#6b7280",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
        },
        link: {
            color: "#667eea",
            textDecoration: "none",
            transition: "color 0.2s ease",
        },
        separator: {
            color: "#d1d5db",
        },
        current: {
            color: "#111827",
            fontWeight: "500",
        },
    };

    return (
        <div style={styles.container}>
            <span style={styles.link}>HOME</span>
            <IoIosArrowForward style={styles.separator} />
            <span style={styles.link}>SHOP</span>
            <IoIosArrowForward style={styles.separator} />
            <span style={styles.current}>{product.category}</span>
            <IoIosArrowForward style={styles.separator} />
            <span style={styles.current}>{product.name}</span>
        </div>
    );
}

export default Breadcrumb;

