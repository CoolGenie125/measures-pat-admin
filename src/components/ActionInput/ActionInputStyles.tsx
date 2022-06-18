import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const ActionInputStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      color: "#fff",
      border: "1px solid transparent",
      background: "#23233D",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 400,
      borderRadius: "4px",
      lineHeight: 1.4,
      letterSpacing: "0.05em",
      textAlign: "left",
      padding: "14px 10px",
      boxShadow: "none",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
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
  })
);
