import * as React from 'react';
import * as PropTypes from 'prop-types';
import DSThemes from '@livechat/design-system-themes';
import ThemeContext from './ThemeContext';
import { DEFAULT_THEME_NAME } from './constants';

function getThemeName(themes, themeName) {
  if (!themeName || !themes[themeName]) {
    return DEFAULT_THEME_NAME;
  }

  return themeName;
}

export class ThemeProvider extends React.PureComponent {
  htmlElement = undefined;

  componentDidMount() {
    this.addCurrentThemeClassName();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.themeName !== this.props.themeName) {
      this.toggleCurrentThemeClassName(prevProps.themeName)
    }
  }

  getHtmlElement = () => {
    if (!this.htmlElement) {
      this.htmlElement = document.querySelector('html');
    }

    return this.htmlElement
  }

  addCurrentThemeClassName = () => {
    const themeName = getThemeName(this.props.themes, this.props.themeName);
    const htmlElement = this.getHtmlElement();

    htmlElement.classList.add(`lc-theme--${themeName}`)
  }

  toggleCurrentThemeClassName = prevValue => {
    const themeName = getThemeName(this.props.themes, this.props.themeName);
    const previousThemeName = getThemeName(this.props.themes, prevValue);
    const htmlElement = this.getHtmlElement();

    htmlElement.classList.remove(`lc-theme--${previousThemeName}`);
    htmlElement.classList.add(`lc-theme--${themeName}`);
  }

  render() {
    const themeName = getThemeName(this.props.themes, this.props.themeName);

    return (
      <ThemeContext.Provider
        value={{
          theme: this.props.themes[themeName],
          themeName,
          onThemeChange: this.props.onThemeChange
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.defaultProps = {
  themes: DSThemes
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  themes: PropTypes.object,
  themeName: PropTypes.string,
  onThemeChange: PropTypes.func,
};

export default ThemeProvider;