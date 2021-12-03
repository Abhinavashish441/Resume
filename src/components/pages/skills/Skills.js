import React from 'react';

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>JAVA</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '89%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Machine Learning</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '20%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>React</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>DBMS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Linux</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Computer Networks</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
