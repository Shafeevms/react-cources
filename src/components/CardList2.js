import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useMemo } from 'react-redux';
import { getCardsList } from '../store/actionCreaters';
import { gradesString } from '../helpers';

const CardList = () => {
  const [money, setMoney] = useState('рубли');
  const dispatch = useDispatch();
  let { data, er } = useSelector(store => store.cardList);
  const filteredData = useSelector(store => store.filter);
  console.log(data, filteredData);
  console.log(data.filter(el => el.subject  === filteredData));

  useEffect(() => {
    dispatch(getCardsList());
  }, [dispatch]);

  // useEffect(() => {
  //   data = data.filter(el => el.subject  === filteredData);
  //   console.log(data);
  // }, [filteredData]);

  const filtredCardList = useMemo(() => data.filter(el => el.subject === filtredData), [filtredData]);

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
            : data.map(card => (
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
