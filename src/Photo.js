import React from "react";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    profile_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <h4>{name}</h4>
        <p>{likes} Likes</p>
      </div>
      <a href={profile_url}>
        <img src={medium} alt={name} className="user-img" />
      </a>
    </article>
  );
};

export default Photo;
