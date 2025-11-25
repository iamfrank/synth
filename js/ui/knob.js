export class InputKnob extends HTMLElement {
  static observedAttributes = ["value", "min", "max", "step"];
  styles = `
    .input-knob {
      width: 3rem;
      height: 3rem;
      border: solid 3px var(--color, white);
      border-radius: 50%;
      cursor: pointer;
      position: relative;

      & > svg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        display: block;
        width: 100%;
        height: 100%;
      }

      & > data {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }

      & > ul {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
        overflow-y: auto;
        scrollbar-width: none;
        width: 100%;
        height: 100%;
      }

      & li {
        display: block;
        padding: 0;
        margin: 0;
        height: 1rem;
        min-height: 1rem;
        width: 1rem;
        background-color: transparent;
        opacity: 0.2;
      }
    }
  `;
  value = 0;
  min;
  max;
  step = 4;
  debouncer;

  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
      <div class="input-knob">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <g fill="none" stroke="#4CAF50" stroke-width="8" stroke-linecap="round">
            <path d="M50,90 A40,40 0 0,1 50,90" />
          </g>
        </svg>
        <ul>
          ${this.renderScrollOptions()}
        </ul>
      </div>
    `;
  }

  renderScrollOptions() {
    let htmlString = "";
    for (let i = 0; i <= 100; i++) {
      htmlString += `<li>${i}</li>`;
    }
    return htmlString;
  }

  renderCirclePath() {
    const ratio = this.max / (this.value - this.min);
    const cx = 50;
    const cy = 50;
    const radius = 40;
    let angle = ratio * 360;
    if (angle === 360) {
      angle = 355;
    }
    const radians = ((angle - 90) * Math.PI) / 180;
    console.log("precalc", radians);
    const x = cx - radius * Math.cos(radians);
    const y = cy - radius * Math.sin(radians);
    const largeArc = angle >= 180 ? 1 : 0;
    console.log("xy", x, y);
    this.querySelector("svg > g").innerHTML =
      `<path d="M50,90 A40,40 0 ${largeArc},1 ${x},${y}" />`;
  }

  linkCSS() {
    if (!document.getElementById("input-knob-style")) {
      const style = document.createElement("style");
      style.id = "input-knob-style";
      style.innerText = this.styles;
      document.head.append(style);
    }
  }

  scrollHandler(event) {
    console.log("scrolling");
    const range = this.max - this.min;
    const ratio = event.target.scrollTop / event.target.scrollTopMax;
    if (this.debouncer) {
      clearTimeout(this.debouncer);
    }
    this.debouncer = setTimeout(() => {
      console.log(
        "setting attr",
        this.min + ratio * range,
        event.target.scrollTop / event.target.scrollTopMax,
      );
      this.setAttribute("value", this.min + ratio * range);
    }, 50);
  }

  connectedCallback() {
    this.linkCSS();
    this.render();
    this.querySelector(".input-knob ul").addEventListener(
      "scroll",
      this.scrollHandler.bind(this),
    );
  }

  disconnectedCallback() {
    this.querySelector(".input-knob ul").removeEventListener(
      "scroll",
      this.scrollHandler,
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("set attr", name, newValue);
    switch (name) {
      case "value":
        this.value = Number(newValue);
        break;
      case "min":
        this.min = Number(newValue);
        break;
      case "max":
        this.max = Number(newValue);
        break;
      case "step":
        this.step = Number(newValue);
        break;
      default:
        return;
    }
    if (
      oldValue !== newValue &&
      this.value &&
      this.min <= this.value &&
      this.max >= this.value
    ) {
      this.renderCirclePath();
    }
  }
}
