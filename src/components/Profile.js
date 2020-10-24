import React from "react";
import { useSelector } from "react-redux";

//comment envoyer un fichier en reéact
const Profile = (props) => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  
  return (
    <form className="profile-container bg-white mr-3 d-flex flex-column">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <input type='file' name='avatar' className='d-none' />
        <img src="" className="img-fluid" alt='profile' />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center my-3">
        <p>
          {currentUser.user.username}
          <br/>
          {currentUser.user.local.email}
        </p>
        
      </div>
      <div className="text-center d-flex flex-row justify-content-center align-items-center my-3">
        <div className="flex-fill">
          <p>
            <strong> Tweet </strong>
            <br />
            <span className="text-primary"> {props.tweets.length} </span>
          </p>
        </div>
        <div className="flex-fill">
          <p>
            <strong> Following </strong>
            <br />
            <span className="text-primary"> - </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Profile;
