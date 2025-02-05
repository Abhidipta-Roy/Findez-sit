document.addEventListener("DOMContentLoaded", () => {
    // Tab functionality for Report page
    const tabBtns = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab")
  
        tabBtns.forEach((b) => b.classList.remove("active"))
        tabContents.forEach((c) => c.classList.remove("active"))
  
        btn.classList.add("active")
        document.getElementById(`${tabId}-form`).classList.add("active")
      })
    })
  
    // Populate Feed items
    const itemsGrid = document.getElementById("items-grid")
    if (itemsGrid) {
      const items = [
        {
          id: 1,
          type: "lost",
          itemName: "Blue Wallet",
          location: "Nico Park, Kolkata",
          date: "1-March-2025",
          image: "photo.jpg",
          code: "LF2401281",
        },
        {
          id: 2,
          type: "lost",
          itemName: "House Keys",
          location: "Hill Cart Road, Siliguri",
          date: "1-July-2025",
          image: "photo.jpg",
          code: "LF2401272",
        },
      ]
  
      items.forEach((item) => {
        const itemCard = document.createElement("div")
        itemCard.className = "card"
        itemCard.innerHTML = `
                  <h3>${item.itemName} <span class="${item.type === "lost" ? "text-red" : "text-green"}">${item.type.toUpperCase()}</span></h3>
                  <img src="${item.image}" alt="${item.itemName}" style="width: 100%; height: 200px; object-fit: cover;">
                  <p>${item.location}</p>
                  <p>${new Date(item.date).toLocaleDateString()}</p>
                  ${item.type === "lost" ? `<p>Code: ${item.code}</p>` : ""}
              `
        itemsGrid.appendChild(itemCard)
      })
    }
    const itemssGrid = document.getElementById("itemss-grid")
    if (itemsGrid) {
      const items = [
        {
          id: 1,
          type: "Found",
          itemName: "Watch",
          location: "Siliguri",
          date: "2025-05-02",
          image: "photo.jpg",
          code: "LF2401281",
        },
        {
          id: 2,
          type: "Found",
          itemName: "Purse",
          location: "Bankura",
          date: "2025-02-01",
          image: "photo.jpg",
          code: "LF2401272",
        },
      ]
  
      items.forEach((item) => {
        const itemCard = document.createElement("div")
        itemCard.className = "card"
        itemCard.innerHTML = `
                  <h3>${item.itemName} <span class="${item.type === "lost" ? "text-red" : "text-green"}">${item.type.toUpperCase()}</span></h3>
                  <img src="${item.image}" alt="${item.itemName}" style="width: 100%; height: 200px; object-fit: cover;">
                  <p>${item.location}</p>
                  <p>${new Date(item.date).toLocaleDateString()}</p>
                  ${item.type === "lost" ? `<p>Code: ${item.code}</p>` : ""}
              `
        itemssGrid.appendChild(itemCard)
      })
    }
  
    // Populate Redeem vouchers
    const vouchersGrid = document.getElementById("vouchers-grid")
    if (vouchersGrid) {
      const vouchers = [
        {
          id: 1,
          name: "₹500 Amazon Gift Card",
          tokens: 1000,
          image: "photo.jpg",
        },
        {
          id: 2,
          name: "₹1000 Flipkart Voucher",
          tokens: 2000,
          image: "photo.jpg",
        },
      ]
  
      vouchers.forEach((voucher) => {
        const voucherCard = document.createElement("div")
        voucherCard.className = "card"
        voucherCard.innerHTML = `
                  <h3>${voucher.name}</h3>
                  <img src="${voucher.image}" alt="${voucher.name}" style="width: 100%; height: 200px; object-fit: cover;">
                  <p>${voucher.tokens} Tokens</p>
                  <button class="btn-submit">Redeem</button>
              `
        vouchersGrid.appendChild(voucherCard)
      })
    }
  
    // Handle form submissions
    const forms = document.querySelectorAll("form")
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        alert("Form submitted successfully!")
        form.reset()
      })
    })
  })
  document.getElementById("scrollButton").addEventListener("click", function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

  