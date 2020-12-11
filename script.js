    var price_per_item =  {
        apple : 10,
        kiwi : 20,
        oranges : 30,
        banana : 15,
        grapes : 5,
        strawberries : 12,
        peach: 50,
        pineapple : 20,
        sugarcane : 70,
        watermelon : 20
    };
    var productId = document.getElementById('productId');
    var quantity = document.getElementById('quantity');
    var price =document.getElementById('price_per_item');

    var popup = document.getElementById("popup");


    function retrieveProductValues(e){
        const {checked} = e.target;
        if ({checked}){
            document.getElementById("popup"). style.display ="block";
            
        }
    }
    // function retrieveProductValues(productId){
    //     productValue = (productId.text || productId.option[productId.selectedIndex].value);
        



    // }
    var getKeys= Object.keys(price_per_item);
    var  keyvalues= Object.values(price_per_item);



    var grandTotalPrice ;
    var grandTotalWithDiscount;
    function total_price_for_selected_item(quantity,price_per_item){

        if (quantity >=1 && quantity <=10)
        {

            grandTotalPrice = quantity*price_per_item;
        } 
        else  if(quantity >10 && quantity <=25){
            grandTotalPrice = quantity*price_per_item;
            grandTotalWithDiscount= grandTotalPrice - grandTotalPrice*0.1;


        }
        else if ( quantity >25 && quantity <=50){
            grandTotalPrice = quantity*price_per_item;
            grandTotalWithDiscount=grandTotalPrice - grandTotalPrice*0.25;
            
        }
        else  if ( quantity >50){
            grandTotalPrice = quantity*price_per_item;
            grandTotalWithDiscount=grandTotalPrice - grandTotalPrice*0.5;
        }
        else{
            document.writeln("You can not buy less than one item");
        }
         
    }
    document.write

    

