import React from 'react';
import './Furnitura.css';
import posed from 'react-pose';  
const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: 'block',
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: 'none',
    },
  },
});

class Furnitura extends React.Component {
    state = {
      visible: false,
    }
    changeVisibility = (e) => {
      // eslint-disable-next-line no-invalid-this
      this.setState({
        // eslint-disable-next-line no-invalid-this
        visible: !this.state.visible,
      });
    }
 
  
    render() {
      const {visible} = this.state;
      return (
        <>
          <div className="container">
           
            <div className="search">
              <h1>Фурнитура</h1>
            ****************************************
              <button onClick = 
                {this.changeVisibility} 
              className="button">
                {visible ? 'Закрыть поиск' : 'Открыть поиск'}
              </button>
              <Animation pose = {visible ? 'visible' : 'hidden'}>
                <div className="form-btn">
                  <div className="card">
                    <div className="card-header">
                      <h4>Поисковой отдел</h4>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form">
                          <label htmlFor="name">Выберите Артикул</label>
                    
                          <select id="" >
                            <option value="nit">CB-516</option>
                            <option value="nit">T-21</option>
                            <option value="zamok">T-19</option>
                            <option value="paket">CB-5149</option>
                          </select>
                        </div>
                    
                        <div className="form">
                          <label htmlFor="name">Выберите Фурнитура</label>
                    
                          <select id="" name="" >
                            <option value="nit">Нить Хб</option>
                            <option value="nit">Нить Вискоза</option>
                            <option value="zamok">Замок</option>
                            <option value="paket">Пакет</option>
                          </select>
                        </div>
      

                        <button className="s-button" 
                          type="submit">Поиск</button>

                      </form>
                    </div>
                  </div>
                </div>
              </Animation>
          

              <div className="vid">
       
                <table className="vid-style">
                  <thead>
                    <tr>
                      <th rowSpan="2">Приход:</th>
                      <td>40</td>
                      <th>кг</th>
                    </tr>
                    <tr>
                      <td>14000</td> 
                      <th>сом</th>
                    </tr>
                  </thead> 
                </table>
                
                <table className="vid-style">
                  <thead>
                    <tr>
                      <th rowSpan="2">Остаток:</th>
                      <td>10</td>
                      <th>кг</th>
                    </tr>
                    <tr>
                      <td>3500</td>
                      <th>сом</th>
                    </tr>
                  </thead> 
                </table>

                <table className="vid-style">
                  <thead>
                    <tr >
                      <th rowSpan="2">Цена:</th>
                      <td>350</td>
                      <th>сом</th>
                    </tr>
                    
                  </thead>
                </table>
              </div>
            </div>
            
            <div className="tab">
              <table className="tab-style">
                <thead className="shapka">
                  <tr>

                    <th><a href="/Article">Артикул</a> </th> 
                    <th>Количество</th>
                    <th>Наимен(тех.харак) </th> 
                    <th>Код</th>

                    <th>Приход</th>
                    <th>Расход</th>
                    <th>Остаток</th>
                    <th>Адресс</th>
                    <th>Цена</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>СВ-516</td>
                    <td>30000</td>
                    <td>Нить Хб</td>
                    <td>2521</td>
                    <td>69</td>
                    <td>65</td>
                    <td>4</td>
                    <td>Бишкек</td>
                    <td>65</td>

                  </tr>
                  <tr>
                    <td>Т-21</td>
                    <td>15000</td>
                    <td>Нит Вискоза</td>
                    <td>0078</td>
                    <td>100</td>
                    <td>85</td>
                    <td>15</td>
                    <td>Бишкек</td>
                    <td>450</td>
                  </tr>

                  <tr>
                    <td>СВ-516</td>
                    <td>30000</td>
                    <td>Замок</td>
                    <td>0075</td>
                    <td>84</td>
                    <td>80</td>
                    <td>4</td>
                    <td>Бишкек</td>
                    <td>45</td>

                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }
}
export default Furnitura;
