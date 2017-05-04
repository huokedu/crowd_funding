//apiBase为空就是调用本地的json
//const apiBase = "http://192.168.1.33:3001/";
//http://192.168.1.31:8080/wx/login?data={"code":"测试","code2":"测试2"}
const apiBase = "";
const suffix = ".json"
export const raiseList   = apiBase + 'raise/list' + suffix;
