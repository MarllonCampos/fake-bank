export default {
  primary: {
    main: "#5061FC",
    light: "#6674F4",
    dark: "#3346F0",
  },
  success: "#51CA73",
  danger: {
    main: "#FC5050",
    light: "#F97171",
    dark: "#F63131",
  },
  gray: {
    '900': "#222222",
    '200': "#BCBCBC",
    '100': "#E6E6E6",
  },
  backgroundColor: "#FAFAFA",
  textColor: "#FFFFFF"
}

export interface ThemeType {
  primary: {
    main: string,
    light: string,
    dark: string,
  },
  success: string,
  danger: {
    main: string,
    light: string,
    dark: string,
  },
  gray: {
    '900': string,
    '200': string,
    '100': string,
  },
  backgroundColor: string,
  textColor: string
}