import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_BY_SUBJECT, SEARCH } from '../store/actionTypes';

const subjects = ['Все предметы', 'Алгебра', 'Английский', 'Биология', 'География', 'Геометрия'];
const genres = ['Все жанры', 'Демо', 'Задачник', 'Подготовка к ВПР', 'Подгтовка к ЕГЭ', 'Рабочая тетрадь'];
const classes = ['Все классы', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

const Navigation = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const filterSubject = (e) => {
    dispatch({
      type: FILTER_BY_SUBJECT,
      payload: e.target.value
    });
  };
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: SEARCH,
      payload: inputValue
    });
  };
  const changeHandlerInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <nav className="navigation container">
      <h2 className="navigation__title">Витрина</h2>
      <form className="navigation__form flex">
        <div className="navigation__wrapper">
          <select className="navigation__select" onChange={(e) => filterSubject(e)}>
            {
              subjects.map((subj, index) => (
                <option value={subj === 'Все предметы' ? '' : subj} key={index}>{subj}</option>
              ))
            }
          </select>
          <select className="navigation__select" >
            {
              genres.map((genre, index) => (
                <option value={genre === 'Все жанры' ? '' : genre} key={index}>{genre}</option>
              ))
            }
          </select>
          <select className="navigation__select" >
            {
              classes.map((grade, index) => (
                <option value={grade === 'Все классы' ? '' : grade} key={index}>{grade}</option>
              ))
            }
          </select>
        </div>
        <div className="navigation__group">
          <input
            value={inputValue}
            className="navigation__input"
            placeholder="Поиск"
            onChange={changeHandlerInput}
          />
          <button className="navigation__btn" onClick={clickHandler}>
            <img src="./img/search.png" alt="поиск" className="navigation__img" />
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navigation;
