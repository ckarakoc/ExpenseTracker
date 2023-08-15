import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(dp => dp.value);
    const totalMax = Math.max(...dataPointValues);

    return <div className='chart'>
        {props.dataPoints.map(dp => <ChartBar
            key={dp.label}
            value={dp.value}
            maxValue={totalMax}
            label={dp.label}
        />)}
    </div>
}