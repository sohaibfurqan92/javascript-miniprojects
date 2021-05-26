// this project uses the random person api at https://randomuser.me
import { getElement } from './utils/getElement.js';
const url = 'https://randomuser.me/api/';

// target elements
const userImage = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];
