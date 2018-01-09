import React, {Component} from 'react';
import { selectHost } from '../actions';
import DonutChart from '../components/DonutChart';

class RightContent extends Component {
  render() {
    const {props} = this;
    return (
      <div className="col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <span className="panel-title">
              <i className="fa fa-bar-chart-o fa-fw" />Reports
            </span>
          </div>
          <div className="panel-body">
            <div>
              <div
                className="recharts-responsive-container"
                style={{width: '100%', height: '100%'}} >
                <DonutChart
                  {...props}
                  onClick={(hostName) => { props.dispatch(selectHost(hostName)); }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightContent;
