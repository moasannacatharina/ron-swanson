import { DivStyled, TextStyled } from "./styles.js";
import "./quote.css";
const Quote = (props) => {
  return (
    <DivStyled className={props.visible}>
      <TextStyled>{props.children}</TextStyled>
    </DivStyled>
  );
};

export default Quote;
