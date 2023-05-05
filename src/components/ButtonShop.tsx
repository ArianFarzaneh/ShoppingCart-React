type Props = {
  text: string;
  cssClass: string;
  onClick: () => void;
  disabled:boolean;
};
function ButtonShop({ text, cssClass, onClick , disabled }: Props) {
  return (
    <button onClick={onClick} className={cssClass} disabled={disabled}>
      {text}
    </button>
  );
}

export default ButtonShop;
