import React from 'react';
import {connect} from 'react-redux';
import githubLogo from '../../images/github-logo.svg';

export class Footer extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <footer>
        <a href="https://github.com/daileytj/clash_royale_deck_builder_app" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="GitHub Logo" /></a>
      </footer>
    )
  }
}

export default connect()(Footer);
