import css from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";
import { getFilterValue } from "../../redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  // const filter = useSelector(getFilterValue);
  // console.log(filter)

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
