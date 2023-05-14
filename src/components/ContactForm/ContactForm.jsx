import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onNameChange, onNumberChange, onSubmit }) => (
  <form className={s.Form} onSubmit={onSubmit}>
    <label className={s.Label}>
      Name
      <input
        className={s.Input}
        type="text"
        placeholder="Count of Monte Cristo"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onNameChange}
        required
      />
    </label>
    <label className={s.Label}>
      Phone number
      <input
        className={s.Input}
        type="tel"
        placeholder="+77052301585"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={onNumberChange}
        required
      />
    </label>
    <button className={s.Button} type="submit">
      Add contact
    </button>
  </form>
);

ContactForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
