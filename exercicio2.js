function buscarRepo() {
    var inputElement = document.querySelector('#nome')
    var usuario = inputElement.value
    var divElement = document.querySelector('#result')

    axios.get('https://api.github.com/users/' + usuario + '/repos', {
            validateStatus: true
        })
        .then(function (data) {
            divElement.innerHTML = ''
            var ulElement = document.createElement('ul')
            data.data.forEach(element => {

                var ulElement = document.createElement('ul')
                var liText = document.createTextNode(element.full_name)

                liElement.appendChild(liText)
                ulElement.appendChild(liElement)


            });

            divElement.appendChild(ulElement)

        })
        .catch(function (error) {
            divElement.innerHTML = ''
            var ulElement = document.createElement('ul')
            var liElement = document.createElement('li')
            var liText = document.createTextNode("Usuario nao encontrado")
            liElement.appendChild(liText)
            ulElement.appendChild(liElement)
            divElement.appendChild(ulElement)
        })

}