let selector = document.querySelector('#phone');
let im = new Inputmask('+380-99-999-99-99');
im.mask(selector);

let validation = new JustValidate('#form');

validation
  .addField(
    '.username',
    [
      {
        rule: 'required',
        errorMessage: "Введіть им'я!",
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минімум 2 символи!',
      },
      {
        rule: 'customRegexp',
        value: /[A-Za-z-А-Яа-я]/gi,
        errorMessage: 'ім’я має складатися тільки із літер',
      },
    ],
    {
      errorsContainer: '.error-name',
    }
  )
  .addField(
    '.phone',
    [
      {
        validator: value => {
          const phone = selector.inputmask.unmaskedvalue();
          return Boolean(phone.length > 0);
        },
        errorMessage: 'Введіть ваш номер',
      },
      {
        validator: value => {
          const phone = selector.inputmask.unmaskedvalue();
          return Boolean(phone.length === 9);
        },
        errorMessage: 'Введіть номер повністю',
      },
    ],
    {
      errorsContainer: '.error-phone',
    }
  )
  .onSuccess(event => {
    console.log(event.target[0].value);
    console.log(event.target[1].value);

    event.preventDefault();
    event.target[0].value = '';
    event.target[1].value = '';
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.thanks').style.display = 'flex';
    document.body.classList.add('active');
    document.querySelector('#modal-container').classList.add('active');
  });
