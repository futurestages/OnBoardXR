const showCase = document.getElementById("showcase");

const loadDataFromJson = () => {
  fetch("./js/data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        showCase.innerHTML += `
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
          <div class="card position-relative border-0 rounded-3 overflow-hidden">
            <div class="img-holder position-relative">
              <img src="${item.banner}" class="show-img img-fluid" alt="${item.tags.join()}" />
              <div class="overlay">
                <h5 class="text-white fw-bold">${item.topDate}</h5>
                <div class="d-flex mt-5 justify-content-between align-items-center">
                  <img src="img/obxr.png" class="img-fluid obxr" alt="" />
                  <img src="${item.brandLogo}" class="img-fluid obxr" alt="" />
                </div>
              </div>
            </div>
            <div class="card-body bg-black">
              <p class="text-white mb-0 fw-bold fs-14">${item.name}</p>
              <p class="text-white fs-12 mb-1">${item.date}</p>
              <div class="d-flex justify-content-between align-items-center z-200">
                <img src="${item.brandLogo}" class="img-fluid obxr" alt="" />
                <a href="https://futurestages.github.io/OnBoardXR_Landing_Page/docs"
                  class="btn btn-yellow fs-14 px-2 py-1 rounded-pill">
                  Enter
                </a>
              </div>
            </div>

            <div class="hover-content p-2">
              <h6 class="text-white fw-bold">
                OS, BROWSER & DEVICE AGNOSTIC
              </h6>
              <p class="fs-14 text-white mb-0">
                Our powerful rendering technology empowers businesses to
                maximize reach while simplifying 3D and XR content creation,
                curation and consumption
              </p>
            </div>
          </div>
        </div>
            </div>
            `;
      });
    });
};

loadDataFromJson();

const search = document.getElementById("search");
const result = document.getElementById("result");


// search by name
// search.addEventListener("keyup", (e) => {
//   const value = e.target.value.toLowerCase();
//   const card = document.querySelectorAll(".card");

//   showCase.innerHTML = "";
//   result.innerHTML = "";

//   //   hide the hero while searching
//   if (value.length > 0) {
//     document.querySelector(".hero").style.display = "none";
//     const div = document.createElement("div");
//     div.classList.add("py-3", "bg-sucess");
//     div.innerHTML = "Search Result For: " + value;
//     result.appendChild(div);
//   } else {
//     document.querySelector(".hero").style.display = "block";
//   }

//   //   card.forEach((item) => {
//   //     const name = item.querySelector(".card-body p").textContent.toLowerCase();

//   //     if (name.includes(value)) {
//   //       item.style.display = "block";
//   //     } else {
//   //       item.style.display = "none";
//   //     }
//   //   });

//   fetch("./js/data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       const filteredData = data.filter((item) => {
//         return item.name.toLowerCase().includes(value);
//       });

//       if (filteredData.length === 0) {
//         showCase.innerHTML = `<p class="fw-bold text-white">No Result Found</p>`;
//       }

//       filteredData.forEach((item) => {
//         showCase.innerHTML += `
//             <div class="col-xl-2 col-lg-3 col-md-4 col-6">
//           <div class="card position-relative border-0 rounded-3 overflow-hidden">
//             <div class="img-holder position-relative">
//               <img src="${item.banner}" class="show-img img-fluid" alt="" />
//               <div class="overlay">
//                 <h5 class="text-white fw-bold">${item.topDate}</h5>
//                 <div class="d-flex mt-5 justify-content-between align-items-center">
//                   <img src="img/obxr.png" class="img-fluid obxr" alt="" />
//                   <img src="${item.brandLogo}" class="img-fluid obxr" alt="" />
//                 </div>
//               </div>
//             </div>
//             <div class="card-body bg-black">
//               <p class="text-white mb-0 fw-bold fs-14">${item.name}</p>
//               <p class="text-white fs-12 mb-1">${item.date}</p>
//               <div class="d-flex justify-content-between align-items-center z-200">
//                 <img src="${item.brandLogo}" class="img-fluid obxr" alt="" />
//                 <a href="https://futurestages.github.io/OnBoardXR_Landing_Page/docs"
//                   class="btn btn-yellow fs-14 px-2 py-1 rounded-pill">
//                   Enter
//                 </a>
//               </div>
//             </div>

//             <div class="hover-content p-2">
//               <h6 class="text-white fw-bold">
//                 OS, BROWSER & DEVICE AGNOSTIC
//               </h6>
//               <p class="fs-14 text-white mb-0">
//                 Our powerful rendering technology empowers businesses to
//                 maximize reach while simplifying 3D and XR content creation,
//                 curation and consumption
//               </p>
//             </div>
//           </div>
//         </div>
//             </div>
//             `;
//       });
//     });
// });

// search by tags
search.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  showCase.innerHTML = "";
  result.innerHTML = "";

    //   hide the hero while searching
    if (value.length > 0) {
      document.querySelector(".hero").style.display = "none";
      const div = document.createElement("div");
      div.classList.add("py-3", "bg-sucess");
      div.innerHTML = "Search Result For: " + value;
      result.appendChild(div);
    } else {
      document.querySelector(".hero").style.display = "block";
    }


    fetch("./js/data.json")
    .then((res) => res.json())
    .then((data) => {
      const filteredData = data.filter((item) => {
        const tags = item.tags.join();
        return tags.includes(value) || item.name.toLowerCase().includes(value);
      });

      if (filteredData.length === 0) {
        showCase.innerHTML = `<p class="fw-bold text-white">No Result Found</p>`;
      }

      filteredData.forEach((item) => {
        showCase.innerHTML += `
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
          <div class="card position-relative border-0 rounded-3 overflow-hidden">
            <div class="img-holder position-relative">
              <img src="${item.banner}" class="show-img img-fluid" alt="" />
              <div class="overlay">
                <h5 class="text-white fw-bold">${item.topDate}</h5>
                <div class="d-flex mt-5 justify-content-between align-items-center">
                  <img src="img/obxr.png" class="img-fluid obxr" alt="" />
                  <img src="${item.brandLogo}" class="img-fluid obxr" alt="" />
                </div>
              </div>
            </div>
            <div class="card-body bg-black">
              <p class="text-white mb-0 fw-bold fs-14">${item.name}</p>
              <p class="text-white fs-12 mb-1">${item.date}</p>
              <div class="d-flex justify-content-between align-items-center z-200">
                <img src="${item.brandLogo}" class="img-fluid obxr" alt="" />
                <a href="https://futurestages.github.io/OnBoardXR_Landing_Page/docs"
                  class="btn btn-yellow fs-14 px-2 py-1 rounded-pill">
                  Enter
                </a>
              </div>
            </div>

            <div class="hover-content p-2">
              <h6 class="text-white fw-bold">
                OS, BROWSER & DEVICE AGNOSTIC
              </h6>
              <p class="fs-14 text-white mb-0">
                Our powerful rendering technology empowers businesses to
                maximize reach while simplifying 3D and XR content creation,
                curation and consumption
              </p>
            </div>
          </div>
        </div>
            </div>
            `;
      });
    });
});
