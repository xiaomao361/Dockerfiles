var UITree = function () {

    var handleSample1 = function () {

        $('#tree_1').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }            
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-warning icon-lg"
                }
            },
            "plugins": ["types"]
        }).on('select_node.jstree', function (e, data) {
            alert(data.instance.get_node(data.selected).id);
          });

    }

    var handleSample2 = function () {
        $('#tree_2').jstree({

            'plugins': ["type","checkbox"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                "multiple":true,
                'data': [{
                        "text": "Same but with checkboxes",
                        "children": [{
                            "text": "initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning icon-danger"
                        }, {
                            "text": "initially open",
                            "icon" : "fa fa-folder icon-default",
                            "state": {
                                "opened": true
                            },
                            "children": ["Another node"]
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning icon-warning"
                        }, {
                            "text": "disabled node",
                            "icon": "fa fa-check icon-success",
                            "state": {
                                "disabled": true
                            }
                        }]
                    },
                    "And wholerow selection"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-warning icon-lg"
                }
            }
        });
    }

    var contextualMenuSample = function() {

        $("#tree_3").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                            "icon": "fa fa-warning icon-danger"
                        }, {
                            "text": "Initially open",
                            "icon" : "fa fa-folder icon-success",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Another node", "icon" : "fa fa-file icon-warning"}
                            ]
                        }, {
                            "text": "Another Custom Icon",
                            "icon": "fa fa-warning icon-warning"
                        }, {
                            "text": "Disabled Node",
                            "icon": "fa fa-check icon-success",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "icon": "fa fa-folder icon-danger",
                            "children": [
                                {"text": "Item 1", "icon" : "fa fa-file icon-warning"},
                                {"text": "Item 2", "icon" : "fa fa-file icon-success"},
                                {"text": "Item 3", "icon" : "fa fa-file icon-default"},
                                {"text": "Item 4", "icon" : "fa fa-file icon-danger"},
                                {"text": "Item 5", "icon" : "fa fa-file icon-info"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-warning icon-lg"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "dnd", "state", "types" ]
        });
    
    }

     var ajaxTreeSample = function() {
$.ajaxSetup({cache:false});//ajax调用不使用缓存  
        $("#tree_4").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data' : {
                    'url' : function (node) {
                      return 'http://127.0.0.1/privilege_inc/assets/a.json';
                      //return node.id === '#' ? '/assetsparent/assets/ajax_roots.json' : '/assetsparent/assets/ajax_children.json';

                    },
                    'data' : function (node) {
                        //alert(node.text);
                      return { 'parent' : node.id };
                    }
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-warning icon-lg"
                }
            },
            "state" : { "key" : "demo3" },
            "plugins" : [ "dnd", "state", "types" ]
        });
    
    }


    return {
        //main function to initiate the module
        init: function () {

            handleSample1();
            handleSample2();
            contextualMenuSample();
            ajaxTreeSample();

        }

    };

}();



function getc()
{
    var o = $('#tree_2');
    var ref = $('#tree_2').jstree(true);//,sel = ref.get_selected(true);
    //var chk = $('#tree_2').jstree("get_checked");
    //alert(chk.length);
    //$("#tree_2").jstre("check_all");
    var c = ref.get_checked(true);
    //ref.hide_checkboxes();
    //var c = $.jstree.plugins.checkbox.get_checked($.jstree.reference("#tree_2"));
    alert(c);
}
