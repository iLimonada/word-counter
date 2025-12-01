import countWords from "../../utils/countWords"
import countCharacters from "../../utils/countCharacters"
import countSentences from "../../utils/countSentences";
import countParagraphs from "../../utils/countParagraphs";
import countPronouns from "../../utils/countPronouns";
import './index.css'

interface StatsAreaProps {
  text: string;
}

const StatsArea = ({ text }: StatsAreaProps) => {
  return (
    <div className="statsarea-container">
      <div className="statsarea-info">

        <div className="stat">
          <span className="label">Palavras</span>
          <span className="value">{countWords(text)}</span>
        </div>

        <div className="stat">
          <span className="label">Caracteres</span>
          <span className="value">{countCharacters(text)}</span>
        </div>

        <div className="stat">
          <span className="label">Sentenças</span>
          <span className="value">{countSentences(text)}</span>
        </div>

        <div className="stat">
          <span className="label">Parágrafos</span>
          <span className="value">{countParagraphs(text)}</span>
        </div>

        <div className="stat">
          <span className="label">Pronomes</span>
          <span className="value">{countPronouns(text)}</span>
        </div>

      </div>
    </div>
  );
};

export default StatsArea;