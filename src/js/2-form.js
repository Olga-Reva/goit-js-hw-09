let formData = {
  email: '',
  message: '',
};

const EventForm = document.querySelector('.feedback-form');

EventForm.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

export const save = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const load = key => {
  try {
    const loadDataFromLs = localStorage.getItem(key);

    return loadDataFromLs === null ? undefined : JSON.parse(loadDataFromLs);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);

    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
});

EventForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  EventForm.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
});
