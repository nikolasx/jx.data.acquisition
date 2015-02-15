

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
                self.queryResultCurrentList.splice(0, self.queryResultCurrentList.length);
                $("#queryConditionsPanel").hide().siblings().show();
                disasterDb.getAllData("investgation", $.proxy(self.getData, self));
            });

            //查询的结果列表的长滚动事件
            self.queryResultListView = document.querySelector("#queryResultListView").winControl;
            var template = self.queryResultListView.itemTemplate;
            self.queryResultListView.itemTemplate = self.loadMoreData(template);

        },

        queryResultListView: null,
        queryResultCurrentList: new WinJS.Binding.List([]),
        queryResultList: null,

        //获取查询结果数据
        getData: function (disasters) {
            var that = this;
            var selectTypes = this.typeListView.selection.getItems()
            .then(function (items) {

                var conditions = items.map(function (item) {
                    return item.data.value;
                });
                var result = disasters.filter(function (disaster) {
                    return AppUtil.isValueInArray(disaster.灾害类型, conditions);
                });
                result.forEach(function (item) {
                    item.灾害类型 = AppUtil.getTypeFromEnumToStr(item.灾害类型);
                });
                that.queryResultList = result;
                that.queryResultCurrentList = new WinJS.Binding.List([]);
                for (var i = 0; i < 20 && i < that.queryResultList.length; i++) {
                    that.queryResultCurrentList.push(that.queryResultList[i]);
                }
                that.queryResultListView.itemDataSource = that.queryResultCurrentList.dataSource;
            });
        },

        //循环滚动数据加载
        loadMoreData: function (template) {
            var that = this;
            return function (itemPromise) {
                var fetching;
                return itemPromise.then(function (item) {
                    if (item.key === that.queryResultCurrentList.getItem(that.queryResultCurrentList.length - 1).key) {
                        if (!fetching) {
                            fetching = true;
                            WinJS.Promise.timeout(Math.random() * 1000 + 1000).then(function() {
                                for (var i = that.queryResultCurrentList.length, begin = i; i < begin + 8
                                && i < that.queryResultList.length; i++) {
                                    that.queryResultCurrentList.push(that.queryResultList[i]);
                                }
                                fetching = false;
                            });
                        }
                    }
                    return template(itemPromise);
                });
            };
        }
    });


})();