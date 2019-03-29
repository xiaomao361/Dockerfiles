/***
Wrapper/Helper Class for datagrid based on jQuery Datatable Plugin
***/

var Datatable = function () {

    var tableOptions;  // main options
    var dataTable; // datatable object
    var table;    // actual table jquery object
    var tableContainer;    // actual table container object
    var tableWrapper; // actual table wrapper jquery object
    var tableInitialized = false;
    var ajaxParams = []; // set filter mode
    
    var countSelectedRecords = function() {
        var selected = $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked', table).size();
        var text = tableOptions.dataTable.oLanguage.sGroupActions;
        if (selected > 0) {
            $('.table-group-actions > span', tableWrapper).text(text.replace("_TOTAL_", selected));
        } else {
            $('.table-group-actions > span', tableWrapper).text("");
        }
    }

    return {

        //main function to initiate the module
        init: function (options) {
            
            if (!$().dataTable) {
                return;
            }

            var the = this;

            // default settings
            options = $.extend(true, {
                src: "",  // actual table 
                filterApplyAction: "filter",
                filterCancelAction: "filter_cancel",
                resetGroupActionInputOnSuccess: true,
                dataTable: {
                    "sDom" : "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r><'table-scrollable't><'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>r>>", // datatable layout
                    
                    "aLengthMenu": [ // set available records per page
                        [20, 50, 100],
                        [20, 50, 100]
                    ],
                    "iDisplayLength": 20, // default records per page
                    "oLanguage": {  // language settings
                        "sProcessing": '<img src="http://127.0.0.1/privilege_inc/assets/img/loading-spinner-grey.gif"/><span>&nbsp;&nbsp;Loading...</span>',
                        "sLengthMenu": " &nbsp;<span class='seperator'>|</span>&nbsp;每页显示 _MENU_ 条记录",
                        "sInfo": "<span class='seperator'>|</span>总计 _TOTAL_ 条记录",
                        "sInfoFiltered": "(从 _MAX_ 条记录中过滤)",
                        "sInfoEmpty": " &nbsp;没有记录",
                        "sGroupActions": "_TOTAL_ 条记录被选中 ：  ",
                        "sAjaxRequestGeneralError": "请求失败. 请检查你的网络连接、返回数据格式、服务器配置",
                        "sEmptyTable":  "没有查询结果",
                        "sZeroRecords": "没有查询结果",
                        "oPaginate": {
                            "sFirst": "首页",
                            "sPrevious": "前一页",
                            "sNext": "后一页",
                            "sLast": "尾页",
                            "sPage": "页码",
                            "sPageOf": "，总计"
                        }
                    },

                    "aoColumnDefs" : [{  // define columns sorting options(by default all columns are sortable extept the first checkbox column)
                        'bSortable' : false,
                        'aTargets' : [ 0 ]
                    }],

                    "bAutoWidth": false,   // disable fixed width and enable fluid table
                    "bSortCellsTop": true, // make sortable only the first row in thead
                    "sPaginationType": "bootstrap_full_number", // pagination type(bootstrap, bootstrap_full_number or bootstrap_extended)
                    "bProcessing": true, // enable/disable display message box on record load
                    "bServerSide": true, // enable/disable server side ajax loading
                    "sAjaxSource": "", // define ajax source URL
                    "sServerMethod": "POST",

                    // handle ajax request
                    "fnServerData": function ( sSource, aoData, fnCallback, oSettings ) {

                        //把分页参数改变名称传递，改成符合预先定义好的查询对象的名字
                        var c = 0;
                        var pageSize,start;
                        for(var i=0;i<aoData.length;i++)
                        {
                            if(aoData[i].name=="iDisplayLength")
                            {
                                aoData.push( { "name": "pageSize", "value": aoData[i].value } );
                                pageSize = parseInt(aoData[i].value);
                                c = c+1;
                                continue;
                            }
                            if(aoData[i].name=="iDisplayStart")
                            {
                                start = parseInt(aoData[i].value);
                                c = c+1;
                            }
                            if(c >= 2) break;                            
                        }
                        aoData.push( { "name": "pageNo", "value": parseInt(start/pageSize)+1 } );

                        //处理查询参数
                        aoDataHandler(aoData);

                      oSettings.jqXHR = $.ajax( {
                        "dataType": 'json',
                        "type": "POST",
                        "url": sSource,
                        "data": aoData,
                        "success": function(res, textStatus, jqXHR) {
                            if (res.sMessage) {
                                App.alert({type: (res.sStatus == 'OK' ? 'success' : 'danger'), icon: (res.sStatus == 'OK' ? 'check' : 'warning'), message: res.sMessage, container: tableWrapper, place: 'prepend'});
                            } 
                            if (res.sStatus) {
                                if (tableOptions.resetGroupActionInputOnSuccess) {
                                    $('.table-group-action-input', tableWrapper).val("");
                                }
                            }
                            if ($('.group-checkable', table).size() === 1) {
                                $('.group-checkable', table).attr("checked", false);
                                $.uniform.update($('.group-checkable', table));
                            }
                            if (tableOptions.onSuccess) {
                                tableOptions.onSuccess.call(the);
                            }
                            fnCallback(res, textStatus, jqXHR);
                        },
                        "error": function(xhr, error, thrown) {
                            if (tableOptions.onError) {
                                tableOptions.onError.call(the);
                            }
                            App.alert({type: 'danger', icon: 'warning', message: tableOptions.dataTable.oLanguage.sAjaxRequestGeneralError, container: tableWrapper, place: 'prepend'});
                            $('.dataTables_processing', tableWrapper).remove();
                        }
                      } );
                    },

                    // pass additional parameter
                    "fnServerParams": function ( aoData ) {
                        //here can be added an external ajax request parameters.
                        for(var i in ajaxParams) {
                            var param = ajaxParams[i];
                            aoData.push({"name" : param.name, "value": param.value});
                        }
                    },
                   
                    "fnDrawCallback": function( oSettings ) { // run some code on table redraw
                        if (tableInitialized === false) { // check if table has been initialized
                            tableInitialized = true; // set table initialized
                            table.show(); // display table
                        }
                        App.initUniform($('input[type="checkbox"]', table));  // reinitialize uniform checkboxes on each table reload
                        countSelectedRecords(); // reset selected records indicator
                    }
                }
            }, options);

            tableOptions = options;
                       
            // create table's jquery object
            table = $(options.src);
            tableContainer = table.parents(".table-container");

            // apply the special class that used to restyle the default datatable
            $.fn.dataTableExt.oStdClasses.sWrapper = $.fn.dataTableExt.oStdClasses.sWrapper + " dataTables_extended_wrapper";

            // initialize a datatable
            dataTable = table.dataTable(options.dataTable);
    
            tableWrapper = table.parents('.dataTables_wrapper');

            // modify table per page dropdown input by appliying some classes
            $('.dataTables_length select', tableWrapper).addClass("form-control input-xsmall input-sm");

            // build table group actions panel
            if ($('.table-actions-wrapper', tableContainer).size() === 1) {
                $('.table-group-actions', tableWrapper).html($('.table-actions-wrapper', tableContainer).html()); // place the panel inside the wrapper
                $('.table-actions-wrapper', tableContainer).remove(); // remove the template container
            }
            // handle group checkboxes check/uncheck
            $('.group-checkable', table).change(function () {
                var set = $('tbody > tr > td:nth-child(1) input[type="checkbox"]', table);
                var checked = $(this).is(":checked");
                $(set).each(function () {
                    $(this).attr("checked", checked);
                });
                $.uniform.update(set);
                countSelectedRecords();
            });

            // handle row's checkbox click
            table.on('change', 'tbody > tr > td:nth-child(1) input[type="checkbox"]', function(){
                countSelectedRecords();
            });

            // handle filter submit button click
            table.on('click', '.filter-submit', function(e){
                e.preventDefault();

                the.addAjaxParam("sAction", tableOptions.filterApplyAction);

                // get all typeable inputs
                $('textarea.form-filter, select.form-filter, input.form-filter:not([type="radio"],[type="checkbox"])', table).each(function(){
                    the.addAjaxParam($(this).attr("name"), $(this).val());
                });

                // get all checkable inputs
                $('input.form-filter[type="checkbox"]:checked, input.form-filter[type="radio"]:checked', table).each(function(){
                    the.addAjaxParam($(this).attr("name"), $(this).val());
                });
                
                dataTable.fnDraw();
                the.clearAjaxParams();
            });

            // handle filter cancel button click
            table.on('click', '.filter-cancel', function(e){
                e.preventDefault();
                $('textarea.form-filter, select.form-filter, input.form-filter', table).each(function(){
                    $(this).val("");
                });
                $('input.form-filter[type="checkbox"]', table).each(function(){
                    $(this).attr("checked", false);
                });               
                the.addAjaxParam("sAction", tableOptions.filterCancelAction);
                dataTable.fnDraw();
                the.clearAjaxParams();
            });
        },

        getSelectedRowsCount: function() {
            return $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked', table).size();
        },

        getSelectedRows: function() {
            var rows = [];
            $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked', table).each(function(){
                rows.push({name: $(this).attr("name"), value: $(this).val()});
            });

            return rows;
        },

        addAjaxParam: function(name, value) {
           ajaxParams.push({"name": name, "value": value});
        },

        clearAjaxParams: function(name, value) {
           ajaxParams = [];
        },

        getDataTable: function() {
            return dataTable;
        },

        getTableWrapper: function() {
            return tableWrapper;
        }, 

        gettableContainer: function() {
            return tableContainer;
        }, 

        getTable: function() {
            return table;
        }        

    };

};