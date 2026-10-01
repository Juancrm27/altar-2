(()=>{var Zg=Object.defineProperty;var $g=(r,t,e)=>t in r?Zg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var uf=(r,t,e)=>$g(r,typeof t!="symbol"?t+"":t,e);var Kf=0,Du=1,Jf=2;var Fr=1,jf=2,Bs=3,pi=0,un=1,Hn=2,mi=0,zs=1,Or=2,Uu=3,Fu=4,Ml=5;var Br=100,Qf=101,tp=102,ep=103,np=104,ip=200,Tl=201,rp=202,sp=203,Ou=204,Ba=205,ap=206,op=207,lp=208,cp=209,up=210,hp=211,dp=212,fp=213,pp=214,Jo=0,jo=1,Qo=2,bs=3,tl=4,el=5,nl=6,il=7,Bu=0,mp=1,gp=2,ii=0,za=1,ka=2,zu=3,zr=4,ku=5,Hu=6,Ha=7,bu="attached",_p="detached",Vu=300,sr=301,kr=302,El=303,wl=304,Va=306,ei=1e3,sn=1001,Ms=1002,Re=1003,Al=1004;var Hr=1005;var fe=1006,ks=1007;var yn=1008;var vn=1009,Gu=1010,Wu=1011,Hs=1012,Rl=1013,ri=1014,In=1015,si=1016,Cl=1017,Pl=1018,Vs=1020,Xu=35902,Yu=35899,qu=1021,Zu=1022,Je=1023,ui=1026,ar=1027,Il=1028,Ll=1029,or=1030,Nl=1031;var Dl=1033,Ga=33776,Wa=33777,Xa=33778,Ya=33779,Ul=35840,Fl=35841,Ol=35842,Bl=35843,zl=36196,kl=37492,Hl=37496,Vl=37488,Gl=37489,qa=37490,Wl=37491,Xl=37808,Yl=37809,ql=37810,Zl=37811,$l=37812,Kl=37813,Jl=37814,jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,rc=37821,sc=36492,ac=36494,oc=36495,lc=36283,cc=36284,Za=36285,uc=36286;var Er=2300,wr=2301,Zo=2302,Mu=2303,Tu=2400,Eu=2401,wu=2402,xp=2500;var $u=0,$a=1,Gs=2,yp=3200;var hc=0,vp=1,Ln="",Te="srgb",on="srgb-linear",ya="linear",ee="srgb";var $o=7680;var Sp=519,bp=512,Mp=513,Tp=514,dc=515,Ep=516,wp=517,fc=518,Ap=519,Ku=35044;var Ju="300 es",Qn=2e3,Ts=2001;function Kg(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Jg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Es(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rp(){let r=Es("canvas");return r.style.display="block",r}var hf={},ws=null;function va(...r){let t="THREE."+r.shift();ws?ws("log",t,...r):console.log(t,...r)}function Cp(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function wt(...r){r=Cp(r);let t="THREE."+r.shift();if(ws)ws("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Lt(...r){r=Cp(r);let t="THREE."+r.shift();if(ws)ws("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Tr(...r){let t=r.join(" ");t in hf||(hf[t]=!0,wt(...r))}function Pp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ip={[Jo]:jo,[Qo]:nl,[tl]:il,[bs]:el,[jo]:Jo,[nl]:Qo,[il]:tl,[el]:bs},hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=1234567,_a=Math.PI/180,Ar=180/Math.PI;function ti(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Xt(r,t,e){return Math.max(t,Math.min(e,r))}function ju(r,t){return(r%t+t)%t}function jg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Qg(r,t,e){return r!==t?(e-r)/(t-r):0}function xa(r,t,e){return(1-e)*r+e*t}function t0(r,t,e,n){return xa(r,t,1-Math.exp(-e*n))}function e0(r,t=1){return t-Math.abs(ju(r,t*2)-t)}function n0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function i0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function r0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function s0(r,t){return r+Math.random()*(t-r)}function a0(r){return r*(.5-Math.random())}function o0(r){r!==void 0&&(df=r);let t=df+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function l0(r){return r*_a}function c0(r){return r*Ar}function u0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function h0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function d0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function f0(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oe={DEG2RAD:_a,RAD2DEG:Ar,generateUUID:ti,clamp:Xt,euclideanModulo:ju,mapLinear:jg,inverseLerp:Qg,lerp:xa,damp:t0,pingpong:e0,smoothstep:n0,smootherstep:i0,randInt:r0,randFloat:s0,randFloatSpread:a0,seededRandom:o0,degToRad:l0,radToDeg:c0,isPowerOfTwo:u0,ceilPowerOfTwo:h0,floorPowerOfTwo:d0,setQuaternionFromProperEuler:f0,normalize:ie,denormalize:jn},ih=class ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var At=ih,ln=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||l!==d||c!==f||u!==g){let p=l*d+c*f+u*g+h*_;p<0&&(d=-d,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),A=Math.sin(b);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A,l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+_*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+_*o;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rh=class rh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ff.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rh.prototype.isVector3=!0;var N=rh,Jc=new N,ff=new ln,sh=class sh{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],A=i[4],S=i[7],v=i[2],T=i[5],w=i[8];return s[0]=a*_+o*b+l*v,s[3]=a*p+o*A+l*T,s[6]=a*m+o*S+l*w,s[1]=c*_+u*b+h*v,s[4]=c*p+u*A+h*T,s[7]=c*m+u*S+h*w,s[2]=d*_+f*b+g*v,s[5]=d*p+f*A+g*T,s[8]=d*m+f*S+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var Nt=sh,jc=new Nt,pf=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mf=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p0(){let r={enabled:!0,workingColorSpace:on,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ee&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(i.r=Ss(i.r),i.g=Ss(i.g),i.b=Ss(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[on]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),r}var kt=p0();function Pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ss(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var is,rl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{is===void 0&&(is=Es("canvas")),is.width=t.width,is.height=t.height;let i=is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Es("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},m0=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Qc(i[a].image)):s.push(Qc(i[a]))}else s=Qc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Qc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var g0=0,tu=new N,Oe=class r extends hi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=sn,i=sn,s=fe,a=yn,o=Je,l=vn,c=r.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ti(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ei:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Ms:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ei:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Ms:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Vu;Oe.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,S=(f+1)/2,v=(m+1)/2,T=(u+d)/4,w=(h+_)/4,x=(g+p)/4;return A>S&&A>v?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=T/n,s=w/n):S>v?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=x/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=w/s,i=x/s),this.set(n,i,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var Kt=ah,sl=class extends hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Oe(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new As(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sa=class extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bl=class bl{constructor(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,p)}set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),s=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_0,t,x0)}lookAt(t,e,n){let i=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Zi.crossVectors(n,An),Zi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Zi.crossVectors(n,An)),Zi.normalize(),vo.crossVectors(An,Zi),i[0]=Zi.x,i[4]=vo.x,i[8]=An.x,i[1]=Zi.y,i[5]=vo.y,i[9]=An.y,i[2]=Zi.z,i[6]=vo.z,i[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],A=n[7],S=n[11],v=n[15],T=i[0],w=i[4],x=i[8],E=i[12],C=i[1],I=i[5],F=i[9],O=i[13],P=i[2],z=i[6],X=i[10],G=i[14],Q=i[3],Y=i[7],J=i[11],et=i[15];return s[0]=a*T+o*C+l*P+c*Q,s[4]=a*w+o*I+l*z+c*Y,s[8]=a*x+o*F+l*X+c*J,s[12]=a*E+o*O+l*G+c*et,s[1]=u*T+h*C+d*P+f*Q,s[5]=u*w+h*I+d*z+f*Y,s[9]=u*x+h*F+d*X+f*J,s[13]=u*E+h*O+d*G+f*et,s[2]=g*T+_*C+p*P+m*Q,s[6]=g*w+_*I+p*z+m*Y,s[10]=g*x+_*F+p*X+m*J,s[14]=g*E+_*O+p*G+m*et,s[3]=b*T+A*C+S*P+v*Q,s[7]=b*w+A*I+S*z+v*Y,s[11]=b*x+A*F+S*X+v*J,s[15]=b*E+A*O+S*G+v*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],b=l*f-c*d,A=o*f-c*h,S=o*d-l*h,v=a*f-c*u,T=a*d-l*u,w=a*h-o*u;return e*(_*b-p*A+m*S)-n*(g*b-p*v+m*T)+i*(g*A-_*v+m*w)-s*(g*S-_*T+p*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],b=e*o-n*a,A=e*l-i*a,S=e*c-s*a,v=n*l-i*o,T=n*c-s*o,w=i*c-s*l,x=u*_-h*g,E=u*p-d*g,C=u*m-f*g,I=h*p-d*_,F=h*m-f*_,O=d*m-f*p,P=b*O-A*F+S*I+v*C-T*E+w*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return t[0]=(o*O-l*F+c*I)*z,t[1]=(i*F-n*O-s*I)*z,t[2]=(_*w-p*T+m*v)*z,t[3]=(d*T-h*w-f*v)*z,t[4]=(l*C-a*O-c*E)*z,t[5]=(e*O-i*C+s*E)*z,t[6]=(p*S-g*w-m*A)*z,t[7]=(u*w-d*S+f*A)*z,t[8]=(a*F-o*C+c*x)*z,t[9]=(n*C-e*F-s*x)*z,t[10]=(g*T-_*S+m*b)*z,t[11]=(h*S-u*T-f*b)*z,t[12]=(o*E-a*I-l*x)*z,t[13]=(e*I-n*E+i*x)*z,t[14]=(_*A-g*v-p*b)*z,t[15]=(u*v-h*A+d*b)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,p=a*h,m=o*h,b=l*c,A=l*u,S=l*h,v=n.x,T=n.y,w=n.z;return i[0]=(1-(_+m))*v,i[1]=(f+S)*v,i[2]=(g-A)*v,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(d+m))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(g+A)*w,i[9]=(p-b)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=rs.set(i[0],i[1],i[2]).length(),o=rs.set(i[4],i[5],i[6]).length(),l=rs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Zn.copy(this);let c=1/a,u=1/o,h=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,e.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=Qn,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Qn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ts)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Qn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Qn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ts)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bl.prototype.isMatrix4=!0;var Ut=bl,rs=new N,Zn=new Ut,_0=new N(0,0,0),x0=new N(1,1,1),Zi=new N,vo=new N,An=new N,gf=new Ut,_f=new ln,Ii=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _f.setFromEuler(this),this.setFromQuaternion(_f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},y0=0,xf=new N,ss=new ln,Mi=new Ut,So=new N,aa=new N,v0=new N,S0=new ln,yf=new N(1,0,0),vf=new N(0,1,0),Sf=new N(0,0,1),bf={type:"added"},b0={type:"removed"},as={type:"childadded",child:null},eu={type:"childremoved",child:null},ge=class r extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new N,e=new Ii,n=new ln,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Nt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(yf,t)}rotateY(t){return this.rotateOnAxis(vf,t)}rotateZ(t){return this.rotateOnAxis(Sf,t)}translateOnAxis(t,e){return xf.copy(t).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yf,t)}translateY(t){return this.translateOnAxis(vf,t)}translateZ(t){return this.translateOnAxis(Sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?So.copy(t):So.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(aa,So,this.up):Mi.lookAt(So,aa,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Mi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bf),as.child=t,this.dispatchEvent(as),as.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(b0),eu.child=t,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bf),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,t,v0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,S0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ge.DEFAULT_UP=new N(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},M0={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},bo={h:0,s:0,l:0};function nu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=kt.workingColorSpace){if(t=ju(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=nu(a,s,t+1/3),this.g=nu(a,s,t),this.b=nu(a,s,t-1/3)}return kt.colorSpaceToWorking(this,i),this}setStyle(t,e=Te){function n(s){s!==void 0&&parseFloat(s)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return kt.workingToColorSpace(Ke.copy(this),t),Math.round(Xt(Ke.r*255,0,255))*65536+Math.round(Xt(Ke.g*255,0,255))*256+Math.round(Xt(Ke.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,i=Ke.g,s=Ke.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Te){kt.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,i=Ke.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(bo);let n=xa($i.h,bo.h,e),i=xa($i.s,bo.s,e),s=xa($i.l,bo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Mt;Mt.NAMES=Lp;var tr=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$n=new N,Ti=new N,iu=new N,Ei=new N,os=new N,ls=new N,Mf=new N,ru=new N,su=new N,au=new N,ou=new Kt,lu=new Kt,cu=new Kt,Ci=class r{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$n.subVectors(t,e),i.cross($n);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){$n.subVectors(i,e),Ti.subVectors(n,e),iu.subVectors(t,e);let a=$n.dot($n),o=$n.dot(Ti),l=$n.dot(iu),c=Ti.dot(Ti),u=Ti.dot(iu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return ou.setScalar(0),lu.setScalar(0),cu.setScalar(0),ou.fromBufferAttribute(t,e),lu.fromBufferAttribute(t,n),cu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ou,s.x),a.addScaledVector(lu,s.y),a.addScaledVector(cu,s.z),a}static isFrontFacing(t,e,n,i){return $n.subVectors(n,e),Ti.subVectors(t,e),$n.cross(Ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),$n.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;os.subVectors(i,n),ls.subVectors(s,n),ru.subVectors(t,n);let l=os.dot(ru),c=ls.dot(ru);if(l<=0&&c<=0)return e.copy(n);su.subVectors(t,i);let u=os.dot(su),h=ls.dot(su);if(u>=0&&h<=u)return e.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(os,a);au.subVectors(t,s);let f=os.dot(au),g=ls.dot(au);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ls,o);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Mf.subVectors(s,i),o=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(Mf,o);let m=1/(p+_+d);return a=_*m,o=d*m,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oa),To.subVectors(this.max,oa),cs.subVectors(t.a,oa),us.subVectors(t.b,oa),hs.subVectors(t.c,oa),Ki.subVectors(us,cs),Ji.subVectors(hs,us),vr.subVectors(cs,hs);let e=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-vr.z,vr.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,vr.z,0,-vr.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-vr.y,vr.x,0];return!uu(e,cs,us,hs,To)||(e=[1,0,0,0,1,0,0,0,1],!uu(e,cs,us,hs,To))?!1:(Eo.crossVectors(Ki,Ji),e=[Eo.x,Eo.y,Eo.z],uu(e,cs,us,hs,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new N,new N,new N,new N,new N,new N,new N,new N],Kn=new N,Mo=new Cn,cs=new N,us=new N,hs=new N,Ki=new N,Ji=new N,vr=new N,oa=new N,To=new N,Eo=new N,Sr=new N;function uu(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Sr.fromArray(r,s);let o=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=t.dot(Sr),c=e.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ne=new N,wo=new At,T0=0,me=class extends hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ma=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ta=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var an=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}},E0=new Cn,la=new N,hu=new N,gn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):E0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;la.subVectors(t,this.center);let e=la.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(la.copy(t.center).add(hu)),this.expandByPoint(la.copy(t.center).sub(hu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},w0=0,Bn=new Ut,du=new ge,ds=new N,Rn=new Cn,ca=new Cn,Ge=new N,Ue=class r extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kg(t)?Ta:Ma)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return du.lookAt(t),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(Rn.min,ca.min),Rn.expandByPoint(Ge),Ge.addVectors(Rn.max,ca.max),Rn.expandByPoint(Ge)):(Rn.expandByPoint(ca.min),Rn.expandByPoint(ca.max))}Rn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ge.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(t,c),Ge.add(ds)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new me(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new N,l[x]=new N;let c=new N,u=new N,h=new N,d=new At,f=new At,g=new At,_=new N,p=new N;function m(x,E,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),d.fromBufferAttribute(s,x),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,C),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[x].add(_),o[E].add(_),o[C].add(_),l[x].add(p),l[E].add(p),l[C].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,E=b.length;x<E;++x){let C=b[x],I=C.start,F=C.count;for(let O=I,P=I+F;O<P;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new N,S=new N,v=new N,T=new N;function w(x){v.fromBufferAttribute(i,x),T.copy(v);let E=o[x];A.copy(E),A.sub(v.multiplyScalar(v.dot(E))).normalize(),S.crossVectors(T,E);let I=S.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,E=b.length;x<E;++x){let C=b[x],I=C.start,F=C.count;for(let O=I,P=I+F;O<P;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new me(d,u,h)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ku,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},rn=new N,er=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fu=new N,A0=new N,R0=new Nt,Jn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=fu.subVectors(n,e).cross(A0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(fu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||R0.getNormalMatrix(t),i=this.coplanarPoint(fu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},C0=0,cn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=zs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ou,this.blendDst=Ba,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){wt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Cs=class extends cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fs,ua=new N,ps=new N,ms=new N,gs=new At,ha=new At,Np=new Ut,Ao=new N,da=new N,Ro=new N,Tf=new At,pu=new At,Ef=new At,Ea=class extends ge{constructor(t=new Cs){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rr(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new er(n,3,0,!1)),fs.setAttribute("uv",new er(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Np.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Co(Ao.set(-.5,-.5,0),ms,a,ps,i,s),Co(da.set(.5,-.5,0),ms,a,ps,i,s),Co(Ro.set(.5,.5,0),ms,a,ps,i,s),Tf.set(0,0),pu.set(1,0),Ef.set(1,1);let o=t.ray.intersectTriangle(Ao,da,Ro,!1,ua);if(o===null&&(Co(da.set(-.5,.5,0),ms,a,ps,i,s),pu.set(0,1),o=t.ray.intersectTriangle(Ao,Ro,da,!1,ua),o===null))return;let l=t.ray.origin.distanceTo(ua);l<t.near||l>t.far||e.push({distance:l,point:ua.clone(),uv:Ci.getInterpolation(ua,Ao,da,Ro,Tf,pu,Ef,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Co(r,t,e,n,i,s){gs.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ha.x=s*gs.x-i*gs.y,ha.y=i*gs.x+s*gs.y):ha.copy(gs),r.copy(t),r.x+=ha.x,r.y+=ha.y,r.applyMatrix4(Np)}var Ai=new N,mu=new N,Po=new N,Io=new N,Cr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mu.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Io.copy(this.origin).sub(mu);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Po),o=Io.dot(this.direction),l=-Io.dot(Po),c=Io.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(mu).addScaledVector(Po,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,b=n.y-a.y,A=n.z-a.z,S=Math.abs(l),v=Math.abs(c),T=Math.abs(u),w,x,E,C,I,F,O,P,z,X,G,Q;if(S>=v&&S>=T?(E=l,F=h,z=g,Q=m,l>=0?(w=c,x=u,C=d,I=f,O=_,P=p,X=b,G=A):(w=u,x=c,C=f,I=d,O=p,P=_,X=A,G=b)):v>=T?(E=c,F=d,z=_,Q=b,c>=0?(w=u,x=l,C=f,I=h,O=p,P=g,X=A,G=m):(w=l,x=u,C=h,I=f,O=g,P=p,X=m,G=A)):(E=u,F=f,z=p,Q=A,u>=0?(w=l,x=c,C=h,I=d,O=g,P=_,X=m,G=b):(w=c,x=l,C=d,I=h,O=_,P=g,X=b,G=m)),E===0)return null;let Y=w/E,J=x/E,et=1/E,St=C-Y*F,Tt=I-J*F,Yt=O-Y*z,Ft=P-J*z,jt=X-Y*Q,Z=G-J*Q,tt=jt*Ft-Z*Yt,xt=St*Z-Tt*jt,Dt=Yt*Tt-Ft*St;if(i){if(tt<0||xt<0||Dt<0)return null}else if((tt<0||xt<0||Dt<0)&&(tt>0||xt>0||Dt>0))return null;let gt=tt+xt+Dt;if(gt===0)return null;let Ht=et*(tt*F+xt*z+Dt*Q);return(gt>0?Ht<0:Ht>0)?null:this.at(Ht/gt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wf=new Ut,br=new Cr,Lo=new gn,Af=new N,No=new N,Do=new N,Uo=new N,gu=new N,Fo=new N,Rf=new N,Oo=new N,xe=class extends ge{constructor(t=new Ue,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(gu.fromBufferAttribute(h,t),a?Fo.addScaledVector(gu,u):Fo.addScaledVector(gu.sub(e),u))}e.add(Fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),br.copy(t.ray).recast(t.near),!(Lo.containsPoint(br.origin)===!1&&(br.intersectSphere(Lo,Af)===null||br.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(wf.copy(s).invert(),br.copy(t.ray).applyMatrix4(wf),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,v=A;S<v;S+=3){let T=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);i=Bo(this,m,t,n,c,u,h,T,w,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);i=Bo(this,a,t,n,c,u,h,b,A,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,v=A;S<v;S+=3){let T=S,w=S+1,x=S+2;i=Bo(this,m,t,n,c,u,h,T,w,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=p,A=p+1,S=p+2;i=Bo(this,a,t,n,c,u,h,b,A,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function P0(r,t,e,n,i,s,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===pi,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:r}}function Bo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,No),r.getVertexPosition(l,Do),r.getVertexPosition(c,Uo);let u=P0(r,t,e,n,No,Do,Uo,Rf);if(u){let h=new N;Ci.getBarycoord(Rf,No,Do,Uo,h),i&&(u.uv=Ci.getInterpolatedAttribute(i,o,l,c,h,new At)),s&&(u.uv1=Ci.getInterpolatedAttribute(s,o,l,c,h,new At)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Ci.getNormal(No,Do,Uo,d.normal),u.face=d,u.barycoord=h}return u}var fa=new Kt,Cf=new Kt,Pf=new Kt,I0=new Kt,If=new Ut,zo=new N,_u=new gn,Lf=new Ut,xu=new Cr,wa=class extends xe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bu,this.bindMatrix=new Ut,this.bindMatrixInverse=new Ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,zo),this.boundingSphere.expandByPoint(zo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_u.copy(this.boundingSphere),_u.applyMatrix4(i),t.ray.intersectsSphere(_u)!==!1&&(Lf.copy(i).invert(),xu.copy(t.ray).applyMatrix4(Lf),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,xu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Kt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_p?this.bindMatrixInverse.copy(this.bindMatrix).invert():wt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Cf.fromBufferAttribute(i.attributes.skinIndex,t),Pf.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(fa.copy(e),e.set(0,0,0,0)):(fa.set(...e,1),e.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Pf.getComponent(s);if(a!==0){let o=Cf.getComponent(s);If.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(I0.copy(fa).applyMatrix4(If),a)}}return e.isVector4&&(e.w=fa.w),e.applyMatrix4(this.bindMatrixInverse)}},Ps=class extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}},Li=class extends Oe{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Re,u=Re,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nf=new Ut,L0=new Ut,Aa=class r{constructor(t=[],e=[]){this.uuid=ti(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){wt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ut)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ut;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:L0;Nf.multiplyMatrices(o,e[s]),Nf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Li(e,t,t,Je,In);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],a=e[s];a===void 0&&(wt("Skeleton: No bone found with UUID:",s),a=new Ps),this.bones.push(a),this.boneInverses.push(new Ut().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Ni=class extends me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new Ut,Df=new Ut,ko=[],Uf=new Cn,N0=new Ut,pa=new xe,ma=new gn,Ra=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,N0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Uf.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(Uf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),ma.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(ma)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),t.ray.intersectsSphere(ma)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_s),Df.multiplyMatrices(n,_s),pa.matrixWorld=Df,pa.raycast(t,ko);for(let a=0,o=ko.length;a<o;a++){let l=ko[a];l.instanceId=s,l.object=this,e.push(l)}ko.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Li(new Float32Array(i*this.count),i,this.count,Il,In));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mr=new gn,D0=new At(.5,.5),Ho=new N,Is=class{constructor(t=new Jn,e=new Jn,n=new Jn,i=new Jn,s=new Jn,a=new Jn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],b=s[12],A=s[13],S=s[14],v=s[15];if(i[0].setComponents(c-a,f-u,m-g,v-b).normalize(),i[1].setComponents(c+a,f+u,m+g,v+b).normalize(),i[2].setComponents(c+o,f+h,m+_,v+A).normalize(),i[3].setComponents(c-o,f-h,m-_,v-A).normalize(),n)i[4].setComponents(l,d,p,S).normalize(),i[5].setComponents(c-l,f-d,m-p,v-S).normalize();else if(i[4].setComponents(c-l,f-d,m-p,v-S).normalize(),e===Qn)i[5].setComponents(c+l,f+d,m+p,v+S).normalize();else if(e===Ts)i[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);let e=D0.distanceTo(t.center);return Mr.radius=.7071067811865476+e,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ho.x=i.normal.x>0?t.max.x:t.min.x,Ho.y=i.normal.y>0?t.max.y:t.min.y,Ho.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ol=new N,ll=new N,Ff=new Ut,ga=new Cr,Vo=new gn,yu=new N,Of=new N,Pr=class extends ge{constructor(t=new Ue,e=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ol.fromBufferAttribute(e,i-1),ll.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ol.distanceTo(ll);t.setAttribute("lineDistance",new an(n,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=s,t.ray.intersectsSphere(Vo)===!1)return;Ff.copy(i).invert(),ga.copy(t.ray).applyMatrix4(Ff);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=u.getX(_),b=u.getX(_+1),A=Go(this,t,ga,l,m,b,_);A&&e.push(A)}if(this.isLineLoop){let _=u.getX(g-1),p=u.getX(f),m=Go(this,t,ga,l,_,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=Go(this,t,ga,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=Go(this,t,ga,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Go(r,t,e,n,i,s,a){let o=r.geometry.attributes.position;if(ol.fromBufferAttribute(o,i),ll.fromBufferAttribute(o,s),e.distanceSqToSegment(ol,ll,yu,Of)>n)return;yu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(yu);if(!(c<t.near||c>t.far))return{distance:c,point:Of.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Bf=new N,zf=new N,Ca=class extends Pr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Bf.fromBufferAttribute(e,i),zf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bf.distanceTo(zf);t.setAttribute("lineDistance",new an(n,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ir=class extends Pr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ls=class extends cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kf=new Ut,Au=new Cr,Wo=new gn,Xo=new N,Lr=class extends ge{constructor(t=new Ue,e=new Ls){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=s,t.ray.intersectsSphere(Wo)===!1)return;kf.copy(i).invert(),Au.copy(t.ray).applyMatrix4(kf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let p=c.getX(g);Xo.fromBufferAttribute(h,p),Hf(Xo,p,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Xo.fromBufferAttribute(h,g),Hf(Xo,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Hf(r,t,e,n,i,s,a){let o=Au.distanceSqToPoint(r);if(o<e){let l=new N;Au.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Pa=class extends Oe{constructor(t=[],e=sr,n,i,s,a,o,l,c,u){super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ns=class extends Oe{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ir=class extends Oe{constructor(t,e,n=ri,i,s,a,o=Re,l=Re,c,u=ui,h=1){if(u!==ui&&u!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cl=class extends ir{constructor(t,e=ri,n=sr,i,s,a=Re,o=Re,l,c=ui){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ia=class extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ds=class r extends Ue{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function g(_,p,m,b,A,S,v,T,w,x,E){let C=S/w,I=v/x,F=S/2,O=v/2,P=T/2,z=w+1,X=x+1,G=0,Q=0,Y=new N;for(let J=0;J<X;J++){let et=J*I-O;for(let St=0;St<z;St++){let Tt=St*C-F;Y[_]=Tt*b,Y[p]=et*A,Y[m]=P,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(St/w),h.push(1-J/x),G+=1}}for(let J=0;J<x;J++)for(let et=0;et<w;et++){let St=d+et+z*J,Tt=d+et+z*(J+1),Yt=d+(et+1)+z*(J+1),Ft=d+(et+1)+z*J;l.push(St,Tt,Ft),l.push(Tt,Yt,Ft),Q+=6}o.addGroup(f,Q,E),f+=Q,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zn=class r extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let b=m*d-a;for(let A=0;A<c;A++){let S=A*h-s;g.push(S,-b,0),_.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let A=b+c*m,S=b+c*(m+1),v=b+1+c*(m+1),T=b+1+c*m;f.push(A,S,T),f.push(S,v,T)}this.setIndex(f),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Vr(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Vf(i))i.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Vf(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function je(r){let t={};for(let e=0;e<r.length;e++){let n=Vr(r[e]);for(let i in n)t[i]=n[i]}return t}function Vf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function U0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Qu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}var Dp={clone:Vr,merge:je},F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=U0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Mt().setHex(i.value);break;case"v2":this.uniforms[n].value=new At().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ut().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ul=class extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Di=class extends cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_n=class extends Di{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var hl=class extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qi(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ko(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function B0(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Gf(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i}function z0(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}var di=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends di{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eu:s=t,o=2*e-n;break;case wu:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eu:a=t,l=2*n-e;break;case wu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,S=f*p-f*_;for(let v=0;v!==o;++v)s[v]=m*a[u+v]+b*a[c+v]+A*a[l+v]+S*a[h+v];return s}},pl=class extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}},ml=class extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends di{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*d+g*2,b=h[m],A=h[m+1],S=t*d+g*2,v=u[S],T=u[S+1],w=H0(n,e,b,v,i);s[g]=Up(w,_,A,T,p)}return s}};function Up(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function k0(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function H0(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=Up(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=k0(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var xn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qi(e,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qi(t.times,Array),values:Qi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ko(t.settings)&&(n.settings={inTangents:Qi(t.settings.inTangents,Array),outTangents:Qi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case wr:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break;case Mu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ko(this.settings)&&(Wf(this.settings.inTangents,t),Wf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Jg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zo,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=e[h+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ko(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Wf(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=wr;var Ui=class extends xn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Er;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};La.prototype.ValueTypeName="color";var Fi=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};Fi.prototype.ValueTypeName="number";var _l=class extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let u=c+o;c!==u;c+=4)ln.slerpFlat(s,0,a,c-o,a,c,l);return s}},Oi=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Oi.prototype.ValueTypeName="quaternion";Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends xn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Er;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends xn{constructor(t,e,n,i){super(t,e,n,i)}};rr.prototype.ValueTypeName="vector";var Na=class{constructor(t="",e=-1,n=[],i=xp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(G0(n[a]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=n.length;s!==a;++s)e.push(xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=B0(l);l=Gf(l,1,u),c=Gf(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Fi(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function V0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return La;case"quaternion":return Oi;case"bool":case"boolean":return Ui;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function G0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=V0(r.type);if(r.times===void 0){let n=[],i=[];z0(r.keys,n,i,"value"),r.times=n,r.values=i}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),Ko(r.settings)&&(e.settings={inTangents:Qi(r.settings.inTangents,Float32Array),outTangents:Qi(r.settings.outTangents,Float32Array)}),e}var ci={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(Xf(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!Xf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Xf(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var xl=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fp=new xl,fi=class{constructor(t){this.manager=t!==void 0?t:Fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},Ru=class extends Error{constructor(t,e){super(t),this.response=e}},Us=class extends fi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=ci.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(Ri[t]!==void 0){Ri[t].push({onLoad:e,onProgress:n,onError:i});return}Ri[t]=[],Ri[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&wt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ri[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){b();function b(){h.read().then(({done:A,value:S})=>{if(A)m.close();else{_+=S.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,w=u.length;T<w;T++){let x=u[T];x.onProgress&&x.onProgress(v)}m.enqueue(S),b()}},A=>{m.error(A)})}}});return new Response(p)}else throw new Ru(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ci.add(`file:${t}`,c);let u=Ri[t];delete Ri[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ri[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ri[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xs=new WeakMap,yl=class extends fi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=ci.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let h=xs.get(a);h===void 0&&(h=[],xs.set(a,h)),h.push({onLoad:e,onError:i})}return a}let o=Es("img");function l(){u(),e&&e(this);let h=xs.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}xs.delete(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),ci.remove(`image:${t}`);let d=xs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}xs.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ci.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}};var Nr=class extends fi{constructor(t){super(t)}load(t,e,n,i){let s=new Oe,a=new yl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Dr=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Fs=class extends Dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vu=new Ut,Yf=new N,qf=new N,Os=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yf),qf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vu,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===Ts||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(vu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yo=new N,qo=new ln,li=new N,Da=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yo,qo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,qo,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Yo,qo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,qo,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new N,Zf=new At,$f=new At,De=class extends Da{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Zf,$f),e.subVectors($f,Zf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_a*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Cu=class extends Os{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ar*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Ua=class extends Dr{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Cu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Pu=class extends Os{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0}},Ur=class extends Dr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},kn=class extends Da{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Iu=class extends Os{constructor(){super(new kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ni=class extends Dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Iu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zi=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Su=new WeakMap,Fa=class extends fi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&wt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&wt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=ci.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{Su.has(a)===!0?(i&&i(Su.get(a)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(c),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Su.set(l,c),ci.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});ci.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ys=-90,vs=1,vl=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new De(ys,vs,t,e);i.layers=this.layers,this.add(i);let s=new De(ys,vs,t,e);s.layers=this.layers,this.add(s);let a=new De(ys,vs,t,e);a.layers=this.layers,this.add(a);let o=new De(ys,vs,t,e);o.layers=this.layers,this.add(o);let l=new De(ys,vs,t,e);l.layers=this.layers,this.add(l);let c=new De(ys,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sl=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Oa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=W0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function W0(){this._document.hidden===!1&&this.reset()}var th="\\[\\]\\.:\\/",X0=new RegExp("["+th+"]","g"),eh="[^"+th+"]",Y0="[^"+th.replace("\\.","")+"]",q0=/((?:WC+[\/:])*)/.source.replace("WC",eh),Z0=/(WCOD+)?/.source.replace("WCOD",Y0),$0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),J0=new RegExp("^"+q0+Z0+$0+K0+"$"),j0=["material","materials","bones","map"],Lu=class{constructor(t,e,n){let i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(t){let e=J0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);j0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Lu;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g1=new Float32Array(1);var oh=class oh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};oh.prototype.isMatrix2=!0;var Nu=oh;function nh(r,t,e,n){let i=Q0(n);switch(e){case qu:return r*t;case Il:return r*t/i.components*i.byteLength;case Ll:return r*t/i.components*i.byteLength;case or:return r*t*2/i.components*i.byteLength;case Nl:return r*t*2/i.components*i.byteLength;case Zu:return r*t*3/i.components*i.byteLength;case Je:return r*t*4/i.components*i.byteLength;case Dl:return r*t*4/i.components*i.byteLength;case Ga:case Wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Bl:return Math.max(r,16)*Math.max(t,8)/4;case Ul:case Ol:return Math.max(r,8)*Math.max(t,8)/2;case zl:case kl:case Vl:case Gl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hl:case qa:case Wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case sc:case ac:case oc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Za:case uc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Q0(r){switch(r){case vn:case Gu:return{byteLength:1,components:1};case Hs:case Wu:case si:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case ri:case Rl:case In:return{byteLength:4,components:1};case Xu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rm(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function e_(r){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var n_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i_=`#ifdef USE_ALPHAHASH
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
#endif`,r_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
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
#endif`,c_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_=`#ifdef USE_BATCHING
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
#endif`,h_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m_=`#ifdef USE_IRIDESCENCE
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
#endif`,g_=`#ifdef USE_BUMPMAP
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
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,M_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,E_=`#define PI 3.141592653589793
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
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G_=`#ifdef USE_GRADIENTMAP
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
}`,W_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z_=`#ifdef USE_ENVMAP
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
#endif`,$_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q_=`PhysicalMaterial material;
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
#endif`,tx=`uniform sampler2D dfgLUT;
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
}`,ex=`
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
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
#endif`,yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,cy=`#if DEPTH_PACKING == 3200
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
}`,uy=`#define DISTANCE
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
}`,hy=`#define DISTANCE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,_y=`uniform vec3 diffuse;
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
}`,xy=`#define LAMBERT
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
}`,yy=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,Sy=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Ty=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Ny=`uniform vec3 color;
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
}`,Dy=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:n_,alphahash_pars_fragment:i_,alphamap_fragment:r_,alphamap_pars_fragment:s_,alphatest_fragment:a_,alphatest_pars_fragment:o_,aomap_fragment:l_,aomap_pars_fragment:c_,batching_pars_vertex:u_,batching_vertex:h_,begin_vertex:d_,beginnormal_vertex:f_,bsdfs:p_,iridescence_fragment:m_,bumpmap_pars_fragment:g_,clipping_planes_fragment:__,clipping_planes_pars_fragment:x_,clipping_planes_pars_vertex:y_,clipping_planes_vertex:v_,color_fragment:S_,color_pars_fragment:b_,color_pars_vertex:M_,color_vertex:T_,common:E_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:A_,displacementmap_pars_vertex:R_,displacementmap_vertex:C_,emissivemap_fragment:P_,emissivemap_pars_fragment:I_,colorspace_fragment:L_,colorspace_pars_fragment:N_,envmap_fragment:D_,envmap_common_pars_fragment:U_,envmap_pars_fragment:F_,envmap_pars_vertex:O_,envmap_physical_pars_fragment:Z_,envmap_vertex:B_,fog_vertex:z_,fog_pars_vertex:k_,fog_fragment:H_,fog_pars_fragment:V_,gradientmap_pars_fragment:G_,lightmap_pars_fragment:W_,lights_lambert_fragment:X_,lights_lambert_pars_fragment:Y_,lights_pars_begin:q_,lights_toon_fragment:$_,lights_toon_pars_fragment:K_,lights_phong_fragment:J_,lights_phong_pars_fragment:j_,lights_physical_fragment:Q_,lights_physical_pars_fragment:tx,lights_fragment_begin:ex,lights_fragment_maps:nx,lights_fragment_end:ix,lightprobes_pars_fragment:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:lx,map_fragment:cx,map_pars_fragment:ux,map_particle_fragment:hx,map_particle_pars_fragment:dx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:_x,morphtarget_pars_vertex:xx,morphtarget_vertex:yx,normal_fragment_begin:vx,normal_fragment_maps:Sx,normal_pars_fragment:bx,normal_pars_vertex:Mx,normal_vertex:Tx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Cx,opaque_fragment:Px,packing:Ix,premultiplied_alpha_fragment:Lx,project_vertex:Nx,dithering_fragment:Dx,dithering_pars_fragment:Ux,roughnessmap_fragment:Fx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:zx,shadowmap_vertex:kx,shadowmask_pars_fragment:Hx,skinbase_vertex:Vx,skinning_pars_vertex:Gx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:Zx,tonemapping_pars_fragment:$x,transmission_fragment:Kx,transmission_pars_fragment:Jx,uv_pars_fragment:jx,uv_pars_vertex:Qx,uv_vertex:ty,worldpos_vertex:ey,background_vert:ny,background_frag:iy,backgroundCube_vert:ry,backgroundCube_frag:sy,cube_vert:ay,cube_frag:oy,depth_vert:ly,depth_frag:cy,distance_vert:uy,distance_frag:hy,equirect_vert:dy,equirect_frag:fy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:_y,meshlambert_vert:xy,meshlambert_frag:yy,meshmatcap_vert:vy,meshmatcap_frag:Sy,meshnormal_vert:by,meshnormal_frag:My,meshphong_vert:Ty,meshphong_frag:Ey,meshphysical_vert:wy,meshphysical_frag:Ay,meshtoon_vert:Ry,meshtoon_frag:Cy,points_vert:Py,points_frag:Iy,shadow_vert:Ly,shadow_frag:Ny,sprite_vert:Dy,sprite_frag:Uy},ht={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},_i={basic:{uniforms:je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:je([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:je([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:je([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:je([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:je([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:je([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:je([ht.common,ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:je([ht.lights,ht.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};_i.physical={uniforms:je([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var pc={r:0,b:0,g:0},Fy=new Ut,sm=new Nt;sm.set(-1,0,0,0,1,0,0,0,1);function Oy(r,t,e,n,i,s){let a=new Mt(0),o=i===!0?0:1,l,c,u=null,h=0,d=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let S=b.backgroundBlurriness>0;A=t.get(A,S)}return A}function g(b){let A=!1,S=f(b);S===null?p(a,o):S&&S.isColor&&(p(S,1),A=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,A){let S=f(A);S&&(S.isCubeTexture||S.mapping===Va)?(c===void 0&&(c=new xe(new Ds(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Vr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sm),c.material.toneMapped=kt.getTransfer(S.colorSpace)!==ee,(u!==S||h!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new xe(new zn(2,2),new Be({name:"BackgroundMaterial",uniforms:Vr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=kt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,A){b.getRGB(pc,Qu(r)),e.buffers.color.setClear(pc.r,pc.g,pc.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:_,dispose:m}}function By(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(I,F,O,P,z){let X=!1,G=h(I,P,O,F);s!==G&&(s=G,c(s.object)),X=f(I,P,O,z),X&&g(I,P,O,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(I,F,O,P),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function u(I){return r.deleteVertexArray(I)}function h(I,F,O,P){let z=P.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let G=I.isInstancedMesh===!0?I.id:0,Q=X[G];Q===void 0&&(Q={},X[G]=Q);let Y=Q[O.id];Y===void 0&&(Y={},Q[O.id]=Y);let J=Y[z];return J===void 0&&(J=d(l()),Y[z]=J),J}function d(I){let F=[],O=[],P=[];for(let z=0;z<e;z++)F[z]=0,O[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,F,O,P){let z=s.attributes,X=F.attributes,G=0,Q=O.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let et=z[Y],St=X[Y];if(St===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(St=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(St=I.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function g(I,F,O,P){let z={},X=F.attributes,G=0,Q=O.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let et=X[Y];et===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let St={};St.attribute=et,et&&et.data&&(St.data=et.data),z[Y]=St,G++}s.attributes=z,s.attributesNum=G,s.index=P}function _(){let I=s.newAttributes;for(let F=0,O=I.length;F<O;F++)I[F]=0}function p(I){m(I,0)}function m(I,F){let O=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;O[I]=1,P[I]===0&&(r.enableVertexAttribArray(I),P[I]=1),z[I]!==F&&(r.vertexAttribDivisor(I,F),z[I]=F)}function b(){let I=s.newAttributes,F=s.enabledAttributes;for(let O=0,P=F.length;O<P;O++)F[O]!==I[O]&&(r.disableVertexAttribArray(O),F[O]=0)}function A(I,F,O,P,z,X,G){G===!0?r.vertexAttribIPointer(I,F,O,z,X):r.vertexAttribPointer(I,F,O,P,z,X)}function S(I,F,O,P){_();let z=P.attributes,X=O.getAttributes(),G=F.defaultAttributeValues;for(let Q in X){let Y=X[Q];if(Y.location>=0){let J=z[Q];if(J===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let et=J.normalized,St=J.itemSize,Tt=t.get(J);if(Tt===void 0)continue;let Yt=Tt.buffer,Ft=Tt.type,jt=Tt.bytesPerElement,Z=Ft===r.INT||Ft===r.UNSIGNED_INT||J.gpuType===Rl;if(J.isInterleavedBufferAttribute){let tt=J.data,xt=tt.stride,Dt=J.offset;if(tt.isInstancedInterleavedBuffer){for(let gt=0;gt<Y.locationSize;gt++)m(Y.location+gt,tt.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<Y.locationSize;gt++)p(Y.location+gt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let gt=0;gt<Y.locationSize;gt++)A(Y.location+gt,St/Y.locationSize,Ft,et,xt*jt,(Dt+St/Y.locationSize*gt)*jt,Z)}else{if(J.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt,J.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let tt=0;tt<Y.locationSize;tt++)A(Y.location+tt,St/Y.locationSize,Ft,et,St*jt,St/Y.locationSize*tt*jt,Z)}}else if(G!==void 0){let et=G[Q];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(Y.location,et);break;case 3:r.vertexAttrib3fv(Y.location,et);break;case 4:r.vertexAttrib4fv(Y.location,et);break;default:r.vertexAttrib1fv(Y.location,et)}}}}b()}function v(){E();for(let I in n){let F=n[I];for(let O in F){let P=F[O];for(let z in P){let X=P[z];for(let G in X)u(X[G].object),delete X[G];delete P[z]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let O in F){let P=F[O];for(let z in P){let X=P[z];for(let G in X)u(X[G].object),delete X[G];delete P[z]}}delete n[I.id]}function w(I){for(let F in n){let O=n[F];for(let P in O){let z=O[P];if(z[I.id]===void 0)continue;let X=z[I.id];for(let G in X)u(X[G].object),delete X[G];delete z[I.id]}}}function x(I){for(let F in n){let O=n[F],P=I.isInstancedMesh===!0?I.id:0,z=O[P];if(z!==void 0){for(let X in z){let G=z[X];for(let Q in G)u(G[Q].object),delete G[Q];delete z[X]}delete O[P],Object.keys(O).length===0&&delete n[F]}}}function E(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function zy(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ky(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Je&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==vn&&w!==In&&!x&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(wt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:S,maxSamples:v,samples:T}}function Hy(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Jn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let b=s?0:n,A=b*4,S=m.clippingState||null;l.value=S,S=u(g,d,A,f);for(let v=0;v!==A;++v)S[v]=e[v];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,S=f;A!==_;++A,S+=4)a.copy(h[A]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Xs=4,Vy=6,Gy=20,Wy=256,Ka=new kn,Op=new Mt,lh=null,ch=0,uh=0,hh=!1,Xy=new N,Gr=new N,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=Xy}=s;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=hh,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:si,format:Je,colorSpace:on,depthBuffer:!1},i=Bp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yy(s)),this._blurMaterial=Zy(s,t,e),this._ggxMaterial=qy(s,t,e)}return i}_compileMaterial(t){let e=new xe(new Ue,t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,i,s){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Op),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Ds,new Pn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,m=!0):(p.color.copy(Op),m=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):S===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));let v=this._cubeSize;Ws(i,S*v,A>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,l),h.render(t,l)}h.toneMapping=f,h.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===sr||t.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Xs?n-g+Xs:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ws(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,Ka),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ws(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,Ka)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],h=3*u*(i>this._lodMax-Xs?i-this._lodMax+Xs:0),d=4*(this._cubeSize-u);Ws(e,h,d,3*u,2*u),a.setRenderTarget(e),a.render(l,Ka)}};function Yy(r){let t=[],e=[],n=r,i=r-Xs+1+Vy;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,g=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let m=0;m<h;m++){let b=m%3*2/3-1,A=m>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];g.set(S,f*d*m);for(let v=0;v<d;v++){let T=u[v*2]*2-1,w=u[v*2+1]*2-1;m===0?Gr.set(1,w,T):m===1?Gr.set(-T,1,-w):m===2?Gr.set(-T,w,1):m===3?Gr.set(-1,w,-T):m===4?Gr.set(-T,-1,w):Gr.set(T,w,-1),Gr.toArray(_,(m*d+v)*f)}}let p=new Ue;p.setAttribute("position",new me(g,f)),p.setAttribute("outputDirection",new me(_,f)),e.push(new xe(p,null)),n>Xs&&n--}return{lodMeshes:e,sizeLods:t}}function Bp(r,t,e){let n=new mn(r,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function qy(r,t,e){return new Be({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Zy(r,t,e){return new Be({name:"SphericalGaussianBlur",defines:{SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function zp(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function kp(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _c=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ds(5,5,5),s=new Be({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:mi});s.uniforms.tEquirect.value=e;let a=new xe(i,s),o=e.minFilter;return e.minFilter===yn&&(e.minFilter=fe),new vl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function $y(r){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===El||f===wl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new _c(g.height);return _.fromEquirectangularTexture(r,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===El||f===wl,_=f===sr||f===kr;if(g||_){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new gc(r)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let b=d.image;return g&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new gc(r)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===El?d.mapping=sr:f===wl&&(d.mapping=kr),d}function l(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Ky(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Tr("WebGLRenderer: "+n+" extension not supported."),i}}}function Jy(r,t,e,n){let i={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let A=0,S=b.length;A<S;A+=3){let v=b[A+0],T=b[A+1],w=b[A+2];d.push(v,T,T,w,w,v)}}else{let b=g.array;_=g.version;for(let A=0,S=b.length/3-1;A<S;A+=3){let v=A+0,T=A+1,w=A+2;d.push(v,T,T,w,w,v)}}let p=new(g.count>=65535?Ta:Ma)(d,1);p.version=_;let m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function jy(r,t,e){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),e.update(d,n,1)}function c(h,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,h*a,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Qy(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tv(r,t,e){let n=new WeakMap,i=new Kt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let S=o.attributes.position.count*A,v=1;S>t.maxTextureSize&&(v=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*v*4*h),w=new Sa(T,S,v,h);w.type=In,w.needsUpdate=!0;let x=A*4;for(let C=0;C<h;C++){let I=p[C],F=m[C],O=b[C],P=S*v*4*C;for(let z=0;z<I.count;z++){let X=z*x;f===!0&&(i.fromBufferAttribute(I,z),T[P+X+0]=i.x,T[P+X+1]=i.y,T[P+X+2]=i.z,T[P+X+3]=0),g===!0&&(i.fromBufferAttribute(F,z),T[P+X+4]=i.x,T[P+X+5]=i.y,T[P+X+6]=i.z,T[P+X+7]=0),_===!0&&(i.fromBufferAttribute(O,z),T[P+X+8]=i.x,T[P+X+9]=i.y,T[P+X+10]=i.z,T[P+X+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new At(S,v)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ev(r,t,e,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var nv={[za]:"LINEAR_TONE_MAPPING",[ka]:"REINHARD_TONE_MAPPING",[zu]:"CINEON_TONE_MAPPING",[zr]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Ha]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function iv(r,t,e,n,i,s){let a=new mn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ue;c.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new an([0,2,0,0,2,0],2));let u=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new xe(c,u),d=new kn(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,b=[],A=!1;this.setSize=function(S,v){a.setSize(S,v),o!==null&&o.setSize(S,v),l!==null&&l.setSize(S,v);for(let T=0;T<b.length;T++){let w=b[T];w.setSize&&w.setSize(S,v)}},this.setEffects=function(S){b=S,A=b.length>0&&b[0].isRenderPass===!0;let v=a.width,T=a.height;b.length>0&&o===null&&(o=new mn(v,T,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new mn(v,T,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){let x=b[w];x.setSize&&x.setSize(v,T)}},this.begin=function(S,v){if(_||S.toneMapping===ii&&b.length===0)return!1;if(m=v,v!==null){let T=v.width,w=v.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return A===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=ii,!0},this.hasRenderPass=function(){return A},this.end=function(S,v){S.toneMapping=p,_=!0;let T=a,w=o;for(let x=0;x<b.length;x++){let E=b[x];E.enabled!==!1&&(E.render(S,w,T,v),E.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(f!==S.outputColorSpace||g!==S.toneMapping){f=S.outputColorSpace,g=S.toneMapping,u.defines={},kt.getTransfer(f)===ee&&(u.defines.SRGB_TRANSFER="");let x=nv[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(h,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var am=new Oe,ph=new ir(1,1),om=new Sa,lm=new al,cm=new Pa,Hp=[],Vp=[],Gp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function Zs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Hp[i];if(s===void 0&&(s=new Float32Array(i),Hp[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function yc(r,t){let e=Vp[t];e===void 0&&(e=new Int32Array(t),Vp[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function rv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function sv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),ke(e,t)}}function av(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),ke(e,t)}}function ov(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),ke(e,t)}}function lv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Xp.set(n),r.uniformMatrix2fv(this.addr,!1,Xp),ke(e,n)}}function cv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Wp.set(n),r.uniformMatrix3fv(this.addr,!1,Wp),ke(e,n)}}function uv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Gp.set(n),r.uniformMatrix4fv(this.addr,!1,Gp),ke(e,n)}}function hv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function dv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),ke(e,t)}}function fv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),ke(e,t)}}function pv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),ke(e,t)}}function mv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function gv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),ke(e,t)}}function _v(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),ke(e,t)}}function xv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),ke(e,t)}}function yv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ph.compareFunction=e.isReversedDepthBuffer()?fc:dc,s=ph):s=am,e.setTexture2D(t||s,i)}function vv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lm,i)}function Sv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cm,i)}function bv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||om,i)}function Mv(r){switch(r){case 5126:return rv;case 35664:return sv;case 35665:return av;case 35666:return ov;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return bv}}function Tv(r,t){r.uniform1fv(this.addr,t)}function Ev(r,t){let e=Zs(t,this.size,2);r.uniform2fv(this.addr,e)}function wv(r,t){let e=Zs(t,this.size,3);r.uniform3fv(this.addr,e)}function Av(r,t){let e=Zs(t,this.size,4);r.uniform4fv(this.addr,e)}function Rv(r,t){let e=Zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Cv(r,t){let e=Zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Pv(r,t){let e=Zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Iv(r,t){r.uniform1iv(this.addr,t)}function Lv(r,t){r.uniform2iv(this.addr,t)}function Nv(r,t){r.uniform3iv(this.addr,t)}function Dv(r,t){r.uniform4iv(this.addr,t)}function Uv(r,t){r.uniform1uiv(this.addr,t)}function Fv(r,t){r.uniform2uiv(this.addr,t)}function Ov(r,t){r.uniform3uiv(this.addr,t)}function Bv(r,t){r.uniform4uiv(this.addr,t)}function zv(r,t,e){let n=this.cache,i=t.length,s=yc(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ph:a=am;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function kv(r,t,e){let n=this.cache,i=t.length,s=yc(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||lm,s[a])}function Hv(r,t,e){let n=this.cache,i=t.length,s=yc(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||cm,s[a])}function Vv(r,t,e){let n=this.cache,i=t.length,s=yc(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||om,s[a])}function Gv(r){switch(r){case 5126:return Tv;case 35664:return Ev;case 35665:return wv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Iv;case 35667:case 35671:return Lv;case 35668:case 35672:return Nv;case 35669:case 35673:return Dv;case 5125:return Uv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Vv}}var mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gv(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function Yp(r,t){r.seq.push(t),r.map[t.id]=t}function Wv(r,t,e){let n=r.name,i=n.length;for(dh.lastIndex=0;;){let s=dh.exec(n),a=dh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Yp(e,c===void 0?new mh(o,r,t):new gh(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new _h(o),Yp(e,h)),e=h}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wv(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function qp(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Xv=37297,Yv=0;function qv(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Zp=new Nt;function Zv(r){kt._getMatrix(Zp,kt.workingColorSpace,r);let t=`mat3( ${Zp.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(r)){case ya:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $p(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+qv(r.getShaderSource(t),o)}else return s}function $v(r,t){let e=Zv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Kv={[za]:"Linear",[ka]:"Reinhard",[zu]:"Cineon",[zr]:"ACESFilmic",[Hu]:"AgX",[Ha]:"Neutral",[ku]:"Custom"};function Jv(r,t){let e=Kv[t];return e===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new N;function jv(){kt.getLuminanceCoefficients(mc);let r=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function tS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eS(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ja(r){return r!==""}function Kp(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nS=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(r){return r.replace(nS,rS)}var iS=new Map;function rS(r,t){let e=zt[t];if(e===void 0){let n=iS.get(t);if(n!==void 0)e=zt[n],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xh(e)}var sS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(r){return r.replace(sS,aS)}function aS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qp(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var oS={[Fr]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function lS(r){return oS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cS={[sr]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function uS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":cS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var hS={[kr]:"ENVMAP_MODE_REFRACTION"};function dS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":hS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fS={[Bu]:"ENVMAP_BLENDING_MULTIPLY",[mp]:"ENVMAP_BLENDING_MIX",[gp]:"ENVMAP_BLENDING_ADD"};function pS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":fS[r.combine]||"ENVMAP_BLENDING_NONE"}function mS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gS(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lS(e),c=uS(e),u=dS(e),h=pS(e),d=mS(e),f=Qv(e),g=tS(s),_=i.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`)):(p=[Qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),m=[Qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?zt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,$v("linearToOutputTexel",e.outputColorSpace),jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ja).join(`
`)),a=xh(a),a=Kp(a,e),a=Jp(a,e),o=xh(o),o=Kp(o,e),o=Jp(o,e),a=jp(a),o=jp(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=b+p+a,S=b+m+o,v=qp(i,i.VERTEX_SHADER,A),T=qp(i,i.FRAGMENT_SHADER,S);i.attachShader(_,v),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(v)||"",P=i.getShaderInfoLog(T)||"",z=F.trim(),X=O.trim(),G=P.trim(),Q=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,v,T);else{let J=$p(i,v,"vertex"),et=$p(i,T,"fragment");Lt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+J+`
`+et)}else z!==""?wt("WebGLProgram: Program Info Log:",z):(X===""||G==="")&&(Y=!1);Y&&(I.diagnostics={runnable:Q,programLog:z,vertexShader:{log:X,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(v),i.deleteShader(T),x=new Ys(i,_),E=eS(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,Xv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=T,this}var _S=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vh(t),e.set(t,n)),n}},vh=class{constructor(t){this.id=_S++,this.code=t,this.usedTimes=0}};function xS(r){return r===or||r===qa||r===Za}function yS(r,t,e,n,i,s){let a=new ba,o=new yh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,C,I,F,O){let P=I.fog,z=F.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=t.get(x.envMap||X,G),Y=Q&&Q.mapping===Va?Q.image.height:null,J=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&wt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,St=et!==void 0?et.length:0,Tt=0;z.morphAttributes.position!==void 0&&(Tt=1),z.morphAttributes.normal!==void 0&&(Tt=2),z.morphAttributes.color!==void 0&&(Tt=3);let Yt,Ft,jt,Z;if(J){let he=_i[J];Yt=he.vertexShader,Ft=he.fragmentShader}else{Yt=x.vertexShader,Ft=x.fragmentShader;let he=o.getVertexShaderStage(x),Qt=o.getFragmentShaderStage(x);o.update(x,he,Qt),jt=he.id,Z=Qt.id}let tt=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,Ht=!!x.map,Fe=!!x.matcap,Gt=!!Q,Jt=!!x.aoMap,ue=!!x.lightMap,qt=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,Ve=!!x.displacementMap,fn=!!x.emissiveMap,ve=!!x.metalnessMap,Ie=!!x.roughnessMap,U=x.anisotropy>0,qe=x.clearcoat>0,ne=x.dispersion>0,R=x.retroreflectivity>0,y=x.iridescence>0,B=x.sheen>0,V=x.transmission>0,q=U&&!!x.anisotropyMap,rt=qe&&!!x.clearcoatMap,st=qe&&!!x.clearcoatNormalMap,$=qe&&!!x.clearcoatRoughnessMap,j=y&&!!x.iridescenceMap,at=y&&!!x.iridescenceThicknessMap,Rt=B&&!!x.sheenColorMap,ut=B&&!!x.sheenRoughnessMap,ot=!!x.specularMap,Ct=!!x.specularColorMap,It=!!x.specularIntensityMap,Ot=V&&!!x.transmissionMap,D=V&&!!x.thicknessMap,lt=!!x.gradientMap,K=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,nt=!!x.extensions,Pt=ii;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Pt=r.toneMapping);let bt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Yt,fragmentShader:Ft,defines:x.defines,customVertexShaderID:jt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:Fe,envMap:Gt,envMapMode:Gt&&Q.mapping,envMapCubeUVHeight:Y,aoMap:Jt,lightMap:ue,bumpMap:qt,normalMap:_e,displacementMap:Ve,emissiveMap:fn,normalMapObjectSpace:_e&&x.normalMapType===vp,normalMapTangentSpace:_e&&x.normalMapType===hc,packedNormalMap:_e&&x.normalMapType===hc&&xS(x.normalMap.format),metalnessMap:ve,roughnessMap:Ie,anisotropy:U,anisotropyMap:q,clearcoat:qe,clearcoatMap:rt,clearcoatNormalMap:st,clearcoatRoughnessMap:$,dispersion:ne,retroreflection:R,iridescence:y,iridescenceMap:j,iridescenceThicknessMap:at,sheen:B,sheenColorMap:Rt,sheenRoughnessMap:ut,specularMap:ot,specularColorMap:Ct,specularIntensityMap:It,transmission:V,transmissionMap:Ot,thicknessMap:D,gradientMap:lt,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:Ht&&g(x.map.channel),aoMapUv:Jt&&g(x.aoMap.channel),lightMapUv:ue&&g(x.lightMap.channel),bumpMapUv:qt&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:Ve&&g(x.displacementMap.channel),emissiveMapUv:fn&&g(x.emissiveMap.channel),metalnessMapUv:ve&&g(x.metalnessMap.channel),roughnessMapUv:Ie&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:rt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(x.sheenRoughnessMap.channel),specularMapUv:ot&&g(x.specularMap.channel),specularColorMapUv:Ct&&g(x.specularColorMap.channel),specularIntensityMapUv:It&&g(x.specularIntensityMap.channel),transmissionMapUv:Ot&&g(x.transmissionMap.channel),thicknessMapUv:D&&g(x.thicknessMap.channel),alphaMapUv:K&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(_e||U),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Ht||K),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Tt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&kt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:fn&&x.emissiveMap.isVideoTexture===!0&&kt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(E,x),b(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let E=f[x.type],C;if(E){let I=_i[E];C=Dp.clone(I.uniforms)}else C=x.uniforms;return C}function S(x,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new gS(r,E,x,i),c.push(C),u.set(E,C)),C}function v(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:w}}function vS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function SS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function tm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function em(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,p,m){let b=r[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},r[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=g,b.materialVariant=a(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=p,b.group=m),t++,b}function l(d,f,g,_,p,m,b){b.reversedDepth===!0&&(p=-p);let A=o(d,f,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function c(d,f,g,_,p,m){let b=o(d,f,g,_,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function u(d,f){e.length>1&&e.sort(d||SS),n.length>1&&n.sort(f||tm),i.length>1&&i.sort(f||tm)}function h(){for(let d=t,f=r.length;d<f;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function bS(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new em,r.set(n,[a])):i>=s.length?(a=new em,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function MS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Mt};break;case"SpotLight":e={position:new N,direction:new N,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function TS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var ES=0;function wS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function AS(r){let t=new MS,e=TS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,s=new Ut,a=new Ut;function o(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,A=0,S=0,v=0,T=0,w=0,x=0,E=0,C=0;c.sort(wS);for(let F=0,O=c.length;F<O;F++){let P=c[F],z=P.color,X=P.intensity,G=P.distance,Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===or?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*X,h+=z.g*X,d+=z.b*X;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],X);C++}else if(P.isSunLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=Q;let St=J.getViewportCount();for(let Tt=0;Tt<St;Tt++)n.sunShadowMatrix[_+Tt]=J.getMatrix(Tt),n.sunShadowCascade[_+Tt]=J._cascadeData[Tt];_+=St,g++}n.sun[f]=Y,f++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=Y,p++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(z).multiplyScalar(X),Y.distance=G,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[b]=Y;let J=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[b]=J.matrix,P.castShadow){let et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.spotShadow[b]=et,n.spotShadowMap[b]=Q,w++}b++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(z).multiplyScalar(X),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=Y,A++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=Y,m++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(X),Y.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[S]=Y,S++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==A||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==v||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==x||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=A,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=b,I.rectAreaLength=A,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=v,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=x,I.numLightProbes=C,n.version=ES++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0,p=0,m=u.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let S=c[b];if(S.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),h++}else if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function nm(r){let t=new AS(r),e=[],n=[],i=[];function s(d){h.camera=d,e.length=0,n.length=0,i.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function RS(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new nm(r),t.set(i,[o])):s>=a.length?(o=new nm(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var CS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PS=`uniform sampler2D shadow_pass;
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
}`,IS=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],LS=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],im=new Ut,Ja=new N,fh=new N;function NS(r,t,e){let n=new Is,i=new At,s=new At,a=new Kt,o=new hl,l=new dl,c={},u=e.maxTextureSize,h={[pi]:un,[un]:pi,[Hn]:Hn},d=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:CS,fragmentShader:PS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let m=this.type;this.render=function(T,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===jf&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fr);let E=r.getRenderTarget(),C=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(mi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=m!==this.type;O&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=T.length;P<z;P++){let X=T[P],G=X.shadow;if(G===void 0){wt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let Q=G.getFrameExtents();i.multiply(Q),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,G.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Bs){if(X.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new mn(i.x,i.y,{format:or,type:si,minFilter:fe,magFilter:fe,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new ir(i.x,i.y,In),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=ui,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Re,G.map.depthTexture.magFilter=Re}else X.isPointLight?(G.map=new _c(i.x),G.map.depthTexture=new cl(i.x,ri)):(G.map=new mn(i.x,i.y),G.map.depthTexture=new ir(i.x,i.y,ri)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=ui,this.type===Fr?(G.map.depthTexture.compareFunction=Y?fc:dc,G.map.depthTexture.minFilter=fe,G.map.depthTexture.magFilter=fe):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Re,G.map.depthTexture.magFilter=Re);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,x);for(let et=0;et<J;et++){let St=G.getCamera(et);if(X.isPointLight){let Tt=G.camera,Yt=G.matrix,Ft=X.distance||Tt.far;Ft!==Tt.far&&(Tt.far=Ft,Tt.updateProjectionMatrix()),Ja.setFromMatrixPosition(X.matrixWorld),Tt.position.copy(Ja),fh.copy(Tt.position),fh.add(IS[et]),Tt.up.copy(LS[et]),Tt.lookAt(fh),Tt.updateMatrixWorld(),Yt.makeTranslation(-Ja.x,-Ja.y,-Ja.z),im.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(im,Tt.coordinateSystem,Tt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,et),r.clear();else{et===0&&(r.setRenderTarget(G.map),r.clear());let Tt=G.getViewport(et);a.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),F.viewport(a)}n=G.getFrustum(et),S(w,x,St,X,this.type)}G.isPointLightShadow!==!0&&this.type===Bs&&b(G,x),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(E,C,I)};function b(T,w){let x=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new mn(i.x,i.y,{format:or,type:si}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,x,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,x,f,_,null)}function A(T,w,x,E){let C=null,I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=C.uuid,O=w.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let z=P[O];z===void 0&&(z=C.clone(),P[O]=z,w.addEventListener("dispose",v)),C=z}if(C.visible=w.visible,C.wireframe=w.wireframe,E===Bs?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:h[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=r.properties.get(C);F.light=x}return C}function S(T,w,x,E,C){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Bs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let O=t.update(T),P=T.material;if(Array.isArray(P)){let z=O.groups;for(let X=0,G=z.length;X<G;X++){let Q=z[X],Y=P[Q.materialIndex];if(Y&&Y.visible){let J=A(T,Y,E,C);T.onBeforeShadow(r,T,w,x,O,J,Q),r.renderBufferDirect(x,null,O,J,T,Q),T.onAfterShadow(r,T,w,x,O,J,Q)}}}else if(P.visible){let z=A(T,P,E,C);T.onBeforeShadow(r,T,w,x,O,z,null),r.renderBufferDirect(x,null,O,z,T,null),T.onAfterShadow(r,T,w,x,O,z,null)}}let F=T.children;for(let O=0,P=F.length;O<P;O++)S(F[O],w,x,E,C)}function v(T){T.target.removeEventListener("dispose",v);for(let x in c){let E=c[x],C=T.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function DS(r,t){function e(){let D=!1,lt=new Kt,K=null,ct=new Kt(0,0,0,0);return{setMask:function(pt){K!==pt&&!D&&(r.colorMask(pt,pt,pt,pt),K=pt)},setLocked:function(pt){D=pt},setClear:function(pt,nt,Pt,bt,he){he===!0&&(pt*=bt,nt*=bt,Pt*=bt),lt.set(pt,nt,Pt,bt),ct.equals(lt)===!1&&(r.clearColor(pt,nt,Pt,bt),ct.copy(lt))},reset:function(){D=!1,K=null,ct.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,K=null,ct=null,pt=null;return{setReversed:function(nt){if(lt!==nt){let Pt=t.get("EXT_clip_control");nt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(nt){nt?tt(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(nt){K!==nt&&!D&&(r.depthMask(nt),K=nt)},setFunc:function(nt){if(lt&&(nt=Ip[nt]),ct!==nt){switch(nt){case Jo:r.depthFunc(r.NEVER);break;case jo:r.depthFunc(r.ALWAYS);break;case Qo:r.depthFunc(r.LESS);break;case bs:r.depthFunc(r.LEQUAL);break;case tl:r.depthFunc(r.EQUAL);break;case el:r.depthFunc(r.GEQUAL);break;case nl:r.depthFunc(r.GREATER);break;case il:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=nt}},setLocked:function(nt){D=nt},setClear:function(nt){pt!==nt&&(pt=nt,lt&&(nt=1-nt),r.clearDepth(nt))},reset:function(){D=!1,K=null,ct=null,pt=null,lt=!1}}}function i(){let D=!1,lt=null,K=null,ct=null,pt=null,nt=null,Pt=null,bt=null,he=null;return{setTest:function(Qt){D||(Qt?tt(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!D&&(r.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,qn,ai){(K!==Qt||ct!==qn||pt!==ai)&&(r.stencilFunc(Qt,qn,ai),K=Qt,ct=qn,pt=ai)},setOp:function(Qt,qn,ai){(nt!==Qt||Pt!==qn||bt!==ai)&&(r.stencilOp(Qt,qn,ai),nt=Qt,Pt=qn,bt=ai)},setLocked:function(Qt){D=Qt},setClear:function(Qt){he!==Qt&&(r.clearStencil(Qt),he=Qt)},reset:function(){D=!1,lt=null,K=null,ct=null,pt=null,nt=null,Pt=null,bt=null,he=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,A=null,S=null,v=null,T=null,w=null,x=new Mt(0,0,0),E=0,C=!1,I=null,F=null,O=null,P=null,z=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=Q>=2);let J=null,et={},St=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Yt=new Kt().fromArray(St),Ft=new Kt().fromArray(Tt);function jt(D,lt,K,ct){let pt=new Uint8Array(4),nt=r.createTexture();r.bindTexture(D,nt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pt=0;Pt<K;Pt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(lt,0,r.RGBA,1,1,ct,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(lt+Pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return nt}let Z={};Z[r.TEXTURE_2D]=jt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=jt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=jt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=jt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(r.DEPTH_TEST),a.setFunc(bs),qt(!1),_e(Du),tt(r.CULL_FACE),Jt(mi);function tt(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function xt(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Dt(D,lt){return d[D]!==lt?(r.bindFramebuffer(D,lt),d[D]=lt,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=lt),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(D,lt){let K=g,ct=!1;if(D){K=f.get(lt),K===void 0&&(K=[],f.set(lt,K));let pt=D.textures;if(K.length!==pt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let nt=0,Pt=pt.length;nt<Pt;nt++)K[nt]=r.COLOR_ATTACHMENT0+nt;K.length=pt.length,ct=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,ct=!0);ct&&r.drawBuffers(K)}function Ht(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Fe={[Br]:r.FUNC_ADD,[Qf]:r.FUNC_SUBTRACT,[tp]:r.FUNC_REVERSE_SUBTRACT};Fe[ep]=r.MIN,Fe[np]=r.MAX;let Gt={[ip]:r.ZERO,[Tl]:r.ONE,[rp]:r.SRC_COLOR,[Ou]:r.SRC_ALPHA,[up]:r.SRC_ALPHA_SATURATE,[lp]:r.DST_COLOR,[ap]:r.DST_ALPHA,[sp]:r.ONE_MINUS_SRC_COLOR,[Ba]:r.ONE_MINUS_SRC_ALPHA,[cp]:r.ONE_MINUS_DST_COLOR,[op]:r.ONE_MINUS_DST_ALPHA,[hp]:r.CONSTANT_COLOR,[dp]:r.ONE_MINUS_CONSTANT_COLOR,[fp]:r.CONSTANT_ALPHA,[pp]:r.ONE_MINUS_CONSTANT_ALPHA};function Jt(D,lt,K,ct,pt,nt,Pt,bt,he,Qt){if(D===mi){p===!0&&(xt(r.BLEND),p=!1);return}if(p===!1&&(tt(r.BLEND),p=!0),D!==Ml){if(D!==m||Qt!==C){if((b!==Br||v!==Br)&&(r.blendEquation(r.FUNC_ADD),b=Br,v=Br),Qt)switch(D){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Or:r.blendFunc(r.ONE,r.ONE);break;case Uu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",D);break}else switch(D){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uu:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fu:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",D);break}A=null,S=null,T=null,w=null,x.set(0,0,0),E=0,m=D,C=Qt}return}pt=pt||lt,nt=nt||K,Pt=Pt||ct,(lt!==b||pt!==v)&&(r.blendEquationSeparate(Fe[lt],Fe[pt]),b=lt,v=pt),(K!==A||ct!==S||nt!==T||Pt!==w)&&(r.blendFuncSeparate(Gt[K],Gt[ct],Gt[nt],Gt[Pt]),A=K,S=ct,T=nt,w=Pt),(bt.equals(x)===!1||he!==E)&&(r.blendColor(bt.r,bt.g,bt.b,he),x.copy(bt),E=he),m=D,C=!1}function ue(D,lt){D.side===Hn?xt(r.CULL_FACE):tt(r.CULL_FACE);let K=D.side===un;lt&&(K=!K),qt(K),D.blending===zs&&D.transparent===!1?Jt(mi):Jt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let ct=D.stencilWrite;o.setTest(ct),ct&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),fn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?tt(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){I!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),I=D)}function _e(D){D!==Kf?(tt(r.CULL_FACE),D!==F&&(D===Du?r.cullFace(r.BACK):D===Jf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),F=D}function Ve(D){D!==O&&(G&&r.lineWidth(D),O=D)}function fn(D,lt,K){D?(tt(r.POLYGON_OFFSET_FILL),(P!==lt||z!==K)&&(P=lt,z=K,a.getReversed()&&(lt=-lt),r.polygonOffset(lt,K))):xt(r.POLYGON_OFFSET_FILL)}function ve(D){D?tt(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function Ie(D){D===void 0&&(D=r.TEXTURE0+X-1),J!==D&&(r.activeTexture(D),J=D)}function U(D,lt,K){K===void 0&&(J===null?K=r.TEXTURE0+X-1:K=J);let ct=et[K];ct===void 0&&(ct={type:void 0,texture:void 0},et[K]=ct),(ct.type!==D||ct.texture!==lt)&&(J!==K&&(r.activeTexture(K),J=K),r.bindTexture(D,lt||Z[D]),ct.type=D,ct.texture=lt)}function qe(){let D=et[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ne(){try{r.compressedTexImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function y(){try{r.texSubImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function B(){try{r.texSubImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function q(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function rt(){try{r.texStorage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function st(){try{r.texStorage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function $(){try{r.texImage2D(...arguments)}catch(D){Lt("WebGLState:",D)}}function j(){try{r.texImage3D(...arguments)}catch(D){Lt("WebGLState:",D)}}function at(D){return h[D]!==void 0?h[D]:r.getParameter(D)}function Rt(D,lt){h[D]!==lt&&(r.pixelStorei(D,lt),h[D]=lt)}function ut(D){Yt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function ot(D){Ft.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ft.copy(D))}function Ct(D,lt){let K=c.get(lt);K===void 0&&(K=new WeakMap,c.set(lt,K));let ct=K.get(D);ct===void 0&&(ct=r.getUniformBlockIndex(lt,D.name),K.set(D,ct))}function It(D,lt){let ct=c.get(lt).get(D);l.get(lt)!==ct&&(r.uniformBlockBinding(lt,ct,D.__bindingPointIndex),l.set(lt,ct))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,et={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,A=null,S=null,v=null,T=null,w=null,x=new Mt(0,0,0),E=0,C=!1,I=null,F=null,O=null,P=null,z=null,Yt.set(0,0,r.canvas.width,r.canvas.height),Ft.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:Dt,drawBuffers:gt,useProgram:Ht,setBlending:Jt,setMaterial:ue,setFlipSided:qt,setCullFace:_e,setLineWidth:Ve,setPolygonOffset:fn,setScissorTest:ve,activeTexture:Ie,bindTexture:U,unbindTexture:qe,compressedTexImage2D:ne,compressedTexImage3D:R,texImage2D:$,texImage3D:j,pixelStorei:Rt,getParameter:at,updateUBOMapping:Ct,uniformBlockBinding:It,texStorage2D:rt,texStorage3D:st,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:ut,viewport:ot,reset:Ot}}function US(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap,h=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return g?new OffscreenCanvas(R,y):Es("canvas")}function p(R,y,B){let V=1,q=ne(R);if((q.width>B||q.height>B)&&(V=B/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let rt=Math.floor(V*q.width),st=Math.floor(V*q.height);d===void 0&&(d=_(rt,st));let $=y?_(rt,st):d;return $.width=rt,$.height=st,$.getContext("2d").drawImage(R,0,0,rt,st),wt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+rt+"x"+st+")."),$}else return"data"in R&&wt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function m(R){return R.generateMipmaps}function b(R){r.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,y,B,V,q,rt=!1){if(R!==null){if(r[R]!==void 0)return r[R];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let st;V&&(st=t.get("EXT_texture_norm16"),st||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8),B===r.UNSIGNED_SHORT&&st&&($=st.R16_EXT),B===r.SHORT&&st&&($=st.R16_SNORM_EXT)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),y===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8),B===r.UNSIGNED_SHORT&&st&&($=st.RG16_EXT),B===r.SHORT&&st&&($=st.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),y===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),y===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),y===r.RGB&&(B===r.UNSIGNED_SHORT&&st&&($=st.RGB16_EXT),B===r.SHORT&&st&&($=st.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),y===r.RGBA){let j=rt?ya:kt.getTransfer(q);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=j===ee?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&st&&($=st.RGBA16_EXT),B===r.SHORT&&st&&($=st.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(R,y){let B;return R?y===null||y===ri||y===Vs?B=r.DEPTH24_STENCIL8:y===In?B=r.DEPTH32F_STENCIL8:y===Hs&&(B=r.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ri||y===Vs?B=r.DEPTH_COMPONENT24:y===In?B=r.DEPTH_COMPONENT32F:y===Hs&&(B=r.DEPTH_COMPONENT16),B}function T(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Re&&R.minFilter!==fe?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){let y=R.target;y.removeEventListener("dispose",w),E(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function x(R){let y=R.target;y.removeEventListener("dispose",x),I(y)}function E(R){let y=n.get(R);if(y.__webglInit===void 0)return;let B=R.source,V=f.get(B);if(V){let q=V[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(R),Object.keys(V).length===0&&f.delete(B)}n.remove(R)}function C(R){let y=n.get(R);r.deleteTexture(y.__webglTexture);let B=R.source,V=f.get(B);delete V[y.__cacheKey],a.memory.textures--}function I(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let q=0;q<y.__webglFramebuffer[V].length;q++)r.deleteFramebuffer(y.__webglFramebuffer[V][q]);else r.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)r.deleteFramebuffer(y.__webglFramebuffer[V]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=R.textures;for(let V=0,q=B.length;V<q;V++){let rt=n.get(B[V]);rt.__webglTexture&&(r.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(R)}let F=0;function O(){F=0}function P(){return F}function z(R){F=R}function X(){let R=F;return R>=i.maxTextures&&wt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function G(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Q(R,y){let B=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let V=R.image;if(V===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function Y(R,y){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xt(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function J(R,y){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xt(B,R,y);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function et(R,y){let B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Dt(B,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}let St={[ei]:r.REPEAT,[sn]:r.CLAMP_TO_EDGE,[Ms]:r.MIRRORED_REPEAT},Tt={[Re]:r.NEAREST,[Al]:r.NEAREST_MIPMAP_NEAREST,[Hr]:r.NEAREST_MIPMAP_LINEAR,[fe]:r.LINEAR,[ks]:r.LINEAR_MIPMAP_NEAREST,[yn]:r.LINEAR_MIPMAP_LINEAR},Yt={[bp]:r.NEVER,[Ap]:r.ALWAYS,[Mp]:r.LESS,[dc]:r.LEQUAL,[Tp]:r.EQUAL,[fc]:r.GEQUAL,[Ep]:r.GREATER,[wp]:r.NOTEQUAL};function Ft(R,y){if(y.type===In&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fe||y.magFilter===ks||y.magFilter===Hr||y.magFilter===yn||y.minFilter===fe||y.minFilter===ks||y.minFilter===Hr||y.minFilter===yn)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,St[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,St[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,St[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Tt[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Tt[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Re||y.minFilter!==Hr&&y.minFilter!==yn||y.type===In&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function jt(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));let V=y.source,q=f.get(V);q===void 0&&(q={},f.set(V,q));let rt=G(y);if(rt!==R.__cacheKey){q[rt]===void 0&&(q[rt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),q[rt].usedTimes++;let st=q[R.__cacheKey];st!==void 0&&(q[R.__cacheKey].usedTimes--,st.usedTimes===0&&C(y)),R.__cacheKey=rt,R.__webglTexture=q[rt].texture}return B}function Z(R,y,B){return Math.floor(Math.floor(R/B)/y)}function tt(R,y,B,V){let rt=R.updateRanges;if(rt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,B,V,y.data);else{rt.sort((Rt,ut)=>Rt.start-ut.start);let st=0;for(let Rt=1;Rt<rt.length;Rt++){let ut=rt[st],ot=rt[Rt],Ct=ut.start+ut.count,It=Z(ot.start,y.width,4),Ot=Z(ut.start,y.width,4);ot.start<=Ct+1&&It===Ot&&Z(ot.start+ot.count-1,y.width,4)===It?ut.count=Math.max(ut.count,ot.start+ot.count-ut.start):(++st,rt[st]=ot)}rt.length=st+1;let $=e.getParameter(r.UNPACK_ROW_LENGTH),j=e.getParameter(r.UNPACK_SKIP_PIXELS),at=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Rt=0,ut=rt.length;Rt<ut;Rt++){let ot=rt[Rt],Ct=Math.floor(ot.start/4),It=Math.ceil(ot.count/4),Ot=Ct%y.width,D=Math.floor(Ct/y.width),lt=It,K=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(r.UNPACK_SKIP_ROWS,D),e.texSubImage2D(r.TEXTURE_2D,0,Ot,D,lt,K,B,V,y.data)}R.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,$),e.pixelStorei(r.UNPACK_SKIP_PIXELS,j),e.pixelStorei(r.UNPACK_SKIP_ROWS,at)}}function xt(R,y,B){let V=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=r.TEXTURE_3D);let q=jt(R,y),rt=y.source;e.bindTexture(V,R.__webglTexture,r.TEXTURE0+B);let st=n.get(rt);if(rt.version!==st.__version||q===!0){if(e.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let K=kt.getPrimaries(kt.workingColorSpace),ct=y.colorSpace===Ln?null:kt.getPrimaries(y.colorSpace),pt=y.colorSpace===Ln||K===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let j=p(y.image,!1,i.maxTextureSize);j=qe(y,j);let at=s.convert(y.format,y.colorSpace),Rt=s.convert(y.type),ut=S(y.internalFormat,at,Rt,y.normalized,y.colorSpace,y.isVideoTexture);Ft(V,y);let ot,Ct=y.mipmaps,It=y.isVideoTexture!==!0,Ot=st.__version===void 0||q===!0,D=rt.dataReady,lt=T(y,j);if(y.isDepthTexture)ut=v(y.format===ar,y.type),Ot&&(It?e.texStorage2D(r.TEXTURE_2D,1,ut,j.width,j.height):e.texImage2D(r.TEXTURE_2D,0,ut,j.width,j.height,0,at,Rt,null));else if(y.isDataTexture)if(Ct.length>0){It&&Ot&&e.texStorage2D(r.TEXTURE_2D,lt,ut,Ct[0].width,Ct[0].height);for(let K=0,ct=Ct.length;K<ct;K++)ot=Ct[K],It?D&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,ot.width,ot.height,at,Rt,ot.data):e.texImage2D(r.TEXTURE_2D,K,ut,ot.width,ot.height,0,at,Rt,ot.data);y.generateMipmaps=!1}else It?(Ot&&e.texStorage2D(r.TEXTURE_2D,lt,ut,j.width,j.height),D&&tt(y,j,at,Rt)):e.texImage2D(r.TEXTURE_2D,0,ut,j.width,j.height,0,at,Rt,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){It&&Ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,ut,Ct[0].width,Ct[0].height,j.depth);for(let K=0,ct=Ct.length;K<ct;K++)if(ot=Ct[K],y.format!==Je)if(at!==null)if(It){if(D)if(y.layerUpdates.size>0){let pt=nh(ot.width,ot.height,y.format,y.type);for(let nt of y.layerUpdates){let Pt=ot.data.subarray(nt*pt/ot.data.BYTES_PER_ELEMENT,(nt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,nt,ot.width,ot.height,1,at,Pt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,j.depth,at,ot.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,ut,ot.width,ot.height,j.depth,0,ot.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,j.depth,at,Rt,ot.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,ut,ot.width,ot.height,j.depth,0,at,Rt,ot.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{It&&Ot&&e.texStorage2D(r.TEXTURE_2D,lt,ut,Ct[0].width,Ct[0].height);for(let K=0,ct=Ct.length;K<ct;K++)ot=Ct[K],y.format!==Je?at!==null?It?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(r.TEXTURE_2D,K,ut,ot.width,ot.height,0,ot.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?D&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,ot.width,ot.height,at,Rt,ot.data):e.texImage2D(r.TEXTURE_2D,K,ut,ot.width,ot.height,0,at,Rt,ot.data)}else if(y.isDataArrayTexture)if(It){if(Ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,ut,j.width,j.height,j.depth),D)if(y.layerUpdates.size>0){let K=nh(j.width,j.height,y.format,y.type);for(let ct of y.layerUpdates){let pt=j.data.subarray(ct*K/j.data.BYTES_PER_ELEMENT,(ct+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ct,j.width,j.height,1,at,Rt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,at,Rt,j.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,ut,j.width,j.height,j.depth,0,at,Rt,j.data);else if(y.isData3DTexture)It?(Ot&&e.texStorage3D(r.TEXTURE_3D,lt,ut,j.width,j.height,j.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,at,Rt,j.data)):e.texImage3D(r.TEXTURE_3D,0,ut,j.width,j.height,j.depth,0,at,Rt,j.data);else if(y.isFramebufferTexture){if(Ot)if(It)e.texStorage2D(r.TEXTURE_2D,lt,ut,j.width,j.height);else{let K=j.width,ct=j.height;for(let pt=0;pt<lt;pt++)e.texImage2D(r.TEXTURE_2D,pt,ut,K,ct,0,at,Rt,null),K>>=1,ct>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let K=r.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),h.add(y),K.onpaint=ct=>{let pt=ct.changedElements;for(let nt of h)pt.includes(nt.image)&&(nt.needsUpdate=!0)},K.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let pt=r.RGBA,nt=r.RGBA,Pt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,pt,nt,Pt,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(It&&Ot){let K=ne(Ct[0]);e.texStorage2D(r.TEXTURE_2D,lt,ut,K.width,K.height)}for(let K=0,ct=Ct.length;K<ct;K++)ot=Ct[K],It?D&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,at,Rt,ot):e.texImage2D(r.TEXTURE_2D,K,ut,at,Rt,ot);y.generateMipmaps=!1}else if(It){if(Ot){let K=ne(j);e.texStorage2D(r.TEXTURE_2D,lt,ut,K.width,K.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,Rt,j)}else e.texImage2D(r.TEXTURE_2D,0,ut,at,Rt,j);m(y)&&b(V),st.__version=rt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Dt(R,y,B){if(y.image.length!==6)return;let V=jt(R,y),q=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);let rt=n.get(q);if(q.version!==rt.__version||V===!0){e.activeTexture(r.TEXTURE0+B);let st=kt.getPrimaries(kt.workingColorSpace),$=y.colorSpace===Ln?null:kt.getPrimaries(y.colorSpace),j=y.colorSpace===Ln||st===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let at=y.isCompressedTexture||y.image[0].isCompressedTexture,Rt=y.image[0]&&y.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!at&&!Rt?ut[nt]=p(y.image[nt],!0,i.maxCubemapSize):ut[nt]=Rt?y.image[nt].image:y.image[nt],ut[nt]=qe(y,ut[nt]);let ot=ut[0],Ct=s.convert(y.format,y.colorSpace),It=s.convert(y.type),Ot=S(y.internalFormat,Ct,It,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,lt=rt.__version===void 0||V===!0,K=q.dataReady,ct=T(y,ot);Ft(r.TEXTURE_CUBE_MAP,y);let pt;if(at){D&&lt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ot,ot.width,ot.height);for(let nt=0;nt<6;nt++){pt=ut[nt].mipmaps;for(let Pt=0;Pt<pt.length;Pt++){let bt=pt[Pt];y.format!==Je?Ct!==null?D?K&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,bt.width,bt.height,Ct,bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,Ot,bt.width,bt.height,0,bt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,bt.width,bt.height,Ct,It,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,Ot,bt.width,bt.height,0,Ct,It,bt.data)}}}else{if(pt=y.mipmaps,D&&lt){pt.length>0&&ct++;let nt=ne(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Ot,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Rt){D?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,Ct,It,ut[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,ut[nt].width,ut[nt].height,0,Ct,It,ut[nt].data);for(let Pt=0;Pt<pt.length;Pt++){let he=pt[Pt].image[nt].image;D?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,he.width,he.height,Ct,It,he.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,Ot,he.width,he.height,0,Ct,It,he.data)}}else{D?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ct,It,ut[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,Ct,It,ut[nt]);for(let Pt=0;Pt<pt.length;Pt++){let bt=pt[Pt];D?K&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,Ct,It,bt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,Ot,Ct,It,bt.image[nt])}}}m(y)&&b(r.TEXTURE_CUBE_MAP),rt.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function gt(R,y,B,V,q,rt){let st=s.convert(B.format,B.colorSpace),$=s.convert(B.type),j=S(B.internalFormat,st,$,B.normalized,B.colorSpace),at=n.get(y),Rt=n.get(B);if(Rt.__renderTarget=y,!at.__hasExternalTextures){let ut=Math.max(1,y.width>>rt),ot=Math.max(1,y.height>>rt);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?e.texImage3D(q,rt,j,ut,ot,y.depth,0,st,$,null):e.texImage2D(q,rt,j,ut,ot,0,st,$,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ie(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,q,Rt.__webglTexture,0,ve(y)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,q,Rt.__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(R,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){let V=y.depthTexture,q=V&&V.isDepthTexture?V.type:null,rt=v(y.stencilBuffer,q),st=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ie(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(y),rt,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(y),rt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,rt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,R)}else{let V=y.textures;for(let q=0;q<V.length;q++){let rt=V[q],st=s.convert(rt.format,rt.colorSpace),$=s.convert(rt.type),j=S(rt.internalFormat,st,$,rt.normalized,rt.colorSpace);Ie(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(y),j,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(y),j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(R,y,B){let V=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Ft(r.TEXTURE_CUBE_MAP,y.depthTexture);let at=s.convert(y.depthTexture.format),Rt=s.convert(y.depthTexture.type),ut;y.depthTexture.format===ui?ut=r.DEPTH_COMPONENT24:y.depthTexture.format===ar&&(ut=r.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ut,y.width,y.height,0,at,Rt,null)}}else Q(y.depthTexture,0);let rt=q.__webglTexture,st=ve(y),$=V?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,j=y.depthTexture.format===ar?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===ui)Ie(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,rt,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,rt,0);else if(y.depthTexture.format===ar)Ie(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,rt,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(R){let y=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let V=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=V}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)Fe(y.__webglFramebuffer[V],R,V);else{let V=R.texture.mipmaps;V&&V.length>0?Fe(y.__webglFramebuffer[0],R,0):Fe(y.__webglFramebuffer,R,0)}else if(B){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=r.createRenderbuffer(),Ht(y.__webglDepthbuffer[V],R,!1);else{let q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,rt)}}else{let V=R.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ht(y.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,rt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(R,y,B){let V=n.get(R);y!==void 0&&gt(V.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Gt(R)}function ue(R){let y=R.texture,B=n.get(R),V=n.get(y);R.addEventListener("dispose",x);let q=R.textures,rt=R.isWebGLCubeRenderTarget===!0,st=q.length>1;if(st||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=y.version,a.memory.textures++),rt){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let j=0;j<y.mipmaps.length;j++)B.__webglFramebuffer[$][j]=r.createFramebuffer()}else B.__webglFramebuffer[$]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)B.__webglFramebuffer[$]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(st)for(let $=0,j=q.length;$<j;$++){let at=n.get(q[$]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ie(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){let j=q[$];B.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let at=s.convert(j.format,j.colorSpace),Rt=s.convert(j.type),ut=S(j.internalFormat,at,Rt,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),ot=ve(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,ut,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,B.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),Ft(r.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)gt(B.__webglFramebuffer[$][j],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else gt(B.__webglFramebuffer[$],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(y)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let $=0,j=q.length;$<j;$++){let at=q[$],Rt=n.get(at),ut=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,Rt.__webglTexture),Ft(ut,at),gt(B.__webglFramebuffer,R,at,r.COLOR_ATTACHMENT0+$,ut,0),m(at)&&b(ut)}e.unbindTexture()}else{let $=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture($,V.__webglTexture),Ft($,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)gt(B.__webglFramebuffer[j],R,y,r.COLOR_ATTACHMENT0,$,j);else gt(B.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,$,0);m(y)&&b($),e.unbindTexture()}R.depthBuffer&&Gt(R)}function qt(R){let y=R.textures;for(let B=0,V=y.length;B<V;B++){let q=y[B];if(m(q)){let rt=A(R),st=n.get(q).__webglTexture;e.bindTexture(rt,st),b(rt),e.unbindTexture()}}}let _e=[],Ve=[];function fn(R){if(R.samples>0){if(Ie(R)===!1){let y=R.textures,B=R.width,V=R.height,q=r.COLOR_BUFFER_BIT,rt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=n.get(R),$=y.length>1;if($)for(let at=0;at<y.length;at++)e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let at=0;at<y.length;at++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let Rt=n.get(y[at]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,B,V,0,0,B,V,q,r.NEAREST),l===!0&&(_e.length=0,Ve.length=0,_e.push(r.COLOR_ATTACHMENT0+at),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_e.push(rt),Ve.push(rt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let at=0;at<y.length;at++){e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let Rt=n.get(y[at]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,Rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ve(R){return Math.min(i.maxSamples,R.samples)}function Ie(R){let y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(R){let y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function qe(R,y){let B=R.colorSpace,V=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==on&&B!==Ln&&(kt.getTransfer(B)===ee?(V!==Je||q!==vn)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",B)),y}function ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=Jt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function FS(r,t){function e(n,i=Ln){let s,a=kt.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===Cl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return r.BYTE;if(n===Wu)return r.SHORT;if(n===Hs)return r.UNSIGNED_SHORT;if(n===Rl)return r.INT;if(n===ri)return r.UNSIGNED_INT;if(n===In)return r.FLOAT;if(n===si)return r.HALF_FLOAT;if(n===qu)return r.ALPHA;if(n===Zu)return r.RGB;if(n===Je)return r.RGBA;if(n===ui)return r.DEPTH_COMPONENT;if(n===ar)return r.DEPTH_STENCIL;if(n===Il)return r.RED;if(n===Ll)return r.RED_INTEGER;if(n===or)return r.RG;if(n===Nl)return r.RG_INTEGER;if(n===Dl)return r.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===Ya)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Fl||n===Ol||n===Bl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===qa||n===Wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zl||n===kl)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return s.COMPRESSED_R11_EAC;if(n===Gl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qa)return s.COMPRESSED_RG11_EAC;if(n===Wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xl||n===Yl||n===ql||n===Zl||n===$l||n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===ac||n===oc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===Za||n===uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var OS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BS=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ia(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:OS,fragmentShader:BS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends hi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Sh,m={},b=e.getContextAttributes(),A=null,S=null,v=[],T=[],w=new At,x=null,E=null,C=new De;C.viewport=new Kt;let I=new De;I.viewport=new Kt;let F=[C,I],O=new Sl,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=v[Z];return tt===void 0&&(tt=new Rs,v[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=v[Z];return tt===void 0&&(tt=new Rs,v[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=v[Z];return tt===void 0&&(tt=new Rs,v[Z]=tt),tt.getHandSpace()};function X(Z){let tt=T.indexOf(Z.inputSource);if(tt===-1)return;let xt=v[tt];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,c||a),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<v.length;Z++){let tt=T[Z];tt!==null&&(T[Z]=null,v[Z].disconnect(tt))}P=null,z=null,p.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(A),f=null,d=null,h=null,i=null,S=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Dt=null,gt=null;b.depth&&(gt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=b.stencil?ar:ui,Dt=b.stencil?Vs:ri);let Ht={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ht),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new mn(d.textureWidth,d.textureHeight,{format:Je,type:vn,depthTexture:new ir(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new mn(f.framebufferWidth,f.framebufferHeight,{format:Je,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Z){for(let tt=0;tt<Z.removed.length;tt++){let xt=Z.removed[tt],Dt=T.indexOf(xt);Dt>=0&&(T[Dt]=null,v[Dt].disconnect(xt))}for(let tt=0;tt<Z.added.length;tt++){let xt=Z.added[tt],Dt=T.indexOf(xt);if(Dt===-1){for(let Ht=0;Ht<v.length;Ht++)if(Ht>=T.length){T.push(xt),Dt=Ht;break}else if(T[Ht]===null){T[Ht]=xt,Dt=Ht;break}if(Dt===-1)break}let gt=v[Dt];gt&&gt.connect(xt)}}let Y=new N,J=new N;function et(Z,tt,xt){Y.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);let Dt=Y.distanceTo(J),gt=tt.projectionMatrix.elements,Ht=xt.projectionMatrix.elements,Fe=gt[14]/(gt[10]-1),Gt=gt[14]/(gt[10]+1),Jt=(gt[9]+1)/gt[5],ue=(gt[9]-1)/gt[5],qt=(gt[8]-1)/gt[0],_e=(Ht[8]+1)/Ht[0],Ve=Fe*qt,fn=Fe*_e,ve=Dt/(-qt+_e),Ie=ve*-qt;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ie),Z.translateZ(ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),gt[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let U=Fe+ve,qe=Gt+ve,ne=Ve-Ie,R=fn+(Dt-Ie),y=Jt*Gt/qe*U,B=ue*Gt/qe*U;Z.projectionMatrix.makePerspective(ne,R,y,B,U,qe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function St(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let tt=Z.near,xt=Z.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),O.near=I.near=C.near=tt,O.far=I.far=C.far=xt,(P!==O.near||z!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,z=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Dt=Z.parent,gt=O.cameras;St(O,Dt);for(let Ht=0;Ht<gt.length;Ht++)St(gt[Ht],Dt);gt.length===2?et(O,C,I):O.projectionMatrix.copy(C.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),Tt(Z,O,Dt)};function Tt(Z,tt,xt){xt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ar*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Z){return m[Z]};let Yt=null;function Ft(Z,tt){if(u=tt.getViewerPose(c||a),g=tt,u!==null){let xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Dt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let Gt=0;Gt<xt.length;Gt++){let Jt=xt[Gt],ue=null;if(f!==null)ue=f.getViewport(Jt);else{let _e=h.getViewSubImage(d,Jt);ue=_e.viewport,Gt===0&&(t.setRenderTargetTextures(S,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(S))}let qt=F[Gt];qt===void 0&&(qt=new De,qt.layers.enable(Gt),qt.viewport=new Kt,F[Gt]=qt),qt.matrix.fromArray(Jt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Jt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ue.x,ue.y,ue.width,ue.height),Gt===0&&(O.matrix.copy(qt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(qt)}let gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Gt=h.getDepthInformation(xt[0]);Gt&&Gt.isValid&&Gt.texture&&p.init(Gt,i.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let Gt=0;Gt<xt.length;Gt++){let Jt=xt[Gt].camera;if(Jt){let ue=m[Jt];ue||(ue=new Ia,m[Jt]=ue);let qt=h.getCameraImage(Jt);ue.sourceTexture=qt}}}}for(let xt=0;xt<v.length;xt++){let Dt=T[xt],gt=v[xt];Dt!==null&&gt!==void 0&&gt.update(Dt,tt,c||a)}Yt&&Yt(Z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let jt=new rm;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(Z){Yt=Z},this.dispose=function(){}}},zS=new Ut,um=new Nt;um.set(-1,0,0,0,1,0,0,0,1);function kS(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Qu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,A,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),A=b.envMap,S=b.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(zS.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(um),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function HS(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let T=v.program;n.uniformBlockBinding(S,T)}function c(S,v){let T=i[S.id];T===void 0&&(p(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",b));let w=v.program;n.updateUBOMapping(S,w);let x=t.render.frame;s[S.id]!==x&&(d(S),s[S.id]=x)}function u(S){let v=h();S.__bindingPointIndex=v;let T=r.createBuffer(),w=S.__size,x=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,w,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=i[S.id],T=S.uniforms,w=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let x=0,E=T.length;x<E;x++){let C=T[x];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)f(C[I],x,I,w);else f(C,x,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,v,T,w){if(_(S,v,T,w)===!0){let x=S.__offset,E=S.value;if(Array.isArray(E)){let C=0;for(let I=0;I<E.length;I++){let F=E[I],O=m(F);g(F,S.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,S.__data)}}function g(S,v,T){typeof S=="number"||typeof S=="boolean"?v[0]=S:S.isMatrix3?(v[0]=S.elements[0],v[1]=S.elements[1],v[2]=S.elements[2],v[3]=0,v[4]=S.elements[3],v[5]=S.elements[4],v[6]=S.elements[5],v[7]=0,v[8]=S.elements[6],v[9]=S.elements[7],v[10]=S.elements[8],v[11]=0):ArrayBuffer.isView(S)?v.set(new S.constructor(S.buffer,S.byteOffset,v.length)):S.toArray(v,T)}function _(S,v,T,w){let x=S.value,E=v+"_"+T;if(w[E]===void 0)return typeof x=="number"||typeof x=="boolean"?w[E]=x:ArrayBuffer.isView(x)?w[E]=x.slice():w[E]=x.clone(),!0;{let C=w[E];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function p(S){let v=S.uniforms,T=0,w=16;for(let E=0,C=v.length;E<C;E++){let I=Array.isArray(v[E])?v[E]:[v[E]];for(let F=0,O=I.length;F<O;F++){let P=I[F],z=Array.isArray(P.value)?P.value:[P.value];for(let X=0,G=z.length;X<G;X++){let Q=z[X],Y=m(Q),J=T%w,et=J%Y.boundary,St=J+et;T+=et,St!==0&&w-St<Y.storage&&(T+=w-St),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=Y.storage}}}let x=T%w;return x>0&&(T+=w-x),S.__size=T,S.__cache={},this}function m(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",S),v}function b(S){let v=S.target;v.removeEventListener("dispose",b);let T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function A(){for(let S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:A}}var VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function GS(){return gi===null&&(gi=new Li(VS,16,16,or,si),gi.name="DFG_LUT",gi.minFilter=fe,gi.magFilter=fe,gi.wrapS=sn,gi.wrapT=sn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var qs=class{constructor(t={}){let{canvas:e=Rp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([Dl,Nl,Ll]),m=new Set([vn,ri,Hs,Vs,Cl,Pl]),b=new Uint32Array(4),A=new Int32Array(4),S=new N,v=null,T=null,w=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,F=null,O=null,P=null,z=null;this._outputColorSpace=Te;let X=0,G=0,Q=null,Y=-1,J=null,et=new Kt,St=new Kt,Tt=null,Yt=new Mt(0),Ft=0,jt=e.width,Z=e.height,tt=1,xt=null,Dt=null,gt=new Kt(0,0,jt,Z),Ht=new Kt(0,0,jt,Z),Fe=!1,Gt=new Is,Jt=!1,ue=!1,qt=new Ut,_e=new N,Ve=new Kt,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function Ie(){return Q===null?tt:1}let U=n;function qe(M,L){return e.getContext(M,L)}let ne,R,y,B,V,q,rt,st,$,j,at,Rt,ut,ot,Ct,It,Ot,D,lt,K,ct,pt,nt;try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",qn,!1),U===null){let L="webgl2";if(U=qe(L,M),U===null)throw qe(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(M){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),Lt("WebGLRenderer: "+M.message),M}function Pt(){ne=new Ky(U),ne.init(),ct=new FS(U,ne),R=new ky(U,ne,t,ct),y=new DS(U,ne),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),O=U.createFramebuffer(),P=U.createFramebuffer(),z=U.createFramebuffer(),B=new Qy(U),V=new vS,q=new US(U,ne,y,V,R,ct,B),rt=new $y(C),st=new e_(U),pt=new By(U,st),$=new Jy(U,st,B,pt),j=new ev(U,$,st,pt,B),D=new tv(U,R,q),Ct=new Hy(V),at=new yS(C,rt,ne,R,pt,Ct),Rt=new kS(C,V),ut=new bS,ot=new RS(ne),Ot=new Oy(C,rt,y,j,g,l),It=new NS(C,j,R),nt=new HS(U,B,R,y),lt=new zy(U,ne,B),K=new jy(U,ne,B),B.programs=at.programs,C.capabilities=R,C.extensions=ne,C.properties=V,C.renderLists=ut,C.shadowMap=It,C.state=y,C.info=B}_!==vn&&(E=new iv(_,e.width,e.height,o,i,s));let bt=new bh(C,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(jt,Z,!1))},this.getSize=function(M){return M.set(jt,Z)},this.setSize=function(M,L,W=!0){if(bt.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=M,Z=L,e.width=Math.floor(M*tt),e.height=Math.floor(L*tt),W===!0&&(e.style.width=M+"px",e.style.height=L+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(jt*tt,Z*tt).floor()},this.setDrawingBufferSize=function(M,L,W){jt=M,Z=L,tt=W,e.width=Math.floor(M*W),e.height=Math.floor(L*W),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(_===vn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(gt)},this.setViewport=function(M,L,W,k){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,L,W,k),y.viewport(et.copy(gt).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,L,W,k){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,L,W,k),y.scissor(St.copy(Ht).multiplyScalar(tt).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(M){y.setScissorTest(Fe=M)},this.setOpaqueSort=function(M){xt=M},this.setTransparentSort=function(M){Dt=M},this.getClearColor=function(M){return M.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,W=!0){let k=0;if(M){let H=!1;if(Q!==null){let ft=Q.texture.format;H=p.has(ft)}if(H){let ft=Q.texture.type,_t=m.has(ft),dt=Ot.getClearColor(),yt=Ot.getClearAlpha(),Et=dt.r,Bt=dt.g,Wt=dt.b;_t?(b[0]=Et,b[1]=Bt,b[2]=Wt,b[3]=yt,U.clearBufferuiv(U.COLOR,0,b)):(A[0]=Et,A[1]=Bt,A[2]=Wt,A[3]=yt,U.clearBufferiv(U.COLOR,0,A))}else k|=U.COLOR_BUFFER_BIT}L&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),Ot.dispose(),ut.dispose(),ot.dispose(),V.dispose(),rt.dispose(),j.dispose(),pt.dispose(),nt.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",tf),bt.removeEventListener("sessionend",ef),yr.stop()};function he(M){M.preventDefault(),va("WebGLRenderer: Context Lost."),I=!0}function Qt(){va("WebGLRenderer: Context Restored."),I=!1;let M=B.autoReset,L=It.enabled,W=It.autoUpdate,k=It.needsUpdate,H=It.type;Pt(),B.autoReset=M,It.enabled=L,It.autoUpdate=W,It.needsUpdate=k,It.type=H}function qn(M){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ai(M){let L=M.target;L.removeEventListener("dispose",ai),Hg(L)}function Hg(M){Vg(M),V.remove(M)}function Vg(M){let L=V.get(M).programs;L!==void 0&&(L.forEach(function(W){at.releaseProgram(W)}),M.isShaderMaterial&&at.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,W,k,H,ft){L===null&&(L=fn);let _t=H.isMesh&&H.matrixWorld.determinantAffine()<0,dt=Xg(M,L,W,k,H);y.setMaterial(k,_t);let yt=W.index,Et=1;if(k.wireframe===!0){if(yt=$.getWireframeAttribute(W),yt===void 0)return;Et=2}let Bt=W.drawRange,Wt=W.attributes.position,vt=Bt.start*Et,te=(Bt.start+Bt.count)*Et;ft!==null&&(vt=Math.max(vt,ft.start*Et),te=Math.min(te,(ft.start+ft.count)*Et)),yt!==null?(vt=Math.max(vt,0),te=Math.min(te,yt.count)):Wt!=null&&(vt=Math.max(vt,0),te=Math.min(te,Wt.count));let Le=te-vt;if(Le<0||Le===1/0)return;pt.setup(H,k,dt,W,yt);let pe,se=lt;if(yt!==null&&(pe=st.get(yt),se=K,se.setIndex(pe)),H.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*Ie()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if(H.isLine){let Ze=k.linewidth;Ze===void 0&&(Ze=1),y.setLineWidth(Ze*Ie()),H.isLineSegments?se.setMode(U.LINES):H.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else H.isPoints?se.setMode(U.POINTS):H.isSprite&&se.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ze=H._multiDrawStarts,mt=H._multiDrawCounts,nn=H._multiDrawCount,$t=yt?st.get(yt).bytesPerElement:1,On=V.get(k).currentProgram.getUniforms();for(let oi=0;oi<nn;oi++)On.setValue(U,"_gl_DrawID",oi),se.render(Ze[oi]/$t,mt[oi])}else if(H.isInstancedMesh)se.renderInstances(vt,Le,H.count);else if(W.isInstancedBufferGeometry){let Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,mt=Math.min(W.instanceCount,Ze);se.renderInstances(vt,Le,mt)}else se.render(vt,Le)};function Qd(M,L,W,k){F!==null&&M.isNodeMaterial&&F.setObject(k,M),Jt===!0&&Ct.setState(M,W,!1),M.transparent===!0&&M.side===Hn&&M.forceSinglePass===!1?(M.side=un,M.needsUpdate=!0,yo(M,L,k),M.side=pi,M.needsUpdate=!0,yo(M,L,k),M.side=Hn):yo(M,L,k)}this.compile=function(M,L,W=null){W===null&&(W=M),F!==null&&F.renderStart(M,L,W),T=ot.get(W),T.init(L),x.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),M!==W&&M.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ue=this.localClippingEnabled,Jt=Ct.init(this.clippingPlanes,ue),Jt===!0&&Ct.setGlobalState(this.clippingPlanes,L),F!==null&&It.render(T.state.shadowsArray,W,L);let k=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ft=H.material;if(ft)if(Array.isArray(ft))for(let _t=0;_t<ft.length;_t++){let dt=ft[_t];Qd(dt,W,L,H),k.add(dt)}else Qd(ft,W,L,H),k.add(ft)}),T=x.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(M,L,W=null){let k=this.compile(M,L,W);return new Promise(H=>{function ft(){if(k.forEach(function(_t){let yt=V.get(_t).currentProgram;(yt===void 0||yt.isReady())&&k.delete(_t)}),k.size===0){H(M);return}setTimeout(ft,10)}ne.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let $c=null;function Gg(M){$c&&$c(M)}function tf(){yr.stop()}function ef(){yr.start()}let yr=new rm;yr.setAnimationLoop(Gg),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(M){$c=M,bt.setAnimationLoop(M),M===null?yr.stop():yr.start()},bt.addEventListener("sessionstart",tf),bt.addEventListener("sessionend",ef),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(M,L);let W=bt.enabled===!0&&bt.isPresenting===!0,k=E!==null&&(Q===null||W)&&E.begin(C,Q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(L),L=bt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,L,Q),T=ot.get(M,x.length),T.init(L),T.state.textureUnits=q.getTextureUnits(),x.push(T),qt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Gt.setFromProjectionMatrix(qt,Qn,L.reversedDepth),ue=this.localClippingEnabled,Jt=Ct.init(this.clippingPlanes,ue),v=ut.get(M,w.length),v.init(),w.push(v),bt.enabled===!0&&bt.isPresenting===!0){let _t=C.xr.getDepthSensingMesh();_t!==null&&Kc(_t,L,-1/0,C.sortObjects)}Kc(M,L,0,C.sortObjects),v.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&v.sort(xt,Dt),ve=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ve&&Ot.addToRenderList(v,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Jt===!0&&Ct.beginShadows();let H=T.state.shadowsArray;if(It.render(H,M,L),Jt===!0&&Ct.endShadows(),(k&&E.hasRenderPass())===!1){let _t=v.opaque,dt=v.transmissive;if(T.setupLights(),L.isArrayCamera){let yt=L.cameras;if(dt.length>0)for(let Et=0,Bt=yt.length;Et<Bt;Et++){let Wt=yt[Et];rf(_t,dt,M,Wt)}ve&&Ot.render(M);for(let Et=0,Bt=yt.length;Et<Bt;Et++){let Wt=yt[Et];nf(v,M,Wt,Wt.viewport)}}else dt.length>0&&rf(_t,dt,M,L),ve&&Ot.render(M),nf(v,M,L)}Q!==null&&G===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),k&&E.end(C),M.isScene===!0&&M.onAfterRender(C,M,L),pt.resetDefaultState(),Y=-1,J=null,x.pop(),x.length>0?(T=x[x.length-1],q.setTextureUnits(T.state.textureUnits),Jt===!0&&Ct.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,F!==null&&F.renderEnd()};function Kc(M,L,W,k){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Gt)){k&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(qt);let _t=j.update(M),dt=M.material;dt.visible&&v.push(M,_t,dt,W,Ve.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Gt))){let _t=j.update(M),dt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ve.copy(_t.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(qt)),Array.isArray(dt)){let yt=_t.groups;for(let Et=0,Bt=yt.length;Et<Bt;Et++){let Wt=yt[Et],vt=dt[Wt.materialIndex];vt&&vt.visible&&v.push(M,_t,vt,W,Ve.z,Wt,L)}}else dt.visible&&v.push(M,_t,dt,W,Ve.z,null,L)}}let ft=M.children;for(let _t=0,dt=ft.length;_t<dt;_t++)Kc(ft[_t],L,W,k)}function nf(M,L,W,k){let{opaque:H,transmissive:ft,transparent:_t}=M;T.setupLightsView(W),Jt===!0&&Ct.setGlobalState(C.clippingPlanes,W),k&&y.viewport(et.copy(k)),H.length>0&&xo(H,L,W),ft.length>0&&xo(ft,L,W),_t.length>0&&xo(_t,L,W),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function rf(M,L,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let vt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new mn(1,1,{generateMipmaps:!0,type:vt?si:vn,minFilter:yn,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let ft=T.state.transmissionRenderTarget[k.id],_t=k.viewport||et;ft.setSize(_t.z*C.transmissionResolutionScale,_t.w*C.transmissionResolutionScale);let dt=C.getRenderTarget(),yt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(Yt),Ft=C.getClearAlpha(),Ft<1&&C.setClearColor(16777215,.5),C.clear(),ve&&Ot.render(W);let Bt=C.toneMapping;C.toneMapping=ii;let Wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Jt===!0&&Ct.setGlobalState(C.clippingPlanes,k),xo(M,W,k),q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft),ne.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let te=0,Le=L.length;te<Le;te++){let pe=L[te],{object:se,geometry:Ze,material:mt,group:nn}=pe;if(mt.side===Hn&&se.layers.test(k.layers)){let $t=mt.side;mt.side=un,mt.needsUpdate=!0,sf(se,W,k,Ze,mt,nn),mt.side=$t,mt.needsUpdate=!0,vt=!0}}vt===!0&&(q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft))}C.setRenderTarget(dt,yt,Et),C.setClearColor(Yt,Ft),Wt!==void 0&&(k.viewport=Wt),C.toneMapping=Bt}function xo(M,L,W){let k=L.isScene===!0?L.overrideMaterial:null;for(let H=0,ft=M.length;H<ft;H++){let _t=M[H],{object:dt,geometry:yt,group:Et}=_t,Bt=_t.material;Bt.allowOverride===!0&&k!==null&&(Bt=k),dt.layers.test(W.layers)&&sf(dt,L,W,yt,Bt,Et)}}function sf(M,L,W,k,H,ft){F!==null&&H.isNodeMaterial&&F.setObject(M,H),M.onBeforeRender(C,L,W,k,H,ft),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(C,L,W,k,M,ft),H.transparent===!0&&H.side===Hn&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,C.renderBufferDirect(W,L,k,H,M,ft),H.side=pi,H.needsUpdate=!0,C.renderBufferDirect(W,L,k,H,M,ft),H.side=Hn):C.renderBufferDirect(W,L,k,H,M,ft),M.onAfterRender(C,L,W,k,H,ft)}function yo(M,L,W){L.isScene!==!0&&(L=fn);let k=V.get(M),H=T.state.lights,ft=T.state.shadowsArray,_t=H.state.version,dt=at.getParameters(M,H.state,ft,L,W,T.state.lightProbeGridArray),yt=at.getProgramCacheKey(dt),Et=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Bt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=rt.get(M.envMap||k.environment,Bt),k.envMapRotation=k.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Et===void 0&&(M.addEventListener("dispose",ai),Et=new Map,k.programs=Et);let Wt=Et.get(yt);if(Wt!==void 0){if(k.currentProgram===Wt&&k.lightsStateVersion===_t)return of(M,dt),Wt}else dt.uniforms=at.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,W,dt),M.onBeforeCompile(dt,C),Wt=at.acquireProgram(dt,yt),Et.set(yt,Wt),k.uniforms=dt.uniforms;let vt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(vt.clippingPlanes=Ct.uniform),of(M,dt),k.needsLights=qg(M),k.lightsStateVersion=_t,k.needsLights&&(vt.ambientLightColor.value=H.state.ambient,vt.lightProbe.value=H.state.probe,vt.sunLights.value=H.state.sun,vt.sunLightShadows.value=H.state.sunShadow,vt.directionalLights.value=H.state.directional,vt.directionalLightShadows.value=H.state.directionalShadow,vt.spotLights.value=H.state.spot,vt.spotLightShadows.value=H.state.spotShadow,vt.rectAreaLights.value=H.state.rectArea,vt.ltc_1.value=H.state.rectAreaLTC1,vt.ltc_2.value=H.state.rectAreaLTC2,vt.pointLights.value=H.state.point,vt.pointLightShadows.value=H.state.pointShadow,vt.hemisphereLights.value=H.state.hemi,vt.sunShadowMatrix.value=H.state.sunShadowMatrix,vt.sunShadowCascade.value=H.state.sunShadowCascade,vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,vt.spotLightMatrix.value=H.state.spotLightMatrix,vt.spotLightMap.value=H.state.spotLightMap,vt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Wt,k.uniformsList=null,Wt}function af(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Ys.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function of(M,L){let W=V.get(M);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Wg(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let W=0,k=M.length;W<k;W++){let H=M[W];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Xg(M,L,W,k,H){L.isScene!==!0&&(L=fn),q.resetTextureUnits();let ft=L.fog,_t=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,dt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:kt.workingColorSpace,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Et=rt.get(k.envMap||_t,yt),Bt=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),vt=!!W.morphAttributes.position,te=!!W.morphAttributes.normal,Le=!!W.morphAttributes.color,pe=ii;k.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(pe=C.toneMapping);let se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=se!==void 0?se.length:0,mt=V.get(k),nn=T.state.lights;if(Jt===!0&&(ue===!0||M!==J)){let de=M===J&&k.id===Y;Ct.setState(k,M,de)}let $t=!1;k.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==nn.state.version||mt.outputColorSpace!==dt||H.isBatchedMesh&&mt.batching===!1||!H.isBatchedMesh&&mt.batching===!0||H.isBatchedMesh&&mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&mt.instancing===!1||!H.isInstancedMesh&&mt.instancing===!0||H.isSkinnedMesh&&mt.skinning===!1||!H.isSkinnedMesh&&mt.skinning===!0||H.isInstancedMesh&&mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&mt.instancingMorph===!1&&H.morphTexture!==null||mt.envMap!==Et||k.fog===!0&&mt.fog!==ft||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==Ct.numPlanes||mt.numIntersection!==Ct.numIntersection)||mt.vertexAlphas!==Bt||mt.vertexTangents!==Wt||mt.morphTargets!==vt||mt.morphNormals!==te||mt.morphColors!==Le||mt.toneMapping!==pe||mt.morphTargetsCount!==Ze||!!mt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,mt.__version=k.version);let On=mt.currentProgram;$t===!0&&(On=yo(k,L,H),F&&k.isNodeMaterial&&F.onUpdateProgram(k,On,mt));let oi=!1,Xi=!1,es=!1,re=On.getUniforms(),Ae=mt.uniforms;if(y.useProgram(On.program)&&(oi=!0,Xi=!0,es=!0),k.id!==Y&&(Y=k.id,Xi=!0),mt.needsLights){let de=Wg(T.state.lightProbeGridArray,H);mt.lightProbeGrid!==de&&(mt.lightProbeGrid=de,Xi=!0)}if(oi||J!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),re.setValue(U,"projectionMatrix",M.projectionMatrix),re.setValue(U,"viewMatrix",M.matrixWorldInverse);let qi=re.map.cameraPosition;qi!==void 0&&qi.setValue(U,_e.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&re.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Xi=!0,es=!0)}if(mt.needsLights&&(nn.state.sunShadowMap.length>0&&re.setValue(U,"sunShadowMap",nn.state.sunShadowMap,q),nn.state.directionalShadowMap.length>0&&re.setValue(U,"directionalShadowMap",nn.state.directionalShadowMap,q),nn.state.spotShadowMap.length>0&&re.setValue(U,"spotShadowMap",nn.state.spotShadowMap,q),nn.state.pointShadowMap.length>0&&re.setValue(U,"pointShadowMap",nn.state.pointShadowMap,q)),H.isSkinnedMesh){re.setOptional(U,H,"bindMatrix"),re.setOptional(U,H,"bindMatrixInverse");let de=H.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),re.setValue(U,"boneTexture",de.boneTexture,q))}H.isBatchedMesh&&(re.setOptional(U,H,"batchingTexture"),re.setValue(U,"batchingTexture",H._matricesTexture,q),re.setOptional(U,H,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",H._indirectTexture,q),re.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",H._colorsTexture,q));let Yi=W.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&D.update(H,W,On),(Xi||mt.receiveShadow!==H.receiveShadow)&&(mt.receiveShadow=H.receiveShadow,re.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Ae.envMapIntensity.value=L.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=GS()),Xi){if(re.setValue(U,"toneMappingExposure",C.toneMappingExposure),mt.needsLights&&Yg(Ae,es),ft&&k.fog===!0&&Rt.refreshFogUniforms(Ae,ft),Rt.refreshMaterialUniforms(Ae,k,tt,Z,T.state.transmissionRenderTarget[M.id]),mt.needsLights&&mt.lightProbeGrid){let de=mt.lightProbeGrid;Ae.probesSH.value=de.texture,Ae.probesMin.value.copy(de.boundingBox.min),Ae.probesMax.value.copy(de.boundingBox.max),Ae.probesResolution.value.copy(de.resolution)}Ys.upload(U,af(mt),Ae,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ys.upload(U,af(mt),Ae,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&re.setValue(U,"center",H.center),re.setValue(U,"modelViewMatrix",H.modelViewMatrix),re.setValue(U,"normalMatrix",H.normalMatrix),re.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let de=k.uniformsGroups;for(let qi=0,ns=de.length;qi<ns;qi++){let cf=de[qi];nt.update(cf,On),nt.bind(cf,On)}}return On}function Yg(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function qg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(M,L,W){let k=V.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=L,V.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let W=V.get(M);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,W=0){Q=M,X=L,G=W;let k=null,H=!1,ft=!1;if(M){let dt=V.get(M);if(dt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(M.viewport),St.copy(M.scissor),Tt=M.scissorTest,y.viewport(et),y.scissor(St),y.setScissorTest(Tt),Y=-1;return}else if(dt.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(dt.__hasExternalTextures)q.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Bt=M.depthTexture;if(dt.__boundDepthTexture!==Bt){if(Bt!==null&&V.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}let yt=M.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ft=!0);let Et=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?k=Et[L][W]:k=Et[L],H=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?k=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Et)?k=Et[W]:k=Et,et.copy(M.viewport),St.copy(M.scissor),Tt=M.scissorTest}else et.copy(gt).multiplyScalar(tt).floor(),St.copy(Ht).multiplyScalar(tt).floor(),Tt=Fe;if(W!==0&&(k=O),y.bindFramebuffer(U.FRAMEBUFFER,k)&&y.drawBuffers(M,k),y.viewport(et),y.scissor(St),y.setScissorTest(Tt),H){let dt=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,W)}else if(ft){let dt=L;for(let yt=0;yt<M.textures.length;yt++){let Et=V.get(M.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,Et.__webglTexture,W,dt)}}else if(M!==null&&W!==0){let dt=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,W)}Y=-1};function lf(M){let L=V.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=R.textureFormatReadable(M.format),L.__typeReadable=R.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,W,k,H,ft,_t,dt=0){if(!(M&&M.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){y.bindFramebuffer(U.FRAMEBUFFER,yt);try{let Et=M.textures[dt],Bt=Et.format,Wt=Et.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt);let vt=lf(Et);if(vt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-k&&W>=0&&W<=M.height-H&&U.readPixels(L,W,k,H,ct.convert(Bt),ct.convert(Wt),ft)}finally{let Et=Q!==null?V.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,L,W,k,H,ft,_t,dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(L>=0&&L<=M.width-k&&W>=0&&W<=M.height-H){y.bindFramebuffer(U.FRAMEBUFFER,yt);let Et=M.textures[dt],Bt=Et.format,Wt=Et.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt);let vt=lf(Et);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.bufferData(U.PIXEL_PACK_BUFFER,ft.byteLength,U.STREAM_READ),U.readPixels(L,W,k,H,ct.convert(Bt),ct.convert(Wt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Le=Q!==null?V.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Le);let pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Pp(U,pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ft),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(te),U.deleteSync(pe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,W=0){let k=Math.pow(2,-W),H=Math.floor(M.image.width*k),ft=Math.floor(M.image.height*k),_t=L!==null?L.x:0,dt=L!==null?L.y:0;q.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,_t,dt,H,ft),y.unbindTexture()},this.copyTextureToTexture=function(M,L,W=null,k=null,H=0,ft=0){let _t,dt,yt,Et,Bt,Wt,vt,te,Le,pe=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(W!==null)_t=W.max.x-W.min.x,dt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Bt=W.min.y,Wt=W.isBox3?W.min.z:0;else{let Ae=Math.pow(2,-H);_t=Math.floor(pe.width*Ae),dt=Math.floor(pe.height*Ae),M.isDataArrayTexture?yt=pe.depth:M.isData3DTexture?yt=Math.floor(pe.depth*Ae):yt=1,Et=0,Bt=0,Wt=0}k!==null?(vt=k.x,te=k.y,Le=k.z):(vt=0,te=0,Le=0);let se=ct.convert(L.format),Ze=ct.convert(L.type),mt;L.isData3DTexture?(q.setTexture3D(L,0),mt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(q.setTexture2DArray(L,0),mt=U.TEXTURE_2D_ARRAY):(q.setTexture2D(L,0),mt=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let nn=y.getParameter(U.UNPACK_ROW_LENGTH),$t=y.getParameter(U.UNPACK_IMAGE_HEIGHT),On=y.getParameter(U.UNPACK_SKIP_PIXELS),oi=y.getParameter(U.UNPACK_SKIP_ROWS),Xi=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,pe.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),y.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt);let es=M.isDataArrayTexture||M.isData3DTexture,re=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Ae=V.get(M),Yi=V.get(L),de=V.get(Ae.__renderTarget),qi=V.get(Yi.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,de.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ns=0;ns<yt;ns++)es&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(M).__webglTexture,H,Wt+ns),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(L).__webglTexture,ft,Le+ns)),U.blitFramebuffer(Et,Bt,_t,dt,vt,te,_t,dt,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||V.has(M)){let Ae=V.get(M),Yi=V.get(L);y.bindFramebuffer(U.READ_FRAMEBUFFER,P),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let de=0;de<yt;de++)es?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,H,Wt+de):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,H),re?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yi.__webglTexture,ft,Le+de):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yi.__webglTexture,ft),H!==0?U.blitFramebuffer(Et,Bt,_t,dt,vt,te,_t,dt,U.COLOR_BUFFER_BIT,U.NEAREST):re?U.copyTexSubImage3D(mt,ft,vt,te,Le+de,Et,Bt,_t,dt):U.copyTexSubImage2D(mt,ft,vt,te,Et,Bt,_t,dt);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else re?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(mt,ft,vt,te,Le,_t,dt,yt,se,Ze,pe.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(mt,ft,vt,te,Le,_t,dt,yt,se,pe.data):U.texSubImage3D(mt,ft,vt,te,Le,_t,dt,yt,se,Ze,pe):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ft,vt,te,_t,dt,se,Ze,pe.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ft,vt,te,pe.width,pe.height,se,pe.data):U.texSubImage2D(U.TEXTURE_2D,ft,vt,te,_t,dt,se,Ze,pe);y.pixelStorei(U.UNPACK_ROW_LENGTH,nn),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$t),y.pixelStorei(U.UNPACK_SKIP_PIXELS,On),y.pixelStorei(U.UNPACK_SKIP_ROWS,oi),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Xi),ft===0&&L.generateMipmaps&&U.generateMipmap(mt),y.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){X=0,G=0,Q=null,y.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}};function Mh(r,t){if(t===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Gs||t===$a){let e=r.getIndex();if(e===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===Gs)for(let s=1;s<=n;s++)i.push(e.getX(0)),i.push(e.getX(s)),i.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(e.getX(s)),i.push(e.getX(s+1)),i.push(e.getX(s+2))):(i.push(e.getX(s+2)),i.push(e.getX(s+1)),i.push(e.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}function hm(r){let t=new Map,e=new Map,n=r.clone();return dm(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=t.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function dm(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)dm(r.children[n],t.children[n],e)}var to=class extends fi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ph(e)}),this.register(function(e){return new Ih(e)}),this.register(function(e){return new kh(e)}),this.register(function(e){return new Hh(e)}),this.register(function(e){return new Vh(e)}),this.register(function(e){return new Nh(e)}),this.register(function(e){return new Dh(e)}),this.register(function(e){return new Uh(e)}),this.register(function(e){return new Fh(e)}),this.register(function(e){return new Ch(e)}),this.register(function(e){return new Oh(e)}),this.register(function(e){return new Lh(e)}),this.register(function(e){return new zh(e)}),this.register(function(e){return new Bh(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new vc(e,Vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new vc(e,Vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Gh(e)})}load(t,e,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=zi.extractUrlBase(t);a=zi.resolveURL(c,this.path)}else a=zi.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Us(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,a,function(u){e(u),s.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,a={},o={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===_m){try{a[Vt.KHR_BINARY_GLTF]=new Wh(t)}catch(h){i&&i(h);return}s=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Jh(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Vt.KHR_MATERIALS_UNLIT:a[h]=new Rh;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Xh(s,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[h]=new Yh;break;case Vt.KHR_MESH_QUANTIZATION:a[h]=new qh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function XS(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}function Ce(r,t,e){let n=r.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ah=class{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,u=new Mt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ni(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ur(u),c.distance=h;break;case"spot":c=new Ua(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}},Rh=class{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pn}extendParams(t,e,n){let i=[];t.color=new Mt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],on),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Te))}return Promise.all(i)}},Ch=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ph=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new At(s,s)}return Promise.all(i)}},Ih=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Lh=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Nh=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],on)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Te)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Dh=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Uh=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(s[0],s[1],s[2],on),Promise.all(i)}},Fh=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},Oh=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(s[0],s[1],s[2],on),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Te)),Promise.all(i)}},Bh=class{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}},zh=class{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?_n:null}extendMaterialParams(t,e){let n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},kh=class{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},Hh=class{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}},Vh=class{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(t,a.source,l)}},vc=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Gh=class{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Vn.TRIANGLES&&c.mode!==Vn.TRIANGLE_STRIP&&c.mode!==Vn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let _=new Ut,p=new N,m=new ln,b=new N(1,1,1),A=new Ra(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),A.setMatrixAt(v,_.compose(p,m,b));let S=null;for(let v in l)if(v==="_COLOR_0"){let T=l[v];A.instanceColor=new Ni(T.array,T.itemSize,T.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(S===null){let w=A.geometry;S=new Ue,S.name=w.name;for(let x in w.attributes)S.setAttribute(x,w.attributes[x]);for(let x in w.morphAttributes)S.morphAttributes[x]=w.morphAttributes[x];w.index!==null&&S.setIndex(w.index),S.morphTargetsRelative=w.morphTargetsRelative;for(let x of w.groups)S.addGroup(x.start,x.count,x.materialIndex);w.boundingBox!==null&&(S.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(S.boundingSphere=w.boundingSphere.clone()),S.drawRange.start=w.drawRange.start,S.drawRange.count=w.drawRange.count,S.userData=Object.assign({},w.userData),A.geometry=S}let T=l[v];S.setAttribute(v,new Ni(T.array,T.itemSize,T.normalized))}ge.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},_m="glTF",Qa=12,fm={JSON:1313821514,BIN:5130562},Wh=class{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Qa,s=new DataView(t,Qa),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===fm.JSON){let c=new Uint8Array(t,Qa+a,o);this.content=n.decode(c)}else if(l===fm.BIN){let c=Qa+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=$h[u]||u.toLowerCase();o[h]=a[u]}for(let u in t.attributes){let h=$h[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[t.attributes[u]],f=$s[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(f)},o,c,on,d)})})}},Yh=class{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},qh=class{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}},Sc=class extends di{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,g=t*c,_=g-c,p=-2*f+3*d,m=f-d,b=1-p,A=m-d+h;for(let S=0;S!==o;S++){let v=a[_+S+o],T=a[_+S+l]*u,w=a[g+S+o],x=a[g+S]*u;s[S]=b*v+A*T+p*w+m*x}return s}},YS=new ln,Zh=class extends Sc{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return YS.fromArray(s).normalize().toArray(s),s}},Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pm={9728:Re,9729:fe,9984:Al,9985:ks,9986:Hr,9987:yn},mm={33071:sn,33648:Ms,10497:ei},Th={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qS={CUBICSPLINE:void 0,LINEAR:wr,STEP:Er},Eh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Di({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),r.DefaultMaterial}function Wr(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function xi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function $S(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){let h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,u=t.length;c<u;c++){let h=t[c];if(n){let d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function KS(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JS(r){let t,e=r.extensions&&r.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+wh(e.attributes):t=r.indices+":"+wh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+wh(r.targets[n]);return t}function wh(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Kh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var QS=new Ut,Jh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new XS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Nr(this.options.manager):this.textureLoader=new Fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Wr(s,o,i),xi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(zi.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let a=Th[i.type],o=$s[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new me(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Th[i.type],c=$s[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,p;if(f&&f!==h){let m=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,A=e.cache.get(b);A||(_=new c(o,m*f,i.count*f/u),A=new Rr(_,f/u),e.cache.add(b,A)),p=new er(A,l,d%f/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),p=new me(_,l,g);if(i.sparse!==void 0){let m=Th.SCALAR,b=$s[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,v=new b(a[1],A,i.sparse.count*m),T=new c(a[2],S,i.sparse.count*l);o!==null&&(p=new me(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,x=v.length;w<x;w++){let E=v[w];if(p.setX(E,T[w*l]),l>=2&&p.setY(E,T[w*l+1]),l>=3&&p.setZ(E,T[w*l+2]),l>=4&&p.setW(E,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){let i=this,s=this.json,a=s.textures[t],o=s.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return u.magFilter=pm[d.magFilter]||fe,u.minFilter=pm[d.minFilter]||yn,u.wrapS=mm[d.wrapS]||ei,u.wrapT=mm[d.wrapT]||ei,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Re&&u.minFilter!==fe,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());let a=i.images[t],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){let p=new Oe(_);p.needsUpdate=!0,d(p)}),e.load(zi.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),xi(h,a),h.userData.mimeType=a.mimeType||jS(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Vt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ls,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new nr,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Di}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],a,o={},l=s.extensions||{},c=[];if(l[Vt.KHR_MATERIALS_UNLIT]){let h=i[Vt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,e))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Mt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],on),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",h.baseColorTexture,Te)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Hn);let u=s.alphaMode||Eh.OPAQUE;if(u===Eh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Eh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Pn&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new At(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Pn&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Pn){let h=s.emissiveFactor;o.emissive=new Mt().setRGB(h[0],h[1],h[2],on)}return s.emissiveTexture!==void 0&&a!==Pn&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,Te)),Promise.all(c).then(function(){let h=new a(o);return s.name&&(h.name=s.name),xi(h,s),e.associations.set(h,{materials:t}),s.extensions&&Wr(i,h,s),h})}createUniqueName(t){let e=ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return gm(l,o,e)})}let a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o],u=JS(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=gm(new Ue,c,e),c.mode===Vn.TRIANGLE_STRIP?d=d.then(f=>Mh(f,$a)):c.mode===Vn.TRIANGLE_FAN&&(d=d.then(f=>Mh(f,Gs))),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?ZS(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],p=a[f],m,b=c[f];if(p.mode===Vn.TRIANGLES||p.mode===Vn.TRIANGLE_STRIP||p.mode===Vn.TRIANGLE_FAN||p.mode===void 0){let A=s.isSkinnedMesh===!0,S=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");A&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&S?new wa(_,b):new xe(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Vn.LINES)m=new Ca(_,b);else if(p.mode===Vn.LINE_STRIP)m=new Pr(_,b);else if(p.mode===Vn.LINE_LOOP)m=new Ir(_,b);else if(p.mode===Vn.POINTS)m=new Lr(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&KS(m,s),m.name=e.createUniqueName(s.name||"mesh_"+t),xi(m,s),p.extensions&&Wr(i,m,p),e.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Wr(i,h[0],s),h[0];let d=new pn;s.extensions&&Wr(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new De(oe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new kn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),xi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ut;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Aa(o,l)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let A=0,S=d.length;A<S;A++){let v=d[A],T=f[A],w=g[A],x=_[A],E=p[A];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=n._createAnimationTracks(v,T,w,x,E);if(C)for(let I=0;I<C.length;I++)m.push(C[I])}let b=new Na(s,void 0,m);return xi(b,i),b})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,QS)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,g=h[0];u.pivot=new N().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Ps:c.length>1?u=new pn:c.length===1?u=c[0]:u=new ge,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),xi(u,s),s.extensions&&Wr(n,u,s),s.matrix!==void 0){let h=new Ut;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new pn;n.name&&(s.name=i.createUniqueName(n.name)),xi(s,n),n.extensions&&Wr(e,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?s.add(hm(d)):s.add(d)}let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof cn||d instanceof Oe)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){let a=[],o=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}lr[s.path]===lr.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(o);let u;switch(lr[s.path]){case lr.weights:u=Fi;break;case lr.rotation:u=Oi;break;case lr.translation:case lr.scale:u=rr;break;default:n.itemSize===1?u=Fi:u=rr;break}let h=i.interpolation!==void 0?qS[i.interpolation]:wr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let _=new u(l[f]+"."+lr[s.path],e.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Kh(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Oi?Zh:Sc;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tb(r,t,e){let n=t.attributes,i=new Cn;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){let u=Kh($s[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new N,l=new N;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Kh($s[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function gm(r,t,e){let n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=$h[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return kt.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${kt.workingColorSpace}" not supported.`),xi(r,t),tb(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?$S(r,t.targets,e):r})}function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ao={duration:.5,overwrite:!1,delay:0},md,We,ye,Wn=1e8,ce=1/Wn,sd=Math.PI*2,eb=sd/4,nb=0,Am=Math.sqrt,ib=Math.cos,rb=Math.sin,He=function(t){return typeof t=="string"},Ee=function(t){return typeof t=="function"},Vi=function(t){return typeof t=="number"},Ic=function(t){return typeof t>"u"},Si=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},gd=function(){return typeof window<"u"},bc=function(t){return Ee(t)||He(t)},Rm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,sb=/random\([^)]+\)/g,ab=/,\s*/g,xm=/(?:-?\.?\d|\.)+/gi,_d=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xd=/[+-]=-?[.\d]+/,ob=/[^,'"\[\]\s]+/gi,lb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,be,yi,ad,yd,Dn={},wc={},Cm,Pm=function(t){return(wc=Js(t,Dn))&&en},Lc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},oo=function(t,e){return!e&&console.warn(t)},Im=function(t,e){return t&&(Dn[t]=e)&&wc&&(wc[t]=e)||Dn},lo=function(){return 0},cb={suppressEvents:!0,isStart:!0,kill:!1},Mc={suppressEvents:!0,kill:!1},ub={suppressEvents:!0},vd={},ur=[],od={},Lm,Sn={},Qh={},ym=30,Tc=[],Sd="",bd=function(t){var e=t[0],n,i;if(Si(e)||Ee(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Tc.length;i--&&!Tc[i].targetTest(e););n=Tc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wd(t[i],n)))||t.splice(i,1);return t},hr=function(t){return t._gsap||bd(Xn(t))[0]._gsap},Md=function(t,e,n){return(n=t[e])&&Ee(n)?t[e]():Ic(n)&&t.getAttribute&&t.getAttribute(e)||n},hn=function(t,e){return(t=t.split(",")).forEach(e)||t},we=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},$r=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},hb=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ac=function(){var t=ur.length,e=ur.slice(0),n,i;for(od={},ur.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Td=function(t){return!!(t._initted||t._startAt||t.add)},Nm=function(t,e,n,i){ur.length&&!We&&Ac(),t.render(e,n,i||!!(We&&e<0&&Td(t))),ur.length&&!We&&Ac()},Dm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ob).length<2?e:He(t)?t.trim():t},Um=function(t){return t},Un=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},db=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Js=function(t,e){for(var n in e)t[n]=e[n];return t},vm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Si(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Rc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},io=function(t){var e=t.parent||be,n=t.keyframes?db(tn(t.keyframes)):Un;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},fb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Fm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Nc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},dr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},pb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ld=function(t,e,n,i){return t._startAt&&(We?t._startAt.revert(Mc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},mb=function r(t){return!t||t._ts&&r(t.parent)},Sm=function(t){return t._repeat?js(t._tTime,t=t.duration()+t._rDelay)*t:0},js=function(t,e){var n=Math.floor(t=Se(t/e));return t&&n===t?n-1:n},Cc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Dc=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},Uc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Dc(t),n._dirty||Xr(n,t)),t},Om=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Cc(t.rawTime(),e),(!e._dur||ho(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),Xr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},vi=function(t,e,n,i){return e.parent&&dr(e),e._start=Se((Vi(n)?n:n||t!==be?Gn(t,n,e):t._time)+e._delay),e._end=Se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Fm(t,e,"_first","_last",t._sort?"_start":0),cd(e)||(t._recent=e),i||Om(t,e),t._ts<0&&Uc(t,t._tTime),t},Bm=function(t,e){return(Dn.ScrollTrigger||Lc("scrollTrigger",e))&&Dn.ScrollTrigger.create(e,t)},zm=function(t,e,n,i,s){if(Cd(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!We&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Lm!==bn.frame)return ur.push(t),t._lazy=[s,i],1},gb=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},cd=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},_b=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&gb(t)&&!(!t._initted&&cd(t))||(t._ts<0||t._dp._ts<0)&&!cd(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=ho(0,t._tDur,e),u=js(l,o),t._yoyo&&u&1&&(a=1-a),u!==js(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||We||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&zm(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ld(t,e,n,!0),t._onUpdate&&!n&&Nn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&dr(t,1),!n&&!We&&(Nn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},xb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Qs=function(t,e,n,i){var s=t._repeat,a=Se(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Se(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Uc(t,t._tTime=t._tDur*o),t.parent&&Dc(t),n||Xr(t.parent,t),t},bm=function(t){return t instanceof Qe?Xr(t):Qs(t,t._dur)},yb={_start:0,endTime:lo,totalDuration:lo},Gn=function r(t,e,n){var i=t.labels,s=t._recent||yb,a=t.duration()>=Wn?s.endTime(!1):t._dur,o,l,c;return He(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(tn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ro=function(t,e,n){var i=Vi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;a.immediateRender=Mn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Pe(e[0],a,e[s+1])},fr=function(t,e){return t||t===0?e(t):e},ho=function(t,e,n){return n<t?t:n>e?e:n},Xe=function(t,e){return!He(t)||!(e=lb.exec(t))?"":e[1]},vb=function(t,e,n){return fr(n,function(i){return ho(t,e,i)})},ud=[].slice,km=function(t,e){return t&&Si(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Si(t[0]))&&!t.nodeType&&t!==yi},Sb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return He(i)&&!e||km(i,1)?(s=n).push.apply(s,Xn(i)):n.push(i)})||n},Xn=function(t,e,n){return ye&&!e&&ye.selector?ye.selector(t):He(t)&&!n&&(ad||!ta())?ud.call((e||yd).querySelectorAll(t),0):tn(t)?Sb(t,n):km(t)?ud.call(t,0):t?[t]:[]},hd=function(t){return t=Xn(t)[0]||oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Xn(e,n.querySelectorAll?n:n===t?oo("Invalid scope")||yd.createElement("div"):t)}},Hm=function(t){return t.sort(function(){return .5-Math.random()})},Vm=function(t){if(Ee(t))return t;var e=Si(t)?t:{each:t},n=Yr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return He(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||e).length,p=a[_],m,b,A,S,v,T,w,x,E;if(!p){if(E=e.grid==="auto"?0:(e.grid||[1,Wn])[1],!E){for(w=-Wn;w<(w=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=a[_]=[],m=l?Math.min(E,_)*u-.5:i%E,b=E===Wn?0:l?_*h/E-.5:i/E|0,w=0,x=Wn,T=0;T<_;T++)A=T%E-m,S=b-(T/E|0),p[T]=v=c?Math.abs(c==="y"?S:A):Am(A*A+S*S),v>w&&(w=v),v<x&&(x=v);i==="random"&&Hm(p),p.max=w-x,p.min=x,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Xe(e.amount||e.each)||0,n=n&&_<0?Db(n):n}return _=(p[d]-p.min)/p.max||0,Se(p.b+(n?n(_):_)*p.v)+p.u}},dd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Se(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Vi(n)?0:Xe(n))}},Gm=function(t,e){var n=tn(t),i,s;return!n&&Si(t)&&(i=n=t.radius||Wn,t.values?(t=Xn(t.values),(s=!Vi(t[0]))&&(i*=i)):t=dd(t.increment)),fr(e,n?Ee(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Wn,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-o,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Vi(a)?u:u+Xe(a)}:dd(t))},Wm=function(t,e,n,i){return fr(tn(t)?!e:n===!0?!!(n=0):!i,function(){return tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},bb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Mb=function(t,e){return function(n){return t(parseFloat(n))+(e||Xe(n))}},Tb=function(t,e,n){return Ym(t,e,0,1,n)},Xm=function(t,e,n){return fr(n,function(i){return t[~~e(i)]})},Eb=function r(t,e,n){var i=e-t;return tn(t)?Xm(t,r(0,t.length),e):fr(n,function(s){return(i+(s-t)%i)%i+t})},wb=function r(t,e,n){var i=e-t,s=i*2;return tn(t)?Xm(t,r(0,t.length-1),e):fr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ea=function(t){return t.replace(sb,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ab);return Wm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ym=function(t,e,n,i,s){var a=e-t,o=i-n;return fr(s,function(l){return n+((l-t)/a*o||0)})},Ab=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=He(t),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(tn(t)&&!tn(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=Js(tn(t)?[]:{},t));if(!u){for(l in e)Ad.call(o,t,l,"get",e[l]);s=function(g){return Ld(g,o)||(a?t.p:t)}}}return fr(n,s)},Mm=function(t,e,n){var i=t.labels,s=Wn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Nn=function(t,e,n){var i=t.vars,s=i[e],a=ye,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ur.length&&Ac(),o&&(ye=o),u=l?s.apply(c,l):s.call(c),ye=a,u},eo=function(t){return dr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!We),t.progress()<1&&Nn(t,"onInterrupt"),t},Ks,qm=[],Zm=function(t){if(t)if(t=!t.name&&t.default||t,gd()||t.headless){var e=t.name,n=Ee(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:lo,render:Ld,add:Ad,kill:Wb,modifier:Gb,rawVars:0},a={targetTest:0,get:0,getSetter:Fc,aliases:{},register:0};if(ta(),t!==i){if(Sn[e])return;Un(i,Un(Rc(t,s),a)),Js(i.prototype,Js(s,Rc(t,a))),Sn[i.prop=e]=i,t.targetTest&&(Tc.push(i),vd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Im(e,i),t.register&&t.register(en,i,dn)}else qm.push(t)},le=255,no={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},td=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*le+.5|0},$m=function(t,e,n){var i=t?Vi(t)?[t>>16,t>>8&le,t&le]:0:no.black,s,a,o,l,c,u,h,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),no[t])i=no[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&le,i&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(xm),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=td(l+1/3,s,a),i[1]=td(l,s,a),i[2]=td(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(_d),n&&i.length<4&&(i[3]=1),i}else i=t.match(xm)||no.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/le,a=i[1]/le,o=i[2]/le,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Km=function(t){var e=[],n=[],i=-1;return t.split(Hi).forEach(function(s){var a=s.match(Zr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Tm=function(t,e,n){var i="",s=(t+i).match(Hi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=$m(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Km(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Hi,"1").split(Zr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Hi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Hi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in no)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Rb=/hsl[a]?\(/,Ed=function(t){var e=t.join(" "),n;if(Hi.lastIndex=0,Hi.test(e))return n=Rb.test(e),t[1]=Tm(t[1],n),t[0]=Tm(t[0],n,Km(t[1])),!0},co,bn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(p){var m=r()-i,b=p===!0,A,S,v,T;if((m>t||m<0)&&(n+=m-e),i+=m,v=i-n,A=v-a,(A>0||b)&&(T=++h.frame,d=v-h.time*1e3,h.time=v=v/1e3,a+=A+(A>=s?4:s-A),S=1),b||(l=c(_)),S)for(f=0;f<o.length;f++)o[f](v,d,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Cm&&(!ad&&gd()&&(yi=ad=window,yd=yi.document||{},Dn.gsap=en,(yi.gsapVersions||(yi.gsapVersions=[])).push(en.version),Pm(wc||yi.GreenSockGlobals||!yi.gsap&&yi||{}),qm.forEach(Zm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},co=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),co=0,c=lo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,b){var A=m?function(S,v,T,w){p(S,v,T,w),h.remove(A)}:p;return h.remove(p),o[b?"unshift":"push"](A),ta(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},h})(),ta=function(){return!co&&bn.wake()},Zt={},Cb=/^[\d.\-M][\d.\-,\s]/,Pb=/["']/g,Ib=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Pb,"").trim():+c,i=l.substr(o+1).trim();return e},Lb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Nb=function(t){var e=(t+"").split("("),n=Zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ib(e[1])]:Lb(t).split(",").map(Dm)):Zt._CE&&Cb.test(t)?Zt._CE("",t):n},Db=function(t){return function(e){return 1-t(1-e)}},Yr=function(t,e){return t&&(Ee(t)?t:Zt[t]||Nb(t))||e},Kr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return hn(t,function(o){Zt[o]=Dn[o]=s,Zt[a=o.toLowerCase()]=n;for(var l in s)Zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Zt[o+"."+l]=s[l]}),s},Jm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ed=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/sd*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*rb((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Jm(o);return s=sd/s,l.config=function(c,u){return r(t,c,u)},l},nd=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Jm(n);return i.config=function(s){return r(t,s)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Kr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Zt.Linear.easeNone=Zt.none=Zt.Linear.easeIn;Kr("Elastic",ed("in"),ed("out"),ed());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(Am(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-ib(r*eb)+1});Kr("Back",nd("in"),nd("out"),nd());Zt.SteppedEase=Zt.steps=Dn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ce;return function(o){return((i*ho(0,a,o)|0)+s)*n}}};ao.ease=Zt["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sd+=r+","+r+"Params,"});var wd=function(t,e){this.id=nb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Md,this.set=e?e.getSetter:Fc},uo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qs(this,+e.duration,1,1),this.data=e.data,ye&&(this._ctx=ye,ye.data.push(this)),co||bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ta(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uc(this,n),!s._dp||s.parent||Om(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Nm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?js(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Cc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(ho(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Dc(this),pb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ta(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Se(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ub);var i=We;return We=n,Td(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),We=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Gn(this,n),Mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i)),this._dur||(this._zTime=-ce),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ce)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ee(n)?n:Um,l=function(){var u=i.then;i.then=null,s&&s(),Ee(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){eo(this)},r})();Un(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var Qe=(function(r){wm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),be&&vi(n.parent||be,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bm(ki(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ro(0,arguments,this),this},e.from=function(i,s,a){return ro(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ro(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,io(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pe(i,s,Gn(this,a),1),this},e.call=function(i,s,a){return vi(this,Pe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Pe(i,a,Gn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,io(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,io(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Se(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,b,A,S,v,T,w;if(this!==be&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,S=this._start,A=this._ts,m=!A,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=Se(u%p),u===l?(_=this._repeat,d=c):(v=Se(u/p),_=~~v,_&&_===v&&(d=c,_--),d>c&&(d=c)),v=js(this._tTime,p),!o&&this._tTime&&v!==_&&this._tTime-v*p-this._dur<=0&&(v=_),T&&_&1&&(d=c-d,w=1),_!==v&&!this._lock){var x=T&&v&1,E=x===(T&&_&1);if(_<v&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Se(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,v=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=xb(this,Se(o),Se(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!v&&(Nn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=-ce);break}}f=g}else{f=this._last;for(var C=i<0?i:d;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||We&&Td(f)),d!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=C?-ce:ce);break}}f=g}}if(b&&!s&&(this.pause(),b.render(d>=o?0:-ce)._zTime=d>=o?1:-1,this._ts))return this._start=S,Dc(this),this.render(i,s,a);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Nn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Vi(s)||(s=Gn(this,s,i)),!(i instanceof uo)){if(tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(He(i))return this.addLabel(i,s);if(Ee(i))i=Pe.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return He(i)?this.removeLabel(i):Ee(i)?this.killTweensOf(i):(i.parent===this&&Nc(this,i),i===this._recent&&(this._recent=this._last),Xr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Gn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Pe.delayedCall(0,s||lo,a);return o.data="isPause",this._hasPause=1,vi(this,o,Gn(this,i))},e.removePause=function(i){var s=this._first;for(i=Gn(this,i);s;)s._start===i&&s.data==="isPause"&&dr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)cr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Xn(i),l=this._first,c=Vi(s),u;l;)l instanceof Pe?hb(l._targets,o)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Gn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Pe.to(a,Un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ce,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Qs(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Un({startAt:{time:Gn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Mm(this,Gn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Mm(this,Gn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Se(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Xr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Wn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,vi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Se(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Qs(a,a===be&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(be._ts&&(Nm(be,Cc(i,be)),Lm=bn.frame),bn.frame>=ym){ym+=Tn.autoSleep||120;var s=be._first;if((!s||!s._ts)&&Tn.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},t})(uo);Un(Qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ub=function(t,e,n,i,s,a,o){var l=new dn(this._pt,t,e,0,1,Id,null,s),c=0,u=0,h,d,f,g,_,p,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ea(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),d=n.match(jh)||[];h=jh.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?$r(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=jh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(xd.test(i)||m)&&(l.e=0),this._pt=l,l},Ad=function(t,e,n,i,s,a,o,l,c,u){Ee(i)&&(i=i(s||0,t,a));var h=t[e],d=n!=="get"?n:Ee(h)?c?t[e.indexOf("set")||!Ee(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=Ee(h)?c?kb:tg:Pd,g;if(He(i)&&(~i.indexOf("random(")&&(i=ea(i)),i.charAt(1)==="="&&(g=$r(d,i)+(Xe(d)||0),(g||g===0)&&(i=g))),!u||d!==i||fd)return!isNaN(d*i)&&i!==""?(g=new dn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?Vb:eg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&Lc(e,i),Ub.call(this,t,e,d,i,f,l||Tn.stringFilter,c))},Fb=function(t,e,n,i,s){if(Ee(t)&&(t=so(t,s,e,n,i)),!Si(t)||t.style&&t.nodeType||tn(t)||Rm(t))return He(t)?so(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=so(t[o],s,e,n,i);return a},Rd=function(t,e,n,i,s,a){var o,l,c,u;if(Sn[t]&&(o=new Sn[t]).init(s,o.rawVars?e[t]:Fb(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new dn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ks))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},cr,fd,Cd=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,b=m&&m.data==="nested"?m.vars.targets:p,A=t._overwrite==="auto"&&!md,S=t.timeline,v=i.easeReverse||h,T,w,x,E,C,I,F,O,P,z,X,G,Q;if(S&&(!d||!s)&&(s="none"),t._ease=Yr(s,ao.ease),t._rEase=v&&(Yr(v)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||d&&!i.stagger){if(O=p[0]?hr(p[0]).harness:0,G=O&&i[O.prop],T=Rc(i,vd),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Mc:cb),_._lazy=0),a){if(dr(t._startAt=Pe.set(p,Un({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We||!o&&!f)&&t._startAt.revert(Mc),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),x=Un({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Mn(l),immediateRender:o,stagger:0,parent:m},T),G&&(x[O.prop]=G),dr(t._startAt=Pe.set(p,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We?t._startAt.revert(Mc):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Mn(l)||l&&!g,w=0;w<p.length;w++){if(C=p[w],F=C._gsap||bd(p)[w]._gsap,t._ptLookup[w]=z={},od[F.id]&&ur.length&&Ac(),X=b===p?w:b.indexOf(C),O&&(P=new O).init(C,G||T,t,X,b)!==!1&&(t._pt=E=new dn(t._pt,C,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(Y){z[Y]=E}),P.priority&&(I=1)),!O||G)for(x in T)Sn[x]&&(P=Rd(x,T,t,X,C,b))?P.priority&&(I=1):z[x]=E=Ad.call(t,C,x,"get",T[x],X,b,0,i.stringFilter);t._op&&t._op[w]&&t.kill(C,t._op[w]),A&&t._pt&&(cr=t,be.killTweensOf(C,z,t.globalTime(e)),Q=!t.parent,cr=0),t._pt&&l&&(od[F.id]=1)}I&&Nd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,d&&e<=0&&S.render(Wn,!0,!0)},Ob=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return fd=1,t.vars[e]="+=0",Cd(t,o),fd=0,l?oo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=we(n)+Xe(h.e)),h.b&&(h.b=u.s+Xe(h.b))},Bb=function(t,e){var n=t[0]?hr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Js({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},zb=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(tn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},so=function(t,e,n,i,s){return Ee(t)?t.call(e,n,i,s):He(t)&&~t.indexOf("random(")?ea(t):t},jm=Sd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Qm={};hn(jm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Qm[r]=1});var Pe=(function(r){wm(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:io(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||be,b=(tn(n)||Rm(n)?Vi(n[0]):"length"in i)?[n]:Xn(n),A,S,v,T,w,x,E,C;if(o._targets=b.length?bd(b):oo("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||bc(c)||bc(u)){i=o.vars;var I=i.easeReverse||i.yoyoEase;if(A=o.timeline=new Qe({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:b}),A.kill(),A.parent=A._dp=ki(o),A._start=0,d||bc(c)||bc(u)){if(T=b.length,E=d&&Vm(d),Si(d))for(w in d)~jm.indexOf(w)&&(C||(C={}),C[w]=d[w]);for(S=0;S<T;S++)v=Rc(i,Qm),v.stagger=0,I&&(v.easeReverse=I),C&&Js(v,C),x=b[S],v.duration=+so(c,ki(o),S,x,b),v.delay=(+so(u,ki(o),S,x,b)||0)-o._delay,!d&&T===1&&v.delay&&(o._delay=u=v.delay,o._start+=u,v.delay=0),A.to(x,v,E?E(S,x,b):0),A._ease=Zt.none;A.duration()?c=u=0:o.timeline=0}else if(g){io(Un(A.vars.defaults,{ease:"none"})),A._ease=Yr(g.ease||i.ease||"none");var F=0,O,P,z;if(tn(g))g.forEach(function(X){return A.to(b,X,">")}),A.duration();else{v={};for(w in g)w==="ease"||w==="easeEach"||zb(w,g[w],v,g.easeEach);for(w in v)for(O=v[w].sort(function(X,G){return X.t-G.t}),F=0,S=0;S<O.length;S++)P=O[S],z={ease:P.e,duration:(P.t-(S?O[S-1].t:0))/100*c},z[w]=P.v,A.to(b,z,F),F+=z.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return f===!0&&!md&&(cr=ki(o),be.killTweensOf(b),cr=0),vi(m,ki(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Se(m._time)&&Mn(h)&&mb(ki(o))&&m.data!=="nested")&&(o._tTime=-ce,o.render(Math.max(0,-u)||0)),p&&Bm(ki(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ce&&!u?l:i<ce?0:i,d,f,g,_,p,m,b,A;if(!c)_b(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Se(h%_),h===l?(g=this._repeat,d=c):(p=Se(h/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),p=js(this._tTime,_),d===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Se(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(zm(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=d<o;if(S!==this._inv){var v=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=v?(S?-1:1)/v:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Nn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ld(this,i,s,a),Nn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ld(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&dr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(Nn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){co||bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cd(this,c),u=this._ease(c/this._dur),Ob(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Uc(this,0),this.parent||Fm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!We),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,cr&&cr.vars.overwrite!==!0)._first||eo(this),this.parent&&a!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Xn(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&fb(o,l))return s==="all"&&(this._pt=0),eo(this);for(h=this._op=this._op||[],s!=="all"&&(He(s)&&(_={},hn(s,function(b){return _[b]=1}),s=_),s=Bb(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Nc(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&eo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ro(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ro(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return be.killTweensOf(i,s,a)},t})(uo);Un(Pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(r){Pe[r]=function(){var t=new Qe,e=ud.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Pd=function(t,e,n){return t[e]=n},tg=function(t,e,n){return t[e](n)},kb=function(t,e,n,i){return t[e](i.fp,n)},Hb=function(t,e,n){return t.setAttribute(e,n)},Fc=function(t,e){return Ee(t[e])?tg:Ic(t[e])&&t.setAttribute?Hb:Pd},eg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Vb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Id=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ld=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Gb=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Wb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Nc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Xb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Nd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},dn=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||eg,this.d=l||this,this.set=c||Pd,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xb,this.m=n,this.mt=s,this.tween=i},r})();hn(Sd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return vd[r]=1});Dn.TweenMax=Dn.TweenLite=Pe;Dn.TimelineLite=Dn.TimelineMax=Qe;be=new Qe({sortChildren:!1,defaults:ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Ed;var qr=[],Ec={},Yb=[],Em=0,qb=0,id=function(t){return(Ec[t]||Yb).map(function(e){return e()})},pd=function(){var t=Date.now(),e=[];t-Em>2&&(id("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=yi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),id("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Em=t,id("matchMedia"))},ng=(function(){function r(e,n){this.selector=n&&hd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qb++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ee(n)&&(s=i,i=n,n=Ee);var a=this,o=function(){var c=ye,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=hd(s)),ye=a,h=i.apply(a,arguments),Ee(h)&&a._r.push(h),ye=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ee?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ye;ye=null,n(this),ye=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Pe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=qr.length;a--;)qr[a].id===this.id&&qr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),Zb=(function(){function r(e){this.contexts=[],this.scope=e,ye&&ye.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Si(n)||(n={matches:n});var a=new ng(0,s||this.scope),o=a.conditions={},l,c,u;ye&&!a.selector&&(a.selector=ye.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&(qr.indexOf(a)<0&&qr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(pd):l.addEventListener("change",pd)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Pc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Zm(i)})},timeline:function(t){return new Qe(t)},getTweensOf:function(t,e){return be.getTweensOf(t,e)},getProperty:function(t,e,n,i){He(t)&&(t=Xn(t)[0]);var s=hr(t||{}).get,a=n?Um:Dm;return n==="native"&&(n=""),t&&(e?a((Sn[e]&&Sn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Sn[o]&&Sn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Xn(t),t.length>1){var i=t.map(function(u){return en.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Sn[e],o=hr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Ks._pt=0,h.init(t,n?u+n:u,Ks,0,[t]),h.render(1,h),Ks._pt&&Ld(1,Ks)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=en.to(t,Un((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Yr(t.ease,ao.ease)),vm(ao,t||{})},config:function(t){return vm(Tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Sn[o]&&!Dn[o]&&oo(e+" effect requires "+o+" plugin.")}),Qh[e]=function(o,l,c){return n(Xn(o),Un(l||{},s),c)},a&&(Qe.prototype[e]=function(o,l,c){return this.add(Qh[e](o,Si(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Zt[t]=Yr(e)},parseEase:function(t,e){return arguments.length?Yr(t,e):Zt},getById:function(t){return be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Qe(t),i,s;for(n.smoothChildTiming=Mn(t.smoothChildTiming),be.remove(n),n._dp=0,n._time=n._tTime=be._time,i=be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Pe&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(be,n,0),n},context:function(t,e){return t?new ng(t,e):ye},matchMedia:function(t){return new Zb(t)},matchMediaRefresh:function(){return qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||pd()},addEventListener:function(t,e){var n=Ec[t]||(Ec[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ec[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Eb,wrapYoyo:wb,distribute:Vm,random:Wm,snap:Gm,normalize:Tb,getUnit:Xe,clamp:vb,splitColor:$m,toArray:Xn,selector:hd,mapRange:Ym,pipe:bb,unitize:Mb,interpolate:Ab,shuffle:Hm},install:Pm,effects:Qh,ticker:bn,updateRoot:Qe.updateRoot,plugins:Sn,globalTimeline:be,core:{PropTween:dn,globals:Im,Tween:Pe,Timeline:Qe,Animation:uo,getCache:hr,_removeLinkedListItem:Nc,reverting:function(){return We},context:function(t){return t&&ye&&(ye.data.push(t),t._ctx=ye),ye},suppressOverwrites:function(t){return md=t}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pc[r]=Pe[r]});bn.add(Qe.updateRoot);Ks=Pc.to({},{duration:0});var $b=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Kb=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=$b(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},rd=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(He(s)&&(l={},hn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Kb(o,s)}}}},en=Pc.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)We?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},rd("roundProps",dd),rd("modifiers"),rd("snap",Gm))||Pc;Pe.version=Qe.version=en.version="3.15.0";Cm=1;gd()&&ta();var Jb=Zt.Power0,jb=Zt.Power1,Qb=Zt.Power2,tM=Zt.Power3,eM=Zt.Power4,nM=Zt.Linear,iM=Zt.Quad,rM=Zt.Cubic,sM=Zt.Quart,aM=Zt.Quint,oM=Zt.Strong,lM=Zt.Elastic,cM=Zt.Back,uM=Zt.SteppedEase,hM=Zt.Bounce,dM=Zt.Sine,fM=Zt.Expo,pM=Zt.Circ;var ig,pr,ia,zd,ts,mM,rg,kd,gM=function(){return typeof window<"u"},Wi={},Qr=180/Math.PI,ra=Math.PI/180,na=Math.atan2,sg=1e8,Hd=/([A-Z])/g,_M=/(left|right|width|margin|padding|x)/i,xM=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ud=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},SM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},fg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},MM=function(t,e,n){return t.style[e]=n},TM=function(t,e,n){return t.style.setProperty(e,n)},EM=function(t,e,n){return t._gsap[e]=n},wM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},AM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},RM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Me="transform",En=Me+"Origin",CM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Wi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=bi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Gi(i,o)}):this.tfm[t]=a.x?a[t]:Gi(i,t),t===En&&(this.tfm.zOrigin=a.zOrigin);else return bi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Me)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,e,"")),t=Me}(s||e)&&this.props.push(t,e,s[t])},mg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},PM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Hd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=kd(),(!s||!s.isStart)&&!n[Me]&&(mg(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gg=function(t,e){var n={target:t,props:[],revert:PM,save:CM};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},_g,Fd=function(t,e){var n=pr.createElementNS?pr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):pr.createElement(t);return n&&n.style?n:pr.createElement(t)},Fn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Hd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,sa(e)||e,1)||""},ag="O,Moz,ms,Ms,Webkit".split(","),sa=function(t,e,n){var i=e||ts,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(ag[a]+t in s););return a<0?null:(a===3?"ms":a>=0?ag[a]:"")+t},Od=function(){gM()&&window.document&&(ig=window,pr=ig.document,ia=pr.documentElement,ts=Fd("div")||{style:{}},mM=Fd("div"),Me=sa(Me),En=Me+"Origin",ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_g=!!sa("perspective"),kd=en.core.reverting,zd=1)},og=function(t){var e=t.ownerSVGElement,n=Fd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ia.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ia.removeChild(n),s},lg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},xg=function(t){var e,n;try{e=t.getBBox()}catch{e=og(t),n=1}return e&&(e.width||e.height)||n||(e=og(t)),e&&!e.width&&!e.x&&!e.y?{x:+lg(t,["x","cx","x1"])||0,y:+lg(t,["y","cy","y1"])||0,width:0,height:0}:e},yg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&xg(t))},gr=function(t,e){if(e){var n=t.style,i;e in Wi&&e!==En&&(e=Me),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Hd,"-$1").toLowerCase())):n.removeAttribute(e)}},mr=function(t,e,n,i,s,a){var o=new dn(t._pt,e,n,0,1,a?pg:fg);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},cg={deg:1,rad:1,turn:1},IM={grid:1,flex:1},_r=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ts.style,l=_M.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||cg[i]||cg[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&yg(t),(f||a==="%")&&(Wi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],we(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===pr||!_.appendChild)&&(_=pr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===bn.time&&!p.uncache)return we(s/p.width*h);if(f&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=h+i,g=t[u],b?t.style[e]=b:gr(t,e)}else(f||a==="%")&&!IM[Fn(_,"display")]&&(o.position=Fn(t,"position")),_===t&&(o.position="static"),_.appendChild(ts),g=ts[u],_.removeChild(ts),o.position="absolute";return l&&f&&(p=hr(_),p.time=bn.time,p.width=_[u]),we(d?g*s/h:g&&s?h/g*s:0)},Gi=function(t,e,n,i){var s;return zd||Od(),e in bi&&e!=="transform"&&(e=bi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wi[e]&&e!=="transform"?(s=mo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Bc(Fn(t,En))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Oc[e]&&Oc[e](t,e,n)||Fn(t,e)||Md(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(t,e,s,n)+n:s},LM=function(t,e,n,i){if(!n||n==="none"){var s=sa(e,t,1),a=s&&Fn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Fn(t,"borderTopColor"))}var o=new dn(this._pt,t.style,e,0,1,Id),l=0,c=0,u,h,d,f,g,_,p,m,b,A,S,v;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Fn(t,e)||i,_?t.style[e]=_:gr(t,e)),u=[n,i],Ed(u),n=u[0],i=u[1],d=n.match(Zr)||[],v=i.match(Zr)||[],v.length){for(;h=Zr.exec(i);)p=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),p.charAt(1)==="="&&(p=$r(f,p)+S),m=parseFloat(p),A=p.substr((m+"").length),l=Zr.lastIndex-A.length,A||(A=A||Tn.units[e]||S,l===i.length&&(i+=A,o.e+=A)),S!==A&&(f=_r(t,e,_,A)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?pg:fg;return xd.test(i)&&(o.e=0),this._pt=o,o},ug={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ug[n]||n,e[1]=ug[i]||i,e.join(" ")},DM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Wi[o]&&(l=1,o=o==="transformOrigin"?En:Me),gr(n,o);l&&(gr(n,Me),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",mo(n,1),a.uncache=1,mg(i)))}},Oc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new dn(t._pt,e,n,0,0,DM);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},po=[1,0,0,1,0,0],vg={},Sg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},hg=function(t){var e=Fn(t,Me);return Sg(e)?po:e.substr(7).match(_d).map(we)},Vd=function(t,e){var n=t._gsap||hr(t),i=t.style,s=hg(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?po:s):(s===po&&!t.offsetParent&&t!==ia&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ia.appendChild(t)),s=hg(t),l?i.display=l:gr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ia.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bd=function(t,e,n,i,s,a){var o=t._gsap,l=s||Vd(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],b=l[5],A=e.split(" "),S=parseFloat(A[0])||0,v=parseFloat(A[1])||0,T,w,x,E;n?l!==po&&(w=f*p-g*_)&&(x=S*(p/w)+v*(-_/w)+(_*b-p*m)/w,E=S*(-g/w)+v*(f/w)-(f*b-g*m)/w,S=x,v=E):(T=xg(t),S=T.x+(~A[0].indexOf("%")?S/100*T.width:S),v=T.y+(~(A[1]||A[0]).indexOf("%")?v/100*T.height:v)),i||i!==!1&&o.smooth?(m=S-c,b=v-u,o.xOffset=h+(m*f+b*_)-m,o.yOffset=d+(m*g+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=v,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[En]="0px 0px",a&&(mr(a,o,"xOrigin",c,S),mr(a,o,"yOrigin",u,v),mr(a,o,"xOffset",h,o.xOffset),mr(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+v)},mo=function(t,e){var n=t._gsap||new wd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Fn(t,En)||"0",u,h,d,f,g,_,p,m,b,A,S,v,T,w,x,E,C,I,F,O,P,z,X,G,Q,Y,J,et,St,Tt,Yt,Ft;return u=h=d=_=p=m=b=A=S=0,f=g=1,n.svg=!!(t.getCTM&&yg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Me]!=="none"?l[Me]:"")),i.scale=i.rotate=i.translate="none"),w=Vd(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),Bd(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,w)),v=n.xOrigin||0,T=n.yOrigin||0,w!==po&&(I=w[0],F=w[1],O=w[2],P=w[3],u=z=w[4],h=X=w[5],w.length===6?(f=Math.sqrt(I*I+F*F),g=Math.sqrt(P*P+O*O),_=I||F?na(F,I)*Qr:0,b=O||P?na(O,P)*Qr+_:0,b&&(g*=Math.abs(Math.cos(b*ra))),n.svg&&(u-=v-(v*I+T*O),h-=T-(v*F+T*P))):(Ft=w[6],Tt=w[7],J=w[8],et=w[9],St=w[10],Yt=w[11],u=w[12],h=w[13],d=w[14],x=na(Ft,St),p=x*Qr,x&&(E=Math.cos(-x),C=Math.sin(-x),G=z*E+J*C,Q=X*E+et*C,Y=Ft*E+St*C,J=z*-C+J*E,et=X*-C+et*E,St=Ft*-C+St*E,Yt=Tt*-C+Yt*E,z=G,X=Q,Ft=Y),x=na(-O,St),m=x*Qr,x&&(E=Math.cos(-x),C=Math.sin(-x),G=I*E-J*C,Q=F*E-et*C,Y=O*E-St*C,Yt=P*C+Yt*E,I=G,F=Q,O=Y),x=na(F,I),_=x*Qr,x&&(E=Math.cos(x),C=Math.sin(x),G=I*E+F*C,Q=z*E+X*C,F=F*E-I*C,X=X*E-z*C,I=G,z=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=we(Math.sqrt(I*I+F*F+O*O)),g=we(Math.sqrt(X*X+Ft*Ft)),x=na(z,X),b=Math.abs(x)>2e-4?x*Qr:0,S=Yt?1/(Yt<0?-Yt:Yt):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sg(Fn(t,Me)),G&&t.setAttribute("transform",G))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=we(f),n.scaleY=we(g),n.rotation=we(_)+o,n.rotationX=we(p)+o,n.rotationY=we(m)+o,n.skewX=b+o,n.skewY=A+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[En]=Bc(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?FM:_g?bg:UM,n.uncache=0,n},Bc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Dd=function(t,e,n){var i=Xe(e);return we(parseFloat(e)+parseFloat(_r(t,"x",n+"px",i)))+i},UM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bg(t,e)},Jr="0deg",fo="0px",jr=") ",bg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,b=n.target,A=n.zOrigin,S="",v=m==="auto"&&t&&t!==1||m===!0;if(A&&(h!==Jr||u!==Jr)){var T=parseFloat(u)*ra,w=Math.sin(T),x=Math.cos(T),E;T=parseFloat(h)*ra,E=Math.cos(T),a=Dd(b,a,w*E*-A),o=Dd(b,o,-Math.sin(T)*-A),l=Dd(b,l,x*E*-A+A)}p!==fo&&(S+="perspective("+p+jr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(v||a!==fo||o!==fo||l!==fo)&&(S+=l!==fo||v?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+jr),c!==Jr&&(S+="rotate("+c+jr),u!==Jr&&(S+="rotateY("+u+jr),h!==Jr&&(S+="rotateX("+h+jr),(d!==Jr||f!==Jr)&&(S+="skew("+d+", "+f+jr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+jr),b.style[Me]=S||"translate(0, 0)"},FM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,b=n.forceCSS,A=parseFloat(a),S=parseFloat(o),v,T,w,x,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ra,c*=ra,v=Math.cos(l)*h,T=Math.sin(l)*h,w=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=ra,E=Math.tan(c-u),E=Math.sqrt(1+E*E),w*=E,x*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),v*=E,T*=E)),v=we(v),T=we(T),w=we(w),x=we(x)):(v=h,x=d,T=w=0),(A&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(A=_r(f,"x",a,"px"),S=_r(f,"y",o,"px")),(g||_||p||m)&&(A=we(A+g-(g*v+_*w)+p),S=we(S+_-(g*T+_*x)+m)),(i||s)&&(E=f.getBBox(),A=we(A+i/100*E.width),S=we(S+s/100*E.height)),E="matrix("+v+","+T+","+w+","+x+","+A+","+S+")",f.setAttribute("transform",E),b&&(f.style[Me]=E)},OM=function(t,e,n,i,s){var a=360,o=He(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Qr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*sg)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*sg)%a-~~(c/a)*a)),t._pt=d=new dn(t._pt,e,n,i,c,yM),d.e=u,d.u="deg",t._props.push(n),d},dg=function(t,e){for(var n in e)t[n]=e[n];return t},BM=function(t,e,n){var i=dg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Me]=e,o=mo(n,1),gr(n,Me),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Me],a[Me]=e,o=mo(n,1),a[Me]=c);for(l in Wi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Xe(c),g=Xe(u),h=f!==g?_r(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new dn(t._pt,o,l,h,d-h,Ud),t._pt.u=g||0,t._props.push(l));dg(o,i)};hn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Oc[t>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return Gi(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var Gd={name:"css",register:Od,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,d,f,g,_,p,m,b,A,S,v,T,w,x,E;zd||Od(),this.styles=this.styles||gg(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Sn[_]&&Rd(_,e,n,i,t,s)))){if(f=typeof u,g=Oc[_],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ea(u)),g)g(this,t,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(c)||(p=Xe(c),m=Xe(u),m?p!==m&&(c=_r(t,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],He(c)&&~c.indexOf("random(")&&(c=ea(c)),Xe(c+"")||c==="auto"||(c+=Tn.units[_]||Xe(Gi(t,_))||""),(c+"").charAt(1)==="="&&(c=Gi(t,_))):c=Gi(t,_),d=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),_ in bi&&(_==="autoAlpha"&&(d===1&&Gi(t,"visibility")==="hidden"&&h&&(d=0),x.push("visibility",0,o.visibility),mr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=bi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in Wi,A){if(this.styles.save(_),E=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Fn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=u,u=Fn(t,"perspective"),C?t.style.perspective=C:gr(t,"perspective")}h=parseFloat(u)}if(S||(v=t._gsap,v.renderTransform&&!e.parseTransform||mo(t,e.parseTransform),T=e.smoothOrigin!==!1&&v.smooth,S=this._pt=new dn(this._pt,o,Me,0,1,v.renderTransform,v,0,-1),S.dep=1),_==="scale")this._pt=new dn(this._pt,v,"scaleY",v.scaleY,(b?$r(v.scaleY,b+h):h)-v.scaleY||0,Ud),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(En,0,o[En]),u=NM(u),v.svg?Bd(t,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==v.zOrigin&&mr(this,v,"zOrigin",v.zOrigin,m),mr(this,o,_,Bc(c),Bc(u)));continue}else if(_==="svgOrigin"){Bd(t,u,1,T,0,this);continue}else if(_ in vg){OM(this,v,_,d,b?$r(d,b+u):u);continue}else if(_==="smoothOrigin"){mr(this,v,"smooth",v.smooth,u);continue}else if(_==="force3D"){v[_]=u;continue}else if(_==="transform"){BM(this,u,t);continue}}else _ in o||(_=sa(_)||_);if(A||(h||h===0)&&(d||d===0)&&!xM.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),m=Xe(u)||(_ in Tn.units?Tn.units[_]:p),p!==m&&(d=_r(t,_,c,m)),this._pt=new dn(this._pt,A?v:o,_,d,(b?$r(d,b+h):h)-d,!A&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?bM:Ud),this._pt.u=m||0,A&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=SM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=vM);else if(_ in o)LM.call(this,t,_,c,b?b+u:u);else if(_ in t)this.add(t,_,c||t[_],b?b+u:u,i,s);else if(_!=="parseTransform"){Lc(_,u);continue}A||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),a.push(_)}}w&&Nd(this)},render:function(t,e){if(e.tween._time||!kd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Gi,aliases:bi,getSetter:function(t,e,n){var i=bi[e];return i&&i.indexOf(",")<0&&(e=i),e in Wi&&e!==En&&(t._gsap.x||Gi(t,"x"))?n&&rg===n?e==="scale"?wM:EM:(rg=n||{})&&(e==="scale"?AM:RM):t.style&&!Ic(t.style[e])?MM:~e.indexOf("-")?TM:Fc(t,e)},core:{_removeProperty:gr,_getMatrix:Vd}};en.utils.checkPrefix=sa;en.core.getStyleSaver=gg;(function(r,t,e,n){var i=hn(r+","+t+","+e,function(s){Wi[s]=1});hn(t,function(s){Tn.units[s]="deg",vg[s]=1}),bi[i[13]]=r+","+t,hn(n,function(s){var a=s.split(":");bi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Tn.units[r]="px"});en.registerPlugin(Gd);var Wd=en.registerPlugin(Gd)||en,Fw=Wd.core.Tween;var wn=window.matchMedia("(prefers-reduced-motion: reduce)"),Mg=()=>Math.min(window.devicePixelRatio||1,1.75),zc="altar-lighting-v1",Tg="altar-lighting-persist";function Eg(r){try{return localStorage.getItem(r)}catch{return null}}function kc(r,t){try{t===null?localStorage.removeItem(r):localStorage.setItem(r,t)}catch{}}var Bg=5,Xd={ACES:zr,Neutral:Ha,Linear:za,Reinhard:ka},it={hemisphereSky:"#000000",hemisphereGround:"#3f12e2",hemisphereIntensity:0,keyColor:"#f8d4b7",keyIntensity:6,keyX:-15,keyY:-15,keyZ:-15,rimColor:"#6f71f7",rimIntensity:1.1,rimX:-15,rimY:15,rimZ:-4.2,exposure:2.55,toneMapping:"Linear",effectBlur:0,grainOpacity:.25,grainFrequency:.5,grainSpeed:10,sectionGrainOpacity:.16,orbitSpeed:.1,orbitKepler:1.6,orbitTilt:69,orbitScale:1.45,orbitDirection:"Horario",moonSpeed:1.25,spinSpeed:3.5,orbitLineOpacity:.2,orbitLineColor:"#fffb00",starCount:700,starSize:1.6,starBrightness:4,starColor:"#fffec2",starColorVariation:1,twinkleSpeed:7.95,twinkleAmount:.5,bloomSize:5.1,bloomIntensity:.35,starDrift:.9,sunSize:.2,sunEmissive:1.4,sunEmissiveColor:"#ffffff",sunSpin:1,sunGlowSize:2.75,sunGlowIntensity:.9,sunGlowColor:"#ffb45c",sunLightIntensity:1.4,sunLightColor:"#ffd9a8",system1X:13.8,system1Y:7.25,system1Z:-79.8,system1RotX:-2,system1RotY:162,system1RotZ:14,system1Scale:6.45,system2X:-33.8,system2Y:15.3,system2Z:-66.25,system2RotX:3,system2RotY:16,system2RotZ:13,system2Scale:12.45,system3X:-13.1,system3Y:17.9,system3Z:-82.95,system3RotX:-150,system3RotY:116,system3RotZ:2,system3Scale:12.85,system4X:-25,system4Y:8.85,system4Z:-74.05,system4RotX:-35,system4RotY:64,system4RotZ:7,system4Scale:15.25,systemSpin:0,systemFloat:0,systemFloatSpeed:0,systemParallax:0,stonesX:-.1,stonesY:-11,stonesZ:0,stonesRotX:0,stonesRotY:0,stonesRotZ:0,stonesScale:.9,stonesEmbed:.39,stoneMercuryX:-3.6,stoneMercuryY:-.04,stoneMercuryZ:-1.9,stoneMercuryScale:.9,stoneMercuryRotX:10,stoneMercuryRotY:-24,stoneMercuryRotZ:-73,stoneVenusX:-1.05,stoneVenusY:0,stoneVenusZ:-1.3,stoneVenusScale:1,stoneVenusRotX:-5,stoneVenusRotY:19,stoneVenusRotZ:7,stoneEarthX:7.1,stoneEarthY:-.19,stoneEarthZ:-1.55,stoneEarthScale:1.95,stoneEarthRotX:38,stoneEarthRotY:-16,stoneEarthRotZ:-11,stoneMarsX:-5.65,stoneMarsY:0,stoneMarsZ:-.2,stoneMarsScale:1.3,stoneMarsRotX:-7,stoneMarsRotY:30,stoneMarsRotZ:6,stoneJupiterX:2.25,stoneJupiterY:0,stoneJupiterZ:.2,stoneJupiterScale:1,stoneJupiterRotX:3,stoneJupiterRotY:-14,stoneJupiterRotZ:-5,stoneSaturnX:8.55,stoneSaturnY:0,stoneSaturnZ:1.2,stoneSaturnScale:1.45,stoneSaturnRotX:-11,stoneSaturnRotY:-180,stoneSaturnRotZ:-51,stoneUranusX:.7,stoneUranusY:0,stoneUranusZ:1.4,stoneUranusScale:1,stoneUranusRotX:7,stoneUranusRotY:-22,stoneUranusRotZ:-7,stoneNeptuneX:-3,stoneNeptuneY:0,stoneNeptuneZ:2.3,stoneNeptuneScale:1,stoneNeptuneRotX:-6,stoneNeptuneRotY:13,stoneNeptuneRotZ:9,stonePlutoX:5,stonePlutoY:0,stonePlutoZ:1.9,stonePlutoScale:1.3,stonePlutoRotX:11,stonePlutoRotY:-32,stonePlutoRotZ:-6,stoneMoonX:-8.15,stoneMoonY:-.37,stoneMoonZ:1.85,stoneMoonScale:2.9,stoneMoonRotX:-60,stoneMoonRotY:180,stoneMoonRotZ:-180,tierra1Ground:"#e89e7a",tierra1Horizon:"#ff9c71",tierra1Ambient:.8,tierra1Light1Color:"#ffd2ad",tierra1Light1Intensity:4.95,tierra1Light2Color:"#8b91ff",tierra1Light2Intensity:1.15,tierra1BloomIntensity:5.95,tierra1StoneMercuryX:-3.6,tierra1StoneMercuryY:-.04,tierra1StoneMercuryZ:-1.9,tierra1StoneVenusX:-1.05,tierra1StoneVenusY:0,tierra1StoneVenusZ:-1.3,tierra1StoneEarthX:7.1,tierra1StoneEarthY:-.19,tierra1StoneEarthZ:-1.55,tierra1StoneMarsX:-5.65,tierra1StoneMarsY:0,tierra1StoneMarsZ:-.2,tierra1StoneJupiterX:2.25,tierra1StoneJupiterY:0,tierra1StoneJupiterZ:.2,tierra1StoneSaturnX:8.55,tierra1StoneSaturnY:0,tierra1StoneSaturnZ:1.2,tierra1StoneUranusX:.7,tierra1StoneUranusY:0,tierra1StoneUranusZ:1.4,tierra1StoneNeptuneX:-3,tierra1StoneNeptuneY:0,tierra1StoneNeptuneZ:2.3,tierra1StonePlutoX:5,tierra1StonePlutoY:0,tierra1StonePlutoZ:1.9,tierra1StoneMoonX:-8.15,tierra1StoneMoonY:-.37,tierra1StoneMoonZ:1.85,tierra1StoneMercuryScale:.9,tierra1StoneMercuryRotX:10,tierra1StoneMercuryRotY:-24,tierra1StoneMercuryRotZ:-73,tierra1StoneVenusScale:1,tierra1StoneVenusRotX:-5,tierra1StoneVenusRotY:19,tierra1StoneVenusRotZ:7,tierra1StoneEarthScale:1.95,tierra1StoneEarthRotX:38,tierra1StoneEarthRotY:-16,tierra1StoneEarthRotZ:-11,tierra1StoneMarsScale:1.3,tierra1StoneMarsRotX:-7,tierra1StoneMarsRotY:30,tierra1StoneMarsRotZ:6,tierra1StoneJupiterScale:1,tierra1StoneJupiterRotX:3,tierra1StoneJupiterRotY:-14,tierra1StoneJupiterRotZ:-5,tierra1StoneSaturnScale:1.45,tierra1StoneSaturnRotX:-11,tierra1StoneSaturnRotY:-180,tierra1StoneSaturnRotZ:-51,tierra1StoneUranusScale:1,tierra1StoneUranusRotX:7,tierra1StoneUranusRotY:-22,tierra1StoneUranusRotZ:-7,tierra1StoneNeptuneScale:1,tierra1StoneNeptuneRotX:-6,tierra1StoneNeptuneRotY:13,tierra1StoneNeptuneRotZ:9,tierra1StonePlutoScale:1.3,tierra1StonePlutoRotX:11,tierra1StonePlutoRotY:-32,tierra1StonePlutoRotZ:-6,tierra1StoneMoonScale:2.9,tierra1StoneMoonRotX:-60,tierra1StoneMoonRotY:180,tierra1StoneMoonRotZ:-180,tierra2Ground:"#1f1f09",tierra2Horizon:"#1f1f09",tierra2Ambient:.8,tierra2Light1Color:"#ffd2ad",tierra2Light1Intensity:4.75,tierra2Light2Color:"#2f6e1d",tierra2Light2Intensity:.45,tierra2BloomIntensity:8.85,tierra2StoneMercuryX:2.75,tierra2StoneMercuryY:.01,tierra2StoneMercuryZ:-1.65,tierra2StoneVenusX:-8.45,tierra2StoneVenusY:0,tierra2StoneVenusZ:-1.3,tierra2StoneEarthX:-2.3,tierra2StoneEarthY:-.19,tierra2StoneEarthZ:-1.8,tierra2StoneMarsX:5.5,tierra2StoneMarsY:0,tierra2StoneMarsZ:-1,tierra2StoneJupiterX:.7,tierra2StoneJupiterY:0,tierra2StoneJupiterZ:-.15,tierra2StoneSaturnX:-5.8,tierra2StoneSaturnY:0,tierra2StoneSaturnZ:.05,tierra2StoneUranusX:7.9,tierra2StoneUranusY:-.24,tierra2StoneUranusZ:.7,tierra2StoneNeptuneX:3.3,tierra2StoneNeptuneY:0,tierra2StoneNeptuneZ:2.45,tierra2StonePlutoX:-6.25,tierra2StonePlutoY:0,tierra2StonePlutoZ:2.1,tierra2StoneMoonX:-2.15,tierra2StoneMoonY:-.76,tierra2StoneMoonZ:1.65,tierra2StoneMercuryScale:.9,tierra2StoneMercuryRotX:10,tierra2StoneMercuryRotY:-24,tierra2StoneMercuryRotZ:-73,tierra2StoneVenusScale:1,tierra2StoneVenusRotX:-5,tierra2StoneVenusRotY:19,tierra2StoneVenusRotZ:7,tierra2StoneEarthScale:1.85,tierra2StoneEarthRotX:41,tierra2StoneEarthRotY:-35,tierra2StoneEarthRotZ:-33,tierra2StoneMarsScale:1.3,tierra2StoneMarsRotX:-7,tierra2StoneMarsRotY:30,tierra2StoneMarsRotZ:6,tierra2StoneJupiterScale:1,tierra2StoneJupiterRotX:3,tierra2StoneJupiterRotY:-14,tierra2StoneJupiterRotZ:-5,tierra2StoneSaturnScale:1.45,tierra2StoneSaturnRotX:-11,tierra2StoneSaturnRotY:-180,tierra2StoneSaturnRotZ:-51,tierra2StoneUranusScale:1.85,tierra2StoneUranusRotX:7,tierra2StoneUranusRotY:-79,tierra2StoneUranusRotZ:-144,tierra2StoneNeptuneScale:1,tierra2StoneNeptuneRotX:-6,tierra2StoneNeptuneRotY:13,tierra2StoneNeptuneRotZ:9,tierra2StonePlutoScale:1.3,tierra2StonePlutoRotX:11,tierra2StonePlutoRotY:-32,tierra2StonePlutoRotZ:-6,tierra2StoneMoonScale:2.9,tierra2StoneMoonRotX:-60,tierra2StoneMoonRotY:180,tierra2StoneMoonRotZ:-180,tierra3Ground:"#486074",tierra3Horizon:"#496d74",tierra3Ambient:.8,tierra3Light1Color:"#ffd2ad",tierra3Light1Intensity:4.95,tierra3Light2Color:"#427c80",tierra3Light2Intensity:1.15,tierra3BloomIntensity:5.95,tierra3StoneMercuryX:-3.6,tierra3StoneMercuryY:-.04,tierra3StoneMercuryZ:-1.9,tierra3StoneVenusX:-1.05,tierra3StoneVenusY:0,tierra3StoneVenusZ:-1.3,tierra3StoneEarthX:7.1,tierra3StoneEarthY:-.19,tierra3StoneEarthZ:-1.55,tierra3StoneMarsX:-5.65,tierra3StoneMarsY:0,tierra3StoneMarsZ:-.2,tierra3StoneJupiterX:2.25,tierra3StoneJupiterY:0,tierra3StoneJupiterZ:.2,tierra3StoneSaturnX:8.55,tierra3StoneSaturnY:0,tierra3StoneSaturnZ:1.2,tierra3StoneUranusX:.7,tierra3StoneUranusY:0,tierra3StoneUranusZ:1.4,tierra3StoneNeptuneX:-3,tierra3StoneNeptuneY:0,tierra3StoneNeptuneZ:2.3,tierra3StonePlutoX:5,tierra3StonePlutoY:0,tierra3StonePlutoZ:1.9,tierra3StoneMoonX:-8.15,tierra3StoneMoonY:-.37,tierra3StoneMoonZ:1.85,tierra3StoneMercuryScale:.9,tierra3StoneMercuryRotX:10,tierra3StoneMercuryRotY:-24,tierra3StoneMercuryRotZ:-73,tierra3StoneVenusScale:1,tierra3StoneVenusRotX:-5,tierra3StoneVenusRotY:19,tierra3StoneVenusRotZ:7,tierra3StoneEarthScale:1.95,tierra3StoneEarthRotX:38,tierra3StoneEarthRotY:-16,tierra3StoneEarthRotZ:-11,tierra3StoneMarsScale:1.3,tierra3StoneMarsRotX:-7,tierra3StoneMarsRotY:30,tierra3StoneMarsRotZ:6,tierra3StoneJupiterScale:1,tierra3StoneJupiterRotX:3,tierra3StoneJupiterRotY:-14,tierra3StoneJupiterRotZ:-5,tierra3StoneSaturnScale:1.45,tierra3StoneSaturnRotX:-11,tierra3StoneSaturnRotY:-180,tierra3StoneSaturnRotZ:-51,tierra3StoneUranusScale:1,tierra3StoneUranusRotX:7,tierra3StoneUranusRotY:-22,tierra3StoneUranusRotZ:-7,tierra3StoneNeptuneScale:1,tierra3StoneNeptuneRotX:-6,tierra3StoneNeptuneRotY:13,tierra3StoneNeptuneRotZ:9,tierra3StonePlutoScale:1.3,tierra3StonePlutoRotX:11,tierra3StonePlutoRotY:-32,tierra3StonePlutoRotZ:-6,tierra3StoneMoonScale:2.9,tierra3StoneMoonRotX:-60,tierra3StoneMoonRotY:180,tierra3StoneMoonRotZ:-180,tierra4Ground:"#4f2e19",tierra4Horizon:"#4f2e19",tierra4Ambient:.8,tierra4Light1Color:"#ffd2ad",tierra4Light1Intensity:4.95,tierra4Light2Color:"#5181a4",tierra4Light2Intensity:.95,tierra4BloomIntensity:9.05,tierra4StoneMercuryX:-2.15,tierra4StoneMercuryY:-.05,tierra4StoneMercuryZ:.15,tierra4StoneVenusX:-8.65,tierra4StoneVenusY:-.18,tierra4StoneVenusZ:-1.8,tierra4StoneEarthX:-1.35,tierra4StoneEarthY:-.34,tierra4StoneEarthZ:2.1,tierra4StoneMarsX:6.15,tierra4StoneMarsY:0,tierra4StoneMarsZ:-.2,tierra4StoneJupiterX:-5.45,tierra4StoneJupiterY:-.19,tierra4StoneJupiterZ:.2,tierra4StoneSaturnX:1.85,tierra4StoneSaturnY:-.22,tierra4StoneSaturnZ:-1.2,tierra4StoneUranusX:8.2,tierra4StoneUranusY:0,tierra4StoneUranusZ:1.4,tierra4StoneNeptuneX:-3.7,tierra4StoneNeptuneY:0,tierra4StoneNeptuneZ:-1.4,tierra4StonePlutoX:4.35,tierra4StonePlutoY:0,tierra4StonePlutoZ:1.75,tierra4StoneMoonX:-8.6,tierra4StoneMoonY:-.37,tierra4StoneMoonZ:1.5,tierra4StoneMercuryScale:1.1,tierra4StoneMercuryRotX:84,tierra4StoneMercuryRotY:6,tierra4StoneMercuryRotZ:-73,tierra4StoneVenusScale:1,tierra4StoneVenusRotX:-5,tierra4StoneVenusRotY:19,tierra4StoneVenusRotZ:7,tierra4StoneEarthScale:2,tierra4StoneEarthRotX:9,tierra4StoneEarthRotY:-44,tierra4StoneEarthRotZ:-11,tierra4StoneMarsScale:1.3,tierra4StoneMarsRotX:-7,tierra4StoneMarsRotY:-49,tierra4StoneMarsRotZ:6,tierra4StoneJupiterScale:1,tierra4StoneJupiterRotX:3,tierra4StoneJupiterRotY:-14,tierra4StoneJupiterRotZ:-5,tierra4StoneSaturnScale:1.45,tierra4StoneSaturnRotX:-11,tierra4StoneSaturnRotY:-180,tierra4StoneSaturnRotZ:-51,tierra4StoneUranusScale:2.05,tierra4StoneUranusRotX:7,tierra4StoneUranusRotY:-22,tierra4StoneUranusRotZ:-7,tierra4StoneNeptuneScale:.8,tierra4StoneNeptuneRotX:-63,tierra4StoneNeptuneRotY:61,tierra4StoneNeptuneRotZ:180,tierra4StonePlutoScale:1.3,tierra4StonePlutoRotX:11,tierra4StonePlutoRotY:-18,tierra4StonePlutoRotZ:-6,tierra4StoneMoonScale:2.9,tierra4StoneMoonRotX:-60,tierra4StoneMoonRotY:180,tierra4StoneMoonRotZ:-180,showGround3d:!0,ground3dColor:"#e89e7a",ground3dRelief:6.2,ground3dTextureScale:.002,ground3dRoughness:.38,ground3dShadows:!0,ground3dContactShadows:0,ground3dFadeSides:0,ground3dFadeFar:.06,ground3dFadeNear:0,ground3dFadeSoftness:.2,groundX:-.15,groundStretchX:1,groundRotX:0,groundRotY:0,groundRotZ:0,ground3dExposure:.85,groundLightColor:"#ffd9b8",groundLightIntensity:0,groundLightX:10,groundLightY:11,groundLightZ:-3.5,groundLightTargetX:0,groundLightTargetZ:-2.5,groundY:-11.3,groundZ:5.25,groundWidth:23.5,groundDepth:16,stoneAmbientIntensity:.8,stoneLight1Color:"#ffd2ad",stoneLight1Intensity:4.95,stoneLight1X:-30,stoneLight1Y:-3,stoneLight1Z:10,stoneLight2Color:"#8b91ff",stoneLight2Intensity:1.15,stoneLight2X:-12,stoneLight2Y:5,stoneLight2Z:-14,showSections:!1,cardReturnSeconds:28,cardFlipDuration:1150,cardScale:.515,cardFocusScale:1.6,layoutCardX:0,layoutCardY:0,layoutCampaignCenterX:0,layoutCampaignY:0,layoutCampaignScale:.99,layoutCampaignOpenX:80,layoutCampaignOpenY:-177,manifestoX:0,manifestoY:66,manifestoScale:1,manifestoOpacity:.78,manifestoTitleX:0,manifestoTitleY:0,manifestoNoteX:0,manifestoNoteY:0,groundCampaignX:-93,groundCampaignY:-69,groundCampaignScale:1,groundCampaignOpenX:342,groundCampaignOpenY:-187,foilBaseColor:"#9b9a8c",foilSaturation:0,foilOpacity:.17,foilContrast:1.07,foilBevelSize:1.27,foilBevelStrength:3.7,foilMatte:0,foilLight1Intensity:1.14,foilLight1X:12.92,foilLight1Y:5,foilLight1Z:10,foilLight2Intensity:.8,foilLight2X:8.34,foilLight2Y:5,foilLight2Z:10,foilZoneX:-.243,foilZoneY:-.028,foilZoneScale:.152,foilHueSpeed:.04,foilScrollHue:.7,foilMouseHue:.2,foilMouseEase:.19,foilBands:1,foilGrain:.14,foilGrainFrequency:3e3,foilTilt:0,foilCurl:0,foilCurlCorner:0,foilTintColor:"#ffffff",foilTintAmount:0,foilBrushed:0,foilBrushedAngle:0,spaceColor:"#2d2838",glowRoseColor:"#2d1a60",glowRoseIntensity:5,glowCyanColor:"#7b41e6",glowCyanIntensity:.8,glowTealColor:"#5a2020",glowTealIntensity:20,showHorizonGradient:!1,showHorizonFloor:!0,floorColor:"#ff9c71",floorHeight:0,floorTilt:0,floorPerspective:50,floorTexture:0,floorTextureScale:.01,floorRelief:0,floorLightAngle:0,floorShade:0,floorHaze:0,mixColor:"#8fcb9b",mixAmount:0,mixScale:.002,mixCoverage:0,mixSoftness:.02,shootingEnabled:!0,shootingPauseMin:3,shootingPauseMax:10,shootingSpeed:27,shootingLength:6,shootingWidth:.25,shootingBrightness:3.1,shootingColor:"#fffec2",shootingAngle:-30,shootingAngleVariation:57,horizonGlowColor:"#ff9c71",horizonBloomHeight:1035,horizonBloomIntensity:5.95,horizonBloomBlur:28,horizonBloomRound:0,horizonBloomFlat:1,horizonBloomCenterX:.5,horizonBloomWidth:900,horizonLine:0,lightingPresetVersion:Bg},_o={sun:{position:[-2.3,-.7,-1.5],radius:1.15},mercury:{position:[-5.4,1.9,.3],radius:.16,orbit:2.3},venus:{position:[-3.7,2.8,-.6],radius:.26,orbit:2.9},earth:{position:[-.9,3.4,-1.4],radius:.24,orbit:3.6},moon:{position:[-.55,3.52,-1.2],radius:.07},mars:{position:[-4.7,-2.3,-.4],radius:.18,orbit:4.3},jupiter:{position:[3.7,-.9,-.8],radius:.62,orbit:5.4},saturn:{position:[5.4,1.5,-1.8],radius:.55,orbit:6.7},uranus:{position:[.8,2.9,-2.4],radius:.3,orbit:7.8},neptune:{position:[1.7,-2.8,-1.6],radius:.28,orbit:8.7},pluto:{position:[5.1,-2.1,-.2],radius:.11,orbit:9.5}},qd={rock11_rock11_0:{planet:"mercury",position:[-4.9,-1.9],radius:.38,rotation:[.18,-.42,-.08],embed:.1},rock13_rock13_0:{planet:"venus",position:[-1.7,-1.3],radius:.5,rotation:[-.08,.34,.12],embed:.16},rock19_rock19_0:{planet:"earth",position:[2.9,-1.6],radius:.44,rotation:[.14,-.28,-.16],embed:.13},rock06_rock06_0:{planet:"mars",position:[-5.3,-.2],radius:.58,rotation:[-.12,.52,.1],embed:.2},rock12_rock12_0:{planet:"jupiter",position:[2.2,.2],radius:.96,rotation:[.06,-.24,-.08],embed:.3},rock09_rock09_0:{planet:"saturn",position:[5.2,.8],radius:.8,rotation:[-.16,.46,.14],embed:.26},rock17_rock17_0:{planet:"uranus",position:[.7,1.4],radius:.7,rotation:[.12,-.38,-.12],embed:.24},rock10_rock10_0:{planet:"neptune",position:[-3,2.3],radius:.76,rotation:[-.1,.22,.16],embed:.28},rock18_rock18_0:{planet:"pluto",position:[3.4,1.9],radius:.5,rotation:[.2,-.56,-.1],embed:.18}},zg=[{source:"rock10_rock10_0",planet:"moon",position:[-1.8,.9],radius:.42,rotation:[.3,1.2,-.2],embed:.14}],kg=[...Object.values(qd),...zg],xr=1,zM={mercury:"Mercurio",venus:"Venus",earth:"Tierra",mars:"Marte",jupiter:"J\xFApiter",saturn:"Saturno",uranus:"Urano",neptune:"Neptuno",pluto:"Plut\xF3n",moon:"Luna"},kM=["X","Y","Z","Scale","RotX","RotY","RotZ"],wg=(r,t)=>`stone${r[0].toUpperCase()}${r.slice(1)}${t}`;function Hc(r){let t=(e,n,i,s,a)=>`<label>${e} <span><input type="range" min="${i}" max="${s}" step="${a}" data-lighting="${n}"><output></output></span></label>`;return kg.map(({planet:e})=>{let n=i=>`tierra${r}Stone${e[0].toUpperCase()}${e.slice(1)}${i}`;return`
          <details class="lighting-panel__subgroup"><summary>Piedra \xB7 ${zM[e]}</summary>
            ${t("Posici\xF3n X",n("X"),-12,12,.05)}
            ${t("Altura",n("Y"),-1,2,.01)}
            ${t("Posici\xF3n Z",n("Z"),-10,10,.05)}
            ${t("Escala",n("Scale"),.1,4,.05)}
            ${t("Rotaci\xF3n X \xB0",n("RotX"),-180,180,1)}
            ${t("Rotaci\xF3n Y \xB0",n("RotY"),-180,180,1)}
            ${t("Rotaci\xF3n Z \xB0",n("RotZ"),-180,180,1)}
          </details>`}).join("")}var HM=.35,VM=3,GM=1.2,Ag=128,Rg=new N(1,0,0),WM=new N(0,0,1),go={width:90,top:24,bottom:-64,near:-8,far:-40},Cg=["#fffec2","#ffd9b0","#c9d6ff","#ffffff","#ffb28e"].map(r=>new Mt(r)),XM=`
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
`,YM=`
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
`,qM=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ZM=`
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
`,$M=-15,Vc={left:-.9,right:.9,top:-.02,bottom:-.5},KM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,JM=`
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
`,Pg={foilSaturation:"uFoilSaturation",foilOpacity:"uFoilOpacity",foilContrast:"uFoilContrast",foilBevelStrength:"uBevelStrength",foilMatte:"uMatteRoughness",foilLight1Intensity:"uLight1Intensity",foilLight2Intensity:"uLight2Intensity",foilHueSpeed:"uHueSpeed",foilMouseHue:"uMouseHue",foilBands:"uBands",foilGrain:"uGrain",foilGrainFrequency:"uGrainFrequency",foilCurl:"uCurl",foilCurlCorner:"uCurlCorner",foilTintAmount:"uTintAmount",foilBrushed:"uBrushed",foilBrushedAngle:"uBrushedAngle"},Ig={foilBaseColor:"uBaseColor",foilTintColor:"uTint"},jM=2.08703;function QM(r,t){let e=parseInt(String(r).replace("#",""),16)||0;return t.set((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)}var t1=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,e1=`
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
`;function n1(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(.6,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let i=new Ns(t);return i.colorSpace=Te,i}function i1(r=128){let t=document.createElement("canvas");t.width=r,t.height=r;let e=t.getContext("2d"),n=e.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);return n.addColorStop(0,"rgba(20, 8, 6, 0.85)"),n.addColorStop(.45,"rgba(20, 8, 6, 0.45)"),n.addColorStop(1,"rgba(20, 8, 6, 0)"),e.fillStyle=n,e.fillRect(0,0,r,r),new Ns(t)}function r1(r=256){let t=new Uint8Array(r*r*4),e=(a,o)=>{let l=Math.sin(a*127.1+o*311.7)*43758.5453123;return l-Math.floor(l)},n=a=>a*a*(3-2*a),i=(a,o)=>{let l=Math.floor(a),c=Math.floor(o),u=n(a-l),h=n(o-c),d=oe.lerp(e(l,c),e(l+1,c),u),f=oe.lerp(e(l,c+1),e(l+1,c+1),u);return oe.lerp(d,f,h)};for(let a=0;a<r;a+=1)for(let o=0;o<r;o+=1){let l=o/r,c=a/r,u=i(l*7,c*7)*.56+i(l*19,c*19)*.29+i(l*53,c*53)*.15,h=Math.round(oe.clamp(.28+u*.72,0,1)*255),d=(a*r+o)*4;t[d]=h,t[d+1]=h,t[d+2]=h,t[d+3]=255}let s=new Li(t,r,r,Je);return s.wrapS=ei,s.wrapT=ei,s.minFilter=yn,s.magFilter=fe,s.generateMipmaps=!0,s.colorSpace=Ln,s.needsUpdate=!0,s}function Lg(r={},t=128){let e=Math.max(Number(r.sides??.16),.001),n=Math.max(Number(r.far??.16),.001),i=Math.max(Number(r.near??.16),.001),s=Math.max(Number(r.softness??1),.05),a=new Uint8Array(t*t*4);for(let l=0;l<t;l+=1)for(let c=0;c<t;c+=1){let u=c/(t-1),h=l/(t-1),d=Math.min(oe.smoothstep(Math.min(u,1-u),0,e),oe.smoothstep(1-h,0,n),oe.smoothstep(h,0,i))**s,f=Math.round(d*255),g=(l*t+c)*4;a[g]=f,a[g+1]=f,a[g+2]=f,a[g+3]=255}let o=new Li(a,t,t,Je);return o.minFilter=fe,o.magFilter=fe,o.generateMipmaps=!1,o.colorSpace=Ln,o.needsUpdate=!0,o}function Ng(r){return(Array.isArray(r.material)?r.material:[r.material]).map(e=>e?.name?.toLowerCase()||"").join(" ")}function s1(r){let t=`${r.name} ${Ng(r)}`.toLowerCase();if(t.includes("saturn ring"))return"saturn-ring";for(let e of Object.keys(_o))if(t.includes(e))return e;return/^material(\.\d+)?$/.test(Ng(r))?"sun":null}function Dg(r,t){r.geometry.computeBoundingSphere();let e=r.geometry.boundingSphere?.radius||1;r.scale.setScalar(t/e)}var Zd=class{constructor(t){uf(this,"render",(t=0)=>{this.animationFrame=requestAnimationFrame(this.render),this.timer.update(t);let e=Math.min(this.timer.getDelta(),.1);if(this.renderFoilCards(t),!(!this.visible||!this.renderer)){if(this.updateStars(wn.matches?0:this.timer.getElapsed(),wn.matches?0:e),this.updateSystem(this.timer.getElapsed(),e),wn.matches||this.updateShootingStars(this.timer.getElapsed(),e),wn.matches||(this.updateOrbits(e),this.grainLayers.forEach(n=>{let i=Math.max(1,Number(this.effectSettings?.grainSpeed??it.grainSpeed));t-n.lastUpdate>=1e3/i&&(n.seed=n.seed%97+1,n.node.setAttribute("seed",n.seed),n.lastUpdate=t)})),this.camera.layers.set(0),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera),this.renderer.autoClear=!1,this.renderer.clearDepth(),this.horizonMesh?.visible&&this.renderer.render(this.horizonScene,this.horizonCamera),this.stonesReady){let n=this.renderer.toneMapping,i=this.renderer.toneMappingExposure;this.renderSize??(this.renderSize=new At),this.renderer.getSize(this.renderSize),this.renderer.setScissorTest(!0),this.renderer.setScissor(0,0,this.renderSize.x,Math.floor(this.renderSize.y/2)),this.renderer.clearDepth(),this.renderer.toneMapping=zr,this.renderer.toneMappingExposure=Number(this.effectSettings?.ground3dExposure??it.ground3dExposure),this.camera.layers.set(xr),this.renderer.render(this.scene,this.camera),this.camera.layers.set(0),this.renderer.toneMapping=n,this.renderer.toneMappingExposure=i,this.renderer.setScissorTest(!1)}this.renderer.autoClear=!0}});if(this.root=t,this.stage=t.querySelector("[data-solar-stage]"),this.canvas=t.querySelector(".altar-solar__canvas"),this.grainLayers=Array.from(t.querySelectorAll("[data-grain-turbulence]")).map(e=>({node:e,section:Number(e.dataset.grainSection||1),lastUpdate:0,seed:1})),this.modelUrl=t.dataset.modelUrl,this.stonesUrl=t.dataset.stonesUrl,this.animationFrame=0,this.spinners=[],this.spinTweens=[],this.orbiters=[],this.orbitAxis=new N(0,0,1),this.orbitQuaternion=new ln,this.orbitBinormal=new N,this.shootingStars=[],this.nextShootingStar=2,this.pointer=new At,this.smoothPointer=new At,this.timer=new Oa,this.visible=!0,this.setupFoilCards(),this.setupFortuneFlip(),this.setupSpotifyPlayer(),this.setupDraggables(),this.setupCursorBadge(),this.setupChannels(),!this.stage||!this.canvas||!this.modelUrl||!WebGLRenderingContext){t.classList.add("is-fallback");return}this.setupRenderer(),this.setupScene(),this.setupHorizonLayer(),this.setupStones(),t.hasAttribute("data-lighting-controls")&&this.setupLightingControls(),this.bindEvents(),this.loadModel(),this.render()}setupRenderer(){this.renderer=new qs({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Mg()),this.renderer.outputColorSpace=Te,this.renderer.toneMapping=Xd[it.toneMapping],this.renderer.toneMappingExposure=it.exposure}setupScene(){this.scene=new tr,this.camera=new De(42,1,.1,2e3),this.camera.position.set(0,0,13),this.hemisphereLight=new Fs(it.hemisphereSky,it.hemisphereGround,it.hemisphereIntensity),this.keyLight=new ni(it.keyColor,it.keyIntensity),this.keyLight.position.set(it.keyX,it.keyY,it.keyZ),this.rimLight=new ni(it.rimColor,it.rimIntensity),this.rimLight.position.set(it.rimX,it.rimY,it.rimZ),this.scene.add(this.hemisphereLight,this.keyLight,this.rimLight),this.createStars(it)}setupHorizonLayer(){this.horizonScene=new tr,this.horizonCamera=new kn(-1,1,1,-1,0,1),this.horizonMaterial=new Be({uniforms:{uResolution:{value:new At(1,1)},uFloorColor:{value:new Mt(it.floorColor)},uGlowColor:{value:new Mt(it.horizonGlowColor)},uMixColor:{value:new Mt(it.mixColor)},uFloorHeight:{value:it.floorHeight},uFloorTilt:{value:it.floorTilt},uFloorPerspective:{value:it.floorPerspective},uFloorTexture:{value:it.floorTexture},uFloorTextureScale:{value:it.floorTextureScale},uFloorRelief:{value:it.floorRelief},uFloorLightAngle:{value:it.floorLightAngle},uFloorShade:{value:it.floorShade},uFloorHaze:{value:it.floorHaze},uMixAmount:{value:it.mixAmount},uMixScale:{value:it.mixScale},uMixCoverage:{value:it.mixCoverage},uMixSoftness:{value:it.mixSoftness},uBloomHeight:{value:it.horizonBloomHeight},uBloomIntensity:{value:it.horizonBloomIntensity},uBloomBlur:{value:it.horizonBloomBlur},uBloomRound:{value:it.horizonBloomRound},uBloomFlat:{value:it.horizonBloomFlat},uBloomCenterX:{value:it.horizonBloomCenterX},uBloomWidth:{value:it.horizonBloomWidth},uHorizonLine:{value:it.horizonLine},uShowGradient:{value:it.showHorizonGradient?1:0}},vertexShader:qM,fragmentShader:ZM,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.horizonMesh=new xe(new zn(2,2),this.horizonMaterial),this.horizonMesh.frustumCulled=!1,this.horizonScene.add(this.horizonMesh),this.root.classList.add("has-webgl-horizon")}setupStones(){this.stonesUrl&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fr,this.stonesGroup=new pn,this.stonesGroup.position.set(it.stonesX,it.stonesY,it.stonesZ),this.stonesGroup.layers.set(xr),this.scene.add(this.stonesGroup),this.groundHeightTexture=r1(),this.groundHeightTexture.repeat.set(8,8),this.groundAlphaTexture=Lg(),this.groundMaterial=new Di({color:it.floorColor,roughness:.94,metalness:0,bumpMap:this.groundHeightTexture,bumpScale:.22,alphaMap:this.groundAlphaTexture,alphaTest:.01,transparent:!0}),this.ground=new xe(new zn(1,1),this.groundMaterial),this.ground.rotation.x=-Math.PI/2,this.ground.position.set(0,it.groundY,it.groundZ),this.ground.scale.set(it.groundWidth,it.groundDepth,1),this.ground.receiveShadow=!0,this.ground.layers.set(xr),this.scene.add(this.ground),this.stoneAmbient=new Fs("#f4d9c5","#4a2530",it.stoneAmbientIntensity),this.stoneLight1=new ni(it.stoneLight1Color,it.stoneLight1Intensity),this.stoneLight1.position.set(it.stoneLight1X,it.stoneLight1Y,it.stoneLight1Z),this.stoneLight1.target.position.set(0,it.stonesY,-3),this.stoneLight1.castShadow=!0,this.stoneLight1.shadow.mapSize.set(1024,1024),this.stoneLight1.shadow.camera.left=-12,this.stoneLight1.shadow.camera.right=12,this.stoneLight1.shadow.camera.top=12,this.stoneLight1.shadow.camera.bottom=-12,this.stoneLight1.shadow.camera.near=.1,this.stoneLight1.shadow.camera.far=80,this.stoneLight1.shadow.bias=-8e-4,this.stoneLight1.shadow.normalBias=.035,this.stoneLight2=new ni(it.stoneLight2Color,it.stoneLight2Intensity),this.stoneLight2.position.set(it.stoneLight2X,it.stoneLight2Y,it.stoneLight2Z),this.stoneLight2.target.position.set(0,it.stonesY,-3),this.groundLight=new ni(it.groundLightColor,it.groundLightIntensity),[this.stoneAmbient,this.stoneLight1,this.stoneLight1.target,this.stoneLight2,this.stoneLight2.target,this.groundLight,this.groundLight.target].forEach(t=>t.layers.set(xr)),this.scene.add(this.stoneAmbient,this.stoneLight1,this.stoneLight1.target,this.stoneLight2,this.stoneLight2.target,this.groundLight,this.groundLight.target),new to().load(this.stonesUrl,({scene:t})=>{let e=i1(),n=[];t.layers.set(xr);let i=(o,l)=>{let c=o.geometry.boundingSphere?.radius||1,u=l.radius/c,h=o.geometry.boundingBox.max.y-o.geometry.boundingBox.min.y;o.scale.setScalar(u),o.userData.groundY=h*u*.5-l.embed,o.userData.baseScale=u,o.userData.halfHeight=h*u*.5,o.userData.slotEmbed=l.embed,o.userData.slotRadius=l.radius,o.position.set(l.position[0],o.userData.groundY-Number(this.effectSettings?.stonesEmbed??it.stonesEmbed),l.position[1]),o.rotation.set(...l.rotation),o.name=`stone-${l.planet}`,o.userData.planet=l.planet,o.castShadow=!0,o.receiveShadow=!0,o.layers.set(xr);let d=new xe(new zn(1,1),new Pn({map:e,transparent:!0,depthWrite:!1,opacity:it.ground3dContactShadows}));d.rotation.x=-Math.PI/2,d.rotation.z=l.rotation[1],d.scale.set(l.radius*2.6,l.radius*2.1,1),d.position.set(l.position[0],-.004,l.position[1]),d.renderOrder=1,d.layers.set(xr),d.userData.isContactShadow=!0,o.userData.contact=d,n.push(d)},s=new Map;t.traverse(o=>{if(o.layers.set(xr),!o.isMesh)return;if(!qd[o.name]){o.visible=!1;return}o.geometry.computeBoundingBox();let l=o.geometry.boundingBox.getCenter(new N);o.geometry.translate(-l.x,-l.y,-l.z),o.geometry.computeBoundingBox(),o.geometry.computeBoundingSphere(),(Array.isArray(o.material)?o.material:[o.material]).forEach(u=>{u&&(u.roughness=Math.max(u.roughness??.72,.72),u.needsUpdate=!0)}),s.set(o.name,o)});let a=zg.map(o=>{let l=s.get(o.source);if(!l)return null;let c=l.clone();return c.parent=null,[c,o,l.parent]}).filter(Boolean);s.forEach((o,l)=>i(o,qd[l])),a.forEach(([o,l,c])=>{i(o,l),c.add(o)}),this.stonesGroup.add(t,...n),this.stonesReady=!0,this.applyLightingSettings(this.effectSettings??{...it}),this.root.classList.add("is-stones-ready")},void 0,()=>this.root.classList.add("is-stones-fallback")))}createStars(t){let e=Math.max(0,Math.round(Number(t.starCount))),n=new Float32Array(e*3),i=new Float32Array(e),s=new Float32Array(e),a=new Float32Array(e),o=new Float32Array(e*3);for(let c=0;c<e;c+=1)n[c*3]=(Math.random()-.5)*go.width,n[c*3+1]=oe.lerp(go.bottom,go.top,Math.random()),n[c*3+2]=oe.lerp(go.near,go.far,Math.random()),i[c]=Math.random()*Math.PI*2,s[c]=.4+Math.random()*1.6,a[c]=.35+Math.random()**3*1.65,Cg[Math.floor(Math.random()*Cg.length)].toArray(o,c*3);let l=new Ue;l.setAttribute("position",new me(n,3)),l.setAttribute("aPhase",new me(i,1)),l.setAttribute("aSpeed",new me(s,1)),l.setAttribute("aSize",new me(a,1)),l.setAttribute("aTint",new me(o,3)),this.stars?(this.stars.geometry.dispose(),this.stars.geometry=l):(this.stars=new Lr(l,new Be({uniforms:{uTime:{value:0},uSize:{value:1},uPixelRatio:{value:1},uBrightness:{value:1},uTwinkleSpeed:{value:1},uTwinkleAmount:{value:0},uBloomSize:{value:0},uBloomIntensity:{value:0},uColor:{value:new Mt},uVariation:{value:0}},vertexShader:XM,fragmentShader:YM,transparent:!0,depthWrite:!1,blending:Or})),this.stars.renderOrder=-1,this.scene.add(this.stars)),this.starCount=e}updateStars(t,e){if(!this.stars)return;let n=this.effectSettings??it;Math.round(Number(n.starCount))!==this.starCount&&this.createStars(n);let i=this.stars.material.uniforms;i.uTime.value=t,i.uSize.value=Number(n.starSize),i.uPixelRatio.value=this.renderer.getPixelRatio(),i.uBrightness.value=Number(n.starBrightness),i.uTwinkleSpeed.value=Number(n.twinkleSpeed),i.uTwinkleAmount.value=Number(n.twinkleAmount),i.uBloomSize.value=Number(n.bloomSize),i.uBloomIntensity.value=Number(n.bloomIntensity),i.uColor.value.set(n.starColor),i.uVariation.value=Number(n.starColorVariation),this.stars.rotation.z+=e*Number(n.starDrift)*.01}readLightingSettings(){if(this.persistLighting=Eg(Tg)==="1",!this.persistLighting)return kc(zc,null),{...it};try{let t=JSON.parse(Eg(zc))||{};return t.lightingPresetVersion!==Bg?{...it}:{...it,...t}}catch{return{...it}}}saveLightingSettings(t){this.persistLighting&&kc(zc,JSON.stringify(t))}applyLightingSettings(t){this.lightingBase=t;let e=this.groundPaletteFor(this.channelIndex??0,t);t={...t,...e},this.groundPaletteFrame||(this.currentGroundPalette=e),this.hemisphereLight.color.set(t.hemisphereSky),this.hemisphereLight.groundColor.set(t.hemisphereGround),this.hemisphereLight.intensity=Number(t.hemisphereIntensity),this.keyLight.color.set(t.keyColor),this.keyLight.intensity=Number(t.keyIntensity),this.keyLight.position.set(Number(t.keyX),Number(t.keyY),Number(t.keyZ)),this.rimLight.color.set(t.rimColor),this.rimLight.intensity=Number(t.rimIntensity),this.rimLight.position.set(Number(t.rimX),Number(t.rimY),Number(t.rimZ)),this.renderer.toneMappingExposure=Number(t.exposure),this.renderer.toneMapping=Xd[t.toneMapping]??zr,this.root.style.setProperty("--effect-blur",`calc(${Number(t.effectBlur)} * var(--u, 1px))`),this.root.style.setProperty("--grain-opacity",Number(t.grainOpacity)),this.root.style.setProperty("--section-grain-opacity",Number(t.sectionGrainOpacity)),this.grainLayers.forEach(o=>{o.node.setAttribute("baseFrequency",Number(t.grainFrequency).toFixed(2))}),this.root.style.setProperty("--space-color",t.spaceColor),this.root.style.setProperty("--card-flip-duration",`${Number(t.cardFlipDuration)}ms`),this.root.style.setProperty("--card-scale",Number(t.cardScale)),this.root.style.setProperty("--campaign-scale",Number(t.layoutCampaignScale)),["X","Y","TitleX","TitleY","NoteX","NoteY"].forEach(o=>{let l=o.replace(/([A-Z])/g,"-$1").toLowerCase();this.root.style.setProperty(`--manifesto${l.startsWith("-")?l:`-${l}`}`,`calc(${Number(t[`manifesto${o}`])} * var(--u, 1px))`)}),this.root.style.setProperty("--manifesto-scale",Number(t.manifestoScale)),this.root.style.setProperty("--manifesto-opacity",Number(t.manifestoOpacity)),this.root.style.setProperty("--campaign-open-x",`calc(${Number(t.layoutCampaignOpenX)} * var(--u, 1px))`),this.root.style.setProperty("--campaign-open-y",`calc(${Number(t.layoutCampaignOpenY)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-x",`calc(${Number(t.groundCampaignX)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-y",`calc(${Number(t.groundCampaignY)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-scale",Number(t.groundCampaignScale)),this.root.style.setProperty("--ground-campaign-open-x",`calc(${Number(t.groundCampaignOpenX)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-open-y",`calc(${Number(t.groundCampaignOpenY)} * var(--u, 1px))`),[[".altar-solar__fortune-cards","layoutCardX","layoutCardY"],[".altar-solar__campaign","layoutCampaignCenterX","layoutCampaignY"]].forEach(([o,l,c])=>{let u=this.root.querySelector(o);u?.style.setProperty("--pos-x",`calc(${Number(t[l])} * var(--u, 1px))`),u?.style.setProperty("--pos-y",`calc(${Number(t[c])} * var(--u, 1px))`)}),["rose","cyan","teal"].forEach(o=>{let l=o[0].toUpperCase()+o.slice(1);this.root.querySelectorAll(`.altar-solar__glow--${o}`).forEach(c=>{c.style.setProperty("--c",t[`glow${l}Color`]),c.style.setProperty("--glow-intensity",Number(t[`glow${l}Intensity`]))})}),this.root.querySelectorAll(".altar-solar__horizon").forEach(o=>{o.hidden=!t.showHorizonFloor,o.style.setProperty("--floor-color",t.floorColor),o.style.setProperty("--glow-color",t.horizonGlowColor)}),this.root.style.setProperty("--floor-height",`calc(${Number(t.floorHeight)} * var(--u, 1px))`),this.root.style.setProperty("--bloom-height",`calc(${Number(t.horizonBloomHeight)} * var(--u, 1px))`),this.root.style.setProperty("--bloom-intensity",Number(t.horizonBloomIntensity)),this.root.style.setProperty("--bloom-blur",`calc(${Number(t.horizonBloomBlur)} * var(--u, 1px))`),this.root.style.setProperty("--horizon-line",Number(t.horizonLine)),this.root.style.setProperty("--floor-tilt",`${Number(t.floorTilt)}deg`),this.root.style.setProperty("--floor-perspective",`calc(${Number(t.floorPerspective)} * var(--u, 1px))`),this.root.style.setProperty("--floor-texture",Number(t.floorTexture)),this.root.style.setProperty("--floor-shade",Number(t.floorShade)),this.root.style.setProperty("--floor-haze",Number(t.floorHaze)),this.root.querySelectorAll("[data-floor-noise]").forEach(o=>o.setAttribute("baseFrequency",Number(t.floorTextureScale))),this.root.querySelectorAll("[data-floor-relief]").forEach(o=>o.setAttribute("surfaceScale",Number(t.floorRelief))),this.root.style.setProperty("--floor-mix",Number(t.mixAmount));let n=1/Math.max(Number(t.mixSoftness),.02),i=.8-.6*Number(t.mixCoverage),s=`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${n.toFixed(3)} 0 0 0 ${(.5-n*i).toFixed(3)}`;if(this.root.querySelectorAll("[data-mix-noise]").forEach(o=>o.setAttribute("baseFrequency",Number(t.mixScale))),this.root.querySelectorAll("[data-mix-alpha]").forEach(o=>o.setAttribute("values",s)),this.root.querySelectorAll("[data-mix-flood]").forEach(o=>o.setAttribute("flood-color",t.mixColor)),this.root.querySelectorAll("[data-floor-light]").forEach(o=>o.setAttribute("azimuth",Number(t.floorLightAngle))),this.root.querySelectorAll(".altar-solar__gradient").forEach(o=>{o.hidden=!t.showHorizonGradient}),this.horizonMaterial){let o=this.horizonMaterial.uniforms;o.uFloorColor.value.set(t.floorColor),o.uGlowColor.value.set(t.horizonGlowColor),o.uMixColor.value.set(t.mixColor),o.uFloorHeight.value=Number(t.floorHeight),o.uFloorTilt.value=Number(t.floorTilt),o.uFloorPerspective.value=Number(t.floorPerspective),o.uFloorTexture.value=Number(t.floorTexture),o.uFloorTextureScale.value=Number(t.floorTextureScale),o.uFloorRelief.value=Number(t.floorRelief),o.uFloorLightAngle.value=Number(t.floorLightAngle),o.uFloorShade.value=Number(t.floorShade),o.uFloorHaze.value=Number(t.floorHaze),o.uMixAmount.value=Number(t.mixAmount),o.uMixScale.value=Number(t.mixScale),o.uMixCoverage.value=Number(t.mixCoverage),o.uMixSoftness.value=Number(t.mixSoftness),o.uBloomHeight.value=Number(t.horizonBloomHeight),o.uBloomIntensity.value=Number(t.horizonBloomIntensity),o.uBloomBlur.value=Number(t.horizonBloomBlur),o.uBloomRound.value=Number(t.horizonBloomRound),o.uBloomFlat.value=Number(t.horizonBloomFlat),o.uBloomCenterX.value=Number(t.horizonBloomCenterX),o.uBloomWidth.value=Number(t.horizonBloomWidth),o.uHorizonLine.value=Number(t.horizonLine),o.uShowGradient.value=t.showHorizonGradient?1:0,this.horizonMesh.visible=!!t.showHorizonFloor}if(this.updateStones(t),this.groundMaterial){this.groundMaterial.color.set(t.ground3dColor),this.groundMaterial.bumpScale=Number(t.ground3dRelief)*.09,this.groundMaterial.roughness=Number(t.ground3dRoughness);let o=oe.clamp(.08/Math.max(Number(t.ground3dTextureScale),.002),3,32);this.groundHeightTexture.repeat.set(o,o),this.groundHeightTexture.needsUpdate=!0,this.groundMaterial.needsUpdate=!0}let a=["ground3dFadeSides","ground3dFadeFar","ground3dFadeNear","ground3dFadeSoftness"].map(o=>t[o]).join("|");if(this.groundMaterial&&a!==this.groundFadeKey&&(this.groundFadeKey=a,this.groundAlphaTexture?.dispose(),this.groundAlphaTexture=Lg({sides:t.ground3dFadeSides,far:t.ground3dFadeFar,near:t.ground3dFadeNear,softness:t.ground3dFadeSoftness}),this.groundMaterial.alphaMap=this.groundAlphaTexture,this.groundMaterial.needsUpdate=!0),this.groundLight&&(this.groundLight.color.set(t.groundLightColor),this.groundLight.intensity=Number(t.groundLightIntensity),this.groundLight.position.set(Number(t.groundX)+Number(t.groundLightX),Number(t.groundY)+Number(t.groundLightY),Number(t.groundZ)+Number(t.groundLightZ)),this.groundLight.target.position.set(Number(t.groundX)+Number(t.groundLightTargetX),Number(t.groundY),Number(t.groundZ)+Number(t.groundLightTargetZ))),this.ground){let o=oe.degToRad;this.ground.rotation.set(-Math.PI/2+o(Number(t.groundRotX)),o(Number(t.groundRotY)),o(Number(t.groundRotZ)),"YXZ"),this.ground.position.set(Number(t.groundX),Number(t.groundY),Number(t.groundZ)),this.ground.scale.set(Number(t.groundWidth)*Number(t.groundStretchX),Number(t.groundDepth),1),this.ground.visible=t.showGround3d!==!1,this.ground.receiveShadow=t.ground3dShadows!==!1}this.stoneAmbient&&(this.stoneAmbient.intensity=Number(t.stoneAmbientIntensity)),this.stoneLight1&&(this.stoneLight1.color.set(t.stoneLight1Color),this.stoneLight1.intensity=Number(t.stoneLight1Intensity),this.stoneLight1.position.set(Number(t.stoneLight1X),Number(t.stoneLight1Y),Number(t.stoneLight1Z)),this.stoneLight1.target.position.set(0,Number(t.groundY),Number(t.groundZ)-3)),this.stoneLight2&&(this.stoneLight2.color.set(t.stoneLight2Color),this.stoneLight2.intensity=Number(t.stoneLight2Intensity),this.stoneLight2.position.set(Number(t.stoneLight2X),Number(t.stoneLight2Y),Number(t.stoneLight2Z)),this.stoneLight2.target.position.set(0,Number(t.groundY),Number(t.groundZ)-3)),this.sectionGuide&&(this.sectionGuide.hidden=!t.showSections,this.updateTramoHud()),this.effectSettings=t}setupLightingControls(){let t=this.readLightingSettings(),e=document.createElement("aside");e.className="lighting-panel is-collapsed",e.setAttribute("aria-label","Controlador de iluminaci\xF3n"),e.innerHTML=`
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
${Hc(1)}
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
${Hc(2)}
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
${Hc(3)}
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
${Hc(4)}
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
          <label class="is-select">Color mapping <select data-lighting="toneMapping">${Object.keys(Xd).map(h=>`<option>${h}</option>`).join("")}</select></label>
        </details>
        <button class="lighting-panel__reset" type="button" data-lighting-reset>Restablecer</button>
      </div>
      <button class="lighting-panel__toggle" type="button" aria-expanded="false">Open Controls</button>`;let n=[{label:"01 \xB7 Fondo",groups:["Fondo"]},{label:"02 \xB7 3D",groups:["Horizonte","Tierra \xB7 canal 1","Tierra \xB7 canal 2","Tierra \xB7 canal 3","Tierra \xB7 canal 4","Piso 3D","Piedras","Iluminaci\xF3n suelo","Ambiente","Principal c\xE1lida","Contraluz violeta","Estrellas","Estrellas fugaces","\xD3rbitas","Sol","Sistema","Sistema \xB7 canal 1","Sistema \xB7 canal 2","Sistema \xB7 canal 3","Sistema \xB7 canal 4","Render"]},{label:"03 \xB7 Grainy blur",groups:["Grainy blur"]},{label:"04 \xB7 UI",groups:["Layout","Manifiesto","Carta","Carta foil","Carta mapeo","Carta extras"]}],i=e.querySelector(".lighting-panel__body"),s=e.querySelector("[data-lighting-reset]"),a=new Map(Array.from(i.querySelectorAll(":scope > details")).map(h=>[h.querySelector("summary").textContent.trim(),h])),o=document.createDocumentFragment();n.forEach(({label:h,groups:d})=>{let f=document.createElement("p");f.className="lighting-panel__layer",f.textContent=h,o.appendChild(f),d.forEach(g=>{let _=a.get(g);_&&o.appendChild(_)})}),i.insertBefore(o,s);let l=(h,d)=>{h.type==="checkbox"?h.checked=!!d:h.value=d};e.querySelectorAll('input[type="range"]').forEach(h=>{let d=h.parentElement.querySelector("output");if(!d)return;let f=document.createElement("input");f.type="text",f.inputMode="decimal",f.className="lighting-panel__number",f.setAttribute("aria-label",`${h.closest("label")?.firstChild?.textContent?.trim()||"Valor"} (n\xFAmero)`),d.replaceWith(f);let g=()=>{let _=Number(String(f.value).replace(",","."));if(!Number.isFinite(_)){c();return}_<Number(h.min)&&(h.min=String(_)),_>Number(h.max)&&(h.max=String(_)),h.value=String(_),h.dispatchEvent(new Event("input"))};f.addEventListener("change",g),f.addEventListener("keydown",_=>{_.key==="Enter"&&f.blur(),_.key==="Escape"&&(c(),f.blur())})});let c=()=>{e.querySelectorAll('input[type="range"]').forEach(h=>{let d=h.parentElement.querySelector(".lighting-panel__number");if(!d||document.activeElement===d)return;let f=Math.max(1,(h.step.split(".")[1]||"").length);d.value=Number(h.value).toFixed(f)})};e.querySelectorAll("[data-lighting]").forEach(h=>{l(h,t[h.dataset.lighting]),h.addEventListener("input",()=>{let d=h.dataset.lighting;t[d]=h.type==="checkbox"?h.checked:h.type==="range"?Number(h.value):h.value;let f=d.match(/^system([1-4])(X|Y|Z|RotX|RotY|RotZ|Scale)$/);f&&this.showChannel?.(Number(f[1])-1);let g=d.match(/^tierra([1-4])/);g&&this.showChannel?.(Number(g[1])-1),c(),this.applyLightingSettings(t),this.saveLightingSettings(t)})});let u=e.querySelector("[data-lighting-persist]");u.checked=this.persistLighting,u.addEventListener("change",()=>{this.persistLighting=u.checked,kc(Tg,this.persistLighting?"1":null),kc(zc,this.persistLighting?JSON.stringify(t):null)}),e.querySelector(".lighting-panel__toggle").addEventListener("click",h=>{let d=e.classList.toggle("is-collapsed");h.currentTarget.setAttribute("aria-expanded",String(!d)),h.currentTarget.textContent=d?"Open Controls":"Close Controls"}),e.querySelector("[data-shooting-trigger]").addEventListener("click",()=>{this.shootingStars.length||this.spawnShootingStar(t)}),e.querySelector("[data-lighting-reset]").addEventListener("click",()=>{Object.assign(t,it),this.saveLightingSettings(t),e.querySelectorAll("[data-lighting]").forEach(h=>{l(h,t[h.dataset.lighting])}),c(),this.applyLightingSettings(t)}),this.setupSectionGuide(),c(),this.applyLightingSettings(t),document.body.appendChild(e)}loadModel(){new to().load(this.modelUrl,({scene:e})=>{this.model=e,this.system=new pn,this.system.add(this.model),this.scene.add(this.system);let n=null,i=[],s={};e.traverse(a=>{if(!a.isMesh)return;let o=s1(a);if(a.castShadow=!1,a.receiveShadow=!1,(Array.isArray(a.material)?a.material:[a.material]).forEach(u=>{u&&(u.roughness=Math.max(u.roughness??.5,.48),u.needsUpdate=!0)}),o==="saturn-ring"){i.push(a);return}let c=o?_o[o]:null;if(!c){a.visible=!1;return}a.position.set(...c.position),a.rotation.set(.08,Math.random()*Math.PI,o==="saturn"?-.28:0),Dg(a,c.radius),a.userData.basePosition=a.position.clone(),a.userData.spinSpeed=.035+Math.random()*.07,this.spinners.push(a),s[o]=a,o==="saturn"&&(n=a.position.clone())}),i.forEach(a=>{a.position.copy(n||new N(..._o.saturn.position)),a.rotation.set(.08,0,-.28),Dg(a,1.02),a.userData.basePosition=a.position.clone(),this.spinners.push(a)}),this.setupOrbits(s,i),this.root.classList.add("is-ready"),this.createIdleAnimation()},void 0,()=>this.root.classList.add("is-fallback"))}setupOrbits(t,e){if(this.sun=t.sun,!this.sun)return;let n=this.sun.position;this.model.position.copy(n).negate(),this.setupSun();let i=new Ue().setFromPoints(Array.from({length:Ag},(s,a)=>{let o=a/Ag*Math.PI*2;return new N(Math.cos(o),Math.sin(o),0)}));if(Object.entries(t).forEach(([s,a])=>{if(s==="sun"||s==="moon")return;let o=a.position.clone().sub(n),l=new Ir(i,new nr({transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,this.sun.parent.add(l),this.orbiters.push({mesh:a,distance:_o[s].orbit??o.length(),angle:Math.atan2(o.y,o.x),line:l,rings:s==="saturn"?e:[]})}),t.moon&&t.earth){let s=t.moon.position.clone().sub(t.earth.position);this.moon={mesh:t.moon,distance:s.length(),earth:t.earth,angle:Math.atan2(s.y,s.x)}}}setupSun(){let t=Array.isArray(this.sun.material)?this.sun.material:[this.sun.material];this.sunMaterials=t.filter(e=>e&&"emissiveIntensity"in e),this.sunBaseScale=this.sun.scale.x,this.sunRadius=_o.sun.radius,this.sunGlow=new Ea(new Cs({map:n1(),transparent:!0,depthWrite:!1,blending:Or,toneMapped:!1})),this.sunGlow.renderOrder=1,this.sunLight=new Ur(16777215,0,0,0),this.sunGlow.position.copy(this.sun.position),this.sunLight.position.copy(this.sun.position),this.sun.parent.add(this.sunGlow,this.sunLight)}updateSun(t){if(!this.sun||!this.sunGlow)return;let e=Number(t.sunSize);this.sun.scale.setScalar(this.sunBaseScale*e),this.sunMaterials.forEach(i=>{i.emissive.set(t.sunEmissiveColor),i.emissiveIntensity=Number(t.sunEmissive)});let n=Number(t.sunGlowIntensity);this.sunGlow.visible=n>0,this.sunGlow.material.opacity=n,this.sunGlow.material.color.set(t.sunGlowColor),this.sunGlow.scale.setScalar(this.sunRadius*e*Number(t.sunGlowSize)*2),this.sunLight.intensity=Number(t.sunLightIntensity),this.sunLight.color.set(t.sunLightColor)}spawnShootingStar(t){this.shootingGeometry||(this.shootingGeometry=new zn(1,1).translate(-.5,0,0));let e=oe.lerp(Vc.left,Vc.right,Math.random()),n=oe.lerp(Vc.bottom,Vc.top,Math.random()),i=new N(e,n,.5).unproject(this.camera).sub(this.camera.position).normalize(),s=($M-this.camera.position.z)/i.z,a=this.camera.position.clone().addScaledVector(i,s),o=oe.degToRad(Number(t.shootingAngle)+(Math.random()*2-1)*Number(t.shootingAngleVariation)),l=new xe(this.shootingGeometry,new Be({uniforms:{uColor:{value:new Mt(t.shootingColor)},uOpacity:{value:0}},vertexShader:KM,fragmentShader:JM,transparent:!0,depthWrite:!1,blending:Or}));l.position.copy(a),l.rotation.z=o,l.renderOrder=2,this.scene.add(l),this.shootingStars.push({mesh:l,velocity:new N(Math.cos(o),Math.sin(o),0),age:0,life:.6+Math.random()*.7})}updateShootingStars(t,e){let n=this.effectSettings??it,i=()=>{let s=Number(n.shootingPauseMin),a=Math.max(s,Number(n.shootingPauseMax));this.nextShootingStar=t+oe.lerp(s,a,Math.random())};n.shootingEnabled?!this.shootingStars.length&&t>=this.nextShootingStar&&this.spawnShootingStar(n):i(),this.shootingStars=this.shootingStars.filter(s=>{s.age+=e;let a=s.age/s.life;return a>=1?(this.scene.remove(s.mesh),s.mesh.material.dispose(),i(),!1):(s.mesh.position.addScaledVector(s.velocity,Number(n.shootingSpeed)*e),s.mesh.scale.set(Number(n.shootingLength)*Math.min(a*3,1),Number(n.shootingWidth),1),s.mesh.material.uniforms.uOpacity.value=Math.sin(a*Math.PI)*Number(n.shootingBrightness),s.mesh.material.uniforms.uColor.value.set(n.shootingColor),!0)})}systemPoseFor(t,e){let n=`system${t+1}`;return Object.fromEntries(Ug.map(i=>[i,Number(e[`${n}${i}`])]))}currentSystemPose(t){let e=this.systemPoseFor(this.channelIndex??0,t),n=this.systemMove;if(!n)return e;let i=Math.min((performance.now()-n.start)/$d,1);if(i>=1)return this.systemMove=null,e;let s=qc(i);return Object.fromEntries(Ug.map(a=>[a,n.from[a]+(e[a]-n.from[a])*s]))}moveSystemToChannel(t,e){let n=this.effectSettings??it,i=this.system?this.currentSystemPose(n):null;this.channelIndex=t,this.systemMove=e&&i?{from:i,start:performance.now()}:null}updateSystem(t,e){if(!this.system)return;let n=this.effectSettings??it,i=!wn.matches,s=oe.degToRad;this.systemSpinAngle=(this.systemSpinAngle||0)+(i?e*s(Number(n.systemSpin)):0);let a=i?Math.sin(t*Number(n.systemFloatSpeed)*Math.PI*2)*Number(n.systemFloat):0;this.smoothPointer.lerp(this.pointer,Math.min(e*4,1));let o=i?s(Number(n.systemParallax)):0,l=this.currentSystemPose(n);this.system.position.set(l.X,l.Y+a,l.Z),this.system.rotation.set(s(l.RotX)-this.smoothPointer.y*o,s(l.RotY)+this.systemSpinAngle+this.smoothPointer.x*o,s(l.RotZ)),this.system.scale.setScalar(l.Scale),this.updateSun(n)}updateOrbits(t){if(!this.sun)return;let e=this.effectSettings??it,n=Number(e.orbitSpeed),i=Number(e.orbitKepler),s=Number(e.orbitScale),a=e.orbitDirection==="Horario"?-1:1,o=oe.degToRad(Number(e.orbitTilt)),l=Number(e.orbitLineOpacity);this.orbitAxis.set(0,Math.sin(o),Math.cos(o)),this.orbitQuaternion.setFromUnitVectors(WM,this.orbitAxis),this.orbitBinormal.crossVectors(this.orbitAxis,Rg),this.orbiters.forEach(h=>{let d=HM*n*(VM/h.distance)**i;h.angle+=t*d*a;let f=h.distance*s;this.placeOnOrbit(h.mesh.position,this.sun.position,f,h.angle),h.rings.forEach(g=>g.position.copy(h.mesh.position)),h.line.visible=l>0,h.line.material.opacity=l,h.line.material.color.set(e.orbitLineColor),h.line.quaternion.copy(this.orbitQuaternion),h.line.scale.setScalar(f),h.line.position.copy(this.sun.position)}),this.moon&&(this.moon.angle+=t*GM*Number(e.moonSpeed)*n*a,this.placeOnOrbit(this.moon.mesh.position,this.moon.earth.position,this.moon.distance,this.moon.angle));let c=Number(e.spinSpeed),u=Number(e.sunSpin);(c!==this.appliedSpinSpeed||u!==this.appliedSunSpin)&&(this.spinTweens.forEach(h=>{h.timeScale(h.targets()[0]===this.sun?.rotation?c*u:c)}),this.appliedSpinSpeed=c,this.appliedSunSpin=u)}placeOnOrbit(t,e,n,i){return t.copy(Rg).multiplyScalar(Math.cos(i)*n).addScaledVector(this.orbitBinormal,Math.sin(i)*n).add(e)}createIdleAnimation(){wn.matches||!this.model||this.spinners.forEach(t=>{this.spinTweens.push(Wd.to(t.rotation,{y:t.rotation.y+Math.PI*2,duration:Math.PI*2/t.userData.spinSpeed,repeat:-1,ease:"none"}))})}setupFoilCards(){this.foilCards=[],window.WebGLRenderingContext&&this.root.querySelectorAll("[data-foil-card]").forEach(t=>{let e=t.querySelector(".altar-solar__foil-canvas"),n=t.dataset.foilBase,i=t.dataset.foilMap;!e||!n||!i||Promise.all([this.loadFoilTexture(n),this.loadFoilTexture(i)]).then(([s,a])=>{let o=new qs({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),o.setSize(236,358,!1),o.setClearColor(0,0);let l=new tr,c=new kn(-1,1,1,-1,-1,1),u=new Be({vertexShader:t1,fragmentShader:e1,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uBaseMap:{value:s},uFoilMap:{value:a},uAspect:{value:236/358},uArtMode:{value:"foilArt"in t.dataset?1:0},uZoneCenter:{value:new At},uZoneScale:{value:1},uCameraPosition:{value:new N(0,0,jM)},uLight1Position:{value:new N},uLight2Position:{value:new N},uBevelSize:{value:new At},...Object.fromEntries(Object.values(Pg).map(f=>[f,{value:0}])),...Object.fromEntries(Object.values(Ig).map(f=>[f,{value:new N}])),uMouse:{value:new At},uTime:{value:0},uScrollOffset:{value:0}}}),h=new xe(new zn(2,2),u);l.add(h);let d={card:t,renderer:o,scene:l,camera:c,material:u,baseUrl:n,foilUrl:i,maskSize:new At(a.image.width,a.image.height)};this.foilCards.push(d),o.render(l,c),t.classList.add("is-foil-rendered")}).catch(()=>{t.classList.remove("is-foil-rendered")})})}setupChannels(){let t=this.root.querySelector(".altar-solar__channel-label"),e=Array.from(this.root.querySelectorAll(".altar-solar__pagination span")),n=this.root.querySelector(".altar-solar__pagination"),i=this.root.querySelector(".altar-solar__campaign-crop img"),s=this.root.querySelector(".altar-solar__campaign"),[a,o]=this.root.querySelectorAll(".altar-solar__channel-arrow");if(!t||!a||!o)return;let l=i?.getAttribute("src"),c=0,u=v=>{let T=this.effectSettings??it;return Xc[v].background??{space:T.spaceColor,glows:{rose:[T.glowRoseColor,T.glowRoseIntensity],cyan:[T.glowCyanColor,T.glowCyanIntensity],teal:[T.glowTealColor,T.glowTealIntensity]}}},h=v=>{this.root.style.setProperty("--space-color",v.space),Object.entries(v.glows).forEach(([T,[w,x]])=>{this.root.querySelectorAll(`.altar-solar__glow--${T}`).forEach(E=>{E.style.setProperty("--c",w),E.style.setProperty("--glow-intensity",Number(x))})})},d=this.root.querySelector(".altar-solar__ground-campaign-media img"),f=d?.getAttribute("src"),g=v=>{if(d){let w=v>0&&d.getAttribute(`data-channel-image-${v+1}`);d.src=w||f,d.classList.toggle("is-channel-cover",!!w)}if(!i)return;let T=v===0?l:i.getAttribute(`data-channel-image-${v+1}`);T&&(i.src=T),i.classList.toggle("is-channel-cover",v!==0)},_=(v=i)=>{if(!v)return;cancelAnimationFrame(this.photoZoomFrame);let T=performance.now(),w=x=>{let E=Math.min((x-T)/o1,1),C=1-Math.pow(1-qc(E),3);v.style.scale=String(3+-2*C),E<1?this.photoZoomFrame=requestAnimationFrame(w):v.style.removeProperty("scale")};this.photoZoomFrame=requestAnimationFrame(w)},p=this.root.querySelector("[data-ground-campaign]"),m=()=>{if(!p)return s;let v=p.getBoundingClientRect(),T=v.top+v.height/2;return T>0&&T<window.innerHeight?p:s},b=v=>{t.textContent=`CHANNEL ${String(v+1).padStart(2,"0")}`,e.forEach((T,w)=>T.classList.toggle("is-active",w===v)),n?.setAttribute("aria-label",`Canal ${v+1} de ${e.length||Xc.length}`)},A=!1,S=(v,T)=>{if(A)return;c=(c+v+Xc.length)%Xc.length;let w=u(c);if(b(c),this.closeFortuneCard?.(),this.setCardChannel(c),this.moveSystemToChannel(c,!wn.matches),this.moveGroundToChannel(c,!wn.matches),wn.matches||!this.channelReveal){g(c),h(w);return}A=!0,g(c);let x=m()??T;_(x===p?d:i),x===p&&this.channelRings?.play(w,x,()=>{}),this.channelReveal.play(w,x,()=>{h(w),A=!1})};this.showChannel=v=>{A||v===c||(c=v,b(c),g(c),h(u(c)),this.setCardChannel(c),this.moveSystemToChannel(c,!1),this.moveGroundToChannel(c,!1))},this.playCardWave=v=>{wn.matches||A||this.channelRings?.play(u(c),v,()=>{},{bandColor:l1})},a.addEventListener("click",()=>S(-1,a)),o.addEventListener("click",()=>S(1,o)),this.channelReveal=Fg(this.stage),this.channelRings=Fg(this.stage,{ringsOnly:!0})}updateStones(t){if(!this.stonesGroup)return;let e=oe.degToRad;this.stonesGroup.position.set(Number(t.stonesX),Number(t.stonesY),Number(t.stonesZ)),this.stonesGroup.rotation.set(e(Number(t.stonesRotX)),e(Number(t.stonesRotY)),e(Number(t.stonesRotZ))),this.stonesGroup.scale.setScalar(Number(t.stonesScale)),this.stonesGroup.traverse(n=>{if(!n.isMesh||!Number.isFinite(n.userData.groundY))return;let i=n.userData.planet,s=u=>Number(t[wg(i,u)]),a=s("Scale"),o=s("X"),l=s("Z");n.scale.setScalar(n.userData.baseScale*a),n.position.set(o,(n.userData.halfHeight-n.userData.slotEmbed)*a-Number(t.stonesEmbed)+s("Y"),l),n.rotation.set(e(s("RotX")),e(s("RotY")),e(s("RotZ")));let c=n.userData.contact;c&&(c.position.set(o,-.004,l),c.rotation.z=e(s("RotY")),c.scale.set(n.userData.slotRadius*2.6*a,n.userData.slotRadius*2.1*a,1),c.visible=s("Y")<.6,c.material.opacity=Number(t.ground3dContactShadows)*oe.clamp(1-s("Y")/.6,0,1))})}groundPaletteFor(t,e=this.lightingBase??it){let n=i=>e[`tierra${t+1}${i}`];return{ground3dColor:n("Ground"),floorColor:n("Horizon"),horizonGlowColor:n("Horizon"),stoneAmbientIntensity:Number(n("Ambient")),stoneLight1Color:n("Light1Color"),stoneLight1Intensity:Number(n("Light1Intensity")),stoneLight2Color:n("Light2Color"),stoneLight2Intensity:Number(n("Light2Intensity")),horizonBloomIntensity:Number(n("BloomIntensity")),...Object.fromEntries(kg.flatMap(({planet:i})=>kM.map(s=>[wg(i,s),Number(n(`Stone${i[0].toUpperCase()}${i.slice(1)}${s}`))])))}}setGroundPalette(t){this.groundMaterial?.color.set(t.ground3dColor);let e=this.horizonMesh?.material?.uniforms;e?.uFloorColor.value.set(t.floorColor),e?.uGlowColor.value.set(t.horizonGlowColor),this.stoneAmbient&&(this.stoneAmbient.intensity=t.stoneAmbientIntensity),this.stoneLight1&&(this.stoneLight1.color.set(t.stoneLight1Color),this.stoneLight1.intensity=t.stoneLight1Intensity),this.stoneLight2&&(this.stoneLight2.color.set(t.stoneLight2Color),this.stoneLight2.intensity=t.stoneLight2Intensity),e&&(e.uBloomIntensity.value=t.horizonBloomIntensity),this.root.style.setProperty("--bloom-intensity",t.horizonBloomIntensity),this.updateStones({...this.lightingBase??it,...t})}moveGroundToChannel(t,e){let n=this.groundPaletteFor(t);cancelAnimationFrame(this.groundPaletteFrame),this.groundPaletteFrame=0;let i=this.currentGroundPalette??n;if(this.currentGroundPalette=n,!e){this.setGroundPalette(n);return}let s=performance.now(),a=o=>{let l=qc(Math.min((o-s)/$d,1)),c=Object.fromEntries(Object.keys(n).map(u=>[u,typeof n[u]=="number"?i[u]+(n[u]-i[u])*l:new Mt(i[u]).lerp(new Mt(n[u]),l)]));this.currentGroundPalette=l<1?c:n,this.setGroundPalette(c),this.groundPaletteFrame=l<1?requestAnimationFrame(a):0};this.groundPaletteFrame=requestAnimationFrame(a)}setupCursorBadge(){let t=this.root.querySelectorAll("[data-cursor-label]");if(this.root.querySelectorAll("[data-scroll-to]").forEach(p=>{p.addEventListener("click",()=>{document.querySelector(p.dataset.scrollTo)?.scrollIntoView({behavior:wn.matches?"auto":"smooth",block:"start"})})}),!t.length)return;let e=document.createElement("div");e.className="altar-cursor-badge",e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="altar-cursor-badge__label"></span><span class="altar-cursor-badge__arrow"><svg class="altar-cursor-badge__go" viewBox="0 0 11 11" fill="currentColor"><path d="M1 5h7L5 2l1-1 4.5 4.5L6 10l-1-1 3-3H1z"/></svg><svg class="altar-cursor-badge__move" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 1v9M1 5.5h9M4 2.5 5.5 1 7 2.5M4 8.5 5.5 10 7 8.5M2.5 4 1 5.5 2.5 7M8.5 4 10 5.5 8.5 7"/></svg></span>',document.body.append(e);let n=e.querySelector(".altar-cursor-badge__label"),i=window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)"),s={x:null,y:null},a=20,o=null,l=0,c=!1,u=p=>p.getAttribute("aria-pressed")==="true"&&!!p.dataset.cursorLabelPressed,h=p=>u(p)?p.dataset.cursorLabelPressed:p.dataset.cursorLabel,d=()=>{o=null,e.classList.remove("is-active")},f=()=>{if(l=0,c||!i.matches||s.x===null)return d();let p=document.elementFromPoint(s.x,s.y)?.closest("[data-cursor-label]");if(!p||!this.root.contains(p)||p.closest(".is-dragging"))return d();let m=h(p);n.textContent!==m&&(n.textContent=m),e.classList.toggle("is-back",u(p)),e.classList.toggle("is-move",p.dataset.cursorIcon==="move"),p!==o&&(o=p,e.classList.add("is-active"));let b=e.offsetWidth,A=e.offsetHeight,S=Math.min(s.x+a,window.innerWidth-b-4),v=oe.clamp(s.y-A/2,4,window.innerHeight-A-4);e.style.transform=`translate(${S}px, ${v}px)`},g=()=>{l||(l=requestAnimationFrame(f))},_=()=>{e.classList.toggle("is-enabled",i.matches),i.matches||d()};document.addEventListener("pointermove",p=>{p.pointerType&&p.pointerType!=="mouse"||(c=!1,s.x=p.clientX,s.y=p.clientY,g())},{passive:!0,capture:!0}),window.addEventListener("scroll",g,{passive:!0}),document.addEventListener("pointerleave",d),document.addEventListener("click",()=>{c=!0,d()},!0),i.addEventListener?.("change",_),_()}setupDraggables(){Wc(this.root.querySelector(".altar-solar__campaign")),Wc(this.root.querySelector("[data-ground-campaign]")),Wc(this.root.querySelector(".altar-solar__fortune-cards"),{allowTouch:!1});let t=this.root.querySelector(".altar-solar__player");Wc(t,{handle:t?.querySelector("[data-drag-handle]")})}setupSpotifyPlayer(){let t=this.root.querySelector(".altar-solar__open-player"),e=this.root.querySelector(".altar-solar__player"),n=t?.querySelector(".altar-solar__player-label");if(!t||!e)return;let i=null,s=()=>f1(i?.url||t.dataset.spotifyUrl),a=()=>{let l=new Date,c=d1(l.getHours());if(n){let u=l.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}).toUpperCase();n.textContent=`[  ${c.name} ]  ${u}`}if(c!==i){i=c;let u=e.querySelector("iframe");u&&s()&&(u.src=s())}clearTimeout(this.playerClockTimer),this.playerClockTimer=setTimeout(a,6e4-(l.getSeconds()*1e3+l.getMilliseconds())+50)};a();let o=l=>{if(l&&!e.querySelector("iframe")&&s()){let c=document.createElement("iframe");c.src=s(),c.title="Reproductor de Spotify",c.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",c.loading="lazy",e.appendChild(c)}e.classList.toggle("is-open",l),e.setAttribute("aria-hidden",String(!l)),t.setAttribute("aria-expanded",String(l)),t.setAttribute("aria-label",l?"Cerrar reproductor":"Abrir reproductor")};t.addEventListener("click",()=>o(!e.classList.contains("is-open"))),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&o(!1)})}setupFortuneFlip(){let t=this.root.querySelector("[data-fortune-flip]");if(!t)return;let e=t.querySelector(".altar-solar__fortune-face--front"),n=t.querySelector(".altar-solar__fortune-face--back"),i=t.closest(".altar-solar__fortune-cards"),s=h=>{if(!i||h===i.classList.contains("is-focused"))return;if(clearTimeout(this.fortuneFocusTimer),i.classList.add("is-animating-focus"),this.fortuneFocusTimer=setTimeout(()=>i.classList.remove("is-animating-focus"),1e3),!h){i.classList.remove("is-focused"),this.root.classList.remove("is-card-open"),["--focus-x","--focus-y","--card-scale"].forEach(A=>i.style.removeProperty(A)),this.fortuneFocusScale=0;return}let d=this.effectSettings??it;t.style.setProperty("--tilt-x","0deg"),t.style.setProperty("--tilt-y","0deg");let f=t.getBoundingClientRect(),_=f.width/236/Number(d.cardScale),p=Math.min(Number(d.cardFocusScale),(window.innerHeight-160)/358,(window.innerWidth-24)/236),m=236*p,b=358*p;i.style.setProperty("--focus-x",`${window.innerWidth/2-m/2-f.left}px`),i.style.setProperty("--focus-y",`${window.innerHeight/2+b/2-f.bottom}px`),i.style.setProperty("--card-scale",p/_),i.classList.add("is-focused"),this.root.classList.add("is-card-open"),this.fortuneFocusScale=p},a=h=>{if(clearTimeout(this.fortuneReturnTimer),s(h),t.classList.toggle("is-flipped",h),t.setAttribute("aria-pressed",String(h)),e?.setAttribute("aria-hidden",String(h)),n?.setAttribute("aria-hidden",String(!h)),!h)return;let d=this.effectSettings??it,f=Number(d.cardReturnSeconds);f>0&&(this.fortuneReturnTimer=setTimeout(()=>a(!1),f*1e3))};this.closeFortuneCard=()=>{t.classList.contains("is-flipped")&&a(!1)};let o=()=>{t.closest(".altar-solar__fortune-cards")?.classList.add("is-touched");let h=!t.classList.contains("is-flipped");h&&this.playCardWave?.(t),a(h)};t.addEventListener("pointermove",h=>{if(wn.matches)return;let d=t.getBoundingClientRect(),f=(h.clientX-d.left)/d.width-.5,g=(h.clientY-d.top)/d.height-.5,_=Number((this.effectSettings??it).foilTilt);t.style.setProperty("--tilt-x",`${(-g*2*_).toFixed(2)}deg`),t.style.setProperty("--tilt-y",`${(f*2*_).toFixed(2)}deg`)},{passive:!0}),t.addEventListener("pointerleave",()=>{t.style.setProperty("--tilt-x","0deg"),t.style.setProperty("--tilt-y","0deg")},{passive:!0}),t.addEventListener("click",o),t.addEventListener("keydown",h=>{h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),o())});let l=this.root.querySelector(".altar-solar__fortune-cards"),c=this.root.querySelector(".altar-solar__reveal-card"),u=h=>{this.fortuneOpen=h,l?.classList.toggle("is-open",h),l?.setAttribute("aria-hidden",String(!h)),t.tabIndex=h?0:-1,c?.setAttribute("aria-expanded",String(h)),c?.setAttribute("aria-label",h?"Ocultar carta":"Revelar carta"),h||a(!1)};c?.addEventListener("click",()=>u(!this.fortuneOpen)),u(!!l?.classList.contains("is-open")),document.addEventListener("keydown",h=>{h.key==="Escape"&&this.fortuneOpen&&u(!1)})}setCardChannel(t){let e=t+1;this.root.querySelectorAll("[data-foil-card]").forEach(n=>{var c;let i=n.getAttribute(`data-channel-base-${e}`)||n.dataset.foilBase,s=n.getAttribute(`data-channel-map-${e}`)||n.dataset.foilMap,a=n.querySelector(":scope > img");a&&i&&(a.src=i);let o=n.querySelector(".altar-solar__fortune-copy p");o&&((c=o.dataset).defaultMessage??(c.defaultMessage=o.textContent),o.textContent=n.getAttribute(`data-channel-message-${e}`)||o.dataset.defaultMessage);let l=this.foilCards?.find(u=>u.card===n);!l||l.baseUrl===i&&l.foilUrl===s||(l.baseUrl=i,l.foilUrl=s,Promise.all([this.loadFoilTexture(i),this.loadFoilTexture(s)]).then(([u,h])=>{l.baseUrl!==i||l.foilUrl!==s||(l.material.uniforms.uBaseMap.value=u,l.material.uniforms.uFoilMap.value=h,l.maskSize.set(h.image.width,h.image.height))}))})}loadFoilTexture(t){return this.foilTextureCache??(this.foilTextureCache=new Map),this.foilTextureCache.has(t)||this.foilTextureCache.set(t,this.fetchFoilTexture(t)),this.foilTextureCache.get(t)}fetchFoilTexture(t){return new Promise((e,n)=>{new Nr().load(t,i=>{i.colorSpace=Ln,i.wrapS=sn,i.wrapT=sn,i.minFilter=yn,i.magFilter=fe,i.generateMipmaps=!0,e(i)},void 0,n)})}renderFoilCards(t){if(!this.foilCards?.length||!this.fortuneOpen)return;let e=this.effectSettings??it,n=!wn.matches,i=n?t*.001:0,s=Math.max(document.body.scrollHeight-window.innerHeight,1),a=window.scrollY/s*4*Number(e.foilScrollHue);this.foilMouse??(this.foilMouse=new At);let o=n?Number(e.foilMouseEase):1;this.foilMouse.x+=(this.pointer.x-this.foilMouse.x)*o,this.foilMouse.y+=(-this.pointer.y-this.foilMouse.y)*o;let l=Math.max(Number(e.cardScale),this.fortuneFocusScale||0,1),c=Math.min((window.devicePixelRatio||1)*l,4);this.foilCards.forEach(u=>{u.renderer.getPixelRatio()!==c&&(u.renderer.setPixelRatio(c),u.renderer.setSize(236,358,!1));let h=u.material.uniforms;Object.entries(Pg).forEach(([d,f])=>{h[f].value=Number(e[d])}),Object.entries(Ig).forEach(([d,f])=>{QM(e[d],h[f].value)}),h.uLight1Position.value.set(Number(e.foilLight1X),Number(e.foilLight1Y),Number(e.foilLight1Z)),h.uLight2Position.value.set(Number(e.foilLight2X),Number(e.foilLight2Y),Number(e.foilLight2Z)),h.uBevelSize.value.set(1,1).multiplyScalar(Number(e.foilBevelSize)).divide(u.maskSize),h.uZoneCenter.value.set(Number(e.foilZoneX),Number(e.foilZoneY)),h.uZoneScale.value=Number(e.foilZoneScale),h.uMouse.value.copy(this.foilMouse),h.uTime.value=i,h.uScrollOffset.value=a,u.renderer.render(u.scene,u.camera)})}bindEvents(){window.addEventListener("pointermove",t=>{this.pointer.set(t.clientX/window.innerWidth*2-1,t.clientY/window.innerHeight*2-1)},{passive:!0}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.stage),this.intersectionObserver=new IntersectionObserver(([t])=>{this.visible=t.isIntersecting},{rootMargin:"20%"}),this.intersectionObserver.observe(this.root),this.resize()}setupSectionGuide(){this.sectionGuide=document.createElement("div"),this.sectionGuide.className="altar-tramos",this.sectionGuide.hidden=!0,this.sectionGuide.setAttribute("aria-hidden","true"),this.root.appendChild(this.sectionGuide),window.addEventListener("scroll",()=>this.updateTramoHud(),{passive:!0}),this.updateSectionGuide()}updateSectionGuide(){if(!this.sectionGuide)return;let t=[{name:"Sistema solar",element:this.stage},{name:"Cielo y horizonte",element:this.root.querySelector(".altar-solar__earth")},{name:"Colecci\xF3n",element:this.root.querySelector(".altar-solar__ground")},{name:"Cierre",element:this.root.querySelector(".altar-closing")}].filter(({element:i})=>i),e=t.map(({element:i})=>i.offsetTop),n=[...e.slice(1),this.root.offsetHeight];this.tramoBounds=t.map(({name:i},s)=>({name:i,top:e[s],end:n[s]})),this.sectionGuide.innerHTML=this.tramoBounds.map(({name:i,top:s,end:a},o)=>`
      <div class="altar-tramos__item${o%2?" is-alt":""}" style="top:${s}px;height:${a-s}px">
        <span class="altar-tramos__number">${o+1}</span>
        <span class="altar-tramos__label">Tramo ${o+1} \xB7 ${i} \xB7 ${Math.round(a-s)}px</span>
      </div>`).join("")+'<div class="altar-tramos__hud" data-tramo-hud></div>',this.tramoHud=this.sectionGuide.querySelector("[data-tramo-hud]"),this.updateTramoHud()}updateTramoHud(){if(!this.tramoHud||this.sectionGuide.hidden)return;let t=this.root.getBoundingClientRect().top,e=window.innerHeight/2-t,n=this.tramoBounds.findIndex(({end:a})=>e<a),i=this.tramoBounds[n];if(!i){this.tramoHud.textContent="Fuera de tramos";return}let s=Math.round(oe.clamp((e-i.top)/(i.end-i.top),0,1)*100);this.tramoHud.textContent=`Tramo ${n+1} de ${this.tramoBounds.length} \xB7 ${i.name} \xB7 ${s}%`}resize(){this.updateSectionGuide();let{width:t,height:e}=this.stage.getBoundingClientRect();if(!t||!e||!this.renderer)return;this.renderer.setPixelRatio(Mg()),this.renderer.setSize(t,e,!1),this.horizonMaterial?.uniforms.uResolution.value.set(t,e);let n=e/2;this.camera.aspect=t/n,this.camera.setViewOffset(t,n,0,0,t,e),this.camera.updateProjectionMatrix()}},a1=4,Gc=8;function Wc(r,{handle:t=r,allowTouch:e=!0}={}){if(!r||!t)return;let n={x:0,y:0},i=null,s=!1;t.addEventListener("dragstart",o=>o.preventDefault()),t.addEventListener("pointerdown",o=>{if(o.button!==0||!e&&o.pointerType==="touch")return;let l=r.getBoundingClientRect();i={id:o.pointerId,startX:o.clientX,startY:o.clientY,originX:n.x,originY:n.y,minX:Gc-l.left,maxX:window.innerWidth-Gc-l.right,minY:Gc-l.top,maxY:window.innerHeight-Gc-l.bottom,moved:!1}}),window.addEventListener("pointermove",o=>{if(!i||o.pointerId!==i.id)return;let l=o.clientX-i.startX,c=o.clientY-i.startY;if(!i.moved){if(Math.hypot(l,c)<a1)return;i.moved=!0,r.classList.add("is-dragging"),t.setPointerCapture?.(o.pointerId)}n.x=i.originX+oe.clamp(l,i.minX,i.maxX),n.y=i.originY+oe.clamp(c,i.minY,i.maxY),r.style.setProperty("--drag-x",`${n.x}px`),r.style.setProperty("--drag-y",`${n.y}px`)});let a=o=>{!i||o.pointerId!==i.id||(s=i.moved,s&&setTimeout(()=>{s=!1},0),r.classList.remove("is-dragging"),i=null)};window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a),r.addEventListener("click",o=>{s&&(s=!1,o.preventDefault(),o.stopPropagation())},!0)}var Xc=[{background:null},{background:{space:"#09091f",glows:{rose:["#686f8d",3.33],cyan:["#666d8c",2],teal:["#4fc1b5",1]}}},{background:{space:"#2b4544",glows:{rose:["#c8909a",1],cyan:["#71d4ff",1],teal:["#4fc1b5",1]}}},{background:{space:"#193a4f",glows:{rose:["#236679",3.33],cyan:["#4d6976",2],teal:["#4fc1b5",1]}}}],$d=2100,o1=2200,l1="#f6e9a5",Ug=["X","Y","Z","RotX","RotY","RotZ","Scale"],qc=r=>1-Math.pow(1-r,3),c1={rose:{x:.825,y:.051,size:1.44,peak:.14},cyan:{x:.046,y:.646,size:1.32,peak:.097},teal:{x:.603,y:.341,size:1.26,peak:.02}},u1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,h1=`
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
`;function Yc(r){let t=parseInt(String(r).replace("#",""),16)||0;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function Fg(r,{ringsOnly:t=!1}={}){if(!r||!window.WebGLRenderingContext)return null;let e=document.createElement("canvas");e.className=t?"altar-solar__reveal altar-solar__reveal--rings":"altar-solar__reveal",e.setAttribute("aria-hidden","true"),r.querySelector(t?".altar-solar__canvas":".altar-solar__sky")?.after(e);let n;try{n=new qs({canvas:e,alpha:!0,premultipliedAlpha:!0,antialias:!1})}catch{return e.remove(),null}n.setClearColor(0,0);let i={uStageSize:{value:new At},uViewportHeight:{value:1},uOrigin:{value:new At},uProgress:{value:0},uMaxDistance:{value:1},uTime:{value:0},uSpace:{value:new N},uGlowColors:{value:[new N,new N,new N]},uGlowShapes:{value:[new Kt,new Kt,new Kt]},uEdgeColor:{value:new N(...Yc("#fffec2"))},uRingsOnly:{value:t?1:0},uBand:{value:1},uEdgeGain:{value:1},uBandColor:{value:new N},uBandTint:{value:0}},s=new Be({uniforms:i,vertexShader:u1,fragmentShader:h1,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:Ml,blendSrc:Tl,blendDst:Ba}),a=new tr,o=new kn(-1,1,1,-1,-1,1);a.add(new xe(new zn(2,2),s));let l=0,c=null,u=()=>{cancelAnimationFrame(l),l=0,c?.(),c=null,e.classList.remove("is-active")};return{play(h,d,f,{bandColor:g=null}={}){i.uBand.value=1,i.uBandTint.value=g?1:0,g&&i.uBandColor.value.set(...Yc(g)),l&&u();let _=r.getBoundingClientRect(),p=_.width,m=_.height;n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),n.setSize(p,m,!1);let b=window.innerHeight,A=d.getBoundingClientRect(),S=A.left+A.width/2-_.left,v=A.top+A.height/2-_.top,T=-_.top,w=[[0,T],[p,T],[0,T+b],[p,T+b]],x=Math.max(...w.map(([I,F])=>Math.hypot(I-S,F-v)));i.uStageSize.value.set(p,m),i.uViewportHeight.value=b,i.uOrigin.value.set(S,v),i.uMaxDistance.value=x/b+.075+.05,i.uSpace.value.set(...Yc(h.space)),["rose","cyan","teal"].forEach((I,F)=>{let O=c1[I],[P,z]=h.glows[I];i.uGlowColors.value[F].set(...Yc(P)),i.uGlowShapes.value[F].set(O.x*p,O.y*m,O.size*window.innerWidth/2,Math.min(O.peak*Number(z),1))}),c=f,e.classList.add("is-active");let E=performance.now(),C=I=>{let F=Math.min((I-E)/$d,1);i.uProgress.value=qc(F),i.uTime.value=(I-E)/1e3,n.render(a,o),F<1?l=requestAnimationFrame(C):u()};l=requestAnimationFrame(C)}}}var Yd=[{from:6,name:"ALBA / AIRE",url:"https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk"},{from:15,name:"MEDIOD\xCDA / FUEGO",url:"https://open.spotify.com/intl-es/track/3yGECrjAhzkWpOxt17cdGr"},{from:18,name:"TARDE / TIERRA",url:"https://open.spotify.com/intl-es/track/1loE5JdxEEa0bO9ojGYKwr"},{from:21,name:"NOCHE / AGUA",url:"https://open.spotify.com/intl-es/track/5Rq2hPEd7UWN6i9tME54dj"}];function d1(r){return[...Yd].reverse().find(t=>r>=t.from)??Yd[Yd.length-1]}function f1(r){let t=String(r||"").match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(track|playlist|album|episode|show|artist)\/([A-Za-z0-9]+)/);return t?`https://open.spotify.com/embed/${t[1]}/${t[2]}?utm_source=generator&theme=0`:null}var Og="America/Argentina/Buenos_Aires";function Zc(){let r=new Date,t=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:Og,month:"short",day:"2-digit",year:"2-digit"}).formatToParts(r).map(({type:n,value:i})=>[n,i])),e=new Intl.DateTimeFormat("en-CA",{timeZone:Og}).format(r);document.querySelectorAll("[data-live-date]").forEach(n=>{n.textContent=`${t.month}/${t.day}/${t.year}`.toUpperCase(),n.setAttribute("datetime",e)}),clearTimeout(Zc.timer),Zc.timer=setTimeout(Zc,6e4-(r.getSeconds()*1e3+r.getMilliseconds())+50)}function Kd(){let r=document.querySelector(".site-header");if(!r||Kd.ready)return;Kd.ready=!0;let t=0,e=()=>{t=0;let i=r.getBoundingClientRect().height/2,s=Array.from(document.querySelectorAll('[data-header-theme="light"]')).some(a=>{let o=a.getBoundingClientRect();return o.top<=i&&o.bottom>=i});r.classList.toggle("is-on-light",s)},n=()=>{t||(t=requestAnimationFrame(e))};window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n),e()}function Jd(){Kd(),Zc(),document.querySelectorAll("[data-altar-solar]").forEach(r=>{r.solarExperience||(r.solarExperience=new Zd(r))}),jd()}var p1=4200;function Yn(r,{base:t,stagger:e,duration:n=120,ease:i="ease-out"}){if(!r||r.dataset.introSplit)return;r.dataset.introSplit="true";let s=r.textContent.replace(/\s+/g," ").trim(),a=0,o=c=>{[...c.childNodes].forEach(u=>{if(u.nodeType===Node.ELEMENT_NODE)return o(u);if(u.nodeType!==Node.TEXT_NODE||!u.textContent)return;let h=document.createDocumentFragment();[...u.textContent].forEach(d=>{let f=document.createElement("span");f.className="altar-intro__char",f.setAttribute("aria-hidden","true"),f.textContent=d,f.style.animation=`altar-intro-fade ${n}ms ${i} ${t+a*e}ms both`,a+=1,h.append(f)}),u.replaceWith(h)})};o(r);let l=document.createElement("span");l.className="visually-hidden",l.textContent=s,r.append(l)}function Ye(r,t){r&&(r.style.animation=t)}function jd(){let r=document.documentElement;if(jd.done||!r.classList.contains("altar-intro"))return;if(jd.done=!0,wn.matches||window.scrollY>window.innerHeight*.5){r.classList.remove("altar-intro");return}let t=s=>document.querySelector(s),e=(s,a,o="ease-out")=>`altar-intro-fade ${s}ms ${o} ${a}ms both`;Ye(t(".altar-nav__logo"),e(600,0)),Yn(t(".altar-nav__wordmark"),{base:150,stagger:70,duration:160}),Yn(t(".altar-nav__eyebrow"),{base:0,stagger:35}),Yn(t(".altar-solar__scroll-prompt"),{base:0,stagger:40}),Ye(t(".altar-nav__divider--brand"),"altar-intro-divider 350ms ease-out 550ms both"),Ye(t(".altar-nav__rule--top"),"altar-intro-rule 350ms ease-out 560ms both"),Ye(t(".altar-nav__rule--bottom"),"altar-intro-rule 350ms ease-out 720ms both"),Ye(t(".altar-nav__divider--metadata"),"altar-intro-divider 350ms ease-out 900ms both"),Ye(t("[data-fortune-flip]"),e(300,950));let n=t(".altar-solar__fortune-cta-frame");Ye(n,"altar-intro-frame 600ms ease-out 1250ms both"),n?.addEventListener("animationend",()=>{n.style.animation=""},{once:!0}),Ye(t(".altar-nav__divider--navigation"),"altar-intro-divider 350ms ease-out 1200ms both"),Ye(t(".altar-nav__divider--actions"),"altar-intro-divider 350ms ease-out 1350ms both");let i=t(".altar-solar__campaign");Ye(i,`altar-intro-rise 1600ms cubic-bezier(0.16, 1, 0.3, 1) 1200ms both, ${e(200,1200)}`),Yn(i?.querySelector(".altar-solar__campaign-heading span"),{base:1200,stagger:40}),Yn(t("[data-live-date]"),{base:1250,stagger:35}),Yn(t(".altar-solar__fortune-cta-text span"),{base:1460,stagger:20}),Yn(t(".altar-nav__metadata > span"),{base:1550,stagger:35}),Ye(t(".altar-solar__fortune-cta-icon"),e(200,1440)),document.querySelectorAll(".altar-nav__menu a").forEach((s,a)=>Yn(s,{base:1e3+a*120,stagger:35})),[".altar-nav__cart",".altar-nav__search"].forEach((s,a)=>{let o=t(s);Ye(o?.querySelector(".altar-nav__action-icon"),e(200,1400+a*150)),o?.querySelectorAll(":scope > span").forEach((l,c)=>Yn(l,{base:1450+a*150+c*140,stagger:35}))}),document.querySelectorAll(".altar-solar__manifesto-ids > span").forEach((s,a)=>Yn(s,{base:2200+a*300,stagger:35})),Ye(t(".altar-solar__pagination"),e(200,1700)),Ye(t(".altar-solar__channel-switcher"),e(200,1780)),Yn(t(".altar-solar__channel-label"),{base:1800,stagger:35}),Ye(t(".altar-solar__reveal-card"),e(200,1860)),Ye(t(".altar-solar__open-player"),e(200,2e3)),Ye(t(".altar-solar__marquee"),"altar-intro-clip 500ms ease-out 2500ms both"),Yn(t(".altar-solar__player-label"),{base:3500,stagger:35}),r.classList.add("altar-intro--play"),setTimeout(()=>{r.classList.remove("altar-intro","altar-intro--play"),document.querySelectorAll("[data-intro-split], .altar-nav__logo, .altar-nav__action-icon, .altar-solar__fortune-cta-icon, .altar-nav__divider, .altar-nav__rule, [data-fortune-flip], .altar-solar__campaign, .altar-solar__pagination, .altar-solar__channel-switcher, .altar-solar__reveal-card, .altar-solar__open-player, .altar-solar__marquee").forEach(s=>{s.style.animation.startsWith("altar-intro")&&(s.style.animation="")})},p1)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Jd,{once:!0}):Jd();document.addEventListener("section:load",Jd);})();
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
