let latestArticles = [{
    "thumbnail": "https://i.postimg.cc/y62Mcs9s/Andrew-Neil-destroys-Ben-Shapiro-in-BBC-interview-0-1-screensh.png",
    "blogTitle": "Ben Shapiro Gets DESTROYED",
    "blogPreviewText": "There’s a clip going viral on the internet involving Ben Shapiro in a heated argument with a ‘Leftist’. That word is stressed in single quotes because Ben Shapiro referred to Andrew Neil, the former chairman of the Federation of Conservative Students, a Leftist. Oh Boy!",
    "fullBlogLink": "https://blog.allindiadankmemes.in/Ben-Shapiro/",
    "publishedDate": "2019-05-12T00:00:00.000Z"

  },
  {
    "thumbnail": "https://i.postimg.cc/3JdwJ8hh/BN-QC310-indrbi-M-20161004055501.jpg",
    "blogTitle": "Urjit Patel Resigns; Rupee Set For A Downfall",
    "blogPreviewText": "Markets are closed right now, on this unfortunate day, but rather unsurprising news. However, we are soon going to see an impact of it tomorrow when the bell rings. The Rupee is expected to fall down and the financial markets are also set to take a dive due to today’s events. The RBI Governor Urjit Patel has resigned citing personal reasons. Although at this point, the entire country knows that it is due to the interference of Government in the autonomy of RBI. Forcing RBI to turn a blind eye for the release of funds for Medium and small-scale enterprises, which were largely political ambitions of the government, seems to be the main reason behind this resignation.",
    "fullBlogLink": "https://blog.allindiadankmemes.in/Urjit-Patel-Resigns/",
    "publishedDate": "2018-12-10T22:12:03.284Z"

  },
  {
    "thumbnail": "https://i.postimg.cc/MHd2yQ8T/law-for-memes.png",
    "blogTitle": "Why do we need a separate law for memes in India?",
    "blogPreviewText": "Memes are offensive to people at times. And edgy stuff like that has always been in controversy on social media and IRL in India. Being a dank meme page owner, I always get hate messages, threats and dick pics(and I don’t think it is because I’m cute). Religion, politicians, sportspersons, actors…, if you mock any of these, you are in trouble. It is like “how",
    "fullBlogLink": "https://blog.allindiadankmemes.in/separate-law-for-memes/",
    "publishedDate": "2018-12-07T22:12:03.284Z"

  }
]



// generating latest blog preview cards:


let latestBlogsPreviewCards = document.querySelector('.latestBlogsPreviewCards');



function eachBlogCard() {

  for (let i = 0; i < latestArticles.length; i++) {

    // console.log("latestArticles");
    // console.log(latestArticles);
    let thumbnail = latestArticles[i].thumbnail;
    let blogTitle = latestArticles[i].blogTitle;
    let blogPreviewText = latestArticles[i].blogPreviewText.slice(0, 200) + `${"..."}`;
    let fullBlogLink = latestArticles[i].fullBlogLink;
    
    
    // Formatting date and time;
    let blogPubDate = latestArticles[i].publishedDate; //2019-05-12T22:12:03.284Z
    let _year = blogPubDate.slice(0, 4);
    let _month = blogPubDate.slice(5, 7) - 1;
    let date = blogPubDate.slice(8, 10);
let _hours = blogPubDate.slice(11,13);
 
let full__date = new Date(_year, _month, date);
    
// console.log(full__date);

    //   formatting superscript for dates
    if (date == 1 || date == 21 || date == 31) {
      date = date + "<sup>" + "st " + "</sup>";
    } else if (date == 2 || date == 22) {
      date = date + "<sup>" + "nd " + "</sup>";
    } else if (date == 3 || date == 23) {
      date = date + "<sup>" + "rd " + "</sup>";
    } else {
      date = date + "<sup>" + "th " + "</sup>";
    }



    // console.log(date);
    
    
    let publishedDate = `${date} ${monthlist[full__date.getMonth()]} ${full__date.getFullYear()}`; 


    let cardDiv = document.createElement("div")
    cardDiv.className = 'card';
    cardDiv.innerHTML = `<div class="card-image"><img src="${thumbnail}" alt="Blog ${i}-image"></div><div class="card-content"><div class="published-date"><span role="img" aria-label="calender"><img src="https://img.icons8.com/dusk/16/000000/calendar.png"></span> ${publishedDate}</div><h2 class="card-title">${blogTitle}</h2><p class="blog-content-preview">${blogPreviewText}</p> <p class="continue-link">
    <a href="${fullBlogLink}" class="continueReading" target="_blank" rel="noreferrer noopener">Continue reading →</a>
</p></div>`







    latestBlogsPreviewCards.appendChild(cardDiv);





  }



}
eachBlogCard();