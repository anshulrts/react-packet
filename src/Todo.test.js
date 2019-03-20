import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Todo from './Todo';

const description = "New Todo";
const mockRemoveTodo = jest.fn();
const component = shallow(
    <Todo description={description} removeTodo={mockRemoveTodo} />
);

describe(Todo, () => {
    it("renders wihtout crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Todo />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders and matches our snapshot", () => {
        const component = renderer.create(<Todo description="Yo" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});