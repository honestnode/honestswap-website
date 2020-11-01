import clsx from "clsx";
import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import { HonestTheme } from "../config";
import { ComponentProps } from "./common";
import { ContractContextProvider, useContract } from "../context";

export interface HusdBalanceProps extends ComponentProps {}

const useStyles = createUseStyles<HonestTheme>((theme) => ({
	root: {
		marginTop: `${theme.spacing(22)}pt`,
		textAlign:'left'
	},
	title: {
		marginBottom: `${theme.spacing(8)}pt`,
		fontSize:'26pt'
	},
	val: {
		fontSize: "70pt",
		borderBottom: `3px solid ${theme.palette.textBlue}`,
	},
}));

export const HusdBalance: React.FC<HusdBalanceProps> = (props) => {
	return (
		<ContractContextProvider>
			<Content />
		</ContractContextProvider>
	);
};

const Content: FC = () => {
	const classes = useStyles();
	const title = "hUSD Balance";
	const contract = useContract();
	return (
		<div>
			{contract.loading ? (
				<p></p>
			) : (
				<div className={classes.root}>
					<div className={classes.title}>{title}</div>
					<label className={classes.val}>{contract.honestAsset}</label>
				</div>
			)}
		</div>
	);
};
