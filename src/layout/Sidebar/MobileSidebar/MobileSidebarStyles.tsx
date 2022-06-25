import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "none",
      position: "fixed",
      textAlign: "center",
      width: "300px",
      boxSizing: "border-box",
      background: "#080821",
      padding: "48px 12px 48px 12px",
      height: "100%",
      zIndex: 2,
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      [theme.breakpoints.down(840)]: {
        display: "unset",
        width: "50%",
      },
    },
    logoImg: {
      width: "167px",
      height: "44px",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
      [theme.breakpoints.down(400)]: {
        width: "100px",
        height: "25px",
      },
    },
    avatarRoot: {
      marginTop: "24px",
      marginBottom: "72px",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
      },
    },
    avatarImg: {
      width: "64px",
      height: "64px",
      borderRadius: "50px",
      marginBottom: "12px",
    },
    avatarName: {
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      height: "16px",
    },
    avatarJob: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      height: "16px",
      marginTop: "12px",
    },
    mobileSidebarContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#12122E",
      borderRadius: "15px",
    },
    mobileSidebarItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "71px",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      margin: "0 12px",
      cursor: "pointer",
      "&:hover": {
        background: "#21263F",
      },
    },
    itemImg: {
      background: "rgba(0,0,0,0.0)",
      borderRadius: "12px",
      marginRight: "12px",
      width: "40px",
      height: "40px",
      minWidth: "40px",
      [theme.breakpoints.down(500)]: {
        margin: 0,
      },
    },
    itemContent: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      padding: "0 12px",
      minWidth: "171.2px",
      boxSizing: "border-box",
      textAlign: "start",
      [theme.breakpoints.down(500)]: {
        minWidth: "133px",
      },
      [theme.breakpoints.down(400)]: {
        minWidth: "80px",
        fontSize: "12px",
      },
    },
    itemBtn: {
      "& i": {
        color: "#9ab0bc",
        fontSize: "24px",
        height: "20px",
        width: "16px",
      },
    },
    closePart: {
      display: "none",
      [theme.breakpoints.down(840)]: {
        left: "50%",
        width: "50%",
        position: "fixed",
        top: 0,
        height: "100%",
        display: "flex",
        justifyContent: "right",
        padding: "30px",
        zIndex: 2,
        backgroundColor: "rgb(0, 0, 0, 0.7)",
        boxSizing: "border-box",
      },
    },
    closeRootIcon: {
      cursor: "pointer",
      "& i": {
        color: "#fff",
        fontSize: "35px",
        lineHeight: "35px",
      },
    },
    displayNone: {
      display: "none",
    },
    displayShow: {
      display: "unset",
    },
  })
);
