import Header from "../components/Navbar";
import Footer from "../components/Footer";
import TextArea from "../components/TextArea";
import StatsArea from "../components/StatsArea";
import BottomStatsArea from "../components/BottomStatsArea";
import { useState, useEffect, useRef } from "react";
import '../App.css'

const Home = () => {
    
    const [text, setText]  = useState<string>("");

    const stateAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        stateAreaRef.current?.focus()
    }, [])

    return (
        <div>
            <div className="main-container">
                <Header />
                <StatsArea text={text}/>
                <TextArea text={text} setText={setText} ref={stateAreaRef}/>
                <BottomStatsArea text={text}/>
                <Footer />
            </div>
        </div>
    )
}

export default Home;