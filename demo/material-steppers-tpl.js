angular.module("mdSteppers").run(["$templateCache", function($templateCache) {$templateCache.put("mdSteppers/mdStep.tpl.html","<div>\r\n    <div class=\"step-header\" md-ink-ripple layout=\"row\" ng-class=\"{\'flex-none\':$last, \'active\':active}\">\r\n        <div class=\"step-circle\"></div>\r\n        <span class=\"label\">{{label}}</span>\r\n    </div>\r\n    <div class=\"step-content\" ng-show=\"active\">\r\n        <div ng-transclude></div>\r\n        <div class=\"step-actions\" layout=\"row\">\r\n            <md-button class=\"md-raised md-primary\" ng-click=\"nextStep()\">Continue</md-button>\r\n            <md-button class=\"md-raised\">Reset</md-button>\r\n            <span flex></span>\r\n            <md-button class=\"md-raised\">Skip</md-button>\r\n        </div>\r\n    </div>\r\n</div>");
$templateCache.put("mdSteppers/mdStepper.tpl.html","<div ng-class=\"{\'vertical\':stepper.vertical,\'horizontal\':!stepper.vertical,\'mobile-step\': stepper.mobileStepText }\" layout=\"column\">\r\n    <md-toolbar flex=\"none\" class=\"step-bar md-whiteframe-1dp\" style=\"background: #f6f6f6 !important; color: #202020 !important;\">\r\n        <div class=\"md-toolbar-tools\">\r\n            <h3>\r\n                <span>Step {{stepper.currentStep+1}} of {{stepper.steps.length}}</span>\r\n            </h3>\r\n        </div>\r\n    </md-toolbar>\r\n    <div flex=\"none\" ng-hide=\"stepper.vertical\" layout=\"row\" class=\"step-header-bar\">\r\n        <div class=\"step-header\" ng-repeat=\"step in stepper.steps\" md-ink-ripple layout=\"row\" flex layout-align=\"center center\" ng-class=\"{\'flex-none\':$last, \'active\':step.active}\"\r\n            ng-click=\"stepper.setActiveStep(step)\">\r\n            <div class=\"step-circle\" flex-none>{{$index+1}}</div>\r\n            <span class=\"label\" flex-none>{{step.label}}</span>\r\n            <div class=\"line\" flex></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"steps-wrapper\" flex ng-transclude></div>\r\n    <div flex=\"none\" class=\"md-whiteframe-1dp step-bar\" style=\"background: #f6f6f6 !important; color: #202020 !important;\" layout=\"row\"\r\n        layout-align=\"space-around\">\r\n        <md-button ng-click=\"stepper.previousStep()\">Back</md-button>\r\n        <span flex></span>\r\n        <md-button ng-click=\"stepper.nextStep()\">Next</md-button>\r\n    </div>\r\n</div>\r\n");}]);