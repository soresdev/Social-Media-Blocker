const socialSites = ['www.youtube.com', 'www.facebook.com', 'www.instagram.com', 'www.twitter.com', 'www.x.com', 'discord.com'];

const generateStyles = () => {
    let styleSheet = document.createElement('link');

    styleSheet.type = 'text/css';
    styleSheet.rel = 'stylesheet';
    styleSheet.href = 'styles.css';

    let head = document.getElementsByTagName('head')[0];

    if(head){
        head.appendChild(styleSheet);
    }
    
    return;
}

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
      <div class='_1'>Refocus and get back to work!</div>
      <div class='_2'>Blocked: <span>${page}</span></div>
  </div>
   `;
}

let hostName = window.location.hostname;

if(socialSites.includes(hostName)){
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML(hostName);
}