$(document).ready(function(){
    $('#positionedDialog').click(function(e){
        $.Dialog({
            'title' : 'right Dialog',
            'content' : 'this is content',
            'draggable' : true,
            'closeButton' : true,
            'position' : {
                'zone' : 'right'
            },
            'buttons' : {
                'Ok' : {
                    'action' : function(){}
                },
                'Retry' : {
                    'action' :function(){}
                },
                'cancel' : {
                    'action' : function(){}
                }
            }
        });
    });
});