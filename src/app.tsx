import React from "react";
import { createUseStyles, ThemeProvider } from "react-jss";
import { HonestTheme, theme } from "./config";
import {
  Round,
  Header,
  Intro,
  Poolshare,
  HusdBalance,
  Footer,
} from "./components";

const useStyles = createUseStyles<HonestTheme>((theme) => ({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      fontFamily: theme.typography.fontFamily,
      boxSizing: "border-box",
    },
    html: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    body: {
      width: "100%",
      height: "100%",
      overflowX: "hidden",
      overflowY: "auto",
      fontSize: theme.typography.fontSize,
      color: theme.palette.text,
      lineHeight: 1,
      margin: 0,
      textAlign: "center",
	},
	"@media (max-width: 1200px)": {
		body: {
		  overflowX: "auto",
		},   
	},
  },
  root: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    position: "relative",
    overflowX:"hidden",
    padding: `${theme.spacing(7)}pt ${theme.spacing(17)}pt`,
  },
  nextBlue: {
    position: "absolute",
    top: "763pt",
    left: "0pt",
    width: "140px",
    height: "240px",
    background: 'url("/assets/imgs/next-blue.png") no-repeat',
    backgroundSize: "cover",
  },

  "@media (min-width: 1920px)": {
    root: {
      width: "1920px",
    },
  },
  "@media (max-width: 1200px)": {
    body: {
      overflowX: "auto",
    },
    root: {
      width: "1200px",
      padding: `${theme.spacing(7)}pt ${theme.spacing(2)}pt`,
    },
   
  },
  "@media screen and (-webkit-min-device-pixel-ratio: 2)": {
    nextBlue: {
      background: 'url("/assets/imgs/next-blue@2x.png") no-repeat',
      backgroundSize: "cover",
    },
  },
}));

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg}>
        <Round className={"Yellow"} />
        <Round className={"Green"} />
        <div className={classes.nextBlue}></div>
      </div>
     
          <Header />
          <Intro />
          <Poolshare />
          <HusdBalance />
          <Footer />
    </div>
  );
};
