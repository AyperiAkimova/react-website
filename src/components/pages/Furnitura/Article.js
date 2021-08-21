import React from 'react';
import './Article.css';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #0AB8E7 30%, #09EFF7 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width: '180px',
    height: 48,
    margin: 10,
   
  },
});
export default function Article() {
  const classes = useStyles();
   
  return (
            
    
    <>
      <div className="container">
        <div className="prihod">
          <h1> Артикул</h1>
          ********************************
         
          <Button href="/ArticlePage" className={classes.root}>
            Добавить
          </Button> 
          <Button className={classes.root}>Обновить</Button> 
          <Button href="/DeletePage" className={classes.root}>Удалить</Button>
          <Button href="/Furnitura" className={classes.root}>Назад</Button>
        </div>
        <div className="tab">
          <table className="tab-style">
            <thead className="shapka">
              <tr>
                <th>Наименование</th>
                <th>Размерный ряд</th>
                <th>Тех харак</th>
                <th>Дата начала</th>
                <th>Количество</th>
                <th>Дата окончания</th>
                <th>Цена</th>
                <th>Контрагенты</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>CВ-516</td>
                <td>5</td>
                <td>Детские шорты</td>
                <td>2021-01-01</td>
                <td>30000</td>
                <td>0</td>
                <td>65</td>
                <td>Trade center</td>
              </tr>

              <tr>
                <td>Т-21</td>
                <td>5</td>
                <td>Безрукавка</td>
                <td>2021-01-01</td>
                <td>80000</td>
                <td>0</td>
                <td>65</td>
                <td>Ту Гуен</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

