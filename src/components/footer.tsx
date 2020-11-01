import React from "react";
import { Link } from "@reach/router";
import { createUseStyles } from "react-jss";
import { HonestTheme } from "../config";
import { ComponentProps } from "./common";

export interface FooterProps extends ComponentProps {}

interface ItemProps extends ComponentProps {
	message: string;
}

const useStyles = createUseStyles<HonestTheme>((theme) => ({
	root: {
		marginTop: `${theme.spacing(48)}px`,
		textAlign:'left',
		fontSize:'16pt'
	},
	ul: {
		listStyle: "none",
		height:'48pt',
		lineHeight:'48pt'
	},
	li: {
		display: "inline-block",
		marginRight: `${theme.spacing(12)}pt`,
		textDecoration:'none'
	},
	logo:{
		float:'right',
		marginTop:'-48pt'
	},
	twitter: {
		color: theme.palette.yellow,
	},
	telegram: {
		color: theme.palette.green,
	},
	discord: {
		color: theme.palette.blue,
	},
	email: {
		color: theme.palette.textBlue,
	},
}));

const Item: React.FC<ItemProps> = (props) => {
	const { className,message } = props;
	return (
		<Link to='/' className={className}>
			<span>{message}</span>
		</Link>
	);
};

export const Footer: React.FC<FooterProps> = () => {
	const classes = useStyles();
	const items = ["Twitter", "Telegram", "Discord", "Email"];

	return (
		<div className={classes.root}>
			<ul className={classes.ul}>
				{items.map((i) => (
					<Item
						className={`${classes.li} ${
							classes[i.toLocaleLowerCase()]
						}`}
						key={i}
						message={i}
					/>
				))}
			</ul>
			<div className={classes.logo}>
				<img src={"/assets/imgs/logo-header.png"} alt={"logo"} />
			</div>
		</div>
	);
};
