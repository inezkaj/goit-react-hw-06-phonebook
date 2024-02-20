import css from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ addingContact }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.elements.name.value = '';
    form.elements.number.value = '';

    console.log(name);

    addingContact({ name, number });
  };

  return (
    <div className={css.frame}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit" data-type="" key="" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  addingContact: PropTypes.func,
};
export default Form;
