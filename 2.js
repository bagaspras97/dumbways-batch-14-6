function minMax(arr){
    var newArr = [];
    
    
    if(arr[0]=='a'){
      newArr.push(arr[0]);
      arr.reverse();
      newArr.push(arr[0]);
      console.log(newArr);
    } else{
      arr.shift();
      
      if(arr[0]=='a'){
        newArr.push(arr[0]);
        arr.reverse();
        newArr.push(arr[0]);
        console.log(newArr);
      }else{
        arr.shift();
        
        if(arr[0]=='a'){
          newArr.push(arr[0]);
          arr.reverse();
          newArr.push(arr[0]);
          console.log(newArr)
      }else{
        arr.shift();
        console.log(arr)
      }
    } 
      
    }
    }
    
    var data = ['h','g','a','b','d','f']; 
    var dataLain = ['a','b','c','d']; 
    minMax(data);
    minMax(dataLain);
    
     
    
    
    
    