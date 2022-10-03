type Props = {
  btnText: string;
  color: string;
  style?: string;
  type?: string;
  size?: string;
  onClick: () => void;
};

export default function button({
  btnText = "",
  color,
  style = "full-width",
  type = "button",
  size = "md",
  onClick,
}: Props) {
  return (
    <button
      className={`button-${color} button-${style} button-${size}`}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <p>{btnText}</p>
    </button>
  );
}
