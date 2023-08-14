//abrindo modal
function openModal() {
    document.querySelector("#myModal").style.display = "block";
}

function closeModal() {
    document.querySelector("#myModal").style.display = "none";
}

// Adicione um ouvinte de eventos para cada botão "Remover"
const removeButtons = document.querySelectorAll('.remove-product');
removeButtons.forEach(button => {
    button.addEventListener('click', removeItem);
});

// Função para remover um item do carrinho
function removeItem(event) {
    const listItem = event.target.closest('.product-checkout');
    if (listItem) {
        listItem.remove();
    }   
}

//Finalizando compra
function checkout() {
    const checkout = document.querySelector(".checkout")
    checkout.addEventListener('click', () => {
        alert('Compra finalizada com sucesso!')
    });
}
