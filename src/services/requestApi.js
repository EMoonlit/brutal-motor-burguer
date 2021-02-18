import data from './data';

const fechingApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
      console.log(data);
    }, 3000);
  });
}

export default fechingApi;