
/* ======================================================================
    OpenLayers/Handler/Drag.js
   ====================================================================== */
//add by jjm 2013.11.10

/**
 * @requires OpenLayers/Handler.js
 */

/**
 * Class: customeDragForPinch
 *  
 *     
 *     
 *     
 *
 * Controls that use the drag handler typically construct it with callbacks
 *     for 'down', 'move', and 'done'.  Callbacks for these keys are called
 *     when the drag begins, with each move, and when the drag is done.  In
 *     addition, controls can have callbacks keyed to 'up' and 'out' if they
 *     care to differentiate between the types of events that correspond with
 *     the end of a drag sequence.  If no drag actually occurs (no mouse move)
 *     the 'down' and 'up' callbacks will be called, but not the 'done'
 *     callback.
 *
 * Create a new drag handler with the <OpenLayers.Handler.Drag> constructor.
 *
 * Inherits from:
 *  - <OpenLayers.Handler>
 */
OpenLayers.Handler.customeDragForPinch = OpenLayers.Class(OpenLayers.Handler.Drag, {
    /**
     * Constructor: OpenLayers.Handler.Drag
     * Returns OpenLayers.Handler.Drag
     * 
     * Parameters:
     * control - {<OpenLayers.Control>} The control that is making use of
     *     this handler.  If a handler is being used without a control, the
     *     handlers setMap method must be overridden to deal properly with
     *     the map.
     * callbacks - {Object} An object containing a single function to be
     *     called when the drag operation is finished. The callback should
     *     expect to recieve a single argument, the pixel location of the event.
     *     Callbacks for 'move' and 'done' are supported. You can also speficy
     *     callbacks for 'down', 'up', and 'out' to respond to those events.
     * options - {Object} 
     */
    initialize: function (control, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, arguments);
        if (callbacks == null) {

        }
        if (this.documentDrag === true) {
            var me = this;
            this._docMove = function (evt) {
                me.mousemove({
                    xy: { x: evt.clientX, y: evt.clientY },
                    element: document
                });
            };
            this._docUp = function (evt) {
                me.mouseup({ xy: { x: evt.clientX, y: evt.clientY } });
            };
        }
    },



    /*
     * 这个方法仍有bug,单点触控时,也会被认为多点,导致地图不能实现移动 (2013 10 10 遗留)    2014 3 31 解决
     * Method: touchmove
     * Handle touchmove events
     *
     * Parameters:
     * evt - {Event}
     *
     * Returns:
     * {Boolean} Let the event propagate.
     */
    touchmove: function (evt) {

        if (OpenLayers.Event.isMultiTouch(evt)) {

            if (evt.touches[0].currentPoint.isInContact == false) {  //判断上一次的触摸点是否在地图上

                /*解决多点触控误判问题*/

                R2TeamSolveMulitTouch.resetTouchNavigation();
            }

            return;
        }
        else {
            return this.dragmove(evt);
        }
    },

    //touchend: function (evt) {
    //    // override evt.xy with last position since touchend does not have
    //    // any touch position
    //    evt.xy = this.last;
    //    return this.dragend(evt);
    //},

    CLASS_NAME: "OpenLayers.Handler.customeDragForPinch"
});

/* ======================================================================
    OpenLayers/Control/DragPan.js
   ====================================================================== */

/* Copyright (c) 2006-2013 by OpenLayers Contributors (see authors.txt for
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires OpenLayers/Control.js
 * @requires OpenLayers/Handler/Drag.js
 */

/**
 * Class: OpenLayers.Control.DragPan
 * The DragPan control pans the map with a drag of the mouse.
 *
 * Inherits from:
 *  - <OpenLayers.Control>
 */
OpenLayers.Control.customeDragPan = OpenLayers.Class(OpenLayers.Control, {

    /** 
     * Property: type
     * {OpenLayers.Control.TYPES}
     */
    type: OpenLayers.Control.TYPE_TOOL,

    /**
     * Property: panned
     * {Boolean} The map moved.
     */
    panned: false,

    /**
     * Property: interval
     * {Integer} The number of milliseconds that should ellapse before
     *     panning the map again. Defaults to 0 milliseconds, which means that
     *     no separate cycle is used for panning. In most cases you won't want
     *     to change this value. For slow machines/devices larger values can be
     *     tried out.
     */
    interval: 0,

    /**
     * APIProperty: documentDrag
     * {Boolean} If set to true, mouse dragging will continue even if the
     *     mouse cursor leaves the map viewport. Default is false.
     */
    documentDrag: false,

    /**
     * Property: kinetic
     * {<OpenLayers.Kinetic>} The OpenLayers.Kinetic object.
     */
    kinetic: null,

    /**
     * APIProperty: enableKinetic
     * {Boolean} Set this option to enable "kinetic dragging". Can be
     *     set to true or to an object. If set to an object this
     *     object will be passed to the {<OpenLayers.Kinetic>}
     *     constructor. Defaults to true.
     *     To get kinetic dragging, ensure that OpenLayers/Kinetic.js is
     *     included in your build config.
     */
    enableKinetic: true,

    /**
     * APIProperty: kineticInterval
     * {Integer} Interval in milliseconds between 2 steps in the "kinetic
     *     scrolling". Applies only if enableKinetic is set. Defaults
     *     to 10 milliseconds.
     */
    kineticInterval: 10,

    /**
     * Method: draw
     * Creates a Drag handler, using <panMap> and
     * <panMapDone> as callbacks.
     */
    draw: function () {
        if (this.enableKinetic && OpenLayers.Kinetic) {
            var config = { interval: this.kineticInterval };
            if (typeof this.enableKinetic === "object") {
                config = OpenLayers.Util.extend(config, this.enableKinetic);
            }
            this.kinetic = new OpenLayers.Kinetic(config);
        }
        //调用重写的方法
        this.handler = new OpenLayers.Handler.customeDragForPinch(this, {
            "move": this.panMap,
            "done": this.panMapDone,
            "down": this.panMapStart
        }, {
            interval: this.interval,
            documentDrag: this.documentDrag
        }
        );
    },

    /**
     * Method: panMapStart
     */
    panMapStart: function () {
        if (this.kinetic) {
            this.kinetic.begin();
        }
    },

    /**
    * Method: panMap
    *
    * Parameters:
    * xy - {<OpenLayers.Pixel>} Pixel of the mouse position
    */
    panMap: function (xy) {
        if (this.kinetic) {
            this.kinetic.update(xy);
        }
        this.panned = true;
        this.map.pan(
            this.handler.last.x - xy.x,
            this.handler.last.y - xy.y,
            { dragging: true, animate: false }
        );
    },

    /**
     * Method: panMapDone
     * Finish the panning operation.  Only call setCenter (through <panMap>)
     *     if the map has actually been moved.
     *
     * Parameters:
     * xy - {<OpenLayers.Pixel>} Pixel of the mouse position
     */
    panMapDone: function (xy) {
        if (this.panned) {
            var res = null;
            if (this.kinetic) {
                res = this.kinetic.end(xy);
            }
            this.map.pan(
                this.handler.last.x - xy.x,
                this.handler.last.y - xy.y,
                { dragging: !!res, animate: false }
            );
            if (res) {
                var self = this;
                this.kinetic.move(res, function (x, y, end) {
                    self.map.pan(x, y, { dragging: !end, animate: false });
                });
            }
            this.panned = false;
        }
    },

    CLASS_NAME: "OpenLayers.Control.customeDragPan"
});


/*
* 解决 在平板中,拖动地图或者双指缩放地图时, 如果用户的一个触点超出了界线, 会造成下一次的操作都变成缩放
* 目前的解决方法是:
* 将目前的TouchNavigation销毁,然后再次添加一个新的TouchNavigation
*/

var R2TeamSolveMulitTouch = {

    //map: R2TeamMetro.map,
    map: null,

    //touchNavigationId: 'myTouchNavigation',
    touchNavigationId: "",

    initialize: function (map, touchNavigationId) {
        this.map = map;
        this.touchNavigationId = touchNavigationId;
    },

    resetTouchNavigation: function () {
        this.map.getControlsBy('id', this.touchNavigationId)[0].destroy();   //将TouchNavigation 销毁 

        var draw = new OpenLayers.Control.customeDragPan().draw;
        var nav = new OpenLayers.Control.TouchNavigation({
            dragPanOptions: {
                draw: draw,
                enableKinetic: 0.00135  //滑动惯性大小
            },
            id: this.touchNavigationId,
            autoActivate: false  //不自动激活，防止双指操作时地图晃动
        });
        this.map.addControl(nav);
        this.map.events._msTouches.length = 0;
        nav.activate();
    }

};

