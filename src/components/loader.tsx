import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import { HonestTheme, theme } from "../config";
import { ComponentProps } from "./common";

export interface PoolshareProps extends ComponentProps {}

const useStyles = createUseStyles<HonestTheme>((theme) => ({
	
	"@keyframes loadingRight":{
		"0%": {
			transform: "rotate(0deg)",
		},
		"50%": {
            
            transform:`rotate(180deg)`,
		},
		"100%": {
           
            transform:`rotate(180deg)`,
		},
	},
	"@keyframes loadingLeft": {
		"0%": {
			transform: "rotate(0deg)",
		},
		"50%": {
			transform: "rotate(0deg)",
		},
		"100%": {
			transform: "rotate(180deg)",
		},
    },
    "@keyframes loadingPRight":{
		"0%": {
			transform: "rotate(0deg)",
		},
		
	},
	"@keyframes loadingPLeft": {
		"0%": {
			transform: "rotate(0deg)",
        },
        "50%": {
			transform: "rotate(0deg)",
		},
		
	},

	percentImg: {
		width: `${theme.spacing(12)}pt`,
		height: `${theme.spacing(12)}pt`,
		margin: "0 auto",
		padding: `${theme.spacing(3)}pt`,
		transform: "translate(-25%, -25%)",
	},
	circleLoader: {
		overflow: " hidden",
		position: " relative",
		width: `${theme.spacing(12)}pt`,
		height: `${theme.spacing(12)}pt`,
		backgroundColor: "transparent",
		borderRadius: `${theme.spacing(12)}pt`,
	},

	loaderInside: {
		position: "absolute",
		left: "100%",
		top: 0,
		width: "100%",
		height: "100%",
		borderRadius: "1000px",
		background:'rgba(0,0,0,0)',
        animation: " $loadingLeft 2.5s linear",
        border:props=>(props.type=="border"?`2px solid ${theme.palette.token(props.text)}`:'none') ,
        
	},

	percentBorder: {
		width: props=>`${theme.spacing(props.idx*2+12)}pt`,
		height:  props=>`${theme.spacing(props.idx*2+12)}pt`,
		padding:  props=>`${theme.spacing((props.idx*2+12)/4)}pt`,
		marginTop: props=>`${theme.spacing(props.idx==1?-13:(props.idx==2?-14.8:-17))}pt`,
	},
	borderLoader: {
		width: props=>`${theme.spacing(props.idx*2+12)}pt`,
		height:  props=>`${theme.spacing(props.idx*2+12)}pt`,
		borderRadius: props=> `${theme.spacing((props.idx*2+12)/4)}pt`,
	},

	leftWrap: {
		left: "0",
		overflow: "hidden",
		position: "absolute",
		width: "50%",
		height: "100%",
	},
	leftLoaderInside: {
		zIndex: 1,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		transformOrigin: "0 50% 0",
		animation: "$loadingLeft 2.5s linear",
        animationFillMode: "forwards",
    },
    leftBorderInside:{
        borderLeft: "none",
        animation: "$loadingPLeft 3s linear",
       
    },
	rightWrap: {
		left: "50%",
		overflow: "hidden",
		position: "absolute",
		width: "50%",
		height: "100%",
	},
	rightLoaderInside: {
		zIndex: 1,
		left: "-100%",
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
		transformOrigin: "100% 50% 0",
		animation: "$loadingRight 2.5s linear",
		animationFillMode: "forwards",
    },
    rightBorderInside:{
        borderLeft: "none",
        animation: "$loadingPRight 1.5s linear",
    },
	percentTxt: {
		display: "block",
		marginTop: `${theme.spacing(4)}pt`,
		fontSize: "14pt",
	},
}));

interface LoaderItemProps extends ComponentProps {
	text: string;
	percentage: number;
    type: string;
    idx:number
}

export const LoaderItem: FC<LoaderItemProps> = (props) => {
	const {  text, percentage, type } = props;
	const classes = useStyles(props);

	const getWrapperName = (type: string): string => {
		return `${classes.percentImg} ${
			type == "border" ? classes.percentBorder : ""
		}`;
	};
	const getCircleName = (type: string): string => {
		return `${classes.circleLoader} ${
			type == "border" ? classes.borderLoader : ""
		}`;
    };
    
    const getAniName=(type: string,arg: string): string => {
		return `${classes.loaderInside} ${
			arg == "left" ? classes.leftLoaderInside : classes.rightLoaderInside
		} ${
			type == "border" ?(arg=="left"?classes.leftBorderInside : classes.rightBorderInside) :""
		}`;
    };

	const getStyle = (type: string, arg: string): object => {
		if (type == "border") {
            let obj = {};
            return Object.assign(obj, arg=="Left"?{
                borderLeft: "none",
                transform:`rotate(${percentage>=0.5?(percentage*1-0.5)*360:0}deg)`,
            }:{
                borderRight: "none",
                transform:`rotate(${percentage>=0.5?180:percentage*180}deg) `,
  
            });	
		} else {
			return {
				background: theme.palette.token(text),
			};
		}
	};

	return (
		<div>
			<div className={getWrapperName(type)}>
				<div className={getCircleName(type)}>
					<div className={classes.leftWrap}>
						<div
							className={getAniName(type,"left")}
							style={getStyle(type, "Left")}></div>
					</div>
					<div className={classes.rightWrap}>
						<div
							className={getAniName(type,"right")}
							style={getStyle(type, "Right")}></div>
					</div>
				</div>
			</div>
		</div>
	);
};
