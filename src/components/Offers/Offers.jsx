import React from 'react';
import pngwing from '../assets/pngwing.png';

const Offers = () => {
    const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "3rem 2rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "16px",
            margin: "2rem auto",
            maxWidth: "1200px",
            color: "white",
            gap: "2rem",
        },
        content: {
            flex: "1",
        },
        title: {
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
            lineHeight: "1.2",
        },
        highlight: {
            background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
        },
        subtitle: {
            fontSize: "1.25rem",
            marginBottom: "1.5rem",
            opacity: 0.9,
            letterSpacing: "0.1em",
        },
        button: {
            padding: "1rem 2.5rem",
            background: "white",
            color: "#667eea",
            border: "none",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "1.125rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        },
        image: {
            flex: "1",
            maxWidth: "300px",
            height: "auto",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Exclusive</h1>
                <h1 style={{...styles.title, ...styles.highlight}}>Offers for You</h1>
                <p style={styles.subtitle}>ONLY BEST SELLERS</p>
                <button 
                    style={styles.button}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
                    }}
                >
                    Check Now
                </button>
            </div>
            <div style={styles.image}>
                <img src={pngwing} alt="Exclusive Offer" style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    );
}

export default Offers;
