import React from "react";
import './style.scss'
const S = 'FooterAnotation';

const simbolGit = <svg className="svg_git">
  <symbol id="git" viewBox="0 0 31.457 31.457">
    <g>
      <path d="M17.199,0c-0.664,0-1.233,0.252-1.705,0.757C15.024,1.261,14.79,1.87,14.79,2.581c0,0.688,0.236,1.285,0.705,1.79
                c0.471,0.504,1.039,0.757,1.705,0.757c0.642,0,1.199-0.252,1.67-0.757c0.47-0.505,0.705-1.102,0.705-1.79
                c0-0.711-0.235-1.319-0.705-1.824C18.398,0.252,17.841,0,17.199,0z"/>
      <path d="M27.322,19.79c-1.01,0-1.508-0.769-1.508-2.306v-6.07h3.176V7.619H25.81c-0.012-0.5-0.04-1.651-0.06-2.191h-3.709v2.191
                h-2.049v3.794h2.049v5.897c0,1.928,0.242,3.34,0.727,4.233c0.643,1.194,1.77,1.79,3.443,1.79c1.193,0,2.244-0.229,3.031-0.688
                v-3.441C28.615,19.596,28.033,19.79,27.322,19.79z"/>
      <path d="M15.005,7.674c-1.348,0.526-2.603,0.793-3.681,0.793c-0.962-0.551-1.96-0.826-3.084-0.826
                c-1.561,0-2.901,0.516-4.026,1.548c-1.17,1.102-1.757,2.479-1.757,4.13c0,1.102,0.318,2.133,0.963,3.097
                c0.573,0.895,1.173,1.469,1.958,1.721v0.069c-0.785,0.321-1.134,1.124-1.134,2.41c0,0.987,0.349,1.721,1.134,2.202v0.07
                c-2.17,0.709-3.163,2.029-3.163,3.957c0,1.676,0.729,2.902,2.153,3.682c1.123,0.619,2.567,0.93,4.311,0.93
                c4.244,0,6.371-1.777,6.371-5.335c0-2.226-1.638-3.591-4.919-4.097c-0.759-0.114-1.329-0.389-1.72-0.825
                c-0.299-0.3-0.445-0.597-0.445-0.896c0-0.85,0.458-1.343,1.377-1.479c1.398-0.207,2.539-0.854,3.425-1.944
                c0.882-1.09,1.324-2.37,1.324-3.838c0-0.458-0.139-0.952-0.321-1.479c0.541-0.126,0.931-0.24,1.234-0.347v12.102h4.155V6.953
                h-4.155V7.674z M8.619,24.814c1.928,0,2.891,0.586,2.891,1.754c0,1.24-0.883,1.859-2.65,1.859c-2.019,0-3.027-0.597-3.027-1.789
                C5.831,25.423,6.761,24.814,8.619,24.814z M8.378,15.729c-1.445,0-2.168-0.792-2.168-2.375c0-1.698,0.723-2.547,2.168-2.547
                c0.689,0,1.229,0.264,1.617,0.792c0.321,0.481,0.481,1.055,0.481,1.721C10.477,14.926,9.778,15.729,8.378,15.729z"/>
    </g>
  </symbol>
  <use xlinkHref="#git" />
</svg>

const FooterAnotation = () => {
  return (
    <div className={`${S}`}>
      <a href="https://github.com/AlexLibrary" target="blank">{simbolGit}</a>
    </div>
  )
}

export default FooterAnotation;
