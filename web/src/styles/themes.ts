export default {
  primary: {
    main: "#5061FC",
    light: "#6674F4",
    dark: "#3346F0",
  },
  success: "#51CA73",
  danger: "#FC5050",
  gray: {
    '900': "#222222",
    '200': "#BCBCBC",
    '100': "#E6E6E6",
  },
  backgroundColor: "#FAFAFA",
  textColor: "#FFFFFF",
  textColorHover: "#F5F5F5",

  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "32px",
    xxlarge: "64px"
  },

  radius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "32px",
    xxlarge: "64px"
  }
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
  textColor: string,
  textColorHover: string;
  spacing: {
    small: string,
    medium: string,
    large: string,
    xlarge: string,
    xxlarge: string
  }
  radius: {
    small: string,
    medium: string,
    large: string,
    xlarge: string,
    xxlarge: string
  }
}