import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import { HonestTheme, theme } from "../config";
import { ComponentProps } from "./common";
import { ContractContextProvider, useContract } from "../context";
import {LoaderItem} from './loader'

export interface PoolshareProps extends ComponentProps {}

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

	percentTxt:{
		display: "block",
		marginTop: `${theme.spacing(4)}pt`,
		fontSize:'14pt'
	},
}));

export const Poolshare: React.FC<PoolshareProps> = (props) => {
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
			<LoaderItem type={""} text={text} percentage={percentage} idx={0}/>
			<LoaderItem type={"border"} text={text} percentage={percentage} idx={1}/>
			<LoaderItem type={"border"} text={text} percentage={percentage} idx={2}/>
			<LoaderItem type={"border"} text={text} percentage={percentage} idx={3}/>
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
					alt={"MetaMask"}
				/>
			</div>
		</div>
	);
};

const Content: FC = () => {
	const classes = useStyles();
	const title = "Current Pool Share";
	const contract = useContract();
	return (
		<div>
			{contract.loading ? (
				<p>Loading...</p>
			) : (
				<div className={classes.root}>
					<div className={classes.title}>{title}</div>
					<ul className={classes.ul}>
						{Object.entries(contract.basketAssets).map(
							([key, percentage]) => (
								<Item
									key={key}
									className={classes.li}
									text={key}
									percentage={percentage}></Item>
							)
						)}
					</ul>
				</div>
			)}
		</div>
	);
};
