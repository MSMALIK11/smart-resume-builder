import React from 'react';
import Editor from '../Editor/Editor';

function Body() {
  const colors = ['#239ce2', '#48bb78', ' #0bc5ea ', '#a0aec0', '#ed8936'];
  const sections = {
    basicinfo: 'Basic Info',
    workExp: 'Work Experience',
    skills: 'Skills',
    project: 'Project',
    educatin: 'Education',
    achievements: 'Achievements',
    summart: 'Summary',
    other: 'Other',
  };

  return (
    <div className="main">
      <div className="title">

        <p className="title">Smart Resume Builder</p>
      </div>
      <div className="Box">
        <div className="colors">
          {
            colors?.map((color) => (
              <sapn className="color-tag" style={{ background: color }} />
            ))
        }
        </div>
        <button type="button" className="download-btn shadow">
          Download

        </button>

      </div>

      <Editor sections={sections} />

    </div>
  );
}

export default Body;
