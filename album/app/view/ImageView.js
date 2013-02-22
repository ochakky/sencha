/**
 * @class Ext.org.ImageView
 * @extends Ext.view.View
 * @xtype imageview
 *
 * This class implements the "My Images" view (the images in the organizer). This class
 * incorporates {@link Ext.ux.DataView.Draggable Draggable} to enable dragging items as
 * well as {@link Ext.ux.DataView.DragSelector DragSelector} to allow multiple selection
 * by simply clicking and dragging the mouse.
 */
Ext.define('album.view.ImageView', {
    extend: 'Ext.view.View',
    alias : 'widget.imageView',
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
    },
    store: 'Pictures',
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap">',
                '<div class="thumb">',
                    '<img src="{path}{name}" />', 
                '</div>',
                '<span>{name}</span>',
            '</div>',
        '</tpl>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    multiSelect: true,
    singleSelect: false,
    cls: 'x-image-view',
    autoScroll: true,
  
    initComponent: function() {
    	var me = this;
    	
//    	me.mixins.dragSelector.init(me);
//    	me.mixins.draggable.init(me, {
//            ddConfig: {
//                ddGroup: 'pictureDD'
//            },
//            ghostTpl: [
//                '<tpl for=".">',
//                	'<div>',
//                    '<img src="{path}{name}" />',
//                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
//                    '</div>',
//                '</tpl>',
//                '<div class="count">',
//                    '{[values.length]} images selected',
//                '<div>'
//            ]
//        });
        
    	me.listeners = {
    			activate: me.log,
    			add: me.log,
    			render: me.render,
    			deactivate: me.log
    	};
    	
    	me.callParent();
    },
    
    log: function(me, eopts) {
    	console.log(eopts);
    },
    
    render: function(me, eopts) {
    	var me = this;
    	
    	me.mixins.dragSelector.init(me);
    	me.mixins.draggable.init(me, {
            ddConfig: {
                ddGroup: 'pictureDD'
            },
            ghostTpl: [
                '<tpl for=".">',
                	'<div>',
                    '<img src="{path}{name}" />',
                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
                    '</div>',
                '</tpl>',
                '<div class="count">',
                    '{[values.length]} images selected',
                '<div>'
            ]
        });
    	
    }
    
});