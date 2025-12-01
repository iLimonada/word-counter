import { forwardRef } from "react";
import './index.css'



interface TextArea {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextArea>(({ text, setText }: TextArea, textRef) => {

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    return (
        <div className="textarea-container">
            <textarea
                ref={textRef}
                value={text}
                onChange={onChangeText}
                placeholder="Digite ou cole o texto aqui...">
            </textarea>
        </div>
    );
});

export default TextArea;