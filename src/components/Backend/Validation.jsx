export const validate = (data)=>{
  var error = {}
  for(let key in data){
    if(data[key]==''){
      error[key]='vui lòng nhập trường này'
    }
  }
  return error;
}