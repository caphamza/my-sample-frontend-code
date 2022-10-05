type Props = {
  btnText: string;
  color: "primary" | "secondary";
  style?: object;
  size?: "md" | "lg";
  width?: string;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
};

export default function button({
  btnText = "",
  type = "button",
  color = "primary",
  size = "md",
  width = "100%",
  style,
  onClick,
}: Props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`button-${color} button-${size}`}
      style={{ width, ...style }}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <p>{btnText}</p>
    </button>
  );
}
