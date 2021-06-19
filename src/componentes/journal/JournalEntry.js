import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.pinimg.com/originals/49/1a/68/491a68c5cc79da11284c767d5cbd814b.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          un nuevo dia
        </p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minus cum officiis sunt facere nulla ipsam ea, molestiae, placeat ipsum recusandae quos hic perspiciatis similique distinctio debitis quia nihil dolores.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
}
