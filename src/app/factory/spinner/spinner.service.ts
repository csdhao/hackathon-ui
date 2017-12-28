import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';

import {
    OriginConnectionPosition,
    Overlay,
    OverlayConnectionPosition,
    OverlayRef,
    OverlayConfig,
    RepositionScrollStrategy,
    ScrollStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal, Portal, DomPortalHost, ComponentType } from '@angular/cdk/portal';

import { SpinnerComponent } from './spinner.component'


@Injectable()
export class SpinnerService {
    private _loadingSpinnerPortal: ComponentPortal<SpinnerComponent>

    private _portalHost: DomPortalHost;
    private _overlayRef: OverlayRef;
    constructor(
        private _compoentFactoryResolver: ComponentFactoryResolver, 
        private _appRef: ApplicationRef, 
        private _injector: Injector,
        private _overlay: Overlay
    ) {
        this._loadingSpinnerPortal = new ComponentPortal(SpinnerComponent);
        this._portalHost = new DomPortalHost(
            document.body,
            this._compoentFactoryResolver,
            this._appRef,
            this._injector
        )
    }

    _createOverlay() {
        let config = new OverlayConfig();
        config.hasBackdrop = true;
        config.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();

        this._overlayRef = this._overlay.create(config);
        return this._overlayRef;
    }

    show() {
        let overlayRef = this._createOverlay();
        overlayRef.attach(this._loadingSpinnerPortal);
        // this._portalHost.attach(this._loadingSpinnerPortal);
    }

    hide() {
        // this._portalHost.detach();
        this._overlayRef.detach();
    }
}