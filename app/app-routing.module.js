"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var department_list_component_1 = require("./department-list.component");
var employee_list_component_1 = require("./employee-list.component");
var department_detail_component_1 = require("./department-detail.component");
var add_department_component_1 = require("./add-department.component");
var routes = [
    { path: "departmentList", component: department_list_component_1.DepartmentListComponent },
    { path: "employee", component: employee_list_component_1.EmployeeListComponent },
    { path: "addDepartment", component: add_department_component_1.AddDepartmentComponent },
    { path: "department/:id", component: department_detail_component_1.DepartmentDetailComponent },
    { path: "department", component: department_detail_component_1.DepartmentDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [department_list_component_1.DepartmentListComponent, employee_list_component_1.EmployeeListComponent, department_detail_component_1.DepartmentDetailComponent, add_department_component_1.AddDepartmentComponent];
//# sourceMappingURL=app-routing.module.js.map