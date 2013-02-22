
Ext.define('Ext.ux.grid.plugin.DragDrop', {
    extend: 'Ext.grid.plugin.DragDrop',
    alias: 'plugin.ux.gridviewdragdrop',

    onViewRender : function(view) {
        var me = this;

        if (me.enableDrag) {
            me.dragZone = new Ext.view.DragZone({
                view: view,
                ddGroup: me.dragGroup || me.ddGroup,
                dragText: me.dragText
            });
        }

        if (me.enableDrop) {
            me.dropZone = new Ext.grid.ViewDropZone({
                view: view,
                ddGroup: me.dropGroup || me.ddGroup,
                
				onNodeDrop: function(node, dragZone, e, data) {
				    var me = this;
				    var r = me.view.getRecord(node);
				    
				    var src = data.records[0];
				    
					if (r.get('url') !== 'pic/personals/noimage.gif') {
						return false;
					}
					
					r.set('url', src.get('path') + src.get('name'));
				    
				    return true;
				},
				// The mouse is over a View node
				onNodeOver: function(node, dragZone, e, data) {
				    var me = this;
				
//					if (!Ext.Array.contains(data.records, me.view.getRecord(node))) {
//					    me.positionIndicator(node, data, e);
//					}
					
				    var r = me.view.getRecord(node);
				    if (r.data.url === 'pic/personals/noimage.gif') {
				    	return me.dropAllowed
				    }

				    return me.dropNotAllowed;
				}
            });
        }
    }
});