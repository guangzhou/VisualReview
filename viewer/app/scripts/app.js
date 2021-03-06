/*
 * Copyright 2015 Xebia B.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

angular.module('visualDiffViewerApp', ['ngRoute', 'ngAnimate', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/list/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/:projectId', {
        templateUrl: 'scripts/list/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/:projectId/:suiteId', {
        templateUrl: 'scripts/list/suite.html',
        controller: 'SuiteCtrl'
      })
      .when('/:profileId/:suiteId/:runId/:filter?', {
        templateUrl: 'scripts/run/run.html',
        controller: 'RunCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
