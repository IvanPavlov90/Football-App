export interface ClubRequest {
  _leagueId: String,
  clubName: String,
  image: string | null | ArrayBuffer,
  f_year: Number,
  city: String,
  stadium: String,
  history: String,
}

export interface ClubResponse extends ClubRequest {
  image: string,
  id: string,
}