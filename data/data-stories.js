class Story {
      constructor(id, date, name, author, article) {
            this.date = date;
            this.id = id;
            this.name = name;
            this.author = author;
            this.article = article
      }
}

let storiesData = []

let mountains = new Story(1, `April 16th 2020`, `The Mountains`, `John Appleseed`,`the mountains.txt`)
storiesData.push(mountains)
let sunset = new Story(2, `April 14th 2020`, `Sunset Cityscapes`, `Benjamin Cruz`,`sunset cityscapes.txt`)
storiesData.push(sunset);
let voyage = new Story(3, `April 11th 2020`, `18 Days Voyage`, `Alexei Borodin`,`18 days voyage.txt`)
storiesData.push(voyage);
let architecturals = new Story(4, `April 9th 2020`, `Architecturals`, `Samanatha Brooke`,`architecturals.txt`)
storiesData.push(architecturals);
let tour = new Story(5, `April 7th 2020`, `World Tour 2019`, `Timothy Wagner`,`world tour 2019.txt`)
storiesData.push(tour);
let corners = new Story(6, `April 3rd 2020`, `Unforeseen Corners`, `William Malcolm`,`unforeseen corners.txt`)
storiesData.push(corners);
let africa = new Story(7, `March 29th 2020`, `King of Africa: Part II`, `Tim Hillenburg`,`king of africa.txt`)
storiesData.push(africa);
let nowhere = new Story(8, `March 21st 2020`, `The Trip to Nowhere`, `Felicia Rourke`,`the trip to nowhere.txt`)
storiesData.push(nowhere);
let rage = new Story(9, `March 19th 2020`, `Rage of The Sea`, `Mohammed Abdul`,`rage of the sea.txt`)
storiesData.push(rage);
let running = new Story(10, `March 16th 2020`, `Running Free`, `Michelle Vega`,`running free.txt`)
storiesData.push(running);
let waves = new Story(11, `March 11th 2020`, `Behind the Waves`, `Lamar Wilson`,`behind the waves.txt`)
storiesData.push(waves);
let waters = new Story(12, `March 9th 2020`, `Calm Waters`, `Samantha Brooke`,`calm waters.txt`)
storiesData.push(waters);
let milkyway = new Story(13, `March 5th 2020`, `The Milky Way`, `Benjamin Cruz`,`the milky way.txt`)
storiesData.push(milkyway);
let darkforest = new Story(14, `March 4th 2020`, `Night at The Dark Forest`, `Mohammed Abdul`,`night at the dark forest.txt`)
storiesData.push(darkforest);
let beauty = new Story(15, `March 1st 2020`, `Goa's Beauty`, `Michelle Vega`,`goa's beauty.txt`)
storiesData.push(beauty);
let dreams = new Story(16, `February 25th 2020`, `Land of Dreams`, `William Malcolm`,`land of dreams.txt`)
storiesData.push(dreams);

module.exports = storiesData
