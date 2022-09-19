class  Product{
    constructor (id,name,price){
        this.id=id;
        this.name=name;
        this.price=Number(price);
    }
};

const arrayProducts=[];

const product1=new Product(1,'mouse',800);
const product2=new Product(2,'keyboard',1200);
const product3=new Product(3,'both products',1900);

arrayProducts.push(product1,product2,product3);

function welcome(){
    alert('welcome please register');
    let name = prompt('enter your name');
    while(name === ''){
        name = prompt('enter your name');
    }
};

const showProducts=()=>{
    let array = [];
    arrayProducts.forEach(product => array.push(`${product.name} $ ${product.price}`));
    alert(`price list:
${array.join('\n')}`);
};

const chooseProducts= ()=>{
    let otherProduct;
    let nameProduct='';
    let quantifyProduct=0;
    let total=0;

    do{
        nameProduct=prompt('Do you want to buy mouse, keyboard or both products?');
        quantifyProduct=Number(prompt('how many products do you want?'));

        const product=arrayProducts.find(product=>product.name===nameProduct);

        if(product){
            total += product.price * quantifyProduct;
        }else{
            alert('product not found');
        }

        otherProduct=confirm('want to continue shopping?');
        }while(otherProduct);

        discounts(total);
};

const discounts= (total)=>{
    if(total>=8000){
        total=total*0.70;
        alert('you have a 30% discount!');
    }

    shipping(total);
};

const shipping=(total)=>{
    let confirmation=confirm('Do you want us to send you the product?');
    if(confirmation && total>5000){
        alert(`you have free shipping! total purchase price is ${total}. Thanks for your purchase`);
    } else if(confirmation && total<=5000 && total!==0){
        let shipping=1000;
        total=total +shipping;
        alert(`the shipping price is ${shipping} total purchase price is ${total}. Thanks for your purchase`)
    }else{
        alert(`total purchase price is ${total}. Thanks for your purchase`)
    }
};


welcome();
showProducts();
chooseProducts();

