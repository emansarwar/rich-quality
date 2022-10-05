import React from 'react';
import { Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const data = [
        {
          name: 'supplier A',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'supplier B',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'supplier C',
          price: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'supplier D',
          price: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'supplier E',
          price: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'supplier F',
          price: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'supplier G',
          price: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];
    return (
        <ResponsiveContainer width={600} height={500}>
            <LineChart data={data} >
            <Line dataKey={'price'}></Line>
            <Line dataKey={'sales'}></Line>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip/>

        </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChart;