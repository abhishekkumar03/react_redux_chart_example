import React, {Component} from 'react';
import Highcharts from 'highcharts';

class DonutChart extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.hosts !== this.props.hosts) {
      this.setChartData();
    }
  }

  setChartData() {
    const data = this.props.hosts;
    Highcharts.setOptions({
      colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });

    Highcharts.chart(this.chart, {
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
        formatter() {
          return `<b>${this.point.name}</b>: ${this.y} %`;
        }
      },
      series: [{
        name: 'Hosts',
        data,
        size: '50%',
        innerSize: '55%',
        showInLegend: true,
        dataLabels: {
          enabled: true
        },
        events: {
          click: (e) => { this.props.onClick(e.point.name); }
        }
      }]
    });
  }

  render() {
    return (
      <div ref={(input) => { this.chart = input; }} />
    );
  }
}

export default DonutChart;
