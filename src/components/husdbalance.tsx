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
		textAlign: "left",
	},
	title: {
		marginBottom: `${theme.spacing(8)}pt`,
		fontSize: theme.palette.fontSizeTxt,
    	fontFamily: theme.palette.fontFamily,
	},
	val: {
		fontSize: theme.palette.fontSizeTitle,
    	fontFamily: theme.palette.fontFamily,
		borderBottom: `3px solid ${theme.palette.textBlue}`,
	},
	loadingWrapper:{
		width: "600pt",
		height: "70pt",
		borderBottom: `3px solid ${theme.palette.textBlue}`,
	},
	loading: {
		width: "500px",
		height: "40px",
		backgroundImage: `linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),
		linear-gradient( lightgray 40px, transparent 0 ),
		linear-gradient( lightgray 40px, transparent 0 ),
		linear-gradient( lightgray 40px, transparent 0 ),
		linear-gradient( lightgray 40px, transparent 0 )`,
		backgroundRepeat: "repeat-y",
		backgroundSize: `50px 40px,500px 40px`,
		backgroundPosition: `0 0,0 0`,

		animation: "$shine 1s infinite",
	},
	"@keyframes shine": {
		to: {
			backgroundPosition: `100% 0,0 0`,
		},
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
			<div className={classes.root}>
				<div className={classes.title}>{title}</div>
				{contract.loading ? (
					<div className={classes.loadingWrapper}>
						<p className={classes.loading}></p>
					</div>
					
				) : (
					<label className={classes.val}>
						{contract.honestAsset}
					</label>
				)}
			</div>
		</div>
	);
};
