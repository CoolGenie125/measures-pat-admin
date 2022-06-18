import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import { useState } from "react";
import { ContactStyles } from "./ContactStyle";

export const Contact = () => {
  const classes = ContactStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contactTitle}>
          弊社へのお問い合わせは
          <br />
          こちらのフォームより承っております。
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            お名前 <span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            value={name}
            placeholder='こちらのフォームより承っております'
            action={(e) => setName(e)}
          />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            メールアドレス <span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            value={email}
            placeholder='こちらのフォームより承っております'
            action={(e) => setEmail(e)}
          />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            お問い合わせ内容 <span className={classes.symbol}>*</span>
          </div>
          <textarea
            className={classes.formTextarea}
            value={inquiry}
            placeholder='こちらのフォームより承っております'
            onChange={(e) => setInquiry(e.target.value)}
          />
        </div>
        <div className={classes.policy}>
          <input type='checkbox' className={classes.checkbox} />
          プライバシーポリシーに同意して送信する
        </div>
        <ActionButton
          type='dark'
          content='この内容で送信する'
          className={classes.formBtn}
        />
      </div>
    </div>
  );
};
