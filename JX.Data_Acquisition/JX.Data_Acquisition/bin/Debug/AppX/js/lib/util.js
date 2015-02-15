
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
        var val = 0;
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
    }

});