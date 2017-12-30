import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.splitPath = this.splitPath.bind(this);
  }

  componentDidMount() {
    this.pathLength = this.path.getTotalLength();
    this.forceUpdate();
  }

  // Method to split SVG image into different segments to animate independently
  splitPath(numberOfSegments, dValue) {
    if (this.pathLength) {
      const segmentLength = this.pathLength / numberOfSegments;
      const gapLength = 17;
      const segments = [];
      for (let i = 0; i < numberOfSegments; i++) {
        segments.push(<path
          d={dValue}
          style={{
              stroke: `hsla(${i * 360 / numberOfSegments}, 40%, 70%, 1)`,
              strokeDasharray: `
                0
                ${i * segmentLength + gapLength}
                ${segmentLength - gapLength}
                ${this.pathLength - (i + 1) * segmentLength}
              `,
              strokeDashoffset: `-${this.pathLength}`,
            }}
        />);
      }
      return segments;
    }
  }
  render() {
    const numberOfSegments = this.props.segments || 2;
    const dValue =
      'm 76.220183,47.393826 6.652272,-3.840696 0,15.362786 11.418353,19.777155 0,-54.917111 -23.779797,13.729281 -5.70917,-9.888583 35.198144,-20.3216609 35.198155,20.3216609 -5.70918,9.888586 -23.7798,-13.729284 0,54.917121 11.41836,-19.777159 0,-15.362788 6.65227,3.840697 9.88857,5.709169 6.65228,3.840688 -13.30457,7.681393 -11.41834,19.777161 47.55962,-27.45855 -23.77981,-13.729272 5.70919,-9.888566 35.19814,20.32164 0,40.643332 -11.41835,0 0,-27.458548 -47.55962,27.458548 22.8367,1.2e-5 13.30456,-7.681393 0,7.681381 0,11.418334 -1e-5,7.68138 -13.30455,-7.68139 -22.83669,0 47.5596,27.45856 0,-27.45855 11.41834,1e-5 1e-5,40.64331 -35.19816,20.32165 -5.70917,-9.88858 23.77979,-13.72926 -47.55959,-27.45856 11.41833,19.77716 13.30457,7.6814 -6.65228,3.84067 -9.88857,5.70918 -6.65227,3.84071 0,-15.36279 -11.41836,-19.77716 0,54.91711 23.77981,-13.72928 5.70914,9.8886 -35.198114,20.32165 -35.198153,-20.32167 5.70917,-9.88858 23.779799,13.72928 0,-54.91711 -11.418354,19.77715 0,15.3628 -6.652273,-3.84071 -9.888572,-5.70917 -6.652274,-3.84068 13.304559,-7.68139 11.418342,-19.77717 -47.559597,27.45856 23.779786,13.72927 -5.709183,9.88856 -35.198129,-20.32164 0,-40.64332 11.418354,0 0,27.45855 47.559598,-27.45855 -22.836696,-1e-5 -13.304548,7.68139 0,-7.68138 0,-11.418338 1.3e-5,-7.681371 13.304535,7.681384 22.836684,0 -47.559573,-27.458559 0,27.458546 -11.418342,-1.2e-5 -1.3e-5,-40.643315 35.198141,-20.321641 5.709171,9.88859 L 36.842657,56.943691 84.40223,84.40225 72.983899,64.625087 59.679341,56.943691 66.331614,53.103017 Z';
    const segments = this.splitPath(numberOfSegments, dValue);
    return (
      <div className="flex-container loader">
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid" className="centeredContent svg">
          {segments || (
            <path ref={node => (this.path = node)} style={{ display: 'none' }} d={dValue} />
          )}
        </svg>
        <h3>Loading ...</h3>
      </div>
    );
  }
}

export default Loader;
