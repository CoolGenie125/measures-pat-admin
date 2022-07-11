import { useNavigate } from "react-router-dom";
import { UsageCard } from "./component/UsageCard/UsageCard";
import { UsageStyles } from "./UsageStyle";

export const Usage = () => {
  const classes = UsageStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.usageTitle}>利用方法</div>
        <UsageCard />
        <UsageCard />
        <UsageCard />
        <UsageCard />
        <UsageCard />
      </div>
    </>
  );
};
