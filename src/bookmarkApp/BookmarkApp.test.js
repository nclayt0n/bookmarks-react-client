import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkApp from './BookmarkApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <BookmarkApp/> , div);
    ReactDOM.unmountComponentAtNode(div);
});