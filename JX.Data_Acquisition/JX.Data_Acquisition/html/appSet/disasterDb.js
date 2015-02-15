


//地质灾害业务数据库

(function () {

    "use strict";

    WinJS.Namespace.define("disasterDb", {

        dbName: "R2_Disaster",

        currentVersion: 1,

        db: null,

        //创建数据库
        create: function () {

            var dbRequest = window.indexedDB.open(this.dbName, this.currentVersion);

            var self = this;
            // Add asynchronous callback functions
            dbRequest.onerror = function () { WinJS.log && WinJS.log("Error creating database.", "sample", "error"); };
            dbRequest.onsuccess = function (evt) {
                self.db = evt.target.result;
                self.db.close();
            };
            dbRequest.onupgradeneeded = function (evt) { self.dbVersionUpgrade(evt); };
            dbRequest.onblocked = function () { WinJS.log && WinJS.log("Database create blocked.", "sample", "error"); };
        },

        //若数据库不存在，则生成数据库
        dbVersionUpgrade: function (evt) {
            if (disasterDb.db) {
                disasterDb.db.close();
            }
            disasterDb.db = evt.target.result;
            var txn = evt.target.transaction;
            //构造表结构
            disasterDb.db.createObjectStore("investgation", { keyPath: "Id" });
            disasterDb.db.createObjectStore("preplan", { keyPath: "Id" });
            disasterDb.db.createObjectStore("avoidriskcards", { keyPath: "Id" });
            disasterDb.db.createObjectStore("workingguidcards", { keyPath: "Id" });
            disasterDb.db.createObjectStore("monthlyreports", { keyPath: "Id" });

            txn.oncomplete = function () {
                WinJS.log && WinJS.log("Database schema created.", "sample", "status");
            };
            txn.onerror = function () { }
        },

        //删除数据库
        deleteDb: function () {
            if (disasterDb.db) {
                disasterDb.db.close();
            }
            disasterDb.db = null;
            var dbRequest = window.indexedDB.deleteDatabase(this.dbName);
            dbRequest.onerror = function () {
                WinJS.log && WinJS.log("Error deleting database.", "sample", "error");
            };
            dbRequest.onsuccess = function () { WinJS.log && WinJS.log("Database deleted.", "sample", "status"); };
            dbRequest.onblocked = function () {
                WinJS.log && WinJS.log("Database delete blocked.", "sample", "error");
            };
        },

        //向数据库中插入灾害点数据
        addDisaster: function (disaster, tableName) {

            var self = this;
            var dbRequest = window.indexedDB.open(this.dbName, this.currentVersion);
            dbRequest.onerror = function () { WinJS.log && WinJS.log("Error creating database.", "sample", "error"); };
            dbRequest.onsuccess = function (evt) {
                self.db = evt.target.result;
                self._addDisaster(disaster, tableName);
            };
            dbRequest.onupgradeneeded = function (evt) { self.dbVersionUpgrade(evt); };
            dbRequest.onblocked = function () { WinJS.log && WinJS.log("Database create blocked.", "sample", "error"); };
        },
        //插入数据的内部方法
        _addDisaster: function (disaster, tableName) {

            if (disasterDb.db === null) {
                WinJS.log && WinJS.log("Data has not been read yet.", "sample", "error");
            }
            var txn = disasterDb.db.transaction([tableName], "readwrite");
            txn.onerror = function (evt) {
                WinJS.log && WinJS.log("Error writing data.", "sample", "error");
            };
            txn.onabort = function (evt) {
                WinJS.log && WinJS.log("Writing of data aborted.", "sample", "error");
            };
            txn.oncomplete = function () {
                WinJS.log && WinJS.log("Changes saved to database.", "sample", "status");
            };
            var disasterStore = txn.objectStore(tableName);
            var addResult = disasterStore.add(disaster);
            addResult.onerror = function (evt) {
                WinJS.log && WinJS.log("Error adding data.", "sample", "error");
            };

        },

        //从数据库中读取数据
        getAllData: function (tableName, callback) {
            var self = this;
            var dbRequest = window.indexedDB.open("R2_Disaster", this.currentVersion);
            dbRequest.onerror = function () { WinJS.log && WinJS.log("Error creating database.", "sample", "error"); };
            dbRequest.onsuccess = function (evt) {
                self._getAllData(evt, tableName, callback);
            };
            dbRequest.onupgradeneeded = function (evt) { self.dbVersionUpgrade(evt); };
            dbRequest.onblocked = function () { WinJS.log && WinJS.log("Database create blocked.", "sample", "error"); };
        },

        _getAllData: function (evt, tableName, callback) {

            var result = [];

            disasterDb.db = evt.target.result;
            if (disasterDb.db.objectStoreNames.length === 0) {
                WinJS.log && WinJS.log("Database schema does not exist. Complete the first two scenarios before continuing.", "sample", "error");
                self.deleteDb();
            } else {

                //读取数据操作
                var txn = disasterDb.db.transaction([tableName], "readonly");
                txn.onerror = function () { WinJS.log && WinJS.log("Error reading data.", "sample", "error"); };
                txn.onabort = function () { WinJS.log && WinJS.log("Reading of data aborted.", "sample", "error"); };

                txn.oncomplete = function () {
                    callback && callback(result);
                };

                var disasterCursorRequest = txn.objectStore(tableName).openCursor();

                disasterCursorRequest.onsuccess = function (e) {
                    var cursor = e.target.result;
                    if (cursor) {
                        var value = cursor.value;
                        result.push(value);
                        cursor.continue();
                    }
                }
            }
        },


        //清空数据库中某个objectstore的数据
        clearAllData: function (tableName, callback) {
            var self = this;
            var dbRequest = window.indexedDB.open("R2_Disaster", this.currentVersion);
            dbRequest.onerror = function () { WinJS.log && WinJS.log("Error creating database.", "sample", "error"); };
            dbRequest.onsuccess = function (evt) {
                self._clearAllData(evt, tableName,callback);
            };
            dbRequest.onupgradeneeded = function (evt) { self.dbVersionUpgrade(evt); };
            dbRequest.onblocked = function () { WinJS.log && WinJS.log("Database create blocked.", "sample", "error"); };
        },

        _clearAllData: function (evt, tableName, callback) {

            disasterDb.db = evt.target.result;
            var txn = disasterDb.db.transaction([tableName], "readwrite");
            txn.onerror = function () { WinJS.log && WinJS.log("Error reading data.", "sample", "error"); };
            txn.onabort = function () { WinJS.log && WinJS.log("Reading of data aborted.", "sample", "error"); };

            txn.oncomplete = function () {
                callback && callback();
            };

            var objectStroe = txn.objectStore(tableName).clear();
            objectStroe.onsuccess = function () { };
            objectStroe.onerror = function() {
                console.log && console.log("数据清空失败");
            };
        }

    });


    //页面加载的时候就创建数据库
    disasterDb.create();

})();

