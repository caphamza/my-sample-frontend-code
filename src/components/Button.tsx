type Props = {
  btnText: string;
  color: string;
  style?: string;
  type?: string;
};

export default function button({
  btnText = "",
  color,
  style = "full-width",
  type = "button",
}: Props) {
  return (
    <button className={`button-${color} button-${style}`}>
      <p>{btnText}</p>
    </button>
  );
}
