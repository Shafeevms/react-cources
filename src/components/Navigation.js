import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../store/actionCreaters';

const subjects = ['Все предметы', 'Алгебра', 'Английский', 'Биология', 'География', 'Геометрия'];
const genres = ['Все жанры', 'Демо', 'Задачник', 'Подготовка к ВПР', 'Подгтовка к ЕГЭ', 'Рабочая тетрадь'];
const classes = ['Все классы', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

const Navigation = () => {
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <nav className="navigation container">
      <h2 className="navigation__title">Витрина</h2>
      <form className="navigation__form flex">
        <div className="navigation__wrapper">
          <select className="navigation__select" onChange={changeHandler}>
            {
              subjects.map((subj, index) => (
                <option value={subj} key={index}>{subj}</option>
              ))
            }
          </select>
          <select className="navigation__select">
            {
              genres.map((genre, index) => (
                <option value={genre} key={index}>{genre}</option>
              ))
            }
          </select>
          <select className="navigation__select">
            {
              classes.map((el, index) => (
                <option value={el} key={index}>{el}</option>
              ))
            }
          </select>
        </div>
        <div className="navigation__group">
          <input className="navigation__input" placeholder="Поиск" />
          <button className="navigation__btn"><img src="./img/search.png" alt="поиск" className="navigation__img" /></button>
        </div>
      </form>
    </nav>
  );
};

export default Navigation;
