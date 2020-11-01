import React, { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { HonestTheme } from "../config";
import { ComponentProps } from "./common";

const useStyles = createUseStyles<HonestTheme>((theme) => ({
	"@keyframes textUp": {
		"0%": {
			transform: "translateY(100%)",
		},
		"20%": {
			transform: "translateY(0px)",
		},
		"90%": {
			transform: "translateY(0px)",
		},
		"100%": {
			transform: "translateY(-100%)",
		},
	},
	root: {
		marginTop: `${theme.spacing(25)}pt`,
		textAlign: "left",
	},
	textWrapper: {
		height: "360px",
	},
	text: {
		width: "auto",
		overflowY: "hidden",
		maxWidth: `925pt`,
		fontSize: "60pt",
		borderBottom: `3px solid ${theme.palette.textBlue}`,
		lineHeight: "1.3em",
		display: "inline-block",
	},
	p: {
		animation: " $textUp 5s infinite linear",
	},
	span:{
		display: "inline",
	},
	blue:{
		color:theme.palette.textBlue
	},

	btn: {
		marginTop: `${theme.spacing(12)}pt`,
		width: `${theme.spacing(28)}pt`,
		height: `${theme.spacing(7)}pt`,

		borderRadius: `${theme.spacing(7)}pt`,
		border: `3px solid ${theme.palette.textBlue}`,
		color: theme.palette.text,
		textAlign: "center",
		fontSize: "26pt",
		"&:hover": {
			backgroundColor: theme.palette.textBlue,
			color: "#fff",
			cursor: "pointer",
		},
	},
	btnContent: {
		display: "inline-block",
		verticalAlign: "middle",
		margin: "0 8pt",
		lineHeight: `${theme.spacing(7)}pt`,
	},
}));


interface IntroProps extends ComponentProps {
	introduction:Array<Object>
}

export const Intro: React.FC<IntroProps> = () => {
	const classes = useStyles();
	const introduction = [
		[{
				black: "Swap Between Stablecoins",
		},{
				black: "at ",
				blue: "Always 1 : 1",
		}],[{
				black: "Deposit Stablecoins and ",
		},{
				blue: "Earn 68% APY",
		}],[{
				black: "153% APY for Liquidy ",
		},{
				black: "Mining HNT",
		}],[{
				blue: "Permanent Bonus ",
				black: "for",
		},{
				black: " Providing Underbalanced ",
		},{
				black: "Stablecoins",
		}]
	];

	const [index, setIndex] = useState<number>(0);
	const timeout = useRef<NodeJS.Timeout>();

	const nextFrame = () => {
		if (index === introduction.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};

	useEffect(() => {
		return () => {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, []);

	useEffect(() => {
		timeout.current = setTimeout(nextFrame, 5000);
	}, [index]);

	return (
		<div className={classes.root}>
			<div className={classes.textWrapper}>
				
				{(introduction[index]).map((obj:Object) => (
					<label className={classes.text}>
						<p className={classes.p}>
						{Object.keys(obj).map(key =>
						
							<span className={`${classes[key]} ${classes.span}`}>{obj[key]}</span>
						)}
						</p>
					</label>
				))}
			</div>
			<div className={classes.btn}>
				<div className={classes.btnContent}>Start</div>
				<div className={classes.btnContent}>
					<img src={"/assets/imgs/next.png"} />
				</div>
			</div>
		</div>
	);
};
