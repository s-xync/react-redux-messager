import { createStore } from 'redux';
import reducer from '../reducers';
import { contacts } from '../static-data';

export const store = createStore(reducer, { contacts });
