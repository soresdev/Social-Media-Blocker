const socialSites = ['www.youtube.com', 'www.facebook.com', 'www.instagram.com', 'www.twitter.com', 'www.x.com'];

const generateHTML = (page) => {
    return `
   
   <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
  </div>
  <div class='c'>
      <div class='_404'>404</div>
      <hr>
      <div class='_1'>GET BACK TO WORK</div>
      <div class='_2'>STUDYING > ${page}</div>
  </div>
   `;
}

let hostName = window.location.hostname;

if(socialSites.includes(hostName)){
    document.body.innerHTML = generateHTML(hostName);
}