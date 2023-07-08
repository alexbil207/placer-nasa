interface IOptions {
  value: string;
  handleClick: (value: string) => void;
}
export const Options = ({ value, handleClick }: IOptions) => {
  return (
    <p className="cursor-pointer" onClick={() => handleClick(value)}>
      {value}
    </p>
  );
};
