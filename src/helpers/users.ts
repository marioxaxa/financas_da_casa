import { User } from '../@types/UserClass';

export default function testUsers() {

    var testUsers: Array<User> = []

    testUsers.push(new User(1,'fernando', 'fenrnado12'))

    testUsers.push(new User(2,'juan', 'juan12'))

    testUsers.push(new User(3,'maria', 'maria12'))

    return testUsers
}