import React from "react";
import DefaultLayout from "./Layouts/DefaultLayout";
import GifPlayer from "react-gif-player";
import SideNavHelp from "../components/Nav/HelpPage/SideNavHelp";
import TopNavHelp from "../components/Nav/HelpPage/TopNavHelp";
import "./styles/Help.css";

class Help extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div className="wrap-content">
          <SideNavHelp />
          <TopNavHelp />
          <div className="main">
            <section className="container-fluid">
              <div className="col-lg-12">
                <h3 id="help">Help</h3>
                <p>Welcome to Help page. Here you can find some tips-n-tricks, guides and help on how to use our MusicMix services.</p>
                <p>If you have stumbled on Help page by accident that's fine too, but if you are curious and have some questions
                  feel free to explore this page to clarify your questions and enrich your experience using MusicMix.</p>
                <div className="sepereate"></div>

                <h3 id="account">Account</h3>
                <p>First things first... to fully experience MusicMix services, one must have an account.</p>
                <h5 id="signup">Sign up</h5>
                <br />
                <p>You can start creating a new account from Home page, simply by clicking <i>Sign up</i> at top right corner.</p>
                <img className="HelpPageImg" src={require("../images/HelpPage/SignUpHelp.png")} alt="Sign up button" />
                <br />
                <br />
                <p>By clicking on <i>Sign up</i> you will be redirected to Sign up page where you will need to fill the form to register a new accont.</p>
                <p>You will need to provide the following information:</p>
                <ul>
                  <li><b>Email</b> - a valid email address.</li>
                  <li><b>Username</b> - a username that is between 3 and 10 characters long.</li>
                  <li><b>Password</b> - a password that must be at least 8 characters long and contain at least 1 number, 1 uppercase and 1 lowercase characters (fx: Password12).</li>
                  <li><b>Confirm Password</b> - confirm your password by typing exactly the same password as before.</li>
                  <li><b>Gender</b> - choose between male or female.</li>
                  <li><b>Birthday</b> - pick your birth date.</li>
                  <li><b>Agree to Terms and Conditions of Use</b> - read and agree to our <a href="/terms">Terms and Conditions of Use</a>.</li>
                </ul>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/RegisterUser.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <br />
                <div className="sepereate"></div>
                <br />
                <h5 id="login">Login</h5>
                <p>After you have created account you will be redirected to Login page where you need to use your <b>Email</b> and <b>Password</b> to log in and use MusicMix.</p>
                <p>If you already have an account you can simply click on <i>Login</i> in top right corner to log in and be able to listen to music on MusicMix.</p>
                <img className="HelpPageImg" src={require("../images/HelpPage/LogIn.png")} alt="Login button" />
                <br /><br />
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/LoginAndOpenPlayer.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>

                <h3 id="profile">Profile</h3>
                <p>Under <i>Profile</i> you can see your account (profile) information, edit profile and change password.</p>
                <h5 id="see-profile">See profile</h5>
                <p>To go to your profile you can simply click on <i> ICON  + Username</i> in top right corner after you have logged ind.</p>
                <img className="HelpPageImg" src={require("../images/HelpPage/Profile.png")} alt="Profile buton" />
                <br /><br />
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/ToProfile.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="edit-profile">Edit profile</h5>
                <p>In <i>Profile</i> under <i>Edit profile</i> you can update following information:</p>
                <ul>
                  <li><b>Email</b></li>
                  <li><b>Username</b></li>
                  <li><b>Gender</b></li>
                  <li><b>Birthday</b></li>
                </ul>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/UpdateProfile.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="change-password">Change password</h5>
                <p>To change your password you need to provide <i>Current password</i>, then write your <i>New password</i> and <i>Confirm password</i>.</p>
                <br />
                <div className="row AllPasswordErrors">
                  <div className="col-lg-4 PasswordErrors">
                    <p><i>You need to provide correct current password, else you will be promted with this error message when trying to change your password</i></p>
                    <img className="PassErrImg" src={require("../images/HelpPage/CurrPassError.jpg")} alt="Current password error" />
                  </div>
                  <div className="col-lg-4 PasswordErrors">
                    <p><i>Your new password must contain at least 8 characters which includes at least 1 number, 1 uppercase and 1 lowercase character. Else you will be promted by this error message.</i></p>
                    <img className="PassErrImg" src={require("../images/HelpPage/NewPassError.jpg")} alt="New password error" />
                  </div>
                  <div className="col-lg-4 PasswordErrors">
                    <p><i>You need to confirm your password by typing exactly the same password in <b>Confirm new password</b> input. If your new password doesn´t match you will be promted by this errir message.</i></p>
                    <img className="PassErrImg" src={require("../images/HelpPage/ConfPassError.jpg")} alt="Confirm password error" />
                  </div>
                </div>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/UpdatePassword.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>

                <h3 id="music-player">Music player</h3>
                <p>To access music player and all the songs, playlists and much more you need to be logged ind. See <a href="#login">Login</a>.</p>
                <p>When you open music player you should see this:</p>
                <img className="MusicPlayerImg" src={require("../images/HelpPage/MusicPlayer.jpg")} alt="" />
                <br />
                <div className="sepereate"></div>
                <br />

                <h5 id="genre">Choose a music genre</h5>
                <p>MusicMix has music sorted in many different genres, so everyone can quickly find what they like.</p>
                <p>To access the list of all the genres MusicMix has and then choose a specific gerne you can do so by simply clicking at <i>Genres</i> located at top center.</p>
                <p>When clicked you will be presented with little description about the genre and the list of the music for the following genre.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/ChoosingGenre.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="mood">Choose a mood playlist</h5>
                <p>MusicMix also has playlists with good music for different vibes/moods for you to listen.</p>
                <p>To access the list of all the moods playlists and then choose one you want to listen to, simply click at <i>Moods</i> located at top right corner.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/ChoosingMood.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="play-song">Play a song</h5>
                <p>To play a song you need to open any playlist and you will see a list of songs displayed on your sceen,
                  then when you hover your mouse over a <i>Music note icon</i> (located at left side in the song list) it will change to <i>Play icon</i>,
                  try simply clicking it and the audio player will come up located at the bottom of your sceen while the song will begin to play.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/PlaySong.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="audio-player">Audio player controls</h5>
                <p>When you are listening to a song, audio player will be there at the bottom of your screen.</p>
                <p>Audio player gives you control over the playlist your are currently listening to and current song such as:</p>
                <ul>
                  <li>Pause song</li>
                  <li>Play song</li>
                  <li>Rewind to certent time in song</li>
                  <li>Fast forward in song</li>
                  <li>Increase volume</li>
                  <li>Decrease volume</li>
                  <li>Go to previous song</li>
                  <li>Go to next song</li>
                </ul>
                <p>You can increase or decrease volume simply by clicking on volume bar or clicking and dragging.</p>
                <p>To rewind or fast forward a song you also can just click on progress bar ot click and drag.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/ControlSong.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="playlists">User playlists</h5>
                <p>User have ability to create their own playlists to save songs they like for later listening.</p>
                <p>Your playlists will be displayed under <i>Create playlist</i> button as list at left side center. If you dont have any playlists yet it will be empty.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/PlaylistsOverview.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="create-playlist">Create playlist</h5>
                <p>You can create new playlists simply clicking <i>Create playlist</i> button at left side.</p>
                <p>Then you will need to choose a <b>Name</b>, <b>Desciption</b> and <b>Image (file)</b> to create your new playlist.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/CreatingNewPlaylist.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="add-songs">Add songs to playlist</h5>
                <p>You can add songs from <i>Genres</i>, <i>Moods</i> or <i>Featured</i> playlists to your own playlist.</p>
                <p>To add song to your playlist simply click on <b>...</b> button for the song on the right side.
                  Then popup will appear with list of all your playlists, from which you just choose and click on to which playlist you want to add the song.</p>
                <p>If you dont have any playlists created, when you click on <b>...</b> popup will show message like this: <i>You dont have any playlist at the moment.
                  Please create at least 1 playlist first.</i></p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/AddingSongsToPlaylists.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="remove-songs">Remove songs from playlist</h5>
                <p>If you dont like the song anymore or have other issues, removing song from playlist is a piece of cake too.</p>
                <p>Open playlist and then click on <b>...</b> for the song you wish to remove. When clicked poopup will come up with <i>Remove song</i> button,
                  now only thing left is click on that button and song will be removed from your playlist.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/RemoveFromPlaylist.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="edit-playlist">Edit playlist</h5>
                <p>You can easily edit your playlist <b>Name</b>, <b>Desciption</b> or choose a new <b>Image</b> for your playlist.</p>
                <p>Open playlist and under playlist description in the center you will see <b>...</b>, clicking on them will call poopup with 2 button:
                  one for editing playlist and other for deleting playlist. Choose <i>Edit playlist</i> and type new name, description or choose a new image.</p>
                <p>You can update all the information or just the one thing you desire.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/EditPlaylist.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="delete-playlist">Delete playlist</h5>
                <p>You can delete your playlist by opening one and clicking on <b>...</b> under the playlist description and choosing <i>Delete playlist</i> from popup.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/DeletePlaylist.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="search">Search</h5>
                <p>You can search for your desired songs and artists by using our search feature. Open it by clicking
                  on <i>Search</i> located at top left corner under <i>Home</i> button.</p>
                <p>Then inside input field write a <i>keyword/s</i> for what you want to find and click on <i>Search</i> button.</p>
                <p>If you cant find anything (MusicMix doesn´t have the following song or artist) you will be shown the following message under search
                  input: <i>Sorry, no results were found.</i></p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/Search.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="show-artist">Show artist info and tracks</h5>
                <p>You can see all tracks for the artist and info about the artist.</p>
                <p>To do so you can click on artist name when you opened playlist.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/ShowArtist.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="go-to-profile">Go to profile</h5>
                <p>You can easily access your profile page from <b>Music player</b> simply by clicking on <i>ICON + Username</i> at the left side.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/GoToProfile.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="go-to-home">Go to home page</h5>
                <p>You can easily go back to home page from music player by clicking on <i>Back to Home page</i>.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/BackToHomePage.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <div className="sepereate"></div>
                <br />

                <h5 id="logout">Logout</h5>
                <p>When you are done enjoying good music and want to logout, simply click on <i>Log out</i> button located at left side bottom.</p>
                <p><i>See example:</i></p>
                <GifPlayer className="HomePageGifs"
                  gif={require("../gifs/LogOut.gif")}
                  pauseRef={pause => this.pauseGif = pause}
                />
                <br />
                <br />
              </div>
            </section>
          </div>
        </div>
      </DefaultLayout>
    );
  }
};

export default Help;
