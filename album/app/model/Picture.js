Ext.define('album.model.Picture', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'auto' },
        { name: 'path', type: 'auto' },
        { name: 'leaf', type: 'auto', defaultValue: true },
        { name: 'x', type:'auto'},
        { name: 'y', type:'auto'},
        { name: 'w', type:'auto'},
        { name: 'h', type:'auto'},
    ]
});

