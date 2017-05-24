import React from 'react';
import {connect} from 'react-redux';
import githubLogo from '../../images/github-logo.svg';

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <footer>
        <a href = "https://github.com/daileytj/clash_royale_deck_builder" target = "_blank"><img src = {githubLogo} alt = "GitHub Logo" /></a>
      </footer>
    )
  }
}

export default connect()(Footer);
