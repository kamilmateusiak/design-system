/// <reference types="react" />
import { Theme as DSTheme, ThemeName as DSThemeName } from "@livechat/design-system-themes";
import { Omit } from "./switch";

export interface IThemeContext {
  theme: Theme;
  themeName: ThemeName;
}

export type IOptionalThemeContext = Partial<IThemeContext>;

export type Theme = DSTheme;
export type ThemeName = DSThemeName;

export interface IThemeConsumerProps {
  children(context: IThemeContext): React.ReactNode;
}

export interface IThemeProviderProps {
  themes?: {
    [themeName: string]: Theme
  };
  themeName?: ThemeName;
  children: React.ReactNode;
  onThemeChange?: () => void;
}

export var ThemeContext: React.Context<IThemeContext>;
export var ThemeProvider: React.ComponentType<IThemeProviderProps>;
export var ThemeConsumer: React.ComponentType<IThemeConsumerProps>;
export function withTheme<P extends IThemeContext>(Component: React.ComponentType<P>): React.ComponentType<Pick<P, Exclude<keyof P, keyof IThemeContext>> & Partial<IThemeContext>>;