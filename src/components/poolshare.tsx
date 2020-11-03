import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import { HonestTheme, theme } from "../config";
import { ComponentProps } from "./common";
import { ContractContextProvider, useContract } from "../context";
import { LoaderItem } from "./loader";



const useStyles = createUseStyles<HonestTheme>((theme) => ({
	root: {
		marginTop: `${theme.spacing(40)}pt`,
		textAlign: "left",
	},
	title: {
		marginBottom: `${theme.spacing(12)}pt`,
		fontSize: "26pt",
	},
	ul: {
		listStyle: "none",
	},
	li: {
		display: "inline-block",
		width: "25%",
		textAlign: "center",
	},

	percentTxt: {
		display: "block",
		marginTop: `${theme.spacing(4)}pt`,
		fontSize: "14pt",
	},
}));

const loadingStyles = createUseStyles<HonestTheme>((theme) => ({
	"@keyframes breathe": {
		"0%": {
			opacity:'0.3'
		},
		"50%":{
			opacity:'0'
		},
		"100%":{
			opacity:'0.3'
		}
	},
	loadingBorder:{
		width: `${theme.spacing(14)}pt`,
		height: `${theme.spacing(14)}pt`,
		margin: "0 auto",
		borderRadius:'50%',
		background:props=>theme.palette.token(props.text),
		boxShadow:props=>`0 0 15px ${theme.palette.token(props.text)}`,
		animation: '$breathe 3s linear infinite'
	},
	loading:{
		width: `${theme.spacing(12)}pt`,
		height: `${theme.spacing(12)}pt`,
		margin: "0 auto",
		borderRadius:'50%',
		background:props=>theme.palette.token(props.text),
		marginTop:`${theme.spacing(-13)}pt`,
	},
	
}))

export const Poolshare: React.FC = () => {
	return (
		<ContractContextProvider>
			<Content />
		</ContractContextProvider>
	);
};

interface ItemProps extends ComponentProps {
	text: string;
	percentage: number;
}

const Item: React.FC<ItemProps> = (props) => {
	const { className, text, percentage } = props;
	const classes = useStyles(text);

	const getLabel = (name: string): string => {
		let firstStr = name.substring(0, 1).toUpperCase();
		return firstStr + name.substring(1);
	};

	return (
		<div className={className}>
			{[0, 1, 2, 3].map((num) => (
				<LoaderItem
					key={num}
					type={num >= 1 ? "border" : ""}
					text={text}
					percentage={percentage}
					idx={num}
				/>
			))}
			<label
				className={classes.percentTxt}
				style={{
					color: theme.palette.token(text),
				}}>
				{percentage * 100 + "%"}
			</label>
			<label
				className={classes.percentTxt}
				style={{
					color: theme.palette.token(text),
				}}>
				{getLabel(text)}
			</label>
			<div className={classes.percentTxt}>
				<img
					className={classes.icon}
					src={`/assets/imgs/${text}.svg`}
					alt={"icon"}
				/>
			</div>
		</div>
	);
};


interface LoadingItemProps extends ComponentProps {
	text: string;
}

const LoadingItem: React.FC<LoadingItemProps> = (props) => {
	const { className} = props;
	const classes = loadingStyles(props);
	
	return (
		<div className={className}>
			<div className={classes.loadingBorder} ></div>
			<div className={classes.loading} ></div>
		</div>
	);
};

const Content: FC = () => {
	const classes = useStyles(),
		title = "Current Pool Share",
		contract = useContract(),
		baskets = ["dai", "usdt", "usdc", "tusd"];
	return (
		<div>
			<div className={classes.root}>
				<div className={classes.title}>{title}</div>

				<ul className={classes.ul}>
					{contract.loading ? (
						<li>
						{baskets.map(key=>(
							<LoadingItem key={key} className={classes.li} text={key}/>
						))}
						</li>
					) : (
						<li>
							{Object.entries(contract.basketAssets).map(
								([key, percentage]) => (
									<Item
										key={key}
										className={classes.li}
										text={key}
										percentage={percentage}></Item>
								)
							)}
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};
