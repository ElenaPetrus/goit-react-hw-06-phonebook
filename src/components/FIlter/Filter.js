import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';

import s from './Filter.module.css';

function Filter() {
  const inputId = shortid.generate();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.label} htmlFor={inputId}>
      Find contact by name/number
      <input
        className={s.input}
        id={inputId}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </label>
  );
}

export { Filter };
