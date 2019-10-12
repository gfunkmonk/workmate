/**
 * zlib.js Deflate + Inflate
 *
 * @link https://github.com/imaya/zlib.js
 * @author imaya
 * @license MIT
 **/
(function() {
 'use strict';function l(d){throw d;}var v=void 0,x=!0,aa=this;function D(d,a){var c=d.split("."),e=aa;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for (var b; c.length&&(b=c.shift()); ) {
  !c.length&&a!==v?e[b]=a:e=e[b]?e[b]:e[b]={}
 }}var F="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function H(d,a){this.index="number"===typeof a?a:0;this.i=0;this.buffer=d instanceof(F?Uint8Array:Array)?d:new (F?Uint8Array:Array)(32768);2*this.buffer.length<=this.index&&l(Error("invalid index"));this.buffer.length<=this.index&&this.f()}H.prototype.f=function(){var d=this.buffer,a,c=d.length,e=new (F?Uint8Array:Array)(c<<1);if (F) {
  e.set(d);
 } else {
  for (a=0; a<c; a += 1) {
   e[a]=d[a];
  }
 }return this.buffer=e};
 H.prototype.d=function(d,a,c){var e=this.buffer,b=this.index,f=this.i,g=e[b],h;c&&1<a&&(d=8<a?(N[d&255]<<24|N[d>>>8&255]<<16|N[d>>>16&255]<<8|N[d>>>24&255])>>32-a:N[d]>>8-a);if (8>a+f) {
  g=g<<a|d,f+=a;
 } else {
  for (h=0; h<a; h += 1) {
   g=g<<1|d>>a-h-1&1,8===(f += 1)&&(f=0,e[b += 1]=N[g],g=0,b===e.length&&(e=this.f()));
  }
 }e[b]=g;this.buffer=e;this.i=f;this.index=b};H.prototype.finish=function(){var d=this.buffer,a=this.index,c;0<this.i&&(d[a]<<=8-this.i,d[a]=N[d[a]],a += 1);F?c=d.subarray(0,a):(d.length=a,c=d);return c};
 var fa=new (F?Uint8Array:Array)(256),O;for(O=0;256>O;O += 1){for (var P=O,Q=P,ga=7,P=P>>>1; P; P>>>=1) {
  Q<<=1,Q|=P&1,ga -= 1;
 }fa[O]=(Q<<ga&255)>>>0}var N=fa;function ha(d){this.buffer=new (F?Uint16Array:Array)(2*d);this.length=0}ha.prototype.getParent=function(d){return 2*((d-2)/4|0)};ha.prototype.push=function(d,a){var c,e,b=this.buffer,f;c=this.length;b[this.length += 1]=a;for (b[this.length += 1]=d; 0<c; ) {
  if ((e=this.getParent(c), b[c]>b[e])) {
   f=b[c],b[c]=b[e],b[e]=f,f=b[c+1],b[c+1]=b[e+1],b[e+1]=f,c=e;
  } else {
   break;
  }
 }return this.length};
 ha.prototype.pop=function(){var d,a,c=this.buffer,e,b,f;a=c[0];d=c[1];this.length-=2;c[0]=c[this.length];c[1]=c[this.length+1];for(f=0;;){b=2*f+2;if (b>=this.length) {
  break;
 }b+2<this.length&&c[b+2]>c[b]&&(b+=2);if (c[b]>c[f]) {
  e=c[f],c[f]=c[b],c[b]=e,e=c[f+1],c[f+1]=c[b+1],c[b+1]=e;
 } else {
  break;
 }f=b}return{index:d,value:a,length:this.length}};function R(d){var a=d.length,c=0,e=Number.POSITIVE_INFINITY,b,f,g,h,k,n,q,r,p,m;for (r=0; r<a; r += 1) {
  d[r]>c&&(c=d[r]),d[r]<e&&(e=d[r]);
 }b=1<<c;f=new (F?Uint32Array:Array)(b);g=1;h=0;for(k=2;g<=c;){for (r=0; r<a; r += 1) {
  if(d[r]===g){n=0;q=h;for (p=0; p<g; p += 1) {
   n=n<<1|q&1,q>>=1;
  }m=g<<16|r;for (p=n; p<b; p+=k) {
   f[p]=m;
  }h += 1}
 }g += 1;h<<=1;k<<=1}return[f,c,e]}function ia(d,a){this.h=ma;this.w=0;this.input=F&&d instanceof Array?new Uint8Array(d):d;this.b=0;a&&(a.lazy&&(this.w=a.lazy),"number"===typeof a.compressionType&&(this.h=a.compressionType),a.outputBuffer&&(this.a=F&&a.outputBuffer instanceof Array?new Uint8Array(a.outputBuffer):a.outputBuffer),"number"===typeof a.outputIndex&&(this.b=a.outputIndex));this.a||(this.a=new (F?Uint8Array:Array)(32768))}var ma=2,na={NONE:0,r:1,k:ma,O:3},oa=[],S;
 for (S=0; 288>S; S += 1) {
  switch(x){case 143>=S:oa.push([S+48,8]);break;case 255>=S:oa.push([S-144+400,9]);break;case 279>=S:oa.push([S-256+0,7]);break;case 287>=S:oa.push([S-280+192,8]);break;default:l("invalid literal: "+S)}
 }
 ia.prototype.j=function(){var d,a,c,e,b=this.input;switch(this.h){case 0:c=0;for(e=b.length;c<e;){a=F?b.subarray(c,c+65535):b.slice(c,c+65535);c+=a.length;var f=a,g=c===e,h=v,k=v,n=v,q=v,r=v,p=this.a,m=this.b;if(F){for (p=new Uint8Array(this.a.buffer); p.length<=m+f.length+5; ) {
  p=new Uint8Array(p.length<<1);
 }p.set(this.a)}h=g?1:0;p[m += 1]=h|0;k=f.length;n=~k+65536&65535;p[m += 1]=k&255;p[m += 1]=k>>>8&255;p[m += 1]=n&255;p[m += 1]=n>>>8&255;if (F) {
  p.set(f,m),m+=f.length,p=p.subarray(0,m);
 } else {q=0;for (r=f.length; q<r; q += 1) {
  p[m += 1]=
  f[q];
 }p.length=m}this.b=m;this.a=p}break;case 1:var s=new H(F?new Uint8Array(this.a.buffer):this.a,this.b);s.d(1,1,x);s.d(1,2,x);var w=pa(this,b),y,ja,A;y=0;for (ja=w.length; y<ja; y += 1) {
  if ((A=w[y], H.prototype.d.apply(s,oa[A]), 256<A)) {
   s.d(w[y += 1],w[y += 1],x),s.d(w[y += 1],5),s.d(w[y += 1],w[y += 1],x);
  } else if (256===A) {
   break;
  }
 }this.a=s.finish();this.b=this.a.length;break;case ma:var C=new H(F?new Uint8Array(this.a.buffer):this.a,this.b),Ea,M,U,V,W,gb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ba,Fa,ca,Ga,ka,ra=Array(19),
 Ha,X,la,z,Ia;Ea=ma;C.d(1,1,x);C.d(Ea,2,x);M=pa(this,b);ba=qa(this.M,15);Fa=sa(ba);ca=qa(this.L,7);Ga=sa(ca);for (U=286; 257<U&&0===ba[U-1]; U -= 1)
  {}for (V=30; 1<V&&0===ca[V-1]; V -= 1)
  {}var Ja=U,Ka=V,I=new (F?Uint32Array:Array)(Ja+Ka),t,J,u,da,G=new (F?Uint32Array:Array)(316),E,B,K=new (F?Uint8Array:Array)(19);for (t=J=0; t<Ja; t += 1) {
  I[J += 1]=ba[t];
 }for (t=0; t<Ka; t += 1) {
  I[J += 1]=ca[t];
 }if(!F){t=0;for (da=K.length; t<da; t += 1) {
  K[t]=0;
 }}t=E=0;for(da=I.length;t<da;t+=J){for (J=1; t+J<da&&I[t+J]===I[t]; J += 1)
  {}u=J;if (0===I[t]) {
  if (3>u) {
   for (; 0<
        (u -= 1); )
   {
    G[E += 1]=0,K[0] += 1;
   }
  } else {
   for (; 0<u; ) {
    B=138>u?u:138,B>u-3&&B<u&&(B=u-3),10>=B?(G[E += 1]=17,G[E += 1]=B-3,K[17] += 1):(G[E += 1]=18,G[E += 1]=B-11,K[18] += 1),u-=B;
   }
  }
 } else if ((G[E += 1]=I[t], K[I[t]] += 1, u -= 1, 3>u)) {
  for (; 0<(u -= 1); ) {
   G[E += 1]=I[t],K[I[t]] += 1;
  }
 } else {
  for (; 0<u; ) {
   B=6>u?u:6,B>u-3&&B<u&&(B=u-3),G[E += 1]=16,G[E += 1]=B-3,K[16] += 1,u-=B;
  }
 }}d=F?G.subarray(0,E):G.slice(0,E);ka=qa(K,7);for (z=0; 19>z; z += 1) {
  ra[z]=ka[gb[z]];
 }for (W=19; 4<W&&0===ra[W-1]; W -= 1)
  {}Ha=sa(ka);C.d(U-257,5,x);C.d(V-1,5,x);C.d(W-4,4,x);for (z=0; z<W; z += 1) {
  C.d(ra[z],3,x);
 }z=0;for (Ia=d.length; z<
      Ia; z += 1)
 {
  if(X=d[z],C.d(Ha[X],ka[X],x),16<=X){z += 1;switch(X){case 16:la=2;break;case 17:la=3;break;case 18:la=7;break;default:l("invalid code: "+X)}C.d(d[z],la,x)}
 }var La=[Fa,ba],Ma=[Ga,ca],L,Na,ea,ua,Oa,Pa,Qa,Ra;Oa=La[0];Pa=La[1];Qa=Ma[0];Ra=Ma[1];L=0;for (Na=M.length; L<Na; L += 1) {
  if ((ea=M[L], C.d(Oa[ea],Pa[ea],x), 256<ea)) {
   C.d(M[L += 1],M[L += 1],x),ua=M[L += 1],C.d(Qa[ua],Ra[ua],x),C.d(M[L += 1],M[L += 1],x);
  } else if (256===ea) {
   break;
  }
 }this.a=C.finish();this.b=this.a.length;break;default:l("invalid compression type")}return this.a};
 function ta(d,a){this.length=d;this.H=a}
 var va=function(){function d(b){switch(x){case 3===b:return[257,b-3,0];case 4===b:return[258,b-4,0];case 5===b:return[259,b-5,0];case 6===b:return[260,b-6,0];case 7===b:return[261,b-7,0];case 8===b:return[262,b-8,0];case 9===b:return[263,b-9,0];case 10===b:return[264,b-10,0];case 12>=b:return[265,b-11,1];case 14>=b:return[266,b-13,1];case 16>=b:return[267,b-15,1];case 18>=b:return[268,b-17,1];case 22>=b:return[269,b-19,2];case 26>=b:return[270,b-23,2];case 30>=b:return[271,b-27,2];case 34>=b:return[272,
 b-31,2];case 42>=b:return[273,b-35,3];case 50>=b:return[274,b-43,3];case 58>=b:return[275,b-51,3];case 66>=b:return[276,b-59,3];case 82>=b:return[277,b-67,4];case 98>=b:return[278,b-83,4];case 114>=b:return[279,b-99,4];case 130>=b:return[280,b-115,4];case 162>=b:return[281,b-131,5];case 194>=b:return[282,b-163,5];case 226>=b:return[283,b-195,5];case 257>=b:return[284,b-227,5];case 258===b:return[285,b-258,0];default:l("invalid length: "+b)}}var a=[],c,e;for (c=3; 258>=c; c += 1) {
  e=d(c),a[c]=e[2]<<24|e[1]<<
  16|e[0];
 }return a}(),wa=F?new Uint32Array(va):va;
 function pa(d,a){function c(b,c){var a=b.H,d=[],e=0,f;f=wa[b.length];d[e += 1]=f&65535;d[e += 1]=f>>16&255;d[e += 1]=f>>24;var g;switch(x){case 1===a:g=[0,a-1,0];break;case 2===a:g=[1,a-2,0];break;case 3===a:g=[2,a-3,0];break;case 4===a:g=[3,a-4,0];break;case 6>=a:g=[4,a-5,1];break;case 8>=a:g=[5,a-7,1];break;case 12>=a:g=[6,a-9,2];break;case 16>=a:g=[7,a-13,2];break;case 24>=a:g=[8,a-17,3];break;case 32>=a:g=[9,a-25,3];break;case 48>=a:g=[10,a-33,4];break;case 64>=a:g=[11,a-49,4];break;case 96>=a:g=[12,a-
 65,5];break;case 128>=a:g=[13,a-97,5];break;case 192>=a:g=[14,a-129,6];break;case 256>=a:g=[15,a-193,6];break;case 384>=a:g=[16,a-257,7];break;case 512>=a:g=[17,a-385,7];break;case 768>=a:g=[18,a-513,8];break;case 1024>=a:g=[19,a-769,8];break;case 1536>=a:g=[20,a-1025,9];break;case 2048>=a:g=[21,a-1537,9];break;case 3072>=a:g=[22,a-2049,10];break;case 4096>=a:g=[23,a-3073,10];break;case 6144>=a:g=[24,a-4097,11];break;case 8192>=a:g=[25,a-6145,11];break;case 12288>=a:g=[26,a-8193,12];break;case 16384>=
 a:g=[27,a-12289,12];break;case 24576>=a:g=[28,a-16385,13];break;case 32768>=a:g=[29,a-24577,13];break;default:l("invalid distance")}f=g;d[e += 1]=f[0];d[e += 1]=f[1];d[e += 1]=f[2];var h,k;h=0;for (k=d.length; h<k; h += 1) {
  p[m += 1]=d[h];
 }w[d[0]] += 1;y[d[3]] += 1;s=b.length+c-1;r=null}var e,b,f,g,h,k={},n,q,r,p=F?new Uint16Array(2*a.length):[],m=0,s=0,w=new (F?Uint32Array:Array)(286),y=new (F?Uint32Array:Array)(30),ja=d.w,A;if(!F){for (f=0; 285>=f; ) {
  w[f += 1]=0;
 }for (f=0; 29>=f; ) {
  y[f += 1]=0;
 }}w[256]=1;e=0;for(b=a.length;e<b;e += 1){f=h=0;
 for (g=3; f<g&&e+f!==b; f += 1) {
  h=h<<8|a[e+f];
 }k[h]===v&&(k[h]=[]);n=k[h];if(!(0<(s -= 1))){for (; 0<n.length&&32768<e-n[0]; ) {
  n.shift();
 }if(e+3>=b){r&&c(r,-1);f=0;for (g=b-e; f<g; f += 1) {
  A=a[e+f],p[m += 1]=A,w[A] += 1;
 }break}0<n.length?(q=xa(a,e,n),r?r.length<q.length?(A=a[e-1],p[m += 1]=A,w[A] += 1,c(q,0)):c(r,-1):q.length<ja?r=q:c(q,0)):r?c(r,-1):(A=a[e],p[m += 1]=A,w[A] += 1)}n.push(e)}p[m += 1]=256;w[256] += 1;d.M=w;d.L=y;return F?p.subarray(0,m):p}
 function xa(d,a,c){var e,b,f=0,g,h,k,n,q=d.length;h=0;n=c.length;a:for(;h<n;h += 1){e=c[n-h-1];g=3;if(3<f){for (k=f; 3<k; k -= 1) {
  if (d[e+k-1]!==d[a+k-1]) {
   continue a;
  }
 }g=f}for (; 258>g&&a+g<q&&d[e+g]===d[a+g]; ) {
  g += 1;
 }g>f&&(b=e,f=g);if (258===g) {
  break;
 }}return new ta(f,a-b)}
 function qa(d,a){var c=d.length,e=new ha(572),b=new (F?Uint8Array:Array)(c),f,g,h,k,n;if (!F) {
  for (k=0; k<c; k += 1) {
   b[k]=0;
  }
 }for (k=0; k<c; k += 1) {
  0<d[k]&&e.push(k,d[k]);
 }f=Array(e.length/2);g=new (F?Uint32Array:Array)(e.length/2);if (1===f.length) {
  return (b[e.pop().index]=1, b);
 }k=0;for (n=e.length/2; k<n; k += 1) {
  f[k]=e.pop(),g[k]=f[k].value;
 }h=ya(g,g.length,a);k=0;for (n=f.length; k<n; k += 1) {
  b[f[k].index]=h[k];
 }return b}
 function ya(d,a,c){function e(b){var c=k[b][n[b]];c===a?(e(b+1),e(b+1)):g[c] -= 1;n[b] += 1}var b=new (F?Uint16Array:Array)(c),f=new (F?Uint8Array:Array)(c),g=new (F?Uint8Array:Array)(a),h=Array(c),k=Array(c),n=Array(c),q=(1<<c)-a,r=1<<c-1,p,m,s,w,y;b[c-1]=a;for (m=0; m<c; m += 1) {
  q<r?f[m]=0:(f[m]=1,q-=r),q<<=1,b[c-2-m]=(b[c-1-m]/2|0)+a;
 }b[0]=f[0];h[0]=Array(b[0]);k[0]=Array(b[0]);for (m=1; m<c; m += 1) {
  b[m]>2*b[m-1]+f[m]&&(b[m]=2*b[m-1]+f[m]),h[m]=Array(b[m]),k[m]=Array(b[m]);
 }for (p=0; p<a; p += 1) {
  g[p]=c;
 }for (s=0; s<b[c-1]; s += 1) {
  h[c-
  1][s]=d[s],k[c-1][s]=s;
 }for (p=0; p<c; p += 1) {
  n[p]=0;
 }1===f[c-1]&&(g[0] -= 1,n[c-1] += 1);for(m=c-2;0<=m;m -= 1){w=p=0;y=n[m+1];for (s=0; s<b[m]; s += 1) {
  w=h[m+1][y]+h[m+1][y+1],w>d[p]?(h[m][s]=w,k[m][s]=a,y+=2):(h[m][s]=d[p],k[m][s]=p,p += 1);
 }n[m]=0;1===f[m]&&e(m)}return g}
 function sa(d){var a=new (F?Uint16Array:Array)(d.length),c=[],e=[],b=0,f,g,h,k;f=0;for (g=d.length; f<g; f += 1) {
  c[d[f]]=(c[d[f]]|0)+1;
 }f=1;for (g=16; f<=g; f += 1) {
  e[f]=b,b+=c[f]|0,b<<=1;
 }f=0;for(g=d.length;f<g;f += 1){b=e[d[f]];e[d[f]]+=1;h=a[f]=0;for (k=d[f]; h<k; h += 1) {
  a[f]=a[f]<<1|b&1,b>>>=1;
 }}return a}function T(d,a){this.l=[];this.m=32768;this.e=this.g=this.c=this.q=0;this.input=F?new Uint8Array(d):d;this.s=!1;this.n=za;this.C=!1;if (a||!(a={})) {
  a.index&&(this.c=a.index),a.bufferSize&&(this.m=a.bufferSize),a.bufferType&&(this.n=a.bufferType),a.resize&&(this.C=a.resize);
 }switch(this.n){case Aa:this.b=32768;this.a=new (F?Uint8Array:Array)(32768+this.m+258);break;case za:this.b=0;this.a=new (F?Uint8Array:Array)(this.m);this.f=this.K;this.t=this.I;this.o=this.J;break;default:l(Error("invalid inflate mode"))}}
 var Aa=0,za=1,Ba={F:Aa,D:za};
 T.prototype.p=function(){for(;!this.s;){var d=Y(this,3);d&1&&(this.s=x);d>>>=1;switch(d){case 0:var a=this.input,c=this.c,e=this.a,b=this.b,f=a.length,g=v,h=v,k=e.length,n=v;this.e=this.g=0;c+1>=f&&l(Error("invalid uncompressed block header: LEN"));g=a[c += 1]|a[c += 1]<<8;c+1>=f&&l(Error("invalid uncompressed block header: NLEN"));h=a[c += 1]|a[c += 1]<<8;g===~h&&l(Error("invalid uncompressed block header: length verify"));c+g>a.length&&l(Error("input buffer is broken"));switch(this.n){case Aa:for(;b+g>e.length;){n=
 k-b;g-=n;if (F) {
  e.set(a.subarray(c,c+n),b),b+=n,c+=n;
 } else {
  for (; n -= 1; ) {
   e[b += 1]=a[c += 1];
  }
 }this.b=b;e=this.f();b=this.b}break;case za:for (; b+g>e.length; ) {
  e=this.f({v:2});
 }break;default:l(Error("invalid inflate mode"))}if (F) {
  e.set(a.subarray(c,c+g),b),b+=g,c+=g;
 } else {
  for (; g -= 1; ) {
   e[b += 1]=a[c += 1];
  }
 }this.c=c;this.b=b;this.a=e;break;case 1:this.o(Ca,Da);break;case 2:Sa(this);break;default:l(Error("unknown BTYPE: "+d))}}return this.t()};
 var Ta=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ua=F?new Uint16Array(Ta):Ta,Va=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],Wa=F?new Uint16Array(Va):Va,Xa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],Ya=F?new Uint8Array(Xa):Xa,Za=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],$a=F?new Uint16Array(Za):Za,ab=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,
 10,11,11,12,12,13,13],bb=F?new Uint8Array(ab):ab,cb=new (F?Uint8Array:Array)(288),Z,db;Z=0;for (db=cb.length; Z<db; Z += 1) {
  cb[Z]=143>=Z?8:255>=Z?9:279>=Z?7:8;
 }var Ca=R(cb),eb=new (F?Uint8Array:Array)(30),fb,hb;fb=0;for (hb=eb.length; fb<hb; fb += 1) {
  eb[fb]=5;
 }var Da=R(eb);function Y(d,a){for (var c=d.g,e=d.e,b=d.input,f=d.c,g=b.length,h; e<a; ) {
  f>=g&&l(Error("input buffer is broken")),c|=b[f += 1]<<e,e+=8;
 }h=c&(1<<a)-1;d.g=c>>>a;d.e=e-a;d.c=f;return h}
 function ib(d,a){for (var c=d.g,e=d.e,b=d.input,f=d.c,g=b.length,h=a[0],k=a[1],n,q; e<k&&!(f>=g); ) {
  c|=b[f += 1]<<e,e+=8;
 }n=h[c&(1<<k)-1];q=n>>>16;d.g=c>>q;d.e=e-q;d.c=f;return n&65535}
 function Sa(d){function a(a,b,c){var d,e=this.z,f,g;for (g=0; g<a; ) {
  switch(d=ib(this,b),d){case 16:for (f=3+Y(this,2); f -= 1; ) {
   c[g += 1]=e;
  }break;case 17:for (f=3+Y(this,3); f -= 1; ) {
   c[g += 1]=0;
  }e=0;break;case 18:for (f=11+Y(this,7); f -= 1; ) {
   c[g += 1]=0;
  }e=0;break;default:e=c[g += 1]=d}
 }this.z=e;return c}var c=Y(d,5)+257,e=Y(d,5)+1,b=Y(d,4)+4,f=new (F?Uint8Array:Array)(Ua.length),g,h,k,n;for (n=0; n<b; n += 1) {
  f[Ua[n]]=Y(d,3);
 }if(!F){n=b;for (b=f.length; n<b; n += 1) {
  f[Ua[n]]=0;
 }}g=R(f);h=new (F?Uint8Array:Array)(c);k=new (F?Uint8Array:Array)(e);
 d.z=0;d.o(R(a.call(d,c,g,h)),R(a.call(d,e,g,k)))}T.prototype.o=function(d,a){var c=this.a,e=this.b;this.u=d;for (var b=c.length-258,f,g,h,k; 256!==(f=ib(this,d)); ) {
  if (256>f) {
   e>=b&&(this.b=e,c=this.f(),e=this.b),c[e += 1]=f;
  } else {g=f-257;k=Wa[g];0<Ya[g]&&(k+=Y(this,Ya[g]));f=ib(this,a);h=$a[f];0<bb[f]&&(h+=Y(this,bb[f]));e>=b&&(this.b=e,c=this.f(),e=this.b);for (; k -= 1; ) {
   c[e]=c[(e += 1)-h];
  }}
 }for (; 8<=this.e; ) {
  this.e-=8,this.c -= 1;
 }this.b=e};
 T.prototype.J=function(d,a){var c=this.a,e=this.b;this.u=d;for (var b=c.length,f,g,h,k; 256!==(f=ib(this,d)); ) {
  if (256>f) {
   e>=b&&(c=this.f(),b=c.length),c[e += 1]=f;
  } else {g=f-257;k=Wa[g];0<Ya[g]&&(k+=Y(this,Ya[g]));f=ib(this,a);h=$a[f];0<bb[f]&&(h+=Y(this,bb[f]));e+k>b&&(c=this.f(),b=c.length);for (; k -= 1; ) {
   c[e]=c[(e += 1)-h];
  }}
 }for (; 8<=this.e; ) {
  this.e-=8,this.c -= 1;
 }this.b=e};
 T.prototype.f=function(){var d=new (F?Uint8Array:Array)(this.b-32768),a=this.b-32768,c,e,b=this.a;if (F) {
  d.set(b.subarray(32768,d.length));
 } else {c=0;for (e=d.length; c<e; c += 1) {
  d[c]=b[c+32768];
 }}this.l.push(d);this.q+=d.length;if (F) {
  b.set(b.subarray(a,a+32768));
 } else {
  for (c=0; 32768>c; c += 1) {
   b[c]=b[a+c];
  }
 }this.b=32768;return b};
 T.prototype.K=function(d){var a,c=this.input.length/this.c+1|0,e,b,f,g=this.input,h=this.a;d&&("number"===typeof d.v&&(c=d.v),"number"===typeof d.G&&(c+=d.G));2>c?(e=(g.length-this.c)/this.u[2],f=258*(e/2)|0,b=f<h.length?h.length+f:h.length<<1):b=h.length*c;F?(a=new Uint8Array(b),a.set(h)):a=h;return this.a=a};
 T.prototype.t=function(){var d=0,a=this.a,c=this.l,e,b=new (F?Uint8Array:Array)(this.q+(this.b-32768)),f,g,h,k;if (0===c.length) {
  return F?this.a.subarray(32768,this.b):this.a.slice(32768,this.b);
 }f=0;for(g=c.length;f<g;f += 1){e=c[f];h=0;for (k=e.length; h<k; h += 1) {
  b[d += 1]=e[h];
 }}f=32768;for (g=this.b; f<g; f += 1) {
  b[d += 1]=a[f];
 }this.l=[];return this.buffer=b};
 T.prototype.I=function(){var d,a=this.b;F?this.C?(d=new Uint8Array(a),d.set(this.a.subarray(0,a))):d=this.a.subarray(0,a):(this.a.length>a&&(this.a.length=a),d=this.a);return this.buffer=d};function jb(d){if("string"===typeof d){var a=d.split(""),c,e;c=0;for (e=a.length; c<e; c += 1) {
  a[c]=(a[c].charCodeAt(0)&255)>>>0;
 }d=a}for(var b=1,f=0,g=d.length,h,k=0;0<g;){h=1024<g?1024:g;g-=h;do b+=d[k += 1],f+=b;while(h -= 1);b%=65521;f%=65521}return(f<<16|b)>>>0}function kb(d,a){var c,e;this.input=d;this.c=0;if (a||!(a={})) {
  a.index&&(this.c=a.index),a.verify&&(this.N=a.verify);
 }c=d[this.c += 1];e=d[this.c += 1];switch(c&15){case lb:this.method=lb;break;default:l(Error("unsupported compression method"))}0!==((c<<8)+e)%31&&l(Error("invalid fcheck flag:"+((c<<8)+e)%31));e&32&&l(Error("fdict flag is not supported"));this.B=new T(d,{index:this.c,bufferSize:a.bufferSize,bufferType:a.bufferType,resize:a.resize})}
 kb.prototype.p=function(){var d=this.input,a,c;a=this.B.p();this.c=this.B.c;this.N&&(c=(d[this.c += 1]<<24|d[this.c += 1]<<16|d[this.c += 1]<<8|d[this.c += 1])>>>0,c!==jb(a)&&l(Error("invalid adler-32 checksum")));return a};var lb=8;function mb(d,a){this.input=d;this.a=new (F?Uint8Array:Array)(32768);this.h=$.k;var c={},e;if ((a||!(a={}))&&"number"===typeof a.compressionType) {
  this.h=a.compressionType;
 }for(e in a)c[e]=a[e];c.outputBuffer=this.a;this.A=new ia(this.input,c)}var $=na;
 mb.prototype.j=function(){var d,a,c,e,b,f,g,h=0;g=this.a;d=lb;switch(d){case lb:a=Math.LOG2E*Math.log(32768)-8;break;default:l(Error("invalid compression method"))}c=a<<4|d;g[h += 1]=c;switch(d){case lb:switch(this.h){case $.NONE:b=0;break;case $.r:b=1;break;case $.k:b=2;break;default:l(Error("unsupported compression type"))}break;default:l(Error("invalid compression method"))}e=b<<6|0;g[h += 1]=e|31-(256*c+e)%31;f=jb(this.input);this.A.b=h;g=this.A.j();h=g.length;F&&(g=new Uint8Array(g.buffer),g.length<=
 h+4&&(this.a=new Uint8Array(g.length+4),this.a.set(g),g=this.a),g=g.subarray(0,h+4));g[h += 1]=f>>24&255;g[h += 1]=f>>16&255;g[h += 1]=f>>8&255;g[h += 1]=f&255;return g};function nb(d,a){var c,e,b,f;if (Object.keys) {
  c=Object.keys(a);
 } else {
  for(e in (c=[], b=0, a))c[b += 1]=e;
 }b=0;for (f=c.length; b<f; b += 1) {
  e=c[b],D(d+"."+e,a[e]);
 }}D("Zlib.Inflate",kb);D("Zlib.Inflate.prototype.decompress",kb.prototype.p);nb("Zlib.Inflate.BufferType",{ADAPTIVE:Ba.D,BLOCK:Ba.F});D("Zlib.Deflate",mb);D("Zlib.Deflate.compress",function(d,a){return(new mb(d,a)).j()});D("Zlib.Deflate.prototype.compress",mb.prototype.j);nb("Zlib.Deflate.CompressionType",{NONE:$.NONE,FIXED:$.r,DYNAMIC:$.k});
}).call(window);
if (typeof module !== 'undefined') {
  module.exports = Zlib;
}
