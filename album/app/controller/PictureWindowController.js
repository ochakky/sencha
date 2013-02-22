Ext.define('album.controller.PictureWindowController', {
    extend: 'Ext.app.Controller',
    

    init : function(application) {
	    this.control({
	        "imageView": {
	            selectionchange: this.onDataviewSelectionChange
			},
            "slider": {
                change: this.onSliderChange
	        }
	    });
    },

	onDataviewSelectionChange: function(dataview, selections, options) {
	    var w = dataview.view.up("panel");
	    var sp = w.down("#pictureDetailPanel");
	
	    if (selections.length === 0)
	    return;
	
	    var data = selections[0].data;
	
	    sp.update(data);

		sp.showBand(data);
	},
	
    onSliderChange: function(slider, newValue, thumb, options) {
        var sp = slider.up("panel");

        var sc = newValue / 100;
        sp.scale = sc;

        var e = sp.getEl().select('div.scalablePanel').first();

        var scale = "scale(" + sc + "," + sc + ")";

        e.setStyle('webkitTransform', scale);

    }
});