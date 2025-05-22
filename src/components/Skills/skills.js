import javascript from './js.png'
import php from './php.png'
import html from './html.png'
import css from './css.png'
import bootstrap from './bootstrap.png'
import react from './react.png'
//import nodejs from './node.png'
import mysql from './mysql.png'
//import mongodb from './mongoDB.jpg'
import git from './git.png'
import adobe from './adobe.png'
import Wordpress from './WordPress.png'
import Shopify from './Shopify.jpg'
import HubSpot from './hubspot.png'
import Contentful from './contentful.png'
import Analytics from "./analytics.png"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './skills.css'

const SkillCard = ({ src, alt, label }) => (
  <div className="skill-card">
    <img src={src} alt={alt} />
    <p>{label}</p>
  </div>
);

const Skills = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    })

return (
    <div className="skills-div" id="skills">
      <h2 data-aos="fade-down">SKILLS</h2>
      <div data-aos="fade-up" className="img-div">
        <SkillCard src={html} alt="HTML" label="HTML" />
        <SkillCard src={css} alt="CSS" label="CSS" />
        <SkillCard src={bootstrap} alt="Bootstrap" label="Bootstrap" />
        <SkillCard src={react} alt="React" label="React" />
        <SkillCard src={javascript} alt="JavaScript" label="JavaScript" />
        <SkillCard src={php} alt="PHP" label="PHP" />
        <SkillCard src={mysql} alt="MySQL" label="MySQL" />
        <SkillCard src={Wordpress} alt="WordPress" label="WordPress" />
        <SkillCard src={Shopify} alt="Shopify" label="Shopify" />
        <SkillCard src={HubSpot} alt="HubSpot" label="HubSpot" />
        <SkillCard src={Contentful} alt="Contentful" label="Contentful" />
        <SkillCard src={git} alt="Git" label="Git" />
        <SkillCard src={adobe} alt="Adobe Photoshop" label="Adobe Photoshop" />
        <SkillCard src={Analytics} alt="Google Analytics" label="Google Analytics" />
      </div>
    </div>
  );
};

export default Skills;