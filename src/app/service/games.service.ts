import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Customer, CustomerFrequent } from '../customer/customer.page';
import { Game, GameFrequent } from '../games/games.page';
import { Loan } from '../loans/loans.page';

@Injectable({
  providedIn: 'root'
})
export class GamesService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getCustomers(){
    return this.httpClient.get<Customer[]>(`${API_URL}/customer/getCustomers`);
  }

  getGames(){
    return this.httpClient.get<Game[]>(`${API_URL}/game/getGames`);
  }

  getTodaysLoans(){
    return this.httpClient.get<Loan[]>(`${API_URL}/loan/getTodaysLoans`);
  }

  saveCustomer(customer){
    return this.httpClient.post(`${API_URL}/customer/save`, customer);
  }

  saveGame(game){
    return this.httpClient.post(`${API_URL}/game/save`, game);
  }

  saveLoan(loan){
    return this.httpClient.post(`${API_URL}/loan/save`, loan);
  }

  updateGame(game){
    return this.httpClient.put(`${API_URL}/game/update`, game);
  }

  getFrequentCustomers(){
    return this.httpClient.get<CustomerFrequent[]>(`${API_URL}/customer/getCustomersFrequent`);
  }

  getGameFrequent(){
    return this.httpClient.get<GameFrequent[]>(`${API_URL}/game/getGameFrequent`);
  }

  getGameByKeyword(keyword){
    return this.httpClient.get<Game[]>(`${API_URL}/game/getGameByKeyword/${keyword}`);
  }

  getCustomerById(id){
    return this.httpClient.get<Customer>(`${API_URL}/customer/getCustomerById/${id}`);
  }

  getGameById(id){
    return this.httpClient.get<Game>(`${API_URL}/game/getGameById/${id}`);
  }

}
