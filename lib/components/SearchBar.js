import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component{

    state={searchTerm:''};
     handleSearch=(event)=>{
       this.setState({
         searchTerm:event.target.value,
       },()=>{
         this.doSearch();
       });
     };
     doSearch=debounce(()=>{
       this.props.doSearch(this.state.searchTerm);
     },600);
     render() {
       return (
         <input type="search" placeholder="Enter Search term"
           onChange={this.handleSearch}
           value={this.state.searchTerm}
         />
       );
     }
}
export default SearchBar;
