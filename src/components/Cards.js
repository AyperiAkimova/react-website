import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>ЖАЛПЫ МААЛЫМАТ</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/5.jpeg'
              text='ОсОО "Глобал Гармент" фабрикасы 2019-ж 
              3-октябрь айында негизделип, 
              Баткен облусунун Кызыл-Кыя шаарында ачылган жана ондурууну
               24.03.2020 кунунон баштаган.'
              label='Global Garment'
             
            />
            <CardItem
              src='./images/1.jpeg'
              text='"Глобал Гармент" фабрикасынын продукция ондуруу
               колому орто эсеп менен 
              айына 25-30 тонна кездеме колдонулат б.а. 500000 
              дана кийим ондурулот.'
              label='Global Garment'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/8.jpeg'
              text='Сырье Турция, Узбекстан, Кытай олколорунон алынып келинет.'
              label='Global Garment'
             
            />
            <CardItem
              src='./images/4.jpeg'
              text='Тигуу машиналар саны 350
                    Жумушчу саны 400.'
              label='Global Garment'
              
            />
            <CardItem
              src='./images/2.jpeg'
              text='Сатуу КМШ(Азербайжан, Казакстан, Узбекстан, Россия, 
                Беларусия, Молдавия, Тажикстан ж.б.) олколоруно жургузулот.'
              label='Global Garment'
             
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
