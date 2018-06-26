import { login, logout } from '../../actions/auth';

test('should create login action object', () => {
    const uid = 'dsf546df';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should create logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});