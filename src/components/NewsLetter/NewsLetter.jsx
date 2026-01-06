import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const styles = {
    container: {
      width: "100%",
      backgroundColor: "#f7f7f7",
      padding: "60px 20px",
      display: "flex",
      justifyContent: "center",
    },
    content: {
      maxWidth: "600px",
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#222",
    },
    text: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "24px",
      lineHeight: "1.6",
    },
    form: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    input: {
      flex: "1",
      minWidth: "220px",
      padding: "12px 14px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px",
      outline: "none",
    },
    button: {
      padding: "12px 22px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#ff4141",
      color: "#fff",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Get Exclusive Offers!</h2>
        <p style={styles.text}>
          Subscribe to our newsletter and stay updated with the latest deals and
          discounts.
        </p>

        <div style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleSubscribe} style={styles.button}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
