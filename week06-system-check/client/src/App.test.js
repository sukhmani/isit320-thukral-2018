import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';

configure({ adapter: new Adapter() });

describe('rest basic tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });
    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<App/>);
        console.log('Tester',wrapper.find('h1')debug());
    });
    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<App/>);
        const unknown = <p className="App-intro">file: unknown</p>;
        elfDebugEnzyme.getLast(wrapper, 'p', true);
        expect(wrapper.contains(unknown)).toEqual(true);
    });

});



