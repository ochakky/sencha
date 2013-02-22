Ext.define('album.controller.LoginController', {
    extend: 'Ext.app.Controller',

    onButtonClick: function(button, e, options) {
        var form = button.up('window');
        form.close();

/*
        var rw = Ext.create('album.view.RegistStudentWindow');
        rw.show();

        var pw = Ext.create('album.view.PictureWindow');
        pw.show();
*/
	
Ext.create('album.view.OrgPanel', {
    renderTo: Ext.getBody(),
    height: 490,
    width : 700
});        
    },

    init: function(application) {
        this.control({
            "#loginWindow button": {
                click: this.onButtonClick
            }
        });
    }
});