"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_theme_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/theme-services.service */ 6621);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/description/description.component */ 1552);
/* harmony import */ var _components_business_business_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/business/business.component */ 8366);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);
/* harmony import */ var _components_process_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/process/process.component */ 5045);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ 7157);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/work/work.component */ 6030);
/* harmony import */ var _components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/back-to-top/back-to-top.component */ 9777);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/contact.component */ 9760);
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ 8693);














const _c0 = function (a0) {
  return {
    dark: a0
  };
};
class AppComponent {
  constructor(themeService) {
    this.themeService = themeService;
    this.title = 'portfolio';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_theme_services_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 13,
  vars: 3,
  consts: [[3, "ngClass"], [1, "h-full", "dark:bg-dark-1"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-header")(3, "app-description")(4, "app-business")(5, "app-process")(6, "app-projects")(7, "app-work")(8, "app-testimonials")(9, "app-contact")(10, "router-outlet")(11, "app-back-to-top")(12, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c0, ctx.themeService.isDark));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_description_description_component__WEBPACK_IMPORTED_MODULE_2__.DescriptionComponent, _components_business_business_component__WEBPACK_IMPORTED_MODULE_3__.BusinessComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _components_process_process_component__WEBPACK_IMPORTED_MODULE_5__.ProcessComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsComponent, _components_work_work_component__WEBPACK_IMPORTED_MODULE_7__.WorkComponent, _components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_8__.BackToTopComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__.TestimonialsComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-svg-icon */ 1291);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header-mobile/header-mobile.component */ 6486);
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/description/description.component */ 1552);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _components_description_carousal_carousal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/description/carousal/carousal.component */ 4209);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _components_arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/arrow-svg/arrow-svg.component */ 3835);
/* harmony import */ var _components_business_business_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/business/business.component */ 8366);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);
/* harmony import */ var _components_process_process_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/process/process.component */ 5045);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/projects/projects.component */ 7157);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/work/work.component */ 6030);
/* harmony import */ var _components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/back-to-top/back-to-top.component */ 9777);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ 9760);
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ 8693);
/* harmony import */ var _components_model_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/model/model.component */ 8495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_19__.AngularSvgIconModule.forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_3__.HeaderMobileComponent, _components_description_description_component__WEBPACK_IMPORTED_MODULE_4__.DescriptionComponent, _components_description_carousal_carousal_component__WEBPACK_IMPORTED_MODULE_5__.CarousalComponent, _components_arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_6__.ArrowSVGComponent, _components_business_business_component__WEBPACK_IMPORTED_MODULE_7__.BusinessComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _components_process_process_component__WEBPACK_IMPORTED_MODULE_9__.ProcessComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__.ProjectsComponent, _components_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_12__.BackToTopComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__.ContactComponent, _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_14__.TestimonialsComponent, _components_model_model_component__WEBPACK_IMPORTED_MODULE_15__.ModelComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_19__.AngularSvgIconModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 3835:
/*!*************************************************************!*\
  !*** ./src/app/components/arrow-svg/arrow-svg.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowSVGComponent: () => (/* binding */ ArrowSVGComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ArrowSVGComponent {
  constructor() {}
  ngOnInit() {}
}
ArrowSVGComponent.ɵfac = function ArrowSVGComponent_Factory(t) {
  return new (t || ArrowSVGComponent)();
};
ArrowSVGComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ArrowSVGComponent,
  selectors: [["app-arrow-svg"]],
  decls: 3,
  vars: 0,
  consts: [["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.3", "x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "fill", "currentColor"], ["d", "M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z", "fill", "currentColor"]],
  template: function ArrowSVGComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1)(2, "path", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["svg[_ngcontent-%COMP%] {\n  width: 17px;\n  color: #919aa3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcnJvdy1zdmcvYXJyb3ctc3ZnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGNvbG9yOiAjOTE5YWEzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9777:
/*!*****************************************************************!*\
  !*** ./src/app/components/back-to-top/back-to-top.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackToTopComponent: () => (/* binding */ BackToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function BackToTopComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackToTopComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class BackToTopComponent {
  constructor() {
    this.showBackToTop = false;
  }
  ngOnInit() {}
  onWindowScroll($event) {
    $event.target.documentElement.scrollTop > 300 ? this.showBackToTop = true : this.showBackToTop = false;
  }
  scrollToTop() {
    const scrollDuration = 900;
    const scrollStep = -window.pageYOffset / (scrollDuration / 20);
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      });
    }
  }
}
BackToTopComponent.ɵfac = function BackToTopComponent_Factory(t) {
  return new (t || BackToTopComponent)();
};
BackToTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BackToTopComponent,
  selectors: [["app-back-to-top"]],
  hostBindings: function BackToTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function BackToTopComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 1,
  vars: 1,
  consts: [["class", "animate-bounce hover:animate-none transition-all fixed w-10 h-10 cursor-pointer z-[49] right-5 bottom-5 opacity-50 hover:opacity-90 bg-backToTopBg rounded flex items-center justify-center", 3, "click", 4, "ngIf"], [1, "animate-bounce", "hover:animate-none", "transition-all", "fixed", "w-10", "h-10", "cursor-pointer", "z-[49]", "right-5", "bottom-5", "opacity-50", "hover:opacity-90", "bg-backToTopBg", "rounded", "flex", "items-center", "justify-center", 3, "click"], [1, "mdi", "mdi-chevron-double-up", "text-lg", "text-white"]],
  template: function BackToTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BackToTopComponent_div_0_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBackToTop);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8366:
/*!***********************************************************!*\
  !*** ./src/app/components/business/business.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessComponent: () => (/* binding */ BusinessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.component */ 8495);


class BusinessComponent {
  constructor() {
    this.showPopup = false;
    this.sendingMail = false;
    this.contact = false;
  }
  isSendingMail() {
    this.showPopup = true;
    this.sendingMail = true;
  }
  isContacting() {
    this.showPopup = true;
    this.contact = true;
  }
  closePopup(data) {
    this.showPopup = data;
    this.sendingMail = data;
    this.contact = data;
  }
}
BusinessComponent.ɵfac = function BusinessComponent_Factory(t) {
  return new (t || BusinessComponent)();
};
BusinessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BusinessComponent,
  selectors: [["app-business"]],
  decls: 153,
  vars: 3,
  consts: [["id", "about", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "capitalize", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "mt-8", "flex", "flex-wrap"], [1, "my-1", "md:px-1", "sm:w-full", "md:w-1/2", "lg:w-1/3"], [1, "p-3", "pb-0", "inline-flex", "items-start", "bg-pageBg", "dark:bg-dark-pageBg", "rounded", "shadow", "shadow-md", "hover:translate-y-sm", "hover:duration-700", "sMobile:flex-col"], [1, "w-16", "mr-3", "sMobile:inline-flex", "sMobile:mr-0", "sMobile:w-full", "sMobile:justify-center"], [1, "bg-sky-100", "inline-flex", "items-center", "justify-center", "rounded-full", "w-12", "h-12", "dark:bg-dark-1"], ["src", "assets/icons/profit-up.png", "alt", "", 1, "w-6", "h-6"], [1, "flex", "flex-col", "mt-4"], [1, "text-sm/[16px]", "font-bold", "text-sky-500", "sMobile:text-center", "sMobile:px-2.5"], [1, "text-xmd", "my-3", "text-slate-500", "dark:text-slate-400", "sMobile:px-2.5"], [1, "border-t", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "flex", "divide-x", "divide-gray-200", "dark:divide-slate-50/[0.06]"], [1, "block", "flex-1", "text-center", "text-sm", "text-indigo-500", "hover:text-indigo-600", "font-medium", "px-3", "py-4", 3, "click"], [1, "flex", "items-center", "justify-center"], ["viewBox", "0 0 16 16", 1, "w-4", "h-4", "fill-current", "flex-shrink-0", "mr-2"], ["d", "M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"], [1, "block", "flex-1", "text-center", "text-sm", "text-emerald-500", "hover:text-emerald-600", "font-medium", "px-3", "py-4", "group", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-4", "h-4", "fill-current", "flex-shrink-0", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"], ["src", "assets/icons/project-management.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/clipboard.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/bug.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/growth.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/problem-solving.png", "alt", "", 1, "w-6", "h-6"], [3, "showPopup", "sendMail", "contact", "close"]],
  template: function BusinessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Solve Your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Business Goals ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " With custom web design ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Grow your sales with better experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " We are ready to help you develop an MVP version of your future project. As we are constanly working with start-ups, we can provide you with fast deployed solutions which helps to bring the idea to life and have first sales from early stage of project. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_20_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_26_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "div", 6)(35, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9)(38, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Kick-start new ideas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " We are ready to help you develop an MVP version of your future project. As we are constanly working with start-ups, we can provide you with fast deployed solutions which helps to bring the idea to life and have first sales from early stage of project. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 12)(43, "div", 13)(44, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_44_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_50_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 4)(57, "div", 5)(58, "div", 6)(59, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9)(62, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Upgrade your project");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " We are ready to help you develop an MVP version of your future project. As we are constanly working with start-ups, we can provide you with fast deployed solutions which helps to bring the idea to life and have first sales from early stage of project. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 12)(67, "div", 13)(68, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_68_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_74_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 4)(81, "div", 5)(82, "div", 6)(83, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 9)(86, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Solve the bug and issues");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " We are ready to help you develop an MVP version of your future project. As we are constanly working with start-ups, we can provide you with fast deployed solutions which helps to bring the idea to life and have first sales from early stage of project. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 12)(91, "div", 13)(92, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_92_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_98_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 4)(105, "div", 5)(106, "div", 6)(107, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 9)(110, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Grow your profit level");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " We are ready to help you develop an MVP version of your future project. As we are constanly working with start-ups, we can provide you with fast deployed solutions which helps to bring the idea to life and have first sales from early stage of project. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 12)(115, "div", 13)(116, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_116_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_122_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 4)(129, "div", 5)(130, "div", 6)(131, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 9)(134, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Resolved client issues");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " We are ready to help you develop an MVP version of your future project. As we are constanly working with start-ups, we can provide you with fast deployed solutions which helps to bring the idea to life and have first sales from early stage of project. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 12)(139, "div", 13)(140, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_140_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_146_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "app-model", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function BusinessComponent_Template_app_model_close_152_listener($event) {
        return ctx.closePopup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](152);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPopup", ctx.showPopup)("sendMail", ctx.sendingMail)("contact", ctx.contact);
    }
  },
  dependencies: [_model_model_component__WEBPACK_IMPORTED_MODULE_0__.ModelComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9760:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ContactComponent {}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 76,
  vars: 0,
  consts: [["id", "contact", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "uppercase", "text-sky-500", "font-bold"], [1, "text-3xl", "leading-tight", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "mt-8", "flex", "flex-wrap", "relative", "z-10"], [1, "w-full", "md:w-2/5"], [1, "mb-12", "max-w-[570px]", "lg:mb-0"], [1, "text-slate-500", "dark:text-slate-400", "text-sm13", "mb-9", "text-sm", "leading-relaxed"], [1, "mb-8", "flex", "w-full", "items-start", "max-w-[370px]"], [1, "bg-purple-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "w-3", "fill-white"], ["d", "M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"], [1, "w-full"], [1, "text-slate-700", "dark:text-slate-200", "mb-1", "text-base", "font-semibold", "leading-none", "cursor-pointer", "hover:text-sky-500", "dark:hover:text-sky-500"], [1, "text-xmd", "text-slate-500", "cursor-pointer", "hover:text-sky-500", "dark:hover:text-sky-500", "dark:text-slate-400"], [1, "bg-rose-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], [1, "text-xmd", "text-slate-500", "dark:text-slate-400", "cursor-pointer", "hover:text-sky-500", "dark:hover:text-sky-500"], [1, "bg-indigo-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "24", "height", "26", "viewBox", "0 0 24 26", 1, "w-3", "fill-white"], ["d", "M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"], ["d", "M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"], ["d", "M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"], [1, "bg-green-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "28", "height", "19", "viewBox", "0 0 28 19", 1, "w-3", "fill-white"], ["d", "M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"], [1, "md:w-3/5", "w-full", "inline-flex", "justify-end"], [1, "relative", "md:w-4/5", "w-full", "rounded-lg", "p-8", "sm:p-12", "border", "shadow-lg", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "text-lg", "leading-tight", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-xs/[16px]", "text-slate-500", "dark:text-slate-400", "text-xmd"], [1, "mt-5"], [1, "mb-6"], ["type", "text", "placeholder", "Your Name", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["type", "email", "placeholder", "Your Email", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["type", "text", "placeholder", "Your Phone", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["rows", "6", "placeholder", "Your Message", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "resize-none", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["type", "submit", 1, "bg-sky-500", "border", "text-white", "border-primary", "w-full", "rounded", "border", "p-3", "hover:bg-sky-600", "border-sky-500", "dark:hover:text-white", "transition", "hover:bg-opacity-90"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hire us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Let's start working ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " on your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12)(19, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Selva Kumar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Kodambakkam, Near kodambakkam railway station. India ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " (+91) 84 286 351 00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8)(26, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12)(30, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Aneesh Kumar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Kodambakkam, Near kodambakkam railway station. India ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " (+91) 79 044 451 29 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8)(37, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 19)(40, "path", 20)(41, "path", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12)(43, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "(+91) 84 286 351 00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8)(48, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12)(52, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "mail.i2Tym@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25)(57, "div", 26)(58, "h6", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Want to get answers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " faster? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Fill out our short form brief and we are contactyou soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "form", 29)(65, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "textarea", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div")(74, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Send Message ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4209:
/*!***********************************************************************!*\
  !*** ./src/app/components/description/carousal/carousal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarousalComponent: () => (/* binding */ CarousalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


function CarousalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-Learing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "web application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product stratergy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI/UX Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Web Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12)(21, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-Commerce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "web application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product stratergy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI/UX Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Web Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12)(21, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "web application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product stratergy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI/UX Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Web Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12)(21, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Billing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "web application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product stratergy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI/UX Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Web Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12)(21, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class CarousalComponent {
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      margin: 10,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 2
        },
        940: {
          items: 3
        },
        1200: {
          items: 4
        }
      },
      nav: true
    };
  }
}
CarousalComponent.ɵfac = function CarousalComponent_Factory(t) {
  return new (t || CarousalComponent)();
};
CarousalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarousalComponent,
  selectors: [["app-carousal"]],
  decls: 5,
  vars: 1,
  consts: [[3, "options"], ["carouselSlide", ""], [1, "slide"], [1, "flex", "items-center", "flex-col", "w-full"], [1, "basis-full"], [1, "flex", "items-center"], [1, "bg-sky-100", "inline-block", "relative", "rounded-lg", "w-12", "dark:bg-dark-1", "mr-3"], ["src", "assets/icons/elearning.png", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], [1, "text-sm/[16px]", "font-bold", "text-sky-500"], [1, "flex", "flex-wrap", "mt-5"], [1, "mr-3", "border", "font-medium", "mb-2.5", "p-0.5", "px-3.5", "border-slate-300", "rounded-full", "dark:border-dark-border", "text-xsm/[20px]", "text-slate-500", "dark:text-slate-400"], [1, "basis-full", "flex", "justify-center", "mt-3", "relative"], ["src", "assets/images/carousal_1.png", "alt", "", 1, "lg:w-full", "md:w-6/12", "animate-image-fade", "opacity-100"], ["src", "assets/images/allcourse.png", "alt", "", 1, "lg:w-[94%]", "top-0", "left-0", "animate-image-fade", "md:w-[48%]", "absolute", "md:translate-x-1/2", "lg:translate-x-0"], ["src", "assets/icons/shopping.png", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], ["src", "assets/icons/customer-service.png", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], ["src", "assets/icons/bill.png", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"]],
  template: function CarousalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarousalComponent_ng_template_1_Template, 22, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarousalComponent_ng_template_2_Template, 22, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarousalComponent_ng_template_3_Template, 22, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarousalComponent_ng_template_4_Template, 22, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    }
  },
  dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1552:
/*!*****************************************************************!*\
  !*** ./src/app/components/description/description.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescriptionComponent: () => (/* binding */ DescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousal/carousal.component */ 4209);
/* harmony import */ var _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arrow-svg/arrow-svg.component */ 3835);




function DescriptionComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Websites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Mobile apps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Widgets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " E-commerce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " E-commerce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " E-commerce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 19)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " E-commerce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
class DescriptionComponent {
  constructor() {
    this.customOptions = {
      autoWidth: true,
      items: 2,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      margin: 5,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 3
        },
        550: {
          items: 4
        },
        740: {
          items: 5
        },
        940: {
          items: 6
        },
        1200: {
          items: 7
        }
      },
      nav: true
    };
  }
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) {
  return new (t || DescriptionComponent)();
};
DescriptionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DescriptionComponent,
  selectors: [["app-description"]],
  decls: 30,
  vars: 1,
  consts: [[1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "md:text-xLarge", "leading-tight", "font-bold", "capitalize", "text-slate-700", "[word-spacing:8px]", "dark:text-slate-200"], [1, "text-sky-500", "break-after-page"], [1, "text-xs/[16px]", "text-slate-500", "dark:text-slate-400", "flex", "items-start"], [1, "mr-2"], [1, "mt-1"], [1, "our_service_dtls"], [3, "options"], ["carouselSlide", ""], [1, "slide"], [1, "flex", "items-center", "flex-col", "w-full"], [1, "basis-full", "mb-2.5"], [1, "group", "mr-16", "whitespace-nowrap", "uppercase", "flex", "items-center", "text-xs", "lg:leading-6", "mb-4", "font-semibold", "text-slate-700", "dark:text-slate-200"], [1, "mr-3", "border", "p-3", "border-slate-300", "rounded-full", "dark:border-dark-border"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z", 1, "fill-green-500"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3", 1, "fill-teal-500"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122", 1, "fill-fuchsia-500"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z", 1, "fill-orange-500"], [1, "group", "mr-16", "uppercase", "whitespace-nowrap", "flex", "items-center", "text-xs", "lg:leading-6", "mb-4", "font-semibold", "text-slate-700", "dark:text-slate-200"]],
  template: function DescriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " We design and develop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "custom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " web projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " across ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "platforms and industries ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3)(11, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "In close partnership with our clients we design mobile apps, online stores and web portals.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3)(16, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "We can create UI/UX mockups from scratch or help to redesign and innovate your current website or app.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6)(21, "owl-carousel-o", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DescriptionComponent_ng_template_22_Template, 8, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DescriptionComponent_ng_template_23_Template, 8, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DescriptionComponent_ng_template_24_Template, 8, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DescriptionComponent_ng_template_25_Template, 8, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DescriptionComponent_ng_template_26_Template, 8, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DescriptionComponent_ng_template_27_Template, 8, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DescriptionComponent_ng_template_28_Template, 8, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-carousal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
    }
  },
  dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_0__.CarousalComponent, _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_1__.ArrowSVGComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7913:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/menu-service.service */ 240);


class FooterComponent {
  constructor(menuService) {
    this.menuService = menuService;
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_0__.MenuService));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 25,
  vars: 1,
  consts: [[1, "bg-white", "mt-14", "dark:bg-dark-1", "border-t", "border-slate-900/10", "dark:border-slate-50/[0.06]"], [1, "w-full", "max-w-screen-xl", "mx-auto", "p-4", "md:py-8", "px-7"], [1, "sm:flex", "sm:items-center", "sm:justify-between"], ["href", "javascript:;", 1, "flex", "items-center", "mb-4", "sm:mb-0"], [1, "self-center", "text-2xl", "font-semibold", "whitespace-nowrap", "text-sky-500"], [1, "flex", "flex-wrap", "items-center", "mb-6", "text-sm", "font-medium", "sm:mb-0", "text-slate-700", "dark:text-slate-200"], ["href", "javascript:;", 1, "mr-4", "hover:underline", "md:mr-6", "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], ["href", "javascript:;", 1, "hover:underline", "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "my-6", "border-gray-200", "sm:mx-auto", "dark:border-gray-700", "lg:my-8"], [1, "block", "text-sm", "text-slate-500", "dark:text-slate-400", "sm:text-center", "dark:text-gray-400"], ["href", "javascript:;", 1, "hover:underline"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "i2Tym");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5)(7, "li")(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_8_listener() {
        return ctx.menuService.scrollView("projects");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_11_listener() {
        return ctx.menuService.scrollView("service");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_14_listener() {
        return ctx.menuService.scrollView("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_17_listener() {
        return ctx.menuService.scrollView("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "i2tym\u2122");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ". All Rights Reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " ");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6486:
/*!*********************************************************************!*\
  !*** ./src/app/components/header-mobile/header-mobile.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderMobileComponent: () => (/* binding */ HeaderMobileComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_menu_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/menu-service.service */ 240);
/* harmony import */ var src_app_services_theme_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/theme-services.service */ 6621);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-icon */ 1291);






class HeaderMobileComponent {
  constructor(menuService, themeService) {
    this.menuService = menuService;
    this.themeService = themeService;
    this.showMobileMenu$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
    this.showMobileMenu$ = this.menuService.showMobileMenu$;
  }
  toggleMobileMenu() {
    this.menuService.showMobileMenu = false;
  }
  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
HeaderMobileComponent.ɵfac = function HeaderMobileComponent_Factory(t) {
  return new (t || HeaderMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_menu_service_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_theme_services_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService));
};
HeaderMobileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeaderMobileComponent,
  selectors: [["app-header-mobile"]],
  decls: 32,
  vars: 4,
  consts: [[1, "fixed", "inset-x-0", "top-0", "z-40", "origin-top-right", "transform", "p-2", "transition", "md:hidden", 3, "ngClass"], [1, "divide-y-2", "divide-gray-500", "text-slate-700", "rounded-lg", "bg-white", "shadow-lg", "ring-1", "ring-black", "ring-opacity-5", "dark:bg-dark-1"], [1, "pt-5", "pb-6"], [1, "flex", "items-center", "justify-between", "px-5", "border-b", "pb-3", "mx-3.5", "border-slate-900/10", "dark:border-slate-50/[0.06]"], [1, "flex", "items-center", "justify-start", "sm:order-2", "md:mr-10", "lg:hidden"], ["href", "javascript:;", 1, "flex", "items-center", "justify-center", "rounded", "text-slate-700", "dark:text-slate-200"], [1, "flex", "items-center"], [3, "click"], [3, "src"], [1, "border-l", "h-6", "border-slate-200", "mx-3", "dark:border-dark-border"], ["type", "button", 1, "inline-flex", "text-sm", "items-center", "justify-center", "rounded-full", "p-2", "text-gray-400", "bg-pageBg", "dark:bg-dark-pageBg", "hover:text-sky-500", 3, "click"], [1, "sr-only"], ["src", "assets/icons/close.svg"], [1, "scrollbar-thumb-rounded", "scrollbar-track-rounded", "max-h-[500px]", "overflow-y-auto", "px-5", "scrollbar-thin", "scrollbar-track-gray-50", "scrollbar-thumb-gray-100", "dark:scrollbar-thumb-night-500", "dark:scrollbar-track-night-600"], [1, "pt-4", "flex", "items-center", "justify-center"], [1, "flex", "flex-col", "text-slate-700", "dark:text-slate-200", "text-center"], [1, "mb-2.5"], ["href", "javascript:;", 1, "text-xs", "p-1", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "border", "p-1", "px-5", "border-sky-400", "rounded-full"], ["href", "javascript:;", 1, "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"]],
  template: function HeaderMobileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div")(6, "div", 4)(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " i2Tym ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_button_click_10_listener() {
        return ctx.toggleTheme();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "svg-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_button_click_13_listener() {
        return ctx.toggleMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Close menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "svg-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "ul", 15)(20, "li", 16)(21, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_21_listener() {
        return ctx.menuService.scrollView("projects");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li", 16)(24, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_24_listener() {
        return ctx.menuService.scrollView("service");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Sevices");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 16)(27, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_27_listener() {
        return ctx.menuService.scrollView("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 18)(30, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_30_listener() {
        return ctx.menuService.scrollView("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Contact US");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.showMobileMenu$) ? "pointer-events-auto scale-100 animate-fade-in-up opacity-100 duration-200" : "pointer-events-none scale-95 opacity-0 duration-100 ease-out");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.themeService.isDark ? "assets/icons/moon.svg" : "assets/icons/sun.svg");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6471:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_theme_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme-services.service */ 6621);
/* harmony import */ var src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/menu-service.service */ 240);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ 1291);
/* harmony import */ var _header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-mobile/header-mobile.component */ 6486);





class HeaderComponent {
  constructor(themeService, menuService) {
    this.themeService = themeService;
    this.menuService = menuService;
  }
  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
  toggleMobileMenu() {
    this.menuService.showMobileMenu = true;
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_services_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 32,
  vars: 1,
  consts: [[1, "sticky", "top-0", "z-40", "w-full", "backdrop-blur", "flex-none", "transition-colors", "duration-500", "lg:z-50", "lg:border-b", "lg:border-slate-900/10", "dark:border-slate-50/[0.06]", "bg-white/95", "supports-backdrop-blur:bg-white/60", "dark:bg-transparent"], [1, "max-w-8xl", "mx-auto", "transition-all", "duration-300", "dark:bg-dark-1"], [1, "py-8", "border-b", "border-slate-900/10", "lg:px-8", "lg:border-0", "dark:border-slate-300/10", "mx-4", "lg:mx-0"], [1, "relative", "flex", "items-center"], ["href", "javascript:;", 1, "text-sky-500", "mr-3", "flex-none", "overflow-hidden", "md:w-auto", "text-lg", "font-bold"], [1, "relative", "hidden", "md:flex", "items-center", "ml-auto"], [1, "text-sm", "leading-6", "font-semibold", "text-slate-700", "dark:text-slate-200"], [1, "flex", "items-center", "space-x-8"], ["href", "javascript:;", 1, "text-xs", "p-1", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "border", "p-1", "px-5", "border-sky-400", "rounded-full"], ["href", "javascript:;", 1, "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "flex", "items-center", "border-l", "border-slate-200", "ml-6", "pl-6", "dark:border-dark-border"], [1, "sr-only"], [3, "click"], [3, "src"], ["type", "button", 1, "ml-auto", "text-slate-500", "w-8", "h-8", "-my-1", "flex", "items-center", "justify-center", "hover:text-slate-600", "md:hidden", "dark:text-slate-400", "dark:hover:text-slate-300", 3, "click"], ["width", "24", "height", "24", "fill", "none", "aria-hidden", "true"], ["d", "M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " i2Tym ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "nav", 6)(8, "ul", 7)(9, "li")(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() {
        return ctx.menuService.scrollView("projects");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li")(13, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() {
        return ctx.menuService.scrollView("service");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Sevices");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li")(16, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() {
        return ctx.menuService.scrollView("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 9)(19, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
        return ctx.menuService.scrollView("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Contact US");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11)(22, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Theme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_24_listener() {
        return ctx.toggleTheme();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "svg-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_26_listener() {
        return ctx.toggleMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-header-mobile");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.themeService.isDark ? "assets/icons/moon.svg" : "assets/icons/sun.svg");
    }
  },
  dependencies: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconComponent, _header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_2__.HeaderMobileComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8495:
/*!*****************************************************!*\
  !*** ./src/app/components/model/model.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelComponent: () => (/* binding */ ModelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function ModelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
  }
}
function ModelComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Want to get answers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " faster? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fill out our short form brief and we are contactyou soon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 15)(8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Send Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function ModelComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23)(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27)(8, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Selva Kumar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Kodambakkam, Near kodambakkam railway station. India ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (+91) 84 286 351 00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23)(15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27)(19, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Aneesh Kumar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Kodambakkam, Near kodambakkam railway station. India ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " (+91) 79 044 451 29 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23)(26, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 34)(29, "path", 35)(30, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27)(32, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(+91) 84 286 351 00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23)(37, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27)(41, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "mail.i2Tym@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function ModelComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelComponent_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModelComponent_div_1_div_8_Template, 19, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModelComponent_div_1_div_9_Template, 45, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sendMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contact);
  }
}
class ModelComponent {
  constructor() {
    this.showPopup = false;
    this.sendMail = false;
    this.contact = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  closePopup() {
    this.close.emit(false);
  }
}
ModelComponent.ɵfac = function ModelComponent_Factory(t) {
  return new (t || ModelComponent)();
};
ModelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModelComponent,
  selectors: [["app-model"]],
  inputs: {
    showPopup: "showPopup",
    sendMail: "sendMail",
    contact: "contact"
  },
  outputs: {
    close: "close"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "bg-black z-50 fixed top-0 left-0 w-screen h-screen opacity-50", 4, "ngIf"], ["class", "flex items-center justify-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full", 4, "ngIf"], [1, "bg-black", "z-50", "fixed", "top-0", "left-0", "w-screen", "h-screen", "opacity-50"], [1, "flex", "items-center", "justify-center", "fixed", "top-0", "left-0", "right-0", "z-50", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full"], [1, "relative", "w-full", "max-w-md", "max-h-full"], [1, "relative", "bg-white", "rounded-lg", "shadow-modelShadow", "dark:bg-dark-1"], ["type", "button", 1, "z-50", "absolute", "top-3", "right-2.5", "text-gray-400", "bg-pageBg", "hover:text-sky-500", "rounded-full", "text-sm", "w-8", "h-8", "ml-auto", "inline-flex", "justify-center", "items-center", "dark:bg-dark-pageBg", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 14 14", 1, "w-2", "h-2"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"], [1, "sr-only"], ["class", "w-full rounded-lg  p-8  sm:p-12 border shadow-lg border-gray-200 dark:border-slate-50/[0.06]", 4, "ngIf"], [1, "w-full", "rounded-lg", "p-8", "sm:p-12", "border", "shadow-lg", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "text-lg", "leading-tight", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "text-xs/[16px]", "text-slate-500", "dark:text-slate-400", "text-xmd"], [1, "mt-5"], [1, "mb-6"], ["type", "text", "placeholder", "Your Name", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["type", "email", "placeholder", "Your Email", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["type", "text", "placeholder", "Your Phone", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["rows", "6", "placeholder", "Your Message", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "resize-none", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["type", "submit", 1, "bg-sky-500", "border", "text-white", "border-primary", "w-full", "rounded", "border", "p-3", "hover:bg-sky-600", "border-sky-500", "dark:hover:text-white", "transition", "hover:bg-opacity-90"], [1, "text-slate-500", "dark:text-slate-400", "text-sm13", "mb-9", "text-sm", "leading-relaxed"], [1, "mb-8", "flex", "w-full", "items-start", "max-w-[370px]"], [1, "bg-purple-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "w-3", "fill-white"], ["d", "M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"], [1, "w-full"], [1, "text-slate-700", "dark:text-slate-200", "mb-1", "text-base", "font-semibold", "leading-none", "cursor-pointer", "hover:text-sky-500", "dark:hover:text-sky-500"], [1, "text-xmd", "text-slate-500", "cursor-pointer", "hover:text-sky-500", "dark:hover:text-sky-500", "dark:text-slate-400"], [1, "bg-rose-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], [1, "text-xmd", "text-slate-500", "dark:text-slate-400", "cursor-pointer", "hover:text-sky-500", "dark:hover:text-sky-500"], [1, "bg-indigo-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "24", "height", "26", "viewBox", "0 0 24 26", 1, "w-3", "fill-white"], ["d", "M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"], ["d", "M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"], ["d", "M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"], [1, "bg-green-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "28", "height", "19", "viewBox", "0 0 28 19", 1, "w-3", "fill-white"], ["d", "M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"]],
  template: function ModelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModelComponent_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelComponent_div_1_Template, 10, 2, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPopup);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPopup);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5045:
/*!*********************************************************!*\
  !*** ./src/app/components/process/process.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessComponent: () => (/* binding */ ProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrow-svg/arrow-svg.component */ 3835);



function ProcessComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "-commerce development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "User-friendly design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "SEO-optimixed code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Integrations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Data migration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Data migration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Data migration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "obile Apps development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "User Experiance design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Android Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Ios Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Data migration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Deployment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "UI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "/UX design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Wirefarams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Concept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "User-friendly design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Additional pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Design updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "eb development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Websites");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Scss");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Widgets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Data security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Debugging");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "eb development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Websites");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Scss");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Widgets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Data security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Debugging");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
class ProcessComponent {
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      margin: 5,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        },
        1200: {
          items: 4
        }
      },
      nav: true
    };
  }
}
ProcessComponent.ɵfac = function ProcessComponent_Factory(t) {
  return new (t || ProcessComponent)();
};
ProcessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProcessComponent,
  selectors: [["app-process"]],
  decls: 12,
  vars: 1,
  consts: [[1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "uppercase", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "what_we_do"], [3, "options"], ["carouselSlide", ""], [1, "slide"], [1, "flex", "items-center", "flex-col", "w-full"], [1, "basis-full"], [1, "flex", "flex-col", "items-start"], [1, "text-sm/[16px]", "font-bold", "text-slate-700", "dark:text-slate-200", "inline-flex", "items-baseline"], [1, "bg-purple-600", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "flex", "flex-col", "items-start", "mt-6"], [1, "text-xs/[16px]", "text-slate-500", "dark:text-slate-400", "flex", "items-start"], [1, "mr-2"], [1, "mt-1"], [1, "bg-yellow-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-emerald-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-orange-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-rose-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"]],
  template: function ProcessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " What ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " we do ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "owl-carousel-o", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProcessComponent_ng_template_7_Template, 39, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProcessComponent_ng_template_8_Template, 39, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProcessComponent_ng_template_9_Template, 39, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProcessComponent_ng_template_10_Template, 44, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProcessComponent_ng_template_11_Template, 44, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);
    }
  },
  dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective, _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_0__.ArrowSVGComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7157:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrow-svg/arrow-svg.component */ 3835);


class ProjectsComponent {}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)();
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 184,
  vars: 0,
  consts: [["id", "projects", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "uppercase", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "flex", "mt-8", "flex-wrap", "justify-between"], [1, "md:basis-1/3", "basis-full"], [1, "flex", "flex-col", "items-start"], [1, "text-sm/[16px]", "font-bold", "text-slate-700", "dark:text-slate-200", "inline-flex", "items-baseline"], [1, "bg-fuchsia-600", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl"], [1, "ml-10", "text-fuchsia-600", "-mt-2", "text-xsm", "font-semibold"], [1, "mt-8"], [1, "text-xs/[16px]", "flex", "items-start"], [1, "mr-2"], [1, "text-slate-700", "dark:text-slate-200", "mt-1"], [1, "ml-7", "mt-1.5", "text-sm-11"], [1, "text-slate-500", "dark:text-slate-400"], [1, "mt-8", "ml-7", "mb-8"], [1, "text-sm/[16px]", "font-bold", "text-slate-500", "dark:text-slate-400", "inline-flex", "items-baseline"], ["href", "/", 1, "text-sky-500", "hover:text-sky-600", "ml-3"], [1, "md:basis-2/3", "basis-full", "-m-1", "flex", "flex-wrap", "justify-center", "md:-m-2"], [1, "flex", "md:w-2/5", "w-2/4", "flex-wrap"], [1, "w-1/2", "p-1", "md:p-2"], ["href", "assets/images/1.png", "data-lightbox", "roadtrip", "data-title", "tech stack page - Dark"], ["alt", "gallery", "src", "assets/images/1.png", 1, "block", "h-full", "w-full", "rounded-lg", "object-cover", "object-center", "border-4", "shadow", "shadow-3xl", "border-gray-200", "dark:border-slate-50/[0.06]"], ["href", "assets/images/2.png", "data-lightbox", "roadtrip", "data-title", "tech stack page - Light"], ["alt", "gallery", "src", "assets/images/2.png", 1, "block", "h-full", "w-full", "rounded-lg", "object-cover", "object-center", "border-4", "shadow", "shadow-3xl", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "w-full", "p-1", "md:p-2"], ["href", "assets/images/8.png", "data-lightbox", "roadtrip", "data-title", "my dashboard - Dark"], ["alt", "gallery", "src", "assets/images/8.png", 1, "block", "h-full", "w-full", "rounded-lg", "object-cover", "object-center", "border-4", "shadow", "shadow-3xl", "border-gray-200", "dark:border-slate-50/[0.06]"], ["href", "assets/images/9.png", "data-lightbox", "roadtrip", "data-title", "my dashboard - light"], ["alt", "gallery", "src", "assets/images/9.png", 1, "block", "h-full", "w-full", "rounded-lg", "object-cover", "object-center", "border-4", "shadow", "shadow-3xl", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "my-12", "w-full", "h-px", "dark:bg-slate-700", "bg-slate-200"], [1, "flex", "flex-wrap", "justify-between", "mt-8"], [1, "bg-teal-600", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl"], [1, "ml-10", "text-teal-600", "-mt-2", "text-xsm", "font-semibold"], [1, "bg-lime-600", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl"], [1, "ml-10", "text-lime-600", "-mt-2", "text-xsm", "font-semibold"], [1, "bg-yellow-600", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl"], [1, "ml-10", "text-yellow-600", "-mt-2", "text-xsm", "font-semibold"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Our Latest ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h6", 6)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "-commerce ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Web application");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " This web application used for the selling products ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13)(21, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also.We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15)(24, "h6", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Demo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "i2Tym-ecommerce.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20)(34, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 25)(37, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "div", 25)(41, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20)(44, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 20)(47, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 31)(51, "div", 4)(52, "div", 5)(53, "h6", 6)(54, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "-Learning ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Web application");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 9)(60, "div", 10)(61, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " This web application used for the learning frameworks ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 13)(66, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also.We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 15)(69, "h6", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Demo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "i2Tym-elearning.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 18)(74, "div", 19)(75, "div", 20)(76, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 20)(79, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 25)(82, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 19)(85, "div", 25)(86, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 20)(89, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 20)(92, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 31)(96, "div", 4)(97, "div", 5)(98, "h6", 6)(99, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "-Billing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Web application");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 9)(105, "div", 10)(106, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " This web application used for the shop keepers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 13)(111, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also.We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 15)(114, "h6", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " Demo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "i2Tym-billing.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 18)(119, "div", 19)(120, "div", 20)(121, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 20)(124, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 25)(127, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 19)(130, "div", 25)(131, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 20)(134, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 20)(137, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 31)(141, "div", 4)(142, "div", 5)(143, "h6", 6)(144, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "O");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "-support ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Web application");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 9)(150, "div", 10)(151, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " This web application used for the online suppots ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 13)(156, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also.We are developed the application for selling anytype of products and its have multiples pages and its showing the offer details and product zooming facility and also showing related products somany features are available and tracking products also ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 15)(159, "h6", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, " Demo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "i2Tym-online-support.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 18)(164, "div", 19)(165, "div", 20)(166, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 20)(169, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 25)(172, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 19)(175, "div", 25)(176, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 20)(179, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 20)(182, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_0__.ArrowSVGComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8693:
/*!*******************************************************************!*\
  !*** ./src/app/components/testimonials/testimonials.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialsComponent: () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);


function TestimonialsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12)(8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14)(11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Manoj kumar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI DEVELOPER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12)(8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14)(11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sachin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI DEVELOPER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12)(8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14)(11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "David");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "BACKEND DEVELOPER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12)(8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14)(11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Alan menon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI/UX DESIGNER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12)(8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14)(11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Krishnan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI DEVELOPER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
class TestimonialsComponent {
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      margin: 5,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        },
        1200: {
          items: 3
        }
      },
      nav: true
    };
  }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) {
  return new (t || TestimonialsComponent)();
};
TestimonialsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TestimonialsComponent,
  selectors: [["app-testimonials"]],
  decls: 12,
  vars: 1,
  consts: [[1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "what_we_do"], [3, "options"], ["carouselSlide", ""], [1, "slide"], [1, "w-full"], [1, "h-full", "rounded"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 975.036 975.036", 1, "block", "w-5", "h-5", "text-sky-500", "mb-4"], ["d", "M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"], [1, "leading-relaxed", "mb-6", "text-slate-500", "text-sm13", "dark:text-slate-400"], [1, "inline-flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-emerald-500", "flex-shrink-0"], [1, "flex-grow", "flex", "flex-col", "pl-4"], [1, "text-xmd", "text-slate-700", "dark:text-slate-200"], [1, "text-emerald-500", "font-semibold", "uppercase", "text-sm"], [1, "leading-relaxed", "mb-6", "text-sm13", "text-slate-500", "dark:text-slate-400"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-cyan-500", "flex-shrink-0"], [1, "text-cyan-500", "font-semibold", "uppercase", "text-sm"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-violet-500", "flex-shrink-0"], [1, "text-violet-500", "font-semibold", "uppercase", "text-sm"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-fuchsia-500", "flex-shrink-0"], [1, "text-fuchsia-500", "font-semibold", "uppercase", "text-sm"], [1, "leading-relaxed", "text-sm13", "mb-6", "text-slate-500", "dark:text-slate-400"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-orange-500", "flex-shrink-0"], [1, "text-orange-500", "font-semibold", "uppercase", "text-sm"]],
  template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Testimonials ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "owl-carousel-o", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestimonialsComponent_ng_template_7_Template, 15, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestimonialsComponent_ng_template_8_Template, 15, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestimonialsComponent_ng_template_9_Template, 15, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestimonialsComponent_ng_template_10_Template, 15, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestimonialsComponent_ng_template_11_Template, 15, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    }
  },
  dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6030:
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkComponent: () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.component */ 8495);


class WorkComponent {
  constructor() {
    this.showPopup = false;
    this.sendingMail = false;
  }
  isSendingMail() {
    this.showPopup = true;
    this.sendingMail = true;
  }
  closePopup(data) {
    this.showPopup = data;
    this.sendingMail = data;
  }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) {
  return new (t || WorkComponent)();
};
WorkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WorkComponent,
  selectors: [["app-work"]],
  decls: 93,
  vars: 2,
  consts: [["id", "service", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "uppercase", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "mt-8", "flex", "flex-wrap", "gap-y-6"], [1, "my-1", "px-1", "sm:w-full", "md:w-1/3", "xl:w-1/5", "flex", "self-stretch", "hover:translate-y-sm", "hover:duration-700"], [1, "p-3", "inline-flex", "items-start", "bg-pageBg", "dark:bg-dark-pageBg", "rounded", "w-full", "relative", "justify-center"], [1, "inline-flex", "flex-col", "items-center", "justify-center", "w-full", "mb-5"], ["src", "assets/icons/planning.png", "alt", "", 1, "w-2/6", "md:w-9/12", "md:h-32", "object-cover", "p-0", "md:p-5"], [1, "my-4", "font-bold", "text-sky-500", "text-center", "text-xs", "capitalize"], [1, "shadow", "shadow-md", "bg-green-400", "bottom-[-21px]", "rounded-full", "absolute", "inline-flex", "items-center", "justify-center", "w-11", "h-11"], [1, "mdi", "mdi-arrow-right-bold", "inline-flex", "text-green-100"], ["src", "assets/icons/design.png", "alt", "", 1, "w-2/6", "md:w-9/12", "md:h-32", "object-cover", "p-0", "md:p-5"], ["src", "assets/icons/development.png", "alt", "", 1, "w-2/6", "md:w-9/12", "md:h-32", "object-cover", "p-0", "md:p-5"], ["src", "assets/icons/testing.png", "alt", "", 1, "w-2/6", "md:w-9/12", "md:h-32", "object-cover", "p-0", "md:p-5"], ["src", "assets/icons/support.png", "alt", "", 1, "w-2/6", "md:w-9/12", "md:h-32", "object-cover", "p-0", "md:p-5"], [1, "mdi", "mdi-stop", "inline-flex", "text-green-100"], [1, "mt-10", "flex", "flex-wrap"], [1, "my-1", "px-1", "sm:w-full", "md:w-1/2", "flex", "self-stretch", "hover:translate-y-sm", "hover:duration-700"], [1, "flex", "p-4", "mb-4", "border", "border-slate-900/10", "dark:border-slate-50/[0.06]", "rounded-lg", "bg-transparent", "dark:text-blue-400", "w-full"], [1, "flex-shrink-0", "inline-flex", "items-center", "justify-center", "w-8", "h-8", "rounded", "mr-3", "flex", "items-start", "bg-purple-500"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-[17px]", "text-white"], ["opacity", "0.3", "x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "fill", "currentColor"], ["d", "M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z", "fill", "currentColor"], [1, "mt-1.5"], [1, "text-xs/[16px]", "text-slate-700", "dark:text-slate-200", "mt-1"], [1, "mt-1.5", "ml-4", "text-slate-500", "dark:text-slate-400", "text-xmd", "list-disc", "list-inside"], [1, "p-4", "mb-4", "border", "border-slate-900/10", "dark:border-slate-50/[0.06]", "rounded-lg", "bg-transparent", "w-full"], [1, "flex", "items-start"], [1, "flex-shrink-0", "inline-flex", "items-center", "justify-center", "w-8", "h-8", "rounded", "mr-3", "flex", "items-start", "bg-teal-500"], [1, "flex", "justify-start", "flex-col", "mt-2"], [1, "text-xs/[16px]", "text-slate-700", "dark:text-slate-200"], [1, "mt-2", "mb-4", "text-slate-500", "dark:text-slate-400", "text-xmd"], [1, "flex"], ["type", "button", 1, "text-sky-500", "bg-transparent", "border", "hover:text-white", "focus:outline-none", "rounded", "text-xs", "px-3", "py-2.5", "text-center", "hover:bg-sky-500", "border-sky-500", "dark:text-sky-400", "dark:hover:text-white", "focus:none", 3, "click"], [3, "showPopup", "sendMail", "close"]],
  template: function WorkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " How ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "we Work ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Product Research ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "and planning");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4)(17, "div", 5)(18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "UI/UX and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Graphic Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 4)(27, "div", 5)(28, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "software ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "development");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4)(37, "div", 5)(38, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "QA and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Bug fixing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 4)(47, "div", 5)(48, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Launch and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16)(57, "div", 17)(58, "div", 18)(59, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "rect", 21)(62, "path", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 23)(64, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "We use Agile methodology for development.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ul", 25)(67, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Regular stand-up meeting via video calls.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Weekly status reports.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Resource-effective & time-sensitive process.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Sprint planning.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Sprint review and demo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 17)(78, "div", 26)(79, "div", 27)(80, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "rect", 21)(83, "path", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 29)(85, "h3", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Are you ready to work with us?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " let's get to know about your project, we can discuss any time. fell free to ask us or raise a request.let's get to know about your project, we can discuss any time. fell free to ask us or raise a request ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 32)(90, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_90_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Request a quote ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "app-model", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function WorkComponent_Template_app_model_close_92_listener($event) {
        return ctx.closePopup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPopup", ctx.showPopup)("sendMail", ctx.sendingMail);
    }
  },
  dependencies: [_model_model_component__WEBPACK_IMPORTED_MODULE_0__.ModelComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 240:
/*!**************************************************!*\
  !*** ./src/app/services/menu-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class MenuService {
  constructor(rendererFactory) {
    this._showMobileMenu$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  get showMobileMenu$() {
    return this._showMobileMenu$.asObservable();
  }
  set showMobileMenu(value) {
    this._showMobileMenu$.next(value);
  }
  scrollView(data) {
    const element = this.renderer.selectRootElement(`#${data}`, true);
    window.scrollTo({
      top: this.findPosition(element),
      behavior: 'smooth'
    });
  }
  findPosition(obj) {
    var currenttop = -120;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while (obj = obj.offsetParent);
      return [currenttop];
    }
  }
}
MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2));
};
MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MenuService,
  factory: MenuService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6621:
/*!****************************************************!*\
  !*** ./src/app/services/theme-services.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ThemeService {
  constructor() {
    this.default = 'light';
    this.themeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.theme);
  }
  get theme() {
    return localStorage.getItem('theme') ?? this.default;
  }
  set theme(value) {
    localStorage.setItem('theme', value);
    this.themeChanged.next(value);
  }
  get isDark() {
    return this.theme == 'dark';
  }
}
ThemeService.ɵfac = function ThemeService_Factory(t) {
  return new (t || ThemeService)();
};
ThemeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ThemeService,
  factory: ThemeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map