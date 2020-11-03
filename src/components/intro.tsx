import React, {useEffect, useRef, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {HonestTheme} from '../config';

const useStyles = createUseStyles<HonestTheme>((theme) => ({
  '@keyframes textUp': {
    '0%': {
      transform: 'translateY(100%)'
    },
    '20%': {
      transform: 'translateY(0px)'
    },
    '90%': {
      transform: 'translateY(0px)'
    },
    '100%': {
      transform: 'translateY(-100%)'
    }
  },
  root: {
    marginTop: `${theme.spacing(25)}pt`,
    textAlign: 'left'
  },
  textWrapper: {
    height: '360px'
  },
  text: {
    width: 'auto',
    overflowY: 'hidden',
    maxWidth: `925pt`,
    fontSize: '60pt',
    borderBottom: `3px solid ${theme.palette.textBlue}`,
    lineHeight: '1.3em',
    display: 'inline-block'
  },
  p: {
    animation: ' $textUp 5s infinite linear'
  },
  span: {
    display: 'inline'
  },
  blue: {
    color: theme.palette.textBlue
  },

  btn: {
    marginTop: `${theme.spacing(12)}pt`,
    width: `${theme.spacing(28)}pt`,
    height: `${theme.spacing(7)}pt`,
    lineHeight: `${theme.spacing(7)}pt`,
    borderRadius: `${theme.spacing(7)}pt`,
    border: `3px solid ${theme.palette.textBlue}`,
    boxSizing:'content-box',
    color: theme.palette.text,
    textAlign: 'center',
    fontSize: '26pt',
    background:'url("/assets/imgs/next.png") 70% center no-repeat',
    '&:hover': {
      backgroundColor: theme.palette.textBlue,
      color: '#fff',
      cursor: 'pointer',
      background:'url("/assets/imgs/next-white.svg")70% center no-repeat'
    }
  },
  btnTxt:{
    display:'inline-block',
    marginLeft:'-16pt'
  }
  
}));

interface Introduction {
  black?: string;
  blue?: string;
}

export const Intro: React.FC = () => {
  const classes = useStyles();
  const introduction: Introduction[][] = [
    [{
      black: 'Swap Between Stablecoins'
    }, {
      black: 'at ',
      blue: 'Always 1 : 1'
    }], [{
      black: 'Deposit Stablecoins and '
    }, {
      blue: 'Earn 68% APY'
    }], [{
      black: '153% APY for Liquidy '
    }, {
      black: 'Mining HNT'
    }], [{
      blue: 'Permanent Bonus ',
      black: 'for'
    }, {
      black: ' Providing Underbalanced '
    }, {
      black: 'Stablecoins'
    }]
  ];

  const [index, setIndex] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout>();

  const nextFrame = () => {
    setIndex(index => index === introduction.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    setInterval(nextFrame, 5000);
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>

        {(introduction[index]).map((obj) => (
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
        <span className={classes.btnTxt}> Start</span>
      </div>
    </div>
  );
};
