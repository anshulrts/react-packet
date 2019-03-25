import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NewTodo from './NewTodo';

describe(NewTodo, () => {
    const mockAddTodo = jest.fn();
    const component = shallow(<NewTodo addTodo={mockAddTodo} />);

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NewTodo addTodo={mockAddTodo} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it("renders a NewTodo component", () => {
        expect(component.contains(<div className="NewTodo" />));
    });

    it("renders and matched our snapshot", () => {
        const component = renderer.create(<NewTodo addtodo={mockAddTodo} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("contains the form", () => {
        expect(component.find("Input")).toHaveLength(1);
        expect(component.find("Button")).toHaveLength(1);
    });

    it("calls the mocked addTodo function passed in when the add new button is clicked", () => {
        component.find("Button").simulate("click");
        expect(mockAddTodo).toBeCalled();
    });

    it("updates the form when keys are pressed", () => {
        const updateKey = "New Todo";
        component.instance().handleUpdate({target : { value : updateKey }});
        expect(component.state("item")).toEqual(updateKey);
    });

    it("Blanks out the Todo name when the button is clicked", () => {
        const updateKey = "I should be empty";
        component.instance().handleUpdate({target : { value: updateKey }});
        expect(component.state("item")).toEqual(updateKey);
        component.find("Button").simulate("click");
        expect(component.state("item")).toHaveLength(0);
    })

});