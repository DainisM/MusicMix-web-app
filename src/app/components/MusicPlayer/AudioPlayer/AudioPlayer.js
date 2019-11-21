import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faPause,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import "./AudioPlayer.css";

class AudioPlayer extends React.Component {
  constructor() {
    super();

    //State objects
    this.state = {
      playing: false,
      progress: 0,
      set_progress_mode: false
    };

    //Properties
    this.is_progress_dirty = false;
    //Calling onUpdate every 0.25 sec
    this.interval_id = setInterval(this.onUpdate.bind(this), 250);
  }

  //Method for setting volume bar value to 100 as audio value (Initialazed on render)
  componentDidMount() {
    this.volumeBar.value = this.player.volume * 100;
  }

  //Method for updateing track progress (current time / total time)
  onUpdate() {
    if (this.player) {
      if (!this.is_progress_dirty) {
        this.setState({
          progress: this.player.currentTime / this.player.duration
        });
      }

      if (this.player.ended && this.props.onDone) {
        this.props.onDone(this.props.src);
      }
    }
  }

  //Method for toggling between play and pause
  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }

  //Method for starting to set new progress (updating progrss_mode in state and calling setProgress method)
  // Is used to update progress in progress bar by clicking and dragging
  startSetProgress(evt) {
    this.setState({
      set_progress_mode: true
    });
    this.setProgress(evt);
  }

  //Method for stopping updating progrss (sets progress_mode back to false and calls setProgress method)
  //Is used when relising dragging in progress bar
  stopSetProgress(evt) {
    this.setState({
      set_progress_mode: false
    });
    this.setProgress(evt);
  }

  //Method for updating audio progress(time) by calculating distance from start to clicked/and dragged point
  setProgress(evt) {
    if (this.state.set_progress_mode) {
      var progress =
        (evt.clientX - offsetLeft(this.progress_bar)) /
        this.progress_bar.clientWidth;
      this.setState({
        progress: progress
      });
      this.is_progress_dirty = true;
    }
  }

  //Method which sets player volume to volume bar value / 100
  SetVolume(val) {
    this.player.volume = this.volumeBar.value / 100;
  }

  render() {
    var currentTime = 0;
    var totalTime = 0;

    if (this.player) {
      if (this.player.currentSrc !== this.props.src) {
        this.player.src = this.props.src;
      }

      if (this.player.paused && !this.player.ended) {
        if (this.state.playing) {
          this.player.play();
        }
      } else if (!this.state.playing) {
        this.player.pause();
      }

      if (this.is_progress_dirty) {
        this.is_progress_dirty = false;

        this.player.currentTime = this.player.duration * this.state.progress;
      }

      currentTime = this.player.currentTime;
      totalTime = this.player.duration;
    }

    return (
      <div className="audioPlayer">
        {/*Div for displaying current song name and artists*/}
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.artist}</p>
        </div>
        {/*Div for displaying audio player control buttons such as play,pause,forward and backward
          and invoking methods when clicked*/}
        <div className="controls">
          <a onClick={this.props.onPrev}>
            <FontAwesomeIcon icon={faBackward} />
          </a>
          <a onClick={this.togglePlay.bind(this)}>
            {<FontAwesomeIcon icon={!this.state.playing ? faPlay : faPause} />}
          </a>
          <a onClick={this.props.onNext}>
            <FontAwesomeIcon icon={faForward} />
          </a>
        </div>

        {/*Div for showing progress bar and progress time*/}
        <div
          /*Controls of progress bar which calls needed methods for clicking and dragging (setting) progress*/
          onMouseDown={this.startSetProgress.bind(this)}
          onMouseMove={this.setProgress.bind(this)}
          onMouseLeave={this.stopSetProgress.bind(this)}
          onMouseUp={this.stopSetProgress.bind(this)}
          className="progress"
        >
          {/*Progress bar for displaying progress of the song*/}
          <div ref={ref => (this.progress_bar = ref)} className="bar">
            <div style={{ width: this.state.progress * 100 + "%" }}></div>
          </div>
        </div>

        {/*Showing current time and total song duration*/}
        <div className="time">
          {formatTime(currentTime)} / {formatTime(totalTime)}
        </div>

        {/*Div for showing volume slider and controlling song volume by clicking and/or dragging on volume bar*/}
        <div id="volumeControl">
          <input
            ref={ref => (this.volumeBar = ref)}
            id="volume"
            type="range"
            min="0"
            max="100"
            step="1"
            onInput={this.SetVolume.bind(this)}
            onChange={this.SetVolume.bind(this)}
          ></input>
        </div>

        {/*Audio tag which recives song url and plays it depending on state*/}
        <audio
          id="audio"
          ref={ref => (this.player = ref)}
          src={this.props.src}
          autoPlay={this.state.playing}
        />
      </div>
    );
  }
}

//Function for formatting numbers
function format2Number(num) {
  var str = num + "";
  //Takes number and if its only 1 digit set 0 before
  if (str.length === 1) {
    return "0" + str;
  }
  //If there is no number sets 00
  if (str.length === 0) {
    return "00";
  }
  //else return number
  return str;
}

//Function for formatting time = currentTime / totalTime
function formatTime(s) {
  //If there is no value sets it to 00:00
  if (!s && s !== 0) {
    return "00:00";
  }

  //Calculating duration(in seconds) to full hours, minutes and seconds
  var total_seconds = Math.floor(s);
  var hours = Math.floor(total_seconds / 3600);
  var minutes = Math.floor(total_seconds / 60) - hours * 60;
  var seconds = total_seconds - minutes * 60 - hours * 3600;

  //If duration is long enough to include hours shoes hours:minutes:seconds
  if (hours) {
    return hours + ":" + format2Number(minutes) + ":" + format2Number(seconds);
  }

  //Else shows minutes:seconds
  return format2Number(minutes) + ":" + format2Number(seconds);
}

//Function for calcutaing child left offset from its parent
function offsetLeft(el) {
  var left = 0;
  while (el && el !== document) {
    left += el.offsetLeft;
    el = el.offsetParent;
  }
  return left;
}

export default AudioPlayer;
