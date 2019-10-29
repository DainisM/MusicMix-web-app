import React from "react";
import "./styles/Api.css";

const Api = () => {
  return (
    <div className="wrap-content">
      <aside className="menu">
        <ul>
          <li>
            <a href="/api">Intro</a>
          </li>
          <li>
            <a href="#requests">Requests</a>
          </li>
          <li>
            <a href="#response-status-codes">Response Status Codes</a>
          </li>
          <li>
            <a href="#authorization">Authorization</a>
          </li>
          <li>
            {" "}
            <a href="#api-endpoints">API Endpoints</a>
            <ul className="submenu">
              <li>
                <a href="#get-users-profile">GET User´s profile</a>
              </li>
              <li>
                <a href="#patch-users-profile">PATCH User´s profile</a>
              </li>
              <li>
                <a href="#get-tracks">GET Tracks</a>
              </li>
              <li>
                <a href="#get-trackId">GET Specific Track</a>
              </li>
              <li>
                <a href="#get-artists">GET Artists</a>
              </li>
              <li>
                <a href="#get-specific-artist">GET Specific Artist</a>
              </li>
              <li>
                <a href="#get-all-artist-tracks">GET All Artist Tracks</a>
              </li>
              <li>
                <a href="#search-tracks">Search for tracks</a>
              </li>
              <li>
                <a href="#search-artists">Search for artists</a>
              </li>
              <li>
                <a href="#get-newest-tracks">GET Newest Tracks</a>
              </li>
              <li>
                <a href="#get-genres">GET Genres</a>
              </li>
              <li>
                <a href="#get-specific-genre">GET Genre Tracks</a>
              </li>
              <li>
                <a href="#get-moods">GET Moods</a>
              </li>
              <li>
                <a href="#get-specific-moods">GET Specific Mood</a>
              </li>
              <li>
                <a href="#get-user-playlists">GET User Playlists</a>
              </li>
              <li>
                <a href="#get-user-playlist-tracks">GET User Playlist Tracks</a>
              </li>
              <li>
                <a href="#post-user-playlist">POST User Playlist</a>
              </li>
              <li>
                <a href="#patch-user-playlist">PATCH User Playlist</a>
              </li>
              <li>
                <a href="#remove-playlist-track">Remove Playlist Track</a>
              </li>
              <li>
                <a href="#delete-user-playlist">DELETE User Playlist</a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <div className="main">
        <section className="container-fluid">
          <div className="col-lg-12">
            <h1>Api</h1>
            <p>
              Based on simple REST principles, the MusicMix Web API endpoints
              return JSON metadata about music artists, albums, and tracks,
              directly from the MusicMix Data Catalogue.
            </p>
            <p>
              Web API also provides access to user related data, like playlists
              and music that the user saves in the Your Music library. Such
              access is enabled through selective authorization, by the user.
            </p>
            <h3 id="requests">Requests</h3>
            <p>
              The MusicMix API is based on REST principles. Data resources are
              accessed via standard HTTPS requests in UTF-8 format to an API
              endpoint. Where possible, API uses appropriate HTTP verbs for each
              action:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GET</td>
                  <td>Retrieves resources</td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>Creates resources</td>
                </tr>
                <tr>
                  <td>PATCH</td>
                  <td>Changes and/or replaces resources or collections</td>
                </tr>
                <tr>
                  <td>DELETE</td>
                  <td>Deltes resources</td>
                </tr>
              </tbody>
            </table>
            <h3 id="response-status-codes">Response Status Codes</h3>
            <p>
              API uses the following response status codes, as defined in the{" "}
              <a href="https://www.ietf.org/rfc/rfc2616.txt" target="_blank">
                RFC 2616
              </a>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Status Code</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>200</td>
                  <td>
                    OK - The request has succeeded. The client can read the
                    result of the request in the body and the headers of the
                    response.
                  </td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>
                    Created - The request has been fulfilled and resulted in a
                    new resource being created.
                  </td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>
                    Unauthorized - The request requires user authentication or,
                    if the request included authorization credentials,
                    authorization has been refused for those credentials.
                  </td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>
                    Not Found - The requested resource could not be found. This
                    error can be due to a temporary or permanent condition
                  </td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>
                    Internal Server Error - A genereic error message, given when
                    no more specific message is suitable.
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 id="authorization">Authorization</h3>
            <p>
              Making authorized requests to the MusicMix platform requires that
              you are granted permission to access data.
            </p>
            <p>
              In accordance with{" "}
              <a
                href="https://tools.ietf.org/html/rfc6749#section-4.1"
                target="_blank"
              >
                RFC-6749
              </a>
              , 3 parties are involved in the authorization process:
            </p>
            <ul>
              <li>Server: the MusicMix server</li>
              <li>Client: your application</li>
              <li>Resource: the end user data and controls</li>
            </ul>
            <p>
              MusicMix uses{" "}
              <a href="https://jwt.io/" target="_blank">
                JWT Tokens
              </a>{" "}
              to aurhorize users and issue data. To get a JWT Token user must
              sing in with email and password previously stated upon signing up.
            </p>
            <em>1. Have a user to sing up</em>
            <p>
              Send <code className="highlighter-rouge">POST</code> request to{" "}
              <code className="highlighter-rouge">/users/signup</code> endpoint:
            </p>
            <p>
              <code>POST http://music-mix.live/users/signup</code>
            </p>
            <table>
              <thead>
                <tr>
                  <th>REQUEST BODY PARAMETER</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>email</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    User email, used to sign in.
                  </td>
                </tr>
                <tr>
                  <td>password</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    User password, used to sign in.
                  </td>
                </tr>
                <tr>
                  <td>username</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    Username, used to display inside app.
                  </td>
                </tr>
                <tr>
                  <td>birthday</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    User date of birth in "YYYY-MM-DD" format.
                  </td>
                </tr>
                <tr>
                  <td>gender</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    User gender, either "male" or "female".
                  </td>
                </tr>
                <tr>
                  <td>country</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    User country in "Country" format.
                  </td>
                </tr>
              </tbody>
            </table>
            <em>2. Have a user to sign in to obtain JWT Token</em>
            <p>
              Send <code className="highlighter-rouge">POST</code> request to{" "}
              <code className="highlighter-rouge">/users/login</code> endpoint:
            </p>
            <p>
              <code>POST http://music-mix.live/users/login</code>
            </p>
            <table>
              <thead>
                <tr>
                  <th>REQUEST BODY PARAMETER</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>email</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    User email.
                  </td>
                </tr>
                <tr>
                  <td>password</td>
                  <td>
                    <em>Required.</em>
                    <br />
                    User password.
                  </td>
                </tr>
              </tbody>
            </table>
            <em>
              3. Use the JWT Token to access MusicMix Api. (This is example)
            </em>
            <p>
              <code className="language-curl-command">
                curl -X GET "https://musix-mix.live/tracks" -H "Authorization:
                Bearer some1231jwt213token12312e"
              </code>
            </p>
            <h3 id="api-endpoints">API Endpoints</h3>
            <p>Header Field is requested for all enpoint requests</p>
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-users-profile">GET Users´s profile</h5>
                <em>To get users profile information:</em> <br />
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/users/5db6d23f8890ec179f09c699" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>MusicMix user ID for the user.</td>
                    </tr>
                    <tr>
                      <td>email</td>
                      <td>string</td>
                      <td>
                        The user’s email address, as entered by the user when
                        creating their account.
                      </td>
                    </tr>
                    <tr>
                      <td>username</td>
                      <td>string</td>
                      <td>The name displayed on the user´s profile.</td>
                    </tr>
                    <tr>
                      <td>details</td>
                      <td>details object</td>
                      <td>Detailed information about user.</td>
                    </tr>
                    <tr>
                      <td>theme</td>
                      <td>string</td>
                      <td>The user´s layout theme.</td>
                    </tr>
                    <tr>
                      <td>birthday</td>
                      <td>DateString</td>
                      <td>
                        The birthday of the user, as set in the user’s account
                        profile.
                      </td>
                    </tr>
                    <tr>
                      <td>gender</td>
                      <td>string</td>
                      <td>
                        The gender of the user, as set in the user’s account
                        profile.
                      </td>
                    </tr>
                    <tr>
                      <td>country</td>
                      <td>string</td>
                      <td>
                        The country of the user, as set in the user’s account
                        profile.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br />
                  "_id": "5db6d23f8890ec179f09c699",
                  <br /> "email": "dainis@gmail.com",
                  <br /> "username": "Dainis11",
                  <br /> "details": &#123;
                  <br />
                  "theme": "default",
                  <br /> "birthday": "Thu Nov 27 1997",
                  <br /> "gender": "male",
                  <br /> "country": "Denmark" &#125; <br /> &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="patch-users-profile">PATCH Users´s profile</h5>
                <em>To edit users profile information use body parameters:</em>
                <table>
                  <thead>
                    <tr>
                      <th>Request Body Data</th>
                      <th>Value Type</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>email</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        The new email address for the user.
                      </td>
                    </tr>
                    <tr>
                      <td>password</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        The new password for the user
                      </td>
                    </tr>
                    <tr>
                      <td>username</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        The new display name for the user´s profile.
                      </td>
                    </tr>
                    <tr>
                      <td>theme</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        The new layout theme for the user.
                      </td>
                    </tr>
                    <tr>
                      <td>birthday</td>
                      <td>
                        string <br /> "YYYY-MM-DD"
                      </td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        The new birthday for the user.
                      </td>
                    </tr>
                    <tr>
                      <td>gender</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        The new gender for the user.
                      </td>
                    </tr>
                    <tr>
                      <td>country</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        The new country for the user.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code className="language-curl-command">
                  curl -X PATCH
                  "https://music-mix.live/users/5db6d23f8890ec179f09c699" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-tracks">GET Tracks</h5>
                <em>To get all tracks:</em> <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/tracks" -H "Authorization:
                  Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of tracks.</td>
                    </tr>
                    <tr>
                      <td>tracks</td>
                      <td>array of tracks</td>
                      <td>The tracks</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>MusicMix track ID for the track</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The artists of the track.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link for the track.</td>
                    </tr>
                    <tr>
                      <td>request</td>
                      <td>request object</td>
                      <td>
                        The information on how to get full information for the
                        track.
                      </td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>HTTP verb</td>
                      <td>The HTTP request verb to use.</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Description of what this request does.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 2,
                  <br /> "tracks": &#91; <br />
                  &#123;
                  <br /> "_id": "5daef649ab857c13f936982e",
                  <br />
                  "artist": "Tritia",
                  <br /> "name": "Wake",
                  <br /> "url": "../uploads/songs/1571747387022Tritia-Wake.mp3",
                  <br />
                  "request": &#123;
                  <br /> "type": "GET",
                  <br />
                  "description": "Get the full information about the track",
                  <br /> "url": "music-mix.live/tracks/5daef649ab857c13f936982";
                  &#125; <br />
                  &#125;,
                  <br /> &#123;
                  <br /> "_id": "5daef6f3ab857c13f9369830",
                  <br /> "artist": "State of Mine",
                  <br /> "name": "Rise",
                  <br />
                  "url": "../uploads/songs/1571747540542State_of_mine-Rise.mp3",
                  <br />
                  "request": &#123;
                  <br /> "type": "GET",
                  <br /> "description": "Get the full information about the
                  track",
                  <br /> "url": "music-mix.live/tracks/5daef6f3ab857c13f9369830"
                  &#125;
                  <br /> &#125; <br /> &#93; &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-trackId">GET Specific Track</h5>
                <em>To get specific track use track ID:</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/tracks/5daef90aab857c13f9369835" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>MusicMix track ID for the track.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>details</td>
                      <td>details object</td>
                      <td>Detailed information of track.</td>
                    </tr>
                    <tr>
                      <td>artist_id</td>
                      <td>string</td>
                      <td>The MusicMix artist ID of the track.</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The artist name of the track.</td>
                    </tr>
                    <tr>
                      <td>genres</td>
                      <td>array of genres</td>
                      <td>The genres of the track.</td>
                    </tr>
                    <tr>
                      <td>explicit</td>
                      <td>boolean</td>
                      <td>Boolean value about if track is explicit or not.</td>
                    </tr>
                    <tr>
                      <td>release</td>
                      <td>DateString</td>
                      <td>Date when track was released</td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link for the track.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "_id": "5daef90aab857c13f9369835",
                  <br /> "name": "Du hast",
                  <br />
                  "details": &#123; <br />
                  "artist_id": &#91; "5daee841ab857c13f9369807" &#93;, <br />
                  "artist": "Rammstein", <br />
                  "genres": &#91; "Metal, Rock" &#93;,
                  <br /> "explicit": false,
                  <br />
                  "release": "Sat Jul 19 1997" &#125;,
                  <br /> "url":
                  "../uploads/songs/1571748084434Rammstein-Du_hast.mp3"
                  <br /> &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-artists">GET Artists</h5>
                <em>To get all artists:</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/artists" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of artists.</td>
                    </tr>
                    <tr>
                      <td>artists</td>
                      <td>array of artists</td>
                      <td>The artists.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of the artist.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of artist.</td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>string</td>
                      <td>The link of an image for the artist.</td>
                    </tr>
                    <tr>
                      <td>request</td>
                      <td>request object</td>
                      <td>
                        The information on how to get full information for the
                        artist.
                      </td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>HTTP verb</td>
                      <td>The HTTP request verb to use.</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Description of what this request does.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 2,
                  <br /> "artists": &#91;
                  <br /> &#123;
                  <br /> "_id": "5daee78cab857c13f9369805",
                  <br /> "name": "State of Mine",
                  <br /> "image":
                  "../uploads/images/1571743628617State_of_Mine.jpg",
                  <br /> "request": &#123;
                  <br /> "type": "GET", <br />
                  "description": "Get the full information about the artist",
                  <br /> "ulr":
                  "music-mix.live/artists/5daee78cab857c13f9369805" &#125;
                  <br />
                  &#125;,
                  <br /> &#123; "_id": "5daee7bcab857c13f9369806",
                  <br /> "name": "Tritia",
                  <br /> "image": "../uploads/images/1571743675141Tritia.jpg",
                  <br /> "request": &#123;
                  <br /> "type": "GET",
                  <br /> "description": "Get the full information about the
                  artist",
                  <br /> "ulr":
                  "music-mix.live/artists/5daee7bcab857c13f9369806" &#125;
                  <br />
                  &#125; <br />
                  &#93; &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-specific-artist">GET Specific Artist</h5>
                <em>To get specific artist information use artist ID:</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/artists/5daeea8cab857c13f936980f" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of the artist.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the artist.</td>
                    </tr>
                    <tr>
                      <td>details</td>
                      <td>details object</td>
                      <td>The object of detailed information of the artist.</td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>string</td>
                      <td>The type, can be "Artist", "Band", "Dj" etc.</td>
                    </tr>
                    <tr>
                      <td>carrier_start</td>
                      <td>number</td>
                      <td>The year when carrier started.</td>
                    </tr>
                    <tr>
                      <td>location</td>
                      <td>string</td>
                      <td>The location of origin of the artist.</td>
                    </tr>
                    <tr>
                      <td>active</td>
                      <td>string</td>
                      <td>Artist activity can either be "yes" or "no".</td>
                    </tr>
                    <tr>
                      <td>urls</td>
                      <td>urls object</td>
                      <td>The object of links regarding the artist.</td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>string</td>
                      <td>Link of the artist image.</td>
                    </tr>
                    <tr>
                      <td>external_url</td>
                      <td>string</td>
                      <td>
                        Link to find out more about artist. Can be official page
                        or web.
                      </td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Short description about the artist.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "_id": "5daeea8cab857c13f936980f",
                  <br /> "name": "Eminem",
                  <br /> "details": &#123;
                  <br /> "type": "Artist",
                  <br /> "carrier_start": 1988,
                  <br /> "location": "St. Joseph, Missouri, USA",
                  <br /> "active": "Yes" &#125;,
                  <br /> "urls": &#123;
                  <br /> "image": "../uploads/images/1571744396490Eminem.jpg",
                  <br /> "external_url": "https://www.eminem.com/" &#125;,
                  <br />
                  "description": "Marshall Bruce Mathers III (born October 17,
                  1972), known professionally as Eminem, is an American rapper,
                  songwriter, record producer, record executive, film producer,
                  and actor. He is consistently cited as one of the greatest and
                  most influential rappers of all time and was labeled the
                  \"King of Hip Hop\" by Rolling Stone..."
                  <br /> &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-all-artist-tracks">GET All Artist Tracks</h5>
                <em>
                  To get all tracks of specific artist use .../tracks and
                  artistID:
                </em>
                <br />
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/artists/tracks/5daeea8cab857c13f936980f"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of songs of the artist.</td>
                    </tr>
                    <tr>
                      <td>tracks</td>
                      <td>array of tracks</td>
                      <td>The tracks.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of the track.</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The artist name for the track.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>urls</td>
                      <td>urls object</td>
                      <td>The urls object of the track.</td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link of the track.</td>
                    </tr>
                    <tr>
                      <td>request</td>
                      <td>request object</td>
                      <td>
                        The information of how to get full information of the
                        track.
                      </td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>HTTP verb</td>
                      <td>The HTTP request verb to use.</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Description of what this requesst does.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123; <br /> "count": 2, <br />
                  "tracks": [ &#123; <br />
                  "_id": "5daf0114ab857c13f9369843",
                  <br />
                  "artist": "Eminem",
                  <br /> "name": "Till I Collapse",
                  <br /> "urls": &#123;
                  <br /> "url":
                  "../uploads/songs/1571750117987Eminem-feat-nate-dogg-Till-i-collapse.mp3"
                  &#125;, "request": &#123;
                  <br /> "type": "GET",
                  <br /> "description": "Get the full information about the
                  track",
                  <br /> "ulr": "music-mix.live/tracks/5daf0114ab857c13f9369843"
                  &#125;
                  <br /> &#125;,
                  <br /> &#123;
                  <br /> "_id": "5daf0163ab857c13f9369844",
                  <br /> "artist": "Eminem", <br />
                  "name": "Without me",
                  <br /> "urls": &#123;
                  <br /> "url":
                  "../uploads/songs/1571750197837Eminem-Without-me.mp3" &#125;,
                  <br />
                  "request": &#123;
                  <br /> "type": "GET", <br />
                  "description": "Get the full information about the track",
                  <br /> "ulr": "music-mix.live/tracks/5daf0163ab857c13f9369844"
                  &#125;
                  <br /> &#125;
                  <br /> ] &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="search-tracks">Search for tracks</h5>
                <em>To find tracks use keyword (case insensitive):</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/search/tracks/pain" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of songs found.</td>
                    </tr>
                    <tr>
                      <td>tracks</td>
                      <td>array of tracks</td>
                      <td>The tracks.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of the track.</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The artist name for the track.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>release</td>
                      <td>DateString</td>
                      <td>Date when track was released.</td>
                    </tr>
                    <tr>
                      <td>explicit</td>
                      <td>boolean</td>
                      <td>Boolean value for is track explicit or not.</td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link of the track.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 2,
                  <br /> "tracks": [<br /> &#123;
                  <br /> "_id": "5daef957ab857c13f9369836",
                  <br /> "artist": "Three Days Grace",
                  <br />
                  "name": "Pain",
                  <br /> "release": "Fri Oct 02 2009",
                  <br /> "explicit": false,
                  <br /> "url":
                  "../uploads/songs/1571748161332Three_days_grace-Pain.mp3"
                  &#125;,
                  <br /> &#123;
                  <br /> "_id": "5daef9a3ab857c13f9369837",
                  <br /> "artist": "Three Days Grace",
                  <br /> "name": "Painkiller",
                  <br /> "release": "Mon Mar 31 2014",
                  <br /> "explicit": false,
                  <br /> "url":
                  "../uploads/songs/1571748229619Three_days_grace-Painkiller.mp3"
                  &#125;
                  <br /> ] &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="search-artists">Search for artists</h5>
                <em>To find artists use keyword (case insensitive):</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/search/artists/slip" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of artists found.</td>
                    </tr>
                    <tr>
                      <td>artists</td>
                      <td>array of artists</td>
                      <td>The artists.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of the artist.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the artist.</td>
                    </tr>
                    <tr>
                      <td>details</td>
                      <td>details object</td>
                      <td>Details object of the artist.</td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>string</td>
                      <td>The type, can be "Artist", "Band", "Dj" etc.</td>
                    </tr>
                    <tr>
                      <td>carrier_start</td>
                      <td>number</td>
                      <td>The year of when carrier started.</td>
                    </tr>
                    <tr>
                      <td>location</td>
                      <td>string</td>
                      <td>The location of origin of the artist/band.</td>
                    </tr>
                    <tr>
                      <td>active</td>
                      <td>string</td>
                      <td>
                        Can be "yes" or "no" representing if artist/band is
                        active.
                      </td>
                    </tr>
                    <tr>
                      <td>urls</td>
                      <td>urls object</td>
                      <td>Urls object of the artist.</td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>string</td>
                      <td>The link of the image for the artist/band.</td>
                    </tr>
                    <tr>
                      <td>external_url</td>
                      <td>string</td>
                      <td>The link to artist official page or web.</td>
                    </tr>
                    <tr>
                      <td>request</td>
                      <td>request object</td>
                      <td>
                        The information of how to get full information of the
                        track.
                      </td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>HTTP verb</td>
                      <td>The HTTP request verb to use.</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Description of what this requesst does.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 1, <br /> "artists": [<br /> &#123; <br />
                  "_id": "5daee9a2ab857c13f936980b",
                  <br /> "name": "Slipknot",
                  <br /> "details": &#123;
                  <br /> "type": "Band",
                  <br /> "carrier_start": 1995,
                  <br /> "location": "Des Moines, Iowa, USA",
                  <br /> "active": "Yes" &#125; ,<br /> "urls": &#123;
                  <br /> "image": "../uploads/images/1571744161132Slipknot.jpg",
                  <br /> "external_url": "https://www.slipknot1.com/" &#125; ,
                  <br />
                  "request": &#123; <br />
                  "type": "GET", <br />
                  "description": "Get all the tracks for this artist",
                  <br /> "ulr":
                  "music-mix.live/artists/tracks/5daee9a2ab857c13f936980b"
                  &#125;
                  <br /> &#125;
                  <br /> ] &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-newest-tracks">GET Newest Tracks</h5>
                <em>To get the newest tracks (returns top 20 newest):</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/browse/newest" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of tracks.</td>
                    </tr>
                    <tr>
                      <td>tracks</td>
                      <td>array of tracks</td>
                      <td>The tracks.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of the track.</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The name of the artist.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>release</td>
                      <td>DateString</td>
                      <td>The date when track was released.</td>
                    </tr>
                    <tr>
                      <td>explicit</td>
                      <td>boolean</td>
                      <td>
                        Boolean value representing if track is explicit or not.
                      </td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link of the track.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 20,
                  <br /> "tracks": [<br /> &#123; <br />
                  "_id": "5daf0912ab857c13f936985c", <br />
                  "artist": "GAYAZOV$ BROTHER$",
                  <br />
                  "name": "Увезите меня на Дип-хаус",
                  <br /> "release": "Fri Oct 04 2019", <br />
                  "explicit": false,
                  <br /> "url":
                  "../uploads/songs/1571752183106gayazov_brother-uvezite_menja_na_deep_house.mp3"
                  &#125;,
                  <br /> &#123; <br />
                  "_id": "5daefeacab857c13f9369842",
                  <br /> "artist": "As I Lay Dying",
                  <br /> "name": "Take What’s Left", <br />
                  "release": "Fri Sep 20 2019", <br />
                  "explicit": false,
                  <br /> "url":
                  "../uploads/songs/1571749508097As-i-lay-dying-Take-what-s-left.mp3"
                  <br />
                  &#125;,
                  <br /> ...
                  <br /> ] <br />
                  &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-genres">GET Genres</h5>
                <em>To get the list of all genres:</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/browse/genres" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of different genres.</td>
                    </tr>
                    <tr>
                      <td>genres</td>
                      <td>array of genres</td>
                      <td>The genres.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID for the genre.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the genre.</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>The description of the genre.</td>
                    </tr>
                    <tr>
                      <td>links</td>
                      <td>links object</td>
                      <td>Links object holds links.</td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>string</td>
                      <td>The link of the image for the genre.</td>
                    </tr>
                    <tr>
                      <td>external_url</td>
                      <td>string</td>
                      <td>
                        The link to find more information about hte gerne.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 9,
                  <br /> "genres": [ <br />
                  &#123;
                  <br /> "_id": "5daee2c2ab857c13f93697fc",
                  <br />
                  "name": "Rock",
                  <br /> "description": "Rock music is a broad genre of popular
                  music that originated as \"rock and roll\" in the United
                  States in the early 1950s, and developed into a range of
                  different styles in the 1960s and later, particularly in the
                  United States and the United Kingdom. It has its roots in
                  1940s and 1950s rock and roll...",
                  <br /> "links": &#123;
                  <br /> "image":
                  "../uploads/images/1571742402719Rock_music.jpg",
                  <br />
                  "external_url": "https://en.wikipedia.org/wiki/Rock_music"
                  &#125;
                  <br /> &#125;,
                  <br /> ... <br />] <br />
                  &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-specific-genre">GET Genre Tracks</h5>
                <em>To get the all tracks of the genre use genre name:</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/browse/genres/pop" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>
                        The number of tracks found associated with keyword.
                      </td>
                    </tr>
                    <tr>
                      <td>tracks</td>
                      <td>array of tracks</td>
                      <td>The tracks.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID for the track.</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The name of the artist.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>explicit</td>
                      <td>boolean</td>
                      <td>
                        Boolean value representing if track is explicit or not.
                      </td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link of the track.</td>
                    </tr>
                    <tr>
                      <td>genres</td>
                      <td>array of genres</td>
                      <td>Genres of the track.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 19,
                  <br /> "tracks": [<br /> &#123;
                  <br /> "_id": "5daf04fbab857c13f936984e",
                  <br /> "artist": "Eldzhey feat. Era Istrefi",
                  <br /> "name": "Sayonara детка",
                  <br /> "explicit": false,
                  <br /> "url":
                  "../uploads/songs/1571751137528eldzhey-feat-era-istrefi_-_sayonara-detka.mp3",
                  "genres": [ "Rap, Pop" ]<br /> &#125;, <br />
                  &#123;
                  <br /> "_id": "5daf0570ab857c13f936984f",
                  <br /> "artist": "Little Big", <br />
                  "name": "I’m ok",
                  <br /> "explicit": false,
                  <br /> "url":
                  "../uploads/songs/1571751251046little-big_-_i-m-ok.mp3",
                  <br />
                  "genres": [ "Pop" ]<br /> &#125;,
                  <br /> ... <br />]<br /> &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-moods">GET Moods</h5>
                <em>To get the list of all the moods playlists:</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/browse/moods" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>count</td>
                      <td>number</td>
                      <td>The number of mood playlists.</td>
                    </tr>
                    <tr>
                      <td>moods</td>
                      <td>array of moods</td>
                      <td>The moods (playlists).</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID for the mood.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the mood (playlist).</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Short description of the mood (playlist).</td>
                    </tr>
                    <tr>
                      <td>links</td>
                      <td>links object</td>
                      <td>Links object holds relevant links.</td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>string</td>
                      <td>The link of the image for the mood.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "count": 2, <br />
                  "moods": [<br /> &#123;
                  <br /> "_id": "5db819b0b41b17170ff8560c",
                  <br /> "name": "Party Mix",
                  <br />
                  "description": "The best music for good party",
                  <br /> "links": &#123; <br />
                  "image": "../uploads/images/1572346288537party.jpg" &#125;
                  <br />
                  &#125;, <br />
                  &#123;
                  <br /> "_id": "5db81a8eb41b17170ff8560d",
                  <br /> "name": "Relax",
                  <br /> "description": "Relaxing music to listen when in need",
                  <br /> "links": &#123; <br />
                  "image": "../uploads/images/1572346510585relax.jpg" &#125;
                  <br />
                  &#125;, <br /> ... <br />]<br /> &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-specific-moods">GET Specific Mood</h5>
                <em>
                  To get the all the tracks for the specific mood (playlist) use
                  moodID:
                </em>
                <br />
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/browse/moods/5db819b0b41b17170ff8560c"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>response</td>
                      <td>response object</td>
                      <td>Response object with all information.</td>
                    </tr>
                    <tr>
                      <td>playlist</td>
                      <td>array of playlist</td>
                      <td>
                        Array of playlist, holds information about the current
                        mood (playlist). See more{" "}
                        <a href="#get-moods">GET Moods</a>.{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>trackCount</td>
                      <td>number</td>
                      <td>The number of tracks for the mood (playlist).</td>
                    </tr>
                    <tr>
                      <td>tracks</td>
                      <td>array of tracks</td>
                      <td>
                        Array of tracks, holds information about every signle
                        track.
                      </td>
                    </tr>
                    <tr>
                      <td>artist_id</td>
                      <td>array of artist_id`s</td>
                      <td>The array holds all artist ID of the track.</td>
                    </tr>
                    <tr>
                      <td>genres</td>
                      <td>array og genres</td>
                      <td>The array holds genre values of the track.</td>
                    </tr>
                    <tr>
                      <td>explicit</td>
                      <td>boolean</td>
                      <td>
                        The Boolean value representing if track is explicit or
                        not.
                      </td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID for the track.</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The name of artist for the track.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link for the track.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "response":
                  <br /> &#123;
                  <br /> "playlist": [ <br />
                  &#123;
                  <br /> "_id": "5db819b0b41b17170ff8560c",
                  <br />
                  "name": "Party Mix",
                  <br /> "description": "The best music for good party",
                  <br /> "image": "../uploads/images/1572346288537party.jpg",
                  <br />
                  "trakCount": 10,
                  <br /> "tracks": [ <br />
                  &#123; <br />
                  "artist_id": [ "5daef0c4ab857c13f9369829",
                  "5daef0f6ab857c13f936982a" ],
                  <br /> "genres": [ "Alternative, Electro" ], <br />
                  "explicit": false,
                  <br /> "_id": "5daf176cab857c13f9369880",
                  <br /> "artist": "Rag'n'Bone Man feat. Calvin Harris",
                  <br /> "name": "Giant",
                  <br /> "url":
                  "../uploads/songs/1571755848551Calvin_Harris_feat._Rag_n_Bone_Man-Giant.mp3"
                  &#125;,
                  <br /> &#123; <br />
                  "artist_id": [ "5daef018ab857c13f9369826" ],
                  <br />
                  "genres": [ "House, Pop" ],
                  <br /> "explicit": false,
                  <br /> "_id": "5daf1516ab857c13f9369879",
                  <br /> "artist": "Mari Kraimbrery",
                  <br />
                  "name": "Туси сам",
                  <br /> "url":
                  "../uploads/songs/1571755252820mari-kraimbrery_-_tusi-sam.mp3"
                  &#125;
                  <br />, ... <br />] <br />
                  &#125; ] <br />
                  &#125; &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-user-playlists">GET User Playlists</h5>
                <em>To get all the playlists for the user use userID:</em>
                <br />
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/playlists/users/5db6d23f8890ec179f09c699"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>playlistCount</td>
                      <td>number</td>
                      <td>The number of playlist user has.</td>
                    </tr>
                    <tr>
                      <td>playlist</td>
                      <td>array of playlists</td>
                      <td>The array of playlists.</td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of the playlist.</td>
                    </tr>
                    <tr>
                      <td>user_id</td>
                      <td>string</td>
                      <td>The MusicMix ID of hte user.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the playlist.</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Short description of the playlist.</td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>string</td>
                      <td>The link of the image for the playlist.</td>
                    </tr>
                    <tr>
                      <td>request</td>
                      <td>request object</td>
                      <td>
                        The information of how to get all tracks of the
                        playlist.
                      </td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>HTTP verb</td>
                      <td>The HTTP request verb to use.</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>Description of what this requesst does.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123; <br /> "playlistCount": 2,
                  <br /> "playlist": [ <br />
                  &#123;
                  <br /> "_id": "5db82378b41b17170ff8560e",
                  <br /> "user_id": "5db6d23f8890ec179f09c699",
                  <br /> "name": "My rock mix",
                  <br />
                  "description": "My mix of rock songs I like",
                  <br /> "image": "../uploads/images/1572348792275MyRock.jpg",
                  <br /> "request": &#123;
                  <br /> "type": "GET",
                  <br /> "description": "Get all the information and tracks for
                  this playlist",
                  <br /> "url":
                  "music-mix.live/playlists/5db82378b41b17170ff8560e/users/5db6d23f8890ec179f09c699"
                  &#125;
                  <br /> &#125;,
                  <br />
                  ... <br />]<br /> &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-user-playlist-tracks">GET User Playlist Tracks</h5>
                <em>
                  To get all the tracks for the playlist of the user, use userID
                  and playlistID:
                </em>
                <br />
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/playlists/5db82378b41b17170ff8560e/users/5db6d23f8890ec179f09c699"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value Type</th>
                      <th>Value Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>playlist</td>
                      <td>playlist array</td>
                      <td>
                        Playlist array holds information about playlist. See
                        more{" "}
                        <a href="#get-user-playlists">GET User Playlists</a>.
                      </td>
                    </tr>
                    <tr>
                      <td>trackCount</td>
                      <td>number</td>
                      <td>The number of tracks of the playlist.</td>
                    </tr>
                    <tr>
                      <td>tracks</td>
                      <td>tracks array</td>
                      <td>
                        Tracks array hold information about all tracks in
                        theplaylist.
                      </td>
                    </tr>
                    <tr>
                      <td>artist_id</td>
                      <td>array of artist_id`s</td>
                      <td>The array holds all artist ID of the track.</td>
                    </tr>
                    <tr>
                      <td>genres</td>
                      <td>array og genres</td>
                      <td>The array holds genre values of the track.</td>
                    </tr>
                    <tr>
                      <td>explicit</td>
                      <td>boolean</td>
                      <td>
                        The Boolean value representing if track is explicit or
                        not.
                      </td>
                    </tr>
                    <tr>
                      <td>_id</td>
                      <td>string</td>
                      <td>The MusicMix ID for the track.</td>
                    </tr>
                    <tr>
                      <td>artist</td>
                      <td>string</td>
                      <td>The name of artist for the track.</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>The name of the track.</td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>string</td>
                      <td>The link for the track.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 right">
                <code>
                  &#123;
                  <br /> "playlist": [<br /> &#123; <br />
                  "_id": "5db82378b41b17170ff8560e",
                  <br />
                  "user_id": "5db6d23f8890ec179f09c699",
                  <br /> "name": "My rock mix",
                  <br />
                  "description": "My mix of rock songs I like",
                  <br /> "image": "../uploads/images/1572348792275MyRock.jpg",
                  <br /> "trakCount": 3,
                  <br /> "tracks": [<br /> &#123;
                  <br /> "artist_id": [ "5daee7bcab857c13f9369806" ],
                  <br /> "genres": [ "Rock" ],
                  <br />
                  "explicit": false,
                  <br /> "_id": "5daef649ab857c13f936982e",
                  <br />
                  "artist": "Tritia",
                  <br /> "name": "Wake",
                  <br />
                  "url": "../uploads/songs/1571747387022Tritia-Wake.mp3" &#125;,
                  <br />
                  ... <br />]<br /> &#125;
                  <br /> ]<br />
                  &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="post-user-playlist">POST User Playlist</h5>
                <em>
                  To create a playlist for the user, use body parameters and
                  userID:
                </em>
                <table>
                  <thead>
                    <tr>
                      <th>Request Body Data</th>
                      <th>Value Type</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>
                        <em>Required.</em>
                        <br />
                        Choose a name for the playlist.
                      </td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        Write a short description about the playlist.
                      </td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>.png or .jpg file</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        Choose a .png or .jpeg image (max 3 mb) for the playlist
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  API will receive playlistID and userID from the POST request.
                </p>
              </div>
              <div className="col-lg-6 right">
                <code className="language-curl-command">
                  curl -X POST
                  "https://music-mix.live/playlists/users/5db6d23f8890ec179f09c699"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="patch-user-playlist">PATCH User Playlist</h5>
                <em>
                  To edit a playlist for the user, use body parameters,
                  playlistID and userID:
                </em>
                <table>
                  <thead>
                    <tr>
                      <th>Request Body Data</th>
                      <th>Value Type</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        Choose a name for the playlist.
                      </td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>string</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        Write a short description about the playlist.
                      </td>
                    </tr>
                    <tr>
                      <td>image</td>
                      <td>.png or .jpg file</td>
                      <td>
                        <em>Optional.</em>
                        <br />
                        Choose a .png or .jpeg image (max 3 mb) for the playlist
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  API will receive playlistID and userID from the PATCH request.
                </p>
              </div>
              <div className="col-lg-6 right">
                <code className="language-curl-command">
                  curl -X PATCH
                  "https://music-mix.live/playlists/5db82378b41b17170ff8560e/users/5db6d23f8890ec179f09c699"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="remove-playlist-track">Add Track to Playlist</h5>
                <em>
                  To add a track to the playlist for the user, use body
                  parameters, playlistID and userID:
                </em>
                <table>
                  <thead>
                    <tr>
                      <th>Request Body Data</th>
                      <th>Value Type</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>track_id</td>
                      <td>string</td>
                      <td>
                        <em>Required.</em>
                        <br />
                        Write trackID to add track to the playlist.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  API will receive playlistID and userID from the PATCH request.
                </p>
              </div>
              <div className="col-lg-6 right">
                <code className="language-curl-command">
                  curl -X PATCH
                  "https://music-mix.live/playlists/5db82378b41b17170ff8560e/users/5db6d23f8890ec179f09c699/tracks"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="remove-playlist-track">Remove Playlist Track</h5>
                <em>
                  To remove a track from the playlist for the user, use body
                  parameters, playlistID and userID:
                </em>
                <table>
                  <thead>
                    <tr>
                      <th>Request Body Data</th>
                      <th>Value Type</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>track_id</td>
                      <td>string</td>
                      <td>
                        <em>Required.</em>
                        <br />
                        Write trackID to add track to the playlist.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  API will receive playlistID and userID from the DELETE request.
                </p>
              </div>
              <div className="col-lg-6 right">
                <code className="language-curl-command">
                  curl -X DELETE
                  "https://music-mix.live/playlists/5db82378b41b17170ff8560e/users/5db6d23f8890ec179f09c699/tracks"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="delete-user-playlist">DELETE User Playlist</h5>
                <em>
                  To delete a playlist for the user, playlistID and userID:
                </em>
                <p>
                  API will receive playlistID and userID from the DELETE request.
                </p>
              </div>
              <div className="col-lg-6 right">
                <code className="language-curl-command">
                  curl -X DELETE
                  "https://music-mix.live/playlists/5db82378b41b17170ff8560e/users/5db6d23f8890ec179f09c699"
                  -H "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
              </div>
            </div>
            <br />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Api;
