import {
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
  StyledSearchbarHeader,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = evt => {
    setSearchText(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <StyledSearchbarHeader>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledSearchFormButton>
          <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
          <FcSearch size="24" />
        </StyledSearchFormButton>

        <StyledSearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchText}
        />
      </StyledSearchForm>
    </StyledSearchbarHeader>
  );
};

export default Searchbar;

// export class Searchbar extends Component {
//   state = { searchText: '' };

//   handleChange = evt => {
//     this.setState({ searchText: evt.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmit(this.state.searchText);
//     this.setState({ searchText: '' });
//   };

//   render() {
//     return (
//       <StyledSearchbarHeader>
//         <StyledSearchForm onSubmit={this.handleSubmit}>
//           <StyledSearchFormButton>
//             <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
//             <FcSearch size="24" />
//           </StyledSearchFormButton>

//           <StyledSearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={this.state.searchText}
//           />
//         </StyledSearchForm>
//       </StyledSearchbarHeader>
//     );
//   }
// }
