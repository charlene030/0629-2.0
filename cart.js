var productList=[
    {
        title: "IVE concept color keychain",fileName:"ive.jpg",price:149,id:"001"
    },
    {
        title: "Pink shining keychain",fileName:"sophia.jpg",price:149,id:"002"
    },
    {
        title: "aespa Winter keychain",fileName:"winter.jpg",price:159,id:"003"
    },
    {
        title: "SEVENTEEN fml keychain",fileName:"fml.jpg",price:189,id:"004"
    },
    {
        title: "Sparkling phone keychain",fileName:"phone.jpg",price:189,id:"005"
    },
    {
        title: "IN THE OCEAN keychain",fileName:"sea.jpg",price:199,id:"006"
    },
    {
        title: "NewJeans phone keychain",fileName:"nwjns.jpg",price:179,id:"007"
    },
    {
        title: "Milk tea color griptok",fileName:"grip.jpg",price:189,id:"008"
    },
    {
        title: "Blue ribbon card holder",fileName:"bae.jpg",price:79,id:"009"
    },
    {
        title: "Blue wings card holder",fileName:"bluewings.jpg",price:79,id:"010"
    },
    {
        title: "NMIXX expérgo keychain",fileName:"nmixx.jpg",price:199,id:"011"
    },
    {
        title: "Caramel pudding keychain",fileName:"pudding.jpg",price:169,id:"012"
    },
    {
        title: "Melon soda keychain",fileName:"melon.jpg",price:189,id:"013"
    },
    {
        title: "Black ribbon card holder",fileName:"black.jpg",price:79,id:"014"
    }
];
var productList2=[
    {
        title: "Blue ribbon card holder",fileName:"bae.jpg",price:79,id:"009"
    },
    {
        title: "Blue wings card holder",fileName:"bluewings.jpg",price:79,id:"010"
    },
    {
        title: "NMIXX expérgo keychain",fileName:"nmixx.jpg",price:199,id:"011"
    },
    {
        title: "Caramel pudding keychain",fileName:"pudding.jpg",price:169,id:"012"
    },
    {
        title: "Melon soda keychain",fileName:"melon.jpg",price:189,id:"013"
    },
    {
        title: "Black ribbon card holder",fileName:"black.jpg",price:79,id:"014"
    }
];
//console.log( (productList));
var buyCart=JSON.parse(localStorage.getItem('cart'));
console.log(buyCart);
//run all data to array
let inCart='';
let matchPD;
let pID;
let Tprice=0;
function renderOnPage(){
     buyCart.forEach((item) => {
        pID=item.productID;
        //console.log(item) ;   
        productList.forEach((p)=>{
            if(p.id === pID){
                matchPD=p;
            }
        });
        Tprice+=matchPD.price * item.quant;
        inCart+=`
            <div class="buy-items row">
                <div class="pic col-4">
                    <img src="resin_pics/${matchPD.fileName}">
                </div>
                <div class="col-8">
                    <div class="item-title">
                    ${matchPD.title}                
                    </div>
                    <div>
                        <div class="item-pri">$${matchPD.price}</div>
                        <div  class="item-quan">
                            <button class="js-change-quant" data-id="${item.productID}" data-act="minus">-</button>
                            <span id="${item.productID}">${item.quant}</span>
                            <button  class="js-change-quant" data-id="${item.productID}" data-act="plus">+</button>
                        </div>
                    </div>          
                </div>
            </div>
        `;
    });
    document.getElementById('cart-container').innerHTML=inCart;
    document.getElementById('AllPrice').innerText=Tprice;
    //inCart='';
    //console.log("func done");
};
renderOnPage();
//算金額


//改變數量
let actingMode;
let actingID;
let matchItem;
let plusORminus=0;
document.querySelectorAll('.js-change-quant').forEach((button)=>{
    button.addEventListener('click',()=>{
        //console.log(button.dataset);
        actingID=button.dataset.id;
        actingMode=button.dataset.act;
        //console.log(typeof );
        
        buyCart.forEach((item)=>{
            if(item.productID === actingID){
                matchItem=item;
            }
        });
        //console.log(matchItem);
        if(actingMode=== 'plus'){
            //console.log("plus"+actingID);
            plusORminus=1;

        }else{
            //console.log("minus"+actingID);
            plusORminus=-1;
        }
        let n=parseInt(document.getElementById(actingID).innerText)+plusORminus;
        if(n<1){
            alert('Quantity must greater than 0!');
        }else{
        document.getElementById(actingID).innerText=n;
        }

        matchItem.quant+=plusORminus;
        console.log(buyCart);
        //算金額
        Tprice=0;
        buyCart.forEach((item) => {
            pID=item.productID;
            //console.log(item) ;   
            productList.forEach((p)=>{
                if(p.id === pID){
                    matchPD=p;
                }
            });
            Tprice+=matchPD.price * item.quant;
            
        });        
        document.getElementById('AllPrice').innerText=Tprice;
        
        
    });

});