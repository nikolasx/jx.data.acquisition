/*
*文件描述：
*         该文件内提供所有五万详查页面内方法调用外部接口
*使用方法：
*        1、引用common.js\huapo.js\...
*        2、页面内日期控件使用的是lhgcalendar.js，根据项目实际情况自己调整
*        3、iframe嵌入相应页面后，iframe.本脚本内接口方法名称，调用对应方法
*版本记录：
*        2015-1-22 16:29:13 基础版本，仅支持滑坡类
*        2015-1-27 15:52:50 追加更新，支持不稳定斜坡
*/

/*
*方法：从滑坡页面提取数据
*参数：接收数据的回调函数
*返回结果：滑坡类数据对象传递给回调函数
*/
function getLandslideInfos(callback) {
    getLandslideInfo(callback);
}

/*
*方法：从后台接收的数据结果填入页面内进行展示
*参数：后台传回的滑坡类数据对象，对象格式请参考huapo.js内的LandslideDemo说明
*返回结果：无
*/
function showLandslideInfos(data) {
    showLandslideInfo(data);
}

/*
*方法：从斜坡页面提取数据
*参数：接收数据的回调函数
*返回结果：斜坡类数据对象传递给回调函数
*/
function getSlopeInfos(callback) {
    getSlopeInfo(callback);
}

/*
*方法：从后台接收的数据结果填入斜坡页面内进行展示
*参数：后台传回的斜坡类数据对象，对象格式请参考xiepo.js内的SlopeDemo说明
*返回结果：无
*/
function showSlopeInfos(data) {
    showSlopeInfo(data);
}


/*
*方法：激活'统一编号'计算页面
*参数：1、cityArray市县对象数组
*         [["360100","南昌市"],["360101","市辖区"],["360102","东湖区"]..]
*         不需要特别排序
*      2、postUrl，后台计算统一编号方法所在的函数\controller地址
*返回结果：无
*Tips：
*      后台计算统一编号的方法请自己根据实际情况编写，不随页面提供，唯一要求，该方法接收参数指定为市县编码(code)和灾害中文名称(name)
*/
function activeTybhPages(cityArray, postUrl) {
    activeTybhPage(cityArray, postUrl);
}

/*
*方法：禁用/解禁页面元素（input、select）
*参数：禁用(true)/解禁(false)
*返回结果：无
*/
function controlElementsOfPages(state) {
    controlElementsOfPage(state);
}

