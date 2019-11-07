import React from "react";
import DefaultLayout from "./Layouts/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="container-fluid">
          <img
            src={require("../images/music-for-everyone.jpg")}
            alt=""
            width="100%"
          />
        </div>

        <div className="container">
          <br />
          <h3>
            Music for EVERYONE <em>literally</em>.
          </h3>
          <p>
            Our main goal is to deliver good music to EVERYONE. With MusicMix,
            it should be easy to find the right music every vibe.
          </p>
          <p>
            Take a look at our <a href="/help">Help</a> page to find out
            everything you need. After a peek even the guy from above could use
            our MusicMix service flawlessly!
          </p>
          <p>
            There are tons of tracks on MusicMix. So whether you’re behind the
            wheel, working out, partying or relaxing, the right music is always
            there for you.
          </p>
          <p>
            Only thing you need to do is make a choise about what you want to
            listen to.
          </p>
          <p>
            MusicMix lets people discover and enjoy the greatest selection of
            music from the hand-picked playlists by our Editors.
          </p>
          <br />
          <h4>Contact:</h4>
          <p>
            <b>E-mail:</b> contact@music-mix.live
          </p>
          <h3>MusicMix HQ:</h3>
          <p>Copenhagen, Denmark.</p>
          <div>
            <div>
              <iframe
                width="300px;"
                height="250px;"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Copenhagen%2C%20Denmark&t=&z10&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <br />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
