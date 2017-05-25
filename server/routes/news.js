var express = require('express');
var router = express.Router();

/* GET news */
router.get('/', function(req, res, next) {
    news = [{
        'url': 'https://www.nytimes.com/2017/05/23/world/europe/manchester-arena-attack-ariana-grande.html?hp&action=click&pgtype=Homepage&clickSource=nytmm_FadingSlideShow_item&module=b-lede-package-region&region=top-news&WT.nav=top-news&_r=0',
        'title': 'Salman Abedi, 22, Is Identified as Manchester Arena Bomber',
        'description': 'MANCHESTER, England — A 22-year-old British man whose parents had emigrated from Libya was identified by the police on Tuesday as the bomber who carried out Britain’s deadliest terrorist attack since 2005, an explosion that killed 22 people and injured 59 others at Manchester Arena.',
        'source': 'nytimes',
        'urlToImage': 'https://static01.nyt.com/images/2017/05/24/world/24Manchester1/24Manchester1-superJumbo.jpg',
        'digest': '1',
        'reason': 'recommended',
        'time': 'today'
    }, {
        'url': 'https://www.nytimes.com/2017/05/23/world/europe/uk-manchester-attack-survivors.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=b-lede-package-region&region=top-news&WT.nav=top-news',
        'title': 'In Manchester, a Loud Bang, Silence, Then: Loads of Girls Screaming',
        'description': 'MANCHESTER, England — It was that moment after the music ends. The pop star, Ariana Grande, had finished the encore of her “Dangerous Woman” concert, and the shrieks of teenagers and others had subsided. The stage show was over, the arena lights had gone up, and fans were clutching pink balloons that had dropped from the rafters — souvenirs from a special night.',
        'source': 'nytimes',
        'urlToImage': 'https://static01.nyt.com/images/2017/05/24/world/24Manchester1/24Manchester1-superJumbo.jpg',
        'digest': '2',
        'reason': 'hot',
        'time': 'yesterday'
    }, {
        'url': 'https://www.nytimes.com/2017/05/23/sports/2018-winter-olympics-pyeongchang-north-south-korea.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=second-column-region&region=top-news&WT.nav=top-news',
        'title': 'With the 2018 Olympics in South Korea, Will the North Be Participant or Provocateur?',
        'description': 'As preparations accelerate for the 2018 Winter Olympics in South Korea, sporting relations on the divided Korean Peninsula in recent years have seldom appeared more amicable, despite the building nuclear tensions and escalating talk of war.',
        'source': 'nytimes',
        'urlToImage': 'https://static01.nyt.com/images/2017/05/24/world/24Manchester1/24Manchester1-superJumbo.jpg',
        'digest': '3',
        'reason': 'hot',
        'time': 'today'
    }]
    res.json(news);
});

module.exports = router;
