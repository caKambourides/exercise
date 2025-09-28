import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Chart({ data, dataKey }) {
    return (
        <LineChart width={1000} height={300} data={data}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="quarter"
                interval={0} />
            <YAxis />
            <Tooltip />
            <Line dataKey={dataKey} />
        </LineChart>
    );
}