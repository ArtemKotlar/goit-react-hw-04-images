import { Component } from 'react';
import {
  SearchbarWrap,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  hendleNemeChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = () => {
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return alert('Please enter a search value');
    }
    onSubmit(query);
    this.setState({ query: '' });
  };
  render() {
    const { hendleNemeChange } = this;
    const { query } = this.state;
    return (
      <SearchbarWrap>
        <SearchForm
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
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
}
