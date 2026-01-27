const dogs = [
    {
        id: 1,
        code: "MO231",
        type: "Pomeranian White",
        gender: "Male",
        age: 2,
        price: 6900000,
        img_url:"./img/products/dog1.png"
    },
    {
        id: 2,
        code: "MO502",
        type: "Poddle Tiny Yellow",
        gender: "Female",
        age: 2,
        price: 3900000,
        img_url:"./img/products/dog2.png" 
    },
    {
        id: 3,
        code: "MO102",
        type: "Poddle Tiny Sepia",
        gender: "Male",
        age: 2,
        price: 4000000,
        img_url:"./img/products/dog3.png" 
    },
    {
        id: 4,
        code: "MO512",
        type: "Alaskan Malamute",
        gender: "Male",
        age: 3,
        price: 8900000,
        img_url:"./img/products/dog4.png"
    },
    {
        id: 5,
        code: "MO231",
        type: "Pembroke Corgi Cream",
        gender: "Male",
        age: 3,
        price: 7900000,
        img_url:"./img/products/dog5.png"
    },
    {
        id: 6,
        code: "MO502",
        type: "Pembroke Corgi Tricolor",
        gender: "Female",
        age: 2,
        price: 9000000,
        img_url:"./img/products/dog6.png"
    },
    {
        id: 7,
        code: "MO102",
        type: "Pomeranian Grey",
        gender: "Female",
        age: 2,
        price: 6500000,
        img_url:"./img/products/dog7.png"
    },
    {
        id: 8,
        code: "MO512",
        type: "Poddle Tiny Diary Cow",
        gender: "Male",
        age: 3,
        price: 5000000,
        img_url:"./img/products/dog8.png"
    }
]

const content = document.getElementById("content")

const priceFormatted = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

dogs.forEach(dog => {
    content.innerHTML += `
        <div key=${dog.id}>
            <img/>
            <h3><span>${dog.code}</span> - <span>${dog.type}</span></h3>
            <p>Gene: <span>${dog.gender}</span> | Age: <span>${dog.age}</span></p>
            <p>${priceFormatted}</p>
        </div>
    `
}).join()