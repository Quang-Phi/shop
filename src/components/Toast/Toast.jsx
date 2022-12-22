import { useSelector } from "react-redux";
import "./toast.scss";

export default function () {const toastState = useSelector((state) => state.toast);
  
  const icons = {
    success: 'fa-solid fa-thumbs-up',
    error: 'fa-solid fa-circle-exclamation'
  }
  const icon = icons[toastState.type]
  return (
    <>
      <div className={`toast ${toastState.type}  ${toastState.toast ? "active" : ""}`}>
        <div className="icon">
          <i className={`${icon}`}></i>
        </div>
        <div className="body">
          <h3>{toastState.title}</h3>
          <p>{toastState.message}</p>
        </div>
        <div className="close">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </>
  );
}
