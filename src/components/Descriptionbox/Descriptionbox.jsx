import React from "react";
import "./Descriptionbox.css"; // Import the CSS file

const Descriptionbox = () => {
  return (
    <div className="description-box">
      <h2 className="description-title">Clothing Discounts & Shopping Smart!</h2>
      <p className="description-text">Who doesn’t love a good discount on their favorite fashion pieces? Whether you’re shopping for trendy outfits, seasonal sales, or budget-friendly fashion, knowing how and where to get the best clothing discounts can save you tons of money!</p>

      <div className="description-section">
        <h3>Material & Composition</h3>
        <p>🛒 Black Friday & Cyber Monday – Up to 80% off on fashion items.
            🛒 End-of-Season Sales – Clearance sales for winter, summer, fall, and spring collections.
            🛒 New Year Sales – Best deals on formal and casual wear.</p>
      </div>

    </div>
  );
};

export default Descriptionbox;
