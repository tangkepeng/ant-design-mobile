import React, {PropTypes} from 'react';

const Process = React.createClass({
  propTypes: {
    result: PropTypes.array,
  },
  render() {
    const { result } = this.props;
    const resultLen = result.length;
    const processStep = [];
    result.map((process, i) => {
      let statusCls = '';
      let statusSubClas = '';

      switch(process.type) {
      case 'done':
        statusCls = 'am-process-item-result-pay';
        statusSubClas = 'message-success';
        break;
      case 'done_alipay':
        statusCls = 'am-process-item-result-pay';
        statusSubClas = 'message-pay';
        break;
      case 'pending':
        statusCls = 'am-process-item-result-pending';
        statusSubClas = 'message-wait';
        break;
      case 'pending_alipay':
        statusCls = 'am-process-item-result-unpay';
        statusSubClas = 'message-unpay';
        break;
      case 'fail':
        statusCls = 'am-process-item-result-fail';
        statusSubClas = 'message-fail';
        break;
      default:
        break;
      }

      switch(i) {
      case 0:
        processStep.push(
          <div className={'am-process-item ' + statusCls} key={'processitem' + i}>
            <div className={'am-process-icon am-icon ' + statusSubClas}/>
            <div className="am-process-content">
              <div className="am-process-main">{process.title}</div>
              <div className="am-process-brief">{process.brief}</div>
            </div>
            <div className="am-process-down-border"/>
          </div>
        );
        break;
      case resultLen - 1:
        processStep.push(
          <div className={'am-process-item ' + statusCls} key={'processitem' + i}>
            <div className={'am-process-icon am-icon ' + statusSubClas}/>
            <div className="am-process-content">
              <div className="am-process-main">{process.title}</div>
              <div className="am-process-brief">{process.brief}</div>
            </div>
            <div className="am-process-up-border"/>
          </div>
        );
        break;
      default:
        processStep.push(
          <div className={'am-process-item ' + statusCls} key={'processitem' + i}>
            <div className={'am-process-icon am-icon ' + statusSubClas}/>
            <div className="am-process-content">
              <div className="am-process-main">{process.title}</div>
              <div className="am-process-brief">{process.brief}</div>
            </div>
            <div className="am-process-up-border"/>
            <div className="am-process-down-border"/>
          </div>
        );
        break;
      }
    });
    return (<div className="am-process">{processStep}</div>);
  }
});
module.exports = Process;
