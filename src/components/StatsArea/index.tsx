import countWords from "../../utils/countWords"
import countCharacters from "../../utils/countCharacters"
import countSentences from "../../utils/countSentences";
import countParagraphs from "../../utils/countParagraphs";
import countPronouns from "../../utils/countPronouns";
import './index.css'

interface StatsAreaProps {
  text: string;
}

interface StatsInfo {
    label: string;
    value: number;
}

const StatsArea = ({ text }: StatsAreaProps) => {
    const stats:  StatsInfo[] = [
        { label: "Palavras", value: countWords(text) },
        { label: "Caracteres", value: countCharacters(text) },
        { label: "Sentenças", value: countSentences(text) },
        { label: "Parágrafos", value: countParagraphs(text) },
        { label: "Pronomes", value: countPronouns(text) }
    ]

  return (
    <div className="statsarea-container">
      <div className="statsarea-info">
        {stats.map((stat) => (
            <div className="stat" key={stat.label}>
                <span className="label">{stat.label}</span>
                <span className="value">{stat.value}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default StatsArea;