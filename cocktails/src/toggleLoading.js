import getElement from './getElement.js';

export const hideLoading = () => {
  const loading = getElement('.loading');
  loading.classList.add('hide-loading');
};

export const showLoading = () => {
  const loading = getElement('.loading');

  loading.classList.remove('hide-loading');
};
