/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.menu.ColorPicker
 * @extends Ext.menu.Menu
 * <p>A menu containing a {@link Ext.picker.Color} Component.</p>
 * <p>Notes:</p><div class="mdetail-params"><ul>
 * <li>Although not listed here, the <b>constructor</b> for this class
 * accepts all of the configuration options of <b>{@link Ext.picker.Color}</b>.</li>
 * <li>If subclassing ColorMenu, any configuration options for the ColorPicker must be
 * applied to the <tt><b>initialConfig</b></tt> property of the ColorMenu.
 * Applying {@link Ext.picker.Color ColorPicker} configuration settings to
 * <b><tt>this</tt></b> will <b>not</b> affect the ColorPicker's configuration.</li>
 * </ul></div>
 *
 * {@img Ext.menu.ColorPicker/Ext.menu.ColorPicker.png Ext.menu.ColorPicker component}
 *
 * __Example Usage__
 *
 *     var colorPicker = Ext.create('Ext.menu.ColorPicker', {
 *         value: '000000'
 *     });
 *  
 *     Ext.create('Ext.menu.Menu', {
 *         width: 100,
 *         height: 90,
 *         floating: false,  // usually you want this set to True (default)
 *         renderTo: Ext.getBody(),  // usually rendered by it's containing component
 *         items: [{
 *             text: 'choose a color',
 *             menu: colorPicker
 *         },{
 *             iconCls: 'add16',
 *             text: 'icon item'
 *         },{
 *             text: 'regular item'
 *         }]
 *     });
 *
 * @author Nicolas Ferrero
 */
 Ext.define('Ext.menu.ColorPicker', {
     extend: 'Ext.menu.Menu',

     alias: 'widget.colormenu',

     requires: [
        'Ext.picker.Color'
     ],

    /**
     * @cfg {Boolean} hideOnClick
     * False to continue showing the menu after a date is selected, defaults to true.
     */
    hideOnClick : true,

    /**
     * @cfg {String} pickerId
     * An id to assign to the underlying color picker. Defaults to <tt>null</tt>.
     */
    pickerId : null,

    /**
     * @cfg {Number} maxHeight
     * @hide
     */

    /**
     * The {@link Ext.picker.Color} instance for this ColorMenu
     * @property picker
     * @type ColorPicker
     */

    /**
     * @event click
     * @hide
     */

    /**
     * @event itemclick
     * @hide
     */

    initComponent : function(){
        var me = this;

        Ext.apply(me, {
            plain: true,
            showSeparator: false,
            items: Ext.applyIf({
                cls: Ext.baseCSSPrefix + 'menu-color-item',
                id: me.pickerId,
                xtype: 'colorpicker'
            }, me.initialConfig)
        });

        me.callParent(arguments);

        me.picker = me.down('colorpicker');

        /**
         * @event select
         * Fires when a date is selected from the {@link #picker Ext.picker.Color}
         * @param {Ext.picker.Color} picker The {@link #picker Ext.picker.Color}
         * @param {String} color The 6-digit color hex code (without the # symbol)
         */
        me.relayEvents(me.picker, ['select']);

        if (me.hideOnClick) {
            me.on('select', me.hidePickerOnSelect, me);
        }
    },

    /**
     * Hides picker on select if hideOnClick is true
     * @private
     */
    hidePickerOnSelect: function() {
        Ext.menu.Manager.hideAll();
    }
 });
