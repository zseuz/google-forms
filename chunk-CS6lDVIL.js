import{$ as Me,A as BE,Bt as ci,Ct as W,Fn as vl,Ft as _p,I as Dp,Jn as yr,L as Ec,Ln as vr,Lt as bp,M as Bh,Mn as up,Mt as _I,N as CI,On as se$1,Ot as Y,Sn as q$1,Un as x,Vn as wa,Vt as cp,X as Ln,Y as LP,Yt as fr,an as jp,at as PE,cn as mc,dt as Ry,ft as Tm,gn as or,gt as Ui,i as Eu,kt as YI,ln as mp,on as ko,qt as eg,rn as jh,s as Su,tn as jE,ut as Rp,v as pu,vn as ov,wt as WE,x as us,xt as Vn,yt as Ve,zn as w}from"./main-3ODT3WXF.js";import{A as Wt$1,B as ke,C as Sr,E as Ua,F as da,H as mt,I as ea,K as ut,M as Yt$1,N as Zn,O as Vt$1,U as na,X as xa,Y as wr,Z as xt,et as zt$1,f as Kr,h as Ns,m as Mt,r as Bn,w as Te,x as Qt$1,z as ka}from"./chunk-BDsb-IaV.js";var u=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var nt=(()=>{class i extends Yt$1{_elementRef=w(vr);_focusTrapFactory=w(xa);_config;_interactivityChecker=w(da);_ngZone=w(Me);_focusMonitor=w(Vt$1);_renderer=w(wa);_changeDetectorRef=w(LP);_injector=w(se$1);_platform=w(Eu);_document=w(or);_portalOutlet;_focusTrapped=new Y;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=w(u,{optional:!0})||new u,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),l(),t.removeAttribute(`tabindex`)},o=this._renderer.listen(t,`blur`,n),l=this._renderer.listen(t,`mousedown`,n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(t){this._isDestroyed||Ry(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let n=Su(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Su();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Su()))}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){function t(e,n){}return PE({type:i,selectors:[[`cdk-dialog-container`]],viewQuery:function(n,o){if(n&1&&_p(Kr,7),n&2){let l;CI(l=_I())&&(o._portalOutlet=l.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(n,o){n&2&&mp(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[cp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(n,o){n&1&&up(0,t,0,0,`ng-template`,0)},dependencies:[Kr],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var _=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Wt$1(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a=``,t=``){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}};var Kt=new x(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let i=w(se$1);return()=>Zn(i)}});var Xt=new x(`DialogData`);var Jt=new x(`DefaultDialogConfig`);function te(i){let a=ko(i),t=new Ve;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var at=(()=>{class i{_injector=w(se$1);_defaultOptions=w(Jt,{optional:!0});_parentDialog=w(i,{optional:!0,skipSelf:!0});_overlayContainer=w(ea);_idGenerator=w(xt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Y;_afterOpenedAtThisLevel=new Y;_ariaHiddenElements=new Map;_scrollStrategy=w(Kt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=jh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(eg(void 0)));open(t,e){let n=this._defaultOptions||new u;e=W(W({},n),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),l=Te(this._injector,o),s=new _(l,e),d=this._attachContainer(l,s,e);if(s.containerInstance=d,!this.openDialogs.length){let Y=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(Ui(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(Y)}):this._hideNonDialogContentFromAssistiveTechnology(Y)}return this._attachDialogContent(t,s,d,e),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){it(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){it(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),it(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Mt({positionStrategy:t.positionStrategy||na().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){let o=n.injector||n.viewContainerRef?.injector,l=[{provide:u,useValue:n},{provide:_,useValue:e},{provide:Qt$1,useValue:t}],s;n.container?typeof n.container==`function`?s=n.container:(s=n.container.type,l.push(...n.container.providers(n))):s=nt;let d=new ke(s,n.viewContainerRef,se$1.create({parent:o||this._injector,providers:l}));return t.attach(d).instance}_attachDialogContent(t,e,n,o){if(t instanceof fr){let l=this._createInjector(o,e,n,void 0),s={$implicit:o.data,dialogRef:e};o.templateContext&&(s=W(W({},s),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),n.attachTemplatePortal(new ut(t,null,s,l))}else{let l=this._createInjector(o,e,n,this._injector),s=n.attachComponentPortal(new ke(t,o.viewContainerRef,l,null,o.bindings));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,n,o){let l=t.injector||t.viewContainerRef?.injector,s=[{provide:Xt,useValue:t.data},{provide:_,useValue:e}];return t.providers&&(typeof t.providers==`function`?s.push(...t.providers(e,t,n)):s.push(...t.providers)),t.direction&&(!l||!l.get(pu,null,{optional:!0}))&&s.push({provide:pu,useValue:te(t.direction)}),se$1.create({parent:l||o,providers:s})}_removeOpenDialog(t,e){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,l)=>{o?l.setAttribute(`aria-hidden`,o):l.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let o=e[n];o!==t&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||i)};static ɵprov=yr({token:i,factory:i.ɵfac})}return i})();function it(i,a){let t=i.length;for(;t--;)a(i[t])}var Bt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=jE({type:i});static ɵinj=vl({providers:[at],imports:[Ua,Bn,ka,Bn]})}return i})();var U=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var ot=`mdc-dialog--open`;var jt=`mdc-dialog--opening`;var zt=`mdc-dialog--closing`;var ee=150;var ie=75;var ne=(()=>{class i extends nt{_animationStateChanged=new Ve;_animationsEnabled=!mt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Gt(this._config.enterAnimationDuration)??ee:0;_exitAnimationDuration=this._animationsEnabled?Gt(this._config.exitAnimationDuration)??ie:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Vt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(jt,ot)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ot),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ot),this._animationsEnabled?(this._hostElement.style.setProperty(Vt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(zt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(jt,zt)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),e}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tm(i)))(n||i)}})();static ɵcmp=(function(){function t(e,n){}return PE({type:i,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(n,o){n&2&&(Dp(`id`,o._config.id),mp(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),Rp(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[cp],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(n,o){n&1&&(ci(0,`div`,0)(1,`div`,1),up(2,t,0,0,`ng-template`,2),mc()())},dependencies:[Kr],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var Vt=`--mat-dialog-transition-duration`;function Gt(i){return i==null?null:typeof i==`number`?i:i.endsWith(`ms`)?zt$1(i.substring(0,i.length-2)):i.endsWith(`s`)?zt$1(i.substring(0,i.length-1))*1e3:i===`0`?0:null}var q=(function(i){return i[i.OPEN=0]=`OPEN`,i[i.CLOSING=1]=`CLOSING`,i[i.CLOSED=2]=`CLOSED`,i})(q||{});var D=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ln(1);_beforeClosed=new Ln(1);_result;_closeFallbackTimeout;_state=q.OPEN;_closeInteractionType;constructor(a,t,e){this._ref=a,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass(`mat-mdc-dialog-panel`),e._animationStateChanged.pipe(Vn(n=>n.state===`opened`),Ui(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Vn(n=>n.state===`closed`),Ui(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Bh(this.backdropClick(),this.keydownEvents().pipe(Vn(n=>n.keyCode===27&&!this.disableClose&&!Wt$1(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),ae(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Vn(e=>e.state===`closing`),Ui(1)).subscribe(e=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=q.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a=``,t=``){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=q.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ae(i,a,t){return i._closeInteractionType=a,i.close(t)}var rt=new x(`MatMdcDialogData`);var oe=new x(`mat-mdc-dialog-default-options`);var re=new x(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=w(se$1);return()=>Zn(i)}});var Ht=(()=>{class i{_defaultOptions=w(oe,{optional:!0});_scrollStrategy=w(re);_parentDialog=w(i,{optional:!0,skipSelf:!0});_idGenerator=w(xt);_injector=w(se$1);_dialog=w(at);_animationsDisabled=mt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Y;_afterOpenedAtThisLevel=new Y;dialogConfigClass=U;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=jh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(eg(void 0)));constructor(){this._dialogRefConstructor=D,this._dialogContainerType=ne,this._dialogDataToken=rt}open(t,e){let n;e=W(W({},this._defaultOptions||new U),e),e.id=e.id||this._idGenerator.getId(`mat-mdc-dialog-`),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,q$1(W({},e),{positionStrategy:na(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()===`0`||e.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:u,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(l,s,d)=>(n=new this._dialogRefConstructor(l,e,d),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:n},{provide:_,useValue:null}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static ɵfac=function(e){return new(e||i)};static ɵprov=yr({token:i,factory:i.ɵfac})}return i})();var Wt=(()=>{class i{_dialogRef=w(D,{optional:!0});_elementRef=w(vr);_dialog=w(Ht);ngOnInit(){this._dialogRef||(this._dialogRef=se(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(e){return new(e||i)};static ɵdir=BE({type:i})}return i})();var Qt=(()=>{class i extends Wt{id=w(xt).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tm(i)))(n||i)}})();static ɵdir=BE({type:i,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(e,n){e&2&&Dp(`id`,n.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[cp]})}return i})();var qt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵdir=BE({type:i,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[WE([Ns])]})}return i})();var Ut=(()=>{class i extends Wt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let t;return function(n){return(t||(t=Tm(i)))(n||i)}})();static ɵdir=BE({type:i,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(e,n){e&2&&Rp(`mat-mdc-dialog-actions-align-start`,n.align===`start`)(`mat-mdc-dialog-actions-align-center`,n.align===`center`)(`mat-mdc-dialog-actions-align-end`,n.align===`end`)},inputs:{align:`align`},features:[cp]})}return i})();function se(i,a){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains(`mat-mdc-dialog-container`);)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}var Yt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=jE({type:i});static ɵinj=vl({providers:[Ht],imports:[Bt,Ua,Bn,us]})}return i})();var $t=class i{ref=w(D);data=w(rt);close(a){this.ref.close(a)}static ɵfac=function(t){return new(t||i)};static ɵcmp=PE({type:i,selectors:[[`app-confirm-dialog`]],decls:9,vars:4,consts:[[`mat-dialog-title`,``],[`align`,`end`],[`mat-button`,``,3,`click`],[`mat-flat-button`,``,`color`,`warn`,3,`click`]],template:function(t,e){t&1&&(ci(0,`h2`,0),YI(1),mc(),ci(2,`mat-dialog-content`),YI(3),mc(),ci(4,`mat-dialog-actions`,1)(5,`button`,2),bp(`click`,function(){return e.close(!1)}),YI(6),mc(),ci(7,`button`,3),bp(`click`,function(){return e.close(!0)}),YI(8),mc()()),t&2&&(ov(),jp(e.data.title),ov(2),jp(e.data.message),ov(3),jp(e.data.cancelLabel??`Cancelar`),ov(2),Ec(` `,e.data.confirmLabel??`Confirmar`,` `))},dependencies:[Yt,Qt,Ut,qt,wr,Sr],encapsulation:2})};export{Ht as n,$t as t};