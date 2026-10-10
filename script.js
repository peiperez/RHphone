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
  {u:"@AkohitoSaionji", character:"Ritsu", pseudonym:"Akihito", occupation:"Idol", b:"Idol. 20. Check out my new album: Reflexion out now!", v:true, photo:"images/akihito-ritsu.png", pos:"center 25%", threadKey:"RitsuMain"},
  {u:"@Midnight_Tsuki", character:"Ritsu", occupation:"Idol", b:"月が綺麗ですね 🌕🌟", photo:"images/midnight-tsuki-pfp.png", pos:"center 25%", threadKey:"RitsuPersonal"}
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

const photoAlbum = [
  {src:"images/album-upload-01.png", title:"Photo 1"},
  {src:"images/album-upload-02.png", title:"Photo 2"},
  {src:"images/album-upload-03.png", title:"Photo 3"},
  {src:"images/album-upload-04.png", title:"Photo 4"},
  {src:"images/album-upload-05.png", title:"Photo collage 5"},
  {src:"images/album-upload-05-01.png", title:"Photo 5 - 1 of 9"},
  {src:"images/album-upload-05-02.png", title:"Photo 5 - 2 of 9"},
  {src:"images/album-upload-05-03.png", title:"Photo 5 - 3 of 9"},
  {src:"images/album-upload-05-04.png", title:"Photo 5 - 4 of 9"},
  {src:"images/album-upload-05-05.png", title:"Photo 5 - 5 of 9"},
  {src:"images/album-upload-05-06.png", title:"Photo 5 - 6 of 9"},
  {src:"images/album-upload-05-07.png", title:"Photo 5 - 7 of 9"},
  {src:"images/album-upload-05-08.png", title:"Photo 5 - 8 of 9"},
  {src:"images/album-upload-05-09.png", title:"Photo 5 - 9 of 9"},
  {src:"images/album-upload-06.png", title:"Photo collage 6"},
  {src:"images/album-upload-06-01.png", title:"Photo 6 - 1 of 9"},
  {src:"images/album-upload-06-02.png", title:"Photo 6 - 2 of 9"},
  {src:"images/album-upload-06-03.png", title:"Photo 6 - 3 of 9"},
  {src:"images/album-upload-06-04.png", title:"Photo 6 - 4 of 9"},
  {src:"images/album-upload-06-05.png", title:"Photo 6 - 5 of 9"},
  {src:"images/album-upload-06-06.png", title:"Photo 6 - 6 of 9"},
  {src:"images/album-upload-06-07.png", title:"Photo 6 - 7 of 9"},
  {src:"images/album-upload-06-08.png", title:"Photo 6 - 8 of 9"},
  {src:"images/album-upload-06-09.png", title:"Photo 6 - 9 of 9"},
  {src:"images/midnight-tsuki-maid-photo.png", title:"Ritsu in the event outfit"},
  {src:"images/album-ryuji-city.png", title:"Ryuji in the city"},
  {src:"images/album-toji-lighter.png", title:"Toji with a lighter"},
  {src:"images/album-toji-smoking.png", title:"Toji smoking"},
  {src:"images/album-ryuji-bat.png", title:"Ryuji with a bat"},
  {src:"images/album-ryuji-resting.png", title:"Ryuji resting"},
  {src:"images/album-ryuji-driving.png", title:"Ryuji driving"},
  {src:"images/ryuji-pfp.png", title:"Ryuji's profile photo"},
  {src:"images/toji-pfp.png", title:"Toji's profile photo"},
  {src:"images/toji-sister-photo.png", title:"Toji's sister"},
  {src:"images/toji-message-pfp.png", title:"Toji's message photo"},
  {src:"images/toji-event-outfit.png", title:"Toji's event outfit"},
  {src:"images/toji-post.jpg", title:"Toji's InstaPic post"},
  {src:"images/toji-contact-photo.png", title:"Toji's contact photo"},
  {src:"images/itsuki-pfp.png", title:"Itsuki's profile photo"},
  {src:"images/itsuki-message-pfp.png", title:"Itsuki's message photo"},
  {src:"images/itsuki-contact-photo.png", title:"Itsuki's contact photo"},
  {src:"images/itsuki-editor-pfp.png", title:"Itsuki's editor photo"},
  {src:"images/itsuki-novel-post.png", title:"Itsuki's novel post"},
  {src:"images/tatsuya-pfp.png", title:"Tatsuya's profile photo"},
  {src:"images/tatsuya-message-pfp.png", title:"Tatsuya's message photo"},
  {src:"images/tatsuya-final-photo.png", title:"Tatsuya's selfie"},
  {src:"images/tatsuya-ranking.png", title:"Tatsuya's ranking screenshot"},
  {src:"images/tatsuya-magazine.png", title:"Tatsuya's magazine photo"},
  {src:"images/akihito-ritsu.png", title:"Akihito's profile photo"},
  {src:"images/midnight-tsuki-pfp.png", title:"Midnight Tsuki's profile photo"}
];

const messageThreads = {
  Toji: [
    {sender:"Toji", text:"Hey, can you pick up my shift today?"},
    {sender:"Toji", text:"Something came up, sorry"},
    {sender:"MC", text:"Yeah, of course"},
    {sender:"MC", text:"Is everything okay?"},
    {sender:"Toji", text:"Yeah, it's fine"},
    {sender:"Toji", text:"My sister has a game tonight"},
    {sender:"Toji", text:"She told me not to come, but I want to support her"},
    {sender:"MC", text:"[Cute sticker]", sticker:true},
    {sender:"MC", text:"Of course I can!"},
    {sender:"MC", text:"Don’t worry about it at all, you should go see her"},
    {sender:"Toji", text:"Thanks"},
    {sender:"Toji", text:"Please don’t mention anything to our coworkers"},
    {sender:"MC", text:"No problem!"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"MC", text:"How was the game?"},
    {sender:"Toji", text:"She did amazing"},
    {sender:"Toji", text:"She got mad at me for taking off work to see her, but she felt better when I told her you covered for me"},
    {sender:"Toji", text:"She was worried my boss would get mad because I didn’t show up"},
    {sender:"MC", text:"Tell her not to worry"},
    {sender:"MC", text:"I would do that any day"},
    {sender:"MC", text:"Why was she in the game?"},
    {sender:"Toji", text:"Oh yeah, she’s a cheerleader"},
    {sender:"Toji", text:"I try to go to all the home games"},
    {sender:"Toji", text:"I just couldn’t get off work this time"},
    {sender:"MC", text:"If you ever need to get off for her games again just lmk"},
    {sender:"MC", text:"I don’t mind at all"},
    {sender:"Toji", text:"I’ll keep that in mind"},
    {sender:"Toji", text:"Thank you"},
    {sender:"MC", text:"Here’s my phone number: #"},
    {sender:"MC", text:"Text me if you need anything!"}
  ],
  Tatsuya: [],
  Ryuji: [
    {sender:"MC", text:"You changed your profile picture"},
    {sender:"Ryuji", text:"An astute observation"},
    {sender:"Ryuji", text:"What about it?"},
    {sender:"MC", text:"Isn’t that the photo I took of you"},
    {sender:"MC", text:"While we were in the car"},
    {sender:"Ryuji", text:"It is"},
    {sender:"Ryuji", text:"I liked it"},
    {sender:"MC", text:"Really?"},
    {sender:"MC", text:"High praise 😜"},
    {sender:"MC", text:"I could take even more"},
    {sender:"MC", text:"If you want that"},
    {sender:"Ryuji", text:"Maybe"},
    {sender:"Ryuji", text:"I won’t pay you for it"},
    {sender:"MC", text:"Man"},
    {sender:"MC", text:"That’s okay"},
    {sender:"MC", text:"The photos do turn out good"},
    {sender:"MC", text:"Uhm... Sir what is this package?"},
    {sender:"Ryuji", text:"You need to be more specific than that"},
    {sender:"MC", text:"It has a maid costume in it..."},
    {sender:"MC", text:"AND THERES CAT EARS AND A COLLAR IN IT!?"},
    {sender:"Ryuji", text:"Ah, that"},
    {sender:"Ryuji", text:"That is for an event"},
    {sender:"Ryuji", text:"The coordinator said all staff are to wear butler and maid outfits, with the ears and collars"},
    {sender:"Ryuji", text:"It is a charity event partnered with the bar"},
    {sender:"MC", text:"Why would you agree to this???"},
    {sender:"Ryuji", text:"It was a good business opportunity"},
    {sender:"MC", text:"I don’t want to wear this 😠"},
    {sender:"MC", text:"Ask them to change the theme or something"},
    {sender:"Ryuji", text:"I am your boss"},
    {sender:"Ryuji", text:"I won’t change the theme"},
    {sender:"Ryuji", text:"Let me know if there are any issues with fit so I can order a replacement before the event"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"Ryuji", text:"It didn’t look bad on you..."},
    {sender:"Ryuji", text:"It suited you?"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"MC", text:"Don’t say that"},
    {sender:"MC", text:"It was awful"},
    {sender:"MC", text:"Every single man in there wanted to look up my skirt"},
    {sender:"MC", text:"I am not wearing something that short again"},
    {sender:"Ryuji", text:"I will keep that in mind"},
    {sender:"Ryuji", text:"I did not know the patrons were doing that"},
    {sender:"Ryuji", text:"You should tell me if that ever happens again"},
    {sender:"MC", text:"I didn’t think you would care"},
    {sender:"MC", text:"Wasn’t it part of the appeal for the event?"},
    {sender:"Ryuji", text:"Your body is not the selling point"},
    {sender:"Ryuji", text:"If the patrons ever look at you like that again let me know"},
    {sender:"Ryuji", text:"I will take care of it"},
    {sender:"MC", text:"Okay"},
    {sender:"MC", text:"Thank you ;)"}
  ],
  Itsuki: [
    {sender:"MC", text:"Hey, since we text more often I need an actual contact photo for you"},
    {sender:"MC", text:"Just send me a good photo to use"},
    {sender:"Itsuki", text:"Okay"},
    {sender:"Itsuki", image:"images/itsuki-contact-photo.png", imageAlt:"Photo Itsuki sent to MC"},
    {sender:"Itsuki", text:"I chose a really good one for you 😉"},
    {sender:"MC", text:"ITSUKI !!!"},
    {sender:"MC", text:"OMG"},
    {sender:"MC", text:"THATS NOT WHAT I ASKED FOR"},
    {sender:"MC", text:"SEND ME A PHOTO OF YOU WEARING CLOTHES 😠", disliked:true},
    {sender:"Itsuki", text:"I told you I don’t have any photos rated PG after High School"},
    {sender:"Itsuki", text:"Just use the one from senior year I have on Insta"},
    {sender:"MC", text:"You seriously don’t have anything else???"},
    {sender:"MC", text:"But I don’t want to use such an old photo"},
    {sender:"Itsuki", text:"Then take one yourself"},
    {sender:"Itsuki", text:"We live together"},
    {sender:"Itsuki", text:"I’m sure you could get something good"},
    {sender:"MC", text:"I guess"},
    {sender:"MC", text:"You’re useless"},
    {sender:"Itsuki", text:"Only because you didn’t like it 😉"},
    {sender:"MC", text:"Shut up"},
    {sender:"MC", text:"I just noticed your pfp"},
    {sender:"MC", text:"How old even is that???"},
    {sender:"Itsuki", text:"senior year of hs"},
    {sender:"MC", text:"Omg"},
    {sender:"MC", text:"Do you realize how long ago that was"},
    {sender:"MC", text:"You’re 27..."},
    {sender:"Itsuki", text:"9 yrs ago"},
    {sender:"Itsuki", text:"i knw"},
    {sender:"Itsuki", text:"y"},
    {sender:"MC", text:"That barely looks like you anymore"},
    {sender:"MC", text:"Don’t you have a more recent photo you could use"},
    {sender:"Itsuki", text:"nt one tht good"},
    {sender:"Itsuki", text:"y chng Perfection"},
    {sender:"MC", text:"Because it’s outdated"},
    {sender:"Itsuki", text:"no one cares"},
    {sender:"Itsuki", text:"othr thn u"},
    {sender:"Itsuki", text:"plus its th only pic of me clothed"},
    {sender:"Itsuki", text:"... unless u wanted to see that 😉"},
    {sender:"MC", text:"Pervert"},
    {sender:"Itsuki", text:"im jst offring"},
    {sender:"MC", text:"I’m okay"},
    {sender:"MC", text:"You can leave the pfp alone"},
    {sender:"Itsuki", text:"i didnt need ur permission"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"Itsuki", text:"I’m sick ☹"},
    {sender:"Itsuki", text:"Make me soup when you get home"},
    {sender:"Itsuki", text:"Otherwise, don’t bother me"},
    {sender:"MC", text:"I will"},
    {sender:"MC", text:"Are you okay?"},
    {sender:"MC", text:"Do I need to leave work early?"},
    {sender:"Itsuki", text:"don’t bother"},
    {sender:"Itsuki", text:"i can take care of myslf"},
    {sender:"Itsuki", text:"i just wnt soup"},
    {sender:"MC", text:"Okay"},
    {sender:"MC", text:"I’ll be home in like an hour"},
    {sender:"Timeskip", text:"1 hr later", system:true},
    {sender:"MC", text:"I’m home"},
    {sender:"MC", text:"I’m going to make soup and then come check on you"},
    {sender:"Itsuki", text:"k"},
    {sender:"Timeskip", text:"30 min later", system:true},
    {sender:"MC", text:"OMG"},
    {sender:"MC", text:"WHY ARE YOU NAKED"},
    {sender:"MC", text:"PUT SOME CLOTHES ON!!!"},
    {sender:"Itsuki", text:"im sck"},
    {sender:"Itsuki", text:"nd i was slping"},
    {sender:"Itsuki", text:"wht did u expct"},
    {sender:"MC", text:"FOR YOU TO BE DECENT"},
    {sender:"MC", text:"YOU KNEW I WAS COMING IN"},
    {sender:"MC", text:"YOU COULDNT GET DECENT IN THE 30 MINTUES IT TOOK ME TO MAKE SOUP"},
    {sender:"Itsuki", text:"it dsnt mttr"},
    {sender:"Itsuki", text:"i dnt mind 😉"},
    {sender:"Itsuki", text:"plus I look gud asf"},
    {sender:"MC", text:"I DO"},
    {sender:"MC", text:"I won’t come back until you put some clothes on"},
    {sender:"Itsuki", text:"noooooooo"},
    {sender:"Itsuki", text:"pls come bck"},
    {sender:"Itsuki", text:"i so lnly 🙁 🙁 🙁"},
    {sender:"MC", text:"Nice try!"},
    {sender:"MC", text:"No"},
    {sender:"Itsuki", text:"plssssss"},
    {sender:"Itsuki", text:"come cddle wth meeee"},
    {sender:"Itsuki", text:"im cold"},
    {sender:"MC", text:"No"},
    {sender:"MC", text:"Ya know, you’d be far less cold if you PUT SOME DAMN CLOTHES ON"},
    {sender:"Itsuki", text:"pls"},
    {sender:"Itsuki", text:"im so pathtic nd sck"},
    {sender:"Itsuki", text:"pls *cough cough*"},
    {sender:"Itsuki", text:"im so sck"}
  ],
  RitsuPersonal: [
    {sender:"Ritsu", text:"Hey girl!!!"},
    {sender:"MC", text:"I know it's you Ritsu"},
    {sender:"MC", text:"Your pfp is literally just you edited into a woman"},
    {sender:"MC", text:"And you’re the only person I know that is narcissistic enough to make an edited photo of themself their secret account’s pfp"},
    {sender:"Ritsu", text:"who r u calling a narcissist"},
    {sender:"Ritsu", text:"and who told u that wasnt a photo of me"},
    {sender:"Ritsu", text:"i am a man of many talents"},
    {sender:"MC", text:"So is that a photo of you dressed as a woman?"},
    {sender:"Ritsu", text:"‘dressed as a woman’"},
    {sender:"Ritsu", text:"what a man cant just be gorgeous"},
    {sender:"Ritsu", text:"ur just upset im prettier than u 🙄"},
    {sender:"MC", text:"I am not..."},
    {sender:"Ritsu", text:"its okay you can admit it to me"},
    {sender:"Ritsu", text:"i wont judge you"},
    {sender:"Ritsu", text:"jk i totally will"},
    {sender:"MC", text:"Uhm..."},
    {sender:"MC", text:"Are you ever not annoying?"},
    {sender:"Ritsu", text:"annoying is not a word that is even associated with me"},
    {sender:"Ritsu", text:"you might even be the first person to ever say such a thing in my presence"},
    {sender:"MC", text:"I find that hard to believe seeing as you are being real annoying right now"},
    {sender:"Ritsu", text:"i cant help that you dont enjoy my charm"},
    {sender:"Ritsu", text:"it must be a personal defect"},
    {sender:"MC", text:"Everyone else is just too afraid to say something"},
    {sender:"MC", text:"They all think it too"},
    {sender:"Timeskip", text:"Timeskip (left on seen)", system:true},
    {sender:"Ritsu", text:"i know u had a poster of me up in ur room"},
    {sender:"Ritsu", text:"dont deny it"},
    {sender:"MC", text:"Wait what?!"},
    {sender:"MC", text:"I don’t"},
    {sender:"MC", text:"What are you talking about"},
    {sender:"Ritsu", text:"i told u not to deny it"},
    {sender:"Ritsu", text:"u took it down after u got to know me"},
    {sender:"Ritsu", text:"but it was there"},
    {sender:"MC", text:"Where did you even hear such a lie"},
    {sender:"MC", text:"I need to have a word with them"},
    {sender:"Ritsu", text:"dont mind that"},
    {sender:"Ritsu", text:"i have my ways 😉"},
    {sender:"MC", text:"Well your ways are failing you, I never had a poster of you"},
    {sender:"MC", text:"End of"},
    {sender:"Ritsu", text:"u dont need to lie to me bbg"},
    {sender:"Ritsu", text:"i get it"},
    {sender:"Ritsu", text:"nby can resist the charm of Aki-kun~ 🌟"},
    {sender:"Ritsu", text:"not even the coldhearted waitress"},
    {sender:"MC", text:"First of all, don’t call me that"},
    {sender:"MC", text:"Second of all, your ‘charms’ do nothing to me"},
    {sender:"Ritsu", text:"its ok"},
    {sender:"Ritsu", text:"i know"},
    {sender:"Ritsu", text:"and thats all that matters 😈"},
    {sender:"Ritsu", text:"i saw u at work today"},
    {sender:"Ritsu", text:"it was rlly cute~~"},
    {sender:"MC", text:"HUH!?"},
    {sender:"MC", text:"I didn’t even notice you were there"},
    {sender:"Ritsu", text:"whatttttt"},
    {sender:"Ritsu", text:"how could u not notice my shining presence"},
    {sender:"MC", text:"I was kind of distracted by the ridiculous get up I was wearing"},
    {sender:"Ritsu", text:"ridiculous?"},
    {sender:"Ritsu", text:"the outfit is fine, it is on the wearer to pull it off properly"},
    {sender:"Ritsu", text:"here, look"},
    {sender:"Ritsu", image:"images/midnight-tsuki-maid-photo.png", imageAlt:"Ritsu wearing a pink maid outfit with cat ears", liked:true},
    {sender:"Ritsu", text:"see, adorable"},
    {sender:"MC", text:"..."},
    {sender:"MC", text:"Sure"},
    {sender:"Ritsu", text:"hehe, see"},
    {sender:"Ritsu", text:"u liked it"},
    {sender:"Ritsu", text:"ill keep that in mind 😉"},
    {sender:"MC", text:"At least weird men weren’t trying to look up your skirt the whole time"},
    {sender:"MC", text:"That is kinda distracting"},
    {sender:"MC", text:"So sorry I didn’t notice your ‘beauty’"},
    {sender:"Ritsu", text:"they were doing that?"},
    {sender:"Ritsu", text:"of course they were"},
    {sender:"Ritsu", text:"dont let it bother you"},
    {sender:"Ritsu", text:"that just means you were so beautiful they couldnt ignore it"},
    {sender:"MC", text:"I’m not you"},
    {sender:"MC", text:"I would love to be ignored"},
    {sender:"Ritsu", text:"just point me towards them next time"},
    {sender:"Ritsu", text:"they will be stopped by my dazzling beauty"},
    {sender:"Ritsu", text:"dont even worry cutie~ 😉"},
    {sender:"MC", text:"Uh-huh"},
    {sender:"MC", text:"I’ll totally do that"},
    {sender:"MC", text:"Thanks Ritsu"},
    {sender:"Ritsu", text:"np LOZERRRR~~~ 😉"}
  ],
  RitsuMain: [
    {sender:"Ritsu", text:"Thought ya didn't know who I was? 😏"},
    {sender:"User", text:"And I'm surprised you looked through your millions of followers to see if I was lying. 🙄"},
    {sender:"Ritsu", text:"Hmm... 🤔"},
    {sender:"Ritsu", text:"Touché... 😏"},
    {sender:"Ritsu", text:"But it'll be a cold day in hell before I ever follow YOU back, LMAO 😂"},
    {sender:"User", text:"So you stalk me, but you're too good to follow me back? 👀"},
    {sender:"Ritsu", text:"Don't flatter yourself, jeez... 😒"},
    {sender:"Ritsu", text:"And we BOTH know I'm too good to follow you... little miss scandal. 😏"},
    {sender:"User", text:"Touché. 😅", seen:true}
  ]
};
const smsThreads = {
  Itsuki: [
    {sender:"MC", text:"Hey, since we text more often I need an actual contact photo for you"},
    {sender:"MC", text:"Just send me a good photo to use"},
    {sender:"Itsuki", text:"Okay"},
    {sender:"Itsuki", image:"images/itsuki-contact-photo.png", imageAlt:"Photo Itsuki sent to MC"},
    {sender:"Itsuki", text:"I chose a really good one for you 😉"},
    {sender:"MC", text:"ITSUKI !!!"},
    {sender:"MC", text:"OMG"},
    {sender:"MC", text:"THATS NOT WHAT I ASKED FOR"},
    {sender:"MC", text:"SEND ME A PHOTO OF YOU WEARING CLOTHES 😠", disliked:true},
    {sender:"Itsuki", text:"I told you I don’t have any photos rated PG after High School"},
    {sender:"Itsuki", text:"Just use the one from senior year I have on Insta"},
    {sender:"MC", text:"You seriously don’t have anything else???"},
    {sender:"MC", text:"But I don’t want to use such an old photo"},
    {sender:"Itsuki", text:"Then take one yourself"},
    {sender:"Itsuki", text:"We live together"},
    {sender:"Itsuki", text:"I’m sure you could get something good"},
    {sender:"MC", text:"I guess"},
    {sender:"MC", text:"You’re useless"},
    {sender:"Itsuki", text:"Only because you didn’t like it 😉"},
    {sender:"MC", text:"Shut up"},
    {sender:"MC", text:"I finished cleaning the floors"},
    {sender:"MC", text:"Anything else you need me to do your highness"},
    {sender:"Itsuki", text:"Did you cook dinner for when I get back?"},
    {sender:"Itsuki", text:"You have a shift tonight, correct?"},
    {sender:"MC", text:"I thought you could just buy takeout"},
    {sender:"MC", text:"I have to leave soon, I can’t really cook a full meal right now"},
    {sender:"Itsuki", text:"That shouldn’t be my problem"},
    {sender:"Itsuki", text:"I guess I can let it slide, I wanted takeout anyway"},
    {sender:"Itsuki", text:"Don’t do that again"},
    {sender:"Itsuki", text:"Unless you don’t want your cat to have the salmon wet food I always buy him"},
    {sender:"MC", text:"Fine, I’m sorry"},
    {sender:"MC", text:"Don’t punish the cat for my transgressions"},
    {sender:"Itsuki", text:"Don’t make me 🙄"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"MC", text:"Your publicist texted me"},
    {sender:"MC", text:"Stop ignoring her"},
    {sender:"Itsuki", text:"she WHAT"},
    {sender:"Itsuki", text:"DNR"},
    {sender:"Itsuki", text:"blck her nmbr"},
    {sender:"MC", text:"You need to respond to her"},
    {sender:"MC", text:"She should not need to text me"},
    {sender:"Itsuki", text:"she shldnt be abl to txt u"},
    {sender:"Itsuki", text:"blck her nmbr"},
    {sender:"Itsuki", text:"if u txt her abt me I will kck u out and keep the cat"},
    {sender:"Itsuki", text:"dnt mess wth me"},
    {sender:"Itsuki", text:"i will do it"},
    {sender:"MC", text:"Fine, I won’t"},
    {sender:"MC", text:"Jeez"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"Itsuki", text:"I’m sick ☹"},
    {sender:"Itsuki", text:"Make me soup when you get home"},
    {sender:"Itsuki", text:"Otherwise, don’t bother me"},
    {sender:"MC", text:"I will"},
    {sender:"MC", text:"Are you okay?"},
    {sender:"MC", text:"Do I need to leave work early?"},
    {sender:"Itsuki", text:"don’t bother"},
    {sender:"Itsuki", text:"i can take care of myslf"},
    {sender:"Itsuki", text:"i just wnt soup"},
    {sender:"MC", text:"Okay"},
    {sender:"MC", text:"I’ll be home in like an hour"},
    {sender:"Timeskip", text:"1 hr later", system:true},
    {sender:"MC", text:"I’m home"},
    {sender:"MC", text:"I’m going to make soup and then come check on you"},
    {sender:"Itsuki", text:"k"},
    {sender:"Timeskip", text:"30 min later", system:true},
    {sender:"MC", text:"OMG"},
    {sender:"MC", text:"WHY ARE YOU NAKED"},
    {sender:"MC", text:"PUT SOME CLOTHES ON!!!"},
    {sender:"Itsuki", text:"im sck"},
    {sender:"Itsuki", text:"nd i was slping"},
    {sender:"Itsuki", text:"wht did u expct"},
    {sender:"MC", text:"FOR YOU TO BE DECENT"},
    {sender:"MC", text:"YOU KNEW I WAS COMING IN"},
    {sender:"MC", text:"YOU COULDNT GET DECENT IN THE 30 MINTUES IT TOOK ME TO MAKE SOUP"},
    {sender:"Itsuki", text:"it dsnt mttr"},
    {sender:"Itsuki", text:"i dnt mind 😉"},
    {sender:"Itsuki", text:"plus I look gud asf"},
    {sender:"MC", text:"I DO"},
    {sender:"MC", text:"I won’t come back until you put some clothes on"},
    {sender:"Itsuki", text:"noooooooo"},
    {sender:"Itsuki", text:"pls come bck"},
    {sender:"Itsuki", text:"i so lnly 🙁 🙁 🙁"},
    {sender:"MC", text:"Nice try!"},
    {sender:"MC", text:"No"},
    {sender:"Itsuki", text:"plssssss"},
    {sender:"Itsuki", text:"come cddle wth meeee"},
    {sender:"Itsuki", text:"im cold"},
    {sender:"MC", text:"No"},
    {sender:"MC", text:"Ya know, you’d be far less cold if you PUT SOME DAMN CLOTHES ON"},
    {sender:"Itsuki", text:"pls"},
    {sender:"Itsuki", text:"im so pathtic nd sck"},
    {sender:"Itsuki", text:"pls *cough cough*"},
    {sender:"Itsuki", text:"im so sck"}
  ],
  "Itsuki's Annoying Editor": [
    {sender:"IP", text:"Hello, this is Itsuki’s publisher. I am reaching out to ask you about Itsuki’s status. He is meant to submit a rough draft of his manuscript by tomorrow to begin the editing process. He has been ignoring all of my texts and calls. I just wanted to know if you could reach him and tell him to please respond to me."},
    {sender:"MC", text:"I’ll go talk to him right now"},
    {sender:"MC", text:"Give me a minute"},
    {sender:"Timeskip", text:"Short time skip", system:true},
    {sender:"MC", text:"I have been told not to contact you"},
    {sender:"IP", text:"Of course he would do something like this"},
    {sender:"IP", text:"I’m so sorry but I need you to do something"},
    {sender:"IP", text:"I really need this"},
    {sender:"IP", text:"I will get fired if he turns another manuscript in late"},
    {sender:"IP", text:"Just get into his computer and send it to me or something"},
    {sender:"IP", text:"Please"},
    {sender:"MC", text:"If he finds out I did that I would lose my house"}
  ],
  Tatsuya: [
    {sender:"MC", text:"Hey, so uhm..."},
    {sender:"MC", text:"You won’t accept my follow request"},
    {sender:"MC", text:"Why is that?"},
    {sender:"Tatsuya", text:"Who is this?"},
    {sender:"Tatsuya", text:"How did you acquire this number?"},
    {sender:"MC", text:"YOU DON’T HAVE MY NUMBER SAVED!?"},
    {sender:"MC", text:"We’ve known each other for how long and you never thought to give me a contact??? 🙄"},
    {sender:"Tatsuya", text:"Well now I know whose number this is. Thank you for answering the question. Please refrain from reaching out."},
    {sender:"MC", text:"Yeah, yeah"},
    {sender:"MC", text:"Now why won’t you accept my follow request"},
    {sender:"MC", text:"I could’ve sworn we were already mutuals, but I guess the app decided we shouldn’t be friends"},
    {sender:"Tatsuya", text:"That was not the app. I am too public to follow you given the scandal with the mafia."},
    {sender:"MC", text:"HUH!?"},
    {sender:"MC", text:"You can’t be serious"},
    {sender:"MC", text:"We’ve been friends for yearsssss"},
    {sender:"MC", text:"Why is it suddenly a problem now???"},
    {sender:"Tatsuya", text:"You are no longer an important figure. I cannot be publicly associated with you. You are lucky I even responded to your text; I am a busy man."},
    {sender:"Tatsuya", text:"It’s just business."},
    {sender:"MC", text:"That’s all I am?"},
    {sender:"MC", text:"Business?"},
    {sender:"Tatsuya", text:"Yes."},
    {sender:"MC", text:"Okay, sorry for bothering you"},
    {sender:"MC", text:"I didn’t realize I wasn’t good press anymore"},
    {sender:"MC", text:"I need a photo for your contact"},
    {sender:"MC", text:"I’ve gone all these years without one, but I am trying to get one for all of my contacts"},
    {sender:"Tatsuya", text:"Get a photo yourself. There are already plenty of photos of me to choose from. Plus I don’t plan on replying to you anyways."},
    {sender:"MC", text:"Okay, how about this one?"},
    {sender:"MC", image:"images/tatsuya-magazine.png", imageAlt:"Tatsuya on a magazine cover"},
    {sender:"Tatsuya", text:"No. Not that one."},
    {sender:"Tatsuya", text:"Did you have to pick the magazine photo? I don’t even like that one, I have been trying to get it changed."},
    {sender:"Tatsuya", text:"Do not use that photo."},
    {sender:"MC", text:"Okay, okay fine"},
    {sender:"MC", text:"How about this one?"},
    {sender:"MC", image:"images/tatsuya-ranking.png", imageAlt:"Screenshot of Tatsuya's ranking webpage"},
    {sender:"Tatsuya", text:"Do not use that one either. It is just a screenshot of a webpage. Find an actual photo of me. It cannot be this difficult."},
    {sender:"Tatsuya", text:"Tatsuya liked a message (liked the photo)", reaction:true},
    {sender:"MC", text:"Did you just like that photo???"},
    {sender:"Tatsuya", text:"What are you talking about?"},
    {sender:"MC", text:"It says you like a message"},
    {sender:"MC", text:"You wanted to save that photo of your ranking???"},
    {sender:"MC", text:"Just find the website yourself, omg"},
    {sender:"Tatsuya", text:"I just needed record of this because they did not ask for permission to use my name a likeness. I was going to reach out to the website or file a cease and desist."},
    {sender:"MC", text:"Right...."},
    {sender:"MC", text:"I’m sure you didn’t just like the ego boost it gave you"},
    {sender:"Tatsuya", text:"My ego does not need boosting; I just need to contact the website owner."},
    {sender:"MC", text:"Sure"},
    {sender:"MC", text:"I’ll let you have that"},
    {sender:"MC", text:"Now if you want me to use a different pic then send me one to use"},
    {sender:"MC", text:"This is all I have"},
    {sender:"MC", text:"I did my very best"},
    {sender:"Tatsuya", image:"images/tatsuya-final-photo.png", imageAlt:"Photo of Tatsuya"},
    {sender:"MC", text:"MC ❤️ the photo", reaction:true},
    {sender:"Tatsuya", text:"Just use this one."}
  ],
  Toji: [
    {sender:"Toji", text:"Sup, this is Toji!"},
    {sender:"Toji", text:"My sister says thank you for covering!"},
    {sender:"Toji", image:"images/toji-sister-photo.png", imageAlt:"Toji with his sister"},
    {sender:"MC", text:"Awwwww"},
    {sender:"MC", text:"I’ll definitely do it anytime if I get such a cute pic"},
    {sender:"MC", text:"Lmk if you need anything!"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"MC", text:"I don’t have a contact photo for you"},
    {sender:"MC", text:"You should send me a good one to use"},
    {sender:"Toji", image:"images/toji-contact-photo.png", imageAlt:"Toji's contact photo"},
    {sender:"MC", text:"MC ❤️ the photo", reaction:true},
    {sender:"Toji", text:"How’s that?"},
    {sender:"MC", text:"Good, thanks"},
    {sender:"Toji", text:"Np"},
    {sender:"Timeskip", text:"Timeskip", system:true},
    {sender:"Toji", text:"Excuse me, WHAT TF IS THIS BS!?"},
    {sender:"Toji", image:"images/toji-event-outfit.png", imageAlt:"Toji in the event outfit"},
    {sender:"MC", text:"MC ❤️ the photo", reaction:true},
    {sender:"Toji", text:"Did you get something like this too???"},
    {sender:"Toji", text:"DON’T JUST LIKE THE PHOTO"},
    {sender:"Toji", text:"Is Ryuji pulling a prank on me???"},
    {sender:"MC", text:"No, he said it’s for an event"},
    {sender:"MC", text:"I got one too"},
    {sender:"MC", text:"Mine was a maid outfit"},
    {sender:"Toji", text:"He can’t seriously expect us to wear this"},
    {sender:"Toji", text:"Who the hell does he think we are!?"},
    {sender:"MC", text:"Servants"},
    {sender:"MC", text:"Debtors"},
    {sender:"MC", text:"Should I go on?"},
    {sender:"Toji", text:"..."},
    {sender:"Toji", text:"Mannnnnn"},
    {sender:"Toji", text:"We don’t really have any other options do we 🙄"},
    {sender:"MC", text:"Not unless you want to quit"},
    {sender:"MC", text:"Which we can’t do"},
    {sender:"Toji", text:"Definitely not"},
    {sender:"Toji", text:"Goddamnit"},
    {sender:"Toji", text:"Did yours have the cat ears and everything?"},
    {sender:"MC", text:"Yeah..."},
    {sender:"MC", text:"I don’t even want to try it on"},
    {sender:"Toji", text:"Real"},
    {sender:"Toji", text:"Just try not to think about it"},
    {sender:"Toji", text:"I’ll see you at work"}
  ],
  MAFIA: [
    {sender:"MC", text:"I sent the payment"},
    {sender:"MAFIA", text:"Received."},
    {sender:"MC", text:"Where do you even get the funds to give out all of these loans?"},
    {sender:"MC", text:"I mean, a loan of $65 million that wasn’t getting paid back"},
    {sender:"MC", text:"How do you give all of that away and still have so much money???"},
    {sender:"MAFIA", text:"Why do you ask?"},
    {sender:"MAFIA", text:"It was $165 million"},
    {sender:"MAFIA", text:"That is not important"},
    {sender:"MAFIA", text:"Just ensure you pay it back"}
  ],
  Mom: [],
  Dad: []
};
const messageAccountDetails = {
  RitsuMain: {username:"@AkohitoSaionji"},
  RitsuPersonal: {username:"@Midnight_Tsuki", bio:"月が綺麗ですね 🌕🌟"}
};
const messageContactPhotos = {
  Itsuki: "images/itsuki-message-pfp.png",
  Tatsuya: "images/tatsuya-message-pfp.png",
  "Itsuki's Annoying Editor": "images/itsuki-editor-pfp.png",
  Toji: "images/toji-contact-photo.png"
};
const messageContactInitials = {
  MAFIA: "MF",
  Mom: "M",
  Dad: "D"
};
const messageContactDetails = {
  MAFIA: "CONSPICIOUS MAFIA #"
};
const messagePhotoReplies = {
  Itsuki: [{sender:"Itsuki", text:"Iknew you liked it ;)"}],
  Toji: [
    {sender:"Toji", text:";)"},
    {sender:"Toji", text:"...better not be the fckn cat butler pic..."}
  ],
  Tatsuya: [{sender:"Tatsuya", text:"What'd you like...my selfie?"}]
};

const app = document.getElementById("app");
const navs = [...document.querySelectorAll(".nav-btn")];
const dockApps = [...document.querySelectorAll(".dock-app")];
const appToolbar = document.querySelector(".app-toolbar");
const appTitle = document.getElementById("app-title");
const toolbarSymbol = document.getElementById("toolbar-symbol");
const statusTime = document.getElementById("status-time");
const homeIndicator = document.querySelector(".home-indicator");
const homeBack = document.querySelector(".home-back");

function renderMessageContactAvatar(contact, className){
  const photo = messageContactPhotos[contact];
  return photo
    ? `<img class="${className}" src="${photo}" alt="">`
    : `<span class="${className} ${className}-initials" aria-hidden="true">${messageContactInitials[contact] || escapeHTML(contact.slice(0, 1))}</span>`;
}

const characterNotes = {
  Itsuki: {
    title: "ITSUKI",
    text: "Itsuki and I used to be super close childhoodfriends but we havent really spoken at all in the last nine years- he kinda just disappeared... Now that I'm living with him it's great....except I'm noticing things... hes changed. He seems to be very irresponsible, lazy, and honestly I'm starting to suspect he may have a drinking problem. I keep seeing empty bottles in the trash. I Kinda remember him falling out with his family and idk if thats related but, somethings definately going on- I just don't know if its really my place to say anything. I want to keep investigating and finding out what happened to my parents but I'm also super worried about him. Bottles in the trash, tipsy often, slurred speech, piling bills and deadline notices, unfinished work, changes in his personality,missed responsibilities."
  },
  Toji: {
    title: "TOJI",
    text: "Toji seems like such a good guy- I mean chronically stressed but ya know, I know hes probably more wrapped up in the mafia than he’d admit- but WHY? What is he doing exactly and what does he know…"
  },
  Ryuji: {
    title: "RYUJI",
    text: "Mafia boss, my boss, I owe him… he scares me tbh but I’m honestly not even sure what he knows at all… I want to get closer to him but hes so intimidating- I don’t think hes close to anyone."
  },
  Tatsuya: {
    title: "TATSUYA",
    text: "Tatsuya and I were never close per say but we were always at the same meetings and events so I always assumed we were close- but he’s been avoiding me. I can’t even see his account on InstaPic bc he wont accept my follow request…I feel like he lwk knows a lot more than hes letting on"
  },
  Ritsu: {
    title: "RITSU (AKIHITO)",
    text: "Could he also be involved with the mafia? He rose to fame so fast. He acts so different from his stage persona- Akihito"
  }
};

const characterFiles = [
  {
    title: "Toji",
    text: "Backstory: Toji grew up poor with his younger siblings and learned early that nobody was coming to save his family. He left school young and began working multiple jobs to help support them. He developed a short temper from constantly being exhausted and stressed, but he remained deeply protective of the people around him. He meets MC through their workplace and initially sees her as someone who is struggling just like him. His father abandoned the family when he was young, leaving his mother to raise him and his younger siblings alone. When his mother became seriously ill and was hospitalized, he took out a loan from a mafia boss to cover her expensive medical treatment and in order to support his younger siblings. Now, he takes on dangerous and sometimes illegal jobs to repay the debt and protect and provide for the people he loves. He worries that his involvement with the mafia could eventually catch up with him and put his family in danger. At the same time, he fears that their poverty and low social status could limit his younger siblings’ futures or leave them susceptible to bullying and judgment at school."
  },
  {
    title: "Tatsuya",
    text: "Tatsuya was born into a powerful political family. From childhood, he was taught that winning mattered more than morality. His family taught him how to manipulate people, control public opinion, and bury scandals. He knows his family’s reputation is built on dirty politics, but he doesn’t particularly care—as long as he benefits from it. MC’s sudden appearance eventually threatens something his family has spent years protecting. His parents expected nothing less than perfection, constantly pressuring him to succeed and remain the best. He isn’t inherently a bad person, but he was raised to believe that corruption and dirty tactics are acceptable if they give him an advantage or upper hand on his competitors. He carries immense pressure to please his parents and live up to their impossible expectations beneath the calculating refined exterior— this is an overwhelming burden for him, and he directly ties his self worth to his parent's approval."
  },
  {
    title: "Ryuji",
    text: "Ryuji inherited a criminal organization from his father. He became feared for being ruthless and impossible to intimidate. However, he secretly hates the violence that comes with his position and tries to keep innocent people away from his world. MC begins working for him because of her family’s enormous debt, and he initially treats her coldly. Over time, her perseverance reminds him of the person he wanted to be before becoming a mafia boss. His father was abusive and demanding, he ruled with an iron fist forcing Ryuji to take over the mafia after him. Ryuji lost a lot of people he cared deeply about because of his involvement in the mafia and underground life because of this he doesn’t really let anyone get close to him for their own good. Deep down, he is genuinely compassionate and uses his position to protect innocent people to the best of his ability. He runs the mafia with strict rules against harming families or exploiting the poor, instead targeting corrupt politicians, wealthy criminals, and other powerful people who abuse their influence."
  },
  {
    title: "Itsuki",
    text: "Itsuki came from a wealthy family but quickly abandoned any interest in a normal career. He discovered that he could make money writing novels and became successful enough to live comfortably—until his irresponsibility caught up with him. He spends money recklessly, misses deadlines, and constantly gets himself into trouble. MC ends up living with him because she needs an inexpensive place to stay, while he needs someone capable of keeping his chaotic life somewhat functional and also enjoys MC cleaning and cooking for him. Her determination gradually becomes his favorite source of inspiration. He turned to drinking because the pressure from his family to assimilate and comply by getting a “real” and important job ruined their relationship, feels guilty for prioritizing his passion and freedom over them. They still support him financially for the most part but his parents refuse to claim or acknowledge him publicly—essentially paying for his silence and cooperation, which makes him feel like he’s still caged."
  },
  {
    title: "Ritsu",
    text: "Ritsu was discovered as a teenager and became famous almost overnight. He joined a popular idol group and quickly became the spotlight, his career taking off the second he hit the stage. He used a pseudonym, going by the name of Akihito. His career taught him that people rarely care about the real person behind the beautiful image. He learned to create whatever version of himself people wanted to see: charming, innocent, elegant, or seductive. Behind the celebrity persona, he’s insecure and intensely competitive. MC catches his attention because she doesn’t seem impressed by him at all, making her one of the few people he genuinely wants to win over. Worried that if anyone really knew the real him they might not like him and he feels a lot of pressure and needs to be liked. He gets tired of putting up a face and playing into his idol persona and acts completely different when not in the public eye, often being much meaner and disgusted by the lower classes and unattractive or untalented people."
  },
  {
    title: "USER",
    text: "Wealthy family, parents murdered, wats her autonomy"
  }
];

function escapeHTML(value){
  return value.replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[character]);
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

function renderMessages(){
  const contacts = Object.entries(smsThreads).map(([contact, thread]) => {
    const lastMessage = thread[thread.length - 1] || {text:"No messages yet."};
    const preview = lastMessage.text || (lastMessage.image || lastMessage.photoPlaceholder ? "Photo" : "No messages yet.");
    return `
      <button class="messages-contact" type="button" data-contact="${contact}">
        ${renderMessageContactAvatar(contact, "messages-contact-avatar")}
        <span class="messages-contact-copy">
          <strong>${escapeHTML(contact)}</strong>
          <span>${escapeHTML(preview)}</span>
        </span>
        <span class="messages-contact-chevron" aria-hidden="true">›</span>
      </button>
    `;
  }).join("");

  app.innerHTML = `
    <section class="messages-app" aria-label="Messages contacts">
      <div class="messages-page-heading">
        <span>YOUR CONVERSATIONS</span>
        <h2>Contacts</h2>
      </div>
      ${contacts}
    </section>`;

  document.querySelectorAll(".messages-contact").forEach(contactButton => {
    contactButton.addEventListener("click", () => renderMessagesConversation(contactButton.dataset.contact));
  });
}

function renderMessagesConversation(contact){
  const thread = smsThreads[contact];
  if(!thread) {
    renderMessages();
    return;
  }
  const contactDetails = messageContactDetails[contact];

  const messages = thread.map(message => message.system
    ? `<div class="sms-timeskip">${escapeHTML(message.text)}</div>`
    : message.reaction
      ? `<div class="sms-reaction">${escapeHTML(message.text)}</div>`
      : `<div class="sms-bubble ${message.sender === "MC" ? "sms-sent" : "sms-received"}${message.image || message.photoPlaceholder ? " sms-photo-message" : ""}">${
        message.image
          ? `<img class="sms-photo" src="${message.image}" alt="${escapeHTML(message.imageAlt)}">`
          : message.photoPlaceholder
            ? `<span class="sms-photo-placeholder">${escapeHTML(message.photoPlaceholder)}</span>`
            : escapeHTML(message.text)
      }</div>${message.disliked ? '<div class="sms-reaction">Itsuki disliked this message</div>' : ''}`
  ).join("");

  app.innerHTML = `
    <section class="messages-app" aria-label="Messages conversation with ${escapeHTML(contact)}">
      <button class="sms-back" type="button">‹ <span>Contacts</span></button>
      <header class="sms-contact-header">
        ${renderMessageContactAvatar(contact, "sms-contact-avatar")}
        <h2>${escapeHTML(contact)}</h2>
        ${contactDetails ? `<span class="sms-contact-details">${escapeHTML(contactDetails)}</span>` : ""}
      </header>
      <div class="sms-thread" aria-label="Conversation with ${escapeHTML(contact)}">
        ${messages || '<p class="sms-empty">No messages yet.</p>'}
      </div>
    </section>`;

  document.querySelector(".sms-back").addEventListener("click", renderMessages);
    document.querySelectorAll(".sms-photo").forEach(image => {
      image.addEventListener("dblclick", () => {
        const replies = messagePhotoReplies[contact];
        if(!replies) return;
        thread.push(...replies.map(message => ({...message})));
        renderMessagesConversation(contact);
        app.scrollTo({top:app.scrollHeight, behavior:"smooth"});
      });
    });
}

function renderCharacterProfile(name){
  const match = insta.find(p => p.u.replace(/^@/, '') === name) || insta[0];
  const label = match.u.replace(/^@/, '');
  const threadKey = match.threadKey || match.character;
  const bio = match.b;
  const albumLink = label === 'AkohitoSaionji' ? '<a class="album-link" href="#" data-fake-link>Listen to Reflexion <span aria-hidden="true">↗</span></a>' : '';
  const novelLink = label === 'Its.Ukiholic' ? '<a class="album-link" href="#" data-fake-link>Read The ONLY ONE <span aria-hidden="true">↗</span></a>' : '';
  const avatar = match.photo ? `<img src="${match.photo}" alt="${match.u}" style="object-position:${match.pos || 'center center'};">` : `<div class="avatar">${label.slice(0,1)}</div>`;
  const thoughtBubble = label === 'AkohitoSaionji' ? `<div class="thought-bubble">Ngl...I'M THE greatesttt!</div>` : '';
  const chatMessages = (messageThreads[threadKey] || []).map(message => `
    ${message.system ? `<div class="chat-system-message">${escapeHTML(message.text)}</div>` : `
      <div class="chat-message ${message.sender === "MC" || message.sender === "User" ? "sent" : "received"}">
        <span class="chat-sender">${escapeHTML(message.sender)}</span>
        ${message.image
          ? `<img class="chat-shared-photo" src="${message.image}" alt="${escapeHTML(message.imageAlt)}">`
          : `<p>${message.sticker ? '<span class="chat-sticker" role="img" aria-label="Cute sticker">🐱💕</span>' : escapeHTML(message.text)}</p>`}
        ${message.liked ? '<span class="chat-liked">MC ❤️ the photo</span>' : ''}
        ${message.disliked ? '<span class="chat-seen">Itsuki disliked this message</span>' : ''}
        ${message.seen ? '<span class="chat-seen">Seen</span>' : ''}
      </div>
    `}
  `).join("") || '<p class="chat-empty">No messages yet. Say hello.</p>';
  const accountDetails = messageAccountDetails[threadKey];
  const chatThread = `
    <dialog class="chat-dialog" aria-labelledby="profile-chat-title">
      <div class="chat-window">
        <header class="chat-header">
          <div class="chat-contact">
            <img src="${match.photo}" alt="">
            <div><strong id="profile-chat-title">${match.character}</strong><span>${accountDetails ? `${accountDetails.username} · ${accountDetails.bio}` : match.u}</span></div>
          </div>
          <button class="chat-close" type="button" aria-label="Close conversation">×</button>
        </header>
        <div class="chat-messages" role="log" aria-label="Messages" aria-live="polite">${chatMessages}</div>
        <form class="chat-compose">
          <label class="visually-hidden" for="profile-message-input">Write a message</label>
          <input id="profile-message-input" name="message" type="text" autocomplete="off" placeholder="Message..." required>
          <button type="submit">Send</button>
        </form>
      </div>
    </dialog>
  `;
  const postImage = label === 'OnlyTojjiichi' ? `images/toji-post.jpg`
    : label === 'Its.Ukiholic' ? `images/itsuki-novel-post.png` : '';
  const postCaption = label === 'OnlyTojjiichi'
    ? '"Man I gotta get a new phone...cameras busted "'
    : 'The ONLY ONE — my newest novel. Link in bio.';
  const isPrivate = label === 'official.Tatsuya';
  const stats = label === 'OnlyTojjiichi' ? {posts: 128, following: 197, followers: 1972}
    : label === 'official.Tatsuya' ? {posts: 42, following: 320, followers: '250K'}
    : label === 'AkohitoSaionji' ? {posts: 402, following: 18, followers: '53.2 M'}
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
        ${novelLink}
        ${albumLink}
      </div>
    </div>
    ${postImage ? `
      <div class="card toji-post">
        <img class="toji-post-image" src="${postImage}" alt="${label} post">
        <div class="toji-post-caption">${postCaption}</div>
      </div>
    ` : ''}
    ${chatThread}</section>`;

  document.querySelector(".back-btn").addEventListener("click", () => renderInsta());
  document.querySelectorAll("[data-fake-link]").forEach(link => {
    link.addEventListener("click", event => event.preventDefault());
  });
  const chatDialog = document.querySelector(".chat-dialog");
  if(chatDialog){
    const thread = messageThreads[threadKey];
    const chatLog = chatDialog.querySelector(".chat-messages");
    const messageButton = document.querySelector(".message-btn");
    messageButton.addEventListener("click", () => {
      chatDialog.showModal();
      chatLog.scrollTop = chatLog.scrollHeight;
    });
    chatDialog.querySelector(".chat-close").addEventListener("click", () => chatDialog.close());
    chatDialog.addEventListener("click", event => {
      if(event.target === chatDialog) chatDialog.close();
    });
    chatDialog.querySelector(".chat-compose").addEventListener("submit", event => {
      event.preventDefault();
      const input = chatDialog.querySelector("#profile-message-input");
      const text = input.value.trim();
      if(!text) return;
      thread.push({sender:"MC", text});
      renderCharacterProfile(name);
      const updatedDialog = document.querySelector(".chat-dialog");
      updatedDialog.showModal();
      updatedDialog.querySelector(".chat-messages").scrollTop = updatedDialog.querySelector(".chat-messages").scrollHeight;
    });
  }
}

function renderEmpty(title, icon, desc){
  app.innerHTML = pageHeader(title,"This section is ready for you to fill in.") +
    `<div class="empty"><div class="empty-inner"><div class="big">${icon}</div><h3>Coming soon</h3><p>${desc}</p></div></div>`;
}

function renderPhotos(){
  app.innerHTML = pageHeader("Photos","A saved copy of the photos and images shared throughout your phone.") +
    `<section class="photo-album" aria-label="Photo album">
      <div class="photo-album-heading"><span>ALL PHOTOS</span><strong>${photoAlbum.length} ITEMS</strong></div>
      <div class="photo-album-grid">
        ${photoAlbum.map((photo,index) => `
          <figure class="photo-album-item">
            <button class="photo-album-open" type="button" data-photo-index="${index}" aria-label="Enlarge ${photo.title}">
              <img src="${photo.src}" alt="" loading="lazy">
            </button>
            <figcaption>${photo.title}</figcaption>
          </figure>
        `).join("")}
      </div>
      <p class="photo-album-note">These are album copies. Photos remain in their original chats and profiles.</p>
    </section>
    <dialog class="photo-viewer" aria-label="Enlarged photo viewer" tabindex="-1">
      <button class="photo-viewer-close" type="button" aria-label="Close photo viewer">×</button>
      <button class="photo-viewer-nav photo-viewer-previous" type="button" aria-label="Previous photo">‹</button>
      <figure class="photo-viewer-content">
        <img class="photo-viewer-image" alt="">
        <figcaption class="photo-viewer-caption"></figcaption>
      </figure>
      <button class="photo-viewer-nav photo-viewer-next" type="button" aria-label="Next photo">›</button>
    </dialog>`;

  const dialog = document.querySelector(".photo-viewer");
  const viewerImage = dialog.querySelector(".photo-viewer-image");
  const viewerCaption = dialog.querySelector(".photo-viewer-caption");
  let activeIndex = 0;

  const showPhoto = index => {
    activeIndex = (index + photoAlbum.length) % photoAlbum.length;
    const photo = photoAlbum[activeIndex];
    viewerImage.src = photo.src;
    viewerImage.alt = photo.title;
    viewerCaption.textContent = `${photo.title} · ${activeIndex + 1} of ${photoAlbum.length}`;
  };

  document.querySelectorAll(".photo-album-open").forEach(button => {
    button.addEventListener("click", () => {
      showPhoto(Number(button.dataset.photoIndex));
      dialog.showModal();
    });
  });
  dialog.querySelector(".photo-viewer-close").addEventListener("click", () => dialog.close());
  dialog.querySelector(".photo-viewer-previous").addEventListener("click", () => showPhoto(activeIndex - 1));
  dialog.querySelector(".photo-viewer-next").addEventListener("click", () => showPhoto(activeIndex + 1));
  dialog.addEventListener("click", event => {
    if(event.target === dialog) dialog.close();
  });
  dialog.addEventListener("keydown", event => {
    if(event.key === "ArrowLeft" || event.key === "ArrowRight"){
      event.preventDefault();
      showPhoto(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
}

function renderReminderz(){
  app.innerHTML = pageHeader("Reminderz","A running list of things to do and questions to answer.") +
    `<section class="reminder-list" aria-labelledby="reminder-list-title">
      <header class="reminder-list-header">
        <div>
          <span class="reminder-list-kicker">MY LIST</span>
          <h2 id="reminder-list-title">TO DO</h2>
        </div>
        <span class="reminder-count">${reminders.length} REMINDERS</span>
      </header>
      <ol class="reminder-items">
        ${reminders.map((reminder,index) => `
          <li class="reminder-item">
            <span class="reminder-number">${String(index + 1).padStart(2,"0")}</span>
            <p>${reminder}</p>
          </li>
        `).join("")}
      </ol>
    </section>`;
}

function renderFiles(folder = "", selectedFile = ""){
  const folders = folder ? [] : [{name:"Character Dossiers", path:"characters"}];
  const files = folder === "characters"
    ? characterFiles.map(file => ({name:`${file.title}.txt`, title:file.title, text:file.text}))
    : folder === "" ? [{
      name:"USER.txt",
      title:"USER",
      text:"Wealthy family, parents murdered, wats her autonomy"
    }] : [];
  const selected = files.find(file => file.name === selectedFile);
  const searchQuery = (document.querySelector(".files-search")?.value || "").trim().toLowerCase();
  const visibleFolders = folders.filter(item => item.name.toLowerCase().includes(searchQuery));
  const visibleFiles = files.filter(file => file.name.toLowerCase().includes(searchQuery));
  const location = folder ? "Character Dossiers" : "On My Phone";

  app.innerHTML = pageHeader("Files","Browse your saved story documents.") +
    `<section class="files-app" aria-label="Files">
      <div class="files-toolbar">
        <button class="files-back" type="button" ${folder || selected ? "" : "disabled"} aria-label="Go to parent folder">‹ <span>Browse</span></button>
        <h2>${selected ? escapeHTML(selected.name) : location}</h2>
        <span class="files-item-count">${selected ? "Preview" : `${visibleFolders.length + visibleFiles.length} items`}</span>
      </div>
      ${selected ? "" : `<label class="files-search-wrap">
        <span aria-hidden="true">⌕</span>
        <input class="files-search" type="search" placeholder="Search this folder" aria-label="Search this folder">
      </label>`}
      ${selected ? `
        <article class="files-preview">
          <div class="files-preview-meta"><span>TEXT DOCUMENT</span><span>${folder ? "CHARACTER DOSSIER" : "STORY FILE"}</span></div>
          <h3>${escapeHTML(selected.title)}</h3>
          <p>${escapeHTML(selected.text)}</p>
        </article>
      ` : `
        <div class="files-list" aria-label="${location} contents">
          ${visibleFolders.map(item => `
            <button class="files-row files-folder-row" type="button" data-folder="${item.path}">
              <span class="files-row-icon folder-icon" aria-hidden="true">📁</span>
              <span class="files-row-copy"><strong>${item.name}</strong><small>Folder · ${characterFiles.length} items</small></span>
              <span class="files-row-chevron" aria-hidden="true">›</span>
            </button>
          `).join("")}
          ${visibleFiles.map(file => `
            <button class="files-row" type="button" data-file="${escapeHTML(file.name)}">
              <span class="files-row-icon document-icon" aria-hidden="true">▤</span>
              <span class="files-row-copy"><strong>${escapeHTML(file.name)}</strong><small>Text document</small></span>
              <span class="files-row-chevron" aria-hidden="true">›</span>
            </button>
          `).join("")}
          ${visibleFiles.length === 0 && visibleFolders.length === 0 ? '<p class="files-empty">No matching files in this folder.</p>' : ""}
        </div>
      `}
    </section>`;

  const backButton = document.querySelector(".files-back");
  if((folder || selected) && backButton) backButton.addEventListener("click", () => renderFiles(folder));
  document.querySelectorAll("[data-folder]").forEach(button => {
    button.addEventListener("click", () => renderFiles(button.dataset.folder));
  });
  document.querySelectorAll("[data-file]").forEach(button => {
    button.addEventListener("click", () => renderFiles(folder, button.dataset.file));
  });
  const search = document.querySelector(".files-search");
  if(search) search.addEventListener("input", () => {
    const cursor = search.selectionStart;
    renderFiles(folder);
    const updatedSearch = document.querySelector(".files-search");
    updatedSearch.value = search.value;
    updatedSearch.focus();
    updatedSearch.setSelectionRange(cursor, cursor);
  });
}

function renderNotes(selected = "Itsuki"){
  const keys = Object.keys(characterNotes);
  const current = characterNotes[selected] || characterNotes.Itsuki;
  const currentIndex = keys.indexOf(selected) + 1;

  app.innerHTML = pageHeader("Notes","Character files and story details.") +
    `<div class="notes-shell">
      <details class="note-selector" open>
        <summary>Character files <span>Show or hide names</span></summary>
        <nav class="note-tabs" aria-label="Character files">
          ${keys.map((name,index) => `
          <button class="note-page-tab ${name===selected?"active":""}" type="button" data-note-char="${name}" aria-current="${name===selected?"page":"false"}">
            <span>${characterNotes[name].title}</span><span class="note-index">${String(index + 1).padStart(2,"0")}</span>
          </button>
        `).join("")}
        </nav>
      </details>
      <article class="card notes-page">
        <div class="notes-page-meta"><span>Character file</span><span>FILE ${String(currentIndex).padStart(2,"0")} / ${String(keys.length).padStart(2,"0")}</span></div>
        <h3>${current.title}</h3>
        <p>${current.text}</p>
      </article>
    </div>`;

  document.querySelectorAll(".note-page-tab").forEach(button => {
    button.addEventListener("click", () => renderNotes(button.dataset.noteChar));
  });
}

function renderHome(){
  const homeApps = [
    {page:"maps", label:"Maps", icon:"⌖", color:"green"},
    {page:"instapic", label:"InstaPic", icon:"◎", color:"rose"},
    {page:"messages", label:"Messages", icon:"✉", color:"blue"},
    {page:"calendar", label:"Calendar", icon:"□", color:"peach"},
    {page:"photos", label:"Photos", icon:"♡", color:"lavender"},
    {page:"notes", label:"Notes", icon:"✦", color:"yellow"},
    {page:"reminderz", label:"Reminderz", icon:"✓", color:"mint"},
    {page:"files", label:"Files", icon:"📁", color:"blue"},
  ];

  app.innerHTML = `
    <section class="home-screen" aria-label="Home screen">
      <div class="story-widget">
        <div class="eyebrow">YOUR NEXT CHAPTER</div>
        <h3>Five Men<br>and a Fallen Heiress</h3>
        <p>Your old life is gone.<br>A new story is just a tap away.</p>
        <button class="enter-btn" type="button" data-action="maps">Enter story <span>→</span></button>
      </div>

      <div class="home-grid">
        ${homeApps.map((item) => `
          <button class="home-app home-app-${item.color}" type="button" data-page="${item.page}" aria-label="Open ${item.label}">
            <span class="home-app-icon">${item.icon}</span>
            <span>${item.label}</span>
          </button>
        `).join("")}
      </div>

      <div class="home-footer">
        <span class="dot"></span>
        <span>YOUR WORLD, IN YOUR POCKET</span>
      </div>
    </section>`;

  document.querySelectorAll(".home-app").forEach(button => {
    button.addEventListener("click", () => show(button.dataset.page));
  });

  const enterBtn = document.querySelector(".story-widget .enter-btn");
  if(enterBtn) {
    enterBtn.addEventListener("click", () => {
      window.open("https://ooc.ai/s/6ac87e9bdb2c408276d12229", "_blank", "noopener,noreferrer");
    });
  }
}

function updateClock(){
  const now = new Date();
  const time = now.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});
  if(statusTime) statusTime.textContent = time;
}

function show(page){
  navs.forEach(n => n.classList.toggle("active", n.dataset.page === page));
  const pageTitle = page === "home" ? "Home" : page === "maps" ? "Maps" : page === "instapic" ? "InstaPic" : page === "messages" ? "Messages" : page === "calendar" ? "Calendar" : page === "photos" ? "Photos" : page === "reminderz" ? "Reminderz" : page === "files" ? "Files" : "Notes";
  const pageIcon = page === "home" ? "home" : page;

  const hero = document.querySelector(".hero");
  if(hero) hero.hidden = true;

  if(appToolbar){
    appToolbar.hidden = page === "home";
  }
  if(appTitle) appTitle.textContent = pageTitle;
  if(toolbarSymbol) toolbarSymbol.setAttribute("href", `#icon-${pageIcon}`);

  if(page === "home") {
    renderHome();
  } else if(page === "maps") {
    renderMaps();
  } else if(page === "instapic") {
    renderInsta();
  } else if(page === "messages") {
    renderMessages();
  } else if(page === "calendar") {
    renderEmpty("Calendar","♡","Your schedule and story events can be added here later.");
  } else if(page === "photos") {
    renderPhotos();
  } else if(page === "notes") {
    renderNotes();
  } else if(page === "reminderz") {
    renderReminderz();
  } else if(page === "files") {
    renderFiles();
  }

  app.scrollTo({top:0,behavior:"smooth"});
}

navs.forEach(n => n.addEventListener("click", () => show(n.dataset.page)));
dockApps.forEach(button => button.addEventListener("click", () => show(button.dataset.page)));
if(homeIndicator) homeIndicator.addEventListener("click", () => show("home"));
if(homeBack) homeBack.addEventListener("click", () => show("home"));
document.querySelector(".enter-btn").addEventListener("click", () => {
  window.open("https://ooc.ai/s/6ac87e9bdb2c408276d12229", "_blank", "noopener,noreferrer");
});
updateClock();
setInterval(updateClock, 30000);
show("home");
