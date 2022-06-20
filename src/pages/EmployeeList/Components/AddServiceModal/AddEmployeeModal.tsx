import { useStyles } from "./AddEmployeeModalStyle";
import { useState, useEffect, useRef } from "react";
import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";

interface AddEmployeeModalProps {
  show: boolean;
  onClose: () => void;
  action: (e: any) => void;
}
export default function AddEmployeeModal({
  show,
  onClose,
  action,
}: AddEmployeeModalProps) {
  const classes = useStyles();

  const [showStatus, setShowStatus] = useState(show);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  //---input img function------------------
  const inputFile = useRef<HTMLInputElement>(null);
  const [importImg, setImportImg] = useState<any>();

  const onImgImport = ({
    currentTarget: { files, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length && name === "importImg") setImportImg(files[0]);
  };

  const handleFileInput = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const handleNext = () => {
    let inputProps: any = {
      name: name,
      email: email,
      des: phone,
      img: URL.createObjectURL(importImg),
    };
    action(inputProps);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

  useEffect(() => {
    setShowStatus(show);
  }, [show]);

  return (
    <>
      <div
        className={showStatus ? classes.loaderWrapper : classes.displayNone}
        ref={rootRef}>
        <div className={classes.modalRoot} ref={contentRef}>
          <div className={classes.title}>サービス追加</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              以下の入力を正確に記入してください
            </div>
            <div className={classes.imgLoaderRoot}>
              <div className={classes.imgLoader} onClick={handleFileInput}>
                <input
                  id='fileimport'
                  name='importImg'
                  accept='image/*'
                  type='file'
                  autoComplete='off'
                  tabIndex={-1}
                  style={{ display: "none" }}
                  ref={inputFile}
                  onChange={onImgImport}
                />
                {importImg ? (
                  <img
                    src={URL.createObjectURL(importImg)}
                    alt='image'
                    className={classes.importImg}
                  />
                ) : (
                  <div className={classes.importLetter}>
                    サービス画像を選択してください
                  </div>
                )}
              </div>
            </div>

            <div className={classes.form}>
              <div className={classes.formTitle}>名前</div>
              <ActionInput
                value={name}
                action={(e) => setname(e)}
                placeholder='ここに名前を入力してください。'
              />
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>Eメール</div>
              <ActionInput
                value={email}
                action={(e) => setemail(e)}
                placeholder='ここにEメールを入力してください。'
              />
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>電話</div>
              <ActionInput
                value={phone}
                action={(e) => setphone(e)}
                placeholder='ここに電話番号を入力してください。'
              />
            </div>
          </div>
          <div className={classes.btnContainer}>
            <ActionButton
              content='キャンセル'
              className={classes.cancelBtn}
              action={onClose}
            />
            <ActionButton
              content='追加'
              type='dark'
              className={classes.confirmBtn}
              action={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}
