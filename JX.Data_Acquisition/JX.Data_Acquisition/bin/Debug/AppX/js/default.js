﻿// 有关“空白”模板的简介，请参阅以下文档: 
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO:  此应用程序刚刚启动。在此处初始化
                //您的应用程序。

                args.setPromise(WinJS.UI.processAll()
                    .then(function () {
                        return WinJS.Navigation.navigate("/html/container/container.html");
                    }));

            } else {
                // TODO:  此应用程序已从挂起状态重新激活。
                // 在此处恢复应用程序状态。
            }

        }
    };

    app.oncheckpoint = function (args) {
        // TODO:  即将挂起此应用程序。在此处保存
        //需要在挂起中保留的任何状态。您可以使用
        // WinJS.Application.sessionState 对象，该对象将在
        //挂起中自动保存和恢复。如果您需要在
        //挂起应用程序之前完成异步操作，请调用
        // args.setPromise()。
    };

    app.start();


    //页面加载事件
    WinJS.Navigation.addEventListener("navigated", function (eventObject) {
        var url = eventObject.detail.location, host;
        if (url == "/html/container/container.html") {
            $("#secondPageContainer").css("height","0");
            $("#firstPageContainer").css("height", "100%");
            host = document.getElementById("firstPageContainer");
        } else {
            $("#secondPageContainer").css("height", "100%");
            $("#firstPageContainer").css("height", "0");
            host = document.getElementById("secondPageContainer");
        }
        host.winControl && host.winControl.unload && host.winControl.unload();
        WinJS.Utilities.empty(host);
        eventObject.detail.setPromise(WinJS.UI.Pages.render(url, host, eventObject.detail.state)
            .then(function () {
                WinJS.Application.sessionState.lastUrl = url;
            }));
    });
})();
