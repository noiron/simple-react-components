import React from 'react';
import ReactDOM from 'react-dom';
import Notice from './notice';

class Notification extends React.Component {
  state = {
    notices: [],
  };

  addNotice = (notice) => {
    const notices = [...this.state.notices];
    // 给 notice 增加一个 key
    notice.key = getUuid();
    notices.push(notice);
    this.setState({ notices });
  };

  removeNotice = (key) => {
    this.setState((prevState) => {
      return {
        notices: prevState.notices.filter((notice) => notice.key !== key),
      };
    });
  };

  getNoticeDOM = () => {
    const result = [];
    const { notices } = this.state;
    notices.forEach((notice) => {
      const onClose = () => {
        this.removeNotice(notice.key);
        if (typeof notice.onClose === 'function') {
          notice.onClose();
        }
      };

      result.push(<Notice {...notice} onClose={onClose} />);
    });

    return result;
  };

  checkHasMask = () => {
    const { notices } = this.state;
    return notices.some((notice) => notice.mask);
  };

  render() {
    return (
      <div>
        {this.checkHasMask() && <div className="mask" />}
        <div className="notification-box">{this.getNoticeDOM()}</div>
      </div>
    );
  }
}

Notification.reWrite = (properties) => {

  const props = properties || {};

  const div = document.createElement('div');
  document.body.appendChild(div);

  // 将 notification 渲染到 div 上去
  const notification = ReactDOM.render(
    <Notification {...props} />, div
  );

  return {
    notice: (noticeProps) => {
      notification.addNotice(noticeProps);
    },

    destroy: () => {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  }

}



let noticeNumber = 0;
// 生成唯一的 ID
function getUuid() {
  return 'notification-' + new Date().getTime() + '-' + noticeNumber++;
}

export default Notification;
