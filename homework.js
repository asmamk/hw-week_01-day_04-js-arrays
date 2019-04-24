
// 1
const summation= function(n){
    let sum=0;
    for(let i = 1 ; i<=n ; i++){
            sum+=i;
    }
    return sum;
    
    }
    undefined
    summation(5)
    15







    //4 

    const reverse = function reverse(word){
        let rev = "";
        for(let i = word.length-1; i>=0; i--){
            rev += word[i];
        }
        return rev;
    }
    reverse("caterpillar")
            "rallipretac"



   //5 

   const addDashes = function(){

        let words = ["spring","summer","autumn","winter "]
        
        console.log(words.join("-"))
        }
        undefined
        addDashes();
        VM2564:5 spring-summer-autumn-winter 
