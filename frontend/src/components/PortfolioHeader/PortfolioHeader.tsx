import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavigationElement from '../../models/NavigationElement';
import { Link as Scroll } from 'react-scroll';
import './style.scss';

export interface HeaderProps {
  headerTitle: string;
  navigationElements: NavigationElement[];
}

export class PortfolioHeader extends React.Component<HeaderProps> {
  render() {
    return (
      <>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h3">{this.props.headerTitle}</Typography>
          </Toolbar>
          <Toolbar>
            <ul>
              {this.props.navigationElements.map((e) => {
                return (
                  <Scroll to={e.elementName} smooth={true}>
                    <li>{e.elementName}</li>
                  </Scroll>
                );
              })}
            </ul>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
