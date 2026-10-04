import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { gsap } from "gsap";

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
const clampDpr = () => Math.min(window.devicePixelRatio || 1, 1.75);
const LIGHTING_STORAGE_KEY = "altar-lighting-v1";
// GUI changes are only remembered across reloads when "Recordar cambios" is checked.
const LIGHTING_PERSIST_KEY = "altar-lighting-persist";

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the GUI still works in memory.
  }
}
const LIGHTING_PRESET_VERSION = 5;

const TONE_MAPPINGS = {
  ACES: THREE.ACESFilmicToneMapping,
  Neutral: THREE.NeutralToneMapping,
  Linear: THREE.LinearToneMapping,
  Reinhard: THREE.ReinhardToneMapping,
};

const DEFAULT_LIGHTING = {
  hemisphereSky: "#000000",
  hemisphereGround: "#3f12e2",
  hemisphereIntensity: 0,
  keyColor: "#f8d4b7",
  keyIntensity: 6,
  keyX: -15,
  keyY: -15,
  keyZ: -15,
  rimColor: "#6f71f7",
  rimIntensity: 1.1,
  rimX: -15,
  rimY: 15,
  rimZ: -4.2,
  exposure: 2.55,
  toneMapping: "Linear",
  effectBlur: 0,
  grainOpacity: 0.25,
  grainFrequency: 0.5,
  grainSpeed: 10,
  sectionGrainOpacity: 0.16,
  orbitSpeed: 0.1,
  orbitKepler: 1.6,
  orbitTilt: 69,
  orbitScale: 1.45,
  orbitDirection: "Horario",
  moonSpeed: 1.25,
  spinSpeed: 3.5,
  orbitLineOpacity: 0.2,
  orbitLineColor: "#fffb00",
  starCount: 700,
  starSize: 1.6,
  starBrightness: 4,
  starColor: "#fff3a9",
  starColorVariation: 1,
  twinkleSpeed: 7.95,
  twinkleAmount: 0.5,
  bloomSize: 5.1,
  bloomIntensity: 0.35,
  starDrift: 0.9,
  sunSize: 0.2,
  sunEmissive: 1.4,
  sunEmissiveColor: "#ffffff",
  sunSpin: 1,
  sunGlowSize: 2.75,
  sunGlowIntensity: 0.9,
  sunGlowColor: "#ffb45c",
  sunLightIntensity: 1.4,
  sunLightColor: "#ffd9a8",
  system1X: 13.8,
  system1Y: 7.25,
  system1Z: -79.8,
  system1RotX: -2,
  system1RotY: 162,
  system1RotZ: 14,
  system1Scale: 6.45,
  system2X: -33.8,
  system2Y: 15.3,
  system2Z: -66.25,
  system2RotX: 3,
  system2RotY: 16,
  system2RotZ: 13,
  system2Scale: 12.45,
  system3X: -13.1,
  system3Y: 17.9,
  system3Z: -82.95,
  system3RotX: -150,
  system3RotY: 116,
  system3RotZ: 2,
  system3Scale: 12.85,
  system4X: -25,
  system4Y: 8.85,
  system4Z: -74.05,
  system4RotX: -35,
  system4RotY: 64,
  system4RotZ: 7,
  system4Scale: 15.25,
  systemSpin: 0,
  systemFloat: 0,
  systemFloatSpeed: 0,
  systemParallax: 0,
  stonesX: -0.1,
  stonesY: -11,
  stonesZ: 0,
  stonesRotX: 0,
  stonesRotY: 0,
  stonesRotZ: 0,
  stonesScale: 0.9,
  stonesEmbed: 0.39,
  stoneMercuryX: -3.6,
  stoneMercuryY: -0.04,
  stoneMercuryZ: -1.9,
  stoneMercuryScale: 0.9,
  stoneMercuryRotX: 10,
  stoneMercuryRotY: -24,
  stoneMercuryRotZ: -73,
  stoneVenusX: -1.05,
  stoneVenusY: 0,
  stoneVenusZ: -1.3,
  stoneVenusScale: 1,
  stoneVenusRotX: -5,
  stoneVenusRotY: 19,
  stoneVenusRotZ: 7,
  stoneEarthX: 7.1,
  stoneEarthY: -0.19,
  stoneEarthZ: -1.55,
  stoneEarthScale: 1.95,
  stoneEarthRotX: 38,
  stoneEarthRotY: -16,
  stoneEarthRotZ: -11,
  stoneMarsX: -5.65,
  stoneMarsY: 0,
  stoneMarsZ: -0.2,
  stoneMarsScale: 1.3,
  stoneMarsRotX: -7,
  stoneMarsRotY: 30,
  stoneMarsRotZ: 6,
  stoneJupiterX: 2.25,
  stoneJupiterY: 0,
  stoneJupiterZ: 0.2,
  stoneJupiterScale: 1,
  stoneJupiterRotX: 3,
  stoneJupiterRotY: -14,
  stoneJupiterRotZ: -5,
  stoneSaturnX: 8.55,
  stoneSaturnY: 0,
  stoneSaturnZ: 1.2,
  stoneSaturnScale: 1.45,
  stoneSaturnRotX: -11,
  stoneSaturnRotY: -180,
  stoneSaturnRotZ: -51,
  stoneUranusX: 0.7,
  stoneUranusY: 0,
  stoneUranusZ: 1.4,
  stoneUranusScale: 1,
  stoneUranusRotX: 7,
  stoneUranusRotY: -22,
  stoneUranusRotZ: -7,
  stoneNeptuneX: -3.0,
  stoneNeptuneY: 0,
  stoneNeptuneZ: 2.3,
  stoneNeptuneScale: 1,
  stoneNeptuneRotX: -6,
  stoneNeptuneRotY: 13,
  stoneNeptuneRotZ: 9,
  stonePlutoX: 5,
  stonePlutoY: 0,
  stonePlutoZ: 1.9,
  stonePlutoScale: 1.3,
  stonePlutoRotX: 11,
  stonePlutoRotY: -32,
  stonePlutoRotZ: -6,
  stoneMoonX: -8.15,
  stoneMoonY: -0.37,
  stoneMoonZ: 1.85,
  stoneMoonScale: 2.9,
  stoneMoonRotX: -60,
  stoneMoonRotY: 180,
  stoneMoonRotZ: -180,
  tierra1Ground: "#e89e7a",
  tierra1Horizon: "#ff9c71",
  tierra1Ambient: 0.8,
  tierra1Light1Color: "#ffd2ad",
  tierra1Light1Intensity: 4.95,
  tierra1Light2Color: "#8b91ff",
  tierra1Light2Intensity: 1.15,
  tierra1BloomIntensity: 5.95,
  tierra1StoneMercuryX: -3.6,
  tierra1StoneMercuryY: -0.04,
  tierra1StoneMercuryZ: -1.9,
  tierra1StoneVenusX: -1.05,
  tierra1StoneVenusY: 0,
  tierra1StoneVenusZ: -1.3,
  tierra1StoneEarthX: 7.1,
  tierra1StoneEarthY: -0.19,
  tierra1StoneEarthZ: -1.55,
  tierra1StoneMarsX: -5.65,
  tierra1StoneMarsY: 0,
  tierra1StoneMarsZ: -0.2,
  tierra1StoneJupiterX: 2.25,
  tierra1StoneJupiterY: 0,
  tierra1StoneJupiterZ: 0.2,
  tierra1StoneSaturnX: 8.55,
  tierra1StoneSaturnY: 0,
  tierra1StoneSaturnZ: 1.2,
  tierra1StoneUranusX: 0.7,
  tierra1StoneUranusY: 0,
  tierra1StoneUranusZ: 1.4,
  tierra1StoneNeptuneX: -3.0,
  tierra1StoneNeptuneY: 0,
  tierra1StoneNeptuneZ: 2.3,
  tierra1StonePlutoX: 5,
  tierra1StonePlutoY: 0,
  tierra1StonePlutoZ: 1.9,
  tierra1StoneMoonX: -8.15,
  tierra1StoneMoonY: -0.37,
  tierra1StoneMoonZ: 1.85,
  tierra1StoneMercuryScale: 0.9,
  tierra1StoneMercuryRotX: 10,
  tierra1StoneMercuryRotY: -24,
  tierra1StoneMercuryRotZ: -73,
  tierra1StoneVenusScale: 1,
  tierra1StoneVenusRotX: -5,
  tierra1StoneVenusRotY: 19,
  tierra1StoneVenusRotZ: 7,
  tierra1StoneEarthScale: 1.95,
  tierra1StoneEarthRotX: 38,
  tierra1StoneEarthRotY: -16,
  tierra1StoneEarthRotZ: -11,
  tierra1StoneMarsScale: 1.3,
  tierra1StoneMarsRotX: -7,
  tierra1StoneMarsRotY: 30,
  tierra1StoneMarsRotZ: 6,
  tierra1StoneJupiterScale: 1,
  tierra1StoneJupiterRotX: 3,
  tierra1StoneJupiterRotY: -14,
  tierra1StoneJupiterRotZ: -5,
  tierra1StoneSaturnScale: 1.45,
  tierra1StoneSaturnRotX: -11,
  tierra1StoneSaturnRotY: -180,
  tierra1StoneSaturnRotZ: -51,
  tierra1StoneUranusScale: 1,
  tierra1StoneUranusRotX: 7,
  tierra1StoneUranusRotY: -22,
  tierra1StoneUranusRotZ: -7,
  tierra1StoneNeptuneScale: 1,
  tierra1StoneNeptuneRotX: -6,
  tierra1StoneNeptuneRotY: 13,
  tierra1StoneNeptuneRotZ: 9,
  tierra1StonePlutoScale: 1.3,
  tierra1StonePlutoRotX: 11,
  tierra1StonePlutoRotY: -32,
  tierra1StonePlutoRotZ: -6,
  tierra1StoneMoonScale: 2.9,
  tierra1StoneMoonRotX: -60,
  tierra1StoneMoonRotY: 180,
  tierra1StoneMoonRotZ: -180,
  tierra2Ground: "#1f1f09",
  tierra2Horizon: "#1f1f09",
  tierra2Ambient: 0.8,
  tierra2Light1Color: "#ffd2ad",
  tierra2Light1Intensity: 4.75,
  tierra2Light2Color: "#2f6e1d",
  tierra2Light2Intensity: 0.45,
  tierra2BloomIntensity: 8.85,
  tierra2StoneMercuryX: 2.75,
  tierra2StoneMercuryY: 0.01,
  tierra2StoneMercuryZ: -1.65,
  tierra2StoneVenusX: -8.45,
  tierra2StoneVenusY: 0,
  tierra2StoneVenusZ: -1.3,
  tierra2StoneEarthX: -2.3,
  tierra2StoneEarthY: -0.19,
  tierra2StoneEarthZ: -1.8,
  tierra2StoneMarsX: 5.5,
  tierra2StoneMarsY: 0,
  tierra2StoneMarsZ: -1,
  tierra2StoneJupiterX: 0.7,
  tierra2StoneJupiterY: 0,
  tierra2StoneJupiterZ: -0.15,
  tierra2StoneSaturnX: -5.8,
  tierra2StoneSaturnY: 0,
  tierra2StoneSaturnZ: 0.05,
  tierra2StoneUranusX: 7.9,
  tierra2StoneUranusY: -0.24,
  tierra2StoneUranusZ: 0.7,
  tierra2StoneNeptuneX: 3.3,
  tierra2StoneNeptuneY: 0,
  tierra2StoneNeptuneZ: 2.45,
  tierra2StonePlutoX: -6.25,
  tierra2StonePlutoY: 0,
  tierra2StonePlutoZ: 2.1,
  tierra2StoneMoonX: -2.15,
  tierra2StoneMoonY: -0.76,
  tierra2StoneMoonZ: 1.65,
  tierra2StoneMercuryScale: 0.9,
  tierra2StoneMercuryRotX: 10,
  tierra2StoneMercuryRotY: -24,
  tierra2StoneMercuryRotZ: -73,
  tierra2StoneVenusScale: 1,
  tierra2StoneVenusRotX: -5,
  tierra2StoneVenusRotY: 19,
  tierra2StoneVenusRotZ: 7,
  tierra2StoneEarthScale: 1.85,
  tierra2StoneEarthRotX: 41,
  tierra2StoneEarthRotY: -35,
  tierra2StoneEarthRotZ: -33,
  tierra2StoneMarsScale: 1.3,
  tierra2StoneMarsRotX: -7,
  tierra2StoneMarsRotY: 30,
  tierra2StoneMarsRotZ: 6,
  tierra2StoneJupiterScale: 1,
  tierra2StoneJupiterRotX: 3,
  tierra2StoneJupiterRotY: -14,
  tierra2StoneJupiterRotZ: -5,
  tierra2StoneSaturnScale: 1.45,
  tierra2StoneSaturnRotX: -11,
  tierra2StoneSaturnRotY: -180,
  tierra2StoneSaturnRotZ: -51,
  tierra2StoneUranusScale: 1.85,
  tierra2StoneUranusRotX: 7,
  tierra2StoneUranusRotY: -79,
  tierra2StoneUranusRotZ: -144,
  tierra2StoneNeptuneScale: 1,
  tierra2StoneNeptuneRotX: -6,
  tierra2StoneNeptuneRotY: 13,
  tierra2StoneNeptuneRotZ: 9,
  tierra2StonePlutoScale: 1.3,
  tierra2StonePlutoRotX: 11,
  tierra2StonePlutoRotY: -32,
  tierra2StonePlutoRotZ: -6,
  tierra2StoneMoonScale: 2.9,
  tierra2StoneMoonRotX: -60,
  tierra2StoneMoonRotY: 180,
  tierra2StoneMoonRotZ: -180,
  tierra3Ground: "#486074",
  tierra3Horizon: "#496d74",
  tierra3Ambient: 0.8,
  tierra3Light1Color: "#ffd2ad",
  tierra3Light1Intensity: 4.95,
  tierra3Light2Color: "#427c80",
  tierra3Light2Intensity: 1.15,
  tierra3BloomIntensity: 5.95,
  tierra3StoneMercuryX: -3.6,
  tierra3StoneMercuryY: -0.04,
  tierra3StoneMercuryZ: -1.9,
  tierra3StoneVenusX: -1.05,
  tierra3StoneVenusY: 0,
  tierra3StoneVenusZ: -1.3,
  tierra3StoneEarthX: 7.1,
  tierra3StoneEarthY: -0.19,
  tierra3StoneEarthZ: -1.55,
  tierra3StoneMarsX: -5.65,
  tierra3StoneMarsY: 0,
  tierra3StoneMarsZ: -0.2,
  tierra3StoneJupiterX: 2.25,
  tierra3StoneJupiterY: 0,
  tierra3StoneJupiterZ: 0.2,
  tierra3StoneSaturnX: 8.55,
  tierra3StoneSaturnY: 0,
  tierra3StoneSaturnZ: 1.2,
  tierra3StoneUranusX: 0.7,
  tierra3StoneUranusY: 0,
  tierra3StoneUranusZ: 1.4,
  tierra3StoneNeptuneX: -3.0,
  tierra3StoneNeptuneY: 0,
  tierra3StoneNeptuneZ: 2.3,
  tierra3StonePlutoX: 5,
  tierra3StonePlutoY: 0,
  tierra3StonePlutoZ: 1.9,
  tierra3StoneMoonX: -8.15,
  tierra3StoneMoonY: -0.37,
  tierra3StoneMoonZ: 1.85,
  tierra3StoneMercuryScale: 0.9,
  tierra3StoneMercuryRotX: 10,
  tierra3StoneMercuryRotY: -24,
  tierra3StoneMercuryRotZ: -73,
  tierra3StoneVenusScale: 1,
  tierra3StoneVenusRotX: -5,
  tierra3StoneVenusRotY: 19,
  tierra3StoneVenusRotZ: 7,
  tierra3StoneEarthScale: 1.95,
  tierra3StoneEarthRotX: 38,
  tierra3StoneEarthRotY: -16,
  tierra3StoneEarthRotZ: -11,
  tierra3StoneMarsScale: 1.3,
  tierra3StoneMarsRotX: -7,
  tierra3StoneMarsRotY: 30,
  tierra3StoneMarsRotZ: 6,
  tierra3StoneJupiterScale: 1,
  tierra3StoneJupiterRotX: 3,
  tierra3StoneJupiterRotY: -14,
  tierra3StoneJupiterRotZ: -5,
  tierra3StoneSaturnScale: 1.45,
  tierra3StoneSaturnRotX: -11,
  tierra3StoneSaturnRotY: -180,
  tierra3StoneSaturnRotZ: -51,
  tierra3StoneUranusScale: 1,
  tierra3StoneUranusRotX: 7,
  tierra3StoneUranusRotY: -22,
  tierra3StoneUranusRotZ: -7,
  tierra3StoneNeptuneScale: 1,
  tierra3StoneNeptuneRotX: -6,
  tierra3StoneNeptuneRotY: 13,
  tierra3StoneNeptuneRotZ: 9,
  tierra3StonePlutoScale: 1.3,
  tierra3StonePlutoRotX: 11,
  tierra3StonePlutoRotY: -32,
  tierra3StonePlutoRotZ: -6,
  tierra3StoneMoonScale: 2.9,
  tierra3StoneMoonRotX: -60,
  tierra3StoneMoonRotY: 180,
  tierra3StoneMoonRotZ: -180,
  tierra4Ground: "#4f2e19",
  tierra4Horizon: "#4f2e19",
  tierra4Ambient: 0.8,
  tierra4Light1Color: "#ffd2ad",
  tierra4Light1Intensity: 4.95,
  tierra4Light2Color: "#5181a4",
  tierra4Light2Intensity: 0.95,
  tierra4BloomIntensity: 9.05,
  tierra4StoneMercuryX: -2.15,
  tierra4StoneMercuryY: -0.05,
  tierra4StoneMercuryZ: 0.15,
  tierra4StoneVenusX: -8.65,
  tierra4StoneVenusY: -0.18,
  tierra4StoneVenusZ: -1.8,
  tierra4StoneEarthX: -1.35,
  tierra4StoneEarthY: -0.34,
  tierra4StoneEarthZ: 2.1,
  tierra4StoneMarsX: 6.15,
  tierra4StoneMarsY: 0,
  tierra4StoneMarsZ: -0.2,
  tierra4StoneJupiterX: -5.45,
  tierra4StoneJupiterY: -0.19,
  tierra4StoneJupiterZ: 0.2,
  tierra4StoneSaturnX: 1.85,
  tierra4StoneSaturnY: -0.22,
  tierra4StoneSaturnZ: -1.2,
  tierra4StoneUranusX: 8.2,
  tierra4StoneUranusY: 0,
  tierra4StoneUranusZ: 1.4,
  tierra4StoneNeptuneX: -3.7,
  tierra4StoneNeptuneY: 0,
  tierra4StoneNeptuneZ: -1.4,
  tierra4StonePlutoX: 4.35,
  tierra4StonePlutoY: 0,
  tierra4StonePlutoZ: 1.75,
  tierra4StoneMoonX: -8.6,
  tierra4StoneMoonY: -0.37,
  tierra4StoneMoonZ: 1.5,
  tierra4StoneMercuryScale: 1.1,
  tierra4StoneMercuryRotX: 84,
  tierra4StoneMercuryRotY: 6,
  tierra4StoneMercuryRotZ: -73,
  tierra4StoneVenusScale: 1,
  tierra4StoneVenusRotX: -5,
  tierra4StoneVenusRotY: 19,
  tierra4StoneVenusRotZ: 7,
  tierra4StoneEarthScale: 2,
  tierra4StoneEarthRotX: 9,
  tierra4StoneEarthRotY: -44,
  tierra4StoneEarthRotZ: -11,
  tierra4StoneMarsScale: 1.3,
  tierra4StoneMarsRotX: -7,
  tierra4StoneMarsRotY: -49,
  tierra4StoneMarsRotZ: 6,
  tierra4StoneJupiterScale: 1,
  tierra4StoneJupiterRotX: 3,
  tierra4StoneJupiterRotY: -14,
  tierra4StoneJupiterRotZ: -5,
  tierra4StoneSaturnScale: 1.45,
  tierra4StoneSaturnRotX: -11,
  tierra4StoneSaturnRotY: -180,
  tierra4StoneSaturnRotZ: -51,
  tierra4StoneUranusScale: 2.05,
  tierra4StoneUranusRotX: 7,
  tierra4StoneUranusRotY: -22,
  tierra4StoneUranusRotZ: -7,
  tierra4StoneNeptuneScale: 0.8,
  tierra4StoneNeptuneRotX: -63,
  tierra4StoneNeptuneRotY: 61,
  tierra4StoneNeptuneRotZ: 180,
  tierra4StonePlutoScale: 1.3,
  tierra4StonePlutoRotX: 11,
  tierra4StonePlutoRotY: -18,
  tierra4StonePlutoRotZ: -6,
  tierra4StoneMoonScale: 2.9,
  tierra4StoneMoonRotX: -60,
  tierra4StoneMoonRotY: 180,
  tierra4StoneMoonRotZ: -180,
  showGround3d: true,
  ground3dColor: "#e89e7a",
  ground3dRelief: 6.2,
  ground3dTextureScale: 0.002,
  ground3dRoughness: 0.38,
  ground3dShadows: true,
  ground3dContactShadows: 0,
  ground3dFadeSides: 0,
  ground3dFadeFar: 0.06,
  ground3dFadeNear: 0,
  ground3dFadeSoftness: 0.2,
  groundX: -0.15,
  groundStretchX: 1,
  groundRotX: 0,
  groundRotY: 0,
  groundRotZ: 0,
  ground3dExposure: 0.85,
  groundLightColor: "#ffd9b8",
  groundLightIntensity: 0,
  groundLightX: 10,
  groundLightY: 11,
  groundLightZ: -3.5,
  groundLightTargetX: 0,
  groundLightTargetZ: -2.5,
  groundY: -11.3,
  groundZ: 5.25,
  groundWidth: 23.5,
  groundDepth: 16,
  stoneAmbientIntensity: 0.8,
  stoneLight1Color: "#ffd2ad",
  stoneLight1Intensity: 4.95,
  stoneLight1X: -30,
  stoneLight1Y: -3,
  stoneLight1Z: 10,
  stoneLight2Color: "#8b91ff",
  stoneLight2Intensity: 1.15,
  stoneLight2X: -12,
  stoneLight2Y: 5,
  stoneLight2Z: -14,
  showSections: false,
  cardReturnSeconds: 28,
  cardFlipDuration: 1150,
  cardScale: 0.515,
  cardFocusScale: 1.6,
  layoutCardX: 0,
  layoutCardY: 0,
  layoutCampaignCenterX: 0,
  layoutCampaignY: 0,
  layoutCampaignScale: 0.99,
  layoutCampaignOpenX: 80,
  layoutCampaignOpenY: -177,
  manifestoX: 0,
  manifestoY: 66,
  manifestoScale: 1,
  manifestoOpacity: 0.78,
  manifestoTitleX: 0,
  manifestoTitleY: 0,
  manifestoNoteX: 0,
  manifestoNoteY: 0,
  groundCampaignX: -93,
  groundCampaignY: -69,
  groundCampaignScale: 1,
  groundCampaignOpenX: 342,
  groundCampaignOpenY: -187,
  foilBaseColor: "#9b9a8c",
  foilSaturation: 0,
  foilOpacity: 0.17,
  foilContrast: 1.07,
  foilBevelSize: 1.27,
  foilBevelStrength: 3.7,
  foilMatte: 0,
  foilLight1Intensity: 1.14,
  foilLight1X: 12.92,
  foilLight1Y: 5,
  foilLight1Z: 10,
  foilLight2Intensity: 0.8,
  foilLight2X: 8.34,
  foilLight2Y: 5,
  foilLight2Z: 10,
  foilZoneX: -0.243,
  foilZoneY: -0.028,
  foilZoneScale: 0.152,
  foilHueSpeed: 0.04,
  foilScrollHue: 0.7,
  foilMouseHue: 0.2,
  foilMouseEase: 0.19,
  foilBands: 1,
  foilGrain: 0.14,
  foilGrainFrequency: 3000,
  foilTilt: 0,
  foilCurl: 0,
  foilCurlCorner: 0,
  foilTintColor: "#ffffff",
  foilTintAmount: 0,
  foilBrushed: 0,
  foilBrushedAngle: 0,
  spaceColor: "#2d2838",
  glowRoseColor: "#2d1a60",
  glowRoseIntensity: 5,
  glowCyanColor: "#7b41e6",
  glowCyanIntensity: 0.8,
  glowTealColor: "#5a2020",
  glowTealIntensity: 20,
  showHorizonGradient: false,
  showHorizonFloor: true,
  floorColor: "#ff9c71",
  floorHeight: 0,
  floorTilt: 0,
  floorPerspective: 50,
  floorTexture: 0,
  floorTextureScale: 0.01,
  floorRelief: 0,
  floorLightAngle: 0,
  floorShade: 0,
  floorHaze: 0,
  mixColor: "#8fcb9b",
  mixAmount: 0,
  mixScale: 0.002,
  mixCoverage: 0,
  mixSoftness: 0.02,
  shootingEnabled: true,
  shootingPauseMin: 3,
  shootingPauseMax: 10,
  shootingSpeed: 27,
  shootingLength: 6,
  shootingWidth: 0.25,
  shootingBrightness: 3.1,
  shootingColor: "#fff3a9",
  shootingAngle: -30,
  shootingAngleVariation: 57,
  horizonGlowColor: "#ff9c71",
  horizonBloomHeight: 1035,
  horizonBloomIntensity: 5.95,
  horizonBloomBlur: 28,
  horizonBloomRound: 0,
  horizonBloomFlat: 1,
  horizonBloomCenterX: 0.5,
  horizonBloomWidth: 900,
  horizonLine: 0,
  lightingPresetVersion: LIGHTING_PRESET_VERSION,
};

const PLANET_LAYOUT = {
  sun:      { position: [-2.3, -0.7, -1.5], radius: 1.15 },
  mercury:  { position: [-5.4,  1.9,  0.3], radius: 0.16, orbit: 2.3 },
  venus:    { position: [-3.7,  2.8, -0.6], radius: 0.26, orbit: 2.9 },
  earth:    { position: [-0.9,  3.4, -1.4], radius: 0.24, orbit: 3.6 },
  moon:     { position: [-0.55, 3.52, -1.2], radius: 0.07 },
  mars:     { position: [-4.7, -2.3, -0.4], radius: 0.18, orbit: 4.3 },
  jupiter:  { position: [ 3.7, -0.9, -0.8], radius: 0.62, orbit: 5.4 },
  saturn:   { position: [ 5.4,  1.5, -1.8], radius: 0.55, orbit: 6.7 },
  uranus:   { position: [ 0.8,  2.9, -2.4], radius: 0.30, orbit: 7.8 },
  neptune:  { position: [ 1.7, -2.8, -1.6], radius: 0.28, orbit: 8.7 },
  pluto:    { position: [ 5.1, -2.1, -0.2], radius: 0.11, orbit: 9.5 },
};

// The terrestrial composition mirrors the sky: each planet is paired with a stone
// selected from the Blender library by color and visual character.
const STONE_LAYOUT = {
  rock11_rock11_0: { planet: "mercury", position: [-4.9, -1.9], radius: 0.38, rotation: [ 0.18, -0.42, -0.08], embed: 0.10 },
  rock13_rock13_0: { planet: "venus",   position: [-1.7, -1.3], radius: 0.50, rotation: [-0.08,  0.34,  0.12], embed: 0.16 },
  rock19_rock19_0: { planet: "earth",   position: [ 2.9, -1.6], radius: 0.44, rotation: [ 0.14, -0.28, -0.16], embed: 0.13 },
  rock06_rock06_0: { planet: "mars",    position: [-5.3, -0.2], radius: 0.58, rotation: [-0.12,  0.52,  0.10], embed: 0.20 },
  rock12_rock12_0: { planet: "jupiter", position: [ 2.2,  0.2], radius: 0.96, rotation: [ 0.06, -0.24, -0.08], embed: 0.30 },
  rock09_rock09_0: { planet: "saturn",  position: [ 5.2,  0.8], radius: 0.80, rotation: [-0.16,  0.46,  0.14], embed: 0.26 },
  rock17_rock17_0: { planet: "uranus",  position: [ 0.7,  1.4], radius: 0.70, rotation: [ 0.12, -0.38, -0.12], embed: 0.24 },
  rock10_rock10_0: { planet: "neptune", position: [-3.0,  2.3], radius: 0.76, rotation: [-0.10,  0.22,  0.16], embed: 0.28 },
  rock18_rock18_0: { planet: "pluto",   position: [ 3.4,  1.9], radius: 0.50, rotation: [ 0.20, -0.56, -0.10], embed: 0.18 },
};
// Extra stones reuse a mesh from the library with their own placement.
const STONE_EXTRAS = [
  { source: "rock10_rock10_0", planet: "moon", position: [-1.8, 0.9], radius: 0.42, rotation: [0.3, 1.2, -0.2], embed: 0.14 },
];
const STONE_SLOTS = [...Object.values(STONE_LAYOUT), ...STONE_EXTRAS];
const STONE_LAYER = 1;
const STONE_NAMES = {
  mercury: "Mercurio", venus: "Venus", earth: "Tierra", mars: "Marte", jupiter: "Júpiter",
  saturn: "Saturno", uranus: "Urano", neptune: "Neptuno", pluto: "Plutón", moon: "Luna",
};
const STONE_CHANNEL_KEYS = ["X", "Y", "Z", "Scale", "RotX", "RotY", "RotZ"];
const stoneSettingKey = (planet, key) => `stone${planet[0].toUpperCase()}${planet.slice(1)}${key}`;

// Per-channel stone positions (they glide to the new layout when the channel changes).
function stonePositionsMarkup(channel) {
  const range = (label, key, min, max, step) =>
    `<label>${label} <span><input type="range" min="${min}" max="${max}" step="${step}" data-lighting="${key}"><output></output></span></label>`;
  return STONE_SLOTS.map(({ planet }) => {
    const key = (axis) => `tierra${channel}Stone${planet[0].toUpperCase()}${planet.slice(1)}${axis}`;
    return `
          <details class="lighting-panel__subgroup"><summary>Piedra · ${STONE_NAMES[planet]}</summary>
            ${range("Posición X", key("X"), -12, 12, 0.05)}
            ${range("Altura", key("Y"), -1, 2, 0.01)}
            ${range("Posición Z", key("Z"), -10, 10, 0.05)}
            ${range("Escala", key("Scale"), 0.1, 4, 0.05)}
            ${range("Rotación X °", key("RotX"), -180, 180, 1)}
            ${range("Rotación Y °", key("RotY"), -180, 180, 1)}
            ${range("Rotación Z °", key("RotZ"), -180, 180, 1)}
          </details>`;
  }).join("");
}


const ORBIT_BASE_SPEED = 0.35;
const ORBIT_REFERENCE_RADIUS = 3;
const MOON_BASE_SPEED = 1.2;
const ORBIT_SEGMENTS = 128;
const X_AXIS = new THREE.Vector3(1, 0, 0);
const Z_AXIS = new THREE.Vector3(0, 0, 1);

const STAR_FIELD = { width: 90, top: 24, bottom: -64, near: -8, far: -40 };
const STAR_TINTS = ["#fff3a9", "#ffd9b0", "#c9d6ff", "#ffffff", "#ffb28e"].map((hex) => new THREE.Color(hex));

const STAR_VERTEX_SHADER = `
  attribute float aPhase;
  attribute float aSpeed;
  attribute float aSize;
  attribute vec3 aTint;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uTwinkleSpeed;
  uniform float uTwinkleAmount;
  uniform float uBloomSize;
  uniform vec3 uColor;
  uniform float uVariation;
  varying float vTwinkle;
  varying vec3 vColor;

  void main() {
    float wave = 0.5 + 0.5 * sin(uTime * uTwinkleSpeed * aSpeed + aPhase);
    vTwinkle = 1.0 - uTwinkleAmount * wave * wave;
    vColor = mix(uColor, aTint, uVariation);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uSize * aSize * (1.0 + uBloomSize) * uPixelRatio;
  }
`;

const STAR_FRAGMENT_SHADER = `
  uniform float uBrightness;
  uniform float uBloomSize;
  uniform float uBloomIntensity;
  varying float vTwinkle;
  varying vec3 vColor;

  void main() {
    float distanceToCenter = length(gl_PointCoord - 0.5) * 2.0;
    if (distanceToCenter > 1.0) discard;
    float core = 1.0 - smoothstep(0.0, 1.0, distanceToCenter * (1.0 + uBloomSize));
    float halo = uBloomIntensity * pow(1.0 - distanceToCenter, 3.0);
    float strength = (core + halo) * uBrightness * vTwinkle;
    gl_FragColor = vec4(vColor * strength, strength);
    #include <colorspace_fragment>
  }
`;

// Full-screen pass rendered after the celestial scene and before the stones.
// This makes the horizon occlude the stars while the stones and their shadows
// remain physically in front of the floor.
const HORIZON_VERTEX_SHADER = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const HORIZON_FRAGMENT_SHADER = `
  precision highp float;

  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform vec3 uFloorColor;
  uniform vec3 uGlowColor;
  uniform vec3 uMixColor;
  uniform float uFloorHeight;
  uniform float uFloorTilt;
  uniform float uFloorPerspective;
  uniform float uFloorTexture;
  uniform float uFloorTextureScale;
  uniform float uFloorRelief;
  uniform float uFloorLightAngle;
  uniform float uFloorShade;
  uniform float uFloorHaze;
  uniform float uMixAmount;
  uniform float uMixScale;
  uniform float uMixCoverage;
  uniform float uMixSoftness;
  uniform float uBloomHeight;
  uniform float uBloomIntensity;
  uniform float uBloomBlur;
  uniform float uBloomRound;
  uniform float uBloomFlat;
  uniform float uBloomCenterX;
  uniform float uBloomWidth;
  uniform float uHorizonLine;
  uniform float uShowGradient;

  float hash21(vec2 point) {
    return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float valueNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 local = fract(point);
    local = local * local * (3.0 - 2.0 * local);
    float a = hash21(cell);
    float b = hash21(cell + vec2(1.0, 0.0));
    float c = hash21(cell + vec2(0.0, 1.0));
    float d = hash21(cell + vec2(1.0, 1.0));
    return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
  }

  void main() {
    float viewportHeight = max(uResolution.y, 1.0);
    float floorTop = clamp(uFloorHeight / viewportHeight, 0.0, 1.0);
    float floorFeather = max(uBloomBlur * 1.5, 120.0) / viewportHeight;
    float floorMask = 1.0 - smoothstep(floorTop, floorTop + floorFeather, vUv.y);
    float floorDepth = clamp((floorTop + floorFeather - vUv.y) / max(floorTop + floorFeather, 0.001), 0.0, 1.0);
    float aboveHorizon = max(vUv.y - floorTop, 0.0);

    float tilt = clamp(uFloorTilt / 89.0, 0.0, 1.0);
    float perspective = mix(0.18, 1.0, floorDepth);
    perspective = mix(1.0, perspective, tilt);
    float perspectiveStrength = clamp(uFloorPerspective / 1500.0, 0.05, 1.0);
    vec2 floorUv = vec2((vUv.x - 0.5) / mix(1.0, perspective, perspectiveStrength) + 0.5, floorDepth);

    float textureScale = max(uFloorTextureScale * 120.0, 0.05);
    float textureNoise = valueNoise(floorUv * vec2(86.0, 42.0) * textureScale);
    float mixNoise = valueNoise(floorUv * vec2(35.0, 18.0) * max(uMixScale * 90.0, 0.05) + 17.0);
    float mixSoftness = max(uMixSoftness * 0.25, 0.005);
    float mixThreshold = 1.0 - uMixCoverage;
    float mixMask = smoothstep(mixThreshold - mixSoftness, mixThreshold + mixSoftness, mixNoise);

    float lightAngle = radians(uFloorLightAngle);
    vec2 lightDirection = vec2(cos(lightAngle), sin(lightAngle));
    float relief = sin(dot(floorUv, lightDirection) * 34.0 + textureNoise * 7.0) * uFloorRelief * 0.002;
    vec3 floorColor = uFloorColor * (1.0 + (textureNoise - 0.5) * uFloorTexture * 0.16 + relief);
    floorColor = mix(floorColor, uMixColor, mixMask * uMixAmount * 0.5);
    floorColor *= 1.0 - uFloorShade * (1.0 - floorDepth) * 0.35;
    floorColor = mix(floorColor, uGlowColor, uFloorHaze * (1.0 - floorDepth) * 0.18);

    float bloomHeight = max((uBloomHeight + uBloomBlur) / viewportHeight, 0.001);
    float verticalBloom = 1.0 - smoothstep(0.0, bloomHeight, aboveHorizon);
    float radialBloom = 1.0 - smoothstep(0.12, 0.72, abs(vUv.x - 0.5));
    // uBloomFlat = 1 keeps the band even across the whole width (no brighter center).
    float bandBloom = verticalBloom * mix(mix(0.28, 1.0, radialBloom), 1.0, uBloomFlat);
    // Round mode: a half-ellipse rising from the horizon, like a sun just below it.
    vec2 fromCenter = vec2((vUv.x - uBloomCenterX) * uResolution.x / max(uBloomWidth, 1.0), aboveHorizon * viewportHeight / max(uBloomHeight + uBloomBlur, 1.0));
    float roundBloom = 1.0 - smoothstep(0.0, 1.0, length(fromCenter));
    float bloom = mix(bandBloom, roundBloom * roundBloom, uBloomRound) * uBloomIntensity * 0.32;
    float gradient = uShowGradient * (1.0 - smoothstep(0.0, 170.0 / viewportHeight, aboveHorizon)) * 0.65;
    float lineWidth = max(1.5 / viewportHeight, 0.001);
    float horizonLine = (1.0 - smoothstep(0.0, lineWidth, abs(vUv.y - floorTop))) * uHorizonLine;

    float alpha = max(floorMask, max(bloom, max(gradient, horizonLine)));
    vec3 color = mix(uGlowColor, floorColor, floorMask);
    gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
    #include <colorspace_fragment>
  }
`;

const SHOOTING_STAR_DEPTH = -15;
const SHOOTING_STAR_ZONE = { left: -0.9, right: 0.9, top: -0.02, bottom: -0.5 };

const SHOOTING_VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SHOOTING_FRAGMENT_SHADER = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    float along = pow(vUv.x, 3.0) + smoothstep(0.92, 1.0, vUv.x) * 1.5;
    float across = pow(max(1.0 - abs(vUv.y - 0.5) * 2.0, 0.0), 1.5);
    float strength = along * across * uOpacity;
    gl_FragColor = vec4(uColor * strength, strength);
    #include <colorspace_fragment>
  }
`;

// GUI setting → shader uniform. Defaults mirror the reference certificate's live values.
const FOIL_UNIFORM_SETTINGS = {
  foilSaturation: "uFoilSaturation",
  foilOpacity: "uFoilOpacity",
  foilContrast: "uFoilContrast",
  foilBevelStrength: "uBevelStrength",
  foilMatte: "uMatteRoughness",
  foilLight1Intensity: "uLight1Intensity",
  foilLight2Intensity: "uLight2Intensity",
  foilHueSpeed: "uHueSpeed",
  foilMouseHue: "uMouseHue",
  foilBands: "uBands",
  foilGrain: "uGrain",
  foilGrainFrequency: "uGrainFrequency",
  foilCurl: "uCurl",
  foilCurlCorner: "uCurlCorner",
  foilTintAmount: "uTintAmount",
  foilBrushed: "uBrushed",
  foilBrushedAngle: "uBrushedAngle",
};

// Colors are passed as raw 0–1 values: the reference shader works without color management.
const FOIL_COLOR_SETTINGS = {
  foilBaseColor: "uBaseColor",
  foilTintColor: "uTint",
};

// The card is placed where the seal sits on the reference's virtual certificate
// (0.708 × 1 world units, scrolled up 0.382), seen from the same camera distance.
const FOIL_CAMERA_Z = 2.08703;

function hexToVector3(hex, target) {
  const value = parseInt(String(hex).replace("#", ""), 16) || 0;
  return target.set(((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255);
}

const FOIL_VERTEX_SHADER = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FOIL_FRAGMENT_SHADER = `
  precision highp float;

  uniform sampler2D uBaseMap;
  uniform sampler2D uFoilMap;
  uniform vec3 uBaseColor;
  uniform float uAspect;
  uniform vec2 uZoneCenter;
  uniform float uZoneScale;
  uniform vec3 uCameraPosition;
  uniform vec3 uLight1Position;
  uniform float uLight1Intensity;
  uniform vec3 uLight2Position;
  uniform float uLight2Intensity;
  uniform float uMatteRoughness;
  uniform float uFoilSaturation;
  uniform float uFoilOpacity;
  uniform float uFoilContrast;
  uniform vec2 uBevelSize;
  uniform float uBevelStrength;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uHueSpeed;
  uniform float uScrollOffset;
  uniform float uMouseHue;
  uniform float uBands;
  uniform float uGrain;
  uniform float uGrainFrequency;
  uniform float uCurl;
  uniform float uCurlCorner;
  uniform vec3 uTint;
  uniform float uTintAmount;
  uniform float uBrushed;
  uniform float uBrushedAngle;
  uniform float uArtMode;
  varying vec2 vUv;

  const vec3 LUMA = vec3(0.299, 0.587, 0.114);

  float mask(vec2 uv) {
    return texture2D(uFoilMap, clamp(uv, 0.0, 1.0)).r;
  }

  float lighting(vec3 normal, vec3 position) {
    vec3 light1 = normalize(uLight1Position - position);
    vec3 light2 = normalize(uLight2Position - position);
    float diffuse = max(dot(normal, light1), 0.0) * uLight1Intensity + max(dot(normal, light2), 0.0) * uLight2Intensity;
    return 0.5 + diffuse * 0.5;
  }

  vec3 hueToRgb(float hue) {
    return clamp(vec3(abs(hue * 6.0 - 3.0) - 1.0, 2.0 - abs(hue * 6.0 - 2.0), 2.0 - abs(hue * 6.0 - 4.0)), 0.0, 1.0);
  }

  vec3 hardLight(vec3 base, vec3 blend) {
    vec3 dark = 2.0 * base * blend;
    vec3 bright = 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
    return mix(dark, bright, step(vec3(0.5), blend));
  }

  float hash(vec2 cell, vec2 key) {
    return fract(sin(dot(cell, key)) * 43758.5453);
  }

  float valueNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 blend = fract(point);
    blend = blend * blend * (3.0 - 2.0 * blend);
    float a = hash(cell, vec2(127.1, 311.7));
    float b = hash(cell + vec2(1.0, 0.0), vec2(269.5, 183.3));
    float c = hash(cell + vec2(0.0, 1.0), vec2(419.2, 371.9));
    float d = hash(cell + vec2(1.0, 1.0), vec2(83.7, 97.1));
    return mix(mix(a, b, blend.x), mix(c, d, blend.x), blend.y);
  }

  void main() {
    vec4 baseSample = texture2D(uBaseMap, vUv);
    if (baseSample.a < 0.01) discard;

    // The card occupies a small zone of a virtual 0.708 × 1 certificate, like the reference seal.
    vec3 position = vec3(uZoneCenter + (vUv - 0.5) * vec2(uAspect, 1.0) * uZoneScale, 0.0);
    vec2 sheetUv = vec2(position.x / 0.708, position.y - 0.38193) + 0.5;
    vec2 fromCenter = vUv - 0.5;
    vec2 slope = -fromCenter * vec2(1.6, 0.9) * uCurl;
    vec2 fromCorner = vUv - vec2(1.0, 0.0);
    slope += fromCorner * uCurlCorner * exp(-dot(fromCorner, fromCorner) / 0.08) * 3.5;
    vec3 normal = normalize(vec3(slope, 1.0));
    vec3 viewDirection = normalize(uCameraPosition - position);

    // 1–3. Matte base lit by two point lights.
    float diffuse = lighting(normal, position);
    vec3 base = uBaseColor * (1.0 - uMatteRoughness * 0.3) * diffuse;

    // 4–5. Foil mask, fresnel and reflection.
    float foilStrength = mask(vUv);
    float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.5);
    vec3 reflection = reflect(-viewDirection, normal);

    // 6–8. Hue from view angle, time, scroll and mouse, shifted by diffraction bands.
    float hue = reflection.x * 2.2 + reflection.y * 1.6 + reflection.z * 0.5;
    hue += uTime * uHueSpeed + uScrollOffset + (uMouse.x * 0.8 + uMouse.y * 0.5) * uMouseHue;
    float band1 = sin((sheetUv.x * 7.0 + sheetUv.y * 3.0) * 6.2831853);
    float band2 = sin((sheetUv.x * 2.0 - sheetUv.y * 6.0) * 6.2831853);
    float band3 = sin((sheetUv.x * 10.0 + sheetUv.y * 7.0) * 6.2831853);
    hue = fract(hue + (band1 * 0.18 + band2 * 0.12 + band3 * 0.05) * uBands + fresnel * 0.08);
    float isWhite = smoothstep(0.7, 0.97, foilStrength);
    hue = fract(hue + mix(0.5, 0.0, isWhite));

    // 9–10. Mostly desaturated rainbow.
    vec3 rainbow = hueToRgb(hue);
    rainbow = clamp(mix(vec3(dot(rainbow, LUMA)), rainbow, uFoilSaturation), 0.0, 1.0);

    // 11. Bevel: the mask gradient becomes a lit ridge along every stroke.
    vec2 gradient = vec2(
      mask(vUv + vec2(uBevelSize.x, 0.0)) - mask(vUv - vec2(uBevelSize.x, 0.0)),
      mask(vUv + vec2(0.0, uBevelSize.y)) - mask(vUv - vec2(0.0, uBevelSize.y))
    );
    vec3 bumpNormal = normalize(normal + vec3(gradient, 0.0) * uBevelStrength);
    float bevel = (lighting(bumpNormal, position) - diffuse) * length(gradient) * uBevelStrength * 1.2;
    vec3 bevelBase = base + base * bevel;

    // 12–13. Rainbow tint applied with hard light, stronger on lit areas and at grazing angles.
    float metalDiffuse = mix(0.15, 1.0, pow(diffuse, 1.8));
    float tintStrength = (0.38 + fresnel * 0.52) * metalDiffuse * uFoilContrast;
    vec3 foil = hardLight(bevelBase, mix(vec3(0.5), rainbow, tintStrength));

    // 14. Blinn specular: sharp glint and broad sheen per light.
    vec3 half1 = normalize(normalize(uLight1Position - position) + viewDirection);
    vec3 half2 = normalize(normalize(uLight2Position - position) + viewDirection);
    float glint = pow(max(dot(normal, half1), 0.0), 256.0) * uLight1Intensity * 3.5
      + pow(max(dot(normal, half2), 0.0), 256.0) * uLight2Intensity * 3.0;
    float sheen = pow(max(dot(normal, half1), 0.0), 20.0) * uLight1Intensity * 0.28
      + pow(max(dot(normal, half2), 0.0), 20.0) * uLight2Intensity * 0.22;
    foil += mix(rainbow, vec3(1.0), 0.6) * glint + rainbow * sheen * 0.45;

    // 15. Composite through the mask.
    vec3 color = mix(mix(base, bevelBase, foilStrength), foil, foilStrength * uFoilOpacity);

    // Optional extras (off by default).
    vec2 brushDirection = vec2(cos(radians(uBrushedAngle)), sin(radians(uBrushedAngle)));
    float brushAcross = dot(vUv * vec2(uAspect, 1.0) * 400.0, vec2(-brushDirection.y, brushDirection.x));
    float streak = hash(vec2(floor(brushAcross), 7.0), vec2(127.1, 311.7));
    color *= 1.0 + (streak - 0.5) * uBrushed * 0.3;
    color *= mix(vec3(1.0), uTint, uTintAmount);

    // 16. Extra saturation in the shadows.
    float luma = dot(color, LUMA);
    color = mix(vec3(luma), color, 1.0 + (1.0 - smoothstep(0.0, 0.4, luma)) * 0.22);

    // 17. Fine film grain; near-black areas only get lifted.
    float grain = (valueNoise(sheetUv * uGrainFrequency) - 0.5) * uGrain;
    float darkness = 1.0 - smoothstep(0.0, 0.1, dot(color, LUMA));
    color += mix(grain, max(grain, 0.0), darkness);

    // Art mode: the base map is a finished color design; foil only replaces it where the mask's
    // green channel marks relief (e.g. the gray frame), everything else keeps its original colors.
    if (uArtMode > 0.5) color = mix(baseSample.rgb, color, texture2D(uFoilMap, vUv).g);

    // 18. Raw output, no tone mapping or color-space conversion (matches the reference).
    gl_FragColor = vec4(color, baseSample.a);
  }
`;

function createGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.25, "rgba(255,255,255,0.45)");
  gradient.addColorStop(0.6, "rgba(255,255,255,0.1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Soft dark blob drawn under each stone so it reads as sitting in the ground, not floating.
function createContactShadowTexture(size = 128) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(20, 8, 6, 0.85)");
  gradient.addColorStop(0.45, "rgba(20, 8, 6, 0.45)");
  gradient.addColorStop(1, "rgba(20, 8, 6, 0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function createGroundHeightTexture(size = 256) {
  const data = new Uint8Array(size * size * 4);
  const hash = (x, y) => {
    const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
    return value - Math.floor(value);
  };
  const smooth = (value) => value * value * (3 - 2 * value);
  const noise = (x, y) => {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const tx = smooth(x - x0);
    const ty = smooth(y - y0);
    const top = THREE.MathUtils.lerp(hash(x0, y0), hash(x0 + 1, y0), tx);
    const bottom = THREE.MathUtils.lerp(hash(x0, y0 + 1), hash(x0 + 1, y0 + 1), tx);
    return THREE.MathUtils.lerp(top, bottom, ty);
  };

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = x / size;
      const ny = y / size;
      const height = noise(nx * 7, ny * 7) * 0.56 + noise(nx * 19, ny * 19) * 0.29 + noise(nx * 53, ny * 53) * 0.15;
      const value = Math.round(THREE.MathUtils.clamp(0.28 + height * 0.72, 0, 1) * 255);
      const index = (y * size + x) * 4;
      data[index] = value;
      data[index + 1] = value;
      data[index + 2] = value;
      data[index + 3] = 255;
    }
  }

  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

// Edge fade of the physical ground. UV v = 1 is the far edge once the plane lies flat.
function createGroundAlphaTexture(fade = {}, size = 128) {
  const sides = Math.max(Number(fade.sides ?? 0.16), 0.001);
  const far = Math.max(Number(fade.far ?? 0.16), 0.001);
  const near = Math.max(Number(fade.near ?? 0.16), 0.001);
  const softness = Math.max(Number(fade.softness ?? 1), 0.05);
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const u = x / (size - 1);
      const v = y / (size - 1);
      const alpha = Math.min(
        THREE.MathUtils.smoothstep(Math.min(u, 1 - u), 0, sides),
        THREE.MathUtils.smoothstep(1 - v, 0, far),
        THREE.MathUtils.smoothstep(v, 0, near)
      ) ** softness;
      const value = Math.round(alpha * 255);
      const index = (y * size + x) * 4;
      data[index] = value;
      data[index + 1] = value;
      data[index + 2] = value;
      data[index + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function materialKey(mesh) {
  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  return materials.map((material) => material?.name?.toLowerCase() || "").join(" ");
}

function layoutKey(mesh) {
  const name = `${mesh.name} ${materialKey(mesh)}`.toLowerCase();
  if (name.includes("saturn ring")) return "saturn-ring";
  for (const key of Object.keys(PLANET_LAYOUT)) {
    if (name.includes(key)) return key;
  }
  if (/^material(\.\d+)?$/.test(materialKey(mesh))) return "sun";
  return null;
}

function fitMeshToRadius(mesh, targetRadius) {
  mesh.geometry.computeBoundingSphere();
  const radius = mesh.geometry.boundingSphere?.radius || 1;
  mesh.scale.setScalar(targetRadius / radius);
}

class SolarExperience {
  constructor(root) {
    this.root = root;
    this.stage = root.querySelector("[data-solar-stage]");
    this.canvas = root.querySelector(".altar-solar__canvas");
    this.grainLayers = Array.from(root.querySelectorAll("[data-grain-turbulence]")).map((node) => ({
      node,
      section: Number(node.dataset.grainSection || 1),
      lastUpdate: 0,
      seed: 1,
    }));
    this.modelUrl = root.dataset.modelUrl;
    this.stonesUrl = root.dataset.stonesUrl;
    this.animationFrame = 0;
    this.spinners = [];
    this.spinTweens = [];
    this.orbiters = [];
    this.orbitAxis = new THREE.Vector3(0, 0, 1);
    this.orbitQuaternion = new THREE.Quaternion();
    this.orbitBinormal = new THREE.Vector3();
    this.shootingStars = [];
    this.nextShootingStar = 2;
    this.pointer = new THREE.Vector2();
    this.smoothPointer = new THREE.Vector2();
    this.timer = new THREE.Timer();
    this.visible = true;
    this.setupFoilCards();
    this.setupFortuneFlip();
    this.setupFortuneShare();
    this.setupSpotifyPlayer();
    this.setupDraggables();
    this.setupCursorBadge();
    this.setupChannels();

    if (!this.stage || !this.canvas || !this.modelUrl || !WebGLRenderingContext) {
      root.classList.add("is-fallback");
      return;
    }

    this.setupRenderer();
    this.setupScene();
    this.setupHorizonLayer();
    this.setupStones();
    if (root.hasAttribute("data-lighting-controls")) this.setupLightingControls();
    this.bindEvents();
    this.loadModel();
    this.render();
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(clampDpr());
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = TONE_MAPPINGS[DEFAULT_LIGHTING.toneMapping];
    this.renderer.toneMappingExposure = DEFAULT_LIGHTING.exposure;
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 2000);
    this.camera.position.set(0, 0, 13);

    this.hemisphereLight = new THREE.HemisphereLight(
      DEFAULT_LIGHTING.hemisphereSky,
      DEFAULT_LIGHTING.hemisphereGround,
      DEFAULT_LIGHTING.hemisphereIntensity
    );
    this.keyLight = new THREE.DirectionalLight(DEFAULT_LIGHTING.keyColor, DEFAULT_LIGHTING.keyIntensity);
    this.keyLight.position.set(DEFAULT_LIGHTING.keyX, DEFAULT_LIGHTING.keyY, DEFAULT_LIGHTING.keyZ);
    this.rimLight = new THREE.DirectionalLight(DEFAULT_LIGHTING.rimColor, DEFAULT_LIGHTING.rimIntensity);
    this.rimLight.position.set(DEFAULT_LIGHTING.rimX, DEFAULT_LIGHTING.rimY, DEFAULT_LIGHTING.rimZ);
    this.scene.add(this.hemisphereLight, this.keyLight, this.rimLight);
    this.createStars(DEFAULT_LIGHTING);
  }

  setupHorizonLayer() {
    this.horizonScene = new THREE.Scene();
    this.horizonCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.horizonMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uResolution: { value: new THREE.Vector2(1, 1) },
        uFloorColor: { value: new THREE.Color(DEFAULT_LIGHTING.floorColor) },
        uGlowColor: { value: new THREE.Color(DEFAULT_LIGHTING.horizonGlowColor) },
        uMixColor: { value: new THREE.Color(DEFAULT_LIGHTING.mixColor) },
        uFloorHeight: { value: DEFAULT_LIGHTING.floorHeight },
        uFloorTilt: { value: DEFAULT_LIGHTING.floorTilt },
        uFloorPerspective: { value: DEFAULT_LIGHTING.floorPerspective },
        uFloorTexture: { value: DEFAULT_LIGHTING.floorTexture },
        uFloorTextureScale: { value: DEFAULT_LIGHTING.floorTextureScale },
        uFloorRelief: { value: DEFAULT_LIGHTING.floorRelief },
        uFloorLightAngle: { value: DEFAULT_LIGHTING.floorLightAngle },
        uFloorShade: { value: DEFAULT_LIGHTING.floorShade },
        uFloorHaze: { value: DEFAULT_LIGHTING.floorHaze },
        uMixAmount: { value: DEFAULT_LIGHTING.mixAmount },
        uMixScale: { value: DEFAULT_LIGHTING.mixScale },
        uMixCoverage: { value: DEFAULT_LIGHTING.mixCoverage },
        uMixSoftness: { value: DEFAULT_LIGHTING.mixSoftness },
        uBloomHeight: { value: DEFAULT_LIGHTING.horizonBloomHeight },
        uBloomIntensity: { value: DEFAULT_LIGHTING.horizonBloomIntensity },
        uBloomBlur: { value: DEFAULT_LIGHTING.horizonBloomBlur },
        uBloomRound: { value: DEFAULT_LIGHTING.horizonBloomRound },
        uBloomFlat: { value: DEFAULT_LIGHTING.horizonBloomFlat },
        uBloomCenterX: { value: DEFAULT_LIGHTING.horizonBloomCenterX },
        uBloomWidth: { value: DEFAULT_LIGHTING.horizonBloomWidth },
        uHorizonLine: { value: DEFAULT_LIGHTING.horizonLine },
        uShowGradient: { value: DEFAULT_LIGHTING.showHorizonGradient ? 1 : 0 },
      },
      vertexShader: HORIZON_VERTEX_SHADER,
      fragmentShader: HORIZON_FRAGMENT_SHADER,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
    this.horizonMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.horizonMaterial);
    this.horizonMesh.frustumCulled = false;
    this.horizonScene.add(this.horizonMesh);
    this.root.classList.add("has-webgl-horizon");
  }

  setupStones() {
    if (!this.stonesUrl) return;

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.stonesGroup = new THREE.Group();
    this.stonesGroup.position.set(DEFAULT_LIGHTING.stonesX, DEFAULT_LIGHTING.stonesY, DEFAULT_LIGHTING.stonesZ);
    this.stonesGroup.layers.set(STONE_LAYER);
    this.scene.add(this.stonesGroup);

    this.groundHeightTexture = createGroundHeightTexture();
    this.groundHeightTexture.repeat.set(8, 8);
    this.groundAlphaTexture = createGroundAlphaTexture();
    this.groundMaterial = new THREE.MeshStandardMaterial({
      color: DEFAULT_LIGHTING.floorColor,
      roughness: 0.94,
      metalness: 0,
      bumpMap: this.groundHeightTexture,
      bumpScale: 0.22,
      alphaMap: this.groundAlphaTexture,
      alphaTest: 0.01,
      transparent: true,
    });
    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.groundMaterial);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.set(0, DEFAULT_LIGHTING.groundY, DEFAULT_LIGHTING.groundZ);
    this.ground.scale.set(DEFAULT_LIGHTING.groundWidth, DEFAULT_LIGHTING.groundDepth, 1);
    this.ground.receiveShadow = true;
    this.ground.layers.set(STONE_LAYER);
    this.scene.add(this.ground);

    this.stoneAmbient = new THREE.HemisphereLight("#f4d9c5", "#4a2530", DEFAULT_LIGHTING.stoneAmbientIntensity);
    this.stoneLight1 = new THREE.DirectionalLight(DEFAULT_LIGHTING.stoneLight1Color, DEFAULT_LIGHTING.stoneLight1Intensity);
    this.stoneLight1.position.set(DEFAULT_LIGHTING.stoneLight1X, DEFAULT_LIGHTING.stoneLight1Y, DEFAULT_LIGHTING.stoneLight1Z);
    this.stoneLight1.target.position.set(0, DEFAULT_LIGHTING.stonesY, -3);
    this.stoneLight1.castShadow = true;
    this.stoneLight1.shadow.mapSize.set(1024, 1024);
    this.stoneLight1.shadow.camera.left = -12;
    this.stoneLight1.shadow.camera.right = 12;
    this.stoneLight1.shadow.camera.top = 12;
    this.stoneLight1.shadow.camera.bottom = -12;
    this.stoneLight1.shadow.camera.near = 0.1;
    this.stoneLight1.shadow.camera.far = 80;
    this.stoneLight1.shadow.bias = -0.0008;
    this.stoneLight1.shadow.normalBias = 0.035;
    this.stoneLight2 = new THREE.DirectionalLight(DEFAULT_LIGHTING.stoneLight2Color, DEFAULT_LIGHTING.stoneLight2Intensity);
    this.stoneLight2.position.set(DEFAULT_LIGHTING.stoneLight2X, DEFAULT_LIGHTING.stoneLight2Y, DEFAULT_LIGHTING.stoneLight2Z);
    this.stoneLight2.target.position.set(0, DEFAULT_LIGHTING.stonesY, -3);
    // Extra light for the ground (it also touches the stones, which share the scene layer).
    this.groundLight = new THREE.DirectionalLight(DEFAULT_LIGHTING.groundLightColor, DEFAULT_LIGHTING.groundLightIntensity);
    [this.stoneAmbient, this.stoneLight1, this.stoneLight1.target, this.stoneLight2, this.stoneLight2.target, this.groundLight, this.groundLight.target].forEach((object) => object.layers.set(STONE_LAYER));
    this.scene.add(this.stoneAmbient, this.stoneLight1, this.stoneLight1.target, this.stoneLight2, this.stoneLight2.target, this.groundLight, this.groundLight.target);

    new GLTFLoader().load(
      this.stonesUrl,
      ({ scene }) => {
        const contactTexture = createContactShadowTexture();
        const contacts = [];
        scene.layers.set(STONE_LAYER);
        const setupStone = (node, slot) => {
          const radius = node.geometry.boundingSphere?.radius || 1;
          const scale = slot.radius / radius;
          const height = node.geometry.boundingBox.max.y - node.geometry.boundingBox.min.y;
          node.scale.setScalar(scale);
          node.userData.groundY = height * scale * 0.5 - slot.embed;
          node.userData.baseScale = scale;
          node.userData.halfHeight = height * scale * 0.5;
          node.userData.slotEmbed = slot.embed;
          node.userData.slotRadius = slot.radius;
          node.position.set(
            slot.position[0],
            node.userData.groundY - Number(this.effectSettings?.stonesEmbed ?? DEFAULT_LIGHTING.stonesEmbed),
            slot.position[1]
          );
          node.rotation.set(...slot.rotation);
          node.name = `stone-${slot.planet}`;
          node.userData.planet = slot.planet;
          node.castShadow = true;
          node.receiveShadow = true;
          node.layers.set(STONE_LAYER);

          const contact = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshBasicMaterial({ map: contactTexture, transparent: true, depthWrite: false, opacity: DEFAULT_LIGHTING.ground3dContactShadows })
          );
          contact.rotation.x = -Math.PI / 2;
          contact.rotation.z = slot.rotation[1];
          contact.scale.set(slot.radius * 2.6, slot.radius * 2.1, 1);
          contact.position.set(slot.position[0], -0.004, slot.position[1]);
          contact.renderOrder = 1;
          contact.layers.set(STONE_LAYER);
          contact.userData.isContactShadow = true;
          node.userData.contact = contact;
          contacts.push(contact);
        };

        const meshesByName = new Map();
        scene.traverse((node) => {
          node.layers.set(STONE_LAYER);
          if (!node.isMesh) return;
          if (!STONE_LAYOUT[node.name]) {
            node.visible = false;
            return;
          }
          node.geometry.computeBoundingBox();
          const center = node.geometry.boundingBox.getCenter(new THREE.Vector3());
          node.geometry.translate(-center.x, -center.y, -center.z);
          node.geometry.computeBoundingBox();
          node.geometry.computeBoundingSphere();
          const materials = Array.isArray(node.material) ? node.material : [node.material];
          materials.forEach((material) => {
            if (!material) return;
            material.roughness = Math.max(material.roughness ?? 0.72, 0.72);
            material.needsUpdate = true;
          });
          meshesByName.set(node.name, node);
        });

        // Clone the extras before the originals get renamed and placed.
        const extras = STONE_EXTRAS.map((slot) => {
          const source = meshesByName.get(slot.source);
          if (!source) return null;
          const clone = source.clone();
          clone.parent = null;
          return [clone, slot, source.parent];
        }).filter(Boolean);
        meshesByName.forEach((node, name) => setupStone(node, STONE_LAYOUT[name]));
        extras.forEach(([clone, slot, parent]) => {
          setupStone(clone, slot);
          parent.add(clone);
        });
        this.stonesGroup.add(scene, ...contacts);
        this.stonesReady = true;
        this.applyLightingSettings(this.effectSettings ?? { ...DEFAULT_LIGHTING });
        this.root.classList.add("is-stones-ready");
      },
      undefined,
      () => this.root.classList.add("is-stones-fallback")
    );
  }

  createStars(settings) {
    const count = Math.max(0, Math.round(Number(settings.starCount)));
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);
    const sizes = new Float32Array(count);
    const tints = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * STAR_FIELD.width;
      positions[index * 3 + 1] = THREE.MathUtils.lerp(STAR_FIELD.bottom, STAR_FIELD.top, Math.random());
      positions[index * 3 + 2] = THREE.MathUtils.lerp(STAR_FIELD.near, STAR_FIELD.far, Math.random());
      phases[index] = Math.random() * Math.PI * 2;
      speeds[index] = 0.4 + Math.random() * 1.6;
      sizes[index] = 0.35 + Math.random() ** 3 * 1.65;
      STAR_TINTS[Math.floor(Math.random() * STAR_TINTS.length)].toArray(tints, index * 3);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("aTint", new THREE.BufferAttribute(tints, 3));

    if (this.stars) {
      this.stars.geometry.dispose();
      this.stars.geometry = geometry;
    } else {
      this.stars = new THREE.Points(geometry, new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uSize: { value: 1 },
          uPixelRatio: { value: 1 },
          uBrightness: { value: 1 },
          uTwinkleSpeed: { value: 1 },
          uTwinkleAmount: { value: 0 },
          uBloomSize: { value: 0 },
          uBloomIntensity: { value: 0 },
          uColor: { value: new THREE.Color() },
          uVariation: { value: 0 },
        },
        vertexShader: STAR_VERTEX_SHADER,
        fragmentShader: STAR_FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      this.stars.renderOrder = -1;
      this.scene.add(this.stars);
    }
    this.starCount = count;
  }

  updateStars(time, delta) {
    if (!this.stars) return;
    const settings = this.effectSettings ?? DEFAULT_LIGHTING;
    if (Math.round(Number(settings.starCount)) !== this.starCount) this.createStars(settings);

    const uniforms = this.stars.material.uniforms;
    uniforms.uTime.value = time;
    uniforms.uSize.value = Number(settings.starSize);
    uniforms.uPixelRatio.value = this.renderer.getPixelRatio();
    uniforms.uBrightness.value = Number(settings.starBrightness);
    uniforms.uTwinkleSpeed.value = Number(settings.twinkleSpeed);
    uniforms.uTwinkleAmount.value = Number(settings.twinkleAmount);
    uniforms.uBloomSize.value = Number(settings.bloomSize);
    uniforms.uBloomIntensity.value = Number(settings.bloomIntensity);
    uniforms.uColor.value.set(settings.starColor);
    uniforms.uVariation.value = Number(settings.starColorVariation);
    this.stars.rotation.z += delta * Number(settings.starDrift) * 0.01;
  }

  readLightingSettings() {
    this.persistLighting = readStorage(LIGHTING_PERSIST_KEY) === "1";
    if (!this.persistLighting) {
      writeStorage(LIGHTING_STORAGE_KEY, null);
      return { ...DEFAULT_LIGHTING };
    }
    try {
      const stored = JSON.parse(readStorage(LIGHTING_STORAGE_KEY)) || {};
      if (stored.lightingPresetVersion !== LIGHTING_PRESET_VERSION) return { ...DEFAULT_LIGHTING };
      return { ...DEFAULT_LIGHTING, ...stored };
    } catch {
      return { ...DEFAULT_LIGHTING };
    }
  }

  saveLightingSettings(settings) {
    if (this.persistLighting) writeStorage(LIGHTING_STORAGE_KEY, JSON.stringify(settings));
  }

  applyLightingSettings(settings) {
    // Channel-specific ground/horizon colors win over the GUI values while that channel is on.
    this.lightingBase = settings;
    const groundPalette = this.groundPaletteFor(this.channelIndex ?? 0, settings);
    settings = { ...settings, ...groundPalette };
    if (!this.groundPaletteFrame) this.currentGroundPalette = groundPalette;
    this.hemisphereLight.color.set(settings.hemisphereSky);
    this.hemisphereLight.groundColor.set(settings.hemisphereGround);
    this.hemisphereLight.intensity = Number(settings.hemisphereIntensity);
    this.keyLight.color.set(settings.keyColor);
    this.keyLight.intensity = Number(settings.keyIntensity);
    this.keyLight.position.set(Number(settings.keyX), Number(settings.keyY), Number(settings.keyZ));
    this.rimLight.color.set(settings.rimColor);
    this.rimLight.intensity = Number(settings.rimIntensity);
    this.rimLight.position.set(Number(settings.rimX), Number(settings.rimY), Number(settings.rimZ));
    this.renderer.toneMappingExposure = Number(settings.exposure);
    this.renderer.toneMapping = TONE_MAPPINGS[settings.toneMapping] ?? THREE.ACESFilmicToneMapping;
    this.root.style.setProperty("--effect-blur", `calc(${Number(settings.effectBlur)} * var(--u, 1px))`);
    this.root.style.setProperty("--grain-opacity", Number(settings.grainOpacity));
    this.root.style.setProperty("--section-grain-opacity", Number(settings.sectionGrainOpacity));
    this.grainLayers.forEach((layer) => {
      layer.node.setAttribute("baseFrequency", Number(settings.grainFrequency).toFixed(2));
    });
    this.root.style.setProperty("--space-color", settings.spaceColor);
    this.root.style.setProperty("--card-flip-duration", `${Number(settings.cardFlipDuration)}ms`);
    this.root.style.setProperty("--card-scale", Number(settings.cardScale));
    this.root.style.setProperty("--campaign-scale", Number(settings.layoutCampaignScale));
    ["X", "Y", "TitleX", "TitleY", "NoteX", "NoteY"].forEach((key) => {
      const cssName = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      this.root.style.setProperty(`--manifesto${cssName.startsWith("-") ? cssName : `-${cssName}`}`, `calc(${Number(settings[`manifesto${key}`])} * var(--u, 1px))`);
    });
    this.root.style.setProperty("--manifesto-scale", Number(settings.manifestoScale));
    this.root.style.setProperty("--manifesto-opacity", Number(settings.manifestoOpacity));
    this.root.style.setProperty("--campaign-open-x", `calc(${Number(settings.layoutCampaignOpenX)} * var(--u, 1px))`);
    this.root.style.setProperty("--campaign-open-y", `calc(${Number(settings.layoutCampaignOpenY)} * var(--u, 1px))`);
    this.root.style.setProperty("--ground-campaign-x", `calc(${Number(settings.groundCampaignX)} * var(--u, 1px))`);
    this.root.style.setProperty("--ground-campaign-y", `calc(${Number(settings.groundCampaignY)} * var(--u, 1px))`);
    this.root.style.setProperty("--ground-campaign-scale", Number(settings.groundCampaignScale));
    this.root.style.setProperty("--ground-campaign-open-x", `calc(${Number(settings.groundCampaignOpenX)} * var(--u, 1px))`);
    this.root.style.setProperty("--ground-campaign-open-y", `calc(${Number(settings.groundCampaignOpenY)} * var(--u, 1px))`);
    [[".altar-solar__fortune-cards", "layoutCardX", "layoutCardY"], [".altar-solar__campaign", "layoutCampaignCenterX", "layoutCampaignY"]].forEach(([selector, xKey, yKey]) => {
      const element = this.root.querySelector(selector);
      element?.style.setProperty("--pos-x", `calc(${Number(settings[xKey])} * var(--u, 1px))`);
      element?.style.setProperty("--pos-y", `calc(${Number(settings[yKey])} * var(--u, 1px))`);
    });
    ["rose", "cyan", "teal"].forEach((name) => {
      const key = name[0].toUpperCase() + name.slice(1);
      this.root.querySelectorAll(`.altar-solar__glow--${name}`).forEach((glow) => {
        glow.style.setProperty("--c", settings[`glow${key}Color`]);
        glow.style.setProperty("--glow-intensity", Number(settings[`glow${key}Intensity`]));
      });
    });
    this.root.querySelectorAll(".altar-solar__horizon").forEach((horizon) => {
      horizon.hidden = !settings.showHorizonFloor;
      horizon.style.setProperty("--floor-color", settings.floorColor);
      horizon.style.setProperty("--glow-color", settings.horizonGlowColor);
    });
    this.root.style.setProperty("--floor-height", `calc(${Number(settings.floorHeight)} * var(--u, 1px))`);
    this.root.style.setProperty("--bloom-height", `calc(${Number(settings.horizonBloomHeight)} * var(--u, 1px))`);
    this.root.style.setProperty("--bloom-intensity", Number(settings.horizonBloomIntensity));
    this.root.style.setProperty("--bloom-blur", `calc(${Number(settings.horizonBloomBlur)} * var(--u, 1px))`);
    this.root.style.setProperty("--horizon-line", Number(settings.horizonLine));
    this.root.style.setProperty("--floor-tilt", `${Number(settings.floorTilt)}deg`);
    this.root.style.setProperty("--floor-perspective", `calc(${Number(settings.floorPerspective)} * var(--u, 1px))`);
    this.root.style.setProperty("--floor-texture", Number(settings.floorTexture));
    this.root.style.setProperty("--floor-shade", Number(settings.floorShade));
    this.root.style.setProperty("--floor-haze", Number(settings.floorHaze));
    this.root.querySelectorAll("[data-floor-noise]").forEach((node) => node.setAttribute("baseFrequency", Number(settings.floorTextureScale)));
    this.root.querySelectorAll("[data-floor-relief]").forEach((node) => node.setAttribute("surfaceScale", Number(settings.floorRelief)));
    this.root.style.setProperty("--floor-mix", Number(settings.mixAmount));
    const mixSlope = 1 / Math.max(Number(settings.mixSoftness), 0.02);
    const mixThreshold = 0.8 - 0.6 * Number(settings.mixCoverage);
    const mixAlpha = `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${mixSlope.toFixed(3)} 0 0 0 ${(0.5 - mixSlope * mixThreshold).toFixed(3)}`;
    this.root.querySelectorAll("[data-mix-noise]").forEach((node) => node.setAttribute("baseFrequency", Number(settings.mixScale)));
    this.root.querySelectorAll("[data-mix-alpha]").forEach((node) => node.setAttribute("values", mixAlpha));
    this.root.querySelectorAll("[data-mix-flood]").forEach((node) => node.setAttribute("flood-color", settings.mixColor));
    this.root.querySelectorAll("[data-floor-light]").forEach((node) => node.setAttribute("azimuth", Number(settings.floorLightAngle)));
    this.root.querySelectorAll(".altar-solar__gradient").forEach((gradient) => {
      gradient.hidden = !settings.showHorizonGradient;
    });
    if (this.horizonMaterial) {
      const uniforms = this.horizonMaterial.uniforms;
      uniforms.uFloorColor.value.set(settings.floorColor);
      uniforms.uGlowColor.value.set(settings.horizonGlowColor);
      uniforms.uMixColor.value.set(settings.mixColor);
      uniforms.uFloorHeight.value = Number(settings.floorHeight);
      uniforms.uFloorTilt.value = Number(settings.floorTilt);
      uniforms.uFloorPerspective.value = Number(settings.floorPerspective);
      uniforms.uFloorTexture.value = Number(settings.floorTexture);
      uniforms.uFloorTextureScale.value = Number(settings.floorTextureScale);
      uniforms.uFloorRelief.value = Number(settings.floorRelief);
      uniforms.uFloorLightAngle.value = Number(settings.floorLightAngle);
      uniforms.uFloorShade.value = Number(settings.floorShade);
      uniforms.uFloorHaze.value = Number(settings.floorHaze);
      uniforms.uMixAmount.value = Number(settings.mixAmount);
      uniforms.uMixScale.value = Number(settings.mixScale);
      uniforms.uMixCoverage.value = Number(settings.mixCoverage);
      uniforms.uMixSoftness.value = Number(settings.mixSoftness);
      uniforms.uBloomHeight.value = Number(settings.horizonBloomHeight);
      uniforms.uBloomIntensity.value = Number(settings.horizonBloomIntensity);
      uniforms.uBloomBlur.value = Number(settings.horizonBloomBlur);
      uniforms.uBloomRound.value = Number(settings.horizonBloomRound);
      uniforms.uBloomFlat.value = Number(settings.horizonBloomFlat);
      uniforms.uBloomCenterX.value = Number(settings.horizonBloomCenterX);
      uniforms.uBloomWidth.value = Number(settings.horizonBloomWidth);
      uniforms.uHorizonLine.value = Number(settings.horizonLine);
      uniforms.uShowGradient.value = settings.showHorizonGradient ? 1 : 0;
      this.horizonMesh.visible = Boolean(settings.showHorizonFloor);
    }
    this.updateStones(settings);
    if (this.groundMaterial) {
      this.groundMaterial.color.set(settings.ground3dColor);
      this.groundMaterial.bumpScale = Number(settings.ground3dRelief) * 0.09;
      this.groundMaterial.roughness = Number(settings.ground3dRoughness);
      const textureRepeat = THREE.MathUtils.clamp(0.08 / Math.max(Number(settings.ground3dTextureScale), 0.002), 3, 32);
      this.groundHeightTexture.repeat.set(textureRepeat, textureRepeat);
      this.groundHeightTexture.needsUpdate = true;
      this.groundMaterial.needsUpdate = true;
    }
    const fadeKey = ["ground3dFadeSides", "ground3dFadeFar", "ground3dFadeNear", "ground3dFadeSoftness"].map((key) => settings[key]).join("|");
    if (this.groundMaterial && fadeKey !== this.groundFadeKey) {
      this.groundFadeKey = fadeKey;
      this.groundAlphaTexture?.dispose();
      this.groundAlphaTexture = createGroundAlphaTexture({
        sides: settings.ground3dFadeSides,
        far: settings.ground3dFadeFar,
        near: settings.ground3dFadeNear,
        softness: settings.ground3dFadeSoftness,
      });
      this.groundMaterial.alphaMap = this.groundAlphaTexture;
      this.groundMaterial.needsUpdate = true;
    }
    if (this.groundLight) {
      this.groundLight.color.set(settings.groundLightColor);
      this.groundLight.intensity = Number(settings.groundLightIntensity);
      this.groundLight.position.set(
        Number(settings.groundX) + Number(settings.groundLightX),
        Number(settings.groundY) + Number(settings.groundLightY),
        Number(settings.groundZ) + Number(settings.groundLightZ)
      );
      this.groundLight.target.position.set(
        Number(settings.groundX) + Number(settings.groundLightTargetX),
        Number(settings.groundY),
        Number(settings.groundZ) + Number(settings.groundLightTargetZ)
      );
    }
    if (this.ground) {
      const degrees = THREE.MathUtils.degToRad;
      this.ground.rotation.set(
        -Math.PI / 2 + degrees(Number(settings.groundRotX)),
        degrees(Number(settings.groundRotY)),
        degrees(Number(settings.groundRotZ)),
        "YXZ"
      );
      this.ground.position.set(Number(settings.groundX), Number(settings.groundY), Number(settings.groundZ));
      this.ground.scale.set(Number(settings.groundWidth) * Number(settings.groundStretchX), Number(settings.groundDepth), 1);
      this.ground.visible = settings.showGround3d !== false;
      this.ground.receiveShadow = settings.ground3dShadows !== false;
    }
    if (this.stoneAmbient) this.stoneAmbient.intensity = Number(settings.stoneAmbientIntensity);
    if (this.stoneLight1) {
      this.stoneLight1.color.set(settings.stoneLight1Color);
      this.stoneLight1.intensity = Number(settings.stoneLight1Intensity);
      this.stoneLight1.position.set(Number(settings.stoneLight1X), Number(settings.stoneLight1Y), Number(settings.stoneLight1Z));
      this.stoneLight1.target.position.set(0, Number(settings.groundY), Number(settings.groundZ) - 3);
    }
    if (this.stoneLight2) {
      this.stoneLight2.color.set(settings.stoneLight2Color);
      this.stoneLight2.intensity = Number(settings.stoneLight2Intensity);
      this.stoneLight2.position.set(Number(settings.stoneLight2X), Number(settings.stoneLight2Y), Number(settings.stoneLight2Z));
      this.stoneLight2.target.position.set(0, Number(settings.groundY), Number(settings.groundZ) - 3);
    }
    if (this.sectionGuide) {
      this.sectionGuide.hidden = !settings.showSections;
      this.updateTramoHud();
    }
    this.effectSettings = settings;
  }

  setupLightingControls() {
    const settings = this.readLightingSettings();
    const panel = document.createElement("aside");
    panel.className = "lighting-panel is-collapsed";
    panel.setAttribute("aria-label", "Controlador de iluminación");
    panel.innerHTML = `
      <div class="lighting-panel__body">
        <label class="is-boolean">Recordar cambios <input type="checkbox" data-lighting-persist></label>
        <label class="is-boolean">Ver tramos <input type="checkbox" data-lighting="showSections"></label>
        <details><summary>Manifiesto</summary>
          <label>Bloque X px <span><input type="range" min="-800" max="800" step="1" data-lighting="manifestoX"><output></output></span></label>
          <label>Bloque Y px <span><input type="range" min="-800" max="800" step="1" data-lighting="manifestoY"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.3" max="2" step="0.01" data-lighting="manifestoScale"><output></output></span></label>
          <label>Opacidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="manifestoOpacity"><output></output></span></label>
          <label>Titular X px <span><input type="range" min="-800" max="800" step="1" data-lighting="manifestoTitleX"><output></output></span></label>
          <label>Titular Y px <span><input type="range" min="-400" max="400" step="1" data-lighting="manifestoTitleY"><output></output></span></label>
          <label>Nota X px <span><input type="range" min="-1200" max="400" step="1" data-lighting="manifestoNoteX"><output></output></span></label>
          <label>Nota Y px <span><input type="range" min="-400" max="400" step="1" data-lighting="manifestoNoteY"><output></output></span></label>
        </details>
        <details><summary>Layout</summary>
          <label>Carta escala <span><input type="range" min="0.3" max="3" step="0.005" data-lighting="cardScale"><output></output></span></label>
          <label>Carta abierta escala <span><input type="range" min="0.5" max="3" step="0.05" data-lighting="cardFocusScale"><output></output></span></label>
          <label>Carta X px <span><input type="range" min="-1400" max="1400" step="1" data-lighting="layoutCardX"><output></output></span></label>
          <label>Carta Y px <span><input type="range" min="-900" max="300" step="1" data-lighting="layoutCardY"><output></output></span></label>
          <label>Elemental X centro <span><input type="range" min="-800" max="800" step="1" data-lighting="layoutCampaignCenterX"><output></output></span></label>
          <label>Elemental Y px <span><input type="range" min="-600" max="600" step="1" data-lighting="layoutCampaignY"><output></output></span></label>
          <label>Elemental X carta abierta <span><input type="range" min="-1400" max="600" step="1" data-lighting="layoutCampaignOpenX"><output></output></span></label>
          <label>Elemental Y carta abierta <span><input type="range" min="-600" max="600" step="1" data-lighting="layoutCampaignOpenY"><output></output></span></label>
          <label>Elemental escala <span><input type="range" min="0.5" max="3" step="0.01" data-lighting="layoutCampaignScale"><output></output></span></label>
          <label>Elemental tierra X px <span><input type="range" min="-1400" max="400" step="1" data-lighting="groundCampaignX"><output></output></span></label>
          <label>Elemental tierra Y px <span><input type="range" min="-500" max="500" step="1" data-lighting="groundCampaignY"><output></output></span></label>
          <label>Elemental tierra escala <span><input type="range" min="0.3" max="3" step="0.05" data-lighting="groundCampaignScale"><output></output></span></label>
          <label>Elemental tierra X carta abierta <span><input type="range" min="-1400" max="600" step="1" data-lighting="groundCampaignOpenX"><output></output></span></label>
          <label>Elemental tierra Y carta abierta <span><input type="range" min="-600" max="600" step="1" data-lighting="groundCampaignOpenY"><output></output></span></label>
        </details>
        <details><summary>Carta</summary>
          <label>Vuelve en s <span><input type="range" min="0" max="120" step="1" data-lighting="cardReturnSeconds"><output></output></span></label>
          <label>Giro ms <span><input type="range" min="200" max="3000" step="50" data-lighting="cardFlipDuration"><output></output></span></label>
        </details>
        <details><summary>Carta foil</summary>
          <label class="is-color">Gris base <input type="color" data-lighting="foilBaseColor"></label>
          <label>Mate <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilMatte"><output></output></span></label>
          <label>Foil saturación <span><input type="range" min="0" max="2" step="0.01" data-lighting="foilSaturation"><output></output></span></label>
          <label>Foil opacidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilOpacity"><output></output></span></label>
          <label>Foil contraste <span><input type="range" min="0" max="3" step="0.01" data-lighting="foilContrast"><output></output></span></label>
          <label>Bisel tamaño px <span><input type="range" min="0.2" max="6" step="0.01" data-lighting="foilBevelSize"><output></output></span></label>
          <label>Bisel fuerza <span><input type="range" min="0" max="8" step="0.05" data-lighting="foilBevelStrength"><output></output></span></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="3" step="0.01" data-lighting="foilLight1Intensity"><output></output></span></label>
          <label>Luz 1 X <span><input type="range" min="-20" max="20" step="0.01" data-lighting="foilLight1X"><output></output></span></label>
          <label>Luz 1 Y <span><input type="range" min="-20" max="20" step="0.01" data-lighting="foilLight1Y"><output></output></span></label>
          <label>Luz 1 Z <span><input type="range" min="0" max="30" step="0.01" data-lighting="foilLight1Z"><output></output></span></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="3" step="0.01" data-lighting="foilLight2Intensity"><output></output></span></label>
          <label>Luz 2 X <span><input type="range" min="-20" max="20" step="0.01" data-lighting="foilLight2X"><output></output></span></label>
          <label>Luz 2 Y <span><input type="range" min="-20" max="20" step="0.01" data-lighting="foilLight2Y"><output></output></span></label>
          <label>Luz 2 Z <span><input type="range" min="0" max="30" step="0.01" data-lighting="foilLight2Z"><output></output></span></label>
          <label>Tono velocidad <span><input type="range" min="0" max="0.5" step="0.005" data-lighting="foilHueSpeed"><output></output></span></label>
          <label>Tono scroll <span><input type="range" min="0" max="3" step="0.05" data-lighting="foilScrollHue"><output></output></span></label>
          <label>Tono mouse <span><input type="range" min="0" max="3" step="0.05" data-lighting="foilMouseHue"><output></output></span></label>
          <label>Suavizado mouse <span><input type="range" min="0.01" max="1" step="0.01" data-lighting="foilMouseEase"><output></output></span></label>
          <label>Difracción <span><input type="range" min="0" max="3" step="0.05" data-lighting="foilBands"><output></output></span></label>
          <label>Grano <span><input type="range" min="0" max="0.5" step="0.01" data-lighting="foilGrain"><output></output></span></label>
          <label>Grano frecuencia <span><input type="range" min="200" max="6000" step="50" data-lighting="foilGrainFrequency"><output></output></span></label>
        </details>
        <details><summary>Carta mapeo</summary>
          <label>Zona X <span><input type="range" min="-0.354" max="0.354" step="0.001" data-lighting="foilZoneX"><output></output></span></label>
          <label>Zona Y <span><input type="range" min="-0.5" max="0.9" step="0.001" data-lighting="foilZoneY"><output></output></span></label>
          <label>Tamaño zona <span><input type="range" min="0.05" max="1.5" step="0.001" data-lighting="foilZoneScale"><output></output></span></label>
        </details>
        <details><summary>Carta extras</summary>
          <label>Inclinación 3D ° <span><input type="range" min="0" max="25" step="0.5" data-lighting="foilTilt"><output></output></span></label>
          <label>Curvatura <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilCurl"><output></output></span></label>
          <label>Esquina levantada <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilCurlCorner"><output></output></span></label>
          <label class="is-color">Tinte <input type="color" data-lighting="foilTintColor"></label>
          <label>Tinte cantidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilTintAmount"><output></output></span></label>
          <label>Cepillado <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilBrushed"><output></output></span></label>
          <label>Cepillado ° <span><input type="range" min="0" max="180" step="1" data-lighting="foilBrushedAngle"><output></output></span></label>
        </details>
        <details><summary>Fondo</summary>
          <label class="is-color">Color espacio <input type="color" data-lighting="spaceColor"></label>
          <label class="is-color">Luz rosa <input type="color" data-lighting="glowRoseColor"></label>
          <label>Rosa intensidad <span><input type="range" min="0" max="5" step="0.05" data-lighting="glowRoseIntensity"><output></output></span></label>
          <label class="is-color">Luz celeste <input type="color" data-lighting="glowCyanColor"></label>
          <label>Celeste intensidad <span><input type="range" min="0" max="5" step="0.05" data-lighting="glowCyanIntensity"><output></output></span></label>
          <label class="is-color">Luz verde agua <input type="color" data-lighting="glowTealColor"></label>
          <label>Verde agua intensidad <span><input type="range" min="0" max="20" step="0.1" data-lighting="glowTealIntensity"><output></output></span></label>
        </details>
        <details><summary>Horizonte</summary>
          <label class="is-boolean">Degradado tramo 2 <input type="checkbox" data-lighting="showHorizonGradient"></label>
          <label class="is-boolean">Piso <input type="checkbox" data-lighting="showHorizonFloor"></label>
          <label>Alto piso px <span><input type="range" min="0" max="600" step="1" data-lighting="floorHeight"><output></output></span></label>
          <label>Inclinación ° <span><input type="range" min="0" max="89" step="0.5" data-lighting="floorTilt"><output></output></span></label>
          <label>Perspectiva px <span><input type="range" min="50" max="1500" step="10" data-lighting="floorPerspective"><output></output></span></label>
          <label>Textura <span><input type="range" min="0" max="1" step="0.01" data-lighting="floorTexture"><output></output></span></label>
          <label>Escala ruido <span><input type="range" min="0.005" max="0.2" step="0.005" data-lighting="floorTextureScale"><output></output></span></label>
          <label>Relieve <span><input type="range" min="0" max="20" step="0.1" data-lighting="floorRelief"><output></output></span></label>
          <label>Luz relieve ° <span><input type="range" min="0" max="360" step="1" data-lighting="floorLightAngle"><output></output></span></label>
          <label class="is-color">Color mix <input type="color" data-lighting="mixColor"></label>
          <label>Mix cantidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="mixAmount"><output></output></span></label>
          <label>Mix cobertura <span><input type="range" min="0" max="1" step="0.01" data-lighting="mixCoverage"><output></output></span></label>
          <label>Mix escala <span><input type="range" min="0.002" max="0.08" step="0.001" data-lighting="mixScale"><output></output></span></label>
          <label>Mix suavidad <span><input type="range" min="0.02" max="1" step="0.01" data-lighting="mixSoftness"><output></output></span></label>
          <label>Sombra cerca <span><input type="range" min="0" max="1" step="0.01" data-lighting="floorShade"><output></output></span></label>
          <label>Bruma lejos <span><input type="range" min="0" max="1" step="0.01" data-lighting="floorHaze"><output></output></span></label>
          <label>Bloom alto px <span><input type="range" min="0" max="1800" step="1" data-lighting="horizonBloomHeight"><output></output></span></label>
          <label>Bloom desenfoque <span><input type="range" min="0" max="320" step="1" data-lighting="horizonBloomBlur"><output></output></span></label>
          <label>Bloom parejo <span><input type="range" min="0" max="1" step="0.01" data-lighting="horizonBloomFlat"><output></output></span></label>
          <label>Bloom forma <span><input type="range" min="0" max="1" step="0.01" data-lighting="horizonBloomRound"><output></output></span></label>
          <label>Bloom centro X <span><input type="range" min="0" max="1" step="0.01" data-lighting="horizonBloomCenterX"><output></output></span></label>
          <label>Bloom ancho px <span><input type="range" min="100" max="3000" step="10" data-lighting="horizonBloomWidth"><output></output></span></label>
          <label>Línea horizonte <span><input type="range" min="0" max="1" step="0.01" data-lighting="horizonLine"><output></output></span></label>
        </details>
        <details><summary>Tierra · canal 1</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra1Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra1Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra1Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra1Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra1Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1BloomIntensity"><output></output></span></label>
${stonePositionsMarkup(1)}
        </details>
        <details><summary>Tierra · canal 2</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra2Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra2Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra2Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra2Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra2Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra2Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra2Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra2BloomIntensity"><output></output></span></label>
${stonePositionsMarkup(2)}
        </details>
        <details><summary>Tierra · canal 3</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra3Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra3Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra3Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra3Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra3Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra3Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra3Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra3BloomIntensity"><output></output></span></label>
${stonePositionsMarkup(3)}
        </details>
        <details><summary>Tierra · canal 4</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra4Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra4Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra4Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra4Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra4Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra4Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra4Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra4BloomIntensity"><output></output></span></label>
${stonePositionsMarkup(4)}
        </details>
        <details><summary>Piso 3D</summary>
          <label class="is-boolean">Visible <input type="checkbox" data-lighting="showGround3d"></label>
          <label>Relieve <span><input type="range" min="0" max="30" step="0.1" data-lighting="ground3dRelief"><output></output></span></label>
          <label>Escala textura <span><input type="range" min="0.002" max="0.1" step="0.001" data-lighting="ground3dTextureScale"><output></output></span></label>
          <label>Rugosidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="ground3dRoughness"><output></output></span></label>
          <label class="is-boolean">Recibe sombras <input type="checkbox" data-lighting="ground3dShadows"></label>
          <label>Sombra contacto <span><input type="range" min="0" max="1" step="0.01" data-lighting="ground3dContactShadows"><output></output></span></label>
          <label>Difuminado lados <span><input type="range" min="0" max="0.5" step="0.01" data-lighting="ground3dFadeSides"><output></output></span></label>
          <label>Difuminado fondo <span><input type="range" min="0" max="0.8" step="0.01" data-lighting="ground3dFadeFar"><output></output></span></label>
          <label>Difuminado frente <span><input type="range" min="0" max="0.5" step="0.01" data-lighting="ground3dFadeNear"><output></output></span></label>
          <label>Suavidad bordes <span><input type="range" min="0.2" max="4" step="0.05" data-lighting="ground3dFadeSoftness"><output></output></span></label>
          <label>Posición X <span><input type="range" min="-30" max="30" step="0.05" data-lighting="groundX"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-40" max="5" step="0.05" data-lighting="groundY"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-30" max="20" step="0.05" data-lighting="groundZ"><output></output></span></label>
          <label>Ancho <span><input type="range" min="8" max="200" step="0.5" data-lighting="groundWidth"><output></output></span></label>
          <label>Estirar lados × <span><input type="range" min="0.5" max="8" step="0.05" data-lighting="groundStretchX"><output></output></span></label>
          <label>Profundidad <span><input type="range" min="6" max="80" step="0.5" data-lighting="groundDepth"><output></output></span></label>
          <label>Rotación X ° <span><input type="range" min="-45" max="45" step="0.5" data-lighting="groundRotX"><output></output></span></label>
          <label>Rotación Y ° <span><input type="range" min="-180" max="180" step="1" data-lighting="groundRotY"><output></output></span></label>
          <label>Rotación Z ° <span><input type="range" min="-45" max="45" step="0.5" data-lighting="groundRotZ"><output></output></span></label>
          <label>Exposición <span><input type="range" min="0.2" max="3" step="0.05" data-lighting="ground3dExposure"><output></output></span></label>
          <label class="is-color">Luz piso color <input type="color" data-lighting="groundLightColor"></label>
          <label>Luz piso intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="groundLightIntensity"><output></output></span></label>
          <label>Luz piso X <span><input type="range" min="-30" max="30" step="0.5" data-lighting="groundLightX"><output></output></span></label>
          <label>Luz piso Y <span><input type="range" min="0.5" max="40" step="0.5" data-lighting="groundLightY"><output></output></span></label>
          <label>Luz piso Z <span><input type="range" min="-30" max="30" step="0.5" data-lighting="groundLightZ"><output></output></span></label>
          <label>Luz apunta X <span><input type="range" min="-20" max="20" step="0.5" data-lighting="groundLightTargetX"><output></output></span></label>
          <label>Luz apunta Z <span><input type="range" min="-20" max="20" step="0.5" data-lighting="groundLightTargetZ"><output></output></span></label>
        </details>
        <details><summary>Piedras</summary>
          <label>Posición X <span><input type="range" min="-30" max="30" step="0.05" data-lighting="stonesX"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-30" max="10" step="0.05" data-lighting="stonesY"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-40" max="20" step="0.05" data-lighting="stonesZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.1" max="5" step="0.05" data-lighting="stonesScale"><output></output></span></label>
          <label>Hundimiento <span><input type="range" min="-0.5" max="1.5" step="0.01" data-lighting="stonesEmbed"><output></output></span></label>
          <label>Rotación X ° <span><input type="range" min="-180" max="180" step="1" data-lighting="stonesRotX"><output></output></span></label>
          <label>Rotación Y ° <span><input type="range" min="-180" max="180" step="1" data-lighting="stonesRotY"><output></output></span></label>
          <label>Rotación Z ° <span><input type="range" min="-180" max="180" step="1" data-lighting="stonesRotZ"><output></output></span></label>
        </details>
        <details><summary>Iluminación suelo</summary>
          <label>Luz 1 X <span><input type="range" min="-30" max="30" step="0.5" data-lighting="stoneLight1X"><output></output></span></label>
          <label>Luz 1 Y <span><input type="range" min="-30" max="30" step="0.5" data-lighting="stoneLight1Y"><output></output></span></label>
          <label>Luz 1 Z <span><input type="range" min="-30" max="30" step="0.5" data-lighting="stoneLight1Z"><output></output></span></label>
          <label>Luz 2 X <span><input type="range" min="-30" max="30" step="0.5" data-lighting="stoneLight2X"><output></output></span></label>
          <label>Luz 2 Y <span><input type="range" min="-30" max="30" step="0.5" data-lighting="stoneLight2Y"><output></output></span></label>
          <label>Luz 2 Z <span><input type="range" min="-30" max="30" step="0.5" data-lighting="stoneLight2Z"><output></output></span></label>
        </details>
        <details><summary>Ambiente</summary>
          <label class="is-color">Cielo <input type="color" data-lighting="hemisphereSky"></label>
          <label class="is-color">Suelo <input type="color" data-lighting="hemisphereGround"></label>
          <label>Intensidad <span><input type="range" min="0" max="5" step="0.05" data-lighting="hemisphereIntensity"><output></output></span></label>
        </details>
        <details><summary>Principal cálida</summary>
          <label class="is-color">Color <input type="color" data-lighting="keyColor"></label>
          <label>Intensidad <span><input type="range" min="0" max="12" step="0.1" data-lighting="keyIntensity"><output></output></span></label>
          <label>Posición X <span><input type="range" min="-15" max="15" step="0.1" data-lighting="keyX"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-15" max="15" step="0.1" data-lighting="keyY"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-15" max="15" step="0.1" data-lighting="keyZ"><output></output></span></label>
        </details>
        <details><summary>Contraluz violeta</summary>
          <label class="is-color">Color <input type="color" data-lighting="rimColor"></label>
          <label>Intensidad <span><input type="range" min="0" max="12" step="0.1" data-lighting="rimIntensity"><output></output></span></label>
          <label>Posición X <span><input type="range" min="-15" max="15" step="0.1" data-lighting="rimX"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-15" max="15" step="0.1" data-lighting="rimY"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-15" max="15" step="0.1" data-lighting="rimZ"><output></output></span></label>
        </details>
        <details><summary>Grainy blur</summary>
          <label>Desenfoque <span><input type="range" min="0" max="120" step="1" data-lighting="effectBlur"><output></output></span></label>
          <label>Intensidad grano <span><input type="range" min="0" max="0.25" step="0.01" data-lighting="grainOpacity"><output></output></span></label>
          <label>Detalle grano <span><input type="range" min="0.1" max="1.5" step="0.05" data-lighting="grainFrequency"><output></output></span></label>
          <label>Refresco FPS <span><input type="range" min="1" max="24" step="1" data-lighting="grainSpeed"><output></output></span></label>
          <label>Grano secc. 3·4 <span><input type="range" min="0" max="0.5" step="0.01" data-lighting="sectionGrainOpacity"><output></output></span></label>
        </details>
        <details><summary>Órbitas</summary>
          <label>Velocidad <span><input type="range" min="0" max="5" step="0.05" data-lighting="orbitSpeed"><output></output></span></label>
          <label>Kepler <span><input type="range" min="0" max="2" step="0.05" data-lighting="orbitKepler"><output></output></span></label>
          <label>Inclinación <span><input type="range" min="0" max="85" step="1" data-lighting="orbitTilt"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.3" max="2" step="0.05" data-lighting="orbitScale"><output></output></span></label>
          <label class="is-select">Sentido <select data-lighting="orbitDirection"><option>Antihorario</option><option>Horario</option></select></label>
          <label>Velocidad luna <span><input type="range" min="0" max="5" step="0.05" data-lighting="moonSpeed"><output></output></span></label>
          <label>Rotación propia <span><input type="range" min="0" max="10" step="0.1" data-lighting="spinSpeed"><output></output></span></label>
          <label>Líneas órbita <span><input type="range" min="0" max="1" step="0.05" data-lighting="orbitLineOpacity"><output></output></span></label>
          <label class="is-color">Color líneas <input type="color" data-lighting="orbitLineColor"></label>
        </details>
        <details><summary>Estrellas fugaces</summary>
          <label class="is-boolean">Activas <input type="checkbox" data-lighting="shootingEnabled"></label>
          <label>Pausa mín s <span><input type="range" min="0" max="30" step="0.5" data-lighting="shootingPauseMin"><output></output></span></label>
          <label>Pausa máx s <span><input type="range" min="0" max="60" step="0.5" data-lighting="shootingPauseMax"><output></output></span></label>
          <label>Velocidad <span><input type="range" min="5" max="100" step="1" data-lighting="shootingSpeed"><output></output></span></label>
          <label>Largo <span><input type="range" min="0.5" max="25" step="0.1" data-lighting="shootingLength"><output></output></span></label>
          <label>Grosor <span><input type="range" min="0.01" max="0.6" step="0.01" data-lighting="shootingWidth"><output></output></span></label>
          <label>Brillo <span><input type="range" min="0" max="4" step="0.05" data-lighting="shootingBrightness"><output></output></span></label>
          <label class="is-color">Color <input type="color" data-lighting="shootingColor"></label>
          <label>Ángulo ° <span><input type="range" min="-180" max="180" step="1" data-lighting="shootingAngle"><output></output></span></label>
          <label>Variación ° <span><input type="range" min="0" max="90" step="1" data-lighting="shootingAngleVariation"><output></output></span></label>
          <button class="lighting-panel__action" type="button" data-shooting-trigger>Lanzar una ahora</button>
        </details>
        <details><summary>Sol</summary>
          <label>Tamaño <span><input type="range" min="0.2" max="3" step="0.05" data-lighting="sunSize"><output></output></span></label>
          <label>Emisión <span><input type="range" min="0" max="10" step="0.05" data-lighting="sunEmissive"><output></output></span></label>
          <label class="is-color">Color emisión <input type="color" data-lighting="sunEmissiveColor"></label>
          <label>Rotación <span><input type="range" min="0" max="5" step="0.05" data-lighting="sunSpin"><output></output></span></label>
          <label>Halo tamaño <span><input type="range" min="1" max="8" step="0.05" data-lighting="sunGlowSize"><output></output></span></label>
          <label>Halo intensidad <span><input type="range" min="0" max="3" step="0.05" data-lighting="sunGlowIntensity"><output></output></span></label>
          <label class="is-color">Color halo <input type="color" data-lighting="sunGlowColor"></label>
          <label>Luz a planetas <span><input type="range" min="0" max="30" step="0.1" data-lighting="sunLightIntensity"><output></output></span></label>
          <label class="is-color">Color luz <input type="color" data-lighting="sunLightColor"></label>
        </details>
        <details><summary>Sistema</summary>
          <label>Giro auto °/s <span><input type="range" min="-30" max="30" step="0.5" data-lighting="systemSpin"><output></output></span></label>
          <label>Flotación <span><input type="range" min="0" max="2" step="0.05" data-lighting="systemFloat"><output></output></span></label>
          <label>Vel. flotación <span><input type="range" min="0" max="3" step="0.05" data-lighting="systemFloatSpeed"><output></output></span></label>
          <label>Parallax mouse ° <span><input type="range" min="0" max="30" step="0.5" data-lighting="systemParallax"><output></output></span></label>
        </details>
        <details><summary>Sistema · canal 1</summary>
          <label>Posición X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system1X"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system1Y"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system1Z"><output></output></span></label>
          <label>Rotación X <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotX"><output></output></span></label>
          <label>Rotación Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotY"><output></output></span></label>
          <label>Rotación Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system1Scale"><output></output></span></label>
        </details>
        <details><summary>Sistema · canal 2</summary>
          <label>Posición X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system2X"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system2Y"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system2Z"><output></output></span></label>
          <label>Rotación X <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotX"><output></output></span></label>
          <label>Rotación Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotY"><output></output></span></label>
          <label>Rotación Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system2Scale"><output></output></span></label>
        </details>
        <details><summary>Sistema · canal 3</summary>
          <label>Posición X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system3X"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system3Y"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system3Z"><output></output></span></label>
          <label>Rotación X <span><input type="range" min="-180" max="180" step="1" data-lighting="system3RotX"><output></output></span></label>
          <label>Rotación Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system3RotY"><output></output></span></label>
          <label>Rotación Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system3RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system3Scale"><output></output></span></label>
        </details>
        <details><summary>Sistema · canal 4</summary>
          <label>Posición X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system4X"><output></output></span></label>
          <label>Posición Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system4Y"><output></output></span></label>
          <label>Posición Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system4Z"><output></output></span></label>
          <label>Rotación X <span><input type="range" min="-180" max="180" step="1" data-lighting="system4RotX"><output></output></span></label>
          <label>Rotación Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system4RotY"><output></output></span></label>
          <label>Rotación Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system4RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system4Scale"><output></output></span></label>
        </details>
        <details><summary>Estrellas</summary>
          <label>Cantidad <span><input type="range" min="0" max="5000" step="50" data-lighting="starCount"><output></output></span></label>
          <label>Tamaño <span><input type="range" min="0.5" max="10" step="0.1" data-lighting="starSize"><output></output></span></label>
          <label>Brillo <span><input type="range" min="0" max="4" step="0.05" data-lighting="starBrightness"><output></output></span></label>
          <label class="is-color">Color <input type="color" data-lighting="starColor"></label>
          <label>Variación color <span><input type="range" min="0" max="1" step="0.05" data-lighting="starColorVariation"><output></output></span></label>
          <label>Vel. titileo <span><input type="range" min="0" max="8" step="0.05" data-lighting="twinkleSpeed"><output></output></span></label>
          <label>Titileo <span><input type="range" min="0" max="1" step="0.05" data-lighting="twinkleAmount"><output></output></span></label>
          <label>Bloom tamaño <span><input type="range" min="0" max="8" step="0.1" data-lighting="bloomSize"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="3" step="0.05" data-lighting="bloomIntensity"><output></output></span></label>
          <label>Deriva <span><input type="range" min="0" max="3" step="0.05" data-lighting="starDrift"><output></output></span></label>
        </details>
        <details><summary>Render</summary>
          <label>Exposición <span><input type="range" min="0.1" max="3" step="0.05" data-lighting="exposure"><output></output></span></label>
          <label class="is-select">Color mapping <select data-lighting="toneMapping">${Object.keys(TONE_MAPPINGS).map((name) => `<option>${name}</option>`).join("")}</select></label>
        </details>
        <button class="lighting-panel__reset" type="button" data-lighting-reset>Restablecer</button>
      </div>
      <button class="lighting-panel__toggle" type="button" aria-expanded="false">Open Controls</button>`;

    // Mirror the actual paint order so the GUI reads from the back layer to the front layer.
    const controlLayers = [
      { label: "01 · Fondo", groups: ["Fondo"] },
      {
        label: "02 · 3D",
        groups: [
          "Horizonte",
          "Tierra · canal 1",
          "Tierra · canal 2",
          "Tierra · canal 3",
          "Tierra · canal 4",
          "Piso 3D",
          "Piedras",
          "Iluminación suelo",
          "Ambiente",
          "Principal cálida",
          "Contraluz violeta",
          "Estrellas",
          "Estrellas fugaces",
          "Órbitas",
          "Sol",
          "Sistema",
          "Sistema · canal 1",
          "Sistema · canal 2",
          "Sistema · canal 3",
          "Sistema · canal 4",
          "Render",
        ],
      },
      { label: "03 · Grainy blur", groups: ["Grainy blur"] },
      { label: "04 · UI", groups: ["Layout", "Manifiesto", "Carta", "Carta foil", "Carta mapeo", "Carta extras"] },
    ];
    const panelBody = panel.querySelector(".lighting-panel__body");
    const resetButton = panel.querySelector("[data-lighting-reset]");
    const detailsByName = new Map(
      Array.from(panelBody.querySelectorAll(":scope > details")).map((details) => [details.querySelector("summary").textContent.trim(), details]),
    );
    const orderedControls = document.createDocumentFragment();
    controlLayers.forEach(({ label, groups }) => {
      const heading = document.createElement("p");
      heading.className = "lighting-panel__layer";
      heading.textContent = label;
      orderedControls.appendChild(heading);
      groups.forEach((name) => {
        const details = detailsByName.get(name);
        if (details) orderedControls.appendChild(details);
      });
    });
    panelBody.insertBefore(orderedControls, resetButton);

    const setInputValue = (input, value) => {
      if (input.type === "checkbox") input.checked = Boolean(value);
      else input.value = value;
    };

    // The value box next to each slider is an editable number field: typing a value (Enter or
    // leaving the field) moves the slider. Values outside the slider range stretch its limits.
    panel.querySelectorAll('input[type="range"]').forEach((range) => {
      const output = range.parentElement.querySelector("output");
      if (!output) return;
      const field = document.createElement("input");
      field.type = "text";
      field.inputMode = "decimal";
      field.className = "lighting-panel__number";
      field.setAttribute("aria-label", `${range.closest("label")?.firstChild?.textContent?.trim() || "Valor"} (número)`);
      output.replaceWith(field);
      const commit = () => {
        const value = Number(String(field.value).replace(",", "."));
        if (!Number.isFinite(value)) {
          updateOutputs();
          return;
        }
        if (value < Number(range.min)) range.min = String(value);
        if (value > Number(range.max)) range.max = String(value);
        range.value = String(value);
        range.dispatchEvent(new Event("input"));
      };
      field.addEventListener("change", commit);
      field.addEventListener("keydown", (event) => {
        if (event.key === "Enter") field.blur();
        if (event.key === "Escape") {
          updateOutputs();
          field.blur();
        }
      });
    });

    const updateOutputs = () => {
      panel.querySelectorAll('input[type="range"]').forEach((input) => {
        const field = input.parentElement.querySelector(".lighting-panel__number");
        if (!field || document.activeElement === field) return;
        const decimals = Math.max(1, (input.step.split(".")[1] || "").length);
        field.value = Number(input.value).toFixed(decimals);
      });
    };

    panel.querySelectorAll("[data-lighting]").forEach((input) => {
      setInputValue(input, settings[input.dataset.lighting]);
      input.addEventListener("input", () => {
        const key = input.dataset.lighting;
        settings[key] = input.type === "checkbox" ? input.checked : input.type === "range" ? Number(input.value) : input.value;
        const channelPose = key.match(/^system([1-4])(X|Y|Z|RotX|RotY|RotZ|Scale)$/);
        if (channelPose) this.showChannel?.(Number(channelPose[1]) - 1);
        const channelGround = key.match(/^tierra([1-4])/);
        if (channelGround) this.showChannel?.(Number(channelGround[1]) - 1);
        updateOutputs();
        this.applyLightingSettings(settings);
        this.saveLightingSettings(settings);
      });
    });

    const persistInput = panel.querySelector("[data-lighting-persist]");
    persistInput.checked = this.persistLighting;
    persistInput.addEventListener("change", () => {
      this.persistLighting = persistInput.checked;
      writeStorage(LIGHTING_PERSIST_KEY, this.persistLighting ? "1" : null);
      writeStorage(LIGHTING_STORAGE_KEY, this.persistLighting ? JSON.stringify(settings) : null);
    });

    panel.querySelector(".lighting-panel__toggle").addEventListener("click", (event) => {
      const collapsed = panel.classList.toggle("is-collapsed");
      event.currentTarget.setAttribute("aria-expanded", String(!collapsed));
      event.currentTarget.textContent = collapsed ? "Open Controls" : "Close Controls";
    });
    panel.querySelector("[data-shooting-trigger]").addEventListener("click", () => {
      if (!this.shootingStars.length) this.spawnShootingStar(settings);
    });
    panel.querySelector("[data-lighting-reset]").addEventListener("click", () => {
      Object.assign(settings, DEFAULT_LIGHTING);
      this.saveLightingSettings(settings);
      panel.querySelectorAll("[data-lighting]").forEach((input) => {
        setInputValue(input, settings[input.dataset.lighting]);
      });
      updateOutputs();
      this.applyLightingSettings(settings);
    });

    this.setupSectionGuide();
    updateOutputs();
    this.applyLightingSettings(settings);
    document.body.appendChild(panel);
  }

  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      this.modelUrl,
      ({ scene }) => {
        this.model = scene;
        this.system = new THREE.Group();
        this.system.add(this.model);
        this.scene.add(this.system);

        let saturnPosition = null;
        const pendingRing = [];
        const planets = {};

        scene.traverse((node) => {
          if (!node.isMesh) return;
          const key = layoutKey(node);
          node.castShadow = false;
          node.receiveShadow = false;

          const materials = Array.isArray(node.material) ? node.material : [node.material];
          materials.forEach((material) => {
            if (!material) return;
            material.roughness = Math.max(material.roughness ?? 0.5, 0.48);
            material.needsUpdate = true;
          });

          if (key === "saturn-ring") {
            pendingRing.push(node);
            return;
          }

          const slot = key ? PLANET_LAYOUT[key] : null;
          if (!slot) {
            node.visible = false;
            return;
          }

          node.position.set(...slot.position);
          node.rotation.set(0.08, Math.random() * Math.PI, key === "saturn" ? -0.28 : 0);
          fitMeshToRadius(node, slot.radius);
          node.userData.basePosition = node.position.clone();
          node.userData.spinSpeed = 0.035 + Math.random() * 0.07;
          this.spinners.push(node);

          planets[key] = node;
          if (key === "saturn") saturnPosition = node.position.clone();
        });

        pendingRing.forEach((ring) => {
          ring.position.copy(saturnPosition || new THREE.Vector3(...PLANET_LAYOUT.saturn.position));
          ring.rotation.set(0.08, 0, -0.28);
          fitMeshToRadius(ring, 1.02);
          ring.userData.basePosition = ring.position.clone();
          this.spinners.push(ring);
        });

        this.setupOrbits(planets, pendingRing);

        this.root.classList.add("is-ready");
        this.createIdleAnimation();
      },
      undefined,
      () => this.root.classList.add("is-fallback")
    );
  }

  setupOrbits(planets, rings) {
    this.sun = planets.sun;
    if (!this.sun) return;
    const sunPosition = this.sun.position;
    this.model.position.copy(sunPosition).negate();
    this.setupSun();
    const unitCircle = new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: ORBIT_SEGMENTS }, (_, index) => {
        const angle = (index / ORBIT_SEGMENTS) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0);
      })
    );

    Object.entries(planets).forEach(([key, mesh]) => {
      if (key === "sun" || key === "moon") return;
      const offset = mesh.position.clone().sub(sunPosition);
      const line = new THREE.LineLoop(
        unitCircle,
        new THREE.LineBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
      );
      line.visible = false;
      this.sun.parent.add(line);
      this.orbiters.push({
        mesh,
        distance: PLANET_LAYOUT[key].orbit ?? offset.length(),
        angle: Math.atan2(offset.y, offset.x),
        line,
        rings: key === "saturn" ? rings : [],
      });
    });

    if (planets.moon && planets.earth) {
      const offset = planets.moon.position.clone().sub(planets.earth.position);
      this.moon = {
        mesh: planets.moon,
        distance: offset.length(),
        earth: planets.earth,
        angle: Math.atan2(offset.y, offset.x),
      };
    }
  }

  setupSun() {
    const materials = Array.isArray(this.sun.material) ? this.sun.material : [this.sun.material];
    this.sunMaterials = materials.filter((material) => material && "emissiveIntensity" in material);
    this.sunBaseScale = this.sun.scale.x;
    this.sunRadius = PLANET_LAYOUT.sun.radius;

    this.sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: createGlowTexture(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    }));
    this.sunGlow.renderOrder = 1;
    this.sunLight = new THREE.PointLight(0xffffff, 0, 0, 0);
    this.sunGlow.position.copy(this.sun.position);
    this.sunLight.position.copy(this.sun.position);
    this.sun.parent.add(this.sunGlow, this.sunLight);
  }

  updateSun(settings) {
    if (!this.sun || !this.sunGlow) return;
    const size = Number(settings.sunSize);
    this.sun.scale.setScalar(this.sunBaseScale * size);
    this.sunMaterials.forEach((material) => {
      material.emissive.set(settings.sunEmissiveColor);
      material.emissiveIntensity = Number(settings.sunEmissive);
    });

    const glowIntensity = Number(settings.sunGlowIntensity);
    this.sunGlow.visible = glowIntensity > 0;
    this.sunGlow.material.opacity = glowIntensity;
    this.sunGlow.material.color.set(settings.sunGlowColor);
    this.sunGlow.scale.setScalar(this.sunRadius * size * Number(settings.sunGlowSize) * 2);

    this.sunLight.intensity = Number(settings.sunLightIntensity);
    this.sunLight.color.set(settings.sunLightColor);
  }

  spawnShootingStar(settings) {
    if (!this.shootingGeometry) {
      this.shootingGeometry = new THREE.PlaneGeometry(1, 1).translate(-0.5, 0, 0);
    }
    const ndcX = THREE.MathUtils.lerp(SHOOTING_STAR_ZONE.left, SHOOTING_STAR_ZONE.right, Math.random());
    const ndcY = THREE.MathUtils.lerp(SHOOTING_STAR_ZONE.bottom, SHOOTING_STAR_ZONE.top, Math.random());
    const direction = new THREE.Vector3(ndcX, ndcY, 0.5).unproject(this.camera).sub(this.camera.position).normalize();
    const distance = (SHOOTING_STAR_DEPTH - this.camera.position.z) / direction.z;
    const start = this.camera.position.clone().addScaledVector(direction, distance);

    const angle = THREE.MathUtils.degToRad(
      Number(settings.shootingAngle) + (Math.random() * 2 - 1) * Number(settings.shootingAngleVariation)
    );
    const mesh = new THREE.Mesh(this.shootingGeometry, new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(settings.shootingColor) }, uOpacity: { value: 0 } },
      vertexShader: SHOOTING_VERTEX_SHADER,
      fragmentShader: SHOOTING_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    mesh.position.copy(start);
    mesh.rotation.z = angle;
    mesh.renderOrder = 2;
    this.scene.add(mesh);
    this.shootingStars.push({
      mesh,
      velocity: new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0),
      age: 0,
      life: 0.6 + Math.random() * 0.7,
    });
  }

  updateShootingStars(time, delta) {
    const settings = this.effectSettings ?? DEFAULT_LIGHTING;
    const scheduleNext = () => {
      const pauseMin = Number(settings.shootingPauseMin);
      const pauseMax = Math.max(pauseMin, Number(settings.shootingPauseMax));
      this.nextShootingStar = time + THREE.MathUtils.lerp(pauseMin, pauseMax, Math.random());
    };
    if (!settings.shootingEnabled) {
      scheduleNext();
    } else if (!this.shootingStars.length && time >= this.nextShootingStar) {
      this.spawnShootingStar(settings);
    }

    this.shootingStars = this.shootingStars.filter((star) => {
      star.age += delta;
      const progress = star.age / star.life;
      if (progress >= 1) {
        this.scene.remove(star.mesh);
        star.mesh.material.dispose();
        scheduleNext();
        return false;
      }
      star.mesh.position.addScaledVector(star.velocity, Number(settings.shootingSpeed) * delta);
      star.mesh.scale.set(Number(settings.shootingLength) * Math.min(progress * 3, 1), Number(settings.shootingWidth), 1);
      star.mesh.material.uniforms.uOpacity.value = Math.sin(progress * Math.PI) * Number(settings.shootingBrightness);
      star.mesh.material.uniforms.uColor.value.set(settings.shootingColor);
      return true;
    });
  }

  systemPoseFor(channelIndex, settings) {
    const prefix = `system${channelIndex + 1}`;
    return Object.fromEntries(SYSTEM_POSE_KEYS.map((key) => [key, Number(settings[`${prefix}${key}`])]));
  }

  // Each channel has its own pose for the solar system; switching glides to it with the reveal wave.
  currentSystemPose(settings) {
    const target = this.systemPoseFor(this.channelIndex ?? 0, settings);
    const move = this.systemMove;
    if (!move) return target;
    const t = Math.min((performance.now() - move.start) / CHANNEL_REVEAL_MS, 1);
    if (t >= 1) {
      this.systemMove = null;
      return target;
    }
    const eased = easeOutCubic(t);
    return Object.fromEntries(SYSTEM_POSE_KEYS.map((key) => [key, move.from[key] + (target[key] - move.from[key]) * eased]));
  }

  moveSystemToChannel(index, animate) {
    const settings = this.effectSettings ?? DEFAULT_LIGHTING;
    const from = this.system ? this.currentSystemPose(settings) : null;
    this.channelIndex = index;
    this.systemMove = animate && from ? { from, start: performance.now() } : null;
  }

  updateSystem(time, delta) {
    if (!this.system) return;
    const settings = this.effectSettings ?? DEFAULT_LIGHTING;
    const animate = !REDUCED_MOTION.matches;
    const degrees = THREE.MathUtils.degToRad;

    this.systemSpinAngle = (this.systemSpinAngle || 0) + (animate ? delta * degrees(Number(settings.systemSpin)) : 0);
    const float = animate ? Math.sin(time * Number(settings.systemFloatSpeed) * Math.PI * 2) * Number(settings.systemFloat) : 0;
    this.smoothPointer.lerp(this.pointer, Math.min(delta * 4, 1));
    const parallax = animate ? degrees(Number(settings.systemParallax)) : 0;

    const pose = this.currentSystemPose(settings);
    this.system.position.set(pose.X, pose.Y + float, pose.Z);
    this.system.rotation.set(
      degrees(pose.RotX) - this.smoothPointer.y * parallax,
      degrees(pose.RotY) + this.systemSpinAngle + this.smoothPointer.x * parallax,
      degrees(pose.RotZ)
    );
    this.system.scale.setScalar(pose.Scale);
    this.updateSun(settings);
  }

  updateOrbits(delta) {
    if (!this.sun) return;
    const settings = this.effectSettings ?? DEFAULT_LIGHTING;
    const speed = Number(settings.orbitSpeed);
    const kepler = Number(settings.orbitKepler);
    const scale = Number(settings.orbitScale);
    const direction = settings.orbitDirection === "Horario" ? -1 : 1;
    const tilt = THREE.MathUtils.degToRad(Number(settings.orbitTilt));
    const lineOpacity = Number(settings.orbitLineOpacity);

    this.orbitAxis.set(0, Math.sin(tilt), Math.cos(tilt));
    this.orbitQuaternion.setFromUnitVectors(Z_AXIS, this.orbitAxis);
    this.orbitBinormal.crossVectors(this.orbitAxis, X_AXIS);

    this.orbiters.forEach((orbiter) => {
      const angularSpeed = ORBIT_BASE_SPEED * speed * (ORBIT_REFERENCE_RADIUS / orbiter.distance) ** kepler;
      orbiter.angle += delta * angularSpeed * direction;

      const radius = orbiter.distance * scale;
      this.placeOnOrbit(orbiter.mesh.position, this.sun.position, radius, orbiter.angle);
      orbiter.rings.forEach((ring) => ring.position.copy(orbiter.mesh.position));

      orbiter.line.visible = lineOpacity > 0;
      orbiter.line.material.opacity = lineOpacity;
      orbiter.line.material.color.set(settings.orbitLineColor);
      orbiter.line.quaternion.copy(this.orbitQuaternion);
      orbiter.line.scale.setScalar(radius);
      orbiter.line.position.copy(this.sun.position);
    });

    if (this.moon) {
      this.moon.angle += delta * MOON_BASE_SPEED * Number(settings.moonSpeed) * speed * direction;
      this.placeOnOrbit(this.moon.mesh.position, this.moon.earth.position, this.moon.distance, this.moon.angle);
    }

    const spinSpeed = Number(settings.spinSpeed);
    const sunSpin = Number(settings.sunSpin);
    if (spinSpeed !== this.appliedSpinSpeed || sunSpin !== this.appliedSunSpin) {
      this.spinTweens.forEach((tween) => {
        tween.timeScale(tween.targets()[0] === this.sun?.rotation ? spinSpeed * sunSpin : spinSpeed);
      });
      this.appliedSpinSpeed = spinSpeed;
      this.appliedSunSpin = sunSpin;
    }
  }

  placeOnOrbit(target, center, radius, angle) {
    return target
      .copy(X_AXIS)
      .multiplyScalar(Math.cos(angle) * radius)
      .addScaledVector(this.orbitBinormal, Math.sin(angle) * radius)
      .add(center);
  }

  createIdleAnimation() {
    if (REDUCED_MOTION.matches || !this.model) return;

    this.spinners.forEach((mesh) => {
      this.spinTweens.push(gsap.to(mesh.rotation, {
        y: mesh.rotation.y + Math.PI * 2,
        duration: (Math.PI * 2) / mesh.userData.spinSpeed,
        repeat: -1,
        ease: "none",
      }));
    });
  }

  setupFoilCards() {
    this.foilCards = [];
    if (!window.WebGLRenderingContext) return;

    this.root.querySelectorAll("[data-foil-card]").forEach((card) => {
      const canvas = card.querySelector(".altar-solar__foil-canvas");
      const baseUrl = card.dataset.foilBase;
      const foilUrl = card.dataset.foilMap;
      if (!canvas || !baseUrl || !(foilUrl || card.dataset.foilFrame)) return;

      Promise.all([this.loadFoilTexture(baseUrl), this.loadCardMap(card, 0, foilUrl)])
        .then(([baseMap, foilMap]) => {
          const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: "low-power",
          });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 3));
          renderer.setSize(236, 358, false);
          renderer.setClearColor(0x000000, 0);

          const scene = new THREE.Scene();
          const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
          const material = new THREE.ShaderMaterial({
            vertexShader: FOIL_VERTEX_SHADER,
            fragmentShader: FOIL_FRAGMENT_SHADER,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            uniforms: {
              uBaseMap: { value: baseMap },
              uFoilMap: { value: foilMap },
              uAspect: { value: 236 / 358 },
              uArtMode: { value: "foilArt" in card.dataset ? 1 : 0 },
              uZoneCenter: { value: new THREE.Vector2() },
              uZoneScale: { value: 1 },
              uCameraPosition: { value: new THREE.Vector3(0, 0, FOIL_CAMERA_Z) },
              uLight1Position: { value: new THREE.Vector3() },
              uLight2Position: { value: new THREE.Vector3() },
              uBevelSize: { value: new THREE.Vector2() },
              ...Object.fromEntries(Object.values(FOIL_UNIFORM_SETTINGS).map((name) => [name, { value: 0 }])),
              ...Object.fromEntries(Object.values(FOIL_COLOR_SETTINGS).map((name) => [name, { value: new THREE.Vector3() }])),
              uMouse: { value: new THREE.Vector2() },
              uTime: { value: 0 },
              uScrollOffset: { value: 0 },
            },
          });
          const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
          scene.add(mesh);

          const effect = { card, renderer, scene, camera, material, baseUrl, foilUrl: messageFrameUrl(card, 0) || foilUrl, maskSize: new THREE.Vector2(foilMap.image.width, foilMap.image.height) };
          this.foilCards.push(effect);
          renderer.render(scene, camera);
          card.classList.add("is-foil-rendered");

        })
        .catch(() => {
          card.classList.remove("is-foil-rendered");
        });
    });
  }

  setupChannels() {
    const label = this.root.querySelector(".altar-solar__channel-label");
    const dots = Array.from(this.root.querySelectorAll(".altar-solar__pagination span"));
    const pagination = this.root.querySelector(".altar-solar__pagination");
    const image = this.root.querySelector(".altar-solar__campaign-crop img");
    // The shockwave starts from the campaign teaser, wherever it currently sits (or was dragged to).
    const campaign = this.root.querySelector(".altar-solar__campaign");
    const [previous, next] = this.root.querySelectorAll(".altar-solar__channel-arrow");
    if (!label || !previous || !next) return;
    const defaultImage = image?.getAttribute("src");
    let current = 0;

    const backgroundFor = (index) => {
      const settings = this.effectSettings ?? DEFAULT_LIGHTING;
      // Channel 1 follows the GUI/default background; other channels bring their own palette.
      return CHANNELS[index].background ?? {
        space: settings.spaceColor,
        glows: {
          rose: [settings.glowRoseColor, settings.glowRoseIntensity],
          cyan: [settings.glowCyanColor, settings.glowCyanIntensity],
          teal: [settings.glowTealColor, settings.glowTealIntensity],
        },
      };
    };

    const applyBackground = (background) => {
      this.root.style.setProperty("--space-color", background.space);
      Object.entries(background.glows).forEach(([name, [color, intensity]]) => {
        this.root.querySelectorAll(`.altar-solar__glow--${name}`).forEach((glow) => {
          glow.style.setProperty("--c", color);
          glow.style.setProperty("--glow-intensity", Number(intensity));
        });
      });
    };

    // The ground (section 2) campaign photo follows the channel too; a channel without its
    // own data-channel-image-N keeps channel 1's photo.
    const groundImage = this.root.querySelector(".altar-solar__ground-campaign-media img");
    const defaultGroundImage = groundImage?.getAttribute("src");

    const photoSources = (index) => [
      index === 0 ? defaultImage : image?.getAttribute(`data-channel-image-${index + 1}`),
      (index > 0 && groundImage?.getAttribute(`data-channel-image-${index + 1}`)) || defaultGroundImage,
    ].filter(Boolean);

    // Downloaded and decoded ahead of time (and kept referenced), so a switch never swaps a
    // half-loaded photo in the middle of the zoom.
    const decodedPhotos = new Map();
    const decodePhoto = (src) => {
      if (!decodedPhotos.has(src)) {
        const preload = new Image();
        preload.src = src;
        decodedPhotos.set(src, preload.decode().catch(() => {}).then(() => preload));
      }
      return decodedPhotos.get(src);
    };
    const photosReady = (index) => Promise.race([
      Promise.all(photoSources(index).map(decodePhoto)),
      // On a very slow connection don't hold the switch forever.
      new Promise((resolve) => setTimeout(resolve, 1200)),
    ]);
    afterIntro(() => {
      CHANNELS.forEach((_, index) => {
        photoSources(index).forEach(decodePhoto);
        this.preloadCardChannel(index);
      });
    });

    const applyPhoto = (index) => {
      if (groundImage) {
        const channelSrc = index > 0 && groundImage.getAttribute(`data-channel-image-${index + 1}`);
        groundImage.src = channelSrc || defaultGroundImage;
        // Channel 1 uses Figma's offset crop; other channels simply cover the frame.
        groundImage.classList.toggle("is-channel-cover", Boolean(channelSrc));
      }
      if (!image) return;
      const src = index === 0 ? defaultImage : image.getAttribute(`data-channel-image-${index + 1}`);
      if (src) image.src = src;
      image.classList.toggle("is-channel-cover", index !== 0);
    };

    // Reference zoom 3× → 1×: easeOutCubic on the tween plus another cubic ease-out on top,
    // so it lands almost instantly and then settles very slowly.
    const zoomPhoto = (target = image) => {
      if (!target) return;
      cancelAnimationFrame(this.photoZoomFrame);
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / CHANNEL_ZOOM_MS, 1);
        const eased = 1 - Math.pow(1 - easeOutCubic(t), 3);
        target.style.scale = String(3 + (1 - 3) * eased);
        if (t < 1) this.photoZoomFrame = requestAnimationFrame(step);
        else target.style.removeProperty("scale");
      };
      this.photoZoomFrame = requestAnimationFrame(step);
    };

    // The wave starts from whichever campaign card the visitor is looking at:
    // the ground one while section 2 fills the view, the sky one otherwise.
    const groundCampaign = this.root.querySelector("[data-ground-campaign]");
    const waveSource = () => {
      if (!groundCampaign) return campaign;
      const bounds = groundCampaign.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2;
      return center > 0 && center < window.innerHeight ? groundCampaign : campaign;
    };

    const applyLabel = (index) => {
      label.textContent = `CHANNEL ${String(index + 1).padStart(2, "0")}`;
      dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
      pagination?.setAttribute("aria-label", `Canal ${index + 1} de ${dots.length || CHANNELS.length}`);
    };

    let busy = false;
    const go = (step, button) => {
      // Like the reference, a new switch is ignored while a reveal is still playing.
      if (busy) return;
      busy = true;
      current = (current + step + CHANNELS.length) % CHANNELS.length;
      const index = current;
      const background = backgroundFor(index);
      applyLabel(index);
      this.closeFortuneCard?.();
      this.setCardChannel(index);
      // Everything animated starts together once the new photos are decoded.
      photosReady(index).then(() => {
        this.moveSystemToChannel(index, !REDUCED_MOTION.matches);
        this.moveGroundToChannel(index, !REDUCED_MOTION.matches);
        applyPhoto(index);
        if (REDUCED_MOTION.matches || !this.channelReveal) {
          applyBackground(background);
          busy = false;
          return;
        }
        const source = waveSource() ?? button;
        zoomPhoto(source === groundCampaign ? groundImage : image);
        // From the ground card, the wave front also passes over the horizon, ground and stones.
        if (source === groundCampaign) this.channelRings?.play(background, source, () => {});
        this.channelReveal.play(background, source, () => {
          applyBackground(background);
          busy = false;
        });
      });
    };
    // Used by the GUI: editing a channel's system pose jumps straight to that channel.
    this.showChannel = (index) => {
      if (busy || index === current) return;
      current = index;
      applyLabel(current);
      applyPhoto(current);
      applyBackground(backgroundFor(current));
      this.setCardChannel(current);
      this.moveSystemToChannel(current, false);
      this.moveGroundToChannel(current, false);
    };
    this.playCardWave = (source) => {
      if (REDUCED_MOTION.matches || busy) return;
      this.channelRings?.play(backgroundFor(current), source, () => {}, { bandColor: CARD_WAVE_COLOR });
    };
    previous.addEventListener("click", () => go(-1, previous));
    next.addEventListener("click", () => go(1, next));
    this.channelReveal = createChannelReveal(this.stage);
    this.channelRings = createChannelReveal(this.stage, { ringsOnly: true });
  }


  updateStones(settings) {
    if (!this.stonesGroup) return;
    const degrees = THREE.MathUtils.degToRad;
    this.stonesGroup.position.set(Number(settings.stonesX), Number(settings.stonesY), Number(settings.stonesZ));
    this.stonesGroup.rotation.set(
      degrees(Number(settings.stonesRotX)),
      degrees(Number(settings.stonesRotY)),
      degrees(Number(settings.stonesRotZ))
    );
    this.stonesGroup.scale.setScalar(Number(settings.stonesScale));
    this.stonesGroup.traverse((node) => {
      if (!node.isMesh || !Number.isFinite(node.userData.groundY)) return;
      const planet = node.userData.planet;
      const value = (key) => Number(settings[stoneSettingKey(planet, key)]);
      const size = value("Scale");
      const x = value("X");
      const z = value("Z");
      node.scale.setScalar(node.userData.baseScale * size);
      node.position.set(
        x,
        (node.userData.halfHeight - node.userData.slotEmbed) * size - Number(settings.stonesEmbed) + value("Y"),
        z
      );
      node.rotation.set(degrees(value("RotX")), degrees(value("RotY")), degrees(value("RotZ")));
      const contact = node.userData.contact;
      if (contact) {
        contact.position.set(x, -0.004, z);
        contact.rotation.z = degrees(value("RotY"));
        contact.scale.set(node.userData.slotRadius * 2.6 * size, node.userData.slotRadius * 2.1 * size, 1);
        // Lifting a stone off the ground fades its contact shadow.
        contact.visible = value("Y") < 0.6;
        contact.material.opacity = Number(settings.ground3dContactShadows) * THREE.MathUtils.clamp(1 - value("Y") / 0.6, 0, 1);
      }
    });
  }

  // Ground palette of a channel (section 2): colors of the 3D ground and horizon, plus the
  // stone lights. Each channel has its own set in the GUI ("Tierra · canal N").
  groundPaletteFor(index, settings = this.lightingBase ?? DEFAULT_LIGHTING) {
    const value = (key) => settings[`tierra${index + 1}${key}`];
    return {
      ground3dColor: value("Ground"),
      floorColor: value("Horizon"),
      horizonGlowColor: value("Horizon"),
      stoneAmbientIntensity: Number(value("Ambient")),
      stoneLight1Color: value("Light1Color"),
      stoneLight1Intensity: Number(value("Light1Intensity")),
      stoneLight2Color: value("Light2Color"),
      stoneLight2Intensity: Number(value("Light2Intensity")),
      horizonBloomIntensity: Number(value("BloomIntensity")),
      ...Object.fromEntries(STONE_SLOTS.flatMap(({ planet }) => STONE_CHANNEL_KEYS.map((axis) => [
        stoneSettingKey(planet, axis),
        Number(value(`Stone${planet[0].toUpperCase()}${planet.slice(1)}${axis}`)),
      ]))),
    };
  }

  setGroundPalette(palette) {
    this.groundMaterial?.color.set(palette.ground3dColor);
    const uniforms = this.horizonMesh?.material?.uniforms;
    uniforms?.uFloorColor.value.set(palette.floorColor);
    uniforms?.uGlowColor.value.set(palette.horizonGlowColor);
    if (this.stoneAmbient) this.stoneAmbient.intensity = palette.stoneAmbientIntensity;
    if (this.stoneLight1) {
      this.stoneLight1.color.set(palette.stoneLight1Color);
      this.stoneLight1.intensity = palette.stoneLight1Intensity;
    }
    if (this.stoneLight2) {
      this.stoneLight2.color.set(palette.stoneLight2Color);
      this.stoneLight2.intensity = palette.stoneLight2Intensity;
    }
    uniforms && (uniforms.uBloomIntensity.value = palette.horizonBloomIntensity);
    this.root.style.setProperty("--bloom-intensity", palette.horizonBloomIntensity);
    this.updateStones({ ...(this.lightingBase ?? DEFAULT_LIGHTING), ...palette });
  }

  // Blends colors and light intensities toward a channel's palette over the reveal wave.
  moveGroundToChannel(index, animate) {
    const target = this.groundPaletteFor(index);
    cancelAnimationFrame(this.groundPaletteFrame);
    this.groundPaletteFrame = 0;
    const from = this.currentGroundPalette ?? target;
    this.currentGroundPalette = target;
    if (!animate) {
      this.setGroundPalette(target);
      return;
    }
    const start = performance.now();
    const step = (now) => {
      const t = easeOutCubic(Math.min((now - start) / CHANNEL_REVEAL_MS, 1));
      const blended = Object.fromEntries(Object.keys(target).map((key) => [
        key,
        typeof target[key] === "number"
          ? from[key] + (target[key] - from[key]) * t
          : new THREE.Color(from[key]).lerp(new THREE.Color(target[key]), t),
      ]));
      this.currentGroundPalette = t < 1 ? blended : target;
      this.setGroundPalette(blended);
      this.groundPaletteFrame = t < 1 ? requestAnimationFrame(step) : 0;
    };
    this.groundPaletteFrame = requestAnimationFrame(step);
  }

  // Desktop-only badge that trails the pointer over interactive pieces ([data-cursor-label]),
  // naming what a click does. Follows 1:1 and may spill outside the hovered element.
  setupCursorBadge() {
    const targets = document.querySelectorAll("[data-cursor-label]");
    // A click on a campaign card jumps to the section it announces; drags never reach here.
    document.querySelectorAll("[data-scroll-to]").forEach((element) => {
      element.addEventListener("click", () => {
        document.querySelector(element.dataset.scrollTo)?.scrollIntoView({ behavior: REDUCED_MOTION.matches ? "auto" : "smooth", block: "start" });
      });
    });
    if (!targets.length) return;

    const badge = document.createElement("div");
    badge.className = "altar-cursor-badge";
    badge.setAttribute("aria-hidden", "true");
    badge.innerHTML = `<span class="altar-cursor-badge__label"></span><span class="altar-cursor-badge__arrow"><svg class="altar-cursor-badge__go" viewBox="0 0 11 11" fill="currentColor"><path d="M1 5h7L5 2l1-1 4.5 4.5L6 10l-1-1 3-3H1z"/></svg><svg class="altar-cursor-badge__move" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 1v9M1 5.5h9M4 2.5 5.5 1 7 2.5M4 8.5 5.5 10 7 8.5M2.5 4 1 5.5 2.5 7M8.5 4 10 5.5 8.5 7"/></svg></span>`;
    document.body.append(badge);
    const label = badge.querySelector(".altar-cursor-badge__label");

    const desktop = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const pointer = { x: null, y: null };
    const OFFSET_X = 20;
    let active = null;
    let frame = 0;
    let stale = false;

    // Pressed targets (the open card) offer a way back, so their arrow points left.
    const isBack = (target) => target.getAttribute("aria-pressed") === "true" && Boolean(target.dataset.cursorLabelPressed);
    const labelFor = (target) => (isBack(target) ? target.dataset.cursorLabelPressed : target.dataset.cursorLabel);
    const hide = () => {
      active = null;
      badge.classList.remove("is-active");
    };
    const update = () => {
      frame = 0;
      if (stale || !desktop.matches || pointer.x === null) return hide();
      const target = document.elementFromPoint(pointer.x, pointer.y)?.closest("[data-cursor-label]");
      if (!target || !target.closest(".altar-solar, .altar-page-section") || target.closest(".is-dragging")) return hide();
      const text = labelFor(target);
      if (label.textContent !== text) label.textContent = text;
      badge.classList.toggle("is-back", isBack(target));
      badge.classList.toggle("is-move", target.dataset.cursorIcon === "move");
      if (target !== active) {
        active = target;
        badge.classList.add("is-active");
      }
      // Free to leave the element; only kept on screen.
      const width = badge.offsetWidth;
      const height = badge.offsetHeight;
      const x = Math.min(pointer.x + OFFSET_X, window.innerWidth - width - 4);
      const y = THREE.MathUtils.clamp(pointer.y - height / 2, 4, window.innerHeight - height - 4);
      badge.style.transform = `translate(${x}px, ${y}px)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const syncEnabled = () => {
      badge.classList.toggle("is-enabled", desktop.matches);
      if (!desktop.matches) hide();
    };

    document.addEventListener("pointermove", (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      stale = false;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      schedule();
    }, { passive: true, capture: true });
    // Content scrolling under a still pointer can bring a target in or out.
    window.addEventListener("scroll", schedule, { passive: true });
    document.addEventListener("pointerleave", hide);
    // A click can move its target away (the card flies to the center), so drop the badge
    // and let the next pointer move decide again what sits under the cursor.
    document.addEventListener("click", () => {
      stale = true;
      hide();
    }, true);
    desktop.addEventListener?.("change", syncEnabled);
    syncEnabled();
  }

  setupDraggables() {
    makeDraggable(this.root.querySelector(".altar-solar__campaign"));
    makeDraggable(this.root.querySelector("[data-ground-campaign]"));
    // Touch keeps scrolling the page over the card; mouse and pen can drag it.
    makeDraggable(this.root.querySelector(".altar-solar__fortune-cards"), { allowTouch: false });
    const player = this.root.querySelector(".altar-solar__player");
    makeDraggable(player, { handle: player?.querySelector("[data-drag-handle]") });
  }

  setupSpotifyPlayer() {
    const button = this.root.querySelector(".altar-solar__open-player");
    const player = this.root.querySelector(".altar-solar__player");
    const label = button?.querySelector(".altar-solar__player-label");
    if (!button || !player) return;

    let slot = null;
    const embedUrl = () => spotifyEmbedUrl(slot?.url || button.dataset.spotifyUrl);

    // The label shows the visitor's local time and the moment of the day it belongs to;
    // each moment has its own track.
    const update = () => {
      const now = new Date();
      const next = playerSlotFor(now.getHours());
      if (label) {
        const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).toUpperCase();
        label.textContent = `[  ${next.name} ]  ${time}`;
      }
      if (next !== slot) {
        slot = next;
        const iframe = player.querySelector("iframe");
        if (iframe && embedUrl()) iframe.src = embedUrl();
      }
      clearTimeout(this.playerClockTimer);
      this.playerClockTimer = setTimeout(update, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
    };
    update();

    const setOpen = (open) => {
      // The embed is only created on first open so Spotify's scripts never slow the initial load.
      if (open && !player.querySelector("iframe") && embedUrl()) {
        const iframe = document.createElement("iframe");
        iframe.src = embedUrl();
        iframe.title = "Reproductor de Spotify";
        iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        iframe.loading = "lazy";
        player.appendChild(iframe);
      }
      player.classList.toggle("is-open", open);
      player.setAttribute("aria-hidden", String(!open));
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Cerrar reproductor" : "Abrir reproductor");
    };

    button.addEventListener("click", () => setOpen(!player.classList.contains("is-open")));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && player.classList.contains("is-open")) setOpen(false);
    });
  }


  setupFortuneFlip() {
    const flip = this.root.querySelector("[data-fortune-flip]");
    if (!flip) return;
    const front = flip.querySelector(".altar-solar__fortune-face--front");
    const back = flip.querySelector(".altar-solar__fortune-face--back");

    const cardsContainer = flip.closest(".altar-solar__fortune-cards");

    // Flipped cards travel to the viewport center and grow; flipping back returns them to their spot.
    const setFocused = (focused) => {
      if (!cardsContainer || focused === cardsContainer.classList.contains("is-focused")) return;
      clearTimeout(this.fortuneFocusTimer);
      cardsContainer.classList.add("is-animating-focus");
      this.fortuneFocusTimer = setTimeout(() => cardsContainer.classList.remove("is-animating-focus"), 1000);
      // Campaign cards head to their exact spot for each state (top right while open, home after).
      const campaigns = this.root.querySelectorAll(".altar-solar__campaign, [data-ground-campaign]");
      campaigns.forEach(resetDrag);
      if (!focused) {
        // The fortune card flies home too, not back to wherever it had been dragged.
        resetDrag(cardsContainer);
        cardsContainer.classList.remove("is-focused");
        this.root.classList.remove("is-card-open");
        ["--focus-x", "--focus-y", "--card-scale"].forEach((name) => cardsContainer.style.removeProperty(name));
        this.fortuneFocusScale = 0;
        this.hideFortuneShare?.();
        return;
      }
      const settings = this.effectSettings ?? DEFAULT_LIGHTING;
      flip.style.setProperty("--tilt-x", "0deg");
      flip.style.setProperty("--tilt-y", "0deg");
      // The card scales from its bottom-left corner, which stays put; measure it and aim the center.
      const bounds = flip.getBoundingClientRect();
      const visibleScale = bounds.width / 236;
      const cssScale = visibleScale / Number(settings.cardScale);
      const target = Math.min(Number(settings.cardFocusScale), (window.innerHeight - 160) / 358, (window.innerWidth - 24) / 236);
      const width = 236 * target;
      const height = 358 * target;
      cardsContainer.style.setProperty("--focus-x", `${window.innerWidth / 2 - width / 2 - bounds.left}px`);
      cardsContainer.style.setProperty("--focus-y", `${window.innerHeight / 2 + height / 2 - bounds.bottom}px`);
      cardsContainer.style.setProperty("--card-scale", target / cssScale);
      cardsContainer.classList.add("is-focused");
      // The sky campaign card steps aside while the fortune card is open.
      this.root.classList.add("is-card-open");
      this.fortuneFocusScale = target;
      this.showFortuneShare?.();
    };

    const setFlipped = (flipped) => {
      clearTimeout(this.fortuneReturnTimer);
      // Once the card is face down again, the next phrase is drawn while nobody can see it.
      if (!flipped && flip.classList.contains("is-flipped")) {
        const flipMs = parseFloat(getComputedStyle(flip).getPropertyValue("--card-flip-duration")) || 1150;
        this.prepareNextFortunePhrase(flipMs + 100);
      }
      setFocused(flipped);
      flip.classList.toggle("is-flipped", flipped);
      flip.setAttribute("aria-pressed", String(flipped));
      front?.setAttribute("aria-hidden", String(flipped));
      back?.setAttribute("aria-hidden", String(!flipped));
      if (!flipped) return;
      const settings = this.effectSettings ?? DEFAULT_LIGHTING;
      const seconds = Number(settings.cardReturnSeconds);
      if (seconds > 0) this.fortuneReturnTimer = setTimeout(() => setFlipped(false), seconds * 1000);
    };
    // Lets other features (e.g. a channel switch) send an open card back to its spot.
    this.closeFortuneCard = () => {
      if (flip.classList.contains("is-flipped")) setFlipped(false);
    };

    const toggle = () => {
      // The inviting frame only matters until the first touch.
      flip.closest(".altar-solar__fortune-cards")?.classList.add("is-touched");
      const opening = !flip.classList.contains("is-flipped");
      // Revealing the message sends a pulse of light out from the card.
      if (opening) {
        this.revealFortunePhrase();
        this.playCardWave?.(flip);
      }
      setFlipped(opening);
    };

    flip.addEventListener("pointermove", (event) => {
      if (REDUCED_MOTION.matches) return;
      const bounds = flip.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      const tilt = Number((this.effectSettings ?? DEFAULT_LIGHTING).foilTilt);
      flip.style.setProperty("--tilt-x", `${(-y * 2 * tilt).toFixed(2)}deg`);
      flip.style.setProperty("--tilt-y", `${(x * 2 * tilt).toFixed(2)}deg`);
    }, { passive: true });
    flip.addEventListener("pointerleave", () => {
      flip.style.setProperty("--tilt-x", "0deg");
      flip.style.setProperty("--tilt-y", "0deg");
    }, { passive: true });

    flip.addEventListener("click", toggle);
    flip.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggle();
    });
    const cards = this.root.querySelector(".altar-solar__fortune-cards");
    const revealButton = this.root.querySelector(".altar-solar__reveal-card");
    const setOpen = (open) => {
      this.fortuneOpen = open;
      cards?.classList.toggle("is-open", open);
      cards?.setAttribute("aria-hidden", String(!open));
      flip.tabIndex = open ? 0 : -1;
      revealButton?.setAttribute("aria-expanded", String(open));
      revealButton?.setAttribute("aria-label", open ? "Ocultar carta" : "Revelar carta");
      if (!open) setFlipped(false);
    };
    revealButton?.addEventListener("click", () => setOpen(!this.fortuneOpen));
    // The card starts open (markup ships with .is-open) so the CTA is visible right away.
    setOpen(Boolean(cards?.classList.contains("is-open")));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.fortuneOpen) setOpen(false);
    });
  }

  // "Compartir" next to the open card: a 1080 × 1920 story of the live sky behind it, the card and the handle.
  // The image is composed as soon as the card has landed, so the tap can open the share sheet right away
  // (Safari only allows it straight from the tap). Phones get the share sheet, desktops a download.
  setupFortuneShare() {
    const panel = this.root.querySelector("[data-fortune-share]");
    const button = panel?.querySelector("[data-fortune-share-button]");
    const cards = panel?.closest(".altar-solar__fortune-cards");
    if (!panel || !button || !cards) return;
    let pending = null;

    const reset = () => {
      clearTimeout(this.fortuneShareTimer);
      pending = null;
      this.fortuneShareBlob = null;
    };
    const capture = () => (pending ??= this.composeFortuneShare(panel.dataset.shareHandle || "")
      .then((blob) => (this.fortuneShareBlob = blob))
      .catch(() => null));

    this.showFortuneShare = () => {
      reset();
      cards.classList.remove("is-share-dismissed");
      panel.setAttribute("aria-hidden", "false");
      button.tabIndex = 0;
      // After the flip, once the card shows its phrase and nothing is moving.
      const flip = cards.querySelector("[data-fortune-flip]");
      const flipMs = parseFloat(getComputedStyle(flip).getPropertyValue("--card-flip-duration")) || 1150;
      this.fortuneShareTimer = setTimeout(capture, flipMs + 150);
    };
    this.hideFortuneShare = () => {
      reset();
      panel.setAttribute("aria-hidden", "true");
      button.tabIndex = -1;
    };
    // Dragging the open card dismisses the message for this opening.
    cards.addEventListener(DRAG_START_EVENT, () => {
      if (!cards.classList.contains("is-focused")) return;
      cards.classList.add("is-share-dismissed");
      panel.setAttribute("aria-hidden", "true");
      button.tabIndex = -1;
    });
    // The panel sits inside the draggable card container; its taps are not drags.
    panel.addEventListener("pointerdown", (event) => event.stopPropagation());

    button.addEventListener("click", async () => {
      button.setAttribute("aria-busy", "true");
      const blob = this.fortuneShareBlob ?? (await capture());
      button.removeAttribute("aria-busy");
      if (!blob) return;
      const file = new File([blob], SHARE_FILE_NAME, { type: blob.type });
      if (window.matchMedia("(pointer: coarse)").matches && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file] });
          return;
        } catch (error) {
          if (error?.name === "AbortError") return;
        }
      }
      const url = URL.createObjectURL(blob);
      const link = Object.assign(document.createElement("a"), { href: url, download: SHARE_FILE_NAME });
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }

  // Rebuilds the screen behind the open card in a 9:16 crop centered on it: CSS sky color and glows,
  // the live 3D layer (planets wherever they are now), the film grain, then the card in high resolution.
  async composeFortuneShare(handle) {
    const effect = this.foilCards?.find((item) => item.card.classList.contains("altar-solar__fortune-face--back"));
    if (!effect || !this.renderer) return null;
    await document.fonts?.load(`300 ${SHARE_HANDLE_SIZE}px Inter`).catch(() => {});

    const output = document.createElement("canvas");
    output.width = SHARE_WIDTH;
    output.height = SHARE_HEIGHT;
    const context = output.getContext("2d");

    // The open card sits in the middle of the viewport; take the tallest 9:16 window around it.
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;
    let cropHeight = viewHeight;
    let cropWidth = (cropHeight * SHARE_WIDTH) / SHARE_HEIGHT;
    if (cropWidth > viewWidth) {
      cropWidth = viewWidth;
      cropHeight = (cropWidth * SHARE_HEIGHT) / SHARE_WIDTH;
    }
    const cropX = (viewWidth - cropWidth) / 2;
    const cropY = (viewHeight - cropHeight) / 2;
    const scale = SHARE_WIDTH / cropWidth;
    const rootStyle = getComputedStyle(this.root);

    context.save();
    context.setTransform(scale, 0, 0, scale, -cropX * scale, -cropY * scale);
    // Same backdrop blur the hero applies over sky and planets (filter radii are in output pixels).
    const blur = parseFloat(rootStyle.getPropertyValue("--effect-blur")) || 0;
    if (blur > 0 && "filter" in context) context.filter = `blur(${blur * scale}px)`;
    const bleed = blur * 3;
    context.fillStyle = rootStyle.backgroundColor;
    context.fillRect(cropX - bleed, cropY - bleed, cropWidth + bleed * 2, cropHeight + bleed * 2);
    this.root.querySelectorAll(".altar-solar__glow").forEach((glow) => {
      const bounds = glow.getBoundingClientRect();
      const style = getComputedStyle(glow);
      const [r, g, b] = hexToRgbArray(style.getPropertyValue("--c").trim()).map((channel) => Math.round(channel * 255));
      const radius = bounds.width / 2;
      const x = bounds.left + radius;
      const y = bounds.top + bounds.height / 2;
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      SKY_GLOW_STOPS.forEach(([offset, alpha]) => gradient.addColorStop(offset, `rgb(${r} ${g} ${b} / ${alpha})`));
      context.globalAlpha = Number(style.opacity) || 0;
      context.fillStyle = gradient;
      context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    });
    context.globalAlpha = 1;
    // A WebGL canvas can only be read in the same task it was drawn, so draw a fresh frame first.
    this.drawScene();
    const canvasBounds = this.canvas.getBoundingClientRect();
    context.drawImage(this.canvas, canvasBounds.left, canvasBounds.top, canvasBounds.width, canvasBounds.height);
    context.restore();

    // Film grain, like the hero's SVG overlay.
    context.save();
    context.globalCompositeOperation = "overlay";
    context.globalAlpha = parseFloat(rootStyle.getPropertyValue("--grain-opacity")) || DEFAULT_LIGHTING.grainOpacity;
    context.fillStyle = context.createPattern(grainTile(), "repeat");
    context.fillRect(0, 0, SHARE_WIDTH, SHARE_HEIGHT);
    context.restore();

    // The card, re-rendered at the story size with its current phrase, channel and light.
    const { renderer, scene, camera } = effect;
    const pixelRatio = renderer.getPixelRatio();
    const cardHeight = (SHARE_CARD_WIDTH * 358) / 236;
    renderer.setPixelRatio(SHARE_CARD_WIDTH / 236);
    renderer.setSize(236, 358, false);
    renderer.render(scene, camera);
    context.drawImage(renderer.domElement, (SHARE_WIDTH - SHARE_CARD_WIDTH) / 2, (SHARE_HEIGHT - cardHeight) / 2, SHARE_CARD_WIDTH, cardHeight);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(236, 358, false);
    renderer.render(scene, camera);

    if (handle) {
      context.font = `300 ${SHARE_HANDLE_SIZE}px Inter, Arial, Helvetica, sans-serif`;
      if ("letterSpacing" in context) context.letterSpacing = "-0.33px";
      context.fillStyle = "#fff3a9";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(handle.toLocaleUpperCase("es"), SHARE_WIDTH / 2, SHARE_HANDLE_Y);
    }

    return new Promise((resolve) => output.toBlob(resolve, "image/jpeg", 0.92));
  }

  // Swaps both card faces to a channel's artwork; faces without a channel variant keep channel 1.
  setCardChannel(index) {
    const suffix = index + 1;
    this.cardChannelIndex = index;
    this.root.querySelectorAll("[data-foil-card]").forEach((card) => {
      const baseUrl = card.getAttribute(`data-channel-base-${suffix}`) || card.dataset.foilBase;
      const foilUrl = card.getAttribute(`data-channel-map-${suffix}`) || card.dataset.foilMap;
      const fallbackImage = card.querySelector(":scope > img");
      if (fallbackImage && baseUrl) fallbackImage.src = baseUrl;
      const frameUrl = messageFrameUrl(card, index);
      const message = card.querySelector(".altar-solar__fortune-copy p");
      if (message) {
        message.dataset.defaultMessage ??= message.textContent;
        message.textContent = frameUrl && this.messageMap
          ? this.messageMap.phrase
          : card.getAttribute(`data-channel-message-${suffix}`) || message.dataset.defaultMessage;
      }
      const effect = this.foilCards?.find((item) => item.card === card);
      // A message face drawn over a frame is keyed by the frame; the phrase changes inside the same texture.
      const mapKey = frameUrl || foilUrl;
      if (!effect || (effect.baseUrl === baseUrl && effect.foilUrl === mapKey)) return;
      effect.baseUrl = baseUrl;
      effect.foilUrl = mapKey;
      Promise.all([this.loadFoilTexture(baseUrl), this.loadCardMap(card, index, foilUrl)]).then(([baseMap, foilMap]) => {
        if (effect.baseUrl !== baseUrl || effect.foilUrl !== mapKey) return;
        effect.material.uniforms.uBaseMap.value = baseMap;
        effect.material.uniforms.uFoilMap.value = foilMap;
        effect.maskSize.set(foilMap.image.width, foilMap.image.height);
      });
    });
  }

  // Message faces with a textless frame get their relief map drawn here (frame + a random phrase),
  // so adding phrases needs no new artwork; every other face loads its map image as before.
  loadCardMap(card, index, foilUrl) {
    const frameUrl = messageFrameUrl(card, index);
    if (!frameUrl) return this.loadFoilTexture(foilUrl);
    const map = (this.messageMap ??= this.createMessageMap(card));
    map.requested = frameUrl;
    return Promise.all([map.fontReady, loadImage(frameUrl)]).then(([, frame]) => {
      // A quicker switch already asked for another channel's frame.
      if (map.requested !== frameUrl) return map.texture;
      map.frame = frame;
      map.top = MESSAGE_TOPS[index] ?? MESSAGE_TOPS[0];
      this.drawMessageMap();
      return map.texture;
    });
  }

  createMessageMap(card) {
    const canvas = document.createElement("canvas");
    canvas.width = MESSAGE_MAP_WIDTH;
    canvas.height = MESSAGE_MAP_HEIGHT;
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.NoColorSpace;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    const fontUrl = card.dataset.fortuneFont;
    const fontReady = fontUrl && window.FontFace
      ? new FontFace(MESSAGE_FONT_FAMILY, `url("${fontUrl}")`).load().then((font) => document.fonts.add(font)).catch(() => {})
      : Promise.resolve();
    const message = card.querySelector(".altar-solar__fortune-copy p");
    const map = { canvas, texture, fontReady, frame: null, message, phrase: pickFortunePhrase() };
    if (message) message.textContent = map.phrase;
    return map;
  }

  drawMessageMap() {
    const map = this.messageMap;
    if (!map?.frame) return;
    drawFortuneMap(map.canvas, map.frame, map.phrase, map.top);
    map.texture.needsUpdate = true;
  }

  // Every opening reveals a different phrase. It is normally drawn ahead of time (see
  // prepareNextFortunePhrase), so opening doesn't redraw and re-upload the map mid-animation.
  revealFortunePhrase() {
    const map = this.messageMap;
    if (!map) return;
    clearTimeout(this.fortunePhraseTimer);
    // Reopened before the next phrase was ready: pick it now.
    if (map.revealed && !map.prepared) this.setFortunePhrase(pickFortunePhrase(map.phrase));
    map.revealed = true;
    map.prepared = false;
    markFortuneSeen(map.phrase);
  }

  prepareNextFortunePhrase(delay) {
    const map = this.messageMap;
    clearTimeout(this.fortunePhraseTimer);
    if (!map?.revealed) return;
    this.fortunePhraseTimer = setTimeout(() => {
      this.setFortunePhrase(pickFortunePhrase(map.phrase));
      map.prepared = true;
    }, delay);
  }

  setFortunePhrase(phrase) {
    const map = this.messageMap;
    map.phrase = phrase;
    if (map.message && messageFrameUrl(map.message.closest("[data-foil-card]"), this.cardChannelIndex ?? 0)) {
      map.message.textContent = phrase;
    }
    this.drawMessageMap();
  }

  // Fetches a channel's card textures early so the first switch to it doesn't wait on the network.
  preloadCardChannel(index) {
    const suffix = index + 1;
    this.root.querySelectorAll("[data-foil-card]").forEach((card) => {
      [card.getAttribute(`data-channel-base-${suffix}`), card.getAttribute(`data-channel-map-${suffix}`)]
        .filter(Boolean)
        .forEach((url) => this.loadFoilTexture(url).catch(() => {}));
      // Message frames are drawn into the shared canvas later; warming the image cache is enough.
      const frameUrl = messageFrameUrl(card, index);
      if (frameUrl) loadImage(frameUrl).catch(() => {});
    });
  }

  loadFoilTexture(url) {
    this.foilTextureCache ??= new Map();
    if (!this.foilTextureCache.has(url)) this.foilTextureCache.set(url, this.fetchFoilTexture(url));
    return this.foilTextureCache.get(url);
  }

  fetchFoilTexture(url) {
    return new Promise((resolve, reject) => {
      new THREE.TextureLoader().load(url, (texture) => {
        texture.colorSpace = THREE.NoColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = true;
        resolve(texture);
      }, undefined, reject);
    });
  }

  renderFoilCards(time) {
    if (!this.foilCards?.length || !this.fortuneOpen) return;
    const settings = this.effectSettings ?? DEFAULT_LIGHTING;
    const animate = !REDUCED_MOTION.matches;
    const seconds = animate ? time * 0.001 : 0;
    const scrollRange = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const scrollOffset = (window.scrollY / scrollRange) * 4 * Number(settings.foilScrollHue);

    // The mouse only drives the hue, eased a little every frame like the reference.
    this.foilMouse ??= new THREE.Vector2();
    const ease = animate ? Number(settings.foilMouseEase) : 1;
    this.foilMouse.x += (this.pointer.x - this.foilMouse.x) * ease;
    this.foilMouse.y += (-this.pointer.y - this.foilMouse.y) * ease;

    const cardScale = Math.max(Number(settings.cardScale), this.fortuneFocusScale || 0, 1);
    const pixelRatio = Math.min((window.devicePixelRatio || 1) * cardScale, 4);
    this.foilCards.forEach((effect) => {
      if (effect.renderer.getPixelRatio() !== pixelRatio) {
        effect.renderer.setPixelRatio(pixelRatio);
        effect.renderer.setSize(236, 358, false);
      }
      const uniforms = effect.material.uniforms;
      Object.entries(FOIL_UNIFORM_SETTINGS).forEach(([key, name]) => {
        uniforms[name].value = Number(settings[key]);
      });
      Object.entries(FOIL_COLOR_SETTINGS).forEach(([key, name]) => {
        hexToVector3(settings[key], uniforms[name].value);
      });
      uniforms.uLight1Position.value.set(Number(settings.foilLight1X), Number(settings.foilLight1Y), Number(settings.foilLight1Z));
      uniforms.uLight2Position.value.set(Number(settings.foilLight2X), Number(settings.foilLight2Y), Number(settings.foilLight2Z));
      uniforms.uBevelSize.value.set(1, 1).multiplyScalar(Number(settings.foilBevelSize)).divide(effect.maskSize);
      uniforms.uZoneCenter.value.set(Number(settings.foilZoneX), Number(settings.foilZoneY));
      uniforms.uZoneScale.value = Number(settings.foilZoneScale);
      uniforms.uMouse.value.copy(this.foilMouse);
      uniforms.uTime.value = seconds;
      uniforms.uScrollOffset.value = scrollOffset;
      effect.renderer.render(effect.scene, effect.camera);
    });
  }

  bindEvents() {
    window.addEventListener("pointermove", (event) => {
      this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, (event.clientY / window.innerHeight) * 2 - 1);
    }, { passive: true });
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.stage);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
    }, { rootMargin: "20%" });
    this.intersectionObserver.observe(this.root);
    this.resize();
  }

  setupSectionGuide() {
    this.sectionGuide = document.createElement("div");
    this.sectionGuide.className = "altar-tramos";
    this.sectionGuide.hidden = true;
    this.sectionGuide.setAttribute("aria-hidden", "true");
    this.root.appendChild(this.sectionGuide);
    window.addEventListener("scroll", () => this.updateTramoHud(), { passive: true });
    this.updateSectionGuide();
  }

  updateSectionGuide() {
    if (!this.sectionGuide) return;
    const tramos = [
      { name: "Sistema solar", element: this.stage },
      { name: "Cielo y horizonte", element: this.root.querySelector(".altar-solar__earth") },
      { name: "Colección", element: this.root.querySelector(".altar-solar__ground") },
      { name: "Cierre", element: this.root.querySelector(".altar-closing") },
    ].filter(({ element }) => element);
    const tops = tramos.map(({ element }) => element.offsetTop);
    const ends = [...tops.slice(1), this.root.offsetHeight];
    this.tramoBounds = tramos.map(({ name }, index) => ({ name, top: tops[index], end: ends[index] }));

    this.sectionGuide.innerHTML = this.tramoBounds.map(({ name, top, end }, index) => `
      <div class="altar-tramos__item${index % 2 ? " is-alt" : ""}" style="top:${top}px;height:${end - top}px">
        <span class="altar-tramos__number">${index + 1}</span>
        <span class="altar-tramos__label">Tramo ${index + 1} · ${name} · ${Math.round(end - top)}px</span>
      </div>`).join("") + '<div class="altar-tramos__hud" data-tramo-hud></div>';
    this.tramoHud = this.sectionGuide.querySelector("[data-tramo-hud]");
    this.updateTramoHud();
  }

  updateTramoHud() {
    if (!this.tramoHud || this.sectionGuide.hidden) return;
    const rootTop = this.root.getBoundingClientRect().top;
    const position = window.innerHeight / 2 - rootTop;
    const index = this.tramoBounds.findIndex(({ end }) => position < end);
    const tramo = this.tramoBounds[index];
    if (!tramo) {
      this.tramoHud.textContent = "Fuera de tramos";
      return;
    }
    const progress = Math.round(THREE.MathUtils.clamp((position - tramo.top) / (tramo.end - tramo.top), 0, 1) * 100);
    this.tramoHud.textContent = `Tramo ${index + 1} de ${this.tramoBounds.length} · ${tramo.name} · ${progress}%`;
  }

  resize() {
    this.updateSectionGuide();
    const { width, height } = this.stage.getBoundingClientRect();
    if (!width || !height || !this.renderer) return;
    this.renderer.setPixelRatio(clampDpr());
    this.renderer.setSize(width, height, false);
    this.horizonMaterial?.uniforms.uResolution.value.set(width, height);
    // The stage spans sections 1 and 2; frame the scene on the first screen and extend the view downward.
    const screenHeight = height / 2;
    this.camera.aspect = width / screenHeight;
    this.camera.setViewOffset(width, screenHeight, 0, 0, width, height);
    this.camera.updateProjectionMatrix();
  }

  render = (time = 0) => {
    this.animationFrame = requestAnimationFrame(this.render);
    this.timer.update(time);
    const delta = Math.min(this.timer.getDelta(), 0.1);
    this.renderFoilCards(time);
    if (!this.visible || !this.renderer) return;
    this.updateStars(REDUCED_MOTION.matches ? 0 : this.timer.getElapsed(), REDUCED_MOTION.matches ? 0 : delta);
    this.updateSystem(this.timer.getElapsed(), delta);
    if (!REDUCED_MOTION.matches) this.updateShootingStars(this.timer.getElapsed(), delta);
    if (!REDUCED_MOTION.matches) {
      this.updateOrbits(delta);
      this.grainLayers.forEach((layer) => {
        const refreshRate = Math.max(1, Number(this.effectSettings?.grainSpeed ?? DEFAULT_LIGHTING.grainSpeed));
        if (time - layer.lastUpdate >= 1000 / refreshRate) {
          layer.seed = (layer.seed % 97) + 1;
          layer.node.setAttribute("seed", layer.seed);
          layer.lastUpdate = time;
        }
      });
    }
    this.drawScene();
  };

  // One full frame of the 3D layer (sky scene, horizon, ground stones). Also called right before the
  // share image reads the canvas, which is only valid in the same task as the draw.
  drawScene() {
    this.camera.layers.set(0);
    this.renderer.autoClear = true;
    this.renderer.render(this.scene, this.camera);
    this.renderer.autoClear = false;
    this.renderer.clearDepth();
    if (this.horizonMesh?.visible) this.renderer.render(this.horizonScene, this.horizonCamera);
    if (this.stonesReady) {
      const toneMapping = this.renderer.toneMapping;
      const exposure = this.renderer.toneMappingExposure;
      // The stage spans sections 1 and 2; the physical ground and stones belong to section 2 only.
      // setScissor takes CSS pixels with the origin at the bottom-left, so section 2 is the lower half.
      this.renderSize ??= new THREE.Vector2();
      this.renderer.getSize(this.renderSize);
      this.renderer.setScissorTest(true);
      this.renderer.setScissor(0, 0, this.renderSize.x, Math.floor(this.renderSize.y / 2));
      this.renderer.clearDepth();
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = Number(this.effectSettings?.ground3dExposure ?? DEFAULT_LIGHTING.ground3dExposure);
      this.camera.layers.set(STONE_LAYER);
      this.renderer.render(this.scene, this.camera);
      this.camera.layers.set(0);
      this.renderer.toneMapping = toneMapping;
      this.renderer.toneMappingExposure = exposure;
      this.renderer.setScissorTest(false);
    }
    this.renderer.autoClear = true;
  }
}

const DRAG_THRESHOLD = 4;
const DRAG_VIEWPORT_MARGIN = 8;

// Lets an element be moved with the pointer through --drag-x/--drag-y (applied via CSS `translate`),
// so it keeps its sticky positioning and open/close animations. A drag never triggers a click.
const DRAG_RESET_EVENT = "altar:drag-reset";
const DRAG_START_EVENT = "altar:drag-start";
const resetDrag = (element) => element?.dispatchEvent(new CustomEvent(DRAG_RESET_EVENT));

function makeDraggable(element, { handle = element, allowTouch = true } = {}) {
  if (!element || !handle) return;
  const offset = { x: 0, y: 0 };
  let drag = null;
  let suppressClick = false;

  // Native image/text dragging would cancel the pointer stream mid-gesture.
  handle.addEventListener("dragstart", (event) => event.preventDefault());
  handle.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || (!allowTouch && event.pointerType === "touch")) return;
    const bounds = element.getBoundingClientRect();
    drag = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
      // How far the element can travel before leaving the viewport.
      minX: DRAG_VIEWPORT_MARGIN - bounds.left,
      maxX: window.innerWidth - DRAG_VIEWPORT_MARGIN - bounds.right,
      minY: DRAG_VIEWPORT_MARGIN - bounds.top,
      maxY: window.innerHeight - DRAG_VIEWPORT_MARGIN - bounds.bottom,
      moved: false,
    };
  });

  window.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (!drag.moved) {
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      drag.moved = true;
      element.classList.add("is-dragging");
      element.dispatchEvent(new CustomEvent(DRAG_START_EVENT));
      handle.setPointerCapture?.(event.pointerId);
    }
    offset.x = drag.originX + THREE.MathUtils.clamp(dx, drag.minX, drag.maxX);
    offset.y = drag.originY + THREE.MathUtils.clamp(dy, drag.minY, drag.maxY);
    element.style.setProperty("--drag-x", `${offset.x}px`);
    element.style.setProperty("--drag-y", `${offset.y}px`);
  });

  const endDrag = (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    suppressClick = drag.moved;
    // The browser may not dispatch a click after a drag; never let the flag leak into the next real click.
    if (suppressClick) setTimeout(() => { suppressClick = false; }, 0);
    element.classList.remove("is-dragging");
    drag = null;
  };
  window.addEventListener("pointerup", endDrag);
  window.addEventListener("pointercancel", endDrag);

  // Automatic moves (opening/closing the fortune card) send the element back to its home spot,
  // dropping whatever offset the visitor dragged it by; the CSS transition carries it there.
  element.addEventListener(DRAG_RESET_EVENT, () => {
    drag = null;
    offset.x = 0;
    offset.y = 0;
    element.classList.remove("is-dragging");
    element.style.removeProperty("--drag-x");
    element.style.removeProperty("--drag-y");
  });

  element.addEventListener("click", (event) => {
    if (!suppressClick) return;
    suppressClick = false;
    event.preventDefault();
    event.stopPropagation();
  }, true);
}

// Hero channels. Channel 1 uses the GUI/default background; the rest define their own.
// Glow colors/intensities mirror the Figma "fondo" frames (same shapes, blurred 300px).
const CHANNELS = [
  { background: null },
  {
    // Figma draws these shapes at full opacity (vs 30% / 50% in the green channel), hence the higher intensities.
    background: {
      space: "#09091f",
      glows: { rose: ["#686f8d", 3.33], cyan: ["#666d8c", 2], teal: ["#4fc1b5", 1] },
    },
  },
  {
    background: {
      space: "#2b4544",
      glows: { rose: ["#c8909a", 1], cyan: ["#71d4ff", 1], teal: ["#4fc1b5", 1] },
    },
  },
  {
    background: {
      space: "#193a4f",
      glows: { rose: ["#236679", 3.33], cyan: ["#4d6976", 2], teal: ["#4fc1b5", 1] },
    },
  },
];

const CHANNEL_REVEAL_MS = 2100;
const CHANNEL_ZOOM_MS = 2200;
const CARD_WAVE_COLOR = "#f6e9a5";

// Fortune card message: the relief map is the channel's textless frame plus one of these phrases,
// drawn at 3× the 236 × 358 card. Layout follows Figma's "Fortune message" text block.
const FORTUNE_PHRASES = [
  "Alguien que creías lejano volverá a acercarse. Esta vez lo mirarás diferente.",
  "Una conversación inesperada cambiará la forma en que mirás a alguien cercano.",
  "Alguien piensa en vos más de lo que imaginás. Pronto encontrarás una señal.",
  "Un encuentro que parece casual llegará justo cuando habías dejado de buscarlo.",
  "Una persona nueva aparecerá sin aviso. Lo extraño será sentir que ya la conocías.",
  "Algo que no dijiste todavía sigue esperando su momento. Pronto vas a encontrarlo.",
  "Alguien de tu pasado volverá a cruzar tu camino. Vos decidirás cuánto se queda.",
  "Una mirada va a durar apenas un instante. Sus consecuencias, bastante más.",
  "El amor llegará disfrazado de otra cosa. Vas a reconocerlo cuando ya sea tarde.",
  "Una coincidencia repetida dejará de parecer casual. Prestá atención a quién aparece.",
  "La suerte cambiará de dirección cuando dejes de buscar exactamente lo esperado.",
  "Una pequeña casualidad abrirá una puerta que hasta ahora parecía no existir.",
  "Algo perdido regresará de otra forma. Tal vez entonces entiendas por qué se fue.",
  "El azar pondrá algo frente a vos. Reconocerlo a tiempo será la verdadera suerte.",
  "Una coincidencia llegará dos veces. La segunda vez ya no podrás llamarla azar.",
  "La fortuna se moverá a tu favor después de una decisión que parece insignificante.",
  "Algo que hoy parece un error terminará acercándote exactamente adonde querías ir.",
  "Tu próxima decisión tendrá más suerte de la que ahora podés calcular.",
  "Una puerta se cerrará sin explicación. Poco después entenderás qué estaba protegiendo.",
  "La suerte aparecerá donde menos sentido tenga buscarla. No preguntes demasiado.",
  "Una nueva etapa comienza en silencio. Lo que hoy parece incierto encontrará su lugar.",
  "Algo está terminando sin que todavía lo notes. Lo próximo ya empezó a acercarse.",
  "Lo que parecía detenido volverá a moverse. Esta vez en una dirección inesperada.",
  "Una versión antigua de vos está por quedarse atrás. No necesitarás despedirte.",
  "Antes de que termine este ciclo, algo que parecía imposible empezará a ordenarse.",
  "El camino que evitaste volverá a aparecer. Esta vez vas a entender por qué.",
  "Algo que esperaste durante mucho tiempo llegará cuando ya no lo necesites igual.",
  "Pronto cambiarás de idea sobre algo que hoy parece completamente decidido.",
  "Una respuesta llegará después de que hayas dejado de hacerte la pregunta.",
  "Lo que viene no se parecerá a lo que imaginaste. Tal vez por eso funcione.",
  "Una oportunidad pequeña traerá consecuencias mucho mayores de las que imaginás.",
  "Algo que empezaste casi por accidente puede convertirse en una fuente de abundancia.",
  "Una propuesta llegará de un lugar inesperado. Escuchala antes de decidir.",
  "El dinero llegará por un camino distinto al que hoy estás intentando controlar.",
  "Una decisión postergada puede abrir el período de estabilidad que estabas buscando.",
  "Aquello que hoy hacés en silencio pronto encontrará a las personas correctas.",
  "Un planeta cambia de posición. Algo pequeño dentro de vos también empieza a moverse.",
  "El universo repetirá una señal hasta que dejes de confundirla con coincidencia.",
  "Algo que todavía no tiene nombre ya está orbitando cerca de tu vida.",
  "Las cartas no revelan el futuro. Señalan el instante exacto en que empieza a cambiar.",
];
const MESSAGE_MAP_WIDTH = 708;
const MESSAGE_MAP_HEIGHT = 1074;
const MESSAGE_FONT_FAMILY = "Altar Fortune";
// Figma's text block starts a little higher on each channel's card, following its symbol.
const MESSAGE_TOPS = [196.894, 192.517, 185.983, 185.357];
const MESSAGE_LAYOUT = { x: 21.752, width: 192.496, fontSize: 14, lineHeight: 1.1, minFontSize: 11, maxLines: 5, color: "#8c8c8c", baselineNudge: -5 / 3 };
const FORTUNE_SEEN_KEY = "altar-fortune-seen";

// Share story (Figma "Share"): 1080 × 1920, card 840 wide centered, handle centered 1660.5px from the top.
const SHARE_WIDTH = 1080;
const SHARE_HEIGHT = 1920;
const SHARE_CARD_WIDTH = 840;
const SHARE_HANDLE_SIZE = 30;
const SHARE_HANDLE_Y = 1660.5;
const SHARE_FILE_NAME = "altar-carta.jpg";
// The CSS glow gradient (.altar-solar__glow): offset → share of the color still opaque.
const SKY_GLOW_STOPS = [[0, 1], [0.167, 0.88], [0.333, 0.61], [0.5, 0.32], [0.667, 0.135], [0.833, 0.044], [1, 0]];

// Mid-gray noise; blended as overlay it reads like the hero's fractal grain.
function grainTile() {
  if (grainTile.canvas) return grainTile.canvas;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const context = canvas.getContext("2d");
  const image = context.createImageData(256, 256);
  for (let index = 0; index < image.data.length; index += 4) {
    const value = 128 + (Math.random() - 0.5) * 160;
    image.data[index] = image.data[index + 1] = image.data[index + 2] = value;
    image.data[index + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  return (grainTile.canvas = canvas);
}

// Channel 1 reads data-foil-frame, the others data-channel-frame-N; no frame means a fixed map image.
function messageFrameUrl(card, index) {
  if (!card) return null;
  return index === 0 ? card.dataset.foilFrame : card.getAttribute(`data-channel-frame-${index + 1}`);
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    // Like THREE.TextureLoader: a CDN-hosted image (Tiendanube) would otherwise taint the canvas for WebGL.
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

// Random, but every phrase is revealed once before any repeats (per browser session).
function readFortuneSeen() {
  try {
    const seen = JSON.parse(sessionStorage.getItem(FORTUNE_SEEN_KEY) || "[]");
    return Array.isArray(seen) ? seen : [];
  } catch {
    return [];
  }
}

function pickFortunePhrase(previous) {
  const seen = readFortuneSeen();
  let pool = FORTUNE_PHRASES.filter((phrase) => !seen.includes(phrase) && phrase !== previous);
  if (!pool.length) pool = FORTUNE_PHRASES.filter((phrase) => phrase !== previous);
  return pool[Math.floor(Math.random() * pool.length)];
}

function markFortuneSeen(phrase) {
  let seen = readFortuneSeen();
  // A full round has been revealed: start a new one.
  if (FORTUNE_PHRASES.every((item) => seen.includes(item))) seen = [];
  if (!seen.includes(phrase)) seen.push(phrase);
  try {
    sessionStorage.setItem(FORTUNE_SEEN_KEY, JSON.stringify(seen));
  } catch {}
}

function wrapWords(context, text, width) {
  const lines = [];
  text.split(/\s+/).forEach((word) => {
    const line = lines.length ? `${lines[lines.length - 1]} ${word}` : word;
    if (lines.length && context.measureText(line).width <= width) lines[lines.length - 1] = line;
    else lines.push(word);
  });
  return lines;
}

// White background, gray strokes: the foil shader reads gray as relief, exactly like the PNG maps.
function drawFortuneMap(canvas, frame, phrase, top = MESSAGE_TOPS[0]) {
  const context = canvas.getContext("2d");
  const unit = canvas.width / 236;
  const layout = MESSAGE_LAYOUT;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(frame, 0, 0, canvas.width, canvas.height);

  // Same size as Figma; only a phrase that would need more lines than the block allows gets smaller.
  const text = phrase.toLocaleUpperCase("es");
  let fontSize = layout.fontSize;
  let lines;
  for (;;) {
    context.font = `400 ${fontSize * unit}px "${MESSAGE_FONT_FAMILY}", Georgia, serif`;
    lines = wrapWords(context, text, layout.width * unit);
    if (lines.length <= layout.maxLines || fontSize <= layout.minFontSize) break;
    fontSize -= 0.25;
  }

  // Figma centers each line's font box (ascent + descent) inside its line height; the browser reads
  // slightly different font metrics, so a small nudge (measured against the exported PNG) lines them up.
  const metrics = context.measureText("*");
  const ascent = metrics.fontBoundingBoxAscent ?? fontSize * unit * 0.8;
  const descent = metrics.fontBoundingBoxDescent ?? fontSize * unit * 0.2;
  const lineHeight = fontSize * layout.lineHeight * unit;
  const right = (layout.x + layout.width) * unit;
  context.fillStyle = layout.color;
  context.textAlign = "right";
  context.textBaseline = "alphabetic";
  ["*", ...lines].forEach((line, index) => {
    const lineTop = (top + layout.baselineNudge) * unit + index * lineHeight;
    context.fillText(line, right, lineTop + (lineHeight - ascent - descent) / 2 + ascent);
  });
}
const SYSTEM_POSE_KEYS = ["X", "Y", "Z", "RotX", "RotY", "RotZ", "Scale"];

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
// Mirrors the CSS glows (.altar-solar__glow--*): center in % of the stage, diameter in vw, base opacity.
const SKY_GLOWS = {
  rose: { x: 0.825, y: 0.051, size: 1.44, peak: 0.14 },
  cyan: { x: 0.046, y: 0.646, size: 1.32, peak: 0.097 },
  teal: { x: 0.603, y: 0.341, size: 1.26, peak: 0.02 },
};

const CHANNEL_REVEAL_VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Shockwave reveal: three staggered rings unmask the next channel's sky (base color + glows),
// ripple it radially near the front and add a cream glow on the edge.
const CHANNEL_REVEAL_FRAGMENT = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uStageSize;
  uniform float uViewportHeight;
  uniform vec2 uOrigin;
  uniform float uProgress;
  uniform float uMaxDistance;
  uniform float uTime;
  uniform vec3 uSpace;
  uniform vec3 uGlowColors[3];
  uniform vec4 uGlowShapes[3];
  uniform vec3 uEdgeColor;
  uniform float uRingsOnly;
  uniform float uBand;
  uniform float uEdgeGain;
  uniform vec3 uBandColor;
  uniform float uBandTint;

  const vec3 OFFSET = vec3(0.0, 0.035, 0.075);
  const vec3 WIDTH = vec3(0.06, 0.015, 0.2);
  const float EDGE_GLOW = 0.35;
  const float DISPLACE = 4.0;
  const float THICKNESS = 2.5;

  float ring(float d, float radius, float width) { return exp(-abs(d - radius) / width); }
  float wave(float d, float radius, float decay) {
    return sin((d - radius) * 35.0 - uTime * 6.0) * exp(-abs(d - radius) * decay);
  }

  vec3 sky(vec2 pixel) {
    vec3 color = uSpace;
    for (int i = 0; i < 3; i++) {
      vec4 shape = uGlowShapes[i];
      float t = distance(pixel, shape.xy) / shape.z;
      float alpha = t < 1.0 ? exp(-4.56 * t * t) * shape.w : 0.0;
      color = mix(color, uGlowColors[i], alpha);
    }
    return color;
  }

  void main() {
    // Stage pixels, y down like CSS; distances in viewport heights so rings keep their shape.
    vec2 pixel = vec2(vUv.x, 1.0 - vUv.y) * uStageSize;
    vec2 fromOrigin = pixel - uOrigin;
    float d = length(fromOrigin) / uViewportHeight;

    vec3 radius = vec3(uProgress * uMaxDistance) - OFFSET;
    float reveal = (
      smoothstep(radius.x + 0.02, radius.x - 0.02, d) +
      smoothstep(radius.y + 0.02, radius.y - 0.02, d) +
      smoothstep(radius.z + 0.02, radius.z - 0.02, d)
    ) / 3.0;

    float decay = 40.0 / THICKNESS;
    float ripple = (wave(d, radius.x, decay) + wave(d, radius.y, decay) + wave(d, radius.z, decay)) * 0.04 * DISPLACE;
    vec2 direction = normalize(fromOrigin + 1e-4);
    vec3 color = sky(pixel + direction * ripple * 0.6 * uViewportHeight);

    float fade = smoothstep(0.0, 0.08, uProgress) * (1.0 - uProgress);
    float edge = clamp(ring(d, radius.x, WIDTH.x) + ring(d, radius.y, WIDTH.y) + ring(d, radius.z, WIDTH.z), 0.0, 1.0) * fade * EDGE_GLOW;

    // Premultiplied: the edge glow adds light even where the new sky is not revealed yet.
    // Rings-only pass (drawn above the 3D ground and stones): just the glowing wave front,
    // added on top without covering anything.
    // Over-the-scene pass (section 2): the new sky sweeps across horizon, ground and stones as a
    // band right behind the wave front, then clears so the scene shows through again.
    if (uRingsOnly > 0.5) {
      float trail = smoothstep(radius.x - 0.45, radius.x - 0.04, d);
      float band = reveal * trail * 0.92 * (1.0 - smoothstep(0.85, 1.0, uProgress)) * uBand;
      // Card pulse: the band is a flat tint (uBandColor) instead of the next channel's sky.
      vec3 bandColor = mix(color, uBandColor, uBandTint);
      gl_FragColor = vec4(bandColor * band + uEdgeColor * edge * 1.4, band);
      return;
    }
    gl_FragColor = vec4(color * reveal + uEdgeColor * edge, reveal);
  }
`;

function hexToRgbArray(hex) {
  const value = parseInt(String(hex).replace("#", ""), 16) || 0;
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

// A dedicated canvas between the CSS sky and the 3D scene, only rendered while a reveal plays.
function createChannelReveal(stage, { ringsOnly = false } = {}) {
  if (!stage || !window.WebGLRenderingContext) return null;
  const canvas = document.createElement("canvas");
  canvas.className = ringsOnly ? "altar-solar__reveal altar-solar__reveal--rings" : "altar-solar__reveal";
  canvas.setAttribute("aria-hidden", "true");
  // The full reveal sits behind the 3D scene; the rings-only pass sits above it.
  stage.querySelector(ringsOnly ? ".altar-solar__canvas" : ".altar-solar__sky")?.after(canvas);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, premultipliedAlpha: true, antialias: false });
  } catch {
    canvas.remove();
    return null;
  }
  renderer.setClearColor(0x000000, 0);
  const uniforms = {
    uStageSize: { value: new THREE.Vector2() },
    uViewportHeight: { value: 1 },
    uOrigin: { value: new THREE.Vector2() },
    uProgress: { value: 0 },
    uMaxDistance: { value: 1 },
    uTime: { value: 0 },
    uSpace: { value: new THREE.Vector3() },
    uGlowColors: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
    uGlowShapes: { value: [new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4()] },
    uEdgeColor: { value: new THREE.Vector3(...hexToRgbArray("#fff3a9")) },
    uRingsOnly: { value: ringsOnly ? 1 : 0 },
    uBand: { value: 1 },
    uEdgeGain: { value: 1 },
    uBandColor: { value: new THREE.Vector3() },
    uBandTint: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: CHANNEL_REVEAL_VERTEX,
    fragmentShader: CHANNEL_REVEAL_FRAGMENT,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    premultipliedAlpha: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
  });
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  let frame = 0;
  let finish = null;

  // Resizing reallocates the drawing buffer, so only do it when the stage really changed.
  let sizeKey = "";
  const resize = (width, height) => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    const key = `${width}x${height}@${pixelRatio}`;
    if (key === sizeKey) return;
    sizeKey = key;
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
  };

  // Compile the shader and allocate the buffer ahead of time (the canvas is still hidden), so the
  // first wave — a channel switch or the fortune card opening — doesn't stall mid-animation.
  const warmUp = () => {
    const bounds = stage.getBoundingClientRect();
    resize(bounds.width, bounds.height);
    renderer.compile(scene, camera);
    if (!frame) renderer.render(scene, camera);
  };
  afterIntro(warmUp);

  const complete = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    finish?.();
    finish = null;
    canvas.classList.remove("is-active");
  };

  return {
    // bandColor: sweep a band of that flat color instead of the next sky (the fortune card pulse);
    // the scene underneath is left untouched once the wave has passed.
    play(background, source, onDone, { bandColor = null } = {}) {
      uniforms.uBand.value = 1;
      uniforms.uBandTint.value = bandColor ? 1 : 0;
      if (bandColor) uniforms.uBandColor.value.set(...hexToRgbArray(bandColor));
      if (frame) complete();
      const stageBounds = stage.getBoundingClientRect();
      const width = stageBounds.width;
      const height = stageBounds.height;
      // Rings are soft gradients, so a capped pixel ratio keeps this cheap.
      resize(width, height);

      const viewportHeight = window.innerHeight;
      const sourceBounds = source.getBoundingClientRect();
      const originX = sourceBounds.left + sourceBounds.width / 2 - stageBounds.left;
      const originY = sourceBounds.top + sourceBounds.height / 2 - stageBounds.top;
      // Reach the farthest visible corner; the CSS sky takes over once the wave is done.
      const visibleTop = -stageBounds.top;
      const corners = [[0, visibleTop], [width, visibleTop], [0, visibleTop + viewportHeight], [width, visibleTop + viewportHeight]];
      const farthest = Math.max(...corners.map(([x, y]) => Math.hypot(x - originX, y - originY)));

      uniforms.uStageSize.value.set(width, height);
      uniforms.uViewportHeight.value = viewportHeight;
      uniforms.uOrigin.value.set(originX, originY);
      uniforms.uMaxDistance.value = farthest / viewportHeight + 0.075 + 0.05;
      uniforms.uSpace.value.set(...hexToRgbArray(background.space));
      ["rose", "cyan", "teal"].forEach((name, index) => {
        const shape = SKY_GLOWS[name];
        const [color, intensity] = background.glows[name];
        uniforms.uGlowColors.value[index].set(...hexToRgbArray(color));
        uniforms.uGlowShapes.value[index].set(
          shape.x * width,
          shape.y * height,
          (shape.size * window.innerWidth) / 2,
          Math.min(shape.peak * Number(intensity), 1)
        );
      });

      finish = onDone;
      canvas.classList.add("is-active");
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / CHANNEL_REVEAL_MS, 1);
        uniforms.uProgress.value = easeOutCubic(t);
        uniforms.uTime.value = (now - start) / 1000;
        renderer.render(scene, camera);
        if (t < 1) frame = requestAnimationFrame(step);
        else complete();
      };
      frame = requestAnimationFrame(step);
    },
  };
}

// Moments of the day, from the hour each one starts (visitor's local time) to the next.
const PLAYER_SLOTS = [
  { from: 6, name: "ALBA / AIRE", url: "https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk" },
  { from: 15, name: "MEDIODÍA / FUEGO", url: "https://open.spotify.com/intl-es/track/3yGECrjAhzkWpOxt17cdGr" },
  { from: 18, name: "TARDE / TIERRA", url: "https://open.spotify.com/intl-es/track/1loE5JdxEEa0bO9ojGYKwr" },
  { from: 21, name: "NOCHE / AGUA", url: "https://open.spotify.com/intl-es/track/5Rq2hPEd7UWN6i9tME54dj" },
];

function playerSlotFor(hour) {
  return [...PLAYER_SLOTS].reverse().find((slot) => hour >= slot.from) ?? PLAYER_SLOTS[PLAYER_SLOTS.length - 1];
}

// Accepts any open.spotify.com share link (track, playlist, album, episode, show) and returns its embed URL.
function spotifyEmbedUrl(url) {
  const match = String(url || "").match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(track|playlist|album|episode|show|artist)\/([A-Za-z0-9]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator&theme=0` : null;
}

const LIVE_DATE_TIME_ZONE = "America/Argentina/Buenos_Aires";

function updateLiveDates() {
  const now = new Date();
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: LIVE_DATE_TIME_ZONE, month: "short", day: "2-digit", year: "2-digit" })
      .formatToParts(now)
      .map(({ type, value }) => [type, value])
  );
  const isoDate = new Intl.DateTimeFormat("en-CA", { timeZone: LIVE_DATE_TIME_ZONE }).format(now);
  document.querySelectorAll("[data-live-date]").forEach((element) => {
    element.textContent = `${parts.month}/${parts.day}/${parts.year}`.toUpperCase();
    element.setAttribute("datetime", isoDate);
  });

  // Check again shortly after the next minute boundary so the date flips at midnight.
  clearTimeout(updateLiveDates.timer);
  updateLiveDates.timer = setTimeout(updateLiveDates, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
}

// Switches the fixed header to its dark variant while it overlaps a light section
// (any element marked with data-header-theme="light").
function initHeaderTheme() {
  const header = document.querySelector(".site-header");
  if (!header || initHeaderTheme.ready) return;
  initHeaderTheme.ready = true;
  let frame = 0;
  const update = () => {
    frame = 0;
    const probe = header.getBoundingClientRect().height / 2;
    const onLight = Array.from(document.querySelectorAll('[data-header-theme="light"]')).some((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= probe && bounds.bottom >= probe;
    });
    header.classList.toggle("is-on-light", onLight);
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  update();
}

// Newsletter forms without a destination (the local/Netlify preview) confirm in place;
// on Tiendanube the form posts to the store's contact endpoint as usual.
function initNewsletterPreview() {
  document.querySelectorAll("[data-newsletter-form]:not([action])").forEach((form) => {
    if (form.dataset.ready) return;
    form.dataset.ready = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = form.querySelector(".altar-footer__legal");
      if (note) {
        note.textContent = "¡Listo! Ya estás en la lista.";
        note.setAttribute("role", "status");
      }
      form.reset();
    });
  });
}

function initSolarExperiences() {
  initHeaderTheme();
  updateLiveDates();
  initNewsletterPreview();
  document.querySelectorAll("[data-altar-solar]").forEach((root) => {
    if (!root.solarExperience) root.solarExperience = new SolarExperience(root);
  });
  playIntro();
}

// Opening sequence, after virgilabloh.com: the frame (metadata, dashed rules) assembles first,
// then the ELEMENTAL card rises as the one spatial gesture, and the bottom bar loads in last.
// Pure CSS animations driven by delays; <html class="altar-intro"> (set in <head>) hides the
// pieces until this runs, and the head script lifts it on its own if the bundle never arrives.
const INTRO_END = 4200;

// Background warm-up work (preloads, shader compiles) waits for the opening sequence to finish
// and then for an idle moment, so it never competes with the intro animations.
function afterIntro(callback) {
  const idle = window.requestIdleCallback ?? ((next) => setTimeout(next, 200));
  setTimeout(() => idle(callback), INTRO_END);
}

function splitChars(element, { base, stagger, duration = 120, ease = "ease-out" }) {
  if (!element || element.dataset.introSplit) return;
  element.dataset.introSplit = "true";
  // Screen readers get one hidden copy of the whole text; the animated letters are hidden from them.
  const fullText = element.textContent.replace(/\s+/g, " ").trim();
  let index = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) return walk(child);
      if (child.nodeType !== Node.TEXT_NODE || !child.textContent) return;
      const fragment = document.createDocumentFragment();
      [...child.textContent].forEach((char) => {
        const span = document.createElement("span");
        span.className = "altar-intro__char";
        span.setAttribute("aria-hidden", "true");
        span.textContent = char;
        span.style.animation = `altar-intro-fade ${duration}ms ${ease} ${base + index * stagger}ms both`;
        index += 1;
        fragment.append(span);
      });
      child.replaceWith(fragment);
    });
  };
  walk(element);
  const spoken = document.createElement("span");
  spoken.className = "visually-hidden";
  spoken.textContent = fullText;
  element.append(spoken);
}

function introAnimate(element, animation) {
  if (element) element.style.animation = animation;
}

function playIntro() {
  const html = document.documentElement;
  if (playIntro.done || !html.classList.contains("altar-intro")) return;
  playIntro.done = true;
  // Only for a fresh landing at the top; reduced motion or a restored scroll just shows everything.
  if (REDUCED_MOTION.matches || window.scrollY > window.innerHeight * 0.5) {
    html.classList.remove("altar-intro");
    return;
  }
  const $ = (selector) => document.querySelector(selector);
  const fade = (duration, delay, ease = "ease-out") => `altar-intro-fade ${duration}ms ${ease} ${delay}ms both`;

  // 0–1 s · the frame: the brand surfaces, metadata types in, dashed rules and dividers draw themselves.
  introAnimate($(".altar-nav__logo"), fade(600, 0));
  splitChars($(".altar-nav__wordmark"), { base: 150, stagger: 70, duration: 160 });
  splitChars($(".altar-nav__eyebrow"), { base: 0, stagger: 35 });
  splitChars($(".altar-solar__scroll-prompt"), { base: 0, stagger: 40 });
  introAnimate($(".altar-nav__divider--brand"), "altar-intro-divider 350ms ease-out 550ms both");
  introAnimate($(".altar-nav__rule--top"), "altar-intro-rule 350ms ease-out 560ms both");
  introAnimate($(".altar-nav__rule--bottom"), "altar-intro-rule 350ms ease-out 720ms both");
  introAnimate($(".altar-nav__divider--metadata"), "altar-intro-divider 350ms ease-out 900ms both");
  introAnimate($("[data-fortune-flip]"), fade(300, 950));
  // The inviting dashed frame draws itself around the card, then hands over to its idle pulse
  // (the reveal ends at the pulse's starting opacity, so the swap is seamless).
  const ctaFrame = $(".altar-solar__fortune-cta-frame");
  introAnimate(ctaFrame, "altar-intro-frame 600ms ease-out 1250ms both");
  ctaFrame?.addEventListener("animationend", () => { ctaFrame.style.animation = ""; }, { once: true });
  introAnimate($(".altar-nav__divider--navigation"), "altar-intro-divider 350ms ease-out 1200ms both");
  introAnimate($(".altar-nav__divider--actions"), "altar-intro-divider 350ms ease-out 1350ms both");

  // 1.2 s · the ELEMENTAL card rises rotated and settles (the single spatial move), its title lighting up as it turns.
  const campaign = $(".altar-solar__campaign");
  introAnimate(campaign, fade(200, 1200));
  if (campaign) {
    // Animated on transform with resolved values so the compositor runs it: custom-property keyframes
    // run on the main thread and froze mid-rise while the 3D scene was still being built.
    const settled = getComputedStyle(campaign).transform;
    const base = settled === "none" ? "" : settled;
    campaign.animate([
      { transform: `translateY(${window.innerWidth * 0.2}px) rotate(-20deg) ${base}` },
      { transform: `translateY(0px) rotate(0deg) ${base}` },
    ], { duration: 1600, delay: 1200, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" });
  }
  splitChars(campaign?.querySelector(".altar-solar__campaign-heading span"), { base: 1200, stagger: 40 });
  splitChars($("[data-live-date]"), { base: 1250, stagger: 35 });
  splitChars($(".altar-solar__fortune-cta-text span"), { base: 1460, stagger: 20 });
  splitChars($(".altar-nav__metadata > span"), { base: 1550, stagger: 35 });
  introAnimate($(".altar-solar__fortune-cta-icon"), fade(200, 1440));
  // Menu and actions type in left to right, each arrow icon just ahead of its label.
  document.querySelectorAll(".altar-nav__menu a").forEach((link, index) => splitChars(link, { base: 1000 + index * 120, stagger: 35 }));
  // Only the actions on screen take a turn. On tablet / mobile the bar shows just the brand and Menu, so Menu types in
  // right after the wordmark instead of waiting behind the hidden Cart, Search and Login.
  const isShown = (element) => element && getComputedStyle(element).display !== "none" && element.getClientRects().length > 0;
  [".altar-nav__cart", ".altar-nav__search", ".altar-nav__account"].map((selector) => $(selector)).filter(isShown).forEach((link, index) => {
    introAnimate(link.querySelector(".altar-nav__action-icon"), fade(200, 1400 + index * 150));
    link.querySelectorAll(":scope > span").forEach((part, partIndex) => splitChars(part, { base: 1450 + index * 150 + partIndex * 140, stagger: 35 }));
  });
  const menuToggle = $(".altar-nav__menu-toggle");
  if (isShown(menuToggle)) menuToggle.querySelectorAll(":scope > span").forEach((part) => splitChars(part, { base: 600, stagger: 35 }));
  document.querySelectorAll(".altar-solar__manifesto-ids > span").forEach((part, index) => splitChars(part, { base: 2200 + index * 300, stagger: 35 }));

  // 1.7–3 s · controls load in; the ticker is unmasked left to right.
  introAnimate($(".altar-solar__pagination"), fade(200, 1700));
  introAnimate($(".altar-solar__channel-switcher"), fade(200, 1780));
  splitChars($(".altar-solar__channel-label"), { base: 1800, stagger: 35 });
  introAnimate($(".altar-solar__reveal-card"), fade(200, 1860));
  introAnimate($(".altar-solar__open-player"), fade(200, 2000));
  introAnimate($(".altar-solar__marquee"), "altar-intro-clip 500ms ease-out 2500ms both");

  // 3.5 s · the live clock closes the sequence, like a last datum arriving.
  splitChars($(".altar-solar__player-label"), { base: 3500, stagger: 35 });

  html.classList.add("altar-intro--play");
  setTimeout(() => {
    html.classList.remove("altar-intro", "altar-intro--play");
    document.querySelectorAll("[data-intro-split], .altar-nav__logo, .altar-nav__action-icon, .altar-solar__fortune-cta-icon, .altar-nav__divider, .altar-nav__rule, [data-fortune-flip], .altar-solar__campaign, .altar-solar__pagination, .altar-solar__channel-switcher, .altar-solar__reveal-card, .altar-solar__open-player, .altar-solar__marquee")
      .forEach((element) => {
        if (element.style.animation.startsWith("altar-intro")) element.style.animation = "";
      });
  }, INTRO_END);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSolarExperiences, { once: true });
} else {
  initSolarExperiences();
}

document.addEventListener("section:load", initSolarExperiences);
