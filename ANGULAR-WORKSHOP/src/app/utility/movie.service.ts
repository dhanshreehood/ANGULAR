import { Injectable } from '@angular/core';
import { Movies } from './Movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movies[] = [
    {
      "movieId": 1001,
      "movieCategory": "Horror",
      "title": "The Orphan: first kill",
      "poster": "../assets/images/horror.jpg",
      "directorName": "xyz sharma",
      "releaseDate": new Date("09/12/2000"),
      "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."
  },

{ 
  "movieId": 1002, 
  "movieCategory": "Comedy", 
  "title": "The Man from Toronto", 
  "poster": "../assets/images/toronto.jpg", 
  "directorName": "pqrs chauhan", 
  "releaseDate": new Date("13/07/2001"), 
  "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."
},

{ 
  "movieId": 1003,
  "movieCategory": "Romance", 
  "title": "Titanic", "poster": "../assets/images/titanic.jpg", 
  "directorName": "pqrs chauhan", 
  "releaseDate": new Date("10/11/2006"), 
  "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."
},

{
  "movieId": 1004, 
  "movieCategory": "Adventure", 
  "title": "The Lost City", 
  "poster": "../assets/images/lost-city.jpg", 
  "directorName": "pqrs chauhan", 
  "releaseDate": new Date("09/11/2006"),
  "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."
},

{ 
  "movieId": 1005, 
  "movieCategory": "Historical", 
  "title": "Jodha Akbar", 
  "poster": "../assets/images/jodha.jpg", 
  "directorName": "pqrs chauhan", 
  "releaseDate": new Date("03/08/2021"), 
  "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."

},

{
  "movieId": 1006, 
  "movieCategory": "Crime", 
  "title": "John Wick", 
  "poster": "../assets/images/john-wick.jpg", 
  "directorName": "pqrs chauhan", 
  "releaseDate": new Date("11/06/1988"),
  "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."
},

{
  "movieId": 1007, 
  "movieCategory": "Mystery", 
  "title": "My Son", 
  "poster": "../assets/images/my-son.jpg", 
  "directorName": "pqrs chauhan", 
  "releaseDate": new Date("02/01/1966"), 
  "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."

},

{ 
  "movieId": 1008, 
  "movieCategory": "Thriller", 
  "title": "Us", 
  "poster": "../assets/images/us.jpg", 
  "directorName": "pqrs chauhan", 
  "releaseDate": new Date("10/01/1956"), 
  "details": "Orphan: First Kill is a 2022 psychological horror-thriller slasher film that serves as a prequel to the 2009 film Orphan. Directed by William Brent Bell, it was written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace (who wrote the screenplay and story to the predecessor, respectively). Financed by eOne, Dark Castle Entertainment, Sierra/Affinity, and Eagle Vision, it stars Isabelle Fuhrman reprising her role from the previous film, with Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan also starring. Originally with the working title of Esther, the project was announced in February 2020. The official title was revealed in November that same year, with Fuhrman reprising her role as Esther.Filming took place in Winnipeg, Canada, from November to December 2020. Orphan: First Kill premiered first in other territories starting in the Philippines on July 27, 2022, and was released in the United States on August 19, by Paramount Players in select theatres, digital, and streaming via Paramount+.The film has grossed $37 million worldwide and received mixed reviews from critics, who praised the film's twists, practical effects (in regard to de-aging Fuhrman without CGI) and Fuhrman's performance, but criticized its story and inconsistencies."
}
]
constructor() { }

getAllMovies(): Movies[]{
  return this.movies;
}

getById(id: number):any{
  return this.movies.find(movies => movies.movieId == id);
}
}
