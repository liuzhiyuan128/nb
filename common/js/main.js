//
var num1 = '',
    num2 = '';
//通用单选框
function scoreForm(obj1) {
    $("#" + obj1 + " ul li").click(function () {
        // var num = $(this).index();
        var text = $(this).find('i').data('score');
        
        //console.log(text)
        $(this).addClass("active").siblings().removeClass("active");

        $("#" + obj1 + "").find('.tiptool').animate({
            'opacity': '1'
        })
        $("#" + obj1 + "").find('.tiptool').html(text)
    })
}
$.getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//表单序列化
$.fn.formEdit = function (data) {
    return this.each(function () {
        var input, name;
        if (data == null) { this.reset(); return; }
        for (var i = 0; i < this.length; i++) {
            input = this.elements[i];
            //checkbox的name可能是name[]数组形式
            name = (input.type == "checkbox") ? input.name.replace(/(.+)\[\]$/, "$1") : input.name;
            if (data[name] == undefined) continue;
            switch (input.type) {
                case "checkbox":
                    if (data[name] == "") {
                        input.checked = false;
                    } else {
                        //数组查找元素
                        if (data[name].indexOf(input.value) > -1) {
                            input.checked = true;
                            
                        } else {
                            input.checked = false;
                            
                        }
                    }
                    break;
                case "radio":
                    if (data[name] == "") {
                        input.checked = false;
                        
                    } else if (input.value == data[name]) {
                        input.checked = true;
                        
                    }
                    break;
                case "button": break;
                default: input.value = data[name];
            }
        }
    });
};

/**
 * 判断非空
 * 
 * @param val
 * @returns {Boolean}
 */
function isEmpty(val) {
    val = $.trim(val);
    if (val == null)
        return true;
    if (val == undefined || val == 'undefined')
        return true;
    if (val == "")
        return true;
    if (val.length == 0)
        return true;
    if (!/[^(^\s*)|(\s*$)]/.test(val))
        return true;
    return false;
}

function isNotEmpty(val) {
    return !isEmpty(val);
}