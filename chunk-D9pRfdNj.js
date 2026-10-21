import{$ as Me$1,$t as im,A as BE,An as uI,At as Zo,Bn as wI,Bt as ci,C as xp,Dn as sI,Dt as Xh,Et as Wl,F as Di,Fn as vl,Ft as _p,G as II,Gt as dp,Ht as dD,In as vp,It as bI,Jt as fI,L as Ec,Ln as vr,Lt as bp,M as Bh,Mn as up,Mt as _I,N as CI,On as se,Ot as Y,P as Cp,Pt as _h,Q as MI,Qt as iD,St as Vp,T as $,Tt as Wh,Un as x,Ut as dI,Vn as wa,Vt as cp,Wn as yI,Xt as gp,Y as LP,Yt as fr,_ as ns,_t as VI,a as Lp,an as jp,at as PE,cn as mc,dt as Ry,fn as ng,ft as Tm,g as ie,i as Eu,in as jn,jt as _,k as Ap,kn as tg,kt as YI,ln as mp,mn as oD,nn as jP,on as ko,p as au,qn as yp,qt as eg,sn as lI,tn as jE,un as mt,ut as Rp,v as pu,vn as ov,wn as ql,x as us,xt as Vn,y as st,yt as Ve$1,z as FP,zn as w,zt as cI}from"./main-3ODT3WXF.js";import{$ as zn,A as Wt,C as Sr,G as ra,H as mt$1,K as ut,R as ge,T as Tr,Y as wr,Z as xt,a as Dn,d as Ir,f as Kr,g as Oi,h as Ns,j as Xr,l as Go,n as Ar,o as Et,v as Pa}from"./chunk-BDsb-IaV.js";import{n as Ht,t as $t}from"./chunk-CS6lDVIL.js";import{t as Ht$1}from"./chunk-D-t3rpyf.js";import{t as z}from"./chunk-Bl6XIkZ2.js";var Ae=new x(`MatTabContent`);var Fe=(()=>{class a{template=w(fr);static ɵfac=function(e){return new(e||a)};static ɵdir=BE({type:a,selectors:[[``,`matTabContent`,``]],features:[oD([{provide:Ae,useExisting:a}])]})}return a})();var Oe=new x(`MatTabLabel`);var we=new x(`MAT_TAB`);var ze=(()=>{class a extends Xr{_closestTab=w(we,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Tm(a)))(n||a)}})();static ɵdir=BE({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[oD([{provide:Oe,useExisting:a}]),cp]})}return a})();var Ie=new x(`MAT_TAB_GROUP`);var St=(()=>{class a{_viewContainerRef=w(Di);_closestTabGroup=w(Ie,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Y;position=null;origin=null;isActive=!1;constructor(){w(au).load(Dn)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ut(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,r){n&1&&bI(0)}return PE({type:a,selectors:[[`mat-tab`]],contentQueries:function(r,b,g){if(r&1&&Cp(g,ze,5)(g,Fe,7,fr),r&2){let y;CI(y=_I())&&(b.templateLabel=y.first),CI(y=_I())&&(b._explicitContent=y.first)}},viewQuery:function(r,b){if(r&1&&_p(fr,7),r&2){let g;CI(g=_I())&&(b._implicitContent=g.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(r,b){r&2&&mp(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,FP],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[oD([{provide:we,useExisting:a}]),im],ngContentSelectors:t,decls:1,vars:0,template:function(r,b){r&1&&(wI(),dp(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var kt=`mdc-tab-indicator--active`;var ke=`mdc-tab-indicator--no-transition`;var Tt=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let t=this._items.find(n=>n.elementRef.nativeElement===i),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var He=(()=>{class a{_elementRef=w(vr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(kt);return}let n=e.getBoundingClientRect(),r=t.width/n.width,b=t.left-n.left;e.classList.add(ke),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${b}px) scaleX(${r})`),e.getBoundingClientRect(),e.classList.remove(ke),e.classList.add(kt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(kt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=BE({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,FP]}})}return a})();var Se=(()=>{class a extends He{elementRef=w(vr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tm(a)))(n||a)}})();static ɵdir=BE({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(mp(`aria-disabled`,!!n.disabled),Rp(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,FP]},features:[cp]})}return a})();var Ce={passive:!0};var Ve=650;var $e=100;function Ct(a){let i=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(i)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(i)?i:``}var je=(()=>{class a{_elementRef=w(vr);_changeDetectorRef=w(LP);_viewportRuler=w(Et);_dir=w(pu,{optional:!0});_ngZone=w(Me$1);_platform=w(Eu);_sharedResizeObserver=w(z);_injector=w(se);_renderer=w(wa);_animationsDisabled=mt$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Ve$1;indexFocused=new Ve$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Ce),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Ce))}ngAfterContentInit(){let t=this._dir?this._dir.change:_h(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Wh(32),ng(this._destroyed)),n=this._viewportRuler.change(150).pipe(ng(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ge(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ry(r,{injector:this._injector}),Bh(t,n,e,this._items.changes,this._itemsResized()).pipe(ng(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(b=>{this.indexFocused.emit(b),this._setTabFocus(b)})}_itemsResized(){return typeof ResizeObserver!=`function`?mt:this._items.changes.pipe(eg(this._items),tg(t=>new _(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(r=>e.next(r));return t.forEach(r=>n.observe(r.elementRef.nativeElement)),()=>{n.disconnect()}}))),Xh(1),Vn(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Wt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:b}=e.elementRef.nativeElement,g,y;this._getLayoutDirection()==`ltr`?(g=r,y=g+b):(y=this._tabListInner.nativeElement.offsetWidth-r,g=y-b);let x=this.scrollDistance,l=this.scrollDistance+n;g<x?this.scrollDistance-=x-g:y>l&&(this.scrollDistance+=Math.min(y-l,g-x))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),jn(Ve,$e).pipe(ng(Bh(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:r}=this._scrollHeader(t);(r===0||r>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=BE({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,FP],selectedIndex:[2,`selectedIndex`,`selectedIndex`,jP]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Qe=(()=>{class a extends je{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Tt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tm(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],r=[`nextPaginator`],b=[`previousPaginator`];return PE({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(x,l,s){if(x&1&&Cp(s,Se,4),x&2){let p;CI(p=_I())&&(l._items=p)}},viewQuery:function(x,l){if(x&1&&_p(t,7)(e,7)(n,7)(r,5)(b,5),x&2){let s;CI(s=_I())&&(l._tabListContainer=s.first),CI(s=_I())&&(l._tabList=s.first),CI(s=_I())&&(l._tabListInner=s.first),CI(s=_I())&&(l._nextPaginator=s.first),CI(s=_I())&&(l._previousPaginator=s.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(x,l){x&2&&Rp(`mat-mdc-tab-header-pagination-controls-enabled`,l._showPaginationControls)(`mat-mdc-tab-header-rtl`,l._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,FP]},features:[cp],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(x,l){x&1&&(wI(),ci(0,`div`,5,0),bp(`click`,function(){return l._handlePaginatorClick(`before`)})(`mousedown`,function(p){return l._handlePaginatorPress(`before`,p)})(`touchend`,function(){return l._stopInterval()}),vp(2,`div`,6),mc(),ci(3,`div`,7,1),bp(`keydown`,function(p){return l._handleKeydown(p)}),ci(5,`div`,8,2),bp(`cdkObserveContent`,function(){return l._onContentChanges()}),ci(7,`div`,9,3),bI(9),mc()()(),ci(10,`div`,10,4),bp(`mousedown`,function(p){return l._handlePaginatorPress(`after`,p)})(`click`,function(){return l._handlePaginatorClick(`after`)})(`touchend`,function(){return l._stopInterval()}),vp(12,`div`,6),mc()),x&2&&(Rp(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollBefore),yp(`matRippleDisabled`,l._disableScrollBefore||l.disableRipple),ov(3),Rp(`_mat-animation-noopable`,l._animationsDisabled),ov(2),mp(`aria-label`,l.ariaLabel||null)(`aria-labelledby`,l.ariaLabelledby||null),ov(5),Rp(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollAfter),yp(`matRippleDisabled`,l._disableScrollAfter||l.disableRipple))},dependencies:[Go,Oi],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return a})();var We=new x(`MAT_TABS_CONFIG`);var Te=(()=>{class a extends Kr{_host=w(wt);_ngZone=w(Me$1);_centeringSub=$.EMPTY;_leavingSub=$.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(eg(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tm(a)))(n||a)}})();static ɵdir=BE({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[cp]})}return a})();var wt=(()=>{class a{_elementRef=w(vr);_dir=w(pu,{optional:!0});_ngZone=w(Me$1);_injector=w(se);_renderer=w(wa);_diAnimationsDisabled=mt$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=$.EMPTY;_position;_previousPosition;_onCentering=new Ve$1;_beforeCentering=new Ve$1;_afterLeavingCenter=new Ve$1;_onCentered=new Ve$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=w(LP);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Ry(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ry(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,r){}return PE({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(r,b){if(r&1&&_p(Te,5)(t,5),r&2){let g;CI(g=_I())&&(b._portalHost=g.first),CI(g=_I())&&(b._contentElement=g.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(r,b){r&2&&mp(`inert`,b._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(r,b){r&1&&(ci(0,`div`,1,0),up(2,e,0,0,`ng-template`,2),mc()),r&2&&Rp(`mat-tab-body-content-left`,b._position===`left`)(`mat-tab-body-content-right`,b._position===`right`)(`mat-tab-body-content-can-animate`,b._position===`center`||b._previousPosition===`center`)},dependencies:[Te,Ns],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Me=(()=>{class a{_elementRef=w(vr);_changeDetectorRef=w(LP);_ngZone=w(Me$1);_tabsSubscription=$.EMPTY;_tabLabelSubscription=$.EMPTY;_tabBodySubscription=$.EMPTY;_diAnimationsDisabled=mt$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Zo;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Ct(t.body),this._headerAnimationDuration=Ct(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Ct(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Ve$1;focusChange=new Ve$1;animationDone=new Ve$1;selectedTabChange=new Ve$1(!0);_groupId;_isServer=!w(Eu).isBrowser;constructor(){let t=w(We,{optional:!0});this._groupId=w(xt).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,r)=>n.isActive=r===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let r=0;r<e.length;r++)if(e[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,n=e[r];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(eg(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new It;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Bh(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function r(s,p){}function b(s,p){if(s&1&&up(0,r,0,0,`ng-template`,12),s&2){let o=II().$implicit;yp(`cdkPortalOutlet`,o.templateLabel)}}function g(s,p){if(s&1&&YI(0),s&2){let o=II().$implicit;jp(o.textLabel)}}function y(s,p){if(s&1){let o=yI();ci(0,`div`,7,2),bp(`click`,function(){let u=Wl(o),k=u.$implicit,ct=u.$index,Ne=II(),Re=MI(1);return ql(Ne._handleClick(k,Re,ct))})(`cdkFocusChange`,function(u){let k=Wl(o).$index,ct=II();return ql(ct._tabFocusChanged(u,k))}),vp(2,`span`,8)(3,`div`,9),ci(4,`span`,10)(5,`span`,11),sI(6,b,1,1,null,12)(7,g,1,1),mc()()()}if(s&2){let o=p.$implicit,_=p.$index,u=MI(1),k=II();VI(o.labelClass),Rp(`mdc-tab--active`,k.selectedIndex===_),yp(`id`,k._getTabLabelId(o,_))(`disabled`,o.disabled)(`fitInkBarToContent`,k.fitInkBarToContent),mp(`tabIndex`,k._getTabIndex(_))(`aria-posinset`,_+1)(`aria-setsize`,k._tabs.length)(`aria-controls`,k._getTabContentId(_))(`aria-selected`,k.selectedIndex===_)(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,!o.ariaLabel&&o.ariaLabelledby?o.ariaLabelledby:null),ov(3),yp(`matRippleTrigger`,u)(`matRippleDisabled`,o.disabled||k.disableRipple),ov(3),cI(o.templateLabel?6:7)}}function x(s,p){s&1&&bI(0)}function l(s,p){if(s&1){let o=yI();ci(0,`mat-tab-body`,13),bp(`_onCentered`,function(){Wl(o);let u=II();return ql(u._removeTabBodyWrapperHeight())})(`_onCentering`,function(u){Wl(o);let k=II();return ql(k._setTabBodyWrapperHeight(u))})(`_beforeCentering`,function(u){Wl(o);let k=II();return ql(k._bodyCentered(u))}),mc()}if(s&2){let o=p.$implicit,_=p.$index,u=II();VI(o.bodyClass),yp(`id`,u._getTabContentId(_))(`content`,o.content)(`position`,o.position)(`animationDuration`,u._bodyAnimationDuration)(`preserveContent`,u.preserveContent),mp(`tabindex`,u.contentTabIndex!=null&&u.selectedIndex===_?u.contentTabIndex:null)(`aria-labelledby`,u._getTabLabelId(o,_))(`aria-hidden`,u.selectedIndex!==_)}}return PE({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(p,o,_){if(p&1&&Cp(_,St,5),p&2){let u;CI(u=_I())&&(o._allTabs=u)}},viewQuery:function(p,o){if(p&1&&_p(t,5)(e,5)(wt,5),p&2){let _;CI(_=_I())&&(o._tabBodyWrapper=_.first),CI(_=_I())&&(o._tabHeader=_.first),CI(_=_I())&&(o._tabBodies=_)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(p,o){p&2&&(mp(`mat-align-tabs`,o.alignTabs),VI(`mat-`+(o.color||`primary`)),Ap(`--%NS%mat-tab-body-animation-duration`,o._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,o._headerAnimationDuration),Rp(`mat-mdc-tab-group-dynamic-height`,o.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,o.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,o.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,FP],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,FP],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,FP],selectedIndex:[2,`selectedIndex`,`selectedIndex`,jP],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,jP],disablePagination:[2,`disablePagination`,`disablePagination`,FP],disableRipple:[2,`disableRipple`,`disableRipple`,FP],preserveContent:[2,`preserveContent`,`preserveContent`,FP],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[oD([{provide:Ie,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(p,o){p&1&&(wI(),ci(0,`mat-tab-header`,3,0),bp(`indexFocused`,function(u){return o._focusChanged(u)})(`selectFocusedIndex`,function(u){return o.selectedIndex=u}),dI(2,y,8,17,`div`,4,uI),mc(),sI(4,x,1,0),ci(5,`div`,5,1),dI(7,l,1,10,`mat-tab-body`,6,uI),mc()),p&2&&(yp(`selectedIndex`,o.selectedIndex||0)(`disableRipple`,o.disableRipple)(`disablePagination`,o.disablePagination),gp(`aria-label`,o.ariaLabel)(`aria-labelledby`,o.ariaLabelledby),ov(2),fI(o._tabs),ov(2),cI(o._isServer?4:-1),ov(),Rp(`_mat-animation-noopable`,o._bodyAnimationsDisabled()),ov(2),fI(o._tabs))},dependencies:[Qe,Se,ra,Go,Kr,wt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var It=class{index;tab};var De=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=jE({type:a});static ɵinj=vl({imports:[us]})}return a})();var qe=a=>[`/editar`,a];var Mt=(a,i)=>i.id;var Ze=(a,i)=>i.label;function Ke(a,i){a&1&&(ci(0,`div`,5)(1,`mat-icon`),YI(2,`inbox`),mc(),ci(3,`p`),YI(4,`Todavía no hay respuestas.`),mc()())}function Ye(a,i){if(a&1&&(ci(0,`div`,13)(1,`span`,14),YI(2),mc(),ci(3,`div`,15),vp(4,`div`,16),mc(),ci(5,`span`,17),YI(6),mc()()),a&2){let t=i.$implicit;ov(2),jp(t.label),ov(2),Ap(`width`,t.percent,`%`),ov(2),jp(t.count)}}function Ue(a,i){if(a&1&&dI(0,Ye,7,4,`div`,13,Ze),a&2){let t=II().$implicit,e=II(3);fI(e.tallyFor(t))}}function Xe(a,i){if(a&1&&(ci(0,`li`),YI(1),mc()),a&2){let t=i.$implicit;ov(),jp(t)}}function Je(a,i){a&1&&(ci(0,`li`,18),YI(1,`Sin respuestas de texto`),mc())}function ta(a,i){if(a&1&&(ci(0,`ul`,12),dI(1,Xe,2,1,`li`,null,lI,!1,Je,2,0,`li`,18),mc()),a&2){let t=II().$implicit,e=II(3);ov(),fI(e.textAnswersFor(t))}}function ea(a,i){if(a&1&&(ci(0,`mat-card`,9)(1,`mat-card-content`)(2,`h3`),YI(3),mc(),sI(4,Ue,2,0)(5,ta,4,1,`ul`,12),mc()()),a&2){let t=i.$implicit,e=II(3);ov(3),jp(t.title||`Pregunta sin título`),ov(),cI(e.isTallyType(t.type)?4:5)}}function aa(a,i){if(a&1&&(ci(0,`div`,20)(1,`span`,21),YI(2),mc(),ci(3,`span`,22),YI(4),mc()()),a&2){let t=i.$implicit,e=II().$implicit,n=II(3);ov(2),jp(t.title||`Pregunta sin título`),ov(2),jp(n.answerText(e.answers[t.id]))}}function na(a,i){if(a&1&&(ci(0,`mat-card`,11)(1,`mat-card-content`)(2,`p`,19),YI(3),mc(),dI(4,aa,5,2,`div`,20,Mt),mc()()),a&2){let t=i.$index,e=II(2);ov(3),Ec(`Respuesta `,t+1),ov(),fI(e.questions)}}function ia(a,i){if(a&1&&(ci(0,`p`,6),YI(1),mc(),ci(2,`mat-tab-group`)(3,`mat-tab`,7)(4,`div`,8),dI(5,ea,6,2,`mat-card`,9,Mt),mc()(),ci(7,`mat-tab`,10)(8,`div`,8),dI(9,na,6,1,`mat-card`,11,Mt),mc()()()),a&2){let t=II(),e=II();ov(),Vp(``,e.responses().length,` respuesta`,e.responses().length===1?``:`s`),ov(4),fI(t.questions),ov(4),fI(e.responses())}}function oa(a,i){if(a&1){let t=yI();ci(0,`div`,0)(1,`a`,1)(2,`mat-icon`),YI(3,`arrow_back`),mc()(),ci(4,`h2`),YI(5),mc(),vp(6,`span`,2),ci(7,`button`,3),bp(`click`,function(){Wl(t);let n=II();return ql(n.clearResponses())}),ci(8,`mat-icon`),YI(9,`delete_sweep`),mc(),YI(10,` Borrar respuestas `),mc()(),ci(11,`div`,4),sI(12,Ke,5,0,`div`,5)(13,ia,11,2),mc()}if(a&2){let t=i,e=II();ov(),yp(`routerLink`,iD(4,qe,t.id)),ov(4),jp(t.title||`Formulario sin título`),ov(2),yp(`disabled`,e.responses().length===0),ov(5),cI(e.responses().length===0?12:13)}}var Pe=class a{route=w(ie);router=w(st);store=w(zn);dialog=w(Ht);snackBar=w(Ht$1);form=ko(null);responses=dD(()=>{let i=this.form();return i?this.store.responsesForForm(i.id):[]});constructor(){let i=this.route.snapshot.paramMap.get(`id`),t=i?this.store.getForm(i):void 0;t?this.form.set(t):this.router.navigate([`/inicio`])}answerText(i){return i?Array.isArray(i)?i.join(`, `)||`—`:i:`—`}isTallyType(i){return i===`radio`||i===`checkbox`||i===`dropdown`||i===`linear_scale`}tallyFor(i){let t=this.responses().length||1;return(i.type===`linear_scale`?this.scaleLabels(i):i.options.map(n=>n.label)).map(n=>{let r=this.responses().filter(b=>{let g=b.answers[i.id];return Array.isArray(g)?g.includes(n):g===n}).length;return{label:n,count:r,percent:Math.round(r/t*100)}})}scaleLabels(i){let t=[];for(let e=i.scaleMin;e<=i.scaleMax;e++)t.push(e.toString());return t}textAnswersFor(i){return this.responses().map(t=>t.answers[i.id]).filter(t=>typeof t==`string`&&t.trim().length>0)}clearResponses(){let i=this.form();if(!i)return;this.dialog.open($t,{data:{title:`Borrar respuestas`,message:`\xBFEliminar las ${this.responses().length} respuestas de este formulario?`,confirmLabel:`Borrar`}}).afterClosed().subscribe(e=>{e&&(this.store.clearResponses(i.id),this.snackBar.open(`Respuestas eliminadas`,`Cerrar`,{duration:2500}))})}static ɵfac=function(t){return new(t||a)};static ɵcmp=PE({type:a,selectors:[[`app-responses`]],decls:1,vars:1,consts:[[1,`responses-toolbar`],[`mat-icon-button`,``,`title`,`Volver al editor`,3,`routerLink`],[1,`spacer`],[`mat-stroked-button`,``,3,`click`,`disabled`],[1,`responses`],[1,`empty-state`],[1,`count`],[`label`,`Resumen`],[1,`tab-content`],[`appearance`,`outlined`,1,`summary-card`],[`label`,`Individuales`],[`appearance`,`outlined`,1,`individual-card`],[1,`text-answers`],[1,`tally-row`],[1,`tally-label`],[1,`tally-bar`],[1,`tally-fill`],[1,`tally-count`],[1,`muted`],[1,`individual-index`],[1,`individual-row`],[1,`q-title`],[1,`q-answer`]],template:function(t,e){if(t&1&&sI(0,oa,14,6),t&2){let n;cI((n=e.form())?0:-1,n)}},dependencies:[ns,wr,Sr,Pa,xp,Lp,Tr,Ar,Ir,De,St,Me],styles:[`.responses-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 24px;background:var(--%NS%mat-sys-surface);border-bottom:1px solid var(--%NS%mat-sys-outline-variant);position:sticky;top:64px;z-index:5}.responses-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin:0}.responses-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.responses[_ngcontent-%COMP%]{max-width:720px;margin:0 auto;padding:24px 16px 64px}.count[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);margin:0 0 8px}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:80px 0;color:var(--%NS%mat-sys-on-surface-variant)}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.tab-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding-top:16px}.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 12px;font-size:16px;font-weight:500}.tally-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 1fr 32px;align-items:center;gap:8px;margin-bottom:8px;font-size:13px}.tally-row[_ngcontent-%COMP%]   .tally-label[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tally-row[_ngcontent-%COMP%]   .tally-bar[_ngcontent-%COMP%]{height:20px;background:var(--%NS%mat-sys-surface-container-highest);border-radius:4px;overflow:hidden}.tally-row[_ngcontent-%COMP%]   .tally-fill[_ngcontent-%COMP%]{height:100%;background:var(--%NS%mat-sys-primary)}.tally-row[_ngcontent-%COMP%]   .tally-count[_ngcontent-%COMP%]{text-align:right;color:var(--%NS%mat-sys-on-surface-variant)}.text-answers[_ngcontent-%COMP%]{margin:0;padding-left:18px}.text-answers[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);list-style:none;margin-left:-18px}.individual-index[_ngcontent-%COMP%]{font-weight:500;margin:0 0 8px;color:var(--%NS%mat-sys-on-surface-variant)}.individual-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:6px 0;border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.individual-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.individual-row[_ngcontent-%COMP%]   .q-title[_ngcontent-%COMP%]{font-size:12px;color:var(--%NS%mat-sys-on-surface-variant)}.individual-row[_ngcontent-%COMP%]   .q-answer[_ngcontent-%COMP%]{font-size:14px}`]})};export{Pe as Responses};