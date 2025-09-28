import React, { useEffect, useState } from "react";
import Chart from "./chart";


const columns = [
    "sku",
    "product",
]


export default function Products({ sales }) {

    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/api/getProducts")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    function renderContent() {
        if (selected !== undefined) {
            const product = products[selected];
            const filteredSales = sales
                .filter(s => s.product.sku === product.sku)
            const combined =
                Object
                    .values(filteredSales.reduce((acc, item) => {
                        const key = `Q${item.quarter}`;
                        if (acc[key] !== undefined) {
                            acc[key].sales += item.america + item.europe + item.asia + item.australia;
                            acc[key].count += 1;
                        } else { //initialize accumulator values if they don't exist
                            acc[key] = { ...item };
                            acc[key].sales = item.america + item.europe + item.asia + item.australia;
                            acc[key].quarter = key;
                            acc[key].count = 1;
                        }
                        return acc;
                    }, {}))
                    .map(({ quarter, sales, count }) => ({
                        quarter,
                        avg: sales / count
                    }));
            console.log("sales", combined);
            return (
                <div>
                    <Chart data={combined} dataKey="avg"></Chart>
                </div>
            )
        }
    }

    return (
        <div style={{ display: "flex" }}>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col}>{col}</th>
                        ))}
                        <th key="action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((row, index) => (
                        <tr key={index}>
                            {columns.map((col) => (
                                <td key={col}>{row[col]}</td>
                            ))}
                            <td key="action"><button onClick={() => setSelected(index)} >View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {renderContent()}
        </div >
    );
}