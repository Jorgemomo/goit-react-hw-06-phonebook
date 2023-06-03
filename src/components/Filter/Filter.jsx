import { Label, Input } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/contactsSelect';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = query => {
    dispatch(setQuery(query));
  };
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Enter search name"
      />
    </Label>
  );
};
