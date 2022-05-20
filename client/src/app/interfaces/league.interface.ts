export interface LeagueRequest {
  leagueName: string,
  image: string | ArrayBuffer | null,
}

export interface LeagueResponse extends LeagueRequest {
  image: string,
  id: string,
}