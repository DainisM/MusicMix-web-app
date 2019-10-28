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
            <ul>
              <li>
                <a href="#get-users-profile">Get User´s profile</a>
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
              sing in with email and password.
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
            <em>3. Use the JWT Token to access MusicMix Api.</em>
            <p>
              <code className="language-curl-command">
                curl -X GET "https://musix-mix.live/tracks" -H "Authorization:
                Bearer &#91;your JWT token&#93;"
              </code>
            </p>
            <h3 id="api-endpoints">API Endpoints</h3>
            <p>Header Field is requested for all enpoint requests</p>
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-users-profile">GET Users´s profile</h5>
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
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/users/5db6d23f8890ec179f09c699" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <br />
                <br />
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
                <em>Body parameters</em>
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
                <code className="language-curl-command">
                  curl -X GET "https://music-mix.live/tracks" -H "Authorization:
                  Bearer &#91;your JWT token&#93;"
                </code>
                <br />
                <br />
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
                  "request": &#123; "type": "GET", "description": "Get the full
                  information about the track", "url":
                  "music-mix.live/tracks/5daef649ab857c13f936982"; &#125; <br />
                  &#125;,
                  <br /> &#123; "_id": "5daef6f3ab857c13f9369830", "artist":
                  "State of Mine", "name": "Rise",
                  <br />
                  "url": "../uploads/songs/1571747540542State_of_mine-Rise.mp3",
                  <br />
                  "request": &#123; "type": "GET", "description": "Get the full
                  information about the track", "url":
                  "music-mix.live/tracks/5daef6f3ab857c13f9369830" &#125;
                  <br /> &#125; <br /> &#93; &#125;
                </code>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 left">
                <h5 id="get-trackId">GET Specific Track</h5>
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
                <code className="language-curl-command">
                  curl -X GET
                  "https://music-mix.live/tracks/5daef90aab857c13f9369835" -H
                  "Authorization: Bearer &#91;your JWT token&#93;"
                </code>
                <br />
                <br />
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Api;
