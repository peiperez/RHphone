const locations = [
  {icon:"🏠", tag:"Home", title:"Itsuki's Bachelor Pad", pin:true, x:22, y:24, text:"Itsuki's bachelor pad aka home sweet home… He never cooks or cleans… yippee!"},
  {icon:"🍸", tag:"Work", title:"Le Souterrain", x:48, y:45, text:"The most expensive venue around! Anyone with enough cash and status frequents here."},
  {icon:"🪩", tag:"Club", title:"VENÓM", x:78, y:23, text:"An exclusive nightclub."},
  {icon:"🏢", tag:"Enterprise", title:"Kurogane Enterprise", x:81, y:57, text:"Tatsuya's family's most notable organization, with plenty of public charity events and political influence. They pretty much engulfed my parents' organizations after we went broke."},
  {icon:"🪦", tag:"Cemetery", title:"Cemetery", x:59, y:79, text:"Mom and dad were buried here…"},
  {icon:"📚", tag:"Publisher", title:"Yagami Publishing", x:34, y:75, text:"The home of Itsuki's publisher and editor — Yagami, if I remember correctly."},
  {icon:"🏥", tag:"Hospital", title:"Saint Aurelia Hospital", x:15, y:53}
];

const insta = [
  {u:"@OnlyTojjiichi", character:"Toji", occupation:"Odd jobs", b:"Lvl 23 waiting for the pay off", photo:"images/toji-pfp.png", pos:"center 28%"},
  {u:"@official.Tatsuya", character:"Tatsuya", occupation:"Politician", b:"Politician. 25.", photo:"images/tatsuya-pfp.png", pos:"center 24%"},
  {u:"@UndrGrnd_Ry", character:"Ryuji", occupation:"Entrepreneur", b:"32. You shouldn’t be here should you…?", photo:"images/ryuji-pfp.png", pos:"center 26%"},
  {u:"@Its.Ukiholic", character:"Itsuki", occupation:"Novelist", b:"27. Novelist. Check out my novel and art work in the link below!", photo:"images/itsuki-pfp.png", pos:"center 16%"},
  {u:"@AkohitoSaionji", character:"Ritsu", pseudonym:"Akihito", occupation:"Idol", b:"Idol. 20. Check out my new album: Reflexion out now!", v:true, photo:"images/akihito-ritsu.png", pos:"center 25%"}
];

const reminders = [
  "Pay off debt : -$65,000,000",
  "Work",
  "Investigate parents murder- what happened? Why? Whey did they take out so much money from the mafia? Who caused this to happen- who is to blame?",
  "Check on Itsuki’s mental- drinking problem?",
  "Clean",
  "Cook",
  "Interrogate Tatsuya: private account? Are we not as close as I think we are? Why is he avoiding me…?",
  "Look into Toji: hes been in debt to the mafia for years working for Ryuji. Why is he taking so many loans from them? See if he knows anything since the mafia trusts him, shady?",
  "Ryuji: get closer to him see if he knows anything? #SCARYYYY",
  "Itsuki: does he know something?",
  "Ritsu: whats his deal? Whyd he get into preforming? 2 faced…His DMs- hes so concerned ab me knowing him, mafia?"
];

const app = document.getElementById("app");
const shell = document.querySelector(".site-shell");
const appToolbar = document.querySelector(".app-toolbar");
const phoneApps = [
  {page:"maps", title:"Maps", description:"Find your way"},
  {page:"instapic", title:"InstaPic", description:"Your dangerous connections"},
  {page:"calendar", title:"Calendar", description:"Dates and story events"},
  {page:"photos", title:"Photos", description:"Your memories"},
  {page:"notes", title:"Notes", description:"Secrets worth keeping"},
  {page:"reminderz", title:"Reminderz", description:"Your to-do list"}
];

function renderHome(){
  app.innerHTML = `
    <section class="home-screen" aria-label="Your story phone">
      <div class="home-clock"><p id="home-date"></p><div id="home-time"></div><span>A little ordinary. A little dangerous.</span></div>
      <div class="story-widget">
        <span class="widget-eyebrow">YOUR NEXT CHAPTER</span>
        <h1>Five Men<br><span>and a Fallen Heiress</span></h1>
        <p>Your old life is gone.<br>A new story is just a tap away.</p>
        <button class="story-open" type="button" data-page="maps">Enter story <span aria-hidden="true">↗</span></button>
        <span class="widget-flower" aria-hidden="true">✳</span>
      </div>
      <nav class="home-apps" aria-label="All apps">
        ${phoneApps.map(phoneApp => `<button class="home-app" type="button" data-page="${phoneApp.page}" aria-label="Open ${phoneApp.title}: ${phoneApp.description}">
          <span class="app-icon icon-${phoneApp.page}"><svg aria-hidden="true"><use href="#icon-${phoneApp.page}"/></svg></span>
          <span class="app-label">${phoneApp.title}</span>
        </button>`).join("")}
      </nav>
      <div class="home-caption"><span aria-hidden="true"></span> YOUR WORLD, IN YOUR POCKET</div>
    </section>`;
  updateClock();
}

function updateClock(){
  const now = new Date();
  const time = now.toLocaleTimeString([], {hour:"numeric", minute:"2-digit", hour12:false});
  document.getElementById("status-time").textContent = time;
  const homeTime = document.getElementById("home-time");
  if(homeTime){
    homeTime.textContent = time;
    document.getElementById("home-date").textContent = now.toLocaleDateString([], {weekday:"long", month:"long", day:"numeric"});
  }
}

const characterNotes = {
  Toji: {
    title: "Toji",
    text: "Backstory: Toji grew up poor with his younger siblings and learned early that nobody was coming to save his family. He left school young and began working multiple jobs to help support them. He developed a short temper from constantly being exhausted and stressed, but he remained deeply protective of the people around him. He meets MC through their workplace and initially sees her as someone who is struggling just like him. His father abandoned the family when he was young, leaving his mother to raise him and his younger siblings alone. When his mother became seriously ill and was hospitalized, he took out a loan from a mafia boss to cover her expensive medical treatment and in order to support his younger siblings. Now, he takes on dangerous and sometimes illegal jobs to repay the debt and protect and provide for the people he loves. He worries that his involvement with the mafia could eventually catch up with him and put his family in danger. At the same time, he fears that their poverty and low social status could limit his younger siblings’ futures or leave them susceptible to bullying and judgment at school."
  },
  Tatsuya: {
    title: "Tatsuya",
    text: "Tatsuya was born into a powerful political family. From childhood, he was taught that winning mattered more than morality. His family taught him how to manipulate people, control public opinion, and bury scandals. He knows his family’s reputation is built on dirty politics, but he doesn’t particularly care—as long as he benefits from it. MC’s sudden appearance eventually threatens something his family has spent years protecting. His parents expected nothing less than perfection, constantly pressuring him to succeed and remain the best. He isn’t inherently a bad person, but he was raised to believe that corruption and dirty tactics are acceptable if they give him an advantage or upper hand on his competitors. He carries immense pressure to please his parents and live up to their impossible expectations beneath the calculating refined exterior— this is an overwhelming burden for him, and he directly ties his self worth to his parent's approval."
  },
  Ryuji: {
    title: "Ryuji",
    text: "Ryuji inherited a criminal organization from his father. He became feared for being ruthless and impossible to intimidate. However, he secretly hates the violence that comes with his position and tries to keep innocent people away from his world. MC begins working for him because of her family’s enormous debt, and he initially treats her coldly. Over time, her perseverance reminds him of the person he wanted to be before becoming a mafia boss. His father was abusive and demanding, he ruled with an iron fist forcing Ryuji to take over the mafia after him. Ryuji lost a lot of people he cared deeply about because of his involvement in the mafia and underground life because of this he doesn’t really let anyone get close to him for their own good. Deep down, he is genuinely compassionate and uses his position to protect innocent people to the best of his ability. He runs the mafia with strict rules against harming families or exploiting the poor, instead targeting corrupt politicians, wealthy criminals, and other powerful people who abuse their influence."
  },
  Itsuki: {
    title: "Itsuki",
    personalNote: [
      "Itsuki and I used to be super close childhoodfriends but we havent really spoken at all in the last nine years- he kinda just disappeared... Now that I'm living with him it's great....except I'm noticing things... hes changed.",
      "He seems to be very irresponsible, lazy, and honestly I'm starting to suspect he may have a drinking problem. I keep seeing empty bottles in the trash. I Kinda remember him falling out with his family and idk if thats related but, somethings definately going on- I just don't know if its really my place to say anything. I want to keep investigating and finding out what happened to my parents but I'm also super worried about him."
    ],
    text: "Itsuki came from a wealthy family but quickly abandoned any interest in a normal career. He discovered that he could make money writing novels and became successful enough to live comfortably—until his irresponsibility caught up with him. He spends money recklessly, misses deadlines, and constantly gets himself into trouble. MC ends up living with him because she needs an inexpensive place to stay, while he needs someone capable of keeping his chaotic life somewhat functional and also enjoys MC cleaning and cooking for him. Her determination gradually becomes his favorite source of inspiration. He turned to drinking because the pressure from his family to assimilate and comply by getting a “real” and important job ruined their relationship, feels guilty for prioritizing his passion and freedom over them. They still support him financially for the most part but his parents refuse to claim or acknowledge him publicly—essentially paying for his silence and cooperation, which makes him feel like he’s still caged."
  },
  Ritsu: {
    title: "Ritsu",
    text: "Ritsu was discovered as a teenager and became famous almost overnight. He joined a popular idol group and quickly became the spotlight, his career taking off the second he hit the stage. He used a pseudonym, going by the name of Akihito. His career taught him that people rarely care about the real person behind the beautiful image. He learned to create whatever version of himself people wanted to see: charming, innocent, elegant, or seductive. Behind the celebrity persona, he’s insecure and intensely competitive. MC catches his attention because she doesn’t seem impressed by him at all, making her one of the few people he genuinely wants to win over. Worried that if anyone really knew the real him they might not like him and he feels a lot of pressure and needs to be liked. He gets tired of putting up a face and playing into his idol persona and acts completely different when not in the public eye, often being much meaner and disgusted by the lower classes and unattractive or untalented people."
  }
};

const noteAnnotations = {
  Toji: {highlights:["nobody was coming to save his family", "deeply protective"], circles:["the debt"]},
  Tatsuya: {highlights:["winning mattered more than morality", "pressuring him to succeed and remain the best"], circles:["perfection"]},
  Ryuji: {highlights:["secretly hates the violence", "uses his position to protect innocent people"], circles:["ruthless"]},
  Itsuki: {highlights:["make money writing novels", "favorite source of inspiration"], circles:["drinking"]},
  Ritsu: {highlights:["people rarely care about the real person behind the beautiful image", "insecure and intensely competitive"], circles:["Akihito"]}
};

function renderAnnotatedNote(note){
  const annotations = noteAnnotations[note.title];
  let text = note.text;
  annotations.highlights.forEach(phrase => {
    text = text.replace(phrase, match => `<mark class="note-highlight">${match}</mark>`);
  });
  annotations.circles.forEach(phrase => {
    text = text.replace(phrase, match => `<span class="note-circle">${match}</span>`);
  });
  return text;
}

function pageHeader(title, subtitle){ return `<div class="section-head"><h2>${title}</h2><p>${subtitle}</p></div>`; }

function renderMaps(){
  app.innerHTML = pageHeader("Maps","Places you’ll visit throughout the story.") +
    `<section class="map-panel" aria-label="Story location map">
      <div class="map-panel-heading"><div><span>FIELD MAP</span><h3>Places around the city</h3></div><strong>${locations.length} locations</strong></div>
      <div class="city-map">
        <div class="map-park map-park-one"></div><div class="map-park map-park-two"></div>
        <div class="map-river"></div>
        <div class="map-district-label map-district-one">NORTH DISTRICT</div><div class="map-district-label map-district-two">DOWNTOWN</div>
        ${locations.map((location,index)=>`
          <button class="map-pin" data-location-index="${index}" style="--pin-x:${location.x}%;--pin-y:${location.y}%" aria-label="Go to location ${index + 1}: ${location.title}" title="${location.title}">
            <span class="map-pin-marker">${location.icon}</span><span class="map-pin-number">${String(index + 1).padStart(2,"0")}</span>
          </button>`).join("")}
        <div class="map-compass" aria-hidden="true"><span>N</span><i>↑</i></div>
      </div>
    </section>
    <div class="location-grid">${locations.map((location,index)=>`
      <article class="card location-card" id="location-${index}">
        ${location.pin?`<div class="pin-note">📌 Itsuki has this pinned too!</div>`:""}
        <div class="location-card-heading"><div class="icon">${location.icon}</div><span class="tag">${location.tag}</span><span class="location-number">${String(index + 1).padStart(2,"0")}</span></div>
        <h3>${location.title}</h3>
        ${location.text ? `<p>${location.text}</p>` : ''}
      </article>`).join("")}</div>`;

  document.querySelectorAll(".map-pin").forEach(button => {
    button.addEventListener("click", () => {
      const card = document.getElementById(`location-${button.dataset.locationIndex}`);
      card.scrollIntoView({behavior:"smooth", block:"center"});
      card.classList.add("selected");
      window.setTimeout(() => card.classList.remove("selected"), 1400);
    });
  });
}

function renderInsta(){
  app.innerHTML = `
    <section class="insta-view" aria-label="InstaPic">
      <header class="insta-topbar"><span class="insta-wordmark">InstaPic</span><span class="insta-topbar-label">STORY SOCIAL</span></header>
      <div class="insta-section-heading"><div><span>YOUR CIRCLE</span><h2>Discover people</h2></div><span class="insta-count">${insta.length} profiles</span></div>
      <div class="insta-stories" aria-label="Character profiles">
        ${insta.map(p=>`
          <button class="insta-story" type="button" data-profile-name="${p.u.replace(/^@/, '')}" aria-label="View ${p.character}'s profile">
            <span class="insta-story-ring"><span class="avatar">${p.photo?`<img src="${p.photo}" alt="" style="object-position:${p.pos || 'center center'};">`:p.character.slice(0,1)}</span></span>
            <span>${p.character}</span>
          </button>`).join("")}
      </div>
      <div class="insta-list-heading"><h3>Suggested for you</h3><span>Tap a profile to explore</span></div>
      <div class="profile-list">${insta.map((p,i)=>`
        <button class="profile" type="button" data-profile-name="${p.u.replace(/^@/, '')}">
          <span class="avatar">${p.photo?`<img src="${p.photo}" alt="" style="object-position:${p.pos || 'center center'};">`:(i===0?"T":i===1?"T":i===2?"R":i===3?"I":"A")}</span>
          <span class="profile-copy">
            <span class="username">${p.u}${p.v?` <span class="verified">✓</span>`:""}</span>
            <span class="profile-display-name">${p.character} · ${p.occupation}</span>
            <span class="bio">${p.b}</span>
          </span>
          <span class="profile-open" aria-hidden="true">View profile <span>›</span></span>
        </button>`).join("")}</div>
    </section>`;

  document.querySelectorAll(".profile, .insta-story").forEach(card => {
    card.addEventListener("click", () => renderCharacterProfile(card.dataset.profileName));
  });
}

function renderCharacterProfile(name){
  const match = insta.find(p => p.u.replace(/^@/, '') === name) || insta[0];
  const label = match.u.replace(/^@/, '');
  const bio = match.b;
  const albumLink = label === 'AkohitoSaionji' ? '<a class="album-link" href="#" aria-disabled="true">Listen to Reflexion <span aria-hidden="true">↗</span></a>' : '';
  const avatar = match.photo ? `<img src="${match.photo}" alt="${match.u}" style="object-position:${match.pos || 'center center'};">` : `<div class="avatar">${label.slice(0,1)}</div>`;
  const thoughtBubble = label === 'AkohitoSaionji' ? `<div class="thought-bubble">Ngl...I'M THE greatesttt!</div>` : '';
  const hasChat = label === 'AkohitoSaionji' || label === 'Its.Ukiholic';
  const chatMessages = label === 'AkohitoSaionji' ? `
    <div class="chat-message received"><span class="chat-sender">Ritsu</span><p>Thought ya didn't know who I was? 😏</p></div>
    <div class="chat-message sent"><span class="chat-sender">User</span><p>And I'm surprised you looked through your millions of followers to see if I was lying. 🙄</p></div>
    <div class="chat-message received"><span class="chat-sender">Ritsu</span><p>Hmm... 🤔</p></div>
    <div class="chat-message received"><span class="chat-sender">Ritsu</span><p>Touché... 😏</p></div>
    <div class="chat-message received"><span class="chat-sender">Ritsu</span><p>But it'll be a cold day in hell before I ever follow YOU back, LMAO 😂</p></div>
    <div class="chat-message sent"><span class="chat-sender">User</span><p>So you stalk me, but you're too good to follow me back? 👀</p></div>
    <div class="chat-message received"><span class="chat-sender">Ritsu</span><p>Don't flatter yourself, jeez... 😒</p></div>
    <div class="chat-message received"><span class="chat-sender">Ritsu</span><p>And we BOTH know I'm too good to follow you... little miss scandal. 😉</p></div>
    <div class="chat-message sent"><span class="chat-sender">User</span><p>Touché. 😅</p><span class="chat-seen">Seen</span></div>
  ` : '';
  const chatThread = hasChat ? `
    <dialog class="chat-dialog" aria-labelledby="profile-chat-title">
      <div class="chat-window">
        <header class="chat-header">
          <div class="chat-contact">
            <img src="${match.photo}" alt="">
            <div><strong id="profile-chat-title">${match.character}</strong><span>${match.u}</span></div>
          </div>
          <button class="chat-close" type="button" aria-label="Close conversation">×</button>
        </header>
        <div class="chat-messages" role="log" aria-label="Messages" aria-live="polite">${chatMessages}</div>
      </div>
    </dialog>
  ` : '';
  const postImage = label === 'OnlyTojjiichi' ? `images/toji-post.jpg` : '';
  const isPrivate = label === 'official.Tatsuya';
  const stats = label === 'OnlyTojjiichi' ? {posts: 128, following: 197, followers: 1972}
    : label === 'official.Tatsuya' ? {posts: 42, following: 320, followers: '250K'}
    : label === 'AkohitoSaionji' ? {posts: 402, following: 18, followers: 1200000}
    : label === 'UndrGrnd_Ry' ? {posts: 42, following: 2, followers: 12800}
    : label === 'Its.Ukiholic' ? {posts: 42, following: 4268, followers: 20400}
    : {posts: 42, following: 320, followers: 980};

  app.innerHTML = `<section class="insta-profile-view">` +
    pageHeader("Profile","") +
    `<button class="back-btn" data-back="instapic">← Back to InstaPic</button>
    <div class="profile-detail">
      <div class="profile-photo-wrap">
        <div class="profile-detail-avatar">${avatar}</div>
        ${thoughtBubble}
      </div>
      <div class="profile-detail-body">
        <div class="profile-detail-top">
          <div class="profile-detail-name">
            <h3>${match.pseudonym || match.character}${label === 'AkohitoSaionji' ? ' <span class="verified">✓</span>' : ''}</h3>
            <span class="profile-occupation">${match.occupation}</span>
          </div>
          ${isPrivate ? '<span class="tag">Private</span>' : label === 'AkohitoSaionji' ? '<span class="tag">Verified</span>' : ''}
        </div>
        ${isPrivate ? '<p class="private-notice">This account is private.</p>' : ''}
        <div class="stats-row">
          <div class="stat-box"><strong>${stats.posts}</strong><span>Posts</span></div>
          <div class="stat-box"><strong>${stats.following}</strong><span>Following</span></div>
          <div class="stat-box"><strong>${stats.followers}</strong><span>Followers</span></div>
        </div>
        <div class="profile-actions">
          <button class="message-btn" type="button">Message</button>
          <button class="following-btn">${isPrivate ? 'Requested' : 'Following'}</button>
        </div>
        <p class="profile-bio">${bio}</p>
        ${albumLink}
      </div>
    </div>
    ${postImage ? `
      <div class="card toji-post">
        <img class="toji-post-image" src="${postImage}" alt="${label} post">
        <div class="toji-post-caption">"Man I gotta get a new phone...cameras busted "</div>
      </div>
    ` : ''}
    ${chatThread}</section>`;

  document.querySelector(".back-btn").addEventListener("click", () => renderInsta());
  const fakeAlbumLink = document.querySelector(".album-link");
  if(fakeAlbumLink) fakeAlbumLink.addEventListener("click", event => event.preventDefault());
  const chatDialog = document.querySelector(".chat-dialog");
  if(chatDialog){
    document.querySelector(".message-btn").addEventListener("click", () => chatDialog.showModal());
    chatDialog.querySelector(".chat-close").addEventListener("click", () => chatDialog.close());
    chatDialog.addEventListener("click", event => {
      if(event.target === chatDialog) chatDialog.close();
    });
  }
}

function renderEmpty(title, icon, desc){
  app.innerHTML = pageHeader(title,"This section is ready for you to fill in.") +
    `<div class="empty"><div class="empty-inner"><div class="big">${icon}</div><h3>Coming soon</h3><p>${desc}</p></div></div>`;
}

function renderNotes(selected = "Toji"){
  const keys = Object.keys(characterNotes);
  const current = characterNotes[selected] || characterNotes.Toji;
  const currentIndex = keys.indexOf(current.title) + 1;

  app.innerHTML = pageHeader("Notes","Character files and story details.") +
    `<div class="notes-shell">
      <nav class="note-tabs" aria-label="Character files">
        <div class="note-tabs-heading">Character files</div>
        ${keys.map((name,index) => `
        <button class="note-page-tab ${name===current.title?"active":""}" data-note-char="${name}" aria-current="${name===current.title?"page":"false"}">
          <span>${name}</span><span class="note-index">${String(index + 1).padStart(2,"0")}</span>
        </button>
      `).join("")}</nav>
      <article class="card notes-page">
        <div class="notes-page-meta"><span>Character file</span><span>FILE ${String(currentIndex).padStart(2,"0")} / ${String(keys.length).padStart(2,"0")}</span></div>
        <h3>${current.title}</h3>
        <p>${renderAnnotatedNote(current)}</p>
        ${current.personalNote ? `<section class="personal-note" aria-label="Personal note">
          <h4>Personal note</h4>
          ${current.personalNote.map(paragraph => `<p>${paragraph}</p>`).join("")}
        </section>` : ""}
      </article>
    </div>`;

  document.querySelectorAll(".note-page-tab").forEach(button => {
    button.addEventListener("click", () => renderNotes(button.dataset.noteChar));
  });
}

function renderReminderz(){
  app.innerHTML = pageHeader("Reminderz", "Things I can’t forget.") +
    `<section class="reminder-list" aria-labelledby="reminder-list-title">
      <header class="reminder-list-heading">
        <span>MY LIST</span><span>${reminders.length} reminders</span>
        <h3 id="reminder-list-title">TO DO:</h3>
      </header>
      <ol class="reminder-items">
        ${reminders.map((reminder, index) => `<li class="reminder-item${index === 0 ? " reminder-debt" : ""}">
          <span class="reminder-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <p>${reminder}</p>
        </li>`).join("")}
      </ol>
    </section>`;
}

function show(page, moveFocus = true){
  const selectedApp = phoneApps.find(phoneApp => phoneApp.page === page);
  if(page !== "home" && !selectedApp) return;
  shell.classList.toggle("is-home", page === "home");
  appToolbar.hidden = page === "home";
  app.setAttribute("aria-label", selectedApp ? selectedApp.title : "Home screen");
  if(selectedApp){
    document.getElementById("app-title").textContent = selectedApp.title;
    document.getElementById("toolbar-symbol").setAttribute("href", `#icon-${page}`);
  }
  if(page==="home") renderHome();
  if(page==="maps") renderMaps();
  if(page==="instapic") renderInsta();
  if(page==="calendar") renderEmpty("Calendar","♡","Your schedule and story events can be added here later.");
  if(page==="photos") renderEmpty("Photos","✦","Your gallery is ready. Add your photos to the images folder and connect them here.");
  if(page==="notes") renderNotes();
  if(page==="reminderz") renderReminderz();
  app.scrollTop = 0;
  if(moveFocus) app.focus({preventScroll:true});
}
document.addEventListener("click", event => {
  const launcher = event.target.closest("button[data-page]");
  if(launcher) show(launcher.dataset.page);
});
show("home", false);
window.setInterval(updateClock, 1000);
