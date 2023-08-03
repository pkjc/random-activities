function openRandomURL() {
  const urls = [
    "http://zerodollarmovies.com/",
    "https://www.youtube.com/playlist?list=PLbpi6ZahtOH4MdGuF3ZLHbU8A3Polu1MD",
    "https://moderndayjobs.com/",
    "https://2.flexiple.com/founder-origin-stories/all-founders",
    "https://podcasts.google.com/",
    "https://donottouchyourface.com/",
    "https://www.udemy.com/courses/free/",
    "https://remoteworkers.dev/",
    "https://www.amazon.com/125-Best-Brain-Teasers-Time/dp/1641520086",
    "https://projects.fivethirtyeight.com/how-to-vote-2020/",
    "https://coursesity.com/",
    "https://www.ceros.com/originals/tiktok-dances/",
    "https://www.kapwing.com/museum-of-websites",
    "https://amiunique.org/",
    "https://www.usefluent.co/",
    "https://songperday.com/",
    "https://skillhq.io/",
    "https://beta.readng.co/",
    "https://www.courserock.com/photography",
    "https://betalist.com/startups/virtual-assembly?utm_source=newsletter_mailer&utm_medium=email&utm_campaign=roundup",
    "https://documentaryheaven.com/",
    "https://www.ted.com/playlists/239/the_most_jaw_dropping_ted_talk",
    "https://awkwardfamilyphotos.com/",
    "https://www.ocearch.org/tracker/?list",
    "https://virtualvacation.us/",
    "https://whattowatchon.tv/",
    "https://howlongtoread.com/",
    "https://www.getbadnews.com/#intro",
    "https://www.incredibox.com/",
    "https://2020helped.me/",
    "https://soundofcolleagues.com/#",
    "https://canigooutsideyet.com/",
    "https://uselesscertifications.com/",
    "https://listenbox.app/",
    "https://www.youtube.com/user/klaatu42",
    "http://sciencehack.com/",
    "http://explosm.net/comics/latest",
    "https://garfieldminusgarfield.net/",
    "https://www.mapcrunch.com/",
    "https://www.prankdial.com/",
    "http://www.peopleofwalmart.com/",
    "https://www.theonion.com/",
    "https://lettertomyfutureself.net/write-letter.php",
    "https://postcorona.me/",
    "https://www.co-train.space/",
    "https://vemos.org/",
    "https://www.how-old.net/",
    "https://artsandculture.google.com/partner",
    "https://stadia.google.com/",
    "https://tabletopia.com/",
    "https://www.cardsagainsthumanity.com/",
    "https://join.robinhood.com/pankajc41",
    "https://www.youtube.com/playlist?list=PLB0B9B789FACC849E",
    "https://www.google.com/doodles",
    "https://www.youtube.com/channel/UCTQa-0hkUXGzmB5nsaDz2TQ/featured",
    "https://www.sheddaquarium.org/exhibits/underwater-beauty-exhibit",
    "https://artsandculture.google.com/project/harry-potter-a-history-of-magic",
    "https://distancedisco.nl/",
    "https://theneighborlyapp.com/",
    "https://www.playhearts.cards/",
    "https://outsidesimulator.com/",
    "https://noel.fun/",
    "https://masterwiki.how/",
    "https://www.funbrain.com/",
    "https://findtheinvisiblecow.com/",
    "https://www.geoguessr.com/",
    "https://en.akinator.com/",
    "https://artsandculture.google.com/exhibit/the-journey/ZgLSRWBwxUB9Ig",
    "https://www.inaturalist.org/",
    "http://waitbutwhy.com/",
    "https://codepen.io/akm2/full/rHIsa",
    "http://www.animalplanet.com/tv-shows/puppy-bowl/games-and-more/puppy-cam/",
    "https://xkcd.com/",
    "https://www.wizardingworld.com/",
    "https://www.howstuffworks.com/",
    "http://stars.chromeexperiments.com/",
    "https://alwaysjudgeabookbyitscover.com/",
    "https://world.time.com/timelapse/",
    "https://smashthewalls.com/",
    "http://www.staggeringbeauty.com/",
    "https://cat-bounce.com/",
    "https://mubi.com/showing",
    "https://honestslogans.com/",
    "https://www.rainymood.com/",
    "https://iwastesomuchtime.com/",
    "http://theofficestaremachine.com/",
    "https://www.onread.com/",
    "https://www.thisamericanlife.org/",
    "https://en.wikipedia.org/wiki/List_of_conspiracy_theories",
    "https://www.autodraw.com/",
    "https://fast.com/",
    "https://www.remove.bg/",
    "https://www.homestyler.com/int/",
    "http://www.websudoku.com/",
    "https://ncase.me/trust/",
    "https://window-swap.com/",
    "https://giphy.com/",
    "http://www.donothingfor2minutes.com/",
    "https://onetinyhand.com/",
    "https://www.tis.tv/",
    "https://thedisneyplusparty.com/",
    "https://doozy.live/",
    "https://deepstash.com/",
    "https://youtubeparty.netlify.app",
    "https://www.minutehq.com/",
    "http://shipyourenemiesglitter.com/",
    "https://www.familiar.wtf/",
    "http://clonezone.link/",
    "https://starwarsintrocreator.kassellabs.io/",
    "http://walla.me/",
    "https://wfh.ninja/",
    "https://puns.samueltaylor.org/",
    "http://www.wtfshouldidowithmylife.com/"];
  const randomIndex = Math.floor(Math.random() * urls.length);
  const randomURL = urls[randomIndex];
  window.open(randomURL, '_blank');
}
