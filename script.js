const data = [
  {id:1,title:"Tari Saman",region:"Aceh",island:"Sumatera",
   image:"img/tari-saman.jpg",
   summary:"Tarian cepat serempak dari Aceh.",
   details:"Tari Saman adalah tarian tradisional dari suku Gayo, Aceh, dilakukan duduk berbaris dengan gerakan serempak."
  },
  {id:2,title:"Rumah Gadang",region:"Minangkabau",island:"Sumatera",
   image:"img/rumah-gadang.jpg",
   summary:"Rumah adat Minang.",
   details:"Rumah Gadang memiliki atap gonjong menyerupai tanduk kerbau."
  },
  {id:3,title:"Tari Piring",region:"Padang",island:"Sumatera",
   image:"img/tari-piring.jpg",
   summary:"Tari dengan piring di tangan.",
   details:"Tari Piring menampilkan kelincahan dan keseimbangan penari."
  },
  {id:4,title:"Wayang Kulit",region:"Jawa",island:"Jawa",
   image:"img/wayang.jpg",
   summary:"Teater bayangan tradisional.",
   details:"Dalang memainkan boneka kulit di belakang layar."
  },
  {id:5,title:"Gamelan",region:"Jawa",island:"Jawa",
   image:"img/gamelan.jpg",
   summary:"Ansambel musik tradisional.",
   details:"Gamelan terdiri dari gong, kenong, saron, dll."
  },
  {id:6,title:"Tari Kecak",region:"Bali",island:"Bali",
   image:"img/tari-kecak.jpg",
   summary:"Tari vokal Bali.",
   details:"Penari berseru 'cak' sambil membentuk lingkaran."
  },
  {id:7,title:"Barong Bali",region:"Bali",island:"Bali",
   image:"img/barong.jpg",
   summary:"Tarian barong Bali.",
   details:"Barong melambangkan kebaikan dalam tradisi Bali."
  },
  {id:8,title:"Ulos",region:"Batak",island:"Sumatera",
   image:"c:\Users\Acer\Downloads\tari cakalele malukuk.jpeg",
   summary:"Kain tenun Batak.",
   details:"Ulos dipakai dalam upacara adat sebagai simbol restu."
  },
  {id:9,title:"Ondel-Ondel",region:"Jakarta",island:"Jawa",
   image:"img/ondel.jpg",
   summary:"Boneka raksasa Betawi.",
   details:"Ondel-ondel digunakan pada upacara penyambutan."
  },
  {id:10,title:"Batik",region:"Jawa",island:"Jawa",
   image:"img/batik.jpg",
   summary:"Kain motif lilin.",
   details:"Batik dibuat menggunakan canting dan malam."
  }
];

// ELEMENT
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const filterIsland = document.getElementById("filterIsland");

function render(list){
  grid.innerHTML = "";
  list.forEach(item=>{
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML = `
      <img src="${item.image}">
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
    `;
    card.onclick = ()=>openModal(item);
    grid.appendChild(card);
  });
}
render(data);

// FILTER
search.oninput = applyFilters;
filterIsland.onchange = applyFilters;

function applyFilters(){
  const text = search.value.toLowerCase();
  const island = filterIsland.value;

  const filtered = data.filter(d=>{
    const matchText = d.title.toLowerCase().includes(text) ||
                      d.summary.toLowerCase().includes(text);
    const matchIsland = island ? d.island === island : true;
    return matchText && matchIsland;
  });

  render(filtered);
}

// MODAL
const modal = document.getElementById("modal");
const modalLeft = document.getElementById("modalLeft");
const modalRight = document.getElementById("modalRight");
const closeBtn = document.getElementById("closeBtn");

function openModal(item){
  modalLeft.innerHTML = `
    <h2>${item.title}</h2>
    <p><b>${item.region} · ${item.island}</b></p>
    <p>${item.details}</p>
  `;
  modalRight.innerHTML = `
    <img src="${c:\Users\Acer\Downloads\tari cakalele malukuk.jpeg}" style="width:100%;border-radius:8px;">
  `;
  modal.classList.add("visible");
}

closeBtn.onclick = ()=> modal.classList.remove("visible");
modal.onclick = e => { if(e.target===modal) modal.classList.remove("visible") };

document.getElementById("year").textContent = new Date().getFullYear();
