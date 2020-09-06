import CustomVideoElement from 'custom-video-element';

// This doesn't work currently because of dependency issues in dash.js
// Instead we're just concatenating dash.js into the file and adding to the window.
// import * as dashjs from 'dashjs';

class DASHVideoElement extends CustomVideoElement {
  constructor() {
    super();
  }

  get src() {
    // Use the attribute value as the source of truth.
    // No need to store it in two places.
    // This avoids needing a to read the attribute initially and update the src.
    return this.getAttribute('src');
  }

  set src(val) {
    // If being set by attributeChangedCallback,
    // dont' cause an infinite loop
    if (val !== this.src) {
      this.setAttribute('src', val);
    }
  }

  load() {
    this.dashPlayer = window.dashjs.MediaPlayer().create();
    this.dashPlayer.initialize(this.nativeEl, this.src, true);
  }

  connectedCallback() {
    this.load();

    // Not preloading might require faking the play() promise
    // so that you can call play(), call load() within that
    // But wait until MANIFEST_PARSED to actually call play()
    // on the nativeEl.
    // if (this.preload === 'auto') {
    //   this.load();
    // }
  }
}

if (!window.customElements.get('dash-video')) {
  window.customElements.define('dash-video', DASHVideoElement);
  window.DASHVideoElement = DASHVideoElement;
}

export default DASHVideoElement;
