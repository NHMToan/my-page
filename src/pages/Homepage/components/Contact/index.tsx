import emailjs from '@emailjs/browser';
import Pagetitle from 'components/elements/Pagetitle';
import { FC, useRef, useState } from 'react';

interface ContactProps {}
const Contact: FC<ContactProps> = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const resetFormData = () => {
    setFormdata({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage('Name is required');
    } else if (!formdata.email) {
      setError(true);
      setMessage('Email is required');
    } else if (!formdata.subject) {
      setError(true);
      setMessage('Subject is required');
    } else if (!formdata.message) {
      setError(true);
      setMessage('Message is required');
    } else {
      setError(false);
      setMessage('Message sending...');
      emailjs
        .sendForm(
          'service_2ytk8xr',
          'template_ycdxltr',
          form.current,
          'qmxVxUm7lPm2SKWQc'
        )
        .then(
          (result) => {
            setError(false);
            setMessage('Message is sent!');
            resetFormData();
          },
          (error) => {
            setError(true);
            setMessage('Sending failed!');
          }
        );
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <h3>Let's talk about everything!</h3>

              <p>
                Don't like forms? Send me an{' '}
                <a href="mailto:nhmtoan1509@gmail.com">email</a>. ????
              </p>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
              ref={form}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows={5}
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
