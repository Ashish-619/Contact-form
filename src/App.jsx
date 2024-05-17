import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      queryType,
      message,
      consent
    });

    // Reset the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setQueryType("");
    setMessage("");
    setConsent(false);

    // Show the celebration container
    setShowCelebration(true);

    // Hide the celebration container after 3 seconds
    setTimeout(() => {
      setShowCelebration(false);
    }, 5000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='main-container' autoComplete="off">
        <div className='contact-us'>Contact Us</div>

        <div className='name-section'>
          <label htmlFor='FirstName'>First Name <span className='star-mark'>*</span>
            <input
              type='text'
              id='FirstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required autoComplete="off" />
          </label>
          <label htmlFor='LastName'>Last Name <span className='star-mark'>*</span>
            <input
              type='text'
              id='LastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required autoComplete="off" />
          </label>
        </div>

        <div className='email-section'>
          <label htmlFor='email'>Email Address <span className='star-mark'>*</span>
            <input
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required autoComplete="off" />
          </label>
        </div>

        <div className='query-section' >
          Query Type <span className='star-mark'>*</span>
          <label className='query-option' >
            <input
              type='radio'
              id='query-type-general'
              name='query-type'
              value='general'
              checked={queryType === "general"}
              onChange={e => setQueryType(e.target.value)}
              autoComplete="off"
            /> General Enquiry
          </label>
          <label className='query-option'>
            <input
              type='radio'
              id='query-type-support'
              name='query-type'
              value='support'
              required
              checked={queryType === "support"}
              onChange={e => setQueryType(e.target.value)}
              autoComplete="off"
            /> Support Request
          </label>
        </div>

        <div className='message-section'>
          <label htmlFor='Message'>Message <span className='star-mark'>*</span>
            <textarea
              id='Message'
              value={message}
              onChange={e => setMessage(e.target.value)}
              required autoComplete="off" />
          </label>
        </div>

        <div className='checkbox-section'>
          <label htmlFor='consent-checkbox'>
            <input
              type='checkbox'
              id='consent-checkbox'
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              autoComplete="off"
              required />
            I consent to being contacted by the team <span className='star-mark'>*</span>
          </label>
        </div>

        <button type='submit' className='btn'>Submit</button>
      </form>

      {showCelebration && (
        <div className='celebration-container'>
          Data submitted successfully!
        </div>
      )}

    </div>
  );
}

export default App;