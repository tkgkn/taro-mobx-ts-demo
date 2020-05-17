import { observable } from 'mobx';

class TestStore {
	@observable name = 'hello world';
}

export default TestStore;
