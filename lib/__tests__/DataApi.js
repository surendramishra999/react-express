import StateApi from 'state-api';
import {data} from '../testData';

const store =new StateApi(data);

describe('DataApi',()=>{
  it('Expect Article as object',()=>{
    const articles=store.getState().articles;
    const articleId=data.articles[0].id;
    const articleTitle=data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('Expect Aurthor as Object',()=>{
    const authors=store.getState().authors;
    const authorId=data.authors[0].id;
    const authorFirstName=data.authors[0].firstName;
    const authorLastName=data.authors[0].lastName;

    expect(authors).toHaveProperty(authorId);
    expect(authorFirstName).toBe(authors[authorId].firstName);
    expect(authorLastName).toBe(authors[authorId].lastName);

  });
});

