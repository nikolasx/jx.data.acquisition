

(function () {

    "use strict";

    WinJS.UI.Pages.define("/html/disasterquery/query.html", {

        ready: function (element, options) {

            WinJS.UI.processAll(element);
            disasterQuery.initialize();
        },

        unload: function () { }

    });



    WinJS.Namespace.define("disasterQuery", {


        initialize: function () {
            this.attachEvents();

            this.queryResultList = new WinJS.Binding.List(this.queryResult);
            this.queryResultListView = document.querySelector("#queryResultListView").winControl;
        },

        typeListView: null,
        queryResultListView: null,

        disTypeCheckbox: new WinJS.Binding.List([{ title: "全选", value: 0 }, { title: "斜坡", value: 64 },
                                                { title: "滑坡", value: 8 }, { title: "崩塌", value: 16 },
                                                { title: "泥石流", value: 1 }, { title: "地裂缝", value: 4 },
                                                { title: "地面塌陷", value: 2 }, { title: "地面沉降", value: 32 }]),

        attachEvents: function () {
            var self = this;
            //模拟导航
            $("#queryReturnIcon,#queryTitle").click(function () {
                $("#secondPageContainer").css("height", "0");
                $("#firstPageContainer").css("height", "100%");
            });

            var typeListview = document.querySelector("#disasterTypeListView").winControl;
            this.typeListView = typeListview;
            var allSelected = false;
            //全选按钮事件
            typeListview.addEventListener("selectionchanged", function (evt) {
                var selectionCount = typeListview.selection.count();
                typeListview.selection.getItems().done(function (items) {
                    var hasAll = items.some(function (item) {
                        return item.data.title == "全选";
                    });
                    if (hasAll && selectionCount < 8 && !allSelected) {
                        typeListview.selection.selectAll();
                        allSelected = true;
                    }
                    if (hasAll && selectionCount < 8 && allSelected) {
                        typeListview.selection.remove(0);
                        allSelected = false;
                    }
                    if (!hasAll && allSelected) {
                        allSelected = false;
                        typeListview.selection.clear();
                    }
                    if (!hasAll && !allSelected && selectionCount == 7) {
                        typeListview.selection.selectAll();
                        allSelected = true;
                    }
                });

            }, false);


            //查询数据
            $("#queryCommit").click(function () {
                $("#queryConditionsPanel").hide().siblings().show();
                disasterDb.getAllData("investgation", $.proxy(self.getData, self));
            });

        },

        queryResultList: new WinJS.Binding.List([]),

        getData: function (result) {
            var that = this;
            var selectTypes = this.typeListView.selection.getItems()
            .then(function (items) {

                that.queryResultListView.itemDataSource = new WinJS.Binding.List(result).dataSource;

            });
        }
    });


})();