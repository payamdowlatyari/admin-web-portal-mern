import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ['0-4', '4-8', '8-12', '12-16', '16-20', '20-24'],
    datasets: [
        {
            label: 'Charge-Now',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            borderCapStyle: 'round',
            data: [65, 59, 80, 81, 56, 55]
        },
        {
            label: 'Optimized',
            backgroundColor: 'rgba(0,99,132,0.2)',
            borderColor: 'rgba(0,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,99,132,0.4)',
            hoverBorderColor: 'rgba(0,99,132,1)',
            borderCapStyle: 'round',
            data: [15, 9, 66, 34, 23, 78]
        }
    ]
};

class BarExample extends React.Component {

    render() {
        return (
            <div>
                <h2>Charging Options</h2>
                <hr></hr>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}

export default BarExample;