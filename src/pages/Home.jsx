import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  SortPopup,
  PizzasBlock,
  PizzaLoading,
} from "../components";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

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
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

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
        {isLoaded
          ? items.map((obj) => (
              <PizzasBlock key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(12).fill(<PizzaLoading />)}
      </div>
    </div>
  );
}

export default Home;
