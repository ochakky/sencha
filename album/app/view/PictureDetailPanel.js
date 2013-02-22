Ext.define("album.view.PictureDetailPanel", {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.pictureDetailPanel',
    
    itemId: 'pictureDetailPanel',

    tpl: [
		'<div class="scalablePanel" style="position:absolute;-webkit-transform-origin:left top">',
		'    <img src="{path}{name}">',
		'</div>'
	],
	autoScroll: true,

	layout: {
	    type: 'fit'
	},
	dockedItems: [
	    {
	        xtype: 'toolbar',
	        dock: 'top',
	        items: [
	            {
	                xtype: 'label',
	                text: '選択中の写真'
	            },
	            {
	                xtype: 'slider',
	                itemId: 'sliderScale',
	                width: 400,
	                value: 87,
	                fieldLabel: '拡大率',
	                maxValue: 400
	            }
	        ]
	    }
	],

	showBand: function(data) {
		var comp  = Ext.create('Ext.draw.Component', {
	        itemId : "faceBounds",
	        style : {
	            position: 'absolute',
	            "z-index":10000,
	            opacity: 0.5
	        },
	        floating: true,
	        draggable: true,
	        resizable: {
	            dynamic: true,
	            pinned: true,
	            handles: 'all'
	        },
	        //    renderTo: sp.body
	
	        renderTo: this.getEl().select('div.scalablePanel').first()
	    });
	
	    comp.setPosition(data.x || 0, data.y || 0);
	    comp.setWidth(data.w || 50);
	    comp.setHeight(data.h || 50);
	
	    var e = this.getEl().select('div.scalablePanel').first();
	    var sc = this.scale || 1;
	    var scale = "scale(" + sc + "," + sc + ")";
	
	    e.dom.style.webkitTransform = scale;
	
	    comp.addListener("move", function(that, x, y) {
	        console.log("move " + x + "," + y);
	        data.x = x;
	        data.y = y;
	    });
	
	    comp.addListener("resize", function(that, w, h, oldw, oldh) {
	        console.log("resize " + w + "," + h);
	        data.w = w;
	        data.h = h;
	    });
	},

	initComponent: function() {
		var me = this;
		
	//	debugger;
		
		me.callParent(arguments);
	}
});