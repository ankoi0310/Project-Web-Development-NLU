// xử lý hiện popup voucher
const boxPopup = document.querySelector('.box-popup-voucher')
const popupVoucher = document.querySelector('.popup-voucher')
const btnPopup = document.querySelector('.btn-show-popup')
const boxListProduct = document.querySelector('.box-list-product')

btnPopup.onclick = () => {
    boxPopup.style.opacity = 1
    boxPopup.style.visibility = 'visible'
    popupVoucher.classList.toggle('show-popup-voucher')
    boxListProduct.style.overflowY = 'hidden'
}

// xử lý input voucher empty -> disable button comfirm
const inputVoucher = document.querySelector('.voucher-input')
const btnComfirmVoucher = document.querySelector('.btn-use-voucher')

inputVoucher.addEventListener('keyup', () => {
    if (inputVoucher.value === '') {
        btnComfirmVoucher.disabled = true
        btnComfirmVoucher.classList.add('btn-disabled')
    } else {
        btnComfirmVoucher.disabled = false
        btnComfirmVoucher.classList.remove('btn-disabled')
    }
})

// xử lý tắt popup
const btnCancel = document.querySelector('.btn-cancel')
const btnComfirm = document.querySelector('.btn-comfirm')

btnCancel.onclick = () => {
    boxPopup.style.opacity = 0
    boxPopup.style.visibility = 'hidden'
    popupVoucher.classList.toggle('show-popup-voucher')
    boxListProduct.style.overflowY = 'overlay'
}

btnComfirm.onclick = () => {
    boxPopup.style.opacity = 0
    boxPopup.style.visibility = 'hidden'
    popupVoucher.classList.toggle('show-popup-voucher')
    boxListProduct.style.overflowY = 'overlay'
}

// xử lý check sản phẩm
const checkAllTop = document.querySelector('#check-all')
const checkAllBottom = document.querySelector('#check-all-bottom')

checkAllTop.onclick = () => {
    if (checkAllTop.checked) {
        checkAllBottom.setAttribute('checked', 'checked')
        document.querySelectorAll('.c-checkbox').forEach(checkbox => {
            checkbox.setAttribute('checked', 'checked')
        })
    } else {
        checkAllBottom.removeAttribute('checked')
        document.querySelectorAll('.c-checkbox').forEach(checkbox => {
            checkbox.removeAttribute('checked')
        })
    }
}

checkAllBottom.onclick = () => {
    if (checkAllBottom.checked) {
        checkAllTop.setAttribute('checked', 'checked')
        document.querySelectorAll('.c-checkbox').forEach(checkbox => {
            checkbox.setAttribute('checked', 'checked')
        })
    } else {
        checkAllTop.removeAttribute('checked')
        document.querySelectorAll('.c-checkbox').forEach(checkbox => {
            checkbox.removeAttribute('checked')
        })
    }
}

// let countProduct = document.querySelector('.total-payment-product')
// const regex = /[0-9]+/g
// console.log(countProduct.textContent.match(regex))
