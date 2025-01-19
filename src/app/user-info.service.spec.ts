import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserInfoService } from './user-info.service';

describe('UserInfoService', () => {
  let service: UserInfoService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserInfoService]
    });
    service = TestBed.inject(UserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get user first name', () => {
    
    service.getUserInfo().subscribe(userInfo => {
      expect(userInfo.firstName).toBe('Mohamed Walid');
    });
    
  });

  it('should have get user last name', () => {
    
    service.getUserInfo().subscribe(userInfo => {
      expect(userInfo.lastName).toBe('Mzoughi');
    });
    
  });
});
