import React from "react";
import { createUseStyles } from "react-jss";
import { HonestTheme } from "../config";
import { ComponentProps } from "./common";

export interface RoundProps extends ComponentProps {}

const useStyles = createUseStyles<HonestTheme>((theme) => ({
	roundYellow: {
		width: "1713pt",
		height: "1713pt",
		borderRadius: "50%",
		background: theme.palette.yellow,
		position: "absolute",
		top: "-1505pt",
		right: "-925pt",
	},
	shadowYellow: {
		background: theme.palette.yellow,
		filter: " blur(23pt)",
	},
	roundGreen: {
		width: "1097pt",
		height: "1097pt",
		borderRadius: "50%",
		background: theme.palette.green,
		position: "absolute",
		top: "-504pt",
		right: "-857pt",
	},
	shadowGreen: {
		background: theme.palette.green,
		filter: " blur(23pt)",
	},
}));

export const Round: React.FC<RoundProps> = (props) => {
	const { className } = props;
	const classes = useStyles();

	return (
		<div>
			<div
				className={`${classes[`round${className}`]} ${
					classes[`shadow${className}`]
				}`}></div>
			<div className={classes[`round${className}`]}></div>
		</div>
	);
};
