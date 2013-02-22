Ext.define("album.view.StudentGrid", {
    extend: 'Ext.grid.Panel',

    alias: 'widget.studentGrid',
    
    uses: ['Ext.ux.grid.plugin.DragDrop'],
    
    store: 'Students',
    
	viewConfig: {
	    plugins: {
			ptype:'ux.gridviewdragdrop',
			ddGroup:'pictureDD',
			enableDrag: false,
			enableDrop: true
	    }
	},
//viewConfig: {
//listeners: {
//    render: initializeHospitalDropZone
//}
//},

	columns: [
		{
		    xtype: 'gridcolumn',
		    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
		        return Ext.String.format('<div style="width:50px;height:50px"><img src="{0}" style="max-width:100%;max-height:100%" /></div>', value);
		    },
		    dataIndex: 'url',
		    text: '顔写真'
		},
		{
		    xtype: 'gridcolumn',
		    dataIndex: 'name',
		    text: '名前'
		},
		{
		    xtype: 'gridcolumn',
		    dataIndex: 'grade',
		    text: '学年'
		},
		{
		    xtype: 'gridcolumn',
		    dataIndex: 'clazz',
		    text: 'クラス'
		},
		{
		    xtype: 'datecolumn',
		    dataIndex: 'birthday',
		    text: '誕生日'
		},
		{
		    xtype: 'numbercolumn',
		    dataIndex: 'id',
		    text: 'Id'
		}
	],
	initComponent: function() {
		var me = this;

//		me.on('render', function() {
//			me.dropZone = Ext.create('Ext.dd.DropZone', me.el, {
//	             // If the mouse is over a grid row, return that node. This is
//	             // provided as the "target" parameter in all "onNodeXXXX" node event handling functions
//	             getTargetFromEvent: function(e) {
//	                 return e.getTarget(me.getView().rowSelector);
//	             },
//	             
//	             // On entry into a target node, highlight that node.
//	             onNodeEnter : function(target, dd, e, data){
//	                  Ext.fly(target).addCls('my-row-highlight-class');
//	             },
//	 
//	              // On exit from a target node, unhighlight that node.
//	              onNodeOut : function(target, dd, e, data){
//	                  Ext.fly(target).removeCls('my-row-highlight-class');
//	              },
//	 
//	              // While over a target node, return the default drop allowed class which
//	              // places a "tick" icon into the drag proxy.
//	              onNodeOver : function(target, dd, e, data){
//	                  return Ext.dd.DropZone.prototype.dropAllowed;
//	              },
//	 
//	              // On node drop we can interrogate the target to find the underlying
//	              // application object that is the real target of the dragged data.
//	              // In this case, it is a Record in the GridPanel's Store.
//	              // We can use the data set up by the DragZone's getDragData method to read
//	              // any data we decided to attach in the DragZone's getDragData method.
//	              onNodeDrop : function(target, dd, e, data){
//	                  var rowIndex = me.getView().findRowIndex(target);
//	                  var r = me.getStore().getAt(rowIndex);
//	                  Ext.Msg.alert('Drop gesture', 'Dropped Record id ' + data.draggedRecord.id +
//	                      ' on Record id ' + r.id);
//	                  return true;
//	              }
//				}
//			)
//			}
//		);
		
		me.callParent(arguments);
	}
});

function initializeHospitalDropZone(v) {
	
    var gridView = v,
        grid = gridView.up('gridpanel');

    grid.dropZone = Ext.create('Ext.dd.DropZone', v.el, {
    	ddGroup: 'pictureDD',
    	
//      If the mouse is over a target node, return that node. This is
//      provided as the "target" parameter in all "onNodeXXXX" node event handling functions
        getTargetFromEvent: function(e) {
//    		return e.getTarget('.hospital-target');
    		return e.getTarget(v.rowSelector);
        },

//      On entry into a target node, highlight that node.
        onNodeEnter : function(target, dd, e, data){
            Ext.fly(target).addCls('hospital-target-hover');
        },

//      On exit from a target node, unhighlight that node.
        onNodeOut : function(target, dd, e, data){
            Ext.fly(target).removeCls('hospital-target-hover');
        },

//      While over a target node, return the default drop allowed class which
//      places a "tick" icon into the drag proxy.
        onNodeOver : function(target, dd, e, data){
            return Ext.dd.DropZone.prototype.dropAllowed;
        },

//      On node drop, we can interrogate the target node to find the underlying
//      application object that is the real target of the dragged data.
//      In this case, it is a Record in the GridPanel's Store.
//      We can use the data set up by the DragZone's getDragData method to read
//      any data we decided to attach.
        onNodeDrop : function(target, dd, e, data){
            var rowBody = Ext.fly(target).findParent('.x-grid-rowbody-tr', null, false),
                mainRow = rowBody.previousSibling,
                h = gridView.getRecord(mainRow),
                targetEl = Ext.get(target);

            targetEl.update(data.patientData.name + ', ' + targetEl.dom.innerHTML);
            Ext.Msg.alert('Drop gesture', 'Dropped patient ' + data.patientData.name +
                ' on hospital ' + h.data.name);
            return true;
        }
    });
}