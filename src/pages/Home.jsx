import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzasBlock } from "../components";
import { setCategory } from "../redux/actions/filters";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];
function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(index) => dispatch(setCategory(index))}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzasBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
