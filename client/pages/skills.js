import React, { useContext } from "react";
import {
    SiPython, SiJava, SiJavascript, SiReact,
    SiDjango, SiSqlite, SiMongodb, SiNodedotjs,
    SiGit, SiHtml5, SiCss3
} from "react-icons/si";
import ContainerSkills from "../components/ContainerSkill";
import Kivy from "../images/kivy.png";
import D3 from "../images/d3.png";
import languageContext from "../context/languageContext";
import handleLanguage from "../utils/languageHandle";

export default function SkillPage() {

    const { language } = useContext(languageContext);
    const data = handleLanguage(language);

    return (
        <section id="skill-pg" className="flex-style">
            <div className="skill-container flex-style">
                <h2 className="text-center">{data[0].content.skillTitle1}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills
                        icon={<SiPython className="icon" />} name="Python"
                    />
                    <ContainerSkills
                        icon={<SiJava className="icon" />} name="Java"
                    />
                    <ContainerSkills
                        icon={<SiJavascript className="icon" />} name="JavaScript"
                    />
                </div>
                <h2 className="text-center">{data[0].content.skillSubtitle1}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills
                        icon={<SiReact className="icon" />} name="React Js"
                    />
                    <ContainerSkills
                        icon={<img src={D3} className="icon img-resp" />} name="D3 Js"
                    />
                </div>
            </div>
            <div className="skill-container flex-style">
                <h2 className="text-center">{data[0].content.skillTitle2}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills
                        icon={<SiDjango className="icon" />} name="Django"
                    />
                    <ContainerSkills
                        icon={<img src={Kivy} className="icon img-resp" />} name="Kivy"
                    />
                </div>
                <h2 className="text-center">{data[0].content.skillSubtitle2}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills
                        icon={<SiSqlite className="icon" />} name="SQLite"
                    />
                    <ContainerSkills
                        icon={<SiMongodb className="icon" />} name="MongoDB"
                    />
                </div>
            </div>
            <div id="others-div" className="flex-style">
                <h2 className="text-light text-center">{data[0].content.skillTitle3}</h2>
                <div className="flex-style">
                    <ContainerSkills
                        icon={<SiNodedotjs className="icon" />} name="Node Js"
                    />
                    <ContainerSkills
                        icon={<SiGit className="icon" />} name="Git"
                    />
                    <ContainerSkills
                        icon={<SiHtml5 className="icon" />} name="Html"
                    />
                    <ContainerSkills
                        icon={<SiCss3 className="icon" />} name="Css"
                    />
                </div>
            </div>
        </section>
    )
}