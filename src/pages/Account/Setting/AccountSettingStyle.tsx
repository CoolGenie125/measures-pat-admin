import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const AccountSettingStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#080821",
      padding: "96px 48px 96px 48px",
      boxSizing: "border-box",
      [theme.breakpoints.down(840)]: {
        padding: "96px 24px 96px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(540)]: {
        padding: "48px 24px 48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        padding: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    container: {
      background: "#12122E",
      borderRadius: "10px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      padding: "96px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down(840)]: {
        padding: "48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        padding: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    accountSettingTitle: {
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 48px 0px",
      textAlign: "center",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(840)]: {
        fontSize: "18px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        marginBottom: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    name: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    accountSettingForm: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      marginBottom: "24px",
    },
    formTitle: {
      color: "#55727e",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: "0em",
      textAlign: "left",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      marginBottom: "10px",
      [theme.breakpoints.down(440)]: {
        fontSize: "12px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    symbol: {
      color: "#f23a3c",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: 1.4,
      marginRight: "5px",
    },
    formTextarea: {
      width: "100% !important",
      color: "#fff",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 400,
      border: "1px solid #eeeeee",
      borderRadius: "4px",
      lineHeight: 1.4,
      letterSpacing: "0.05em",
      textAlign: "left",
      padding: "14px 10px",
      boxShadow: "none",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      minHeight: "130px",
      resize: "none",
      boxSizing: "border-box",
      "&::placeholder": {
        fontFamily: "Lato",
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: "0.05em",
        color: "#ffffff70",
        opacity: 1 /* Firefox */,
      },
      "&:focus-visible":{
        outline: "none",
      },
      "&:focus":{
        outline: "none",
      },
    },
    formBtn: {
      marginTop: "24px",
      background: "#333333",
    },
    policy: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "14px",
      lineHeight: 1.4,
    },
    checkbox: {
      marginRight: "10px",
    },
    marginRight24: {
      marginRight: "24px",
    },
    imgLoader: {
      width: "50%",
      minHeight: "46px",
      height: "auto",
      border: "1px dashed #dddddd",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    importLetter: {
      color: "#ffffff70",
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: 400,
      marginLeft: "16px",
    },
    importImg: {
      width: "100%",
      height: "100%",
    },
  })
);
