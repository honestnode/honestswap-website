import React from "react";
import { Link } from "@reach/router";
import { createUseStyles } from "react-jss";
import { HonestTheme } from "../config";
import { Round } from "./round";

const useStyles = createUseStyles<HonestTheme>((theme) => ({
	header: {
		height: `${theme.spacing(7)}px `,
		lineHeight: `${theme.spacing(7)}px `,
		position: "relative",
		textAlign: "left",
	},
	logo: {
		"& img": {
			height: "48px",
		},
	},
	links: {
		position: "absolute",
		top: 0,
		right: 0,
	},
	linkItem: {
		marginLeft: `${theme.spacing(12)}pt `,
		textDecoration: "none",
		color: theme.palette.text,
		fontSize: "22px",
		cursor: 'pointer'
	},
	next:{
		position: "absolute",
		top: '763pt',
		left: 0,
	}
}));

export const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<img src={"/assets/imgs/logo-header.png"} alt={"logo"} />
			</div>
			<Round className={"Yellow"} />
			<Round className={"Green"} />
			<div className={classes.links}>
				<Link className={classes.linkItem} to='/'>
					App
				</Link>
				<a className={classes.linkItem} href='https://faq.honestswap.io' target="_blank" rel="noopener noreferrer">
					FAQ
				</a>
			</div>
		</header>
	);
};
