import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

interface GraphProps {
    headers: string[];
    data: string[][];
}
const Graph: React.FC<GraphProps> = ({ headers, data }) => {
    return (
        <div className="graphsContainer">
            <h2>Your AI-Analyzed Emotions</h2>
            <div className="pieChartContainer">
                <div style={pieChartStyle}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'Neutral' },
                                    { id: 1, value: 15, label: 'Happy' },
                                    { id: 2, value: 20, label: 'Sad' },
                                    { id: 3, value: 25, label: 'Anger' },
                                    { id: 4, value: 30, label: 'Fear' },
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
                                data: [0.8, 0, 0.04, 0.08, 0.1, 0.02],
                            },
                            {
                                data: [0.01, 0.5, 0.04, 0.4, 0.3, 0.2, 0.1],
                            },
                            {
                                data: [0.1, 0.01, 0.04, 0.02, 0.15, 0.2, 0.8],
                            },
                            {
                                data: [0.02, 0.7, 0.032, 0.01, 0.2, 0.045, 0.1],
                            },
                            {
                                data: [0.08, 0.01, 0.04, 0.08, 0.1, 0.76, 0.1],
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
    // height: '80%
};

const lineChartStyle: React.CSSProperties = {
    // height: '80%'
    color: 'white'
};

export default Graph;
