import React, { useState } from 'react';
import './ProfileCard.css';
import defaultAvatar from '/profile.jpg'; // If image is in 'public' folder

function ProfileCard({ name, role, location, avatar = defaultAvatar, skills }) {
  const [showDetails, setShowDetails] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className="profile-card">
      {/* Avatar */}
      <div className="profile-header">
        <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
        <h2>{name}</h2>
        <p className="role">{role}</p>
        <p className="location">{location}</p>
      </div>

      {/* Like Button */}
      <button className="like-button" onClick={() => setLikes(likes + 1)}>
        ❤ {likes}
      </button>

      {/* Toggle Skills Button */}
      <button className="toggle-button" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Skills" : "Show Skills"}
      </button>

      {/* Skills Section */}
      {showDetails && (
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Default props
ProfileCard.defaultProps = {
  avatar: defaultAvatar, // Uses the default avatar from 'public' folder
  skills: [],
  location: "Unknown",
};

export default ProfileCard;
