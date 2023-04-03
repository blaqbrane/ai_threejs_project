import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#ee2d2d',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;