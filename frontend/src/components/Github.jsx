import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../styles/Github.css";

function Github() {

    return (
        <div className="github-calendar-background">
        <div className="github-calendar-container">
            <h5> Github Calendar </h5> <br />
            <div className="github-calendar">
                <GitHubCalendar
                    username="introbond"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    theme={{
                        level0: '#2d333b',
                        level1: '#0e4429',
                        level2: '#006d32',
                        level3: '#26a641',
                        level4: '#39d353'
                    }}
                    hideColorLegend
                    showWeekdayLabels
                />
            </div>
        </div>
    </div>
    );
}

export default Github;