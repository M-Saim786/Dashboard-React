import React, { Component } from 'react'
import './Dashboard.css'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
export default class Dashboard extends Component {
    render() {


        ChartJS.register(
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend
        );
        const data = {
            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'Aug', 'sep', 'oct', 'nov', 'Dec'],
            datasets: [{
                label: 'Sales of Year 2022',
                data: [12, 32, 43, 34, 67, 76, 65, 89, 90, 56, 56, 78,110],
                backgroundColor: 'black',
                borderColor: '#7380ec'
            }]
        }
        console.log(data)

        const ChartStyle = {
            // border:'1px solid red',
            margin: '-30px 2rem',
            boxShadow: ' 0 2rem 3rem #848bc82e'

            // width:100+'%'
        }

        return (
            <>
                <div className="container mt-1">
                    <div className="row">
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                            <div class="card" >

                                <div class="card-body">
                                    {/* <Line data={data} /> */}
                                    <div class="sales">
                                        <span class="material-icons-sharp">
                                            bubble_chart
                                        </span>
                                        <div class="middle">
                                            <div class="left">
                                                <h5>Total Sales</h5>
                                                <h1 id='total_sales'>20,433$</h1>
                                            </div>
                                        </div>
                                        <small>Last 24 hours</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                            <div class="card" >
                                <div class="card-body">
                                    <div class="expense">
                                        <span class="material-icons-sharp">
                                            bar_chart
                                        </span>
                                        <div class="middle">
                                            <div class="left">
                                                <h5>Total Expense</h5>
                                                <h1 id="total_expense">7,740$</h1>
                                            </div>
                                        </div>
                                        <small>Last 24 hours</small>
                                    </div>
                                    {/* <!--        END OF expense --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                            <div class="card" >
                                <div class="card-body">
                                    <div class="income">
                                        <span class="material-icons-sharp">
                                            show_chart
                                        </span>
                                        <div class="middle">
                                            <div class="left">
                                                <h5>Total Income</h5>
                                                <h1 id="total_income">12,260$</h1>
                                            </div>
                                        </div>
                                        <small>Last 24 hours</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-3 chartPart">

                        <div>
                            <h3>Total <span>
                                Sales</span> of the Year</h3>
                        </div>
                        <div className="chart">
                            <Line data={data} style={ChartStyle} />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
