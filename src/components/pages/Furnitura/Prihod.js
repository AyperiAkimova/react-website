import React from 'react';
import './Prihod.css';
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
export default function Prihod() {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <div className="prihod">
          <h1> Приход</h1>
          ********************************
          <Button href="/PrihodPage" 
            className={classes.root}>Приход/Расход</Button> 
          {/* <Button href="/RashodPage" 
          className={classes.root}>Расход</Button> */}
          <Button href="/UpdatePage" 
            className={classes.root}>Обновить</Button> 
          <Button href="/DeletePage" className={classes.root}>Удалить</Button>
          <Button href="/" className={classes.root}>Назад</Button>
        </div>
        <div className="table">
          <table className="tb-style">
            <thead>
              <tr>
  
                <th>Наименование(тех.харак) </th> 
                <th>Код</th>
                <th>Количество</th>
                <th>Приход/Расход</th>
                <th>Адрес</th>
                <th>Дата</th>
                <th>ед.изм</th>
                <th>Цена</th>
                <th>Артикул</th>
              </tr>
              <tr>
                <td>Нит Вискоза</td>
                <td>0078</td>
                <td>100</td>
                <td>Бишкек</td>
                <td>2021-02-03</td>
                <td>-</td>
                <td>кг</td>
                <td>450</td>
                <td>Т-21</td>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td>Нит Хб</td>
                <td>1278</td>
                <td>69</td>
                <td>Бишкек</td>
                <td>2021-02-02</td>
                <td>-</td>
                <td>кг</td>
                <td>365</td>
                <td>CB-516</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
