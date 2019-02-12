import React, { Component } from 'react';
import Header from '../../components/common/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sideActions from '../../store/modules/side';
import App from '../../components/App';

class SideBarContainer extends Component {
  handleToggle = () => {
    const { SideActions } = this.props;
    SideActions.toggle();
  };
  render() {
    const { handleToggle } = this;

    return <Header onToggle={handleToggle} />;
  }
}

export default connect(
  state => ({
    onToggle: state.side.get('onToggle')
  }),
  dispatch => ({
    SideActions: bindActionCreators(sideActions, dispatch)
  })
)(SideBarContainer);
// <Header onToggle={handleToggle} />
