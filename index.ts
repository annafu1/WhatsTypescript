// Import stylesheets
//import './style.css';

const url: string = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
};