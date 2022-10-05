import React from 'react';
import './Dashboard.css'
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
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
        <div>
            <div className='line-area'>
                <div>
                    <ResponsiveContainer width={600} aspect={2}>
                        <LineChart data={data} >
                            <Line dataKey={'price'}></Line>
                            <Line dataKey={'sales'}></Line>
                            <XAxis dataKey={'name'}></XAxis>
                            <YAxis></YAxis>
                            <Tooltip />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <ResponsiveContainer width={600} aspect={2}>
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            // margin={{
                            //     top: 10,
                            //     right: 30,
                            //     left: 0,
                            //     bottom: 0,
                            // }}
                        >
                            <CartesianGrid horizontal={true} vertical={false}/>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>



    );
    // };
};

export default Dashboard;