import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div class="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 class="text-primary">
            {name.substr(0, name.indexOf(" "))}'s Bio
          </h2>
          <p>{bio}</p>
          <div class="line"></div>
        </Fragment>
      )}

      <h2 class="text-primary">Skill Set</h2>
      <div class="skills">
        {skills.map((skill) => (
          <div class="p-1">
            <i class="fa fa-check"></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
