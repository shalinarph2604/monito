const dogs = [
    {
        id: 1,
        code: "MO231",
        type: "Pomeranian White",
        gender: "Male",
        age: 2,
        price: 6900000,
        img_url:"./assets/img/products/dog1.png"
    },
    {
        id: 2,
        code: "MO502",
        type: "Poddle Tiny Yellow",
        gender: "Female",
        age: 2,
        price: 3900000,
        img_url:"./assets/img/products/dog2.png" 
    },
    {
        id: 3,
        code: "MO102",
        type: "Poddle Tiny Sepia",
        gender: "Male",
        age: 2,
        price: 4000000,
        img_url:"./assets/img/products/dog3.png" 
    },
    {
        id: 4,
        code: "MO512",
        type: "Alaskan Malamute",
        gender: "Male",
        age: 3,
        price: 8900000,
        img_url:"./assets/img/products/dog4.png"
    },
    {
        id: 5,
        code: "MO231",
        type: "Pembroke Corgi Cream",
        gender: "Male",
        age: 3,
        price: 7900000,
        img_url:"./assets/img/products/dog5.png"
    },
    {
        id: 6,
        code: "MO502",
        type: "Pembroke Corgi Tricolor",
        gender: "Female",
        age: 2,
        price: 9000000,
        img_url:"./assets/img/products/dog6.png"
    },
    {
        id: 7,
        code: "MO102",
        type: "Pomeranian Grey",
        gender: "Female",
        age: 2,
        price: 6500000,
        img_url:"./assets/img/products/dog7.png"
    },
    {
        id: 8,
        code: "MO512",
        type: "Poddle Tiny Diary Cow",
        gender: "Male",
        age: 3,
        price: 5000000,
        img_url:"./assets/img/products/dog8.png"
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

const products = dogs.map(dog => {
    return `
        <div
            class="card"
            key=${dog.id}
            style="
                display:flex;
                flex-direction:column;
                max-width:320px;
                height:400px;
                border-radius: 7.182px;
                background: var(--Neutral-Color-00, #FDFDFD);
                box-shadow: 0 2.394px 16.757px -1.197px rgba(0, 0, 0, 0.08);
                align-items: flex-start;
                padding:6px 6px 16px 6px;
            "
        >
            <img 
                src=${dog.img_url} 
                style="
                    width:100%;
                    height:320px;
                    object-fit:cover;
                    margin-bottom:12px;
                    border-radius: 7.182px;
                "
            />
            <div style="
                padding-left:8px;
            ">
                <p style="
                    color: var(--Neutral-Color-100, #00171F);
                    font-family: SVN-Gilroy, sans-serif;
                    font-size: 16.576px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 16.363px;
                "
                >
                    <span>${dog.code}</span> - <span>${dog.type}</span>
                </p>
                <p style="
                    color: var(--Neutral-Color-60, #667479);
                    font-family: SVN-Gilroy. sans-serif;
                    font-size: 14.182px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 12.773px;
                    margin-top:8px;
                    margin-bottom:12px;
                "
                >
                    Gene: <span style="font-weight:700;">${dog.gender}</span> | Age: <span style="font-weight:700;">${dog.age} months</span>
                </p>
                <p style="
                    color: var(--Neutral-Color-100, #00171F);
                    font-family: SVN-Gilroy, sans-serif;
                    font-size: 16.576px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 16.363px;
                "
                >
                    ${priceFormatted(dog.price)}
                </p>
            </div>
        </div>
    `
})

content.innerHTML = products.join("")