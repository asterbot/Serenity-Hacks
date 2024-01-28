import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

interface GraphProps {
    headers: string[];
    data: string[][];
}
const Graph: React.FC<GraphProps> = ({ headers, data }) => {
    console.log(headers);
    console.log(data);
    return (
        <div className="graphsContainer">
            <h2>Your AI-Analyzed Emotions</h2>
            <div className="pieChartContainer">
                <div style={pieChartStyle}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                    { id: 3, value: 25, label: 'series D' },
                                    { id: 4, value: 30, label: 'series E' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
            </div>

            <div className="lineChartContainer">
                <div style={lineChartStyle}>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                            {
                                data: [3, 2, 5.5, 4, 7, 1.5, 3.5],
                            },
                            {
                                data: [0.98, 4, 2.5, 3.5, 4.5, 5.5, 6.5],
                            },
                            {
                                data: [1, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5],
                            },
                            {
                                data: [1, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5],
                            },                        
                        ]}
                    width={500}
                    height={300}
                    />
                </div>
            </div>
        </div>

    );


}


const pieChartStyle: React.CSSProperties = {
    // height: '80%'
};

const lineChartStyle: React.CSSProperties = {
    // height: '80%'
};

export default Graph;
