import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';
export const SearchForm = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
    setSearchString('');
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={searchString}
        onChange={setSearchString}
      />
      <Button>
        Search
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};
