import { Button, CheckBox, RadioButton, Switch } from '@syncfusion/ej2-buttons';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'created'];
var modelProps = [];
/**
 * Represents the Essential JS 2 VueJS Button Component
 * ```html
 * <ejs-button>Button</ejs-button>
 * ```
 */
var ButtonComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Button({});
        _this.bindProperties();
        return _this;
    }
    ButtonComponent.prototype.render = function (createElement) {
        return createElement('button', this.$slots.default);
    };
    ButtonComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], ButtonComponent);
    return ButtonComponent;
}(ComponentBase));
var ButtonPlugin = {
    name: 'ejs-button',
    install: function (Vue) {
        Vue.component(ButtonPlugin.name, ButtonComponent);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$1 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
var modelProps$1 = ['checked', 'indeterminate'];
/**
 * Represents the Essential JS 2 VueJS CheckBox Component
 * ```html
 * <ejs-checkbox label='Default'></ejs-checkbox>
 * ```
 */
var CheckBoxComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(CheckBoxComponent, _super);
    function CheckBoxComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new CheckBox({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;
        _this.bindProperties();
        return _this;
    }
    CheckBoxComponent.prototype.trigger = function (eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    CheckBoxComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            var keys = Object.keys(prop);
            var emitKeys_1 = [];
            var emitFlag_1 = false;
            keys.map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys_1.push(key);
                        emitFlag_1 = true;
                    }
                });
            });
            if (emitFlag_1) {
                emitKeys_1.map(function (propKey) {
                    _this.$emit('update:' + propKey, prop[propKey]);
                });
            }
        }
    };
    CheckBoxComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    CheckBoxComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1,
            model: {
                event: 'modelchanged'
            }
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}(ComponentBase));
var CheckBoxPlugin = {
    name: 'ejs-checkbox',
    install: function (Vue) {
        Vue.component(CheckBoxPlugin.name, CheckBoxComponent);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$2 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
var modelProps$2 = ['checked'];
/**
 * Represents the Essential JS 2 VueJS RadioButton Component
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
var RadioButtonComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(RadioButtonComponent, _super);
    function RadioButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new RadioButton({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;
        _this.bindProperties();
        return _this;
    }
    RadioButtonComponent.prototype.trigger = function (eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    RadioButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            var keys = Object.keys(prop);
            var emitKeys_1 = [];
            var emitFlag_1 = false;
            keys.map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys_1.push(key);
                        emitFlag_1 = true;
                    }
                });
            });
            if (emitFlag_1) {
                emitKeys_1.map(function (propKey) {
                    _this.$emit('update:' + propKey, prop[propKey]);
                });
            }
        }
    };
    RadioButtonComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    RadioButtonComponent = __decorate$2([
        EJComponentDecorator({
            props: properties$2,
            model: {
                event: 'modelchanged'
            }
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}(ComponentBase));
var RadioButtonPlugin = {
    name: 'ejs-radiobutton',
    install: function (Vue) {
        Vue.component(RadioButtonPlugin.name, RadioButtonComponent);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$3 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value', 'change', 'created'];
var modelProps$3 = ['checked'];
/**
 * Represents the Essential JS 2 VueJS Switch Component.
 * ```html
 * <ejs-switch></ejs-switch>
 * ```
 */
var SwitchComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$3(SwitchComponent, _super);
    function SwitchComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Switch({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;
        _this.bindProperties();
        return _this;
    }
    SwitchComponent.prototype.trigger = function (eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    SwitchComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            var keys = Object.keys(prop);
            var emitKeys_1 = [];
            var emitFlag_1 = false;
            keys.map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys_1.push(key);
                        emitFlag_1 = true;
                    }
                });
            });
            if (emitFlag_1) {
                emitKeys_1.map(function (propKey) {
                    _this.$emit('update:' + propKey, prop[propKey]);
                });
            }
        }
    };
    SwitchComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    SwitchComponent.prototype.toggle = function () {
        return this.ej2Instances.toggle();
    };
    SwitchComponent = __decorate$3([
        EJComponentDecorator({
            props: properties$3,
            model: {
                event: 'modelchanged'
            }
        })
    ], SwitchComponent);
    return SwitchComponent;
}(ComponentBase));
var SwitchPlugin = {
    name: 'ejs-switch',
    install: function (Vue) {
        Vue.component(SwitchPlugin.name, SwitchComponent);
    }
};

export { ButtonComponent, ButtonPlugin, CheckBoxComponent, CheckBoxPlugin, RadioButtonComponent, RadioButtonPlugin, SwitchComponent, SwitchPlugin };
export * from '@syncfusion/ej2-buttons';
//# sourceMappingURL=ej2-vue-buttons.es5.js.map
