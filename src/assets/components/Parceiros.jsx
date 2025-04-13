import React from "react";
import "./Parceiros.css"; 

export default function Parceiros() {
  return (
    <section className="parceiros" aria-label="Nossos parceiros">
      <h2 className="font-1-xxl container">
        Nossos parceiros<span className="cor-p1">.</span>
      </h2>
      <ul>
        <li>
          <img src="img/parceiros/apple-14 1.svg" alt="Apple" />
        </li>
        <li>
          <img src="img/parceiros/lacoste-logo-1 1.svg" alt="Lacoste" />
        </li>
        <li>
          <img src="img/parceiros/pornhub 1.svg" alt="Pornhub" />
        </li>
        <li>
          <img src="img/parceiros/walt-disney-records 1.svg" alt="Disney" />
        </li>
        <li>
          <img src="img/parceiros/coca-cola-2021 1.svg" alt="Coca-Cola" />
        </li>
        <li>
          <img src="img/parceiros/tinder-cinza.svg" alt="Tinder" />
        </li>
        <li>
          <img src="img/parceiros/onlyfans-wordmark-1 1.svg" alt="OnlyFans" />
        </li>
        <li>
          <img src="img/parceiros/Sejaprivacy 1.svg" alt="SejaPrivacy" />
        </li>
      </ul>
    </section>
  );
}
