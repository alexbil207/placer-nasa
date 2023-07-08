import "./style.css";

interface IModal {
  msg: string;
  color: string;
}

export const Toast = ({ msg, color }: IModal) => {
  return (
    <div className="toast-notification" style={{ backgroundColor: color }}>
      {msg}
    </div>
  );
};
