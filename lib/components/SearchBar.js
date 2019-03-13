import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent{

    state={searchTerm:''};
     handleSearch=(event)=>{
       this.setState({
         searchTerm:event.target.value,
       },()=>{
         this.doSearch();
       });
     };
     doSearch=debounce(()=>{
       this.props.store.setSearchTerm(this.state.searchTerm);
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
export default storeProvider()(SearchBar);
