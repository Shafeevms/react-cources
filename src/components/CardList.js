import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsList } from '../store/actionCreaters';
import { gradesString, searchString } from '../helpers';

const CardList = () => {
  const [money, setMoney] = useState('рубли');
  const dispatch = useDispatch();
  const { data, er } = useSelector(store => store.cardList);
  const { filterBySubject, filterByGenre, filterByGrade, search } = useSelector(store => store.filter);
  console.log('data', data);

  useEffect(() => {
    dispatch(getCardsList());
  }, [dispatch]);

  const filteredCardList = useMemo(() => {
    let result;
    if (filterBySubject) {
      result = data.filter(el => el.subject.includes(filterBySubject));
    }
    if (filterByGenre) {
      result = data.filter(el => el.genre.includes(filterByGenre));
    }
    if (filterByGrade) {
      result = data.filter(el => el.grade.includes(filterByGrade));
    }
    if (search) {
      result = searchString(result, search);
    }
    console.log('result', result);
    return result;
  }, [data, search, filterBySubject, filterByGenre, filterByGrade]);
  console.log('filteredCardList', filteredCardList);

  return (
    <main className="container">
      <select onChange={e => setMoney(e.target.value)} className="change__currancy">
        <option value="рубли">Рубли</option>
        <option value="бонусы">Бонусы</option>
      </select>
      <ul className="flex cardlist">
        {
          er
            ? <li>Не удалось загрузить данные...</li>
            : filteredCardList.map(card => (
              <li className="cardlist__item article" key={card.courseId}>
                <img className="article__img" src="./img/4306.png" alt={card.subject} />
                <article className="article__content">
                  <h2 className="article__subj">{card.subject}</h2>
                  <h2 className="article__grades">{gradesString(card.grade)}</h2>
                  <h3 className="article__genre">{card.genre}</h3>
                  <a className="article__more" href="#">Подробнее</a>
                  <a className="article__try" href="#">{money === 'рубли' ? `${card.price} руб` : `${card.priceBonus} бонусов`}</a>
                </article>
              </li>
            ))
        }
      </ul>
    </main>
  );
};

export default CardList;
