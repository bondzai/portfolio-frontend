import WakatimeStat from "../components/WakatimeStats";
import Github from '../components/Github';
import "../styles/Stats.css";

const Stats = () => {
    return (
        <div className="stats-background">
            <div className="stats-content">
                <div className="stats-waka">
                    <WakatimeStat />
                </div>
                <div className="stats-github">
                    <Github />
                </div>
            </div>
        </div>
    );
};

export default Stats;
