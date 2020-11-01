import React from "react";
import { createUseStyles, ThemeProvider } from "react-jss";
import { HonestTheme, theme } from "./config";
import { Header, Intro, Poolshare, HusdBalance, Footer } from "./components";

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
	},
	root: {
		width: "100%",
		margin: "0 auto",
		padding: `${theme.spacing(7)}pt ${theme.spacing(17)}pt`,
		background:'#fff url("/assets/imgs/next-blue.png") -10pt 763pt no-repeat'
	},
	"@media (mix-width: 1920px)": {
		root: {
			width: `${theme.spacing(240)}px}`,
		},
	},
	"@media screen and (-webkit-min-device-pixel-ratio: 2)":{
		root: {
			background:'#fff url("/assets/imgs/next-blue@2x.png") -10pt 763pt no-repeat'
		},
}
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
			<Header />
			<Intro />
			<Poolshare />
			<HusdBalance />
			<Footer />
		</div>
	);
};