import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts';
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

class DonutChart extends Component {
    componentDidMount() {
        //this.setChartData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hosts !== this.props.hosts) {
            this.setChartData()
        }
    }

    setChartData() {
        let data = this.props.hosts
        Highcharts.setOptions({
            colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
        });

        Highcharts.chart(this.refs.chart, {
            chart: {
                backgroundColor: '#b3d4fc',

                type: 'pie'
            },
            exporting: { enabled: false },
          credits: {
            enabled: false
          },

            title: 'Hosts data',
            yAxis: {
                title: {
                    text: 'Total percent'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Hosts',
                data: data,
                size: '50%',
                innerSize: '55%',
                showInLegend:true,
                dataLabels: {
                    enabled: true
                },
                events: {
                    click: function(e) {
                        this.props.onClick(e.point.name);
                    }.bind(this)
                }
            }]
        });
    }
  
    render() {
        return (
            <div ref='chart'></div>
        )
    }
}

DonutChart.propTypes = {
    props: PropTypes.array
}

export default DonutChart
