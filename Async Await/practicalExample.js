const async = require('asyncawait/async');
const await = require('asyncawait/await');

const testUserForm = async() => {

	const loadUserForm = new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve('page loaded');
		}, 3000);
	});
	const enterUserName = new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve('user name entered');
		}, 3000);
	});
	const verifyUserDetails = () => {
		return 'user details verified';
	};

	await loadUserForm;
	await enterUserName;

	const testResults = verifyUserDetails();

	return testResults;
};

testUserForm().then((result) => console.log(`Result: ${result}`));