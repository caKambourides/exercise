import React, { useEffect, useState } from "react";
import Products from "./products";
export default function Sidebar() {
    const [state, setState] = useState("");
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/getSales")
            .then(res => res.json())
            .then(data => setSales(data));
    }, []);

    const renderContent = () => {
        switch (state) {
            case "product":
                return (
                    <Products sales={sales}></Products>
                );
            case "continent":
                return (
                    <div>
                        < p > Loading...</p >
                    </div>
                );
            default:
                return (
                    <div>
                    </div>
                );
        }
    };
    return (
        <div style={{ display: "flex" }} >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>Sales Demo</h1>
                <button onClick={() => setState("product")}>
                    Sales by product
                </button>
                <button onClick={() => setState("continent")}>
                    Sales by continent
                </button>
            </div>
            {renderContent()}
        </div>
    );
}
