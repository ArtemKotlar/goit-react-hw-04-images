import { useState } from 'react';
import {
  SearchbarWrap,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const hendleNemeChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = () => {
    if (query.trim() === '') {
      return alert('Please enter a search value');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarWrap>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <SearchFormInput
          type="text"
          value={query}
          onChange={hendleNemeChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <SearchFormButton type="submit">
          <FcSearch size={30} />
        </SearchFormButton>
      </SearchForm>
    </SearchbarWrap>
  );
}
