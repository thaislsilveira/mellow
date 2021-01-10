import React from 'react';

import { Container } from './styles';

import foodsImg from '../../assets/foods.png';
import panImg from '../../assets/pan.svg';
import avocadoImg from '../../assets/avocado.svg';
import bowlImg from '../../assets/bowl.svg';

const Princing: React.FC = () => {
  const arrayImage = [panImg, avocadoImg, bowlImg];

  return (
    <Container id="princing">
      <div className="image-left">
        <img src={foodsImg} alt="foods" />
      </div>
      <div className="main-right">
        <main>
          <h1>Your subscription has expired...</h1>
          <div className="main-p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              interdum urna, et sagittis libero. In eros nunc, congue eget elit
              at
            </p>
          </div>
          <div className="main-cards">
            {arrayImage.map(image => {
              return (
                <div key={image} className="card">
                  <h2>Plan 01</h2>
                  <p>7 Days trial</p>
                  <img src={image} alt="Pan" />
                  <ul className="card-ul-left">
                    <li className="card-li">Users</li>
                    <li className="card-li">Save Recipes </li>
                    <li className="card-li">Manage Purchase</li>
                    <li className="card-li">Compare Price</li>
                    <li className="card-li">New recipes every week</li>
                  </ul>
                  <ul className="card-ul-right">
                    <li className="card-li">-</li>
                    <li className="card-li">-</li>
                    <li className="card-li">-</li>
                    <li className="card-li">-</li>
                    <li className="card-li">-</li>
                  </ul>
                  <button type="button" className="card-button">
                    LET’S TRY
                  </button>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </Container>
  );
};
export default Princing;
