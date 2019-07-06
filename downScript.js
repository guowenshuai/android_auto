"ui";
//auto();



// 下载地址的网络根目录
let downRoot = "https://raw.githubusercontent.com/guowenshuai/android_auto";
// 本地存储文件路径
let localPath = "/sdcard/脚本";
// github文件列表地址
let filesPath = "https://api.github.com/repos/guowenshuai/android_auto/contents"

ui.layout(
    <vertical>
        <text textSize="18sp" textColor="#000000" margin="20" textStyle="bold">
            下载脚本
        </text>
        <ScrollView>
        <vertical marginLeft="30">
            <list id="list">
                <vertical>
                    <text id="name" textSize="16sp" textColor="#FF9ACC99" text="{{name}}"/>
                </vertical>
            </list>
        </vertical>
        </ScrollView>
    </vertical>
);

threads.start(function() {
    let filesObj = JSON.parse(downFile(filesPath))
    ui.run(()=> {
        ui.list.setDataSource(filesObj);
        ui.list.on("item_click", function(item, i, itemView, listView){
            toast("clicked: " + item.name);
        });
    });
})


// 网络文件获取
function downFile(url, headers) {
    var res;
    if (headers === null) {
        res = http.get(url);
    } else {
        res = http.get(url, {headers: headers});
    }
    if(res.statusCode != 200){
        toast("请求失败");
        return "";
    }
    return res.body.string();    
}

// github文件下载
function downFileAndSave(branch, fileName) {
    let url = downRoot + '/' + branch + '/' + fileName;
    let content = downFile(url);
    if (length(content) !== 0) {
        files.write(localPath + '/' + fileName, content);
        toast("下载成功");
    }
}
