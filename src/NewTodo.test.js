import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NewTodo from './NewTodo';

describe(NewTodo, () => {
    const mockAddtTodo = jest.fn();
    const component = shallow(<NewTodo addtodo={mockAddtTodo} />);

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NewTodo addtodo={mockAddtTodo} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it("renders a NewTodo component", () => {
        expect(component.contains(<div className="NewTodo" />));
    });

    it("renders and matched our snapshot", () => {
        const com = renderer.create(<NewTodo addtodo={mockAddtTodo} />);
        const tree = com.toJSON();
        expect(tree).toMatchSnapshot();
    });

});