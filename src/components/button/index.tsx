interface ButtonProps {
  name?: string;
  styleButton?: string;
  styleText?: string;
}

function ButtonCustom(props: ButtonProps) {
  const { name, styleButton, styleText } = props;
  return (
    <button className={styleButton}>
      <span className={styleText}>{name}</span>
    </button>
  );
}

export default ButtonCustom;
