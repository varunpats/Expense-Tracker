import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const filteredArray = props.datapoints.map(datapoint => datapoint.value);
    const maxExpense = Math.max(filteredArray);
    return (
        <div className='chart'>
            {props.datapoints.map(datapoint => {
                return <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={maxExpense}
                    label={datapoint.label}
                />
            })}
        </div>
    )
}

export default Chart;