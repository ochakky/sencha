Ext.define("album.view.PictureWindow", {
    extend: 'Ext.window.Window',

    uses: ['album.view.PictureBrowserPanel'],
    
    itemId: 'pictureWindow',
    
    x:400,
    y:100,
    height: 640,
	width: 480,
	layout: {
	    type: 'border'
	},
	title: '写真ブラウザ',
    maximizable: true,
    
	initComponent: function() {
		var me = this;
	
		me.items = [
			{
                xtype: 'tabpanel',
                region: 'center',
                activeTab: 0,
                items: [
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'fit'
                        },
                        title: '個人写真',
                        items: [
                            {
                                xtype: 'pictureBrowserPanel',
                                region: 'center'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'fit'
                        },
                        title: 'スナップ写真',
                        items: [
                                // 初期化していないパネル上でドラッグドロップを初期化しようとすると
                                // エラーになる
//                            {
//                                xtype: 'pictureBrowserPanel'
//                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        title: '素材写真'
                    },
                    {
                        xtype: 'panel',
                        title: '集合写真'
                    }
                ],
                listeners: {
//                    tabchange: {
//                        fn: me.onTabpanelTabChange,
//                        scope: me
//                    },
//                    beforeactivate: {
//                        fn: me.onTabpanelBeforeActivate,
//                        scope: me
//                    },
//                    activate: {
//                        fn: me.onTabpanelActivate,
//                        scope: me
//                    }
                }
			}
		 ];
		
		me.callParent(arguments);
	}

});