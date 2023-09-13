import React from "react";
import student from '../../../images/photo.png';
import { Link } from "react-router-dom";
import LinkedText from '../../Common/LinkedText/LinkedText';
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import './about-me.css';


function AboutMe() {
  return (
    <section className="about-me" id='about-me' aria-label="Обо мне">
      <SectionHeader text='Студент' />
      <article className="about-me__personality-placeholder">
        <div className="about-me__personality-text-placeholder">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link className="about-me__link link" to="https://github.com/Lil-Krl/" target="_blank" rel="noopener noreferrer">Github</Link>
        </div>
        <img className="about-me__personality-image" alt="Фотография 'обо мне'" src={student}></img>
      </article>
      <h4 className="about-me__portfolio-header">Портфолио</h4>
      <ul className="about-me__portfolio-items">
        <li className="about-me__portfolio-item">
          <LinkedText
            text='Статичный сайт'
            url='https://github.com/Lil-Krl/how-to-learn'
            underlined={true}
          />
        </li>
        <li className="about-me__portfolio-item">
          <LinkedText
            text='Адаптивный сайт'
            url='https://github.com/Lil-Krl/russian-travel'
            underlined={true}
          />
        </li>
        <li className="about-me__portfolio-item">
          <LinkedText
            text='Одностраничное приложение'
            url='https://github.com/Lil-Krl/react-mesto-api-full-gha'
          />
        </li>
      </ul>
    </section>
  );
}
export default AboutMe;
