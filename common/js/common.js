//var baseUrl ="http://shumi-gateway.vicp.io:24398/";
//var baseUrl ="http://192.168.10.157:8091/";
//var baseUrl ="http://192.168.10.215:8090/";

    var baseUrl = "http://118.31.7.200:8091/"//阿里云
//var baseUrl = "http://118.31.7.200:8090/"//阿里云
//var baseUrl ="http://192.168.10.122:809/bettle/api/";
//var baseUrl ="http://192.168.43.48:8090/";//
//var baseUrl ="http://192.168.43.48:8090/";
//var baseUrl ="http://192.168.10.167:8091/";//老王
//var baseUrl = "http://192.168.1.3:8888/";//me

var loginUser = baseUrl +'rbac/user/login',                //登录
    registerUser=baseUrl +'rbac/user/register',            //退出
    insertCheckInfo=baseUrl +'bettle/api/check/insertCheckInfo', //抽查
    userList = baseUrl + 'bettle/api/check/getCheckList', //抽查
    redo = baseUrl + 'bettle/api/check/redo',  //重办GET /bettle/api/check/
    userMsg = baseUrl + 'bettle/api/check/selectByTrashId',
    //userMsg = '../../../nb/common/mock/mock.json'
    
    checkUser = baseUrl +'bettle/api/check/getDetailByCheckuserId/',
    getDetailByUserId=baseUrl+'bettle/api/check/getUserById/',
    getUserListByMonth= baseUrl+'bettle/api/evaluation/getUserListByMonth/',//住户
    getVillageListByMonth= baseUrl+'bettle/api/evaluation/getVillageListByMonth/',//村
    getTownListByMonth= baseUrl+'bettle/api/evaluation/getTownListByMonth/',//村
    getUserListByMonthUserName=baseUrl+'bettle/api/evaluation/getEvaluationById/',
   	selectAllCheckdUserNot = baseUrl + "bettle/api/check/selectAllCheckdUserNot",
    redo = baseUrl + "bettle/api/check/redo",
    selectAllCheckdUserNotTown = baseUrl + "bettle/api/check/selectAllCheckdUserNotTown",
    selectAllCheckdUserNotArea = baseUrl + "bettle/api/check/selectAllCheckdUserNotArea",
     
   	updateCheckUserPressdo = baseUrl + "bettle/api/check/updateCheckUserPressdo",
   	updateCheckUserNomal = baseUrl + "bettle/api/check/updateCheckUserNomal/",
   	updateCheckUserRedo = baseUrl + "bettle/api/check/updateCheckUserRedo",
   	judgeState = baseUrl + "bettle/api/check/judgeState/", //权限
   	updateCheckUserForce = baseUrl + "bettle/api/check/updateCheckUserForce/",//强制终结
   	selectAllCheckedUserMangerOrVillager = baseUrl + "bettle/api/check/selectAllCheckedUserMangerOrVillager/",//
   	getEvaluationByIdTime = baseUrl + "bettle/api/evaluation/",//
   	getNum = baseUrl + "bettle/api/evaluation/getScoreById/",//住户分数
   	getVillageScore = baseUrl + "bettle/api/evaluation/getVillageScore/",//村分数
   	getVillageDetail = baseUrl+'bettle/api/evaluation/getVillageDetail/',//村详情
   	
   	getTownScore = baseUrl + "bettle/api/evaluation/getTownScore/",//村分数
  
   	getTownDetail = baseUrl+'bettle/api/evaluation/getTownDetail/',//村详情
   	selectByPrimaryKey = baseUrl+"/bettle/api/composting/selectByPrimaryKey/",//查看堆肥房详情
   	judgeSate =	baseUrl+"/bettle/api/checkComposting/judgeSate/",//查看堆肥房状态
   	updatePositionByPrimary = baseUrl +"/bettle/api/composting/updatePositionByPrimary",//上传位置
   					
   	insertSelective = baseUrl +"/bettle/api/checkComposting/insertSelective",//是否督办提交
  	selectCheckComposting = baseUrl + "/bettle/api/checkComposting/selectCheckComposting",
  	selectCompostingScore = baseUrl + "/bettle/api/checkComposting/selectCompostingScore/",
   	selectCheckCompostingDetail = baseUrl + "/bettle/api/checkComposting/selectCheckCompostingDetail/",
   	checkCompostingFinish = baseUrl + "/bettle/api/checkComposting/checkCompostingFinish/",//督办结束
   	townPressdo = baseUrl + "/bettle/api/checkComposting/townPressdo/",//镇催办
   	areaPressdo = baseUrl + "/bettle/api/checkComposting/areaPressdo/",//区催办
   	selectCheckCompostingResult = baseUrl + "/bettle/api/checkComposting/selectCheckCompostingResult",//堆肥查看结果列表
   	updateAfterThreeDays = baseUrl + "/bettle/api/checkComposting/updateAfterThreeDays",//堆肥查看结果详情提交
   	selectCompostingRankByDateType = baseUrl + "/bettle/api/checkComposting/selectCompostingRankByDateType",//考核排名堆肥房
   	baseUrlDffDetail = baseUrl + "/bettle/api/checkComposting/",//堆肥房查看数据公共地址分数  需要拼接的 /selectCompostingTrendBymonth/{id} /selectCompostingTrendByquarter/{id} /selectCompostingTrendByyear/{id}
   	selectByPrimaryKey = baseUrl + "bettle/api/composting/selectByPrimaryKey/",//堆肥房详情 
   	selectCompostingScore = baseUrl + "/bettle/api/checkComposting/selectCompostingScore/",//堆肥房详情分数
   	selectPositionByName = baseUrl + "/bettle/api/composting/selectPositionByName/", //地图搜索结果
   	selectMyUserById = baseUrl + "/rbac/user/selectMyUserById/", //获取用户信息
   	updateUserImageById = baseUrl + "/rbac/user/updateUserImageById", //上传头像
   	modifyPassword = baseUrl + "/rbac/user/modifyPassword", //修改密码
     tree = baseUrl + "bettle/api/village/tree",
     areaTownTree = baseUrl + "bettle/api/village/areaTownTree",
      selfEvaluateController = baseUrl + "bettle/api/selfEvaluateController/judgeState/",
      insertSelective = baseUrl + "bettle/api/selfEvaluateController/insertSelective/",
      getSelfEvaluate = baseUrl + "bettle/api/selfEvaluateController/getSelfEvaluate"
      
     


   	
   	
   	
   	
   	
   	
   	

   	
   	


   	
   
   	


    
    
    
    
   


//function ajax(opt) {
//  opt = opt || {};
//  opt.method = opt.method.toUpperCase() || 'POST';
//  opt.url = opt.url || '';
//  opt.async = opt.async || true;
//  opt.data = opt.data || null;
//  opt.success = opt.success || function () {
//  };
//  opt.error = opt.error || function () {
//  };
//  opt.header = opt.header || function () {
//  };
//  var xmlHttp = null;
//  if (XMLHttpRequest) {
//      xmlHttp = new XMLHttpRequest();
//  } else {
//      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//  }
//  var params = [];
//  for (var key in opt.data) {
//      params.push(key + '=' + opt.data[key]);
//  }
//  var postData = params.join('&');
//  if (opt.method.toUpperCase() === 'POST') {
//      xmlHttp.open(opt.method, opt.url, opt.async);
//      xmlHttp.setRequestHeader('Content-Type',
//          'application/x-www-form-urlencoded;charset=utf-8');
//      xmlHttp.send(postData);
//  } else if (opt.method.toUpperCase() === 'GET') {
//      xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
//      xmlHttp.send(null);
//  }
//  xmlHttp.onreadystatechange = function () {
//      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//          var json = JSON.parse(xmlHttp.responseText);
//          var hears = xmlHttp.getAllResponseHeaders();
//          opt.success(json);
//          opt.header(hears);
//      }
//  };
//}
/*
抽查插入
{
  "bz": "string",
  "createTime": "2018-02-24T09:01:54.207Z",
  "evaluationId": "string",
  "executionId": "string",
  "id": "string",
  "image": "string",
  "issupervision": 0,
  "istermination": 0,
  "limitTime": "2018-02-24T09:01:54.208Z",
  "lrr": "string",
  "redo": 0,
  "spervisionId": "string",
  "trashId": "string",
  "updateTime": "2018-02-24T09:01:54.208Z",
  "usersId": "string"
}

{
	
  "checkuserId": "string",
  "hlfl": true,
  "id": "string",
  "sfkt": true,
  "total": "string",
  "tyws": true,
  "updateTime": "2018-02-24T09:01:54.208Z",
  "xgr": "string"
}

{
  "checkuserId": "string",
  "fkyj": "string",
  "id": "string",
  "updateTime": "2018-02-24T09:01:54.208Z",
  "zgyj": "string"
}


重办
{
  "checkuserId": "string",
  "fkyj": "string",
  "id": "string",
  "updateTime": "2018-02-24T09:01:54.209Z",
  "zgyj": "string",
  "date-time":""
}
*/


function msgcl(msg){
    if(msg==null){
        return '无'
    }else{
        return msg
    }
}
