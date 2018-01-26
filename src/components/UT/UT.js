//发送POST请求
export  let postFetch=(url,formData)=>{
    let obj={
        ok:false,
        data:{}
    }

    fetch(url, {
        method : 'POST',
        mode : 'cors',
        body : formData
    }).then(function(res){
        if(res.ok){
            res.json().then(function(data){
                obj.ok=true;
                obj.data=data;
            })
        }else{
            console.log('请求失败');


        }
    }, function(e){
        console.log('请求失败');
         console.error(e);
    })

    return obj;
}