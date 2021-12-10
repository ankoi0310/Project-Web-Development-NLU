// xử lý hiện popup voucher
const boxPopup = document.querySelector('.box-popup-voucher')
const popupVoucher = document.querySelector('.popup-voucher')
const btnPopup = document.querySelector('.btn-show-popup')

btnPopup.onclick = () => {
    boxPopup.style.opacity = 1
    boxPopup.style.visibility = 'visible'
    popupVoucher.classList.toggle('show-popup-voucher')
}

// xử lý input voucher empty -> disable button comfirm
const inputVoucher = document.querySelector('.voucher-input')
const btnComfirmVoucher = document.querySelector('.btn-use-voucher')

inputVoucher.addEventListener('keyup', () => {
    if (inputVoucher.value === '') btnComfirmVoucher.disabled = true
    else btnComfirmVoucher.disabled = false
})

// xử lý tắt popup
const btnCancel = document.querySelector('.btn-cancel')
const btnComfirm = document.querySelector('.btn-comfirm')

btnCancel.onclick = () => {
    boxPopup.style.opacity = 0
    boxPopup.style.visibility = 'hidden'
    popupVoucher.classList.toggle('show-popup-voucher')
}

btnComfirm.onclick = () => {
    boxPopup.style.opacity = 0
    boxPopup.style.visibility = 'hidden'
    popupVoucher.classList.toggle('show-popup-voucher')
}
