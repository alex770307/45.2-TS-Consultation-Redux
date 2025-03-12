// import { JSX, useState } from "react";
import './Sandwich.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { JSX } from 'react';

export default function Sandwich(): JSX.Element {
  // const [ingredients, setIngredients] = useState<string>("Бутербродный конфигуратор: ");
  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  const dispatch = useDispatch();

  const addBread = (): void => {
    dispatch({ type: "sandwich/addIngredient", payload: "хлеб 🍞" });
    // setIngredients(`${ingredients} хлеб 🍞`);
  };

  const addCheese = (): void => {
    dispatch({ type: "sandwich/addIngredient", payload: "Сыр 🧀" });
    // setIngredients(`${ingredients} Сыр 🧀`);
  };

  const addSausage = (): void => {
    dispatch({ type: "sandwich/addIngredient", payload: "Колбаса 🍠" });
    // setIngredients(`${ingredients} Колбаса 🍠`);
  };

  const addSalad = (): void => {
    dispatch({ type: "sandwich/addIngredient", payload: "Салат 🥦" });
    // setIngredients(`${ingredients} Салат 🥦`);
  };
  const resetResults = (): void => {
    dispatch({ type: "sandwich/clear"});
    // setIngredients("Бутербродный конфигуратор: ");
  };

  return (
    <div>
      <h1>Sendwich</h1>
      <img
        src="https://cdn.pixabay.com/photo/2020/12/06/14/51/sandwiches-5809006_1280.jpg"
        alt="Sendwich"
      />
      <p>{sandwich}</p>
      <button type="button" onClick={addBread}>Добавить хлеб 🍞</button>
      <button type="button" onClick={addCheese}>Добавить сыр 🧀</button>
      <button type="button" onClick={addSausage}>Добавить колбасу 🍠</button>
      <button type="button" onClick={addSalad}>Добавить салат 🥦</button>
      <button type="button" onClick={resetResults}>Удалить</button>
    </div>
  );
}
