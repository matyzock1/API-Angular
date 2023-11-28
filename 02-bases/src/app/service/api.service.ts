import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi).pipe(
      mergeMap((characters: any[]) => {
        const episodeRequests = characters.map((character) => {
          return this.getEpisodeNames(character.episode);
        });
        return forkJoin(episodeRequests).pipe(
          map((episodes: any[]) => {
            characters.forEach((character, index) => {
              character.episodeNames = episodes[index];
            });
            return characters;
          })
        );
      })
    );
  }

  public getDataByCharacterNumber(characterNumber: number): Observable<any[]> {
    const url = `${this.urlApi}/${characterNumber}`;
    return this.http.get<any>(url).pipe(
      mergeMap((character) => {
        return this.getEpisodeNames(character.episode).pipe(
          map((episodeNames) => {
            character.episodeNames = episodeNames;
            return [character];
          })
        );
      })
    );
  }

  private getEpisodeNames(episodeUrls: string[]): Observable<string[]> {
    const episodeRequests = episodeUrls.map(url => this.http.get<any>(url));
    return forkJoin(episodeRequests).pipe(
      map((episodes: any[]) => {
        return episodes.map(episode => episode.name);
      })
    );
  }
}

