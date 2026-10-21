import{$ as Me$1,$t as im,A as BE,At as Zo,B as Gs,Bn as wI,Cn as qh,Ct as W,D as $h,Dn as sI,Dt as Xh,E as $g,F as Di,Fn as vl,Gn as yc,H as HP,Hn as wi,Ht as dD,It as bI,Jn as yr,Ln as vr,Nn as vc,O as AP,On as se,Ot as Y,Pt as _h,R as Ep,Rn as vt$1,S as wu,Sn as q,T as $,Tn as rg,Tt as Wh,Un as x,Vn as wa$1,Vt as cp$1,Yt as fr,Zt as hu,_t as VI,at as PE,b as up,c as Vp,d as Xe,dn as mu,dt as Ry,fn as ng,ft as Tm,gn as or,gt as Ui,hn as og,i as Eu,it as On$1,j as Bg,jn as ue$1,jt as _,l as Wp,ln as mp,m as cp,n as Du,nn as jP,on as ko,ot as Ph,p as au,pn as no,pt as Tn$1,qt as eg,r as Er,t as Cu,tn as jE,u as Wt$1,ut as Rp,v as pu,vn as ov,w as zp,x as us,xn as pr,xt as Vn$1,yt as Ve,z as FP,zn as w,zt as cI}from"./main-3ODT3WXF.js";function vt(a){return a.buttons===0||a.detail===0}function yt(a){let e=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}function zt(a,e=0){return an(a)?Number(a):arguments.length===2?e:0}function an(a){return!isNaN(parseFloat(a))&&!isNaN(Number(a))}function F(a){return a instanceof vr?a.nativeElement:a}var on=new x(`cdk-input-modality-detector-options`);var rn={ignoreKeys:[18,17,224,91,16]};var sn=650;var ue={passive:!0,capture:!0};var cn=(()=>{class a{_platform=w(Eu);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new On$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=Cu(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<sn||(this._modality.next(vt(t)?`keyboard`:`mouse`),this._mostRecentTarget=Cu(t))};_onTouchstart=t=>{if(yt(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=Cu(t)};constructor(){let t=w(Me$1),n=w(or),i=w(on,{optional:!0});if(this._options=W(W({},rn),i),this.modalityDetected=this._modality.pipe(Xh(1)),this.modalityChanged=this.modalityDetected.pipe(qh()),this._platform.isBrowser){let o=w(pr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(n,`keydown`,this._onKeydown,ue),o.listen(n,`mousedown`,this._onMousedown,ue),o.listen(n,`touchstart`,this._onTouchstart,ue)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var _t=(function(a){return a[a.IMMEDIATE=0]=`IMMEDIATE`,a[a.EVENTUAL=1]=`EVENTUAL`,a})(_t||{});var ln=new x(`cdk-focus-monitor-default-options`);var Bt=wu({passive:!0,capture:!0});var Vt=(()=>{class a{_ngZone=w(Me$1);_platform=w(Eu);_inputModalityDetector=w(cn);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=w(or);_stopInputModalityDetector=new Y;constructor(){let t=w(ln,{optional:!0});this._detectionMode=t?.detectionMode||_t.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=Cu(t);for(let i=n;i;i=i.parentElement)t.type===`focus`?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,n=!1){let i=F(t);if(!this._platform.isBrowser||i.nodeType!==1)return _h();let o=Du(i)||this._document,r=this._elementInfo.get(i);if(r)return n&&(r.checkChildren=!0),r.subject;let c={checkChildren:n,subject:new Y,rootNode:o};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let n=F(t),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(t,n,i){let o=F(t);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([c,d])=>this._originChanged(c,n,d)):(this._setOrigin(n),typeof o.focus==`function`&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===_t.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle(`cdk-focused`,!!n),t.classList.toggle(`cdk-touch-focused`,n===`touch`),t.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,n===`mouse`),t.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&n,this._detectionMode===_t.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?sn:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,n){let i=this._elementInfo.get(n),o=Cu(t);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(t,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Bt),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Bt)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ng(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Bt),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Bt),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,i){this._setClasses(t,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!n||n===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let o=t.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var ra=(()=>{class a{_elementRef=w(vr);_focusMonitor=w(Vt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Ve;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return a})();function lt(a){return Array.isArray(a)?a:[a]}var dn=new Set;var tt;var jt=(()=>{class a{_platform=w(Eu);_nonce=w($g,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ca}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&sa(t,this._nonce),this._matchMedia(t)}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();function sa(a,e){if(!dn.has(a))try{tt||(tt=document.createElement(`style`),e&&tt.setAttribute(`nonce`,e),tt.setAttribute(`type`,`text/css`),document.head.appendChild(tt)),tt.sheet&&(tt.sheet.insertRule(`@media ${a.replace(/[{}]/g,``)} {body{ }}`,0),dn.add(a))}catch(t){console.error(t)}}function ca(a){return{matches:a===`all`||a===``,media:a,addListener:()=>{},removeListener:()=>{}}}var pe=(()=>{class a{_mediaMatcher=w(jt);_zone=w(Me$1);_queries=new Map;_destroySubject=new Y;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return mn(lt(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=mn(lt(t)).map(r=>this._registerQuery(r).observable),o=Ph(i);return o=no(o.pipe(Ui(1)),o.pipe(Xh(1),Wh(0))),o.pipe(vt$1(r=>{let c={matches:!1,breakpoints:{}};return r.forEach(({matches:d,query:m})=>{c.matches=c.matches||d,c.breakpoints[m]=d}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),o={observable:new _(r=>{let c=d=>this._zone.run(()=>r.next(d));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(eg(n),vt$1(({matches:r})=>({query:t,matches:r})),ng(this._destroySubject)),mql:n};return this._queries.set(t,o),o}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();function mn(a){return a.map(e=>e.split(`,`)).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}function la(a){if(a.type===`characterData`&&a.target instanceof Comment)return!0;if(a.type===`childList`){for(let e=0;e<a.addedNodes.length;e++)if(!(a.addedNodes[e]instanceof Comment))return!1;for(let e=0;e<a.removedNodes.length;e++)if(!(a.removedNodes[e]instanceof Comment))return!1;return!0}return!1}var un=(()=>{class a{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var pn=(()=>{class a{_mutationObserverFactory=w(un);_observedElements=new Map;_ngZone=w(Me$1);ngOnDestroy(){this._observedElements.forEach((t,n)=>this._cleanupObserver(n))}observe(t){let n=F(t);return new _(i=>{let r=this._observeElement(n).pipe(vt$1(c=>c.filter(d=>!la(d))),Vn$1(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{i.next(c)})});return()=>{r.unsubscribe(),this._unobserveElement(n)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let n=new Y,i=this._mutationObserverFactory.create(o=>n.next(o));i&&i.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:i,stream:n,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:n,stream:i}=this._observedElements.get(t);n&&n.disconnect(),i.complete(),this._observedElements.delete(t)}}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Oi=(()=>{class a{_contentObserver=w(pn);_elementRef=w(vr);event=new Ve;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=zt(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Wh(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,FP],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return a})();var bn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({providers:[un]})}return a})();var da=(()=>{class a{_platform=w(Eu);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return ua(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=ma(_a(t));if(n&&(hn(n)===-1||!this.isVisible(n)))return!1;let i=t.nodeName.toLowerCase(),o=hn(t);return t.hasAttribute(`contenteditable`)?o!==-1:i===`iframe`||i===`object`||this._platform.WEBKIT&&this._platform.IOS&&!va(t)?!1:i===`audio`?t.hasAttribute(`controls`)?o!==-1:!1:i===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,n){return ya(t)&&!this.isDisabled(t)&&(n?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();function ma(a){try{return a.frameElement}catch{return null}}function ua(a){return!!(a.offsetWidth||a.offsetHeight||typeof a.getClientRects==`function`&&a.getClientRects().length)}function pa(a){let e=a.nodeName.toLowerCase();return e===`input`||e===`select`||e===`button`||e===`textarea`}function ba(a){return fa(a)&&a.type==`hidden`}function ha(a){return ga(a)&&a.hasAttribute(`href`)}function fa(a){return a.nodeName.toLowerCase()==`input`}function ga(a){return a.nodeName.toLowerCase()==`a`}function vn(a){if(!a.hasAttribute(`tabindex`)||a.tabIndex===void 0)return!1;let e=a.getAttribute(`tabindex`);return!!(e&&!isNaN(parseInt(e,10)))}function hn(a){if(!vn(a))return null;let e=parseInt(a.getAttribute(`tabindex`)||``,10);return isNaN(e)?-1:e}function va(a){let e=a.nodeName.toLowerCase(),t=e===`input`&&a.type;return t===`text`||t===`password`||e===`select`||e===`textarea`}function ya(a){return ba(a)?!1:pa(a)||ha(a)||a.hasAttribute(`contenteditable`)||vn(a)}function _a(a){return a.ownerDocument&&a.ownerDocument.defaultView||window}var he=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,n,i,o=!1,r){this._element=e,this._checker=t,this._ngZone=n,this._document=i,this._injector=r,o||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener(`focus`,this.startAnchorListener),e.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(e),!!n}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary(`start`);return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary(`end`);return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let n=0;n<t.length;n++){let i=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(i)return i}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let n=t.length-1;n>=0;n--){let i=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(i)return i}return null}_createAnchor(){let e=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add(`cdk-visually-hidden`),e.classList.add(`cdk-focus-trap-anchor`),e.setAttribute(`aria-hidden`,`true`),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){Ry(e,{injector:this._injector})}};var xa=(()=>{class a{_checker=w(da);_ngZone=w(Me$1);_document=w(or);_injector=w(se);constructor(){w(au).load(cp)}create(t,n=!1){return new he(t,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var yn=new x(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var _n=new x(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Sa=0;var wa=(()=>{class a{_ngZone=w(Me$1);_defaultOptions=w(_n,{optional:!0});_liveElement;_document=w(or);_sanitizer=w(Er);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=w(yn,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...n){let i=this._defaultOptions,o,r;return n.length===1&&typeof n[0]==`number`?r=n[0]:[o,r]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:`polite`),r==null&&i&&(r=i.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:up(this._liveElement,t,this._sanitizer),typeof r==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(t),i=this._document.createElement(`div`);for(let o=0;o<n.length;o++)n[o].remove();return i.classList.add(t),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${Sa++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(t){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<n.length;i++){let o=n[i],r=o.getAttribute(`aria-owns`);r?r.indexOf(t)===-1&&o.setAttribute(`aria-owns`,r+` `+t):o.setAttribute(`aria-owns`,t)}}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var X=(function(a){return a[a.NONE=0]=`NONE`,a[a.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,a[a.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,a})(X||{});var fn=`cdk-high-contrast-black-on-white`;var gn=`cdk-high-contrast-white-on-black`;var be=`cdk-high-contrast-active`;var xn=(()=>{class a{_platform=w(Eu);_hasCheckedHighContrastMode=!1;_document=w(or);_breakpointSubscription;constructor(){this._breakpointSubscription=w(pe).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return X.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let n=this._document.defaultView||window,i=n&&n.getComputedStyle?n.getComputedStyle(t):null,o=(i&&i.backgroundColor||``).replace(/ /g,``);switch(t.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return X.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return X.BLACK_ON_WHITE}return X.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(be,fn,gn),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===X.BLACK_ON_WHITE?t.add(be,fn):n===X.WHITE_ON_BLACK&&t.add(be,gn)}}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var ka=(()=>{class a{constructor(){w(xn)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({imports:[bn]})}return a})();var Ca=200;var Ht=class{_letterKeyStream=new Y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Y;selectedItem=this._selectedItem;constructor(e,t){let n=typeof t?.debounceInterval==`number`?t.debounceInterval:Ca;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(og(t=>this._pressedLetters.push(t)),Wh(e),Vn$1(()=>this._pressedLetters.length>0),vt$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Wt(a,...e){return e.length?e.some(t=>a[t]):a.altKey||a.shiftKey||a.ctrlKey||a.metaKey}var dt=class{_items;_activeItemIndex=ko(-1);_activeItem=ko(null);_wrap=!1;_typeaheadSubscription=$.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=e=>e.disabled;constructor(e,t){this._items=e,e instanceof Zo?this._itemChangesSubscription=e.changes.subscribe(n=>this._itemsChanged(n.toArray())):Gs(e)&&(this._effectRef=mu(()=>this._itemsChanged(e()),{injector:t}))}tabOut=new Y;change=new Y;skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Ht(t,{debounceInterval:typeof e==`number`?e:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){let t=e.keyCode,i=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!e[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(o<r?o:r-1,-1);break}else return;default:(i||Wt(e,`shiftKey`))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),n=typeof e==`number`?e:t.indexOf(e),i=t[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let n=1;n<=t.length;n++){let i=(this._activeItemIndex()+e*n+t.length)%t.length,o=t[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){let n=this._getItemsArray();if(n[e]){for(;this._skipPredicateFn(n[e]);)if(e+=t,!n[e])return;this.setActiveItem(e)}}_getItemsArray(){return Gs(this._items)?this._items():this._items instanceof Zo?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let n=e.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var fe=class extends dt{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}};var ge=class extends dt{_origin=`program`;setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};var Sn=new Map;var xt=class a{_appId=w(hu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){this._appId!==`ng`&&(e+=this._appId);let n=Sn.get(e);return n===void 0?n=0:n++,Sn.set(e,n),`${e}${t?a._infix+`-`:``}${n}`}static ɵfac=function(t){return new(t||a)};static ɵprov=yr({token:a,factory:a.ɵfac})};var Oo={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Ea=new x(`MATERIAL_ANIMATIONS`);var wn=null;function Na(){return w(Ea,{optional:!0})?.animationsDisabled||w(Bg,{optional:!0})===`NoopAnimations`?`di-disabled`:(wn??=w(jt).matchMedia(`(prefers-reduced-motion)`).matches,wn?`reduced-motion`:`enabled`)}function mt(){return Na()!==`enabled`}function g(a){return a==null?``:typeof a==`string`?a:`${a}px`}function Fo(a){return a!=null&&`${a}`!=`false`}var L=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(L||{});var ve=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=L.HIDDEN;constructor(e,t,n,i=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var kn=wu({passive:!0,capture:!0});var ye=class{_events=new Map;addHandler(e,t,n,i){let o=this._events.get(t);if(o){let r=o.get(n);r?r.add(i):o.set(n,new Set([i]))}else this._events.set(t,new Map([[n,new Set([i])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,kn)})}removeHandler(e,t,n){let i=this._events.get(e);if(!i)return;let o=i.get(t);o&&(o.delete(n),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,kn)))}_delegateEventHandler=e=>{let t=Cu(e);t&&this._events.get(e.type)?.forEach((n,i)=>{(i===t||i.contains(t))&&n.forEach(o=>o.handleEvent(e))})}};var St={enterDuration:225,exitDuration:150};var Ma=800;var Cn=wu({passive:!0,capture:!0});var En=[`mousedown`,`touchstart`];var Nn=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Oa=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=PE({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return a})();var wt=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ye;constructor(e,t,n,i,o){this._target=e,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=F(n)),o&&o.get(au).load(Oa)}fadeInRipple(e,t,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=W(W({},St),n.animation);n.centered&&(e=i.left+i.width/2,t=i.top+i.height/2);let r=n.radius||Da(e,t,i),c=e-i.left,d=t-i.top,m=o.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${c-r}px`,l.style.top=`${d-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let u=window.getComputedStyle(l),M=u.transitionProperty,O=u.transitionDuration,C=M===`none`||O===`0s`||O===`0s, 0s`||i.width===0&&i.height===0,w=new ve(this,l,n,C);l.style.transform=`scale3d(1, 1, 1)`,w.state=L.FADING_IN,n.persistent||(this._mostRecentTransientRipple=w);let K=null;return!C&&(m||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Fe=()=>{K&&(K.fallbackTimer=null),clearTimeout(Le),this._finishRippleTransition(w)},ee=()=>this._destroyRipple(w),Le=setTimeout(ee,m+100);l.addEventListener(`transitionend`,Fe),l.addEventListener(`transitioncancel`,ee),K={onTransitionEnd:Fe,onTransitionCancel:ee,fallbackTimer:Le}}),this._activeRipples.set(w,K),(C||!m)&&this._finishRippleTransition(w),w}fadeOutRipple(e){if(e.state===L.FADING_OUT||e.state===L.HIDDEN)return;let t=e.element,n=W(W({},St),e.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=L.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=F(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,En.forEach(n=>{a._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Nn.forEach(t=>{this._triggerElement.addEventListener(t,this,Cn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===L.FADING_IN?this._startFadeOutTransition(e):e.state===L.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=L.VISIBLE,!n&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=L.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=vt(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ma;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!yt(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===L.VISIBLE||e.config.terminateOnPointerUp&&e.state===L.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(En.forEach(t=>a._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(Nn.forEach(t=>e.removeEventListener(t,this,Cn)),this._pointerUpEventsRegistered=!1))}};function Da(a,e,t){let n=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),i=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(n*n+i*i)}var _e=new x(`mat-ripple-global-options`);var Go=(()=>{class a{_elementRef=w(vr);_animationsDisabled=mt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=w(Me$1),n=w(Eu),i=w(_e,{optional:!0}),o=w(se);this._globalOptions=i||{},this._rippleRenderer=new wt(this,t,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:W(W(W({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,i){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,W(W({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,W(W({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,i){n&2&&Rp(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var Ra={capture:!0};var Aa=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var xe=`mat-ripple-loader-uninitialized`;var Se=`mat-ripple-loader-class-name`;var Mn=`mat-ripple-loader-centered`;var Ut=`mat-ripple-loader-disabled`;var On=(()=>{class a{_document=w(or);_animationsDisabled=mt();_globalRippleOptions=w(_e,{optional:!0});_platform=w(Eu);_ngZone=w(Me$1);_injector=w(se);_eventCleanups;_hosts=new Map;constructor(){let t=w(pr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Aa.map(n=>t.listen(this._document,n,this._onInteraction,Ra)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(xe,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(Se))&&t.setAttribute(Se,n.className||``),n.centered&&t.setAttribute(Mn,``),n.disabled&&t.setAttribute(Ut,``)}setDisabled(t,n){let i=this._hosts.get(t);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):n?t.setAttribute(Ut,``):t.removeAttribute(Ut)}_onInteraction=t=>{let n=Cu(t);if(n instanceof HTMLElement){let i=n.closest(`[${xe}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(Se)),t.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??St.enterDuration,r=this._animationsDisabled?0:i?.animation?.exitDuration??St.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(Ut),rippleConfig:{centered:t.hasAttribute(Mn),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},d=new wt(c,this._ngZone,n,this._platform,this._injector),m=!c.rippleDisabled;m&&d.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:d,hasSetUpEvents:m}),t.removeAttribute(xe)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Dn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=PE({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return a})();var Ia=new x(`MAT_BUTTON_CONFIG`);function Rn(a){return a==null?void 0:jP(a)}var we=(()=>{class a{_elementRef=w(vr);_ngZone=w(Me$1);_animationsDisabled=mt();_config=w(Ia,{optional:!0});_focusMonitor=w(Vt);_cleanupClick;_renderer=w(wa$1);_rippleLoader=w(On);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=AP(!1,{transform:FP});constructor(){w(au).load(Dn);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,i){n&2&&(mp(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i._getAriaDisabled())(`tabindex`,i._getTabIndex()),VI(i.color?`mat-`+i.color:``),Rp(`mat-mdc-button-progress-indicator-shown`,i.showProgress())(`mat-mdc-button-disabled`,i.disabled)(`mat-mdc-button-disabled-interactive`,i.disabledInteractive)(`mat-unthemed`,!i.color)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,FP],disabled:[2,`disabled`,`disabled`,FP],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,FP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,FP],tabIndex:[2,`tabIndex`,`tabIndex`,Rn],_tabindex:[2,`tabindex`,`_tabindex`,Rn],showProgress:[1,`showProgress`]}})}return a})();var Pa=(()=>{class a extends we{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||a)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function i(o,r){o&1&&(yc(0,`div`,1),bI(1,1),vc())}return PE({type:a,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[cp$1],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(wI(t),Ep(0,`span`,0),bI(1),sI(2,i,2,0,`div`,1),Ep(3,`span`,2)(4,`span`,3)),r&2&&(ov(2),cI(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return a})();var An=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({imports:[us]})}return a})();var In=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Sr=(()=>{class a extends we{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Ta(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?In.get(this._appearance):null,o=In.get(t);i&&n.remove(...i),n.add(...o),this._appearance=t}static ɵfac=function(n){return new(n||a)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function i(o,r){o&1&&(yc(0,`div`,2),bI(1,3),vc())}return PE({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[cp$1],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(wI(t),Ep(0,`span`,0),bI(1),yc(2,`span`,1),bI(3,1),vc(),bI(4,2),sI(5,i,2,0,`div`,2),Ep(6,`span`,3)(7,`span`,4)),r&2&&(Rp(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),ov(5),cI(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return a})();function Ta(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var wr=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({imports:[An,us]})}return a})();var Fa=new x(`MAT_CARD_CONFIG`);var Ar=(()=>{class a{appearance;constructor(){let t=w(Fa,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(n){return new(n||a)};static ɵcmp=(function(){return PE({type:a,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(i,o){i&2&&Rp(`mat-mdc-card-outlined`,o.appearance===`outlined`)(`mdc-card--outlined`,o.appearance===`outlined`)(`mat-mdc-card-filled`,o.appearance===`filled`)(`mdc-card--filled`,o.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,o){i&1&&(wI(),bI(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return a})();var Ir=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return a})();var Pr=(()=>{class a{align=`start`;static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(n,i){n&2&&Rp(`mat-mdc-card-actions-align-end`,i.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return a})();var Tr=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({imports:[us]})}return a})();var Pn=`forms-clone.forms`;var Tn=`forms-clone.responses`;function kt(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}function Fn(a){try{let e=localStorage.getItem(a);return e?JSON.parse(e):[]}catch{return[]}}function Ln(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}var zn=class a{formsSignal=ko(Fn(Pn));responsesSignal=ko(Fn(Tn));forms=this.formsSignal.asReadonly();responses=this.responsesSignal.asReadonly();formsSortedByDate=dD(()=>[...this.formsSignal()].sort((e,t)=>t.updatedAt-e.updatedAt));getForm(e){return this.formsSignal().find(t=>t.id===e)}responsesForForm(e){return this.responsesSignal().filter(t=>t.formId===e).sort((t,n)=>n.submittedAt-t.submittedAt)}createForm(){let e=Date.now(),t={id:kt(),title:`Formulario sin título`,description:``,questions:[this.newQuestion(`short`)],createdAt:e,updatedAt:e};return this.formsSignal.update(n=>[...n,t]),this.persistForms(),t}updateForm(e){e.updatedAt=Date.now(),this.formsSignal.update(t=>t.map(n=>n.id===e.id?e:n)),this.persistForms()}deleteForm(e){this.formsSignal.update(t=>t.filter(n=>n.id!==e)),this.responsesSignal.update(t=>t.filter(n=>n.formId!==e)),this.persistForms(),this.persistResponses()}duplicateForm(e){let t=this.getForm(e);if(!t)return;let n=Date.now(),i=q(W({},structuredClone(t)),{id:kt(),title:`${t.title} (copia)`,createdAt:n,updatedAt:n});return this.formsSignal.update(o=>[...o,i]),this.persistForms(),i}newQuestion(e=`short`){return{id:kt(),type:e,title:``,required:!1,options:e===`radio`||e===`checkbox`||e===`dropdown`?[{id:kt(),label:`Opción 1`}]:[],scaleMin:1,scaleMax:5,scaleMinLabel:``,scaleMaxLabel:``}}submitResponse(e,t){let n={id:kt(),formId:e,answers:t,submittedAt:Date.now()};this.responsesSignal.update(i=>[...i,n]),this.persistResponses()}clearResponses(e){this.responsesSignal.update(t=>t.filter(n=>n.formId!==e)),this.persistResponses()}persistForms(){Ln(Pn,this.formsSignal())}persistResponses(){Ln(Tn,this.responsesSignal())}static ɵfac=function(t){return new(t||a)};static ɵprov=yr({token:a,factory:a.ɵfac})};var Ct=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var ke=class extends Ct{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,n,i,o,r){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.projectableNodes=i,this.bindings=o||null,this.directives=r||null}};var ut=class extends Ct{templateRef;viewContainerRef;context;injector;constructor(e,t,n,i){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n,this.injector=i}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var Ce=class extends Ct{element;constructor(e){super(),this.element=e instanceof vr?e.nativeElement:e}};var Yt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof ke)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof ut)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Ce)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Xt=class extends Yt{outletElement;_appRef;_defaultInjector;constructor(e,t,n){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=n}attachComponentPortal(e){let t;if(e.viewContainerRef){let n=e.injector||e.viewContainerRef.injector,i=n.get(Tn$1,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:n,ngModuleRef:i,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,i=e.injector||this._defaultInjector||se.NULL,o=i.get(ue$1,n.injector);t=HP(e.component,{elementInjector:i,environmentInjector:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return n.rootNodes.forEach(i=>this.outletElement.appendChild(i)),n.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(n);i!==-1&&t.remove(i)}),this._attachedPortal=e,n}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var Xr=(()=>{class a extends ut{constructor(){let t=w(fr),n=w(Di);super(t,n)}static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[cp$1]})}return a})();var Kr=(()=>{class a extends Yt{_moduleRef=w(Tn$1,{optional:!0});_document=w(or);_viewContainerRef=w(Di);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Ve;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let n=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=n.createComponent(t.component,{index:n.length,injector:t.injector||n.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=t=>{let n=t.element;n.parentNode;let i=this._document.createComment(`dom-portal`);t.setAttachedHost(this),n.parentNode.insertBefore(i,n),this._getRootNode().appendChild(n),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(n,i)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static ɵfac=(()=>{let t;return function(i){return(t||(t=Tm(a)))(i||a)}})();static ɵdir=BE({type:a,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[cp$1]})}return a})();var Bn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({})}return a})();var La=20;var Kt=(()=>{class a{_ngZone=w(Me$1);_platform=w(Eu);_renderer=w(pr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Y;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=La){return this._platform.isBrowser?new _(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe($h(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):_h()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let i=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(Vn$1(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,t)&&n.push(o)}),n}_targetContainsElement(t,n){let i=F(n),o=t.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Ns=(()=>{class a{elementRef=w(vr);scrollDispatcher=w(Kt);ngZone=w(Me$1);dir=w(pu,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Y;_renderer=w(wa$1);_cleanupScroll;_elementScrolled=new Y;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let n=this.elementRef.nativeElement,i=this.dir&&this.dir.value==`rtl`;t.left??=i?t.end:t.start,t.right??=i?t.start:t.end,t.bottom!=null&&(t.top=n.scrollHeight-n.clientHeight-t.bottom),i&&Vp()!=Wt$1.NORMAL?(t.left!=null&&(t.right=n.scrollWidth-n.clientWidth-t.left),Vp()==Wt$1.INVERTED?t.left=t.right:Vp()==Wt$1.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=n.scrollWidth-n.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let n=this.elementRef.nativeElement;zp()?n.scrollTo(t):(t.top!=null&&(n.scrollTop=t.top),t.left!=null&&(n.scrollLeft=t.left))}measureScrollOffset(t){let n=`left`,i=`right`,o=this.elementRef.nativeElement;if(t==`top`)return o.scrollTop;if(t==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let r=this.dir&&this.dir.value==`rtl`;return t==`start`?t=r?i:n:t==`end`&&(t=r?n:i),r&&Vp()==Wt$1.INVERTED?t==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:r&&Vp()==Wt$1.NEGATED?t==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return a})();var za=20;var Et=(()=>{class a{_platform=w(Eu);_listeners;_viewportSize=null;_change=new Y;_document=w(or);constructor(){let t=w(Me$1),n=w(pr).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[n.listen(`window`,`resize`,i),n.listen(`window`,`orientationchange`,i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+n,height:i,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),i=t.documentElement,o=i.getBoundingClientRect();return{top:-o.top||t.body?.scrollTop||n.scrollY||i.scrollTop||0,left:-o.left||t.body?.scrollLeft||n.scrollX||i.scrollLeft||0}}change(t=za){return t>0?this._change.pipe($h(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Vn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({})}return a})();var Ee=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({imports:[us,Vn,us,Vn]})}return a})();var jn=zp();function Zn(a){return new Zt(a.get(Et),a.get(or))}var Zt=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=g(-this._previousScrollPosition.left),e.style.top=g(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,n=e.style,i=t.style,o=n.scrollBehavior||``,r=i.scrollBehavior||``;this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),jn&&(n.scrollBehavior=i.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),jn&&(n.scrollBehavior=o,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function Gn(a,e){return new Gt(a.get(Kt),a.get(Me$1),a.get(Et),e)}var Gt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,n,i){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=i}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Vn$1(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Nt=class{enable(){}disable(){}attach(){}};function Me(a,e){return e.some(t=>{let n=a.bottom<t.top,i=a.top>t.bottom,o=a.right<t.left,r=a.left>t.right;return n||i||o||r})}function Hn(a,e){return e.some(t=>{let n=a.top<t.top,i=a.bottom>t.bottom,o=a.left<t.left,r=a.right>t.right;return n||i||o||r})}function Re(a,e){return new $t(a.get(Kt),a.get(Et),a.get(Me$1),e)}var $t=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,n,i){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=i}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:i}=this._viewportRuler.getViewportSize();Me(t,[{width:n,height:i,bottom:i,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var $n=(()=>{class a{_injector=w(se);noop=()=>new Nt;close=t=>Gn(this._injector,t);block=()=>Zn(this._injector);reposition=t=>Re(this._injector,t);static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Mt=class{positionStrategy;scrollStrategy=new Nt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let n of t)e[n]!==void 0&&(this[n]=e[n])}}};var qt=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var qn=(()=>{class a{_attachedOverlays=[];_document=w(or);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Qn=(()=>{class a extends qn{_ngZone=w(Me$1);_renderer=w(pr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let i=n.length-1;i>-1;i--){let o=n[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Jn=(()=>{class a extends qn{_platform=w(Eu);_ngZone=w(Me$1);_renderer=w(pr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,`pointerdown`,this._pointerDownListener,i),o.listen(n,`click`,this._clickListener,i),o.listen(n,`auxclick`,this._clickListener,i),o.listen(n,`contextmenu`,this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Cu(t)};_clickListener=t=>{let n=Cu(t),i=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let c=o[r],d=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,t,d))){if(Wn(c.overlayElement,n)||Wn(c.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();function Wn(a,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,n=e;for(;n;){if(n===a)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var ta=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=PE({type:a,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return a})();var ea=(()=>{class a{_platform=w(Eu);_containerElement;_document=w(or);_styleLoader=w(au);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Wp()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let n=this._document.createElement(`div`);n.classList.add(t),Wp()?n.setAttribute(`platform`,`test`):this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(ta)}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Oe=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,n,i){this._renderer=t,this._ngZone=n,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,i)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ae(a){return a&&a.nodeType===1}var Ne=new Set;var Qt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Y;_attachments=new Y;_detachments=new Y;_positionStrategy;_scrollStrategy;_locationChanges=$.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Y;_outsidePointerEvents=new Y;_afterNextRenderRef;constructor(e,t,n,i,o,r,c,d,m,l=!1,u,M){this._portalOutlet=e,this._host=t,this._pane=n,this._config=i,this._ngZone=o,this._keyboardDispatcher=r,this._document=c,this._location=d,this._outsideClickDispatcher=m,this._animationsDisabled=l,this._injector=u,this._renderer=M,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Ne.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ry(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),Ne.delete(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Ne.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=W(W({},this._config),e),this._updateElementSize()}setDirection(e){this._config=q(W({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=g(this._config.width),e.height=g(this._config.height),e.minWidth=g(this._config.minWidth),e.minHeight=g(this._config.minHeight),e.maxWidth=g(this._config.maxWidth),e.maxHeight=g(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ae(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Oe(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,n){let i=lt(t||[]).filter(o=>!!o);i.length&&(n?e.classList.add(...i):e.classList.remove(...i))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=Ry(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var Un=`cdk-overlay-connected-position-bounding-box`;var Ba=/([A-Za-z%]+)$/;function Ie(a,e){return new Jt(e,a.get(Et),a.get(or),a.get(Eu),a.get(ea))}var Jt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Y;_resizeSubscription=$.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,n,i,o){this._viewportRuler=t,this._document=n,this._platform=i,this._overlayContainer=o,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(Un),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,n=this._viewportRect,i=this._containerRect,o=[],r;for(let c of this._preferredPositions){let d=this._getOriginPoint(e,i,c),m=this._getOverlayPoint(d,t,c),l=this._getOverlayFit(m,t,n,c);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,d);return}if(this._canFitWithFlexibleDimensions(l,m,n)){o.push({position:c,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,c)});continue}(!r||r.overlayFit.visibleArea<l.visibleArea)&&(r={overlayFit:l,overlayPoint:m,originPoint:d,position:c,overlayRect:t})}if(o.length){let c=null,d=-1;for(let m of o){let l=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);l>d&&(d=l,c=m)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&et(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Un),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof vr?this._origin.nativeElement:Ae(this._origin)?this._origin:null}_getOriginPoint(e,t,n){let i;if(n.originX==`center`)i=e.left+e.width/2;else{let r=this._isRtl()?e.right:e.left,c=this._isRtl()?e.left:e.right;i=n.originX==`start`?r:c}t.left<0&&(i-=t.left);let o;return n.originY==`center`?o=e.top+e.height/2:o=n.originY==`top`?e.top:e.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(e,t,n){let i;n.overlayX==`center`?i=-t.width/2:n.overlayX===`start`?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return n.overlayY==`center`?o=-t.height/2:o=n.overlayY==`top`?0:-t.height,{x:e.x+i,y:e.y+o}}_getOverlayFit(e,t,n,i){let o=Xn(t),{x:r,y:c}=e,d=this._getOffset(i,`x`),m=this._getOffset(i,`y`);d&&(r+=d),m&&(c+=m);let l=0-r,u=r+o.width-n.width,M=0-c,O=c+o.height-n.height,C=this._subtractOverflows(o.width,l,u),w=this._subtractOverflows(o.height,M,O),K=C*w;return{visibleArea:K,isCompletelyWithinViewport:o.width*o.height===K,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:C==o.width}}_canFitWithFlexibleDimensions(e,t,n){if(this._hasFlexibleDimensions){let i=n.bottom-t.y,o=n.right-t.x,r=Yn(this._overlayRef.getConfig().minHeight),c=Yn(this._overlayRef.getConfig().minWidth),d=e.fitsInViewportVertically||r!=null&&r<=i,m=e.fitsInViewportHorizontally||c!=null&&c<=o;return d&&m}return!1}_pushOverlayOnScreen(e,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let i=Xn(t),o=this._viewportRect,r=Math.max(e.x+i.width-o.width,0),c=Math.max(e.y+i.height-o.height,0),d=Math.max(o.top-n.top-e.y,0),m=Math.max(o.left-n.left-e.x,0),l=0,u=0;return i.width<=o.width?l=m||-r:l=e.x<this._getViewportMarginStart()?o.left-n.left-e.x:0,i.height<=o.height?u=d||-c:u=e.y<this._getViewportMarginTop()?o.top-n.top-e.y:0,this._previousPushAmount={x:l,y:u},{x:e.x+l,y:e.y+u}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!Va(this._lastScrollVisibility,n)){let i=new qt(e,n);this._positionChanges.next(i)}this._lastScrollVisibility=n}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,i=e.overlayY;e.overlayX===`center`?n=`center`:this._isRtl()?n=e.overlayX===`start`?`right`:`left`:n=e.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${n} ${i}`}_calculateBoundingBoxRect(e,t){let n=this._viewportRect,i=this._isRtl(),o,r,c;if(t.overlayY===`top`)r=e.y,o=n.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)c=n.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-c+this._getViewportMarginTop();else{let O=Math.min(n.bottom-e.y+n.top,e.y),C=this._lastBoundingBoxSize.height;o=O*2,r=e.y-O,o>C&&!this._isInitialRender&&!this._growAfterOpen&&(r=e.y-C/2)}let d=t.overlayX===`start`&&!i||t.overlayX===`end`&&i,m=t.overlayX===`end`&&!i||t.overlayX===`start`&&i,l,u,M;if(m)M=n.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),l=e.x-this._getViewportMarginStart();else if(d)u=e.x,l=n.right-e.x-this._getViewportMarginEnd();else{let O=Math.min(n.right-e.x+n.left,e.x),C=this._lastBoundingBoxSize.width;l=O*2,u=e.x-O,l>C&&!this._isInitialRender&&!this._growAfterOpen&&(u=e.x-C/2)}return{top:r,left:u,bottom:c,right:M,width:l,height:o}}_setBoundingBoxStyles(e,t){let n=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left=`0`,i.bottom=i.right=`auto`,i.maxHeight=i.maxWidth=``,i.width=i.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=g(n.width),i.height=g(n.height),i.top=g(n.top)||`auto`,i.bottom=g(n.bottom)||`auto`,i.left=g(n.left)||`auto`,i.right=g(n.right)||`auto`,t.overlayX===`center`?i.alignItems=`center`:i.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?i.justifyContent=`center`:i.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(i.maxHeight=g(o)),r&&(i.maxWidth=g(r))}this._lastBoundingBoxSize=n,et(this._boundingBox.style,i)}_resetBoundingBoxStyles(){et(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){et(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let n={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let l=this._viewportRuler.getViewportScrollPosition();et(n,this._getExactOverlayY(t,e,l)),et(n,this._getExactOverlayX(t,e,l))}else n.position=`static`;let c=``,d=this._getOffset(t,`x`),m=this._getOffset(t,`y`);d&&(c+=`translateX(${d}px) `),m&&(c+=`translateY(${m}px)`),n.transform=c.trim(),r.maxHeight&&(i?n.maxHeight=g(r.maxHeight):o&&(n.maxHeight=``)),r.maxWidth&&(i?n.maxWidth=g(r.maxWidth):o&&(n.maxWidth=``)),et(this._pane.style,n)}_getExactOverlayY(e,t,n){let i={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),e.overlayY===`bottom`)i.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else i.top=g(o.y);return i}_getExactOverlayX(e,t,n){let i={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let r;if(this._isRtl()?r=e.overlayX===`end`?`left`:`right`:r=e.overlayX===`end`?`right`:`left`,r===`right`)i.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else i.left=g(o.x);return i}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Hn(e,n),isOriginOutsideView:Me(e,n),isOverlayClipped:Hn(t,n),isOverlayOutsideView:Me(t,n)}}_subtractOverflows(e,...t){return t.reduce((n,i)=>n-Math.max(i,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+e-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&lt(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof vr)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,n=e.height||0;return{top:e.y,bottom:e.y+n,left:e.x,right:e.x+t,height:n,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let n=t.getBoundingClientRect();return e&&(t.style.display=``),n}};function et(a,e){for(let t in e)Object.hasOwn(e,t)&&(a[t]=e[t]);return a}function Yn(a){if(typeof a!=`number`&&a!=null){let[e,t]=a.split(Ba);return!t||t===`px`?parseFloat(e):null}return a||null}function Xn(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function Va(a,e){return a===e?!0:a.isOriginClipped===e.isOriginClipped&&a.isOriginOutsideView===e.isOriginOutsideView&&a.isOverlayClipped===e.isOverlayClipped&&a.isOverlayOutsideView===e.isOverlayOutsideView}var Kn=`cdk-global-overlay-wrapper`;function na(a){return new te}var te=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(Kn),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:i,height:o,maxWidth:r,maxHeight:c}=this._overlayRef.getConfig(),d=(i===`100%`||i===`100vw`)&&(!r||r===`100%`||r===`100vw`),m=(o===`100%`||o===`100vh`)&&(!c||c===`100%`||c===`100vh`),l=this._xPosition,u=this._xOffset,M=this._overlayRef.getConfig().direction===`rtl`,O=``,C=``,w=``;d?w=`flex-start`:l===`center`?(w=`center`,M?C=u:O=u):M?l===`left`||l===`end`?(w=`flex-end`,O=u):(l===`right`||l===`start`)&&(w=`flex-start`,C=u):l===`left`||l===`start`?(w=`flex-start`,O=u):(l===`right`||l===`end`)&&(w=`flex-end`,C=u),e.position=this._cssPosition,e.marginLeft=d?`0`:O,e.marginTop=m?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=d?`0`:C,t.justifyContent=w,t.alignItems=m?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(Kn),n.justifyContent=n.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var aa=(()=>{class a{_injector=w(se);global(){return na()}flexibleConnectedTo(t){return Ie(this._injector,t)}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var Pe=new x(`OVERLAY_DEFAULT_CONFIG`);function Te(a,e){a.get(au).load(ta);let t=a.get(ea),n=a.get(or),i=a.get(xt),o=a.get(wi),r=a.get(pu),c=a.get(wa$1,null,{optional:!0})||a.get(pr).createRenderer(null,null),d=new Mt(e),m=a.get(Pe,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||r.value,!n.body||!(`showPopover`in n.body)?d.usePopover=!1:d.usePopover=e?.usePopover??m;let l=n.createElement(`div`),u=n.createElement(`div`);l.id=i.getId(`cdk-overlay-`),l.classList.add(`cdk-overlay-pane`),u.appendChild(l),d.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let M=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Ae(M)?M.after(u):M?.type===`parent`?M.element.appendChild(u):t.getContainerElement().appendChild(u),new Qt(new Xt(l,o,a),u,l,d,a.get(Me$1),a.get(Qn),n,a.get(Xe),a.get(Jn),e?.disableAnimations??a.get(Bg,null,{optional:!0})===`NoopAnimations`,a.get(ue$1),c)}var ia=(()=>{class a{scrollStrategies=w($n);_positionBuilder=w(aa);_injector=w(se);create(t){return Te(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(n){return new(n||a)};static ɵprov=yr({token:a,factory:a.ɵfac})}return a})();var ja=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var Ha=new x(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=w(se);return()=>Re(a)}});var De=(()=>{class a{elementRef=w(vr);static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return a})();var oa=new x(`cdk-connected-overlay-default-config`);var Wa=(()=>{class a{_dir=w(pu,{optional:!0});_injector=w(se);_overlayRef;_templatePortal;_backdropSubscription=$.EMPTY;_attachSubscription=$.EMPTY;_detachSubscription=$.EMPTY;_positionSubscription=$.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=w(Ha);_ngZone=w(Me$1);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new Ve;positionChange=new Ve;attach=new Ve;detach=new Ve;overlayKeydown=new Ve;overlayOutsideClick=new Ve;constructor(){let t=w(fr),n=w(Di),i=w(oa,{optional:!0}),o=w(Pe,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new ut(t,n),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ja);let t=this._overlayRef=Te(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Wt(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let i=this._getOriginElement(),o=Cu(n);(!i||i!==o&&!i.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),n=new Mt({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(t){let n=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=Ie(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof De?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof De?this.origin.elementRef.nativeElement:this.origin instanceof vr?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(rg(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(n){return new(n||a)};static ɵdir=BE({type:a,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,FP],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,FP],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,FP],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,FP],push:[2,`cdkConnectedOverlayPush`,`push`,FP],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,FP],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,FP],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[im]})}return a})();var Ua=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=jE({type:a});static ɵinj=vl({providers:[ia],imports:[us,Bn,Ee,Ee]})}return a})();export{zn as $,Wt as A,ke as B,Sr as C,Vn as D,Ua as E,da as F,ra as G,mt as H,ea as I,wa as J,ut as K,fe as L,Yt as M,Zn as N,Vt as O,bn as P,yt as Q,ge as R,Re as S,Tr as T,na as U,lt as V,pe as W,xa as X,wr as Y,xt as Z,Oo as _,Dn as a,Pr as b,Fo as c,Ir as d,zt as et,Kr as f,Oi as g,Ns as h,De as i,Xr as j,Wa as k,Go as l,Mt as m,Ar as n,Et as o,Kt as p,vt as q,Bn as r,F as s,An as t,Ie as u,Pa as v,Te as w,Qt as x,Pe as y,ka as z};