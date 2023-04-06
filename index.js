class Formatter {
  //add static methods here
  static capitalize(str){
return str.slice(0,1).toUpperCase()+str.slice(1,str.length)


  }
  static sanitize  (string){
    return string.replace(/[^A-Za-z0-9- \'']+/g, "");
  }
  static titleize(string){
    let arr =string.split(" ")
    arr[0]= this.capitalize(arr[0])
    for (let i=0 ; i<arr.length; i++){
      if( arr[i] !=='the' && arr[i]!== 'a' && arr[i]!=='an' && arr[i]!=='but' && arr[i]!=='of' && arr[i]!=='and' && arr[i]!=='for' && arr[i]!=='at' && arr[i]!=='by' && arr[i]!=='from'){
        arr [i]=this.capitalize(arr[i])
      }
    }
 return arr.join(" ") 
  }
}