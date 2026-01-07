import React from "react";

const DescriptionBox = () => {
  const styles = {
    container: {
      padding: "2rem 1rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "1rem",
      color: "#111827",
    },
    text: {
      fontSize: "1.125rem",
      lineHeight: "1.75",
      color: "#374151",
      marginBottom: "2rem",
    },
    section: {
      marginTop: "2rem",
      padding: "1.5rem",
      background: "#f9fafb",
      borderRadius: "12px",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#111827",
    },
    sectionText: {
      fontSize: "1rem",
      lineHeight: "1.75",
      color: "#6b7280",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Clothing Discounts & Shopping Smart!</h2>
      <p style={styles.text}>
        Who doesn't love a good discount on their favorite fashion pieces? Whether you're shopping for trendy outfits, seasonal sales, or budget-friendly fashion, knowing how and where to get the best clothing discounts can save you tons of money!
      </p>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Material & Composition</h3>
        <p style={styles.sectionText}>
          🛒 Black Friday & Cyber Monday – Up to 80% off on fashion items.
          <br />
          🛒 End-of-Season Sales – Clearance sales for winter, summer, fall, and spring collections.
          <br />
          🛒 New Year Sales – Best deals on formal and casual wear.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
