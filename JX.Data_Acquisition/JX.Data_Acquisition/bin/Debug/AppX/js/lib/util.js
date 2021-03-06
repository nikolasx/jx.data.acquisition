﻿
//定义弹框的公用方法
WinJS.Namespace.define("messageDialog", {


    defaultMessage: function (message) {
        var msg = new Windows.UI.Popups.MessageDialog(message);

        msg.showAsync().done(function () { });
    },

    customerMessage: function (title, message, btnName1, btnName2, callback1, callback2) {

        // Create the message dialog and set its content
        var msg = new Windows.UI.Popups.MessageDialog(message, title);

        // Add commands and set their command handlers
        msg.commands.append(new Windows.UI.Popups.UICommand(btnName1, callback1));

        msg.commands.append(new Windows.UI.Popups.UICommand(btnName2, callback2));

        // Set the command that will be invoked by default
        msg.defaultCommandIndex = 0;

        // Show the message dialog
        msg.showAsync();

    }

});

//app中的公用方法

WinJS.Namespace.define("AppUtil", {

    //判断网络状态
    checkNetwork: function () {
        var networkState = -1;   //1,0,-1分别表示 连接互联网  连接局域网 离线
        try {
            var connectionProfile = Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile();
            var networkConnectivityInfo = Windows.Networking.Connectivity.NetworkConnectivityLevel;

            switch (connectionProfile.getNetworkConnectivityLevel()) {
                case networkConnectivityInfo.none:   //无网络
                    networkState = -1;
                    break;
                case networkConnectivityInfo.internetAccess:   //本地连接
                    networkState = 1;
                    break;
                case networkConnectivityInfo.localAccess:   //受限连接局域网
                    networkState = 0;
                    break;
                default:
                    break;
            }
        }
        catch (ex) {  //网络出错
            networkState = -1;
        }
        return networkState;
    },

    //获取当前位置
    getPosition: function (callback) {
        var position = new Windows.Devices.Geolocation.Geolocator();
        var promise = position.getGeopositionAsync();
        promise.done(function (pos) {
            var coord = pos.coordinate;
            var ans = {
                latitude: coord.latitude, //经度
                longitude: coord.longitude,  //纬度
                accuracy: coord.accuracy  //经度
            };
            callback(ans);
        }, function (error) {
            callback(null);
        });
    },

    //生成guid
    GUIDFactory: function () {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
        }
        return guid;
    },

    //根据字符串将灾害类型转化成枚举值
    getTypeFromStrToEnum: function (str) {
        var val = -1;
        switch (str) {
            case "泥石流":
                val = 1;
                break;
            case "地面塌陷":
                val = 2;
                break;
            case "地裂缝":
                val = 4;
                break;
            case "滑坡":
                val = 8;
                break;
            case "崩塌":
                val = 16;
                break;
            case "地面沉降":
                val = 32;
                break;
            case "斜坡":
                val = 64;
                break;
            default:
        }
        return val;
    },

    //根据枚举值获取灾害类型字符串
    getTypeFromEnumToStr: function (enumVal) {
        var val = "未知";
        switch (enumVal) {
            case 1:
                val = "泥石流";
                break;
            case 2:
                val = "地面塌陷";
                break;
            case 4:
                val = "地裂缝";
                break;
            case 8:
                val = "滑坡";
                break;
            case 16:
                val = "崩塌";
                break;
            case 32:
                val = "地面沉降";
                break;
            case 64:
                val = "斜坡";
                break;
            default:
        }
        return val;
    },

    //判断值是否在数组中
    isValueInArray: function (val, array) {
        var res = false;
        if ($.isArray(array)) {
            res = array.some(function (item) {
                return item == val;
            });
        }
        return res;
    },

    //获取值在数组中的下标
    getIndexInArray: function (val, array) {
        var index = -1;
        if ($.isArray(array)) {
            for (var i = 0; i < array.length; i++) {
                if (val == array[i]) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    },

    //调用摄像头方法
    capturePhoto: function (callback) {
        var dialog = new Windows.Media.Capture.CameraCaptureUI();
        dialog.photoSettings.croppedAspectRatio = { width: 16, height: 9 };
        dialog.captureFileAsync(Windows.Media.Capture.CameraCaptureUIMode.photo).done(function (file) {
            if (file) {
                var photoBlobUrl = URL.createObjectURL(file, { oneTimeOnly: true });
                callback(photoBlobUrl);
            } else {
                callback(null);
            }
        }, function (err) {
        });
    },

    //选择多张图片
    pickMultiplePhotos: function (callback) {

        var currentState = Windows.UI.ViewManagement.ApplicationView.value;
        if (currentState === Windows.UI.ViewManagement.ApplicationViewState.snapped &&
            !Windows.UI.ViewManagement.ApplicationView.tryUnsnap()) {
            return;
        }

        var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
        openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.list;
        openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
        openPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);

        openPicker.pickMultipleFilesAsync().then(function (files) {
            if (files.size > 0) {
                callback(files);
            } else {
                callback(null);
            }
        });
    },

    //选择单张图片
    pickSinglePhoto: function (callback) {

        var currentState = Windows.UI.ViewManagement.ApplicationView.value;
        if (currentState === Windows.UI.ViewManagement.ApplicationViewState.snapped &&
            !Windows.UI.ViewManagement.ApplicationView.tryUnsnap()) {
            return;
        }
        var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
        openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
        openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
        openPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);

        openPicker.pickSingleFileAsync().then(function (file) {
            if (file) {
                var photoBlobUrl = URL.createObjectURL(file, { oneTimeOnly: true });
                callback(photoBlobUrl);
            } else {
                callback(null);
            }
        });
    },

    //在指定文件夹保存文件
    saveFile: function (input, fileFolderName, fileName) {
        Windows.Storage.ApplicationData.current.localFolder.createFolderAsync(fileFolderName, Windows.Storage.CreationCollisionOption.openIfExists)
            .then(function (fileFolder) {
                fileFolder.createFileAsync(fileName, Windows.Storage.CreationCollisionOption.replaceExisting)
                    .then(function (file) {
                        file.openAsync(Windows.Storage.FileAccessMode.readWrite).then(function (output) {
                            Windows.Storage.Streams.RandomAccessStream.copyAsync(input, output).then(function () {
                                output.flushAsync().done(function () {
                                    input.close();
                                    output.close();
                                });
                            });
                        });
                    });
            });
    }

});