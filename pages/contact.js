import { useState } from 'react';
import 'isomorphic-fetch';
import styles from './contact.module.scss';
import Layout from '../components/layout';

export default () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phoneNumber: '',
    comment: '',
  });

  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    fetch(
      'https://us-central1-e-radar-244305.cloudfunctions.net/sendContactForm',
      {
        method: 'post',
        body: JSON.stringify(values),
      },
    )
      .then((res) => {
        res.status === 200 ? setSuccess(true) : '';
      })
      .catch((err) => {
        console.error(err);
      });

    setValues({
      firstName: '',
      lastName: '',
      organization: '',
      email: '',
      phoneNumber: '',
      comment: '',
    });
  };

  return (
    <Layout>
      <main className={styles.contact_page}>
        <section className={styles.contact_section}>
          {success ? <h2>Message Sent Successfully</h2> : null}
          <form className={styles.form_layout}>
            <div className={styles.input_group}>
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="organization">Organization</label>
              <input
                name="organization"
                value={values.organization}
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={values.email}
                onChange={handleInputChange}
                type="email"
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
                type="tel"
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                value={values.comment}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input_group}>
              <button
                onClick={handleFormSubmit}
                className={styles.btn}
                type="submit">
                Contact
              </button>
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
};
