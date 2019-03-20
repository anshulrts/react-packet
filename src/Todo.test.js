import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Todo from './Todo';

describe(Todo, () => {
    it("renders wihtout crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Todo />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});