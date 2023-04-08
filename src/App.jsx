import React, { Component } from 'react'
import './App.css'
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
import { Container } from 'react-bootstrap';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
export default class App extends Component {

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
      labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
      datasets: [{
        label: 'vote',
        data: [12, 32, 43],
        backgroundColor: 'green'
      }]
    }
    return (
      <>
        <Sidebar />
        <Dashboard />

      </>
    )
  }
}
