// show box change address
const btnChangeAddress = document.querySelector('.change-address')
const boxComfirmAddress = document.querySelector('.comfirm-address')

btnChangeAddress.onclick = () => {
    boxComfirmAddress.classList.add('show-choosing-address')
}

// hide box change address
const btnCheckedAddress = document.querySelector('.checked-option-address')
const btnBackToPrev = document.querySelector('.back-to-previous-address')

btnCheckedAddress.onclick = () => {
    boxComfirmAddress.classList.remove('show-choosing-address')
}
btnBackToPrev.onclick = () => {
    boxComfirmAddress.classList.remove('show-choosing-address')
}
