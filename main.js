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
    this.title = 'Portfolio';
    window.addEventListener("blur", () => {
      document.title = "Come Back 😎";
    });
    window.addEventListener("focus", () => {
      document.title = this.title;
    });
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-svg-icon */ 1291);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header-mobile/header-mobile.component */ 6486);
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/description/description.component */ 1552);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _components_description_carousal_carousal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/description/carousal/carousal.component */ 4209);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_send_details_block_send_details_block_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/send-details-block/send-details-block.component */ 1804);
/* harmony import */ var _components_contact_details_block_contact_details_block_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact-details-block/contact-details-block.component */ 384);
/* harmony import */ var _components_projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/projects-details/projects-details.component */ 3265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 1699);



























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_22__.AngularSvgIconModule.forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_23__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _components_send_details_block_send_details_block_component__WEBPACK_IMPORTED_MODULE_16__.SendDetailsBlockComponent, _components_contact_details_block_contact_details_block_component__WEBPACK_IMPORTED_MODULE_17__.ContactDetailsBlockComponent, _components_projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_18__.ProjectsDetailsComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_3__.HeaderMobileComponent, _components_description_description_component__WEBPACK_IMPORTED_MODULE_4__.DescriptionComponent, _components_description_carousal_carousal_component__WEBPACK_IMPORTED_MODULE_5__.CarousalComponent, _components_arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_6__.ArrowSVGComponent, _components_business_business_component__WEBPACK_IMPORTED_MODULE_7__.BusinessComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _components_process_process_component__WEBPACK_IMPORTED_MODULE_9__.ProcessComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__.ProjectsComponent, _components_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_12__.BackToTopComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__.ContactComponent, _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_14__.TestimonialsComponent, _components_model_model_component__WEBPACK_IMPORTED_MODULE_15__.ModelComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_22__.AngularSvgIconModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_23__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _components_send_details_block_send_details_block_component__WEBPACK_IMPORTED_MODULE_16__.SendDetailsBlockComponent, _components_contact_details_block_contact_details_block_component__WEBPACK_IMPORTED_MODULE_17__.ContactDetailsBlockComponent, _components_projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_18__.ProjectsDetailsComponent]
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
  decls: 156,
  vars: 3,
  consts: [[1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "capitalize", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "mt-8", "flex", "flex-wrap"], [1, "my-1", "md:px-1", "sm:w-full", "md:w-1/2", "lg:w-1/3", "inline-flex"], [1, "p-3", "pb-0", "inline-flex", "items-stretch", "bg-pageBg", "dark:bg-dark-pageBg", "rounded", "shadow", "shadow-md", "hover:translate-y-sm", "hover:duration-700", "sMobile:flex-col"], [1, "w-16", "mr-3", "sMobile:inline-flex", "sMobile:mr-0", "sMobile:w-full", "sMobile:justify-center"], [1, "bg-sky-100", "inline-flex", "items-center", "justify-center", "rounded-full", "w-12", "h-12", "dark:bg-dark-1"], ["src", "assets/icons/profit-up.png", "alt", "", 1, "w-6", "h-6"], [1, "flex", "flex-col", "mt-4", "justify-between"], [1, "text-sm/[16px]", "font-bold", "text-sky-500", "sMobile:text-center", "sMobile:px-2.5"], [1, "text-xmd", "my-3", "text-slate-500", "dark:text-slate-400", "sMobile:px-2.5"], [1, "border-t", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "flex", "divide-x", "divide-gray-200", "dark:divide-slate-50/[0.06]"], [1, "block", "flex-1", "text-center", "text-sm", "text-indigo-400", "hover:text-indigo-500", "font-medium", "px-3", "py-4", 3, "click"], [1, "flex", "items-center", "justify-center"], ["viewBox", "0 0 16 16", 1, "w-4", "h-4", "fill-current", "flex-shrink-0", "mr-2"], ["d", "M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"], [1, "block", "flex-1", "text-center", "text-sm", "text-emerald-500", "hover:text-emerald-600", "font-medium", "px-3", "py-4", "group", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-4", "h-4", "fill-current", "flex-shrink-0", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"], ["src", "assets/icons/project-management.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/clipboard.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/problem.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/open-source.png", "alt", "", 1, "w-6", "h-6"], ["src", "assets/icons/automation.png", "alt", "", 1, "w-6", "h-6"], [3, "showPopup", "sendMail", "contact", "close"]],
  template: function BusinessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " strategy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " will help you ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " achieve your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "objectives");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "div", 6)(14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Grow your sales with better experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " We will guide you to expand your business and services with the help of the latest technologies. By connecting the dots across the globe you can explore more customers. As we are constantly working with new startups to top-level companies, we can provide innovative solutions which help to bring your business goals to the next level. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_23_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_29_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 4)(36, "div", 5)(37, "div", 6)(38, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 9)(41, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Kick-start new ideas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " To begin with, starting a business necessitates your time and a strong will to succeed. Most people believe that having a lot of money is necessary to start a business, but if you have a strong business concept and conduct your market research properly, you may succeed with little to no money. we will guide you to do the market research for your ideas and help to achieve your dream goals. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12)(46, "div", 13)(47, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_47_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_53_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 4)(60, "div", 5)(61, "div", 6)(62, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 9)(65, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Upgrade your project");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Since we are all in a competitive world we need to sharpen our weapons to face financial crises and unknown failures. We need to often offer new and improved features and speed enhancements to make the end-user experience better. We will constantly work with your team on ways to improve the software, giving greater efficiency to users. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 12)(70, "div", 13)(71, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_71_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_77_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 4)(84, "div", 5)(85, "div", 6)(86, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 9)(89, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Improve your skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Knowledge is wealth. Upgrading your abilities is essential for career success since it allows you to remain relevant in an ever-changing employment market. By gaining new skills and information, you boost your worth as an employee and open up prospects for advancement and higher-level roles. We offer live events, interactive classes, and pre-recorded courses with real-time examples. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 12)(94, "div", 13)(95, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_95_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_101_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 4)(108, "div", 5)(109, "div", 6)(110, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 9)(113, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Open source collaboration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Contributing to our open-source widgets allows you to work on real-world projects, learn new programming languages, hone your coding abilities, and receive hands-on experience in software development. You can interact with like-minded people, benefit from their knowledge, and develop meaningful relationships within the IT community by participating in these projects. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 12)(118, "div", 13)(119, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_119_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_125_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 4)(132, "div", 5)(133, "div", 6)(134, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 9)(137, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Automation and analytics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " By collecting and analyzing data, you can gain valuable insights into how users interact with your project, identify areas for improvement, and make data-driven decisions to enhance its performance. Automation plays a significant role in the IT industry and offers several benefits that enhance efficiency, productivity, and overall operations. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 12)(142, "div", 13)(143, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_143_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Send Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BusinessComponent_Template_button_click_149_listener() {
        return ctx.isContacting();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "app-model", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function BusinessComponent_Template_app_model_close_155_listener($event) {
        return ctx.closePopup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPopup", ctx.showPopup)("sendMail", ctx.sendingMail)("contact", ctx.contact);
    }
  },
  dependencies: [_model_model_component__WEBPACK_IMPORTED_MODULE_0__.ModelComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 384:
/*!*************************************************************************************!*\
  !*** ./src/app/components/contact-details-block/contact-details-block.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactDetailsBlockComponent: () => (/* binding */ ContactDetailsBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



function ContactDetailsBlockComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " If you are driven, ambitious, and ready to make an impact, we would love to hear from you. Join us on this exciting journey as we shape the future together. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ContactDetailsBlockComponent {
  constructor() {
    this.contact = false;
  }
}
ContactDetailsBlockComponent.ɵfac = function ContactDetailsBlockComponent_Factory(t) {
  return new (t || ContactDetailsBlockComponent)();
};
ContactDetailsBlockComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactDetailsBlockComponent,
  selectors: [["contact-details-block"]],
  inputs: {
    contact: "contact"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 87,
  vars: 1,
  consts: [["class", "text-slate-500 dark:text-slate-400 text-sm13 mb-9 text-sm leading-relaxed", 4, "ngIf"], [1, "mb-8", "flex", "w-full", "items-start", "max-w-[370px]"], [1, "bg-purple-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "w-3", "fill-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"], [1, "w-full"], [1, "text-slate-700", "dark:text-slate-200", "mb-1", "text-base", "font-semibold", "leading-none", "hover:text-sky-500", "dark:hover:text-sky-500"], [1, "mt-3"], ["href", "https://wa.me/7010275261?text=", "target", "_blank", 1, "relative", "has-tooltip", "mr-2", "text-white", "bg-green-500", "border", "border-green-500", "focus:outline-none", "focus:ring-green-500", "font-medium", "rounded-full", "text-sm", "p-1", "text-center", "inline-flex", "items-center"], [1, "mdi", "mdi-whatsapp", "flex", "items-center", "justify-center", "w-6", "text-base"], [1, "hidden", "md:block", "tooltip", "rounded", "shadow", "p-1", "bg-sky-500", "dark:bg-dark-pageBg", "-mt-8", "text-white", "dark:text-slate-300", "text-[7px]", "leading-[8px]", "font-semibold", "p-2.5", "top-[26px]", "left-[42px]"], ["width", "9px", "height", "16px", "viewBox", "0 0 9 16", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "absolute", "left-0", "-ml-2", "bottom-0", "top-0", "h-full"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Tooltips-", "transform", "translate(-874.000000, -1029.000000)", 1, "fill-sky-500", "dark:fill-dark-pageBg", "shadow"], ["id", "Group-3-Copy-16", "transform", "translate(850.000000, 975.000000)"], ["id", "Group-2", "transform", "translate(24.000000, 0.000000)"], ["id", "Triangle", "transform", "translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) ", "points", "4.5 57.5 12.5 66.5 -3.5 66.5"], ["href", "https://www.facebook.com/i2tym", "target", "_blank", 1, "relative", "has-tooltip", "mr-2", "text-white", "border", "border-sky-500", "bg-sky-500", "focus:outline-none", "focus:ring-sky-500", "font-medium", "rounded-full", "text-sm", "p-1", "text-center", "inline-flex", "items-center"], [1, "mdi", "mdi-facebook", "flex", "items-center", "justify-center", "w-6", "text-base"], [1, "relative", "has-tooltip", "cursor-pointer", "mr-2", "text-white", "border", "border-pink-500", "bg-pink-500", "focus:outline-none", "focus:ring-pink-500", "font-medium", "rounded-full", "text-sm", "p-1", "text-center", "inline-flex", "items-center"], [1, "mdi", "mdi-instagram", "flex", "items-center", "justify-center", "w-6", "text-base"], [1, "relative", "has-tooltip", "cursor-pointer", "text-white", "border", "border-blue-700", "bg-blue-700", "focus:outline-none", "focus:ring-blue-700", "font-medium", "rounded-full", "text-sm", "p-1", "text-center", "inline-flex", "items-center"], [1, "mdi", "mdi-linkedin", "flex", "items-center", "justify-center", "w-6", "text-base"], [1, "bg-rose-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["d", "M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"], [1, "text-xmd", "text-slate-500", "dark:text-slate-400", "hover:text-sky-500", "dark:hover:text-sky-500"], [1, "text-xmd", "text-slate-500", "hover:text-sky-500", "dark:hover:text-sky-500", "dark:text-slate-400"], [1, "bg-indigo-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "24", "height", "26", "viewBox", "0 0 24 26", 1, "w-3", "fill-white"], ["d", "M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"], ["d", "M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"], ["d", "M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"], [1, "flex", "w-full", "items-start", "max-w-[370px]"], [1, "bg-green-500", "flex-shrink-0", "inline-flex", "items-center", "justify-center", "mr-6", "w-8", "h-8", "rounded", "overflow-hidden", "rounded"], ["width", "28", "height", "19", "viewBox", "0 0 28 19", 1, "w-3", "fill-white"], ["d", "M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"], [1, "text-slate-500", "dark:text-slate-400", "text-sm13", "mb-9", "text-sm", "leading-relaxed"]],
  template: function ContactDetailsBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactDetailsBlockComponent_p_1_Template, 2, 0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Contact US");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Click here to join our community!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11)(16, "g", 12)(17, "g", 13)(18, "g", 14)(19, "g", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "polygon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10)(24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Click here to join our community!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 11)(27, "g", 12)(28, "g", 13)(29, "g", 14)(30, "g", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "polygon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10)(35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Click here to join our community!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 11)(38, "g", 12)(39, "g", 13)(40, "g", 14)(41, "g", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "polygon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10)(46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Click here to join our community!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 11)(49, "g", 12)(50, "g", 13)(51, "g", 14)(52, "g", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "polygon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1)(55, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5)(59, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " The Team i2Tym");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Taylor Estate, Kodambakkam, Chennai, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Tamil Nadu, India ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " 600024 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 1)(68, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 29)(71, "path", 30)(72, "path", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5)(74, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " (+91) 70 102 752 61");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32)(79, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5)(83, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " mail.i2Tym@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.contact);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _send_details_block_send_details_block_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../send-details-block/send-details-block.component */ 1804);
/* harmony import */ var _contact_details_block_contact_details_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-details-block/contact-details-block.component */ 384);



class ContactComponent {}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 16,
  vars: 0,
  consts: [["id", "contact", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "uppercase", "text-sky-500", "font-bold"], [1, "text-3xl", "leading-tight", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "mt-8", "flex", "flex-wrap", "relative", "z-10"], [1, "w-full", "md:w-2/5"], [1, "mb-12", "max-w-[570px]", "lg:mb-0"], [1, "md:w-3/5", "w-full", "inline-flex", "justify-end"], [1, "relative", "md:w-4/5", "w-full", "rounded-lg", "p-8", "sm:p-12", "border", "shadow-lg", "border-gray-200", "dark:border-slate-50/[0.06]"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Hire us");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Let's start working ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " on your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "contact-details-block");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "send-details-block");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_send_details_block_send_details_block_component__WEBPACK_IMPORTED_MODULE_0__.SendDetailsBlockComponent, _contact_details_block_contact_details_block_component__WEBPACK_IMPORTED_MODULE_1__.ContactDetailsBlockComponent],
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


function CarousalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-Learning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web and mobile app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Live Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Recorded sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tech stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Certificates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-Commerce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web and mobile app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order/Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Admin Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Modularized");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HRMS & Job Portal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Job listing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Admin module");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notifications\u200B\u200B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fleet Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web and mobile app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Live Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Spend/Expense ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Intuitive UI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Driver Behaviour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Fuel monitor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Q & A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Collaborative platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Interactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Modularized ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Chat/Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Posting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CarousalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 20)(6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inventory billing system");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Web application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10)(12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Billing/Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "IStock Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Admin module");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Creative UI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class CarousalComponent {
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      margin: 10,
      autoplay: true,
      smartSpeed: 900,
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
  decls: 8,
  vars: 1,
  consts: [[1, "main-crousal"], [3, "options"], ["carouselSlide", ""], [1, "slide", "h-full"], [1, "flex", "items-center", "flex-col", "w-full", "h-full", "justify-between"], [1, "basis-full"], [1, "flex", "items-center"], [1, "bg-sky-100", "inline-block", "relative", "rounded-lg", "w-12", "dark:bg-dark-1", "mr-3"], ["src", "assets/icons/elearning.png", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], [1, "text-sm/[16px]", "font-bold", "text-sky-500"], [1, "flex", "flex-wrap", "mt-5"], [1, "mr-3", "border", "font-medium", "mb-2.5", "p-0.5", "px-3.5", "border-slate-300", "rounded-full", "dark:border-dark-border", "text-xsm/[20px]", "text-slate-500", "dark:text-slate-400"], [1, "basis-full", "flex", "justify-center", "my-3", "items-end"], [1, "drop-shadow-carousal-image-drop-shadow", "animate-elearn-animation", "bg-[length:100%_100%]", "w-64", "h-36"], ["src", "assets/icons/shopping.png", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], [1, "drop-shadow-carousal-image-drop-shadow", "animate-ecommerce-animation", "bg-[length:100%_100%]", "w-64", "h-36"], ["src", "assets/icons/job.svg", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], ["src", "assets/icons/fleet.svg", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], ["src", "assets/icons/qanda.svg", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"], [1, "basis-full", "flex", "justify-center", "my-3", "relative", "items-end"], ["href", "https://www.flaticon.com/free-icons/receipt", "title", "receipt icons"], ["src", "assets/icons/billing.svg", "alt", "", 1, "w-12", "h-12", "inline-block", "p-3", "filter-none"]],
  template: function CarousalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "owl-carousel-o", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarousalComponent_ng_template_2_Template, 23, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarousalComponent_ng_template_3_Template, 21, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarousalComponent_ng_template_4_Template, 21, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarousalComponent_ng_template_5_Template, 23, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarousalComponent_ng_template_6_Template, 21, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarousalComponent_ng_template_7_Template, 24, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ 1291);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousal/carousal.component */ 4209);
/* harmony import */ var _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arrow-svg/arrow-svg.component */ 3835);





function DescriptionComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "svg-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Web & Mobile Apps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "svg-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Dev-ops Automation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "svg-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Solution Providers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "svg-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Tech Consultants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "svg-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " AI/Machine Learning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "svg-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Testing automation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DescriptionComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "svg-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Widgets/plugin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
class DescriptionComponent {
  constructor() {
    this.customOptions = {
      autoWidth: true,
      items: 5,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      margin: 5,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 2.3
        },
        400: {
          items: 4.6
        },
        550: {
          items: 6
        },
        740: {
          items: 5.5
        },
        790: {
          items: 6.3
        },
        940: {
          items: 9.2
        },
        1200: {
          items: 10.7
        }
      },
      nav: false
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
  consts: [["id", "initial", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "w-full"], [1, "text-3xl", "md:text-xLarge", "md:whitespace-nowrap", "leading-tight", "font-bold", "capitalize", "text-slate-700", "[word-spacing:8px]", "dark:text-slate-200"], [1, "hidden", "sm:block"], [1, "text-sky-500", "break-after-page"], [1, "text-xs/[16px]", "text-slate-500", "dark:text-slate-400", "flex", "items-start"], [1, "mr-2"], [1, "mt-1"], [1, "our_service_dtls", "lg:w-4/6", "md:w-4/5"], [3, "options"], ["carouselSlide", ""], [1, "slide"], [1, "flex", "items-center", "flex-col", "w-full"], [1, "basis-full", "mb-2.5"], [1, "flex-col", "w-[120px]", "border", "border-slate-300", "rounded-lg", "dark:border-dark-border", "py-2.5", "group", "capitalize", "flex", "items-center", "text-[8px]", "lg:leading-6", "mb-4", "font-semibold", "text-slate-700", "dark:text-slate-200"], [1, "p-3", "flex", "items-center", "justify-center"], ["src", "assets/icons/svg/responsive.svg", 1, "w-8", "h-8"], [1, "flex", "items-center", "justify-center", "p-3"], ["src", "assets/icons/svg/devops.svg", 1, "w-8", "h-8"], ["src", "assets/icons/svg/solution.svg", 1, "w-8", "h-8"], ["src", "assets/icons/svg/tech.svg", 1, "w-8", "h-8"], ["src", "assets/icons/svg/ai_learn.svg", 1, "w-8", "h-8"], ["src", "assets/icons/svg/automation.svg", 1, "w-8", "h-8"], ["src", "assets/icons/svg/widgets.svg", 1, "w-8", "h-8"]],
  template: function DescriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " We provide and build ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " innovative solutions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " for your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "challenges and ideas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Single point of a platform where you can solve your problems and build your ideas.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5)(16, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-arrow-svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Together with your team, we will identify any room for improvement or automation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8)(21, "owl-carousel-o", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DescriptionComponent_ng_template_22_Template, 7, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DescriptionComponent_ng_template_23_Template, 7, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DescriptionComponent_ng_template_24_Template, 7, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DescriptionComponent_ng_template_25_Template, 7, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DescriptionComponent_ng_template_26_Template, 7, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DescriptionComponent_ng_template_27_Template, 7, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DescriptionComponent_ng_template_28_Template, 7, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-carousal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
    }
  },
  dependencies: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective, _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_0__.CarousalComponent, _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_1__.ArrowSVGComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6910:
/*!*************************************************************************!*\
  !*** ./src/app/components/error-component/error-component.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorComponent: () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



class ErrorComponent {
  constructor() {
    this.closeError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  closePopup(data) {
    this.closeError.emit(data);
  }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
};
ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["error-component"]],
  outputs: {
    closeError: "closeError"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 22,
  vars: 0,
  consts: [[1, "bg-black", "z-50", "fixed", "top-0", "left-0", "w-screen", "h-screen", "opacity-50"], [1, "flex", "items-center", "justify-center", "fixed", "top-0", "left-0", "right-0", "z-50", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full"], [1, "relative", "w-full", "max-w-md", "max-h-full"], [1, "relative", "bg-white", "rounded-lg", "shadow-modelShadow", "dark:bg-dark-1"], ["type", "button", 1, "z-50", "absolute", "top-3", "right-2.5", "text-gray-400", "bg-pageBg", "hover:text-sky-500", "rounded-full", "text-sm", "w-8", "h-8", "ml-auto", "inline-flex", "justify-center", "items-center", "dark:bg-dark-pageBg", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 14 14", 1, "w-2", "h-2"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"], [1, "sr-only"], [1, "w-full", "rounded-lg", "p-8", "sm:p-12", "border", "shadow-lg", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "flex", "flex-col", "items-center"], [1, "error-icon", "inline-flex"], [1, "error-x-mark"], [1, "error-x-mark-line", "left"], [1, "error-x-mark-line", "right"], [1, "overflow-auto", "font-medium", "text-xmd", "my-6", "leading-5", "text-center", "flex", "flex-col", "justify-center", "text-slate-500", "dark:text-slate-400"], [1, "text-lg"], [1, "w-full", "inline-flex", "items-center", "justify-center"], [1, "bg-sky-500", "border", "text-white", "border-primary", "w-1/5", "rounded", "border", "p-3", "hover:bg-sky-600", "border-sky-500", "dark:hover:text-white", "transition", "hover:bg-opacity-90", 3, "click"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_4_listener() {
        return ctx.closePopup(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close modal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12)(14, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14)(16, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Server down issue");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " We will resolved issue as soon as possible. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16)(20, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_20_listener() {
        return ctx.closePopup(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  styles: [".error-icon[_ngcontent-%COMP%] {\n  border-color: #f1416c !important;\n  color: #f1416c;\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1em auto 0.6em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  animation: _ngcontent-%COMP%_animate-error-icon 0.5s;\n  -webkit-animation: _ngcontent-%COMP%_animate-error-icon 0.5s;\n}\n.error-icon[_ngcontent-%COMP%]   .error-x-mark[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animate-error-x-mark 0.5s;\n  -webkit-animation: _ngcontent-%COMP%_animate-error-x-mark 0.5s;\n  position: relative;\n  flex-grow: 1;\n}\n.error-icon[_ngcontent-%COMP%]   .error-x-mark[_ngcontent-%COMP%]   .error-x-mark-line[_ngcontent-%COMP%] {\n  background-color: rgba(241, 65, 108, 0.75);\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n}\n.error-icon[_ngcontent-%COMP%]   .error-x-mark[_ngcontent-%COMP%]   .error-x-mark-line.left[_ngcontent-%COMP%] {\n  left: 1.0625em;\n  transform: rotate(45deg);\n}\n.error-icon[_ngcontent-%COMP%]   .error-x-mark[_ngcontent-%COMP%]   .error-x-mark-line.right[_ngcontent-%COMP%] {\n  right: 1em;\n  transform: rotate(-45deg);\n}\n@keyframes _ngcontent-%COMP%_animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lcnJvci1jb21wb25lbnQvZXJyb3ItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtBQUNKO0FBQUk7RUFDRSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDRixZQUFBO0FBRUo7QUFESTtFQUNFLDBDQUFBO0VBQ0EsY0FBQTtFQUNGLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBR0o7QUFGSTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQUlOO0FBRkk7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFJTjtBQXVDRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7RUFMSjtFQU9BO0lBQ0ksbUJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7RUFMSjtFQVFBO0lBQ0ksb0JBQUE7SUFDQSxzQkFBQTtFQU5KO0VBUUE7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBTko7QUFDRjtBQVNFO0VBQ007SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFQUjtFQVNNO0lBQ0ksd0JBQUE7SUFDQSxVQUFBO0VBUFY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1pY29uIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2YxNDE2YyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmMTQxNmM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVlbTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgbWFyZ2luOiAxZW0gYXV0byAwLjZlbTtcclxuICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDVlbTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUtZXJyb3ItaWNvbiAwLjVzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtZXJyb3ItaWNvbiAwLjVzO1xyXG4gICAgLmVycm9yLXgtbWFyayB7XHJcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41cztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtZXJyb3IteC1tYXJrIDAuNXM7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIC5lcnJvci14LW1hcmstbGluZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLDY1LDEwOCwgMC43NSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyLjMxMjVlbTtcclxuICAgIHdpZHRoOiAyLjkzNzVlbTtcclxuICAgIGhlaWdodDogMC4zMTI1ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xyXG4gICAgJi5sZWZ0IHtcclxuICAgICAgbGVmdDogMS4wNjI1ZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgICYucmlnaHQge1xyXG4gICAgICByaWdodDogMWVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgfVxyXG5cclxuICBcclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtZXJyb3IteC1tYXJrIHtcclxuICAgIDAlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMS42MjVlbTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIDgwJSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0wLjM3NWVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLWVycm9yLWljb24ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZS1lcnJvci14LW1hcmsge1xyXG4gICAgMCUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgODAlIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTAuMzc1ZW07XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAgIFxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGUtZXJyb3ItaWNvbiB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
  decls: 30,
  vars: 1,
  consts: [[1, "bg-white", "mt-14", "dark:bg-dark-1", "border-t", "border-slate-900/10", "dark:border-slate-50/[0.06]"], [1, "w-full", "max-w-screen-xl", "mx-auto", "p-4", "md:py-6", "px-7"], [1, "sm:flex", "sm:items-center", "sm:justify-between"], [1, "text-sky-500", "mr-3", "flex-none", "overflow-hidden", "md:w-auto", "text-lg", "font-bold", 3, "click"], [1, "inline-flex", "items-center", "relative"], ["src", "assets/images/Logo.png", "alt", "Logo", 1, "w-12"], [1, "text-slate-700", "dark:text-slate-200", "top-6", "left-9", "text-xs/[2.4]", "font-black"], [1, "capitalize", "text-sky-500", "relative", "text-[6px]", "font-black", "top-[10px]", "right-[26px]", "tracking-wide"], [1, "flex", "flex-wrap", "justify-center", "items-center", "mb-6", "text-sm", "font-medium", "sm:mb-0", "text-slate-700", "dark:text-slate-200"], ["href", "javascript:;", 1, "mr-4", "hover:underline", "md:mr-6", "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], ["href", "javascript:;", 1, "hover:underline", "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "my-6", "border-gray-200", "sm:mx-auto", "dark:border-gray-700", "lg:mt-4", "lg:mb-8"], [1, "block", "text-sm", "text-slate-500", "dark:text-slate-400", "text-center", "dark:text-gray-400"], ["href", "javascript:;", 1, "hover:underline"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_3_listener() {
        return ctx.menuService.scrollView("initial");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tym");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "For you by you");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 8)(12, "li")(13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() {
        return ctx.menuService.scrollView("projects");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_16_listener() {
        return ctx.menuService.scrollView("service");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_19_listener() {
        return ctx.menuService.scrollView("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_22_listener() {
        return ctx.menuService.scrollView("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "i2tym\u2122");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ". All Rights Reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
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
  decls: 38,
  vars: 4,
  consts: [[1, "fixed", "inset-x-0", "top-0", "z-40", "origin-top-right", "transform", "p-2", "transition", "md:hidden", 3, "ngClass"], [1, "divide-y-2", "divide-gray-500", "text-slate-700", "rounded-lg", "bg-white", "shadow-lg", "ring-1", "ring-black", "ring-opacity-5", "dark:bg-dark-1"], [1, "pt-5", "pb-6"], [1, "flex", "items-center", "justify-between", "px-5", "border-b", "pb-3", "mx-3.5", "border-slate-900/10", "dark:border-slate-50/[0.06]"], [1, "flex", "items-center", "justify-start", "sm:order-2", "md:mr-10", "lg:hidden"], [1, "text-sky-500", "mr-3", "flex-none", "overflow-hidden", "md:w-auto", "text-lg", "font-bold", 3, "click"], [1, "inline-flex", "items-center", "relative"], ["src", "assets/images/Logo.png", "alt", "Logo", 1, "w-12"], [1, "text-slate-700", "dark:text-slate-200", "top-6", "left-9", "text-xs/[2.4]", "font-black"], [1, "capitalize", "text-sky-500", "relative", "text-[6px]", "font-black", "top-[10px]", "right-[26px]", "tracking-wide"], [1, "flex", "items-center"], [3, "click"], [3, "src"], [1, "border-l", "h-6", "border-slate-200", "mx-3", "dark:border-dark-border"], ["type", "button", 1, "inline-flex", "text-sm", "items-center", "justify-center", "rounded-full", "p-2", "text-gray-400", "bg-pageBg", "dark:bg-dark-pageBg", "hover:text-sky-500", 3, "click"], [1, "sr-only"], ["src", "assets/icons/close.svg"], [1, "scrollbar-thumb-rounded", "scrollbar-track-rounded", "max-h-[500px]", "overflow-y-auto", "px-5", "scrollbar-thin", "scrollbar-track-gray-50", "scrollbar-thumb-gray-100", "dark:scrollbar-thumb-night-500", "dark:scrollbar-track-night-600"], [1, "pt-4", "flex", "items-center", "justify-center"], [1, "flex", "flex-col", "text-slate-700", "dark:text-slate-200", "text-center"], [1, "mb-2.5"], ["href", "javascript:;", 1, "text-xs", "p-1", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "border", "p-1", "px-5", "border-sky-400", "rounded-full"], ["href", "javascript:;", 1, "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"]],
  template: function HeaderMobileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div")(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_button_click_7_listener() {
        return ctx.menuService.scrollView("initial");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Tym");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "For you by you");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_button_click_16_listener() {
        return ctx.toggleTheme();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "svg-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_button_click_19_listener() {
        return ctx.toggleMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Close menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "svg-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "ul", 19)(26, "li", 20)(27, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_27_listener() {
        return ctx.menuService.scrollView("projects");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 20)(30, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_30_listener() {
        return ctx.menuService.scrollView("service");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li", 20)(33, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_33_listener() {
        return ctx.menuService.scrollView("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li", 22)(36, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderMobileComponent_Template_a_click_36_listener() {
        return ctx.menuService.scrollView("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Contact US");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.showMobileMenu$) ? "pointer-events-auto scale-100 animate-fade-in-up opacity-100 duration-200" : "pointer-events-none scale-95 opacity-0 duration-100 ease-out");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
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
  decls: 38,
  vars: 1,
  consts: [[1, "sticky", "top-0", "z-40", "w-full", "backdrop-blur", "flex-none", "transition-colors", "duration-500", "lg:z-50", "lg:border-b", "lg:border-slate-900/10", "dark:border-slate-50/[0.06]", "bg-white/70", "supports-backdrop-blur:bg-white/60", "dark:bg-dark-backDropBlur"], [1, "max-w-8xl", "mx-auto", "transition-all", "duration-300"], [1, "py-4", "border-b", "border-slate-900/10", "lg:px-8", "lg:border-0", "dark:border-slate-300/10", "mx-4", "lg:mx-0"], [1, "relative", "flex", "items-center"], [1, "text-sky-500", "mr-3", "flex-none", "overflow-hidden", "md:w-auto", "text-lg", "font-bold", 3, "click"], [1, "inline-flex", "items-center", "relative"], ["src", "assets/images/Logo.png", "alt", "Logo", 1, "w-12"], [1, "text-slate-700", "dark:text-slate-200", "top-6", "left-9", "text-xs/[2.4]", "font-black"], [1, "capitalize", "text-sky-500", "relative", "text-[6px]", "font-black", "top-[10px]", "right-[26px]", "tracking-wide"], [1, "relative", "hidden", "md:flex", "items-center", "ml-auto"], [1, "text-sm", "leading-6", "font-semibold", "text-slate-700", "dark:text-slate-200"], [1, "flex", "items-center", "space-x-8"], ["href", "javascript:;", 1, "text-xs", "p-1", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "border", "p-1", "px-5", "border-sky-400", "rounded-full"], ["href", "javascript:;", 1, "text-xs", "hover:text-sky-500", "dark:hover:text-sky-400", 3, "click"], [1, "flex", "items-center", "border-l", "border-slate-200", "ml-6", "pl-6", "dark:border-dark-border"], [1, "sr-only"], [3, "click"], [3, "src"], ["type", "button", 1, "ml-auto", "text-slate-500", "w-8", "h-8", "-my-1", "flex", "items-center", "justify-center", "hover:text-slate-600", "md:hidden", "dark:text-slate-400", "dark:hover:text-slate-300", 3, "click"], ["width", "24", "height", "24", "fill", "none", "aria-hidden", "true"], ["d", "M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() {
        return ctx.menuService.scrollView("initial");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Tym");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "For you by you");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "nav", 10)(14, "ul", 11)(15, "li")(16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() {
        return ctx.menuService.scrollView("projects");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li")(19, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
        return ctx.menuService.scrollView("service");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li")(22, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() {
        return ctx.menuService.scrollView("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 13)(25, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_25_listener() {
        return ctx.menuService.scrollView("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Contact US");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 15)(28, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Theme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_30_listener() {
        return ctx.toggleTheme();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "svg-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_32_listener() {
        return ctx.toggleMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "path", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "app-header-mobile");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _send_details_block_send_details_block_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../send-details-block/send-details-block.component */ 1804);
/* harmony import */ var _contact_details_block_contact_details_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-details-block/contact-details-block.component */ 384);





function ModelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 2);
  }
}
function ModelComponent_div_1_send_details_block_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "send-details-block", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function ModelComponent_div_1_send_details_block_9_Template_send_details_block_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.close.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModelComponent_div_1_contact_details_block_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "contact-details-block", 14);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contact", ctx_r3.contact);
  }
}
function ModelComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModelComponent_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Close modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ModelComponent_div_1_send_details_block_9_Template, 1, 0, "send-details-block", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ModelComponent_div_1_contact_details_block_10_Template, 1, 1, "contact-details-block", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.sendMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.contact);
  }
}
class ModelComponent {
  constructor() {
    this.showPopup = false;
    this.sendMail = false;
    this.contact = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  closePopup() {
    this.close.emit(false);
  }
}
ModelComponent.ɵfac = function ModelComponent_Factory(t) {
  return new (t || ModelComponent)();
};
ModelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
  consts: [["class", "bg-black z-50 fixed top-0 left-0 w-screen h-screen opacity-50", 4, "ngIf"], ["class", "flex items-center justify-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full", 4, "ngIf"], [1, "bg-black", "z-50", "fixed", "top-0", "left-0", "w-screen", "h-screen", "opacity-50"], [1, "flex", "items-center", "justify-center", "fixed", "top-0", "left-0", "right-0", "z-50", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full"], [1, "relative", "w-full", "max-w-md", "max-h-full"], [1, "relative", "bg-white", "rounded-lg", "shadow-modelShadow", "dark:bg-dark-1"], ["type", "button", 1, "z-50", "absolute", "top-3", "right-2.5", "text-gray-400", "bg-pageBg", "hover:text-sky-500", "rounded-full", "text-sm", "w-8", "h-8", "ml-auto", "inline-flex", "justify-center", "items-center", "dark:bg-dark-pageBg", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 14 14", 1, "w-2", "h-2"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"], [1, "sr-only"], [1, "w-full", "rounded-lg", "p-8", "sm:p-12", "border", "shadow-lg", "border-gray-200", "dark:border-slate-50/[0.06]"], [3, "close", 4, "ngIf"], [3, "contact", 4, "ngIf"], [3, "close"], [3, "contact"]],
  template: function ModelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ModelComponent_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ModelComponent_div_1_Template, 11, 2, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPopup);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPopup);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _send_details_block_send_details_block_component__WEBPACK_IMPORTED_MODULE_0__.SendDetailsBlockComponent, _contact_details_block_contact_details_block_component__WEBPACK_IMPORTED_MODULE_1__.ContactDetailsBlockComponent],
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " W");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "eb & Mobile Apps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Intuitive design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Friendliness interface");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Offline Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Admin & Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Cross Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Scalable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Modern Tech stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13)(45, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Secure Gateway");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "learn Platform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Live Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Interactive webinars");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Prerecorded courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Quizzes & Models");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Mock interviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Certification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Short answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ev-ops Automation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "CI/CD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Collaboration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Quick Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Stabliization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Flexibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Creativity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Transparency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " S");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "olution Providers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Troubleshoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Migration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Upgradation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Training ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Adoption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "/Machine Learning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Chatbot");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Prediction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Decision model");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "RPA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Rule Engine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Assistants");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Deep learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " T");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "esting automation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "99% Bug Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Role of AI in QA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Understanding Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Test Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Adoptive plugins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Load test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Integrated test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13)(45, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Sanity Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ProcessComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h6", 10)(5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " W");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "idgets/plugin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Innovation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Rebuild");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Thoughts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Connecting dots");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Plug and play");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Open source");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13)(45, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Reusable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
class ProcessComponent {
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
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
  decls: 14,
  vars: 1,
  consts: [["id", "service", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "uppercase", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "what_we_do"], [3, "options"], ["carouselSlide", ""], [1, "slide"], [1, "flex", "items-center", "flex-col", "w-full"], [1, "basis-full"], [1, "flex", "flex-col", "items-start"], [1, "text-sm/[16px]", "font-bold", "text-slate-700", "dark:text-slate-200", "inline-flex", "items-baseline"], [1, "bg-purple-600", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "flex", "flex-col", "items-start", "mt-6"], [1, "text-xs/[16px]", "text-slate-500", "dark:text-slate-400", "flex", "items-start"], [1, "mr-2"], [1, "mt-1"], [1, "bg-orange-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-yellow-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-emerald-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-rose-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-indigo-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"], [1, "bg-lime-500", "uppercase", "text-white", "dark:text-slate-200", "inline-flex", "w-8", "h-8", "items-center", "justify-center", "rounded", "text-xl", "mr-1"]],
  template: function ProcessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " What ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " we do ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "owl-carousel-o", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProcessComponent_ng_template_7_Template, 49, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProcessComponent_ng_template_8_Template, 44, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProcessComponent_ng_template_9_Template, 44, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProcessComponent_ng_template_10_Template, 39, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProcessComponent_ng_template_11_Template, 44, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProcessComponent_ng_template_12_Template, 49, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProcessComponent_ng_template_13_Template, 49, 0, "ng-template", 5);
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

/***/ 3265:
/*!***************************************************************************!*\
  !*** ./src/app/components/projects-details/projects-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsDetailsComponent: () => (/* binding */ ProjectsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);




function ProjectsDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
  }
}
function ProjectsDetailsComponent_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pre", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const details_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", details_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r3.desc);
  }
}
function ProjectsDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsDetailsComponent_div_1_Template_button_click_3_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10)(9, "div", 11)(10, "a", 12)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectsDetailsComponent_div_1_div_17_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("bg-", ctx_r1.projectDetals.color, "-600 uppercase text-white dark:text-slate-200 inline-flex w-8 h-8 items-center justify-center rounded text-xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.projectDetals.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.projectDetals.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ml-10 text-", ctx_r1.projectDetals.color, "-600 -mt-2 text-xsm font-semibold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.projectDetals.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.projectDetals.details);
  }
}
class ProjectsDetailsComponent {
  constructor() {
    this.projectDetals = {};
    this.showPopup = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  closePopup() {
    this.close.emit(false);
  }
}
ProjectsDetailsComponent.ɵfac = function ProjectsDetailsComponent_Factory(t) {
  return new (t || ProjectsDetailsComponent)();
};
ProjectsDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectsDetailsComponent,
  selectors: [["projects-details"]],
  inputs: {
    projectDetals: "projectDetals",
    showPopup: "showPopup"
  },
  outputs: {
    close: "close"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["class", "bg-black z-50 fixed top-0 left-0 w-screen h-screen opacity-50", 4, "ngIf"], ["class", "flex items-center justify-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full", 4, "ngIf"], [1, "bg-black", "z-50", "fixed", "top-0", "left-0", "w-screen", "h-screen", "opacity-50"], [1, "flex", "items-center", "justify-center", "fixed", "top-0", "left-0", "right-0", "z-50", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full"], [1, "relative", "w-full", "max-w-[65rem]", "max-h-full"], [1, "relative", "bg-white", "rounded-lg", "shadow-modelShadow", "dark:bg-dark-1"], ["type", "button", 1, "z-50", "absolute", "top-3", "right-2.5", "text-gray-400", "bg-pageBg", "hover:text-sky-500", "rounded-full", "text-sm", "w-8", "h-8", "ml-auto", "inline-flex", "justify-center", "items-center", "dark:bg-dark-pageBg", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 14 14", 1, "w-2", "h-2"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"], [1, "sr-only"], [1, "w-full", "rounded-lg", "p-4", "sm:p-12", "border", "shadow-lg", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "flex", "flex-col", "items-start", "pl-5"], ["href", "/", 1, "text-sm/[16px]", "font-bold", "text-slate-700", "dark:text-slate-200", "inline-flex", "items-baseline"], [1, "modal-body", "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-2", "mt-4", "max-h-[30rem]", "overflow-y-scroll", "scrollbar-thin", "scrollbar-thumb-gray-400", "scrollbar-track-gray-300", "p-5"], ["class", "border border-slate-900/10 dark:border-slate-50/[0.06] rounded-lg p-4 shadow shadow-md", 4, "ngFor", "ngForOf"], [1, "border", "border-slate-900/10", "dark:border-slate-50/[0.06]", "rounded-lg", "p-4", "shadow", "shadow-md"], [1, "flex", "items-baseline", "text-slate-700", "dark:text-slate-200", "-mt-px", "text-sm-11", "mb-1"], [1, "w-2", "h-2", "rounded-full", "bg-sky-500", "mr-1"], [1, "text-xsm", "text-slate-500", "dark:text-slate-400", "ml-3"]],
  template: function ProjectsDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsDetailsComponent_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsDetailsComponent_div_1_Template, 18, 10, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPopup);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPopup);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects-details/projects-details.component */ 3265);
/* harmony import */ var _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arrow-svg/arrow-svg.component */ 3835);




function ProjectsComponent_ng_container_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pre", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const details_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", details_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](details_r10.desc);
  }
}
function ProjectsComponent_ng_container_5_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_5_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const projects_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.showProjectDetails(projects_r3.detailedDesc, projects_r3.color, projects_r3.nameTitle, projects_r3.name, projects_r3.type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_ng_container_5_button_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "circle", 35)(3, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_ng_container_5_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 37);
  }
}
function ProjectsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "a", 11)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12)(11, "div", 13)(12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-arrow-svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16)(17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProjectsComponent_ng_container_5_div_19_Template, 7, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProjectsComponent_ng_container_5_button_21_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProjectsComponent_ng_container_5_button_22_Template, 5, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20)(24, "div", 21)(25, "div", 22)(26, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22)(29, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 25)(32, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21)(35, "div", 25)(36, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22)(39, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22)(42, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ProjectsComponent_ng_container_5_div_44_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const projects_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const last_r5 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("bg-", projects_r3.color, "-600 uppercase text-white dark:text-slate-200 inline-flex w-8 h-8 items-center justify-center rounded text-xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](projects_r3.nameTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", projects_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ml-10 text-", projects_r3.color, "-600 -mt-2 text-xsm font-semibold");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](projects_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", projects_r3.smallDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", projects_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", projects_r3.detailedDesc.slice(0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.projectDetailsLoading || ctx_r0.itemIndex !== i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.projectDetailsLoading && ctx_r0.itemIndex === i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "assets/images/", projects_r3.smallImgSet[0].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", projects_r3.smallImgSet[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", projects_r3.smallImgSet[0].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "assets/images/", projects_r3.smallImgSet[1].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", projects_r3.smallImgSet[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", projects_r3.smallImgSet[1].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "assets/images/", projects_r3.largeImgSet[0].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", projects_r3.largeImgSet[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", projects_r3.largeImgSet[0].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "assets/images/", projects_r3.largeImgSet[1].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", projects_r3.largeImgSet[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", projects_r3.largeImgSet[1].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "assets/images/", projects_r3.smallImgSet[2].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", projects_r3.smallImgSet[2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", projects_r3.smallImgSet[2].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "assets/images/", projects_r3.smallImgSet[3].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", projects_r3.smallImgSet[3].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", projects_r3.smallImgSet[3].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r5);
  }
}
function ProjectsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.showLoader());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "circle", 35)(3, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "shadow-light_viewmore_shadow dark:shadow-dark_viewmore_shadow": a0
  };
};
class ProjectsComponent {
  constructor() {
    this.show = false;
    this.loading = false;
    this.showPopup = false;
    this.start = 0; // Array slicing start value
    this.end = 3; // Array slicing end value
    this.projectsDetails = [];
    this.passingProjectItems = {};
    this.projectDetailsLoading = false;
    this.itemIndex = "";
    this.projectsDetails = [{
      color: 'fuchsia',
      nameTitle: 'E',
      name: '-commerce',
      url: 'i2Tym-ecommerce.com',
      type: 'Web application',
      smallDesc: 'A modern multi vendor platform to buy and sell products.',
      description: `A software platform or website application that enables online purchasing and selling of goods and services is known as
                      an eCommerce application. Customers can browse, choose, and buy items through a virtual storefront, which enables
                      businesses to exhibit their goods or services to a large audience. E-commerce software has grown in popularity as more
                      consumers favour the ease of online shopping.`,
      detailedDesc: [{
        title: 'Product Catalog',
        desc: `The application provides a comprehensive catalogue of products or services offered by the business. Each item
                     typically includes details such as images, descriptions, prices, and availability.`
      }, {
        title: 'User Accounts',
        desc: `Customers can create accounts on the platform, which allows
              them to save their preferences, view order history, and receive personalized recommendations.`
      }, {
        title: 'Shopping Cart',
        desc: `Users can add items to their virtual shopping cart as they browse the catalogue. The cart holds the selected items until the user is ready to proceed to checkout.`
      }, {
        title: 'Checkout and Payment Processing',
        desc: `The application offers a secure and streamlined checkout process. Customers enter their payment information, and the platform processes the transaction using various payment gateways.`
      }, {
        title: 'Order Management',
        desc: `The application manages the entire order fulfilment process, from order confirmation to shipment tracking and delivery notifications.`
      }, {
        title: 'Search and Filters',
        desc: `Users can search for specific products or use filters to narrow down their search results based on criteria such as price, category, brand, etc.`
      }, {
        title: 'Reviews and Ratings',
        desc: `Customers can leave reviews and ratings for products they have purchased, helping other shoppers make informed decisions.`
      }, {
        title: 'Security and Privacy',
        desc: `E-commerce applications must have robust security measures in place to protect sensitive customer information and ensure secure transactions.`
      }, {
        title: 'Responsive Design',
        desc: `The application is designed to be responsive, adapting to different devices (e.g., desktops, tablets, smartphones) to provide a seamless shopping experience.`
      }, {
        title: 'Inventory Management',
        desc: `The platform tracks and manages the availability of products, ensuring that customers are not able to purchase out-of-stock items.`
      }, {
        title: 'Marketing and Promotions',
        desc: `E-commerce applications often include marketing features such as discount codes, promotions, and personalized recommendations to encourage customer engagement and loyalty.`
      }, {
        title: 'Analytics and Reporting',
        desc: `The application collects data on user behaviour, sales, and other metrics, providing insights to improve marketing strategies and optimize the user experience.`
      }],
      smallImgSet: [{
        title: 'Dashboard - Light',
        img: 'ecom_1.png'
      }, {
        title: 'Product page - Light',
        img: 'ecom_2.png'
      }, {
        title: 'Login page - Light',
        img: 'ecom_5.png'
      }, {
        title: 'Single product - Light',
        img: 'ecom_6.png'
      }],
      largeImgSet: [{
        title: 'Dashboard full view - Light',
        img: 'ecom_3.png'
      }, {
        title: 'Product full view - Light',
        img: 'ecom_4.png'
      }]
    }, {
      color: 'teal',
      nameTitle: 'E',
      name: '-Learning',
      url: 'i2Tym-elearning.com',
      type: 'Web application',
      smallDesc: 'A creative live Learning Management system and collaboration platform.',
      description: `This is an eLearning application, also known as an online learning platform or Learning Management System 
                      (LMS), which is a software platform that facilitates the delivery, management, and tracking of educational content and 
                      courses over the internet. It enables individuals, students, employees, or learners of all ages to access educational 
                      resources and participate in various online learning activities. Elearning applications have become increasingly popular 
                      due to their flexibility, accessibility, and scalability.
                      `,
      detailedDesc: [{
        title: 'Course Creation and Management',
        desc: `The application allows instructors or content creators to design and organize courses, including lessons, modules, assessments, and multimedia content.`
      }, {
        title: 'User Registration and Authentication',
        desc: `Learners can create accounts on the platform, providing them with access to the courses they have enrolled in.`
      }, {
        title: 'Course Enrollment',
        desc: `Learners can browse through the available courses and enrol in the ones they are interested in, granting them access to the course materials.`
      }, {
        title: 'Multimedia Content Support',
        desc: `Elearning applications support various content formats, such as video lectures, slide presentations, interactive quizzes, audio files, and downloadable resources.`
      }, {
        title: 'Assessment and Quizzes',
        desc: `The platform often includes tools for creating and managing quizzes and assessments, allowing instructors to evaluate learners' progress and knowledge.`
      }, {
        title: 'Progress Tracking and Reporting',
        desc: `Elearning applications track learners' progress throughout the course, providing insights into completed activities, grades, and overall performance.`
      }, {
        title: 'Discussion Forums and Communication',
        desc: `Many eLearning platforms offer discussion forums, chat features, or messaging systems to facilitate learner-to-learner and learner-to-instructor interactions.`
      }, {
        title: 'Mobile Compatibility',
        desc: `Elearning applications are often designed to be accessible on various devices, including desktop computers, laptops, tablets, and smartphones.`
      }, {
        title: 'Gamification and Badges',
        desc: `Some platforms incorporate gamification elements, such as badges, points, or leaderboards, to motivate learners and enhance engagement.`
      }, {
        title: 'Analytics and Insights',
        desc: `Elearning applications collect data on learner behaviour, course performance, and engagement metrics, providing instructors and administrators with valuable insights for continuous improvement.`
      }, {
        title: 'Integration with Learning Tools and Services',
        desc: `Some eLearning applications can integrate with external tools and services, such as virtual classrooms, video conferencing platforms, and external content repositories.`
      }, {
        title: 'Security and Privacy',
        desc: `Elearning platforms prioritize security measures to protect sensitive learner data and ensure a safe learning environment.`
      }],
      smallImgSet: [{
        title: 'Tech stack page - Dark',
        img: '1.png'
      }, {
        title: 'Tech stack page - Light',
        img: '2.png'
      }, {
        title: 'Tech stack page - Light',
        img: '2.png'
      }, {
        title: 'Tech stack page - Dark',
        img: '1.png'
      }],
      largeImgSet: [{
        title: 'My dashboard full view - Dark',
        img: '8.png'
      }, {
        title: 'My dashboard full view - Light',
        img: '9.png'
      }]
    }, {
      color: 'lime',
      nameTitle: 'E',
      name: '-Billing',
      subName: "inventory and billing management",
      url: 'i2Tym-billing.com',
      type: 'Web application',
      smallDesc: 'A single point application to manage billing and inventory.',
      description: `Inventory and billing software is a type of business software that combines inventory management and billing 
                      functionalities into a single integrated system. It is designed to help businesses efficiently manage their inventory levels,
                      track product stock, and streamline the billing and invoicing processes. This software is commonly used by retail stores, 
                      wholesalers, manufacturers, 
                      and other businesses that deal with physical goods and need to keep track of their inventory and sales.
                      `,
      detailedDesc: [{
        title: 'Inventory Management',
        desc: `The software allows businesses to maintain a detailed database of their products, including item descriptions, stock quantities, pricing, and supplier information. It tracks the movement of goods from purchase to sale, keeping the inventory up to date in real-time.`
      }, {
        title: 'Stock Control',
        desc: `The software helps optimize stock levels by providing alerts when inventory levels are low, enabling businesses to avoid stockouts and maintain adequate inventory levels to meet customer demand.`
      }, {
        title: 'Purchase Order Management',
        desc: `The software facilitates the creation and management of purchase orders to replenish stock from suppliers. It helps track the status of orders and manage the procurement process.`
      }, {
        title: 'Sales and Invoicing',
        desc: `The software enables businesses to create and manage sales transactions, generate invoices, and process customer payments. It can handle different payment methods and may also include automated invoicing features.`
      }, {
        title: 'Barcode Scanning',
        desc: `Many inventory and billing software systems support barcode scanning, making it easier to update inventory levels and process sales transactions accurately and efficiently.`
      }, {
        title: 'Reporting and Analytics',
        desc: `The software provides detailed reports and analytics on inventory levels, sales performance, profitability, and other key metrics. This data helps businesses make informed decisions and identify trends and opportunities.`
      }, {
        title: 'Integration with Point of Sale (POS) Systems',
        desc: `For businesses with physical retail locations, inventory and billing software often integrates with POS systems to streamline the sales process and update inventory in real time.`
      }, {
        title: 'Multi-Location Support',
        desc: `Some inventory and billing software can handle multiple store locations, warehouses, or distribution centers, allowing businesses to manage inventory across different locations.`
      }, {
        title: 'Customer Management',
        desc: `The software may include features to manage customer information, track purchase history, and offer loyalty programs to enhance customer relationships.`
      }, {
        title: 'Tax Calculation',
        desc: `The software automates tax calculations based on the applicable tax rates for each transaction, ensuring accurate billing and compliance with tax regulations.`
      }, {
        title: 'Security and Data Protection',
        desc: `Inventory and billing software typically have security measures in place to protect sensitive business and customer data.`
      }],
      smallImgSet: [{
        title: 'Tech stack page - Dark',
        img: '1.png'
      }, {
        title: 'Tech stack page - Light',
        img: '2.png'
      }, {
        title: 'Tech stack page - Light',
        img: '2.png'
      }, {
        title: 'Tech stack page - Dark',
        img: '1.png'
      }],
      largeImgSet: [{
        title: 'My dashboard full view - Dark',
        img: '8.png'
      }, {
        title: 'My dashboard full view - Light',
        img: '9.png'
      }]
    }, {
      color: 'yellow',
      nameTitle: 'F',
      name: '-leet management',
      subName: "",
      url: 'i2Tym-fleet-management.com',
      type: 'Mobile application',
      smallDesc: 'This mobile app used for the vehicle owners.',
      description: `A fleet management application is a software platform designed to help businesses and 
                    organizations efficiently manage and monitor their fleet of vehicles. It provides a centralized system 
                    for tracking vehicle location, monitoring vehicle health and performance, optimizing routes, managing maintenance schedules, 
                    and improving overall fleet operations. Fleet management applications are commonly used by companies with large fleets of vehicles, 
                    such as transportation and logistics companies, delivery services, and public transportation agencies.
                      `,
      detailedDesc: [{
        title: 'GPS Tracking',
        desc: `The application uses GPS technology to track the real-time location of each vehicle in the fleet. This feature allows fleet managers to monitor vehicle movements and ensure they are on the right routes.`
      }, {
        title: 'Vehicle Health Monitoring',
        desc: `Fleet management applications can collect and analyze data from the vehicles' onboard diagnostic systems (OBD-II). 
                    This data helps monitor the health and performance of each vehicle, including fuel consumption, engine diagnostics, and maintenance needs.`
      }, {
        title: 'Route Optimization',
        desc: `The application can analyze various factors, such as traffic conditions, distance, and delivery schedules, to optimize routes for better fuel efficiency and timely deliveries.`
      }, {
        title: 'Driver Management',
        desc: `Fleet management applications may include features to track driver behavior, such as speeding, harsh braking, and idling, to promote safer driving practices and reduce fuel consumption.`
      }, {
        title: 'Fuel Management',
        desc: `The application can monitor fuel usage and identify potential fuel theft or inefficiencies. This helps businesses reduce fuel costs and improve fuel economy.`
      }, {
        title: 'Maintenance Scheduling',
        desc: `Fleet management applications can schedule and track vehicle maintenance tasks, including regular servicing, inspections, and repairs, ensuring vehicles are well-maintained and in good working condition.`
      }, {
        title: 'Alerts and Notifications',
        desc: `The application can send real-time alerts and notifications to fleet managers and drivers for critical events, such as vehicle breakdowns, maintenance reminders, and unauthorized vehicle usage.`
      }, {
        title: 'Geofencing',
        desc: `Fleet management applications may support geofencing, allowing fleet managers to define virtual boundaries for vehicles. When a vehicle enters or exits these boundaries, the system triggers alerts.`
      }, {
        title: 'Compliance and Reporting',
        desc: `The application can help with regulatory compliance by generating reports on driver hours, vehicle inspections, and other compliance-related data.`
      }, {
        title: 'Integration with Telematics and IoT Devices',
        desc: `Fleet management applications often integrate with telematics devices and Internet of Things (IoT) sensors installed in vehicles to gather and analyze data in real-time.`
      }, {
        title: 'Asset Tracking:',
        desc: `Some fleet management applications support the tracking of other assets beyond vehicles, such as trailers and containers.`
      }, {
        title: 'Data Analytics',
        desc: `Fleet management applications collect vast amounts of data, and data analytics tools can provide insights and patterns that help optimize fleet performance and make data-driven decisions.`
      }],
      smallImgSet: [{
        title: 'Tech stack page - Dark',
        img: '1.png'
      }, {
        title: 'Tech stack page - Light',
        img: '2.png'
      }, {
        title: 'Tech stack page - Light',
        img: '2.png'
      }, {
        title: 'Tech stack page - Dark',
        img: '1.png'
      }],
      largeImgSet: [{
        title: 'My dashboard full view - Dark',
        img: '8.png'
      }, {
        title: 'My dashboard full view - Light',
        img: '9.png'
      }]
    }];
  }
  showLoader() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.end = this.projectsDetails.length;
      this.show = true;
    }, 2000);
  }
  showProjectDetails(proDetails, color, title, name, type) {
    this.projectDetailsLoading = true;
    this.itemIndex = this.projectsDetails.map(res => res.name).indexOf(name);
    setTimeout(() => {
      this.passingProjectItems = {
        details: proDetails,
        color: color,
        title: title,
        name: name,
        type: type
      };
      this.showPopup = true;
      this.itemIndex = "";
    }, 2000);
  }
  closePopup(data) {
    this.projectDetailsLoading = data;
    this.showPopup = data;
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)();
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 11,
  vars: 12,
  consts: [["id", "projects", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "uppercase", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [4, "ngFor", "ngForOf"], [1, "w-full", "inline-flex", "items-center", "justify-center", "mt-4", 3, "ngClass"], ["class", "text-sky-500 bg-transparent border hover:text-white focus:outline-none rounded-full text-xs px-8 py-2.5 text-center hover:bg-sky-500 border-sky-500 dark:text-sky-400 dark:hover:text-white focus:none", 3, "click", 4, "ngIf"], ["type", "button", "class", "inline-flex cursor-not-allowed items-center rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-primary-400", "disabled", "", 4, "ngIf"], [3, "showPopup", "projectDetals", "close"], [1, "flex", "mt-8", "flex-wrap", "justify-between", "items-start"], [1, "lg:basis-1/3", "basis-full"], [1, "flex", "flex-col", "items-start"], ["href", "/", 1, "text-sm/[16px]", "font-bold", "text-slate-700", "dark:text-slate-200", "inline-flex", "items-baseline"], [1, "mt-6"], [1, "text-xs/[16px]", "flex", "items-start"], [1, "mr-2"], [1, "text-slate-700", "dark:text-slate-200", "mt-1"], [1, "ml-7", "mt-1.5", "text-sm-11"], [1, "text-slate-500", "dark:text-slate-400"], ["class", "my-3 ml-7", 4, "ngFor", "ngForOf"], [1, "w-full", "inline-flex", "items-center", "justify-center", "my-6", "shadow-light_readmore_shadow", "dark:shadow-dark_readmore_shadow"], [1, "lg:basis-2/3", "basis-full", "-m-1", "flex", "flex-wrap", "justify-center", "lg:-m-2"], [1, "flex", "lg:w-2/5", "w-2/4", "flex-wrap"], [1, "w-1/2", "p-1", "md:p-2"], ["data-lightbox", "roadtrip", 3, "href", "title"], ["alt", "gallery", 1, "block", "h-full", "w-full", "rounded-lg", "object-cover", "object-center", "border-4", "shadow", "shadow-3xl", "border-gray-200", "dark:border-slate-50/[0.06]", 3, "src"], [1, "w-full", "p-1", "md:p-2"], ["class", "my-12 w-full h-px dark:bg-slate-700 bg-slate-200", 4, "ngIf"], [1, "my-3", "ml-7"], [1, "mb-2"], [1, "flex", "items-baseline", "whitespace-nowrap", "text-slate-700", "dark:text-slate-200", "-mt-px", "text-sm-11"], [1, "w-2", "h-2", "rounded-full", "bg-sky-500", "mr-1"], [1, "text-xsm", "text-slate-500", "dark:text-slate-400", "ml-3"], [1, "text-sky-500", "bg-transparent", "border", "hover:text-white", "focus:outline-none", "rounded-full", "text-xs", "px-8", "py-2.5", "text-center", "hover:bg-sky-500", "border-sky-500", "dark:text-sky-400", "dark:hover:text-white", "focus:none", 3, "click"], ["type", "button", "disabled", "", 1, "inline-flex", "cursor-not-allowed", "items-center", "rounded-md", "bg-sky-500", "px-4", "py-2", "text-sm", "font-semibold", "leading-6", "text-white", "shadow", "transition", "duration-150", "ease-in-out", "hover:bg-primary-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "-ml-1", "mr-3", "h-5", "w-5", "animate-spin", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "my-12", "w-full", "h-px", "dark:bg-slate-700", "bg-slate-200"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Our Latest ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProjectsComponent_ng_container_5_Template, 45, 33, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProjectsComponent_button_8_Template, 2, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProjectsComponent_button_9_Template, 5, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "projects-details", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function ProjectsComponent_Template_projects_details_close_10_listener($event) {
        return ctx.closePopup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 6, ctx.projectsDetails, ctx.start, ctx.end));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, !ctx.show));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.show && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showPopup", ctx.showPopup)("projectDetals", ctx.passingProjectItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsDetailsComponent, _arrow_svg_arrow_svg_component__WEBPACK_IMPORTED_MODULE_1__.ArrowSVGComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1804:
/*!*******************************************************************************!*\
  !*** ./src/app/components/send-details-block/send-details-block.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendDetailsBlockComponent: () => (/* binding */ SendDetailsBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _success_party_model_success_party_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../success-party-model/success-party-model.component */ 2115);
/* harmony import */ var src_app_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/apiService */ 6698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var _error_component_error_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-component/error-component.component */ 6910);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu-service.service */ 240);














function SendDetailsBlockComponent_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Your name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_div_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Your name should be 3 character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SendDetailsBlockComponent_div_10_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SendDetailsBlockComponent_div_10_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.userDataFormControls.userName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.userDataFormControls.userName.errors.minlength);
  }
}
function SendDetailsBlockComponent_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Mail address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Email must be a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SendDetailsBlockComponent_div_13_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SendDetailsBlockComponent_div_13_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.userDataFormControls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.userDataFormControls.email.errors.email);
  }
}
function SendDetailsBlockComponent_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contact number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contact number should be 10 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SendDetailsBlockComponent_div_16_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SendDetailsBlockComponent_div_16_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.userDataFormControls.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.userDataFormControls.phone.errors.minlength);
  }
}
function SendDetailsBlockComponent_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Your message is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SendDetailsBlockComponent_div_19_span_1_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.userDataFormControls.message.errors.required);
  }
}
function SendDetailsBlockComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Send Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SendDetailsBlockComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Sending Message... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "circle", 25)(5, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function SendDetailsBlockComponent_success_party_model_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "success-party-model");
  }
}
function SendDetailsBlockComponent_error_component_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "error-component", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeError", function SendDetailsBlockComponent_error_component_25_Template_error_component_closeError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.closeErrorComp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class SendDetailsBlockComponent {
  constructor(formBuilder, menuService, apiSevice) {
    this.formBuilder = formBuilder;
    this.menuService = menuService;
    this.apiSevice = apiSevice;
    this.submitted = false;
    this.isReady = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.isError = false;
  }
  ngOnInit() {
    this.loadForm();
  }
  loadForm() {
    this.userDataForm = this.formBuilder.group({
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]],
      phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10)]],
      message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get userDataFormControls() {
    return this.userDataForm.controls;
  }
  sendUserData() {
    this.submitted = true;
    if (this.userDataForm.invalid) {
      return;
    }
    let updateData = {
      email: this.userDataForm.value.email,
      name: this.userDataForm.value.userName,
      phone: this.userDataForm.value.phone,
      query: this.userDataForm.value.message
    };
    this.isReady = true;
    this.apiSevice.post(updateData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(2000)).subscribe(res => {
      console.log('jjjjjjjjjjjjjjjjjj');
      if (res.response.status == 'success') {
        this.isReady = false;
        this.userDataForm.reset();
        this.submitted = false;
        this.close.emit(false);
        this.menuService.contactDetailsSubmitted = true;
      }
    }, error => {
      setTimeout(() => {
        this.isReady = false;
        this.submitted = false;
        this.isError = true;
      }, 2000);
    });
    console.log(updateData, 'userEditForm.value');
  }
  closeErrorComp(data) {
    this.isError = data;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
SendDetailsBlockComponent.ɵfac = function SendDetailsBlockComponent_Factory(t) {
  return new (t || SendDetailsBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_3__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_apiService__WEBPACK_IMPORTED_MODULE_1__.ApiService));
};
SendDetailsBlockComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SendDetailsBlockComponent,
  selectors: [["send-details-block"]],
  outputs: {
    close: "close"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_apiService__WEBPACK_IMPORTED_MODULE_1__.ApiService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 26,
  vars: 9,
  consts: [[1, "text-lg", "leading-tight", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "text-xs/[16px]", "text-slate-500", "dark:text-slate-400", "text-xmd"], ["novalidate", "novalidate", 1, "mt-5", 3, "formGroup"], [1, "mb-6"], ["type", "text", "placeholder", "Your Name", "formControlName", "userName", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["class", "absolute w-100 flex items-center justify-start", 4, "ngIf"], ["type", "email", "placeholder", "Your Email", "formControlName", "email", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["type", "text", "placeholder", "Your Phone", "formControlName", "phone", "maxlength", "10", "oninput", "this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*?)\\..*/g, '$1');", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], [1, "mb-6", "relative"], ["rows", "6", "placeholder", "Your Message", "formControlName", "message", 1, "text-sky-500", "bg-white", "dark:bg-dark-1", "border-slate-900/10", "dark:border-dark-border", "focus:border-primary", "w-full", "resize-none", "rounded", "border", "py-3", "px-[14px]", "text-xs", "outline-none", "focus-visible:shadow-none"], ["class", "absolute -bottom-2.5 w-100 flex items-center justify-start", 4, "ngIf"], ["type", "submit", 1, "bg-sky-500", "border", "text-white", "border-primary", "w-full", "rounded", "border", "p-3", "hover:bg-sky-600", "border-sky-500", "dark:hover:text-white", "transition", "hover:bg-opacity-90", 3, "click"], [4, "ngIf"], ["class", "inline-flex", 4, "ngIf"], [3, "closeError", 4, "ngIf"], [1, "absolute", "w-100", "flex", "items-center", "justify-start"], ["class", "text-xsm pt-0.5 pl-0.5 text-red-500", 4, "ngIf"], [1, "text-xsm", "pt-0.5", "pl-0.5", "text-red-500"], [1, "absolute", "-bottom-2.5", "w-100", "flex", "items-center", "justify-start"], ["class", "text-xsm pl-0.5 text-red-500", 4, "ngIf"], [1, "text-xsm", "pl-0.5", "text-red-500"], [1, "inline-flex"], [1, "ml-4"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "-ml-1", "mr-3", "h-5", "w-5", "animate-spin", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [3, "closeError"]],
  template: function SendDetailsBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h6", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Want to get answers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " faster? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Fill out our short form brief and we are contact you soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 3)(8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SendDetailsBlockComponent_div_10_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SendDetailsBlockComponent_div_13_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SendDetailsBlockComponent_div_16_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "textarea", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SendDetailsBlockComponent_div_19_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div")(21, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SendDetailsBlockComponent_Template_button_click_21_listener() {
        return ctx.sendUserData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SendDetailsBlockComponent_span_22_Template, 2, 0, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SendDetailsBlockComponent_span_23_Template, 6, 0, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SendDetailsBlockComponent_success_party_model_24_Template, 1, 0, "success-party-model", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, SendDetailsBlockComponent_error_component_25_Template, 1, 0, "error-component", 15);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.userDataForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userDataFormControls.userName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userDataFormControls.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userDataFormControls.phone.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userDataFormControls.message.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuService.contactDetailsSubmitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isError);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _success_party_model_success_party_model_component__WEBPACK_IMPORTED_MODULE_0__.SuccessPartyModelComponent, _error_component_error_component_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2115:
/*!*********************************************************************************!*\
  !*** ./src/app/components/success-party-model/success-party-model.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessPartyModelComponent: () => (/* binding */ SuccessPartyModelComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas-confetti */ 4592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/menu-service.service */ 240);




class SuccessPartyModelComponent {
  constructor(menuService) {
    this.menuService = menuService;
    this.canvas = document.getElementById('custom-canvas');
    const confettiHandler = canvas_confetti__WEBPACK_IMPORTED_MODULE_0__.create(this.canvas, {
      resize: true
    });
    confettiHandler({
      angle: 90,
      particleCount: 250,
      spread: 100
    });
  }
  closePopup(closeValue) {
    this.menuService.contactDetailsSubmitted = closeValue;
  }
}
SuccessPartyModelComponent.ɵfac = function SuccessPartyModelComponent_Factory(t) {
  return new (t || SuccessPartyModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_menu_service_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
SuccessPartyModelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SuccessPartyModelComponent,
  selectors: [["success-party-model"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 26,
  vars: 0,
  consts: [[1, "bg-black", "z-50", "fixed", "top-0", "left-0", "w-screen", "h-screen", "opacity-50"], [1, "flex", "items-center", "justify-center", "fixed", "top-0", "left-0", "right-0", "z-50", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full"], [1, "relative", "w-full", "max-w-md", "max-h-full"], [1, "relative", "bg-white", "rounded-lg", "shadow-modelShadow", "dark:bg-dark-1"], ["type", "button", 1, "z-50", "absolute", "top-3", "right-2.5", "text-gray-400", "bg-pageBg", "hover:text-sky-500", "rounded-full", "text-sm", "w-8", "h-8", "ml-auto", "inline-flex", "justify-center", "items-center", "dark:bg-dark-pageBg", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 14 14", 1, "w-2", "h-2"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"], [1, "sr-only"], [1, "w-full", "rounded-lg", "p-8", "sm:p-12", "border", "shadow-lg", "border-gray-200", "dark:border-slate-50/[0.06]"], [1, "flex", "flex-col", "items-center"], ["id", "custom-canvas"], [1, "success-icon", "inline-flex"], [1, "success-circular-line"], [1, "success-line-tip"], [1, "success-line-long"], [1, "success-ring"], [1, "success-fix"], [1, "circular-line-right"], [1, "overflow-auto", "font-medium", "text-xmd", "my-6", "leading-5", "text-center", "flex", "flex-col", "justify-center", "text-slate-500", "dark:text-slate-400"], [1, "text-lg"], [1, "w-full", "inline-flex", "items-center", "justify-center"], [1, "bg-sky-500", "border", "text-white", "border-primary", "w-1/5", "rounded", "border", "p-3", "hover:bg-sky-600", "border-sky-500", "dark:hover:text-white", "transition", "hover:bg-opacity-90", 3, "click"]],
  template: function SuccessPartyModelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessPartyModelComponent_Template_button_click_4_listener() {
        return ctx.closePopup(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Close modal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 12)(14, "span", 13)(15, "span", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 18)(20, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Thanks For Contacting Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " We will contact you shortly. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20)(24, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessPartyModelComponent_Template_button_click_24_listener() {
        return ctx.closePopup(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  styles: [".success-icon[_ngcontent-%COMP%] {\n  color: #50cd89;\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  border: 0.25em solid #50cd89;\n  border-radius: 50%;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.success-icon[_ngcontent-%COMP%]   .success-circular-line[_ngcontent-%COMP%] {\n  top: -0.4375em;\n  left: -2.0635em;\n  transform: rotate(-45deg);\n  transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n}\n.success-icon[_ngcontent-%COMP%]   .success-line-tip[_ngcontent-%COMP%] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  transform: rotate(45deg);\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  background-color: #50cd89;\n  border-radius: 0.125em;\n  animation: _ngcontent-%COMP%_animate-success-small 0.75s;\n  -webkit-animation: _ngcontent-%COMP%_animate-success-small 0.75s;\n}\n.success-icon[_ngcontent-%COMP%]   .success-line-long[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animate-success 0.75s;\n  -webkit-animation: _ngcontent-%COMP%_animate-success 0.75s;\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  transform: rotate(-45deg);\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #50cd89;\n}\n.success-icon[_ngcontent-%COMP%]   .success-ring[_ngcontent-%COMP%] {\n  border-color: rgba(80, 205, 137, 0.3);\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\n.success-icon[_ngcontent-%COMP%]   .success-fix[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  transform: rotate(-45deg);\n}\n.success-icon[_ngcontent-%COMP%]   .circular-line-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotate-success-circular-line 4.25s ease-in;\n  -webkit-animation: _ngcontent-%COMP%_rotate-success-circular-line 4.25s ease-in;\n  top: -0.6875em;\n  left: 1.875em;\n  transform: rotate(-45deg);\n  transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n}\n@keyframes _ngcontent-%COMP%_animate-success {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes _ngcontent-%COMP%_rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_animate-success-small {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWNjZXNzLXBhcnR5LW1vZGVsL3N1Y2Nlc3MtcGFydHktbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFFUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBQUFSO0FBRUk7RUFDSSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQVI7QUFFSTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUVJO0VBQ0kscURBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUFSO0FBNkJFO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUFKTjtFQU9FO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VBTE47RUFPRTtJQUNJLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFQUxOO0VBT0U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFMTjtBQUNGO0FBdUJFO0VBQ0U7SUFDSSx5QkFBQTtFQVBOO0VBU0U7SUFDSSx5QkFBQTtFQVBOO0VBU0U7SUFDSSwwQkFBQTtFQVBOO0VBU0U7SUFDSSwwQkFBQTtFQVBOO0FBQ0Y7QUFxQ0U7RUFDRTtJQUNJLGFBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFQVJOO0VBVUU7SUFDSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFFBQUE7RUFSTjtFQVVFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBUk47RUFVRTtJQUNJLFFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQVJOO0VBVUU7SUFDSSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFSTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiICAuc3VjY2Vzcy1pY29uIHtcclxuICAgIGNvbG9yOiAjNTBjZDg5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkICM1MGNkODk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogNWVtO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC5zdWNjZXNzLWNpcmN1bGFyLWxpbmUge1xyXG4gICAgICAgIHRvcDogLTAuNDM3NWVtO1xyXG4gICAgICAgIGxlZnQ6IC0yLjA2MzVlbTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41ZW0gMCAwIDcuNWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMy43NWVtO1xyXG4gICAgICAgIGhlaWdodDogNy41ZW07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWNjZXNzLWxpbmUtdGlwIHtcclxuICAgICAgICB0b3A6IDIuODc1ZW07XHJcbiAgICAgICAgbGVmdDogMC44MTI1ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuNTYyNWVtO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBoZWlnaHQ6IDAuMzEyNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MGNkODk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcclxuICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtc3VjY2Vzcy1zbWFsbCAwLjc1cztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1zdWNjZXNzLXNtYWxsIDAuNzVzO1xyXG4gICAgfVxyXG4gICAgLnN1Y2Nlc3MtbGluZS1sb25nIHtcclxuICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtc3VjY2VzcyAwLjc1cztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1zdWNjZXNzIDAuNzVzO1xyXG4gICAgICAgIHRvcDogMi4zNzVlbTtcclxuICAgICAgICByaWdodDogMC41ZW07XHJcbiAgICAgICAgd2lkdGg6IDIuOTM3NWVtO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjMxMjVlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MGNkODk7XHJcbiAgICB9XHJcbiAgICAuc3VjY2Vzcy1yaW5nIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoODAsMjA1LDEzNywgMC4zKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB0b3A6IC0wLjI1ZW07XHJcbiAgICAgICAgbGVmdDogLTAuMjVlbTtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgxNjUsIDIyMCwgMTM0LCAwLjMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5zdWNjZXNzLWZpeCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdG9wOiAwLjVlbTtcclxuICAgICAgICBsZWZ0OiAxLjYyNWVtO1xyXG4gICAgICAgIHdpZHRoOiAwLjQzNzVlbTtcclxuICAgICAgICBoZWlnaHQ6IDUuNjI1ZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuICAgIC5jaXJjdWxhci1saW5lLXJpZ2h0IHtcclxuICAgICAgICBhbmltYXRpb246IHJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRvcDogLTAuNjg3NWVtO1xyXG4gICAgICAgIGxlZnQ6IDEuODc1ZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDMuNzVlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzLjc1ZW07XHJcbiAgICAgICAgaGVpZ2h0OiA3LjVlbTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXN1Y2Nlc3Mge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRvcDogMy4zNzVlbTtcclxuICAgICAgICByaWdodDogMi44NzVlbTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgNjUlIHtcclxuICAgICAgICB0b3A6IDMuMzc1ZW07XHJcbiAgICAgICAgcmlnaHQ6IDIuODc1ZW07XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICA4NCUge1xyXG4gICAgICAgIHRvcDogMi4xODc1ZW07XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDMuNDM3NWVtO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAyLjM3NWVtO1xyXG4gICAgICAgIHJpZ2h0OiAwLjVlbTtcclxuICAgICAgICB3aWR0aDogMi45Mzc1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2VzcyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdG9wOiAzLjM3NWVtO1xyXG4gICAgICAgIHJpZ2h0OiAyLjg3NWVtO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA2NSUge1xyXG4gICAgICAgIHRvcDogMy4zNzVlbTtcclxuICAgICAgICByaWdodDogMi44NzVlbTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxuICAgIDg0JSB7XHJcbiAgICAgICAgdG9wOiAyLjE4NzVlbTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMy40Mzc1ZW07XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0b3A6IDIuMzc1ZW07XHJcbiAgICAgICAgcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAyLjkzNzVlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgNSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbiAgICAxMiUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbiAgICA1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuICAgIDEyJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2Vzcy1zbWFsbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdG9wOiAxLjE4NzVlbTtcclxuICAgICAgICBsZWZ0OiAwLjA2MjVlbTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxuICAgIDU0JSB7XHJcbiAgICAgICAgdG9wOiAxLjA2MjVlbTtcclxuICAgICAgICBsZWZ0OiAwLjEyNWVtO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICB0b3A6IDIuMTg3NWVtO1xyXG4gICAgICAgIGxlZnQ6IC0wLjM3NWVtO1xyXG4gICAgICAgIHdpZHRoOiAzLjEyNWVtO1xyXG4gICAgfVxyXG4gICAgODQlIHtcclxuICAgICAgICB0b3A6IDNlbTtcclxuICAgICAgICBsZWZ0OiAxLjMxMjVlbTtcclxuICAgICAgICB3aWR0aDogMS4wNjI1ZW07XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0b3A6IDIuODEyNWVtO1xyXG4gICAgICAgIGxlZnQ6IDAuODEyNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjU2MjVlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZS1zdWNjZXNzLXNtYWxsIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0b3A6IDEuMTg3NWVtO1xyXG4gICAgICAgIGxlZnQ6IDAuMDYyNWVtO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgNTQlIHtcclxuICAgICAgICB0b3A6IDEuMDYyNWVtO1xyXG4gICAgICAgIGxlZnQ6IDAuMTI1ZW07XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICAgIHRvcDogMi4xODc1ZW07XHJcbiAgICAgICAgbGVmdDogLTAuMzc1ZW07XHJcbiAgICAgICAgd2lkdGg6IDMuMTI1ZW07XHJcbiAgICB9XHJcbiAgICA4NCUge1xyXG4gICAgICAgIHRvcDogM2VtO1xyXG4gICAgICAgIGxlZnQ6IDEuMzEyNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjA2MjVlbTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRvcDogMi44MTI1ZW07XHJcbiAgICAgICAgbGVmdDogMC44MTI1ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuNTYyNWVtO1xyXG4gICAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I had a fantastic experience with i2Tym. The trainers were incredibly knowledgeable and supportive throughout the entire course. The curriculum was well-structured, and the practical exercises helped me gain hands-on experience. Thanks to the training I received here, I was able to apply my new skills directly in my job, and it has significantly boosted my career prospects. I highly recommend i2tym to anyone looking to upskill and excel in their professional journey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12)(9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14)(12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Selva Kumar M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "IT Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " As a startup, we needed a website that would not only establish our online presence but also set us apart from the competition.I2tym delivered beyond our expectations. They crafted a visually stunning and mobile-responsive website that effectively communicates our brand story. They were receptive to our ideas and provided valuable insights to optimize the user experience. Thanks to I2tym, we now have a website that is driving growth and attracting new customers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12)(9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14)(12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Medical Representative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Working with i2tym was an absolute pleasure. From the initial consultation to the final delivery, they demonstrated a high level of professionalism and expertise. They took the time to understand our unique requirements and translated them into a visually stunning and user-friendly website. The team was responsive and communicative throughout the entire process, ensuring that our feedback was incorporated effectively. I highly recommend i2tym to anyone in need of top-notch web development services.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12)(9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14)(12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Justin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Working with I2tym has been an absolute game-changer for our organization. Their in-depth knowledge of software systems and strategic approach to problem-solving have significantly improved our efficiency and productivity. They took the time to understand our specific needs and challenges, and their tailored solutions have streamlined our processes and saved us valuable time and resources. I2tym is a true expert in their field, and we wholeheartedly recommend their services to any company seeking a top-notch software consultant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12)(9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14)(12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "James");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Technical officer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We were facing several roadblocks in implementing a new software system until we brought in I2tym. Their expertise and guidance were instrumental in successfully executing the project. They provided valuable insights, identified potential pitfalls, and helped us make informed decisions. Throughout the engagement, I2tym displayed professionalism and dedication, going above and beyond to ensure we achieved our objectives. We couldn't have asked for a better software consultant, and we are grateful for their contribution to our success.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12)(9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14)(12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bijesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Staff officer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function TestimonialsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "As a startup, we needed expert guidance to select the right software tools to support our business operations. I2tym came highly recommended, and they did not disappoint. They patiently listened to our requirements and recommended the ideal software solutions to align with our long-term goals. Their implementation process was smooth and efficient, and they provided comprehensive training to our team, ensuring a seamless transition. Thanks to I2tym, we have a robust software foundation that can scale as we grow. We are grateful for their expertise and highly satisfied with the results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12)(9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14)(12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ashwath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
class TestimonialsComponent {
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
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
  decls: 13,
  vars: 1,
  consts: [[1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "what_we_do"], [3, "options"], ["carouselSlide", ""], [1, "slide", "h-full"], [1, "w-full", "h-full"], [1, "h-full", "rounded", "flex", "flex-col", "justify-between"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 975.036 975.036", 1, "block", "w-5", "h-5", "text-sky-500", "mb-4"], ["d", "M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"], [1, "leading-relaxed", "mb-6", "text-slate-500", "text-sm13", "dark:text-slate-400"], [1, "inline-flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-emerald-500", "flex-shrink-0"], [1, "flex-grow", "flex", "flex-col", "pl-4"], [1, "text-xmd", "text-slate-700", "dark:text-slate-200"], [1, "text-emerald-500", "font-semibold", "uppercase", "text-sm"], [1, "leading-relaxed", "mb-6", "text-sm13", "text-slate-500", "dark:text-slate-400"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-cyan-500", "flex-shrink-0"], [1, "text-cyan-500", "font-semibold", "uppercase", "text-sm"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-violet-500", "flex-shrink-0"], [1, "text-violet-500", "font-semibold", "uppercase", "text-sm"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-fuchsia-500", "flex-shrink-0"], [1, "text-fuchsia-500", "font-semibold", "uppercase", "text-sm"], [1, "leading-relaxed", "text-sm13", "mb-6", "text-slate-500", "dark:text-slate-400"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-orange-500", "flex-shrink-0"], [1, "text-orange-500", "font-semibold", "uppercase", "text-sm"], [1, "w-12", "h-12", "rounded-full", "inline-flex", "text-lg", "text-white", "dark:text-slate-200", "uppercase", "font-bold", "items-center", "justify-center", "bg-indigo-500", "flex-shrink-0"], [1, "text-indigo-500", "font-semibold", "uppercase", "text-sm"]],
  template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Testimonials ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "owl-carousel-o", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestimonialsComponent_ng_template_7_Template, 16, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestimonialsComponent_ng_template_8_Template, 16, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestimonialsComponent_ng_template_9_Template, 16, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestimonialsComponent_ng_template_10_Template, 16, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestimonialsComponent_ng_template_11_Template, 16, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TestimonialsComponent_ng_template_12_Template, 16, 0, "ng-template", 5);
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
  decls: 114,
  vars: 2,
  consts: [["id", "about", 1, "mx-auto", "mt-8", "px-6", "md:px-8", "lg:px-16", "xl:px-30", "2xl:px-55"], [1, "text-3xl", "leading-tight", "font-bold", "uppercase", "text-slate-700", "dark:text-slate-200"], [1, "text-sky-500"], [1, "mt-8", "grid", "gap-4", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3"], [1, "w-full", "flex", "self-stretch", "order-1"], [1, "p-3", "inline-flex", "items-start", "cursor-pointer", "hover:transition-all", "text-slate-500", "dark:text-slate-400", "bg-pageBg", "dark:bg-dark-pageBg", "rounded-md", "w-full", "relative", "justify-center"], [1, "inline-flex", "flex-col", "items-center", "justify-center", "w-full"], [1, "p-4", "text-white", "rounded-full", "absolute", "z-10", "-bottom-[13%]", "sm:top-[41%]", "sm:-right-[34px]", "bg-sky-400", "dark:bg-sky-500", "inline-flex", "items-center", "border-8", "border-solid", "border-white", "dark:border-dark-1", "justify-center", "w-9", "h-9"], [1, "mdi", "mdi-arrow-right-bold", "hidden", "sm:inline-flex"], [1, "mdi", "mdi-arrow-down-bold", "sm:hidden", "inline-flex"], ["src", "assets/icons/svg/idea_problem.svg", "alt", "", 1, "max-w-[40%]", "min-w-[235px]", "overflow-hidden", "relative", "text-center", "block", "h-40"], [1, "my-4", "font-bold", "text-center", "text-[12px]/[1.2]", "capitalize"], [1, "shadow", "shadow-inner_shadow", "bg-white", "dark:bg-dark-1", "top-[12px]", "left-[12px]", "rounded-full", "absolute", "inline-flex", "items-center", "justify-center", "w-4", "h-4"], [1, "w-full", "flex", "self-stretch", "order-2"], [1, "p-4", "text-white", "rounded-full", "absolute", "z-10", "md:top-[41%]", "sm:top-auto", "-bottom-[13%]", "sm:right-auto", "md:-right-[34px]", "bg-sky-400", "dark:bg-sky-500", "inline-flex", "items-center", "border-8", "border-solid", "border-white", "dark:border-dark-1", "justify-center", "w-9", "h-9"], [1, "mdi", "mdi-arrow-right-bold", "hidden", "md:inline-flex"], [1, "mdi", "mdi-arrow-down-bold", "md:hidden", "inline-flex"], ["src", "assets/icons/svg/research_planning.svg", "alt", "", 1, "max-w-[40%]", "min-w-[235px]", "overflow-hidden", "relative", "text-center", "block", "h-40"], [1, "w-full", "flex", "self-stretch", "order-3", "md:order-3", "sm:order-4"], [1, "p-4", "text-white", "rounded-full", "absolute", "z-10", "-bottom-[13%]", "md:-bottom-[13%]", "md:top-auto", "md:left-auto", "sm:top-[41%]", "sm:-left-[34px]", "bg-sky-400", "dark:bg-sky-500", "inline-flex", "items-center", "border-8", "border-white", "border-solid", "dark:border-dark-1", "justify-center", "w-9", "h-9"], [1, "mdi", "mdi-arrow-down-bold", "hidden", "md:inline-flex"], [1, "mdi", "mdi-arrow-left-bold", "hidden", "md:hidden", "sm:inline-flex"], ["src", "assets/icons/svg/solution_imp.svg", "alt", "", 1, "max-w-[40%]", "min-w-[235px]", "overflow-hidden", "relative", "text-center", "block", "h-40"], [1, "w-full", "flex", "self-stretch", "order-4", "md:order-6", "sm:order-3"], [1, "p-4", "text-white", "rounded-full", "absolute", "z-10", "md:top-[41%]", "md:-left-[34px]", "sm:top-auto", "sm:left-auto", "-bottom-[13%]", "bg-sky-400", "dark:bg-sky-500", "inline-flex", "items-center", "border-8", "border-solid", "border-white", "dark:border-dark-1", "justify-center", "w-9", "h-9"], [1, "mdi", "mdi-arrow-left-bold", "hidden", "md:inline-flex"], ["src", "assets/icons/svg/review.svg", "alt", "", 1, "max-w-[40%]", "min-w-[235px]", "overflow-hidden", "relative", "text-center", "block", "h-40"], [1, "w-full", "flex", "self-stretch", "order-5", "md:order-5", "sm:order-5"], [1, "p-4", "text-white", "rounded-full", "absolute", "z-10", "-bottom-[13%]", "sm:top-[41%]", "md:-left-[34px]", "sm:-right-[34px]", "bg-sky-400", "dark:bg-sky-500", "inline-flex", "items-center", "border-8", "border-solid", "border-white", "dark:border-dark-1", "justify-center", "w-9", "h-9"], [1, "mdi", "mdi-arrow-right-bold", "hidden", "md:hidden", "sm:inline-flex"], ["src", "assets/icons/svg/adoption.svg", "alt", "", 1, "max-w-[40%]", "min-w-[235px]", "overflow-hidden", "relative", "text-center", "block", "h-40"], [1, "w-full", "flex", "self-stretch", "order-6", "md:order-4", "sm:order-6"], ["src", "assets/icons/svg/monitoring_support.svg", "alt", "", 1, "max-w-[40%]", "min-w-[235px]", "overflow-hidden", "relative", "text-center", "block", "h-40"], [1, "mt-10", "flex", "flex-wrap"], [1, "my-1", "px-1", "sm:w-full", "md:w-1/2", "flex", "self-stretch", "hover:translate-y-sm", "hover:duration-700"], [1, "flex", "p-4", "mb-4", "border", "border-slate-900/10", "dark:border-slate-50/[0.06]", "rounded-lg", "bg-transparent", "dark:text-blue-400", "w-full"], [1, "flex-shrink-0", "inline-flex", "items-center", "justify-center", "w-8", "h-8", "rounded", "mr-3", "flex", "items-start", "bg-purple-500"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-[17px]", "text-white"], ["opacity", "0.3", "x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "fill", "currentColor"], ["d", "M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z", "fill", "currentColor"], [1, "mt-1.5"], [1, "text-xs/[16px]", "text-slate-700", "dark:text-slate-200", "mt-1"], [1, "mt-1.5", "ml-4", "text-slate-500", "dark:text-slate-400", "text-xmd", "list-disc", "list-inside"], [1, "p-4", "mb-4", "border", "border-slate-900/10", "dark:border-slate-50/[0.06]", "rounded-lg", "bg-transparent", "w-full"], [1, "flex", "items-start"], [1, "flex-shrink-0", "inline-flex", "items-center", "justify-center", "w-8", "h-8", "rounded", "mr-3", "flex", "items-start", "bg-teal-500"], [1, "flex", "justify-start", "flex-col", "mt-2"], [1, "text-xs/[16px]", "text-slate-700", "dark:text-slate-200"], [1, "mt-2", "mb-4", "text-slate-500", "dark:text-slate-400", "text-xmd"], [1, "flex"], ["type", "button", 1, "text-sky-500", "bg-transparent", "border", "hover:text-white", "focus:outline-none", "rounded", "text-xs", "px-3", "py-2.5", "text-center", "hover:bg-sky-500", "border-sky-500", "dark:text-sky-400", "dark:hover:text-white", "focus:none", 3, "click"], [3, "showPopup", "sendMail", "close"]],
  template: function WorkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " How ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "we Work ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8)(11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Idea / Problem ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Identification");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 5)(20, "div", 6)(21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 15)(23, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Research ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "and planning");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "div", 5)(32, "div", 6)(33, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 20)(35, "i", 21)(36, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Build / Solution ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Implementation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23)(44, "div", 5)(45, "div", 6)(46, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 25)(48, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Review and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "improvement");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 27)(56, "div", 5)(57, "div", 6)(58, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 25)(60, "i", 29)(61, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Release");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " and Adoption");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 31)(69, "div", 5)(70, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Monitoring ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "and Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 33)(78, "div", 34)(79, "div", 35)(80, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "svg", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "rect", 38)(83, "path", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 40)(85, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "We follow japanese methods for Improved focus and productivity.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul", 42)(88, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Ikigai & Kaizen & Kakeibo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Pomodoro Technique.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Forest Bathing (Shinrin-Yoku).");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Shitsuke, Seiri, Seiton, Seiso, Seiketsu (5S).");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Shoshin.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 34)(99, "div", 43)(100, "div", 44)(101, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "svg", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "rect", 38)(104, "path", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 46)(106, "h3", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Are you ready to work with us?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Take the first step and apply now to explore the possibilities of becoming a valued member of our team. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 49)(111, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_111_listener() {
        return ctx.isSendingMail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Request a quote ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "app-model", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function WorkComponent_Template_app_model_close_113_listener($event) {
        return ctx.closePopup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](113);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPopup", ctx.showPopup)("sendMail", ctx.sendingMail);
    }
  },
  dependencies: [_model_model_component__WEBPACK_IMPORTED_MODULE_0__.ModelComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6698:
/*!****************************************!*\
  !*** ./src/app/services/apiService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlSet;
class ApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.options = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json')
    };
  }
  post(body = {}) {
    console.log('jhhhh');
    return this.httpClient.post('https://elearn-i2tym.onrender.com/i2tymelearnapi/v1/enquiries/enquiry', JSON.stringify(body), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.formatErrors));
  }
  formatErrors(error) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error.error);
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
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
    this.contactDetailsSubmitted = false;
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
  ngOnDestroy() {
    this._showMobileMenu$.next(false);
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
  production: false,
  urlSet: {
    enquiries: '/i2tymelearnapi/v1/enquiries'
  },
  envName: 'DEV'
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