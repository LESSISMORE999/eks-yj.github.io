$(document).ready(function() {
    var baseUrl = "https://www.braveandoutstanding.com:9999/";
    $("#new_content").click(function get_rand_one() {
        var result_message = '';
        var error_message = '';
        $.ajax({
            type : "POST",
            url : baseUrl + "inspirational/get_rand_one",
            contentType: "application/json; charset=utf-8",
            dataType: "JSON",
            async : true,
            success : function(result,status,xhr){
                if(xhr.status === 200 ){
                    if (result.success === true) {
                        result_message = result.result;
                        $("#txt_id").html(result.result.id);
                        $("#txt_name").html(result.result.sentence_string);
                    }else{
                        error_message = result.errorMsg;
                    }
                }else{
                    error_message = "连接服务失败,请稍后再试,网络状态码:" + xhr.status;
                }
            },
            error: function(xhr,status,error) {
                error_message = error;
            },
            complete:function(xhr,status){
                if(result_message !== ''){
                    console.log("result_message",result_message);
                }else{
                    console.log("error_message",error_message);
                }
            }
        });
    });
    $("#new_content").click();
});