import { fromEvent, Subject, Observable } from 'rxjs';
import { auditTime } from 'rxjs/operators';
var DEFAULT_EVENT_TIME = 100;
var ThyEventDispatcher = /** @class */ (function () {
    function ThyEventDispatcher(document, ngZone, eventName) {
        this.document = document;
        this.ngZone = ngZone;
        this.eventName = eventName;
        this._globalSubscription = null;
        this._event$ = new Subject();
        this._subscriptionCount = 0;
    }
    ThyEventDispatcher.prototype._addGlobalListener = function () {
        var _this = this;
        this._globalSubscription = this.ngZone.runOutsideAngular(function () {
            return fromEvent(_this.document, _this.eventName).subscribe(function (event) {
                _this._event$.next(event);
            });
        });
    };
    ThyEventDispatcher.prototype._removeGlobalListener = function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    Object.defineProperty(ThyEventDispatcher.prototype, "globalSubscription", {
        get: function () {
            return this._globalSubscription;
        },
        enumerable: true,
        configurable: true
    });
    ThyEventDispatcher.prototype.subscribe = function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_EVENT_TIME; }
        return Observable.create(function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            var subscription = auditTimeInMs > 0
                ? _this._event$
                    .pipe(auditTime(auditTimeInMs))
                    .subscribe(observer)
                : _this._event$.subscribe(observer);
            _this._subscriptionCount++;
            return function () {
                subscription.unsubscribe();
                _this._subscriptionCount--;
                if (!_this._subscriptionCount) {
                    _this._removeGlobalListener();
                }
            };
        });
    };
    ThyEventDispatcher.prototype.ngOnDestroy = function () {
        this._removeGlobalListener();
        this._event$.complete();
    };
    return ThyEventDispatcher;
}());
export { ThyEventDispatcher };
//# sourceMappingURL=event-dispatcher.js.map