import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';


describe('Article List rendering tests', () => {
  const testProps={
    articles:{
      a:{id:'a'},
      b:{id:'b'}
    },
    articleActions:{
      lookupAuthor: jest.fn(()=>({})),
    },
  };

  
  it('should behave like tree', () => {
    const tree=renderer.create(
      <ArticleList
        {...testProps}  
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  
});

