import "./Backdrop.css";

const backdrop = (props) => {
  const css = ["Backdrop", props.show ? "BackdropOpened" : "BackdropClosed"];
  return <div className={css.join(" ")}></div>;
};
export default backdrop;
