import React from "react";

//comment envoyer un fichier en reéact
const Profile = (props) => {
  return (
    <form className="profile-container bg-white mr-3 d-flex flex-column">
      <div class="d-flex flex-row justify-content-center align-items-center">
        <input type='file' name='avatar' className='d-none' />
        <img src="" className="img-fluid" alt='profile' />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center my-3">
        <p>
          {" djoko jires "}
          {/*currentUser.username} {currentUser.local.email*/}{" jrdjo@gmail.com "}
        </p>
      </div>
      <div className="text-center d-flex flex-row justify-content-center align-items-center my-3">
        <div className="flex-fill">
          <p>
            <strong> Tweet </strong>
            <br />
            <span className="text-primary"> {this.props.tweets.length} </span>
          </p>
        </div>
        <div className="flex-fill">
          <p>
            <strong> Following </strong>
            <br />
            <span class="text-primary"> - </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Profile;
