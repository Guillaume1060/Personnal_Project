import ReactDOM from "react-dom";
import classes from "./modal.module.scss";

const Backdrop = (props) => {
  return <div onClick={props.onCart} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
// TODO ajout useState pour gestion du modal
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCart={props.onCart} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
  );
};
export default Modal;
