Ext.define("album.view.StudentWindow", {
    extend: 'Ext.window.Window',
    
    alias: 'widget.studentWindow',
    
    uses: ['album.view.StudentGrid', 'album.view.StudentTree'],
    
    itemId: 'studentWindow',
    
    x: 0,
    y: 0,
	height: 537,
	width: 735,
	layout: {
	    type: 'border'
	},
	title: 'H25年卒業生',
	maximizable: true,

	items: [
	        {
	        	xtype: 'studentTree',
	        	flex: 2,
	        	region: 'west',
	        	split: true,
	        	width: 150
	        },
	        {
	        	xtype: 'studentGrid',
	        	flex: 8,
	        	region: 'center',
	        	split: true,
	        	width: 150
	        }
	        
	        
	        ],
	        
    initComponent: function() {
		var me = this;
		
//		debugger;
		
		me.callParent(arguments);
	}

});