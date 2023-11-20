import loadUser from "../loadUser";
import {httpGet} from "../http";
jest.mock('../http') //говорим, что именно этот файл должен стать моком

beforeEach(() => { //выполняем каждый раз, когда запускается тест
    jest.resetAllMocks() //сбрасываем все моки
});
test('should call loadUser once', () => { //должен вернуть в строковом эквиваленте объект
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1')
})