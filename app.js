let yosh = document.getElementById('age')
let soni = document.getElementById('soni')
let btn = document.getElementById('btn')
let div = document.getElementById('wrapper-users')

btn.addEventListener('click', () => {
    fetch('https://dummyjson.com/users?limit='+ soni.value)
        .then(res => res.json())
        .then(data => getData(data))
})



    function getData(params) {
        console.log(params.users);

        const filterUser = params.users.filter((user) => user.age > yosh.value)
console.log(filterUser)

        filterUser.map(user=> {
            let card = document.createElement('div')
            let ism = document.createElement('h3')
            let email = document.createElement('p')
            let tel = document.createElement('p')
            let address = document.createElement('p')

            ism.innerHTML =  user.firstName
            email.innerHTML =  'Email' + user.email 
            tel.innerHTML = 'Phone number: ' + user.phone
            address.innerHTML = 'Mazil: ' + user.address.city

             div.appendChild(ism)
             div.appendChild(email)
             div.appendChild(tel)
             div.appendChild(address)

        })


        // console.log(filterUser);




    }