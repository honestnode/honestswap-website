export interface HonestTheme {
  spacing: (unit?: number) => number;
  palette: HonestPalette;
  typography: HonestTypography;
}

export interface HonestPalette {
  background: string;
  underline: string;
  text: string;
  textBlue: string;
  yellow:string;
    green:string;
    blue:string;
  token: (name: string) => string;
}

export interface HonestTypography {
  fontFamily: string;
  fontSize: number;
  buttonFontSize: number;
}

export const theme: HonestTheme = {
  spacing: (unit = 1) => 8 * unit,
  palette: {
    background: "#f7f7f7",
    underline: "#0099ff",
    text: "#1d1d1d",
    textBlue: "#0099ff",
    yellow:'#ffce45',
    green:'#53ae94',
    blue:'#2775ca',
    token: (name) => {
      const themed: Record<string, string> = {
        husd: "#f0f0f0",
        dai: "#ffce45",
        usdc: "#0099ff",
        usdt: "#53ae94",
        tusd: "#002868",
      };
      return (
        themed[name] || "#" + (((1 << 24) * Math.random()) | 0).toString(16)
      );
    },
  },
  typography: {
    fontFamily: "Verdana,Helvetica,sans-serif,serif",
    fontSize: 16,
    buttonFontSize: 14,
  },
};
