import React from 'react';
import ReactDOM from 'react-dom';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';
import Elfheader from './Elfheader';

configure({ adapter: new Adapter() });

describe('rest basic tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Elfheader/>, div);
    });
    it('renders h1 header test', () => {
        const wrapper = shallow(<Elfheader/>);
        console.log('Tester',wrapper.find('h1').debug());
    });
    it('renders h1 header test', () => {
        const wrapper = shallow(<Elfheader/>);
        const unknown = <h1>System Check<h1>;
            elfDebugEnzyme.getLast(wrapper, 'h1', true);

            expect(wrapper.contains(unknown)).toEqual(true);
    });

   // it('renders initial value of paragraph with state.nine', () => {
     //   const wrapper = shallow(<App/>);
       // const unknown = <p className="App-intro">file: unknown</p>;
       // elfDebugEnzyme.getLast(wrapper, 'p', true);
        // expect(wrapper.contains(unknown)).toEqual(true);
    // });

});



