Ext.define("album.view.LoginWindow", {
    extend: 'Ext.window.Window',

    height: 147,
    itemId: 'loginWindow',
    width: 296,
    layout: {
        type: 'fit'
    },
    title: 'Login',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 139,
                    itemId: 'formLogin',
                    width: 323,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'textAccount',
                            fieldLabel: 'ユーザ名'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'textPassword',
                            fieldLabel: 'パスワード'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnOk',
                            text: 'OK'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCancel',
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});