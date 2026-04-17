const STORAGE_KEY = "rasoi_orders";

window.onload = function () {
  const saved = localStorage.getItem(STORAGE_KEY);
 
  if (saved) {
    allOrdersText = saved;
  }
};
const allItems = {
  1: [
    { name: "Roti/રોટલી", price: 10, img: "./images/image1.svg" },
    { name: "Butter Roti/બટર રોટલી", price: 15, img: "https://dummyimage.com/100x100/cccccc/000000&text=Butter+Roti" },
    { name: "Naan/નાન", price: 20, img: "https://dummyimage.com/100x100/cccccc/000000&text=Naan" },
    { name: "Kulcha/કુલચા", price: 25, img: "https://dummyimage.com/100x100/cccccc/000000&text=Kulcha" },
    { name: "Paratha/પરોઠા", price: 30, img: "https://dummyimage.com/100x100/cccccc/000000&text=Paratha" },
    { name: "Missi Roti/મિસ્સી રોટલી", price: 20, img: "https://dummyimage.com/100x100/cccccc/000000&text=Missi+Roti" },
    { name: "Tandoori Roti/તંદૂરી રોટલી", price: 15, img: "https://dummyimage.com/100x100/cccccc/000000&text=Tandoori+Roti" },
    
  ],
  2: [
    { name: "Paneer/પનીર", price: 120, img: "./images/image2.svg" },
    { name: "Mix Veg/મીક્સ શાકભાજી", price: 100, img: "https://dummyimage.com/100x100/cccccc/000000&text=Mix+Veg" },
    { name: "Aloo/બટાકા", price: 80, img: "https://dummyimage.com/100x100/cccccc/000000&text=Aloo" },
    { name: "Bhindi/ભીંડા", price: 90, img: "https://dummyimage.com/100x100/cccccc/000000&text=Bhindi" },
    { name: "Sev Tameta/સેવ ટમેટા", price: 110, img: "https://dummyimage.com/100x100/cccccc/000000&text=Sev+Tameta" },
    { name: "Chole/છોલે", price: 100, img: "https://dummyimage.com/100x100/cccccc/000000&text=Chole" },
    { name: "Matar Paneer/મટર પનીર", price: 130, img: "https://dummyimage.com/100x100/cccccc/000000&text=Matar+Paneer" }
  ],
  3: [
    { name: "Dal Fry/દાળ ફ્રાય", price: 90, img: "./images/image3.svg" },
    { name: "Dal Tadka/દાળ તડકા", price: 100, img: "https://dummyimage.com/100x100/cccccc/000000&text=Dal+Tadka" },
    { name: "Gujarati Dal/ગુજરાતી દાળ", price: 80, img: "https://dummyimage.com/100x100/cccccc/000000&text=Gujarati+Dal" },
    { name: "Mix Dal/મીક્સ દાળ", price: 110, img: "https://dummyimage.com/100x100/cccccc/000000&text=Mix+Dal" },
    { name: "Dal Makhani/દાળ મખાણી", price: 130, img: "https://dummyimage.com/100x100/cccccc/000000&text=Dal+Makhani" },
    { name: "Toor Dal/તૂણ દાળ", price: 70, img: "https://dummyimage.com/100x100/cccccc/000000&text=Toor+Dal" },
    { name: "Masoor Dal/મસૂર દાળ", price: 75, img: "https://dummyimage.com/100x100/cccccc/000000&text=Masoor+Dal" }
  ],
  4: [
    { name: "Steam Rice/સ팀 રાઈસ", price: 60, img: "./images/image4.svg" },
    { name: "Jeera Rice/જીરા રાઈસ", price: 80, img: "https://dummyimage.com/100x100/cccccc/000000&text=Jeera+Rice" },
    { name: "Fried Rice/ફ્રાઇડ રાઈસ", price: 100, img: "https://dummyimage.com/100x100/cccccc/000000&text=Fried+Rice" },
    { name: "Veg Pulao/શાક પુલાવ", price: 110, img: "https://dummyimage.com/100x100/cccccc/000000&text=Veg+Pulao" },
    { name: "Plain Rice/સાદી રાઈસ", price: 50, img: "https://dummyimage.com/100x100/cccccc/000000&text=Plain+Rice" },
    { name: "Masala Rice/મસાલા રાઈસ", price: 90, img: "https://dummyimage.com/100x100/cccccc/000000&text=Masala+Rice" },
    { name: "Curd Rice/દહી રાઈસ", price: 85, img: "https://dummyimage.com/100x100/cccccc/000000&text=Curd+Rice" }
  ],
  5: [
    { name: "Ladu/લાડુ", price: 30, img: "./images/image5.svg" },
    { name: "Gulab Jamun/ગુલાબ જામુન", price: 40, img: "https://dummyimage.com/100x100/cccccc/000000&text=Gulab+Jamun" },
    { name: "Jalebi/જલેબી", price: 35, img: "https://dummyimage.com/100x100/cccccc/000000&text=Jalebi" },
    { name: "Barfi/બરફી", price: 50, img: "https://dummyimage.com/100x100/cccccc/000000&text=Barfi" },
    { name: "Rasgulla/રસગુલ્લા", price: 45, img: "https://dummyimage.com/100x100/cccccc/000000&text=Rasgulla" },
    { name: "Halwa/હલવા", price: 40, img: "https://dummyimage.com/100x100/cccccc/000000&text=Halwa" },
    { name: "Kaju Katli/કાજુ કતલી", price: 60, img: "https://dummyimage.com/100x100/cccccc/000000&text=Kaju+Katli" }
  ],
  6: [
  { name: "Papad/પાપડ", price: 10, img: "./images/image6.svg" },
  { name: "Masala Papad/મસાલા પાપડ", price: 15, img: "https://dummyimage.com/100x100/cccccc/000000&text=Masala+Papad" }
],
7: [
  { name: "Chaas/છાસ", price: 20, img: "./images/image7.svg" },
  { name: "Masala Chaas/મસાલા છાસ", price: 25, img: "https://dummyimage.com/100x100/cccccc/000000&text=Masala+Chaas" },
  { name: "Green Salad/ગ્રીન સલાડ", price: 40, img: "https://dummyimage.com/100x100/cccccc/000000&text=Salad" },
  { name: "Onion Salad/કાંદા સલાડ", price: 30, img: "https://dummyimage.com/100x100/cccccc/000000&text=Onion+Salad" },
  { name: "Pickle/અથાણું", price: 15, img: "https://dummyimage.com/100x100/cccccc/000000&text=Pickle" },
  { name: "Curd/દહીં", price: 30, img: "https://dummyimage.com/100x100/cccccc/000000&text=Curd" },
  { name: "Boondi Raita/બૂંદી રાયતું", price: 50, img: "https://dummyimage.com/100x100/cccccc/000000&text=Raita" },
  { name: "Plain Raita/સાદું રાયતું", price: 40, img: "https://dummyimage.com/100x100/cccccc/000000&text=Plain+Raita" }
]
};
let selectedItems = [];
let currentTab = 1;
let allOrdersText = "";

function changeTab(el, tab) {
  document.querySelectorAll("#menuTabs .nav-link").forEach(btn => btn.classList.remove("active"));
   scrollActiveTab(el);
  el.classList.add("active");
   
  currentTab = tab;
  loadMenu(tab);
}

function loadMenu(tab) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = "";

  allItems[tab].forEach(item => {
    const isChecked = selectedItems.some(i => i.name === item.name);

    container.innerHTML += `
      <div class="col-md-3 col-sm-6">
        <div class="menu-card d-flex justify-content-between align-items-center"
          onclick="cardClick('${item.name}', ${item.price})">

          <div class="d-flex align-items-center gap-3">
            <img src="${item.img}" class="item-img">
            <div>
              <div class="item-name">${item.name}</div>
              <div class="item-price">₹ ${item.price}</div>
            </div>
          </div>

          <input type="checkbox"
            class="custom-check"
            id="check-${item.name}"
            ${isChecked ? "checked" : ""}
            onclick="event.stopPropagation()"
            onchange="toggleItem('${item.name}', ${item.price}, this)">
        </div>
      </div>
    `;
  });
}

const tabs = document.querySelector(".tabs-wrapper");

let isDown = false;
let startX;
let scrollLeft;

tabs.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - tabs.offsetLeft;
  scrollLeft = tabs.scrollLeft;
});

tabs.addEventListener("mouseleave", () => isDown = false);
tabs.addEventListener("mouseup", () => isDown = false);

tabs.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - tabs.offsetLeft;
  const walk = (x - startX) * 2;
  tabs.scrollLeft = scrollLeft - walk;
});

function cardClick(name, price) {
  const checkbox = document.getElementById(`check-${name}`);
  checkbox.checked = !checkbox.checked;
  toggleItem(name, price, checkbox);
}

function toggleItem(name, price, el) {
  if (el.checked) {
    if (!selectedItems.find(i => i.name === name)) {
      selectedItems.push({ name, price });
    }
  } else {
    selectedItems = selectedItems.filter(i => i.name !== name);
  }
  renderSelected();
}

function removeItem(index) {
  const removed = selectedItems[index];
  selectedItems.splice(index, 1);

  const checkbox = document.getElementById(`check-${removed.name}`);
  if (checkbox) checkbox.checked = false;

  renderSelected();
}


function renderSelected() {

  const oldName = document.getElementById("custName")?.value || "";
  const oldPhone = document.getElementById("custPhone")?.value || "";
  const oldDate = document.getElementById("custDate")?.value || "";
  const oldAddress = document.getElementById("custAddress")?.value || "";
  const oldPeople = document.getElementById("people")?.value || 1;

  if (selectedItems.length === 0) {
    document.getElementById("result").innerHTML = "";
    return;
  }

  let total = 0;

  let count = selectedItems.length;

let html = `
  <div class="result-box">
    <h5 class="d-flex justify-content-between align-items-center">
      <span class="menu-title">Selected Items ${count}</span>
    
      
    </h5>

`;

  selectedItems.forEach((item, index) => {
    total += item.price;

    html += `
      <div class="selected-item d-flex justify-content-between align-items-center">
        <span onclick="removeItem(${index})" class="delete-icon">❌</span>
        <span class="flex-grow-1 text-center">${item.name}</span>
        <span>₹${item.price}</span>
      </div>
    `;
  });

  html += `
      <div class="text-end mt-3">
        <p class="mb-2" >Dish Price: ₹${total}</p>

        <div class="d-flex justify-content-end align-items-center mt-3 gap-2">
          <label class="mb-0">Total Guest:</label>
          <input type="number" value="${oldPeople}" oninput="fixPeopleInput(this); updateFinal(${total})" id="people" value="1" min="1" max="10000" class="form-control w-auto">
          <button class="btn btn-add" onclick="updateFinal(${total})">Calculate</button>
        </div>

        <p id="finalTotal" class="mt-3"></p>
      </div>
    </div>

    <!--  SECOND BOX (SEPARATE) -->
    <div class="result-box mt-3 mb-3 text-center ">
      <h5 class="text-start menu-title">Customer details</h5>

      <div class="row mb-2">
        <div class="col-4">Name</div>
        <div class="col-8"><input id="custName" placeholder="Name" value="${oldName}" oninput="clearError()" class="form-control"></div>
      </div>

      <div class="row mb-2">
        <div class="col-4">Phone</div>
        <div class="col-8"><input id="custPhone" placeholder="Phone" value="${oldPhone}"  oninput="clearError()" class="form-control"></div>
      </div>

      <div class="row mb-2">
        <div class="col-4">Address</div>
        <div class="col-8">
          <textarea id="custAddress" placeholder="Address"
            oninput="clearError()" class="form-control">${oldAddress}</textarea>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-4">Date</div>
        <div class="col-8"><input type="date" value="${oldDate}" oninput="clearError()" id="custDate" class="form-control"></div>
      </div>

      <div id="formError" class="text-danger"></div>

      <button class="btn btn-success mt-4" onclick="sendWhatsApp(${total})">
       <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
      </button>
        <button class="btn btn-add mt-4" onclick="downloadAllOrders()">
        <i class="fa-solid fa-file"></i> All Orders file download
      </button>

    </div>
  `;

  document.getElementById("result").innerHTML = html;
}

function downloadAllOrders() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    alert("No orders found");
    return;
  }

  const blob = new Blob([saved], { type: "text/plain" });
  const link = document.createElement("a");

  const date = new Date().toISOString().split("T")[0];

  link.href = URL.createObjectURL(blob);
  link.download = `rasoi-all-orders-${date}.txt`;

  link.click();
}


function clearError() {
  document.getElementById("formError").innerText = "";
}
function fixPeopleInput(input) {
  let value = parseInt(input.value) ;

  if (value > 10000) value = 10000;


  input.value = value;
}

function updateFinal(total) {
  let people = parseInt(document.getElementById("people").value) || 1;

  let baseTotal = total * people;

  let discountPercent = 0;

  //  Discount rules
  if (people >= 100 && people < 500) {
    discountPercent = 5;
  } else if (people >= 500 && people < 1000) {
    discountPercent = 10;
  } else if (people >= 1000 && people < 5000) {
    discountPercent = 15;
  } else if (people >= 5000 && people <= 10000) {
    discountPercent = 20;
  }

  let discountAmount = (baseTotal * discountPercent) / 100;
  let finalTotal = baseTotal - discountAmount;

  //  UI update
  let html = `Guest(${people}) × Price(₹${total}) = ₹${baseTotal}`;

  if (discountPercent > 0) {
    html += `<br><span class="text-success">🏷️Discount (${discountPercent}% OFF) = -₹${discountAmount} </span>`;
    html += `<br><strong>Final Total = ₹${finalTotal}</strong>`;
  }

  document.getElementById("finalTotal").innerHTML = html;
}

function validateForm() {
  const name = custName.value.trim();
  const phone = custPhone.value.trim();
  const date = custDate.value;
  const address = custAddress.value.trim();

  if (!name) return "Enter name";
  if (!phone) return "Enter phone number";
  if (phone.length < 10 || isNaN(phone)) return "Invalid phone";
  if (!date) return "Please Select date";
  if (!address) return "Enter address";

  return "";
}

function scrollActiveTab(btn) {
  btn.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
}

function sendWhatsApp(total) {

  const now = new Date();

const orderDate = now.toLocaleDateString();
const orderTime = now.toLocaleTimeString();
  const error = validateForm();

  if (selectedItems.length === 0) {
    formError.innerText = "Select item";
    return;
  }

  if (error) {
    formError.innerText = error;
    return;
  }

let people = parseInt(document.getElementById("people").value) || 1;
let baseTotal = total * people;

let discountPercent = 0;

if (people >= 100 && people < 500) {
  discountPercent = 5;
} else if (people >= 500 && people < 1000) {
  discountPercent = 10;
} else if (people >= 1000 && people < 5000) {
  discountPercent = 15;
} else if (people >= 5000 && people <= 10000) {
  discountPercent = 20;
}

let discountAmount = Math.round((baseTotal * discountPercent) / 100);
let finalTotal = baseTotal - discountAmount;

 let orderText = `\n------------------------------\n`;
orderText += `🧾 Order\n\n`;

selectedItems.forEach(i => {
  orderText += `${i.name} - ₹${i.price}\n`;
});

orderText += `\nDish Price: ₹${total}`;
orderText += `\nTotal Guest: ${people}`;
orderText += `\nSubtotal: ₹${baseTotal}`;

if (discountPercent > 0) {
  orderText += `\nDiscount (${discountPercent}%): -₹${discountAmount}`;
} else {
  orderText += `\nDiscount: ₹0`;
}

orderText += `\nFinal Total: ₹${finalTotal}`;
orderText += `\n\nName: ${custName.value}`;
orderText += `\nPhone: ${custPhone.value}`;
orderText += `\nAddress: ${custAddress.value}`;
orderText += `\nDate: ${custDate.value}`;
orderText += `\nOrder Time: ${orderTime}`;
orderText += `\n------------------------------\n`;

allOrdersText += orderText;
localStorage.setItem(STORAGE_KEY, allOrdersText);


  let msg = `🧾 Order Details\n\n`;

  selectedItems.forEach(i => {
    msg += `${i.name} - ₹${i.price}\n`;
  });

 msg += `\nDish Price: ₹${total}`;
msg += `\nTotal Guest: ${people}`;
msg += `\nSubtotal: ₹${baseTotal}`;

if (discountPercent > 0) {
  msg += `\nDiscount (${discountPercent}%): -₹${discountAmount}`;
} 

msg += `\nFinal Total: ₹${finalTotal}`;
  msg += `\n\nName: ${custName.value}`;
  msg += `\nPhone: ${custPhone.value}`;
  msg += `\nAddress: ${custAddress.value}`;
  msg += `\nDate: ${custDate.value}`;
 msg += `\nOrder Time: ${orderTime}`;

  window.open(`https://wa.me/919408916394?text=${encodeURIComponent(msg)}`);
  resetApp() 
}

function resetApp() {
  // Clear selected items
  selectedItems = [];

  // Clear UI sections
  document.getElementById("result").innerHTML = "";

  // Reload current menu (to uncheck all checkboxes)
  loadMenu(currentTab);

}

