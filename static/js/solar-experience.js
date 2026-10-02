(()=>{var a0=Object.defineProperty;var o0=(r,e,t)=>e in r?a0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var pf=(r,e,t)=>o0(r,typeof e!="symbol"?e+"":e,t);var ep=0,Uu=1,tp=2;var Or=1,np=2,Bs=3,pi=0,un=1,Hn=2,mi=0,zs=1,Br=2,Fu=3,Ou=4,El=5;var zr=100,ip=101,rp=102,sp=103,ap=104,op=200,wl=201,lp=202,cp=203,Bu=204,Ba=205,up=206,hp=207,dp=208,fp=209,pp=210,mp=211,gp=212,_p=213,xp=214,Qo=0,el=1,tl=2,Ms=3,nl=4,il=5,rl=6,sl=7,zu=0,yp=1,vp=2,ii=0,za=1,ka=2,ku=3,kr=4,Hu=5,Vu=6,Ha=7,Mu="attached",Sp="detached",Gu=300,sr=301,Hr=302,Al=303,Rl=304,Va=306,ti=1e3,sn=1001,Ts=1002,Rt=1003,Cl=1004;var Vr=1005;var ot=1006,ks=1007;var hn=1008;var vn=1009,Wu=1010,Xu=1011,Hs=1012,Pl=1013,ri=1014,Ln=1015,si=1016,Il=1017,Ll=1018,Vs=1020,Yu=35902,qu=35899,Zu=1021,$u=1022,Jt=1023,ui=1026,ar=1027,Nl=1028,Dl=1029,or=1030,Ul=1031;var Fl=1033,Ga=33776,Wa=33777,Xa=33778,Ya=33779,Ol=35840,Bl=35841,zl=35842,kl=35843,Hl=36196,Vl=37492,Gl=37496,Wl=37488,Xl=37489,qa=37490,Yl=37491,ql=37808,Zl=37809,$l=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,rc=37819,sc=37820,ac=37821,oc=36492,lc=36494,cc=36495,uc=36283,hc=36284,Za=36285,dc=36286;var Er=2300,wr=2301,Ko=2302,Tu=2303,Eu=2400,wu=2401,Au=2402,bp=2500;var Ku=0,$a=1,Gs=2,Mp=3200;var fc=0,Tp=1,Sn="",Tt="srgb",on="srgb-linear",ya="linear",tt="srgb";var Jo=7680;var Ep=519,wp=512,Ap=513,Rp=514,pc=515,Cp=516,Pp=517,mc=518,Ip=519,Ju=35044;var ju="300 es",Qn=2e3,Es=2001;function l0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function c0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Lp(){let r=ws("canvas");return r.style.display="block",r}var mf={},As=null;function va(...r){let e="THREE."+r.shift();As?As("log",e,...r):console.log(e,...r)}function Np(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function we(...r){r=Np(r);let e="THREE."+r.shift();if(As)As("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Le(...r){r=Np(r);let e="THREE."+r.shift();if(As)As("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Tr(...r){let e=r.join(" ");e in mf||(mf[e]=!0,we(...r))}function Dp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Up={[Qo]:el,[tl]:rl,[nl]:sl,[Ms]:il,[el]:Qo,[rl]:tl,[sl]:nl,[il]:Ms},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=1234567,_a=Math.PI/180,Ar=180/Math.PI;function ei(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Xe(r,e,t){return Math.max(e,Math.min(t,r))}function Qu(r,e){return(r%e+e)%e}function u0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function h0(r,e,t){return r!==e?(t-r)/(e-r):0}function xa(r,e,t){return(1-t)*r+t*e}function d0(r,e,t,n){return xa(r,e,1-Math.exp(-t*n))}function f0(r,e=1){return e-Math.abs(Qu(r,e*2)-e)}function p0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function m0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function g0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _0(r,e){return r+Math.random()*(e-r)}function x0(r){return r*(.5-Math.random())}function y0(r){r!==void 0&&(gf=r);let e=gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(r){return r*_a}function S0(r){return r*Ar}function b0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function M0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function T0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function E0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lt={DEG2RAD:_a,RAD2DEG:Ar,generateUUID:ei,clamp:Xe,euclideanModulo:Qu,mapLinear:u0,inverseLerp:h0,lerp:xa,damp:d0,pingpong:f0,smoothstep:p0,smootherstep:m0,randInt:g0,randFloat:_0,randFloatSpread:x0,seededRandom:y0,degToRad:v0,radToDeg:S0,isPowerOfTwo:b0,ceilPowerOfTwo:M0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:E0,normalize:it,denormalize:jn},rh=class rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;var Ae=rh,ln=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||l!==d||c!==f||u!==g){let p=l*d+c*f+u*g+h*_;p<0&&(d=-d,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+_*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+_*o;let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var N=sh,jc=new N,_f=new ln,ah=class ah{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],A=i[4],v=i[7],S=i[2],E=i[5],w=i[8];return s[0]=a*_+o*M+l*S,s[3]=a*p+o*A+l*E,s[6]=a*m+o*v+l*w,s[1]=c*_+u*M+h*S,s[4]=c*p+u*A+h*E,s[7]=c*m+u*v+h*w,s[2]=d*_+f*M+g*S,s[5]=d*p+f*A+g*E,s[8]=d*m+f*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;var Ne=ah,Qc=new Ne,xf=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yf=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w0(){let r={enabled:!0,workingColorSpace:on,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[on]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:xf,fromXYZ:yf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:xf,fromXYZ:yf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}var ke=w0();function Pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var rs,al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=ws("canvas")),rs.width=e.width,rs.height=e.height;let i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},A0=0,Rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(eu(i[a].image)):s.push(eu(i[a]))}else s=eu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function eu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?al.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var R0=0,tu=new N,Ot=class r extends hi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=sn,i=sn,s=ot,a=hn,o=Jt,l=vn,c=r.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ei(),this.name="",this.source=new Rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ti:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ti:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Gu;Ot.DEFAULT_ANISOTROPY=1;var oh=class oh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,v=(f+1)/2,S=(m+1)/2,E=(u+d)/4,w=(h+_)/4,x=(g+p)/4;return A>v&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=E/n,s=w/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=w/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;var Ke=oh,ol=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Ot(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sa=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Tl=class Tl{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,n){let i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Zi.crossVectors(n,Rn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Zi.crossVectors(n,Rn)),Zi.normalize(),bo.crossVectors(Rn,Zi),i[0]=Zi.x,i[4]=bo.x,i[8]=Rn.x,i[1]=Zi.y,i[5]=bo.y,i[9]=Rn.y,i[2]=Zi.z,i[6]=bo.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],A=n[7],v=n[11],S=n[15],E=i[0],w=i[4],x=i[8],b=i[12],C=i[1],P=i[5],F=i[9],O=i[13],I=i[2],B=i[6],W=i[10],G=i[14],Q=i[3],Y=i[7],J=i[11],te=i[15];return s[0]=a*E+o*C+l*I+c*Q,s[4]=a*w+o*P+l*B+c*Y,s[8]=a*x+o*F+l*W+c*J,s[12]=a*b+o*O+l*G+c*te,s[1]=u*E+h*C+d*I+f*Q,s[5]=u*w+h*P+d*B+f*Y,s[9]=u*x+h*F+d*W+f*J,s[13]=u*b+h*O+d*G+f*te,s[2]=g*E+_*C+p*I+m*Q,s[6]=g*w+_*P+p*B+m*Y,s[10]=g*x+_*F+p*W+m*J,s[14]=g*b+_*O+p*G+m*te,s[3]=M*E+A*C+v*I+S*Q,s[7]=M*w+A*P+v*B+S*Y,s[11]=M*x+A*F+v*W+S*J,s[15]=M*b+A*O+v*G+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],M=l*f-c*d,A=o*f-c*h,v=o*d-l*h,S=a*f-c*u,E=a*d-l*u,w=a*h-o*u;return t*(_*M-p*A+m*v)-n*(g*M-p*S+m*E)+i*(g*A-_*S+m*w)-s*(g*v-_*E+p*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=t*o-n*a,A=t*l-i*a,v=t*c-s*a,S=n*l-i*o,E=n*c-s*o,w=i*c-s*l,x=u*_-h*g,b=u*p-d*g,C=u*m-f*g,P=h*p-d*_,F=h*m-f*_,O=d*m-f*p,I=M*O-A*F+v*P+S*C-E*b+w*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*O-l*F+c*P)*B,e[1]=(i*F-n*O-s*P)*B,e[2]=(_*w-p*E+m*S)*B,e[3]=(d*E-h*w-f*S)*B,e[4]=(l*C-a*O-c*b)*B,e[5]=(t*O-i*C+s*b)*B,e[6]=(p*v-g*w-m*A)*B,e[7]=(u*w-d*v+f*A)*B,e[8]=(a*F-o*C+c*x)*B,e[9]=(n*C-t*F-s*x)*B,e[10]=(g*E-_*v+m*M)*B,e[11]=(h*v-u*E-f*M)*B,e[12]=(o*b-a*P-l*x)*B,e[13]=(t*P-n*b+i*x)*B,e[14]=(_*A-g*S-p*M)*B,e[15]=(u*S-h*A+d*M)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,p=a*h,m=o*h,M=l*c,A=l*u,v=l*h,S=n.x,E=n.y,w=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+v)*S,i[2]=(g-A)*S,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+m))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(g+A)*w,i[9]=(p-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ss.set(i[0],i[1],i[2]).length(),o=ss.set(i[4],i[5],i[6]).length(),l=ss.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Zn.copy(this);let c=1/a,u=1/o,h=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Qn,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Qn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Es)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Qn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Qn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Es)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Tl.prototype.isMatrix4=!0;var Ue=Tl,ss=new N,Zn=new Ue,C0=new N(0,0,0),P0=new N(1,1,1),Zi=new N,bo=new N,Rn=new N,vf=new Ue,Sf=new ln,Ii=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I0=0,bf=new N,as=new ln,Mi=new Ue,Mo=new N,aa=new N,L0=new N,N0=new ln,Mf=new N(1,0,0),Tf=new N(0,1,0),Ef=new N(0,0,1),wf={type:"added"},D0={type:"removed"},os={type:"childadded",child:null},nu={type:"childremoved",child:null},gt=class r extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new N,t=new Ii,n=new ln,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ne}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(aa,Mo,this.up):Mi.lookAt(Mo,aa,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Mi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wf),os.child=e,this.dispatchEvent(os),os.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wf),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},U0={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},To={h:0,s:0,l:0};function iu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=Qu(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=iu(a,s,e+1/3),this.g=iu(a,s,e),this.b=iu(a,s,e-1/3)}return ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ke.workingToColorSpace(Kt.copy(this),e),Math.round(Xe(Kt.r*255,0,255))*65536+Math.round(Xe(Kt.g*255,0,255))*256+Math.round(Xe(Kt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,i=Kt.g,s=Kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Tt){ke.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,i=Kt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(To);let n=xa($i.h,To.h,t),i=xa($i.s,To.s,t),s=xa($i.l,To.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Me;Me.NAMES=Fp;var er=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new N,Ti=new N,ru=new N,Ei=new N,ls=new N,cs=new N,Af=new N,su=new N,au=new N,ou=new N,lu=new Ke,cu=new Ke,uu=new Ke,Ci=class r{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){$n.subVectors(i,t),Ti.subVectors(n,t),ru.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ti),l=$n.dot(ru),c=Ti.dot(Ti),u=Ti.dot(ru),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return lu.setScalar(0),cu.setScalar(0),uu.setScalar(0),lu.fromBufferAttribute(e,t),cu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(lu,s.x),a.addScaledVector(cu,s.y),a.addScaledVector(uu,s.z),a}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),Ti.subVectors(e,t),$n.cross(Ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),$n.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;ls.subVectors(i,n),cs.subVectors(s,n),su.subVectors(e,n);let l=ls.dot(su),c=cs.dot(su);if(l<=0&&c<=0)return t.copy(n);au.subVectors(e,i);let u=ls.dot(au),h=cs.dot(au);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ls,a);ou.subVectors(e,s);let f=ls.dot(ou),g=cs.dot(ou);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(cs,o);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Af.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Af,o);let m=1/(p+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),wo.subVectors(this.max,oa),us.subVectors(e.a,oa),hs.subVectors(e.b,oa),ds.subVectors(e.c,oa),Ki.subVectors(hs,us),Ji.subVectors(ds,hs),vr.subVectors(us,ds);let t=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-vr.z,vr.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,vr.z,0,-vr.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-vr.y,vr.x,0];return!hu(t,us,hs,ds,wo)||(t=[1,0,0,0,1,0,0,0,1],!hu(t,us,hs,ds,wo))?!1:(Ao.crossVectors(Ki,Ji),t=[Ao.x,Ao.y,Ao.z],hu(t,us,hs,ds,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new N,new N,new N,new N,new N,new N,new N,new N],Kn=new N,Eo=new Pn,us=new N,hs=new N,ds=new N,Ki=new N,Ji=new N,vr=new N,oa=new N,wo=new N,Ao=new N,Sr=new N;function hu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Sr.fromArray(r,s);let o=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Nt=new N,Ro=new Ae,F0=0,mt=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ju,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ma=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ta=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var an=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},O0=new Pn,la=new N,du=new N,_n=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):O0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(du)),this.expandByPoint(la.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},B0=0,Bn=new Ue,fu=new gt,fs=new N,Cn=new Pn,ca=new Pn,Gt=new N,Ut=class r extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l0(e)?Ta:Ma)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Cn.min,ca.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,ca.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(ca.min),Cn.expandByPoint(ca.max))}Cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Gt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Gt.add(fs)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new N,l[x]=new N;let c=new N,u=new N,h=new N,d=new Ae,f=new Ae,g=new Ae,_=new N,p=new N;function m(x,b,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,C),d.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,C),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[x].add(_),o[b].add(_),o[C].add(_),l[x].add(p),l[b].add(p),l[C].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){let C=M[x],P=C.start,F=C.count;for(let O=P,I=P+F;O<I;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let A=new N,v=new N,S=new N,E=new N;function w(x){S.fromBufferAttribute(i,x),E.copy(S);let b=o[x];A.copy(b),A.sub(S.multiplyScalar(S.dot(b))).normalize(),v.crossVectors(E,b);let P=v.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,P)}for(let x=0,b=M.length;x<b;++x){let C=M[x],P=C.start,F=C.count;for(let O=P,I=P+F;O<I;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new mt(d,u,h)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ju,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},rn=new N,tr=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pu=new N,z0=new N,k0=new Ne,Jn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=pu.subVectors(n,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(pu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||k0.getNormalMatrix(e),i=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},H0=0,cn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=zs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=Ba,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ps=class extends cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ps,ua=new N,ms=new N,gs=new N,_s=new Ae,ha=new Ae,Op=new Ue,Co=new N,da=new N,Po=new N,Rf=new Ae,mu=new Ae,Cf=new Ae,Ea=class extends gt{constructor(e=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rr(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new tr(n,3,0,!1)),ps.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=ps,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Io(Co.set(-.5,-.5,0),gs,a,ms,i,s),Io(da.set(.5,-.5,0),gs,a,ms,i,s),Io(Po.set(.5,.5,0),gs,a,ms,i,s),Rf.set(0,0),mu.set(1,0),Cf.set(1,1);let o=e.ray.intersectTriangle(Co,da,Po,!1,ua);if(o===null&&(Io(da.set(-.5,.5,0),gs,a,ms,i,s),mu.set(0,1),o=e.ray.intersectTriangle(Co,Po,da,!1,ua),o===null))return;let l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||t.push({distance:l,point:ua.clone(),uv:Ci.getInterpolation(ua,Co,da,Po,Rf,mu,Cf,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Io(r,e,t,n,i,s){_s.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ha.x=s*_s.x-i*_s.y,ha.y=i*_s.x+s*_s.y):ha.copy(_s),r.copy(e),r.x+=ha.x,r.y+=ha.y,r.applyMatrix4(Op)}var Ai=new N,gu=new N,Lo=new N,No=new N,Cr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gu.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),No.copy(this.origin).sub(gu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),o=No.dot(this.direction),l=-No.dot(Lo),c=No.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(gu).addScaledVector(Lo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,v=Math.abs(l),S=Math.abs(c),E=Math.abs(u),w,x,b,C,P,F,O,I,B,W,G,Q;if(v>=S&&v>=E?(b=l,F=h,B=g,Q=m,l>=0?(w=c,x=u,C=d,P=f,O=_,I=p,W=M,G=A):(w=u,x=c,C=f,P=d,O=p,I=_,W=A,G=M)):S>=E?(b=c,F=d,B=_,Q=M,c>=0?(w=u,x=l,C=f,P=h,O=p,I=g,W=A,G=m):(w=l,x=u,C=h,P=f,O=g,I=p,W=m,G=A)):(b=u,F=f,B=p,Q=A,u>=0?(w=l,x=c,C=h,P=d,O=g,I=_,W=m,G=M):(w=c,x=l,C=d,P=h,O=_,I=g,W=M,G=m)),b===0)return null;let Y=w/b,J=x/b,te=1/b,Se=C-Y*F,Te=P-J*F,Ye=O-Y*B,Fe=I-J*B,je=W-Y*Q,Z=G-J*Q,ee=je*Fe-Z*Ye,xe=Se*Z-Te*je,De=Ye*Te-Fe*Se;if(i){if(ee<0||xe<0||De<0)return null}else if((ee<0||xe<0||De<0)&&(ee>0||xe>0||De>0))return null;let ge=ee+xe+De;if(ge===0)return null;let He=te*(ee*F+xe*B+De*Q);return(ge>0?He<0:He>0)?null:this.at(He/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pf=new Ue,br=new Cr,Do=new _n,If=new N,Uo=new N,Fo=new N,Oo=new N,_u=new N,Bo=new N,Lf=new N,zo=new N,xt=class extends gt{constructor(e=new Ut,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(_u.fromBufferAttribute(h,e),a?Bo.addScaledVector(_u,u):Bo.addScaledVector(_u.sub(t),u))}t.add(Bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Do.containsPoint(br.origin)===!1&&(br.intersectSphere(Do,If)===null||br.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Pf.copy(s).invert(),br.copy(e.ray).applyMatrix4(Pf),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,S=A;v<S;v+=3){let E=o.getX(v),w=o.getX(v+1),x=o.getX(v+2);i=ko(this,m,e,n,c,u,h,E,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);i=ko(this,a,e,n,c,u,h,M,A,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,S=A;v<S;v+=3){let E=v,w=v+1,x=v+2;i=ko(this,m,e,n,c,u,h,E,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,A=p+1,v=p+2;i=ko(this,a,e,n,c,u,h,M,A,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function V0(r,e,t,n,i,s,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===pi,o),l===null)return null;zo.copy(o),zo.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(zo);return c<t.near||c>t.far?null:{distance:c,point:zo.clone(),object:r}}function ko(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Uo),r.getVertexPosition(l,Fo),r.getVertexPosition(c,Oo);let u=V0(r,e,t,n,Uo,Fo,Oo,Lf);if(u){let h=new N;Ci.getBarycoord(Lf,Uo,Fo,Oo,h),i&&(u.uv=Ci.getInterpolatedAttribute(i,o,l,c,h,new Ae)),s&&(u.uv1=Ci.getInterpolatedAttribute(s,o,l,c,h,new Ae)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Ci.getNormal(Uo,Fo,Oo,d.normal),u.face=d,u.barycoord=h}return u}var fa=new Ke,Nf=new Ke,Df=new Ke,G0=new Ke,Uf=new Ue,Ho=new N,xu=new _n,Ff=new Ue,yu=new Cr,wa=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xu.copy(this.boundingSphere),xu.applyMatrix4(i),e.ray.intersectsSphere(xu)!==!1&&(Ff.copy(i).invert(),yu.copy(e.ray).applyMatrix4(Ff),!(this.boundingBox!==null&&yu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Nf.fromBufferAttribute(i.attributes.skinIndex,e),Df.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(fa.copy(t),t.set(0,0,0,0)):(fa.set(...t,1),t.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Df.getComponent(s);if(a!==0){let o=Nf.getComponent(s);Uf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(G0.copy(fa).applyMatrix4(Uf),a)}}return t.isVector4&&(t.w=fa.w),t.applyMatrix4(this.bindMatrixInverse)}},Is=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Li=class extends Ot{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Rt,u=Rt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Of=new Ue,W0=new Ue,Aa=class r{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:W0;Of.multiplyMatrices(o,t[s]),Of.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Li(t,e,e,Jt,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(we("Skeleton: No bone found with UUID:",s),a=new Is),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ni=class extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Ue,Bf=new Ue,Vo=[],zf=new Pn,X0=new Ue,pa=new xt,ma=new _n,Ra=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,X0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),zf.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(zf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),ma.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xs),Bf.multiplyMatrices(n,xs),pa.matrixWorld=Bf,pa.raycast(e,Vo);for(let a=0,o=Vo.length;a<o;a++){let l=Vo[a];l.instanceId=s,l.object=this,t.push(l)}Vo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Li(new Float32Array(i*this.count),i,this.count,Nl,Ln));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mr=new _n,Y0=new Ae(.5,.5),Go=new N,Ls=class{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],M=s[12],A=s[13],v=s[14],S=s[15];if(i[0].setComponents(c-a,f-u,m-g,S-M).normalize(),i[1].setComponents(c+a,f+u,m+g,S+M).normalize(),i[2].setComponents(c+o,f+h,m+_,S+A).normalize(),i[3].setComponents(c-o,f-h,m-_,S-A).normalize(),n)i[4].setComponents(l,d,p,v).normalize(),i[5].setComponents(c-l,f-d,m-p,S-v).normalize();else if(i[4].setComponents(c-l,f-d,m-p,S-v).normalize(),t===Qn)i[5].setComponents(c+l,f+d,m+p,S+v).normalize();else if(t===Es)i[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);let t=Y0.distanceTo(e.center);return Mr.radius=.7071067811865476+t,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cl=new N,ul=new N,kf=new Ue,ga=new Cr,Wo=new _n,vu=new N,Hf=new N,Pr=class extends gt{constructor(e=new Ut,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)cl.fromBufferAttribute(t,i-1),ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cl.distanceTo(ul);e.setAttribute("lineDistance",new an(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;kf.copy(i).invert(),ga.copy(e.ray).applyMatrix4(kf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=u.getX(_),M=u.getX(_+1),A=Xo(this,e,ga,l,m,M,_);A&&t.push(A)}if(this.isLineLoop){let _=u.getX(g-1),p=u.getX(f),m=Xo(this,e,ga,l,_,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=Xo(this,e,ga,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Xo(this,e,ga,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Xo(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(cl.fromBufferAttribute(o,i),ul.fromBufferAttribute(o,s),t.distanceSqToSegment(cl,ul,vu,Hf)>n)return;vu.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(vu);if(!(c<e.near||c>e.far))return{distance:c,point:Hf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Vf=new N,Gf=new N,Ca=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vf.fromBufferAttribute(t,i),Gf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vf.distanceTo(Gf);e.setAttribute("lineDistance",new an(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ir=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ns=class extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wf=new Ue,Ru=new Cr,Yo=new _n,qo=new N,Lr=class extends gt{constructor(e=new Ut,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;Wf.copy(i).invert(),Ru.copy(e.ray).applyMatrix4(Wf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let p=c.getX(g);qo.fromBufferAttribute(h,p),Xf(qo,p,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)qo.fromBufferAttribute(h,g),Xf(qo,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Xf(r,e,t,n,i,s,a){let o=Ru.distanceSqToPoint(r);if(o<t){let l=new N;Ru.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pa=class extends Ot{constructor(e=[],t=sr,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nr=class extends Ot{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ir=class extends Ot{constructor(e,t,n=ri,i,s,a,o=Rt,l=Rt,c,u=ui,h=1){if(u!==ui&&u!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},hl=class extends ir{constructor(e,t=ri,n=sr,i,s,a=Rt,o=Rt,l,c=ui){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ds=class r extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function g(_,p,m,M,A,v,S,E,w,x,b){let C=v/w,P=S/x,F=v/2,O=S/2,I=E/2,B=w+1,W=x+1,G=0,Q=0,Y=new N;for(let J=0;J<W;J++){let te=J*P-O;for(let Se=0;Se<B;Se++){let Te=Se*C-F;Y[_]=Te*M,Y[p]=te*A,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Se/w),h.push(1-J/x),G+=1}}for(let J=0;J<x;J++)for(let te=0;te<w;te++){let Se=d+te+B*J,Te=d+te+B*(J+1),Ye=d+(te+1)+B*(J+1),Fe=d+(te+1)+B*J;l.push(Se,Te,Fe),l.push(Te,Ye,Fe),Q+=6}o.addGroup(f,Q,b),f+=Q,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var zn=class r extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let M=m*d-a;for(let A=0;A<c;A++){let v=A*h-s;g.push(v,-M,0),_.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let A=M+c*m,v=M+c*(m+1),S=M+1+c*(m+1),E=M+1+c*m;f.push(A,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function Gr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(Yf(i))i.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Yf(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function jt(r){let e={};for(let t=0;t<r.length;t++){let n=Gr(r[t]);for(let i in n)e[i]=n[i]}return e}function Yf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function q0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function eh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var Bp={clone:Gr,merge:jt},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=$0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dl=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Di=class extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends Di{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var fl=class extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function jo(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function K0(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function J0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var di=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends di{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wu:s=e,o=2*t-n;break;case Au:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:a=e,l=2*n-t;break;case Au:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let S=0;S!==o;++S)s[S]=m*a[u+S]+M*a[c+S]+A*a[l+S]+v*a[h+S];return s}},gl=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}},_l=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends di{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(i-t),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*d+g*2,M=h[m],A=h[m+1],v=e*d+g*2,S=u[v],E=u[v+1],w=Q0(n,t,M,S,i);s[g]=zp(w,_,A,E,p)}return s}};function zp(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function j0(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Q0(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=zp(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=j0(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),jo(e.settings)&&(n.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break;case Tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;jo(this.settings)&&(Zf(this.settings.inTangents,e),Zf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&c0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ko,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,jo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Zf(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=wr;var Ui=class extends yn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Er;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};La.prototype.ValueTypeName="color";var Fi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Fi.prototype.ValueTypeName="number";var yl=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)ln.slerpFlat(s,0,a,c-o,a,c,l);return s}},Oi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};Oi.prototype.ValueTypeName="quaternion";Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends yn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Er;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};rr.prototype.ValueTypeName="vector";var Na=class{constructor(e="",t=-1,n=[],i=bp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(t_(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=K0(l);l=qf(l,1,u),c=qf(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function e_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return La;case"quaternion":return Oi;case"bool":case"boolean":return Ui;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function t_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=e_(r.type);if(r.times===void 0){let n=[],i=[];J0(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),jo(r.settings)&&(t.settings={inTangents:Qi(r.settings.inTangents,Float32Array),outTangents:Qi(r.settings.outTangents,Float32Array)}),t}var ci={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&($f(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!$f(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function $f(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var vl=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kp=new vl,fi=class{constructor(e){this.manager=e!==void 0?e:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},Cu=class extends Error{constructor(e,t){super(e),this.response=t}},Us=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ci.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ri[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){M();function M(){h.read().then(({done:A,value:v})=>{if(A)m.close();else{_+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,w=u.length;E<w;E++){let x=u[E];x.onProgress&&x.onProgress(S)}m.enqueue(v),M()}},A=>{m.error(A)})}}});return new Response(p)}else throw new Cu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ci.add(`file:${e}`,c);let u=Ri[e];delete Ri[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ys=new WeakMap,Sl=class extends fi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ys.get(a);h===void 0&&(h=[],ys.set(a,h)),h.push({onLoad:t,onError:i})}return a}let o=ws("img");function l(){u(),t&&t(this);let h=ys.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}ys.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),ci.remove(`image:${e}`);let d=ys.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}ys.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Dr=class extends fi{constructor(e){super(e)}load(e,t,n,i){let s=new Ot,a=new Sl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ur=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fs=class extends Ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Su=new Ue,Kf=new N,Jf=new N,Os=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kf),Jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Su,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===Es||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zo=new N,$o=new ln,li=new N,Da=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,$o,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zo,$o,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new N,jf=new Ae,Qf=new Ae,Dt=class extends Da{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,jf,Qf),t.subVectors(Qf,jf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pu=class extends Os{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ar*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ua=class extends Ur{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Iu=class extends Os{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},Fr=class extends Ur{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},kn=class extends Da{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lu=class extends Os{constructor(){super(new kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ni=class extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Lu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var bu=new WeakMap,Fa=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ci.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{bu.has(a)===!0?(i&&i(bu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),bu.set(l,c),ci.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var vs=-90,Ss=1,bl=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dt(vs,Ss,e,t);i.layers=this.layers,this.add(i);let s=new Dt(vs,Ss,e,t);s.layers=this.layers,this.add(s);let a=new Dt(vs,Ss,e,t);a.layers=this.layers,this.add(a);let o=new Dt(vs,Ss,e,t);o.layers=this.layers,this.add(o);let l=new Dt(vs,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Dt(vs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ml=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Oa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=n_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function n_(){this._document.hidden===!1&&this.reset()}var th="\\[\\]\\.:\\/",i_=new RegExp("["+th+"]","g"),nh="[^"+th+"]",r_="[^"+th.replace("\\.","")+"]",s_=/((?:WC+[\/:])*)/.source.replace("WC",nh),a_=/(WCOD+)?/.source.replace("WCOD",r_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),c_=new RegExp("^"+s_+a_+o_+l_+"$"),u_=["material","materials","bones","map"],Nu=class{constructor(e,t,n){let i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(e){let t=c_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);u_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=Nu;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D1=new Float32Array(1);var lh=class lh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};lh.prototype.isMatrix2=!0;var Du=lh;function ih(r,e,t,n){let i=h_(n);switch(t){case Zu:return r*e;case Nl:return r*e/i.components*i.byteLength;case Dl:return r*e/i.components*i.byteLength;case or:return r*e*2/i.components*i.byteLength;case Ul:return r*e*2/i.components*i.byteLength;case $u:return r*e*3/i.components*i.byteLength;case Jt:return r*e*4/i.components*i.byteLength;case Fl:return r*e*4/i.components*i.byteLength;case Ga:case Wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bl:case kl:return Math.max(r,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(r,8)*Math.max(e,8)/2;case Hl:case Vl:case Wl:case Xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gl:case qa:case Yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case oc:case lc:case cc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case uc:case hc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Za:case dc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h_(r){switch(r){case vn:case Wu:return{byteLength:1,components:1};case Hs:case Xu:case si:return{byteLength:2,components:1};case Il:case Ll:return{byteLength:2,components:4};case ri:case Pl:case Ln:return{byteLength:4,components:1};case Yu:case qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lm(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function f_(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var p_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ax=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ox=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,by=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,My=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:p_,alphahash_pars_fragment:m_,alphamap_fragment:g_,alphamap_pars_fragment:__,alphatest_fragment:x_,alphatest_pars_fragment:y_,aomap_fragment:v_,aomap_pars_fragment:S_,batching_pars_vertex:b_,batching_vertex:M_,begin_vertex:T_,beginnormal_vertex:E_,bsdfs:w_,iridescence_fragment:A_,bumpmap_pars_fragment:R_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:L_,color_fragment:N_,color_pars_fragment:D_,color_pars_vertex:U_,color_vertex:F_,common:O_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:z_,displacementmap_pars_vertex:k_,displacementmap_vertex:H_,emissivemap_fragment:V_,emissivemap_pars_fragment:G_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:Y_,envmap_common_pars_fragment:q_,envmap_pars_fragment:Z_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:ax,envmap_vertex:K_,fog_vertex:J_,fog_pars_vertex:j_,fog_fragment:Q_,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:rx,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:dx,lights_fragment_begin:fx,lights_fragment_maps:px,lights_fragment_end:mx,lightprobes_pars_fragment:gx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:xx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:vx,map_fragment:Sx,map_pars_fragment:bx,map_particle_fragment:Mx,map_particle_pars_fragment:Tx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:wx,morphinstance_vertex:Ax,morphcolor_vertex:Rx,morphnormal_vertex:Cx,morphtarget_pars_vertex:Px,morphtarget_vertex:Ix,normal_fragment_begin:Lx,normal_fragment_maps:Nx,normal_pars_fragment:Dx,normal_pars_vertex:Ux,normal_vertex:Fx,normalmap_pars_fragment:Ox,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Hx,opaque_fragment:Vx,packing:Gx,premultiplied_alpha_fragment:Wx,project_vertex:Xx,dithering_fragment:Yx,dithering_pars_fragment:qx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:Jx,shadowmap_vertex:jx,shadowmask_pars_fragment:Qx,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:ry,specularmap_pars_fragment:sy,tonemapping_fragment:ay,tonemapping_pars_fragment:oy,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:uy,uv_pars_vertex:hy,uv_vertex:dy,worldpos_vertex:fy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:_y,cube_vert:xy,cube_frag:yy,depth_vert:vy,depth_frag:Sy,distance_vert:by,distance_frag:My,equirect_vert:Ty,equirect_frag:Ey,linedashed_vert:wy,linedashed_frag:Ay,meshbasic_vert:Ry,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:Iy,meshmatcap_vert:Ly,meshmatcap_frag:Ny,meshnormal_vert:Dy,meshnormal_frag:Uy,meshphong_vert:Fy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:zy,meshtoon_vert:ky,meshtoon_frag:Hy,points_vert:Vy,points_frag:Gy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:Yy,sprite_frag:qy},he={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},_i={basic:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:jt([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:jt([he.lights,he.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};_i.physical={uniforms:jt([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var gc={r:0,b:0,g:0},Zy=new Ue,cm=new Ne;cm.set(-1,0,0,0,1,0,0,0,1);function $y(r,e,t,n,i,s){let a=new Me(0),o=i===!0?0:1,l,c,u=null,h=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=e.get(A,v)}return A}function g(M){let A=!1,v=f(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Va)?(c===void 0&&(c=new xt(new Ds(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Gr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cm),c.material.toneMapped=ke.getTransfer(v.colorSpace)!==tt,(u!==v||h!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new xt(new zn(2,2),new Bt({name:"BackgroundMaterial",uniforms:Gr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ke.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(gc,eh(r)),t.buffers.color.setClear(gc.r,gc.g,gc.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Ky(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(P,F,O,I,B){let W=!1,G=h(P,I,O,F);s!==G&&(s=G,c(s.object)),W=f(P,I,O,B),W&&g(P,I,O,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(P,F,O,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function h(P,F,O,I){let B=I.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let G=P.isInstancedMesh===!0?P.id:0,Q=W[G];Q===void 0&&(Q={},W[G]=Q);let Y=Q[O.id];Y===void 0&&(Y={},Q[O.id]=Y);let J=Y[B];return J===void 0&&(J=d(l()),Y[B]=J),J}function d(P){let F=[],O=[],I=[];for(let B=0;B<t;B++)F[B]=0,O[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,F,O,I){let B=s.attributes,W=F.attributes,G=0,Q=O.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let te=B[Y],Se=W[Y];if(Se===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor)),te===void 0||te.attribute!==Se||Se&&te.data!==Se.data)return!0;G++}return s.attributesNum!==G||s.index!==I}function g(P,F,O,I){let B={},W=F.attributes,G=0,Q=O.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let te=W[Y];te===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));let Se={};Se.attribute=te,te&&te.data&&(Se.data=te.data),B[Y]=Se,G++}s.attributes=B,s.attributesNum=G,s.index=I}function _(){let P=s.newAttributes;for(let F=0,O=P.length;F<O;F++)P[F]=0}function p(P){m(P,0)}function m(P,F){let O=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;O[P]=1,I[P]===0&&(r.enableVertexAttribArray(P),I[P]=1),B[P]!==F&&(r.vertexAttribDivisor(P,F),B[P]=F)}function M(){let P=s.newAttributes,F=s.enabledAttributes;for(let O=0,I=F.length;O<I;O++)F[O]!==P[O]&&(r.disableVertexAttribArray(O),F[O]=0)}function A(P,F,O,I,B,W,G){G===!0?r.vertexAttribIPointer(P,F,O,B,W):r.vertexAttribPointer(P,F,O,I,B,W)}function v(P,F,O,I){_();let B=I.attributes,W=O.getAttributes(),G=F.defaultAttributeValues;for(let Q in W){let Y=W[Q];if(Y.location>=0){let J=B[Q];if(J===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let te=J.normalized,Se=J.itemSize,Te=e.get(J);if(Te===void 0)continue;let Ye=Te.buffer,Fe=Te.type,je=Te.bytesPerElement,Z=Fe===r.INT||Fe===r.UNSIGNED_INT||J.gpuType===Pl;if(J.isInterleavedBufferAttribute){let ee=J.data,xe=ee.stride,De=J.offset;if(ee.isInstancedInterleavedBuffer){for(let ge=0;ge<Y.locationSize;ge++)m(Y.location+ge,ee.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<Y.locationSize;ge++)p(Y.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ge=0;ge<Y.locationSize;ge++)A(Y.location+ge,Se/Y.locationSize,Fe,te,xe*je,(De+Se/Y.locationSize*ge)*je,Z)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee,J.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ee=0;ee<Y.locationSize;ee++)A(Y.location+ee,Se/Y.locationSize,Fe,te,Se*je,Se/Y.locationSize*ee*je,Z)}}else if(G!==void 0){let te=G[Q];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(Y.location,te);break;case 3:r.vertexAttrib3fv(Y.location,te);break;case 4:r.vertexAttrib4fv(Y.location,te);break;default:r.vertexAttrib1fv(Y.location,te)}}}}M()}function S(){b();for(let P in n){let F=n[P];for(let O in F){let I=F[O];for(let B in I){let W=I[B];for(let G in W)u(W[G].object),delete W[G];delete I[B]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let O in F){let I=F[O];for(let B in I){let W=I[B];for(let G in W)u(W[G].object),delete W[G];delete I[B]}}delete n[P.id]}function w(P){for(let F in n){let O=n[F];for(let I in O){let B=O[I];if(B[P.id]===void 0)continue;let W=B[P.id];for(let G in W)u(W[G].object),delete W[G];delete B[P.id]}}}function x(P){for(let F in n){let O=n[F],I=P.isInstancedMesh===!0?P.id:0,B=O[I];if(B!==void 0){for(let W in B){let G=B[W];for(let Q in G)u(G[Q].object),delete G[Q];delete B[W]}delete O[I],Object.keys(O).length===0&&delete n[F]}}}function b(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Jy(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function jy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Jt&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&w!==Ln&&!x&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(we("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:S,samples:E}}function Qy(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Jn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let M=s?0:n,A=M*4,v=m.clippingState||null;l.value=v,v=u(g,d,A,f);for(let S=0;S!==A;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,v=f;A!==_;++A,v+=4)a.copy(h[A]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Xs=4,ev=6,tv=20,nv=256,Ka=new kn,Hp=new Me,ch=null,uh=0,hh=0,dh=!1,iv=new N,Wr=new N,xc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=iv}=s;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,uh,hh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ot,minFilter:ot,generateMipmaps:!1,type:si,format:Jt,colorSpace:on,depthBuffer:!1},i=Vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rv(s)),this._blurMaterial=av(s,e,t),this._ggxMaterial=sv(s,e,t)}return i}_compileMaterial(e){let t=new xt(new Ut,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i,s){let l=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Hp),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Ds,new In({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(Hp),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));let S=this._cubeSize;Ws(i,v*S,A>2?S:0,S,S),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===sr||e.mapping===Hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Xs?n-g+Xs:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ws(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,Ka),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ws(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,Ka)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],h=3*u*(i>this._lodMax-Xs?i-this._lodMax+Xs:0),d=4*(this._cubeSize-u);Ws(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Ka)}};function rv(r){let e=[],t=[],n=r,i=r-Xs+1+ev;for(let s=0;s<i;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,g=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let m=0;m<h;m++){let M=m%3*2/3-1,A=m>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(v,f*d*m);for(let S=0;S<d;S++){let E=u[S*2]*2-1,w=u[S*2+1]*2-1;m===0?Wr.set(1,w,E):m===1?Wr.set(-E,1,-w):m===2?Wr.set(-E,w,1):m===3?Wr.set(-1,w,-E):m===4?Wr.set(-E,-1,w):Wr.set(E,w,-1),Wr.toArray(_,(m*d+S)*f)}}let p=new Ut;p.setAttribute("position",new mt(g,f)),p.setAttribute("outputDirection",new mt(_,f)),t.push(new xt(p,null)),n>Xs&&n--}return{lodMeshes:t,sizeLods:e}}function Vp(r,e,t){let n=new gn(r,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function sv(r,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function av(r,e,t){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:tv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Gp(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Wp(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yc=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Pa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ds(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:mi});s.uniforms.tEquirect.value=t;let a=new xt(i,s),o=t.minFilter;return t.minFilter===hn&&(t.minFilter=ot),new bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function ov(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Al||f===Rl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new yc(g.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Al||f===Rl,_=f===sr||f===Hr;if(g||_){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new xc(r)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new xc(r)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Al?d.mapping=sr:f===Rl&&(d.mapping=Hr),d}function l(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function lv(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Tr("WebGLRenderer: "+n+" extension not supported."),i}}}function cv(r,e,t,n){let i={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let A=0,v=M.length;A<v;A+=3){let S=M[A+0],E=M[A+1],w=M[A+2];d.push(S,E,E,w,w,S)}}else{let M=g.array;_=g.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let S=A+0,E=A+1,w=A+2;d.push(S,E,E,w,w,S)}}let p=new(g.count>=65535?Ta:Ma)(d,1);p.version=_;let m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function uv(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function hv(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dv(r,e,t){let n=new WeakMap,i=new Ke;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*S*4*h),w=new Sa(E,v,S,h);w.type=Ln,w.needsUpdate=!0;let x=A*4;for(let C=0;C<h;C++){let P=p[C],F=m[C],O=M[C],I=v*S*4*C;for(let B=0;B<P.count;B++){let W=B*x;f===!0&&(i.fromBufferAttribute(P,B),E[I+W+0]=i.x,E[I+W+1]=i.y,E[I+W+2]=i.z,E[I+W+3]=0),g===!0&&(i.fromBufferAttribute(F,B),E[I+W+4]=i.x,E[I+W+5]=i.y,E[I+W+6]=i.z,E[I+W+7]=0),_===!0&&(i.fromBufferAttribute(O,B),E[I+W+8]=i.x,E[I+W+9]=i.y,E[I+W+10]=i.z,E[I+W+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new Ae(v,S)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function fv(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var pv={[za]:"LINEAR_TONE_MAPPING",[ka]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[kr]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[Ha]:"NEUTRAL_TONE_MAPPING",[Hu]:"CUSTOM_TONE_MAPPING"};function mv(r,e,t,n,i,s){let a=new gn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ut;c.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new an([0,2,0,0,2,0],2));let u=new dl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new xt(c,u),d=new kn(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,M=[],A=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let E=0;E<M.length;E++){let w=M[E];w.setSize&&w.setSize(v,S)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let S=a.width,E=a.height;M.length>0&&o===null&&(o=new gn(S,E,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new gn(S,E,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let x=M[w];x.setSize&&x.setSize(S,E)}},this.begin=function(v,S){if(_||v.toneMapping===ii&&M.length===0)return!1;if(m=S,S!==null){let E=S.width,w=S.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=ii,!0},this.hasRenderPass=function(){return A},this.end=function(v,S){v.toneMapping=p,_=!0;let E=a,w=o;for(let x=0;x<M.length;x++){let b=M[x];b.enabled!==!1&&(b.render(v,w,E,S),b.needsSwap!==!1&&(E=w,w=w===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},ke.getTransfer(f)===tt&&(u.defines.SRGB_TRANSFER="");let x=pv[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(m),v.render(h,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var um=new Ot,mh=new ir(1,1),hm=new Sa,dm=new ll,fm=new Pa,Xp=[],Yp=[],qp=new Float32Array(16),Zp=new Float32Array(9),$p=new Float32Array(4);function Zs(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Xp[i];if(s===void 0&&(s=new Float32Array(i),Xp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sc(r,e){let t=Yp[e];t===void 0&&(t=new Int32Array(e),Yp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function gv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _v(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),kt(t,e)}}function xv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),kt(t,e)}}function yv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),kt(t,e)}}function vv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;$p.set(n),r.uniformMatrix2fv(this.addr,!1,$p),kt(t,n)}}function Sv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Zp.set(n),r.uniformMatrix3fv(this.addr,!1,Zp),kt(t,n)}}function bv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;qp.set(n),r.uniformMatrix4fv(this.addr,!1,qp),kt(t,n)}}function Mv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Tv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),kt(t,e)}}function Ev(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),kt(t,e)}}function wv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),kt(t,e)}}function Av(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Rv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),kt(t,e)}}function Cv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),kt(t,e)}}function Pv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),kt(t,e)}}function Iv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mh.compareFunction=t.isReversedDepthBuffer()?mc:pc,s=mh):s=um,t.setTexture2D(e||s,i)}function Lv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dm,i)}function Nv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fm,i)}function Dv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hm,i)}function Uv(r){switch(r){case 5126:return gv;case 35664:return _v;case 35665:return xv;case 35666:return yv;case 35674:return vv;case 35675:return Sv;case 35676:return bv;case 5124:case 35670:return Mv;case 35667:case 35671:return Tv;case 35668:case 35672:return Ev;case 35669:case 35673:return wv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Fv(r,e){r.uniform1fv(this.addr,e)}function Ov(r,e){let t=Zs(e,this.size,2);r.uniform2fv(this.addr,t)}function Bv(r,e){let t=Zs(e,this.size,3);r.uniform3fv(this.addr,t)}function zv(r,e){let t=Zs(e,this.size,4);r.uniform4fv(this.addr,t)}function kv(r,e){let t=Zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hv(r,e){let t=Zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Vv(r,e){let t=Zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gv(r,e){r.uniform1iv(this.addr,e)}function Wv(r,e){r.uniform2iv(this.addr,e)}function Xv(r,e){r.uniform3iv(this.addr,e)}function Yv(r,e){r.uniform4iv(this.addr,e)}function qv(r,e){r.uniform1uiv(this.addr,e)}function Zv(r,e){r.uniform2uiv(this.addr,e)}function $v(r,e){r.uniform3uiv(this.addr,e)}function Kv(r,e){r.uniform4uiv(this.addr,e)}function Jv(r,e,t){let n=this.cache,i=e.length,s=Sc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=mh:a=um;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function jv(r,e,t){let n=this.cache,i=e.length,s=Sc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||dm,s[a])}function Qv(r,e,t){let n=this.cache,i=e.length,s=Sc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||fm,s[a])}function eS(r,e,t){let n=this.cache,i=e.length,s=Sc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hm,s[a])}function tS(r){switch(r){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return Zv;case 36295:return $v;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return eS}}var gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tS(t.type)}},xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Kp(r,e){r.seq.push(e),r.map[e.id]=e}function nS(r,e,t){let n=r.name,i=n.length;for(fh.lastIndex=0;;){let s=fh.exec(n),a=fh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Kp(t,c===void 0?new gh(o,r,e):new _h(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new xh(o),Kp(t,h)),t=h}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Jp(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var iS=37297,rS=0;function sS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var jp=new Ne;function aS(r){ke._getMatrix(jp,ke.workingColorSpace,r);let e=`mat3( ${jp.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(r)){case ya:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+sS(r.getShaderSource(e),o)}else return s}function oS(r,e){let t=aS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var lS={[za]:"Linear",[ka]:"Reinhard",[ku]:"Cineon",[kr]:"ACESFilmic",[Vu]:"AgX",[Ha]:"Neutral",[Hu]:"Custom"};function cS(r,e){let t=lS[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _c=new N;function uS(){ke.getLuminanceCoefficients(_c);let r=_c.x.toFixed(4),e=_c.y.toFixed(4),t=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function dS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ja(r){return r!==""}function em(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(r){return r.replace(pS,gS)}var mS=new Map;function gS(r,e){let t=ze[e];if(t===void 0){let n=mS.get(e);if(n!==void 0)t=ze[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yh(t)}var _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(r){return r.replace(_S,xS)}function xS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function im(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var yS={[Or]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function vS(r){return yS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var SS={[sr]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function bS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":SS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var MS={[Hr]:"ENVMAP_MODE_REFRACTION"};function TS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":MS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ES={[zu]:"ENVMAP_BLENDING_MULTIPLY",[yp]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function wS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ES[r.combine]||"ENVMAP_BLENDING_NONE"}function AS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function RS(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=vS(t),c=bS(t),u=TS(t),h=wS(t),d=AS(t),f=hS(t),g=dS(s),_=i.createProgram(),p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`)):(p=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),m=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ze.tonemapping_pars_fragment:"",t.toneMapping!==ii?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,oS("linearToOutputTexel",t.outputColorSpace),uS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),a=yh(a),a=em(a,t),a=tm(a,t),o=yh(o),o=em(o,t),o=tm(o,t),a=nm(a),o=nm(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+p+a,v=M+m+o,S=Jp(i,i.VERTEX_SHADER,A),E=Jp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(E)||"",B=F.trim(),W=O.trim(),G=I.trim(),Q=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,E);else{let J=Qp(i,S,"vertex"),te=Qp(i,E,"fragment");Le("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+J+`
`+te)}else B!==""?we("WebGLProgram: Program Info Log:",B):(W===""||G==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Q,programLog:B,vertexShader:{log:W,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(S),i.deleteShader(E),x=new Ys(i,_),b=fS(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,iS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}var CS=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sh(e),t.set(e,n)),n}},Sh=class{constructor(e){this.id=CS++,this.code=e,this.usedTimes=0}};function PS(r){return r===or||r===qa||r===Za}function IS(r,e,t,n,i,s){let a=new ba,o=new vh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,C,P,F,O){let I=P.fog,B=F.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||W,G),Y=Q&&Q.mapping===Va?Q.image.height:null,J=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=te!==void 0?te.length:0,Te=0;B.morphAttributes.position!==void 0&&(Te=1),B.morphAttributes.normal!==void 0&&(Te=2),B.morphAttributes.color!==void 0&&(Te=3);let Ye,Fe,je,Z;if(J){let dt=_i[J];Ye=dt.vertexShader,Fe=dt.fragmentShader}else{Ye=x.vertexShader,Fe=x.fragmentShader;let dt=o.getVertexShaderStage(x),Qe=o.getFragmentShaderStage(x);o.update(x,dt,Qe),je=dt.id,Z=Qe.id}let ee=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,He=!!x.map,Ft=!!x.matcap,Ge=!!Q,Je=!!x.aoMap,ht=!!x.lightMap,qe=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Vt=!!x.displacementMap,pn=!!x.emissiveMap,vt=!!x.metalnessMap,It=!!x.roughnessMap,U=x.anisotropy>0,qt=x.clearcoat>0,nt=x.dispersion>0,R=x.retroreflectivity>0,y=x.iridescence>0,z=x.sheen>0,V=x.transmission>0,q=U&&!!x.anisotropyMap,re=qt&&!!x.clearcoatMap,se=qt&&!!x.clearcoatNormalMap,$=qt&&!!x.clearcoatRoughnessMap,j=y&&!!x.iridescenceMap,ae=y&&!!x.iridescenceThicknessMap,Re=z&&!!x.sheenColorMap,ue=z&&!!x.sheenRoughnessMap,oe=!!x.specularMap,Ce=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Oe=V&&!!x.transmissionMap,D=V&&!!x.thicknessMap,le=!!x.gradientMap,K=!!x.alphaMap,ce=x.alphaTest>0,pe=!!x.alphaHash,ne=!!x.extensions,Pe=ii;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=r.toneMapping);let be={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:Fe,defines:x.defines,customVertexShaderID:je,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:Ft,envMap:Ge,envMapMode:Ge&&Q.mapping,envMapCubeUVHeight:Y,aoMap:Je,lightMap:ht,bumpMap:qe,normalMap:_t,displacementMap:Vt,emissiveMap:pn,normalMapObjectSpace:_t&&x.normalMapType===Tp,normalMapTangentSpace:_t&&x.normalMapType===fc,packedNormalMap:_t&&x.normalMapType===fc&&PS(x.normalMap.format),metalnessMap:vt,roughnessMap:It,anisotropy:U,anisotropyMap:q,clearcoat:qt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:$,dispersion:nt,retroreflection:R,iridescence:y,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:z,sheenColorMap:Re,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:Ce,specularIntensityMap:Ie,transmission:V,transmissionMap:Oe,thicknessMap:D,gradientMap:le,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:pe,combine:x.combine,mapUv:He&&g(x.map.channel),aoMapUv:Je&&g(x.aoMap.channel),lightMapUv:ht&&g(x.lightMap.channel),bumpMapUv:qe&&g(x.bumpMap.channel),normalMapUv:_t&&g(x.normalMap.channel),displacementMapUv:Vt&&g(x.displacementMap.channel),emissiveMapUv:pn&&g(x.emissiveMap.channel),metalnessMapUv:vt&&g(x.metalnessMap.channel),roughnessMapUv:It&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:re&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(x.sheenRoughnessMap.channel),specularMapUv:oe&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Ie&&g(x.specularIntensityMap.channel),transmissionMapUv:Oe&&g(x.transmissionMap.channel),thicknessMapUv:D&&g(x.thicknessMap.channel),alphaMapUv:K&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_t||U),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(He||K),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&ke.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:pn&&x.emissiveMap.isVideoTexture===!0&&ke.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let b=f[x.type],C;if(b){let P=_i[b];C=Bp.clone(P.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new RS(r,b,x,i),c.push(C),u.set(b,C)),C}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:w}}function LS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function NS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function rm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sm(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,p,m){let M=r[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},r[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=p,M.group=m),e++,M}function l(d,f,g,_,p,m,M){M.reversedDepth===!0&&(p=-p);let A=o(d,f,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):t.push(A)}function c(d,f,g,_,p,m){let M=o(d,f,g,_,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||NS),n.length>1&&n.sort(f||rm),i.length>1&&i.sort(f||rm)}function h(){for(let d=e,f=r.length;d<f;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function DS(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new sm,r.set(n,[a])):i>=s.length?(a=new sm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function US(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Me};break;case"SpotLight":t={position:new N,direction:new N,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function FS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var OS=0;function BS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zS(r){let e=new US,t=FS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,s=new Ue,a=new Ue;function o(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,A=0,v=0,S=0,E=0,w=0,x=0,b=0,C=0;c.sort(BS);for(let F=0,O=c.length;F<O;F++){let I=c[F],B=I.color,W=I.intensity,G=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===or?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*W,h+=B.g*W,d+=B.b*W;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],W);C++}else if(I.isSunLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=Q;let Se=J.getViewportCount();for(let Te=0;Te<Se;Te++)n.sunShadowMatrix[_+Te]=J.getMatrix(Te),n.sunShadowCascade[_+Te]=J._cascadeData[Te];_+=Se,g++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.directionalShadow[p]=te,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=Y,p++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(W),Y.distance=G,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[M]=Y;let J=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,J.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[M]=J.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=Q,w++}M++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(B).multiplyScalar(W),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=Y,A++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let J=I.shadow,te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=I.shadow.matrix,E++}n.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(W),Y.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[v]=Y,v++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==A||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==w||P.numSpotMaps!==x||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=M,P.rectAreaLength=A,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=w,P.numSpotMaps=x,P.numLightProbes=C,n.version=OS++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0,p=0,m=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let v=c[M];if(v.isSunLight){let S=n.sun[h];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function am(r){let e=new zS(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function kS(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new am(r),e.set(i,[o])):s>=a.length?(o=new am(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GS=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],WS=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],om=new Ue,Ja=new N,ph=new N;function XS(r,e,t){let n=new Ls,i=new Ae,s=new Ae,a=new Ke,o=new fl,l=new pl,c={},u=t.maxTextureSize,h={[pi]:un,[un]:pi,[Hn]:Hn},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:HS,fragmentShader:VS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let m=this.type;this.render=function(E,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===np&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Or);let b=r.getRenderTarget(),C=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(mi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=m!==this.type;O&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let W=E[I],G=W.shadow;if(G===void 0){we("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let Q=G.getFrameExtents();i.multiply(Q),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,G.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Bs){if(W.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new gn(i.x,i.y,{format:or,type:si,minFilter:ot,magFilter:ot,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new ir(i.x,i.y,Ln),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=ui,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Rt,G.map.depthTexture.magFilter=Rt}else W.isPointLight?(G.map=new yc(i.x),G.map.depthTexture=new hl(i.x,ri)):(G.map=new gn(i.x,i.y),G.map.depthTexture=new ir(i.x,i.y,ri)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=ui,this.type===Or?(G.map.depthTexture.compareFunction=Y?mc:pc,G.map.depthTexture.minFilter=ot,G.map.depthTexture.magFilter=ot):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Rt,G.map.depthTexture.magFilter=Rt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();W.isPointLight!==!0&&G.updateMatrices(W,x);for(let te=0;te<J;te++){let Se=G.getCamera(te);if(W.isPointLight){let Te=G.camera,Ye=G.matrix,Fe=W.distance||Te.far;Fe!==Te.far&&(Te.far=Fe,Te.updateProjectionMatrix()),Ja.setFromMatrixPosition(W.matrixWorld),Te.position.copy(Ja),ph.copy(Te.position),ph.add(GS[te]),Te.up.copy(WS[te]),Te.lookAt(ph),Te.updateMatrixWorld(),Ye.makeTranslation(-Ja.x,-Ja.y,-Ja.z),om.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(om,Te.coordinateSystem,Te.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,te),r.clear();else{te===0&&(r.setRenderTarget(G.map),r.clear());let Te=G.getViewport(te);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),F.viewport(a)}n=G.getFrustum(te),v(w,x,Se,W,this.type)}G.isPointLightShadow!==!0&&this.type===Bs&&M(G,x),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(b,C,P)};function M(E,w){let x=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new gn(i.x,i.y,{format:or,type:si}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,x,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,x,f,_,null)}function A(E,w,x,b){let C=null,P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=C.uuid,O=w.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let B=I[O];B===void 0&&(B=C.clone(),I[O]=B,w.addEventListener("dispose",S)),C=B}if(C.visible=w.visible,C.wireframe=w.wireframe,b===Bs?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:h[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=r.properties.get(C);F.light=x}return C}function v(E,w,x,b,C){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Bs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let O=e.update(E),I=E.material;if(Array.isArray(I)){let B=O.groups;for(let W=0,G=B.length;W<G;W++){let Q=B[W],Y=I[Q.materialIndex];if(Y&&Y.visible){let J=A(E,Y,b,C);E.onBeforeShadow(r,E,w,x,O,J,Q),r.renderBufferDirect(x,null,O,J,E,Q),E.onAfterShadow(r,E,w,x,O,J,Q)}}}else if(I.visible){let B=A(E,I,b,C);E.onBeforeShadow(r,E,w,x,O,B,null),r.renderBufferDirect(x,null,O,B,E,null),E.onAfterShadow(r,E,w,x,O,B,null)}}let F=E.children;for(let O=0,I=F.length;O<I;O++)v(F[O],w,x,b,C)}function S(E){E.target.removeEventListener("dispose",S);for(let x in c){let b=c[x],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function YS(r,e){function t(){let D=!1,le=new Ke,K=null,ce=new Ke(0,0,0,0);return{setMask:function(pe){K!==pe&&!D&&(r.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){D=pe},setClear:function(pe,ne,Pe,be,dt){dt===!0&&(pe*=be,ne*=be,Pe*=be),le.set(pe,ne,Pe,be),ce.equals(le)===!1&&(r.clearColor(pe,ne,Pe,be),ce.copy(le))},reset:function(){D=!1,K=null,ce.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,K=null,ce=null,pe=null;return{setReversed:function(ne){if(le!==ne){let Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),le=ne;let be=pe;pe=null,this.setClear(be)}},getReversed:function(){return le},setTest:function(ne){ne?ee(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(ne){K!==ne&&!D&&(r.depthMask(ne),K=ne)},setFunc:function(ne){if(le&&(ne=Up[ne]),ce!==ne){switch(ne){case Qo:r.depthFunc(r.NEVER);break;case el:r.depthFunc(r.ALWAYS);break;case tl:r.depthFunc(r.LESS);break;case Ms:r.depthFunc(r.LEQUAL);break;case nl:r.depthFunc(r.EQUAL);break;case il:r.depthFunc(r.GEQUAL);break;case rl:r.depthFunc(r.GREATER);break;case sl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=ne}},setLocked:function(ne){D=ne},setClear:function(ne){pe!==ne&&(pe=ne,le&&(ne=1-ne),r.clearDepth(ne))},reset:function(){D=!1,K=null,ce=null,pe=null,le=!1}}}function i(){let D=!1,le=null,K=null,ce=null,pe=null,ne=null,Pe=null,be=null,dt=null;return{setTest:function(Qe){D||(Qe?ee(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!D&&(r.stencilMask(Qe),le=Qe)},setFunc:function(Qe,qn,ai){(K!==Qe||ce!==qn||pe!==ai)&&(r.stencilFunc(Qe,qn,ai),K=Qe,ce=qn,pe=ai)},setOp:function(Qe,qn,ai){(ne!==Qe||Pe!==qn||be!==ai)&&(r.stencilOp(Qe,qn,ai),ne=Qe,Pe=qn,be=ai)},setLocked:function(Qe){D=Qe},setClear:function(Qe){dt!==Qe&&(r.clearStencil(Qe),dt=Qe)},reset:function(){D=!1,le=null,K=null,ce=null,pe=null,ne=null,Pe=null,be=null,dt=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,v=null,S=null,E=null,w=null,x=new Me(0,0,0),b=0,C=!1,P=null,F=null,O=null,I=null,B=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=Q>=2);let J=null,te={},Se=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),Ye=new Ke().fromArray(Se),Fe=new Ke().fromArray(Te);function je(D,le,K,ce){let pe=new Uint8Array(4),ne=r.createTexture();r.bindTexture(D,ne),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<K;Pe++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(le+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return ne}let Z={};Z[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(Ms),qe(!1),_t(Uu),ee(r.CULL_FACE),Je(mi);function ee(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function xe(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function De(D,le){return d[D]!==le?(r.bindFramebuffer(D,le),d[D]=le,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(D,le){let K=g,ce=!1;if(D){K=f.get(le),K===void 0&&(K=[],f.set(le,K));let pe=D.textures;if(K.length!==pe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,Pe=pe.length;ne<Pe;ne++)K[ne]=r.COLOR_ATTACHMENT0+ne;K.length=pe.length,ce=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,ce=!0);ce&&r.drawBuffers(K)}function He(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Ft={[zr]:r.FUNC_ADD,[ip]:r.FUNC_SUBTRACT,[rp]:r.FUNC_REVERSE_SUBTRACT};Ft[sp]=r.MIN,Ft[ap]=r.MAX;let Ge={[op]:r.ZERO,[wl]:r.ONE,[lp]:r.SRC_COLOR,[Bu]:r.SRC_ALPHA,[pp]:r.SRC_ALPHA_SATURATE,[dp]:r.DST_COLOR,[up]:r.DST_ALPHA,[cp]:r.ONE_MINUS_SRC_COLOR,[Ba]:r.ONE_MINUS_SRC_ALPHA,[fp]:r.ONE_MINUS_DST_COLOR,[hp]:r.ONE_MINUS_DST_ALPHA,[mp]:r.CONSTANT_COLOR,[gp]:r.ONE_MINUS_CONSTANT_COLOR,[_p]:r.CONSTANT_ALPHA,[xp]:r.ONE_MINUS_CONSTANT_ALPHA};function Je(D,le,K,ce,pe,ne,Pe,be,dt,Qe){if(D===mi){p===!0&&(xe(r.BLEND),p=!1);return}if(p===!1&&(ee(r.BLEND),p=!0),D!==El){if(D!==m||Qe!==C){if((M!==zr||S!==zr)&&(r.blendEquation(r.FUNC_ADD),M=zr,S=zr),Qe)switch(D){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Br:r.blendFunc(r.ONE,r.ONE);break;case Fu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ou:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",D);break}else switch(D){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Fu:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ou:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",D);break}A=null,v=null,E=null,w=null,x.set(0,0,0),b=0,m=D,C=Qe}return}pe=pe||le,ne=ne||K,Pe=Pe||ce,(le!==M||pe!==S)&&(r.blendEquationSeparate(Ft[le],Ft[pe]),M=le,S=pe),(K!==A||ce!==v||ne!==E||Pe!==w)&&(r.blendFuncSeparate(Ge[K],Ge[ce],Ge[ne],Ge[Pe]),A=K,v=ce,E=ne,w=Pe),(be.equals(x)===!1||dt!==b)&&(r.blendColor(be.r,be.g,be.b,dt),x.copy(be),b=dt),m=D,C=!1}function ht(D,le){D.side===Hn?xe(r.CULL_FACE):ee(r.CULL_FACE);let K=D.side===un;le&&(K=!K),qe(K),D.blending===zs&&D.transparent===!1?Je(mi):Je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){P!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),P=D)}function _t(D){D!==ep?(ee(r.CULL_FACE),D!==F&&(D===Uu?r.cullFace(r.BACK):D===tp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),F=D}function Vt(D){D!==O&&(G&&r.lineWidth(D),O=D)}function pn(D,le,K){D?(ee(r.POLYGON_OFFSET_FILL),(I!==le||B!==K)&&(I=le,B=K,a.getReversed()&&(le=-le),r.polygonOffset(le,K))):xe(r.POLYGON_OFFSET_FILL)}function vt(D){D?ee(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function It(D){D===void 0&&(D=r.TEXTURE0+W-1),J!==D&&(r.activeTexture(D),J=D)}function U(D,le,K){K===void 0&&(J===null?K=r.TEXTURE0+W-1:K=J);let ce=te[K];ce===void 0&&(ce={type:void 0,texture:void 0},te[K]=ce),(ce.type!==D||ce.texture!==le)&&(J!==K&&(r.activeTexture(K),J=K),r.bindTexture(D,le||Z[D]),ce.type=D,ce.texture=le)}function qt(){let D=te[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{r.compressedTexImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function y(){try{r.texSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function z(){try{r.texSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function q(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function re(){try{r.texStorage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function se(){try{r.texStorage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function $(){try{r.texImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function j(){try{r.texImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function ae(D){return h[D]!==void 0?h[D]:r.getParameter(D)}function Re(D,le){h[D]!==le&&(r.pixelStorei(D,le),h[D]=le)}function ue(D){Ye.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function oe(D){Fe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function Ce(D,le){let K=c.get(le);K===void 0&&(K=new WeakMap,c.set(le,K));let ce=K.get(D);ce===void 0&&(ce=r.getUniformBlockIndex(le,D.name),K.set(D,ce))}function Ie(D,le){let ce=c.get(le).get(D);l.get(le)!==ce&&(r.uniformBlockBinding(le,ce,D.__bindingPointIndex),l.set(le,ce))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,te={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,v=null,S=null,E=null,w=null,x=new Me(0,0,0),b=0,C=!1,P=null,F=null,O=null,I=null,B=null,Ye.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:De,drawBuffers:ge,useProgram:He,setBlending:Je,setMaterial:ht,setFlipSided:qe,setCullFace:_t,setLineWidth:Vt,setPolygonOffset:pn,setScissorTest:vt,activeTexture:It,bindTexture:U,unbindTexture:qt,compressedTexImage2D:nt,compressedTexImage3D:R,texImage2D:$,texImage3D:j,pixelStorei:Re,getParameter:ae,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:re,texStorage3D:se,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:ue,viewport:oe,reset:Oe}}function qS(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,h=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return g?new OffscreenCanvas(R,y):ws("canvas")}function p(R,y,z){let V=1,q=nt(R);if((q.width>z||q.height>z)&&(V=z/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let re=Math.floor(V*q.width),se=Math.floor(V*q.height);d===void 0&&(d=_(re,se));let $=y?_(re,se):d;return $.width=re,$.height=se,$.getContext("2d").drawImage(R,0,0,re,se),we("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+se+")."),$}else return"data"in R&&we("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function m(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,y,z,V,q,re=!1){if(R!==null){if(r[R]!==void 0)return r[R];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se;V&&(se=e.get("EXT_texture_norm16"),se||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===r.RED&&(z===r.FLOAT&&($=r.R32F),z===r.HALF_FLOAT&&($=r.R16F),z===r.UNSIGNED_BYTE&&($=r.R8),z===r.UNSIGNED_SHORT&&se&&($=se.R16_EXT),z===r.SHORT&&se&&($=se.R16_SNORM_EXT)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.R8UI),z===r.UNSIGNED_SHORT&&($=r.R16UI),z===r.UNSIGNED_INT&&($=r.R32UI),z===r.BYTE&&($=r.R8I),z===r.SHORT&&($=r.R16I),z===r.INT&&($=r.R32I)),y===r.RG&&(z===r.FLOAT&&($=r.RG32F),z===r.HALF_FLOAT&&($=r.RG16F),z===r.UNSIGNED_BYTE&&($=r.RG8),z===r.UNSIGNED_SHORT&&se&&($=se.RG16_EXT),z===r.SHORT&&se&&($=se.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RG8UI),z===r.UNSIGNED_SHORT&&($=r.RG16UI),z===r.UNSIGNED_INT&&($=r.RG32UI),z===r.BYTE&&($=r.RG8I),z===r.SHORT&&($=r.RG16I),z===r.INT&&($=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGB8UI),z===r.UNSIGNED_SHORT&&($=r.RGB16UI),z===r.UNSIGNED_INT&&($=r.RGB32UI),z===r.BYTE&&($=r.RGB8I),z===r.SHORT&&($=r.RGB16I),z===r.INT&&($=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGBA8UI),z===r.UNSIGNED_SHORT&&($=r.RGBA16UI),z===r.UNSIGNED_INT&&($=r.RGBA32UI),z===r.BYTE&&($=r.RGBA8I),z===r.SHORT&&($=r.RGBA16I),z===r.INT&&($=r.RGBA32I)),y===r.RGB&&(z===r.UNSIGNED_SHORT&&se&&($=se.RGB16_EXT),z===r.SHORT&&se&&($=se.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),y===r.RGBA){let j=re?ya:ke.getTransfer(q);z===r.FLOAT&&($=r.RGBA32F),z===r.HALF_FLOAT&&($=r.RGBA16F),z===r.UNSIGNED_BYTE&&($=j===tt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&se&&($=se.RGBA16_EXT),z===r.SHORT&&se&&($=se.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(R,y){let z;return R?y===null||y===ri||y===Vs?z=r.DEPTH24_STENCIL8:y===Ln?z=r.DEPTH32F_STENCIL8:y===Hs&&(z=r.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ri||y===Vs?z=r.DEPTH_COMPONENT24:y===Ln?z=r.DEPTH_COMPONENT32F:y===Hs&&(z=r.DEPTH_COMPONENT16),z}function E(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rt&&R.minFilter!==ot?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){let y=R.target;y.removeEventListener("dispose",w),b(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function x(R){let y=R.target;y.removeEventListener("dispose",x),P(y)}function b(R){let y=n.get(R);if(y.__webglInit===void 0)return;let z=R.source,V=f.get(z);if(V){let q=V[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(R),Object.keys(V).length===0&&f.delete(z)}n.remove(R)}function C(R){let y=n.get(R);r.deleteTexture(y.__webglTexture);let z=R.source,V=f.get(z);delete V[y.__cacheKey],a.memory.textures--}function P(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let q=0;q<y.__webglFramebuffer[V].length;q++)r.deleteFramebuffer(y.__webglFramebuffer[V][q]);else r.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)r.deleteFramebuffer(y.__webglFramebuffer[V]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=R.textures;for(let V=0,q=z.length;V<q;V++){let re=n.get(z[V]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(z[V])}n.remove(R)}let F=0;function O(){F=0}function I(){return F}function B(R){F=R}function W(){let R=F;return R>=i.maxTextures&&we("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function G(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Q(R,y){let z=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let V=R.image;if(V===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function Y(R,y){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){xe(z,R,y);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function J(R,y){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){xe(z,R,y);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function te(R,y){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){De(z,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}let Se={[ti]:r.REPEAT,[sn]:r.CLAMP_TO_EDGE,[Ts]:r.MIRRORED_REPEAT},Te={[Rt]:r.NEAREST,[Cl]:r.NEAREST_MIPMAP_NEAREST,[Vr]:r.NEAREST_MIPMAP_LINEAR,[ot]:r.LINEAR,[ks]:r.LINEAR_MIPMAP_NEAREST,[hn]:r.LINEAR_MIPMAP_LINEAR},Ye={[wp]:r.NEVER,[Ip]:r.ALWAYS,[Ap]:r.LESS,[pc]:r.LEQUAL,[Rp]:r.EQUAL,[mc]:r.GEQUAL,[Cp]:r.GREATER,[Pp]:r.NOTEQUAL};function Fe(R,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ot||y.magFilter===ks||y.magFilter===Vr||y.magFilter===hn||y.minFilter===ot||y.minFilter===ks||y.minFilter===Vr||y.minFilter===hn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Se[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Se[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Se[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Te[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rt||y.minFilter!==Vr&&y.minFilter!==hn||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function je(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));let V=y.source,q=f.get(V);q===void 0&&(q={},f.set(V,q));let re=G(y);if(re!==R.__cacheKey){q[re]===void 0&&(q[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),q[re].usedTimes++;let se=q[R.__cacheKey];se!==void 0&&(q[R.__cacheKey].usedTimes--,se.usedTimes===0&&C(y)),R.__cacheKey=re,R.__webglTexture=q[re].texture}return z}function Z(R,y,z){return Math.floor(Math.floor(R/z)/y)}function ee(R,y,z,V){let re=R.updateRanges;if(re.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,z,V,y.data);else{re.sort((Re,ue)=>Re.start-ue.start);let se=0;for(let Re=1;Re<re.length;Re++){let ue=re[se],oe=re[Re],Ce=ue.start+ue.count,Ie=Z(oe.start,y.width,4),Oe=Z(ue.start,y.width,4);oe.start<=Ce+1&&Ie===Oe&&Z(oe.start+oe.count-1,y.width,4)===Ie?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,re[se]=oe)}re.length=se+1;let $=t.getParameter(r.UNPACK_ROW_LENGTH),j=t.getParameter(r.UNPACK_SKIP_PIXELS),ae=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Re=0,ue=re.length;Re<ue;Re++){let oe=re[Re],Ce=Math.floor(oe.start/4),Ie=Math.ceil(oe.count/4),Oe=Ce%y.width,D=Math.floor(Ce/y.width),le=Ie,K=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Oe,D,le,K,z,V,y.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,j),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function xe(R,y,z){let V=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=r.TEXTURE_3D);let q=je(R,y),re=y.source;t.bindTexture(V,R.__webglTexture,r.TEXTURE0+z);let se=n.get(re);if(re.version!==se.__version||q===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let K=ke.getPrimaries(ke.workingColorSpace),ce=y.colorSpace===Sn?null:ke.getPrimaries(y.colorSpace),pe=y.colorSpace===Sn||K===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let j=p(y.image,!1,i.maxTextureSize);j=qt(y,j);let ae=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),ue=v(y.internalFormat,ae,Re,y.normalized,y.colorSpace,y.isVideoTexture);Fe(V,y);let oe,Ce=y.mipmaps,Ie=y.isVideoTexture!==!0,Oe=se.__version===void 0||q===!0,D=re.dataReady,le=E(y,j);if(y.isDepthTexture)ue=S(y.format===ar,y.type),Oe&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,ue,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Re,null));else if(y.isDataTexture)if(Ce.length>0){Ie&&Oe&&t.texStorage2D(r.TEXTURE_2D,le,ue,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?D&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Re,oe.data):t.texImage2D(r.TEXTURE_2D,K,ue,oe.width,oe.height,0,ae,Re,oe.data);y.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(r.TEXTURE_2D,le,ue,j.width,j.height),D&&ee(y,j,ae,Re)):t.texImage2D(r.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Re,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ue,Ce[0].width,Ce[0].height,j.depth);for(let K=0,ce=Ce.length;K<ce;K++)if(oe=Ce[K],y.format!==Jt)if(ae!==null)if(Ie){if(D)if(y.layerUpdates.size>0){let pe=ih(oe.width,oe.height,y.format,y.type);for(let ne of y.layerUpdates){let Pe=oe.data.subarray(ne*pe/oe.data.BYTES_PER_ELEMENT,(ne+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ne,oe.width,oe.height,1,ae,Pe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,j.depth,ae,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,ue,oe.width,oe.height,j.depth,0,oe.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,j.depth,ae,Re,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,ue,oe.width,oe.height,j.depth,0,ae,Re,oe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ie&&Oe&&t.texStorage2D(r.TEXTURE_2D,le,ue,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],y.format!==Jt?ae!==null?Ie?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,K,ue,oe.width,oe.height,0,oe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Re,oe.data):t.texImage2D(r.TEXTURE_2D,K,ue,oe.width,oe.height,0,ae,Re,oe.data)}else if(y.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ue,j.width,j.height,j.depth),D)if(y.layerUpdates.size>0){let K=ih(j.width,j.height,y.format,y.type);for(let ce of y.layerUpdates){let pe=j.data.subarray(ce*K/j.data.BYTES_PER_ELEMENT,(ce+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ce,j.width,j.height,1,ae,Re,pe)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,Re,j.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,ae,Re,j.data);else if(y.isData3DTexture)Ie?(Oe&&t.texStorage3D(r.TEXTURE_3D,le,ue,j.width,j.height,j.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,Re,j.data)):t.texImage3D(r.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,ae,Re,j.data);else if(y.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(r.TEXTURE_2D,le,ue,j.width,j.height);else{let K=j.width,ce=j.height;for(let pe=0;pe<le;pe++)t.texImage2D(r.TEXTURE_2D,pe,ue,K,ce,0,ae,Re,null),K>>=1,ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let K=r.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),h.add(y),K.onpaint=ce=>{let pe=ce.changedElements;for(let ne of h)pe.includes(ne.image)&&(ne.needsUpdate=!0)},K.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let pe=r.RGBA,ne=r.RGBA,Pe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,pe,ne,Pe,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ie&&Oe){let K=nt(Ce[0]);t.texStorage2D(r.TEXTURE_2D,le,ue,K.width,K.height)}for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?D&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ae,Re,oe):t.texImage2D(r.TEXTURE_2D,K,ue,ae,Re,oe);y.generateMipmaps=!1}else if(Ie){if(Oe){let K=nt(j);t.texStorage2D(r.TEXTURE_2D,le,ue,K.width,K.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Re,j)}else t.texImage2D(r.TEXTURE_2D,0,ue,ae,Re,j);m(y)&&M(V),se.__version=re.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function De(R,y,z){if(y.image.length!==6)return;let V=je(R,y),q=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);let re=n.get(q);if(q.version!==re.__version||V===!0){t.activeTexture(r.TEXTURE0+z);let se=ke.getPrimaries(ke.workingColorSpace),$=y.colorSpace===Sn?null:ke.getPrimaries(y.colorSpace),j=y.colorSpace===Sn||se===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!ae&&!Re?ue[ne]=p(y.image[ne],!0,i.maxCubemapSize):ue[ne]=Re?y.image[ne].image:y.image[ne],ue[ne]=qt(y,ue[ne]);let oe=ue[0],Ce=s.convert(y.format,y.colorSpace),Ie=s.convert(y.type),Oe=v(y.internalFormat,Ce,Ie,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,le=re.__version===void 0||V===!0,K=q.dataReady,ce=E(y,oe);Fe(r.TEXTURE_CUBE_MAP,y);let pe;if(ae){D&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,oe.width,oe.height);for(let ne=0;ne<6;ne++){pe=ue[ne].mipmaps;for(let Pe=0;Pe<pe.length;Pe++){let be=pe[Pe];y.format!==Jt?Ce!==null?D?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Oe,be.width,be.height,0,be.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,be.width,be.height,Ce,Ie,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Oe,be.width,be.height,0,Ce,Ie,be.data)}}}else{if(pe=y.mipmaps,D&&le){pe.length>0&&ce++;let ne=nt(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){D?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ce,Ie,ue[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,ue[ne].width,ue[ne].height,0,Ce,Ie,ue[ne].data);for(let Pe=0;Pe<pe.length;Pe++){let dt=pe[Pe].image[ne].image;D?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,dt.width,dt.height,Ce,Ie,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Oe,dt.width,dt.height,0,Ce,Ie,dt.data)}}else{D?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Ie,ue[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,Ce,Ie,ue[ne]);for(let Pe=0;Pe<pe.length;Pe++){let be=pe[Pe];D?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ce,Ie,be.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Oe,Ce,Ie,be.image[ne])}}}m(y)&&M(r.TEXTURE_CUBE_MAP),re.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ge(R,y,z,V,q,re){let se=s.convert(z.format,z.colorSpace),$=s.convert(z.type),j=v(z.internalFormat,se,$,z.normalized,z.colorSpace),ae=n.get(y),Re=n.get(z);if(Re.__renderTarget=y,!ae.__hasExternalTextures){let ue=Math.max(1,y.width>>re),oe=Math.max(1,y.height>>re);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?t.texImage3D(q,re,j,ue,oe,y.depth,0,se,$,null):t.texImage2D(q,re,j,ue,oe,0,se,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,q,Re.__webglTexture,0,vt(y)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,q,Re.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(R,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){let V=y.depthTexture,q=V&&V.isDepthTexture?V.type:null,re=S(y.stencilBuffer,q),se=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;It(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt(y),re,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt(y),re,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,re,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,R)}else{let V=y.textures;for(let q=0;q<V.length;q++){let re=V[q],se=s.convert(re.format,re.colorSpace),$=s.convert(re.type),j=v(re.internalFormat,se,$,re.normalized,re.colorSpace);It(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt(y),j,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt(y),j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ft(R,y,z){let V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,y.depthTexture);let ae=s.convert(y.depthTexture.format),Re=s.convert(y.depthTexture.type),ue;y.depthTexture.format===ui?ue=r.DEPTH_COMPONENT24:y.depthTexture.format===ar&&(ue=r.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,y.width,y.height,0,ae,Re,null)}}else Q(y.depthTexture,0);let re=q.__webglTexture,se=vt(y),$=V?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,j=y.depthTexture.format===ar?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===ui)It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,re,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,re,0);else if(y.depthTexture.format===ar)It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,re,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(R){let y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let V=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=V}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)Ft(y.__webglFramebuffer[V],R,V);else{let V=R.texture.mipmaps;V&&V.length>0?Ft(y.__webglFramebuffer[0],R,0):Ft(y.__webglFramebuffer,R,0)}else if(z){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=r.createRenderbuffer(),He(y.__webglDepthbuffer[V],R,!1);else{let q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,re)}}else{let V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),He(y.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,re)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(R,y,z){let V=n.get(R);y!==void 0&&ge(V.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ge(R)}function ht(R){let y=R.texture,z=n.get(R),V=n.get(y);R.addEventListener("dispose",x);let q=R.textures,re=R.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=y.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let j=0;j<y.mipmaps.length;j++)z.__webglFramebuffer[$][j]=r.createFramebuffer()}else z.__webglFramebuffer[$]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)z.__webglFramebuffer[$]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(se)for(let $=0,j=q.length;$<j;$++){let ae=n.get(q[$]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&It(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){let j=q[$];z.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let ae=s.convert(j.format,j.colorSpace),Re=s.convert(j.type),ue=v(j.internalFormat,ae,Re,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),oe=vt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,z.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),He(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ge(z.__webglFramebuffer[$][j],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else ge(z.__webglFramebuffer[$],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(y)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let $=0,j=q.length;$<j;$++){let ae=q[$],Re=n.get(ae),ue=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,Re.__webglTexture),Fe(ue,ae),ge(z.__webglFramebuffer,R,ae,r.COLOR_ATTACHMENT0+$,ue,0),m(ae)&&M(ue)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,V.__webglTexture),Fe($,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ge(z.__webglFramebuffer[j],R,y,r.COLOR_ATTACHMENT0,$,j);else ge(z.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,$,0);m(y)&&M($),t.unbindTexture()}R.depthBuffer&&Ge(R)}function qe(R){let y=R.textures;for(let z=0,V=y.length;z<V;z++){let q=y[z];if(m(q)){let re=A(R),se=n.get(q).__webglTexture;t.bindTexture(re,se),M(re),t.unbindTexture()}}}let _t=[],Vt=[];function pn(R){if(R.samples>0){if(It(R)===!1){let y=R.textures,z=R.width,V=R.height,q=r.COLOR_BUFFER_BIT,re=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(R),$=y.length>1;if($)for(let ae=0;ae<y.length;ae++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<y.length;ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);let Re=n.get(y[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,z,V,0,0,z,V,q,r.NEAREST),l===!0&&(_t.length=0,Vt.length=0,_t.push(r.COLOR_ATTACHMENT0+ae),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(re),Vt.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let ae=0;ae<y.length;ae++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);let Re=n.get(y[ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,Re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function vt(R){return Math.min(i.maxSamples,R.samples)}function It(R){let y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(R){let y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function qt(R,y){let z=R.colorSpace,V=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==on&&z!==Sn&&(ke.getTransfer(z)===tt?(V!==Jt||q!==vn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",z)),y}function nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=Je,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ZS(r,e){function t(n,i=Sn){let s,a=ke.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===Il)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wu)return r.BYTE;if(n===Xu)return r.SHORT;if(n===Hs)return r.UNSIGNED_SHORT;if(n===Pl)return r.INT;if(n===ri)return r.UNSIGNED_INT;if(n===Ln)return r.FLOAT;if(n===si)return r.HALF_FLOAT;if(n===Zu)return r.ALPHA;if(n===$u)return r.RGB;if(n===Jt)return r.RGBA;if(n===ui)return r.DEPTH_COMPONENT;if(n===ar)return r.DEPTH_STENCIL;if(n===Nl)return r.RED;if(n===Dl)return r.RED_INTEGER;if(n===or)return r.RG;if(n===Ul)return r.RG_INTEGER;if(n===Fl)return r.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===Ya)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===qa||n===Yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hl||n===Vl)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return s.COMPRESSED_R11_EAC;if(n===Xl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qa)return s.COMPRESSED_RG11_EAC;if(n===Yl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Zl||n===$l||n===Kl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ql)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===lc||n===cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oc)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===hc||n===Za||n===dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===uc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var $S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:$S,fragmentShader:KS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends hi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new bh,m={},M=t.getContextAttributes(),A=null,v=null,S=[],E=[],w=new Ae,x=null,b=null,C=new Dt;C.viewport=new Ke;let P=new Dt;P.viewport=new Ke;let F=[C,P],O=new Ml,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Cs,S[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Cs,S[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Cs,S[Z]=ee),ee.getHandSpace()};function W(Z){let ee=E.indexOf(Z.inputSource);if(ee===-1)return;let xe=S[ee];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<S.length;Z++){let ee=E[Z];ee!==null&&(E[Z]=null,S[Z].disconnect(ee))}I=null,B=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(A),f=null,d=null,h=null,i=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),b!==null){let Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,De=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?ar:ui,De=M.stencil?Vs:ri);let He={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new gn(d.textureWidth,d.textureHeight,{format:Jt,type:vn,depthTexture:new ir(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new gn(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Z){for(let ee=0;ee<Z.removed.length;ee++){let xe=Z.removed[ee],De=E.indexOf(xe);De>=0&&(E[De]=null,S[De].disconnect(xe))}for(let ee=0;ee<Z.added.length;ee++){let xe=Z.added[ee],De=E.indexOf(xe);if(De===-1){for(let He=0;He<S.length;He++)if(He>=E.length){E.push(xe),De=He;break}else if(E[He]===null){E[He]=xe,De=He;break}if(De===-1)break}let ge=S[De];ge&&ge.connect(xe)}}let Y=new N,J=new N;function te(Z,ee,xe){Y.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);let De=Y.distanceTo(J),ge=ee.projectionMatrix.elements,He=xe.projectionMatrix.elements,Ft=ge[14]/(ge[10]-1),Ge=ge[14]/(ge[10]+1),Je=(ge[9]+1)/ge[5],ht=(ge[9]-1)/ge[5],qe=(ge[8]-1)/ge[0],_t=(He[8]+1)/He[0],Vt=Ft*qe,pn=Ft*_t,vt=De/(-qe+_t),It=vt*-qe;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(It),Z.translateZ(vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let U=Ft+vt,qt=Ge+vt,nt=Vt-It,R=pn+(De-It),y=Je*Ge/qt*U,z=ht*Ge/qt*U;Z.projectionMatrix.makePerspective(nt,R,y,z,U,qt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,xe=Z.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),O.near=P.near=C.near=ee,O.far=P.far=C.far=xe,(I!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,B=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let De=Z.parent,ge=O.cameras;Se(O,De);for(let He=0;He<ge.length;He++)Se(ge[He],De);ge.length===2?te(O,C,P):O.projectionMatrix.copy(C.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),Te(Z,O,De)};function Te(Z,ee,xe){xe===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ar*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Z){return m[Z]};let Ye=null;function Fe(Z,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let Ge=0;Ge<xe.length;Ge++){let Je=xe[Ge],ht=null;if(f!==null)ht=f.getViewport(Je);else{let _t=h.getViewSubImage(d,Je);ht=_t.viewport,Ge===0&&(e.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(v))}let qe=F[Ge];qe===void 0&&(qe=new Dt,qe.layers.enable(Ge),qe.viewport=new Ke,F[Ge]=qe),qe.matrix.fromArray(Je.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Je.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ht.x,ht.y,ht.width,ht.height),Ge===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(qe)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Ge=h.getDepthInformation(xe[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,i.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ge=0;Ge<xe.length;Ge++){let Je=xe[Ge].camera;if(Je){let ht=m[Je];ht||(ht=new Ia,m[Je]=ht);let qe=h.getCameraImage(Je);ht.sourceTexture=qe}}}}for(let xe=0;xe<S.length;xe++){let De=E[xe],ge=S[xe];De!==null&&ge!==void 0&&ge.update(De,ee,c||a)}Ye&&Ye(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let je=new lm;je.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}},JS=new Ue,pm=new Ne;pm.set(-1,0,0,0,1,0,0,0,1);function jS(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,eh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,v=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(JS.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function QS(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let E=S.program;n.uniformBlockBinding(v,E)}function c(v,S){let E=i[v.id];E===void 0&&(p(v),E=u(v),i[v.id]=E,v.addEventListener("dispose",M));let w=S.program;n.updateUBOMapping(v,w);let x=e.render.frame;s[v.id]!==x&&(d(v),s[v.id]=x)}function u(v){let S=h();v.__bindingPointIndex=S;let E=r.createBuffer(),w=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,w,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,E),E}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=i[v.id],E=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,b=E.length;x<b;x++){let C=E[x];if(Array.isArray(C))for(let P=0,F=C.length;P<F;P++)f(C[P],x,P,w);else f(C,x,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,E,w){if(_(v,S,E,w)===!0){let x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){let F=b[P],O=m(F);g(F,v.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function g(v,S,E){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,E)}function _(v,S,E,w){let x=v.value,b=S+"_"+E;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{let C=w[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function p(v){let S=v.uniforms,E=0,w=16;for(let b=0,C=S.length;b<C;b++){let P=Array.isArray(S[b])?S[b]:[S[b]];for(let F=0,O=P.length;F<O;F++){let I=P[F],B=Array.isArray(I.value)?I.value:[I.value];for(let W=0,G=B.length;W<G;W++){let Q=B[W],Y=m(Q),J=E%w,te=J%Y.boundary,Se=J+te;E+=te,Se!==0&&w-Se<Y.storage&&(E+=w-Se),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Y.storage}}}let x=E%w;return x>0&&(E+=w-x),v.__size=E,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):we("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:A}}var eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function tb(){return gi===null&&(gi=new Li(eb,16,16,or,si),gi.name="DFG_LUT",gi.minFilter=ot,gi.magFilter=ot,gi.wrapS=sn,gi.wrapT=sn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var qs=class{constructor(e={}){let{canvas:t=Lp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([Fl,Ul,Dl]),m=new Set([vn,ri,Hs,Vs,Il,Ll]),M=new Uint32Array(4),A=new Int32Array(4),v=new N,S=null,E=null,w=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,F=null,O=null,I=null,B=null;this._outputColorSpace=Tt;let W=0,G=0,Q=null,Y=-1,J=null,te=new Ke,Se=new Ke,Te=null,Ye=new Me(0),Fe=0,je=t.width,Z=t.height,ee=1,xe=null,De=null,ge=new Ke(0,0,je,Z),He=new Ke(0,0,je,Z),Ft=!1,Ge=new Ls,Je=!1,ht=!1,qe=new Ue,_t=new N,Vt=new Ke,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function It(){return Q===null?ee:1}let U=n;function qt(T,L){return t.getContext(T,L)}let nt,R,y,z,V,q,re,se,$,j,ae,Re,ue,oe,Ce,Ie,Oe,D,le,K,ce,pe,ne;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",qn,!1),U===null){let L="webgl2";if(U=qt(L,T),U===null)throw qt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(T){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),Le("WebGLRenderer: "+T.message),T}function Pe(){nt=new lv(U),nt.init(),ce=new ZS(U,nt),R=new jy(U,nt,e,ce),y=new YS(U,nt),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),O=U.createFramebuffer(),I=U.createFramebuffer(),B=U.createFramebuffer(),z=new hv(U),V=new LS,q=new qS(U,nt,y,V,R,ce,z),re=new ov(C),se=new f_(U),pe=new Ky(U,se),$=new cv(U,se,z,pe),j=new fv(U,$,se,pe,z),D=new dv(U,R,q),Ce=new Qy(V),ae=new IS(C,re,nt,R,pe,Ce),Re=new jS(C,V),ue=new DS,oe=new kS(nt),Oe=new $y(C,re,y,j,g,l),Ie=new XS(C,j,R),ne=new QS(U,z,R,y),le=new Jy(U,nt,z),K=new uv(U,nt,z),z.programs=ae.programs,C.capabilities=R,C.extensions=nt,C.properties=V,C.renderLists=ue,C.shadowMap=Ie,C.state=y,C.info=z}_!==vn&&(b=new mv(_,t.width,t.height,o,i,s));let be=new Mh(C,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(je,Z,!1))},this.getSize=function(T){return T.set(je,Z)},this.setSize=function(T,L,X=!0){if(be.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}je=T,Z=L,t.width=Math.floor(T*ee),t.height=Math.floor(L*ee),X===!0&&(t.style.width=T+"px",t.style.height=L+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(je*ee,Z*ee).floor()},this.setDrawingBufferSize=function(T,L,X){je=T,Z=L,ee=X,t.width=Math.floor(T*X),t.height=Math.floor(L*X),this.setViewport(0,0,T,L)},this.setEffects=function(T){if(_===vn){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let L=0;L<T.length;L++)if(T[L].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(te)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,L,X,k){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,L,X,k),y.viewport(te.copy(ge).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(He)},this.setScissor=function(T,L,X,k){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,L,X,k),y.scissor(Se.copy(He).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(T){y.setScissorTest(Ft=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){De=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(T=!0,L=!0,X=!0){let k=0;if(T){let H=!1;if(Q!==null){let fe=Q.texture.format;H=p.has(fe)}if(H){let fe=Q.texture.type,_e=m.has(fe),de=Oe.getClearColor(),ye=Oe.getClearAlpha(),Ee=de.r,Be=de.g,We=de.b;_e?(M[0]=Ee,M[1]=Be,M[2]=We,M[3]=ye,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Ee,A[1]=Be,A[2]=We,A[3]=ye,U.clearBufferiv(U.COLOR,0,A))}else k|=U.COLOR_BUFFER_BIT}L&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),Oe.dispose(),ue.dispose(),oe.dispose(),V.dispose(),re.dispose(),j.dispose(),pe.dispose(),ne.dispose(),ae.dispose(),be.dispose(),be.removeEventListener("sessionstart",sf),be.removeEventListener("sessionend",af),yr.stop()};function dt(T){T.preventDefault(),va("WebGLRenderer: Context Lost."),P=!0}function Qe(){va("WebGLRenderer: Context Restored."),P=!1;let T=z.autoReset,L=Ie.enabled,X=Ie.autoUpdate,k=Ie.needsUpdate,H=Ie.type;Pe(),z.autoReset=T,Ie.enabled=L,Ie.autoUpdate=X,Ie.needsUpdate=k,Ie.type=H}function qn(T){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ai(T){let L=T.target;L.removeEventListener("dispose",ai),Qg(L)}function Qg(T){e0(T),V.remove(T)}function e0(T){let L=V.get(T).programs;L!==void 0&&(L.forEach(function(X){ae.releaseProgram(X)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,X,k,H,fe){L===null&&(L=pn);let _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=i0(T,L,X,k,H);y.setMaterial(k,_e);let ye=X.index,Ee=1;if(k.wireframe===!0){if(ye=$.getWireframeAttribute(X),ye===void 0)return;Ee=2}let Be=X.drawRange,We=X.attributes.position,ve=Be.start*Ee,et=(Be.start+Be.count)*Ee;fe!==null&&(ve=Math.max(ve,fe.start*Ee),et=Math.min(et,(fe.start+fe.count)*Ee)),ye!==null?(ve=Math.max(ve,0),et=Math.min(et,ye.count)):We!=null&&(ve=Math.max(ve,0),et=Math.min(et,We.count));let Lt=et-ve;if(Lt<0||Lt===1/0)return;pe.setup(H,k,de,X,ye);let pt,st=le;if(ye!==null&&(pt=se.get(ye),st=K,st.setIndex(pt)),H.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*It()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(H.isLine){let Zt=k.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*It()),H.isLineSegments?st.setMode(U.LINES):H.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else H.isPoints?st.setMode(U.POINTS):H.isSprite&&st.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Zt=H._multiDrawStarts,me=H._multiDrawCounts,nn=H._multiDrawCount,$e=ye?se.get(ye).bytesPerElement:1,On=V.get(k).currentProgram.getUniforms();for(let oi=0;oi<nn;oi++)On.setValue(U,"_gl_DrawID",oi),st.render(Zt[oi]/$e,me[oi])}else if(H.isInstancedMesh)st.renderInstances(ve,Lt,H.count);else if(X.isInstancedBufferGeometry){let Zt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,me=Math.min(X.instanceCount,Zt);st.renderInstances(ve,Lt,me)}else st.render(ve,Lt)};function rf(T,L,X,k){F!==null&&T.isNodeMaterial&&F.setObject(k,T),Je===!0&&Ce.setState(T,X,!1),T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,So(T,L,k),T.side=pi,T.needsUpdate=!0,So(T,L,k),T.side=Hn):So(T,L,k)}this.compile=function(T,L,X=null){X===null&&(X=T),F!==null&&F.renderStart(T,L,X),E=oe.get(X),E.init(L),x.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),ht=this.localClippingEnabled,Je=Ce.init(this.clippingPlanes,ht),Je===!0&&Ce.setGlobalState(this.clippingPlanes,L),F!==null&&Ie.render(E.state.shadowsArray,X,L);let k=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let fe=H.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let de=fe[_e];rf(de,X,L,H),k.add(de)}else rf(fe,X,L,H),k.add(fe)}),E=x.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(T,L,X=null){let k=this.compile(T,L,X);return new Promise(H=>{function fe(){if(k.forEach(function(_e){let ye=V.get(_e).currentProgram;(ye===void 0||ye.isReady())&&k.delete(_e)}),k.size===0){H(T);return}setTimeout(fe,10)}nt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Kc=null;function t0(T){Kc&&Kc(T)}function sf(){yr.stop()}function af(){yr.start()}let yr=new lm;yr.setAnimationLoop(t0),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(T){Kc=T,be.setAnimationLoop(T),T===null?yr.stop():yr.start()},be.addEventListener("sessionstart",sf),be.addEventListener("sessionend",af),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(T,L);let X=be.enabled===!0&&be.isPresenting===!0,k=b!==null&&(Q===null||X)&&b.begin(C,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(L),L=be.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,L,Q),E=oe.get(T,x.length),E.init(L),E.state.textureUnits=q.getTextureUnits(),x.push(E),qe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ge.setFromProjectionMatrix(qe,Qn,L.reversedDepth),ht=this.localClippingEnabled,Je=Ce.init(this.clippingPlanes,ht),S=ue.get(T,w.length),S.init(),w.push(S),be.enabled===!0&&be.isPresenting===!0){let _e=C.xr.getDepthSensingMesh();_e!==null&&Jc(_e,L,-1/0,C.sortObjects)}Jc(T,L,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(xe,De),vt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,vt&&Oe.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ce.beginShadows();let H=E.state.shadowsArray;if(Ie.render(H,T,L),Je===!0&&Ce.endShadows(),(k&&b.hasRenderPass())===!1){let _e=S.opaque,de=S.transmissive;if(E.setupLights(),L.isArrayCamera){let ye=L.cameras;if(de.length>0)for(let Ee=0,Be=ye.length;Ee<Be;Ee++){let We=ye[Ee];lf(_e,de,T,We)}vt&&Oe.render(T);for(let Ee=0,Be=ye.length;Ee<Be;Ee++){let We=ye[Ee];of(S,T,We,We.viewport)}}else de.length>0&&lf(_e,de,T,L),vt&&Oe.render(T),of(S,T,L)}Q!==null&&G===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),k&&b.end(C),T.isScene===!0&&T.onAfterRender(C,T,L),pe.resetDefaultState(),Y=-1,J=null,x.pop(),x.length>0?(E=x[x.length-1],q.setTextureUnits(E.state.textureUnits),Je===!0&&Ce.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,F!==null&&F.renderEnd()};function Jc(T,L,X,k){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ge)){k&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qe);let _e=j.update(T),de=T.material;de.visible&&S.push(T,_e,de,X,Vt.z,null,L)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ge))){let _e=j.update(T),de=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Vt.copy(_e.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(qe)),Array.isArray(de)){let ye=_e.groups;for(let Ee=0,Be=ye.length;Ee<Be;Ee++){let We=ye[Ee],ve=de[We.materialIndex];ve&&ve.visible&&S.push(T,_e,ve,X,Vt.z,We,L)}}else de.visible&&S.push(T,_e,de,X,Vt.z,null,L)}}let fe=T.children;for(let _e=0,de=fe.length;_e<de;_e++)Jc(fe[_e],L,X,k)}function of(T,L,X,k){let{opaque:H,transmissive:fe,transparent:_e}=T;E.setupLightsView(X),Je===!0&&Ce.setGlobalState(C.clippingPlanes,X),k&&y.viewport(te.copy(k)),H.length>0&&vo(H,L,X),fe.length>0&&vo(fe,L,X),_e.length>0&&vo(_e,L,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function lf(T,L,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let ve=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new gn(1,1,{generateMipmaps:!0,type:ve?si:vn,minFilter:hn,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let fe=E.state.transmissionRenderTarget[k.id],_e=k.viewport||te;fe.setSize(_e.z*C.transmissionResolutionScale,_e.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),ye=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Ye),Fe=C.getClearAlpha(),Fe<1&&C.setClearColor(16777215,.5),C.clear(),vt&&Oe.render(X);let Be=C.toneMapping;C.toneMapping=ii;let We=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),Je===!0&&Ce.setGlobalState(C.clippingPlanes,k),vo(T,X,k),q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let et=0,Lt=L.length;et<Lt;et++){let pt=L[et],{object:st,geometry:Zt,material:me,group:nn}=pt;if(me.side===Hn&&st.layers.test(k.layers)){let $e=me.side;me.side=un,me.needsUpdate=!0,cf(st,X,k,Zt,me,nn),me.side=$e,me.needsUpdate=!0,ve=!0}}ve===!0&&(q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,ye,Ee),C.setClearColor(Ye,Fe),We!==void 0&&(k.viewport=We),C.toneMapping=Be}function vo(T,L,X){let k=L.isScene===!0?L.overrideMaterial:null;for(let H=0,fe=T.length;H<fe;H++){let _e=T[H],{object:de,geometry:ye,group:Ee}=_e,Be=_e.material;Be.allowOverride===!0&&k!==null&&(Be=k),de.layers.test(X.layers)&&cf(de,L,X,ye,Be,Ee)}}function cf(T,L,X,k,H,fe){F!==null&&H.isNodeMaterial&&F.setObject(T,H),T.onBeforeRender(C,L,X,k,H,fe),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(C,L,X,k,T,fe),H.transparent===!0&&H.side===Hn&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,C.renderBufferDirect(X,L,k,H,T,fe),H.side=pi,H.needsUpdate=!0,C.renderBufferDirect(X,L,k,H,T,fe),H.side=Hn):C.renderBufferDirect(X,L,k,H,T,fe),T.onAfterRender(C,L,X,k,H,fe)}function So(T,L,X){L.isScene!==!0&&(L=pn);let k=V.get(T),H=E.state.lights,fe=E.state.shadowsArray,_e=H.state.version,de=ae.getParameters(T,H.state,fe,L,X,E.state.lightProbeGridArray),ye=ae.getProgramCacheKey(de),Ee=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Be=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=re.get(T.envMap||k.environment,Be),k.envMapRotation=k.environment!==null&&T.envMap===null?L.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",ai),Ee=new Map,k.programs=Ee);let We=Ee.get(ye);if(We!==void 0){if(k.currentProgram===We&&k.lightsStateVersion===_e)return hf(T,de),We}else de.uniforms=ae.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,X,de),T.onBeforeCompile(de,C),We=ae.acquireProgram(de,ye),Ee.set(ye,We),k.uniforms=de.uniforms;let ve=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ve.clippingPlanes=Ce.uniform),hf(T,de),k.needsLights=s0(T),k.lightsStateVersion=_e,k.needsLights&&(ve.ambientLightColor.value=H.state.ambient,ve.lightProbe.value=H.state.probe,ve.sunLights.value=H.state.sun,ve.sunLightShadows.value=H.state.sunShadow,ve.directionalLights.value=H.state.directional,ve.directionalLightShadows.value=H.state.directionalShadow,ve.spotLights.value=H.state.spot,ve.spotLightShadows.value=H.state.spotShadow,ve.rectAreaLights.value=H.state.rectArea,ve.ltc_1.value=H.state.rectAreaLTC1,ve.ltc_2.value=H.state.rectAreaLTC2,ve.pointLights.value=H.state.point,ve.pointLightShadows.value=H.state.pointShadow,ve.hemisphereLights.value=H.state.hemi,ve.sunShadowMatrix.value=H.state.sunShadowMatrix,ve.sunShadowCascade.value=H.state.sunShadowCascade,ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ve.spotLightMatrix.value=H.state.spotLightMatrix,ve.spotLightMap.value=H.state.spotLightMap,ve.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=We,k.uniformsList=null,We}function uf(T){if(T.uniformsList===null){let L=T.currentProgram.getUniforms();T.uniformsList=Ys.seqWithValue(L.seq,T.uniforms)}return T.uniformsList}function hf(T,L){let X=V.get(T);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function n0(T,L){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(L.matrixWorld);for(let X=0,k=T.length;X<k;X++){let H=T[X];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function i0(T,L,X,k,H){L.isScene!==!0&&(L=pn),q.resetTextureUnits();let fe=L.fog,_e=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,de=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ke.workingColorSpace,ye=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ee=re.get(k.envMap||_e,ye),Be=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ve=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,Lt=!!X.morphAttributes.color,pt=ii;k.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(pt=C.toneMapping);let st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=st!==void 0?st.length:0,me=V.get(k),nn=E.state.lights;if(Je===!0&&(ht===!0||T!==J)){let ft=T===J&&k.id===Y;Ce.setState(k,T,ft)}let $e=!1;k.version===me.__version?(me.needsLights&&me.lightsStateVersion!==nn.state.version||me.outputColorSpace!==de||H.isBatchedMesh&&me.batching===!1||!H.isBatchedMesh&&me.batching===!0||H.isBatchedMesh&&me.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&me.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&me.instancing===!1||!H.isInstancedMesh&&me.instancing===!0||H.isSkinnedMesh&&me.skinning===!1||!H.isSkinnedMesh&&me.skinning===!0||H.isInstancedMesh&&me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&me.instancingMorph===!1&&H.morphTexture!==null||me.envMap!==Ee||k.fog===!0&&me.fog!==fe||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ce.numPlanes||me.numIntersection!==Ce.numIntersection)||me.vertexAlphas!==Be||me.vertexTangents!==We||me.morphTargets!==ve||me.morphNormals!==et||me.morphColors!==Lt||me.toneMapping!==pt||me.morphTargetsCount!==Zt||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,me.__version=k.version);let On=me.currentProgram;$e===!0&&(On=So(k,L,H),F&&k.isNodeMaterial&&F.onUpdateProgram(k,On,me));let oi=!1,Xi=!1,ns=!1,rt=On.getUniforms(),At=me.uniforms;if(y.useProgram(On.program)&&(oi=!0,Xi=!0,ns=!0),k.id!==Y&&(Y=k.id,Xi=!0),me.needsLights){let ft=n0(E.state.lightProbeGridArray,H);me.lightProbeGrid!==ft&&(me.lightProbeGrid=ft,Xi=!0)}if(oi||J!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),rt.setValue(U,"projectionMatrix",T.projectionMatrix),rt.setValue(U,"viewMatrix",T.matrixWorldInverse);let qi=rt.map.cameraPosition;qi!==void 0&&qi.setValue(U,_t.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&rt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Xi=!0,ns=!0)}if(me.needsLights&&(nn.state.sunShadowMap.length>0&&rt.setValue(U,"sunShadowMap",nn.state.sunShadowMap,q),nn.state.directionalShadowMap.length>0&&rt.setValue(U,"directionalShadowMap",nn.state.directionalShadowMap,q),nn.state.spotShadowMap.length>0&&rt.setValue(U,"spotShadowMap",nn.state.spotShadowMap,q),nn.state.pointShadowMap.length>0&&rt.setValue(U,"pointShadowMap",nn.state.pointShadowMap,q)),H.isSkinnedMesh){rt.setOptional(U,H,"bindMatrix"),rt.setOptional(U,H,"bindMatrixInverse");let ft=H.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),rt.setValue(U,"boneTexture",ft.boneTexture,q))}H.isBatchedMesh&&(rt.setOptional(U,H,"batchingTexture"),rt.setValue(U,"batchingTexture",H._matricesTexture,q),rt.setOptional(U,H,"batchingIdTexture"),rt.setValue(U,"batchingIdTexture",H._indirectTexture,q),rt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&rt.setValue(U,"batchingColorTexture",H._colorsTexture,q));let Yi=X.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&D.update(H,X,On),(Xi||me.receiveShadow!==H.receiveShadow)&&(me.receiveShadow=H.receiveShadow,rt.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(At.envMapIntensity.value=L.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=tb()),Xi){if(rt.setValue(U,"toneMappingExposure",C.toneMappingExposure),me.needsLights&&r0(At,ns),fe&&k.fog===!0&&Re.refreshFogUniforms(At,fe),Re.refreshMaterialUniforms(At,k,ee,Z,E.state.transmissionRenderTarget[T.id]),me.needsLights&&me.lightProbeGrid){let ft=me.lightProbeGrid;At.probesSH.value=ft.texture,At.probesMin.value.copy(ft.boundingBox.min),At.probesMax.value.copy(ft.boundingBox.max),At.probesResolution.value.copy(ft.resolution)}Ys.upload(U,uf(me),At,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ys.upload(U,uf(me),At,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rt.setValue(U,"center",H.center),rt.setValue(U,"modelViewMatrix",H.modelViewMatrix),rt.setValue(U,"normalMatrix",H.normalMatrix),rt.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let ft=k.uniformsGroups;for(let qi=0,is=ft.length;qi<is;qi++){let ff=ft[qi];ne.update(ff,On),ne.bind(ff,On)}}return On}function r0(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.sunLights.needsUpdate=L,T.sunLightShadows.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function s0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,L,X){let k=V.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(T.texture).__webglTexture=L,V.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,L){let X=V.get(T);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,X=0){Q=T,W=L,G=X;let k=null,H=!1,fe=!1;if(T){let de=V.get(T);if(de.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),te.copy(T.viewport),Se.copy(T.scissor),Te=T.scissorTest,y.viewport(te),y.scissor(Se),y.setScissorTest(Te),Y=-1;return}else if(de.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(de.__hasExternalTextures)q.rebindTextures(T,V.get(T.texture).__webglTexture,V.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Be=T.depthTexture;if(de.__boundDepthTexture!==Be){if(Be!==null&&V.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}let ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);let Ee=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ee[L])?k=Ee[L][X]:k=Ee[L],H=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?k=V.get(T).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[X]:k=Ee,te.copy(T.viewport),Se.copy(T.scissor),Te=T.scissorTest}else te.copy(ge).multiplyScalar(ee).floor(),Se.copy(He).multiplyScalar(ee).floor(),Te=Ft;if(X!==0&&(k=O),y.bindFramebuffer(U.FRAMEBUFFER,k)&&y.drawBuffers(T,k),y.viewport(te),y.scissor(Se),y.setScissorTest(Te),H){let de=V.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,X)}else if(fe){let de=L;for(let ye=0;ye<T.textures.length;ye++){let Ee=V.get(T.textures[ye]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ye,Ee.__webglTexture,X,de)}}else if(T!==null&&X!==0){let de=V.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,X)}Y=-1};function df(T){let L=V.get(T);return(L.__readFormat!==T.format||L.__readType!==T.type)&&(L.__readFormat=T.format,L.__readType=T.type,L.__formatReadable=R.textureFormatReadable(T.format),L.__typeReadable=R.textureTypeReadable(T.type)),L}this.readRenderTargetPixels=function(T,L,X,k,H,fe,_e,de=0){if(!(T&&T.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){y.bindFramebuffer(U.FRAMEBUFFER,ye);try{let Ee=T.textures[de],Be=Ee.format,We=Ee.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let ve=df(Ee);if(ve.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-k&&X>=0&&X<=T.height-H&&U.readPixels(L,X,k,H,ce.convert(Be),ce.convert(We),fe)}finally{let Ee=Q!==null?V.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,L,X,k,H,fe,_e,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye)if(L>=0&&L<=T.width-k&&X>=0&&X<=T.height-H){y.bindFramebuffer(U.FRAMEBUFFER,ye);let Ee=T.textures[de],Be=Ee.format,We=Ee.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let ve=df(Ee);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(L,X,k,H,ce.convert(Be),ce.convert(We),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Lt=Q!==null?V.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Lt);let pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Dp(U,pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(et),U.deleteSync(pt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,L=null,X=0){let k=Math.pow(2,-X),H=Math.floor(T.image.width*k),fe=Math.floor(T.image.height*k),_e=L!==null?L.x:0,de=L!==null?L.y:0;q.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,_e,de,H,fe),y.unbindTexture()},this.copyTextureToTexture=function(T,L,X=null,k=null,H=0,fe=0){let _e,de,ye,Ee,Be,We,ve,et,Lt,pt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(X!==null)_e=X.max.x-X.min.x,de=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Be=X.min.y,We=X.isBox3?X.min.z:0;else{let At=Math.pow(2,-H);_e=Math.floor(pt.width*At),de=Math.floor(pt.height*At),T.isDataArrayTexture?ye=pt.depth:T.isData3DTexture?ye=Math.floor(pt.depth*At):ye=1,Ee=0,Be=0,We=0}k!==null?(ve=k.x,et=k.y,Lt=k.z):(ve=0,et=0,Lt=0);let st=ce.convert(L.format),Zt=ce.convert(L.type),me;L.isData3DTexture?(q.setTexture3D(L,0),me=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(q.setTexture2DArray(L,0),me=U.TEXTURE_2D_ARRAY):(q.setTexture2D(L,0),me=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let nn=y.getParameter(U.UNPACK_ROW_LENGTH),$e=y.getParameter(U.UNPACK_IMAGE_HEIGHT),On=y.getParameter(U.UNPACK_SKIP_PIXELS),oi=y.getParameter(U.UNPACK_SKIP_ROWS),Xi=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),y.pixelStorei(U.UNPACK_SKIP_ROWS,Be),y.pixelStorei(U.UNPACK_SKIP_IMAGES,We);let ns=T.isDataArrayTexture||T.isData3DTexture,rt=L.isDataArrayTexture||L.isData3DTexture;if(T.isDepthTexture){let At=V.get(T),Yi=V.get(L),ft=V.get(At.__renderTarget),qi=V.get(Yi.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,ft.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let is=0;is<ye;is++)ns&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(T).__webglTexture,H,We+is),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(L).__webglTexture,fe,Lt+is)),U.blitFramebuffer(Ee,Be,_e,de,ve,et,_e,de,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||V.has(T)){let At=V.get(T),Yi=V.get(L);y.bindFramebuffer(U.READ_FRAMEBUFFER,I),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let ft=0;ft<ye;ft++)ns?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,H,We+ft):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,H),rt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yi.__webglTexture,fe,Lt+ft):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yi.__webglTexture,fe),H!==0?U.blitFramebuffer(Ee,Be,_e,de,ve,et,_e,de,U.COLOR_BUFFER_BIT,U.NEAREST):rt?U.copyTexSubImage3D(me,fe,ve,et,Lt+ft,Ee,Be,_e,de):U.copyTexSubImage2D(me,fe,ve,et,Ee,Be,_e,de);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else rt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(me,fe,ve,et,Lt,_e,de,ye,st,Zt,pt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(me,fe,ve,et,Lt,_e,de,ye,st,pt.data):U.texSubImage3D(me,fe,ve,et,Lt,_e,de,ye,st,Zt,pt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,ve,et,_e,de,st,Zt,pt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,ve,et,pt.width,pt.height,st,pt.data):U.texSubImage2D(U.TEXTURE_2D,fe,ve,et,_e,de,st,Zt,pt);y.pixelStorei(U.UNPACK_ROW_LENGTH,nn),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),y.pixelStorei(U.UNPACK_SKIP_PIXELS,On),y.pixelStorei(U.UNPACK_SKIP_ROWS,oi),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Xi),fe===0&&L.generateMipmaps&&U.generateMipmap(me),y.unbindTexture()},this.initRenderTarget=function(T){V.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){W=0,G=0,Q=null,y.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};function Th(r,e){if(e===Ku)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Gs||e===$a){let t=r.getIndex();if(t===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Gs)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function mm(r){let e=new Map,t=new Map,n=r.clone();return gm(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function gm(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)gm(r.children[n],e.children[n],t)}var eo=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ih(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new bc(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bc(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wh(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=zi.extractUrlBase(e);a=zi.resolveURL(c,this.path)}else a=zi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Us(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sm){try{a[Ve.KHR_BINARY_GLTF]=new Xh(e)}catch(h){i&&i(h);return}s=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new jh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:a[h]=new Ch;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[h]=new Yh(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[h]=new qh;break;case Ve.KHR_MESH_QUANTIZATION:a[h]=new Zh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function ib(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Ct(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Rh=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Me(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ni(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fr(u),c.distance=h;break;case"spot":c=new Ua(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Ch=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){let i=[];e.color=new Me(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],on),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}},Ph=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ih=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(s,s)}return Promise.all(i)}},Lh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Nh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Dh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Uh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Fh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(s[0],s[1],s[2],on),Promise.all(i)}},Oh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(s[0],s[1],s[2],on),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(i)}},zh=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},kh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Hh=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Vh=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Gh=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},bc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Wh=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Vn.TRIANGLES&&c.mode!==Vn.TRIANGLE_STRIP&&c.mode!==Vn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let _=new Ue,p=new N,m=new ln,M=new N(1,1,1),A=new Ra(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),A.setMatrixAt(S,_.compose(p,m,M));let v=null;for(let S in l)if(S==="_COLOR_0"){let E=l[S];A.instanceColor=new Ni(E.array,E.itemSize,E.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let w=A.geometry;v=new Ut,v.name=w.name;for(let x in w.attributes)v.setAttribute(x,w.attributes[x]);for(let x in w.morphAttributes)v.morphAttributes[x]=w.morphAttributes[x];w.index!==null&&v.setIndex(w.index),v.morphTargetsRelative=w.morphTargetsRelative;for(let x of w.groups)v.addGroup(x.start,x.count,x.materialIndex);w.boundingBox!==null&&(v.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(v.boundingSphere=w.boundingSphere.clone()),v.drawRange.start=w.drawRange.start,v.drawRange.count=w.drawRange.count,v.userData=Object.assign({},w.userData),A.geometry=v}let E=l[S];v.setAttribute(S,new Ni(E.array,E.itemSize,E.normalized))}gt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Sm="glTF",Qa=12,_m={JSON:1313821514,BIN:5130562},Xh=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Qa,s=new DataView(e,Qa),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===_m.JSON){let c=new Uint8Array(e,Qa+a,o);this.content=n.decode(c)}else if(l===_m.BIN){let c=Qa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Yh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Kh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Kh[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=$s[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(f)},o,c,on,d)})})}},qh=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Zh=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},Mc=class extends di{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,M=1-p,A=m-d+h;for(let v=0;v!==o;v++){let S=a[_+v+o],E=a[_+v+l]*u,w=a[g+v+o],x=a[g+v]*u;s[v]=M*S+A*E+p*w+m*x}return s}},rb=new ln,$h=class extends Mc{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return rb.fromArray(s).normalize().toArray(s),s}},Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xm={9728:Rt,9729:ot,9984:Cl,9985:ks,9986:Vr,9987:hn},ym={33071:sn,33648:Ts,10497:ti},Eh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sb={CUBICSPLINE:void 0,LINEAR:wr,STEP:Er},wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ab(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Di({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),r.DefaultMaterial}function Xr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ob(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function lb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cb(r){let e,t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ah(t.attributes):e=r.indices+":"+Ah(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ah(r.targets[n]);return e}function Ah(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Jh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ub(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hb=new Ue,jh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Dr(this.options.manager):this.textureLoader=new Fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Xr(s,o,i),xi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(zi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Eh[i.type],o=$s[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new mt(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Eh[i.type],c=$s[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,p;if(f&&f!==h){let m=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,A=t.cache.get(M);A||(_=new c(o,m*f,i.count*f/u),A=new Rr(_,f/u),t.cache.add(M,A)),p=new tr(A,l,d%f/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),p=new mt(_,l,g);if(i.sparse!==void 0){let m=Eh.SCALAR,M=$s[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new M(a[1],A,i.sparse.count*m),E=new c(a[2],v,i.sparse.count*l);o!==null&&(p=new mt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,x=S.length;w<x;w++){let b=S[w];if(p.setX(b,E[w*l]),l>=2&&p.setY(b,E[w*l+1]),l>=3&&p.setZ(b,E[w*l+2]),l>=4&&p.setW(b,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return u.magFilter=xm[d.magFilter]||ot,u.minFilter=xm[d.minFilter]||hn,u.wrapS=ym[d.wrapS]||ti,u.wrapT=ym[d.wrapT]||ti,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Rt&&u.minFilter!==ot,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let p=new Ot(_);p.needsUpdate=!0,d(p)}),t.load(zi.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),xi(h,a),h.userData.mimeType=a.mimeType||ub(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ns,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new nr,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Di}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){let h=i[Ve.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],on),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Tt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Hn);let u=s.alphaMode||wh.OPAQUE;if(u===wh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===wh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==In&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==In&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==In){let h=s.emissiveFactor;o.emissive=new Me().setRGB(h[0],h[1],h[2],on)}return s.emissiveTexture!==void 0&&a!==In&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(c).then(function(){let h=new a(o);return s.name&&(h.name=s.name),xi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Xr(i,h,s),h})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return vm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=cb(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=vm(new Ut,c,t),c.mode===Vn.TRIANGLE_STRIP?d=d.then(f=>Th(f,$a)):c.mode===Vn.TRIANGLE_FAN&&(d=d.then(f=>Th(f,Gs))),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?ab(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],p=a[f],m,M=c[f];if(p.mode===Vn.TRIANGLES||p.mode===Vn.TRIANGLE_STRIP||p.mode===Vn.TRIANGLE_FAN||p.mode===void 0){let A=s.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");A&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&v?new wa(_,M):new xt(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Vn.LINES)m=new Ca(_,M);else if(p.mode===Vn.LINE_STRIP)m=new Pr(_,M);else if(p.mode===Vn.LINE_LOOP)m=new Ir(_,M);else if(p.mode===Vn.POINTS)m=new Lr(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&lb(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),xi(m,s),p.extensions&&Xr(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Xr(i,h[0],s),h[0];let d=new mn;s.extensions&&Xr(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(lt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new kn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ue;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Aa(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let A=0,v=d.length;A<v;A++){let S=d[A],E=f[A],w=g[A],x=_[A],b=p[A];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let C=n._createAnimationTracks(S,E,w,x,b);if(C)for(let P=0;P<C.length;P++)m.push(C[P])}let M=new Na(s,void 0,m);return xi(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,hb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,g=h[0];u.pivot=new N().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Is:c.length>1?u=new mn:c.length===1?u=c[0]:u=new gt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),xi(u,s),s.extensions&&Xr(n,u,s),s.matrix!==void 0){let h=new Ue;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new mn;n.name&&(s.name=i.createUniqueName(n.name)),xi(s,n),n.extensions&&Xr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?s.add(mm(d)):s.add(d)}let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof cn||d instanceof Ot)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}lr[s.path]===lr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(lr[s.path]){case lr.weights:u=Fi;break;case lr.rotation:u=Oi;break;case lr.translation:case lr.scale:u=rr;break;default:n.itemSize===1?u=Fi:u=rr;break}let h=i.interpolation!==void 0?sb[i.interpolation]:wr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let _=new u(l[f]+"."+lr[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Jh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Oi?$h:Mc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function db(r,e,t){let n=e.attributes,i=new Pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){let u=Jh($s[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new N,l=new N;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Jh($s[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new _n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function vm(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=Kh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ke.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),xi(r,e),db(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ob(r,e.targets,t):r})}function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ao={duration:.5,overwrite:!1,delay:0},gd,Wt,yt,Wn=1e8,ut=1/Wn,ad=Math.PI*2,fb=ad/4,pb=0,Im=Math.sqrt,mb=Math.cos,gb=Math.sin,Ht=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Vi=function(e){return typeof e=="number"},Nc=function(e){return typeof e>"u"},Si=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},_d=function(){return typeof window<"u"},Tc=function(e){return Et(e)||Ht(e)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,_b=/random\([^)]+\)/g,xb=/,\s*/g,bm=/(?:-?\.?\d|\.)+/gi,xd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yd=/[+-]=-?[.\d]+/,yb=/[^,'"\[\]\s]+/gi,vb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,yi,od,vd,Dn={},Rc={},Nm,Dm=function(e){return(Rc=Js(e,Dn))&&tn},Dc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},oo=function(e,t){return!t&&console.warn(e)},Um=function(e,t){return e&&(Dn[e]=t)&&Rc&&(Rc[e]=t)||Dn},lo=function(){return 0},Sb={suppressEvents:!0,isStart:!0,kill:!1},Ec={suppressEvents:!0,kill:!1},bb={suppressEvents:!0},Sd={},ur=[],ld={},Fm,bn={},ed={},Mm=30,wc=[],bd="",Md=function(e){var t=e[0],n,i;if(Si(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wc.length;i--&&!wc[i].targetTest(t););n=wc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ad(e[i],n)))||e.splice(i,1);return e},hr=function(e){return e._gsap||Md(Xn(e))[0]._gsap},Td=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():Nc(n)&&e.getAttribute&&e.getAttribute(t)||n},dn=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},Kr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Mb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Cc=function(){var e=ur.length,t=ur.slice(0),n,i;for(ld={},ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ed=function(e){return!!(e._initted||e._startAt||e.add)},Om=function(e,t,n,i){ur.length&&!Wt&&Cc(),e.render(t,n,i||!!(Wt&&t<0&&Ed(e))),ur.length&&!Wt&&Cc()},Bm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yb).length<2?t:Ht(e)?e.trim():e},zm=function(e){return e},Un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Js=function(e,t){for(var n in t)e[n]=t[n];return e},Tm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Si(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Pc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},io=function(e){var t=e.parent||bt,n=e.keyframes?Tb(en(e.keyframes)):Un;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Eb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},km=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Uc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cd=function(e,t,n,i){return e._startAt&&(Wt?e._startAt.revert(Ec):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ab=function r(e){return!e||e._ts&&r(e.parent)},Em=function(e){return e._repeat?js(e._tTime,e=e.duration()+e._rDelay)*e:0},js=function(e,t){var n=Math.floor(e=St(e/t));return e&&n===e?n-1:n},Ic=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fc=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},Oc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fc(e),n._dirty||Yr(n,e)),e},Hm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ic(e.rawTime(),t),(!t._dur||ho(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),Yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},vi=function(e,t,n,i){return t.parent&&dr(t),t._start=St((Vi(n)?n:n||e!==bt?Gn(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),km(e,t,"_first","_last",e._sort?"_start":0),ud(t)||(e._recent=t),i||Hm(e,t),e._ts<0&&Oc(e,e._tTime),e},Vm=function(e,t){return(Dn.ScrollTrigger||Dc("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},Gm=function(e,t,n,i,s){if(Pd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fm!==Mn.frame)return ur.push(e),e._lazy=[s,i],1},Rb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ud=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Cb=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Rb(e)&&!(!e._initted&&ud(e))||(e._ts<0||e._dp._ts<0)&&!ud(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ho(0,e._tDur,t),u=js(l,o),e._yoyo&&u&1&&(a=1-a),u!==js(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Wt||i||e._zTime===ut||!t&&e._zTime){if(!e._initted&&Gm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&cd(e,t,n,!0),e._onUpdate&&!n&&Nn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&dr(e,1),!n&&!Wt&&(Nn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Pb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Qs=function(e,t,n,i){var s=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:St(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Oc(e,e._tTime=e._tDur*o),e.parent&&Fc(e),n||Yr(e.parent,e),e},wm=function(e){return e instanceof Qt?Yr(e):Qs(e,e._dur)},Ib={_start:0,endTime:lo,totalDuration:lo},Gn=function r(e,t,n){var i=e.labels,s=e._recent||Ib,a=e.duration()>=Wn?s.endTime(!1):e._dur,o,l,c;return Ht(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(en(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ro=function(e,t,n){var i=Vi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;a.immediateRender=Tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},fr=function(e,t){return e||e===0?t(e):t},ho=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!Ht(e)||!(t=vb.exec(e))?"":t[1]},Lb=function(e,t,n){return fr(n,function(i){return ho(e,t,i)})},hd=[].slice,Wm=function(e,t){return e&&Si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Si(e[0]))&&!e.nodeType&&e!==yi},Nb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ht(i)&&!t||Wm(i,1)?(s=n).push.apply(s,Xn(i)):n.push(i)})||n},Xn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Ht(e)&&!n&&(od||!ea())?hd.call((t||vd).querySelectorAll(e),0):en(e)?Nb(e,n):Wm(e)?hd.call(e,0):e?[e]:[]},dd=function(e){return e=Xn(e)[0]||oo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Xn(t,n.querySelectorAll?n:n===e?oo("Invalid scope")||vd.createElement("div"):e)}},Xm=function(e){return e.sort(function(){return .5-Math.random()})},Ym=function(e){if(Et(e))return e;var t=Si(e)?e:{each:e},n=qr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Ht(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,p=a[_],m,M,A,v,S,E,w,x,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,Wn])[1],!b){for(w=-Wn;w<(w=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(p=a[_]=[],m=l?Math.min(b,_)*u-.5:i%b,M=b===Wn?0:l?_*h/b-.5:i/b|0,w=0,x=Wn,E=0;E<_;E++)A=E%b-m,v=M-(E/b|0),p[E]=S=c?Math.abs(c==="y"?v:A):Im(A*A+v*v),S>w&&(w=S),S<x&&(x=S);i==="random"&&Xm(p),p.max=w-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Xt(t.amount||t.each)||0,n=n&&_<0?Yb(n):n}return _=(p[d]-p.min)/p.max||0,St(p.b+(n?n(_):_)*p.v)+p.u}},fd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Vi(n)?0:Xt(n))}},qm=function(e,t){var n=en(e),i,s;return!n&&Si(e)&&(i=n=e.radius||Wn,e.values?(e=Xn(e.values),(s=!Vi(e[0]))&&(i*=i)):e=fd(e.increment)),fr(t,n?Et(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Wn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||Vi(a)?u:u+Xt(a)}:fd(e))},Zm=function(e,t,n,i){return fr(en(e)?!t:n===!0?!!(n=0):!i,function(){return en(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Db=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Ub=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},Fb=function(e,t,n){return Km(e,t,0,1,n)},$m=function(e,t,n){return fr(n,function(i){return e[~~t(i)]})},Ob=function r(e,t,n){var i=t-e;return en(e)?$m(e,r(0,e.length),t):fr(n,function(s){return(i+(s-e)%i)%i+e})},Bb=function r(e,t,n){var i=t-e,s=i*2;return en(e)?$m(e,r(0,e.length-1),t):fr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ta=function(e){return e.replace(_b,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(xb);return Zm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Km=function(e,t,n,i,s){var a=t-e,o=i-n;return fr(s,function(l){return n+((l-e)/a*o||0)})},zb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Ht(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(en(e)&&!en(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Js(en(e)?[]:{},e));if(!u){for(l in t)Rd.call(o,e,l,"get",t[l]);s=function(g){return Nd(g,o)||(a?e.p:e)}}}return fr(n,s)},Am=function(e,t,n){var i=e.labels,s=Wn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Nn=function(e,t,n){var i=e.vars,s=i[t],a=yt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ur.length&&Cc(),o&&(yt=o),u=l?s.apply(c,l):s.call(c),yt=a,u},to=function(e){return dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&Nn(e,"onInterrupt"),e},Ks,Jm=[],jm=function(e){if(e)if(e=!e.name&&e.default||e,_d()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:lo,render:Nd,add:Rd,kill:nM,modifier:tM,rawVars:0},a={targetTest:0,get:0,getSetter:Bc,aliases:{},register:0};if(ea(),e!==i){if(bn[t])return;Un(i,Un(Pc(e,s),a)),Js(i.prototype,Js(s,Pc(e,a))),bn[i.prop=t]=i,e.targetTest&&(wc.push(i),Sd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Um(t,i),e.register&&e.register(tn,i,fn)}else Jm.push(e)},ct=255,no={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},td=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},Qm=function(e,t,n){var i=e?Vi(e)?[e>>16,e>>8&ct,e&ct]:0:no.black,s,a,o,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),no[e])i=no[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(bm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=td(l+1/3,s,a),i[1]=td(l,s,a),i[2]=td(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(xd),n&&i.length<4&&(i[3]=1),i}else i=e.match(bm)||no.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ct,a=i[1]/ct,o=i[2]/ct,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},eg=function(e){var t=[],n=[],i=-1;return e.split(Hi).forEach(function(s){var a=s.match($r)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Rm=function(e,t,n){var i="",s=(e+i).match(Hi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Qm(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=eg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Hi,"1").split($r),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Hi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Hi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in no)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),kb=/hsl[a]?\(/,wd=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=kb.test(t),e[1]=Rm(e[1],n),e[0]=Rm(e[0],n,eg(e[1])),!0},co,Mn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(p){var m=r()-i,M=p===!0,A,v,S,E;if((m>e||m<0)&&(n+=m-t),i+=m,S=i-n,A=S-a,(A>0||M)&&(E=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,a+=A+(A>=s?4:s-A),v=1),M||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](S,d,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Nm&&(!od&&_d()&&(yi=od=window,vd=yi.document||{},Dn.gsap=tn,(yi.gsapVersions||(yi.gsapVersions=[])).push(tn.version),Dm(Rc||yi.GreenSockGlobals||!yi.gsap&&yi||{}),Jm.forEach(jm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},co=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),co=0,c=lo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,M){var A=m?function(v,S,E,w){p(v,S,E,w),h.remove(A)}:p;return h.remove(p),o[M?"unshift":"push"](A),ea(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},h})(),ea=function(){return!co&&Mn.wake()},Ze={},Hb=/^[\d.\-M][\d.\-,\s]/,Vb=/["']/g,Gb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Vb,"").trim():+c,i=l.substr(o+1).trim();return t},Wb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Xb=function(e){var t=(e+"").split("("),n=Ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Gb(t[1])]:Wb(e).split(",").map(Bm)):Ze._CE&&Hb.test(e)?Ze._CE("",e):n},Yb=function(e){return function(t){return 1-e(1-t)}},qr=function(e,t){return e&&(Et(e)?e:Ze[e]||Xb(e))||t},Jr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return dn(e,function(o){Ze[o]=Dn[o]=s,Ze[a=o.toLowerCase()]=n;for(var l in s)Ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[o+"."+l]=s[l]}),s},tg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nd=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ad*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*gb((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:tg(o);return s=ad/s,l.config=function(c,u){return r(e,c,u)},l},id=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:tg(n);return i.config=function(s){return r(e,s)},i};dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Jr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;Jr("Elastic",nd("in"),nd("out"),nd());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Jr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Jr("Circ",function(r){return-(Im(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-mb(r*fb)+1});Jr("Back",id("in"),id("out"),id());Ze.SteppedEase=Ze.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ut;return function(o){return((i*ho(0,a,o)|0)+s)*n}}};ao.ease=Ze["quad.out"];dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return bd+=r+","+r+"Params,"});var Ad=function(e,t){this.id=pb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Td,this.set=t?t.getSetter:Bc},uo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qs(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),co||Mn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ea(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oc(this,n),!s._dp||s.parent||Hm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ut||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Om(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Em(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Em(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?js(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ic(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(ho(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fc(this),wb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ea(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=St(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ic(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bb);var i=Wt;return Wt=n,Ed(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Wt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Gn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i)),this._dur||(this._zTime=-ut),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ut)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Et(n)?n:zm,l=function(){var u=i.then;i.then=null,s&&s(),Et(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){to(this)},r})();Un(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var Qt=(function(r){Pm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),bt&&vi(n.parent||bt,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vm(ki(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ro(0,arguments,this),this},t.from=function(i,s,a){return ro(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ro(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,io(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(i,s,Gn(this,a),1),this},t.call=function(i,s,a){return vi(this,Pt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Pt(i,a,Gn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,io(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,io(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:St(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,M,A,v,S,E,w;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,A=this._ts,m=!A,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=St(u%p),u===l?(_=this._repeat,d=c):(S=St(u/p),_=~~S,_&&_===S&&(d=c,_--),d>c&&(d=c)),S=js(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),E&&_&1&&(d=c-d,w=1),_!==S&&!this._lock){var x=E&&S&1,b=x===(E&&_&1);if(_<S&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(w?0:St(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Pb(this,St(o),St(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!S&&(Nn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-ut);break}}f=g}else{f=this._last;for(var C=i<0?i:d;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||Wt&&Ed(f)),d!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=C?-ut:ut);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-ut)._zTime=d>=o?1:-1,this._ts))return this._start=v,Fc(this),this.render(i,s,a);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Nn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Vi(s)||(s=Gn(this,s,i)),!(i instanceof uo)){if(en(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ht(i))return this.addLabel(i,s);if(Et(i))i=Pt.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Ht(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(i.parent===this&&Uc(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(Mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Gn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Pt.delayedCall(0,s||lo,a);return o.data="isPause",this._hasPause=1,vi(this,o,Gn(this,i))},t.removePause=function(i){var s=this._first;for(i=Gn(this,i);s;)s._start===i&&s.data==="isPause"&&dr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)cr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Xn(i),l=this._first,c=Vi(s),u;l;)l instanceof Pt?Mb(l._targets,o)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Gn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Pt.to(a,Un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ut,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Qs(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Un({startAt:{time:Gn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Am(this,Gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Am(this,Gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=St(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Yr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Wn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,vi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=St(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Qs(a,a===bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(bt._ts&&(Om(bt,Ic(i,bt)),Fm=Mn.frame),Mn.frame>=Mm){Mm+=En.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&En.autoSleep&&Mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mn.sleep()}}},e})(uo);Un(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var qb=function(e,t,n,i,s,a,o){var l=new fn(this._pt,e,t,0,1,Ld,null,s),c=0,u=0,h,d,f,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ta(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),d=n.match(Qh)||[];h=Qh.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Kr(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Qh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(yd.test(i)||m)&&(l.e=0),this._pt=l,l},Rd=function(e,t,n,i,s,a,o,l,c,u){Et(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:Et(h)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Et(h)?c?jb:rg:Id,g;if(Ht(i)&&(~i.indexOf("random(")&&(i=ta(i)),i.charAt(1)==="="&&(g=Kr(d,i)+(Xt(d)||0),(g||g===0)&&(i=g))),!u||d!==i||pd)return!isNaN(d*i)&&i!==""?(g=new fn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?eM:sg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Dc(t,i),qb.call(this,e,t,d,i,f,l||En.stringFilter,c))},Zb=function(e,t,n,i,s){if(Et(e)&&(e=so(e,s,t,n,i)),!Si(e)||e.style&&e.nodeType||en(e)||Lm(e))return Ht(e)?so(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=so(e[o],s,t,n,i);return a},Cd=function(e,t,n,i,s,a){var o,l,c,u;if(bn[e]&&(o=new bn[e]).init(s,o.rawVars?t[e]:Zb(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new fn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ks))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},cr,pd,Pd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,A=e._overwrite==="auto"&&!gd,v=e.timeline,S=i.easeReverse||h,E,w,x,b,C,P,F,O,I,B,W,G,Q;if(v&&(!d||!s)&&(s="none"),e._ease=qr(s,ao.ease),e._rEase=S&&(qr(S)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(O=p[0]?hr(p[0]).harness:0,G=O&&i[O.prop],E=Pc(i,Sd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Ec:Sb),_._lazy=0),a){if(dr(e._startAt=Pt.set(p,Un({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!o&&!f)&&e._startAt.revert(Ec),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),x=Un({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Tn(l),immediateRender:o,stagger:0,parent:m},E),G&&(x[O.prop]=G),dr(e._startAt=Pt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(Ec):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Tn(l)||l&&!g,w=0;w<p.length;w++){if(C=p[w],F=C._gsap||Md(p)[w]._gsap,e._ptLookup[w]=B={},ld[F.id]&&ur.length&&Cc(),W=M===p?w:M.indexOf(C),O&&(I=new O).init(C,G||E,e,W,M)!==!1&&(e._pt=b=new fn(e._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Y){B[Y]=b}),I.priority&&(P=1)),!O||G)for(x in E)bn[x]&&(I=Cd(x,E,e,W,C,M))?I.priority&&(P=1):B[x]=b=Rd.call(e,C,x,"get",E[x],W,M,0,i.stringFilter);e._op&&e._op[w]&&e.kill(C,e._op[w]),A&&e._pt&&(cr=e,bt.killTweensOf(C,B,e.globalTime(t)),Q=!e.parent,cr=0),e._pt&&l&&(ld[F.id]=1)}P&&Dd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,d&&t<=0&&v.render(Wn,!0,!0)},$b=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return pd=1,e.vars[t]="+=0",Pd(e,o),pd=0,l?oo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=wt(n)+Xt(h.e)),h.b&&(h.b=u.s+Xt(h.b))},Kb=function(e,t){var n=e[0]?hr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Js({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Jb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(en(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},so=function(e,t,n,i,s){return Et(e)?e.call(t,n,i,s):Ht(e)&&~e.indexOf("random(")?ta(e):e},ng=bd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ig={};dn(ng+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ig[r]=1});var Pt=(function(r){Pm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:io(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||bt,M=(en(n)||Lm(n)?Vi(n[0]):"length"in i)?[n]:Xn(n),A,v,S,E,w,x,b,C;if(o._targets=M.length?Md(M):oo("GSAP target "+n+" not found. https://gsap.com",!En.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Tc(c)||Tc(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(A=o.timeline=new Qt({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),A.kill(),A.parent=A._dp=ki(o),A._start=0,d||Tc(c)||Tc(u)){if(E=M.length,b=d&&Ym(d),Si(d))for(w in d)~ng.indexOf(w)&&(C||(C={}),C[w]=d[w]);for(v=0;v<E;v++)S=Pc(i,ig),S.stagger=0,P&&(S.easeReverse=P),C&&Js(S,C),x=M[v],S.duration=+so(c,ki(o),v,x,M),S.delay=(+so(u,ki(o),v,x,M)||0)-o._delay,!d&&E===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),A.to(x,S,b?b(v,x,M):0),A._ease=Ze.none;A.duration()?c=u=0:o.timeline=0}else if(g){io(Un(A.vars.defaults,{ease:"none"})),A._ease=qr(g.ease||i.ease||"none");var F=0,O,I,B;if(en(g))g.forEach(function(W){return A.to(M,W,">")}),A.duration();else{S={};for(w in g)w==="ease"||w==="easeEach"||Jb(w,g[w],S,g.easeEach);for(w in S)for(O=S[w].sort(function(W,G){return W.t-G.t}),F=0,v=0;v<O.length;v++)I=O[v],B={ease:I.e,duration:(I.t-(v?O[v-1].t:0))/100*c},B[w]=I.v,A.to(M,B,F),F+=B.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return f===!0&&!gd&&(cr=ki(o),bt.killTweensOf(M),cr=0),vi(m,ki(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===St(m._time)&&Tn(h)&&Ab(ki(o))&&m.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-u)||0)),p&&Vm(ki(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ut&&!u?l:i<ut?0:i,d,f,g,_,p,m,M,A;if(!c)Cb(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=St(h%_),h===l?(g=this._repeat,d=c):(p=St(h/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),p=js(this._tTime,_),d===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(St(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Gm(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var S=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Nn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&cd(this,i,s,a),Nn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&cd(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&dr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(Nn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){co||Mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pd(this,c),u=this._ease(c/this._dur),$b(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Oc(this,0),this.parent||km(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?to(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cr&&cr.vars.overwrite!==!0)._first||to(this),this.parent&&a!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Xn(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&Eb(o,l))return s==="all"&&(this._pt=0),to(this);for(h=this._op=this._op||[],s!=="all"&&(Ht(s)&&(_={},dn(s,function(M){return _[M]=1}),s=_),s=Kb(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Uc(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&to(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ro(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ro(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return bt.killTweensOf(i,s,a)},e})(uo);Un(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dn("staggerTo,staggerFrom,staggerFromTo",function(r){Pt[r]=function(){var e=new Qt,t=hd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Id=function(e,t,n){return e[t]=n},rg=function(e,t,n){return e[t](n)},jb=function(e,t,n,i){return e[t](i.fp,n)},Qb=function(e,t,n){return e.setAttribute(t,n)},Bc=function(e,t){return Et(e[t])?rg:Nc(e[t])&&e.setAttribute?Qb:Id},sg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},eM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},tM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},nM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Uc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},iM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Dd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},fn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||sg,this.d=l||this,this.set=c||Id,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=iM,this.m=n,this.mt=s,this.tween=i},r})();dn(bd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Sd[r]=1});Dn.TweenMax=Dn.TweenLite=Pt;Dn.TimelineLite=Dn.TimelineMax=Qt;bt=new Qt({sortChildren:!1,defaults:ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=wd;var Zr=[],Ac={},rM=[],Cm=0,sM=0,rd=function(e){return(Ac[e]||rM).map(function(t){return t()})},md=function(){var e=Date.now(),t=[];e-Cm>2&&(rd("matchMediaInit"),Zr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=yi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),rd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cm=e,rd("matchMedia"))},ag=(function(){function r(t,n){this.selector=n&&dd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Et(n)&&(s=i,i=n,n=Et);var a=this,o=function(){var c=yt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=dd(s)),yt=a,h=i.apply(a,arguments),Et(h)&&a._r.push(h),yt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Et?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Zr.length;a--;)Zr[a].id===this.id&&Zr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),aM=(function(){function r(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Si(n)||(n={matches:n});var a=new ag(0,s||this.scope),o=a.conditions={},l,c,u;yt&&!a.selector&&(a.selector=yt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&(Zr.indexOf(a)<0&&Zr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(md):l.addEventListener("change",md)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Lc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return jm(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ht(e)&&(e=Xn(e)[0]);var s=hr(e||{}).get,a=n?zm:Bm;return n==="native"&&(n=""),e&&(t?a((bn[t]&&bn[t].get||s)(e,t,n,i)):function(o,l,c){return a((bn[o]&&bn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Xn(e),e.length>1){var i=e.map(function(u){return tn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=bn[t],o=hr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ks._pt=0,h.init(e,n?u+n:u,Ks,0,[e]),h.render(1,h),Ks._pt&&Nd(1,Ks)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=tn.to(e,Un((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qr(e.ease,ao.ease)),Tm(ao,e||{})},config:function(e){return Tm(En,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!bn[o]&&!Dn[o]&&oo(t+" effect requires "+o+" plugin.")}),ed[t]=function(o,l,c){return n(Xn(o),Un(l||{},s),c)},a&&(Qt.prototype[t]=function(o,l,c){return this.add(ed[t](o,Si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=qr(t)},parseEase:function(e,t){return arguments.length?qr(e,t):Ze},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,s;for(n.smoothChildTiming=Tn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Pt&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(bt,n,0),n},context:function(e,t){return e?new ag(e,t):yt},matchMedia:function(e){return new aM(e)},matchMediaRefresh:function(){return Zr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||md()},addEventListener:function(e,t){var n=Ac[e]||(Ac[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ac[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ob,wrapYoyo:Bb,distribute:Ym,random:Zm,snap:qm,normalize:Fb,getUnit:Xt,clamp:Lb,splitColor:Qm,toArray:Xn,selector:dd,mapRange:Km,pipe:Db,unitize:Ub,interpolate:zb,shuffle:Xm},install:Dm,effects:ed,ticker:Mn,updateRoot:Qt.updateRoot,plugins:bn,globalTimeline:bt,core:{PropTween:fn,globals:Um,Tween:Pt,Timeline:Qt,Animation:uo,getCache:hr,_removeLinkedListItem:Uc,reverting:function(){return Wt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return gd=e}}};dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Lc[r]=Pt[r]});Mn.add(Qt.updateRoot);Ks=Lc.to({},{duration:0});var oM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},lM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=oM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},sd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ht(s)&&(l={},dn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}lM(o,s)}}}},tn=Lc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},sd("roundProps",fd),sd("modifiers"),sd("snap",qm))||Lc;Pt.version=Qt.version=tn.version="3.15.0";Nm=1;_d()&&ea();var cM=Ze.Power0,uM=Ze.Power1,hM=Ze.Power2,dM=Ze.Power3,fM=Ze.Power4,pM=Ze.Linear,mM=Ze.Quad,gM=Ze.Cubic,_M=Ze.Quart,xM=Ze.Quint,yM=Ze.Strong,vM=Ze.Elastic,SM=Ze.Back,bM=Ze.SteppedEase,MM=Ze.Bounce,TM=Ze.Sine,EM=Ze.Expo,wM=Ze.Circ;var og,pr,ia,kd,ts,AM,lg,Hd,RM=function(){return typeof window<"u"},Wi={},es=180/Math.PI,ra=Math.PI/180,na=Math.atan2,cg=1e8,Vd=/([A-Z])/g,CM=/(left|right|width|margin|padding|x)/i,PM=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},DM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},_g=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},UM=function(e,t,n){return e.style[t]=n},FM=function(e,t,n){return e.style.setProperty(t,n)},OM=function(e,t,n){return e._gsap[t]=n},BM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},kM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Mt="transform",wn=Mt+"Origin",HM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Wi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gi(i,o)}):this.tfm[e]=a.x?a[e]:Gi(i,e),e===wn&&(this.tfm.zOrigin=a.zOrigin);else return bi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Mt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},yg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},VM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Vd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hd(),(!s||!s.isStart)&&!n[Mt]&&(yg(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},vg=function(e,t){var n={target:e,props:[],revert:VM,save:HM};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Sg,Od=function(e,t){var n=pr.createElementNS?pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pr.createElement(e);return n&&n.style?n:pr.createElement(e)},Fn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Vd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,sa(t)||t,1)||""},ug="O,Moz,ms,Ms,Webkit".split(","),sa=function(e,t,n){var i=t||ts,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ug[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ug[a]:"")+e},Bd=function(){RM()&&window.document&&(og=window,pr=og.document,ia=pr.documentElement,ts=Od("div")||{style:{}},AM=Od("div"),Mt=sa(Mt),wn=Mt+"Origin",ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sg=!!sa("perspective"),Hd=tn.core.reverting,kd=1)},hg=function(e){var t=e.ownerSVGElement,n=Od("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ia.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ia.removeChild(n),s},dg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},bg=function(e){var t,n;try{t=e.getBBox()}catch{t=hg(e),n=1}return t&&(t.width||t.height)||n||(t=hg(e)),t&&!t.width&&!t.x&&!t.y?{x:+dg(e,["x","cx","x1"])||0,y:+dg(e,["y","cy","y1"])||0,width:0,height:0}:t},Mg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bg(e))},gr=function(e,t){if(t){var n=e.style,i;t in Wi&&t!==wn&&(t=Mt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Vd,"-$1").toLowerCase())):n.removeAttribute(t)}},mr=function(e,t,n,i,s,a){var o=new fn(e._pt,t,n,0,1,a?xg:_g);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},fg={deg:1,rad:1,turn:1},GM={grid:1,flex:1},_r=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ts.style,l=CM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||fg[i]||fg[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&Mg(e),(f||a==="%")&&(Wi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],wt(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===pr||!_.appendChild)&&(_=pr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Mn.time&&!p.uncache)return wt(s/p.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:gr(e,t)}else(f||a==="%")&&!GM[Fn(_,"display")]&&(o.position=Fn(e,"position")),_===e&&(o.position="static"),_.appendChild(ts),g=ts[u],_.removeChild(ts),o.position="absolute";return l&&f&&(p=hr(_),p.time=Mn.time,p.width=_[u]),wt(d?g*s/h:g&&s?h/g*s:0)},Gi=function(e,t,n,i){var s;return kd||Bd(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wi[t]&&t!=="transform"?(s=mo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:kc(Fn(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=zc[t]&&zc[t](e,t,n)||Fn(e,t)||Td(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(e,t,s,n)+n:s},WM=function(e,t,n,i){if(!n||n==="none"){var s=sa(t,e,1),a=s&&Fn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Fn(e,"borderTopColor"))}var o=new fn(this._pt,e.style,t,0,1,Ld),l=0,c=0,u,h,d,f,g,_,p,m,M,A,v,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Fn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Fn(e,t)||i,_?e.style[t]=_:gr(e,t)),u=[n,i],wd(u),n=u[0],i=u[1],d=n.match($r)||[],S=i.match($r)||[],S.length){for(;h=$r.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=Kr(f,p)+v),m=parseFloat(p),A=p.substr((m+"").length),l=$r.lastIndex-A.length,A||(A=A||En.units[t]||v,l===i.length&&(i+=A,o.e+=A)),v!==A&&(f=_r(e,t,_,A)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?xg:_g;return yd.test(i)&&(o.e=0),this._pt=o,o},pg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},XM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=pg[n]||n,t[1]=pg[i]||i,t.join(" ")},YM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Wi[o]&&(l=1,o=o==="transformOrigin"?wn:Mt),gr(n,o);l&&(gr(n,Mt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",mo(n,1),a.uncache=1,yg(i)))}},zc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new fn(e._pt,t,n,0,0,YM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},po=[1,0,0,1,0,0],Tg={},Eg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mg=function(e){var t=Fn(e,Mt);return Eg(t)?po:t.substr(7).match(xd).map(wt)},Gd=function(e,t){var n=e._gsap||hr(e),i=e.style,s=mg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?po:s):(s===po&&!e.offsetParent&&e!==ia&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ia.appendChild(e)),s=mg(e),l?i.display=l:gr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ia.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zd=function(e,t,n,i,s,a){var o=e._gsap,l=s||Gd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],A=t.split(" "),v=parseFloat(A[0])||0,S=parseFloat(A[1])||0,E,w,x,b;n?l!==po&&(w=f*p-g*_)&&(x=v*(p/w)+S*(-_/w)+(_*M-p*m)/w,b=v*(-g/w)+S*(f/w)-(f*M-g*m)/w,v=x,S=b):(E=bg(e),v=E.x+(~A[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(A[1]||A[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&o.smooth?(m=v-c,M=S-u,o.xOffset=h+(m*f+M*_)-m,o.yOffset=d+(m*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[wn]="0px 0px",a&&(mr(a,o,"xOrigin",c,v),mr(a,o,"yOrigin",u,S),mr(a,o,"xOffset",h,o.xOffset),mr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},mo=function(e,t){var n=e._gsap||new Ad(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Fn(e,wn)||"0",u,h,d,f,g,_,p,m,M,A,v,S,E,w,x,b,C,P,F,O,I,B,W,G,Q,Y,J,te,Se,Te,Ye,Fe;return u=h=d=_=p=m=M=A=v=0,f=g=1,n.svg=!!(e.getCTM&&Mg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),i.scale=i.rotate=i.translate="none"),w=Gd(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),zd(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,E=n.yOrigin||0,w!==po&&(P=w[0],F=w[1],O=w[2],I=w[3],u=B=w[4],h=W=w[5],w.length===6?(f=Math.sqrt(P*P+F*F),g=Math.sqrt(I*I+O*O),_=P||F?na(F,P)*es:0,M=O||I?na(O,I)*es+_:0,M&&(g*=Math.abs(Math.cos(M*ra))),n.svg&&(u-=S-(S*P+E*O),h-=E-(S*F+E*I))):(Fe=w[6],Te=w[7],J=w[8],te=w[9],Se=w[10],Ye=w[11],u=w[12],h=w[13],d=w[14],x=na(Fe,Se),p=x*es,x&&(b=Math.cos(-x),C=Math.sin(-x),G=B*b+J*C,Q=W*b+te*C,Y=Fe*b+Se*C,J=B*-C+J*b,te=W*-C+te*b,Se=Fe*-C+Se*b,Ye=Te*-C+Ye*b,B=G,W=Q,Fe=Y),x=na(-O,Se),m=x*es,x&&(b=Math.cos(-x),C=Math.sin(-x),G=P*b-J*C,Q=F*b-te*C,Y=O*b-Se*C,Ye=I*C+Ye*b,P=G,F=Q,O=Y),x=na(F,P),_=x*es,x&&(b=Math.cos(x),C=Math.sin(x),G=P*b+F*C,Q=B*b+W*C,F=F*b-P*C,W=W*b-B*C,P=G,B=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=wt(Math.sqrt(P*P+F*F+O*O)),g=wt(Math.sqrt(W*W+Fe*Fe)),x=na(B,W),M=Math.abs(x)>2e-4?x*es:0,v=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Eg(Fn(e,Mt)),G&&e.setAttribute("transform",G))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=wt(f),n.scaleY=wt(g),n.rotation=wt(_)+o,n.rotationX=wt(p)+o,n.rotationY=wt(m)+o,n.skewX=M+o,n.skewY=A+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=kc(c)),n.xOffset=n.yOffset=0,n.force3D=En.force3D,n.renderTransform=n.svg?ZM:Sg?wg:qM,n.uncache=0,n},kc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ud=function(e,t,n){var i=Xt(t);return wt(parseFloat(t)+parseFloat(_r(e,"x",n+"px",i)))+i},qM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wg(e,t)},jr="0deg",fo="0px",Qr=") ",wg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,A=n.zOrigin,v="",S=m==="auto"&&e&&e!==1||m===!0;if(A&&(h!==jr||u!==jr)){var E=parseFloat(u)*ra,w=Math.sin(E),x=Math.cos(E),b;E=parseFloat(h)*ra,b=Math.cos(E),a=Ud(M,a,w*b*-A),o=Ud(M,o,-Math.sin(E)*-A),l=Ud(M,l,x*b*-A+A)}p!==fo&&(v+="perspective("+p+Qr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||a!==fo||o!==fo||l!==fo)&&(v+=l!==fo||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Qr),c!==jr&&(v+="rotate("+c+Qr),u!==jr&&(v+="rotateY("+u+Qr),h!==jr&&(v+="rotateX("+h+Qr),(d!==jr||f!==jr)&&(v+="skew("+d+", "+f+Qr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Qr),M.style[Mt]=v||"translate(0, 0)"},ZM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,A=parseFloat(a),v=parseFloat(o),S,E,w,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ra,c*=ra,S=Math.cos(l)*h,E=Math.sin(l)*h,w=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=ra,b=Math.tan(c-u),b=Math.sqrt(1+b*b),w*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),S*=b,E*=b)),S=wt(S),E=wt(E),w=wt(w),x=wt(x)):(S=h,x=d,E=w=0),(A&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(A=_r(f,"x",a,"px"),v=_r(f,"y",o,"px")),(g||_||p||m)&&(A=wt(A+g-(g*S+_*w)+p),v=wt(v+_-(g*E+_*x)+m)),(i||s)&&(b=f.getBBox(),A=wt(A+i/100*b.width),v=wt(v+s/100*b.height)),b="matrix("+S+","+E+","+w+","+x+","+A+","+v+")",f.setAttribute("transform",b),M&&(f.style[Mt]=b)},$M=function(e,t,n,i,s){var a=360,o=Ht(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?es:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*cg)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*cg)%a-~~(c/a)*a)),e._pt=d=new fn(e._pt,t,n,i,c,IM),d.e=u,d.u="deg",e._props.push(n),d},gg=function(e,t){for(var n in t)e[n]=t[n];return e},KM=function(e,t,n){var i=gg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Mt]=t,o=mo(n,1),gr(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],a[Mt]=t,o=mo(n,1),a[Mt]=c);for(l in Wi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Xt(c),g=Xt(u),h=f!==g?_r(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new fn(e._pt,o,l,h,d-h,Fd),e._pt.u=g||0,e._props.push(l));gg(o,i)};dn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});zc[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return Gi(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var Wd={name:"css",register:Bd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,p,m,M,A,v,S,E,w,x,b;kd||Bd(),this.styles=this.styles||vg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(bn[_]&&Cd(_,t,n,i,e,s)))){if(f=typeof u,g=zc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ta(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(c)||(p=Xt(c),m=Xt(u),m?p!==m&&(c=_r(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Ht(c)&&~c.indexOf("random(")&&(c=ta(c)),Xt(c+"")||c==="auto"||(c+=En.units[_]||Xt(Gi(e,_))||""),(c+"").charAt(1)==="="&&(c=Gi(e,_))):c=Gi(e,_),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in bi&&(_==="autoAlpha"&&(d===1&&Gi(e,"visibility")==="hidden"&&h&&(d=0),x.push("visibility",0,o.visibility),mr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=bi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in Wi,A){if(this.styles.save(_),b=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Fn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=Fn(e,"perspective"),C?e.style.perspective=C:gr(e,"perspective")}h=parseFloat(u)}if(v||(S=e._gsap,S.renderTransform&&!t.parseTransform||mo(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new fn(this._pt,o,Mt,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new fn(this._pt,S,"scaleY",S.scaleY,(M?Kr(S.scaleY,M+h):h)-S.scaleY||0,Fd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(wn,0,o[wn]),u=XM(u),S.svg?zd(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==S.zOrigin&&mr(this,S,"zOrigin",S.zOrigin,m),mr(this,o,_,kc(c),kc(u)));continue}else if(_==="svgOrigin"){zd(e,u,1,E,0,this);continue}else if(_ in Tg){$M(this,S,_,d,M?Kr(d,M+u):u);continue}else if(_==="smoothOrigin"){mr(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){KM(this,u,e);continue}}else _ in o||(_=sa(_)||_);if(A||(h||h===0)&&(d||d===0)&&!PM.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),m=Xt(u)||(_ in En.units?En.units[_]:p),p!==m&&(d=_r(e,_,c,m)),this._pt=new fn(this._pt,A?S:o,_,d,(M?Kr(d,M+h):h)-d,!A&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?DM:Fd),this._pt.u=m||0,A&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=NM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=LM);else if(_ in o)WM.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Dc(_,u);continue}A||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}w&&Dd(this)},render:function(e,t){if(t.tween._time||!Hd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:bi,getSetter:function(e,t,n){var i=bi[t];return i&&i.indexOf(",")<0&&(t=i),t in Wi&&t!==wn&&(e._gsap.x||Gi(e,"x"))?n&&lg===n?t==="scale"?BM:OM:(lg=n||{})&&(t==="scale"?zM:kM):e.style&&!Nc(e.style[t])?UM:~t.indexOf("-")?FM:Bc(e,t)},core:{_removeProperty:gr,_getMatrix:Gd}};tn.utils.checkPrefix=sa;tn.core.getStyleSaver=vg;(function(r,e,t,n){var i=dn(r+","+e+","+t,function(s){Wi[s]=1});dn(e,function(s){En.units[s]="deg",Tg[s]=1}),bi[i[13]]=r+","+e,dn(n,function(s){var a=s.split(":");bi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){En.units[r]="px"});tn.registerPlugin(Wd);var Xd=tn.registerPlugin(Wd)||tn,eA=Xd.core.Tween;var An=window.matchMedia("(prefers-reduced-motion: reduce)"),Ag=()=>Math.min(window.devicePixelRatio||1,1.75),Hc="altar-lighting-v1",Rg="altar-lighting-persist";function Cg(r){try{return localStorage.getItem(r)}catch{return null}}function Vc(r,e){try{e===null?localStorage.removeItem(r):localStorage.setItem(r,e)}catch{}}var Wg=5,Yd={ACES:kr,Neutral:Ha,Linear:za,Reinhard:ka},ie={hemisphereSky:"#000000",hemisphereGround:"#3f12e2",hemisphereIntensity:0,keyColor:"#f8d4b7",keyIntensity:6,keyX:-15,keyY:-15,keyZ:-15,rimColor:"#6f71f7",rimIntensity:1.1,rimX:-15,rimY:15,rimZ:-4.2,exposure:2.55,toneMapping:"Linear",effectBlur:0,grainOpacity:.25,grainFrequency:.5,grainSpeed:10,sectionGrainOpacity:.16,orbitSpeed:.1,orbitKepler:1.6,orbitTilt:69,orbitScale:1.45,orbitDirection:"Horario",moonSpeed:1.25,spinSpeed:3.5,orbitLineOpacity:.2,orbitLineColor:"#fffb00",starCount:700,starSize:1.6,starBrightness:4,starColor:"#fff3a9",starColorVariation:1,twinkleSpeed:7.95,twinkleAmount:.5,bloomSize:5.1,bloomIntensity:.35,starDrift:.9,sunSize:.2,sunEmissive:1.4,sunEmissiveColor:"#ffffff",sunSpin:1,sunGlowSize:2.75,sunGlowIntensity:.9,sunGlowColor:"#ffb45c",sunLightIntensity:1.4,sunLightColor:"#ffd9a8",system1X:13.8,system1Y:7.25,system1Z:-79.8,system1RotX:-2,system1RotY:162,system1RotZ:14,system1Scale:6.45,system2X:-33.8,system2Y:15.3,system2Z:-66.25,system2RotX:3,system2RotY:16,system2RotZ:13,system2Scale:12.45,system3X:-13.1,system3Y:17.9,system3Z:-82.95,system3RotX:-150,system3RotY:116,system3RotZ:2,system3Scale:12.85,system4X:-25,system4Y:8.85,system4Z:-74.05,system4RotX:-35,system4RotY:64,system4RotZ:7,system4Scale:15.25,systemSpin:0,systemFloat:0,systemFloatSpeed:0,systemParallax:0,stonesX:-.1,stonesY:-11,stonesZ:0,stonesRotX:0,stonesRotY:0,stonesRotZ:0,stonesScale:.9,stonesEmbed:.39,stoneMercuryX:-3.6,stoneMercuryY:-.04,stoneMercuryZ:-1.9,stoneMercuryScale:.9,stoneMercuryRotX:10,stoneMercuryRotY:-24,stoneMercuryRotZ:-73,stoneVenusX:-1.05,stoneVenusY:0,stoneVenusZ:-1.3,stoneVenusScale:1,stoneVenusRotX:-5,stoneVenusRotY:19,stoneVenusRotZ:7,stoneEarthX:7.1,stoneEarthY:-.19,stoneEarthZ:-1.55,stoneEarthScale:1.95,stoneEarthRotX:38,stoneEarthRotY:-16,stoneEarthRotZ:-11,stoneMarsX:-5.65,stoneMarsY:0,stoneMarsZ:-.2,stoneMarsScale:1.3,stoneMarsRotX:-7,stoneMarsRotY:30,stoneMarsRotZ:6,stoneJupiterX:2.25,stoneJupiterY:0,stoneJupiterZ:.2,stoneJupiterScale:1,stoneJupiterRotX:3,stoneJupiterRotY:-14,stoneJupiterRotZ:-5,stoneSaturnX:8.55,stoneSaturnY:0,stoneSaturnZ:1.2,stoneSaturnScale:1.45,stoneSaturnRotX:-11,stoneSaturnRotY:-180,stoneSaturnRotZ:-51,stoneUranusX:.7,stoneUranusY:0,stoneUranusZ:1.4,stoneUranusScale:1,stoneUranusRotX:7,stoneUranusRotY:-22,stoneUranusRotZ:-7,stoneNeptuneX:-3,stoneNeptuneY:0,stoneNeptuneZ:2.3,stoneNeptuneScale:1,stoneNeptuneRotX:-6,stoneNeptuneRotY:13,stoneNeptuneRotZ:9,stonePlutoX:5,stonePlutoY:0,stonePlutoZ:1.9,stonePlutoScale:1.3,stonePlutoRotX:11,stonePlutoRotY:-32,stonePlutoRotZ:-6,stoneMoonX:-8.15,stoneMoonY:-.37,stoneMoonZ:1.85,stoneMoonScale:2.9,stoneMoonRotX:-60,stoneMoonRotY:180,stoneMoonRotZ:-180,tierra1Ground:"#e89e7a",tierra1Horizon:"#ff9c71",tierra1Ambient:.8,tierra1Light1Color:"#ffd2ad",tierra1Light1Intensity:4.95,tierra1Light2Color:"#8b91ff",tierra1Light2Intensity:1.15,tierra1BloomIntensity:5.95,tierra1StoneMercuryX:-3.6,tierra1StoneMercuryY:-.04,tierra1StoneMercuryZ:-1.9,tierra1StoneVenusX:-1.05,tierra1StoneVenusY:0,tierra1StoneVenusZ:-1.3,tierra1StoneEarthX:7.1,tierra1StoneEarthY:-.19,tierra1StoneEarthZ:-1.55,tierra1StoneMarsX:-5.65,tierra1StoneMarsY:0,tierra1StoneMarsZ:-.2,tierra1StoneJupiterX:2.25,tierra1StoneJupiterY:0,tierra1StoneJupiterZ:.2,tierra1StoneSaturnX:8.55,tierra1StoneSaturnY:0,tierra1StoneSaturnZ:1.2,tierra1StoneUranusX:.7,tierra1StoneUranusY:0,tierra1StoneUranusZ:1.4,tierra1StoneNeptuneX:-3,tierra1StoneNeptuneY:0,tierra1StoneNeptuneZ:2.3,tierra1StonePlutoX:5,tierra1StonePlutoY:0,tierra1StonePlutoZ:1.9,tierra1StoneMoonX:-8.15,tierra1StoneMoonY:-.37,tierra1StoneMoonZ:1.85,tierra1StoneMercuryScale:.9,tierra1StoneMercuryRotX:10,tierra1StoneMercuryRotY:-24,tierra1StoneMercuryRotZ:-73,tierra1StoneVenusScale:1,tierra1StoneVenusRotX:-5,tierra1StoneVenusRotY:19,tierra1StoneVenusRotZ:7,tierra1StoneEarthScale:1.95,tierra1StoneEarthRotX:38,tierra1StoneEarthRotY:-16,tierra1StoneEarthRotZ:-11,tierra1StoneMarsScale:1.3,tierra1StoneMarsRotX:-7,tierra1StoneMarsRotY:30,tierra1StoneMarsRotZ:6,tierra1StoneJupiterScale:1,tierra1StoneJupiterRotX:3,tierra1StoneJupiterRotY:-14,tierra1StoneJupiterRotZ:-5,tierra1StoneSaturnScale:1.45,tierra1StoneSaturnRotX:-11,tierra1StoneSaturnRotY:-180,tierra1StoneSaturnRotZ:-51,tierra1StoneUranusScale:1,tierra1StoneUranusRotX:7,tierra1StoneUranusRotY:-22,tierra1StoneUranusRotZ:-7,tierra1StoneNeptuneScale:1,tierra1StoneNeptuneRotX:-6,tierra1StoneNeptuneRotY:13,tierra1StoneNeptuneRotZ:9,tierra1StonePlutoScale:1.3,tierra1StonePlutoRotX:11,tierra1StonePlutoRotY:-32,tierra1StonePlutoRotZ:-6,tierra1StoneMoonScale:2.9,tierra1StoneMoonRotX:-60,tierra1StoneMoonRotY:180,tierra1StoneMoonRotZ:-180,tierra2Ground:"#1f1f09",tierra2Horizon:"#1f1f09",tierra2Ambient:.8,tierra2Light1Color:"#ffd2ad",tierra2Light1Intensity:4.75,tierra2Light2Color:"#2f6e1d",tierra2Light2Intensity:.45,tierra2BloomIntensity:8.85,tierra2StoneMercuryX:2.75,tierra2StoneMercuryY:.01,tierra2StoneMercuryZ:-1.65,tierra2StoneVenusX:-8.45,tierra2StoneVenusY:0,tierra2StoneVenusZ:-1.3,tierra2StoneEarthX:-2.3,tierra2StoneEarthY:-.19,tierra2StoneEarthZ:-1.8,tierra2StoneMarsX:5.5,tierra2StoneMarsY:0,tierra2StoneMarsZ:-1,tierra2StoneJupiterX:.7,tierra2StoneJupiterY:0,tierra2StoneJupiterZ:-.15,tierra2StoneSaturnX:-5.8,tierra2StoneSaturnY:0,tierra2StoneSaturnZ:.05,tierra2StoneUranusX:7.9,tierra2StoneUranusY:-.24,tierra2StoneUranusZ:.7,tierra2StoneNeptuneX:3.3,tierra2StoneNeptuneY:0,tierra2StoneNeptuneZ:2.45,tierra2StonePlutoX:-6.25,tierra2StonePlutoY:0,tierra2StonePlutoZ:2.1,tierra2StoneMoonX:-2.15,tierra2StoneMoonY:-.76,tierra2StoneMoonZ:1.65,tierra2StoneMercuryScale:.9,tierra2StoneMercuryRotX:10,tierra2StoneMercuryRotY:-24,tierra2StoneMercuryRotZ:-73,tierra2StoneVenusScale:1,tierra2StoneVenusRotX:-5,tierra2StoneVenusRotY:19,tierra2StoneVenusRotZ:7,tierra2StoneEarthScale:1.85,tierra2StoneEarthRotX:41,tierra2StoneEarthRotY:-35,tierra2StoneEarthRotZ:-33,tierra2StoneMarsScale:1.3,tierra2StoneMarsRotX:-7,tierra2StoneMarsRotY:30,tierra2StoneMarsRotZ:6,tierra2StoneJupiterScale:1,tierra2StoneJupiterRotX:3,tierra2StoneJupiterRotY:-14,tierra2StoneJupiterRotZ:-5,tierra2StoneSaturnScale:1.45,tierra2StoneSaturnRotX:-11,tierra2StoneSaturnRotY:-180,tierra2StoneSaturnRotZ:-51,tierra2StoneUranusScale:1.85,tierra2StoneUranusRotX:7,tierra2StoneUranusRotY:-79,tierra2StoneUranusRotZ:-144,tierra2StoneNeptuneScale:1,tierra2StoneNeptuneRotX:-6,tierra2StoneNeptuneRotY:13,tierra2StoneNeptuneRotZ:9,tierra2StonePlutoScale:1.3,tierra2StonePlutoRotX:11,tierra2StonePlutoRotY:-32,tierra2StonePlutoRotZ:-6,tierra2StoneMoonScale:2.9,tierra2StoneMoonRotX:-60,tierra2StoneMoonRotY:180,tierra2StoneMoonRotZ:-180,tierra3Ground:"#486074",tierra3Horizon:"#496d74",tierra3Ambient:.8,tierra3Light1Color:"#ffd2ad",tierra3Light1Intensity:4.95,tierra3Light2Color:"#427c80",tierra3Light2Intensity:1.15,tierra3BloomIntensity:5.95,tierra3StoneMercuryX:-3.6,tierra3StoneMercuryY:-.04,tierra3StoneMercuryZ:-1.9,tierra3StoneVenusX:-1.05,tierra3StoneVenusY:0,tierra3StoneVenusZ:-1.3,tierra3StoneEarthX:7.1,tierra3StoneEarthY:-.19,tierra3StoneEarthZ:-1.55,tierra3StoneMarsX:-5.65,tierra3StoneMarsY:0,tierra3StoneMarsZ:-.2,tierra3StoneJupiterX:2.25,tierra3StoneJupiterY:0,tierra3StoneJupiterZ:.2,tierra3StoneSaturnX:8.55,tierra3StoneSaturnY:0,tierra3StoneSaturnZ:1.2,tierra3StoneUranusX:.7,tierra3StoneUranusY:0,tierra3StoneUranusZ:1.4,tierra3StoneNeptuneX:-3,tierra3StoneNeptuneY:0,tierra3StoneNeptuneZ:2.3,tierra3StonePlutoX:5,tierra3StonePlutoY:0,tierra3StonePlutoZ:1.9,tierra3StoneMoonX:-8.15,tierra3StoneMoonY:-.37,tierra3StoneMoonZ:1.85,tierra3StoneMercuryScale:.9,tierra3StoneMercuryRotX:10,tierra3StoneMercuryRotY:-24,tierra3StoneMercuryRotZ:-73,tierra3StoneVenusScale:1,tierra3StoneVenusRotX:-5,tierra3StoneVenusRotY:19,tierra3StoneVenusRotZ:7,tierra3StoneEarthScale:1.95,tierra3StoneEarthRotX:38,tierra3StoneEarthRotY:-16,tierra3StoneEarthRotZ:-11,tierra3StoneMarsScale:1.3,tierra3StoneMarsRotX:-7,tierra3StoneMarsRotY:30,tierra3StoneMarsRotZ:6,tierra3StoneJupiterScale:1,tierra3StoneJupiterRotX:3,tierra3StoneJupiterRotY:-14,tierra3StoneJupiterRotZ:-5,tierra3StoneSaturnScale:1.45,tierra3StoneSaturnRotX:-11,tierra3StoneSaturnRotY:-180,tierra3StoneSaturnRotZ:-51,tierra3StoneUranusScale:1,tierra3StoneUranusRotX:7,tierra3StoneUranusRotY:-22,tierra3StoneUranusRotZ:-7,tierra3StoneNeptuneScale:1,tierra3StoneNeptuneRotX:-6,tierra3StoneNeptuneRotY:13,tierra3StoneNeptuneRotZ:9,tierra3StonePlutoScale:1.3,tierra3StonePlutoRotX:11,tierra3StonePlutoRotY:-32,tierra3StonePlutoRotZ:-6,tierra3StoneMoonScale:2.9,tierra3StoneMoonRotX:-60,tierra3StoneMoonRotY:180,tierra3StoneMoonRotZ:-180,tierra4Ground:"#4f2e19",tierra4Horizon:"#4f2e19",tierra4Ambient:.8,tierra4Light1Color:"#ffd2ad",tierra4Light1Intensity:4.95,tierra4Light2Color:"#5181a4",tierra4Light2Intensity:.95,tierra4BloomIntensity:9.05,tierra4StoneMercuryX:-2.15,tierra4StoneMercuryY:-.05,tierra4StoneMercuryZ:.15,tierra4StoneVenusX:-8.65,tierra4StoneVenusY:-.18,tierra4StoneVenusZ:-1.8,tierra4StoneEarthX:-1.35,tierra4StoneEarthY:-.34,tierra4StoneEarthZ:2.1,tierra4StoneMarsX:6.15,tierra4StoneMarsY:0,tierra4StoneMarsZ:-.2,tierra4StoneJupiterX:-5.45,tierra4StoneJupiterY:-.19,tierra4StoneJupiterZ:.2,tierra4StoneSaturnX:1.85,tierra4StoneSaturnY:-.22,tierra4StoneSaturnZ:-1.2,tierra4StoneUranusX:8.2,tierra4StoneUranusY:0,tierra4StoneUranusZ:1.4,tierra4StoneNeptuneX:-3.7,tierra4StoneNeptuneY:0,tierra4StoneNeptuneZ:-1.4,tierra4StonePlutoX:4.35,tierra4StonePlutoY:0,tierra4StonePlutoZ:1.75,tierra4StoneMoonX:-8.6,tierra4StoneMoonY:-.37,tierra4StoneMoonZ:1.5,tierra4StoneMercuryScale:1.1,tierra4StoneMercuryRotX:84,tierra4StoneMercuryRotY:6,tierra4StoneMercuryRotZ:-73,tierra4StoneVenusScale:1,tierra4StoneVenusRotX:-5,tierra4StoneVenusRotY:19,tierra4StoneVenusRotZ:7,tierra4StoneEarthScale:2,tierra4StoneEarthRotX:9,tierra4StoneEarthRotY:-44,tierra4StoneEarthRotZ:-11,tierra4StoneMarsScale:1.3,tierra4StoneMarsRotX:-7,tierra4StoneMarsRotY:-49,tierra4StoneMarsRotZ:6,tierra4StoneJupiterScale:1,tierra4StoneJupiterRotX:3,tierra4StoneJupiterRotY:-14,tierra4StoneJupiterRotZ:-5,tierra4StoneSaturnScale:1.45,tierra4StoneSaturnRotX:-11,tierra4StoneSaturnRotY:-180,tierra4StoneSaturnRotZ:-51,tierra4StoneUranusScale:2.05,tierra4StoneUranusRotX:7,tierra4StoneUranusRotY:-22,tierra4StoneUranusRotZ:-7,tierra4StoneNeptuneScale:.8,tierra4StoneNeptuneRotX:-63,tierra4StoneNeptuneRotY:61,tierra4StoneNeptuneRotZ:180,tierra4StonePlutoScale:1.3,tierra4StonePlutoRotX:11,tierra4StonePlutoRotY:-18,tierra4StonePlutoRotZ:-6,tierra4StoneMoonScale:2.9,tierra4StoneMoonRotX:-60,tierra4StoneMoonRotY:180,tierra4StoneMoonRotZ:-180,showGround3d:!0,ground3dColor:"#e89e7a",ground3dRelief:6.2,ground3dTextureScale:.002,ground3dRoughness:.38,ground3dShadows:!0,ground3dContactShadows:0,ground3dFadeSides:0,ground3dFadeFar:.06,ground3dFadeNear:0,ground3dFadeSoftness:.2,groundX:-.15,groundStretchX:1,groundRotX:0,groundRotY:0,groundRotZ:0,ground3dExposure:.85,groundLightColor:"#ffd9b8",groundLightIntensity:0,groundLightX:10,groundLightY:11,groundLightZ:-3.5,groundLightTargetX:0,groundLightTargetZ:-2.5,groundY:-11.3,groundZ:5.25,groundWidth:23.5,groundDepth:16,stoneAmbientIntensity:.8,stoneLight1Color:"#ffd2ad",stoneLight1Intensity:4.95,stoneLight1X:-30,stoneLight1Y:-3,stoneLight1Z:10,stoneLight2Color:"#8b91ff",stoneLight2Intensity:1.15,stoneLight2X:-12,stoneLight2Y:5,stoneLight2Z:-14,showSections:!1,cardReturnSeconds:28,cardFlipDuration:1150,cardScale:.515,cardFocusScale:1.6,layoutCardX:0,layoutCardY:0,layoutCampaignCenterX:0,layoutCampaignY:0,layoutCampaignScale:.99,layoutCampaignOpenX:80,layoutCampaignOpenY:-177,manifestoX:0,manifestoY:66,manifestoScale:1,manifestoOpacity:.78,manifestoTitleX:0,manifestoTitleY:0,manifestoNoteX:0,manifestoNoteY:0,groundCampaignX:-93,groundCampaignY:-69,groundCampaignScale:1,groundCampaignOpenX:342,groundCampaignOpenY:-187,foilBaseColor:"#9b9a8c",foilSaturation:0,foilOpacity:.17,foilContrast:1.07,foilBevelSize:1.27,foilBevelStrength:3.7,foilMatte:0,foilLight1Intensity:1.14,foilLight1X:12.92,foilLight1Y:5,foilLight1Z:10,foilLight2Intensity:.8,foilLight2X:8.34,foilLight2Y:5,foilLight2Z:10,foilZoneX:-.243,foilZoneY:-.028,foilZoneScale:.152,foilHueSpeed:.04,foilScrollHue:.7,foilMouseHue:.2,foilMouseEase:.19,foilBands:1,foilGrain:.14,foilGrainFrequency:3e3,foilTilt:0,foilCurl:0,foilCurlCorner:0,foilTintColor:"#ffffff",foilTintAmount:0,foilBrushed:0,foilBrushedAngle:0,spaceColor:"#2d2838",glowRoseColor:"#2d1a60",glowRoseIntensity:5,glowCyanColor:"#7b41e6",glowCyanIntensity:.8,glowTealColor:"#5a2020",glowTealIntensity:20,showHorizonGradient:!1,showHorizonFloor:!0,floorColor:"#ff9c71",floorHeight:0,floorTilt:0,floorPerspective:50,floorTexture:0,floorTextureScale:.01,floorRelief:0,floorLightAngle:0,floorShade:0,floorHaze:0,mixColor:"#8fcb9b",mixAmount:0,mixScale:.002,mixCoverage:0,mixSoftness:.02,shootingEnabled:!0,shootingPauseMin:3,shootingPauseMax:10,shootingSpeed:27,shootingLength:6,shootingWidth:.25,shootingBrightness:3.1,shootingColor:"#fff3a9",shootingAngle:-30,shootingAngleVariation:57,horizonGlowColor:"#ff9c71",horizonBloomHeight:1035,horizonBloomIntensity:5.95,horizonBloomBlur:28,horizonBloomRound:0,horizonBloomFlat:1,horizonBloomCenterX:.5,horizonBloomWidth:900,horizonLine:0,lightingPresetVersion:Wg},yo={sun:{position:[-2.3,-.7,-1.5],radius:1.15},mercury:{position:[-5.4,1.9,.3],radius:.16,orbit:2.3},venus:{position:[-3.7,2.8,-.6],radius:.26,orbit:2.9},earth:{position:[-.9,3.4,-1.4],radius:.24,orbit:3.6},moon:{position:[-.55,3.52,-1.2],radius:.07},mars:{position:[-4.7,-2.3,-.4],radius:.18,orbit:4.3},jupiter:{position:[3.7,-.9,-.8],radius:.62,orbit:5.4},saturn:{position:[5.4,1.5,-1.8],radius:.55,orbit:6.7},uranus:{position:[.8,2.9,-2.4],radius:.3,orbit:7.8},neptune:{position:[1.7,-2.8,-1.6],radius:.28,orbit:8.7},pluto:{position:[5.1,-2.1,-.2],radius:.11,orbit:9.5}},$d={rock11_rock11_0:{planet:"mercury",position:[-4.9,-1.9],radius:.38,rotation:[.18,-.42,-.08],embed:.1},rock13_rock13_0:{planet:"venus",position:[-1.7,-1.3],radius:.5,rotation:[-.08,.34,.12],embed:.16},rock19_rock19_0:{planet:"earth",position:[2.9,-1.6],radius:.44,rotation:[.14,-.28,-.16],embed:.13},rock06_rock06_0:{planet:"mars",position:[-5.3,-.2],radius:.58,rotation:[-.12,.52,.1],embed:.2},rock12_rock12_0:{planet:"jupiter",position:[2.2,.2],radius:.96,rotation:[.06,-.24,-.08],embed:.3},rock09_rock09_0:{planet:"saturn",position:[5.2,.8],radius:.8,rotation:[-.16,.46,.14],embed:.26},rock17_rock17_0:{planet:"uranus",position:[.7,1.4],radius:.7,rotation:[.12,-.38,-.12],embed:.24},rock10_rock10_0:{planet:"neptune",position:[-3,2.3],radius:.76,rotation:[-.1,.22,.16],embed:.28},rock18_rock18_0:{planet:"pluto",position:[3.4,1.9],radius:.5,rotation:[.2,-.56,-.1],embed:.18}},Xg=[{source:"rock10_rock10_0",planet:"moon",position:[-1.8,.9],radius:.42,rotation:[.3,1.2,-.2],embed:.14}],Yg=[...Object.values($d),...Xg],xr=1,JM={mercury:"Mercurio",venus:"Venus",earth:"Tierra",mars:"Marte",jupiter:"J\xFApiter",saturn:"Saturno",uranus:"Urano",neptune:"Neptuno",pluto:"Plut\xF3n",moon:"Luna"},jM=["X","Y","Z","Scale","RotX","RotY","RotZ"],Pg=(r,e)=>`stone${r[0].toUpperCase()}${r.slice(1)}${e}`;function Gc(r){let e=(t,n,i,s,a)=>`<label>${t} <span><input type="range" min="${i}" max="${s}" step="${a}" data-lighting="${n}"><output></output></span></label>`;return Yg.map(({planet:t})=>{let n=i=>`tierra${r}Stone${t[0].toUpperCase()}${t.slice(1)}${i}`;return`
          <details class="lighting-panel__subgroup"><summary>Piedra \xB7 ${JM[t]}</summary>
            ${e("Posici\xF3n X",n("X"),-12,12,.05)}
            ${e("Altura",n("Y"),-1,2,.01)}
            ${e("Posici\xF3n Z",n("Z"),-10,10,.05)}
            ${e("Escala",n("Scale"),.1,4,.05)}
            ${e("Rotaci\xF3n X \xB0",n("RotX"),-180,180,1)}
            ${e("Rotaci\xF3n Y \xB0",n("RotY"),-180,180,1)}
            ${e("Rotaci\xF3n Z \xB0",n("RotZ"),-180,180,1)}
          </details>`}).join("")}var QM=.35,e1=3,t1=1.2,Ig=128,Lg=new N(1,0,0),n1=new N(0,0,1),go={width:90,top:24,bottom:-64,near:-8,far:-40},Ng=["#fff3a9","#ffd9b0","#c9d6ff","#ffffff","#ffb28e"].map(r=>new Me(r)),i1=`
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
`,r1=`
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
`,s1=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,a1=`
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
`,o1=-15,Wc={left:-.9,right:.9,top:-.02,bottom:-.5},l1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,c1=`
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
`,Dg={foilSaturation:"uFoilSaturation",foilOpacity:"uFoilOpacity",foilContrast:"uFoilContrast",foilBevelStrength:"uBevelStrength",foilMatte:"uMatteRoughness",foilLight1Intensity:"uLight1Intensity",foilLight2Intensity:"uLight2Intensity",foilHueSpeed:"uHueSpeed",foilMouseHue:"uMouseHue",foilBands:"uBands",foilGrain:"uGrain",foilGrainFrequency:"uGrainFrequency",foilCurl:"uCurl",foilCurlCorner:"uCurlCorner",foilTintAmount:"uTintAmount",foilBrushed:"uBrushed",foilBrushedAngle:"uBrushedAngle"},Ug={foilBaseColor:"uBaseColor",foilTintColor:"uTint"},u1=2.08703;function h1(r,e){let t=parseInt(String(r).replace("#",""),16)||0;return e.set((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)}var d1=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,f1=`
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

    // The card occupies a small zone of a virtual 0.708 \xD7 1 certificate, like the reference seal.
    vec3 position = vec3(uZoneCenter + (vUv - 0.5) * vec2(uAspect, 1.0) * uZoneScale, 0.0);
    vec2 sheetUv = vec2(position.x / 0.708, position.y - 0.38193) + 0.5;
    vec2 fromCenter = vUv - 0.5;
    vec2 slope = -fromCenter * vec2(1.6, 0.9) * uCurl;
    vec2 fromCorner = vUv - vec2(1.0, 0.0);
    slope += fromCorner * uCurlCorner * exp(-dot(fromCorner, fromCorner) / 0.08) * 3.5;
    vec3 normal = normalize(vec3(slope, 1.0));
    vec3 viewDirection = normalize(uCameraPosition - position);

    // 1\u20133. Matte base lit by two point lights.
    float diffuse = lighting(normal, position);
    vec3 base = uBaseColor * (1.0 - uMatteRoughness * 0.3) * diffuse;

    // 4\u20135. Foil mask, fresnel and reflection.
    float foilStrength = mask(vUv);
    float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.5);
    vec3 reflection = reflect(-viewDirection, normal);

    // 6\u20138. Hue from view angle, time, scroll and mouse, shifted by diffraction bands.
    float hue = reflection.x * 2.2 + reflection.y * 1.6 + reflection.z * 0.5;
    hue += uTime * uHueSpeed + uScrollOffset + (uMouse.x * 0.8 + uMouse.y * 0.5) * uMouseHue;
    float band1 = sin((sheetUv.x * 7.0 + sheetUv.y * 3.0) * 6.2831853);
    float band2 = sin((sheetUv.x * 2.0 - sheetUv.y * 6.0) * 6.2831853);
    float band3 = sin((sheetUv.x * 10.0 + sheetUv.y * 7.0) * 6.2831853);
    hue = fract(hue + (band1 * 0.18 + band2 * 0.12 + band3 * 0.05) * uBands + fresnel * 0.08);
    float isWhite = smoothstep(0.7, 0.97, foilStrength);
    hue = fract(hue + mix(0.5, 0.0, isWhite));

    // 9\u201310. Mostly desaturated rainbow.
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

    // 12\u201313. Rainbow tint applied with hard light, stronger on lit areas and at grazing angles.
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
`;function p1(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(.6,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let i=new Nr(e);return i.colorSpace=Tt,i}function m1(r=128){let e=document.createElement("canvas");e.width=r,e.height=r;let t=e.getContext("2d"),n=t.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);return n.addColorStop(0,"rgba(20, 8, 6, 0.85)"),n.addColorStop(.45,"rgba(20, 8, 6, 0.45)"),n.addColorStop(1,"rgba(20, 8, 6, 0)"),t.fillStyle=n,t.fillRect(0,0,r,r),new Nr(e)}function g1(r=256){let e=new Uint8Array(r*r*4),t=(a,o)=>{let l=Math.sin(a*127.1+o*311.7)*43758.5453123;return l-Math.floor(l)},n=a=>a*a*(3-2*a),i=(a,o)=>{let l=Math.floor(a),c=Math.floor(o),u=n(a-l),h=n(o-c),d=lt.lerp(t(l,c),t(l+1,c),u),f=lt.lerp(t(l,c+1),t(l+1,c+1),u);return lt.lerp(d,f,h)};for(let a=0;a<r;a+=1)for(let o=0;o<r;o+=1){let l=o/r,c=a/r,u=i(l*7,c*7)*.56+i(l*19,c*19)*.29+i(l*53,c*53)*.15,h=Math.round(lt.clamp(.28+u*.72,0,1)*255),d=(a*r+o)*4;e[d]=h,e[d+1]=h,e[d+2]=h,e[d+3]=255}let s=new Li(e,r,r,Jt);return s.wrapS=ti,s.wrapT=ti,s.minFilter=hn,s.magFilter=ot,s.generateMipmaps=!0,s.colorSpace=Sn,s.needsUpdate=!0,s}function Fg(r={},e=128){let t=Math.max(Number(r.sides??.16),.001),n=Math.max(Number(r.far??.16),.001),i=Math.max(Number(r.near??.16),.001),s=Math.max(Number(r.softness??1),.05),a=new Uint8Array(e*e*4);for(let l=0;l<e;l+=1)for(let c=0;c<e;c+=1){let u=c/(e-1),h=l/(e-1),d=Math.min(lt.smoothstep(Math.min(u,1-u),0,t),lt.smoothstep(1-h,0,n),lt.smoothstep(h,0,i))**s,f=Math.round(d*255),g=(l*e+c)*4;a[g]=f,a[g+1]=f,a[g+2]=f,a[g+3]=255}let o=new Li(a,e,e,Jt);return o.minFilter=ot,o.magFilter=ot,o.generateMipmaps=!1,o.colorSpace=Sn,o.needsUpdate=!0,o}function Og(r){return(Array.isArray(r.material)?r.material:[r.material]).map(t=>t?.name?.toLowerCase()||"").join(" ")}function _1(r){let e=`${r.name} ${Og(r)}`.toLowerCase();if(e.includes("saturn ring"))return"saturn-ring";for(let t of Object.keys(yo))if(e.includes(t))return t;return/^material(\.\d+)?$/.test(Og(r))?"sun":null}function Bg(r,e){r.geometry.computeBoundingSphere();let t=r.geometry.boundingSphere?.radius||1;r.scale.setScalar(e/t)}var Kd=class{constructor(e){pf(this,"render",(e=0)=>{this.animationFrame=requestAnimationFrame(this.render),this.timer.update(e);let t=Math.min(this.timer.getDelta(),.1);if(this.renderFoilCards(e),!(!this.visible||!this.renderer)){if(this.updateStars(An.matches?0:this.timer.getElapsed(),An.matches?0:t),this.updateSystem(this.timer.getElapsed(),t),An.matches||this.updateShootingStars(this.timer.getElapsed(),t),An.matches||(this.updateOrbits(t),this.grainLayers.forEach(n=>{let i=Math.max(1,Number(this.effectSettings?.grainSpeed??ie.grainSpeed));e-n.lastUpdate>=1e3/i&&(n.seed=n.seed%97+1,n.node.setAttribute("seed",n.seed),n.lastUpdate=e)})),this.camera.layers.set(0),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera),this.renderer.autoClear=!1,this.renderer.clearDepth(),this.horizonMesh?.visible&&this.renderer.render(this.horizonScene,this.horizonCamera),this.stonesReady){let n=this.renderer.toneMapping,i=this.renderer.toneMappingExposure;this.renderSize??(this.renderSize=new Ae),this.renderer.getSize(this.renderSize),this.renderer.setScissorTest(!0),this.renderer.setScissor(0,0,this.renderSize.x,Math.floor(this.renderSize.y/2)),this.renderer.clearDepth(),this.renderer.toneMapping=kr,this.renderer.toneMappingExposure=Number(this.effectSettings?.ground3dExposure??ie.ground3dExposure),this.camera.layers.set(xr),this.renderer.render(this.scene,this.camera),this.camera.layers.set(0),this.renderer.toneMapping=n,this.renderer.toneMappingExposure=i,this.renderer.setScissorTest(!1)}this.renderer.autoClear=!0}});if(this.root=e,this.stage=e.querySelector("[data-solar-stage]"),this.canvas=e.querySelector(".altar-solar__canvas"),this.grainLayers=Array.from(e.querySelectorAll("[data-grain-turbulence]")).map(t=>({node:t,section:Number(t.dataset.grainSection||1),lastUpdate:0,seed:1})),this.modelUrl=e.dataset.modelUrl,this.stonesUrl=e.dataset.stonesUrl,this.animationFrame=0,this.spinners=[],this.spinTweens=[],this.orbiters=[],this.orbitAxis=new N(0,0,1),this.orbitQuaternion=new ln,this.orbitBinormal=new N,this.shootingStars=[],this.nextShootingStar=2,this.pointer=new Ae,this.smoothPointer=new Ae,this.timer=new Oa,this.visible=!0,this.setupFoilCards(),this.setupFortuneFlip(),this.setupSpotifyPlayer(),this.setupDraggables(),this.setupCursorBadge(),this.setupChannels(),!this.stage||!this.canvas||!this.modelUrl||!WebGLRenderingContext){e.classList.add("is-fallback");return}this.setupRenderer(),this.setupScene(),this.setupHorizonLayer(),this.setupStones(),e.hasAttribute("data-lighting-controls")&&this.setupLightingControls(),this.bindEvents(),this.loadModel(),this.render()}setupRenderer(){this.renderer=new qs({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Ag()),this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=Yd[ie.toneMapping],this.renderer.toneMappingExposure=ie.exposure}setupScene(){this.scene=new er,this.camera=new Dt(42,1,.1,2e3),this.camera.position.set(0,0,13),this.hemisphereLight=new Fs(ie.hemisphereSky,ie.hemisphereGround,ie.hemisphereIntensity),this.keyLight=new ni(ie.keyColor,ie.keyIntensity),this.keyLight.position.set(ie.keyX,ie.keyY,ie.keyZ),this.rimLight=new ni(ie.rimColor,ie.rimIntensity),this.rimLight.position.set(ie.rimX,ie.rimY,ie.rimZ),this.scene.add(this.hemisphereLight,this.keyLight,this.rimLight),this.createStars(ie)}setupHorizonLayer(){this.horizonScene=new er,this.horizonCamera=new kn(-1,1,1,-1,0,1),this.horizonMaterial=new Bt({uniforms:{uResolution:{value:new Ae(1,1)},uFloorColor:{value:new Me(ie.floorColor)},uGlowColor:{value:new Me(ie.horizonGlowColor)},uMixColor:{value:new Me(ie.mixColor)},uFloorHeight:{value:ie.floorHeight},uFloorTilt:{value:ie.floorTilt},uFloorPerspective:{value:ie.floorPerspective},uFloorTexture:{value:ie.floorTexture},uFloorTextureScale:{value:ie.floorTextureScale},uFloorRelief:{value:ie.floorRelief},uFloorLightAngle:{value:ie.floorLightAngle},uFloorShade:{value:ie.floorShade},uFloorHaze:{value:ie.floorHaze},uMixAmount:{value:ie.mixAmount},uMixScale:{value:ie.mixScale},uMixCoverage:{value:ie.mixCoverage},uMixSoftness:{value:ie.mixSoftness},uBloomHeight:{value:ie.horizonBloomHeight},uBloomIntensity:{value:ie.horizonBloomIntensity},uBloomBlur:{value:ie.horizonBloomBlur},uBloomRound:{value:ie.horizonBloomRound},uBloomFlat:{value:ie.horizonBloomFlat},uBloomCenterX:{value:ie.horizonBloomCenterX},uBloomWidth:{value:ie.horizonBloomWidth},uHorizonLine:{value:ie.horizonLine},uShowGradient:{value:ie.showHorizonGradient?1:0}},vertexShader:s1,fragmentShader:a1,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.horizonMesh=new xt(new zn(2,2),this.horizonMaterial),this.horizonMesh.frustumCulled=!1,this.horizonScene.add(this.horizonMesh),this.root.classList.add("has-webgl-horizon")}setupStones(){this.stonesUrl&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Or,this.stonesGroup=new mn,this.stonesGroup.position.set(ie.stonesX,ie.stonesY,ie.stonesZ),this.stonesGroup.layers.set(xr),this.scene.add(this.stonesGroup),this.groundHeightTexture=g1(),this.groundHeightTexture.repeat.set(8,8),this.groundAlphaTexture=Fg(),this.groundMaterial=new Di({color:ie.floorColor,roughness:.94,metalness:0,bumpMap:this.groundHeightTexture,bumpScale:.22,alphaMap:this.groundAlphaTexture,alphaTest:.01,transparent:!0}),this.ground=new xt(new zn(1,1),this.groundMaterial),this.ground.rotation.x=-Math.PI/2,this.ground.position.set(0,ie.groundY,ie.groundZ),this.ground.scale.set(ie.groundWidth,ie.groundDepth,1),this.ground.receiveShadow=!0,this.ground.layers.set(xr),this.scene.add(this.ground),this.stoneAmbient=new Fs("#f4d9c5","#4a2530",ie.stoneAmbientIntensity),this.stoneLight1=new ni(ie.stoneLight1Color,ie.stoneLight1Intensity),this.stoneLight1.position.set(ie.stoneLight1X,ie.stoneLight1Y,ie.stoneLight1Z),this.stoneLight1.target.position.set(0,ie.stonesY,-3),this.stoneLight1.castShadow=!0,this.stoneLight1.shadow.mapSize.set(1024,1024),this.stoneLight1.shadow.camera.left=-12,this.stoneLight1.shadow.camera.right=12,this.stoneLight1.shadow.camera.top=12,this.stoneLight1.shadow.camera.bottom=-12,this.stoneLight1.shadow.camera.near=.1,this.stoneLight1.shadow.camera.far=80,this.stoneLight1.shadow.bias=-8e-4,this.stoneLight1.shadow.normalBias=.035,this.stoneLight2=new ni(ie.stoneLight2Color,ie.stoneLight2Intensity),this.stoneLight2.position.set(ie.stoneLight2X,ie.stoneLight2Y,ie.stoneLight2Z),this.stoneLight2.target.position.set(0,ie.stonesY,-3),this.groundLight=new ni(ie.groundLightColor,ie.groundLightIntensity),[this.stoneAmbient,this.stoneLight1,this.stoneLight1.target,this.stoneLight2,this.stoneLight2.target,this.groundLight,this.groundLight.target].forEach(e=>e.layers.set(xr)),this.scene.add(this.stoneAmbient,this.stoneLight1,this.stoneLight1.target,this.stoneLight2,this.stoneLight2.target,this.groundLight,this.groundLight.target),new eo().load(this.stonesUrl,({scene:e})=>{let t=m1(),n=[];e.layers.set(xr);let i=(o,l)=>{let c=o.geometry.boundingSphere?.radius||1,u=l.radius/c,h=o.geometry.boundingBox.max.y-o.geometry.boundingBox.min.y;o.scale.setScalar(u),o.userData.groundY=h*u*.5-l.embed,o.userData.baseScale=u,o.userData.halfHeight=h*u*.5,o.userData.slotEmbed=l.embed,o.userData.slotRadius=l.radius,o.position.set(l.position[0],o.userData.groundY-Number(this.effectSettings?.stonesEmbed??ie.stonesEmbed),l.position[1]),o.rotation.set(...l.rotation),o.name=`stone-${l.planet}`,o.userData.planet=l.planet,o.castShadow=!0,o.receiveShadow=!0,o.layers.set(xr);let d=new xt(new zn(1,1),new In({map:t,transparent:!0,depthWrite:!1,opacity:ie.ground3dContactShadows}));d.rotation.x=-Math.PI/2,d.rotation.z=l.rotation[1],d.scale.set(l.radius*2.6,l.radius*2.1,1),d.position.set(l.position[0],-.004,l.position[1]),d.renderOrder=1,d.layers.set(xr),d.userData.isContactShadow=!0,o.userData.contact=d,n.push(d)},s=new Map;e.traverse(o=>{if(o.layers.set(xr),!o.isMesh)return;if(!$d[o.name]){o.visible=!1;return}o.geometry.computeBoundingBox();let l=o.geometry.boundingBox.getCenter(new N);o.geometry.translate(-l.x,-l.y,-l.z),o.geometry.computeBoundingBox(),o.geometry.computeBoundingSphere(),(Array.isArray(o.material)?o.material:[o.material]).forEach(u=>{u&&(u.roughness=Math.max(u.roughness??.72,.72),u.needsUpdate=!0)}),s.set(o.name,o)});let a=Xg.map(o=>{let l=s.get(o.source);if(!l)return null;let c=l.clone();return c.parent=null,[c,o,l.parent]}).filter(Boolean);s.forEach((o,l)=>i(o,$d[l])),a.forEach(([o,l,c])=>{i(o,l),c.add(o)}),this.stonesGroup.add(e,...n),this.stonesReady=!0,this.applyLightingSettings(this.effectSettings??{...ie}),this.root.classList.add("is-stones-ready")},void 0,()=>this.root.classList.add("is-stones-fallback")))}createStars(e){let t=Math.max(0,Math.round(Number(e.starCount))),n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3);for(let c=0;c<t;c+=1)n[c*3]=(Math.random()-.5)*go.width,n[c*3+1]=lt.lerp(go.bottom,go.top,Math.random()),n[c*3+2]=lt.lerp(go.near,go.far,Math.random()),i[c]=Math.random()*Math.PI*2,s[c]=.4+Math.random()*1.6,a[c]=.35+Math.random()**3*1.65,Ng[Math.floor(Math.random()*Ng.length)].toArray(o,c*3);let l=new Ut;l.setAttribute("position",new mt(n,3)),l.setAttribute("aPhase",new mt(i,1)),l.setAttribute("aSpeed",new mt(s,1)),l.setAttribute("aSize",new mt(a,1)),l.setAttribute("aTint",new mt(o,3)),this.stars?(this.stars.geometry.dispose(),this.stars.geometry=l):(this.stars=new Lr(l,new Bt({uniforms:{uTime:{value:0},uSize:{value:1},uPixelRatio:{value:1},uBrightness:{value:1},uTwinkleSpeed:{value:1},uTwinkleAmount:{value:0},uBloomSize:{value:0},uBloomIntensity:{value:0},uColor:{value:new Me},uVariation:{value:0}},vertexShader:i1,fragmentShader:r1,transparent:!0,depthWrite:!1,blending:Br})),this.stars.renderOrder=-1,this.scene.add(this.stars)),this.starCount=t}updateStars(e,t){if(!this.stars)return;let n=this.effectSettings??ie;Math.round(Number(n.starCount))!==this.starCount&&this.createStars(n);let i=this.stars.material.uniforms;i.uTime.value=e,i.uSize.value=Number(n.starSize),i.uPixelRatio.value=this.renderer.getPixelRatio(),i.uBrightness.value=Number(n.starBrightness),i.uTwinkleSpeed.value=Number(n.twinkleSpeed),i.uTwinkleAmount.value=Number(n.twinkleAmount),i.uBloomSize.value=Number(n.bloomSize),i.uBloomIntensity.value=Number(n.bloomIntensity),i.uColor.value.set(n.starColor),i.uVariation.value=Number(n.starColorVariation),this.stars.rotation.z+=t*Number(n.starDrift)*.01}readLightingSettings(){if(this.persistLighting=Cg(Rg)==="1",!this.persistLighting)return Vc(Hc,null),{...ie};try{let e=JSON.parse(Cg(Hc))||{};return e.lightingPresetVersion!==Wg?{...ie}:{...ie,...e}}catch{return{...ie}}}saveLightingSettings(e){this.persistLighting&&Vc(Hc,JSON.stringify(e))}applyLightingSettings(e){this.lightingBase=e;let t=this.groundPaletteFor(this.channelIndex??0,e);e={...e,...t},this.groundPaletteFrame||(this.currentGroundPalette=t),this.hemisphereLight.color.set(e.hemisphereSky),this.hemisphereLight.groundColor.set(e.hemisphereGround),this.hemisphereLight.intensity=Number(e.hemisphereIntensity),this.keyLight.color.set(e.keyColor),this.keyLight.intensity=Number(e.keyIntensity),this.keyLight.position.set(Number(e.keyX),Number(e.keyY),Number(e.keyZ)),this.rimLight.color.set(e.rimColor),this.rimLight.intensity=Number(e.rimIntensity),this.rimLight.position.set(Number(e.rimX),Number(e.rimY),Number(e.rimZ)),this.renderer.toneMappingExposure=Number(e.exposure),this.renderer.toneMapping=Yd[e.toneMapping]??kr,this.root.style.setProperty("--effect-blur",`calc(${Number(e.effectBlur)} * var(--u, 1px))`),this.root.style.setProperty("--grain-opacity",Number(e.grainOpacity)),this.root.style.setProperty("--section-grain-opacity",Number(e.sectionGrainOpacity)),this.grainLayers.forEach(o=>{o.node.setAttribute("baseFrequency",Number(e.grainFrequency).toFixed(2))}),this.root.style.setProperty("--space-color",e.spaceColor),this.root.style.setProperty("--card-flip-duration",`${Number(e.cardFlipDuration)}ms`),this.root.style.setProperty("--card-scale",Number(e.cardScale)),this.root.style.setProperty("--campaign-scale",Number(e.layoutCampaignScale)),["X","Y","TitleX","TitleY","NoteX","NoteY"].forEach(o=>{let l=o.replace(/([A-Z])/g,"-$1").toLowerCase();this.root.style.setProperty(`--manifesto${l.startsWith("-")?l:`-${l}`}`,`calc(${Number(e[`manifesto${o}`])} * var(--u, 1px))`)}),this.root.style.setProperty("--manifesto-scale",Number(e.manifestoScale)),this.root.style.setProperty("--manifesto-opacity",Number(e.manifestoOpacity)),this.root.style.setProperty("--campaign-open-x",`calc(${Number(e.layoutCampaignOpenX)} * var(--u, 1px))`),this.root.style.setProperty("--campaign-open-y",`calc(${Number(e.layoutCampaignOpenY)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-x",`calc(${Number(e.groundCampaignX)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-y",`calc(${Number(e.groundCampaignY)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-scale",Number(e.groundCampaignScale)),this.root.style.setProperty("--ground-campaign-open-x",`calc(${Number(e.groundCampaignOpenX)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-open-y",`calc(${Number(e.groundCampaignOpenY)} * var(--u, 1px))`),[[".altar-solar__fortune-cards","layoutCardX","layoutCardY"],[".altar-solar__campaign","layoutCampaignCenterX","layoutCampaignY"]].forEach(([o,l,c])=>{let u=this.root.querySelector(o);u?.style.setProperty("--pos-x",`calc(${Number(e[l])} * var(--u, 1px))`),u?.style.setProperty("--pos-y",`calc(${Number(e[c])} * var(--u, 1px))`)}),["rose","cyan","teal"].forEach(o=>{let l=o[0].toUpperCase()+o.slice(1);this.root.querySelectorAll(`.altar-solar__glow--${o}`).forEach(c=>{c.style.setProperty("--c",e[`glow${l}Color`]),c.style.setProperty("--glow-intensity",Number(e[`glow${l}Intensity`]))})}),this.root.querySelectorAll(".altar-solar__horizon").forEach(o=>{o.hidden=!e.showHorizonFloor,o.style.setProperty("--floor-color",e.floorColor),o.style.setProperty("--glow-color",e.horizonGlowColor)}),this.root.style.setProperty("--floor-height",`calc(${Number(e.floorHeight)} * var(--u, 1px))`),this.root.style.setProperty("--bloom-height",`calc(${Number(e.horizonBloomHeight)} * var(--u, 1px))`),this.root.style.setProperty("--bloom-intensity",Number(e.horizonBloomIntensity)),this.root.style.setProperty("--bloom-blur",`calc(${Number(e.horizonBloomBlur)} * var(--u, 1px))`),this.root.style.setProperty("--horizon-line",Number(e.horizonLine)),this.root.style.setProperty("--floor-tilt",`${Number(e.floorTilt)}deg`),this.root.style.setProperty("--floor-perspective",`calc(${Number(e.floorPerspective)} * var(--u, 1px))`),this.root.style.setProperty("--floor-texture",Number(e.floorTexture)),this.root.style.setProperty("--floor-shade",Number(e.floorShade)),this.root.style.setProperty("--floor-haze",Number(e.floorHaze)),this.root.querySelectorAll("[data-floor-noise]").forEach(o=>o.setAttribute("baseFrequency",Number(e.floorTextureScale))),this.root.querySelectorAll("[data-floor-relief]").forEach(o=>o.setAttribute("surfaceScale",Number(e.floorRelief))),this.root.style.setProperty("--floor-mix",Number(e.mixAmount));let n=1/Math.max(Number(e.mixSoftness),.02),i=.8-.6*Number(e.mixCoverage),s=`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${n.toFixed(3)} 0 0 0 ${(.5-n*i).toFixed(3)}`;if(this.root.querySelectorAll("[data-mix-noise]").forEach(o=>o.setAttribute("baseFrequency",Number(e.mixScale))),this.root.querySelectorAll("[data-mix-alpha]").forEach(o=>o.setAttribute("values",s)),this.root.querySelectorAll("[data-mix-flood]").forEach(o=>o.setAttribute("flood-color",e.mixColor)),this.root.querySelectorAll("[data-floor-light]").forEach(o=>o.setAttribute("azimuth",Number(e.floorLightAngle))),this.root.querySelectorAll(".altar-solar__gradient").forEach(o=>{o.hidden=!e.showHorizonGradient}),this.horizonMaterial){let o=this.horizonMaterial.uniforms;o.uFloorColor.value.set(e.floorColor),o.uGlowColor.value.set(e.horizonGlowColor),o.uMixColor.value.set(e.mixColor),o.uFloorHeight.value=Number(e.floorHeight),o.uFloorTilt.value=Number(e.floorTilt),o.uFloorPerspective.value=Number(e.floorPerspective),o.uFloorTexture.value=Number(e.floorTexture),o.uFloorTextureScale.value=Number(e.floorTextureScale),o.uFloorRelief.value=Number(e.floorRelief),o.uFloorLightAngle.value=Number(e.floorLightAngle),o.uFloorShade.value=Number(e.floorShade),o.uFloorHaze.value=Number(e.floorHaze),o.uMixAmount.value=Number(e.mixAmount),o.uMixScale.value=Number(e.mixScale),o.uMixCoverage.value=Number(e.mixCoverage),o.uMixSoftness.value=Number(e.mixSoftness),o.uBloomHeight.value=Number(e.horizonBloomHeight),o.uBloomIntensity.value=Number(e.horizonBloomIntensity),o.uBloomBlur.value=Number(e.horizonBloomBlur),o.uBloomRound.value=Number(e.horizonBloomRound),o.uBloomFlat.value=Number(e.horizonBloomFlat),o.uBloomCenterX.value=Number(e.horizonBloomCenterX),o.uBloomWidth.value=Number(e.horizonBloomWidth),o.uHorizonLine.value=Number(e.horizonLine),o.uShowGradient.value=e.showHorizonGradient?1:0,this.horizonMesh.visible=!!e.showHorizonFloor}if(this.updateStones(e),this.groundMaterial){this.groundMaterial.color.set(e.ground3dColor),this.groundMaterial.bumpScale=Number(e.ground3dRelief)*.09,this.groundMaterial.roughness=Number(e.ground3dRoughness);let o=lt.clamp(.08/Math.max(Number(e.ground3dTextureScale),.002),3,32);this.groundHeightTexture.repeat.set(o,o),this.groundHeightTexture.needsUpdate=!0,this.groundMaterial.needsUpdate=!0}let a=["ground3dFadeSides","ground3dFadeFar","ground3dFadeNear","ground3dFadeSoftness"].map(o=>e[o]).join("|");if(this.groundMaterial&&a!==this.groundFadeKey&&(this.groundFadeKey=a,this.groundAlphaTexture?.dispose(),this.groundAlphaTexture=Fg({sides:e.ground3dFadeSides,far:e.ground3dFadeFar,near:e.ground3dFadeNear,softness:e.ground3dFadeSoftness}),this.groundMaterial.alphaMap=this.groundAlphaTexture,this.groundMaterial.needsUpdate=!0),this.groundLight&&(this.groundLight.color.set(e.groundLightColor),this.groundLight.intensity=Number(e.groundLightIntensity),this.groundLight.position.set(Number(e.groundX)+Number(e.groundLightX),Number(e.groundY)+Number(e.groundLightY),Number(e.groundZ)+Number(e.groundLightZ)),this.groundLight.target.position.set(Number(e.groundX)+Number(e.groundLightTargetX),Number(e.groundY),Number(e.groundZ)+Number(e.groundLightTargetZ))),this.ground){let o=lt.degToRad;this.ground.rotation.set(-Math.PI/2+o(Number(e.groundRotX)),o(Number(e.groundRotY)),o(Number(e.groundRotZ)),"YXZ"),this.ground.position.set(Number(e.groundX),Number(e.groundY),Number(e.groundZ)),this.ground.scale.set(Number(e.groundWidth)*Number(e.groundStretchX),Number(e.groundDepth),1),this.ground.visible=e.showGround3d!==!1,this.ground.receiveShadow=e.ground3dShadows!==!1}this.stoneAmbient&&(this.stoneAmbient.intensity=Number(e.stoneAmbientIntensity)),this.stoneLight1&&(this.stoneLight1.color.set(e.stoneLight1Color),this.stoneLight1.intensity=Number(e.stoneLight1Intensity),this.stoneLight1.position.set(Number(e.stoneLight1X),Number(e.stoneLight1Y),Number(e.stoneLight1Z)),this.stoneLight1.target.position.set(0,Number(e.groundY),Number(e.groundZ)-3)),this.stoneLight2&&(this.stoneLight2.color.set(e.stoneLight2Color),this.stoneLight2.intensity=Number(e.stoneLight2Intensity),this.stoneLight2.position.set(Number(e.stoneLight2X),Number(e.stoneLight2Y),Number(e.stoneLight2Z)),this.stoneLight2.target.position.set(0,Number(e.groundY),Number(e.groundZ)-3)),this.sectionGuide&&(this.sectionGuide.hidden=!e.showSections,this.updateTramoHud()),this.effectSettings=e}setupLightingControls(){let e=this.readLightingSettings(),t=document.createElement("aside");t.className="lighting-panel is-collapsed",t.setAttribute("aria-label","Controlador de iluminaci\xF3n"),t.innerHTML=`
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
          <label>Foil saturaci\xF3n <span><input type="range" min="0" max="2" step="0.01" data-lighting="foilSaturation"><output></output></span></label>
          <label>Foil opacidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilOpacity"><output></output></span></label>
          <label>Foil contraste <span><input type="range" min="0" max="3" step="0.01" data-lighting="foilContrast"><output></output></span></label>
          <label>Bisel tama\xF1o px <span><input type="range" min="0.2" max="6" step="0.01" data-lighting="foilBevelSize"><output></output></span></label>
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
          <label>Difracci\xF3n <span><input type="range" min="0" max="3" step="0.05" data-lighting="foilBands"><output></output></span></label>
          <label>Grano <span><input type="range" min="0" max="0.5" step="0.01" data-lighting="foilGrain"><output></output></span></label>
          <label>Grano frecuencia <span><input type="range" min="200" max="6000" step="50" data-lighting="foilGrainFrequency"><output></output></span></label>
        </details>
        <details><summary>Carta mapeo</summary>
          <label>Zona X <span><input type="range" min="-0.354" max="0.354" step="0.001" data-lighting="foilZoneX"><output></output></span></label>
          <label>Zona Y <span><input type="range" min="-0.5" max="0.9" step="0.001" data-lighting="foilZoneY"><output></output></span></label>
          <label>Tama\xF1o zona <span><input type="range" min="0.05" max="1.5" step="0.001" data-lighting="foilZoneScale"><output></output></span></label>
        </details>
        <details><summary>Carta extras</summary>
          <label>Inclinaci\xF3n 3D \xB0 <span><input type="range" min="0" max="25" step="0.5" data-lighting="foilTilt"><output></output></span></label>
          <label>Curvatura <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilCurl"><output></output></span></label>
          <label>Esquina levantada <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilCurlCorner"><output></output></span></label>
          <label class="is-color">Tinte <input type="color" data-lighting="foilTintColor"></label>
          <label>Tinte cantidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilTintAmount"><output></output></span></label>
          <label>Cepillado <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilBrushed"><output></output></span></label>
          <label>Cepillado \xB0 <span><input type="range" min="0" max="180" step="1" data-lighting="foilBrushedAngle"><output></output></span></label>
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
          <label>Inclinaci\xF3n \xB0 <span><input type="range" min="0" max="89" step="0.5" data-lighting="floorTilt"><output></output></span></label>
          <label>Perspectiva px <span><input type="range" min="50" max="1500" step="10" data-lighting="floorPerspective"><output></output></span></label>
          <label>Textura <span><input type="range" min="0" max="1" step="0.01" data-lighting="floorTexture"><output></output></span></label>
          <label>Escala ruido <span><input type="range" min="0.005" max="0.2" step="0.005" data-lighting="floorTextureScale"><output></output></span></label>
          <label>Relieve <span><input type="range" min="0" max="20" step="0.1" data-lighting="floorRelief"><output></output></span></label>
          <label>Luz relieve \xB0 <span><input type="range" min="0" max="360" step="1" data-lighting="floorLightAngle"><output></output></span></label>
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
          <label>L\xEDnea horizonte <span><input type="range" min="0" max="1" step="0.01" data-lighting="horizonLine"><output></output></span></label>
        </details>
        <details><summary>Tierra \xB7 canal 1</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra1Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra1Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra1Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra1Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra1Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1BloomIntensity"><output></output></span></label>
${Gc(1)}
        </details>
        <details><summary>Tierra \xB7 canal 2</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra2Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra2Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra2Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra2Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra2Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra2Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra2Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra2BloomIntensity"><output></output></span></label>
${Gc(2)}
        </details>
        <details><summary>Tierra \xB7 canal 3</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra3Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra3Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra3Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra3Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra3Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra3Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra3Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra3BloomIntensity"><output></output></span></label>
${Gc(3)}
        </details>
        <details><summary>Tierra \xB7 canal 4</summary>
          <label class="is-color">Piso 3D color <input type="color" data-lighting="tierra4Ground"></label>
          <label class="is-color">Horizonte / bloom <input type="color" data-lighting="tierra4Horizon"></label>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra4Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra4Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra4Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra4Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra4Light2Intensity"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra4BloomIntensity"><output></output></span></label>
${Gc(4)}
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
          <label>Posici\xF3n X <span><input type="range" min="-30" max="30" step="0.05" data-lighting="groundX"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-40" max="5" step="0.05" data-lighting="groundY"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-30" max="20" step="0.05" data-lighting="groundZ"><output></output></span></label>
          <label>Ancho <span><input type="range" min="8" max="200" step="0.5" data-lighting="groundWidth"><output></output></span></label>
          <label>Estirar lados \xD7 <span><input type="range" min="0.5" max="8" step="0.05" data-lighting="groundStretchX"><output></output></span></label>
          <label>Profundidad <span><input type="range" min="6" max="80" step="0.5" data-lighting="groundDepth"><output></output></span></label>
          <label>Rotaci\xF3n X \xB0 <span><input type="range" min="-45" max="45" step="0.5" data-lighting="groundRotX"><output></output></span></label>
          <label>Rotaci\xF3n Y \xB0 <span><input type="range" min="-180" max="180" step="1" data-lighting="groundRotY"><output></output></span></label>
          <label>Rotaci\xF3n Z \xB0 <span><input type="range" min="-45" max="45" step="0.5" data-lighting="groundRotZ"><output></output></span></label>
          <label>Exposici\xF3n <span><input type="range" min="0.2" max="3" step="0.05" data-lighting="ground3dExposure"><output></output></span></label>
          <label class="is-color">Luz piso color <input type="color" data-lighting="groundLightColor"></label>
          <label>Luz piso intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="groundLightIntensity"><output></output></span></label>
          <label>Luz piso X <span><input type="range" min="-30" max="30" step="0.5" data-lighting="groundLightX"><output></output></span></label>
          <label>Luz piso Y <span><input type="range" min="0.5" max="40" step="0.5" data-lighting="groundLightY"><output></output></span></label>
          <label>Luz piso Z <span><input type="range" min="-30" max="30" step="0.5" data-lighting="groundLightZ"><output></output></span></label>
          <label>Luz apunta X <span><input type="range" min="-20" max="20" step="0.5" data-lighting="groundLightTargetX"><output></output></span></label>
          <label>Luz apunta Z <span><input type="range" min="-20" max="20" step="0.5" data-lighting="groundLightTargetZ"><output></output></span></label>
        </details>
        <details><summary>Piedras</summary>
          <label>Posici\xF3n X <span><input type="range" min="-30" max="30" step="0.05" data-lighting="stonesX"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-30" max="10" step="0.05" data-lighting="stonesY"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-40" max="20" step="0.05" data-lighting="stonesZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.1" max="5" step="0.05" data-lighting="stonesScale"><output></output></span></label>
          <label>Hundimiento <span><input type="range" min="-0.5" max="1.5" step="0.01" data-lighting="stonesEmbed"><output></output></span></label>
          <label>Rotaci\xF3n X \xB0 <span><input type="range" min="-180" max="180" step="1" data-lighting="stonesRotX"><output></output></span></label>
          <label>Rotaci\xF3n Y \xB0 <span><input type="range" min="-180" max="180" step="1" data-lighting="stonesRotY"><output></output></span></label>
          <label>Rotaci\xF3n Z \xB0 <span><input type="range" min="-180" max="180" step="1" data-lighting="stonesRotZ"><output></output></span></label>
        </details>
        <details><summary>Iluminaci\xF3n suelo</summary>
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
        <details><summary>Principal c\xE1lida</summary>
          <label class="is-color">Color <input type="color" data-lighting="keyColor"></label>
          <label>Intensidad <span><input type="range" min="0" max="12" step="0.1" data-lighting="keyIntensity"><output></output></span></label>
          <label>Posici\xF3n X <span><input type="range" min="-15" max="15" step="0.1" data-lighting="keyX"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-15" max="15" step="0.1" data-lighting="keyY"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-15" max="15" step="0.1" data-lighting="keyZ"><output></output></span></label>
        </details>
        <details><summary>Contraluz violeta</summary>
          <label class="is-color">Color <input type="color" data-lighting="rimColor"></label>
          <label>Intensidad <span><input type="range" min="0" max="12" step="0.1" data-lighting="rimIntensity"><output></output></span></label>
          <label>Posici\xF3n X <span><input type="range" min="-15" max="15" step="0.1" data-lighting="rimX"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-15" max="15" step="0.1" data-lighting="rimY"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-15" max="15" step="0.1" data-lighting="rimZ"><output></output></span></label>
        </details>
        <details><summary>Grainy blur</summary>
          <label>Desenfoque <span><input type="range" min="0" max="120" step="1" data-lighting="effectBlur"><output></output></span></label>
          <label>Intensidad grano <span><input type="range" min="0" max="0.25" step="0.01" data-lighting="grainOpacity"><output></output></span></label>
          <label>Detalle grano <span><input type="range" min="0.1" max="1.5" step="0.05" data-lighting="grainFrequency"><output></output></span></label>
          <label>Refresco FPS <span><input type="range" min="1" max="24" step="1" data-lighting="grainSpeed"><output></output></span></label>
          <label>Grano secc. 3\xB74 <span><input type="range" min="0" max="0.5" step="0.01" data-lighting="sectionGrainOpacity"><output></output></span></label>
        </details>
        <details><summary>\xD3rbitas</summary>
          <label>Velocidad <span><input type="range" min="0" max="5" step="0.05" data-lighting="orbitSpeed"><output></output></span></label>
          <label>Kepler <span><input type="range" min="0" max="2" step="0.05" data-lighting="orbitKepler"><output></output></span></label>
          <label>Inclinaci\xF3n <span><input type="range" min="0" max="85" step="1" data-lighting="orbitTilt"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.3" max="2" step="0.05" data-lighting="orbitScale"><output></output></span></label>
          <label class="is-select">Sentido <select data-lighting="orbitDirection"><option>Antihorario</option><option>Horario</option></select></label>
          <label>Velocidad luna <span><input type="range" min="0" max="5" step="0.05" data-lighting="moonSpeed"><output></output></span></label>
          <label>Rotaci\xF3n propia <span><input type="range" min="0" max="10" step="0.1" data-lighting="spinSpeed"><output></output></span></label>
          <label>L\xEDneas \xF3rbita <span><input type="range" min="0" max="1" step="0.05" data-lighting="orbitLineOpacity"><output></output></span></label>
          <label class="is-color">Color l\xEDneas <input type="color" data-lighting="orbitLineColor"></label>
        </details>
        <details><summary>Estrellas fugaces</summary>
          <label class="is-boolean">Activas <input type="checkbox" data-lighting="shootingEnabled"></label>
          <label>Pausa m\xEDn s <span><input type="range" min="0" max="30" step="0.5" data-lighting="shootingPauseMin"><output></output></span></label>
          <label>Pausa m\xE1x s <span><input type="range" min="0" max="60" step="0.5" data-lighting="shootingPauseMax"><output></output></span></label>
          <label>Velocidad <span><input type="range" min="5" max="100" step="1" data-lighting="shootingSpeed"><output></output></span></label>
          <label>Largo <span><input type="range" min="0.5" max="25" step="0.1" data-lighting="shootingLength"><output></output></span></label>
          <label>Grosor <span><input type="range" min="0.01" max="0.6" step="0.01" data-lighting="shootingWidth"><output></output></span></label>
          <label>Brillo <span><input type="range" min="0" max="4" step="0.05" data-lighting="shootingBrightness"><output></output></span></label>
          <label class="is-color">Color <input type="color" data-lighting="shootingColor"></label>
          <label>\xC1ngulo \xB0 <span><input type="range" min="-180" max="180" step="1" data-lighting="shootingAngle"><output></output></span></label>
          <label>Variaci\xF3n \xB0 <span><input type="range" min="0" max="90" step="1" data-lighting="shootingAngleVariation"><output></output></span></label>
          <button class="lighting-panel__action" type="button" data-shooting-trigger>Lanzar una ahora</button>
        </details>
        <details><summary>Sol</summary>
          <label>Tama\xF1o <span><input type="range" min="0.2" max="3" step="0.05" data-lighting="sunSize"><output></output></span></label>
          <label>Emisi\xF3n <span><input type="range" min="0" max="10" step="0.05" data-lighting="sunEmissive"><output></output></span></label>
          <label class="is-color">Color emisi\xF3n <input type="color" data-lighting="sunEmissiveColor"></label>
          <label>Rotaci\xF3n <span><input type="range" min="0" max="5" step="0.05" data-lighting="sunSpin"><output></output></span></label>
          <label>Halo tama\xF1o <span><input type="range" min="1" max="8" step="0.05" data-lighting="sunGlowSize"><output></output></span></label>
          <label>Halo intensidad <span><input type="range" min="0" max="3" step="0.05" data-lighting="sunGlowIntensity"><output></output></span></label>
          <label class="is-color">Color halo <input type="color" data-lighting="sunGlowColor"></label>
          <label>Luz a planetas <span><input type="range" min="0" max="30" step="0.1" data-lighting="sunLightIntensity"><output></output></span></label>
          <label class="is-color">Color luz <input type="color" data-lighting="sunLightColor"></label>
        </details>
        <details><summary>Sistema</summary>
          <label>Giro auto \xB0/s <span><input type="range" min="-30" max="30" step="0.5" data-lighting="systemSpin"><output></output></span></label>
          <label>Flotaci\xF3n <span><input type="range" min="0" max="2" step="0.05" data-lighting="systemFloat"><output></output></span></label>
          <label>Vel. flotaci\xF3n <span><input type="range" min="0" max="3" step="0.05" data-lighting="systemFloatSpeed"><output></output></span></label>
          <label>Parallax mouse \xB0 <span><input type="range" min="0" max="30" step="0.5" data-lighting="systemParallax"><output></output></span></label>
        </details>
        <details><summary>Sistema \xB7 canal 1</summary>
          <label>Posici\xF3n X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system1X"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system1Y"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system1Z"><output></output></span></label>
          <label>Rotaci\xF3n X <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotX"><output></output></span></label>
          <label>Rotaci\xF3n Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotY"><output></output></span></label>
          <label>Rotaci\xF3n Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system1Scale"><output></output></span></label>
        </details>
        <details><summary>Sistema \xB7 canal 2</summary>
          <label>Posici\xF3n X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system2X"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system2Y"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system2Z"><output></output></span></label>
          <label>Rotaci\xF3n X <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotX"><output></output></span></label>
          <label>Rotaci\xF3n Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotY"><output></output></span></label>
          <label>Rotaci\xF3n Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system2Scale"><output></output></span></label>
        </details>
        <details><summary>Sistema \xB7 canal 3</summary>
          <label>Posici\xF3n X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system3X"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system3Y"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system3Z"><output></output></span></label>
          <label>Rotaci\xF3n X <span><input type="range" min="-180" max="180" step="1" data-lighting="system3RotX"><output></output></span></label>
          <label>Rotaci\xF3n Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system3RotY"><output></output></span></label>
          <label>Rotaci\xF3n Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system3RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system3Scale"><output></output></span></label>
        </details>
        <details><summary>Sistema \xB7 canal 4</summary>
          <label>Posici\xF3n X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system4X"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system4Y"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system4Z"><output></output></span></label>
          <label>Rotaci\xF3n X <span><input type="range" min="-180" max="180" step="1" data-lighting="system4RotX"><output></output></span></label>
          <label>Rotaci\xF3n Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system4RotY"><output></output></span></label>
          <label>Rotaci\xF3n Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system4RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system4Scale"><output></output></span></label>
        </details>
        <details><summary>Estrellas</summary>
          <label>Cantidad <span><input type="range" min="0" max="5000" step="50" data-lighting="starCount"><output></output></span></label>
          <label>Tama\xF1o <span><input type="range" min="0.5" max="10" step="0.1" data-lighting="starSize"><output></output></span></label>
          <label>Brillo <span><input type="range" min="0" max="4" step="0.05" data-lighting="starBrightness"><output></output></span></label>
          <label class="is-color">Color <input type="color" data-lighting="starColor"></label>
          <label>Variaci\xF3n color <span><input type="range" min="0" max="1" step="0.05" data-lighting="starColorVariation"><output></output></span></label>
          <label>Vel. titileo <span><input type="range" min="0" max="8" step="0.05" data-lighting="twinkleSpeed"><output></output></span></label>
          <label>Titileo <span><input type="range" min="0" max="1" step="0.05" data-lighting="twinkleAmount"><output></output></span></label>
          <label>Bloom tama\xF1o <span><input type="range" min="0" max="8" step="0.1" data-lighting="bloomSize"><output></output></span></label>
          <label>Bloom intensidad <span><input type="range" min="0" max="3" step="0.05" data-lighting="bloomIntensity"><output></output></span></label>
          <label>Deriva <span><input type="range" min="0" max="3" step="0.05" data-lighting="starDrift"><output></output></span></label>
        </details>
        <details><summary>Render</summary>
          <label>Exposici\xF3n <span><input type="range" min="0.1" max="3" step="0.05" data-lighting="exposure"><output></output></span></label>
          <label class="is-select">Color mapping <select data-lighting="toneMapping">${Object.keys(Yd).map(h=>`<option>${h}</option>`).join("")}</select></label>
        </details>
        <button class="lighting-panel__reset" type="button" data-lighting-reset>Restablecer</button>
      </div>
      <button class="lighting-panel__toggle" type="button" aria-expanded="false">Open Controls</button>`;let n=[{label:"01 \xB7 Fondo",groups:["Fondo"]},{label:"02 \xB7 3D",groups:["Horizonte","Tierra \xB7 canal 1","Tierra \xB7 canal 2","Tierra \xB7 canal 3","Tierra \xB7 canal 4","Piso 3D","Piedras","Iluminaci\xF3n suelo","Ambiente","Principal c\xE1lida","Contraluz violeta","Estrellas","Estrellas fugaces","\xD3rbitas","Sol","Sistema","Sistema \xB7 canal 1","Sistema \xB7 canal 2","Sistema \xB7 canal 3","Sistema \xB7 canal 4","Render"]},{label:"03 \xB7 Grainy blur",groups:["Grainy blur"]},{label:"04 \xB7 UI",groups:["Layout","Manifiesto","Carta","Carta foil","Carta mapeo","Carta extras"]}],i=t.querySelector(".lighting-panel__body"),s=t.querySelector("[data-lighting-reset]"),a=new Map(Array.from(i.querySelectorAll(":scope > details")).map(h=>[h.querySelector("summary").textContent.trim(),h])),o=document.createDocumentFragment();n.forEach(({label:h,groups:d})=>{let f=document.createElement("p");f.className="lighting-panel__layer",f.textContent=h,o.appendChild(f),d.forEach(g=>{let _=a.get(g);_&&o.appendChild(_)})}),i.insertBefore(o,s);let l=(h,d)=>{h.type==="checkbox"?h.checked=!!d:h.value=d};t.querySelectorAll('input[type="range"]').forEach(h=>{let d=h.parentElement.querySelector("output");if(!d)return;let f=document.createElement("input");f.type="text",f.inputMode="decimal",f.className="lighting-panel__number",f.setAttribute("aria-label",`${h.closest("label")?.firstChild?.textContent?.trim()||"Valor"} (n\xFAmero)`),d.replaceWith(f);let g=()=>{let _=Number(String(f.value).replace(",","."));if(!Number.isFinite(_)){c();return}_<Number(h.min)&&(h.min=String(_)),_>Number(h.max)&&(h.max=String(_)),h.value=String(_),h.dispatchEvent(new Event("input"))};f.addEventListener("change",g),f.addEventListener("keydown",_=>{_.key==="Enter"&&f.blur(),_.key==="Escape"&&(c(),f.blur())})});let c=()=>{t.querySelectorAll('input[type="range"]').forEach(h=>{let d=h.parentElement.querySelector(".lighting-panel__number");if(!d||document.activeElement===d)return;let f=Math.max(1,(h.step.split(".")[1]||"").length);d.value=Number(h.value).toFixed(f)})};t.querySelectorAll("[data-lighting]").forEach(h=>{l(h,e[h.dataset.lighting]),h.addEventListener("input",()=>{let d=h.dataset.lighting;e[d]=h.type==="checkbox"?h.checked:h.type==="range"?Number(h.value):h.value;let f=d.match(/^system([1-4])(X|Y|Z|RotX|RotY|RotZ|Scale)$/);f&&this.showChannel?.(Number(f[1])-1);let g=d.match(/^tierra([1-4])/);g&&this.showChannel?.(Number(g[1])-1),c(),this.applyLightingSettings(e),this.saveLightingSettings(e)})});let u=t.querySelector("[data-lighting-persist]");u.checked=this.persistLighting,u.addEventListener("change",()=>{this.persistLighting=u.checked,Vc(Rg,this.persistLighting?"1":null),Vc(Hc,this.persistLighting?JSON.stringify(e):null)}),t.querySelector(".lighting-panel__toggle").addEventListener("click",h=>{let d=t.classList.toggle("is-collapsed");h.currentTarget.setAttribute("aria-expanded",String(!d)),h.currentTarget.textContent=d?"Open Controls":"Close Controls"}),t.querySelector("[data-shooting-trigger]").addEventListener("click",()=>{this.shootingStars.length||this.spawnShootingStar(e)}),t.querySelector("[data-lighting-reset]").addEventListener("click",()=>{Object.assign(e,ie),this.saveLightingSettings(e),t.querySelectorAll("[data-lighting]").forEach(h=>{l(h,e[h.dataset.lighting])}),c(),this.applyLightingSettings(e)}),this.setupSectionGuide(),c(),this.applyLightingSettings(e),document.body.appendChild(t)}loadModel(){new eo().load(this.modelUrl,({scene:t})=>{this.model=t,this.system=new mn,this.system.add(this.model),this.scene.add(this.system);let n=null,i=[],s={};t.traverse(a=>{if(!a.isMesh)return;let o=_1(a);if(a.castShadow=!1,a.receiveShadow=!1,(Array.isArray(a.material)?a.material:[a.material]).forEach(u=>{u&&(u.roughness=Math.max(u.roughness??.5,.48),u.needsUpdate=!0)}),o==="saturn-ring"){i.push(a);return}let c=o?yo[o]:null;if(!c){a.visible=!1;return}a.position.set(...c.position),a.rotation.set(.08,Math.random()*Math.PI,o==="saturn"?-.28:0),Bg(a,c.radius),a.userData.basePosition=a.position.clone(),a.userData.spinSpeed=.035+Math.random()*.07,this.spinners.push(a),s[o]=a,o==="saturn"&&(n=a.position.clone())}),i.forEach(a=>{a.position.copy(n||new N(...yo.saturn.position)),a.rotation.set(.08,0,-.28),Bg(a,1.02),a.userData.basePosition=a.position.clone(),this.spinners.push(a)}),this.setupOrbits(s,i),this.root.classList.add("is-ready"),this.createIdleAnimation()},void 0,()=>this.root.classList.add("is-fallback"))}setupOrbits(e,t){if(this.sun=e.sun,!this.sun)return;let n=this.sun.position;this.model.position.copy(n).negate(),this.setupSun();let i=new Ut().setFromPoints(Array.from({length:Ig},(s,a)=>{let o=a/Ig*Math.PI*2;return new N(Math.cos(o),Math.sin(o),0)}));if(Object.entries(e).forEach(([s,a])=>{if(s==="sun"||s==="moon")return;let o=a.position.clone().sub(n),l=new Ir(i,new nr({transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,this.sun.parent.add(l),this.orbiters.push({mesh:a,distance:yo[s].orbit??o.length(),angle:Math.atan2(o.y,o.x),line:l,rings:s==="saturn"?t:[]})}),e.moon&&e.earth){let s=e.moon.position.clone().sub(e.earth.position);this.moon={mesh:e.moon,distance:s.length(),earth:e.earth,angle:Math.atan2(s.y,s.x)}}}setupSun(){let e=Array.isArray(this.sun.material)?this.sun.material:[this.sun.material];this.sunMaterials=e.filter(t=>t&&"emissiveIntensity"in t),this.sunBaseScale=this.sun.scale.x,this.sunRadius=yo.sun.radius,this.sunGlow=new Ea(new Ps({map:p1(),transparent:!0,depthWrite:!1,blending:Br,toneMapped:!1})),this.sunGlow.renderOrder=1,this.sunLight=new Fr(16777215,0,0,0),this.sunGlow.position.copy(this.sun.position),this.sunLight.position.copy(this.sun.position),this.sun.parent.add(this.sunGlow,this.sunLight)}updateSun(e){if(!this.sun||!this.sunGlow)return;let t=Number(e.sunSize);this.sun.scale.setScalar(this.sunBaseScale*t),this.sunMaterials.forEach(i=>{i.emissive.set(e.sunEmissiveColor),i.emissiveIntensity=Number(e.sunEmissive)});let n=Number(e.sunGlowIntensity);this.sunGlow.visible=n>0,this.sunGlow.material.opacity=n,this.sunGlow.material.color.set(e.sunGlowColor),this.sunGlow.scale.setScalar(this.sunRadius*t*Number(e.sunGlowSize)*2),this.sunLight.intensity=Number(e.sunLightIntensity),this.sunLight.color.set(e.sunLightColor)}spawnShootingStar(e){this.shootingGeometry||(this.shootingGeometry=new zn(1,1).translate(-.5,0,0));let t=lt.lerp(Wc.left,Wc.right,Math.random()),n=lt.lerp(Wc.bottom,Wc.top,Math.random()),i=new N(t,n,.5).unproject(this.camera).sub(this.camera.position).normalize(),s=(o1-this.camera.position.z)/i.z,a=this.camera.position.clone().addScaledVector(i,s),o=lt.degToRad(Number(e.shootingAngle)+(Math.random()*2-1)*Number(e.shootingAngleVariation)),l=new xt(this.shootingGeometry,new Bt({uniforms:{uColor:{value:new Me(e.shootingColor)},uOpacity:{value:0}},vertexShader:l1,fragmentShader:c1,transparent:!0,depthWrite:!1,blending:Br}));l.position.copy(a),l.rotation.z=o,l.renderOrder=2,this.scene.add(l),this.shootingStars.push({mesh:l,velocity:new N(Math.cos(o),Math.sin(o),0),age:0,life:.6+Math.random()*.7})}updateShootingStars(e,t){let n=this.effectSettings??ie,i=()=>{let s=Number(n.shootingPauseMin),a=Math.max(s,Number(n.shootingPauseMax));this.nextShootingStar=e+lt.lerp(s,a,Math.random())};n.shootingEnabled?!this.shootingStars.length&&e>=this.nextShootingStar&&this.spawnShootingStar(n):i(),this.shootingStars=this.shootingStars.filter(s=>{s.age+=t;let a=s.age/s.life;return a>=1?(this.scene.remove(s.mesh),s.mesh.material.dispose(),i(),!1):(s.mesh.position.addScaledVector(s.velocity,Number(n.shootingSpeed)*t),s.mesh.scale.set(Number(n.shootingLength)*Math.min(a*3,1),Number(n.shootingWidth),1),s.mesh.material.uniforms.uOpacity.value=Math.sin(a*Math.PI)*Number(n.shootingBrightness),s.mesh.material.uniforms.uColor.value.set(n.shootingColor),!0)})}systemPoseFor(e,t){let n=`system${e+1}`;return Object.fromEntries(Hg.map(i=>[i,Number(t[`${n}${i}`])]))}currentSystemPose(e){let t=this.systemPoseFor(this.channelIndex??0,e),n=this.systemMove;if(!n)return t;let i=Math.min((performance.now()-n.start)/Jd,1);if(i>=1)return this.systemMove=null,t;let s=Zc(i);return Object.fromEntries(Hg.map(a=>[a,n.from[a]+(t[a]-n.from[a])*s]))}moveSystemToChannel(e,t){let n=this.effectSettings??ie,i=this.system?this.currentSystemPose(n):null;this.channelIndex=e,this.systemMove=t&&i?{from:i,start:performance.now()}:null}updateSystem(e,t){if(!this.system)return;let n=this.effectSettings??ie,i=!An.matches,s=lt.degToRad;this.systemSpinAngle=(this.systemSpinAngle||0)+(i?t*s(Number(n.systemSpin)):0);let a=i?Math.sin(e*Number(n.systemFloatSpeed)*Math.PI*2)*Number(n.systemFloat):0;this.smoothPointer.lerp(this.pointer,Math.min(t*4,1));let o=i?s(Number(n.systemParallax)):0,l=this.currentSystemPose(n);this.system.position.set(l.X,l.Y+a,l.Z),this.system.rotation.set(s(l.RotX)-this.smoothPointer.y*o,s(l.RotY)+this.systemSpinAngle+this.smoothPointer.x*o,s(l.RotZ)),this.system.scale.setScalar(l.Scale),this.updateSun(n)}updateOrbits(e){if(!this.sun)return;let t=this.effectSettings??ie,n=Number(t.orbitSpeed),i=Number(t.orbitKepler),s=Number(t.orbitScale),a=t.orbitDirection==="Horario"?-1:1,o=lt.degToRad(Number(t.orbitTilt)),l=Number(t.orbitLineOpacity);this.orbitAxis.set(0,Math.sin(o),Math.cos(o)),this.orbitQuaternion.setFromUnitVectors(n1,this.orbitAxis),this.orbitBinormal.crossVectors(this.orbitAxis,Lg),this.orbiters.forEach(h=>{let d=QM*n*(e1/h.distance)**i;h.angle+=e*d*a;let f=h.distance*s;this.placeOnOrbit(h.mesh.position,this.sun.position,f,h.angle),h.rings.forEach(g=>g.position.copy(h.mesh.position)),h.line.visible=l>0,h.line.material.opacity=l,h.line.material.color.set(t.orbitLineColor),h.line.quaternion.copy(this.orbitQuaternion),h.line.scale.setScalar(f),h.line.position.copy(this.sun.position)}),this.moon&&(this.moon.angle+=e*t1*Number(t.moonSpeed)*n*a,this.placeOnOrbit(this.moon.mesh.position,this.moon.earth.position,this.moon.distance,this.moon.angle));let c=Number(t.spinSpeed),u=Number(t.sunSpin);(c!==this.appliedSpinSpeed||u!==this.appliedSunSpin)&&(this.spinTweens.forEach(h=>{h.timeScale(h.targets()[0]===this.sun?.rotation?c*u:c)}),this.appliedSpinSpeed=c,this.appliedSunSpin=u)}placeOnOrbit(e,t,n,i){return e.copy(Lg).multiplyScalar(Math.cos(i)*n).addScaledVector(this.orbitBinormal,Math.sin(i)*n).add(t)}createIdleAnimation(){An.matches||!this.model||this.spinners.forEach(e=>{this.spinTweens.push(Xd.to(e.rotation,{y:e.rotation.y+Math.PI*2,duration:Math.PI*2/e.userData.spinSpeed,repeat:-1,ease:"none"}))})}setupFoilCards(){this.foilCards=[],window.WebGLRenderingContext&&this.root.querySelectorAll("[data-foil-card]").forEach(e=>{let t=e.querySelector(".altar-solar__foil-canvas"),n=e.dataset.foilBase,i=e.dataset.foilMap;!t||!n||!(i||e.dataset.foilFrame)||Promise.all([this.loadFoilTexture(n),this.loadCardMap(e,0,i)]).then(([s,a])=>{let o=new qs({canvas:t,alpha:!0,antialias:!0,powerPreference:"low-power"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),o.setSize(236,358,!1),o.setClearColor(0,0);let l=new er,c=new kn(-1,1,1,-1,-1,1),u=new Bt({vertexShader:d1,fragmentShader:f1,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uBaseMap:{value:s},uFoilMap:{value:a},uAspect:{value:236/358},uArtMode:{value:"foilArt"in e.dataset?1:0},uZoneCenter:{value:new Ae},uZoneScale:{value:1},uCameraPosition:{value:new N(0,0,u1)},uLight1Position:{value:new N},uLight2Position:{value:new N},uBevelSize:{value:new Ae},...Object.fromEntries(Object.values(Dg).map(f=>[f,{value:0}])),...Object.fromEntries(Object.values(Ug).map(f=>[f,{value:new N}])),uMouse:{value:new Ae},uTime:{value:0},uScrollOffset:{value:0}}}),h=new xt(new zn(2,2),u);l.add(h);let d={card:e,renderer:o,scene:l,camera:c,material:u,baseUrl:n,foilUrl:xo(e,0)||i,maskSize:new Ae(a.image.width,a.image.height)};this.foilCards.push(d),o.render(l,c),e.classList.add("is-foil-rendered")}).catch(()=>{e.classList.remove("is-foil-rendered")})})}setupChannels(){let e=this.root.querySelector(".altar-solar__channel-label"),t=Array.from(this.root.querySelectorAll(".altar-solar__pagination span")),n=this.root.querySelector(".altar-solar__pagination"),i=this.root.querySelector(".altar-solar__campaign-crop img"),s=this.root.querySelector(".altar-solar__campaign"),[a,o]=this.root.querySelectorAll(".altar-solar__channel-arrow");if(!e||!a||!o)return;let l=i?.getAttribute("src"),c=0,u=b=>{let C=this.effectSettings??ie;return _o[b].background??{space:C.spaceColor,glows:{rose:[C.glowRoseColor,C.glowRoseIntensity],cyan:[C.glowCyanColor,C.glowCyanIntensity],teal:[C.glowTealColor,C.glowTealIntensity]}}},h=b=>{this.root.style.setProperty("--space-color",b.space),Object.entries(b.glows).forEach(([C,[P,F]])=>{this.root.querySelectorAll(`.altar-solar__glow--${C}`).forEach(O=>{O.style.setProperty("--c",P),O.style.setProperty("--glow-intensity",Number(F))})})},d=this.root.querySelector(".altar-solar__ground-campaign-media img"),f=d?.getAttribute("src"),g=b=>[b===0?l:i?.getAttribute(`data-channel-image-${b+1}`),b>0&&d?.getAttribute(`data-channel-image-${b+1}`)||f].filter(Boolean),_=new Map,p=b=>{if(!_.has(b)){let C=new Image;C.src=b,_.set(b,C.decode().catch(()=>{}).then(()=>C))}return _.get(b)},m=b=>Promise.race([Promise.all(g(b).map(p)),new Promise(C=>setTimeout(C,1200))]);jg(()=>{_o.forEach((b,C)=>{g(C).forEach(p),this.preloadCardChannel(C)})});let M=b=>{if(d){let P=b>0&&d.getAttribute(`data-channel-image-${b+1}`);d.src=P||f,d.classList.toggle("is-channel-cover",!!P)}if(!i)return;let C=b===0?l:i.getAttribute(`data-channel-image-${b+1}`);C&&(i.src=C),i.classList.toggle("is-channel-cover",b!==0)},A=(b=i)=>{if(!b)return;cancelAnimationFrame(this.photoZoomFrame);let C=performance.now(),P=F=>{let O=Math.min((F-C)/y1,1),I=1-Math.pow(1-Zc(O),3);b.style.scale=String(3+-2*I),O<1?this.photoZoomFrame=requestAnimationFrame(P):b.style.removeProperty("scale")};this.photoZoomFrame=requestAnimationFrame(P)},v=this.root.querySelector("[data-ground-campaign]"),S=()=>{if(!v)return s;let b=v.getBoundingClientRect(),C=b.top+b.height/2;return C>0&&C<window.innerHeight?v:s},E=b=>{e.textContent=`CHANNEL ${String(b+1).padStart(2,"0")}`,t.forEach((C,P)=>C.classList.toggle("is-active",P===b)),n?.setAttribute("aria-label",`Canal ${b+1} de ${t.length||_o.length}`)},w=!1,x=(b,C)=>{if(w)return;w=!0,c=(c+b+_o.length)%_o.length;let P=c,F=u(P);E(P),this.closeFortuneCard?.(),this.setCardChannel(P),m(P).then(()=>{if(this.moveSystemToChannel(P,!An.matches),this.moveGroundToChannel(P,!An.matches),M(P),An.matches||!this.channelReveal){h(F),w=!1;return}let O=S()??C;A(O===v?d:i),O===v&&this.channelRings?.play(F,O,()=>{}),this.channelReveal.play(F,O,()=>{h(F),w=!1})})};this.showChannel=b=>{w||b===c||(c=b,E(c),M(c),h(u(c)),this.setCardChannel(c),this.moveSystemToChannel(c,!1),this.moveGroundToChannel(c,!1))},this.playCardWave=b=>{An.matches||w||this.channelRings?.play(u(c),b,()=>{},{bandColor:v1})},a.addEventListener("click",()=>x(-1,a)),o.addEventListener("click",()=>x(1,o)),this.channelReveal=Vg(this.stage),this.channelRings=Vg(this.stage,{ringsOnly:!0})}updateStones(e){if(!this.stonesGroup)return;let t=lt.degToRad;this.stonesGroup.position.set(Number(e.stonesX),Number(e.stonesY),Number(e.stonesZ)),this.stonesGroup.rotation.set(t(Number(e.stonesRotX)),t(Number(e.stonesRotY)),t(Number(e.stonesRotZ))),this.stonesGroup.scale.setScalar(Number(e.stonesScale)),this.stonesGroup.traverse(n=>{if(!n.isMesh||!Number.isFinite(n.userData.groundY))return;let i=n.userData.planet,s=u=>Number(e[Pg(i,u)]),a=s("Scale"),o=s("X"),l=s("Z");n.scale.setScalar(n.userData.baseScale*a),n.position.set(o,(n.userData.halfHeight-n.userData.slotEmbed)*a-Number(e.stonesEmbed)+s("Y"),l),n.rotation.set(t(s("RotX")),t(s("RotY")),t(s("RotZ")));let c=n.userData.contact;c&&(c.position.set(o,-.004,l),c.rotation.z=t(s("RotY")),c.scale.set(n.userData.slotRadius*2.6*a,n.userData.slotRadius*2.1*a,1),c.visible=s("Y")<.6,c.material.opacity=Number(e.ground3dContactShadows)*lt.clamp(1-s("Y")/.6,0,1))})}groundPaletteFor(e,t=this.lightingBase??ie){let n=i=>t[`tierra${e+1}${i}`];return{ground3dColor:n("Ground"),floorColor:n("Horizon"),horizonGlowColor:n("Horizon"),stoneAmbientIntensity:Number(n("Ambient")),stoneLight1Color:n("Light1Color"),stoneLight1Intensity:Number(n("Light1Intensity")),stoneLight2Color:n("Light2Color"),stoneLight2Intensity:Number(n("Light2Intensity")),horizonBloomIntensity:Number(n("BloomIntensity")),...Object.fromEntries(Yg.flatMap(({planet:i})=>jM.map(s=>[Pg(i,s),Number(n(`Stone${i[0].toUpperCase()}${i.slice(1)}${s}`))])))}}setGroundPalette(e){this.groundMaterial?.color.set(e.ground3dColor);let t=this.horizonMesh?.material?.uniforms;t?.uFloorColor.value.set(e.floorColor),t?.uGlowColor.value.set(e.horizonGlowColor),this.stoneAmbient&&(this.stoneAmbient.intensity=e.stoneAmbientIntensity),this.stoneLight1&&(this.stoneLight1.color.set(e.stoneLight1Color),this.stoneLight1.intensity=e.stoneLight1Intensity),this.stoneLight2&&(this.stoneLight2.color.set(e.stoneLight2Color),this.stoneLight2.intensity=e.stoneLight2Intensity),t&&(t.uBloomIntensity.value=e.horizonBloomIntensity),this.root.style.setProperty("--bloom-intensity",e.horizonBloomIntensity),this.updateStones({...this.lightingBase??ie,...e})}moveGroundToChannel(e,t){let n=this.groundPaletteFor(e);cancelAnimationFrame(this.groundPaletteFrame),this.groundPaletteFrame=0;let i=this.currentGroundPalette??n;if(this.currentGroundPalette=n,!t){this.setGroundPalette(n);return}let s=performance.now(),a=o=>{let l=Zc(Math.min((o-s)/Jd,1)),c=Object.fromEntries(Object.keys(n).map(u=>[u,typeof n[u]=="number"?i[u]+(n[u]-i[u])*l:new Me(i[u]).lerp(new Me(n[u]),l)]));this.currentGroundPalette=l<1?c:n,this.setGroundPalette(c),this.groundPaletteFrame=l<1?requestAnimationFrame(a):0};this.groundPaletteFrame=requestAnimationFrame(a)}setupCursorBadge(){let e=this.root.querySelectorAll("[data-cursor-label]");if(this.root.querySelectorAll("[data-scroll-to]").forEach(p=>{p.addEventListener("click",()=>{document.querySelector(p.dataset.scrollTo)?.scrollIntoView({behavior:An.matches?"auto":"smooth",block:"start"})})}),!e.length)return;let t=document.createElement("div");t.className="altar-cursor-badge",t.setAttribute("aria-hidden","true"),t.innerHTML='<span class="altar-cursor-badge__label"></span><span class="altar-cursor-badge__arrow"><svg class="altar-cursor-badge__go" viewBox="0 0 11 11" fill="currentColor"><path d="M1 5h7L5 2l1-1 4.5 4.5L6 10l-1-1 3-3H1z"/></svg><svg class="altar-cursor-badge__move" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 1v9M1 5.5h9M4 2.5 5.5 1 7 2.5M4 8.5 5.5 10 7 8.5M2.5 4 1 5.5 2.5 7M8.5 4 10 5.5 8.5 7"/></svg></span>',document.body.append(t);let n=t.querySelector(".altar-cursor-badge__label"),i=window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)"),s={x:null,y:null},a=20,o=null,l=0,c=!1,u=p=>p.getAttribute("aria-pressed")==="true"&&!!p.dataset.cursorLabelPressed,h=p=>u(p)?p.dataset.cursorLabelPressed:p.dataset.cursorLabel,d=()=>{o=null,t.classList.remove("is-active")},f=()=>{if(l=0,c||!i.matches||s.x===null)return d();let p=document.elementFromPoint(s.x,s.y)?.closest("[data-cursor-label]");if(!p||!this.root.contains(p)||p.closest(".is-dragging"))return d();let m=h(p);n.textContent!==m&&(n.textContent=m),t.classList.toggle("is-back",u(p)),t.classList.toggle("is-move",p.dataset.cursorIcon==="move"),p!==o&&(o=p,t.classList.add("is-active"));let M=t.offsetWidth,A=t.offsetHeight,v=Math.min(s.x+a,window.innerWidth-M-4),S=lt.clamp(s.y-A/2,4,window.innerHeight-A-4);t.style.transform=`translate(${v}px, ${S}px)`},g=()=>{l||(l=requestAnimationFrame(f))},_=()=>{t.classList.toggle("is-enabled",i.matches),i.matches||d()};document.addEventListener("pointermove",p=>{p.pointerType&&p.pointerType!=="mouse"||(c=!1,s.x=p.clientX,s.y=p.clientY,g())},{passive:!0,capture:!0}),window.addEventListener("scroll",g,{passive:!0}),document.addEventListener("pointerleave",d),document.addEventListener("click",()=>{c=!0,d()},!0),i.addEventListener?.("change",_),_()}setupDraggables(){Yc(this.root.querySelector(".altar-solar__campaign")),Yc(this.root.querySelector("[data-ground-campaign]")),Yc(this.root.querySelector(".altar-solar__fortune-cards"),{allowTouch:!1});let e=this.root.querySelector(".altar-solar__player");Yc(e,{handle:e?.querySelector("[data-drag-handle]")})}setupSpotifyPlayer(){let e=this.root.querySelector(".altar-solar__open-player"),t=this.root.querySelector(".altar-solar__player"),n=e?.querySelector(".altar-solar__player-label");if(!e||!t)return;let i=null,s=()=>I1(i?.url||e.dataset.spotifyUrl),a=()=>{let l=new Date,c=P1(l.getHours());if(n){let u=l.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}).toUpperCase();n.textContent=`[  ${c.name} ]  ${u}`}if(c!==i){i=c;let u=t.querySelector("iframe");u&&s()&&(u.src=s())}clearTimeout(this.playerClockTimer),this.playerClockTimer=setTimeout(a,6e4-(l.getSeconds()*1e3+l.getMilliseconds())+50)};a();let o=l=>{if(l&&!t.querySelector("iframe")&&s()){let c=document.createElement("iframe");c.src=s(),c.title="Reproductor de Spotify",c.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",c.loading="lazy",t.appendChild(c)}t.classList.toggle("is-open",l),t.setAttribute("aria-hidden",String(!l)),e.setAttribute("aria-expanded",String(l)),e.setAttribute("aria-label",l?"Cerrar reproductor":"Abrir reproductor")};e.addEventListener("click",()=>o(!t.classList.contains("is-open"))),document.addEventListener("keydown",l=>{l.key==="Escape"&&t.classList.contains("is-open")&&o(!1)})}setupFortuneFlip(){let e=this.root.querySelector("[data-fortune-flip]");if(!e)return;let t=e.querySelector(".altar-solar__fortune-face--front"),n=e.querySelector(".altar-solar__fortune-face--back"),i=e.closest(".altar-solar__fortune-cards"),s=h=>{if(!i||h===i.classList.contains("is-focused"))return;if(clearTimeout(this.fortuneFocusTimer),i.classList.add("is-animating-focus"),this.fortuneFocusTimer=setTimeout(()=>i.classList.remove("is-animating-focus"),1e3),this.root.querySelectorAll(".altar-solar__campaign, [data-ground-campaign]").forEach(zg),!h){zg(i),i.classList.remove("is-focused"),this.root.classList.remove("is-card-open"),["--focus-x","--focus-y","--card-scale"].forEach(v=>i.style.removeProperty(v)),this.fortuneFocusScale=0;return}let f=this.effectSettings??ie;e.style.setProperty("--tilt-x","0deg"),e.style.setProperty("--tilt-y","0deg");let g=e.getBoundingClientRect(),p=g.width/236/Number(f.cardScale),m=Math.min(Number(f.cardFocusScale),(window.innerHeight-160)/358,(window.innerWidth-24)/236),M=236*m,A=358*m;i.style.setProperty("--focus-x",`${window.innerWidth/2-M/2-g.left}px`),i.style.setProperty("--focus-y",`${window.innerHeight/2+A/2-g.bottom}px`),i.style.setProperty("--card-scale",m/p),i.classList.add("is-focused"),this.root.classList.add("is-card-open"),this.fortuneFocusScale=m},a=h=>{if(clearTimeout(this.fortuneReturnTimer),!h&&e.classList.contains("is-flipped")){let g=parseFloat(getComputedStyle(e).getPropertyValue("--card-flip-duration"))||1150;this.prepareNextFortunePhrase(g+100)}if(s(h),e.classList.toggle("is-flipped",h),e.setAttribute("aria-pressed",String(h)),t?.setAttribute("aria-hidden",String(h)),n?.setAttribute("aria-hidden",String(!h)),!h)return;let d=this.effectSettings??ie,f=Number(d.cardReturnSeconds);f>0&&(this.fortuneReturnTimer=setTimeout(()=>a(!1),f*1e3))};this.closeFortuneCard=()=>{e.classList.contains("is-flipped")&&a(!1)};let o=()=>{e.closest(".altar-solar__fortune-cards")?.classList.add("is-touched");let h=!e.classList.contains("is-flipped");h&&(this.revealFortunePhrase(),this.playCardWave?.(e)),a(h)};e.addEventListener("pointermove",h=>{if(An.matches)return;let d=e.getBoundingClientRect(),f=(h.clientX-d.left)/d.width-.5,g=(h.clientY-d.top)/d.height-.5,_=Number((this.effectSettings??ie).foilTilt);e.style.setProperty("--tilt-x",`${(-g*2*_).toFixed(2)}deg`),e.style.setProperty("--tilt-y",`${(f*2*_).toFixed(2)}deg`)},{passive:!0}),e.addEventListener("pointerleave",()=>{e.style.setProperty("--tilt-x","0deg"),e.style.setProperty("--tilt-y","0deg")},{passive:!0}),e.addEventListener("click",o),e.addEventListener("keydown",h=>{h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),o())});let l=this.root.querySelector(".altar-solar__fortune-cards"),c=this.root.querySelector(".altar-solar__reveal-card"),u=h=>{this.fortuneOpen=h,l?.classList.toggle("is-open",h),l?.setAttribute("aria-hidden",String(!h)),e.tabIndex=h?0:-1,c?.setAttribute("aria-expanded",String(h)),c?.setAttribute("aria-label",h?"Ocultar carta":"Revelar carta"),h||a(!1)};c?.addEventListener("click",()=>u(!this.fortuneOpen)),u(!!l?.classList.contains("is-open")),document.addEventListener("keydown",h=>{h.key==="Escape"&&this.fortuneOpen&&u(!1)})}setCardChannel(e){let t=e+1;this.cardChannelIndex=e,this.root.querySelectorAll("[data-foil-card]").forEach(n=>{var h;let i=n.getAttribute(`data-channel-base-${t}`)||n.dataset.foilBase,s=n.getAttribute(`data-channel-map-${t}`)||n.dataset.foilMap,a=n.querySelector(":scope > img");a&&i&&(a.src=i);let o=xo(n,e),l=n.querySelector(".altar-solar__fortune-copy p");l&&((h=l.dataset).defaultMessage??(h.defaultMessage=l.textContent),l.textContent=o&&this.messageMap?this.messageMap.phrase:n.getAttribute(`data-channel-message-${t}`)||l.dataset.defaultMessage);let c=this.foilCards?.find(d=>d.card===n),u=o||s;!c||c.baseUrl===i&&c.foilUrl===u||(c.baseUrl=i,c.foilUrl=u,Promise.all([this.loadFoilTexture(i),this.loadCardMap(n,e,s)]).then(([d,f])=>{c.baseUrl!==i||c.foilUrl!==u||(c.material.uniforms.uBaseMap.value=d,c.material.uniforms.uFoilMap.value=f,c.maskSize.set(f.image.width,f.image.height))}))})}loadCardMap(e,t,n){let i=xo(e,t);if(!i)return this.loadFoilTexture(n);let s=this.messageMap??(this.messageMap=this.createMessageMap(e));return s.requested=i,Promise.all([s.fontReady,kg(i)]).then(([,a])=>(s.requested!==i||(s.frame=a,s.top=Qd[t]??Qd[0],this.drawMessageMap()),s.texture))}createMessageMap(e){let t=document.createElement("canvas");t.width=S1,t.height=b1;let n=new Nr(t);n.colorSpace=Sn,n.minFilter=hn,n.magFilter=ot,n.generateMipmaps=!0;let i=e.dataset.fortuneFont,s=i&&window.FontFace?new FontFace(Zg,`url("${i}")`).load().then(l=>document.fonts.add(l)).catch(()=>{}):Promise.resolve(),a=e.querySelector(".altar-solar__fortune-copy p"),o={canvas:t,texture:n,fontReady:s,frame:null,message:a,phrase:qd()};return a&&(a.textContent=o.phrase),o}drawMessageMap(){let e=this.messageMap;e?.frame&&(w1(e.canvas,e.frame,e.phrase,e.top),e.texture.needsUpdate=!0)}revealFortunePhrase(){let e=this.messageMap;e&&(clearTimeout(this.fortunePhraseTimer),e.revealed&&!e.prepared&&this.setFortunePhrase(qd(e.phrase)),e.revealed=!0,e.prepared=!1,T1(e.phrase))}prepareNextFortunePhrase(e){let t=this.messageMap;clearTimeout(this.fortunePhraseTimer),t?.revealed&&(this.fortunePhraseTimer=setTimeout(()=>{this.setFortunePhrase(qd(t.phrase)),t.prepared=!0},e))}setFortunePhrase(e){let t=this.messageMap;t.phrase=e,t.message&&xo(t.message.closest("[data-foil-card]"),this.cardChannelIndex??0)&&(t.message.textContent=e),this.drawMessageMap()}preloadCardChannel(e){let t=e+1;this.root.querySelectorAll("[data-foil-card]").forEach(n=>{[n.getAttribute(`data-channel-base-${t}`),n.getAttribute(`data-channel-map-${t}`)].filter(Boolean).forEach(s=>this.loadFoilTexture(s).catch(()=>{}));let i=xo(n,e);i&&kg(i).catch(()=>{})})}loadFoilTexture(e){return this.foilTextureCache??(this.foilTextureCache=new Map),this.foilTextureCache.has(e)||this.foilTextureCache.set(e,this.fetchFoilTexture(e)),this.foilTextureCache.get(e)}fetchFoilTexture(e){return new Promise((t,n)=>{new Dr().load(e,i=>{i.colorSpace=Sn,i.wrapS=sn,i.wrapT=sn,i.minFilter=hn,i.magFilter=ot,i.generateMipmaps=!0,t(i)},void 0,n)})}renderFoilCards(e){if(!this.foilCards?.length||!this.fortuneOpen)return;let t=this.effectSettings??ie,n=!An.matches,i=n?e*.001:0,s=Math.max(document.body.scrollHeight-window.innerHeight,1),a=window.scrollY/s*4*Number(t.foilScrollHue);this.foilMouse??(this.foilMouse=new Ae);let o=n?Number(t.foilMouseEase):1;this.foilMouse.x+=(this.pointer.x-this.foilMouse.x)*o,this.foilMouse.y+=(-this.pointer.y-this.foilMouse.y)*o;let l=Math.max(Number(t.cardScale),this.fortuneFocusScale||0,1),c=Math.min((window.devicePixelRatio||1)*l,4);this.foilCards.forEach(u=>{u.renderer.getPixelRatio()!==c&&(u.renderer.setPixelRatio(c),u.renderer.setSize(236,358,!1));let h=u.material.uniforms;Object.entries(Dg).forEach(([d,f])=>{h[f].value=Number(t[d])}),Object.entries(Ug).forEach(([d,f])=>{h1(t[d],h[f].value)}),h.uLight1Position.value.set(Number(t.foilLight1X),Number(t.foilLight1Y),Number(t.foilLight1Z)),h.uLight2Position.value.set(Number(t.foilLight2X),Number(t.foilLight2Y),Number(t.foilLight2Z)),h.uBevelSize.value.set(1,1).multiplyScalar(Number(t.foilBevelSize)).divide(u.maskSize),h.uZoneCenter.value.set(Number(t.foilZoneX),Number(t.foilZoneY)),h.uZoneScale.value=Number(t.foilZoneScale),h.uMouse.value.copy(this.foilMouse),h.uTime.value=i,h.uScrollOffset.value=a,u.renderer.render(u.scene,u.camera)})}bindEvents(){window.addEventListener("pointermove",e=>{this.pointer.set(e.clientX/window.innerWidth*2-1,e.clientY/window.innerHeight*2-1)},{passive:!0}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.stage),this.intersectionObserver=new IntersectionObserver(([e])=>{this.visible=e.isIntersecting},{rootMargin:"20%"}),this.intersectionObserver.observe(this.root),this.resize()}setupSectionGuide(){this.sectionGuide=document.createElement("div"),this.sectionGuide.className="altar-tramos",this.sectionGuide.hidden=!0,this.sectionGuide.setAttribute("aria-hidden","true"),this.root.appendChild(this.sectionGuide),window.addEventListener("scroll",()=>this.updateTramoHud(),{passive:!0}),this.updateSectionGuide()}updateSectionGuide(){if(!this.sectionGuide)return;let e=[{name:"Sistema solar",element:this.stage},{name:"Cielo y horizonte",element:this.root.querySelector(".altar-solar__earth")},{name:"Colecci\xF3n",element:this.root.querySelector(".altar-solar__ground")},{name:"Cierre",element:this.root.querySelector(".altar-closing")}].filter(({element:i})=>i),t=e.map(({element:i})=>i.offsetTop),n=[...t.slice(1),this.root.offsetHeight];this.tramoBounds=e.map(({name:i},s)=>({name:i,top:t[s],end:n[s]})),this.sectionGuide.innerHTML=this.tramoBounds.map(({name:i,top:s,end:a},o)=>`
      <div class="altar-tramos__item${o%2?" is-alt":""}" style="top:${s}px;height:${a-s}px">
        <span class="altar-tramos__number">${o+1}</span>
        <span class="altar-tramos__label">Tramo ${o+1} \xB7 ${i} \xB7 ${Math.round(a-s)}px</span>
      </div>`).join("")+'<div class="altar-tramos__hud" data-tramo-hud></div>',this.tramoHud=this.sectionGuide.querySelector("[data-tramo-hud]"),this.updateTramoHud()}updateTramoHud(){if(!this.tramoHud||this.sectionGuide.hidden)return;let e=this.root.getBoundingClientRect().top,t=window.innerHeight/2-e,n=this.tramoBounds.findIndex(({end:a})=>t<a),i=this.tramoBounds[n];if(!i){this.tramoHud.textContent="Fuera de tramos";return}let s=Math.round(lt.clamp((t-i.top)/(i.end-i.top),0,1)*100);this.tramoHud.textContent=`Tramo ${n+1} de ${this.tramoBounds.length} \xB7 ${i.name} \xB7 ${s}%`}resize(){this.updateSectionGuide();let{width:e,height:t}=this.stage.getBoundingClientRect();if(!e||!t||!this.renderer)return;this.renderer.setPixelRatio(Ag()),this.renderer.setSize(e,t,!1),this.horizonMaterial?.uniforms.uResolution.value.set(e,t);let n=t/2;this.camera.aspect=e/n,this.camera.setViewOffset(e,n,0,0,e,t),this.camera.updateProjectionMatrix()}},x1=4,Xc=8,qg="altar:drag-reset",zg=r=>r?.dispatchEvent(new CustomEvent(qg));function Yc(r,{handle:e=r,allowTouch:t=!0}={}){if(!r||!e)return;let n={x:0,y:0},i=null,s=!1;e.addEventListener("dragstart",o=>o.preventDefault()),e.addEventListener("pointerdown",o=>{if(o.button!==0||!t&&o.pointerType==="touch")return;let l=r.getBoundingClientRect();i={id:o.pointerId,startX:o.clientX,startY:o.clientY,originX:n.x,originY:n.y,minX:Xc-l.left,maxX:window.innerWidth-Xc-l.right,minY:Xc-l.top,maxY:window.innerHeight-Xc-l.bottom,moved:!1}}),window.addEventListener("pointermove",o=>{if(!i||o.pointerId!==i.id)return;let l=o.clientX-i.startX,c=o.clientY-i.startY;if(!i.moved){if(Math.hypot(l,c)<x1)return;i.moved=!0,r.classList.add("is-dragging"),e.setPointerCapture?.(o.pointerId)}n.x=i.originX+lt.clamp(l,i.minX,i.maxX),n.y=i.originY+lt.clamp(c,i.minY,i.maxY),r.style.setProperty("--drag-x",`${n.x}px`),r.style.setProperty("--drag-y",`${n.y}px`)});let a=o=>{!i||o.pointerId!==i.id||(s=i.moved,s&&setTimeout(()=>{s=!1},0),r.classList.remove("is-dragging"),i=null)};window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a),r.addEventListener(qg,()=>{i=null,n.x=0,n.y=0,r.classList.remove("is-dragging"),r.style.removeProperty("--drag-x"),r.style.removeProperty("--drag-y")}),r.addEventListener("click",o=>{s&&(s=!1,o.preventDefault(),o.stopPropagation())},!0)}var _o=[{background:null},{background:{space:"#09091f",glows:{rose:["#686f8d",3.33],cyan:["#666d8c",2],teal:["#4fc1b5",1]}}},{background:{space:"#2b4544",glows:{rose:["#c8909a",1],cyan:["#71d4ff",1],teal:["#4fc1b5",1]}}},{background:{space:"#193a4f",glows:{rose:["#236679",3.33],cyan:["#4d6976",2],teal:["#4fc1b5",1]}}}],Jd=2100,y1=2200,v1="#f6e9a5",jd=["Alguien que cre\xEDas lejano volver\xE1 a acercarse. Esta vez lo mirar\xE1s diferente.","Una conversaci\xF3n inesperada cambiar\xE1 la forma en que mir\xE1s a alguien cercano.","Alguien piensa en vos m\xE1s de lo que imagin\xE1s. Pronto encontrar\xE1s una se\xF1al.","Un encuentro que parece casual llegar\xE1 justo cuando hab\xEDas dejado de buscarlo.","Una persona nueva aparecer\xE1 sin aviso. Lo extra\xF1o ser\xE1 sentir que ya la conoc\xEDas.","Algo que no dijiste todav\xEDa sigue esperando su momento. Pronto vas a encontrarlo.","Alguien de tu pasado volver\xE1 a cruzar tu camino. Vos decidir\xE1s cu\xE1nto se queda.","Una mirada va a durar apenas un instante. Sus consecuencias, bastante m\xE1s.","El amor llegar\xE1 disfrazado de otra cosa. Vas a reconocerlo cuando ya sea tarde.","Una coincidencia repetida dejar\xE1 de parecer casual. Prest\xE1 atenci\xF3n a qui\xE9n aparece.","La suerte cambiar\xE1 de direcci\xF3n cuando dejes de buscar exactamente lo esperado.","Una peque\xF1a casualidad abrir\xE1 una puerta que hasta ahora parec\xEDa no existir.","Algo perdido regresar\xE1 de otra forma. Tal vez entonces entiendas por qu\xE9 se fue.","El azar pondr\xE1 algo frente a vos. Reconocerlo a tiempo ser\xE1 la verdadera suerte.","Una coincidencia llegar\xE1 dos veces. La segunda vez ya no podr\xE1s llamarla azar.","La fortuna se mover\xE1 a tu favor despu\xE9s de una decisi\xF3n que parece insignificante.","Algo que hoy parece un error terminar\xE1 acerc\xE1ndote exactamente adonde quer\xEDas ir.","Tu pr\xF3xima decisi\xF3n tendr\xE1 m\xE1s suerte de la que ahora pod\xE9s calcular.","Una puerta se cerrar\xE1 sin explicaci\xF3n. Poco despu\xE9s entender\xE1s qu\xE9 estaba protegiendo.","La suerte aparecer\xE1 donde menos sentido tenga buscarla. No preguntes demasiado.","Una nueva etapa comienza en silencio. Lo que hoy parece incierto encontrar\xE1 su lugar.","Algo est\xE1 terminando sin que todav\xEDa lo notes. Lo pr\xF3ximo ya empez\xF3 a acercarse.","Lo que parec\xEDa detenido volver\xE1 a moverse. Esta vez en una direcci\xF3n inesperada.","Una versi\xF3n antigua de vos est\xE1 por quedarse atr\xE1s. No necesitar\xE1s despedirte.","Antes de que termine este ciclo, algo que parec\xEDa imposible empezar\xE1 a ordenarse.","El camino que evitaste volver\xE1 a aparecer. Esta vez vas a entender por qu\xE9.","Algo que esperaste durante mucho tiempo llegar\xE1 cuando ya no lo necesites igual.","Pronto cambiar\xE1s de idea sobre algo que hoy parece completamente decidido.","Una respuesta llegar\xE1 despu\xE9s de que hayas dejado de hacerte la pregunta.","Lo que viene no se parecer\xE1 a lo que imaginaste. Tal vez por eso funcione.","Una oportunidad peque\xF1a traer\xE1 consecuencias mucho mayores de las que imagin\xE1s.","Algo que empezaste casi por accidente puede convertirse en una fuente de abundancia.","Una propuesta llegar\xE1 de un lugar inesperado. Escuchala antes de decidir.","El dinero llegar\xE1 por un camino distinto al que hoy est\xE1s intentando controlar.","Una decisi\xF3n postergada puede abrir el per\xEDodo de estabilidad que estabas buscando.","Aquello que hoy hac\xE9s en silencio pronto encontrar\xE1 a las personas correctas.","Un planeta cambia de posici\xF3n. Algo peque\xF1o dentro de vos tambi\xE9n empieza a moverse.","El universo repetir\xE1 una se\xF1al hasta que dejes de confundirla con coincidencia.","Algo que todav\xEDa no tiene nombre ya est\xE1 orbitando cerca de tu vida.","Las cartas no revelan el futuro. Se\xF1alan el instante exacto en que empieza a cambiar."],S1=708,b1=1074,Zg="Altar Fortune",Qd=[196.894,192.517,185.983,185.357],M1={x:21.752,width:192.496,fontSize:14,lineHeight:1.1,minFontSize:11,maxLines:5,color:"#8c8c8c",baselineNudge:-5/3},$g="altar-fortune-seen";function xo(r,e){return r?e===0?r.dataset.foilFrame:r.getAttribute(`data-channel-frame-${e+1}`):null}function kg(r){return new Promise((e,t)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=r})}function Kg(){try{let r=JSON.parse(sessionStorage.getItem($g)||"[]");return Array.isArray(r)?r:[]}catch{return[]}}function qd(r){let e=Kg(),t=jd.filter(n=>!e.includes(n)&&n!==r);return t.length||(t=jd.filter(n=>n!==r)),t[Math.floor(Math.random()*t.length)]}function T1(r){let e=Kg();jd.every(t=>e.includes(t))&&(e=[]),e.includes(r)||e.push(r);try{sessionStorage.setItem($g,JSON.stringify(e))}catch{}}function E1(r,e,t){let n=[];return e.split(/\s+/).forEach(i=>{let s=n.length?`${n[n.length-1]} ${i}`:i;n.length&&r.measureText(s).width<=t?n[n.length-1]=s:n.push(i)}),n}function w1(r,e,t,n=Qd[0]){let i=r.getContext("2d"),s=r.width/236,a=M1;i.clearRect(0,0,r.width,r.height),i.drawImage(e,0,0,r.width,r.height);let o=t.toLocaleUpperCase("es"),l=a.fontSize,c;for(;i.font=`400 ${l*s}px "${Zg}", Georgia, serif`,c=E1(i,o,a.width*s),!(c.length<=a.maxLines||l<=a.minFontSize);)l-=.25;let u=i.measureText("*"),h=u.fontBoundingBoxAscent??l*s*.8,d=u.fontBoundingBoxDescent??l*s*.2,f=l*a.lineHeight*s,g=(a.x+a.width)*s;i.fillStyle=a.color,i.textAlign="right",i.textBaseline="alphabetic",["*",...c].forEach((_,p)=>{let m=(n+a.baselineNudge)*s+p*f;i.fillText(_,g,m+(f-h-d)/2+h)})}var Hg=["X","Y","Z","RotX","RotY","RotZ","Scale"],Zc=r=>1-Math.pow(1-r,3),A1={rose:{x:.825,y:.051,size:1.44,peak:.14},cyan:{x:.046,y:.646,size:1.32,peak:.097},teal:{x:.603,y:.341,size:1.26,peak:.02}},R1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,C1=`
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
`;function qc(r){let e=parseInt(String(r).replace("#",""),16)||0;return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Vg(r,{ringsOnly:e=!1}={}){if(!r||!window.WebGLRenderingContext)return null;let t=document.createElement("canvas");t.className=e?"altar-solar__reveal altar-solar__reveal--rings":"altar-solar__reveal",t.setAttribute("aria-hidden","true"),r.querySelector(e?".altar-solar__canvas":".altar-solar__sky")?.after(t);let n;try{n=new qs({canvas:t,alpha:!0,premultipliedAlpha:!0,antialias:!1})}catch{return t.remove(),null}n.setClearColor(0,0);let i={uStageSize:{value:new Ae},uViewportHeight:{value:1},uOrigin:{value:new Ae},uProgress:{value:0},uMaxDistance:{value:1},uTime:{value:0},uSpace:{value:new N},uGlowColors:{value:[new N,new N,new N]},uGlowShapes:{value:[new Ke,new Ke,new Ke]},uEdgeColor:{value:new N(...qc("#fff3a9"))},uRingsOnly:{value:e?1:0},uBand:{value:1},uEdgeGain:{value:1},uBandColor:{value:new N},uBandTint:{value:0}},s=new Bt({uniforms:i,vertexShader:R1,fragmentShader:C1,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:El,blendSrc:wl,blendDst:Ba}),a=new er,o=new kn(-1,1,1,-1,-1,1);a.add(new xt(new zn(2,2),s));let l=0,c=null,u="",h=(g,_)=>{let p=Math.min(window.devicePixelRatio||1,1.6),m=`${g}x${_}@${p}`;m!==u&&(u=m,n.setPixelRatio(p),n.setSize(g,_,!1))};jg(()=>{let g=r.getBoundingClientRect();h(g.width,g.height),n.compile(a,o),l||n.render(a,o)});let f=()=>{cancelAnimationFrame(l),l=0,c?.(),c=null,t.classList.remove("is-active")};return{play(g,_,p,{bandColor:m=null}={}){i.uBand.value=1,i.uBandTint.value=m?1:0,m&&i.uBandColor.value.set(...qc(m)),l&&f();let M=r.getBoundingClientRect(),A=M.width,v=M.height;h(A,v);let S=window.innerHeight,E=_.getBoundingClientRect(),w=E.left+E.width/2-M.left,x=E.top+E.height/2-M.top,b=-M.top,C=[[0,b],[A,b],[0,b+S],[A,b+S]],P=Math.max(...C.map(([I,B])=>Math.hypot(I-w,B-x)));i.uStageSize.value.set(A,v),i.uViewportHeight.value=S,i.uOrigin.value.set(w,x),i.uMaxDistance.value=P/S+.075+.05,i.uSpace.value.set(...qc(g.space)),["rose","cyan","teal"].forEach((I,B)=>{let W=A1[I],[G,Q]=g.glows[I];i.uGlowColors.value[B].set(...qc(G)),i.uGlowShapes.value[B].set(W.x*A,W.y*v,W.size*window.innerWidth/2,Math.min(W.peak*Number(Q),1))}),c=p,t.classList.add("is-active");let F=performance.now(),O=I=>{let B=Math.min((I-F)/Jd,1);i.uProgress.value=Zc(B),i.uTime.value=(I-F)/1e3,n.render(a,o),B<1?l=requestAnimationFrame(O):f()};l=requestAnimationFrame(O)}}}var Zd=[{from:6,name:"ALBA / AIRE",url:"https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk"},{from:15,name:"MEDIOD\xCDA / FUEGO",url:"https://open.spotify.com/intl-es/track/3yGECrjAhzkWpOxt17cdGr"},{from:18,name:"TARDE / TIERRA",url:"https://open.spotify.com/intl-es/track/1loE5JdxEEa0bO9ojGYKwr"},{from:21,name:"NOCHE / AGUA",url:"https://open.spotify.com/intl-es/track/5Rq2hPEd7UWN6i9tME54dj"}];function P1(r){return[...Zd].reverse().find(e=>r>=e.from)??Zd[Zd.length-1]}function I1(r){let e=String(r||"").match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(track|playlist|album|episode|show|artist)\/([A-Za-z0-9]+)/);return e?`https://open.spotify.com/embed/${e[1]}/${e[2]}?utm_source=generator&theme=0`:null}var Gg="America/Argentina/Buenos_Aires";function $c(){let r=new Date,e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:Gg,month:"short",day:"2-digit",year:"2-digit"}).formatToParts(r).map(({type:n,value:i})=>[n,i])),t=new Intl.DateTimeFormat("en-CA",{timeZone:Gg}).format(r);document.querySelectorAll("[data-live-date]").forEach(n=>{n.textContent=`${e.month}/${e.day}/${e.year}`.toUpperCase(),n.setAttribute("datetime",t)}),clearTimeout($c.timer),$c.timer=setTimeout($c,6e4-(r.getSeconds()*1e3+r.getMilliseconds())+50)}function ef(){let r=document.querySelector(".site-header");if(!r||ef.ready)return;ef.ready=!0;let e=0,t=()=>{e=0;let i=r.getBoundingClientRect().height/2,s=Array.from(document.querySelectorAll('[data-header-theme="light"]')).some(a=>{let o=a.getBoundingClientRect();return o.top<=i&&o.bottom>=i});r.classList.toggle("is-on-light",s)},n=()=>{e||(e=requestAnimationFrame(t))};window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),t()}function L1(){document.querySelectorAll("[data-newsletter-form]:not([action])").forEach(r=>{r.dataset.ready||(r.dataset.ready="true",r.addEventListener("submit",e=>{e.preventDefault();let t=r.querySelector(".altar-footer__legal");t&&(t.textContent="\xA1Listo! Ya est\xE1s en la lista.",t.setAttribute("role","status")),r.reset()}))})}function tf(){ef(),$c(),L1(),document.querySelectorAll("[data-altar-solar]").forEach(r=>{r.solarExperience||(r.solarExperience=new Kd(r))}),nf()}var Jg=4200;function jg(r){let e=window.requestIdleCallback??(t=>setTimeout(t,200));setTimeout(()=>e(r),Jg)}function Yn(r,{base:e,stagger:t,duration:n=120,ease:i="ease-out"}){if(!r||r.dataset.introSplit)return;r.dataset.introSplit="true";let s=r.textContent.replace(/\s+/g," ").trim(),a=0,o=c=>{[...c.childNodes].forEach(u=>{if(u.nodeType===Node.ELEMENT_NODE)return o(u);if(u.nodeType!==Node.TEXT_NODE||!u.textContent)return;let h=document.createDocumentFragment();[...u.textContent].forEach(d=>{let f=document.createElement("span");f.className="altar-intro__char",f.setAttribute("aria-hidden","true"),f.textContent=d,f.style.animation=`altar-intro-fade ${n}ms ${i} ${e+a*t}ms both`,a+=1,h.append(f)}),u.replaceWith(h)})};o(r);let l=document.createElement("span");l.className="visually-hidden",l.textContent=s,r.append(l)}function Yt(r,e){r&&(r.style.animation=e)}function nf(){let r=document.documentElement;if(nf.done||!r.classList.contains("altar-intro"))return;if(nf.done=!0,An.matches||window.scrollY>window.innerHeight*.5){r.classList.remove("altar-intro");return}let e=s=>document.querySelector(s),t=(s,a,o="ease-out")=>`altar-intro-fade ${s}ms ${o} ${a}ms both`;Yt(e(".altar-nav__logo"),t(600,0)),Yn(e(".altar-nav__wordmark"),{base:150,stagger:70,duration:160}),Yn(e(".altar-nav__eyebrow"),{base:0,stagger:35}),Yn(e(".altar-solar__scroll-prompt"),{base:0,stagger:40}),Yt(e(".altar-nav__divider--brand"),"altar-intro-divider 350ms ease-out 550ms both"),Yt(e(".altar-nav__rule--top"),"altar-intro-rule 350ms ease-out 560ms both"),Yt(e(".altar-nav__rule--bottom"),"altar-intro-rule 350ms ease-out 720ms both"),Yt(e(".altar-nav__divider--metadata"),"altar-intro-divider 350ms ease-out 900ms both"),Yt(e("[data-fortune-flip]"),t(300,950));let n=e(".altar-solar__fortune-cta-frame");Yt(n,"altar-intro-frame 600ms ease-out 1250ms both"),n?.addEventListener("animationend",()=>{n.style.animation=""},{once:!0}),Yt(e(".altar-nav__divider--navigation"),"altar-intro-divider 350ms ease-out 1200ms both"),Yt(e(".altar-nav__divider--actions"),"altar-intro-divider 350ms ease-out 1350ms both");let i=e(".altar-solar__campaign");if(Yt(i,t(200,1200)),i){let s=getComputedStyle(i).transform,a=s==="none"?"":s;i.animate([{transform:`translateY(${window.innerWidth*.2}px) rotate(-20deg) ${a}`},{transform:`translateY(0px) rotate(0deg) ${a}`}],{duration:1600,delay:1200,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"backwards"})}Yn(i?.querySelector(".altar-solar__campaign-heading span"),{base:1200,stagger:40}),Yn(e("[data-live-date]"),{base:1250,stagger:35}),Yn(e(".altar-solar__fortune-cta-text span"),{base:1460,stagger:20}),Yn(e(".altar-nav__metadata > span"),{base:1550,stagger:35}),Yt(e(".altar-solar__fortune-cta-icon"),t(200,1440)),document.querySelectorAll(".altar-nav__menu a").forEach((s,a)=>Yn(s,{base:1e3+a*120,stagger:35})),[".altar-nav__cart",".altar-nav__search"].forEach((s,a)=>{let o=e(s);Yt(o?.querySelector(".altar-nav__action-icon"),t(200,1400+a*150)),o?.querySelectorAll(":scope > span").forEach((l,c)=>Yn(l,{base:1450+a*150+c*140,stagger:35}))}),document.querySelectorAll(".altar-solar__manifesto-ids > span").forEach((s,a)=>Yn(s,{base:2200+a*300,stagger:35})),Yt(e(".altar-solar__pagination"),t(200,1700)),Yt(e(".altar-solar__channel-switcher"),t(200,1780)),Yn(e(".altar-solar__channel-label"),{base:1800,stagger:35}),Yt(e(".altar-solar__reveal-card"),t(200,1860)),Yt(e(".altar-solar__open-player"),t(200,2e3)),Yt(e(".altar-solar__marquee"),"altar-intro-clip 500ms ease-out 2500ms both"),Yn(e(".altar-solar__player-label"),{base:3500,stagger:35}),r.classList.add("altar-intro--play"),setTimeout(()=>{r.classList.remove("altar-intro","altar-intro--play"),document.querySelectorAll("[data-intro-split], .altar-nav__logo, .altar-nav__action-icon, .altar-solar__fortune-cta-icon, .altar-nav__divider, .altar-nav__rule, [data-fortune-flip], .altar-solar__campaign, .altar-solar__pagination, .altar-solar__channel-switcher, .altar-solar__reveal-card, .altar-solar__open-player, .altar-solar__marquee").forEach(s=>{s.style.animation.startsWith("altar-intro")&&(s.style.animation="")})},Jg)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tf,{once:!0}):tf();document.addEventListener("section:load",tf);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
