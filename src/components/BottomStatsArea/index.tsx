import averageReadingTime from "../../utils/averageReadingTime";
import longestWord from "../../utils/longestWord";
import './index.css'

interface BottomStatsArea {
  text: string;
}

const BottomStatsArea = ({ text }: BottomStatsArea) => {
    return (
        <div className="bottom-statsarea-container">
            <div className="bottom-statsarea-container-info">
                <span>Tempo de leitura: {averageReadingTime(text)}</span>
                <span>Palavra mais longa: {longestWord(text)}</span>
            </div>
        </div>
    );
};

export default BottomStatsArea;