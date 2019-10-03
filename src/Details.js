import React, {Component} from 'react';
import logo from './logo.svg';
class Details extends Component {
  render(){
    const {profiles ,users, movies} = this.props
    const usersByMovie = {};
    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (usersByMovie[movieID]) {
        usersByMovie[movieID].push(profile.userID);
      } else {
        usersByMovie[movieID] = [profile.userID];
      } 
    });
  return (
    <div>
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>
        <ol>
		  {Object.keys(movies).map((id)=>(<li key={id}>
			<div>
				<h2>{movies[id].name}</h2>
                <p>Liked By:</p>
                {!usersByMovie[id] || usersByMovie[id].length === 0 ? (
                 <p>None of the current users liked this movie.</p>
                 ) : (
                <ul>
                   {usersByMovie[id].map(userId => {
                    return (
                    <li key={userId}>
                    <p>{users[userId].name}</p>
                  </li>
                  );
                 })}
               </ul>)}
			</div>
		  </li>
       ))}
        </ol>
        
   </div>
  )
}
}
export default Details;