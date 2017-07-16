/**
 * Created by hakobpogh on 7/16/17.
 */

const guid4 = () => Math.random().toString(16).substr(2, 4);
const createGUID = () => guid4() + guid4() + '-' + guid4() + '-' + guid4() + '-' + guid4() + '-' + guid4() + guid4() + guid4();

export class UserInfo {
  id?: string = createGUID();
  name: string;
  surname: string;
  age: number;
  isNew?: boolean;

  constructor(data: UserInfo) {
    if (data.id) {
      this.id = data.id;
    }
    this.name = data.name;
    this.surname = data.surname;
    this.age = data.age;
    this.isNew = data.isNew;
  }
}
