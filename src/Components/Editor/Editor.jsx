/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import InputControl from '../InputControl/InputControl';

function Editor({ sections }) {
  const [active, setActive] = useState(Object.keys(sections)[0]);
  // body
  const workExpBody = (
    <div className="details">
      <div className="row">
        <InputControl label="Title" placeholder="Enter title eg. Frontend Developer" />
        <InputControl label="Company Name" placeholder="Enter title eg. Liberin Technologies" />
      </div>
      <div className="row">
        <InputControl label="Certificate Link" placeholder="Enter Certificatelink" />
        <InputControl label="Location" placeholder="Enter location eg. Remote" />
      </div>
      <div className="row">
        <InputControl label="Start Date" type="date" placeholder="Enter start date of work" />
        <InputControl label="End Date" type="date" placeholder="Enter end date of work" />
      </div>
      <div className="column">
        <label>Enter work description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );
  // PROJECT BODY
  const projectBody = (
    <div className="details">
      <div className="row">
        <InputControl label="Title" placeholder="Enter title eg. Chat App" />
        <InputControl label="Overview" placeholder="Enter basic overview of project" />
      </div>
      <div className="row">
        <InputControl label="Deployed link" placeholder="Enter depoyled link" />
        <InputControl label="Github link" placeholder="Enter github link of project" />
      </div>
      <div className="column">
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 2" />
      </div>
    </div>
  );
  // educationBody
  const educationBody = (
    <div className="details">
      <div className="row">
        <InputControl label="Title" placeholder="Enter title eg. B-tech" />
      </div>
      <div className="row">
        <InputControl label="Collage/School Name" placeholder="Enter your collage/school" />
      </div>
      <div className="row">
        <InputControl label="Start Date" type="date" placeholder="Enter start date of education" />
        <InputControl label="End Date" type="date" placeholder="Enter end date of education" />
      </div>
    </div>
  );
  // BASIC INFO
  const basicInfo = (
    <div className="details">
      <div className="row">
        <InputControl label="Name" placeholder="Enter your name eg. Mr. Shoaib" />
      </div>
      <div className="row">
        <InputControl label="Title" placeholder="Enter your title eg. Frontend developer" />
      </div>
      <div className="row">
        <InputControl label="Linkedin link" placeholder="Enter your linkedin link" />
      </div>
      <div className="row">
        <InputControl label="Github link" placeholder="Enter your github link" />
      </div>
      <div className="row">
        <InputControl label="Email" placeholder="Enter your email" />
      </div>
      <div className="row">
        <InputControl label="Phone" placeholder="Enter your phone number" />
      </div>
    </div>
  );
  const generateBody = () => {
    switch (active) {
      case sections[active]:
        return projectBody;
      case sections[active]:
        return workExpBody;
      default:
        return null;
    }
  };

  return (
    <div className="wraper">
      <div className="container">
        <div className="header ">
          {Object.keys(sections).map((key) => (
            <button key={key} type="button" className={`link unset ${key === active ? 'active' : ''}`} onClick={() => setActive(key)}>
              <p>{sections[key]}</p>
            </button>
          ))}
        </div>
        <div className="body">
          <InputControl label="Title" placeholder="Enter Section Title" />
          {generateBody}
        </div>
      </div>

    </div>
  );
}

export default Editor;
