type Props = {
  btnText: string;
  color: string;
  style?: string;
  type?: string;
  size?: string;
};

export default function button({
  btnText = "",
  color,
  style = "full-width",
  type = "button",
  size = "md",
}: Props) {
  return (
    <button className={`button-${color} button-${style} button-${size}`}>
      <p>{btnText}</p>
    </button>
  );
}
