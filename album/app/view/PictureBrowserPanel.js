Ext.define("album.view.PictureBrowserPanel", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.pictureBrowserPanel',
    
    uses: [
           'album.view.ImageView', 'album.view.PictureDetailPanel'
    ],

    height: 528,
    itemId: 'pictureBrowser',
    width: 465,
    layout: {
	type: 'border'
	},
	maximizable: true,

	initComponent: function() {
		var me = this;

		me.items = [
    		    {
    		        xtype: 'imageView',
    		        flex: 4,
    		        region: 'north',
    		        split: true
    		    },
    		    {
    		        xtype: 'pictureDetailPanel',
    		        flex: 6,
    		        region: 'center',
    		        split: true
    		    }
            
            ];

    me.callParent(arguments);
},

onTabpanelTabChange: function(tabPanel, newCard, oldCard, options) {
    var pv = tabPanel.down('#listedPicture');
    var sp = tabPanel.down("#selectedPicture");

    /*
    var store = pv.getStore();

    if (newCard.title === '個人写真') {
    store.proxy.url = 'data/personals.json';
    } else {
    store.proxy.url = 'data/snaps.json';
    }

    store.clearData();
    //tabPanel.refresh();

    store.load({
        callback: function(records, operation, success) {
            pv.refresh();
            sp.update();
        }
    });

    */
    /*
    var s;
    if (newCard.title === '個人写真') {
    s = Ext.getStore('Pictures');
    } else {
    s = Ext.getStore('SnapPictures');
    }

    s.load();
    pv.bindStore(s);
    */
},

onTabpanelBeforeActivate: function(abstractcomponent, options) {
    console.debug("beforeActivate");
},

onTabpanelActivate: function(abstractcomponent, options) {
    console.debug("activate");
}

});