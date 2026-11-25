(()=>{var P0=Object.defineProperty;var I0=(s,e,t)=>e in s?P0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Rf=(s,e,t)=>I0(s,typeof e!="symbol"?e+"":e,t);var pp=0,Xu=1,mp=2;var kr=1,gp=2,Vs=3,mi=0,dn=1,Gn=2,gi=0,Gs=1,Hr=2,Yu=3,qu=4,Ol=5;var Vr=100,_p=101,xp=102,yp=103,vp=104,Sp=200,Bl=201,bp=202,Mp=203,Zu=204,Za=205,Tp=206,Ep=207,wp=208,Ap=209,Rp=210,Cp=211,Pp=212,Ip=213,Lp=214,hl=0,dl=1,fl=2,As=3,pl=4,ml=5,gl=6,_l=7,$u=0,Np=1,Dp=2,ri=0,$a=1,Ka=2,Ku=3,lr=4,Ju=5,ju=6,Ja=7,Nu="attached",Up="detached",Qu=300,cr=301,Gr=302,zl=303,kl=304,ja=306,ni=1e3,ln=1001,Rs=1002,Ct=1003,Hl=1004;var Wr=1005;var ct=1006,Ws=1007;var fn=1008;var bn=1009,eh=1010,th=1011,Xs=1012,Vl=1013,si=1014,Dn=1015,ai=1016,Gl=1017,Wl=1018,Ys=1020,nh=35902,ih=35899,rh=1021,sh=1022,en=1023,hi=1026,ur=1027,Xl=1028,Yl=1029,hr=1030,ql=1031;var Zl=1033,Qa=33776,eo=33777,to=33778,no=33779,$l=35840,Kl=35841,Jl=35842,jl=35843,Ql=36196,ec=37492,tc=37496,nc=37488,ic=37489,io=37490,rc=37491,sc=37808,ac=37809,oc=37810,lc=37811,cc=37812,uc=37813,hc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,yc=36492,vc=36494,Sc=36495,bc=36283,Mc=36284,ro=36285,Tc=36286;var Rr=2300,Cr=2301,ll=2302,Du=2303,Uu=2400,Fu=2401,Ou=2402,Fp=2500;var ah=0,so=1,qs=2,Op=3200;var Ec=0,Bp=1,Mn="",Et="srgb",un="srgb-linear",Ra="linear",it="srgb";var cl=7680;var zp=519,kp=512,Hp=513,Vp=514,wc=515,Gp=516,Wp=517,Ac=518,Xp=519,oh=35044;var lh="300 es",ei=2e3,Cs=2001;function L0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function N0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yp(){let s=Ps("canvas");return s.style.display="block",s}var Cf={},Is=null;function Ca(...s){let e="THREE."+s.shift();Is?Is("log",e,...s):console.log(e,...s)}function qp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function we(...s){s=qp(s);let e="THREE."+s.shift();if(Is)Is("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Le(...s){s=qp(s);let e="THREE."+s.shift();if(Is)Is("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ar(...s){let e=s.join(" ");e in Cf||(Cf[e]=!0,we(...s))}function Zp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $p={[hl]:dl,[fl]:gl,[pl]:_l,[As]:ml,[dl]:hl,[gl]:fl,[_l]:pl,[ml]:As},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=1234567,wa=Math.PI/180,Pr=180/Math.PI;function ti(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function ch(s,e){return(s%e+e)%e}function D0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function U0(s,e,t){return s!==e?(t-s)/(e-s):0}function Aa(s,e,t){return(1-t)*s+t*e}function F0(s,e,t,n){return Aa(s,e,1-Math.exp(-t*n))}function O0(s,e=1){return e-Math.abs(ch(s,e*2)-e)}function B0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function z0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function k0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function H0(s,e){return s+Math.random()*(e-s)}function V0(s){return s*(.5-Math.random())}function G0(s){s!==void 0&&(Pf=s);let e=Pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W0(s){return s*wa}function X0(s){return s*Pr}function Y0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function q0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Z0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*u,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qe={DEG2RAD:wa,RAD2DEG:Pr,generateUUID:ti,clamp:Xe,euclideanModulo:ch,mapLinear:D0,inverseLerp:U0,lerp:Aa,damp:F0,pingpong:O0,smoothstep:B0,smootherstep:z0,randInt:k0,randFloat:H0,randFloatSpread:V0,seededRandom:G0,degToRad:W0,radToDeg:X0,isPowerOfTwo:Y0,ceilPowerOfTwo:q0,floorPowerOfTwo:Z0,setQuaternionFromProperEuler:$0,normalize:st,denormalize:Qn},ph=class ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;var Ae=ph,hn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(h!==_||l!==d||c!==f||u!==m){let p=l*d+c*f+u*m+h*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let b=Math.acos(p),w=Math.sin(b);g=Math.sin(g*b)/w,o=Math.sin(o*b)/w,l=l*g+d*o,c=c*g+f*o,u=u*g+m*o,h=h*g+_*o}else{l=l*g+d*o,c=c*g+f*o,u=u*g+m*o,h=h*g+_*o;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;var L=mh,lu=new L,If=new hn,gh=class gh{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],b=i[1],w=i[4],v=i[7],S=i[2],E=i[5],A=i[8];return r[0]=a*_+o*b+l*S,r[3]=a*p+o*w+l*E,r[6]=a*g+o*v+l*A,r[1]=c*_+u*b+h*S,r[4]=c*p+u*w+h*E,r[7]=c*g+u*v+h*A,r[2]=d*_+f*b+m*S,r[5]=d*p+f*w+m*E,r[8]=d*g+f*v+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cu.makeScale(e,t)),this}rotate(e){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cu.makeRotation(-e)),this}translate(e,t){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;var Ne=gh,cu=new Ne,Lf=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nf=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K0(){let s={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?Ra:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[un]:{primaries:e,whitePoint:n,transfer:Ra,toXYZ:Lf,fromXYZ:Nf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Lf,fromXYZ:Nf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),s}var ke=K0();function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ls,xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=Ps("canvas")),ls.width=e.width,ls.height=e.height;let i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},J0=0,Ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(uu(i[a].image)):r.push(uu(i[a]))}else r=uu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function uu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var j0=0,hu=new L,zt=class s extends di{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ln,i=ln,r=ct,a=fn,o=en,l=bn,c=s.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=ti(),this.name="",this.source=new Ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Qu;zt.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(f+1)/2,S=(g+1)/2,E=(u+d)/4,A=(h+_)/4,x=(m+p)/4;return w>v&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=A/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=x/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=x/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var Je=_h,yl=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new zt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ls(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pa=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fl=class Fl{constructor(e,t,n,i,r,a,o,l,c,u,h,d,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,f,m,_,p)}set(e,t,n,i,r,a,o,l,c,u,h,d,f,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q0,e,e_)}lookAt(e,t,n){let i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ji.crossVectors(n,Pn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ji.crossVectors(n,Pn)),Ji.normalize(),Do.crossVectors(Pn,Ji),i[0]=Ji.x,i[4]=Do.x,i[8]=Pn.x,i[1]=Ji.y,i[5]=Do.y,i[9]=Pn.y,i[2]=Ji.z,i[6]=Do.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],w=n[7],v=n[11],S=n[15],E=i[0],A=i[4],x=i[8],M=i[12],R=i[1],P=i[5],F=i[9],O=i[13],I=i[2],B=i[6],W=i[10],V=i[14],Q=i[3],Y=i[7],J=i[11],te=i[15];return r[0]=a*E+o*R+l*I+c*Q,r[4]=a*A+o*P+l*B+c*Y,r[8]=a*x+o*F+l*W+c*J,r[12]=a*M+o*O+l*V+c*te,r[1]=u*E+h*R+d*I+f*Q,r[5]=u*A+h*P+d*B+f*Y,r[9]=u*x+h*F+d*W+f*J,r[13]=u*M+h*O+d*V+f*te,r[2]=m*E+_*R+p*I+g*Q,r[6]=m*A+_*P+p*B+g*Y,r[10]=m*x+_*F+p*W+g*J,r[14]=m*M+_*O+p*V+g*te,r[3]=b*E+w*R+v*I+S*Q,r[7]=b*A+w*P+v*B+S*Y,r[11]=b*x+w*F+v*W+S*J,r[15]=b*M+w*O+v*V+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],b=l*f-c*d,w=o*f-c*h,v=o*d-l*h,S=a*f-c*u,E=a*d-l*u,A=a*h-o*u;return t*(_*b-p*w+g*v)-n*(m*b-p*S+g*E)+i*(m*w-_*S+g*A)-r*(m*v-_*E+p*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],b=t*o-n*a,w=t*l-i*a,v=t*c-r*a,S=n*l-i*o,E=n*c-r*o,A=i*c-r*l,x=u*_-h*m,M=u*p-d*m,R=u*g-f*m,P=h*p-d*_,F=h*g-f*_,O=d*g-f*p,I=b*O-w*F+v*P+S*R-E*M+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*O-l*F+c*P)*B,e[1]=(i*F-n*O-r*P)*B,e[2]=(_*A-p*E+g*S)*B,e[3]=(d*E-h*A-f*S)*B,e[4]=(l*R-a*O-c*M)*B,e[5]=(t*O-i*R+r*M)*B,e[6]=(p*v-m*A-g*w)*B,e[7]=(u*A-d*v+f*w)*B,e[8]=(a*F-o*R+c*x)*B,e[9]=(n*R-t*F-r*x)*B,e[10]=(m*E-_*v+g*b)*B,e[11]=(h*v-u*E-f*b)*B,e[12]=(o*M-a*P-l*x)*B,e[13]=(t*P-n*M+i*x)*B,e[14]=(_*w-m*S-p*b)*B,e[15]=(u*S-h*w+d*b)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,_=a*u,p=a*h,g=o*h,b=l*c,w=l*u,v=l*h,S=n.x,E=n.y,A=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+v)*S,i[2]=(m-w)*S,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+g))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(m+w)*A,i[9]=(p-b)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=cs.set(i[0],i[1],i[2]).length(),o=cs.set(i[4],i[5],i[6]).length(),l=cs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),$n.copy(this);let c=1/a,u=1/o,h=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=ei,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===ei)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Cs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ei,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===ei)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Cs)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fl.prototype.isMatrix4=!0;var Ue=Fl,cs=new L,$n=new Ue,Q0=new L(0,0,0),e_=new L(1,1,1),Ji=new L,Do=new L,Pn=new L,Df=new Ue,Uf=new hn,Ni=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},t_=0,Ff=new L,us=new hn,Ei=new Ue,Uo=new L,ma=new L,n_=new L,i_=new hn,Of=new L(1,0,0),Bf=new L(0,1,0),zf=new L(0,0,1),kf={type:"added"},r_={type:"removed"},hs={type:"childadded",child:null},du={type:"childremoved",child:null},_t=class s extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Ni,n=new hn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ne}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ma,Uo,this.up):Ei.lookAt(Uo,ma,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),us.setFromRotationMatrix(Ei),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),hs.child=e,this.dispatchEvent(hs),hs.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),du.child=e,this.dispatchEvent(du),du.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,n_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,i_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},s_={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function fu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=ch(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fu(a,r,e+1/3),this.g=fu(a,r,e),this.b=fu(a,r,e-1/3)}return ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ke.workingToColorSpace(jt.copy(this),e),Math.round(Xe(jt.r*255,0,255))*65536+Math.round(Xe(jt.g*255,0,255))*256+Math.round(Xe(jt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,r=jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Et){ke.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Fo);let n=Aa(ji.h,Fo.h,t),i=Aa(ji.s,Fo.s,t),r=Aa(ji.l,Fo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new ye;ye.NAMES=Kp;var ir=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new L,wi=new L,pu=new L,Ai=new L,ds=new L,fs=new L,Hf=new L,mu=new L,gu=new L,_u=new L,xu=new Je,yu=new Je,vu=new Je,Ii=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kn.subVectors(i,t),wi.subVectors(n,t),pu.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(wi),l=Kn.dot(pu),c=wi.dot(wi),u=wi.dot(pu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return xu.setScalar(0),yu.setScalar(0),vu.setScalar(0),xu.fromBufferAttribute(e,t),yu.fromBufferAttribute(e,n),vu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(xu,r.x),a.addScaledVector(yu,r.y),a.addScaledVector(vu,r.z),a}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),wi.subVectors(e,t),Kn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ds.subVectors(i,n),fs.subVectors(r,n),mu.subVectors(e,n);let l=ds.dot(mu),c=fs.dot(mu);if(l<=0&&c<=0)return t.copy(n);gu.subVectors(e,i);let u=ds.dot(gu),h=fs.dot(gu);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ds,a);_u.subVectors(e,r);let f=ds.dot(_u),m=fs.dot(_u);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(fs,o);let p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return Hf.subVectors(r,i),o=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Hf,o);let g=1/(p+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Bo.subVectors(this.max,ga),ps.subVectors(e.a,ga),ms.subVectors(e.b,ga),gs.subVectors(e.c,ga),Qi.subVectors(ms,ps),er.subVectors(gs,ms),Mr.subVectors(ps,gs);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Mr.z,Mr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Mr.z,0,-Mr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Mr.y,Mr.x,0];return!Su(t,ps,ms,gs,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Su(t,ps,ms,gs,Bo))?!1:(zo.crossVectors(Qi,er),t=[zo.x,zo.y,zo.z],Su(t,ps,ms,gs,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,Oo=new Ln,ps=new L,ms=new L,gs=new L,Qi=new L,er=new L,Mr=new L,ga=new L,Bo=new L,zo=new L,Tr=new L;function Su(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Tr.fromArray(s,r);let o=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=n.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ut=new L,ko=new Ae,a_=0,gt=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var La=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Na=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var cn=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},o_=new Ln,_a=new L,bu=new L,yn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):o_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_a,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(bu)),this.expandByPoint(_a.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},l_=0,kn=new Ue,Mu=new _t,_s=new L,In=new Ln,xa=new Ln,Xt=new L,Ot=class s extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L0(e)?Na:La)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(In.min,xa.min),In.expandByPoint(Xt),Xt.addVectors(In.max,xa.max),In.expandByPoint(Xt)):(In.expandByPoint(xa.min),In.expandByPoint(xa.max))}In.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Xt.add(_s)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new L,l[x]=new L;let c=new L,u=new L,h=new L,d=new Ae,f=new Ae,m=new Ae,_=new L,p=new L;function g(x,M,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,R),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),o[x].add(_),o[M].add(_),o[R].add(_),l[x].add(p),l[M].add(p),l[R].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,M=b.length;x<M;++x){let R=b[x],P=R.start,F=R.count;for(let O=P,I=P+F;O<I;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new L,v=new L,S=new L,E=new L;function A(x){S.fromBufferAttribute(i,x),E.copy(S);let M=o[x];w.copy(M),w.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(E,M);let P=v.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,M=b.length;x<M;++x){let R=b[x],P=R.start,F=R.count;for(let O=P,I=P+F;O<I;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)d[m++]=c[f++]}return new gt(d,u,h)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},on=new L,rr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tu=new L,c_=new L,u_=new Ne,jn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Tu.subVectors(n,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||u_.getNormalMatrix(e),i=this.coplanarPoint(Tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},h_=0,Qt=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Gs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Za,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ds=class extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xs,ya=new L,ys=new L,vs=new L,Ss=new Ae,va=new Ae,Jp=new Ue,Ho=new L,Sa=new L,Vo=new L,Vf=new Ae,Eu=new Ae,Gf=new Ae,Da=class extends _t{constructor(e=new Ds){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ir(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new rr(n,3,0,!1)),xs.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=xs,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Jp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-vs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Go(Ho.set(-.5,-.5,0),vs,a,ys,i,r),Go(Sa.set(.5,-.5,0),vs,a,ys,i,r),Go(Vo.set(.5,.5,0),vs,a,ys,i,r),Vf.set(0,0),Eu.set(1,0),Gf.set(1,1);let o=e.ray.intersectTriangle(Ho,Sa,Vo,!1,ya);if(o===null&&(Go(Sa.set(-.5,.5,0),vs,a,ys,i,r),Eu.set(0,1),o=e.ray.intersectTriangle(Ho,Vo,Sa,!1,ya),o===null))return;let l=e.ray.origin.distanceTo(ya);l<e.near||l>e.far||t.push({distance:l,point:ya.clone(),uv:Ii.getInterpolation(ya,Ho,Sa,Vo,Vf,Eu,Gf,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Go(s,e,t,n,i,r){Ss.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(va.x=r*Ss.x-i*Ss.y,va.y=i*Ss.x+r*Ss.y):va.copy(Ss),s.copy(e),s.x+=va.x,s.y+=va.y,s.applyMatrix4(Jp)}var Ci=new L,wu=new L,Wo=new L,Xo=new L,Lr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wu.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),Xo.copy(this.origin).sub(wu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wo),o=Xo.dot(this.direction),l=-Xo.dot(Wo),c=Xo.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(wu).addScaledVector(Wo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,_=t.y-a.y,p=t.z-a.z,g=n.x-a.x,b=n.y-a.y,w=n.z-a.z,v=Math.abs(l),S=Math.abs(c),E=Math.abs(u),A,x,M,R,P,F,O,I,B,W,V,Q;if(v>=S&&v>=E?(M=l,F=h,B=m,Q=g,l>=0?(A=c,x=u,R=d,P=f,O=_,I=p,W=b,V=w):(A=u,x=c,R=f,P=d,O=p,I=_,W=w,V=b)):S>=E?(M=c,F=d,B=_,Q=b,c>=0?(A=u,x=l,R=f,P=h,O=p,I=m,W=w,V=g):(A=l,x=u,R=h,P=f,O=m,I=p,W=g,V=w)):(M=u,F=f,B=p,Q=w,u>=0?(A=l,x=c,R=h,P=d,O=m,I=_,W=g,V=b):(A=c,x=l,R=d,P=h,O=_,I=m,W=b,V=g)),M===0)return null;let Y=A/M,J=x/M,te=1/M,be=R-Y*F,Te=P-J*F,Ye=O-Y*B,Fe=I-J*B,et=W-Y*Q,Z=V-J*Q,ee=et*Fe-Z*Ye,xe=be*Z-Te*et,De=Ye*Te-Fe*be;if(i){if(ee<0||xe<0||De<0)return null}else if((ee<0||xe<0||De<0)&&(ee>0||xe>0||De>0))return null;let ge=ee+xe+De;if(ge===0)return null;let He=te*(ee*F+xe*B+De*Q);return(ge>0?He<0:He>0)?null:this.at(He/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nn=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wf=new Ue,Er=new Lr,Yo=new yn,Xf=new L,qo=new L,Zo=new L,$o=new L,Au=new L,Ko=new L,Yf=new L,Jo=new L,yt=class extends _t{constructor(e=new Ot,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Au.fromBufferAttribute(h,e),a?Ko.addScaledVector(Au,u):Ko.addScaledVector(Au.sub(t),u))}t.add(Ko)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),Er.copy(e.ray).recast(e.near),!(Yo.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Yo,Xf)===null||Er.origin.distanceToSquared(Xf)>(e.far-e.near)**2))&&(Wf.copy(r).invert(),Er.copy(e.ray).applyMatrix4(Wf),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=a[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let E=o.getX(v),A=o.getX(v+1),x=o.getX(v+2);i=jo(this,g,e,n,c,u,h,E,A,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let b=o.getX(p),w=o.getX(p+1),v=o.getX(p+2);i=jo(this,a,e,n,c,u,h,b,w,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=a[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let E=v,A=v+1,x=v+2;i=jo(this,g,e,n,c,u,h,E,A,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let b=p,w=p+1,v=p+2;i=jo(this,a,e,n,c,u,h,b,w,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function d_(s,e,t,n,i,r,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===mi,o),l===null)return null;Jo.copy(o),Jo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Jo);return c<t.near||c>t.far?null:{distance:c,point:Jo.clone(),object:s}}function jo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,qo),s.getVertexPosition(l,Zo),s.getVertexPosition(c,$o);let u=d_(s,e,t,n,qo,Zo,$o,Yf);if(u){let h=new L;Ii.getBarycoord(Yf,qo,Zo,$o,h),i&&(u.uv=Ii.getInterpolatedAttribute(i,o,l,c,h,new Ae)),r&&(u.uv1=Ii.getInterpolatedAttribute(r,o,l,c,h,new Ae)),a&&(u.normal=Ii.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Ii.getNormal(qo,Zo,$o,d.normal),u.face=d,u.barycoord=h}return u}var ba=new Je,qf=new Je,Zf=new Je,f_=new Je,$f=new Ue,Qo=new L,Ru=new yn,Kf=new Ue,Cu=new Lr,Ua=class extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nu,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ru.copy(this.boundingSphere),Ru.applyMatrix4(i),e.ray.intersectsSphere(Ru)!==!1&&(Kf.copy(i).invert(),Cu.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&Cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Up?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;qf.fromBufferAttribute(i.attributes.skinIndex,e),Zf.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ba.copy(t),t.set(0,0,0,0)):(ba.set(...t,1),t.set(0,0,0)),ba.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Zf.getComponent(r);if(a!==0){let o=qf.getComponent(r);$f.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(f_.copy(ba).applyMatrix4($f),a)}}return t.isVector4&&(t.w=ba.w),t.applyMatrix4(this.bindMatrixInverse)}},Us=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},Di=class extends zt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ct,u=Ct,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jf=new Ue,p_=new Ue,Fa=class s{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:p_;Jf.multiplyMatrices(o,t[r]),Jf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Di(t,e,e,en,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(we("Skeleton: No bone found with UUID:",r),a=new Us),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ui=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new Ue,jf=new Ue,el=[],Qf=new Ln,m_=new Ue,Ma=new yt,Ta=new yn,Oa=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),Qf.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),Ta.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),jf.multiplyMatrices(n,bs),Ma.matrixWorld=jf,Ma.raycast(e,el);for(let a=0,o=el.length;a<o;a++){let l=el[a];l.instanceId=r,l.object=this,t.push(l)}el.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(i*this.count),i,this.count,Xl,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wr=new yn,g_=new Ae(.5,.5),tl=new L,Fs=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],b=r[12],w=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-a,f-u,g-m,S-b).normalize(),i[1].setComponents(c+a,f+u,g+m,S+b).normalize(),i[2].setComponents(c+o,f+h,g+_,S+w).normalize(),i[3].setComponents(c-o,f-h,g-_,S-w).normalize(),n)i[4].setComponents(l,d,p,v).normalize(),i[5].setComponents(c-l,f-d,g-p,S-v).normalize();else if(i[4].setComponents(c-l,f-d,g-p,S-v).normalize(),t===ei)i[5].setComponents(c+l,f+d,g+p,S+v).normalize();else if(t===Cs)i[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);let t=g_.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(tl.x=i.normal.x>0?e.max.x:e.min.x,tl.y=i.normal.y>0?e.max.y:e.min.y,tl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sr=class extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sl=new L,bl=new L,ep=new Ue,Ea=new Lr,nl=new yn,Pu=new L,tp=new L,Nr=class extends _t{constructor(e=new Ot,t=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sl.fromBufferAttribute(t,i-1),bl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sl.distanceTo(bl);e.setAttribute("lineDistance",new cn(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(i),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;ep.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){let g=u.getX(_),b=u.getX(_+1),w=il(this,e,Ea,l,g,b,_);w&&t.push(w)}if(this.isLineLoop){let _=u.getX(m-1),p=u.getX(f),g=il(this,e,Ea,l,_,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){let g=il(this,e,Ea,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=il(this,e,Ea,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function il(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Sl.fromBufferAttribute(o,i),bl.fromBufferAttribute(o,r),t.distanceSqToSegment(Sl,bl,Pu,tp)>n)return;Pu.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Pu);if(!(c<e.near||c>e.far))return{distance:c,point:tp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var np=new L,ip=new L,Ba=class extends Nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)np.fromBufferAttribute(t,i),ip.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+np.distanceTo(ip);e.setAttribute("lineDistance",new cn(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dr=class extends Nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Os=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rp=new Ue,Bu=new Lr,rl=new yn,sl=new L,Ur=class extends _t{constructor(e=new Ot,t=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(i),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;rp.copy(i).invert(),Bu.copy(e.ray).applyMatrix4(rp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){let p=c.getX(m);sl.fromBufferAttribute(h,p),sp(sl,p,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)sl.fromBufferAttribute(h,m),sp(sl,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sp(s,e,t,n,i,r,a){let o=Bu.distanceSqToPoint(s);if(o<t){let l=new L;Bu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var za=class extends zt{constructor(e=[],t=cr,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fr=class extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ar=class extends zt{constructor(e,t,n=si,i,r,a,o=Ct,l=Ct,c,u=hi,h=1){if(u!==hi&&u!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ml=class extends ar{constructor(e,t=si,n=cr,i,r,a=Ct,o=Ct,l,c=hi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bs=class s extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function m(_,p,g,b,w,v,S,E,A,x,M){let R=v/A,P=S/x,F=v/2,O=S/2,I=E/2,B=A+1,W=x+1,V=0,Q=0,Y=new L;for(let J=0;J<W;J++){let te=J*P-O;for(let be=0;be<B;be++){let Te=be*R-F;Y[_]=Te*b,Y[p]=te*w,Y[g]=I,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(be/A),h.push(1-J/x),V+=1}}for(let J=0;J<x;J++)for(let te=0;te<A;te++){let be=d+te+B*J,Te=d+te+B*(J+1),Ye=d+(te+1)+B*(J+1),Fe=d+(te+1)+B*J;l.push(be,Te,Fe),l.push(Te,Ye,Fe),Q+=6}o.addGroup(f,Q,M),f+=Q,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Hn=class s extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){let b=g*d-a;for(let w=0;w<c;w++){let v=w*h-r;m.push(v,-b,0),_.push(0,0,1),p.push(w/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let w=b+c*g,v=b+c*(g+1),S=b+1+c*(g+1),E=b+1+c*g;f.push(w,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ha=class extends Qt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Xr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(ap(i))i.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ap(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function tn(s){let e={};for(let t=0;t<s.length;t++){let n=Xr(s[t]);for(let i in n)e[i]=n[i]}return e}function ap(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function __(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var jp={clone:Xr,merge:tn},x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tl=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fi=class extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends Fi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var El=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wl=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ul(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function v_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function op(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function S_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var fi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Al=class extends fi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fu:r=e,o=2*t-n;break;case Ou:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fu:a=e,l=2*n-t;break;case Ou:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,w=(-1-f)*p+(1.5+f)*_+.5*m,v=f*p-f*_;for(let S=0;S!==o;++S)r[S]=g*a[u+S]+b*a[c+S]+w*a[l+S]+v*a[h+S];return r}},Rl=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Cl=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Pl=class extends fi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(i-t),_=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],g=f*d+m*2,b=h[g],w=h[g+1],v=e*d+m*2,S=u[v],E=u[v+1],A=M_(n,t,b,S,i);r[m]=Qp(A,_,w,E,p)}return r}};function Qp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function b_(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function M_(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Qp(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=b_(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ul(e.settings)&&(n.settings={inTangents:nr(e.settings.inTangents,Array),outTangents:nr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case Cr:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break;case Du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return ll;case this.InterpolantFactoryMethodBezier:return Du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ul(this.settings)&&(lp(this.settings.inTangents,e),lp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&N0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ll,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ul(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function lp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Cr;var Oi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Rr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};Va.prototype.ValueTypeName="color";var Bi=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};Bi.prototype.ValueTypeName="number";var Il=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zi=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Sn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Rr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};or.prototype.ValueTypeName="vector";var Ga=class{constructor(e="",t=-1,n=[],i=Fp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(E_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=v_(l);l=op(l,1,u),c=op(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Bi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function T_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bi;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Va;case"quaternion":return zi;case"bool":case"boolean":return Oi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function E_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=T_(s.type);if(s.times===void 0){let n=[],i=[];S_(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ul(s.settings)&&(t.settings={inTangents:nr(s.settings.inTangents,Float32Array),outTangents:nr(s.settings.outTangents,Float32Array)}),t}var ui={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(cp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!cp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function cp(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ll=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},em=new Ll,pi=class{constructor(e){this.manager=e!==void 0?e:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},zu=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ui.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:i});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Pi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,p=new ReadableStream({start(g){b();function b(){h.read().then(({done:w,value:v})=>{if(w)g.close();else{_+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let E=0,A=u.length;E<A;E++){let x=u[E];x.onProgress&&x.onProgress(S)}g.enqueue(v),b()}},w=>{g.error(w)})}}});return new Response(p)}else throw new zu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ui.add(`file:${e}`,c);let u=Pi[e];delete Pi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ms=new WeakMap,Nl=class extends pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ui.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ms.get(a);h===void 0&&(h=[],Ms.set(a,h)),h.push({onLoad:t,onError:i})}return a}let o=Ps("img");function l(){u(),t&&t(this);let h=Ms.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ms.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),ui.remove(`image:${e}`);let d=Ms.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ui.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Or=class extends pi{constructor(e){super(e)}load(e,t,n,i){let r=new zt,a=new Nl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Br=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ks=class extends Br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Iu=new Ue,up=new L,hp=new L,Hs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Iu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Cs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},al=new L,ol=new hn,ci=new L,Wa=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,ol,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(al,ol,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new L,dp=new Ae,fp=new Ae,Ft=class extends Wa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,dp,fp),t.subVectors(fp,dp)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ku=class extends Hs{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Pr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xa=class extends Br{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ku}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hu=class extends Hs{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},zr=class extends Br{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vn=class extends Wa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vu=class extends Hs{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ii=class extends Br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Vu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Hi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Lu=new WeakMap,Ya=class extends pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ui.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Lu.has(a)===!0?(i&&i(Lu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Lu.set(l,c),ui.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ui.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=-90,Es=1,Dl=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ft(Ts,Es,e,t);i.layers=this.layers,this.add(i);let r=new Ft(Ts,Es,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Ts,Es,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Ts,Es,e,t);o.layers=this.layers,this.add(o);let l=new Ft(Ts,Es,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Ts,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ul=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},qa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=w_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function w_(){this._document.hidden===!1&&this.reset()}var hh="\\[\\]\\.:\\/",A_=new RegExp("["+hh+"]","g"),dh="[^"+hh+"]",R_="[^"+hh.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",dh),P_=/(WCOD+)?/.source.replace("WCOD",R_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),N_=new RegExp("^"+C_+P_+I_+L_+"$"),D_=["material","materials","bones","map"],Gu=class{constructor(e,t,n){let i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(e){let t=N_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);D_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Gu;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ET=new Float32Array(1);var xh=class xh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};xh.prototype.isMatrix2=!0;var Wu=xh;function fh(s,e,t,n){let i=U_(n);switch(t){case rh:return s*e;case Xl:return s*e/i.components*i.byteLength;case Yl:return s*e/i.components*i.byteLength;case hr:return s*e*2/i.components*i.byteLength;case ql:return s*e*2/i.components*i.byteLength;case sh:return s*e*3/i.components*i.byteLength;case en:return s*e*4/i.components*i.byteLength;case Zl:return s*e*4/i.components*i.byteLength;case Qa:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:case jl:return Math.max(s,16)*Math.max(e,8)/4;case $l:case Jl:return Math.max(s,8)*Math.max(e,8)/2;case Ql:case ec:case nc:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case io:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yc:case vc:case Sc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bc:case Mc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ro:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U_(s){switch(s){case bn:case eh:return{byteLength:1,components:1};case Xs:case th:case ai:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case si:case Vl:case Dn:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bm(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function O_(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
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
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
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
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y_=`#ifdef USE_BATCHING
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
#endif`,q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J_=`#ifdef USE_IRIDESCENCE
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
#endif`,j_=`#ifdef USE_BUMPMAP
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ox=`#define PI 3.141592653589793
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
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cx=`vec3 transformedNormal = objectNormal;
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
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Px=`#ifdef USE_ENVMAP
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
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
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
#endif`,Fx=`uniform sampler2D dfgLUT;
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
}`,Ox=`
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
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
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,My=`float getShadowMask() {
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
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ly=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
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
}`,Xy=`#if DEPTH_PACKING == 3200
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
}`,Yy=`#define DISTANCE
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
}`,qy=`#define DISTANCE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Qy=`uniform vec3 diffuse;
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
}`,ev=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,nv=`#define MATCAP
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
}`,iv=`#define MATCAP
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
}`,rv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,av=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,lv=`#define STANDARD
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
}`,cv=`#define STANDARD
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
}`,uv=`#define TOON
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
}`,hv=`#define TOON
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
}`,dv=`uniform float size;
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
}`,fv=`uniform vec3 diffuse;
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
}`,pv=`#include <common>
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
}`,mv=`uniform vec3 color;
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
}`,gv=`uniform float rotation;
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
}`,_v=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:B_,alphahash_pars_fragment:z_,alphamap_fragment:k_,alphamap_pars_fragment:H_,alphatest_fragment:V_,alphatest_pars_fragment:G_,aomap_fragment:W_,aomap_pars_fragment:X_,batching_pars_vertex:Y_,batching_vertex:q_,begin_vertex:Z_,beginnormal_vertex:$_,bsdfs:K_,iridescence_fragment:J_,bumpmap_pars_fragment:j_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:rx,color_pars_vertex:sx,color_vertex:ax,common:ox,cube_uv_reflection_fragment:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:ux,displacementmap_vertex:hx,emissivemap_fragment:dx,emissivemap_pars_fragment:fx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:_x,envmap_pars_fragment:xx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Px,envmap_vertex:vx,fog_vertex:Sx,fog_pars_vertex:bx,fog_fragment:Mx,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:wx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Rx,lights_pars_begin:Cx,lights_toon_fragment:Ix,lights_toon_pars_fragment:Lx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Fx,lights_fragment_begin:Ox,lights_fragment_maps:Bx,lights_fragment_end:zx,lightprobes_pars_fragment:kx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:Yx,map_particle_fragment:qx,map_particle_pars_fragment:Zx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Kx,morphinstance_vertex:Jx,morphcolor_vertex:jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:ry,normal_pars_vertex:sy,normal_vertex:ay,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:_y,roughnessmap_fragment:xy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:Sy,shadowmap_vertex:by,shadowmask_pars_fragment:My,skinbase_vertex:Ty,skinning_pars_vertex:Ey,skinning_vertex:wy,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Cy,tonemapping_fragment:Py,tonemapping_pars_fragment:Iy,transmission_fragment:Ly,transmission_pars_fragment:Ny,uv_pars_fragment:Dy,uv_pars_vertex:Uy,uv_vertex:Fy,worldpos_vertex:Oy,background_vert:By,background_frag:zy,backgroundCube_vert:ky,backgroundCube_frag:Hy,cube_vert:Vy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distance_vert:Yy,distance_frag:qy,equirect_vert:Zy,equirect_frag:$y,linedashed_vert:Ky,linedashed_frag:Jy,meshbasic_vert:jy,meshbasic_frag:Qy,meshlambert_vert:ev,meshlambert_frag:tv,meshmatcap_vert:nv,meshmatcap_frag:iv,meshnormal_vert:rv,meshnormal_frag:sv,meshphong_vert:av,meshphong_frag:ov,meshphysical_vert:lv,meshphysical_frag:cv,meshtoon_vert:uv,meshtoon_frag:hv,points_vert:dv,points_frag:fv,shadow_vert:pv,shadow_frag:mv,sprite_vert:gv,sprite_frag:_v},he={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},xi={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};xi.physical={uniforms:tn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Rc={r:0,b:0,g:0},xv=new Ue,Mm=new Ne;Mm.set(-1,0,0,0,1,0,0,0,1);function yv(s,e,t,n,i,r){let a=new ye(0),o=i===!0?0:1,l,c,u=null,h=0,d=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=e.get(w,v)}return w}function m(b){let w=!1,v=f(b);v===null?p(a,o):v&&v.isColor&&(p(v,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===ja)?(c===void 0&&(c=new yt(new Bs(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Xr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mm),c.material.toneMapped=ke.getTransfer(v.colorSpace)!==it,(u!==v||h!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new yt(new Hn(2,2),new kt({name:"BackgroundMaterial",uniforms:Xr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ke.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,w){b.getRGB(Rc,uh(s)),t.buffers.color.setClear(Rc.r,Rc.g,Rc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:m,addToRenderList:_,dispose:g}}function vv(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(P,F,O,I,B){let W=!1,V=h(P,I,O,F);r!==V&&(r=V,c(r.object)),W=f(P,I,O,B),W&&m(P,I,O,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(P,F,O,I),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function u(P){return s.deleteVertexArray(P)}function h(P,F,O,I){let B=I.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let V=P.isInstancedMesh===!0?P.id:0,Q=W[V];Q===void 0&&(Q={},W[V]=Q);let Y=Q[O.id];Y===void 0&&(Y={},Q[O.id]=Y);let J=Y[B];return J===void 0&&(J=d(l()),Y[B]=J),J}function d(P){let F=[],O=[],I=[];for(let B=0;B<t;B++)F[B]=0,O[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,F,O,I){let B=r.attributes,W=F.attributes,V=0,Q=O.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let te=B[Y],be=W[Y];if(be===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function m(P,F,O,I){let B={},W=F.attributes,V=0,Q=O.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let te=W[Y];te===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));let be={};be.attribute=te,te&&te.data&&(be.data=te.data),B[Y]=be,V++}r.attributes=B,r.attributesNum=V,r.index=I}function _(){let P=r.newAttributes;for(let F=0,O=P.length;F<O;F++)P[F]=0}function p(P){g(P,0)}function g(P,F){let O=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;O[P]=1,I[P]===0&&(s.enableVertexAttribArray(P),I[P]=1),B[P]!==F&&(s.vertexAttribDivisor(P,F),B[P]=F)}function b(){let P=r.newAttributes,F=r.enabledAttributes;for(let O=0,I=F.length;O<I;O++)F[O]!==P[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function w(P,F,O,I,B,W,V){V===!0?s.vertexAttribIPointer(P,F,O,B,W):s.vertexAttribPointer(P,F,O,I,B,W)}function v(P,F,O,I){_();let B=I.attributes,W=O.getAttributes(),V=F.defaultAttributeValues;for(let Q in W){let Y=W[Q];if(Y.location>=0){let J=B[Q];if(J===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let te=J.normalized,be=J.itemSize,Te=e.get(J);if(Te===void 0)continue;let Ye=Te.buffer,Fe=Te.type,et=Te.bytesPerElement,Z=Fe===s.INT||Fe===s.UNSIGNED_INT||J.gpuType===Vl;if(J.isInterleavedBufferAttribute){let ee=J.data,xe=ee.stride,De=J.offset;if(ee.isInstancedInterleavedBuffer){for(let ge=0;ge<Y.locationSize;ge++)g(Y.location+ge,ee.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<Y.locationSize;ge++)p(Y.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ge=0;ge<Y.locationSize;ge++)w(Y.location+ge,be/Y.locationSize,Fe,te,xe*et,(De+be/Y.locationSize*ge)*et,Z)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)g(Y.location+ee,J.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ee=0;ee<Y.locationSize;ee++)w(Y.location+ee,be/Y.locationSize,Fe,te,be*et,be/Y.locationSize*ee*et,Z)}}else if(V!==void 0){let te=V[Q];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(Y.location,te);break;case 3:s.vertexAttrib3fv(Y.location,te);break;case 4:s.vertexAttrib4fv(Y.location,te);break;default:s.vertexAttrib1fv(Y.location,te)}}}}b()}function S(){M();for(let P in n){let F=n[P];for(let O in F){let I=F[O];for(let B in I){let W=I[B];for(let V in W)u(W[V].object),delete W[V];delete I[B]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let O in F){let I=F[O];for(let B in I){let W=I[B];for(let V in W)u(W[V].object),delete W[V];delete I[B]}}delete n[P.id]}function A(P){for(let F in n){let O=n[F];for(let I in O){let B=O[I];if(B[P.id]===void 0)continue;let W=B[P.id];for(let V in W)u(W[V].object),delete W[V];delete B[P.id]}}}function x(P){for(let F in n){let O=n[F],I=P.isInstancedMesh===!0?P.id:0,B=O[I];if(B!==void 0){for(let W in B){let V=B[W];for(let Q in V)u(V[Q].object),delete V[Q];delete B[W]}delete O[I],Object.keys(O).length===0&&delete n[F]}}}function M(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Sv(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function bv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==en&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&A!==Dn&&!x&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(we("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:E}}function Mv(s){let e=this,t=null,n=0,i=!1,r=!1,a=new jn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{let b=r?0:n,w=b*4,v=g.clippingState||null;l.value=v,v=u(m,d,w,f);for(let S=0;S!==w;++S)v[S]=t[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,v=f;w!==_;++w,v+=4)a.copy(h[w]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var $s=4,Tv=6,Ev=20,wv=256,ao=new Vn,tm=new ye,yh=null,vh=0,Sh=0,bh=!1,Av=new L,Yr=new L,Pc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Av}=r;yh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,vh,Sh),this._renderer.xr.enabled=bh,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ct,minFilter:ct,generateMipmaps:!1,type:ai,format:en,colorSpace:un,depthBuffer:!1},i=nm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Rv(r)),this._blurMaterial=Pv(r,e,t),this._ggxMaterial=Cv(r,e,t)}return i}_compileMaterial(e){let t=new yt(new Ot,e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,i,r){let l=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(tm),h.toneMapping=ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new Bs,new Nn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(tm),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let S=this._cubeSize;Zs(i,v*S,w>2?S:0,S,S),h.setRenderTarget(i),g&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===cr||e.mapping===Gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ao)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-$s?n-m+$s:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Zs(r,p,g,3*_,2*_),i.setRenderTarget(r),i.render(o,ao),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Zs(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(o,ao)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],h=3*u*(i>this._lodMax-$s?i-this._lodMax+$s:0),d=4*(this._cubeSize-u);Zs(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,ao)}};function Rv(s){let e=[],t=[],n=s,i=s-$s+1+Tv;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,m=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let g=0;g<h;g++){let b=g%3*2/3-1,w=g>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];m.set(v,f*d*g);for(let S=0;S<d;S++){let E=u[S*2]*2-1,A=u[S*2+1]*2-1;g===0?Yr.set(1,A,E):g===1?Yr.set(-E,1,-A):g===2?Yr.set(-E,A,1):g===3?Yr.set(-1,A,-E):g===4?Yr.set(-E,-1,A):Yr.set(E,A,-1),Yr.toArray(_,(g*d+S)*f)}}let p=new Ot;p.setAttribute("position",new gt(m,f)),p.setAttribute("outputDirection",new gt(_,f)),t.push(new yt(p,null)),n>$s&&n--}return{lodMeshes:t,sizeLods:e}}function nm(s,e,t){let n=new xn(s,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Cv(s,e,t){return new kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Pv(s,e,t){return new kt({name:"SphericalGaussianBlur",defines:{SAMPLES:Ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function im(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function rm(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ic=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new za(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bs(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:gi});r.uniforms.tEquirect.value=t;let a=new yt(i,r),o=t.minFilter;return t.minFilter===fn&&(t.minFilter=ct),new Dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function Iv(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===zl||f===kl)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new Ic(m.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===zl||f===kl,_=f===cr||f===Gr;if(m||_){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Pc(s)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let b=d.image;return m&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Pc(s)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===zl?d.mapping=cr:f===kl&&(d.mapping=Gr),d}function l(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Lv(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ar("WebGLRenderer: "+n+" extension not supported."),i}}}function Nv(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(m===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let w=0,v=b.length;w<v;w+=3){let S=b[w+0],E=b[w+1],A=b[w+2];d.push(S,E,E,A,A,S)}}else{let b=m.array;_=m.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let S=w+0,E=w+1,A=w+2;d.push(S,E,E,A,A,S)}}let p=new(m.count>=65535?Na:La)(d,1);p.version=_;let g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Dv(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){s.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Uv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fv(s,e,t){let n=new WeakMap,i=new Je;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let v=o.attributes.position.count*w,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*S*4*h),A=new Pa(E,v,S,h);A.type=Dn,A.needsUpdate=!0;let x=w*4;for(let R=0;R<h;R++){let P=p[R],F=g[R],O=b[R],I=v*S*4*R;for(let B=0;B<P.count;B++){let W=B*x;f===!0&&(i.fromBufferAttribute(P,B),E[I+W+0]=i.x,E[I+W+1]=i.y,E[I+W+2]=i.z,E[I+W+3]=0),m===!0&&(i.fromBufferAttribute(F,B),E[I+W+4]=i.x,E[I+W+5]=i.y,E[I+W+6]=i.z,E[I+W+7]=0),_===!0&&(i.fromBufferAttribute(O,B),E[I+W+8]=i.x,E[I+W+9]=i.y,E[I+W+10]=i.z,E[I+W+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Ae(v,S)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ov(s,e,t,n,i){let r=new WeakMap;function a(c){let u=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Bv={[$a]:"LINEAR_TONE_MAPPING",[Ka]:"REINHARD_TONE_MAPPING",[Ku]:"CINEON_TONE_MAPPING",[lr]:"ACES_FILMIC_TONE_MAPPING",[ju]:"AGX_TONE_MAPPING",[Ja]:"NEUTRAL_TONE_MAPPING",[Ju]:"CUSTOM_TONE_MAPPING"};function zv(s,e,t,n,i,r){let a=new xn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ot;c.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new cn([0,2,0,0,2,0],2));let u=new Tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new yt(c,u),d=new Vn(-1,1,1,-1,0,1),f=null,m=null,_=!1,p,g=null,b=[],w=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let E=0;E<b.length;E++){let A=b[E];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){b=v,w=b.length>0&&b[0].isRenderPass===!0;let S=a.width,E=a.height;b.length>0&&o===null&&(o=new xn(S,E,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new xn(S,E,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let x=b[A];x.setSize&&x.setSize(S,E)}},this.begin=function(v,S){if(_||v.toneMapping===ri&&b.length===0)return!1;if(g=S,S!==null){let E=S.width,A=S.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return w===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=ri,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=p,_=!0;let E=a,A=o;for(let x=0;x<b.length;x++){let M=b[x];M.enabled!==!1&&(M.render(v,A,E,S),M.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,u.defines={},ke.getTransfer(f)===it&&(u.defines.SRGB_TRANSFER="");let x=Bv[m];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(g),v.render(h,d),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Tm=new zt,Eh=new ar(1,1),Em=new Pa,wm=new vl,Am=new za,sm=[],am=[],om=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function js(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=sm[i];if(r===void 0&&(r=new Float32Array(i),sm[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Nc(s,e){let t=am[e];t===void 0&&(t=new Int32Array(e),am[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function Vv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function Gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function Wv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;cm.set(n),s.uniformMatrix2fv(this.addr,!1,cm),Vt(t,n)}}function Xv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;lm.set(n),s.uniformMatrix3fv(this.addr,!1,lm),Vt(t,n)}}function Yv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;om.set(n),s.uniformMatrix4fv(this.addr,!1,om),Vt(t,n)}}function qv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Vt(t,e)}}function $v(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Vt(t,e)}}function Kv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Vt(t,e)}}function Jv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Vt(t,e)}}function Qv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Vt(t,e)}}function eS(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Vt(t,e)}}function tS(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Eh.compareFunction=t.isReversedDepthBuffer()?Ac:wc,r=Eh):r=Tm,t.setTexture2D(e||r,i)}function nS(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wm,i)}function iS(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Am,i)}function rS(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Em,i)}function sS(s){switch(s){case 5126:return kv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return Yv;case 5124:case 35670:return qv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return jv;case 36295:return Qv;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function aS(s,e){s.uniform1fv(this.addr,e)}function oS(s,e){let t=js(e,this.size,2);s.uniform2fv(this.addr,t)}function lS(s,e){let t=js(e,this.size,3);s.uniform3fv(this.addr,t)}function cS(s,e){let t=js(e,this.size,4);s.uniform4fv(this.addr,t)}function uS(s,e){let t=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hS(s,e){let t=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dS(s,e){let t=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function fS(s,e){s.uniform1iv(this.addr,e)}function pS(s,e){s.uniform2iv(this.addr,e)}function mS(s,e){s.uniform3iv(this.addr,e)}function gS(s,e){s.uniform4iv(this.addr,e)}function _S(s,e){s.uniform1uiv(this.addr,e)}function xS(s,e){s.uniform2uiv(this.addr,e)}function yS(s,e){s.uniform3uiv(this.addr,e)}function vS(s,e){s.uniform4uiv(this.addr,e)}function SS(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Eh:a=Tm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function bS(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wm,r[a])}function MS(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Am,r[a])}function TS(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Em,r[a])}function ES(s){switch(s){case 5126:return aS;case 35664:return oS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return hS;case 35676:return dS;case 5124:case 35670:return fS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return xS;case 36295:return yS;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return TS}}var wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sS(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ES(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function um(s,e){s.seq.push(e),s.map[e.id]=e}function wS(s,e,t){let n=s.name,i=n.length;for(Mh.lastIndex=0;;){let r=Mh.exec(n),a=Mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){um(t,c===void 0?new wh(o,s,e):new Ah(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Rh(o),um(t,h)),t=h}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);wS(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function hm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var AS=37297,RS=0;function CS(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dm=new Ne;function PS(s){ke._getMatrix(dm,ke.workingColorSpace,s);let e=`mat3( ${dm.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(s)){case Ra:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+CS(s.getShaderSource(e),o)}else return r}function IS(s,e){let t=PS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var LS={[$a]:"Linear",[Ka]:"Reinhard",[Ku]:"Cineon",[lr]:"ACESFilmic",[ju]:"AgX",[Ja]:"Neutral",[Ju]:"Custom"};function NS(s,e){let t=LS[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cc=new L;function DS(){ke.getLuminanceCoefficients(Cc);let s=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function US(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function FS(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function OS(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function lo(s){return s!==""}function pm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(s){return s.replace(BS,kS)}var zS=new Map;function kS(s,e){let t=ze[e];if(t===void 0){let n=zS.get(e);if(n!==void 0)t=ze[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ch(t)}var HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(HS,VS)}function VS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _m(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var GS={[kr]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function WS(s){return GS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XS={[cr]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function YS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":XS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var qS={[Gr]:"ENVMAP_MODE_REFRACTION"};function ZS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $S={[$u]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Dp]:"ENVMAP_BLENDING_ADD"};function KS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$S[s.combine]||"ENVMAP_BLENDING_NONE"}function JS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jS(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=WS(t),c=YS(t),u=ZS(t),h=KS(t),d=JS(t),f=US(t),m=FS(r),_=i.createProgram(),p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lo).join(`
`),g.length>0&&(g+=`
`)):(p=[_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),g=[_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ze.tonemapping_pars_fragment:"",t.toneMapping!==ri?NS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,IS("linearToOutputTexel",t.outputColorSpace),DS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),a=Ch(a),a=pm(a,t),a=mm(a,t),o=Ch(o),o=pm(o,t),o=mm(o,t),a=gm(a),o=gm(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=b+p+a,v=b+g+o,S=hm(i,i.VERTEX_SHADER,w),E=hm(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(E)||"",B=F.trim(),W=O.trim(),V=I.trim(),Q=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,E);else{let J=fm(i,S,"vertex"),te=fm(i,E,"fragment");Le("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+J+`
`+te)}else B!==""?we("WebGLProgram: Program Info Log:",B):(W===""||V==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Q,programLog:B,vertexShader:{log:W,prefix:p},fragmentShader:{log:V,prefix:g}})}i.deleteShader(S),i.deleteShader(E),x=new Ks(i,_),M=OS(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,AS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}var QS=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=QS++,this.code=e,this.usedTimes=0}};function eb(s){return s===hr||s===io||s===ro}function tb(s,e,t,n,i,r){let a=new Ia,o=new Ph,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,M,R,P,F,O){let I=P.fog,B=F.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||W,V),Y=Q&&Q.mapping===ja?Q.image.height:null,J=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,be=te!==void 0?te.length:0,Te=0;B.morphAttributes.position!==void 0&&(Te=1),B.morphAttributes.normal!==void 0&&(Te=2),B.morphAttributes.color!==void 0&&(Te=3);let Ye,Fe,et,Z;if(J){let ft=xi[J];Ye=ft.vertexShader,Fe=ft.fragmentShader}else{Ye=x.vertexShader,Fe=x.fragmentShader;let ft=o.getVertexShaderStage(x),tt=o.getFragmentShaderStage(x);o.update(x,ft,tt),et=ft.id,Z=tt.id}let ee=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,He=!!x.map,Bt=!!x.matcap,Ge=!!Q,je=!!x.aoMap,dt=!!x.lightMap,qe=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Wt=!!x.displacementMap,gn=!!x.emissiveMap,St=!!x.metalnessMap,Nt=!!x.roughnessMap,U=x.anisotropy>0,$t=x.clearcoat>0,rt=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,z=x.sheen>0,G=x.transmission>0,q=U&&!!x.anisotropyMap,re=$t&&!!x.clearcoatMap,se=$t&&!!x.clearcoatNormalMap,$=$t&&!!x.clearcoatRoughnessMap,j=y&&!!x.iridescenceMap,ae=y&&!!x.iridescenceThicknessMap,Re=z&&!!x.sheenColorMap,ue=z&&!!x.sheenRoughnessMap,oe=!!x.specularMap,Ce=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Oe=G&&!!x.transmissionMap,D=G&&!!x.thicknessMap,le=!!x.gradientMap,K=!!x.alphaMap,ce=x.alphaTest>0,pe=!!x.alphaHash,ne=!!x.extensions,Pe=ri;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=s.toneMapping);let Me={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:Fe,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:Bt,envMap:Ge,envMapMode:Ge&&Q.mapping,envMapCubeUVHeight:Y,aoMap:je,lightMap:dt,bumpMap:qe,normalMap:xt,displacementMap:Wt,emissiveMap:gn,normalMapObjectSpace:xt&&x.normalMapType===Bp,normalMapTangentSpace:xt&&x.normalMapType===Ec,packedNormalMap:xt&&x.normalMapType===Ec&&eb(x.normalMap.format),metalnessMap:St,roughnessMap:Nt,anisotropy:U,anisotropyMap:q,clearcoat:$t,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:$,dispersion:rt,retroreflection:C,iridescence:y,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:z,sheenColorMap:Re,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:Ce,specularIntensityMap:Ie,transmission:G,transmissionMap:Oe,thicknessMap:D,gradientMap:le,opaque:x.transparent===!1&&x.blending===Gs&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:pe,combine:x.combine,mapUv:He&&m(x.map.channel),aoMapUv:je&&m(x.aoMap.channel),lightMapUv:dt&&m(x.lightMap.channel),bumpMapUv:qe&&m(x.bumpMap.channel),normalMapUv:xt&&m(x.normalMap.channel),displacementMapUv:Wt&&m(x.displacementMap.channel),emissiveMapUv:gn&&m(x.emissiveMap.channel),metalnessMapUv:St&&m(x.metalnessMap.channel),roughnessMapUv:Nt&&m(x.roughnessMap.channel),anisotropyMapUv:q&&m(x.anisotropyMap.channel),clearcoatMapUv:re&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ue&&m(x.sheenRoughnessMap.channel),specularMapUv:oe&&m(x.specularMap.channel),specularColorMapUv:Ce&&m(x.specularColorMap.channel),specularIntensityMapUv:Ie&&m(x.specularIntensityMap.channel),transmissionMapUv:Oe&&m(x.transmissionMap.channel),thicknessMapUv:D&&m(x.thicknessMap.channel),alphaMapUv:K&&m(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||U),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(He||K),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Te,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&ke.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:gn&&x.emissiveMap.isVideoTexture===!0&&ke.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function p(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(M,x),b(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let M=f[x.type],R;if(M){let P=xi[M];R=jp.clone(P.uniforms)}else R=x.uniforms;return R}function v(x,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new jS(s,M,x,i),c.push(R),u.set(M,R)),R}function S(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:A}}function nb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ib(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ym(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,p,g){let b=s[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},s[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=a(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=p,b.group=g),e++,b}function l(d,f,m,_,p,g,b){b.reversedDepth===!0&&(p=-p);let w=o(d,f,m,_,p,g);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):t.push(w)}function c(d,f,m,_,p,g){let b=o(d,f,m,_,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):t.unshift(b)}function u(d,f){t.length>1&&t.sort(d||ib),n.length>1&&n.sort(f||xm),i.length>1&&i.sort(f||xm)}function h(){for(let d=e,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function rb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new ym,s.set(n,[a])):i>=r.length?(a=new ym,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function sb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ye};break;case"SpotLight":t={position:new L,direction:new L,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function ab(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ob=0;function lb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cb(s){let e=new sb,t=ab(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new Ue,a=new Ue;function o(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,b=0,w=0,v=0,S=0,E=0,A=0,x=0,M=0,R=0;c.sort(lb);for(let F=0,O=c.length;F<O;F++){let I=c[F],B=I.color,W=I.intensity,V=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===hr?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*W,h+=B.g*W,d+=B.b*W;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],W);R++}else if(I.isSunLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=te,n.sunShadowMap[m]=Q;let be=J.getViewportCount();for(let Te=0;Te<be;Te++)n.sunShadowMatrix[_+Te]=J.getMatrix(Te),n.sunShadowCascade[_+Te]=J._cascadeData[Te];_+=be,m++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.directionalShadow[p]=te,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=Y,p++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(W),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[b]=Y;let J=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,J.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[b]=J.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=Q,A++}b++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(B).multiplyScalar(W),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=Y,w++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let J=I.shadow,te=t.get(I);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=Y,g++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(W),Y.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[v]=Y,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==b||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,P.sunLength=f,P.directionalLength=p,P.pointLength=g,P.spotLength=b,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=x,P.numLightProbes=R,n.version=ob++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0,p=0,g=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let v=c[b];if(v.isSunLight){let S=n.sun[h];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),d++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function vm(s){let e=new cb(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ub(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new vm(s),e.set(i,[o])):r>=a.length?(o=new vm(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
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
}`,fb=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],pb=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Sm=new Ue,oo=new L,Th=new L;function mb(s,e,t){let n=new Fs,i=new Ae,r=new Ae,a=new Je,o=new El,l=new wl,c={},u=t.maxTextureSize,h={[mi]:dn,[dn]:mi,[Gn]:Gn},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:hb,fragmentShader:db}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ot;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new yt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let g=this.type;this.render=function(E,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===gp&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kr);let M=s.getRenderTarget(),R=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=g!==this.type;O&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let W=E[I],V=W.shadow;if(V===void 0){we("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let Q=V.getFrameExtents();i.multiply(Q),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,V.mapSize.y=r.y));let Y=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Vs){if(W.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new xn(i.x,i.y,{format:hr,type:ai,minFilter:ct,magFilter:ct,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new ar(i.x,i.y,Dn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=hi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct}else W.isPointLight?(V.map=new Ic(i.x),V.map.depthTexture=new Ml(i.x,si)):(V.map=new xn(i.x,i.y),V.map.depthTexture=new ar(i.x,i.y,si)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=hi,this.type===kr?(V.map.depthTexture.compareFunction=Y?Ac:wc,V.map.depthTexture.minFilter=ct,V.map.depthTexture.magFilter=ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let J=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,x);for(let te=0;te<J;te++){let be=V.getCamera(te);if(W.isPointLight){let Te=V.camera,Ye=V.matrix,Fe=W.distance||Te.far;Fe!==Te.far&&(Te.far=Fe,Te.updateProjectionMatrix()),oo.setFromMatrixPosition(W.matrixWorld),Te.position.copy(oo),Th.copy(Te.position),Th.add(fb[te]),Te.up.copy(pb[te]),Te.lookAt(Th),Te.updateMatrixWorld(),Ye.makeTranslation(-oo.x,-oo.y,-oo.z),Sm.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Sm,Te.coordinateSystem,Te.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,te),s.clear();else{te===0&&(s.setRenderTarget(V.map),s.clear());let Te=V.getViewport(te);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),F.viewport(a)}n=V.getFrustum(te),v(A,x,be,W,this.type)}V.isPointLightShadow!==!0&&this.type===Vs&&b(V,x),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(M,R,P)};function b(E,A){let x=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new xn(i.x,i.y,{format:hr,type:ai}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,x,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,x,f,_,null)}function w(E,A,x,M){let R=null,P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=R.uuid,O=A.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let B=I[O];B===void 0&&(B=R.clone(),I[O]=B,A.addEventListener("dispose",S)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,M===Vs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:h[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=s.properties.get(R);F.light=x}return R}function v(E,A,x,M,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Vs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let O=e.update(E),I=E.material;if(Array.isArray(I)){let B=O.groups;for(let W=0,V=B.length;W<V;W++){let Q=B[W],Y=I[Q.materialIndex];if(Y&&Y.visible){let J=w(E,Y,M,R);E.onBeforeShadow(s,E,A,x,O,J,Q),s.renderBufferDirect(x,null,O,J,E,Q),E.onAfterShadow(s,E,A,x,O,J,Q)}}}else if(I.visible){let B=w(E,I,M,R);E.onBeforeShadow(s,E,A,x,O,B,null),s.renderBufferDirect(x,null,O,B,E,null),E.onAfterShadow(s,E,A,x,O,B,null)}}let F=E.children;for(let O=0,I=F.length;O<I;O++)v(F[O],A,x,M,R)}function S(E){E.target.removeEventListener("dispose",S);for(let x in c){let M=c[x],R=E.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function gb(s,e){function t(){let D=!1,le=new Je,K=null,ce=new Je(0,0,0,0);return{setMask:function(pe){K!==pe&&!D&&(s.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){D=pe},setClear:function(pe,ne,Pe,Me,ft){ft===!0&&(pe*=Me,ne*=Me,Pe*=Me),le.set(pe,ne,Pe,Me),ce.equals(le)===!1&&(s.clearColor(pe,ne,Pe,Me),ce.copy(le))},reset:function(){D=!1,K=null,ce.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,K=null,ce=null,pe=null;return{setReversed:function(ne){if(le!==ne){let Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),le=ne;let Me=pe;pe=null,this.setClear(Me)}},getReversed:function(){return le},setTest:function(ne){ne?ee(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(ne){K!==ne&&!D&&(s.depthMask(ne),K=ne)},setFunc:function(ne){if(le&&(ne=$p[ne]),ce!==ne){switch(ne){case hl:s.depthFunc(s.NEVER);break;case dl:s.depthFunc(s.ALWAYS);break;case fl:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case pl:s.depthFunc(s.EQUAL);break;case ml:s.depthFunc(s.GEQUAL);break;case gl:s.depthFunc(s.GREATER);break;case _l:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=ne}},setLocked:function(ne){D=ne},setClear:function(ne){pe!==ne&&(pe=ne,le&&(ne=1-ne),s.clearDepth(ne))},reset:function(){D=!1,K=null,ce=null,pe=null,le=!1}}}function i(){let D=!1,le=null,K=null,ce=null,pe=null,ne=null,Pe=null,Me=null,ft=null;return{setTest:function(tt){D||(tt?ee(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(tt){le!==tt&&!D&&(s.stencilMask(tt),le=tt)},setFunc:function(tt,Zn,oi){(K!==tt||ce!==Zn||pe!==oi)&&(s.stencilFunc(tt,Zn,oi),K=tt,ce=Zn,pe=oi)},setOp:function(tt,Zn,oi){(ne!==tt||Pe!==Zn||Me!==oi)&&(s.stencilOp(tt,Zn,oi),ne=tt,Pe=Zn,Me=oi)},setLocked:function(tt){D=tt},setClear:function(tt){ft!==tt&&(s.clearStencil(tt),ft=tt)},reset:function(){D=!1,le=null,K=null,ce=null,pe=null,ne=null,Pe=null,Me=null,ft=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,b=null,w=null,v=null,S=null,E=null,A=null,x=new ye(0,0,0),M=0,R=!1,P=null,F=null,O=null,I=null,B=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=Q>=2);let J=null,te={},be=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),Ye=new Je().fromArray(be),Fe=new Je().fromArray(Te);function et(D,le,K,ce){let pe=new Uint8Array(4),ne=s.createTexture();s.bindTexture(D,ne),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<K;Pe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(le+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return ne}let Z={};Z[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(As),qe(!1),xt(Xu),ee(s.CULL_FACE),je(gi);function ee(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function xe(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function De(D,le){return d[D]!==le?(s.bindFramebuffer(D,le),d[D]=le,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(D,le){let K=m,ce=!1;if(D){K=f.get(le),K===void 0&&(K=[],f.set(le,K));let pe=D.textures;if(K.length!==pe.length||K[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,Pe=pe.length;ne<Pe;ne++)K[ne]=s.COLOR_ATTACHMENT0+ne;K.length=pe.length,ce=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ce=!0);ce&&s.drawBuffers(K)}function He(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let Bt={[Vr]:s.FUNC_ADD,[_p]:s.FUNC_SUBTRACT,[xp]:s.FUNC_REVERSE_SUBTRACT};Bt[yp]=s.MIN,Bt[vp]=s.MAX;let Ge={[Sp]:s.ZERO,[Bl]:s.ONE,[bp]:s.SRC_COLOR,[Zu]:s.SRC_ALPHA,[Rp]:s.SRC_ALPHA_SATURATE,[wp]:s.DST_COLOR,[Tp]:s.DST_ALPHA,[Mp]:s.ONE_MINUS_SRC_COLOR,[Za]:s.ONE_MINUS_SRC_ALPHA,[Ap]:s.ONE_MINUS_DST_COLOR,[Ep]:s.ONE_MINUS_DST_ALPHA,[Cp]:s.CONSTANT_COLOR,[Pp]:s.ONE_MINUS_CONSTANT_COLOR,[Ip]:s.CONSTANT_ALPHA,[Lp]:s.ONE_MINUS_CONSTANT_ALPHA};function je(D,le,K,ce,pe,ne,Pe,Me,ft,tt){if(D===gi){p===!0&&(xe(s.BLEND),p=!1);return}if(p===!1&&(ee(s.BLEND),p=!0),D!==Ol){if(D!==g||tt!==R){if((b!==Vr||S!==Vr)&&(s.blendEquation(s.FUNC_ADD),b=Vr,S=Vr),tt)switch(D){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hr:s.blendFunc(s.ONE,s.ONE);break;case Yu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Le("WebGLState: Invalid blending: ",D);break}else switch(D){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yu:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",D);break}w=null,v=null,E=null,A=null,x.set(0,0,0),M=0,g=D,R=tt}return}pe=pe||le,ne=ne||K,Pe=Pe||ce,(le!==b||pe!==S)&&(s.blendEquationSeparate(Bt[le],Bt[pe]),b=le,S=pe),(K!==w||ce!==v||ne!==E||Pe!==A)&&(s.blendFuncSeparate(Ge[K],Ge[ce],Ge[ne],Ge[Pe]),w=K,v=ce,E=ne,A=Pe),(Me.equals(x)===!1||ft!==M)&&(s.blendColor(Me.r,Me.g,Me.b,ft),x.copy(Me),M=ft),g=D,R=!1}function dt(D,le){D.side===Gn?xe(s.CULL_FACE):ee(s.CULL_FACE);let K=D.side===dn;le&&(K=!K),qe(K),D.blending===Gs&&D.transparent===!1?je(gi):je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){P!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),P=D)}function xt(D){D!==pp?(ee(s.CULL_FACE),D!==F&&(D===Xu?s.cullFace(s.BACK):D===mp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),F=D}function Wt(D){D!==O&&(V&&s.lineWidth(D),O=D)}function gn(D,le,K){D?(ee(s.POLYGON_OFFSET_FILL),(I!==le||B!==K)&&(I=le,B=K,a.getReversed()&&(le=-le),s.polygonOffset(le,K))):xe(s.POLYGON_OFFSET_FILL)}function St(D){D?ee(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Nt(D){D===void 0&&(D=s.TEXTURE0+W-1),J!==D&&(s.activeTexture(D),J=D)}function U(D,le,K){K===void 0&&(J===null?K=s.TEXTURE0+W-1:K=J);let ce=te[K];ce===void 0&&(ce={type:void 0,texture:void 0},te[K]=ce),(ce.type!==D||ce.texture!==le)&&(J!==K&&(s.activeTexture(K),J=K),s.bindTexture(D,le||Z[D]),ce.type=D,ce.texture=le)}function $t(){let D=te[J];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function y(){try{s.texSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function z(){try{s.texSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function re(){try{s.texStorage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function se(){try{s.texStorage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function $(){try{s.texImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function j(){try{s.texImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function ae(D){return h[D]!==void 0?h[D]:s.getParameter(D)}function Re(D,le){h[D]!==le&&(s.pixelStorei(D,le),h[D]=le)}function ue(D){Ye.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function oe(D){Fe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function Ce(D,le){let K=c.get(le);K===void 0&&(K=new WeakMap,c.set(le,K));let ce=K.get(D);ce===void 0&&(ce=s.getUniformBlockIndex(le,D.name),K.set(D,ce))}function Ie(D,le){let ce=c.get(le).get(D);l.get(le)!==ce&&(s.uniformBlockBinding(le,ce,D.__bindingPointIndex),l.set(le,ce))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,te={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,b=null,w=null,v=null,S=null,E=null,A=null,x=new ye(0,0,0),M=0,R=!1,P=null,F=null,O=null,I=null,B=null,Ye.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:De,drawBuffers:ge,useProgram:He,setBlending:je,setMaterial:dt,setFlipSided:qe,setCullFace:xt,setLineWidth:Wt,setPolygonOffset:gn,setScissorTest:St,activeTexture:Nt,bindTexture:U,unbindTexture:$t,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:$,texImage3D:j,pixelStorei:Re,getParameter:ae,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:re,texStorage3D:se,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:ue,viewport:oe,reset:Oe}}function _b(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return m?new OffscreenCanvas(C,y):Ps("canvas")}function p(C,y,z){let G=1,q=rt(C);if((q.width>z||q.height>z)&&(G=z/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(G*q.width),se=Math.floor(G*q.height);d===void 0&&(d=_(re,se));let $=y?_(re,se):d;return $.width=re,$.height=se,$.getContext("2d").drawImage(C,0,0,re,se),we("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+se+")."),$}else return"data"in C&&we("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function g(C){return C.generateMipmaps}function b(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,y,z,G,q,re=!1){if(C!==null){if(s[C]!==void 0)return s[C];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se;G&&(se=e.get("EXT_texture_norm16"),se||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8),z===s.UNSIGNED_SHORT&&se&&($=se.R16_EXT),z===s.SHORT&&se&&($=se.R16_SNORM_EXT)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),y===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8),z===s.UNSIGNED_SHORT&&se&&($=se.RG16_EXT),z===s.SHORT&&se&&($=se.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),y===s.RGB&&(z===s.UNSIGNED_SHORT&&se&&($=se.RGB16_EXT),z===s.SHORT&&se&&($=se.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),y===s.RGBA){let j=re?Ra:ke.getTransfer(q);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=j===it?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&se&&($=se.RGBA16_EXT),z===s.SHORT&&se&&($=se.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(C,y){let z;return C?y===null||y===si||y===Ys?z=s.DEPTH24_STENCIL8:y===Dn?z=s.DEPTH32F_STENCIL8:y===Xs&&(z=s.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===si||y===Ys?z=s.DEPTH_COMPONENT24:y===Dn?z=s.DEPTH_COMPONENT32F:y===Xs&&(z=s.DEPTH_COMPONENT16),z}function E(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==ct?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),M(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),P(y)}function M(C){let y=n.get(C);if(y.__webglInit===void 0)return;let z=C.source,G=f.get(z);if(G){let q=G[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(G).length===0&&f.delete(z)}n.remove(C)}function R(C){let y=n.get(C);s.deleteTexture(y.__webglTexture);let z=C.source,G=f.get(z);delete G[y.__cacheKey],a.memory.textures--}function P(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let q=0;q<y.__webglFramebuffer[G].length;q++)s.deleteFramebuffer(y.__webglFramebuffer[G][q]);else s.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)s.deleteFramebuffer(y.__webglFramebuffer[G]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=C.textures;for(let G=0,q=z.length;G<q;G++){let re=n.get(z[G]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(z[G])}n.remove(C)}let F=0;function O(){F=0}function I(){return F}function B(C){F=C}function W(){let C=F;return C>=i.maxTextures&&we("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,C}function V(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Q(C,y){let z=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let G=C.image;if(G===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function Y(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){xe(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function J(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){xe(z,C,y);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function te(C,y){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){De(z,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}let be={[ni]:s.REPEAT,[ln]:s.CLAMP_TO_EDGE,[Rs]:s.MIRRORED_REPEAT},Te={[Ct]:s.NEAREST,[Hl]:s.NEAREST_MIPMAP_NEAREST,[Wr]:s.NEAREST_MIPMAP_LINEAR,[ct]:s.LINEAR,[Ws]:s.LINEAR_MIPMAP_NEAREST,[fn]:s.LINEAR_MIPMAP_LINEAR},Ye={[kp]:s.NEVER,[Xp]:s.ALWAYS,[Hp]:s.LESS,[wc]:s.LEQUAL,[Vp]:s.EQUAL,[Ac]:s.GEQUAL,[Gp]:s.GREATER,[Wp]:s.NOTEQUAL};function Fe(C,y){if(y.type===Dn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ct||y.magFilter===Ws||y.magFilter===Wr||y.magFilter===fn||y.minFilter===ct||y.minFilter===Ws||y.minFilter===Wr||y.minFilter===fn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,be[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,be[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,be[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Te[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ct||y.minFilter!==Wr&&y.minFilter!==fn||y.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function et(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let G=y.source,q=f.get(G);q===void 0&&(q={},f.set(G,q));let re=V(y);if(re!==C.__cacheKey){q[re]===void 0&&(q[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),q[re].usedTimes++;let se=q[C.__cacheKey];se!==void 0&&(q[C.__cacheKey].usedTimes--,se.usedTimes===0&&R(y)),C.__cacheKey=re,C.__webglTexture=q[re].texture}return z}function Z(C,y,z){return Math.floor(Math.floor(C/z)/y)}function ee(C,y,z,G){let re=C.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,z,G,y.data);else{re.sort((Re,ue)=>Re.start-ue.start);let se=0;for(let Re=1;Re<re.length;Re++){let ue=re[se],oe=re[Re],Ce=ue.start+ue.count,Ie=Z(oe.start,y.width,4),Oe=Z(ue.start,y.width,4);oe.start<=Ce+1&&Ie===Oe&&Z(oe.start+oe.count-1,y.width,4)===Ie?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,re[se]=oe)}re.length=se+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Re=0,ue=re.length;Re<ue;Re++){let oe=re[Re],Ce=Math.floor(oe.start/4),Ie=Math.ceil(oe.count/4),Oe=Ce%y.width,D=Math.floor(Ce/y.width),le=Ie,K=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Oe,D,le,K,z,G,y.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function xe(C,y,z){let G=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=s.TEXTURE_3D);let q=et(C,y),re=y.source;t.bindTexture(G,C.__webglTexture,s.TEXTURE0+z);let se=n.get(re);if(re.version!==se.__version||q===!0){if(t.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let K=ke.getPrimaries(ke.workingColorSpace),ce=y.colorSpace===Mn?null:ke.getPrimaries(y.colorSpace),pe=y.colorSpace===Mn||K===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let j=p(y.image,!1,i.maxTextureSize);j=$t(y,j);let ae=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),ue=v(y.internalFormat,ae,Re,y.normalized,y.colorSpace,y.isVideoTexture);Fe(G,y);let oe,Ce=y.mipmaps,Ie=y.isVideoTexture!==!0,Oe=se.__version===void 0||q===!0,D=re.dataReady,le=E(y,j);if(y.isDepthTexture)ue=S(y.format===ur,y.type),Oe&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,ue,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Re,null));else if(y.isDataTexture)if(Ce.length>0){Ie&&Oe&&t.texStorage2D(s.TEXTURE_2D,le,ue,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?D&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Re,oe.data):t.texImage2D(s.TEXTURE_2D,K,ue,oe.width,oe.height,0,ae,Re,oe.data);y.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(s.TEXTURE_2D,le,ue,j.width,j.height),D&&ee(y,j,ae,Re)):t.texImage2D(s.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Re,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,ue,Ce[0].width,Ce[0].height,j.depth);for(let K=0,ce=Ce.length;K<ce;K++)if(oe=Ce[K],y.format!==en)if(ae!==null)if(Ie){if(D)if(y.layerUpdates.size>0){let pe=fh(oe.width,oe.height,y.format,y.type);for(let ne of y.layerUpdates){let Pe=oe.data.subarray(ne*pe/oe.data.BYTES_PER_ELEMENT,(ne+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,ne,oe.width,oe.height,1,ae,Pe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,j.depth,ae,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,ue,oe.width,oe.height,j.depth,0,oe.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,j.depth,ae,Re,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,ue,oe.width,oe.height,j.depth,0,ae,Re,oe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ie&&Oe&&t.texStorage2D(s.TEXTURE_2D,le,ue,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],y.format!==en?ae!==null?Ie?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,K,ue,oe.width,oe.height,0,oe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Re,oe.data):t.texImage2D(s.TEXTURE_2D,K,ue,oe.width,oe.height,0,ae,Re,oe.data)}else if(y.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,ue,j.width,j.height,j.depth),D)if(y.layerUpdates.size>0){let K=fh(j.width,j.height,y.format,y.type);for(let ce of y.layerUpdates){let pe=j.data.subarray(ce*K/j.data.BYTES_PER_ELEMENT,(ce+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,j.width,j.height,1,ae,Re,pe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,Re,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,ae,Re,j.data);else if(y.isData3DTexture)Ie?(Oe&&t.texStorage3D(s.TEXTURE_3D,le,ue,j.width,j.height,j.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,Re,j.data)):t.texImage3D(s.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,ae,Re,j.data);else if(y.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(s.TEXTURE_2D,le,ue,j.width,j.height);else{let K=j.width,ce=j.height;for(let pe=0;pe<le;pe++)t.texImage2D(s.TEXTURE_2D,pe,ue,K,ce,0,ae,Re,null),K>>=1,ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),h.add(y),K.onpaint=ce=>{let pe=ce.changedElements;for(let ne of h)pe.includes(ne.image)&&(ne.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let pe=s.RGBA,ne=s.RGBA,Pe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,pe,ne,Pe,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ie&&Oe){let K=rt(Ce[0]);t.texStorage2D(s.TEXTURE_2D,le,ue,K.width,K.height)}for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?D&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,ae,Re,oe):t.texImage2D(s.TEXTURE_2D,K,ue,ae,Re,oe);y.generateMipmaps=!1}else if(Ie){if(Oe){let K=rt(j);t.texStorage2D(s.TEXTURE_2D,le,ue,K.width,K.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,Re,j)}else t.texImage2D(s.TEXTURE_2D,0,ue,ae,Re,j);g(y)&&b(G),se.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function De(C,y,z){if(y.image.length!==6)return;let G=et(C,y),q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);let re=n.get(q);if(q.version!==re.__version||G===!0){t.activeTexture(s.TEXTURE0+z);let se=ke.getPrimaries(ke.workingColorSpace),$=y.colorSpace===Mn?null:ke.getPrimaries(y.colorSpace),j=y.colorSpace===Mn||se===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!ae&&!Re?ue[ne]=p(y.image[ne],!0,i.maxCubemapSize):ue[ne]=Re?y.image[ne].image:y.image[ne],ue[ne]=$t(y,ue[ne]);let oe=ue[0],Ce=r.convert(y.format,y.colorSpace),Ie=r.convert(y.type),Oe=v(y.internalFormat,Ce,Ie,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,le=re.__version===void 0||G===!0,K=q.dataReady,ce=E(y,oe);Fe(s.TEXTURE_CUBE_MAP,y);let pe;if(ae){D&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Oe,oe.width,oe.height);for(let ne=0;ne<6;ne++){pe=ue[ne].mipmaps;for(let Pe=0;Pe<pe.length;Pe++){let Me=pe[Pe];y.format!==en?Ce!==null?D?K&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Oe,Me.width,Me.height,0,Me.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Me.width,Me.height,Ce,Ie,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Oe,Me.width,Me.height,0,Ce,Ie,Me.data)}}}else{if(pe=y.mipmaps,D&&le){pe.length>0&&ce++;let ne=rt(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Oe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){D?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ce,Ie,ue[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,ue[ne].width,ue[ne].height,0,Ce,Ie,ue[ne].data);for(let Pe=0;Pe<pe.length;Pe++){let ft=pe[Pe].image[ne].image;D?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,ft.width,ft.height,Ce,Ie,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Oe,ft.width,ft.height,0,Ce,Ie,ft.data)}}else{D?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Ie,ue[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,Ce,Ie,ue[ne]);for(let Pe=0;Pe<pe.length;Pe++){let Me=pe[Pe];D?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ce,Ie,Me.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Oe,Ce,Ie,Me.image[ne])}}}g(y)&&b(s.TEXTURE_CUBE_MAP),re.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ge(C,y,z,G,q,re){let se=r.convert(z.format,z.colorSpace),$=r.convert(z.type),j=v(z.internalFormat,se,$,z.normalized,z.colorSpace),ae=n.get(y),Re=n.get(z);if(Re.__renderTarget=y,!ae.__hasExternalTextures){let ue=Math.max(1,y.width>>re),oe=Math.max(1,y.height>>re);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,re,j,ue,oe,y.depth,0,se,$,null):t.texImage2D(q,re,j,ue,oe,0,se,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Nt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,q,Re.__webglTexture,0,St(y)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,q,Re.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(C,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){let G=y.depthTexture,q=G&&G.isDepthTexture?G.type:null,re=S(y.stencilBuffer,q),se=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Nt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(y),re,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(y),re,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,re,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,C)}else{let G=y.textures;for(let q=0;q<G.length;q++){let re=G[q],se=r.convert(re.format,re.colorSpace),$=r.convert(re.type),j=v(re.internalFormat,se,$,re.normalized,re.colorSpace);Nt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(y),j,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(y),j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(C,y,z){let G=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y.depthTexture);let ae=r.convert(y.depthTexture.format),Re=r.convert(y.depthTexture.type),ue;y.depthTexture.format===hi?ue=s.DEPTH_COMPONENT24:y.depthTexture.format===ur&&(ue=s.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,y.width,y.height,0,ae,Re,null)}}else Q(y.depthTexture,0);let re=q.__webglTexture,se=St(y),$=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,j=y.depthTexture.format===ur?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===hi)Nt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,$,re,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,j,$,re,0);else if(y.depthTexture.format===ur)Nt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,$,re,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,j,$,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(C){let y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=G}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)Bt(y.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?Bt(y.__webglFramebuffer[0],C,0):Bt(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=s.createRenderbuffer(),He(y.__webglDepthbuffer[G],C,!1);else{let q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,re)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),He(y.__webglDepthbuffer,C,!1);else{let q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(C,y,z){let G=n.get(C);y!==void 0&&ge(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ge(C)}function dt(C){let y=C.texture,z=n.get(C),G=n.get(y);C.addEventListener("dispose",x);let q=C.textures,re=C.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=y.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let j=0;j<y.mipmaps.length;j++)z.__webglFramebuffer[$][j]=s.createFramebuffer()}else z.__webglFramebuffer[$]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)z.__webglFramebuffer[$]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(se)for(let $=0,j=q.length;$<j;$++){let ae=n.get(q[$]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Nt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){let j=q[$];z.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let ae=r.convert(j.format,j.colorSpace),Re=r.convert(j.type),ue=v(j.internalFormat,ae,Re,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),oe=St(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ue,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,z.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),He(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ge(z.__webglFramebuffer[$][j],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else ge(z.__webglFramebuffer[$],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(y)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let $=0,j=q.length;$<j;$++){let ae=q[$],Re=n.get(ae),ue=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Re.__webglTexture),Fe(ue,ae),ge(z.__webglFramebuffer,C,ae,s.COLOR_ATTACHMENT0+$,ue,0),g(ae)&&b(ue)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),Fe($,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ge(z.__webglFramebuffer[j],C,y,s.COLOR_ATTACHMENT0,$,j);else ge(z.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,$,0);g(y)&&b($),t.unbindTexture()}C.depthBuffer&&Ge(C)}function qe(C){let y=C.textures;for(let z=0,G=y.length;z<G;z++){let q=y[z];if(g(q)){let re=w(C),se=n.get(q).__webglTexture;t.bindTexture(re,se),b(re),t.unbindTexture()}}}let xt=[],Wt=[];function gn(C){if(C.samples>0){if(Nt(C)===!1){let y=C.textures,z=C.width,G=C.height,q=s.COLOR_BUFFER_BIT,re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=n.get(C),$=y.length>1;if($)for(let ae=0;ae<y.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<y.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);let Re=n.get(y[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,z,G,0,0,z,G,q,s.NEAREST),l===!0&&(xt.length=0,Wt.length=0,xt.push(s.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(xt.push(re),Wt.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ae=0;ae<y.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);let Re=n.get(y[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function St(C){return Math.min(i.maxSamples,C.samples)}function Nt(C){let y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(C){let y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function $t(C,y){let z=C.colorSpace,G=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==un&&z!==Mn&&(ke.getTransfer(z)===it?(G!==en||q!==bn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",z)),y}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=je,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xb(s,e){function t(n,i=Mn){let r,a=ke.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===Gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return s.BYTE;if(n===th)return s.SHORT;if(n===Xs)return s.UNSIGNED_SHORT;if(n===Vl)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===ai)return s.HALF_FLOAT;if(n===rh)return s.ALPHA;if(n===sh)return s.RGB;if(n===en)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===ur)return s.DEPTH_STENCIL;if(n===Xl)return s.RED;if(n===Yl)return s.RED_INTEGER;if(n===hr)return s.RG;if(n===ql)return s.RG_INTEGER;if(n===Zl)return s.RGBA_INTEGER;if(n===Qa||n===eo||n===to||n===no)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===Kl||n===Jl||n===jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===ec||n===tc||n===nc||n===ic||n===io||n===rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===ec)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nc)return r.COMPRESSED_R11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===io)return r.COMPRESSED_RG11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sc||n===ac||n===oc||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===vc||n===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yc)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Mc||n===ro||n===Tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
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

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kt({vertexShader:yb,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends di{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Lh,g={},b=t.getContextAttributes(),w=null,v=null,S=[],E=[],A=new Ae,x=null,M=null,R=new Ft;R.viewport=new Je;let P=new Ft;P.viewport=new Je;let F=[R,P],O=new Ul,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Ns,S[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Ns,S[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Ns,S[Z]=ee),ee.getHandSpace()};function W(Z){let ee=E.indexOf(Z.inputSource);if(ee===-1)return;let xe=S[ee];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<S.length;Z++){let ee=E[Z];ee!==null&&(E[Z]=null,S[Z].disconnect(ee))}I=null,B=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(w),f=null,d=null,h=null,i=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),M!==null){let Z=M.camera;Z.fov=M.fov,Z.zoom=M.zoom,Z.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,De=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?ur:hi,De=b.stencil?Ys:si);let He={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new xn(d.textureWidth,d.textureHeight,{format:en,type:bn,depthTexture:new ar(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new xn(f.framebufferWidth,f.framebufferHeight,{format:en,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Z){for(let ee=0;ee<Z.removed.length;ee++){let xe=Z.removed[ee],De=E.indexOf(xe);De>=0&&(E[De]=null,S[De].disconnect(xe))}for(let ee=0;ee<Z.added.length;ee++){let xe=Z.added[ee],De=E.indexOf(xe);if(De===-1){for(let He=0;He<S.length;He++)if(He>=E.length){E.push(xe),De=He;break}else if(E[He]===null){E[He]=xe,De=He;break}if(De===-1)break}let ge=S[De];ge&&ge.connect(xe)}}let Y=new L,J=new L;function te(Z,ee,xe){Y.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);let De=Y.distanceTo(J),ge=ee.projectionMatrix.elements,He=xe.projectionMatrix.elements,Bt=ge[14]/(ge[10]-1),Ge=ge[14]/(ge[10]+1),je=(ge[9]+1)/ge[5],dt=(ge[9]-1)/ge[5],qe=(ge[8]-1)/ge[0],xt=(He[8]+1)/He[0],Wt=Bt*qe,gn=Bt*xt,St=De/(-qe+xt),Nt=St*-qe;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(St),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let U=Bt+St,$t=Ge+St,rt=Wt-Nt,C=gn+(De-Nt),y=je*Ge/$t*U,z=dt*Ge/$t*U;Z.projectionMatrix.makePerspective(rt,C,y,z,U,$t),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function be(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,xe=Z.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),O.near=P.near=R.near=ee,O.far=P.far=R.far=xe,(I!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,B=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let De=Z.parent,ge=O.cameras;be(O,De);for(let He=0;He<ge.length;He++)be(ge[He],De);ge.length===2?te(O,R,P):O.projectionMatrix.copy(R.projectionMatrix),M===null&&Z.isPerspectiveCamera&&(M={camera:Z,fov:Z.fov,zoom:Z.zoom}),Te(Z,O,De)};function Te(Z,ee,xe){xe===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Z){return g[Z]};let Ye=null;function Fe(Z,ee){if(u=ee.getViewerPose(c||a),m=ee,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let Ge=0;Ge<xe.length;Ge++){let je=xe[Ge],dt=null;if(f!==null)dt=f.getViewport(je);else{let xt=h.getViewSubImage(d,je);dt=xt.viewport,Ge===0&&(e.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(v))}let qe=F[Ge];qe===void 0&&(qe=new Ft,qe.layers.enable(Ge),qe.viewport=new Je,F[Ge]=qe),qe.matrix.fromArray(je.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(je.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(dt.x,dt.y,dt.width,dt.height),Ge===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(qe)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Ge=h.getDepthInformation(xe[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,i.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ge=0;Ge<xe.length;Ge++){let je=xe[Ge].camera;if(je){let dt=g[je];dt||(dt=new ka,g[je]=dt);let qe=h.getCameraImage(je);dt.sourceTexture=qe}}}}for(let xe=0;xe<S.length;xe++){let De=E[xe],ge=S[xe];De!==null&&ge!==void 0&&ge.update(De,ee,c||a)}Ye&&Ye(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let et=new bm;et.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}},Sb=new Ue,Rm=new Ne;Rm.set(-1,0,0,0,1,0,0,0,1);function bb(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,uh(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,b,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,b,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===dn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===dn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=e.get(g),w=b.envMap,v=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=w*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mb(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let E=S.program;n.uniformBlockBinding(v,E)}function c(v,S){let E=i[v.id];E===void 0&&(p(v),E=u(v),i[v.id]=E,v.addEventListener("dispose",b));let A=S.program;n.updateUBOMapping(v,A);let x=e.render.frame;r[v.id]!==x&&(d(v),r[v.id]=x)}function u(v){let S=h();v.__bindingPointIndex=S;let E=s.createBuffer(),A=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,E),E}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=i[v.id],E=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let x=0,M=E.length;x<M;x++){let R=E[x];if(Array.isArray(R))for(let P=0,F=R.length;P<F;P++)f(R[P],x,P,A);else f(R,x,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,S,E,A){if(_(v,S,E,A)===!0){let x=v.__offset,M=v.value;if(Array.isArray(M)){let R=0;for(let P=0;P<M.length;P++){let F=M[P],O=g(F);m(F,v.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(M,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function m(v,S,E){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,E)}function _(v,S,E,A){let x=v.value,M=S+"_"+E;if(A[M]===void 0)return typeof x=="number"||typeof x=="boolean"?A[M]=x:ArrayBuffer.isView(x)?A[M]=x.slice():A[M]=x.clone(),!0;{let R=A[M];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(v){let S=v.uniforms,E=0,A=16;for(let M=0,R=S.length;M<R;M++){let P=Array.isArray(S[M])?S[M]:[S[M]];for(let F=0,O=P.length;F<O;F++){let I=P[F],B=Array.isArray(I.value)?I.value:[I.value];for(let W=0,V=B.length;W<V;W++){let Q=B[W],Y=g(Q),J=E%A,te=J%Y.boundary,be=J+te;E+=te,be!==0&&A-be<Y.storage&&(E+=A-be),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Y.storage}}}let x=E%A;return x>0&&(E+=A-x),v.__size=E,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):we("WebGLRenderer: Unsupported uniform value type.",v),S}function b(v){let S=v.target;S.removeEventListener("dispose",b);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var Tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function Eb(){return _i===null&&(_i=new Di(Tb,16,16,hr,ai),_i.name="DFG_LUT",_i.minFilter=ct,_i.magFilter=ct,_i.wrapS=ln,_i.wrapT=ln,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Js=class{constructor(e={}){let{canvas:t=Yp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,p=new Set([Zl,ql,Yl]),g=new Set([bn,si,Xs,Ys,Gl,Wl]),b=new Uint32Array(4),w=new Int32Array(4),v=new L,S=null,E=null,A=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,F=null,O=null,I=null,B=null;this._outputColorSpace=Et;let W=0,V=0,Q=null,Y=-1,J=null,te=new Je,be=new Je,Te=null,Ye=new ye(0),Fe=0,et=t.width,Z=t.height,ee=1,xe=null,De=null,ge=new Je(0,0,et,Z),He=new Je(0,0,et,Z),Bt=!1,Ge=new Fs,je=!1,dt=!1,qe=new Ue,xt=new L,Wt=new Je,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function Nt(){return Q===null?ee:1}let U=n;function $t(T,N){return t.getContext(T,N)}let rt,C,y,z,G,q,re,se,$,j,ae,Re,ue,oe,Ce,Ie,Oe,D,le,K,ce,pe,ne;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Zn,!1),U===null){let N="webgl2";if(U=$t(N,T),U===null)throw $t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(T){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Zn,!1),Le("WebGLRenderer: "+T.message),T}function Pe(){rt=new Lv(U),rt.init(),ce=new xb(U,rt),C=new bv(U,rt,e,ce),y=new gb(U,rt),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),O=U.createFramebuffer(),I=U.createFramebuffer(),B=U.createFramebuffer(),z=new Uv(U),G=new nb,q=new _b(U,rt,y,G,C,ce,z),re=new Iv(R),se=new O_(U),pe=new vv(U,se),$=new Nv(U,se,z,pe),j=new Ov(U,$,se,pe,z),D=new Fv(U,C,q),Ce=new Mv(G),ae=new tb(R,re,rt,C,pe,Ce),Re=new bb(R,G),ue=new rb,oe=new ub(rt),Oe=new yv(R,re,y,j,m,l),Ie=new mb(R,j,C),ne=new Mb(U,z,C,y),le=new Sv(U,rt,z),K=new Dv(U,rt,z),z.programs=ae.programs,R.capabilities=C,R.extensions=rt,R.properties=G,R.renderLists=ue,R.shadowMap=Ie,R.state=y,R.info=z}_!==bn&&(M=new zv(_,t.width,t.height,o,i,r));let Me=new Nh(R,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(et,Z,!1))},this.getSize=function(T){return T.set(et,Z)},this.setSize=function(T,N,X=!0){if(Me.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}et=T,Z=N,t.width=Math.floor(T*ee),t.height=Math.floor(N*ee),X===!0&&(t.style.width=T+"px",t.style.height=N+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(et*ee,Z*ee).floor()},this.setDrawingBufferSize=function(T,N,X){et=T,Z=N,ee=X,t.width=Math.floor(T*X),t.height=Math.floor(N*X),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(_===bn){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(te)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,N,X,k){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,N,X,k),y.viewport(te.copy(ge).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(He)},this.setScissor=function(T,N,X,k){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,N,X,k),y.scissor(be.copy(He).multiplyScalar(ee).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){y.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){De=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,X=!0){let k=0;if(T){let H=!1;if(Q!==null){let fe=Q.texture.format;H=p.has(fe)}if(H){let fe=Q.texture.type,_e=g.has(fe),de=Oe.getClearColor(),ve=Oe.getClearAlpha(),Ee=de.r,Be=de.g,We=de.b;_e?(b[0]=Ee,b[1]=Be,b[2]=We,b[3]=ve,U.clearBufferuiv(U.COLOR,0,b)):(w[0]=Ee,w[1]=Be,w[2]=We,w[3]=ve,U.clearBufferiv(U.COLOR,0,w))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Zn,!1),Oe.dispose(),ue.dispose(),oe.dispose(),G.dispose(),re.dispose(),j.dispose(),pe.dispose(),ne.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",yf),Me.removeEventListener("sessionend",vf),br.stop()};function ft(T){T.preventDefault(),Ca("WebGLRenderer: Context Lost."),P=!0}function tt(){Ca("WebGLRenderer: Context Restored."),P=!1;let T=z.autoReset,N=Ie.enabled,X=Ie.autoUpdate,k=Ie.needsUpdate,H=Ie.type;Pe(),z.autoReset=T,Ie.enabled=N,Ie.autoUpdate=X,Ie.needsUpdate=k,Ie.type=H}function Zn(T){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oi(T){let N=T.target;N.removeEventListener("dispose",oi),M0(N)}function M0(T){T0(T),G.remove(T)}function T0(T){let N=G.get(T).programs;N!==void 0&&(N.forEach(function(X){ae.releaseProgram(X)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,X,k,H,fe){N===null&&(N=gn);let _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=A0(T,N,X,k,H);y.setMaterial(k,_e);let ve=X.index,Ee=1;if(k.wireframe===!0){if(ve=$.getWireframeAttribute(X),ve===void 0)return;Ee=2}let Be=X.drawRange,We=X.attributes.position,Se=Be.start*Ee,nt=(Be.start+Be.count)*Ee;fe!==null&&(Se=Math.max(Se,fe.start*Ee),nt=Math.min(nt,(fe.start+fe.count)*Ee)),ve!==null?(Se=Math.max(Se,0),nt=Math.min(nt,ve.count)):We!=null&&(Se=Math.max(Se,0),nt=Math.min(nt,We.count));let Dt=nt-Se;if(Dt<0||Dt===1/0)return;pe.setup(H,k,de,X,ve);let mt,ot=le;if(ve!==null&&(mt=se.get(ve),ot=K,ot.setIndex(mt)),H.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*Nt()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(H.isLine){let Kt=k.linewidth;Kt===void 0&&(Kt=1),y.setLineWidth(Kt*Nt()),H.isLineSegments?ot.setMode(U.LINES):H.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else H.isPoints?ot.setMode(U.POINTS):H.isSprite&&ot.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Kt=H._multiDrawStarts,me=H._multiDrawCounts,an=H._multiDrawCount,Ke=ve?se.get(ve).bytesPerElement:1,zn=G.get(k).currentProgram.getUniforms();for(let li=0;li<an;li++)zn.setValue(U,"_gl_DrawID",li),ot.render(Kt[li]/Ke,me[li])}else if(H.isInstancedMesh)ot.renderInstances(Se,Dt,H.count);else if(X.isInstancedBufferGeometry){let Kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,me=Math.min(X.instanceCount,Kt);ot.renderInstances(Se,Dt,me)}else ot.render(Se,Dt)};function xf(T,N,X,k){F!==null&&T.isNodeMaterial&&F.setObject(k,T),je===!0&&Ce.setState(T,X,!1),T.transparent===!0&&T.side===Gn&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,No(T,N,k),T.side=mi,T.needsUpdate=!0,No(T,N,k),T.side=Gn):No(T,N,k)}this.compile=function(T,N,X=null){X===null&&(X=T),F!==null&&F.renderStart(T,N,X),E=oe.get(X),E.init(N),x.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),dt=this.localClippingEnabled,je=Ce.init(this.clippingPlanes,dt),je===!0&&Ce.setGlobalState(this.clippingPlanes,N),F!==null&&Ie.render(E.state.shadowsArray,X,N);let k=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let fe=H.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let de=fe[_e];xf(de,X,N,H),k.add(de)}else xf(fe,X,N,H),k.add(fe)}),E=x.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(T,N,X=null){let k=this.compile(T,N,X);return new Promise(H=>{function fe(){if(k.forEach(function(_e){let ve=G.get(_e).currentProgram;(ve===void 0||ve.isReady())&&k.delete(_e)}),k.size===0){H(T);return}setTimeout(fe,10)}rt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let au=null;function E0(T){au&&au(T)}function yf(){br.stop()}function vf(){br.start()}let br=new bm;br.setAnimationLoop(E0),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(T){au=T,Me.setAnimationLoop(T),T===null?br.stop():br.start()},Me.addEventListener("sessionstart",yf),Me.addEventListener("sessionend",vf),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(T,N);let X=Me.enabled===!0&&Me.isPresenting===!0,k=M!==null&&(Q===null||X)&&M.begin(R,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(N),N=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,N,Q),E=oe.get(T,x.length),E.init(N),E.state.textureUnits=q.getTextureUnits(),x.push(E),qe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ge.setFromProjectionMatrix(qe,ei,N.reversedDepth),dt=this.localClippingEnabled,je=Ce.init(this.clippingPlanes,dt),S=ue.get(T,A.length),S.init(),A.push(S),Me.enabled===!0&&Me.isPresenting===!0){let _e=R.xr.getDepthSensingMesh();_e!==null&&ou(_e,N,-1/0,R.sortObjects)}ou(T,N,0,R.sortObjects),S.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&S.sort(xe,De),St=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,St&&Oe.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Ce.beginShadows();let H=E.state.shadowsArray;if(Ie.render(H,T,N),je===!0&&Ce.endShadows(),(k&&M.hasRenderPass())===!1){let _e=S.opaque,de=S.transmissive;if(E.setupLights(),N.isArrayCamera){let ve=N.cameras;if(de.length>0)for(let Ee=0,Be=ve.length;Ee<Be;Ee++){let We=ve[Ee];bf(_e,de,T,We)}St&&Oe.render(T);for(let Ee=0,Be=ve.length;Ee<Be;Ee++){let We=ve[Ee];Sf(S,T,We,We.viewport)}}else de.length>0&&bf(_e,de,T,N),St&&Oe.render(T),Sf(S,T,N)}Q!==null&&V===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),k&&M.end(R),T.isScene===!0&&T.onAfterRender(R,T,N),pe.resetDefaultState(),Y=-1,J=null,x.pop(),x.length>0?(E=x[x.length-1],q.setTextureUnits(E.state.textureUnits),je===!0&&Ce.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,F!==null&&F.renderEnd()};function ou(T,N,X,k){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ge)){k&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qe);let _e=j.update(T),de=T.material;de.visible&&S.push(T,_e,de,X,Wt.z,null,N)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ge))){let _e=j.update(T),de=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Wt.copy(_e.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(qe)),Array.isArray(de)){let ve=_e.groups;for(let Ee=0,Be=ve.length;Ee<Be;Ee++){let We=ve[Ee],Se=de[We.materialIndex];Se&&Se.visible&&S.push(T,_e,Se,X,Wt.z,We,N)}}else de.visible&&S.push(T,_e,de,X,Wt.z,null,N)}}let fe=T.children;for(let _e=0,de=fe.length;_e<de;_e++)ou(fe[_e],N,X,k)}function Sf(T,N,X,k){let{opaque:H,transmissive:fe,transparent:_e}=T;E.setupLightsView(X),je===!0&&Ce.setGlobalState(R.clippingPlanes,X),k&&y.viewport(te.copy(k)),H.length>0&&Lo(H,N,X),fe.length>0&&Lo(fe,N,X),_e.length>0&&Lo(_e,N,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function bf(T,N,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Se=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new xn(1,1,{generateMipmaps:!0,type:Se?ai:bn,minFilter:fn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let fe=E.state.transmissionRenderTarget[k.id],_e=k.viewport||te;fe.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),ve=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(Ye),Fe=R.getClearAlpha(),Fe<1&&R.setClearColor(16777215,.5),R.clear(),St&&Oe.render(X);let Be=R.toneMapping;R.toneMapping=ri;let We=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),je===!0&&Ce.setGlobalState(R.clippingPlanes,k),Lo(T,X,k),q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let nt=0,Dt=N.length;nt<Dt;nt++){let mt=N[nt],{object:ot,geometry:Kt,material:me,group:an}=mt;if(me.side===Gn&&ot.layers.test(k.layers)){let Ke=me.side;me.side=dn,me.needsUpdate=!0,Mf(ot,X,k,Kt,me,an),me.side=Ke,me.needsUpdate=!0,Se=!0}}Se===!0&&(q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe))}R.setRenderTarget(de,ve,Ee),R.setClearColor(Ye,Fe),We!==void 0&&(k.viewport=We),R.toneMapping=Be}function Lo(T,N,X){let k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,fe=T.length;H<fe;H++){let _e=T[H],{object:de,geometry:ve,group:Ee}=_e,Be=_e.material;Be.allowOverride===!0&&k!==null&&(Be=k),de.layers.test(X.layers)&&Mf(de,N,X,ve,Be,Ee)}}function Mf(T,N,X,k,H,fe){F!==null&&H.isNodeMaterial&&F.setObject(T,H),T.onBeforeRender(R,N,X,k,H,fe),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(R,N,X,k,T,fe),H.transparent===!0&&H.side===Gn&&H.forceSinglePass===!1?(H.side=dn,H.needsUpdate=!0,R.renderBufferDirect(X,N,k,H,T,fe),H.side=mi,H.needsUpdate=!0,R.renderBufferDirect(X,N,k,H,T,fe),H.side=Gn):R.renderBufferDirect(X,N,k,H,T,fe),T.onAfterRender(R,N,X,k,H,fe)}function No(T,N,X){N.isScene!==!0&&(N=gn);let k=G.get(T),H=E.state.lights,fe=E.state.shadowsArray,_e=H.state.version,de=ae.getParameters(T,H.state,fe,N,X,E.state.lightProbeGridArray),ve=ae.getProgramCacheKey(de),Ee=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let Be=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=re.get(T.envMap||k.environment,Be),k.envMapRotation=k.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",oi),Ee=new Map,k.programs=Ee);let We=Ee.get(ve);if(We!==void 0){if(k.currentProgram===We&&k.lightsStateVersion===_e)return Ef(T,de),We}else de.uniforms=ae.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,X,de),T.onBeforeCompile(de,R),We=ae.acquireProgram(de,ve),Ee.set(ve,We),k.uniforms=de.uniforms;let Se=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=Ce.uniform),Ef(T,de),k.needsLights=C0(T),k.lightsStateVersion=_e,k.needsLights&&(Se.ambientLightColor.value=H.state.ambient,Se.lightProbe.value=H.state.probe,Se.sunLights.value=H.state.sun,Se.sunLightShadows.value=H.state.sunShadow,Se.directionalLights.value=H.state.directional,Se.directionalLightShadows.value=H.state.directionalShadow,Se.spotLights.value=H.state.spot,Se.spotLightShadows.value=H.state.spotShadow,Se.rectAreaLights.value=H.state.rectArea,Se.ltc_1.value=H.state.rectAreaLTC1,Se.ltc_2.value=H.state.rectAreaLTC2,Se.pointLights.value=H.state.point,Se.pointLightShadows.value=H.state.pointShadow,Se.hemisphereLights.value=H.state.hemi,Se.sunShadowMatrix.value=H.state.sunShadowMatrix,Se.sunShadowCascade.value=H.state.sunShadowCascade,Se.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Se.spotLightMatrix.value=H.state.spotLightMatrix,Se.spotLightMap.value=H.state.spotLightMap,Se.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=We,k.uniformsList=null,We}function Tf(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Ks.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Ef(T,N){let X=G.get(T);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function w0(T,N){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let X=0,k=T.length;X<k;X++){let H=T[X];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function A0(T,N,X,k,H){N.isScene!==!0&&(N=gn),q.resetTextureUnits();let fe=N.fog,_e=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,de=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ke.workingColorSpace,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ee=re.get(k.envMap||_e,ve),Be=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,Dt=!!X.morphAttributes.color,mt=ri;k.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(mt=R.toneMapping);let ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Kt=ot!==void 0?ot.length:0,me=G.get(k),an=E.state.lights;if(je===!0&&(dt===!0||T!==J)){let pt=T===J&&k.id===Y;Ce.setState(k,T,pt)}let Ke=!1;k.version===me.__version?(me.needsLights&&me.lightsStateVersion!==an.state.version||me.outputColorSpace!==de||H.isBatchedMesh&&me.batching===!1||!H.isBatchedMesh&&me.batching===!0||H.isBatchedMesh&&me.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&me.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&me.instancing===!1||!H.isInstancedMesh&&me.instancing===!0||H.isSkinnedMesh&&me.skinning===!1||!H.isSkinnedMesh&&me.skinning===!0||H.isInstancedMesh&&me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&me.instancingMorph===!1&&H.morphTexture!==null||me.envMap!==Ee||k.fog===!0&&me.fog!==fe||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ce.numPlanes||me.numIntersection!==Ce.numIntersection)||me.vertexAlphas!==Be||me.vertexTangents!==We||me.morphTargets!==Se||me.morphNormals!==nt||me.morphColors!==Dt||me.toneMapping!==mt||me.morphTargetsCount!==Kt||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,me.__version=k.version);let zn=me.currentProgram;Ke===!0&&(zn=No(k,N,H),F&&k.isNodeMaterial&&F.onUpdateProgram(k,zn,me));let li=!1,Zi=!1,as=!1,at=zn.getUniforms(),Rt=me.uniforms;if(y.useProgram(zn.program)&&(li=!0,Zi=!0,as=!0),k.id!==Y&&(Y=k.id,Zi=!0),me.needsLights){let pt=w0(E.state.lightProbeGridArray,H);me.lightProbeGrid!==pt&&(me.lightProbeGrid=pt,Zi=!0)}if(li||J!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),at.setValue(U,"projectionMatrix",T.projectionMatrix),at.setValue(U,"viewMatrix",T.matrixWorldInverse);let Ki=at.map.cameraPosition;Ki!==void 0&&Ki.setValue(U,xt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&at.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Zi=!0,as=!0)}if(me.needsLights&&(an.state.sunShadowMap.length>0&&at.setValue(U,"sunShadowMap",an.state.sunShadowMap,q),an.state.directionalShadowMap.length>0&&at.setValue(U,"directionalShadowMap",an.state.directionalShadowMap,q),an.state.spotShadowMap.length>0&&at.setValue(U,"spotShadowMap",an.state.spotShadowMap,q),an.state.pointShadowMap.length>0&&at.setValue(U,"pointShadowMap",an.state.pointShadowMap,q)),H.isSkinnedMesh){at.setOptional(U,H,"bindMatrix"),at.setOptional(U,H,"bindMatrixInverse");let pt=H.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),at.setValue(U,"boneTexture",pt.boneTexture,q))}H.isBatchedMesh&&(at.setOptional(U,H,"batchingTexture"),at.setValue(U,"batchingTexture",H._matricesTexture,q),at.setOptional(U,H,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",H._indirectTexture,q),at.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",H._colorsTexture,q));let $i=X.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&D.update(H,X,zn),(Zi||me.receiveShadow!==H.receiveShadow)&&(me.receiveShadow=H.receiveShadow,at.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Rt.envMapIntensity.value=N.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=Eb()),Zi){if(at.setValue(U,"toneMappingExposure",R.toneMappingExposure),me.needsLights&&R0(Rt,as),fe&&k.fog===!0&&Re.refreshFogUniforms(Rt,fe),Re.refreshMaterialUniforms(Rt,k,ee,Z,E.state.transmissionRenderTarget[T.id]),me.needsLights&&me.lightProbeGrid){let pt=me.lightProbeGrid;Rt.probesSH.value=pt.texture,Rt.probesMin.value.copy(pt.boundingBox.min),Rt.probesMax.value.copy(pt.boundingBox.max),Rt.probesResolution.value.copy(pt.resolution)}Ks.upload(U,Tf(me),Rt,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ks.upload(U,Tf(me),Rt,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&at.setValue(U,"center",H.center),at.setValue(U,"modelViewMatrix",H.modelViewMatrix),at.setValue(U,"normalMatrix",H.normalMatrix),at.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let pt=k.uniformsGroups;for(let Ki=0,os=pt.length;Ki<os;Ki++){let Af=pt[Ki];ne.update(Af,zn),ne.bind(Af,zn)}}return zn}function R0(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function C0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,N,X){let k=G.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(T.texture).__webglTexture=N,G.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let X=G.get(T);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,X=0){Q=T,W=N,V=X;let k=null,H=!1,fe=!1;if(T){let de=G.get(T);if(de.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),te.copy(T.viewport),be.copy(T.scissor),Te=T.scissorTest,y.viewport(te),y.scissor(be),y.setScissorTest(Te),Y=-1;return}else if(de.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(de.__hasExternalTextures)q.rebindTextures(T,G.get(T.texture).__webglTexture,G.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Be=T.depthTexture;if(de.__boundDepthTexture!==Be){if(Be!==null&&G.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}let ve=T.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Ee=G.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?k=Ee[N][X]:k=Ee[N],H=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?k=G.get(T).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[X]:k=Ee,te.copy(T.viewport),be.copy(T.scissor),Te=T.scissorTest}else te.copy(ge).multiplyScalar(ee).floor(),be.copy(He).multiplyScalar(ee).floor(),Te=Bt;if(X!==0&&(k=O),y.bindFramebuffer(U.FRAMEBUFFER,k)&&y.drawBuffers(T,k),y.viewport(te),y.scissor(be),y.setScissorTest(Te),H){let de=G.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,X)}else if(fe){let de=N;for(let ve=0;ve<T.textures.length;ve++){let Ee=G.get(T.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,X,de)}}else if(T!==null&&X!==0){let de=G.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,X)}Y=-1};function wf(T){let N=G.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=C.textureFormatReadable(T.format),N.__typeReadable=C.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,X,k,H,fe,_e,de=0){if(!(T&&T.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){y.bindFramebuffer(U.FRAMEBUFFER,ve);try{let Ee=T.textures[de],Be=Ee.format,We=Ee.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let Se=wf(Ee);if(Se.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-k&&X>=0&&X<=T.height-H&&U.readPixels(N,X,k,H,ce.convert(Be),ce.convert(We),fe)}finally{let Ee=Q!==null?G.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,N,X,k,H,fe,_e,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(N>=0&&N<=T.width-k&&X>=0&&X<=T.height-H){y.bindFramebuffer(U.FRAMEBUFFER,ve);let Ee=T.textures[de],Be=Ee.format,We=Ee.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let Se=wf(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,nt),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(N,X,k,H,ce.convert(Be),ce.convert(We),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Dt=Q!==null?G.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Dt);let mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zp(U,mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(nt),U.deleteSync(mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,X=0){let k=Math.pow(2,-X),H=Math.floor(T.image.width*k),fe=Math.floor(T.image.height*k),_e=N!==null?N.x:0,de=N!==null?N.y:0;q.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,_e,de,H,fe),y.unbindTexture()},this.copyTextureToTexture=function(T,N,X=null,k=null,H=0,fe=0){let _e,de,ve,Ee,Be,We,Se,nt,Dt,mt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(X!==null)_e=X.max.x-X.min.x,de=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Be=X.min.y,We=X.isBox3?X.min.z:0;else{let Rt=Math.pow(2,-H);_e=Math.floor(mt.width*Rt),de=Math.floor(mt.height*Rt),T.isDataArrayTexture?ve=mt.depth:T.isData3DTexture?ve=Math.floor(mt.depth*Rt):ve=1,Ee=0,Be=0,We=0}k!==null?(Se=k.x,nt=k.y,Dt=k.z):(Se=0,nt=0,Dt=0);let ot=ce.convert(N.format),Kt=ce.convert(N.type),me;N.isData3DTexture?(q.setTexture3D(N,0),me=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),me=U.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),me=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let an=y.getParameter(U.UNPACK_ROW_LENGTH),Ke=y.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=y.getParameter(U.UNPACK_SKIP_PIXELS),li=y.getParameter(U.UNPACK_SKIP_ROWS),Zi=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),y.pixelStorei(U.UNPACK_SKIP_ROWS,Be),y.pixelStorei(U.UNPACK_SKIP_IMAGES,We);let as=T.isDataArrayTexture||T.isData3DTexture,at=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let Rt=G.get(T),$i=G.get(N),pt=G.get(Rt.__renderTarget),Ki=G.get($i.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,pt.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let os=0;os<ve;os++)as&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(T).__webglTexture,H,We+os),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(N).__webglTexture,fe,Dt+os)),U.blitFramebuffer(Ee,Be,_e,de,Se,nt,_e,de,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||G.has(T)){let Rt=G.get(T),$i=G.get(N);y.bindFramebuffer(U.READ_FRAMEBUFFER,I),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let pt=0;pt<ve;pt++)as?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.__webglTexture,H,We+pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,H),at?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$i.__webglTexture,fe,Dt+pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$i.__webglTexture,fe),H!==0?U.blitFramebuffer(Ee,Be,_e,de,Se,nt,_e,de,U.COLOR_BUFFER_BIT,U.NEAREST):at?U.copyTexSubImage3D(me,fe,Se,nt,Dt+pt,Ee,Be,_e,de):U.copyTexSubImage2D(me,fe,Se,nt,Ee,Be,_e,de);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(me,fe,Se,nt,Dt,_e,de,ve,ot,Kt,mt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(me,fe,Se,nt,Dt,_e,de,ve,ot,mt.data):U.texSubImage3D(me,fe,Se,nt,Dt,_e,de,ve,ot,Kt,mt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,Se,nt,_e,de,ot,Kt,mt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,Se,nt,mt.width,mt.height,ot,mt.data):U.texSubImage2D(U.TEXTURE_2D,fe,Se,nt,_e,de,ot,Kt,mt);y.pixelStorei(U.UNPACK_ROW_LENGTH,an),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),y.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),y.pixelStorei(U.UNPACK_SKIP_ROWS,li),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Zi),fe===0&&N.generateMipmaps&&U.generateMipmap(me),y.unbindTexture()},this.initRenderTarget=function(T){G.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){W=0,V=0,Q=null,y.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};function Dh(s,e){if(e===ah)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qs||e===so){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===qs)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Cm(s){let e=new Map,t=new Map,n=s.clone();return Pm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Pm(s.children[n],e.children[n],t)}var uo=class extends pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Dc(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Dc(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ed(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Hi.extractUrlBase(e);a=Hi.resolveURL(c,this.path)}else a=Hi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new zs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Um){try{a[Ve.KHR_BINARY_GLTF]=new td(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ld(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:a[h]=new zh;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[h]=new nd(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[h]=new id;break;case Ve.KHR_MESH_QUANTIZATION:a[h]=new rd;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Ab(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Pt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bh=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],un);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ii(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zr(u),c.distance=h;break;case"spot":c=new Xa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},zh=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){let i=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],un),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}},kh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(r,r)}return Promise.all(i)}},Vh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Wh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Et)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Xh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Yh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(r[0],r[1],r[2],un),Promise.all(i)}},qh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(r[0],r[1],r[2],un),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Et)),Promise.all(i)}},$h=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Kh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Jh=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},jh=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Qh=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Dc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},ed=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let m of h){let _=new Ue,p=new L,g=new hn,b=new L(1,1,1),w=new Oa(m.geometry,m.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),w.setMatrixAt(S,_.compose(p,g,b));let v=null;for(let S in l)if(S==="_COLOR_0"){let E=l[S];w.instanceColor=new Ui(E.array,E.itemSize,E.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let A=w.geometry;v=new Ot,v.name=A.name;for(let x in A.attributes)v.setAttribute(x,A.attributes[x]);for(let x in A.morphAttributes)v.morphAttributes[x]=A.morphAttributes[x];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let x of A.groups)v.addGroup(x.start,x.count,x.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),w.geometry=v}let E=l[S];v.setAttribute(S,new Ui(E.array,E.itemSize,E.normalized))}_t.prototype.copy.call(w,m),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Um="glTF",co=12,Im={JSON:1313821514,BIN:5130562},td=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-co,r=new DataView(e,co),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Im.JSON){let c=new Uint8Array(e,co+a,o);this.content=n.decode(c)}else if(l===Im.BIN){let c=co+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=ad[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=ad[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Qs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let m in f.attributes){let _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}h(f)},o,c,un,d)})})}},id=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},rd=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},Uc=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,_=m-c,p=-2*f+3*d,g=f-d,b=1-p,w=g-d+h;for(let v=0;v!==o;v++){let S=a[_+v+o],E=a[_+v+l]*u,A=a[m+v+o],x=a[m+v]*u;r[v]=b*S+w*E+p*A+g*x}return r}},Rb=new hn,sd=class extends Uc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Rb.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lm={9728:Ct,9729:ct,9984:Hl,9985:Ws,9986:Wr,9987:fn},Nm={33071:ln,33648:Rs,10497:ni},Uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cb={CUBICSPLINE:void 0,LINEAR:Cr,STEP:Rr},Fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Pb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),s.DefaultMaterial}function qr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ib(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Lb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nb(s){let e,t=s.extensions&&s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oh(t.attributes):e=s.indices+":"+Oh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Oh(s.targets[n]);return e}function Oh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function od(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Db(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ub=new Ue,ld=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ab,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Or(this.options.manager):this.textureLoader=new Ya(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return qr(r,o,i),yi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Hi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Uh[i.type],o=Qs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new gt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Uh[i.type],c=Qs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,p;if(f&&f!==h){let g=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,w=t.cache.get(b);w||(_=new c(o,g*f,i.count*f/u),w=new Ir(_,f/u),t.cache.add(b,w)),p=new rr(w,l,d%f/u,m)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),p=new gt(_,l,m);if(i.sparse!==void 0){let g=Uh.SCALAR,b=Qs[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new b(a[1],w,i.sparse.count*g),E=new c(a[2],v,i.sparse.count*l);o!==null&&(p=new gt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,x=S.length;A<x;A++){let M=S[A];if(p.setX(M,E[A*l]),l>=2&&p.setY(M,E[A*l+1]),l>=3&&p.setZ(M,E[A*l+2]),l>=4&&p.setW(M,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Lm[d.magFilter]||ct,u.minFilter=Lm[d.minFilter]||fn,u.wrapS=Nm[d.wrapS]||ni,u.wrapT=Nm[d.wrapT]||ni,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ct&&u.minFilter!==ct,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let p=new zt(_);p.needsUpdate=!0,d(p)}),t.load(Hi.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),yi(h,a),h.userData.mimeType=a.mimeType||Db(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Os,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new sr,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Fi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){let h=i[Ve.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],un),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Et)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gn);let u=r.alphaMode||Fh.OPAQUE;if(u===Fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Fh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Nn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nn){let h=r.emissiveFactor;o.emissive=new ye().setRGB(h[0],h[1],h[2],un)}return r.emissiveTexture!==void 0&&a!==Nn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&qr(i,h,r),h})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Dm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Nb(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Dm(new Ot,c,t),c.mode===Wn.TRIANGLE_STRIP?d=d.then(f=>Dh(f,so)):c.mode===Wn.TRIANGLE_FAN&&(d=d.then(f=>Dh(f,qs))),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Pb(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let _=u[f],p=a[f],g,b=c[f];if(p.mode===Wn.TRIANGLES||p.mode===Wn.TRIANGLE_STRIP||p.mode===Wn.TRIANGLE_FAN||p.mode===void 0){let w=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&v?new Ua(_,b):new yt(_,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Wn.LINES)g=new Ba(_,b);else if(p.mode===Wn.LINE_STRIP)g=new Nr(_,b);else if(p.mode===Wn.LINE_LOOP)g=new Dr(_,b);else if(p.mode===Wn.POINTS)g=new Ur(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Lb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),yi(g,r),p.extensions&&qr(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&qr(i,h[0],r),h[0];let d=new _n;r.extensions&&qr(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Qe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ue;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fa(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let w=0,v=d.length;w<v;w++){let S=d[w],E=f[w],A=m[w],x=_[w],M=p[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,E,A,x,M);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let b=new Ga(r,void 0,g);return yi(b,i),b})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ub)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new L().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Us:c.length>1?u=new _n:c.length===1?u=c[0]:u=new _t,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),yi(u,r),r.extensions&&qr(n,u,r),r.matrix!==void 0){let h=new Ue;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new _n;n.name&&(r.name=i.createUniqueName(n.name)),yi(r,n),n.extensions&&qr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(Cm(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof Qt||d instanceof zt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}dr[r.path]===dr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(dr[r.path]){case dr.weights:u=Bi;break;case dr.rotation:u=zi;break;case dr.translation:case dr.scale:u=or;break;default:n.itemSize===1?u=Bi:u=or;break}let h=i.interpolation!==void 0?Cb[i.interpolation]:Cr,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let _=new u(l[f]+"."+dr[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=od(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof zi?sd:Uc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fb(s,e,t){let n=e.attributes,i=new Ln;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let u=od(Qs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=od(Qs[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new yn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Dm(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=ad[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ke.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),yi(s,e),Fb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ib(s,e.targets,t):s})}function Vi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Wm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_o={duration:.5,overwrite:!1,delay:0},wd,qt,vt,Yn=1e8,ht=1/Yn,gd=Math.PI*2,Ob=gd/4,Bb=0,Xm=Math.sqrt,zb=Math.cos,kb=Math.sin,Gt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},Wi=function(e){return typeof e=="number"},Xc=function(e){return typeof e>"u"},bi=function(e){return typeof e=="object"},wn=function(e){return e!==!1},Ad=function(){return typeof window<"u"},Fc=function(e){return wt(e)||Gt(e)},Ym=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,Hb=/random\([^)]+\)/g,Vb=/,\s*/g,Fm=/(?:-?\.?\d|\.)+/gi,Rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cd=/[+-]=-?[.\d]+/,Gb=/[^,'"\[\]\s]+/gi,Wb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,vi,_d,Pd,Fn={},kc={},qm,Zm=function(e){return(kc=ta(e,Fn))&&sn},Yc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xo=function(e,t){return!t&&console.warn(e)},$m=function(e,t){return e&&(Fn[e]=t)&&kc&&(kc[e]=t)||Fn},yo=function(){return 0},Xb={suppressEvents:!0,isStart:!0,kill:!1},Oc={suppressEvents:!0,kill:!1},Yb={suppressEvents:!0},Id={},pr=[],xd={},Km,Tn={},ud={},Om=30,Bc=[],Ld="",Nd=function(e){var t=e[0],n,i;if(bi(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Bc.length;i--&&!Bc[i].targetTest(t););n=Bc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Od(e[i],n)))||e.splice(i,1);return e},mr=function(e){return e._gsap||Nd(qn(e))[0]._gsap},Dd=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():Xc(n)&&e.getAttribute&&e.getAttribute(t)||n},pn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},jr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},qb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Hc=function(){var e=pr.length,t=pr.slice(0),n,i;for(xd={},pr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ud=function(e){return!!(e._initted||e._startAt||e.add)},Jm=function(e,t,n,i){pr.length&&!qt&&Hc(),e.render(t,n,i||!!(qt&&t<0&&Ud(e))),pr.length&&!qt&&Hc()},jm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Gb).length<2?t:Gt(e)?e.trim():e},Qm=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ta=function(e,t){for(var n in t)e[n]=t[n];return e},Bm=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=bi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Vc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},po=function(e){var t=e.parent||Mt,n=e.keyframes?Zb(rn(e.keyframes)):On;if(wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$b=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},eg=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},qc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},gr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Kb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yd=function(e,t,n,i){return e._startAt&&(qt?e._startAt.revert(Oc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Jb=function s(e){return!e||e._ts&&s(e.parent)},zm=function(e){return e._repeat?na(e._tTime,e=e.duration()+e._rDelay)*e:0},na=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},Gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Zc=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},$c=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Zc(e),n._dirty||Zr(n,e)),e},tg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Gc(e.rawTime(),t),(!t._dur||bo(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),Zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},Si=function(e,t,n,i){return t.parent&&gr(t),t._start=bt((Wi(n)?n:n||e!==Mt?Xn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),eg(e,t,"_first","_last",e._sort?"_start":0),vd(t)||(e._recent=t),i||tg(e,t),e._ts<0&&$c(e,e._tTime),e},ng=function(e,t){return(Fn.ScrollTrigger||Yc("scrollTrigger",t))&&Fn.ScrollTrigger.create(t,e)},ig=function(e,t,n,i,r){if(kd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Km!==En.frame)return pr.push(e),e._lazy=[r,i],1},jb=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},vd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Qb=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&jb(e)&&!(!e._initted&&vd(e))||(e._ts<0||e._dp._ts<0)&&!vd(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=bo(0,e._tDur,t),u=na(l,o),e._yoyo&&u&1&&(a=1-a),u!==na(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||qt||i||e._zTime===ht||!t&&e._zTime){if(!e._initted&&ig(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&yd(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&gr(e,1),!n&&!qt&&(Un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},eM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ia=function(e,t,n,i){var r=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:bt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&$c(e,e._tTime=e._tDur*o),e.parent&&Zc(e),n||Zr(e.parent,e),e},km=function(e){return e instanceof nn?Zr(e):ia(e,e._dur)},tM={_start:0,endTime:yo,totalDuration:yo},Xn=function s(e,t,n){var i=e.labels,r=e._recent||tM,a=e.duration()>=Yn?r.endTime(!1):e._dur,o,l,c;return Gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},mo=function(e,t,n){var i=Wi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;a.immediateRender=wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new It(t[0],a,t[r+1])},_r=function(e,t){return e||e===0?t(e):t},bo=function(e,t,n){return n<e?e:n>t?t:n},Zt=function(e,t){return!Gt(e)||!(t=Wb.exec(e))?"":t[1]},nM=function(e,t,n){return _r(n,function(i){return bo(e,t,i)})},Sd=[].slice,rg=function(e,t){return e&&bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bi(e[0]))&&!e.nodeType&&e!==vi},iM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Gt(i)&&!t||rg(i,1)?(r=n).push.apply(r,qn(i)):n.push(i)})||n},qn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Gt(e)&&!n&&(_d||!ra())?Sd.call((t||Pd).querySelectorAll(e),0):rn(e)?iM(e,n):rg(e)?Sd.call(e,0):e?[e]:[]},bd=function(e){return e=qn(e)[0]||xo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return qn(t,n.querySelectorAll?n:n===e?xo("Invalid scope")||Pd.createElement("div"):e)}},sg=function(e){return e.sort(function(){return .5-Math.random()})},ag=function(e){if(wt(e))return e;var t=bi(e)?e:{each:e},n=$r(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Gt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,m){var _=(m||t).length,p=a[_],g,b,w,v,S,E,A,x,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Yn])[1],!M){for(A=-Yn;A<(A=m[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=a[_]=[],g=l?Math.min(M,_)*u-.5:i%M,b=M===Yn?0:l?_*h/M-.5:i/M|0,A=0,x=Yn,E=0;E<_;E++)w=E%M-g,v=b-(E/M|0),p[E]=S=c?Math.abs(c==="y"?v:w):Xm(w*w+v*v),S>A&&(A=S),S<x&&(x=S);i==="random"&&sg(p),p.max=A-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=Zt(t.amount||t.each)||0,n=n&&_<0?gM(n):n}return _=(p[d]-p.min)/p.max||0,bt(p.b+(n?n(_):_)*p.v)+p.u}},Md=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wi(n)?0:Zt(n))}},og=function(e,t){var n=rn(e),i,r;return!n&&bi(e)&&(i=n=e.radius||Yn,e.values?(e=qn(e.values),(r=!Wi(e[0]))&&(i*=i)):e=Md(e.increment)),_r(t,n?wt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Yn,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,r||u===a||Wi(a)?u:u+Zt(a)}:Md(e))},lg=function(e,t,n,i){return _r(rn(e)?!t:n===!0?!!(n=0):!i,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},rM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},sM=function(e,t){return function(n){return e(parseFloat(n))+(t||Zt(n))}},aM=function(e,t,n){return ug(e,t,0,1,n)},cg=function(e,t,n){return _r(n,function(i){return e[~~t(i)]})},oM=function s(e,t,n){var i=t-e;return rn(e)?cg(e,s(0,e.length),t):_r(n,function(r){return(i+(r-e)%i)%i+e})},lM=function s(e,t,n){var i=t-e,r=i*2;return rn(e)?cg(e,s(0,e.length-1),t):_r(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},sa=function(e){return e.replace(Hb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Vb);return lg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ug=function(e,t,n,i,r){var a=t-e,o=i-n;return _r(r,function(l){return n+((l-e)/a*o||0)})},cM=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Gt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(m){m*=h;var _=Math.min(d,~~m);return u[_](m-_)},n=t}else i||(e=ta(rn(e)?[]:{},e));if(!u){for(l in t)Bd.call(o,e,l,"get",t[l]);r=function(m){return Gd(m,o)||(a?e.p:e)}}}return _r(n,r)},Hm=function(e,t,n){var i=e.labels,r=Yn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Un=function(e,t,n){var i=e.vars,r=i[t],a=vt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&pr.length&&Hc(),o&&(vt=o),u=l?r.apply(c,l):r.call(c),vt=a,u},ho=function(e){return gr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Un(e,"onInterrupt"),e},ea,hg=[],dg=function(e){if(e)if(e=!e.name&&e.default||e,Ad()||e.headless){var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:yo,render:Gd,add:Bd,kill:wM,modifier:EM,rawVars:0},a={targetTest:0,get:0,getSetter:Kc,aliases:{},register:0};if(ra(),e!==i){if(Tn[t])return;On(i,On(Vc(e,r),a)),ta(i.prototype,ta(r,Vc(e,a))),Tn[i.prop=t]=i,e.targetTest&&(Bc.push(i),Id[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$m(t,i),e.register&&e.register(sn,i,mn)}else hg.push(e)},ut=255,fo={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},hd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},fg=function(e,t,n){var i=e?Wi(e)?[e>>16,e>>8&ut,e&ut]:0:fo.black,r,a,o,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fo[e])i=fo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Fm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=hd(l+1/3,r,a),i[1]=hd(l,r,a),i[2]=hd(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Rd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Fm)||fo.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/ut,a=i[1]/ut,o=i[2]/ut,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(a-o)/f+(a<o?6:0):h===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},pg=function(e){var t=[],n=[],i=-1;return e.split(Gi).forEach(function(r){var a=r.match(Jr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Vm=function(e,t,n){var i="",r=(e+i).match(Gi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=fg(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=pg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gi,"1").split(Jr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Gi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Gi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fo)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),uM=/hsl[a]?\(/,Fd=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=uM.test(t),e[1]=Vm(e[1],n),e[0]=Vm(e[0],n,pg(e[1])),!0},vo,En=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,d,f,m=function _(p){var g=s()-i,b=p===!0,w,v,S,E;if((g>e||g<0)&&(n+=g-t),i+=g,S=i-n,w=S-a,(w>0||b)&&(E=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,a+=w+(w>=r?4:r-w),v=1),b||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](S,d,E,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){qm&&(!_d&&Ad()&&(vi=_d=window,Pd=vi.document||{},Fn.gsap=sn,(vi.gsapVersions||(vi.gsapVersions=[])).push(sn.version),Zm(kc||vi.GreenSockGlobals||!vi.gsap&&vi||{}),hg.forEach(dg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},vo=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vo=0,c=yo},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,g,b){var w=g?function(v,S,E,A){p(v,S,E,A),h.remove(w)}:p;return h.remove(p),o[b?"unshift":"push"](w),ra(),w},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},h})(),ra=function(){return!vo&&En.wake()},$e={},hM=/^[\d.\-M][\d.\-,\s]/,dM=/["']/g,fM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(dM,"").trim():+c,i=l.substr(o+1).trim();return t},pM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},mM=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[fM(t[1])]:pM(e).split(",").map(jm)):$e._CE&&hM.test(e)?$e._CE("",e):n},gM=function(e){return function(t){return 1-e(1-t)}},$r=function(e,t){return e&&(wt(e)?e:$e[e]||mM(e))||t},Qr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return pn(e,function(o){$e[o]=Fn[o]=r,$e[a=o.toLowerCase()]=n;for(var l in r)$e[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[o+"."+l]=r[l]}),r},mg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},dd=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/gd*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*kb((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:mg(o);return r=gd/r,l.config=function(c,u){return s(e,c,u)},l},fd=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:mg(n);return i.config=function(r){return s(e,r)},i};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Qr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Qr("Elastic",dd("in"),dd("out"),dd());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Qr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Qr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Qr("Circ",function(s){return-(Xm(1-s*s)-1)});Qr("Sine",function(s){return s===1?1:-zb(s*Ob)+1});Qr("Back",fd("in"),fd("out"),fd());$e.SteppedEase=$e.steps=Fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ht;return function(o){return((i*bo(0,a,o)|0)+r)*n}}};_o.ease=$e["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ld+=s+","+s+"Params,"});var Od=function(e,t){this.id=Bb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Dd,this.set=t?t.getSetter:Kc},So=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ia(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),vo||En.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ra(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for($c(this,n),!r._dp||r.parent||tg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?na(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Zc(this),Kb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=bt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Yb);var i=qt;return qt=n,Ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,km(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,km(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Xn(this,n),wn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,wn(i)),this._dur||(this._zTime=-ht),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ht)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=wt(n)?n:Qm,l=function(){var u=i.then;i.then=null,r&&r(),wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ho(this)},s})();On(So.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var nn=(function(s){Wm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=wn(n.sortChildren),Mt&&Si(n.parent||Mt,Vi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ng(Vi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return mo(0,arguments,this),this},t.from=function(i,r,a){return mo(1,arguments,this),this},t.fromTo=function(i,r,a,o){return mo(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,po(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new It(i,r,Xn(this,a),1),this},t.call=function(i,r,a){return Si(this,It.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new It(i,a,Xn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,po(a).immediateRender=wn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,po(o).immediateRender=wn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,p,g,b,w,v,S,E,A;if(this!==Mt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,w=this._ts,g=!w,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=bt(u%p),u===l?(_=this._repeat,d=c):(S=bt(u/p),_=~~S,_&&_===S&&(d=c,_--),d>c&&(d=c)),S=na(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),E&&_&1&&(d=c-d,A=1),_!==S&&!this._lock){var x=E&&S&1,M=x===(E&&_&1);if(_<S&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:bt(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=eM(this,bt(o),bt(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!r&&!S&&(Un(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!g){b=0,m&&(u+=this._zTime=-ht);break}}f=m}else{f=this._last;for(var R=i<0?i:d;f;){if(m=f._prev,(f._act||R<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,r,a||qt&&Ud(f)),d!==this._time||!this._ts&&!g){b=0,m&&(u+=this._zTime=R?-ht:ht);break}}f=m}}if(b&&!r&&(this.pause(),b.render(d>=o?0:-ht)._zTime=d>=o?1:-1,this._ts))return this._start=v,Zc(this),this.render(i,r,a);this._onUpdate&&!r&&Un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Wi(r)||(r=Xn(this,r,i)),!(i instanceof So)){if(rn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Gt(i))return this.addLabel(i,r);if(wt(i))i=It.delayedCall(0,i);else return this}return this!==i?Si(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Yn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof It?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Gt(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(i.parent===this&&qc(this,i),i===this._recent&&(this._recent=this._last),Zr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(En.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Xn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=It.delayedCall(0,r||yo,a);return o.data="isPause",this._hasPause=1,Si(this,o,Xn(this,i))},t.removePause=function(i){var r=this._first;for(i=Xn(this,i);r;)r._start===i&&r.data==="isPause"&&gr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)fr!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=qn(i),l=this._first,c=Wi(r),u;l;)l instanceof It?qb(l._targets,o)&&(c?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Xn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=It.to(a,On({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ht,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&ia(m,p,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},r));return d?m.render(0):m},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,On({startAt:{time:Xn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Hm(this,Xn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Hm(this,Xn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=bt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Zr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Yn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Si(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=bt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ia(a,a===Mt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Mt._ts&&(Jm(Mt,Gc(i,Mt)),Km=En.frame),En.frame>=Om){Om+=An.autoSleep||120;var r=Mt._first;if((!r||!r._ts)&&An.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},e})(So);On(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var _M=function(e,t,n,i,r,a,o){var l=new mn(this._pt,e,t,0,1,Vd,null,r),c=0,u=0,h,d,f,m,_,p,g,b;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=sa(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(cd)||[];h=cd.exec(i);)m=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?jr(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=cd.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cd.test(i)||g)&&(l.e=0),this._pt=l,l},Bd=function(e,t,n,i,r,a,o,l,c,u){wt(i)&&(i=i(r||0,e,a));var h=e[t],d=n!=="get"?n:wt(h)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=wt(h)?c?bM:xg:Hd,m;if(Gt(i)&&(~i.indexOf("random(")&&(i=sa(i)),i.charAt(1)==="="&&(m=jr(d,i)+(Zt(d)||0),(m||m===0)&&(i=m))),!u||d!==i||Td)return!isNaN(d*i)&&i!==""?(m=new mn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?TM:yg,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&Yc(t,i),_M.call(this,e,t,d,i,f,l||An.stringFilter,c))},xM=function(e,t,n,i,r){if(wt(e)&&(e=go(e,r,t,n,i)),!bi(e)||e.style&&e.nodeType||rn(e)||Ym(e))return Gt(e)?go(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=go(e[o],r,t,n,i);return a},zd=function(e,t,n,i,r,a){var o,l,c,u;if(Tn[e]&&(o=new Tn[e]).init(r,o.rawVars?t[e]:xM(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new mn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ea))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},fr,Td,kd=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:p,w=e._overwrite==="auto"&&!wd,v=e.timeline,S=i.easeReverse||h,E,A,x,M,R,P,F,O,I,B,W,V,Q;if(v&&(!d||!r)&&(r="none"),e._ease=$r(r,_o.ease),e._rEase=S&&($r(S)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(O=p[0]?mr(p[0]).harness:0,V=O&&i[O.prop],E=Vc(i,Id),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&m?Oc:Xb),_._lazy=0),a){if(gr(e._startAt=It.set(p,On({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&wn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!o&&!f)&&e._startAt.revert(Oc),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(o=!1),x=On({overwrite:!1,data:"isFromStart",lazy:o&&!_&&wn(l),immediateRender:o,stagger:0,parent:g},E),V&&(x[O.prop]=V),gr(e._startAt=It.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(Oc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&wn(l)||l&&!m,A=0;A<p.length;A++){if(R=p[A],F=R._gsap||Nd(p)[A]._gsap,e._ptLookup[A]=B={},xd[F.id]&&pr.length&&Hc(),W=b===p?A:b.indexOf(R),O&&(I=new O).init(R,V||E,e,W,b)!==!1&&(e._pt=M=new mn(e._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Y){B[Y]=M}),I.priority&&(P=1)),!O||V)for(x in E)Tn[x]&&(I=zd(x,E,e,W,R,b))?I.priority&&(P=1):B[x]=M=Bd.call(e,R,x,"get",E[x],W,b,0,i.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),w&&e._pt&&(fr=e,Mt.killTweensOf(R,B,e.globalTime(t)),Q=!e.parent,fr=0),e._pt&&l&&(xd[F.id]=1)}P&&Wd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,d&&t<=0&&v.render(Yn,!0,!0)},yM=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Td=1,e.vars[t]="+=0",kd(e,o),Td=0,l?xo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=At(n)+Zt(h.e)),h.b&&(h.b=u.s+Zt(h.b))},vM=function(e,t){var n=e[0]?mr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=ta({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},SM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},go=function(e,t,n,i,r){return wt(e)?e.call(t,n,i,r):Gt(e)&&~e.indexOf("random(")?sa(e):e},gg=Ld+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_g={};pn(gg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return _g[s]=1});var It=(function(s){Wm(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:po(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Mt,b=(rn(n)||Ym(n)?Wi(n[0]):"length"in i)?[n]:qn(n),w,v,S,E,A,x,M,R;if(o._targets=b.length?Nd(b):xo("GSAP target "+n+" not found. https://gsap.com",!An.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||d||Fc(c)||Fc(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(w=o.timeline=new nn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),w.kill(),w.parent=w._dp=Vi(o),w._start=0,d||Fc(c)||Fc(u)){if(E=b.length,M=d&&ag(d),bi(d))for(A in d)~gg.indexOf(A)&&(R||(R={}),R[A]=d[A]);for(v=0;v<E;v++)S=Vc(i,_g),S.stagger=0,P&&(S.easeReverse=P),R&&ta(S,R),x=b[v],S.duration=+go(c,Vi(o),v,x,b),S.delay=(+go(u,Vi(o),v,x,b)||0)-o._delay,!d&&E===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),w.to(x,S,M?M(v,x,b):0),w._ease=$e.none;w.duration()?c=u=0:o.timeline=0}else if(m){po(On(w.vars.defaults,{ease:"none"})),w._ease=$r(m.ease||i.ease||"none");var F=0,O,I,B;if(rn(m))m.forEach(function(W){return w.to(b,W,">")}),w.duration();else{S={};for(A in m)A==="ease"||A==="easeEach"||SM(A,m[A],S,m.easeEach);for(A in S)for(O=S[A].sort(function(W,V){return W.t-V.t}),F=0,v=0;v<O.length;v++)I=O[v],B={ease:I.e,duration:(I.t-(v?O[v-1].t:0))/100*c},B[A]=I.v,w.to(b,B,F),F+=B.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return f===!0&&!wd&&(fr=Vi(o),Mt.killTweensOf(b),fr=0),Si(g,Vi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!m&&o._start===bt(g._time)&&wn(h)&&Jb(Vi(o))&&g.data!=="nested")&&(o._tTime=-ht,o.render(Math.max(0,-u)||0)),p&&ng(Vi(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ht&&!u?l:i<ht?0:i,d,f,m,_,p,g,b,w;if(!c)Qb(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,a);if(d=bt(h%_),h===l?(m=this._repeat,d=c):(p=bt(h/_),m=~~p,m&&m===p?(d=c,m--):d>c&&(d=c)),g=this._yoyo&&m&1,g&&(d=c-d),p=na(this._tTime,_),d===o&&!a&&this._initted&&m===p)return this._tTime=h,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(bt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(ig(this,u?i:d,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var S=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!r&&!p&&(Un(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;w&&w.render(i<0?i:w._dur*w._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&yd(this,i,r,a),Un(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&Un(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&yd(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&gr(this,1),!r&&!(u&&!o)&&(h||o||g)&&(Un(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){vo||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||kd(this,c),u=this._ease(c/this._dur),yM(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):($c(this,0),this.parent||eg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!qt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,fr&&fr.vars.overwrite!==!0)._first||ho(this),this.parent&&a!==this.timeline.totalDuration()&&ia(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?qn(i):o,c=this._ptLookup,u=this._pt,h,d,f,m,_,p,g;if((!r||r==="all")&&$b(o,l))return r==="all"&&(this._pt=0),ho(this);for(h=this._op=this._op||[],r!=="all"&&(Gt(r)&&(_={},pn(r,function(b){return _[b]=1}),r=_),r=vM(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){d=c[g],r==="all"?(h[g]=r,m=d,f={}):(f=h[g]=h[g]||{},m=r);for(_ in m)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&qc(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ho(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return mo(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return mo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Mt.killTweensOf(i,r,a)},e})(So);On(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(s){It[s]=function(){var e=new nn,t=Sd.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Hd=function(e,t,n){return e[t]=n},xg=function(e,t,n){return e[t](n)},bM=function(e,t,n,i){return e[t](i.fp,n)},MM=function(e,t,n){return e.setAttribute(t,n)},Kc=function(e,t){return wt(e[t])?xg:Xc(e[t])&&e.setAttribute?MM:Hd},yg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},TM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Vd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Gd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},EM=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},wM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?qc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},AM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Wd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},mn=(function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||yg,this.d=l||this,this.set=c||Hd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=AM,this.m=n,this.mt=r,this.tween=i},s})();pn(Ld+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Id[s]=1});Fn.TweenMax=Fn.TweenLite=It;Fn.TimelineLite=Fn.TimelineMax=nn;Mt=new nn({sortChildren:!1,defaults:_o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=Fd;var Kr=[],zc={},RM=[],Gm=0,CM=0,pd=function(e){return(zc[e]||RM).map(function(t){return t()})},Ed=function(){var e=Date.now(),t=[];e-Gm>2&&(pd("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=vi.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),pd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gm=e,pd("matchMedia"))},vg=(function(){function s(t,n){this.selector=n&&bd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=CM++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){wt(n)&&(r=i,i=n,n=wt);var a=this,o=function(){var c=vt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=bd(r)),vt=a,h=i.apply(a,arguments),wt(h)&&a._r.push(h),vt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===wt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof It)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Kr.length;a--;)Kr[a].id===this.id&&Kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),PM=(function(){function s(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){bi(n)||(n={matches:n});var a=new vg(0,r||this.scope),o=a.conditions={},l,c,u;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=vi.matchMedia(n[c]),l&&(Kr.indexOf(a)<0&&Kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ed):l.addEventListener("change",Ed)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Wc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dg(i)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Gt(e)&&(e=qn(e)[0]);var r=mr(e||{}).get,a=n?Qm:jm;return n==="native"&&(n=""),e&&(t?a((Tn[t]&&Tn[t].get||r)(e,t,n,i)):function(o,l,c){return a((Tn[o]&&Tn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=qn(e),e.length>1){var i=e.map(function(u){return sn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Tn[t],o=mr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ea._pt=0,h.init(e,n?u+n:u,ea,0,[e]),h.render(1,h),ea._pt&&Gd(1,ea)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=sn.to(e,On((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$r(e.ease,_o.ease)),Bm(_o,e||{})},config:function(e){return Bm(An,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Tn[o]&&!Fn[o]&&xo(t+" effect requires "+o+" plugin.")}),ud[t]=function(o,l,c){return n(qn(o),On(l||{},r),c)},a&&(nn.prototype[t]=function(o,l,c){return this.add(ud[t](o,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=$r(t)},parseEase:function(e,t){return arguments.length?$r(e,t):$e},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),i,r;for(n.smoothChildTiming=wn(e.smoothChildTiming),Mt.remove(n),n._dp=0,n._time=n._tTime=Mt._time,i=Mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=r;return Si(Mt,n,0),n},context:function(e,t){return e?new vg(e,t):vt},matchMedia:function(e){return new PM(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ed()},addEventListener:function(e,t){var n=zc[e]||(zc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=zc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:oM,wrapYoyo:lM,distribute:ag,random:lg,snap:og,normalize:aM,getUnit:Zt,clamp:nM,splitColor:fg,toArray:qn,selector:bd,mapRange:ug,pipe:rM,unitize:sM,interpolate:cM,shuffle:sg},install:Zm,effects:ud,ticker:En,updateRoot:nn.updateRoot,plugins:Tn,globalTimeline:Mt,core:{PropTween:mn,globals:$m,Tween:It,Timeline:nn,Animation:So,getCache:mr,_removeLinkedListItem:qc,reverting:function(){return qt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return wd=e}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Wc[s]=It[s]});En.add(nn.updateRoot);ea=Wc.to({},{duration:0});var IM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},LM=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=IM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},md=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Gt(r)&&(l={},pn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}LM(o,r)}}}},sn=Wc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},md("roundProps",Md),md("modifiers"),md("snap",og))||Wc;It.version=nn.version=sn.version="3.15.0";qm=1;Ad()&&ra();var NM=$e.Power0,DM=$e.Power1,UM=$e.Power2,FM=$e.Power3,OM=$e.Power4,BM=$e.Linear,zM=$e.Quad,kM=$e.Cubic,HM=$e.Quart,VM=$e.Quint,GM=$e.Strong,WM=$e.Elastic,XM=$e.Back,YM=$e.SteppedEase,qM=$e.Bounce,ZM=$e.Sine,$M=$e.Expo,KM=$e.Circ;var Sg,xr,oa,Kd,is,JM,bg,Jd,jM=function(){return typeof window<"u"},Yi={},ns=180/Math.PI,la=Math.PI/180,aa=Math.atan2,Mg=1e8,jd=/([A-Z])/g,QM=/(left|right|width|margin|padding|x)/i,e1=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},t1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},i1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ig=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},s1=function(e,t,n){return e.style[t]=n},a1=function(e,t,n){return e.style.setProperty(t,n)},o1=function(e,t,n){return e._gsap[t]=n},l1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},c1=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},u1=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Tt="transform",Rn=Tt+"Origin",h1=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Yi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Xi(i,o)}):this.tfm[e]=a.x?a[e]:Xi(i,e),e===Rn&&(this.tfm.zOrigin=a.zOrigin);else return Mi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Tt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=Tt}(r||t)&&this.props.push(e,t,r[e])},Ng=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},d1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(jd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Jd(),(!r||!r.isStart)&&!n[Tt]&&(Ng(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dg=function(e,t){var n={target:e,props:[],revert:d1,save:h1};return e._gsap||sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ug,qd=function(e,t){var n=xr.createElementNS?xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xr.createElement(e);return n&&n.style?n:xr.createElement(e)},Bn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(jd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ca(t)||t,1)||""},Tg="O,Moz,ms,Ms,Webkit".split(","),ca=function(e,t,n){var i=t||is,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Tg[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Tg[a]:"")+e},Zd=function(){jM()&&window.document&&(Sg=window,xr=Sg.document,oa=xr.documentElement,is=qd("div")||{style:{}},JM=qd("div"),Tt=ca(Tt),Rn=Tt+"Origin",is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ug=!!ca("perspective"),Jd=sn.core.reverting,Kd=1)},Eg=function(e){var t=e.ownerSVGElement,n=qd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),oa.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),oa.removeChild(n),r},wg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Fg=function(e){var t,n;try{t=e.getBBox()}catch{t=Eg(e),n=1}return t&&(t.width||t.height)||n||(t=Eg(e)),t&&!t.width&&!t.x&&!t.y?{x:+wg(e,["x","cx","x1"])||0,y:+wg(e,["y","cy","y1"])||0,width:0,height:0}:t},Og=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Fg(e))},vr=function(e,t){if(t){var n=e.style,i;t in Yi&&t!==Rn&&(t=Tt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(jd,"-$1").toLowerCase())):n.removeAttribute(t)}},yr=function(e,t,n,i,r,a){var o=new mn(e._pt,t,n,0,1,a?Lg:Ig);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Ag={deg:1,rad:1,turn:1},f1={grid:1,flex:1},Sr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=is.style,l=QM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,_,p,g;if(i===a||!r||Ag[i]||Ag[a])return r;if(a!=="px"&&!d&&(r=s(e,t,n,"px")),g=e.getCTM&&Og(e),(f||a==="%")&&(Yi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],At(f?r/m*h:r/100*m);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xr||!_.appendChild)&&(_=xr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===En.time&&!p.uncache)return At(r/p.width*h);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,m=e[u],b?e.style[t]=b:vr(e,t)}else(f||a==="%")&&!f1[Bn(_,"display")]&&(o.position=Bn(e,"position")),_===e&&(o.position="static"),_.appendChild(is),m=is[u],_.removeChild(is),o.position="absolute";return l&&f&&(p=mr(_),p.time=En.time,p.width=_[u]),At(d?m*r/h:m&&r?h/m*r:0)},Xi=function(e,t,n,i){var r;return Kd||Zd(),t in Mi&&t!=="transform"&&(t=Mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yi[t]&&t!=="transform"?(r=Eo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:jc(Bn(e,Rn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Jc[t]&&Jc[t](e,t,n)||Bn(e,t)||Dd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Sr(e,t,r,n)+n:r},p1=function(e,t,n,i){if(!n||n==="none"){var r=ca(t,e,1),a=r&&Bn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Bn(e,"borderTopColor"))}var o=new mn(this._pt,e.style,t,0,1,Vd),l=0,c=0,u,h,d,f,m,_,p,g,b,w,v,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Bn(e,t)||i,_?e.style[t]=_:vr(e,t)),u=[n,i],Fd(u),n=u[0],i=u[1],d=n.match(Jr)||[],S=i.match(Jr)||[],S.length){for(;h=Jr.exec(i);)p=h[0],b=i.substring(l,h.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=jr(f,p)+v),g=parseFloat(p),w=p.substr((g+"").length),l=Jr.lastIndex-w.length,w||(w=w||An.units[t]||v,l===i.length&&(i+=w,o.e+=w)),v!==w&&(f=Sr(e,t,_,w)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Lg:Ig;return Cd.test(i)&&(o.e=0),this._pt=o,o},Rg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rg[n]||n,t[1]=Rg[i]||i,t.join(" ")},g1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Yi[o]&&(l=1,o=o==="transformOrigin"?Rn:Tt),vr(n,o);l&&(vr(n,Tt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Eo(n,1),a.uncache=1,Ng(i)))}},Jc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new mn(e._pt,t,n,0,0,g1);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},To=[1,0,0,1,0,0],Bg={},zg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cg=function(e){var t=Bn(e,Tt);return zg(t)?To:t.substr(7).match(Rd).map(At)},Qd=function(e,t){var n=e._gsap||mr(e),i=e.style,r=Cg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?To:r):(r===To&&!e.offsetParent&&e!==oa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,oa.appendChild(e)),r=Cg(e),l?i.display=l:vr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):oa.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},$d=function(e,t,n,i,r,a){var o=e._gsap,l=r||Qd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],b=l[5],w=t.split(" "),v=parseFloat(w[0])||0,S=parseFloat(w[1])||0,E,A,x,M;n?l!==To&&(A=f*p-m*_)&&(x=v*(p/A)+S*(-_/A)+(_*b-p*g)/A,M=v*(-m/A)+S*(f/A)-(f*b-m*g)/A,v=x,S=M):(E=Fg(e),v=E.x+(~w[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(w[1]||w[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&o.smooth?(g=v-c,b=S-u,o.xOffset=h+(g*f+b*_)-g,o.yOffset=d+(g*m+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Rn]="0px 0px",a&&(yr(a,o,"xOrigin",c,v),yr(a,o,"yOrigin",u,S),yr(a,o,"xOffset",h,o.xOffset),yr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},Eo=function(e,t){var n=e._gsap||new Od(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Bn(e,Rn)||"0",u,h,d,f,m,_,p,g,b,w,v,S,E,A,x,M,R,P,F,O,I,B,W,V,Q,Y,J,te,be,Te,Ye,Fe;return u=h=d=_=p=g=b=w=v=0,f=m=1,n.svg=!!(e.getCTM&&Og(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),i.scale=i.rotate=i.translate="none"),A=Qd(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),$d(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,E=n.yOrigin||0,A!==To&&(P=A[0],F=A[1],O=A[2],I=A[3],u=B=A[4],h=W=A[5],A.length===6?(f=Math.sqrt(P*P+F*F),m=Math.sqrt(I*I+O*O),_=P||F?aa(F,P)*ns:0,b=O||I?aa(O,I)*ns+_:0,b&&(m*=Math.abs(Math.cos(b*la))),n.svg&&(u-=S-(S*P+E*O),h-=E-(S*F+E*I))):(Fe=A[6],Te=A[7],J=A[8],te=A[9],be=A[10],Ye=A[11],u=A[12],h=A[13],d=A[14],x=aa(Fe,be),p=x*ns,x&&(M=Math.cos(-x),R=Math.sin(-x),V=B*M+J*R,Q=W*M+te*R,Y=Fe*M+be*R,J=B*-R+J*M,te=W*-R+te*M,be=Fe*-R+be*M,Ye=Te*-R+Ye*M,B=V,W=Q,Fe=Y),x=aa(-O,be),g=x*ns,x&&(M=Math.cos(-x),R=Math.sin(-x),V=P*M-J*R,Q=F*M-te*R,Y=O*M-be*R,Ye=I*R+Ye*M,P=V,F=Q,O=Y),x=aa(F,P),_=x*ns,x&&(M=Math.cos(x),R=Math.sin(x),V=P*M+F*R,Q=B*M+W*R,F=F*M-P*R,W=W*M-B*R,P=V,B=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=At(Math.sqrt(P*P+F*F+O*O)),m=At(Math.sqrt(W*W+Fe*Fe)),x=aa(B,W),b=Math.abs(x)>2e-4?x*ns:0,v=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zg(Bn(e,Tt)),V&&e.setAttribute("transform",V))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=At(f),n.scaleY=At(m),n.rotation=At(_)+o,n.rotationX=At(p)+o,n.rotationY=At(g)+o,n.skewX=b+o,n.skewY=w+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rn]=jc(c)),n.xOffset=n.yOffset=0,n.force3D=An.force3D,n.renderTransform=n.svg?x1:Ug?kg:_1,n.uncache=0,n},jc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xd=function(e,t,n){var i=Zt(t);return At(parseFloat(t)+parseFloat(Sr(e,"x",n+"px",i)))+i},_1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kg(e,t)},es="0deg",Mo="0px",ts=") ",kg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,w=n.zOrigin,v="",S=g==="auto"&&e&&e!==1||g===!0;if(w&&(h!==es||u!==es)){var E=parseFloat(u)*la,A=Math.sin(E),x=Math.cos(E),M;E=parseFloat(h)*la,M=Math.cos(E),a=Xd(b,a,A*M*-w),o=Xd(b,o,-Math.sin(E)*-w),l=Xd(b,l,x*M*-w+w)}p!==Mo&&(v+="perspective("+p+ts),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||a!==Mo||o!==Mo||l!==Mo)&&(v+=l!==Mo||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ts),c!==es&&(v+="rotate("+c+ts),u!==es&&(v+="rotateY("+u+ts),h!==es&&(v+="rotateX("+h+ts),(d!==es||f!==es)&&(v+="skew("+d+", "+f+ts),(m!==1||_!==1)&&(v+="scale("+m+", "+_+ts),b.style[Tt]=v||"translate(0, 0)"},x1=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,w=parseFloat(a),v=parseFloat(o),S,E,A,x,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=la,c*=la,S=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=la,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,x*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),S*=M,E*=M)),S=At(S),E=At(E),A=At(A),x=At(x)):(S=h,x=d,E=A=0),(w&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(w=Sr(f,"x",a,"px"),v=Sr(f,"y",o,"px")),(m||_||p||g)&&(w=At(w+m-(m*S+_*A)+p),v=At(v+_-(m*E+_*x)+g)),(i||r)&&(M=f.getBBox(),w=At(w+i/100*M.width),v=At(v+r/100*M.height)),M="matrix("+S+","+E+","+A+","+x+","+w+","+v+")",f.setAttribute("transform",M),b&&(f.style[Tt]=M)},y1=function(e,t,n,i,r){var a=360,o=Gt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ns:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Mg)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Mg)%a-~~(c/a)*a)),e._pt=d=new mn(e._pt,t,n,i,c,t1),d.e=u,d.u="deg",e._props.push(n),d},Pg=function(e,t){for(var n in t)e[n]=t[n];return e},v1=function(e,t,n){var i=Pg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Tt]=t,o=Eo(n,1),vr(n,Tt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Tt],a[Tt]=t,o=Eo(n,1),a[Tt]=c);for(l in Yi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=Zt(c),m=Zt(u),h=f!==m?Sr(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new mn(e._pt,o,l,h,d-h,Yd),e._pt.u=m||0,e._props.push(l));Pg(o,i)};pn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Jc[e>1?"border"+s:s]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(m){return Xi(o,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var ef={name:"css",register:Zd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,m,_,p,g,b,w,v,S,E,A,x,M;Kd||Zd(),this.styles=this.styles||Dg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Tn[_]&&zd(_,t,n,i,e,r)))){if(f=typeof u,m=Jc[_],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=sa(u)),m)m(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Gi.lastIndex=0,Gi.test(c)||(p=Zt(c),g=Zt(u),g?p!==g&&(c=Sr(e,_,c,g)+g):p&&(u+=p)),this.add(o,"setProperty",c,u,i,r,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Gt(c)&&~c.indexOf("random(")&&(c=sa(c)),Zt(c+"")||c==="auto"||(c+=An.units[_]||Zt(Xi(e,_))||""),(c+"").charAt(1)==="="&&(c=Xi(e,_))):c=Xi(e,_),d=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),_ in Mi&&(_==="autoAlpha"&&(d===1&&Xi(e,"visibility")==="hidden"&&h&&(d=0),x.push("visibility",0,o.visibility),yr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Mi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in Yi,w){if(this.styles.save(_),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Bn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=Bn(e,"perspective"),R?e.style.perspective=R:vr(e,"perspective")}h=parseFloat(u)}if(v||(S=e._gsap,S.renderTransform&&!t.parseTransform||Eo(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new mn(this._pt,o,Tt,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new mn(this._pt,S,"scaleY",S.scaleY,(b?jr(S.scaleY,b+h):h)-S.scaleY||0,Yd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Rn,0,o[Rn]),u=m1(u),S.svg?$d(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==S.zOrigin&&yr(this,S,"zOrigin",S.zOrigin,g),yr(this,o,_,jc(c),jc(u)));continue}else if(_==="svgOrigin"){$d(e,u,1,E,0,this);continue}else if(_ in Bg){y1(this,S,_,d,b?jr(d,b+u):u);continue}else if(_==="smoothOrigin"){yr(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){v1(this,u,e);continue}}else _ in o||(_=ca(_)||_);if(w||(h||h===0)&&(d||d===0)&&!e1.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),g=Zt(u)||(_ in An.units?An.units[_]:p),p!==g&&(d=Sr(e,_,c,g)),this._pt=new mn(this._pt,w?S:o,_,d,(b?jr(d,b+h):h)-d,!w&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?r1:Yd),this._pt.u=g||0,w&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=i1):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=n1);else if(_ in o)p1.call(this,e,_,c,b?b+u:u);else if(_ in e)this.add(e,_,c||e[_],b?b+u:u,i,r);else if(_!=="parseTransform"){Yc(_,u);continue}w||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}A&&Wd(this)},render:function(e,t){if(t.tween._time||!Jd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Mi,getSetter:function(e,t,n){var i=Mi[t];return i&&i.indexOf(",")<0&&(t=i),t in Yi&&t!==Rn&&(e._gsap.x||Xi(e,"x"))?n&&bg===n?t==="scale"?l1:o1:(bg=n||{})&&(t==="scale"?c1:u1):e.style&&!Xc(e.style[t])?s1:~t.indexOf("-")?a1:Kc(e,t)},core:{_removeProperty:vr,_getMatrix:Qd}};sn.utils.checkPrefix=ca;sn.core.getStyleSaver=Dg;(function(s,e,t,n){var i=pn(s+","+e+","+t,function(r){Yi[r]=1});pn(e,function(r){An.units[r]="deg",Bg[r]=1}),Mi[i[13]]=s+","+e,pn(n,function(r){var a=r.split(":");Mi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){An.units[s]="px"});sn.registerPlugin(ef);var tf=sn.registerPlugin(ef)||sn,WA=tf.core.Tween;var Yt=window.matchMedia("(prefers-reduced-motion: reduce)"),h0=window.matchMedia("(max-width: 749px)"),da=window.matchMedia("(max-width: 749px)"),nf=()=>Math.min(window.devicePixelRatio||1,da.matches?1.25:1.75),Ze=document.documentElement.classList.contains("altar-home-v3"),rs=Ze?"altar-lighting-v3-ab":"altar-lighting-v1",Hg="altar-lighting-persist";function rf(s){try{return localStorage.getItem(s)}catch{return null}}function ua(s,e){try{e===null?localStorage.removeItem(s):localStorage.setItem(s,e)}catch{}}var iu=9,sf={ACES:lr,Neutral:Ja,Linear:$a,Reinhard:Ka},ie={hemisphereSky:"#000000",hemisphereGround:"#3f12e2",hemisphereIntensity:0,keyColor:"#f8d4b7",keyIntensity:.12,keyX:-15,keyY:-15,keyZ:-15,rimColor:"#6f71f7",rimIntensity:.48,rimX:-15,rimY:15,rimZ:-4.2,exposure:.9,toneMapping:"Linear",effectBlur:0,grainOpacity:.01,grainFrequency:.65,grainSpeed:10,sectionGrainOpacity:.05,orbitSpeed:.1,orbitKepler:1.6,orbitTilt:69,orbitScale:.65,orbitDirection:"Horario",moonSpeed:1.25,spinSpeed:2.6,orbitLineOpacity:0,orbitLineColor:"#fffb00",layoutWaveColor:"#767d73",starCount:700,starSize:1.35,starBrightness:3,starColor:"#fff3a9",starColorVariation:1,twinkleSpeed:7.95,twinkleAmount:.5,bloomSize:5.1,bloomIntensity:.25,starDrift:.9,sunSize:.31,sunEmissive:2.1,sunEmissiveColor:"#ff9294",sunSpin:1,sunGlowSize:3.8,sunGlowIntensity:.4,sunGlowColor:"#ffbc80",sunLightIntensity:.25,sunLightColor:"#ffb3a0",system1X:24.7,system1Y:-14.15,system1Z:-84.85,system1RotX:59,system1RotY:180,system1RotZ:-19,system1Scale:7.05,system2X:-21.8,system2Y:18.7,system2Z:-100,system2RotX:15,system2RotY:16,system2RotZ:13,system2Scale:11,system3X:-13.1,system3Y:17.9,system3Z:-82.95,system3RotX:-150,system3RotY:116,system3RotZ:2,system3Scale:12.85,system4X:-25,system4Y:8.85,system4Z:-74.05,system4RotX:-35,system4RotY:64,system4RotZ:7,system4Scale:15.25,systemSpin:0,systemFloat:0,systemFloatSpeed:0,systemParallax:0,stonesX:-.1,stonesY:-11,stonesZ:0,stonesRotX:0,stonesRotY:0,stonesRotZ:0,stonesScale:.9,stonesEmbed:.39,stoneMercuryX:-3.6,stoneMercuryY:-.04,stoneMercuryZ:-1.9,stoneMercuryScale:.9,stoneMercuryRotX:10,stoneMercuryRotY:-24,stoneMercuryRotZ:-73,stoneVenusX:-1.05,stoneVenusY:0,stoneVenusZ:-1.3,stoneVenusScale:1,stoneVenusRotX:-5,stoneVenusRotY:19,stoneVenusRotZ:7,stoneEarthX:7.1,stoneEarthY:-.19,stoneEarthZ:-1.55,stoneEarthScale:1.95,stoneEarthRotX:38,stoneEarthRotY:-16,stoneEarthRotZ:-11,stoneMarsX:-5.65,stoneMarsY:0,stoneMarsZ:-.2,stoneMarsScale:1.3,stoneMarsRotX:-7,stoneMarsRotY:30,stoneMarsRotZ:6,stoneJupiterX:2.25,stoneJupiterY:0,stoneJupiterZ:.2,stoneJupiterScale:1,stoneJupiterRotX:3,stoneJupiterRotY:-14,stoneJupiterRotZ:-5,stoneSaturnX:8.55,stoneSaturnY:0,stoneSaturnZ:1.2,stoneSaturnScale:1.45,stoneSaturnRotX:-11,stoneSaturnRotY:-180,stoneSaturnRotZ:-51,stoneUranusX:.7,stoneUranusY:0,stoneUranusZ:1.4,stoneUranusScale:1,stoneUranusRotX:7,stoneUranusRotY:-22,stoneUranusRotZ:-7,stoneNeptuneX:-3,stoneNeptuneY:0,stoneNeptuneZ:2.3,stoneNeptuneScale:1,stoneNeptuneRotX:-6,stoneNeptuneRotY:13,stoneNeptuneRotZ:9,stonePlutoX:5,stonePlutoY:0,stonePlutoZ:1.9,stonePlutoScale:1.3,stonePlutoRotX:11,stonePlutoRotY:-32,stonePlutoRotZ:-6,stoneMoonX:-8.15,stoneMoonY:-.37,stoneMoonZ:1.85,stoneMoonScale:2.9,stoneMoonRotX:-60,stoneMoonRotY:180,stoneMoonRotZ:-180,tierra1Ground:"#e89e7a",tierra1Horizon:"#ff9c71",tierra1Ambient:.8,tierra1Light1Color:"#ffd2ad",tierra1Light1Intensity:4.95,tierra1Light2Color:"#8b91ff",tierra1Light2Intensity:1.15,tierra1BloomIntensity:5.95,tierra1StoneMercuryX:-3.6,tierra1StoneMercuryY:-.04,tierra1StoneMercuryZ:-1.9,tierra1StoneVenusX:-1.05,tierra1StoneVenusY:0,tierra1StoneVenusZ:-1.3,tierra1StoneEarthX:7.1,tierra1StoneEarthY:-.19,tierra1StoneEarthZ:-1.55,tierra1StoneMarsX:-5.65,tierra1StoneMarsY:0,tierra1StoneMarsZ:-.2,tierra1StoneJupiterX:2.25,tierra1StoneJupiterY:0,tierra1StoneJupiterZ:.2,tierra1StoneSaturnX:8.55,tierra1StoneSaturnY:0,tierra1StoneSaturnZ:1.2,tierra1StoneUranusX:.7,tierra1StoneUranusY:0,tierra1StoneUranusZ:1.4,tierra1StoneNeptuneX:-3,tierra1StoneNeptuneY:0,tierra1StoneNeptuneZ:2.3,tierra1StonePlutoX:5,tierra1StonePlutoY:0,tierra1StonePlutoZ:1.9,tierra1StoneMoonX:-8.15,tierra1StoneMoonY:-.37,tierra1StoneMoonZ:1.85,tierra1StoneMercuryScale:.9,tierra1StoneMercuryRotX:10,tierra1StoneMercuryRotY:-24,tierra1StoneMercuryRotZ:-73,tierra1StoneVenusScale:1,tierra1StoneVenusRotX:-5,tierra1StoneVenusRotY:19,tierra1StoneVenusRotZ:7,tierra1StoneEarthScale:1.95,tierra1StoneEarthRotX:38,tierra1StoneEarthRotY:-16,tierra1StoneEarthRotZ:-11,tierra1StoneMarsScale:1.3,tierra1StoneMarsRotX:-7,tierra1StoneMarsRotY:30,tierra1StoneMarsRotZ:6,tierra1StoneJupiterScale:1,tierra1StoneJupiterRotX:3,tierra1StoneJupiterRotY:-14,tierra1StoneJupiterRotZ:-5,tierra1StoneSaturnScale:1.45,tierra1StoneSaturnRotX:-11,tierra1StoneSaturnRotY:-180,tierra1StoneSaturnRotZ:-51,tierra1StoneUranusScale:1,tierra1StoneUranusRotX:7,tierra1StoneUranusRotY:-22,tierra1StoneUranusRotZ:-7,tierra1StoneNeptuneScale:1,tierra1StoneNeptuneRotX:-6,tierra1StoneNeptuneRotY:13,tierra1StoneNeptuneRotZ:9,tierra1StonePlutoScale:1.3,tierra1StonePlutoRotX:11,tierra1StonePlutoRotY:-32,tierra1StonePlutoRotZ:-6,tierra1StoneMoonScale:2.9,tierra1StoneMoonRotX:-60,tierra1StoneMoonRotY:180,tierra1StoneMoonRotZ:-180,tierra2Ground:"#1f1f09",tierra2Horizon:"#1f1f09",tierra2Ambient:.8,tierra2Light1Color:"#ffd2ad",tierra2Light1Intensity:4.75,tierra2Light2Color:"#2f6e1d",tierra2Light2Intensity:.45,tierra2BloomIntensity:8.85,tierra2StoneMercuryX:2.75,tierra2StoneMercuryY:.01,tierra2StoneMercuryZ:-1.65,tierra2StoneVenusX:-8.45,tierra2StoneVenusY:0,tierra2StoneVenusZ:-1.3,tierra2StoneEarthX:-2.3,tierra2StoneEarthY:-.19,tierra2StoneEarthZ:-1.8,tierra2StoneMarsX:5.5,tierra2StoneMarsY:0,tierra2StoneMarsZ:-1,tierra2StoneJupiterX:.7,tierra2StoneJupiterY:0,tierra2StoneJupiterZ:-.15,tierra2StoneSaturnX:-5.8,tierra2StoneSaturnY:0,tierra2StoneSaturnZ:.05,tierra2StoneUranusX:7.9,tierra2StoneUranusY:-.24,tierra2StoneUranusZ:.7,tierra2StoneNeptuneX:3.3,tierra2StoneNeptuneY:0,tierra2StoneNeptuneZ:2.45,tierra2StonePlutoX:-6.25,tierra2StonePlutoY:0,tierra2StonePlutoZ:2.1,tierra2StoneMoonX:-2.15,tierra2StoneMoonY:-.76,tierra2StoneMoonZ:1.65,tierra2StoneMercuryScale:.9,tierra2StoneMercuryRotX:10,tierra2StoneMercuryRotY:-24,tierra2StoneMercuryRotZ:-73,tierra2StoneVenusScale:1,tierra2StoneVenusRotX:-5,tierra2StoneVenusRotY:19,tierra2StoneVenusRotZ:7,tierra2StoneEarthScale:1.85,tierra2StoneEarthRotX:41,tierra2StoneEarthRotY:-35,tierra2StoneEarthRotZ:-33,tierra2StoneMarsScale:1.3,tierra2StoneMarsRotX:-7,tierra2StoneMarsRotY:30,tierra2StoneMarsRotZ:6,tierra2StoneJupiterScale:1,tierra2StoneJupiterRotX:3,tierra2StoneJupiterRotY:-14,tierra2StoneJupiterRotZ:-5,tierra2StoneSaturnScale:1.45,tierra2StoneSaturnRotX:-11,tierra2StoneSaturnRotY:-180,tierra2StoneSaturnRotZ:-51,tierra2StoneUranusScale:1.85,tierra2StoneUranusRotX:7,tierra2StoneUranusRotY:-79,tierra2StoneUranusRotZ:-144,tierra2StoneNeptuneScale:1,tierra2StoneNeptuneRotX:-6,tierra2StoneNeptuneRotY:13,tierra2StoneNeptuneRotZ:9,tierra2StonePlutoScale:1.3,tierra2StonePlutoRotX:11,tierra2StonePlutoRotY:-32,tierra2StonePlutoRotZ:-6,tierra2StoneMoonScale:2.9,tierra2StoneMoonRotX:-60,tierra2StoneMoonRotY:180,tierra2StoneMoonRotZ:-180,tierra3Ground:"#486074",tierra3Horizon:"#496d74",tierra3Ambient:.8,tierra3Light1Color:"#ffd2ad",tierra3Light1Intensity:4.95,tierra3Light2Color:"#427c80",tierra3Light2Intensity:1.15,tierra3BloomIntensity:5.95,tierra3StoneMercuryX:-3.6,tierra3StoneMercuryY:-.04,tierra3StoneMercuryZ:-1.9,tierra3StoneVenusX:-1.05,tierra3StoneVenusY:0,tierra3StoneVenusZ:-1.3,tierra3StoneEarthX:7.1,tierra3StoneEarthY:-.19,tierra3StoneEarthZ:-1.55,tierra3StoneMarsX:-5.65,tierra3StoneMarsY:0,tierra3StoneMarsZ:-.2,tierra3StoneJupiterX:2.25,tierra3StoneJupiterY:0,tierra3StoneJupiterZ:.2,tierra3StoneSaturnX:8.55,tierra3StoneSaturnY:0,tierra3StoneSaturnZ:1.2,tierra3StoneUranusX:.7,tierra3StoneUranusY:0,tierra3StoneUranusZ:1.4,tierra3StoneNeptuneX:-3,tierra3StoneNeptuneY:0,tierra3StoneNeptuneZ:2.3,tierra3StonePlutoX:5,tierra3StonePlutoY:0,tierra3StonePlutoZ:1.9,tierra3StoneMoonX:-8.15,tierra3StoneMoonY:-.37,tierra3StoneMoonZ:1.85,tierra3StoneMercuryScale:.9,tierra3StoneMercuryRotX:10,tierra3StoneMercuryRotY:-24,tierra3StoneMercuryRotZ:-73,tierra3StoneVenusScale:1,tierra3StoneVenusRotX:-5,tierra3StoneVenusRotY:19,tierra3StoneVenusRotZ:7,tierra3StoneEarthScale:1.95,tierra3StoneEarthRotX:38,tierra3StoneEarthRotY:-16,tierra3StoneEarthRotZ:-11,tierra3StoneMarsScale:1.3,tierra3StoneMarsRotX:-7,tierra3StoneMarsRotY:30,tierra3StoneMarsRotZ:6,tierra3StoneJupiterScale:1,tierra3StoneJupiterRotX:3,tierra3StoneJupiterRotY:-14,tierra3StoneJupiterRotZ:-5,tierra3StoneSaturnScale:1.45,tierra3StoneSaturnRotX:-11,tierra3StoneSaturnRotY:-180,tierra3StoneSaturnRotZ:-51,tierra3StoneUranusScale:1,tierra3StoneUranusRotX:7,tierra3StoneUranusRotY:-22,tierra3StoneUranusRotZ:-7,tierra3StoneNeptuneScale:1,tierra3StoneNeptuneRotX:-6,tierra3StoneNeptuneRotY:13,tierra3StoneNeptuneRotZ:9,tierra3StonePlutoScale:1.3,tierra3StonePlutoRotX:11,tierra3StonePlutoRotY:-32,tierra3StonePlutoRotZ:-6,tierra3StoneMoonScale:2.9,tierra3StoneMoonRotX:-60,tierra3StoneMoonRotY:180,tierra3StoneMoonRotZ:-180,tierra4Ground:"#4f2e19",tierra4Horizon:"#4f2e19",tierra4Ambient:.8,tierra4Light1Color:"#ffd2ad",tierra4Light1Intensity:4.95,tierra4Light2Color:"#5181a4",tierra4Light2Intensity:.95,tierra4BloomIntensity:9.05,tierra4StoneMercuryX:-2.15,tierra4StoneMercuryY:-.05,tierra4StoneMercuryZ:.15,tierra4StoneVenusX:-8.65,tierra4StoneVenusY:-.18,tierra4StoneVenusZ:-1.8,tierra4StoneEarthX:-1.35,tierra4StoneEarthY:-.34,tierra4StoneEarthZ:2.1,tierra4StoneMarsX:6.15,tierra4StoneMarsY:0,tierra4StoneMarsZ:-.2,tierra4StoneJupiterX:-5.45,tierra4StoneJupiterY:-.19,tierra4StoneJupiterZ:.2,tierra4StoneSaturnX:1.85,tierra4StoneSaturnY:-.22,tierra4StoneSaturnZ:-1.2,tierra4StoneUranusX:8.2,tierra4StoneUranusY:0,tierra4StoneUranusZ:1.4,tierra4StoneNeptuneX:-3.7,tierra4StoneNeptuneY:0,tierra4StoneNeptuneZ:-1.4,tierra4StonePlutoX:4.35,tierra4StonePlutoY:0,tierra4StonePlutoZ:1.75,tierra4StoneMoonX:-8.6,tierra4StoneMoonY:-.37,tierra4StoneMoonZ:1.5,tierra4StoneMercuryScale:1.1,tierra4StoneMercuryRotX:84,tierra4StoneMercuryRotY:6,tierra4StoneMercuryRotZ:-73,tierra4StoneVenusScale:1,tierra4StoneVenusRotX:-5,tierra4StoneVenusRotY:19,tierra4StoneVenusRotZ:7,tierra4StoneEarthScale:2,tierra4StoneEarthRotX:9,tierra4StoneEarthRotY:-44,tierra4StoneEarthRotZ:-11,tierra4StoneMarsScale:1.3,tierra4StoneMarsRotX:-7,tierra4StoneMarsRotY:-49,tierra4StoneMarsRotZ:6,tierra4StoneJupiterScale:1,tierra4StoneJupiterRotX:3,tierra4StoneJupiterRotY:-14,tierra4StoneJupiterRotZ:-5,tierra4StoneSaturnScale:1.45,tierra4StoneSaturnRotX:-11,tierra4StoneSaturnRotY:-180,tierra4StoneSaturnRotZ:-51,tierra4StoneUranusScale:2.05,tierra4StoneUranusRotX:7,tierra4StoneUranusRotY:-22,tierra4StoneUranusRotZ:-7,tierra4StoneNeptuneScale:.8,tierra4StoneNeptuneRotX:-63,tierra4StoneNeptuneRotY:61,tierra4StoneNeptuneRotZ:180,tierra4StonePlutoScale:1.3,tierra4StonePlutoRotX:11,tierra4StonePlutoRotY:-18,tierra4StonePlutoRotZ:-6,tierra4StoneMoonScale:2.9,tierra4StoneMoonRotX:-60,tierra4StoneMoonRotY:180,tierra4StoneMoonRotZ:-180,showGround3d:!0,ground3dColor:"#e89e7a",ground3dRelief:6.2,ground3dTextureScale:.002,ground3dRoughness:.38,ground3dShadows:!0,ground3dContactShadows:0,ground3dFadeSides:0,ground3dFadeFar:.06,ground3dFadeNear:0,ground3dFadeSoftness:.2,groundX:-.15,groundStretchX:1,groundRotX:0,groundRotY:0,groundRotZ:0,ground3dExposure:.85,groundLightColor:"#ffd9b8",groundLightIntensity:0,groundLightX:10,groundLightY:11,groundLightZ:-3.5,groundLightTargetX:0,groundLightTargetZ:-2.5,groundY:-11.3,groundZ:5.25,groundWidth:23.5,groundDepth:16,stoneAmbientIntensity:.8,stoneLight1Color:"#ffd2ad",stoneLight1Intensity:4.95,stoneLight1X:-30,stoneLight1Y:-3,stoneLight1Z:10,stoneLight2Color:"#8b91ff",stoneLight2Intensity:1.15,stoneLight2X:-12,stoneLight2Y:5,stoneLight2Z:-14,showSections:!1,cardReturnSeconds:28,cardFlipDuration:1150,cardScale:.515,cardFocusScale:1.6,layoutCardX:0,layoutCardY:0,layoutCampaignCenterX:0,layoutCampaignY:0,layoutCampaignScale:.99,layoutCampaignOpenX:80,layoutCampaignOpenY:-177,manifestoX:0,manifestoY:66,manifestoScale:1,manifestoOpacity:.78,manifestoTitleX:0,manifestoTitleY:0,manifestoNoteX:0,manifestoNoteY:0,groundCampaignX:-93,groundCampaignY:-69,groundCampaignScale:1,groundCampaignOpenX:342,groundCampaignOpenY:-187,foilBaseColor:"#9b9a8c",foilSaturation:0,foilOpacity:.17,foilContrast:1.07,foilBevelSize:1.27,foilBevelStrength:3.7,foilMatte:0,foilLight1Intensity:1.14,foilLight1X:12.92,foilLight1Y:5,foilLight1Z:10,foilLight2Intensity:.8,foilLight2X:8.34,foilLight2Y:5,foilLight2Z:10,foilZoneX:-.243,foilZoneY:-.028,foilZoneScale:.152,foilHueSpeed:.04,foilScrollHue:.7,foilMouseHue:.2,foilMouseEase:.19,foilBands:1,foilGrain:.14,foilGrainFrequency:3e3,foilTilt:0,foilCurl:0,foilCurlCorner:0,foilTintColor:"#ffffff",foilTintAmount:0,foilBrushed:0,foilBrushedAngle:0,spaceColor:"#080808",uiPrimaryColor:"#fff3a9",uiSecondaryColor:"#601e2a",glowRoseColor:"#2d1a60",glowRoseIntensity:0,glowCyanColor:"#7b41e6",glowCyanIntensity:0,glowTealColor:"#5a2020",glowTealIntensity:0,showHorizonGradient:!1,showHorizonFloor:!0,floorColor:"#ff9c71",floorHeight:0,floorTilt:0,floorPerspective:50,floorTexture:0,floorTextureScale:.01,floorRelief:0,floorLightAngle:0,floorShade:0,floorHaze:0,mixColor:"#8fcb9b",mixAmount:0,mixScale:.002,mixCoverage:0,mixSoftness:.02,showStars:!0,showPlanets:!0,filmSun:!1,filmSunSize:13.9,filmSunX:39,filmSunY:50,shootingEnabled:!0,shootingPauseMin:3,shootingPauseMax:10,shootingSpeed:27,shootingLength:6,shootingWidth:.25,shootingBrightness:3.1,shootingColor:"#fff3a9",shootingAngle:-30,shootingAngleVariation:57,horizonGlowColor:"#ff9c71",horizonBloomHeight:1035,horizonBloomIntensity:5.95,horizonBloomBlur:28,horizonBloomRound:0,horizonBloomFlat:1,horizonBloomCenterX:.5,horizonBloomWidth:900,horizonLine:0,wornEnabled:!0,wornBlur:.1,wornErosion:.14,wornNoiseScale:2.3,wornRoughness:1.2,mobileStonesScale:1.73,mobileStonesX:-.13,mobileStonesY:-.04,lightingPresetVersion:iu},S1={manifestoY:120},b1={effectBlur:0,grainFrequency:.5,grainSpeed:10,orbitSpeed:.1,orbitKepler:1.6,orbitTilt:65,orbitScale:.75,orbitDirection:"Horario",moonSpeed:2.25,spinSpeed:1.5,orbitLineOpacity:0,sunGlowColor:"#fff3c6",sunLightColor:"#fff3c6"},d0="#fff3c6",Vg={mercury:"#83a6c9",venus:"#cc95c1",earth:"#0a1f2b",moon:"#cfe8f9",mars:"#e84f31",jupiter:"#e7edbe",saturn:"#34142c","saturn-ring":"#34142c",uranus:"#b9cbb5",pluto:"#8b7b69"},Gg=["neptune","saturn-ring"],M1=850/974,T1=[55.5,20.7,11.9],Wg={saturn:[27.4,8.4,5.5],venus:[41,16.4,3.2],mercury:[41,24.9,2.2],moon:[31.2,31.9,1],earth:[35.1,33.6,2.5],jupiter:[80.6,38,8.1],mars:[53.8,44.3,2.3],uranus:[46.9,67.6,4],pluto:[99.8,11.5,2.5]},E1=.05,w1={mercury:1.75,venus:2.1,earth:2.45,mars:2.8,jupiter:3.1,saturn:3.4},A1=2.036,Po={hemisphereSky:"#8daccd",hemisphereGround:"#e3ac94",hemisphereIntensity:2,keyIntensity:.8,grainOpacity:.21,showStars:!1,showPlanets:!1,filmSun:!0,sunEmissive:2.45,sunEmissiveColor:d0,starCount:3850,starSize:2.4,starBrightness:2.4,starColor:"#ffffff",starColorVariation:.35,twinkleSpeed:7.95,twinkleAmount:.5,bloomSize:0,bloomIntensity:1.2,starDrift:.75,shootingEnabled:!1,shootingPauseMin:2,shootingPauseMax:6,shootingSpeed:30,shootingLength:9,shootingWidth:.32,shootingBrightness:4,shootingColor:"#ffffff"},R1={...Object.fromEntries(Object.keys(Po).map(s=>[s,ie[s]])),starCount:1100,grainOpacity:.09,filmSun:!0,sunEmissive:Po.sunEmissive,sunEmissiveColor:d0,shootingEnabled:!0,shootingPauseMin:Po.shootingPauseMin,shootingPauseMax:Po.shootingPauseMax};function af(s){return{stars:s.showStars!==!1,planets:s.showPlanets!==!1}}var Ti=()=>({...ie,...Ze?{...b1,...Po}:{},...h0.matches?S1:{}}),Xg=["showSections","lightingPresetVersion"],wo=s=>s==="b"?{...Ti(),...R1}:Ti(),C1=()=>document.documentElement.dataset.altarHomeLayout==="b"?"b":"a",Yg={a:"A \xB7 D\xEDa",b:"B \xB7 Noche"},of=/#fff3a9/gi,lf=new Map,cf="";function P1(s=ie.uiPrimaryColor,e=ie.uiSecondaryColor){let t=`${s}|${e}`;if(t===cf)return;cf=t;let n=document.documentElement.style;n.setProperty("--altar-primary",s),n.setProperty("--altar-secondary",e);let i=s.toLowerCase()===ie.uiPrimaryColor;document.querySelectorAll(".altar-nav img, .altar-solar img, .altar-footer img").forEach(async r=>{let a=r.dataset.uiIconSrc||r.getAttribute("src")||"";if(!/\.svg(\?|$)/i.test(a))return;if(r.dataset.uiIconSrc=a,i){r.src=a;return}lf.has(a)||lf.set(a,fetch(a).then(l=>l.text()).catch(()=>""));let o=await lf.get(a);!of.test(o)||cf!==t||(of.lastIndex=0,r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o.replace(of,s))}`)})}var Io={sun:{position:[-2.3,-.7,-1.5],radius:1.15},mercury:{position:[-5.4,1.9,.3],radius:.16,orbit:2.3},venus:{position:[-3.7,2.8,-.6],radius:.26,orbit:2.9},earth:{position:[-.9,3.4,-1.4],radius:.24,orbit:3.6},moon:{position:[-.55,3.52,-1.2],radius:.07},mars:{position:[-4.7,-2.3,-.4],radius:.18,orbit:4.3},jupiter:{position:[3.7,-.9,-.8],radius:.62,orbit:5.4},saturn:{position:[5.4,1.5,-1.8],radius:.55,orbit:6.7},uranus:{position:[.8,2.9,-2.4],radius:.3,orbit:7.8},neptune:{position:[1.7,-2.8,-1.6],radius:.28,orbit:8.7},pluto:{position:[5.1,-2.1,-.2],radius:.11,orbit:9.5}},df={rock11_rock11_0:{planet:"mercury",position:[-4.9,-1.9],radius:.38,rotation:[.18,-.42,-.08],embed:.1},rock13_rock13_0:{planet:"venus",position:[-1.7,-1.3],radius:.5,rotation:[-.08,.34,.12],embed:.16},rock19_rock19_0:{planet:"earth",position:[2.9,-1.6],radius:.44,rotation:[.14,-.28,-.16],embed:.13},rock06_rock06_0:{planet:"mars",position:[-5.3,-.2],radius:.58,rotation:[-.12,.52,.1],embed:.2},rock12_rock12_0:{planet:"jupiter",position:[2.2,.2],radius:.96,rotation:[.06,-.24,-.08],embed:.3},rock09_rock09_0:{planet:"saturn",position:[5.2,.8],radius:.8,rotation:[-.16,.46,.14],embed:.26},rock17_rock17_0:{planet:"uranus",position:[.7,1.4],radius:.7,rotation:[.12,-.38,-.12],embed:.24},rock10_rock10_0:{planet:"neptune",position:[-3,2.3],radius:.76,rotation:[-.1,.22,.16],embed:.28},rock18_rock18_0:{planet:"pluto",position:[3.4,1.9],radius:.5,rotation:[.2,-.56,-.1],embed:.18}},f0=[{source:"rock10_rock10_0",planet:"moon",position:[-1.8,.9],radius:.42,rotation:[.3,1.2,-.2],embed:.14}],p0=[...Object.values(df),...f0],qi=1,I1={mercury:"Mercurio",venus:"Venus",earth:"Tierra",mars:"Marte",jupiter:"J\xFApiter",saturn:"Saturno",uranus:"Urano",neptune:"Neptuno",pluto:"Plut\xF3n",moon:"Luna"},L1=["X","Y","Z","Scale","RotX","RotY","RotZ"],qg=(s,e)=>`stone${s[0].toUpperCase()}${s.slice(1)}${e}`;function N1(s){let e=(t,n,i,r,a)=>`<label>${t} <span><input type="range" min="${i}" max="${r}" step="${a}" data-lighting="${n}"><output></output></span></label>`;return p0.map(({planet:t})=>{let n=i=>`tierra${s}Stone${t[0].toUpperCase()}${t.slice(1)}${i}`;return`
          <details class="lighting-panel__subgroup"><summary>Piedra \xB7 ${I1[t]}</summary>
            ${e("Posici\xF3n X",n("X"),-12,12,.05)}
            ${e("Altura",n("Y"),-1,2,.01)}
            ${e("Posici\xF3n Z",n("Z"),-10,10,.05)}
            ${e("Escala",n("Scale"),.1,4,.05)}
            ${e("Rotaci\xF3n X \xB0",n("RotX"),-180,180,1)}
            ${e("Rotaci\xF3n Y \xB0",n("RotY"),-180,180,1)}
            ${e("Rotaci\xF3n Z \xB0",n("RotZ"),-180,180,1)}
          </details>`}).join("")}var D1=.35,U1=3,F1=1.2,Zg=128,$g=new L(1,0,0),O1=new L(0,0,1),Ao={width:90,top:24,bottom:Ze?-108:-64,near:-8,far:-40},Kg=["#fff3a9","#ffd9b0","#c9d6ff","#ffffff","#ffb28e"].map(s=>new ye(s)),B1=`
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
`,z1=`
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
`,k1=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,H1=`
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
`,V1=-15,Qc={left:-.9,right:.9,top:-.02,bottom:-.5},G1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,W1=`
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
`,Jg={foilSaturation:"uFoilSaturation",foilOpacity:"uFoilOpacity",foilContrast:"uFoilContrast",foilBevelStrength:"uBevelStrength",foilMatte:"uMatteRoughness",foilLight1Intensity:"uLight1Intensity",foilLight2Intensity:"uLight2Intensity",foilHueSpeed:"uHueSpeed",foilMouseHue:"uMouseHue",foilBands:"uBands",foilGrain:"uGrain",foilGrainFrequency:"uGrainFrequency",foilCurl:"uCurl",foilCurlCorner:"uCurlCorner",foilTintAmount:"uTintAmount",foilBrushed:"uBrushed",foilBrushedAngle:"uBrushedAngle"},jg={foilBaseColor:"uBaseColor",foilTintColor:"uTint"},X1=2.08703;function Y1(s,e){let t=parseInt(String(s).replace("#",""),16)||0;return e.set((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)}var q1=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Z1=`
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
`;function $1(){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(.6,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let i=new Fr(e);return i.colorSpace=Et,i}function K1(s=128){let e=document.createElement("canvas");e.width=s,e.height=s;let t=e.getContext("2d"),n=t.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(20, 8, 6, 0.85)"),n.addColorStop(.45,"rgba(20, 8, 6, 0.45)"),n.addColorStop(1,"rgba(20, 8, 6, 0)"),t.fillStyle=n,t.fillRect(0,0,s,s),new Fr(e)}function J1(s=256){let e=new Uint8Array(s*s*4),t=(a,o)=>{let l=Math.sin(a*127.1+o*311.7)*43758.5453123;return l-Math.floor(l)},n=a=>a*a*(3-2*a),i=(a,o)=>{let l=Math.floor(a),c=Math.floor(o),u=n(a-l),h=n(o-c),d=Qe.lerp(t(l,c),t(l+1,c),u),f=Qe.lerp(t(l,c+1),t(l+1,c+1),u);return Qe.lerp(d,f,h)};for(let a=0;a<s;a+=1)for(let o=0;o<s;o+=1){let l=o/s,c=a/s,u=i(l*7,c*7)*.56+i(l*19,c*19)*.29+i(l*53,c*53)*.15,h=Math.round(Qe.clamp(.28+u*.72,0,1)*255),d=(a*s+o)*4;e[d]=h,e[d+1]=h,e[d+2]=h,e[d+3]=255}let r=new Di(e,s,s,en);return r.wrapS=ni,r.wrapT=ni,r.minFilter=fn,r.magFilter=ct,r.generateMipmaps=!0,r.colorSpace=Mn,r.needsUpdate=!0,r}function Qg(s={},e=128){let t=Math.max(Number(s.sides??.16),.001),n=Math.max(Number(s.far??.16),.001),i=Math.max(Number(s.near??.16),.001),r=Math.max(Number(s.softness??1),.05),a=new Uint8Array(e*e*4);for(let l=0;l<e;l+=1)for(let c=0;c<e;c+=1){let u=c/(e-1),h=l/(e-1),d=Math.min(Qe.smoothstep(Math.min(u,1-u),0,t),Qe.smoothstep(1-h,0,n),Qe.smoothstep(h,0,i))**r,f=Math.round(d*255),m=(l*e+c)*4;a[m]=f,a[m+1]=f,a[m+2]=f,a[m+3]=255}let o=new Di(a,e,e,en);return o.minFilter=ct,o.magFilter=ct,o.generateMipmaps=!1,o.colorSpace=Mn,o.needsUpdate=!0,o}function e0(s){return(Array.isArray(s.material)?s.material:[s.material]).map(t=>t?.name?.toLowerCase()||"").join(" ")}function j1(s){let e=`${s.name} ${e0(s)}`.toLowerCase();if(e.includes("saturn ring"))return"saturn-ring";for(let t of Object.keys(Io))if(e.includes(t))return t;return/^material(\.\d+)?$/.test(e0(s))?"sun":null}function Q1(s){let e=s?.image;if(!e||typeof document>"u")return null;try{let n=document.createElement("canvas");n.width=48,n.height=48;let i=n.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0,48,48);let{data:r}=i.getImageData(0,0,48,48),a=h=>{let d=h/255;return d<=.04045?d/12.92:Math.pow((d+.055)/1.055,2.4)},o=0,l=0,c=0,u=r.length/4;for(let h=0;h<r.length;h+=4)o+=a(r[h]),l+=a(r[h+1]),c+=a(r[h+2]);return new ye(o/u,l/u,c/u)}catch{return null}}function eT(s,e){let t=new ye(e),n=i=>{if(!i)return i;let r=i.clone(),a=Q1(r.map);if(!r.map||!a)return r.color&&r.color.copy(t),r;let o=new L(t.r/Math.max(a.r,.002),t.g/Math.max(a.g,.002),t.b/Math.max(a.b,.002));return r.color&&r.color.set(16777215),r.onBeforeCompile=l=>{l.uniforms.altarGain={value:o},l.fragmentShader=l.fragmentShader.replace("void main() {",`uniform vec3 altarGain;
void main() {`).replace("#include <map_fragment>",`#ifdef USE_MAP
            vec4 altarTexel = texture2D( map, vMapUv );
            diffuseColor.rgb *= min( altarTexel.rgb * altarGain, vec3( 1.0 ) );
          #endif`)},r.customProgramCacheKey=()=>"altar-v3-planet-grade",r.needsUpdate=!0,r};s.material=Array.isArray(s.material)?s.material.map(n):n(s.material)}function t0(s,e){s.geometry.computeBoundingSphere();let t=s.geometry.boundingSphere?.radius||1;s.scale.setScalar(e/t)}var ff=class{constructor(e){Rf(this,"render",(e=0)=>{if(this.animationFrame=requestAnimationFrame(this.render),da.matches){if(e-(this.lastCompactFrame??-1/0)<1e3/30-2)return;this.lastCompactFrame=e}this.timer.update(e);let t=Math.min(this.timer.getDelta(),.1);if(this.renderFoilCards(e),!Yt.matches&&!da.matches){let n=Math.max(1,Number(this.effectSettings?.grainSpeed??ie.grainSpeed));this.grainLayers.forEach(i=>{e-i.lastUpdate>=1e3/n&&(i.seed=i.seed%97+1,i.node.setAttribute("seed",i.seed),i.lastUpdate=e)})}!this.visible&&!this.closingActive||!this.renderer||(this.updateStars(Yt.matches?0:this.timer.getElapsed(),Yt.matches?0:t),this.updateSystem(this.timer.getElapsed(),t),Yt.matches||this.updateShootingStars(this.timer.getElapsed(),t),Yt.matches?this.composedBodies&&this.sun&&this.updateComposition(0):this.updateOrbits(t),this.updatePlanetVisibility(),this.drawScene())});if(this.root=e,this.stage=e.querySelector("[data-solar-stage]"),this.canvas=e.querySelector(".altar-solar__canvas"),this.isV2Home=!!document.querySelector(".altar-nav--v2"),this.gallery=this.isV2Home?e.querySelector(".altar-collection"):null,this.grainLayers=Array.from(document.querySelectorAll("[data-grain-turbulence]")).map(t=>({node:t,section:Number(t.dataset.grainSection||1),lastUpdate:0,seed:1})),this.modelUrl=e.dataset.modelUrl,this.stonesUrl=e.dataset.stonesUrl,this.animationFrame=0,this.spinners=[],this.spinTweens=[],this.orbiters=[],this.nightMeshes=[],this.orbitAxis=new L(0,0,1),this.orbitQuaternion=new hn,this.orbitBinormal=new L,this.shootingStars=[],this.nextShootingStar=2,this.pointer=new Ae,this.smoothPointer=new Ae,this.timer=new qa,this.visible=!0,this.cardRoot=document.querySelector(".altar-manifesto__oracle")||this.root,this.setupFoilCards(),this.setupFortuneFlip(),this.setupFortuneShare(),this.setupSpotifyPlayer(),this.setupDraggables(),this.setupCursorBadge(),this.setupChannels(),!this.stage||!this.canvas||!this.modelUrl||!WebGLRenderingContext){e.classList.add("is-fallback");return}this.setupRenderer(),this.setupScene(),this.setupHorizonLayer(),this.setupStones(),e.hasAttribute("data-lighting-controls")&&this.setupLightingControls(),this.bindEvents(),this.setupClosingScene(),this.loadModel(),this.render()}setupRenderer(){this.renderer=new Js({canvas:this.canvas,alpha:!0,antialias:!da.matches,powerPreference:"high-performance"}),this.renderer.setPixelRatio(nf()),this.renderer.outputColorSpace=Et,this.renderer.toneMapping=sf[ie.toneMapping],this.renderer.toneMappingExposure=ie.exposure}setupScene(){this.scene=new ir,this.camera=new Ft(42,1,.1,2e3),this.camera.position.set(0,0,13),this.hemisphereLight=new ks(ie.hemisphereSky,ie.hemisphereGround,ie.hemisphereIntensity),this.keyLight=new ii(ie.keyColor,ie.keyIntensity),this.keyLight.position.set(ie.keyX,ie.keyY,ie.keyZ),this.rimLight=new ii(ie.rimColor,ie.rimIntensity),this.rimLight.position.set(ie.rimX,ie.rimY,ie.rimZ),this.scene.add(this.hemisphereLight,this.keyLight,this.rimLight),this.createStars(Ti())}setupHorizonLayer(){this.horizonScene=new ir,this.horizonCamera=new Vn(-1,1,1,-1,0,1),this.horizonMaterial=new kt({uniforms:{uResolution:{value:new Ae(1,1)},uFloorColor:{value:new ye(ie.floorColor)},uGlowColor:{value:new ye(ie.horizonGlowColor)},uMixColor:{value:new ye(ie.mixColor)},uFloorHeight:{value:ie.floorHeight},uFloorTilt:{value:ie.floorTilt},uFloorPerspective:{value:ie.floorPerspective},uFloorTexture:{value:ie.floorTexture},uFloorTextureScale:{value:ie.floorTextureScale},uFloorRelief:{value:ie.floorRelief},uFloorLightAngle:{value:ie.floorLightAngle},uFloorShade:{value:ie.floorShade},uFloorHaze:{value:ie.floorHaze},uMixAmount:{value:ie.mixAmount},uMixScale:{value:ie.mixScale},uMixCoverage:{value:ie.mixCoverage},uMixSoftness:{value:ie.mixSoftness},uBloomHeight:{value:ie.horizonBloomHeight},uBloomIntensity:{value:ie.horizonBloomIntensity},uBloomBlur:{value:ie.horizonBloomBlur},uBloomRound:{value:ie.horizonBloomRound},uBloomFlat:{value:ie.horizonBloomFlat},uBloomCenterX:{value:ie.horizonBloomCenterX},uBloomWidth:{value:ie.horizonBloomWidth},uHorizonLine:{value:ie.horizonLine},uShowGradient:{value:ie.showHorizonGradient?1:0}},vertexShader:k1,fragmentShader:H1,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.horizonMesh=new yt(new Hn(2,2),this.horizonMaterial),this.horizonMesh.frustumCulled=!1,this.horizonScene.add(this.horizonMesh),this.root.classList.add("has-webgl-horizon")}setupStones(){this.stonesUrl&&(this.renderer.shadowMap.enabled=!da.matches,this.renderer.shadowMap.type=kr,this.stonesGroup=new _n,this.stonesGroup.position.set(ie.stonesX,ie.stonesY,ie.stonesZ),this.stonesGroup.layers.set(qi),this.scene.add(this.stonesGroup),this.groundHeightTexture=J1(),this.groundHeightTexture.repeat.set(8,8),this.groundAlphaTexture=Qg(),this.groundMaterial=new Fi({color:ie.floorColor,roughness:.94,metalness:0,bumpMap:this.groundHeightTexture,bumpScale:.22,alphaMap:this.groundAlphaTexture,alphaTest:.01,transparent:!0}),this.ground=new yt(new Hn(1,1),this.groundMaterial),this.ground.rotation.x=-Math.PI/2,this.ground.position.set(0,ie.groundY,ie.groundZ),this.ground.scale.set(ie.groundWidth,ie.groundDepth,1),this.ground.receiveShadow=!0,this.ground.layers.set(qi),this.scene.add(this.ground),this.stoneAmbient=new ks("#f4d9c5","#4a2530",ie.stoneAmbientIntensity),this.stoneLight1=new ii(ie.stoneLight1Color,ie.stoneLight1Intensity),this.stoneLight1.position.set(ie.stoneLight1X,ie.stoneLight1Y,ie.stoneLight1Z),this.stoneLight1.target.position.set(0,ie.stonesY,-3),this.stoneLight1.castShadow=!0,this.stoneLight1.shadow.mapSize.set(1024,1024),this.stoneLight1.shadow.camera.left=-12,this.stoneLight1.shadow.camera.right=12,this.stoneLight1.shadow.camera.top=12,this.stoneLight1.shadow.camera.bottom=-12,this.stoneLight1.shadow.camera.near=.1,this.stoneLight1.shadow.camera.far=80,this.stoneLight1.shadow.bias=-8e-4,this.stoneLight1.shadow.normalBias=.035,this.stoneLight2=new ii(ie.stoneLight2Color,ie.stoneLight2Intensity),this.stoneLight2.position.set(ie.stoneLight2X,ie.stoneLight2Y,ie.stoneLight2Z),this.stoneLight2.target.position.set(0,ie.stonesY,-3),this.groundLight=new ii(ie.groundLightColor,ie.groundLightIntensity),[this.stoneAmbient,this.stoneLight1,this.stoneLight1.target,this.stoneLight2,this.stoneLight2.target,this.groundLight,this.groundLight.target].forEach(e=>e.layers.set(qi)),this.scene.add(this.stoneAmbient,this.stoneLight1,this.stoneLight1.target,this.stoneLight2,this.stoneLight2.target,this.groundLight,this.groundLight.target),new uo().load(this.stonesUrl,({scene:e})=>{let t=K1(),n=[];e.layers.set(qi);let i=(o,l)=>{let c=o.geometry.boundingSphere?.radius||1,u=l.radius/c,h=o.geometry.boundingBox.max.y-o.geometry.boundingBox.min.y;o.scale.setScalar(u),o.userData.groundY=h*u*.5-l.embed,o.userData.baseScale=u,o.userData.halfHeight=h*u*.5,o.userData.slotEmbed=l.embed,o.userData.slotRadius=l.radius,o.position.set(l.position[0],o.userData.groundY-Number(this.effectSettings?.stonesEmbed??ie.stonesEmbed),l.position[1]),o.rotation.set(...l.rotation),o.name=`stone-${l.planet}`,o.userData.planet=l.planet,o.castShadow=!0,o.receiveShadow=!0,o.layers.set(qi);let d=new yt(new Hn(1,1),new Nn({map:t,transparent:!0,depthWrite:!1,opacity:ie.ground3dContactShadows}));d.rotation.x=-Math.PI/2,d.rotation.z=l.rotation[1],d.scale.set(l.radius*2.6,l.radius*2.1,1),d.position.set(l.position[0],-.004,l.position[1]),d.renderOrder=1,d.layers.set(qi),d.userData.isContactShadow=!0,o.userData.contact=d,n.push(d)},r=new Map;e.traverse(o=>{if(o.layers.set(qi),!o.isMesh)return;if(!df[o.name]){o.visible=!1;return}o.geometry.computeBoundingBox();let l=o.geometry.boundingBox.getCenter(new L);o.geometry.translate(-l.x,-l.y,-l.z),o.geometry.computeBoundingBox(),o.geometry.computeBoundingSphere(),(Array.isArray(o.material)?o.material:[o.material]).forEach(u=>{u&&(u.roughness=Math.max(u.roughness??.72,.72),u.needsUpdate=!0)}),r.set(o.name,o)});let a=f0.map(o=>{let l=r.get(o.source);if(!l)return null;let c=l.clone();return c.parent=null,[c,o,l.parent]}).filter(Boolean);r.forEach((o,l)=>i(o,df[l])),a.forEach(([o,l,c])=>{i(o,l),c.add(o)}),this.stonesGroup.add(e,...n),this.stonesReady=!0,this.applyLightingSettings(this.lightingBase??this.effectSettings??Ti()),this.root.classList.add("is-stones-ready")},void 0,()=>this.root.classList.add("is-stones-fallback")))}createStars(e){let t=Math.max(0,Math.round(Number(e.starCount))),n=new Float32Array(t*3),i=new Float32Array(t),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3);for(let c=0;c<t;c+=1)n[c*3]=(Math.random()-.5)*Ao.width,n[c*3+1]=Qe.lerp(Ao.bottom,Ao.top,Math.random()),n[c*3+2]=Qe.lerp(Ao.near,Ao.far,Math.random()),i[c]=Math.random()*Math.PI*2,r[c]=.4+Math.random()*1.6,a[c]=.35+Math.random()**3*1.65,Kg[Math.floor(Math.random()*Kg.length)].toArray(o,c*3);let l=new Ot;l.setAttribute("position",new gt(n,3)),l.setAttribute("aPhase",new gt(i,1)),l.setAttribute("aSpeed",new gt(r,1)),l.setAttribute("aSize",new gt(a,1)),l.setAttribute("aTint",new gt(o,3)),this.stars?(this.stars.geometry.dispose(),this.stars.geometry=l):(this.stars=new Ur(l,new kt({uniforms:{uTime:{value:0},uSize:{value:1},uPixelRatio:{value:1},uBrightness:{value:1},uTwinkleSpeed:{value:1},uTwinkleAmount:{value:0},uBloomSize:{value:0},uBloomIntensity:{value:0},uColor:{value:new ye},uVariation:{value:0}},vertexShader:B1,fragmentShader:z1,transparent:!0,depthWrite:!1,blending:Hr})),this.stars.renderOrder=-1,this.scene.add(this.stars)),this.starCount=t}updateStars(e,t){if(!this.stars)return;let n=this.effectSettings??ie;Math.round(Number(n.starCount))!==this.starCount&&this.createStars(n),this.stars.visible=af(n).stars;let i=this.stars.material.uniforms;i.uTime.value=e,i.uSize.value=Number(n.starSize),i.uPixelRatio.value=this.renderer.getPixelRatio(),i.uBrightness.value=Number(n.starBrightness),i.uTwinkleSpeed.value=Number(n.twinkleSpeed),i.uTwinkleAmount.value=Number(n.twinkleAmount),i.uBloomSize.value=Number(n.bloomSize),i.uBloomIntensity.value=Number(n.bloomIntensity),i.uColor.value.set(n.starColor),i.uVariation.value=Number(n.starColorVariation),this.stars.rotation.z+=t*Number(n.starDrift)*.01}readLightingSettings(){if(this.persistLighting=rf(Hg)==="1",Ze)return this.readV3LayoutSettings();if(!this.persistLighting)return ua(rs,null),Ti();try{let e=JSON.parse(rf(rs))||{};return e.lightingPresetVersion!==iu?Ti():{...Ti(),...e}}catch{return Ti()}}readV3LayoutSettings(){let e=null;if(this.persistLighting)try{e=JSON.parse(rf(rs))}catch{e=null}else ua(rs,null);let t=e&&e.lightingPresetVersion===iu;return this.v3Layouts={a:{...wo("a"),...t?e.a:{}},b:{...wo("b"),...t?e.b:{}}},this.v3ActiveLayout=C1(),{...this.v3Layouts[this.v3ActiveLayout]}}saveLightingSettings(e){if(!this.persistLighting)return;if(!Ze){ua(rs,JSON.stringify(e));return}let t=this.v3Layouts??{},n=this.v3ActiveLayout??"a";t[n]={...e},ua(rs,JSON.stringify({lightingPresetVersion:iu,...t}))}applyLightingSettings(e){this.lightingBase=e;let t=this.groundPaletteFor(this.channelIndex??0,e);e={...e,...t},this.groundPaletteFrame||(this.currentGroundPalette=t),this.hemisphereLight.color.set(e.hemisphereSky),this.hemisphereLight.groundColor.set(e.hemisphereGround),this.hemisphereLight.intensity=Number(e.hemisphereIntensity),this.keyLight.color.set(e.keyColor),this.keyLight.intensity=Number(e.keyIntensity),this.keyLight.position.set(Number(e.keyX),Number(e.keyY),Number(e.keyZ)),this.rimLight.color.set(e.rimColor),this.rimLight.intensity=Number(e.rimIntensity),this.rimLight.position.set(Number(e.rimX),Number(e.rimY),Number(e.rimZ)),this.renderer.toneMappingExposure=Number(e.exposure),this.renderer.toneMapping=sf[e.toneMapping]??lr,this.root.style.setProperty("--effect-blur",`calc(${Number(e.effectBlur)} * var(--u, 1px))`),this.root.style.setProperty("--grain-opacity",Number(e.grainOpacity)),document.documentElement.style.setProperty("--grain-opacity",Number(e.grainOpacity)),this.root.style.setProperty("--section-grain-opacity",Number(e.sectionGrainOpacity)),document.documentElement.style.setProperty("--section-grain-opacity",Number(e.sectionGrainOpacity)),this.grainLayers.forEach(l=>{l.node.setAttribute("baseFrequency",Number(e.grainFrequency).toFixed(2))}),this.root.style.setProperty("--space-color",e.spaceColor),P1(e.uiPrimaryColor,e.uiSecondaryColor),this.root.style.setProperty("--card-flip-duration",`${Number(e.cardFlipDuration)}ms`),this.root.style.setProperty("--card-scale",Number(e.cardScale)),this.root.style.setProperty("--campaign-scale",Number(e.layoutCampaignScale)),["X","Y","TitleX","TitleY","NoteX","NoteY"].forEach(l=>{let c=l.replace(/([A-Z])/g,"-$1").toLowerCase();this.root.style.setProperty(`--manifesto${c.startsWith("-")?c:`-${c}`}`,`calc(${Number(e[`manifesto${l}`])} * var(--u, 1px))`)}),this.root.style.setProperty("--manifesto-scale",Number(e.manifestoScale)),this.root.style.setProperty("--manifesto-opacity",Number(e.manifestoOpacity)),this.root.style.setProperty("--campaign-open-x",`calc(${Number(e.layoutCampaignOpenX)} * var(--u, 1px))`),this.root.style.setProperty("--campaign-open-y",`calc(${Number(e.layoutCampaignOpenY)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-x",`calc(${Number(e.groundCampaignX)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-y",`calc(${Number(e.groundCampaignY)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-scale",Number(e.groundCampaignScale)),this.root.style.setProperty("--ground-campaign-open-x",`calc(${Number(e.groundCampaignOpenX)} * var(--u, 1px))`),this.root.style.setProperty("--ground-campaign-open-y",`calc(${Number(e.groundCampaignOpenY)} * var(--u, 1px))`),[[".altar-solar__fortune-cards","layoutCardX","layoutCardY"],[".altar-solar__campaign","layoutCampaignCenterX","layoutCampaignY"]].forEach(([l,c,u])=>{let h=this.root.querySelector(l);h?.style.setProperty("--pos-x",`calc(${Number(e[c])} * var(--u, 1px))`),h?.style.setProperty("--pos-y",`calc(${Number(e[u])} * var(--u, 1px))`)}),["rose","cyan","teal"].forEach(l=>{let c=l[0].toUpperCase()+l.slice(1);this.root.querySelectorAll(`.altar-solar__glow--${l}`).forEach(u=>{u.style.setProperty("--c",e[`glow${c}Color`]),u.style.setProperty("--glow-intensity",Number(e[`glow${c}Intensity`]))})}),this.root.querySelectorAll(".altar-solar__horizon").forEach(l=>{l.hidden=!e.showHorizonFloor,l.style.setProperty("--floor-color",e.floorColor),l.style.setProperty("--glow-color",e.horizonGlowColor)}),this.root.style.setProperty("--floor-height",`calc(${Number(e.floorHeight)} * var(--u, 1px))`),this.root.style.setProperty("--bloom-height",`calc(${Number(e.horizonBloomHeight)} * var(--u, 1px))`),this.root.style.setProperty("--bloom-intensity",Number(e.horizonBloomIntensity)),this.root.style.setProperty("--bloom-blur",`calc(${Number(e.horizonBloomBlur)} * var(--u, 1px))`),this.root.style.setProperty("--horizon-line",Number(e.horizonLine)),this.root.style.setProperty("--floor-tilt",`${Number(e.floorTilt)}deg`),this.root.style.setProperty("--floor-perspective",`calc(${Number(e.floorPerspective)} * var(--u, 1px))`),this.root.style.setProperty("--floor-texture",Number(e.floorTexture)),this.root.style.setProperty("--floor-shade",Number(e.floorShade)),this.root.style.setProperty("--floor-haze",Number(e.floorHaze)),this.root.querySelectorAll("[data-floor-noise]").forEach(l=>l.setAttribute("baseFrequency",Number(e.floorTextureScale))),this.root.querySelectorAll("[data-floor-relief]").forEach(l=>l.setAttribute("surfaceScale",Number(e.floorRelief))),this.root.style.setProperty("--floor-mix",Number(e.mixAmount));let n=1/Math.max(Number(e.mixSoftness),.02),i=.8-.6*Number(e.mixCoverage),r=`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${n.toFixed(3)} 0 0 0 ${(.5-n*i).toFixed(3)}`;if(this.root.querySelectorAll("[data-mix-noise]").forEach(l=>l.setAttribute("baseFrequency",Number(e.mixScale))),this.root.querySelectorAll("[data-mix-alpha]").forEach(l=>l.setAttribute("values",r)),this.root.querySelectorAll("[data-mix-flood]").forEach(l=>l.setAttribute("flood-color",e.mixColor)),this.root.querySelectorAll("[data-floor-light]").forEach(l=>l.setAttribute("azimuth",Number(e.floorLightAngle))),this.root.querySelectorAll(".altar-solar__gradient").forEach(l=>{l.hidden=!e.showHorizonGradient}),this.horizonMaterial){let l=this.horizonMaterial.uniforms;l.uFloorColor.value.set(e.floorColor),l.uGlowColor.value.set(e.horizonGlowColor),l.uMixColor.value.set(e.mixColor),l.uFloorHeight.value=Number(e.floorHeight),l.uFloorTilt.value=Number(e.floorTilt),l.uFloorPerspective.value=Number(e.floorPerspective),l.uFloorTexture.value=Number(e.floorTexture),l.uFloorTextureScale.value=Number(e.floorTextureScale),l.uFloorRelief.value=Number(e.floorRelief),l.uFloorLightAngle.value=Number(e.floorLightAngle),l.uFloorShade.value=Number(e.floorShade),l.uFloorHaze.value=Number(e.floorHaze),l.uMixAmount.value=Number(e.mixAmount),l.uMixScale.value=Number(e.mixScale),l.uMixCoverage.value=Number(e.mixCoverage),l.uMixSoftness.value=Number(e.mixSoftness),l.uBloomHeight.value=Number(e.horizonBloomHeight),l.uBloomIntensity.value=Number(e.horizonBloomIntensity),l.uBloomBlur.value=Number(e.horizonBloomBlur),l.uBloomRound.value=Number(e.horizonBloomRound),l.uBloomFlat.value=Number(e.horizonBloomFlat),l.uBloomCenterX.value=Number(e.horizonBloomCenterX),l.uBloomWidth.value=Number(e.horizonBloomWidth),l.uHorizonLine.value=Number(e.horizonLine),l.uShowGradient.value=e.showHorizonGradient?1:0,this.horizonMesh.visible=!!e.showHorizonFloor}if(this.updateStones(e),this.groundMaterial){this.groundMaterial.color.set(e.ground3dColor),this.groundMaterial.bumpScale=Number(e.ground3dRelief)*.09,this.groundMaterial.roughness=Number(e.ground3dRoughness);let l=Qe.clamp(.08/Math.max(Number(e.ground3dTextureScale),.002),3,32);this.groundHeightTexture.repeat.set(l,l),this.groundHeightTexture.needsUpdate=!0,this.groundMaterial.needsUpdate=!0}let a=["ground3dFadeSides","ground3dFadeFar","ground3dFadeNear","ground3dFadeSoftness"].map(l=>e[l]).join("|");if(this.groundMaterial&&a!==this.groundFadeKey&&(this.groundFadeKey=a,this.groundAlphaTexture?.dispose(),this.groundAlphaTexture=Qg({sides:e.ground3dFadeSides,far:e.ground3dFadeFar,near:e.ground3dFadeNear,softness:e.ground3dFadeSoftness}),this.groundMaterial.alphaMap=this.groundAlphaTexture,this.groundMaterial.needsUpdate=!0),this.groundLight&&(this.groundLight.color.set(e.groundLightColor),this.groundLight.intensity=Number(e.groundLightIntensity),this.groundLight.position.set(Number(e.groundX)+Number(e.groundLightX),Number(e.groundY)+Number(e.groundLightY),Number(e.groundZ)+Number(e.groundLightZ)),this.groundLight.target.position.set(Number(e.groundX)+Number(e.groundLightTargetX),Number(e.groundY),Number(e.groundZ)+Number(e.groundLightTargetZ))),this.ground){let l=Qe.degToRad;this.ground.rotation.set(-Math.PI/2+l(Number(e.groundRotX)),l(Number(e.groundRotY)),l(Number(e.groundRotZ)),"YXZ"),this.ground.position.set(Number(e.groundX),Number(e.groundY),Number(e.groundZ)),this.ground.scale.set(Number(e.groundWidth)*Number(e.groundStretchX),Number(e.groundDepth),1),this.ground.visible=e.showGround3d!==!1,this.ground.receiveShadow=e.ground3dShadows!==!1}this.stoneAmbient&&(this.stoneAmbient.intensity=Number(e.stoneAmbientIntensity)),this.stoneLight1&&(this.stoneLight1.color.set(e.stoneLight1Color),this.stoneLight1.intensity=Number(e.stoneLight1Intensity),this.stoneLight1.position.set(Number(e.stoneLight1X),Number(e.stoneLight1Y),Number(e.stoneLight1Z)),this.stoneLight1.target.position.set(0,Number(e.groundY),Number(e.groundZ)-3)),this.stoneLight2&&(this.stoneLight2.color.set(e.stoneLight2Color),this.stoneLight2.intensity=Number(e.stoneLight2Intensity),this.stoneLight2.position.set(Number(e.stoneLight2X),Number(e.stoneLight2Y),Number(e.stoneLight2Z)),this.stoneLight2.target.position.set(0,Number(e.groundY),Number(e.groundZ)-3)),this.sectionGuide&&(this.sectionGuide.hidden=!e.showSections,this.updateTramoHud()),this.applyWornText(e);let o=document.documentElement.style;o.setProperty("--m-stones-scale",Number(e.mobileStonesScale??ie.mobileStonesScale)),o.setProperty("--m-stones-x",Number(e.mobileStonesX??ie.mobileStonesX)),o.setProperty("--m-stones-y",Number(e.mobileStonesY??ie.mobileStonesY)),this.closingActive&&this.resizeClosingScene(),this.effectSettings=e}applyWornText(e){let t=document.getElementById("altar-worn-text");if(!t)return;let n=Qe.clamp(Number(e.wornErosion),0,1);t.querySelector("[data-worn-noise]")?.setAttribute("baseFrequency",Number(e.wornNoiseScale).toFixed(3)),t.querySelector("[data-worn-displace]")?.setAttribute("scale",Number(e.wornRoughness).toFixed(2)),t.querySelector("[data-worn-erode]")?.setAttribute("values",`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  8 0 0 0 ${(-8*n*.7).toFixed(3)}`),t.querySelector("[data-worn-blur]")?.setAttribute("stdDeviation",Number(e.wornBlur).toFixed(2)),document.documentElement.classList.toggle("has-worn-text",!!e.wornEnabled)}setupLightingControls(){let e=this.readLightingSettings(),t=document.createElement("aside");t.className="lighting-panel is-collapsed",t.setAttribute("aria-label","Controlador de iluminaci\xF3n"),t.innerHTML=`
      ${Ze?`<div class="lighting-panel__layouts">
        <p>Editando</p>
        <div role="group" aria-label="Layout que se edita">
          <button type="button" data-panel-layout="a">${Yg.a}</button>
          <button type="button" data-panel-layout="b">${Yg.b}</button>
        </div>
        <p class="lighting-panel__layouts-note">Los cambios solo afectan a este layout.</p>
      </div>`:""}
      <div class="lighting-panel__body">
        <label class="is-boolean">Recordar cambios <input type="checkbox" data-lighting-persist></label>
        <label class="is-boolean">Ver tramos <input type="checkbox" data-lighting="showSections"></label>
        <details><summary>Paleta UI</summary>
          <label class="is-color">Primario <input type="color" data-lighting="uiPrimaryColor"></label>
          <label class="is-color">Secundario <input type="color" data-lighting="uiSecondaryColor"></label>
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
        <details><summary>Carta extras</summary>
          <label>Inclinaci\xF3n 3D \xB0 <span><input type="range" min="0" max="25" step="0.5" data-lighting="foilTilt"><output></output></span></label>
          <label>Curvatura <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilCurl"><output></output></span></label>
          <label>Esquina levantada <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilCurlCorner"><output></output></span></label>
          <label class="is-color">Tinte <input type="color" data-lighting="foilTintColor"></label>
          <label>Tinte cantidad <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilTintAmount"><output></output></span></label>
          <label>Cepillado <span><input type="range" min="0" max="1" step="0.01" data-lighting="foilBrushed"><output></output></span></label>
          <label>Cepillado \xB0 <span><input type="range" min="0" max="180" step="1" data-lighting="foilBrushedAngle"><output></output></span></label>
        </details>
        ${Ze?"":`<details><summary>Fondo</summary>
          <label class="is-color">Color espacio <input type="color" data-lighting="spaceColor"></label>
          <label class="is-color">Luz rosa <input type="color" data-lighting="glowRoseColor"></label>
          <label>Rosa intensidad <span><input type="range" min="0" max="5" step="0.05" data-lighting="glowRoseIntensity"><output></output></span></label>
          <label class="is-color">Luz celeste <input type="color" data-lighting="glowCyanColor"></label>
          <label>Celeste intensidad <span><input type="range" min="0" max="5" step="0.05" data-lighting="glowCyanIntensity"><output></output></span></label>
          <label class="is-color">Luz verde agua <input type="color" data-lighting="glowTealColor"></label>
          <label>Verde agua intensidad <span><input type="range" min="0" max="20" step="0.1" data-lighting="glowTealIntensity"><output></output></span></label>
        </details>`}
        <details><summary>Piedras \xB7 luces</summary>
          <label>Ambiente <span><input type="range" min="0" max="3" step="0.05" data-lighting="tierra1Ambient"><output></output></span></label>
          <label class="is-color">Luz 1 color <input type="color" data-lighting="tierra1Light1Color"></label>
          <label>Luz 1 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1Light1Intensity"><output></output></span></label>
          <label class="is-color">Luz 2 color <input type="color" data-lighting="tierra1Light2Color"></label>
          <label>Luz 2 intensidad <span><input type="range" min="0" max="10" step="0.05" data-lighting="tierra1Light2Intensity"><output></output></span></label>
${N1(1)}
        </details>
        <details><summary>Piso sombras</summary>
          <label class="is-boolean">Visible <input type="checkbox" data-lighting="showGround3d"></label>
          <label class="is-boolean">Recibe sombras <input type="checkbox" data-lighting="ground3dShadows"></label>
          <label>Sombra contacto <span><input type="range" min="0" max="1" step="0.01" data-lighting="ground3dContactShadows"><output></output></span></label>
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
        <details><summary>Piedras \xB7 mobile</summary>
          <label>Escala <span><input type="range" min="0.5" max="3" step="0.01" data-lighting="mobileStonesScale"><output></output></span></label>
          <label>Mover X <span><input type="range" min="-1" max="1" step="0.01" data-lighting="mobileStonesX"><output></output></span></label>
          <label>Mover Y <span><input type="range" min="-1" max="1" step="0.01" data-lighting="mobileStonesY"><output></output></span></label>
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
          ${Ze?"":'<label>Grano secc. 3\xB74 <span><input type="range" min="0" max="0.5" step="0.01" data-lighting="sectionGrainOpacity"><output></output></span></label>'}
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
        <details><summary>Sol</summary>${Ze?`
          <p class="lighting-panel__status" data-sun-status></p>
          <label class="is-boolean">Junto a la foto <input type="checkbox" data-lighting="filmSun"></label>
          <details class="lighting-panel__subgroup" data-sun-mode="film" open><summary>Junto a la foto</summary>
            <label>Tama\xF1o % foto <span><input type="range" min="2" max="60" step="0.1" data-lighting="filmSunSize"><output></output></span></label>
            <label>X % foto <span><input type="range" min="-150" max="150" step="0.1" data-lighting="filmSunX"><output></output></span></label>
            <label>Y % foto <span><input type="range" min="-100" max="200" step="0.5" data-lighting="filmSunY"><output></output></span></label>
          </details>
          <details class="lighting-panel__subgroup" open><summary>Apariencia</summary>
          <label>Tama\xF1o <span><input type="range" min="0.2" max="3" step="0.01" data-lighting="sunSize"><output></output></span></label>
          <label>Emisi\xF3n <span><input type="range" min="0" max="10" step="0.05" data-lighting="sunEmissive"><output></output></span></label>
          <label class="is-color">Color emisi\xF3n <input type="color" data-lighting="sunEmissiveColor"></label>
          <label>Rotaci\xF3n <span><input type="range" min="0" max="5" step="0.05" data-lighting="sunSpin"><output></output></span></label>
          <label>Halo tama\xF1o <span><input type="range" min="1" max="8" step="0.05" data-lighting="sunGlowSize"><output></output></span></label>
          <label>Halo intensidad <span><input type="range" min="0" max="3" step="0.05" data-lighting="sunGlowIntensity"><output></output></span></label>
          <label class="is-color">Color halo <input type="color" data-lighting="sunGlowColor"></label>
          <label>Luz a planetas <span><input type="range" min="0" max="30" step="0.1" data-lighting="sunLightIntensity"><output></output></span></label>
          <label class="is-color">Color luz <input type="color" data-lighting="sunLightColor"></label>
          </details>`:`
          <label>Tama\xF1o <span><input type="range" min="0.2" max="3" step="0.01" data-lighting="sunSize"><output></output></span></label>
          <label>Emisi\xF3n <span><input type="range" min="0" max="10" step="0.05" data-lighting="sunEmissive"><output></output></span></label>
          <label class="is-color">Color emisi\xF3n <input type="color" data-lighting="sunEmissiveColor"></label>
          <label>Rotaci\xF3n <span><input type="range" min="0" max="5" step="0.05" data-lighting="sunSpin"><output></output></span></label>
          <label>Halo tama\xF1o <span><input type="range" min="1" max="8" step="0.05" data-lighting="sunGlowSize"><output></output></span></label>
          <label>Halo intensidad <span><input type="range" min="0" max="3" step="0.05" data-lighting="sunGlowIntensity"><output></output></span></label>
          <label class="is-color">Color halo <input type="color" data-lighting="sunGlowColor"></label>
          <label>Luz a planetas <span><input type="range" min="0" max="30" step="0.1" data-lighting="sunLightIntensity"><output></output></span></label>
          <label class="is-color">Color luz <input type="color" data-lighting="sunLightColor"></label>
`}
        </details>
        <details><summary>Sistema</summary>
          <label>Giro auto \xB0/s <span><input type="range" min="-30" max="30" step="0.5" data-lighting="systemSpin"><output></output></span></label>
          <label>Flotaci\xF3n <span><input type="range" min="0" max="2" step="0.05" data-lighting="systemFloat"><output></output></span></label>
          <label>Vel. flotaci\xF3n <span><input type="range" min="0" max="3" step="0.05" data-lighting="systemFloatSpeed"><output></output></span></label>
          <label>Parallax mouse \xB0 <span><input type="range" min="0" max="30" step="0.5" data-lighting="systemParallax"><output></output></span></label>
        </details>
        ${Ze?`<details><summary>Cielo</summary>
          <label class="is-boolean">Estrellas <input type="checkbox" data-lighting="showStars"></label>
          <label class="is-boolean">Planetas <input type="checkbox" data-lighting="showPlanets"></label>
        </details>`:""}
        ${Ze?"":`<details><summary>Onda layout</summary>
          <label class="is-color">Color <input type="color" data-lighting="layoutWaveColor"></label>
        </details>`}
        <details><summary>${Ze?"Sistema \xB7 posici\xF3n":"Sistema \xB7 layout A"}</summary>
          <label>Posici\xF3n X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system1X"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system1Y"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system1Z"><output></output></span></label>
          <label>Rotaci\xF3n X <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotX"><output></output></span></label>
          <label>Rotaci\xF3n Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotY"><output></output></span></label>
          <label>Rotaci\xF3n Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system1RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system1Scale"><output></output></span></label>
        </details>
        ${Ze?"":`        <details><summary>Sistema \xB7 layout B</summary>
          <label>Posici\xF3n X <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system2X"><output></output></span></label>
          <label>Posici\xF3n Y <span><input type="range" min="-50" max="50" step="0.05" data-lighting="system2Y"><output></output></span></label>
          <label>Posici\xF3n Z <span><input type="range" min="-100" max="10" step="0.05" data-lighting="system2Z"><output></output></span></label>
          <label>Rotaci\xF3n X <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotX"><output></output></span></label>
          <label>Rotaci\xF3n Y <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotY"><output></output></span></label>
          <label>Rotaci\xF3n Z <span><input type="range" min="-180" max="180" step="1" data-lighting="system2RotZ"><output></output></span></label>
          <label>Escala <span><input type="range" min="0.2" max="100" step="0.05" data-lighting="system2Scale"><output></output></span></label>
        </details>`}
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
        ${Ze?`<details><summary>Texto desgastado</summary>
          <label class="is-boolean">Activo <input type="checkbox" data-lighting="wornEnabled"></label>
          <label>Desenfoque px <span><input type="range" min="0" max="3" step="0.05" data-lighting="wornBlur"><output></output></span></label>
          <label>Desgaste <span><input type="range" min="0" max="1" step="0.01" data-lighting="wornErosion"><output></output></span></label>
          <label>Escala ruido <span><input type="range" min="0.05" max="3" step="0.05" data-lighting="wornNoiseScale"><output></output></span></label>
          <label>Bordes irregulares <span><input type="range" min="0" max="8" step="0.1" data-lighting="wornRoughness"><output></output></span></label>
        </details>`:""}
        <details><summary>Render</summary>
          <label>Exposici\xF3n <span><input type="range" min="0.1" max="3" step="0.05" data-lighting="exposure"><output></output></span></label>
          <label class="is-select">Color mapping <select data-lighting="toneMapping">${Object.keys(sf).map(m=>`<option>${m}</option>`).join("")}</select></label>
        </details>
        ${Ze?'<button class="lighting-panel__reset" type="button" data-lighting-copy>Copiar al layout B</button>':""}
        <button class="lighting-panel__reset" type="button" data-lighting-reset>Restablecer</button>
      </div>
      <button class="lighting-panel__toggle" type="button" aria-expanded="false">Open Controls</button>`;let n=[{label:"01 \xB7 Fondo",groups:["Fondo"]},{label:"02 \xB7 3D",groups:["Cielo","Ambiente","Principal c\xE1lida","Contraluz violeta","Estrellas","Estrellas fugaces","\xD3rbitas","Sol","Sistema","Sistema \xB7 layout A","Sistema \xB7 layout B","Sistema \xB7 posici\xF3n","Onda layout","Render"]},{label:"03 \xB7 Piedras (cierre)",groups:["Piedras \xB7 mobile","Piedras","Piedras \xB7 luces","Iluminaci\xF3n suelo","Piso sombras"]},{label:"04 \xB7 Grainy blur",groups:["Grainy blur"]},{label:"05 \xB7 Carta",groups:["Carta","Carta foil","Carta extras"]},...Ze?[{label:"06 \xB7 Texto secciones 2 y 4",groups:["Texto desgastado"]}]:[]],i=t.querySelector(".lighting-panel__body"),r=t.querySelector("[data-lighting-reset]"),a=new Map(Array.from(i.querySelectorAll(":scope > details")).map(m=>[m.querySelector("summary").textContent.trim(),m])),o=document.createDocumentFragment();n.forEach(({label:m,groups:_})=>{let p=document.createElement("p");p.className="lighting-panel__layer",p.textContent=m,_.some(g=>a.has(g))&&o.appendChild(p),_.forEach(g=>{let b=a.get(g);b&&o.appendChild(b)})}),i.insertBefore(o,i.querySelector("[data-lighting-copy]")??r);let l=(m,_)=>{m.type==="checkbox"?m.checked=!!_:m.value=_};t.querySelectorAll('input[type="range"]').forEach(m=>{let _=m.parentElement.querySelector("output");if(!_)return;let p=document.createElement("input");p.type="text",p.inputMode="decimal",p.className="lighting-panel__number",p.setAttribute("aria-label",`${m.closest("label")?.firstChild?.textContent?.trim()||"Valor"} (n\xFAmero)`),_.replaceWith(p);let g=()=>{let b=Number(String(p.value).replace(",","."));if(!Number.isFinite(b)){c();return}b<Number(m.min)&&(m.min=String(b)),b>Number(m.max)&&(m.max=String(b)),m.value=String(b),m.dispatchEvent(new Event("input"))};p.addEventListener("change",g),p.addEventListener("keydown",b=>{b.key==="Enter"&&p.blur(),b.key==="Escape"&&(c(),p.blur())})});let c=()=>{t.querySelectorAll('input[type="range"]').forEach(m=>{let _=m.parentElement.querySelector(".lighting-panel__number");if(!_||document.activeElement===_)return;let p=Math.max(1,(m.step.split(".")[1]||"").length);_.value=Number(m.value).toFixed(p)})};this.panelSettings=e;let u=t.querySelector("[data-lighting-copy]"),h=()=>{if(!Ze)return;let m=this.v3ActiveLayout??"a",_=m==="a"?"b":"a";t.querySelectorAll("[data-panel-layout]").forEach(p=>{p.setAttribute("aria-pressed",String(p.dataset.panelLayout===m))}),t.querySelector("[data-lighting-reset]").textContent=`Restablecer layout ${m.toUpperCase()}`,u&&(u.textContent=`Copiar todo al layout ${_.toUpperCase()}`)};t.querySelectorAll("[data-panel-layout]").forEach(m=>{m.addEventListener("click",()=>{m.dataset.panelLayout!==(this.v3ActiveLayout??"a")&&document.querySelector("[data-altar-layout-toggle]")?.click()})}),u?.addEventListener("click",()=>{let m=(this.v3ActiveLayout??"a")==="a"?"b":"a";window.confirm(`\xBFReemplazar todos los valores del layout ${m.toUpperCase()} por los de este?`)&&(this.v3Layouts[m]={...e},this.saveLightingSettings(e))});let d=t.querySelector("[data-sun-status]");this.onSunMode=m=>{d&&(d.textContent={film:'Sol junto a la foto. "Tama\xF1o" lo escala (0.31 = tama\xF1o del dise\xF1o).',"3d":"Sol en el sistema solar.",fallback:"Sol en el sistema solar: junto a la foto no entra en esta pantalla."}[m],t.querySelector('[data-sun-mode="film"]')?.classList.toggle("is-idle",m!=="film"))},this.sunMode&&this.onSunMode(this.sunMode),this.refreshLightingPanel=()=>{t.querySelectorAll("[data-lighting]").forEach(m=>l(m,e[m.dataset.lighting])),c(),h()},h(),t.querySelectorAll("[data-lighting]").forEach(m=>{l(m,e[m.dataset.lighting]),m.addEventListener("input",()=>{let _=m.dataset.lighting;e[_]=m.type==="checkbox"?m.checked:m.type==="range"?Number(m.value):m.value;let p=_.match(/^system([1-4])(X|Y|Z|RotX|RotY|RotZ|Scale)$/),g=this.isV2Home&&!Ze&&p&&{1:"a",2:"b"}[p[1]];if(!Ze)if(g){let w=document.querySelector("[data-altar-layout-toggle]");w&&w.getAttribute("aria-checked")==="true"!=(g==="b")&&w.click()}else p&&this.showChannel?.(Number(p[1])-1);let b=_.match(/^tierra([1-4])/);b&&this.showChannel?.(Number(b[1])-1),c(),this.applyLightingSettings(e),this.saveLightingSettings(e)})});let f=t.querySelector("[data-lighting-persist]");f.checked=this.persistLighting,f.addEventListener("change",()=>{this.persistLighting=f.checked,ua(Hg,this.persistLighting?"1":null),this.persistLighting?this.saveLightingSettings(e):ua(rs,null)}),t.querySelector(".lighting-panel__toggle").addEventListener("click",m=>{let _=t.classList.toggle("is-collapsed");m.currentTarget.setAttribute("aria-expanded",String(!_)),m.currentTarget.textContent=_?"Open Controls":"Close Controls"}),t.querySelector("[data-shooting-trigger]").addEventListener("click",()=>{this.shootingStars.length||this.spawnShootingStar(e)}),t.querySelector("[data-lighting-reset]").addEventListener("click",()=>{if(Ze){let m=Object.fromEntries(Xg.map(_=>[_,e[_]]));Object.assign(e,wo(this.v3ActiveLayout??"a"),m)}else Object.assign(e,Ti());this.saveLightingSettings(e),t.querySelectorAll("[data-lighting]").forEach(m=>{l(m,e[m.dataset.lighting])}),c(),this.applyLightingSettings(e)}),this.setupSectionGuide(),c(),this.applyLightingSettings(e),document.body.appendChild(t)}loadModel(){new uo().load(this.modelUrl,({scene:t})=>{this.model=t,this.system=new _n,this.system.add(this.model),this.scene.add(this.system);let n=null,i=[],r={};t.traverse(a=>{if(!a.isMesh)return;let o=j1(a);if(a.castShadow=!1,a.receiveShadow=!1,(Array.isArray(a.material)?a.material:[a.material]).forEach(u=>{u&&(u.roughness=Math.max(u.roughness??.5,.48),u.needsUpdate=!0)}),Ze&&Vg[o]&&eT(a,Vg[o]),o==="saturn-ring"&&Ze&&Gg.includes(o)){a.visible=!1;return}if(o==="saturn-ring"){i.push(a);return}let c=o?Io[o]:null;if(!c||Ze&&Gg.includes(o)){a.visible=!1;return}a.position.set(...c.position),a.rotation.set(.08,Math.random()*Math.PI,o==="saturn"?-.28:0),t0(a,c.radius*(o==="sun"?1:.38)),a.userData.basePosition=a.position.clone(),a.userData.spinSpeed=.035+Math.random()*.07,this.spinners.push(a),o!=="sun"&&this.nightMeshes.push(a),r[o]=a,o==="saturn"&&(n=a.position.clone())}),i.forEach(a=>{a.position.copy(n||new L(...Io.saturn.position)),a.rotation.set(.08,0,-.28),t0(a,1.02*.38),a.userData.basePosition=a.position.clone(),this.spinners.push(a),this.nightMeshes.push(a)}),this.setupOrbits(r,i),this.root.classList.add("is-ready"),this.createIdleAnimation()},void 0,()=>this.root.classList.add("is-fallback"))}setupOrbits(e,t){if(this.sun=e.sun,!this.sun)return;let n=this.sun.position;this.model.position.copy(n).negate(),this.setupSun();let i=new Ot().setFromPoints(Array.from({length:Zg},(r,a)=>{let o=a/Zg*Math.PI*2;return new L(Math.cos(o),Math.sin(o),0)}));if(Object.entries(e).forEach(([r,a])=>{if(r==="sun"||r==="moon")return;let o=a.position.clone().sub(n),l=new Dr(i,new sr({transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,this.sun.parent.add(l),this.orbiters.push({mesh:a,distance:Ze&&w1[r]||Io[r].orbit||o.length(),angle:Math.atan2(o.y,o.x),line:l,rings:r==="saturn"?t:[]})}),Ze){this.orbiters=[],this.composedBodies=Object.fromEntries(Object.keys(Wg).filter(r=>e[r]).map(r=>[r,e[r]]));return}if(e.moon&&e.earth){let r=e.moon.position.clone().sub(e.earth.position);this.moon={mesh:e.moon,distance:r.length(),earth:e.earth,angle:Math.atan2(r.y,r.x)}}}setupSun(){let e=Array.isArray(this.sun.material)?this.sun.material:[this.sun.material];this.sunMaterials=e.filter(t=>t&&"emissiveIntensity"in t),this.sunMaterials.forEach(t=>{t.color.set(0),t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#ifdef USE_EMISSIVEMAP
            vec4 solarTexture = texture2D(emissiveMap, vEmissiveMapUv);
            float solarRelief = dot(solarTexture.rgb, vec3(0.2126, 0.7152, 0.0722));
            totalEmissiveRadiance *= 0.3 + 0.9 * solarRelief;
          #endif`)},t.customProgramCacheKey=()=>"altar-salmon-sun-v1",t.needsUpdate=!0}),this.sunBaseScale=this.sun.scale.x,this.sunRadius=Io.sun.radius,this.sunGlow=new Da(new Ds({map:$1(),transparent:!0,depthWrite:!1,blending:Hr,toneMapped:!1})),this.sunGlow.renderOrder=1,this.sunLight=new zr(16777215,0,0,0),this.sunGlow.position.copy(this.sun.position),this.sunLight.position.copy(this.sun.position),this.sun.parent.add(this.sunGlow,this.sunLight),this.sunHome=this.sun.position.clone(),this.filmSunFilm=Ze?document.getElementById("altar-hero-campaign"):null}reportSunMode(e){e!==this.sunMode&&(this.sunMode=e,this.onSunMode?.(e))}updateFilmSun(e){if(!this.sun||!this.sunHome)return;let t=this.placeSunBesideFilm(e);t||this.sun.position.copy(this.sunHome),this.sunGlow.position.copy(this.sun.position),this.sunLight.position.copy(this.sun.position),this.reportSunMode(t?"film":e.filmSun&&this.filmSunFilm?"fallback":"3d")}placeSunBesideFilm(e){let t=this.filmSunFilm,n=this.renderer?.domElement;if(!e.filmSun||!t||!n)return!1;let i=t.getBoundingClientRect(),r=n.getBoundingClientRect();if(!i.width||!r.width||!r.height)return!1;let a=0,o=0;for(let R=t;R&&R!==document.documentElement;R=R.parentElement)a+=parseFloat(R.style.getPropertyValue("--drag-x"))||0,o+=parseFloat(R.style.getPropertyValue("--drag-y"))||0;let l=i.left-a,c=i.top-o,u=i.width*Number(e.filmSunSize)/200,h=l+i.width+i.width*Number(e.filmSunX)/100-r.left,d=c+i.height*Number(e.filmSunY)/100-u-r.top;if(h-u<0||h+u>r.width)return!1;let f=this.camera,m=this.sun.parent;this.system.updateMatrixWorld(!0),f.updateMatrixWorld();let _=f.getWorldDirection(this.filmSunForward??(this.filmSunForward=new L)),p=f.getWorldPosition(this.filmSunOrigin??(this.filmSunOrigin=new L)),g=m.localToWorld((this.filmSunHomeWorld??(this.filmSunHomeWorld=new L)).copy(this.sunHome)),b=Math.max(g.sub(p).dot(_),1),w=(this.filmSunRay??(this.filmSunRay=new L)).set(h/r.width*2-1,-(d/r.height)*2+1,.5).unproject(f).sub(p).normalize(),v=(this.filmSunTarget??(this.filmSunTarget=new L)).copy(p).addScaledVector(w,b/w.dot(_));this.sun.position.copy(m.worldToLocal(v));let S=f.view?.enabled?f.view.fullHeight:r.height,E=2*b*Math.tan(Qe.degToRad(f.fov)/2)/(f.zoom*S),A=m.getWorldScale(this.filmSunScale??(this.filmSunScale=new L)).x,x=Number(e.sunSize)/ie.sunSize,M=u*E*x/(this.sunRadius*A);return this.sun.scale.setScalar(this.sunBaseScale*M),this.sunGlow.scale.setScalar(this.sunRadius*M*Number(e.sunGlowSize)*2),!0}updateSun(e){if(!this.sun||!this.sunGlow)return;let t=Number(e.sunSize);this.sun.scale.setScalar(this.sunBaseScale*t),this.sunMaterials.forEach(i=>{i.emissive.set(e.sunEmissiveColor),i.emissiveIntensity=Number(e.sunEmissive)});let n=Number(e.sunGlowIntensity);this.sunGlow.visible=n>0,this.sunGlow.material.opacity=n,this.sunGlow.material.color.set(e.sunGlowColor),this.sunGlow.scale.setScalar(this.sunRadius*t*Number(e.sunGlowSize)*2),this.sunLight.intensity=Number(e.sunLightIntensity),this.sunLight.color.set(e.sunLightColor)}spawnShootingStar(e){this.shootingGeometry||(this.shootingGeometry=new Hn(1,1).translate(-.5,0,0));let t=Qe.lerp(Qc.left,Qc.right,Math.random()),n=Ze?this.visibleShootingY():Qe.lerp(Qc.bottom,Qc.top,Math.random());if(n===null)return;let i=new L(t,n,.5).unproject(this.camera).sub(this.camera.position).normalize(),r=(V1-this.camera.position.z)/i.z,a=this.camera.position.clone().addScaledVector(i,r),o=Qe.degToRad(Number(e.shootingAngle)+(Math.random()*2-1)*Number(e.shootingAngleVariation)),l=new yt(this.shootingGeometry,new kt({uniforms:{uColor:{value:new ye(e.shootingColor)},uOpacity:{value:0}},vertexShader:G1,fragmentShader:W1,transparent:!0,depthWrite:!1,blending:Hr}));l.position.copy(a),l.rotation.z=o,l.renderOrder=Ze?-1:2,this.scene.add(l),this.shootingStars.push({mesh:l,velocity:new L(Math.cos(o),Math.sin(o),0),age:0,life:.6+Math.random()*.7})}visibleShootingY(){let e=this.canvas.getBoundingClientRect(),t=e.height/3,n=Math.max(t,-e.top),i=Math.min(3*t,window.innerHeight-e.top);return!e.height||i-n<120?null:1-2*Qe.lerp(n+(i-n)*.12,n+(i-n)*.75,Math.random())/e.height}inShootingZone(){let e=this.canvas.getBoundingClientRect(),t=(window.innerHeight/2-e.top)/(e.height/3);return t>=1&&t<3}shootingPauseScale(){return Ze?.3:1}updateShootingStars(e,t){let n=this.effectSettings??ie,i=()=>{let r=this.shootingPauseScale(),a=Number(n.shootingPauseMin)*r,o=Math.max(a,Number(n.shootingPauseMax)*r);this.nextShootingStar=e+Qe.lerp(a,o,Math.random())};n.shootingEnabled?Ze&&!this.inShootingZone()?this.nextShootingStar=Math.min(this.nextShootingStar,e+.6):!this.shootingStars.length&&e>=this.nextShootingStar&&(this.spawnShootingStar(n),this.shootingStars.length||i()):i(),this.shootingStars=this.shootingStars.filter(r=>{r.age+=t;let a=r.age/r.life;return a>=1?(this.scene.remove(r.mesh),r.mesh.material.dispose(),i(),!1):(r.mesh.position.addScaledVector(r.velocity,Number(n.shootingSpeed)*t),r.mesh.scale.set(Number(n.shootingLength)*Math.min(a*3,1),Number(n.shootingWidth),1),r.mesh.material.uniforms.uOpacity.value=Math.sin(a*Math.PI)*Number(n.shootingBrightness),r.mesh.material.uniforms.uColor.value.set(n.shootingColor),!0)})}systemPoseFor(e,t){let n=`system${e+1}`;return Object.fromEntries(c0.map(i=>[i,Number(t[`${n}${i}`])]))}currentSystemPose(e){let t=this.systemPoseFor(this.systemPoseIndex??this.channelIndex??0,e),n=this.systemMove;if(!n)return t;let i=Math.min((performance.now()-n.start)/pf,1);if(i>=1)return this.systemMove=null,t;let r=su(i);return Object.fromEntries(c0.map(a=>[a,n.from[a]+(t[a]-n.from[a])*r]))}moveSystemToChannel(e,t){let n=this.effectSettings??ie,i=this.system?this.currentSystemPose(n):null;this.channelIndex=e,this.systemPoseIndex=e,this.systemMove=t&&i?{from:i,start:performance.now()}:null}moveSystemToPose(e){if(e===(this.systemPoseIndex??this.channelIndex??0))return;let t=this.effectSettings??ie,n=this.system?this.currentSystemPose(t):null;this.systemPoseIndex=e,this.systemMove=n&&!Yt.matches?{from:n,start:performance.now()}:null}updateSystem(e,t){if(!this.system)return;let n=this.effectSettings??ie,i=!Yt.matches,r=Qe.degToRad;this.systemSpinAngle=(this.systemSpinAngle||0)+(i?t*r(Number(n.systemSpin)):0);let a=i?Math.sin(e*Number(n.systemFloatSpeed)*Math.PI*2)*Number(n.systemFloat):0;this.smoothPointer.lerp(this.pointer,Math.min(t*4,1));let o=i?r(Number(n.systemParallax)):0,l=this.currentSystemPose(n);this.system.position.set(l.X,l.Y+a,l.Z),this.system.rotation.set(r(l.RotX)-this.smoothPointer.y*o,r(l.RotY)+this.systemSpinAngle+this.smoothPointer.x*o,r(l.RotZ)),this.system.scale.setScalar(l.Scale),this.updateSun(n),this.updateFilmSun(n)}updatePlanetVisibility(){let e=this.effectSettings??ie,t=af(e).planets;this.nightMeshes.forEach(n=>{n.visible=t}),t||this.orbiters.forEach(n=>{n.line.visible=!1})}updateComposition(e){this.camera.updateMatrixWorld(),this.sun.updateWorldMatrix(!0,!1);let t=this.sun.parent,n=this.sun.getWorldPosition(this.compositionSun??(this.compositionSun=new L));this.sun.geometry.computeBoundingSphere();let i=this.sun.getWorldScale(this.compositionScale??(this.compositionScale=new L)).x,r=this.sun.geometry.boundingSphere.radius*2*i,a=t.getWorldScale(this.compositionParentScale??(this.compositionParentScale=new L)).x,o=(this.compositionRight??(this.compositionRight=new L)).setFromMatrixColumn(this.camera.matrixWorld,0),l=(this.compositionUp??(this.compositionUp=new L)).setFromMatrixColumn(this.camera.matrixWorld,1),c=this.compositionTarget??(this.compositionTarget=new L);this.compositionTime=(this.compositionTime??0)+e;let[u,h,d]=T1;Object.entries(this.composedBodies).forEach(([f,m],_)=>{let[p,g,b]=Wg[f],w=_*1.7,v=E1*r,S=(p-u)/d*r+Math.sin(this.compositionTime*.21+w)*v,E=-(g-h)*M1/d*r+Math.cos(this.compositionTime*.17+w)*v;c.copy(n).addScaledVector(o,S).addScaledVector(l,E),m.position.copy(t.worldToLocal(c)),m.geometry.computeBoundingSphere();let A=r*b/d/2;m.scale.setScalar(A/(m.geometry.boundingSphere.radius*a))})}updateOrbits(e){if(!this.sun)return;if(this.composedBodies){this.updateComposition(e);return}let t=this.effectSettings??ie,n=Number(t.orbitSpeed),i=Number(t.orbitKepler),r=Number(t.orbitScale),a=t.orbitDirection==="Horario"?-1:1,o=Qe.degToRad(Number(t.orbitTilt)),l=Number(t.orbitLineOpacity),c=af(t).planets;this.orbitAxis.set(0,Math.sin(o),Math.cos(o)),this.orbitQuaternion.setFromUnitVectors(O1,this.orbitAxis),this.orbitBinormal.crossVectors(this.orbitAxis,$g);let u=Ze&&this.sunMode==="film"&&this.sunBaseScale?this.sun.scale.x/(this.sunBaseScale*Number(t.sunSize))/A1:1;this.orbiters.forEach(f=>{let m=D1*n*(U1/f.distance)**i;f.angle+=e*m*a;let _=f.distance*r*u;this.placeOnOrbit(f.mesh.position,this.sun.position,_,f.angle),f.rings.forEach(p=>p.position.copy(f.mesh.position)),f.line.visible=c&&l>0,f.line.material.opacity=l,f.line.material.color.set(t.orbitLineColor),f.line.quaternion.copy(this.orbitQuaternion),f.line.scale.setScalar(_),f.line.position.copy(this.sun.position)}),this.moon&&(this.moon.angle+=e*F1*Number(t.moonSpeed)*n*a,this.placeOnOrbit(this.moon.mesh.position,this.moon.earth.position,this.moon.distance,this.moon.angle));let h=Number(t.spinSpeed),d=Number(t.sunSpin);(h!==this.appliedSpinSpeed||d!==this.appliedSunSpin)&&(this.spinTweens.forEach(f=>{f.timeScale(f.targets()[0]===this.sun?.rotation?h*d:h)}),this.appliedSpinSpeed=h,this.appliedSunSpin=d)}placeOnOrbit(e,t,n,i){return e.copy($g).multiplyScalar(Math.cos(i)*n).addScaledVector(this.orbitBinormal,Math.sin(i)*n).add(t)}createIdleAnimation(){Yt.matches||!this.model||this.spinners.forEach(e=>{this.spinTweens.push(tf.to(e.rotation,{y:e.rotation.y+Math.PI*2,duration:Math.PI*2/e.userData.spinSpeed,repeat:-1,ease:"none"}))})}setupFoilCards(){this.foilCards=[],this.cardVariantIndex=a0(),window.WebGLRenderingContext&&this.cardRoot.querySelectorAll("[data-foil-card]").forEach(e=>{let t=e.querySelector(".altar-solar__foil-canvas"),n=e.dataset.foilBase,i=e.dataset.foilMap;if(!t||!n||!(i||e.dataset.foilFrame))return;let r=e.dataset.foilFrame?this.cardVariantIndex:0;Promise.all([this.loadFoilTexture(n),this.loadCardMap(e,r,i)]).then(([a,o])=>{let l=new Js({canvas:t,alpha:!0,antialias:!0,powerPreference:"low-power"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,da.matches?2:3)),l.setSize(236,358,!1),l.setClearColor(0,0);let c=new ir,u=new Vn(-1,1,1,-1,-1,1),h=new kt({vertexShader:q1,fragmentShader:Z1,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uBaseMap:{value:a},uFoilMap:{value:o},uAspect:{value:236/358},uArtMode:{value:"foilArt"in e.dataset?1:0},uZoneCenter:{value:new Ae},uZoneScale:{value:1},uCameraPosition:{value:new L(0,0,X1)},uLight1Position:{value:new L},uLight2Position:{value:new L},uBevelSize:{value:new Ae},...Object.fromEntries(Object.values(Jg).map(m=>[m,{value:0}])),...Object.fromEntries(Object.values(jg).map(m=>[m,{value:new L}])),uMouse:{value:new Ae},uTime:{value:0},uScrollOffset:{value:0}}}),d=new yt(new Hn(2,2),h);c.add(d);let f={card:e,renderer:l,scene:c,camera:u,material:h,baseUrl:n,foilUrl:nu(e,r)||i,maskSize:new Ae(o.image.width,o.image.height)};this.foilCards.push(f),l.render(c,u),e.classList.add("is-foil-rendered")}).catch(()=>{e.classList.remove("is-foil-rendered")})})}setupChannels(){let e=this.root.querySelector(".altar-solar__channel-label"),t=Array.from(this.root.querySelectorAll(".altar-solar__pagination span")),n=this.root.querySelector(".altar-solar__pagination"),i=this.root.querySelector(".altar-solar__campaign-crop img"),r=this.root.querySelector(".altar-solar__campaign"),[a,o]=this.root.querySelectorAll(".altar-solar__channel-arrow");if(!e||!a||!o)return;let l=i?.getAttribute("src"),c=0,u=M=>{let R=this.effectSettings??ie;return Ro[M].background??{space:R.spaceColor,glows:{rose:[R.glowRoseColor,R.glowRoseIntensity],cyan:[R.glowCyanColor,R.glowCyanIntensity],teal:[R.glowTealColor,R.glowTealIntensity]}}},h=M=>{this.root.style.setProperty("--space-color",M.space),Object.entries(M.glows).forEach(([R,[P,F]])=>{this.root.querySelectorAll(`.altar-solar__glow--${R}`).forEach(O=>{O.style.setProperty("--c",P),O.style.setProperty("--glow-intensity",Number(F))})})},d=this.root.querySelector(".altar-solar__ground-campaign-media img"),f=d?.getAttribute("src"),m=M=>[M===0?l:i?.getAttribute(`data-channel-image-${M+1}`),M>0&&d?.getAttribute(`data-channel-image-${M+1}`)||f].filter(Boolean),_=new Map,p=M=>{if(!_.has(M)){let R=new Image;R.src=M,_.set(M,R.decode().catch(()=>{}).then(()=>R))}return _.get(M)},g=M=>Promise.race([Promise.all(m(M).map(p)),new Promise(R=>setTimeout(R,1200))]);b0(()=>{Ro.forEach((M,R)=>{m(R).forEach(p),this.preloadCardVariant(R)})});let b=M=>{if(d){let P=M>0&&d.getAttribute(`data-channel-image-${M+1}`);d.src=P||f,d.classList.toggle("is-channel-cover",!!P)}if(!i)return;let R=M===0?l:i.getAttribute(`data-channel-image-${M+1}`);R&&(i.src=R),i.classList.toggle("is-channel-cover",M!==0)},w=(M=i)=>{if(!M)return;cancelAnimationFrame(this.photoZoomFrame);let R=performance.now(),P=F=>{let O=Math.min((F-R)/nT,1),I=1-Math.pow(1-su(O),3);M.style.scale=String(3+-2*I),O<1?this.photoZoomFrame=requestAnimationFrame(P):M.style.removeProperty("scale")};this.photoZoomFrame=requestAnimationFrame(P)},v=this.root.querySelector("[data-ground-campaign]"),S=()=>{if(!v)return r;let M=v.getBoundingClientRect(),R=M.top+M.height/2;return R>0&&R<window.innerHeight?v:r},E=M=>{e.textContent=`CHANNEL ${String(M+1).padStart(2,"0")}`,t.forEach((R,P)=>R.classList.toggle("is-active",P===M)),n?.setAttribute("aria-label",`Canal ${M+1} de ${t.length||Ro.length}`)},A=!1,x=(M,R)=>{if(A)return;A=!0,c=(c+M+Ro.length)%Ro.length;let P=c,F=u(P);E(P),g(P).then(()=>{if(this.moveSystemToChannel(P,!Yt.matches),this.moveGroundToChannel(P,!Yt.matches),b(P),Yt.matches||!this.channelReveal){h(F),A=!1;return}let O=S()??R;w(O===v?d:i),O===v&&this.channelRings?.play(F,O,()=>{}),this.channelReveal.play(F,O,()=>{h(F),A=!1})})};this.showChannel=M=>{A||M===c||(c=M,E(c),b(c),h(u(c)),this.moveSystemToChannel(c,!1),this.moveGroundToChannel(c,!1))},this.playLayoutWave=M=>{if(Yt.matches||!M)return;let R=this.effectSettings?.layoutWaveColor??ie.layoutWaveColor,P={bandColor:R,edgeColor:R};this.channelReveal?.play(u(c),M,()=>{},{edgeColor:R}),this.channelRings?.play(u(c),M,()=>{},P)},this.playCardWave=M=>{Yt.matches||A||this.channelRings?.play(u(c),M,()=>{},{bandColor:iT})},a.addEventListener("click",()=>x(-1,a)),o.addEventListener("click",()=>x(1,o)),this.channelReveal=u0(this.stage),this.channelRings=u0(this.stage,{ringsOnly:!0})}updateStones(e){if(!this.stonesGroup)return;let t=Qe.degToRad;this.stonesGroup.position.set(Number(e.stonesX),Number(e.stonesY),Number(e.stonesZ)),this.stonesGroup.rotation.set(t(Number(e.stonesRotX)),t(Number(e.stonesRotY)),t(Number(e.stonesRotZ))),this.stonesGroup.scale.setScalar(Number(e.stonesScale)),this.stonesGroup.traverse(n=>{if(!n.isMesh||!Number.isFinite(n.userData.groundY))return;let i=n.userData.planet,r=u=>Number(e[qg(i,u)]),a=r("Scale"),o=r("X"),l=r("Z");n.scale.setScalar(n.userData.baseScale*a),n.position.set(o,(n.userData.halfHeight-n.userData.slotEmbed)*a-Number(e.stonesEmbed)+r("Y"),l),n.rotation.set(t(r("RotX")),t(r("RotY")),t(r("RotZ")));let c=n.userData.contact;c&&(c.position.set(o,-.004,l),c.rotation.z=t(r("RotY")),c.scale.set(n.userData.slotRadius*2.6*a,n.userData.slotRadius*2.1*a,1),c.visible=r("Y")<.6,c.material.opacity=Number(e.ground3dContactShadows)*Qe.clamp(1-r("Y")/.6,0,1))})}groundPaletteFor(e,t=this.lightingBase??ie){let n=i=>t[`tierra${e+1}${i}`];return{ground3dColor:n("Ground"),floorColor:n("Horizon"),horizonGlowColor:n("Horizon"),stoneAmbientIntensity:Number(n("Ambient")),stoneLight1Color:n("Light1Color"),stoneLight1Intensity:Number(n("Light1Intensity")),stoneLight2Color:n("Light2Color"),stoneLight2Intensity:Number(n("Light2Intensity")),horizonBloomIntensity:Number(n("BloomIntensity")),...Object.fromEntries(p0.flatMap(({planet:i})=>L1.map(r=>[qg(i,r),Number(n(`Stone${i[0].toUpperCase()}${i.slice(1)}${r}`))])))}}setGroundPalette(e){this.groundMaterial?.color.set(e.ground3dColor);let t=this.horizonMesh?.material?.uniforms;t?.uFloorColor.value.set(e.floorColor),t?.uGlowColor.value.set(e.horizonGlowColor),this.stoneAmbient&&(this.stoneAmbient.intensity=e.stoneAmbientIntensity),this.stoneLight1&&(this.stoneLight1.color.set(e.stoneLight1Color),this.stoneLight1.intensity=e.stoneLight1Intensity),this.stoneLight2&&(this.stoneLight2.color.set(e.stoneLight2Color),this.stoneLight2.intensity=e.stoneLight2Intensity),t&&(t.uBloomIntensity.value=e.horizonBloomIntensity),this.root.style.setProperty("--bloom-intensity",e.horizonBloomIntensity),this.updateStones({...this.lightingBase??ie,...e})}moveGroundToChannel(e,t){let n=this.groundPaletteFor(e);cancelAnimationFrame(this.groundPaletteFrame),this.groundPaletteFrame=0;let i=this.currentGroundPalette??n;if(this.currentGroundPalette=n,!t){this.setGroundPalette(n);return}let r=performance.now(),a=o=>{let l=su(Math.min((o-r)/pf,1)),c=Object.fromEntries(Object.keys(n).map(u=>[u,typeof n[u]=="number"?i[u]+(n[u]-i[u])*l:new ye(i[u]).lerp(new ye(n[u]),l)]));this.currentGroundPalette=l<1?c:n,this.setGroundPalette(c),this.groundPaletteFrame=l<1?requestAnimationFrame(a):0};this.groundPaletteFrame=requestAnimationFrame(a)}setupCursorBadge(){let e=document.querySelectorAll("[data-cursor-label]");if(document.querySelectorAll("[data-scroll-to]").forEach(p=>{p.addEventListener("click",()=>{document.querySelector(p.dataset.scrollTo)?.scrollIntoView({behavior:Yt.matches?"auto":"smooth",block:"start"})})}),!e.length)return;let t=document.createElement("div");t.className="altar-cursor-badge",t.setAttribute("aria-hidden","true"),t.innerHTML='<span class="altar-cursor-badge__label"></span><span class="altar-cursor-badge__arrow"><svg class="altar-cursor-badge__go" viewBox="0 0 11 11" fill="currentColor"><path d="M1 5h7L5 2l1-1 4.5 4.5L6 10l-1-1 3-3H1z"/></svg><svg class="altar-cursor-badge__move" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 1v9M1 5.5h9M4 2.5 5.5 1 7 2.5M4 8.5 5.5 10 7 8.5M2.5 4 1 5.5 2.5 7M8.5 4 10 5.5 8.5 7"/></svg></span>',document.body.append(t);let n=t.querySelector(".altar-cursor-badge__label"),i=window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)"),r={x:null,y:null},a=20,o=null,l=0,c=!1,u=p=>p.getAttribute("aria-pressed")==="true"&&!!p.dataset.cursorLabelPressed,h=p=>u(p)?p.dataset.cursorLabelPressed:p.dataset.cursorLabel,d=()=>{o=null,t.classList.remove("is-active")},f=()=>{if(l=0,c||!i.matches||r.x===null)return d();let p=document.elementFromPoint(r.x,r.y)?.closest("[data-cursor-label]");if(!p||!p.closest(".altar-solar, .altar-page-section, .altar-v3-closing")||p.closest(".is-dragging"))return d();let g=h(p);n.textContent!==g&&(n.textContent=g),t.classList.toggle("is-back",u(p)),t.classList.toggle("is-move",p.dataset.cursorIcon==="move"),p!==o&&(o=p,t.classList.add("is-active"));let b=t.offsetWidth,w=t.offsetHeight,v=Math.min(r.x+a,window.innerWidth-b-4),S=Qe.clamp(r.y-w/2,4,window.innerHeight-w-4);t.style.transform=`translate(${v}px, ${S}px)`},m=()=>{l||(l=requestAnimationFrame(f))},_=()=>{t.classList.toggle("is-enabled",i.matches),i.matches||d()};document.addEventListener("pointermove",p=>{p.pointerType&&p.pointerType!=="mouse"||(c=!1,r.x=p.clientX,r.y=p.clientY,m())},{passive:!0,capture:!0}),window.addEventListener("scroll",m,{passive:!0}),document.addEventListener("pointerleave",d),document.addEventListener("click",()=>{c=!0,d()},!0),i.addEventListener?.("change",_),_()}setupDraggables(){Ze&&ha(document.getElementById("altar-hero-campaign"),{allowTouch:!1}),Ze&&ha(document.querySelector(".altar-v3-closing__photo"),{allowTouch:!1}),ha(this.root.querySelector(".altar-solar__campaign")),ha(this.root.querySelector("[data-ground-campaign]")),this.cardRoot===this.root&&ha(this.cardRoot.querySelector(".altar-solar__fortune-cards"),{allowTouch:!1});let e=this.root.querySelector(".altar-solar__player");ha(e,{handle:e?.querySelector("[data-drag-handle]")})}setupSpotifyPlayer(){let e=this.root.querySelector(".altar-solar__open-player"),t=this.root.querySelector(".altar-solar__player"),n=e?.querySelector(".altar-solar__player-label");if(!e||!t)return;let i=null,r=()=>MT(i?.url||e.dataset.spotifyUrl),a=()=>{let l=new Date,c=bT(l.getHours());if(n){let u=l.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}).toUpperCase();n.textContent=`[  ${c.name} ]  ${u}`}if(c!==i){i=c,e.dataset.currentSpotifyUrl=i.url;let u=t.querySelector("iframe");u&&r()&&(u.src=r())}clearTimeout(this.playerClockTimer),this.playerClockTimer=setTimeout(a,6e4-(l.getSeconds()*1e3+l.getMilliseconds())+50)};a();let o=l=>{if(l&&!t.querySelector("iframe")&&r()){let c=document.createElement("iframe");c.src=r(),c.title="Reproductor de Spotify",c.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",c.loading="lazy",t.appendChild(c)}t.classList.toggle("is-open",l),t.setAttribute("aria-hidden",String(!l)),e.setAttribute("aria-expanded",String(l)),e.setAttribute("aria-label",l?"Cerrar reproductor":"Abrir reproductor")};e.addEventListener("click",()=>o(!t.classList.contains("is-open"))),document.addEventListener("keydown",l=>{l.key==="Escape"&&t.classList.contains("is-open")&&o(!1)})}setupFortuneFlip(){let e=this.cardRoot.querySelector("[data-fortune-flip]");if(!e)return;let t=e.querySelector(".altar-solar__fortune-face--front"),n=e.querySelector(".altar-solar__fortune-face--back"),i=e.closest(".altar-solar__fortune-cards"),r=h=>{if(this.cardRoot!==this.root||!i||h===i.classList.contains("is-focused"))return;if(clearTimeout(this.fortuneFocusTimer),i.classList.add("is-animating-focus"),this.fortuneFocusTimer=setTimeout(()=>i.classList.remove("is-animating-focus"),1e3),this.root.querySelectorAll(".altar-solar__campaign, [data-ground-campaign]").forEach(n0),!h){n0(i),i.classList.remove("is-focused"),this.root.classList.remove("is-card-open"),["--focus-x","--focus-y","--card-scale"].forEach(S=>i.style.removeProperty(S)),this.fortuneFocusScale=0,this.hideFortuneShare?.();return}let f=this.effectSettings??ie;e.style.setProperty("--tilt-x","0deg"),e.style.setProperty("--tilt-y","0deg");let m=e.getBoundingClientRect(),p=m.width/236/Number(f.cardScale),g=h0.matches,b=Math.min(Number(f.cardFocusScale),(window.innerHeight-(g?250:160))/358,(window.innerWidth-(g?115:24))/236),w=236*b,v=358*b;i.style.setProperty("--focus-x",`${window.innerWidth/2-w/2-m.left}px`),i.style.setProperty("--focus-y",`${window.innerHeight/2+v/2-m.bottom}px`),i.style.setProperty("--card-scale",b/p),i.classList.add("is-focused"),this.root.classList.add("is-card-open"),this.fortuneFocusScale=b,this.showFortuneShare?.()},a=h=>{if(clearTimeout(this.fortuneReturnTimer),!h&&e.classList.contains("is-flipped")){let m=parseFloat(getComputedStyle(e).getPropertyValue("--card-flip-duration"))||1150;this.prepareNextFortunePhrase(m+100)}if(r(h),e.classList.toggle("is-flipped",h),e.setAttribute("aria-pressed",String(h)),e.setAttribute("aria-label",h?"Volver al frente de la carta":"Revelar frase"),t?.setAttribute("aria-hidden",String(h)),n?.setAttribute("aria-hidden",String(!h)),!h)return;let d=this.effectSettings??ie,f=Number(d.cardReturnSeconds);f>0&&(this.fortuneReturnTimer=setTimeout(()=>a(!1),f*1e3))};this.closeFortuneCard=()=>{e.classList.contains("is-flipped")&&a(!1)};let o=()=>{e.closest(".altar-solar__fortune-cards")?.classList.add("is-touched");let h=!e.classList.contains("is-flipped");h&&(this.revealFortunePhrase(),this.cardRoot===this.root&&this.playCardWave?.(e)),a(h)};e.addEventListener("pointermove",h=>{if(Yt.matches)return;let d=e.getBoundingClientRect(),f=(h.clientX-d.left)/d.width-.5,m=(h.clientY-d.top)/d.height-.5,_=Number((this.effectSettings??ie).foilTilt);e.style.setProperty("--tilt-x",`${(-m*2*_).toFixed(2)}deg`),e.style.setProperty("--tilt-y",`${(f*2*_).toFixed(2)}deg`)},{passive:!0}),e.addEventListener("pointerleave",()=>{e.style.setProperty("--tilt-x","0deg"),e.style.setProperty("--tilt-y","0deg")},{passive:!0}),e.addEventListener("click",o),e.addEventListener("keydown",h=>{e.tagName!=="BUTTON"&&(h.key!=="Enter"&&h.key!==" "||(h.preventDefault(),o()))});let l=this.cardRoot.querySelector(".altar-solar__fortune-cards"),c=this.root.querySelector(".altar-solar__reveal-card"),u=h=>{this.fortuneOpen=h,l?.classList.toggle("is-open",h),l?.setAttribute("aria-hidden",String(!h)),e.tabIndex=h?0:-1,c?.setAttribute("aria-expanded",String(h)),c?.setAttribute("aria-label",h?"Ocultar carta":"Revelar carta"),h||a(!1)};c?.addEventListener("click",()=>u(!this.fortuneOpen)),u(!!l?.classList.contains("is-open")),document.addEventListener("keydown",h=>{h.key==="Escape"&&this.fortuneOpen&&(this.cardRoot!==this.root?a(!1):u(!1))})}setupFortuneShare(){let e=this.cardRoot.querySelector("[data-fortune-share]"),t=e?.querySelector("[data-fortune-share-button]"),n=e?.closest(".altar-solar__fortune-cards");if(!e||!t||!n)return;let i=null,r=()=>{clearTimeout(this.fortuneShareTimer),i=null,this.fortuneShareBlob=null},a=n.querySelector("[data-fortune-close]"),o=()=>i??(i=this.composeFortuneShare(e.dataset.shareHandle||"").then(l=>this.fortuneShareBlob=l).catch(()=>null));this.showFortuneShare=()=>{r(),n.classList.remove("is-share-dismissed"),e.setAttribute("aria-hidden","false"),t.tabIndex=0,a&&(a.tabIndex=0);let l=n.querySelector("[data-fortune-flip]"),c=parseFloat(getComputedStyle(l).getPropertyValue("--card-flip-duration"))||1150;this.fortuneShareTimer=setTimeout(o,c+150)},this.hideFortuneShare=()=>{r(),e.setAttribute("aria-hidden","true"),t.tabIndex=-1,a&&(a.tabIndex=-1)},n.addEventListener(g0,()=>{n.classList.contains("is-focused")&&(n.classList.add("is-share-dismissed"),e.setAttribute("aria-hidden","true"),t.tabIndex=-1)}),e.addEventListener("pointerdown",l=>l.stopPropagation()),a?.addEventListener("pointerdown",l=>l.stopPropagation()),a?.addEventListener("click",()=>this.closeFortuneCard?.()),t.addEventListener("click",async()=>{t.setAttribute("aria-busy","true");let l=this.fortuneShareBlob??await o();if(t.removeAttribute("aria-busy"),!l)return;let c=new File([l],s0,{type:l.type});if(window.matchMedia("(pointer: coarse)").matches&&navigator.canShare?.({files:[c]}))try{await navigator.share({files:[c]});return}catch(d){if(d?.name==="AbortError")return}let u=URL.createObjectURL(l),h=Object.assign(document.createElement("a"),{href:u,download:s0});document.body.append(h),h.click(),h.remove(),setTimeout(()=>URL.revokeObjectURL(u),1e3)})}async composeFortuneShare(e){let t=this.foilCards?.find(S=>S.card.classList.contains("altar-solar__fortune-face--back"));if(!t||!this.renderer)return null;await document.fonts?.load(`300 ${r0}px Inter`).catch(()=>{});let n=document.createElement("canvas");n.width=ss,n.height=Co;let i=n.getContext("2d"),r=window.innerWidth,a=window.innerHeight,o=a,l=o*ss/Co;l>r&&(l=r,o=l*Co/ss);let c=(r-l)/2,u=(a-o)/2,h=ss/l,d=getComputedStyle(this.root);i.save(),i.setTransform(h,0,0,h,-c*h,-u*h);let f=parseFloat(d.getPropertyValue("--effect-blur"))||0;f>0&&"filter"in i&&(i.filter=`blur(${f*h}px)`);let m=f*3;i.fillStyle=d.backgroundColor,i.fillRect(c-m,u-m,l+m*2,o+m*2),this.root.querySelectorAll(".altar-solar__glow").forEach(S=>{let E=S.getBoundingClientRect(),A=getComputedStyle(S),[x,M,R]=fa(A.getPropertyValue("--c").trim()).map(B=>Math.round(B*255)),P=E.width/2,F=E.left+P,O=E.top+E.height/2,I=i.createRadialGradient(F,O,0,F,O,P);cT.forEach(([B,W])=>I.addColorStop(B,`rgb(${x} ${M} ${R} / ${W})`)),i.globalAlpha=Number(A.opacity)||0,i.fillStyle=I,i.fillRect(F-P,O-P,P*2,P*2)}),i.globalAlpha=1,this.drawScene();let _=this.canvas.getBoundingClientRect();i.drawImage(this.canvas,_.left,_.top,_.width,_.height),i.restore(),i.save(),i.globalCompositeOperation="overlay",i.globalAlpha=parseFloat(d.getPropertyValue("--grain-opacity"))||ie.grainOpacity,i.fillStyle=i.createPattern(ru(),"repeat"),i.fillRect(0,0,ss,Co),i.restore();let{renderer:p,scene:g,camera:b}=t,w=p.getPixelRatio(),v=tu*358/236;return p.setPixelRatio(tu/236),p.setSize(236,358,!1),p.render(g,b),i.drawImage(p.domElement,(ss-tu)/2,(Co-v)/2,tu,v),p.setPixelRatio(w),p.setSize(236,358,!1),p.render(g,b),e&&(i.font=`300 ${r0}px Inter, Arial, Helvetica, sans-serif`,"letterSpacing"in i&&(i.letterSpacing="-0.33px"),i.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--altar-primary").trim()||"#fff3a9",i.textAlign="center",i.textBaseline="middle",i.fillText(e.toLocaleUpperCase("es"),ss/2,lT)),new Promise(S=>n.toBlob(S,"image/jpeg",.92))}setCardVariant(e){this.cardVariantIndex=e,this.cardRoot.querySelectorAll("[data-foil-card]").forEach(t=>{let n=nu(t,e);if(!n)return;let i=t.querySelector(".altar-solar__fortune-copy p");i&&this.messageMap&&(i.textContent=this.messageMap.phrase);let r=this.foilCards?.find(a=>a.card===t);if(r){if(r.foilUrl===n){this.drawMessageMap();return}r.foilUrl=n,this.loadCardMap(t,e,n).then(a=>{r.foilUrl===n&&(r.material.uniforms.uFoilMap.value=a,r.maskSize.set(a.image.width,a.image.height))})}})}loadCardMap(e,t,n){let i=nu(e,t);if(!i)return this.loadFoilTexture(n);let r=this.messageMap??(this.messageMap=this.createMessageMap(e));return r.requested=i,Promise.all([r.fontReady,o0(i)]).then(([,a])=>(r.requested!==i||(r.frame=a,r.top=mf[t]??mf[0],this.drawMessageMap()),r.texture))}createMessageMap(e){let t=document.createElement("canvas");t.width=sT,t.height=aT;let n=new Fr(t);n.colorSpace=Mn,n.minFilter=fn,n.magFilter=ct,n.generateMipmaps=!0;let i=e.dataset.fortuneFont,r=i&&window.FontFace?new FontFace(_0,`url("${i}")`).load().then(u=>document.fonts.add(u)).catch(()=>{}):Promise.resolve(),a=e.querySelector(".altar-solar__fortune-copy p"),o=()=>l0[this.cardVariantIndex??0],l={canvas:t,texture:n,fontReady:r,frame:null,message:a,phrase:uf(void 0,o())};a&&(a.textContent=l.phrase);let c=this.cardRoot?.querySelector("[data-oracle-sheet]")?.dataset.oracleSheet||document.querySelector("[data-oracle-sheet]")?.dataset.oracleSheet;return mT(c,()=>{l.revealed||(l.phrase=uf(void 0,o()),this.cardRoot?.querySelectorAll(".altar-solar__fortune-copy p").forEach(u=>{u.textContent=l.phrase}),this.drawMessageMap())}),l}drawMessageMap(){let e=this.messageMap;e?.frame&&(xT(e.canvas,e.frame,e.phrase,e.top),e.texture.needsUpdate=!0)}revealFortunePhrase(){let e=this.messageMap;e&&(clearTimeout(this.fortunePhraseTimer),e.revealed&&!e.prepared&&this.drawNextFortune(),e.revealed=!0,e.prepared=!1,gT(e.phrase))}prepareNextFortunePhrase(e){let t=this.messageMap;clearTimeout(this.fortunePhraseTimer),t?.revealed&&(this.fortunePhraseTimer=setTimeout(()=>{this.drawNextFortune(),t.prepared=!0},e))}drawNextFortune(){let e=this.messageMap;if(!e)return;let t=a0(this.cardVariantIndex);e.phrase=uf(e.phrase,l0[t]),this.setCardVariant(t)}preloadCardVariant(e){this.cardRoot.querySelectorAll("[data-foil-card]").forEach(t=>{let n=nu(t,e);n&&o0(n).catch(()=>{})})}loadFoilTexture(e){return this.foilTextureCache??(this.foilTextureCache=new Map),this.foilTextureCache.has(e)||this.foilTextureCache.set(e,this.fetchFoilTexture(e)),this.foilTextureCache.get(e)}fetchFoilTexture(e){return new Promise((t,n)=>{new Or().load(e,i=>{i.colorSpace=Mn,i.wrapS=ln,i.wrapT=ln,i.minFilter=fn,i.magFilter=ct,i.generateMipmaps=!0,t(i)},void 0,n)})}renderFoilCards(e){if(!this.foilCards?.length||!this.fortuneOpen)return;let t=this.effectSettings??ie,n=!Yt.matches,i=n?e*.001:0,r=Math.max(document.body.scrollHeight-window.innerHeight,1),a=window.scrollY/r*4*Number(t.foilScrollHue);this.foilMouse??(this.foilMouse=new Ae);let o=n?Number(t.foilMouseEase):1;this.foilMouse.x+=(this.pointer.x-this.foilMouse.x)*o,this.foilMouse.y+=(-this.pointer.y-this.foilMouse.y)*o;let l=Math.max(Number(t.cardScale),this.fortuneFocusScale||0,1);this.foilCards.forEach(c=>{let u=(c.card.offsetWidth||236)/236,h=Math.min((window.devicePixelRatio||1)*Math.max(l,u),4);c.renderer.getPixelRatio()!==h&&(c.renderer.setPixelRatio(h),c.renderer.setSize(236,358,!1));let d=c.material.uniforms;Object.entries(Jg).forEach(([f,m])=>{d[m].value=Number(t[f])}),Object.entries(jg).forEach(([f,m])=>{Y1(t[f],d[m].value)}),d.uLight1Position.value.set(Number(t.foilLight1X),Number(t.foilLight1Y),Number(t.foilLight1Z)),d.uLight2Position.value.set(Number(t.foilLight2X),Number(t.foilLight2Y),Number(t.foilLight2Z)),d.uBevelSize.value.set(1,1).multiplyScalar(Number(t.foilBevelSize)).divide(c.maskSize),d.uZoneCenter.value.set(Number(t.foilZoneX),Number(t.foilZoneY)),d.uZoneScale.value=Number(t.foilZoneScale),d.uMouse.value.copy(this.foilMouse),d.uTime.value=i,d.uScrollOffset.value=a,c.renderer.render(c.scene,c.camera)})}bindEvents(){window.addEventListener("pointermove",e=>{this.pointer.set(e.clientX/window.innerWidth*2-1,e.clientY/window.innerHeight*2-1)},{passive:!0}),this.isV2Home&&document.addEventListener("altar:home-layout",e=>{Ze&&this.applyV3Layout(e.detail.layout),Ze||this.moveSystemToPose(e.detail.layout==="b"?1:0),this.resize(),Ze||this.playLayoutWave?.(document.getElementById("altar-hero-campaign")??document.querySelector("[data-altar-layout-toggle]"))}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.stage),this.gallery&&this.resizeObserver.observe(this.gallery),this.intersectionObserver=new IntersectionObserver(([e])=>{this.visible=e.isIntersecting},{rootMargin:"20%"}),this.intersectionObserver.observe(this.root),this.resize()}applyV3Layout(e){let t=this.panelSettings??this.lightingBase??this.effectSettings??Ti(),n=this.v3Layouts??(this.v3Layouts={a:wo("a"),b:wo("b")}),i=this.v3ActiveLayout??"a";if(i===e)return;n[i]={...t};let r=Object.fromEntries(Xg.map(a=>[a,t[a]]));Object.assign(t,n[e],r),this.v3ActiveLayout=e,this.applyLightingSettings(t),this.refreshLightingPanel?.()}setupSectionGuide(){this.sectionGuide=document.createElement("div"),this.sectionGuide.className="altar-tramos",this.sectionGuide.hidden=!0,this.sectionGuide.setAttribute("aria-hidden","true"),this.root.appendChild(this.sectionGuide),window.addEventListener("scroll",()=>this.updateTramoHud(),{passive:!0}),this.updateSectionGuide()}updateSectionGuide(){if(!this.sectionGuide)return;let e=[{name:"Sistema solar",element:this.stage},{name:"Cielo y horizonte",element:this.root.querySelector(".altar-solar__earth")},{name:"Colecci\xF3n",element:this.root.querySelector(".altar-solar__ground")},{name:"Cierre",element:this.root.querySelector(".altar-closing")}].filter(({element:i})=>i),t=e.map(({element:i})=>i.offsetTop),n=[...t.slice(1),this.root.offsetHeight];this.tramoBounds=e.map(({name:i},r)=>({name:i,top:t[r],end:n[r]})),this.sectionGuide.innerHTML=this.tramoBounds.map(({name:i,top:r,end:a},o)=>`
      <div class="altar-tramos__item${o%2?" is-alt":""}" style="top:${r}px;height:${a-r}px">
        <span class="altar-tramos__number">${o+1}</span>
        <span class="altar-tramos__label">Tramo ${o+1} \xB7 ${i} \xB7 ${Math.round(a-r)}px</span>
      </div>`).join("")+'<div class="altar-tramos__hud" data-tramo-hud></div>',this.tramoHud=this.sectionGuide.querySelector("[data-tramo-hud]"),this.updateTramoHud()}updateTramoHud(){if(!this.tramoHud||this.sectionGuide.hidden)return;let e=this.root.getBoundingClientRect().top,t=window.innerHeight/2-e,n=this.tramoBounds.findIndex(({end:a})=>t<a),i=this.tramoBounds[n];if(!i){this.tramoHud.textContent="Fuera de tramos";return}let r=Math.round(Qe.clamp((t-i.top)/(i.end-i.top),0,1)*100);this.tramoHud.textContent=`Tramo ${n+1} de ${this.tramoBounds.length} \xB7 ${i.name} \xB7 ${r}%`}setupClosingScene(){this.closingStage=document.querySelector("[data-altar-closing-stage]"),this.closingStage&&(this.canvasHome={parent:this.canvas.parentNode,next:this.canvas.nextSibling},this.closingCamera=this.camera.clone(),this.closingShadowMaterial=new Ha({color:597547,opacity:.22}),this.closingObserver=new IntersectionObserver(([e])=>{let t=e.isIntersecting;t!==!!this.closingActive&&(this.closingActive=t,t?(this.closingStage.appendChild(this.canvas),this.closingGroundColor=this.groundMaterial?.color.clone()):(this.canvasHome.parent.insertBefore(this.canvas,this.canvasHome.next),this.closingGroundColor&&this.groundMaterial?.color.copy(this.closingGroundColor),this.canvas.style.removeProperty("translate")),this.resize())},{rootMargin:"15%"}),this.closingObserver.observe(this.closingStage),this.resizeObserver.observe(this.closingStage))}resizeClosingScene(){let{width:e,height:t}=this.closingStage.getBoundingClientRect();if(!e||!t)return;this.renderer.setPixelRatio(nf()),this.renderer.setSize(e,t,!1),this.closingCamera.copy(this.camera);let n=getComputedStyle(this.closingStage),i=Math.max(.5,parseFloat(n.getPropertyValue("--closing-stones-scale"))||1),r=Qe.clamp(parseFloat(n.getPropertyValue("--closing-stones-crop"))||0,0,.9),a=parseFloat(n.getPropertyValue("--closing-stones-shift"))||0,o=parseFloat(n.getPropertyValue("--closing-stones-shift-x"))||0,l=e*i,c=t/(1-r);this.closingCamera.aspect=l/c;let u=1.8*Math.min(1,l/c/3);this.closingCamera.zoom=u,this.closingCamera.setViewOffset(l,c,(l-e)/2-o*e,c*(.05+1.17*u)-a*t,e,t),this.closingCamera.updateProjectionMatrix()}drawClosingScene(){let e=this.renderer.getClearColor(new ye),t=this.renderer.getClearAlpha(),n=this.renderer.toneMapping,i=this.renderer.toneMappingExposure;this.renderer.setClearColor(0,0),this.renderer.autoClear=!0,this.renderer.toneMapping=lr,this.renderer.toneMappingExposure=Number(this.effectSettings?.ground3dExposure??ie.ground3dExposure);let r=this.ground?.visible;this.ground&&(this.ground.visible=!1),this.closingContactShadows??(this.closingContactShadows=[]),this.closingContactShadows.length||this.scene.traverse(c=>{c.userData.isContactShadow&&this.closingContactShadows.push(c)});let a=this.closingContactShadows.map(c=>c.visible);this.closingContactShadows.forEach(c=>{c.visible=!1}),this.closingCamera.layers.set(qi),this.renderer.render(this.scene,this.closingCamera),this.ground&&(this.ground.visible=r),this.closingContactShadows.forEach((c,u)=>{c.visible=a[u]}),this.renderer.setClearColor(e,t),this.renderer.toneMapping=n,this.renderer.toneMappingExposure=i;let o=this.closingStage.getBoundingClientRect(),l=Qe.clamp((window.innerHeight-o.top)/Math.min(o.height,window.innerHeight),0,1);this.canvas.style.translate=`0 ${Yt.matches?0:-60*(1-l)}px`}resize(){if(this.gallery&&this.root.style.setProperty("--altar-gallery-height",`${this.gallery.offsetHeight}px`),this.closingActive)return this.resizeClosingScene();this.updateSectionGuide();let{width:e,height:t}=this.stage.getBoundingClientRect();if(!e||!t||!this.renderer)return;this.renderer.setPixelRatio(nf()),this.renderer.setSize(e,t,!1),this.horizonMaterial?.uniforms.uResolution.value.set(e,t);let n=this.gallery?t-this.gallery.offsetHeight:t/2;this.camera.aspect=e/n,this.camera.setViewOffset(e,n,0,0,e,t),this.camera.updateProjectionMatrix()}drawScene(){if(this.closingActive)return this.drawClosingScene();if(this.camera.layers.set(0),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera),this.renderer.autoClear=!1,this.renderer.clearDepth(),this.horizonMesh?.visible&&!this.isV2Home&&this.renderer.render(this.horizonScene,this.horizonCamera),this.stonesReady&&!this.isV2Home){let e=this.renderer.toneMapping,t=this.renderer.toneMappingExposure;this.renderSize??(this.renderSize=new Ae),this.renderer.getSize(this.renderSize),this.renderer.setScissorTest(!0),this.renderer.setScissor(0,0,this.renderSize.x,Math.floor(this.renderSize.y/2)),this.renderer.clearDepth(),this.renderer.toneMapping=lr,this.renderer.toneMappingExposure=Number(this.effectSettings?.ground3dExposure??ie.ground3dExposure),this.camera.layers.set(qi),this.renderer.render(this.scene,this.camera),this.camera.layers.set(0),this.renderer.toneMapping=e,this.renderer.toneMappingExposure=t,this.renderer.setScissorTest(!1)}this.renderer.autoClear=!0}},tT=4,eu=8,m0="altar:drag-reset",g0="altar:drag-start",n0=s=>s?.dispatchEvent(new CustomEvent(m0));function ha(s,{handle:e=s,allowTouch:t=!0}={}){if(!s||!e)return;let n={x:0,y:0},i=null,r=!1;e.addEventListener("dragstart",o=>o.preventDefault()),e.addEventListener("pointerdown",o=>{if(o.button!==0||!t&&o.pointerType==="touch")return;let l=s.getBoundingClientRect();i={id:o.pointerId,startX:o.clientX,startY:o.clientY,originX:n.x,originY:n.y,minX:eu-l.left,maxX:window.innerWidth-eu-l.right,minY:eu-l.top,maxY:window.innerHeight-eu-l.bottom,moved:!1}}),window.addEventListener("pointermove",o=>{if(!i||o.pointerId!==i.id)return;let l=o.clientX-i.startX,c=o.clientY-i.startY;if(!i.moved){if(Math.hypot(l,c)<tT)return;i.moved=!0,s.classList.add("is-dragging"),s.dispatchEvent(new CustomEvent(g0)),e.setPointerCapture?.(o.pointerId)}n.x=i.originX+Qe.clamp(l,i.minX,i.maxX),n.y=i.originY+Qe.clamp(c,i.minY,i.maxY),s.style.setProperty("--drag-x",`${n.x}px`),s.style.setProperty("--drag-y",`${n.y}px`)});let a=o=>{!i||o.pointerId!==i.id||(r=i.moved,r&&setTimeout(()=>{r=!1},0),s.classList.remove("is-dragging"),i=null)};window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a),s.addEventListener(m0,()=>{i=null,n.x=0,n.y=0,s.classList.remove("is-dragging"),s.style.removeProperty("--drag-x"),s.style.removeProperty("--drag-y")}),s.addEventListener("click",o=>{r&&(r=!1,o.preventDefault(),o.stopPropagation())},!0)}var Ro=[{background:null},{background:{space:"#09091f",glows:{rose:["#686f8d",3.33],cyan:["#666d8c",2],teal:["#4fc1b5",1]}}},{background:{space:"#2b4544",glows:{rose:["#c8909a",1],cyan:["#71d4ff",1],teal:["#4fc1b5",1]}}},{background:{space:"#193a4f",glows:{rose:["#236679",3.33],cyan:["#4d6976",2],teal:["#4fc1b5",1]}}}],pf=2100,nT=2200,iT="#f6e9a5",i0="#fff3a9",rT=["Alguien que cre\xEDas lejano volver\xE1 a acercarse. Esta vez lo mirar\xE1s diferente.","Una conversaci\xF3n inesperada cambiar\xE1 la forma en que mir\xE1s a alguien cercano.","Alguien piensa en vos m\xE1s de lo que imagin\xE1s. Pronto encontrar\xE1s una se\xF1al.","Un encuentro que parece casual llegar\xE1 justo cuando hab\xEDas dejado de buscarlo.","Una persona nueva aparecer\xE1 sin aviso. Lo extra\xF1o ser\xE1 sentir que ya la conoc\xEDas.","Algo que no dijiste todav\xEDa sigue esperando su momento. Pronto vas a encontrarlo.","Alguien de tu pasado volver\xE1 a cruzar tu camino. Vos decidir\xE1s cu\xE1nto se queda.","Una mirada va a durar apenas un instante. Sus consecuencias, bastante m\xE1s.","El amor llegar\xE1 disfrazado de otra cosa. Vas a reconocerlo cuando ya sea tarde.","Una coincidencia repetida dejar\xE1 de parecer casual. Prest\xE1 atenci\xF3n a qui\xE9n aparece.","La suerte cambiar\xE1 de direcci\xF3n cuando dejes de buscar exactamente lo esperado.","Una peque\xF1a casualidad abrir\xE1 una puerta que hasta ahora parec\xEDa no existir.","Algo perdido regresar\xE1 de otra forma. Tal vez entonces entiendas por qu\xE9 se fue.","El azar pondr\xE1 algo frente a vos. Reconocerlo a tiempo ser\xE1 la verdadera suerte.","Una coincidencia llegar\xE1 dos veces. La segunda vez ya no podr\xE1s llamarla azar.","La fortuna se mover\xE1 a tu favor despu\xE9s de una decisi\xF3n que parece insignificante.","Algo que hoy parece un error terminar\xE1 acerc\xE1ndote exactamente adonde quer\xEDas ir.","Tu pr\xF3xima decisi\xF3n tendr\xE1 m\xE1s suerte de la que ahora pod\xE9s calcular.","Una puerta se cerrar\xE1 sin explicaci\xF3n. Poco despu\xE9s entender\xE1s qu\xE9 estaba protegiendo.","La suerte aparecer\xE1 donde menos sentido tenga buscarla. No preguntes demasiado.","Una nueva etapa comienza en silencio. Lo que hoy parece incierto encontrar\xE1 su lugar.","Algo est\xE1 terminando sin que todav\xEDa lo notes. Lo pr\xF3ximo ya empez\xF3 a acercarse.","Lo que parec\xEDa detenido volver\xE1 a moverse. Esta vez en una direcci\xF3n inesperada.","Una versi\xF3n antigua de vos est\xE1 por quedarse atr\xE1s. No necesitar\xE1s despedirte.","Antes de que termine este ciclo, algo que parec\xEDa imposible empezar\xE1 a ordenarse.","El camino que evitaste volver\xE1 a aparecer. Esta vez vas a entender por qu\xE9.","Algo que esperaste durante mucho tiempo llegar\xE1 cuando ya no lo necesites igual.","Pronto cambiar\xE1s de idea sobre algo que hoy parece completamente decidido.","Una respuesta llegar\xE1 despu\xE9s de que hayas dejado de hacerte la pregunta.","Lo que viene no se parecer\xE1 a lo que imaginaste. Tal vez por eso funcione.","Una oportunidad peque\xF1a traer\xE1 consecuencias mucho mayores de las que imagin\xE1s.","Algo que empezaste casi por accidente puede convertirse en una fuente de abundancia.","Una propuesta llegar\xE1 de un lugar inesperado. Escuchala antes de decidir.","El dinero llegar\xE1 por un camino distinto al que hoy est\xE1s intentando controlar.","Una decisi\xF3n postergada puede abrir el per\xEDodo de estabilidad que estabas buscando.","Aquello que hoy hac\xE9s en silencio pronto encontrar\xE1 a las personas correctas.","Un planeta cambia de posici\xF3n. Algo peque\xF1o dentro de vos tambi\xE9n empieza a moverse.","El universo repetir\xE1 una se\xF1al hasta que dejes de confundirla con coincidencia.","Algo que todav\xEDa no tiene nombre ya est\xE1 orbitando cerca de tu vida.","Las cartas no revelan el futuro. Se\xF1alan el instante exacto en que empieza a cambiar."],sT=708,aT=1074,_0="Altar Fortune",mf=[199.357,199.357,199.481,199.357],oT={x:21.752,width:192.496,fontSize:16,lineHeight:1.15,minFontSize:11,maxLines:5,color:"#8c8c8c",baselineNudge:-5/3},x0="altar-fortune-seen",ss=1080,Co=1920,tu=840,r0=30,lT=1660.5,s0="altar-carta.jpg",cT=[[0,1],[.167,.88],[.333,.61],[.5,.32],[.667,.135],[.833,.044],[1,0]];function ru(){if(ru.canvas)return ru.canvas;let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d"),t=e.createImageData(256,256);for(let n=0;n<t.data.length;n+=4){let i=128+(Math.random()-.5)*160;t.data[n]=t.data[n+1]=t.data[n+2]=i,t.data[n+3]=255}return e.putImageData(t,0,0),ru.canvas=s}var uT=4;function a0(s){let e=[...Array(uT).keys()].filter(t=>t!==s);return e[Math.floor(Math.random()*e.length)]}function nu(s,e){return s?e===0?s.dataset.foilFrame:s.getAttribute(`data-channel-frame-${e+1}`):null}function o0(s){return new Promise((e,t)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=s})}function y0(){try{let s=JSON.parse(sessionStorage.getItem(x0)||"[]");return Array.isArray(s)?s:[]}catch{return[]}}var l0=["fuego","tierra","aire","agua"],v0="altar-oracle-phrases",hT=1e3*60*60*24*7,pa=rT.map(s=>({text:s,element:null}));function dT(s){let e=[],t=[],n="",i=!1;for(let r=0;r<s.length;r+=1){let a=s[r];i?a==='"'&&s[r+1]==='"'?(n+='"',r+=1):a==='"'?i=!1:n+=a:a==='"'?i=!0:a===","?(t.push(n),n=""):a===`
`||a==="\r"?(a==="\r"&&s[r+1]===`
`&&(r+=1),t.push(n),e.push(t),t=[],n=""):n+=a}return(n||t.length)&&(t.push(n),e.push(t)),e}function fT(s){let[e=[],...t]=dT(s),n=o=>e.findIndex(l=>l.trim().toLowerCase()===o),i=n("frase"),r=n("estado"),a=n("elemento");return i<0||r<0?[]:t.filter(o=>(o[r]||"").trim().toLowerCase()==="activa"&&(o[i]||"").trim()).map(o=>({text:o[i].trim().replace(/\s+/g," "),element:(o[a]||"").trim().toLowerCase()||null}))}function pT(){try{let s=JSON.parse(localStorage.getItem(v0));if(s&&Array.isArray(s.phrases)&&s.phrases.length&&Date.now()-s.time<hT)return s.phrases}catch{}return null}function mT(s,e){let t=pT();t&&(pa=t),!(!s||!window.fetch)&&fetch(s,{cache:"no-store"}).then(n=>n.ok?n.text():Promise.reject(n.status)).then(n=>{let i=fT(n);if(!i.length)return;let r=JSON.stringify(i)!==JSON.stringify(pa);pa=i;try{localStorage.setItem(v0,JSON.stringify({time:Date.now(),phrases:i}))}catch{}r&&e?.()}).catch(()=>{})}function uf(s,e){let t=y0(),n=pa.filter(a=>a.element===e),i=n.length?n:pa,r=i.filter(a=>!t.includes(a.text)&&a.text!==s);return r.length||(r=i.filter(a=>a.text!==s)),r.length||(r=i),r[Math.floor(Math.random()*r.length)]?.text??""}function gT(s){let e=y0();pa.every(t=>e.includes(t.text))&&(e=[]),e.includes(s)||e.push(s);try{sessionStorage.setItem(x0,JSON.stringify(e))}catch{}}function _T(s,e,t){let n=[];return e.split(/\s+/).forEach(i=>{let r=n.length?`${n[n.length-1]} ${i}`:i;n.length&&s.measureText(r).width<=t?n[n.length-1]=r:n.push(i)}),n}function xT(s,e,t,n=mf[0]){let i=s.getContext("2d"),r=s.width/236,a=oT;i.clearRect(0,0,s.width,s.height),i.drawImage(e,0,0,s.width,s.height);let o=t,l=a.fontSize,c;for(;i.font=`400 ${l*r}px "${_0}", Georgia, serif`,c=_T(i,o,a.width*r),!(c.length<=a.maxLines||l<=a.minFontSize);)l-=.25;let u=i.measureText("*"),h=u.fontBoundingBoxAscent??l*r*.8,d=u.fontBoundingBoxDescent??l*r*.2,f=l*a.lineHeight*r,m=(a.x+a.width)*r;i.fillStyle=a.color,i.textAlign="right",i.textBaseline="alphabetic",["*",...c].forEach((_,p)=>{let g=(n+a.baselineNudge)*r+p*f;i.fillText(_,m,g+(f-h-d)/2+h)})}var c0=["X","Y","Z","RotX","RotY","RotZ","Scale"],su=s=>1-Math.pow(1-s,3),yT={rose:{x:.825,y:.051,size:1.44,peak:.14},cyan:{x:.046,y:.646,size:1.32,peak:.097},teal:{x:.603,y:.341,size:1.26,peak:.02}},vT=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ST=`
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
`;function fa(s){let e=parseInt(String(s).replace("#",""),16)||0;return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function u0(s,{ringsOnly:e=!1}={}){if(!s||!window.WebGLRenderingContext)return null;let t=document.createElement("canvas");t.className=e?"altar-solar__reveal altar-solar__reveal--rings":"altar-solar__reveal",t.setAttribute("aria-hidden","true"),s.querySelector(e?".altar-solar__canvas":".altar-solar__sky")?.after(t);let n;try{n=new Js({canvas:t,alpha:!0,premultipliedAlpha:!0,antialias:!1})}catch{return t.remove(),null}n.setClearColor(0,0);let i={uStageSize:{value:new Ae},uViewportHeight:{value:1},uOrigin:{value:new Ae},uProgress:{value:0},uMaxDistance:{value:1},uTime:{value:0},uSpace:{value:new L},uGlowColors:{value:[new L,new L,new L]},uGlowShapes:{value:[new Je,new Je,new Je]},uEdgeColor:{value:new L(...fa(i0))},uRingsOnly:{value:e?1:0},uBand:{value:1},uEdgeGain:{value:1},uBandColor:{value:new L},uBandTint:{value:0}},r=new kt({uniforms:i,vertexShader:vT,fragmentShader:ST,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:Ol,blendSrc:Bl,blendDst:Za}),a=new ir,o=new Vn(-1,1,1,-1,-1,1);a.add(new yt(new Hn(2,2),r));let l=0,c=null,u="",h=(m,_)=>{let p=Math.min(window.devicePixelRatio||1,1.6),g=`${m}x${_}@${p}`;g!==u&&(u=g,n.setPixelRatio(p),n.setSize(m,_,!1))};b0(()=>{let m=s.getBoundingClientRect();h(m.width,m.height),n.compile(a,o),l||n.render(a,o)});let f=()=>{cancelAnimationFrame(l),l=0,c?.(),c=null,t.classList.remove("is-active")};return{play(m,_,p,{bandColor:g=null,edgeColor:b=i0}={}){i.uBand.value=1,i.uEdgeColor.value.set(...fa(b)),i.uBandTint.value=g?1:0,g&&i.uBandColor.value.set(...fa(g)),l&&f();let w=s.getBoundingClientRect(),v=w.width,S=w.height;h(v,S);let E=window.innerHeight,A=_.getBoundingClientRect(),x=A.left+A.width/2-w.left,M=A.top+A.height/2-w.top,R=-w.top,P=[[0,R],[v,R],[0,R+E],[v,R+E]],F=Math.max(...P.map(([B,W])=>Math.hypot(B-x,W-M)));i.uStageSize.value.set(v,S),i.uViewportHeight.value=E,i.uOrigin.value.set(x,M),i.uMaxDistance.value=F/E+.075+.05,i.uSpace.value.set(...fa(m.space)),["rose","cyan","teal"].forEach((B,W)=>{let V=yT[B],[Q,Y]=m.glows[B];i.uGlowColors.value[W].set(...fa(Q)),i.uGlowShapes.value[W].set(V.x*v,V.y*S,V.size*window.innerWidth/2,Math.min(V.peak*Number(Y),1))}),c=p,t.classList.add("is-active");let O=performance.now(),I=B=>{let W=Math.min((B-O)/pf,1);i.uProgress.value=su(W),i.uTime.value=(B-O)/1e3,n.render(a,o),W<1?l=requestAnimationFrame(I):f()};l=requestAnimationFrame(I)}}}var hf=[{from:6,name:"ALBA / AIRE",url:"https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk"},{from:15,name:"MEDIOD\xCDA / FUEGO",url:"https://open.spotify.com/intl-es/track/3yGECrjAhzkWpOxt17cdGr"},{from:18,name:"TARDE / TIERRA",url:"https://open.spotify.com/intl-es/track/1loE5JdxEEa0bO9ojGYKwr"},{from:21,name:"NOCHE / AGUA",url:"https://open.spotify.com/intl-es/track/5Rq2hPEd7UWN6i9tME54dj"}];function bT(s){return[...hf].reverse().find(e=>s>=e.from)??hf[hf.length-1]}function MT(s){let e=String(s||"").match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(track|playlist|album|episode|show|artist)\/([A-Za-z0-9]+)/);return e?`https://open.spotify.com/embed/${e[1]}/${e[2]}?utm_source=generator&theme=0`:null}function gf(){document.querySelectorAll("[data-altar-solar]").forEach(s=>{s.solarExperience||(s.solarExperience=new ff(s))}),_f()}var S0=4200;function b0(s){let e=window.requestIdleCallback??(t=>setTimeout(t,200));setTimeout(()=>e(s),S0)}function Cn(s,{base:e,stagger:t,duration:n=120,ease:i="ease-out"}){if(!s||s.dataset.introSplit)return;s.dataset.introSplit="true";let r=s.textContent.replace(/\s+/g," ").trim(),a=0,o=c=>{[...c.childNodes].forEach(u=>{if(u.nodeType===Node.ELEMENT_NODE)return o(u);if(u.nodeType!==Node.TEXT_NODE||!u.textContent)return;let h=document.createDocumentFragment();[...u.textContent].forEach(d=>{let f=document.createElement("span");f.className="altar-intro__char",f.setAttribute("aria-hidden","true"),f.textContent=d,f.style.animation=`altar-intro-fade ${n}ms ${i} ${e+a*t}ms both`,a+=1,h.append(f)}),u.replaceWith(h)})};o(s);let l=document.createElement("span");l.className="visually-hidden",l.textContent=r,s.append(l)}function Lt(s,e){s&&(s.style.animation=e)}function _f(){let s=document.documentElement;if(_f.done||!s.classList.contains("altar-intro"))return;if(_f.done=!0,Yt.matches||window.scrollY>window.innerHeight*.5){s.classList.remove("altar-intro");return}let e=l=>document.querySelector(l),t=(l,c,u="ease-out")=>`altar-intro-fade ${l}ms ${u} ${c}ms both`;Lt(e(".altar-nav__logo"),t(600,0)),Cn(e(".altar-nav__wordmark"),{base:150,stagger:70,duration:160}),Cn(e(".altar-nav__eyebrow"),{base:0,stagger:35}),Cn(e(".altar-solar__scroll-prompt"),{base:0,stagger:40}),Lt(e(".altar-nav__divider--brand"),"altar-intro-divider 350ms ease-out 550ms both"),Lt(e(".altar-nav__rule--top"),"altar-intro-rule 350ms ease-out 560ms both"),Lt(e(".altar-nav__rule--bottom"),"altar-intro-rule 350ms ease-out 720ms both"),Lt(e(".altar-nav__divider--metadata"),"altar-intro-divider 350ms ease-out 900ms both"),Lt(e("[data-fortune-flip]"),t(300,950));let n=e(".altar-solar__fortune-cta-frame");Lt(n,"altar-intro-frame 600ms ease-out 1250ms both"),n?.addEventListener("animationend",()=>{n.style.animation=""},{once:!0}),Lt(e(".altar-nav__divider--navigation"),"altar-intro-divider 350ms ease-out 1200ms both"),Lt(e(".altar-nav__divider--actions"),"altar-intro-divider 350ms ease-out 600ms both");let i=e(".altar-solar__campaign");if(Lt(i,t(200,1200)),i){let l=getComputedStyle(i).transform,c=l==="none"?"":l;i.animate([{transform:`translateY(${window.innerWidth*.2}px) rotate(-20deg) ${c}`},{transform:`translateY(0px) rotate(0deg) ${c}`}],{duration:1600,delay:1200,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"backwards"})}Cn(i?.querySelector(".altar-solar__campaign-heading span"),{base:1200,stagger:40}),Cn(e("[data-live-date]"),{base:1250,stagger:35}),Cn(e(".altar-solar__fortune-cta-text span"),{base:1460,stagger:20}),Cn(e(".altar-nav__metadata > span"),{base:1550,stagger:35}),Lt(e(".altar-solar__fortune-cta-icon"),t(200,1440));let r=l=>l&&getComputedStyle(l).display!=="none"&&l.getClientRects().length>0,a=e(".altar-nav--v2"),o=e(".altar-hero-v2__campaign");if(a&&r(o)&&(Lt(o,"altar-intro-image 1200ms cubic-bezier(0.16, 1, 0.3, 1) 500ms both"),o.querySelectorAll(".altar-hero-v2__media").forEach(l=>l.animate([{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:1800,delay:500,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"backwards"}))),a)[...a.querySelectorAll(".altar-nav__layout-switch, .altar-nav__spotify, .altar-nav__experience-divider, .altar-nav__menu > *, .altar-nav__search, .altar-nav__account, .altar-nav__cart, .altar-nav__menu-toggle")].filter(r).forEach((c,u)=>{let h=350+u*110;c.matches(".altar-nav__layout-switch")?Lt(c,t(250,h)):c.matches(".altar-nav__experience-divider")?Lt(c,`altar-intro-divider 300ms ease-out ${h}ms both`):c.matches(".altar-nav__cart")?Lt(c.querySelector(".altar-nav__count"),t(250,h)):Cn(c.querySelector(":scope > span")??c,{base:h,stagger:35})});else{document.querySelectorAll(".altar-nav__menu a").forEach((c,u)=>Cn(c,{base:1e3+u*120,stagger:35})),[".altar-nav__search",".altar-nav__account",".altar-nav__cart"].map(c=>e(c)).filter(r).forEach((c,u)=>{Lt(c.querySelector(".altar-nav__action-icon"),t(200,650+u*120)),c.querySelectorAll(":scope > span").forEach((h,d)=>Cn(h,{base:700+u*120+d*140,stagger:35}))});let l=e(".altar-nav__menu-toggle");r(l)&&l.querySelectorAll(":scope > span").forEach(c=>Cn(c,{base:600,stagger:35}))}document.querySelectorAll(".altar-solar__manifesto-ids > span").forEach((l,c)=>Cn(l,{base:2200+c*300,stagger:35})),Lt(e(".altar-solar__pagination"),t(200,1700)),Lt(e(".altar-solar__channel-switcher"),t(200,1780)),Cn(e(".altar-solar__channel-label"),{base:1800,stagger:35}),Lt(e(".altar-solar__reveal-card"),t(200,1860)),Lt(e(".altar-solar__open-player"),t(200,2e3)),Lt(e(".altar-solar__marquee"),"altar-intro-clip 500ms ease-out 2500ms both"),Cn(e(".altar-solar__player-label"),{base:3500,stagger:35}),s.classList.add("altar-intro--play"),setTimeout(()=>{s.classList.remove("altar-intro","altar-intro--play"),document.querySelectorAll("[data-intro-split], .altar-hero-v2__campaign, .altar-nav__logo, .altar-nav__layout-switch, .altar-nav__experience-divider, .altar-nav__count, .altar-nav__action-icon, .altar-solar__fortune-cta-icon, .altar-nav__divider, .altar-nav__rule, [data-fortune-flip], .altar-solar__campaign, .altar-solar__pagination, .altar-solar__channel-switcher, .altar-solar__reveal-card, .altar-solar__open-player, .altar-solar__marquee").forEach(l=>{l.style.animation.includes("altar-intro")&&(l.style.animation="")})},S0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gf,{once:!0}):gf();document.addEventListener("section:load",gf);})();
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
