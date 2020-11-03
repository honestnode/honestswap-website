import React from "react";
import { Link } from "@reach/router";
import { createUseStyles } from "react-jss";
import { HonestTheme } from "../config";

const useStyles = createUseStyles<HonestTheme>((theme) => ({
  header: {
    height: `${theme.spacing(7)}px `,
    lineHeight: `${theme.spacing(7)}px `,
    position: "relative",
    textAlign: "left",
  },
  logo: {
    width: "320px",
    height: "56px",
    background: 'url("/assets/imgs/logo-header.png") no-repeat',
    backgroundSize: "contain",
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
    fontSize: "22pt",
    fontFamily: theme.palette.fontFamily,
    cursor: "pointer",
  },
  "@media screen and (-webkit-min-device-pixel-ratio: 2)": {
    logo: {
      background: 'url("/assets/imgs/logo-header@2x.png") no-repeat',
      backgroundSize: "contain",
    },
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <div className={classes.links}>
        <Link className={classes.linkItem} to="/">
          App
        </Link>
        <a
          className={classes.linkItem}
          href="https://faq.honestswap.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          FAQ
        </a>
      </div>
    </header>
  );
};
