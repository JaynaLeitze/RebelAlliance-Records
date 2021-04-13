import React from "react";

export const Film = ({ f }) => {
  return (
    <div>
      <p> Title:{f.title}</p>
      <p>Episode:{f.episode_id}</p>
      <p> Director: {f.director}</p>
      <p> Release Date: {f.release_date}</p>
    </div>
  );
};
