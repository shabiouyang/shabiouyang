// Modify the `PUBLICATIONS` object

const PUBLICATIONS = [
  {
    title:
      "OctOcc: High-resolution 3D Occupancy Prediction with Octree",
    authors:
      "Wenzhe Ouyang, Xiaolin Song, Bailan Feng, Zenglin Xu",
    image: "./images/aaai2024.png",
    conference: "The 38th Annual AAAI Conference on Artificial Intelligence (AAAI 2024)",
    links: {
      arxiv: "",
      paper: "https://ojs.aaai.org/index.php/AAAI/article/view/28234",
      supp: "",
      video: "https://underline.io/lecture/93762-octocc-high-resolution-3d-occupancy-prediction-with-octree",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "LinkOcc: 3D Semantic Occupancy Prediction with Temporal Association",
    authors:
      "Wenzhe Ouyang, Zenglin Xu, Bin Shen, Jinghua Wang, Yong Xu",
    image: "./images/linkocc.png",
    journal: "IEEE Transactions on Circuits and Systems for Video Technology",
    links: {
      "project page": "",
      arxiv: "",
      paper: "https://ieeexplore.ieee.org/document/10734407",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "PlanePDM: Boundary-aware 3D Planar Recovery by using Parallel Dilated Mask Head",
    authors:
      "Wenzhe Ouyang, Zenglin Xu, Qianying Zhu, Bin Shen, Yong Xu",
    image: "./images/planepdm.png",
    journal: "Pattern Recognition",
    links: {
      "project page": "",
      arxiv: "",
      paper: "https://www.sciencedirect.com/science/article/abs/pii/S0031320324010574",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "MixingMask: A Contour-aware Approach for Joint Object detection and Instance segmentation",
    authors:
      "Wenzhe Ouyang, Zenglin Xu, Jing Xu, Qifan Wang, Yong Xu",
    image: "./images/mixingmask.png",
    journal: "Pattern Recognition",
    links: {
      paper: "https://www.sciencedirect.com/science/article/abs/pii/S0031320324003716",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "A Pipeline from Raytrix to Tensor Display",
    authors:
      "Wenzhe Ouyang, Shu Fujita, Keita Takahashi, Toshiaki Fujii",
    image: "./images/tensor_display.jpg",
    conference: "2018 International Workshop on Smart Info-Media Systems in Asia (SISA 2018)",
    links: {
      "project page": "https://github.com/shabiouyang/Raytrix-Light-Field-Video",
      paper: "./pub/SISA2018_submission",
      code: "https://github.com/shabiouyang/Raytrix-Light-Field-Video",
    },
    badges: ["Best Student Paper"],
  },
  {
    title:
        "3D Imaging System using Multi-focus Plenoptic Camera and Tensor Display",
    authors:
      "Mehrdad Teratani Panahpourtehrani, Shu Fujita, Wenzhe Ouyang, Keita Takahashi, Toshiaki Fujii",
    image: "./images/ic3d.png",
    conference: "2018 International Conference on 3D Immersion (IC3D)",
    links: {
      arxiv: "",
      paper: "https://ieeexplore.ieee.org/document/8657863",
      code: "",
    },
    badges: [],
  },
  
];

const HIGHLIGHT_NAME = "Wenzhe Ouyang";

// Do not touch the code below

// Convert PUBLICATIONS to HTML table
document.addEventListener("DOMContentLoaded", (ev) => {
  const tbody = document.createElement("tbody");
  const rows = PUBLICATIONS.map((data) => {
    const row = document.createElement("tr");
    row.append(createImageCell(data.image), createContentCell(data));
    return row;
  });
  tbody.append(...rows);
  document.querySelector("#pub-list").append(tbody);
});

// Functions to create HTML elements
function createImageCell(link) {
  const cell = document.createElement("td");
  cell.style.padding = "10px";
  cell.style.width = "30%";
  cell.style.verticalAlign = "middle";
  const img = document.createElement("img");
  img.src = link;
  img.style.width = "100%";
  cell.append(img);
  return cell;
}

function createContentCell({ title, authors, conference, links, badges }) {
  const cell = document.createElement("td");
  cell.style.padding = "20px";
  cell.style.width = "70%";
  cell.style.verticalAlign = "middle";
  const titleElem = document.createElement("papertitle");
  titleElem.textContent = title;
  const authorsElem = createAuthorElement(authors);
  const conferenceElem = document.createElement("em");
  conferenceElem.textContent = conference;
  const badgesElem = createBadgesElement(badges);
  const linksElem = createLinksElement(links);
  const elements = [
    titleElem,
    document.createElement("br"),
    authorsElem,
    document.createElement("br"),
    conferenceElem,
    badgesElem,
    document.createElement("br"),
    linksElem,
  ].filter((elem) => elem);
  cell.append(...elements);
  return cell;
}

function createAuthorElement(authors) {
  if (!authors) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const elements = authors.split(/[,;]/g).map((author) => {
    const authorText = author.trim();
    if (authorText.toLowerCase() === HIGHLIGHT_NAME) {
      const authorElem = document.createElement("strong");
      authorElem.textContent = authorText;
      return authorElem;
    }
    return authorText;
  });
  for (let i = 0; i < elements.length; i++) {
    frag.append(elements[i]);
    if (i !== elements.length - 1) {
      frag.append(", ");
    }
  }
  return frag;
}

function createBadgesElement(badges) {
  if (!badges) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const textElem = document.createElement("span");
  textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
  frag.append(textElem);
  frag.append(
    ...badges.map((badge) => {
      const badgeElem = document.createElement("span");
      badgeElem.classList.add("badge");
      badgeElem.textContent = badge;
      return badgeElem;
    })
  );
  return frag;
}

function createLinksElement(links) {
  if (!links) {
    return null;
  }
  const frag = document.createDocumentFragment();
  for (const [name, link] of Object.entries(links)) {
    if (!link) {
      continue;
    }
    const elem = document.createElement("a");
    elem.href = link;
    elem.textContent = "[" + name + "]";
    const textElem = document.createElement("span");
    textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
    frag.append(elem, textElem);
  }
  return frag;
}