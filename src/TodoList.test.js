import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoList from './TodoList';
import NewTodo from './NewTodo';
import  Todo from './Todo';

describe(TodoList, () => {
    const component = shallow(<TodoList />);

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<TodoList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders and matches our snapshot", () => {
        const component = renderer.create(<TodoList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders a Todo List component", () => {
        expect(component.contains(<div className="TodoList" />));
    });
});