import React, { useState } from "react";
import Chart from "./chart";


const continents = [
    "america",
    "europe",
    "asia",
    "australia",
]


export default function Continents({ sales }) {
    const [selected, setSelected] = useState();

    function renderContent() {
        if (selected !== undefined) {
            const continent = continents[selected];

            const combined =
                Object
                    .values(sales.reduce((acc, item) => {
                        const key = `Q${item.quarter}`;
                        if (acc[key] !== undefined) {
                            acc[key].sales += item[continent];
                            acc[key].count += 1;
                        } else { //initialize accumulator values if they don't exist
                            acc[key] = { ...item };
                            acc[key].sales = item[continent];
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
                        <th key="name">Name</th>
                        <th key="action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {continents.map((row, index) => (
                        <tr key={index}>
                            <td key="name">
                                {row}
                            </td>
                            <td key="action">
                                <button onClick={() => setSelected(index)} >View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {renderContent()}
        </div >
    );
}