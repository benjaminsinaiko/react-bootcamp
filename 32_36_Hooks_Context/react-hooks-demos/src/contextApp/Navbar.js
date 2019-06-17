import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import InputBase from '@material-ui/core/InputBase';
import withStyles from '@material-ui/core/styles/withStyles';

import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';
import styles from './styles/NavbarStyles';

const searchLanguage = {
  english: {
    search: 'Search',
    flag: '🇬🇧',
  },
  french: {
    search: 'Chercher',
    flag: '🇫🇷',
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸',
  },
};

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const {
      classes,
      languageContext: { language },
    } = this.props;
    const { search, flag } = searchLanguage[language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="language flag">
                {flag}
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
