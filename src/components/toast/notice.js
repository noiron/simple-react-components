import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const Box = styled.div`
  
`;


class Notice extends React.Component {
  state = {
    shouldLeave: false,
  };

  componentDidMount() {
    const { duration = 3000, onClose } = this.props;

    this.timer = setTimeout(() => {
      this.setState({ shouldLeave: true });
      onClose();
    }, duration);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { content, type } = this.props;

    return (
      <div
        className={classnames({
          notice: true,
          leave: this.state.shouldLeave,
          success: type === 'success',
        })}
      >
        {content}
      </div>
    );
  }

}

export default Notice;