let count = 0
let count_number = document.getElementById("count-num")
let save_record = document.getElementById("save-record")

function increment() {
    console.log('clicked')
    count = count + 1
    count_number.innerText = count
}

function save() {
    let record = " " + count + " - "
    save_record.textContent += record
    count = 0
    count_number.innerText = count
    console.log(count)
}


