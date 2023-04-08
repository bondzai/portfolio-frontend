import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IconSchool from "@material-ui/icons/School";
import IconWork from "@material-ui/icons/Work";
import IconInt from "@material-ui/icons/LocalLibraryOutlined";
import { IoMdPulse } from "react-icons/io";

import "../styles/Experience.css";

const Experience = () => {
    const born = new Date("02/03/1994");
    const ageMonth = Date.now() - born.getTime();
    const ageDay = new Date(ageMonth);
    const ageYear = ageDay.getUTCFullYear();
    const age = Math.abs(ageYear - 1970);

    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="Feb 1994"
                    icon={<IoMdPulse />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Born in Ubon Rachatani, Thailand </h3>
                    <p> Age: {age} years old</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="2009 - 2012"
                    icon={<IconSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Benchama Maharat Ubon Ratchatani </h3>
                    <p> High School Diploma: Sci-Math</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="2012 - 2016"
                    icon={<IconSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> King Mongkut's Institute of Technology Ladkrabang </h3>
                    <p> Bachelor's Degree: Automation Engineering </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="Jul 2016 - Jan 2022 (5 years 7 months)"
                    icon={<IconWork />}
                    iconStyle={{ background: "royalblue", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Synergetech Co., Ltd., Nonthaburi, Thailand </h3>
                    <p> Role: Automation System Engineer </p>
                    <p> Responsibilities: Designed, developed, debugged, deployed & delivered automation projects (especially automated batch control system)</p>
                    <p> &emsp; - PLC, SCADA & Database programming </p>
                    <p> &emsp; - Implement analog signals, digital devices, I/O server & other 3rd party integrations by any protocol of choice </p>
                    <p> Specializes in: </p>
                    <p> &emsp; - PLC: Rockwell & Schneider Electric </p>
                    <p> &emsp; - HMI & SCADA: WSP, InTouch & InBatch </p>
                    <p> &emsp; - Virtual Environment: VMware Workstation & ESXi </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="Jan 2022 - Nov 2022"
                    icon={<IconInt />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Self-learning: Software Development </h3>
                    <p> Q2: </p>
                    <p> &emsp; - Traditional system programming practice. Laser focus on logic, loop, data structure & algorithm. </p>
                    <p> &emsp; - Built blockchain's data monitoring mobile application using Google cloud environment. </p>
                    <p> Q3: </p>
                    <p> &emsp; - Start using git & GitHub. Start learning web development tools, libraries & frameworks.(JavaScript stack - TypeScript, React.js, Node.js & Express.js)</p>
                    <p> Q4: </p>
                    <p> &emsp; - Start learning Python for backend services. Start learning software lifecycle, CI/CD tools, tech & workflow.</p>
                    <p> &emsp; - Become a better backend developer. Pushing more open-source projects. Further down the road, keep learning.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="Nov 2022 - Present"
                    icon={<IconWork />}
                    iconStyle={{ background: "royalblue", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Swift Dynamics Co., Ltd., Bangkok, Thailand </h3>
                    <p> Role: Backend Developer </p>
                    <p> Responsibilities: <br />
                        &emsp; -Fully focus on design & develop many type of backend services (Database, logic & API). <br />
                        &emsp; -Implement communication networks & backend protocols. <br />
                        &emsp; -Co-work with peer engineers in coding & code reviews. <br />
                    </p>
                    <p> Specializes in: </p>
                    <p> &emsp; - Languages: JavaScript, Python, Go</p>
                    <p> &emsp; - Backend Stacks:</p>
                    <p> &emsp;&emsp; - Python: Django REST</p>
                    <p> &emsp;&emsp; - JavaScript: Node & Express</p>
                    <p> &emsp;&emsp; - Go: Fiber & Gin</p>
                    <p> &emsp; - Other tools & middlewares:</p>
                    <p> &emsp;&emsp; - Infrastructure: Docker</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;