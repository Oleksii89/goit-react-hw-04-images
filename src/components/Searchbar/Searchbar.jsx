import { Component } from 'react';
import {
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
  StyledSearchbarHeader,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = { searchText: '' };

  handleChange = evt => {
    this.setState({ searchText: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <StyledSearchbarHeader>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchFormButton>
            <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
            <FcSearch size="24" />
          </StyledSearchFormButton>

          <StyledSearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchText}
          />
        </StyledSearchForm>
      </StyledSearchbarHeader>
    );
  }
}
