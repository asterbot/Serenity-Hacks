import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

interface GraphProps {
    headers: string[];
    data: string[][];
}
export default function Graph({ headers, data }: GraphProps) {
    console.log(headers);
    console.log(data);
    return (
        <div className="theGraph">
            <div style={graphContainerStyle}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />
            </div>
        </div>
    );


}


const graphContainerStyle: React.CSSProperties = {
    // height: '80%', // Optional: Adjust the width as needed
};

