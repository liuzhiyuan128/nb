(function ($) {
    var Qrcode = function (tempBtn) {
        var _this_ = this;
        var isWeiboWebView = /__weibo__/.test(navigator.userAgent);
        if (isWeiboWebView) {
            if (window.WeiboJSBridge) {
                _this_.bridgeReady(tempBtn);
            } else {
                document.addEventListener('WeiboJSBridgeReady', function () {
                    _this_.bridgeReady(tempBtn);
                });
            }
        } else {
            _this_.nativeReady(tempBtn);
        }
    };
    Qrcode.prototype = {
        nativeReady: function (tempBtn) {
            $('[node-type=jsbridge]', tempBtn).on('click', function (e) {
                e.stopPropagation();
            });
            $(tempBtn).bind('click', function (e) {
                $(this).find('input[node-type=jsbridge]').trigger('click');
            });
            $(tempBtn).bind('change', this.getImgFile);
        },
        bridgeReady: function (tempBtn) {
            $(tempBtn).bind('click', this.weiBoBridge);
        },
        weiBoBridge: function () {
            window.WeiboJSBridge.invoke('scanQRCode', null, function (params) {
                $('.result-qrcode').append(params.result + '<br/>');
            });
        },
        getImgFile: function () {
            var _this_ = this;
            var inputDom = $(this).find('input[node-type=jsbridge]');
            var imgFile = inputDom[0].files;
            var oFile = imgFile[0];
            var oFReader = new FileReader();
            var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
            if (imgFile.length === 0) {
                return;
            }
            if (!rFilter.test(oFile.type)) {
                alert("选择正确的图片格式!");
                return;
            }
            oFReader.onload = function (oFREvent) {
                qrcode.decode(oFREvent.target.result);
                qrcode.callback = function (data) {
                    // $('.result-qrcode').append(data + '<br/>');
                    
                    var dataObj = eval("(" + data + ")");
                    console.log(dataObj)
                    $("#bh").val(dataObj.bh);
                    $.ajax({
                        url: userMsg,
                        type: 'get', //GET
                        data: {
                            trashId: '1001'
                        },
                        dataType: 'json',
                        success:function(res){
                            layui.use(['form', 'layedit', 'laydate'], function () {
                                var form = layui.form
                                , layer = layui.layer;
                                for(var i=0;i<res.length;i++){
                                    $(".other-name").append("<li>" + res[i].userName +"</li>")
                                }
                                var editForm =res[0]
                                $('#target').formEdit(editForm);
                                form.render('radio');
                                $(".other-name li").click(function(){
                                    var index=$(this).index();
                                    console.log(res[index]);
                                    var editForm = res[index]
                                    $('#target').formEdit(editForm);
                                    form.render('radio');
                                })
                            })
                        }
                    })
                };
            };
            oFReader.readAsDataURL(oFile);
        },
        destory: function () {
            $(tempBtn).off('click');
        }
    };
    Qrcode.init = function (tempBtn) {
        var _this_ = this;
        tempBtn.each(function () {
            new _this_($(this));
        });
    };
    window.Qrcode = Qrcode;
})(window.Zepto ? Zepto : jQuery);