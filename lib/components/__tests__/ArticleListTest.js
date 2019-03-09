import React from 'react';
import ArticleList from '../ArticleList';
import { shallow } from 'enzyme';

describe('Article List rendering tests', () => {
  const testProps={
    articles:{
      a:{id:'a' ,date:'',title:'',body:''},
      b:{id:'b',date:'',title:'',body:''}
    }
  };

  
  it('should behave like tree', () => {
    const wrapper=shallow(
      <ArticleList
        {...testProps}  
      />
    );
    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
  
});

