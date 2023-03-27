import React from "react";
import Medicine from "../../assets/images/Medicine.svg";
const Home = () => {
    window.addEventListener("scroll", () => {
        const header = this.document.querySelector(".header");
        header.classList.toggle("active", this.window.scrollY > 100);
    });

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    return (
        <header className="header">
            <div className="scontainer flex">
                <div className="logo">
                    <img src={Medicine} alt="medicine" />
                </div>
            </div>
        </header>
    );
};

export default Home;
