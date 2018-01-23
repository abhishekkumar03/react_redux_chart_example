import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import App from './containers/App';
import configureStore from 'redux-mock-store'
import { fetchPostsIfNeeded, fetchPosts } from './actions';

//*******************************************************************************************************
describe('>>>H O M E --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    const initialState = {getSocketHosts: {name: "Firefox", y: 2, process_name: "p1", container_name: "c1", memory_usage: "High"}, postsByHost: {}, selectHost: "dev1", filteredHosts: ""}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><App /></Provider> )
    })


    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(App).length).toEqual(1)
    });
});