Ext.Loader.setConfig({enabled: true});
//Ext.Loader.setPath('Ext.org', '.');
Ext.Loader.setPath('Ext.ux.DataView', 'ux/DataView');
Ext.Loader.setPath('Ext.ux.grid', 'ux/grid');


//Ext.require([
//'album.view.ImageView',
//    'album.view.OrgPanel'
//]);

Ext.application({
    models: ['Picture', 'Student', 'TreeNode'],

    controllers: ["PictureWindowController","LoginController"],

    views: ["StudentWindow","StudentTree","StudentGrid","PictureWindow","PictureDetailPanel","PictureBrowserPanel","LoginWindow", "ImageView"],

    stores: [
        'Pictures', 'Students', 'TreeNodes'
    ],
    name: 'album',

//    autoCreateViewport: true,
	
    launch: function() {
      var w = Ext.create('album.view.StudentWindow');
      w.show();
//    var w = Ext.create('album.view.LoginWindow');
//    w.show();
    var w = Ext.create('album.view.PictureWindow');
    w.show();

//	var w = Ext.create('album.view.PictureBrowserPanel', { 
//		renderTo: Ext.getBody(),
//		height: 490,
//		width : 700,
//		title:''
//	});
//	
//    w.show();
        
//		Ext.create('album.view.OrgPanel', {
//		    renderTo: Ext.getBody(),
//		    height: 490,
//		    width : 700,
//		    title:''
// });

//		Ext.create('album.view.StudentGrid', {
//	    renderTo: Ext.getBody(),
//	    height: 490,
//	    width : 700,
//	    title:''
//});
	}
});
